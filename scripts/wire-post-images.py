#!/usr/bin/env python3
"""
Wire generated branded images into existing blog posts:
  (a) insert a full-width <img> banner between the hero and the article body, and
  (b) point openGraph.images + twitter.images at the post's branded card.

Only touches a post if its image (public/blog-images/blog-<path>.webp) already exists,
and is idempotent (skips posts already wired). Conservative: if the expected anchor
isn't found it does the OG swap only and reports the miss -- never writes broken JSX.

Usage:
  python3 scripts/wire-post-images.py [--limit N] [--dry] [--only <path fragment>]
"""
import os, re, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(REPO, "src", "app", "blog")
OUT_DIR = os.path.join(REPO, "public", "blog-images")
DEFAULT_OG = "assets/og-image.png"
ANCHOR = '<section className="container"'


def title_of(src):
    m = re.search(r"title\s*:\s*['\"]([^'\"]+)['\"]", src)
    t = m.group(1) if m else "Business Executive Group"
    t = re.split(r"\s*[|]\s*", t)[0].replace("&amp;", "&").replace("`", "").strip()
    return t[:110]


def main():
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 10**9
    dry = "--dry" in sys.argv
    only = sys.argv[sys.argv.index("--only") + 1] if "--only" in sys.argv else None
    wired = og_only = skipped_noimg = skipped_done = missing_anchor = 0

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
        if not os.path.exists(os.path.join(OUT_DIR, slug + ".webp")):
            skipped_noimg += 1
            continue
        if img_rel in src:
            skipped_done += 1
            continue
        if wired + og_only >= limit:
            break

        new = src
        # (a) OG + twitter image swap
        if DEFAULT_OG in new:
            new = new.replace(DEFAULT_OG, "blog-images/" + slug + ".webp")
        # (b) on-page banner before the article body
        did_img = False
        if ANCHOR in new:
            alt = title_of(src)
            banner = (
                '<section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>\n'
                '        <img src="' + img_rel + '" alt={`' + alt + '`} width={1344} height={768} '
                'style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />\n'
                '      </section>\n\n      '
            )
            new = new.replace(ANCHOR, banner + ANCHOR, 1)
            did_img = True
        else:
            missing_anchor += 1

        if new != src:
            if did_img:
                wired += 1
            else:
                og_only += 1
            if not dry:
                open(path_file, "w").write(new)
            print(("[dry] " if dry else "") + ("wired" if did_img else "og-only") + ": " + slug)

    print("\nwired(img+og): %d | og-only: %d | already-done: %d | no-image-yet: %d | anchor-missing: %d"
          % (wired, og_only, skipped_done, skipped_noimg, missing_anchor))


if __name__ == "__main__":
    main()
