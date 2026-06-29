# Business Executive Group (BEG) — beghr.com

Next.js 14 (App Router) site for Business Executive Group, deployed on Vercel. This is a large programmatic-SEO site (~1,685 page routes) whose job is to book managed-payroll discovery calls and grow organic traffic, running as always-on air cover behind the cold-call team.

> **Source of truth.** This README reflects the site as of June 2026. If something here is wrong, fix it here in the same commit — drift in this file has already caused real incidents (a missing env var, a branch mix-up). Older docs (`PROJECT_SUMMARY.md`, `QUICKSTART.md`) predate the programmatic build and are not authoritative.

---

## What the business sells (so content stays on-message)

- **Managed Payroll + Core HR** — the OWNED product and the economic engine. $25 PEPM (run inside the client's existing platform) or $45 PEPM (run in BEG's isolved HCM). All-inclusive, no per-run or add-on fees, delivered remotely nationwide. **The machine points its firepower here.**
- **iSolved HCM reselling** and **Job Placement** — secondary, affiliate-commission verticals. They get content, not the priority.
- **Core belief preached site-wide:** payroll/HR busywork is a tax on growth; BEG makes it invisible and handled for a fraction of a $60–100k internal hire.
- Primary CTA everywhere: book a 15-minute discovery call — `https://calendly.com/tori-beghr/15-minute-beg-discovery-call`.

---

## Branch & deploy workflow (READ THIS FIRST)

- **`master` is production.** Vercel builds `master` and serves it on `beghr.com`. Only `master` deploys are `target: production`.
- **`wave2/buildout` is the active build branch.** Pushing it builds a Vercel **preview** only (`beghr-nextjs-git-wave2-buildout-beghr.vercel.app`), NOT the live site.
- **To ship to production**, promote the build branch to master (fast-forward):
  ```bash
  git push origin wave2/buildout:master
  ```
- A failed build never takes down the live site: Vercel only swaps the production alias to a build that succeeds.
- Repo: `github.com/toribeghr/beghr-nextjs`. Auto-deploy is wired via GitHub → Vercel (team `beghr`).

## Vercel 8GB build ceiling (the constraint that shapes everything)

The free-tier build container is memory-bound at ~1,500+ pages. Mitigations already in `next.config.js`:
- City/large matrices render via **ISR `generateStaticParams`** instead of full static generation.
- `webpackBuildWorker: true`, `memoryBasedWorkersCount: true`, `workerThreads: false`.
- `typescript.ignoreBuildErrors` + `eslint.ignoreDuringBuilds` (type/lint are validated separately, not during the prod build).

**Rules going forward:**
1. New large programmatic matrices use ISR, not full static.
2. Commit and push in **small batches** (a dozen or two pages), never one giant push.
3. Validate types/lint locally (`npm run lint`), since the build skips them.

---

## Scale & structure

~1,685 `page.tsx` routes; sitemap lists ~2,974 URLs (ISR city routes expand beyond their single file).

```
src/app/
├── layout.tsx              # GTM, Facebook Pixel, fonts, Organization schema
├── page.tsx                # Home
├── services/
│   ├── managed-payroll/     # hub + 50 states + ~32 industries + [competitor] + pricing/cost-calculator
│   ├── hcm-software/        # hub + alternatives-to-X, isolved-vs-X, switch-from-X, industries, size pages
│   └── job-placement/       # hub + industries + [city] ISR grid
├── blog/                    # 32 industry/topic clusters (hand-built ~1,800w posts) + /compare
├── resources/               # tools/calculators, payroll-glossary (151), guides (13), salary-guide (27), reports
└── api/lead/route.ts        # lead capture endpoint (see below)

src/components/   # ServicePage.tsx (service template), Header, Footer, ~15 interactive tools, lead forms
src/lib/          # services.ts (getCalendlyLink), jpGridData.ts (city × industry grid for ISR)
scripts/          # generate-sitemap.js, validate-pages.js
```

> Note: the flat service folders some old docs reference (`services/payroll-legal`, etc.) are **empty/retired**. Live service pages are nested (`services/managed-payroll/legal`, `services/hcm-software/healthcare`). Legacy flat `.html` URLs are 301-redirected to the nested pages in `next.config.js`.

---

## Lead capture (free, no API key)

All forms capture into a **Google Sheet you own**, at $0:

1. A form (`LeadCaptureForm` or `PayrollLeadCaptureForm`) posts to the same-origin route **`/api/lead`**.
2. `/api/lead` forwards the lead server-side to a **Google Apps Script web app** (`LEAD_WEBHOOK` in `src/app/api/lead/route.ts`).
3. Apps Script appends a row to the **BEG Leads** Google Sheet and emails a notification.

No web3forms, no Resend key, nothing to set in Vercel. Same-origin POST avoids browser CORS. See `LEAD_CAPTURE_SETUP.md` for the Apps Script and how to re-deploy it. A success fires a `generate_lead` event into `dataLayer` for analytics. (A branded Resend autoresponder that emails the requested asset is deferred until budget allows.)

---

## Analytics & conversion tracking

- **GTM** `GTM-MVSLWC2S` and **Facebook Pixel** `986930567552609` load in `layout.tsx` (PageView fires).
- **`generate_lead`** is pushed to `dataLayer` on every successful form submit.
- **Still to configure in the GTM UI:** a GA4 event tag triggered by `generate_lead`, a scroll-depth trigger, a click trigger on the Calendly link for `book_call_click`, and FB/LinkedIn conversion mappings.

---

## SEO

- Per-page metadata, canonical (self), Open Graph/Twitter, JSON-LD (WebPage/Service, FAQPage, BreadcrumbList, Organization).
- `next.config.js` 301s: legacy `/blog/hcm-technology/*` → `/blog/hcm-software/*`, and legacy `.html` service URLs → nested clean URLs.
- `public/robots.txt` allows crawling + AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and references the sitemap.
- **Sitemap is generated, not hand-edited:** run `node scripts/generate-sitemap.js` after adding routes (ideally wire it as a `prebuild` step). Static files: images set to `unoptimized` in next.config.

---

## Brand

- **Colors: Black `#000000` + Gold `#ECAC60`.** (No navy anywhere — older docs saying navy/`#0A0E27`/`#D4AF37` are wrong.) `--navy` CSS var = `#000`. Gold buttons: gold gradient bg + black text.
- Fonts: Fraunces (display), Inter (body). Logo: lion mark PNG at `/public/assets/beg-header-image.png`, 75px in header (CSS controls size — do not add inline width/height).
- No em-dashes in any site copy. "isolved" is always lowercase. Cost stat for legal = "roughly 50% less".

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # validate (the prod build skips lint/type-check)
npm run build    # heavy locally due to page count; prefer Vercel preview builds
```

No environment variables are required. The GTM ID and the lead-capture Apps Script URL are in the code.

## Adding pages

1. Follow `PAGE_TEMPLATE.md`. Use the `ServicePage` component for service pages.
2. Include: the BEG belief, a tool/lead magnet where relevant, the `/api/lead` capture form, and a single NEPQ CTA to the Calendly call.
3. Internal-link the new page into its relevant state/industry hub.
4. Regenerate the sitemap, commit in a small batch, push to `wave2/buildout`, verify the preview build is green, then promote to `master`.

---

Business Executive Group © 2026.
