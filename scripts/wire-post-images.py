#!/usr/bin/env python3
"""
Wire generated branded images into existing blog posts, fully SEO'd for search, voice,
and AI crawlers (baked in July 6, 2026 -- see seo-image-upgrade.py for the one-time
migration this replaced):
  (a) insert a full-width <img> banner between the hero and the article body,
  (b) point openGraph.images + twitter.images at the post's branded card,
  (c) alt text is the actual scene description used to source the photo (what the image
      shows), not the post title (what the article is about) -- accurate for a11y,
      image search, and voice assistants that read alt text aloud,
  (d) inject "image" into the post's JSON-LD (handles both "Article" and "BlogPosting"
      @type -- most existing posts use "Article") so rich results and AI answer engines
      can resolve an image for the post.

Only touches a post if its image (public/blog-images/blog-<path>.webp) already exists.
Idempotent: the banner/OG swap is skipped once done, but the schema.image and alt-text
checks always re-run so a post that was wired before this fix existed gets healed on the
next pass, no separate migration script needed going forward.

Usage:
  python3 scripts/wire-post-images.py [--limit N] [--dry] [--only <path fragment>]

Remember: after wiring, run `node scripts/generate-sitemap.js` to refresh the image
sitemap entries for any newly-imaged posts (it walks the filesystem and picks these up
automatically -- no manual step needed beyond running it).
"""
import importlib.util
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(REPO, "src", "app", "blog")
OUT_DIR = os.path.join(REPO, "public", "blog-images")
BASE = "https://beghr.com"
DEFAULT_OG = "assets/og-image.png"
HERO_OPEN = re.compile(r'<section className="hero"[^>]*>')
ALT_RE = re.compile(r'alt=\{`([^`]*)`\}')

# Reuse the same scene lookup backfill-post-images.py uses, so alt text always matches
# whatever query actually sourced the photo.
_spec = importlib.util.spec_from_file_location("backfill_mod", os.path.join(REPO, "scripts", "backfill-post-images.py"))
_backfill_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_backfill_mod)
scene_for = _backfill_mod.scene_for


def alt_for(slug):
    s = scene_for(slug.lower())
    return s[0].upper() + s[1:]


def ensure_schema_image(src, img_url):
    """Insert "image" into the post's JSON-LD if missing. Returns (new_src, changed)."""
    if ('"image": "' + img_url + '"') in src:
        return src, False
    for marker in ('"@type": "BlogPosting",', '"@type": "Article",'):
        if marker in src:
            return src.replace(marker, marker + '\n        "image": "' + img_url + '",', 1), True
    return src, False


def main():
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 10**9
    dry = "--dry" in sys.argv
    only = sys.argv[sys.argv.index("--only") + 1] if "--only" in sys.argv else None
    wired = og_only = schema_healed = skipped_noimg = skipped_done = missing_anchor = 0

    for root, _, files in os.walk(BLOG):
        if "page.tsx" not in files:
            continue
        rel = os.path.relpath(root, BLOG).replace(os.sep, "-")
        if only and only not in root:
            continue
        path_file = os.path.join(root, "page.tsx")
        src = open(path_file).read()
        if '"datePublished"' not in src:
            continue
        slug = "blog-" + rel
        img_rel = "/blog-images/" + slug + ".webp"
        img_url = BASE + img_rel
        if not os.path.exists(os.path.join(OUT_DIR, slug + ".webp")):
            skipped_noimg += 1
            continue
        if wired + og_only + schema_healed >= limit:
            break

        new = src
        already_wired = ('<img src="' + img_rel + '"') in new
        did_img = did_schema = False

        if already_wired:
            skipped_done += 1
        else:
            # (a) OG + twitter image swap
            if DEFAULT_OG in new:
                new = new.replace(DEFAULT_OG, "blog-images/" + slug + ".webp")
            # (b) on-page banner directly AFTER the hero (title block), so every post
            # renders title -> image -> body. Never anchor on the first container
            # section: 318 templates open with a breadcrumb container before the hero,
            # which put the image above the title (fixed 2026-07-05).
            h = HERO_OPEN.search(new)
            close = new.find("</section>", h.end()) if h else -1
            if close != -1:
                alt = alt_for(slug)
                insert_at = close + len("</section>")
                banner = (
                    '\n\n      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>\n'
                    '        <img src="' + img_rel + '" alt={`' + alt + '`} width={1344} height={768} '
                    'style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />\n'
                    '      </section>'
                )
                new = new[:insert_at] + banner + new[insert_at:]
                did_img = True
            else:
                missing_anchor += 1

        # (c) heal alt text on already-wired posts if it's stale (e.g. was title-based
        # before this fix existed)
        m = re.search(re.escape('<img src="' + img_rel + '"'), new)
        if m:
            window_end = new.find("/>", m.end())
            window_end = window_end + 2 if window_end != -1 else min(len(new), m.end() + 400)
            window = new[m.start():window_end]
            alt_match = ALT_RE.search(window)
            new_alt = alt_for(slug)
            if alt_match and alt_match.group(1) != new_alt:
                new_window = window[:alt_match.start()] + "alt={`" + new_alt + "`}" + window[alt_match.end():]
                new = new[:m.start()] + new_window + new[window_end:]

        # (d) schema.image, always checked regardless of wiring state
        new, did_schema = ensure_schema_image(new, img_url)

        if new != src:
            if did_img:
                wired += 1
            elif did_schema:
                schema_healed += 1
            else:
                og_only += 1
            if not dry:
                open(path_file, "w").write(new)
            tag = "wired" if did_img else ("healed" if did_schema else "og-only")
            print(("[dry] " if dry else "") + tag + ": " + slug)

    print("\nwired(img+og): %d | schema/alt healed on already-wired: %d | og-only: %d | already-done: %d | no-image-yet: %d | anchor-missing: %d"
          % (wired, schema_healed, og_only, skipped_done, skipped_noimg, missing_anchor))


if __name__ == "__main__":
    main()
