#!/usr/bin/env python3
"""
One-time (idempotent) SEO upgrade for every blog post that already has a wired header
image. Fixes two gaps found July 6, 2026:

  1. BlogPosting JSON-LD had no "image" field -- added if missing.
  2. <img alt={...}> was the post title (describes the article, not the photo) --
     replaced with the actual scene description used to source the photo (the same
     phrase passed to Pexels/Unsplash/Gemini as the search query / prompt), which is
     an accurate, accessible description of what the image actually shows.

Does NOT touch image generation, image sitemap (that's generate-sitemap.js), or posts
that don't have an image yet (backfill-post-images.py handles those separately).

Usage: python3 scripts/seo-image-upgrade.py [--dry] [--only <path fragment>]
"""
import importlib.util
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(REPO, "src", "app", "blog")
OUT_DIR = os.path.join(REPO, "public", "blog-images")
BASE = "https://beghr.com"

# Reuse the same scene/category lookup tables backfill-post-images.py uses, so the alt
# text always matches whatever query actually sourced the photo.
spec = importlib.util.spec_from_file_location("backfill_mod", os.path.join(REPO, "scripts", "backfill-post-images.py"))
backfill_mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(backfill_mod)
scene_for = backfill_mod.scene_for

ALT_RE = re.compile(r'alt=\{`([^`]*)`\}')


def alt_for(path):
    s = scene_for(path)
    return s[0].upper() + s[1:]


def upgrade_one(path_file, slug, img_rel):
    src = open(path_file).read()
    orig = src
    changed_alt = changed_schema = False

    # (1) alt text -> real scene description, only on the actual <img> tag (not the
    # openGraph/twitter metadata, which also contains this URL earlier in the file).
    m = re.search(re.escape('<img src="' + img_rel + '"'), src)
    if m:
        # find the nearest alt={`...`} within the same <img ... /> tag (search forward
        # a bounded window so we don't touch an unrelated alt elsewhere in the file)
        window_end = src.find("/>", m.end())
        window_end = window_end + 2 if window_end != -1 else min(len(src), m.end() + 400)
        window = src[m.start():window_end]
        alt_match = ALT_RE.search(window)
        new_alt = alt_for(slug.lower())
        if alt_match and alt_match.group(1) != new_alt:
            new_window = window[:alt_match.start()] + "alt={`" + new_alt + "`}" + window[alt_match.end():]
            src = src[:m.start()] + new_window + src[window_end:]
            changed_alt = True

    # (2) Article/BlogPosting JSON-LD "image" field. Most existing posts use the older
    # "@type": "Article" schema (1,041 of 1,184 as of July 6, 2026); only 178 use the
    # newer "BlogPosting" template. Handle both -- schema.org treats Article as the
    # supertype so the "image" property is valid on either.
    img_url = BASE + img_rel
    if ('"image": "' + img_url + '"') not in src:
        for marker in ('"@type": "BlogPosting",', '"@type": "Article",'):
            if marker in src:
                src = src.replace(marker, marker + '\n        "image": "' + img_url + '",', 1)
                changed_schema = True
                break

    if src != orig:
        return src, changed_alt, changed_schema
    return None, False, False


def main():
    dry = "--dry" in sys.argv
    only = sys.argv[sys.argv.index("--only") + 1] if "--only" in sys.argv else None
    n_alt = n_schema = n_unchanged = n_noimg = 0

    for root, _, files in os.walk(BLOG):
        if "page.tsx" not in files:
            continue
        if only and only not in root:
            continue
        path_file = os.path.join(root, "page.tsx")
        src = open(path_file).read()
        if '"datePublished"' not in src:
            continue
        rel = os.path.relpath(root, BLOG).replace(os.sep, "-")
        slug = "blog-" + rel
        img_rel = "/blog-images/" + slug + ".webp"
        if not os.path.exists(os.path.join(OUT_DIR, slug + ".webp")):
            n_noimg += 1
            continue

        new_src, changed_alt, changed_schema = upgrade_one(path_file, slug, img_rel)
        if new_src is None:
            n_unchanged += 1
            continue
        n_alt += 1 if changed_alt else 0
        n_schema += 1 if changed_schema else 0
        print(("[dry] " if dry else "") + "upgraded: " + slug
              + (" [alt]" if changed_alt else "") + (" [schema.image]" if changed_schema else ""))
        if not dry:
            open(path_file, "w").write(new_src)

    print("\nalt-text fixed: %d | schema.image added: %d | already up to date: %d | no image yet: %d"
          % (n_alt, n_schema, n_unchanged, n_noimg))


if __name__ == "__main__":
    main()
