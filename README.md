# Business Executive Group (BEG) — beghr.com

Next.js 14 (App Router) site for Business Executive Group, deployed on Vercel. A large programmatic-SEO site (~1,685 page routes, sitemap ~2,977 URLs) whose job is to book managed-payroll discovery calls and grow organic traffic, running as always-on air cover behind the cold-call team.

> **Source of truth.** This README reflects the site as of July 2026. If something here is wrong, fix it here in the same commit — drift in this file has already caused real incidents (a missing env var, a branch mix-up, redirects in the wrong file).

---

## What the business sells (so content stays on-message)

- **Managed Payroll** — the OWNED product and economic engine. **$25 PEPM** (run inside the client's existing platform) or **$45 PEPM** (run in BEG's isolved HCM), with a **$500 monthly minimum** (monthly = greater of $500 or employees x PEPM; optional $10 PEPM benefits add-on; multi-state setup $300 one-time). All-inclusive, delivered remotely nationwide. **The machine points its firepower here.**
- **iSolved HCM reselling** and **Job Placement** — secondary, affiliate-commission verticals. They get content, not the priority.
- **Core belief preached site-wide:** payroll/HR busywork is a tax on growth; BEG makes it invisible and handled for a fraction of a $60-100k internal hire.
- Primary CTA everywhere: book a 15-minute discovery call — `https://calendly.com/tori-beghr/15-minute-beg-discovery-call`. Commercial pages also offer an instant-pricing form (see `src/components/pricing/`).

---

## Branch & deploy workflow (READ THIS FIRST)

- **`master` is production.** Vercel builds `master` and serves it on `beghr.com`.
- **`wave2/buildout` is the active build branch.** Pushing it builds a Vercel **preview** only (`beghr-nextjs-git-wave2-buildout-beghr.vercel.app`), NOT the live site.
- **To ship to production**, promote the build branch to master:
  ```bash
  git push origin wave2/buildout:master
  ```
- Multiple sessions touch `wave2/buildout`, so it can diverge. If a push is rejected as non-fast-forward, `git pull origin wave2/buildout --no-rebase --no-edit` then push. Check `git log`/other running sessions before promoting.
- The sandbox agents CANNOT run git (mount EPERM, no GitHub creds) and leave stale `.git/*.lock`. Anthony pushes from his Terminal.
- Repo: `github.com/toribeghr/beghr-nextjs`. Auto-deploy via GitHub → Vercel (team `beghr`).

## Vercel 8GB build ceiling (the constraint that shapes everything)

The free-tier build container is memory-bound at ~1,500+ pages. Mitigations in `next.config.js`:
- Large matrices (city grids, etc.) render via **ISR `generateStaticParams`**, not full static.
- `webpackBuildWorker: true`, `memoryBasedWorkersCount: true`, `workerThreads: false`.
- `typescript.ignoreBuildErrors` + `eslint.ignoreDuringBuilds` (validated separately, not during the prod build).

**BUT the repo's `tsconfig` runs `noUnusedLocals` + `noUnusedParameters`** — an unused import/param/var still fails the build. Clone existing working pages, remove dead imports, prefix unused params with `_`, no stray syntax, no apostrophes inside single-quoted metadata strings.

**Rules going forward:** new large matrices use ISR; commit and push in **small batches**; validate locally (`npm run lint`).

---

## Scale & structure

```
src/app/
├── layout.tsx              # GTM, Consent Mode v2, self-hosted fonts, Organization schema, RSS <link>
├── page.tsx                # Home
├── services/
│   ├── managed-payroll/     # hub + 50 states + industries + [competitor] + pricing/cost-calculator
│   ├── hcm-software/        # hub + alternatives-to-X, isolved-vs-X, industries, size pages
│   └── job-placement/       # hub + industries + [city] ISR grid
├── blog/                    # ~1,000 posts across 32 industry/topic clusters + /compare
├── resources/               # tools/calculators, glossary, guides, salary guide, reports
├── terms/  privacy-policy/  # legal
└── api/lead/route.ts        # lead capture endpoint (see below)

src/components/   # ServicePage.tsx, Header, Footer, ConsentBanner, ~15 interactive tools, lead forms, pricing/ (instant-quote modals)
src/lib/          # services.ts (getCalendlyLink), jpGridData.ts (city × industry ISR grid)
scripts/          # see "Build scripts" below
public/blog-images/  # generated branded post images (webp)
```

> Redirects (legacy flat/.html service URLs → nested pages) live in **`vercel.json`**, NOT `next.config.js`. KEY LEARNING: **next.config.js redirects are IGNORED when vercel.json defines routing.** Put redirects in `vercel.json`.

---

## Lead capture (free, no API key)

All forms capture into a **Google Sheet you own**, at $0:
1. A form (`LeadCaptureForm` / `PayrollLeadCaptureForm` / the instant-pricing modals in `src/components/pricing/`) posts to the same-origin route **`/api/lead`**.
2. `/api/lead` forwards the lead server-side to a **Google Apps Script web app** (`LEAD_WEBHOOK` in `src/app/api/lead/route.ts`).
3. Apps Script appends a row to the **BEG Leads** Google Sheet, emails a notification, and sends a **branded Gmail autoresponder** delivering the requested asset (CAN-SPAM footer: Plano address + unsubscribe).

No web3forms, no Resend, nothing to set in Vercel. Same-origin POST avoids CORS. A success fires a `generate_lead` `dataLayer` event. See `LEAD_CAPTURE_SETUP.md` for the Apps Script and how to re-deploy it (edit the ACTIVE deployment → new version; never a new deployment, or the /exec URL breaks). The Apps Script mirror (`BEG_Lead_Capture*.gs`) is PRIVATE — has the Sheet ID, never commit it here.

---

## Analytics, tracking & consent

- **GTM** `GTM-MVSLWC2S`; **GA4** measurement ID `G-TPLMPWBMSF`. GTM is **GA4-only** (Config + `book_call_click` + `generate_lead`).
- **Ad pixels are REMOVED** (Meta Pixel deleted from code July 1; LinkedIn Insight Tag removed from GTM). No paid ads planned; re-add **Google Ads** tags first, only when campaigns start.
- **Cookie consent banner + Google Consent Mode v2 are LIVE** (`ConsentBanner.tsx`; default DENIED; GA runs only after the visitor accepts). Sets `beg_consent` cookie for 1 year.
- GA4 key events: `book_call_click`, `close_convert_lead`, `qualify_lead`; `generate_lead` fires on consented form success.
- **Google Search Console is connected** via the free "Search Analytics for Sheets" add-on → a Google Sheet (read via the Sheets connector). Data is thin (new site), not blocked. Do not "reconnect GSC".

---

## SEO & indexing

- Per-page metadata, self canonical, Open Graph/Twitter, JSON-LD (WebPage/Service/Article, FAQPage, BreadcrumbList, Organization).
- `public/robots.txt` allows crawling + AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and references the sitemap.
- **Sitemap is generated, not hand-edited:** `node scripts/generate-sitemap.js` after adding routes.
- **RSS feed** for faster discovery + social auto-posting: `node scripts/generate-feed.js` writes `public/feed.xml` (50 newest posts by `datePublished`); the head `<link rel="alternate" type="application/rss+xml">` is in `layout.tsx`. Submit `feed.xml` as a sitemap in GSC + Bing.
- **IndexNow** (Bing/Yandex; Google does not use it): `python3 scripts/indexnow-submit.js <url> [...]` pings the IndexNow API. Key file lives at `public/<key>.txt`. Google indexing rides on the sitemap + feed + GSC request-indexing.
- Redirects: see `vercel.json` (not next.config).

---

## Branded post images (AI-generated, on-brand)

Every blog post gets a topic-matched, BEG-branded header image (relevant scene photo + category tag + headline + gold lion mark + gold accent bar), which also serves as the OG/social share card.

- **`scripts/make-post-image.py <slug> "<Category>" "<Headline>" "<scene topic>"`** — Gemini 2.5 Flash Image generates the scene (16:9, no text), PIL composites the BEG featured-card treatment, saves `public/blog-images/<slug>.webp`. Self-installs Pillow; skips if the file exists (no re-billing).
- **`scripts/backfill-post-images.py [--limit N] [--dry]`** — generates industry-matched images for existing posts that lack one (maps URL path → scene).
- **`scripts/wire-post-images.py [--limit N] [--dry] [--only X]`** — inserts the full-width `<img>` banner between hero and body and points `openGraph`/`twitter` images at the card. Idempotent, conservative (never writes broken JSX).
- **Slug convention:** `blog-<path with slashes as hyphens>` (e.g. `/blog/payroll/construction/certified-payroll` → `blog-payroll-construction-certified-payroll`).
- **API key:** read from `GEMINI_API_KEY` or `~/Downloads/Claude/gemini_api_key.txt`. **Never commit the key.** Free tier ~500 images/day = $0 at this volume.
- Automated by the **`blog-image-backfill`** scheduled task (nightly generate + wire, ~400/day) and by **Content Forge** for every new post.

---

## Brand

- **Colors: Black `#000000` + Gold `#ECAC60`.** No navy. `--navy` CSS var = `#000`. Gold buttons: gold gradient bg + black text.
- Fonts: self-hosted via `next/font` (Fraunces display, Inter body). Image scripts use Playfair Bold + Inter (`scripts/fonts/`). Logo: lion PNG at `/public/assets/beg-header-image.png`, 75px in header (CSS controls size — no inline width/height).
- **No em-dashes in any copy.** "isolved" is always lowercase. Managed-payroll price is always `$25-$45 PEPM` with the $500 minimum. Legal cost stat = "roughly 50% less". BEG is a NATIONAL brand — no "DFW" in service copy (DFW only for DFW Leadership Connect events).

---

## Build scripts (`scripts/`)

| Script | Purpose |
|--------|---------|
| `generate-sitemap.js` | Walk routes → `public/sitemap.xml` (run after adding pages) |
| `generate-feed.js` | 50 newest posts → `public/feed.xml` (RSS) |
| `indexnow-submit.js` | Ping Bing/Yandex IndexNow with URL(s) |
| `make-post-image.py` | One post → branded WebP header image |
| `backfill-post-images.py` | Bulk-generate images for existing posts |
| `wire-post-images.py` | Insert image banner + OG into existing posts |
| `validate-pages.js` | Sanity-check pages |

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # validate (the prod build skips lint/type-check)
npm run build    # heavy locally; prefer Vercel preview builds
```

No env vars required to run the site (GTM ID + lead Apps Script URL are in code). `GEMINI_API_KEY` is only needed by the image scripts and is read from the private key file, never committed.

## Adding pages

1. Follow `PAGE_TEMPLATE.md`. **STEP 0: SERP depth check** vs the current #1 result (build deeper). Use the `ServicePage` component for service pages; clone the closest working page.
2. Embed the **one interactive tool chosen by relevance** to the page's searcher (no default), with a tailored callout.
3. Include: the BEG belief, the `/api/lead` capture form, a single NEPQ CTA to Calendly, contextual up-link to the silo hub, BreadcrumbList + relevant JSON-LD, self canonical, `dateModified` (+ `datePublished` for posts). Write the meta description as a punchy hook (it doubles as the RSS/social caption).
4. **Generate the branded header image** (`make-post-image.py`), render it near the top of the post, and set `openGraph`/`twitter` images to it.
5. `node scripts/generate-sitemap.js` && `node scripts/generate-feed.js`; then `python3 scripts/indexnow-submit.js <url>`.
6. Commit in a small batch → push `wave2/buildout` → verify the preview is green → promote to `master`.

---

Business Executive Group © 2026.
