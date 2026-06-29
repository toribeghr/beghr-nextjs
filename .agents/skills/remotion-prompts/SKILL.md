---
name: remotion-prompts
description: >-
  A curated library of proven, community-submitted prompts for generating
  specific Remotion video styles — product demos, news-screenshot animations,
  map animations, transparent CTA overlays, video-editor UIs, and text effects.
  Use when the user wants to make a Remotion video in one of these known styles,
  or asks "what prompts/examples are there for X video". Each entry is a ready
  copy-paste prompt plus setup notes; adapt it to the user's content.
metadata:
  source: manalkaff/remotion-prompts (MIT)
  tags: remotion, prompts, examples, product-demo, animation
---

# Remotion Prompts Library

A reference collection of battle-tested prompts (from the `manalkaff/remotion-prompts`
community repo, MIT licensed) for producing specific Remotion video styles. This is
a **prompt index**, not a build engine — pick the closest prompt, adapt it to the
user's content, then build with the `remotion-best-practices` /
`remotion-video-director` skills.

## When to use
- The user wants a video in a known style below.
- You want a strong starting prompt instead of scripting from scratch.

## Available prompts (see `prompts/<name>/README.md` for the full text)

| Prompt | Use it for | Difficulty |
|--------|-----------|-----------|
| `product-demo-video` | Full product demo from an existing codebase / UI components (optional VO+music) | Advanced |
| `news-screenshot-animation` | Animate a news screenshot — OCR, zoom, 3D rotation, blur, highlight text | Intermediate |
| `arabic-news-animation` | News-screenshot style optimized for Arabic / RTL text | Intermediate |
| `maps-animation` | Dynamic map fly-throughs, 3D buildings, data overlays (Mapbox) | Advanced |
| `transparent-video-overlay` | Transparent-background CTA overlays to composite over other footage | Intermediate |
| `video-editor-interface` | Canvas-based video-editor UI mockup | Intermediate |

Categories overview: `categories/*.md` (image-animation, text-effects, ui-demos,
tools-workflows).

## How to use a prompt
1. Open `prompts/<name>/README.md` and copy the text in its `## Prompt` block.
2. Swap in the user's product/content per that file's "Customization" notes.
3. Build the video following the BEG framework or the relevant Remotion skill.

## BEG note
For BEG **pitch** videos, prefer `video/VIDEO-FRAMEWORK.md` (our luxury NEPQ
format). These prompts are best for one-off styles (e.g. a `product-demo-video`
of the BEG site, or a `news-screenshot-animation` of an HR headline).

Attribution & license: prompts authored by their respective community authors
(see each `metadata.json`); redistributed here under the repo's MIT `LICENSE`.
