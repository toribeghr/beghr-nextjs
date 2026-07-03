#!/usr/bin/env python3
"""
Backfill branded header images for existing blog posts, industry-matched.
Walks src/app/blog for real posts (those with datePublished), derives a scene +
category + headline from each, and calls make-post-image.py. Skips posts that already
have an image. Respects the free tier -- pass --limit to cap how many per run.

Usage: python3 scripts/backfill-post-images.py [--limit 400] [--dry]
Image filename = the post's blog path with slashes as hyphens (unique, page can recompute it).
"""
import os, re, subprocess, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(REPO, "src", "app", "blog")
OUT_DIR = os.path.join(REPO, "public", "blog-images")
MAKE = os.path.join(REPO, "scripts", "make-post-image.py")

# keyword in the URL path -> realistic scene description
SCENES = [
    ("construction", "a real construction site, workers in hard hats and hi-vis vests reviewing plans"),
    ("restaurant", "a busy modern restaurant kitchen with chefs and staff working the line"),
    ("hospitality", "a hotel front desk and staff welcoming guests in a modern lobby"),
    ("dental", "a modern dental office with a dentist and hygienist and a patient"),
    ("veterinary", "a veterinary clinic with a vet examining a dog, staff assisting"),
    ("healthcare", "a modern medical clinic with doctors and nurses caring for patients"),
    ("legal", "a professional law office, attorneys reviewing documents at a conference table"),
    ("banking", "a modern bank or finance office with professionals at desks"),
    ("finance", "finance professionals reviewing charts on screens in a modern office"),
    ("accounting", "an accountant reviewing spreadsheets and documents at a desk"),
    ("insurance", "insurance professionals meeting with a client in a modern office"),
    ("real-estate", "a real estate agent showing a modern home to clients"),
    ("manufacturing", "a clean modern factory floor with workers operating machinery"),
    ("energy", "energy sector workers at a solar or power facility in hi-vis gear"),
    ("technology", "a modern tech office, software team collaborating at workstations"),
    ("cybersecurity", "a security operations center with analysts at multi-screen desks"),
    ("engineering", "engineers reviewing technical drawings in a modern office"),
    ("architecture", "architects reviewing building models and blueprints in a studio"),
    ("marketing", "a creative marketing team collaborating around a table"),
    ("sales", "a sales team on calls and reviewing a pipeline in a modern office"),
    ("nonprofit", "a nonprofit team and volunteers collaborating in a community space"),
    ("government", "professional staff working in a modern public-sector office"),
    ("biotech", "scientists working in a modern biotech laboratory"),
    ("supply-chain", "a logistics warehouse with staff and forklifts managing inventory"),
    ("trades", "skilled trade workers on a job site with tools and equipment"),
    ("hr", "an HR team reviewing employee documents in a bright modern office"),
    ("hcm", "professionals using HR software on laptops in a modern office"),
    ("compare", "business professionals comparing options on a laptop in a modern office"),
]
DEFAULT_SCENE = "business professionals reviewing payroll and HR documents in a bright modern office"

CATEGORY = [
    ("payroll", "Managed Payroll"),
    ("managed-payroll", "Managed Payroll"),
    ("hcm", "HCM Software"),
    ("compare", "Comparison"),
    ("legal-hiring", "Legal Hiring"),
    ("hiring", "Hiring & Recruiting"),
]


def scene_for(path):
    for k, s in SCENES:
        if k in path:
            return s
    return DEFAULT_SCENE


def category_for(path):
    for k, c in CATEGORY:
        if k in path:
            return c
    return "BEG Insights"


def clean_title(t):
    t = re.split(r"\s*[|]\s*", t)[0]
    return t.strip()[:70]


def main():
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 9999
    dry = "--dry" in sys.argv
    os.makedirs(OUT_DIR, exist_ok=True)
    done = made = 0
    for root, _, files in os.walk(BLOG):
        if "page.tsx" not in files:
            continue
        src = open(os.path.join(root, "page.tsx")).read()
        if '"datePublished"' not in src:
            continue  # skip hubs/index
        rel = os.path.relpath(root, BLOG).replace(os.sep, "-")
        slug = "blog-" + rel
        if os.path.exists(os.path.join(OUT_DIR, slug + ".webp")):
            continue
        m = re.search(r"title\s*:\s*['\"]([^'\"]+)['\"]", src)
        headline = clean_title(m.group(1)) if m else rel.replace("-", " ").title()
        path = rel.lower()
        cat, scene = category_for(path), scene_for(path)
        if made >= limit:
            break
        made += 1
        print("[%d] %s | %s | %s" % (made, slug, cat, scene[:40]))
        if dry:
            continue
        subprocess.run(["python3", MAKE, slug, cat, headline, scene])
    print("Processed %d posts this run." % made)


if __name__ == "__main__":
    main()
