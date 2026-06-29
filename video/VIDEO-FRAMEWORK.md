# BEG Video Framework

The reusable system for producing a pitch/explainer video for **any** page on the
site — built so that as new pages are created, there is a consistent pattern to
generate videos from. This is a **living document**: when we make a new decision,
we add it to the Decision Log at the bottom (with the *why*, not just the *what*).

> New here? Read this top-to-bottom once. To make a video for a new page, jump to
> **§5 Per-page production checklist** and follow it.

---

## 1. Purpose & strategy

Produce short, social-native videos that:
1. **Embed on the matching page** → increase dwell time & engagement (real SEO signal).
2. **Get discovered** via YouTube / Google video results (2nd-largest search engine).
3. **Build the BEG brand** as a curious, consultative HR partner.

**SEO truth we operate on:** YouTube *description links are `nofollow`* — they do
**not** pass link authority. So our authority play is **on-page embeds + video
search visibility + brand signals**, NOT "dofollow backlinks." Don't let anyone
re-introduce the backlink myth into the plan.

---

## 2. The audience posture: curious NEPQ (the heart of this framework)

Every script uses **NEPQ** (Neuro-Emotional Persuasion Questions) — but adapted for
a *warm* visitor who is **already on the page looking for this solution**.

**The golden rule:** Someone who landed on a page is already problem-aware. So we
**ask, we don't tell.** We get *curious* about why they're here and what they're
trying to fix — we never declare their pain at them. Skilled NEPQ feels like the
viewer is being *understood*, not *sold to*. It ends with an **invitation to a
conversation**, never a hard CTA.

❌ Pushy (telling): *"You bought HR software. Why is it creating more work?"*
✅ Curious (asking): *"You're here looking at HCM software — so can we ask, what's
   making you look right now?"*

---

## 3. The reusable script template

Fill these 13 beats for any page. Each beat = one short on-screen text card. Pull
the page-specific pains, proof, and solution name from that page's content.

| # | Beat | NEPQ lens | Source |
|---|------|-----------|--------|
| 1 | Meet them where they are — name the page topic | Connection | page title |
| 2 | Ask permission / signal curiosity | Permission | template |
| 3 | "What's making you look right now?" | Connection question | template |
| 4 | Situation question — a concrete pain #1 | Situation | page "pain" section |
| 5 | Situation question — a concrete pain #2 | Situation | page "pain" section |
| 6 | "Or just a feeling it should be easier?" | Problem-awareness | template |
| 7 | Normalize: "most teams can't name it — they just know it costs time" | Lower pressure | template |
| 8 | "If nothing changes, what does that cost a year from now?" | Consequence | template |
| 9 | "We're curious what your setup looks like — the fix depends on it" | Curious-to-help | template |
| 10 | Soft solution — name the service/product | Solution-awareness | page |
| 11 | Light proof — 1–2 page-specific stats | Proof | page hero stats |
| 12 | "No pitch. Just a conversation to see if it even fits." | Low-pressure CTA | template |
| 13 | Brand lockup — Business Executive Group → beghr.com | Brand | constant |

**Approval gate:** the script is always reviewed/approved by the brand owner
*before* animating. The messaging is the product; the animation is the wrapper.

---

## 4. Format & brand spec (locked defaults)

| Setting | Value | Why |
|---|---|---|
| Orientation | **Vertical 1080×1920** | Shorts / Reels / TikTok native |
| Length | **~35–40s** | Long enough to land NEPQ arc, short enough to finish |
| Narration | **On-screen text + music** (no voiceover for now) | Cheapest/fastest to scale across many pages |
| Music | Royalty-free track, added after animation is approved | Egress may block downloads — build silent first, drop music in |
| FPS | 30 | Standard |

**Brand palette** (pulled from the site):
- Accent gold `#ECAC60` · Black `#000000` · White `#FFFFFF`
- Supporting greys: border `#E5E5E5`, body text `#555555`/`#666666`

---

## 5. Per-page production checklist

For each new page that needs a video:
1. **Read the page** — extract: topic, the "pain" points, the solution name, the proof stats.
2. **Fill the §3 template** → draft script with page-specific beats 4, 5, 10, 11.
3. **Get owner approval** of the script (the gate in §3).
4. **Build/duplicate the Remotion composition** in `video/src/`, pass the script + stats as props.
5. **Render silent** → `npx remotion render <Id> out/<page>.mp4` → review.
6. **Add approved music track** → re-render.
7. **Publish:** embed the video on the page + upload to YouTube (mind §6 guardrails).

---

## 6. Scaling guardrails

- **Phase 1 (now):** 3 pillar pages — `hcm-software`, `job-placement`, `managed-payroll`. Prove the pipeline.
- **Phase 2:** Use Ahrefs traffic data to rank pages; do the **top performers** in controlled batches.
- **Phase 3:** Broader rollout — only after results are measured.
- ⚠️ **YouTube spam risk:** mass-uploading near-identical templated videos to one
  channel can trip duplicate/spam filters and endanger the channel. Vary thumbnails,
  titles, and intros; never dump hundreds at once. (~1,588 service pages exist —
  this is a marathon, not a one-shot batch.)

---

## 7. Decision Log

Newest at top. Each entry: the decision, and **why**.

| ID | Decision | Why |
|----|----------|-----|
| D9 | Logo: persistent small lion mark (top) + full lockup outro | Brand presence throughout; uses the real site logo (`beg-logo.png`) |
| D8 | Music is **synthesized offline** (`scripts/gen-music.js` → `public/music-bed.wav`) | The cloud network policy blocks all external music sites (403). Synthesizing is 100% royalty-free and needs no network. Swap in a downloaded track anytime by replacing `public/music-bed.wav` |
| D7 | Track all of this in this living framework doc | So new pages have a consistent pattern to build videos from as the site grows |
| D6 | Script voice = **curious NEPQ** (ask, never tell) | Page visitors are already problem-aware; asserting their pain feels pushy. Curiosity converts and fits the brand |
| D5 | Start with **on-screen text + music**, no voiceover | Cheapest/fastest path that still scales across hundreds of pages |
| D4 | Scope: **3 pillar pages first**, then scale by Ahrefs traffic | Prove the pipeline + dodge YouTube duplicate-content risk before attempting ~1,588 |
| D3 | SEO mechanism = **on-page embed + video search**, not YouTube backlinks | YouTube description links are `nofollow` — no link authority passed |
| D2 | Format = **vertical 1080×1920, ~35–40s** | Social-native short-form for Reels/Shorts/TikTok |
| D1 | Use **Remotion** for programmatic, templated video generation | One template + page data → N videos; built exactly for this scale |
