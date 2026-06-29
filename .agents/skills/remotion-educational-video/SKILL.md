---
name: remotion-educational-video
description: >-
  Best practices for building polished educational/explainer videos with
  Remotion (React video). Use whenever the user wants to create, build, or
  render a Remotion video, an animated explainer, a vertical/mobile (1080x1920)
  motion-graphics video, or asks for "Kurzgesagt/Fireship style" animated
  content. Covers safe zones, typography minimums, the research-then-script
  workflow, visual/animation specs, required background music, and the preview
  step.
---

# Remotion Best Practices

Build dense, beautiful, fast-paced explainer videos in Remotion. Default target
is a vertical mobile video (1080x1920, 30fps) unless the user specifies
otherwise. Think Kurzgesagt meets Fireship: clear visual metaphors, motion on
every element, no walls of text.

## Workflow (do these in order)

### Step 1 — Research & script (STOP for approval)
Before writing any code, research the topic and write a **5-scene script**.
Each scene needs:
- a one-line headline,
- 1-2 sentences of explanation,
- a visual description of what to animate (the metaphor, diagram, or flow).

Show the script to the user and **wait for approval before coding.**

### Step 2 — Design & animate
After approval, build all 5 scenes to the specs below.

### Step 3 — Background music (REQUIRED, never skip)
1. Search Pixabay for a royalty-free lo-fi or electronic beat.
2. If that fails, find any free-to-use .mp3 beat and download it to `public/music.mp3`.
3. If all downloads fail, generate a simple rhythmic beat programmatically.
4. Add the audio with Remotion's `<Audio>` component, `volume={0.3}`.
5. The music **must loop** for the full duration.

This is not optional. Every video needs background music.

### Step 4 — Preview
After building, launch Remotion Studio (`npx remotion studio`) so the user can
preview the video in their browser.

## Safe zone (mobile)
All text and key content must stay inside the safe zone:
- At least **150px from the top** (status bar / platform search bars).
- At least **170px from the bottom** (nav buttons / swipe-up UI).
- **60px minimum side margins.**
- Nothing important touches the edges.

## Minimum font sizes (mobile-readable)
- Headlines: **56px+**
- Body / subtitles: **36px+**
- Labels / small text: **28px absolute minimum**

Nothing under 28px — it's unreadable on mobile.

## Visual style (defaults)
- Background: `#0a0a0a`
- Primary text: white
- Accent: `#6366f1` (indigo)
- Success / emphasis: `#22c55e` (green)
- Font: Inter (weights 400, 600, 800)
- All icons/diagrams built as inline SVG components (no external assets needed)

## Animation rules
- Every element enters with `spring({ damping: 200 })` — no linear motion.
- Stagger related items by **8-12 frames**.
- Use `TransitionSeries` with **12-frame fade** transitions between scenes.
- Diagrams and flowcharts draw themselves (SVG `stroke-dashoffset` animation).
- Key numbers use count-up animation via `interpolate()` with `tabular-nums`.
- Final scene: particle-effect background (10-15 circles drifting upward).

Each scene should carry a clear visual metaphor — diagram, flowchart, icon set,
or step-by-step animation. No walls of text. Dense information, beautiful
motion, fast pacing.

---

## BEG project notes (how this differs from our pitch videos)

This skill is for **educational / explainer** content. It is **separate** from
the BEG **pitch-video framework** (see `video/VIDEO-FRAMEWORK.md`), which is a
luxury, NEPQ-scripted, brand-pitch format for service pages. When working in
this repo:

- **Pitch / sales video for a page** → follow `video/VIDEO-FRAMEWORK.md`
  (gold `#ECAC60`, NEPQ arc, hero imagery, no voiceover so music sits louder).
- **Educational / explainer video** → follow this skill (the defaults above).

Where the two conflict, the brand wins for BEG-facing pitch work (e.g. use BEG
gold, not the generic indigo accent).

## Rendering in this environment

The cloud build blocks Remotion's Chromium download and external music sites.
`video/remotion.config.ts` auto-detects the pre-installed chrome-headless-shell,
and `video/scripts/gen-music.js` synthesizes royalty-free music offline — use
that for Step 3 here instead of Pixabay. Remotion Studio (Step 4) needs a
browser window, so preview by rendering an MP4 and sending it to the user.
