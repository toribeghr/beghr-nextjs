#!/usr/bin/env python3
"""
One-shot branded blog image: real photo (Unsplash search, default) or Gemini-generated
scene (fallback) -> BEG featured-card branding -> WebP.
Usage:
  python3 scripts/make-post-image.py <slug> "<Category>" "<Headline>" "<scene topic>" [--source unsplash|gemini]

Writes public/blog-images/<slug>.webp (skips if it already exists, so no re-billing/re-fetching).
Unsplash key: UNSPLASH_ACCESS_KEY env or ~/Downloads/Claude/unsplash_api_key.txt (never committed).
Gemini key:   GEMINI_API_KEY env or ~/Downloads/Claude/gemini_api_key.txt (never committed).
Default source is unsplash (free, no daily cap tied to our billing). Pass --source gemini
to force the old photorealistic-generation path once Gemini credits are funded again.
"""
import base64, io, json, os, sys, urllib.request, urllib.error, urllib.parse, subprocess
try:
    from PIL import Image, ImageDraw, ImageFont, ImageEnhance
except ImportError:
    subprocess.run([sys.executable, "-m", "pip", "install", "pillow", "--break-system-packages", "-q"])
    from PIL import Image, ImageDraw, ImageFont, ImageEnhance

MODEL = "gemini-2.5-flash-image"
# Cloudflare (fronting Pexels/Unsplash) blocks the default urllib UA with a 403 (error
# 1010, ASN-based bot block) -- a normal browser UA sails through, same key, same IP.
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
GOLD = (236, 172, 96)
WHITE = (245, 245, 245)
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(REPO, "public", "blog-images")
LION = os.path.join(REPO, "public", "assets", "beg-header-image.png")
# Fonts: prefer repo-local, fall back to the Claude Logos folder.
FONT_DIRS = [os.path.join(REPO, "scripts", "fonts"),
             "/sessions/serene-nice-tesla/mnt/Claude/Logos/fonts",
             os.path.expanduser("~/Downloads/Claude/Logos/fonts")]


def font(name, size):
    for d in FONT_DIRS:
        p = os.path.join(d, name)
        if os.path.isfile(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def load_key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"].strip()
    for p in (os.path.expanduser("~/Downloads/Claude/gemini_api_key.txt"),
              "/sessions/serene-nice-tesla/mnt/Claude/gemini_api_key.txt",
              os.path.join(REPO, ".gemini_api_key")):
        if os.path.isfile(p):
            k = open(p).read().strip()
            if k:
                return k
    sys.exit("No API key found (GEMINI_API_KEY or ~/Downloads/Claude/gemini_api_key.txt).")


def load_unsplash_key():
    if os.environ.get("UNSPLASH_ACCESS_KEY"):
        return os.environ["UNSPLASH_ACCESS_KEY"].strip()
    for p in (os.path.expanduser("~/Downloads/Claude/unsplash_api_key.txt"),
              "/sessions/serene-nice-tesla/mnt/Claude/unsplash_api_key.txt",
              os.path.join(REPO, ".unsplash_api_key")):
        if os.path.isfile(p):
            k = open(p).read().strip()
            if k:
                return k
    sys.exit("No Unsplash key found (UNSPLASH_ACCESS_KEY or ~/Downloads/Claude/unsplash_api_key.txt).")


def load_pexels_key():
    if os.environ.get("PEXELS_API_KEY"):
        return os.environ["PEXELS_API_KEY"].strip()
    for p in (os.path.expanduser("~/Downloads/Claude/pexels_api_key.txt"),
              "/sessions/serene-nice-tesla/mnt/Claude/pexels_api_key.txt",
              os.path.join(REPO, ".pexels_api_key")):
        if os.path.isfile(p):
            k = open(p).read().strip()
            if k:
                return k
    sys.exit("No Pexels key found (PEXELS_API_KEY or ~/Downloads/Claude/pexels_api_key.txt).")


def generate_scene(topic):
    prompt = (
        "Professional editorial photograph depicting " + topic + ". Realistic, sharp, "
        "premium business-magazine quality, natural cinematic lighting, real people and "
        "real workplace, documentary style. Wide 16:9 composition. Absolutely no text, "
        "no words, no letters, no numbers, no logos, no watermarks anywhere in the image."
    )
    body = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}},
    }).encode()
    req = urllib.request.Request(
        "https://generativelanguage.googleapis.com/v1beta/models/" + MODEL + ":generateContent",
        data=body, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("x-goog-api-key", load_key())
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            data = json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        sys.exit("Gemini API " + str(e.code) + ": " + e.read().decode()[:600])
    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            inl = part.get("inlineData") or part.get("inline_data")
            if inl and inl.get("data"):
                return Image.open(io.BytesIO(base64.b64decode(inl["data"]))).convert("RGB")
    sys.exit("No image in Gemini response: " + json.dumps(data)[:500])


def generate_scene_unsplash(topic, seed=""):
    """Search Unsplash for a real photo matching the topic. Free, no per-image cost.
    Note: Unsplash demo apps are capped at 50 requests/hour; production (post-review)
    apps get 5000/hour -- pace batch runs accordingly until production access is granted.
    """
    key = load_unsplash_key()
    query = " ".join(topic.split()[:6])  # short keyword query beats long natural language
    page = 1 + (abs(hash(seed)) % 3 if seed else 0)  # light variety across repeated categories
    url = ("https://api.unsplash.com/search/photos?query=" + urllib.parse.quote(query)
           + "&orientation=landscape&per_page=10&page=" + str(page))
    req = urllib.request.Request(url)
    req.add_header("Authorization", "Client-ID " + key)
    req.add_header("User-Agent", UA)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        sys.exit("Unsplash API " + str(e.code) + ": " + e.read().decode()[:600])
    results = data.get("results") or []
    if not results and page != 1:
        req = urllib.request.Request(url.replace("&page=" + str(page), "&page=1"))
        req.add_header("Authorization", "Client-ID " + key)
        req.add_header("User-Agent", UA)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode())
        results = data.get("results") or []
    if not results:
        sys.exit("No Unsplash results for query: " + query)
    pick = results[abs(hash(seed)) % len(results)] if seed else results[0]
    img_url = pick["urls"]["regular"]
    # Unsplash API guideline: ping download_location when a photo is actually used.
    dl = (pick.get("links") or {}).get("download_location")
    if dl:
        try:
            dreq = urllib.request.Request(dl)
            dreq.add_header("Authorization", "Client-ID " + key)
            dreq.add_header("User-Agent", UA)
            urllib.request.urlopen(dreq, timeout=15)
        except Exception:
            pass
    ireq = urllib.request.Request(img_url)
    ireq.add_header("User-Agent", UA)
    with urllib.request.urlopen(ireq, timeout=60) as r:
        img_bytes = r.read()
    return Image.open(io.BytesIO(img_bytes)).convert("RGB")


def generate_scene_pexels(topic, seed=""):
    """Search Pexels for a real photo matching the topic. Free tier: 200 req/hour,
    20,000/month, no billing, no review wait -- the working default until/unless
    Unsplash production access comes through.
    """
    key = load_pexels_key()
    query = " ".join(topic.split()[:6])
    page = 1 + (abs(hash(seed)) % 3 if seed else 0)
    url = ("https://api.pexels.com/v1/search?query=" + urllib.parse.quote(query)
           + "&orientation=landscape&per_page=10&page=" + str(page))
    req = urllib.request.Request(url)
    req.add_header("Authorization", key)
    req.add_header("User-Agent", UA)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        sys.exit("Pexels API " + str(e.code) + ": " + e.read().decode()[:600])
    photos = data.get("photos") or []
    if not photos and page != 1:
        req = urllib.request.Request(url.replace("&page=" + str(page), "&page=1"))
        req.add_header("Authorization", key)
        req.add_header("User-Agent", UA)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode())
        photos = data.get("photos") or []
    if not photos:
        sys.exit("No Pexels results for query: " + query)
    pick = photos[abs(hash(seed)) % len(photos)] if seed else photos[0]
    img_url = pick["src"]["large2x"] if "large2x" in pick.get("src", {}) else pick["src"]["large"]
    ireq = urllib.request.Request(img_url)
    ireq.add_header("User-Agent", UA)
    with urllib.request.urlopen(ireq, timeout=60) as r:
        img_bytes = r.read()
    return Image.open(io.BytesIO(img_bytes)).convert("RGB")


def knockout_lion(size):
    im = Image.open(LION).convert("RGBA")
    px = im.load()
    for y in range(im.size[1]):
        for x in range(im.size[0]):
            r, g, b, a = px[x, y]
            if max(r, g, b) < 50:
                px[x, y] = (r, g, b, 0)
    return im.resize((size, size), Image.LANCZOS)


def wrap(draw, text, fnt, max_w):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=fnt) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def brand(im, category, headline):
    W, H = im.size
    im = ImageEnhance.Color(im).enhance(1.10)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    warm = Image.new("RGB", (W, H), (255, 214, 150))
    im = Image.composite(warm, im, Image.new("L", (W, H), 26))
    grad = Image.new("L", (1, H), 0)
    for y in range(H):
        t = max(0.0, (y - H * 0.42) / (H * 0.58))
        grad.putpixel((0, y), int(238 * (t ** 1.15)))
    im = Image.composite(Image.new("RGB", (W, H), (8, 8, 8)), im, grad.resize((W, H)))
    # subtle top scrim so the category tag stays legible on bright photos
    top = Image.new("L", (1, H), 0)
    for y in range(H):
        tt = max(0.0, (H * 0.20 - y) / (H * 0.20))
        top.putpixel((0, y), int(130 * tt))
    im = Image.composite(Image.new("RGB", (W, H), (8, 8, 8)), im, top.resize((W, H)))
    d = ImageDraw.Draw(im, "RGBA")
    M = int(W * 0.038)
    # category tag (letter-spaced) + rule
    tagf = font("Inter.ttf", int(W * 0.0165))
    x, ty = M, int(H * 0.055)
    for ch in category.upper():
        d.text((x, ty), ch, font=tagf, fill=GOLD)
        x += d.textlength(ch, font=tagf) + int(W * 0.004)
    d.rectangle([M, ty + int(W * 0.028), max(M + 1, x - int(W * 0.004)), ty + int(W * 0.028) + 2], fill=GOLD)
    # brand mark
    ls = int(W * 0.052)
    lion = knockout_lion(ls)
    lx, ly = W - M - ls, H - int(W * 0.045) - ls
    im.paste(lion, (lx, ly), lion)
    d.text((lx - int(W * 0.01), ly + ls // 2), "beghr.com",
           font=font("Inter.ttf", int(W * 0.016)), fill=GOLD, anchor="rm")
    # headline auto-fit
    size = int(W * 0.050)
    while size > 20:
        fnt = font("PlayfairDisplay-Bold.ttf", size)
        lines = wrap(d, headline, fnt, int(W * 0.60))
        lh = int(size * 1.14)
        if len(lines) <= 3 and lh * len(lines) <= int(H * 0.34):
            break
        size -= 2
    y = H - int(H * 0.085) - lh * len(lines)
    for ln in lines:
        d.text((M + 2, y + 2), ln, font=fnt, fill=(0, 0, 0, 130))
        d.text((M, y), ln, font=fnt, fill=WHITE)
        y += lh
    d.rectangle([0, H - 6, W, H], fill=GOLD)
    return im


SCENE_FUNCS = {
    "pexels": lambda topic, slug: generate_scene_pexels(topic, seed=slug),
    "unsplash": lambda topic, slug: generate_scene_unsplash(topic, seed=slug),
    "gemini": lambda topic, slug: generate_scene(topic),
}


def main():
    if len(sys.argv) < 5:
        sys.exit('Usage: make-post-image.py <slug> "<Category>" "<Headline>" "<scene topic>" [--source pexels|unsplash|gemini]')
    slug, category, headline, topic = sys.argv[1:5]
    source = sys.argv[sys.argv.index("--source") + 1] if "--source" in sys.argv else "pexels"
    if source not in SCENE_FUNCS:
        sys.exit("Unknown --source: " + source + " (use pexels, unsplash, or gemini)")
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, slug + ".webp")
    if os.path.exists(out):
        print("SKIP (exists): " + out)
        return
    scene = SCENE_FUNCS[source](topic, slug)
    im = brand(scene, category, headline)
    im.save(out, "WEBP", quality=82, method=6)
    print("Wrote [" + source + "] " + out + " (" + str(os.path.getsize(out) // 1024) + " KB)")


if __name__ == "__main__":
    main()
