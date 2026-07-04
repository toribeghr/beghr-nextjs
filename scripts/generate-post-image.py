#!/usr/bin/env python3
"""
Generate an on-brand header image for a BEG blog post using the Gemini image API.
Stdlib only (urllib/json/base64) -- no pip installs, runs on macOS python3 or the sandbox.

Usage:
  python3 scripts/generate-post-image.py <slug> "<post title or topic>" [--prompt "custom prompt"]

Key handling (never pass the key on the command line, never commit it):
  Reads the API key from, in order:
    1) env var GEMINI_API_KEY
    2) a private file:  ~/Downloads/Claude/gemini_api_key.txt   (outside the repo)
    3)                  ./.gemini_api_key                        (gitignored)

Output: public/blog-images/<slug>.png  (skips if it already exists, so it never re-bills)
"""
import base64
import json
import os
import sys
import urllib.request
import urllib.error

MODEL = "gemini-2.5-flash-image"  # swap to the current image model id if Google renames it
GOLD = "#ECAC60"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(REPO, "public", "blog-images")


def load_key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"].strip()
    for p in (os.path.expanduser("~/Downloads/Claude/gemini_api_key.txt"),
              os.path.join(REPO, ".gemini_api_key")):
        if os.path.isfile(p):
            with open(p) as f:
                k = f.read().strip()
                if k:
                    return k
    sys.exit("No API key found. Set GEMINI_API_KEY or create ~/Downloads/Claude/gemini_api_key.txt")


def build_prompt(topic):
    return (
        "Professional editorial header image for a B2B business blog article about "
        + topic + ". Modern, clean, minimal, abstract corporate illustration. Strict color "
        "palette: deep black background with warm gold (" + GOLD + ") accents and subtle "
        "highlights only. Sophisticated, premium, uncluttered. No text, no words, no letters, "
        "no logos. Wide 16:9 composition suitable as a website hero banner."
    )


def main():
    args = [a for a in sys.argv[1:]]
    if len(args) < 2:
        sys.exit('Usage: generate-post-image.py <slug> "<title/topic>" [--prompt "..."]')
    slug = args[0]
    topic = args[1]
    prompt = build_prompt(topic)
    if "--prompt" in args:
        prompt = args[args.index("--prompt") + 1]
    # Hard negative on text -- Gemini tends to bake in garbled words otherwise.
    prompt = prompt + (" Absolutely no text, no words, no letters, no numbers, no "
                       "typography, no captions or labels anywhere in the image.")

    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, slug + ".png")
    if os.path.exists(out_path):
        print("SKIP (already exists): " + out_path)
        return

    key = load_key()
    url = ("https://generativelanguage.googleapis.com/v1beta/models/"
           + MODEL + ":generateContent")
    body = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}},
    }).encode("utf-8")
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("x-goog-api-key", key)

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        sys.exit("Gemini API error " + str(e.code) + ": " + e.read().decode("utf-8")[:800])
    except Exception as e:
        sys.exit("Request failed: " + str(e))

    # Find the inline image part in the response.
    b64 = None
    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            inline = part.get("inlineData") or part.get("inline_data")
            if inline and inline.get("data"):
                b64 = inline["data"]
                break
        if b64:
            break
    if not b64:
        sys.exit("No image in response. Raw: " + json.dumps(data)[:800])

    with open(out_path, "wb") as f:
        f.write(base64.b64decode(b64))
    kb = os.path.getsize(out_path) // 1024
    print("Wrote " + out_path + " (" + str(kb) + " KB)")


if __name__ == "__main__":
    main()
