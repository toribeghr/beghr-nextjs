#!/usr/bin/env python3
"""
Composite a BEG-branded "featured card" onto an AI-generated scene photo.
Usage: python3 scripts/brand-image.py <input.png> "<CATEGORY>" "<Headline>" <output.png>

Produces: warm grade + bottom gradient + category tag + auto-fit headline (serif) +
clean gold lion mark + beghr.com + gold accent bar. Deterministic, on-brand every time.
"""
import os, sys
from PIL import Image, ImageDraw, ImageFont, ImageEnhance

GOLD = (236, 172, 96)
WHITE = (245, 245, 245)
FROOT = "/sessions/serene-nice-tesla/mnt/Claude/Logos/fonts"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LION = os.path.join(REPO, "public", "assets", "beg-header-image.png")


def font(name, size):
    return ImageFont.truetype(os.path.join(FROOT, name), size)


def knockout_lion(size):
    """Load the lion and make its dark background transparent -> clean gold mark."""
    im = Image.open(LION).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if max(r, g, b) < 50:
                px[x, y] = (r, g, b, 0)
    return im.resize((size, size), Image.LANCZOS)


def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
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


def fit_headline(draw, text, max_w, max_h, start):
    """Shrink font until the wrapped headline fits in max_w x max_h and <=3 lines."""
    size = start
    while size > 20:
        fnt = font("PlayfairDisplay-Bold.ttf", size)
        lines = wrap(draw, text, fnt, max_w)
        line_h = int(size * 1.14)
        if len(lines) <= 3 and line_h * len(lines) <= max_h:
            return fnt, lines, line_h
        size -= 2
    return fnt, lines, int(size * 1.14)


def main():
    src, category, headline, out = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
    im = Image.open(src).convert("RGB")
    W, H = im.size

    # 1) subtle warm cinematic grade for a cohesive house look
    im = ImageEnhance.Color(im).enhance(1.10)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    warm = Image.new("RGB", (W, H), (255, 214, 150))
    im = Image.blend(im, Image.composite(warm, im, Image.new("L", (W, H), 26)), 1.0)

    # 2) bottom gradient scrim for text legibility
    grad = Image.new("L", (1, H), 0)
    for y in range(H):
        t = max(0.0, (y - H * 0.42) / (H * 0.58))
        grad.putpixel((0, y), int(238 * (t ** 1.15)))
    grad = grad.resize((W, H))
    im = Image.composite(Image.new("RGB", (W, H), (8, 8, 8)), im, grad)

    d = ImageDraw.Draw(im, "RGBA")
    M = int(W * 0.038)  # margin

    # 3) category tag (letter-spaced) + rule, top-left
    tagf = font("Inter.ttf", int(W * 0.0165))
    x = M
    ty = int(H * 0.055)
    for ch in category.upper():
        d.text((x, ty), ch, font=tagf, fill=GOLD)
        x += d.textlength(ch, font=tagf) + int(W * 0.004)
    d.rectangle([M, ty + int(W * 0.028), x - int(W * 0.004), ty + int(W * 0.028) + 2], fill=GOLD)

    # 4) brand mark bottom-right: clean gold lion + wordmark
    ls = int(W * 0.052)
    lion = knockout_lion(ls)
    lion_x, lion_y = W - M - ls, H - int(W * 0.045) - ls
    im.paste(lion, (lion_x, lion_y), lion)
    wm = font("Inter.ttf", int(W * 0.016))
    d.text((lion_x - int(W * 0.01), lion_y + ls // 2), "beghr.com",
           font=wm, fill=GOLD, anchor="rm")

    # 5) headline bottom-left, auto-fit, above the accent bar
    bottom_limit = H - int(H * 0.085)
    max_w = int(W * 0.60)
    fnt, lines, line_h = fit_headline(d, headline, max_w, int(H * 0.34), int(W * 0.050))
    total = line_h * len(lines)
    y = bottom_limit - total
    for ln in lines:
        d.text((M + 2, y + 2), ln, font=fnt, fill=(0, 0, 0, 130))  # shadow
        d.text((M, y), ln, font=fnt, fill=WHITE)
        y += line_h

    # 6) gold accent bar
    d.rectangle([0, H - 6, W, H], fill=GOLD)

    im.save(out)
    print("branded ->", out)


if __name__ == "__main__":
    main()
