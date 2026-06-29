# BEG Video Studio (Remotion)

This is a [Remotion](https://remotion.dev) project — it creates videos from React
code and renders them to MP4. It lives inside the `beghr-nextjs` repo but is a
**separate, self-contained project** (its own `package.json`, its own
`node_modules`). It does NOT affect the Next.js website.

**Purpose:** Produce original short-form video content (animated / "faceless"
graphics, text animations, data visualizations) for BEG HR's social media
accounts, often based on trending HR topics.

## Owner context (read me first)

The owner is a **beginner with no coding background** who is learning as we build.
When working here:

- Explain *why*, not just *what*. Teach the concept behind each change.
- Default to small, visible steps. Render and show a video so they can see results.
- Ask clarifying questions about the desired look/message before writing a lot of code.
- Keep videos vertical (1080×1920) for social by default unless told otherwise.

## How to render a video (works in this cloud environment)

```bash
cd video
npm install            # first time only
npx remotion render <CompositionId> out/<name>.mp4
```

The composition IDs live in `src/Root.tsx` (e.g. `HelloWorld`, `OnlyLogo`).

### Why renders work here without extra flags

This cloud environment blocks Remotion's normal Chromium download. `remotion.config.ts`
auto-detects the pre-installed `chrome-headless-shell` under
`$PLAYWRIGHT_BROWSERS_PATH` (`/opt/pw-browsers`) and points Remotion at it. On a
normal computer that detection finds nothing and Remotion uses its own bundled
browser — so the same config is safe everywhere. Do not delete that block.

After rendering, use the harness's file-send capability to deliver the MP4 to the
owner (they can't open a local preview window in this cloud session).

## Live visual editing (Remotion Studio)

`npm run dev` opens Remotion Studio, a live visual editor — but it needs a browser
window, which this cloud session can't show. To use Studio, the owner should run
this project on their **own computer** (install Claude Code desktop or run Remotion
locally). In the cloud, we iterate by rendering MP4s and reviewing them.

## Skill

`npx skills add remotion-dev/skills` installed the official Remotion best-practices
skill at `.agents/skills/remotion-best-practices/` (symlinked into `.claude/skills/`).
It contains detailed rules (captions, transitions, audio, fonts, effects, etc.).
Consult it when writing Remotion code.

## Content workflow (the bigger picture)

1. **Find trending HR topics** — the parent repo has the Ahrefs MCP connected;
   use it to surface trending HR keywords/topics worth a video.
2. **Write an original short script** in BEG's voice (do NOT copy others' videos).
3. **Build a composition** here (text animation / graphic) for that topic.
4. **Render → review → refine.**
5. **Hand off** the MP4 for posting (and edit further in CapCut/DaVinci if needed —
   those are desktop apps, separate from this project).
