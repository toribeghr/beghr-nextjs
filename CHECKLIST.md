# BEG Page Build Checklist

Every new page must pass all items before git push. Claude checks this automatically at the end of every build session.

---

## 1. File & Route

- [ ] Page file is at `src/app/[route]/page.tsx`
- [ ] Route slug is lowercase, hyphenated, no trailing slash
- [ ] Page added to `public/sitemap.xml` with `<lastmod>` set to today's date
- [ ] If page replaces an old URL, a 301 redirect is added in `next.config.js`

---

## 2. Metadata (every page needs all of these)

- [ ] `title` — unique, **45–65 characters**, includes primary keyword
- [ ] `description` — unique, 140–155 characters, includes keyword + CTA signal
- [ ] `alternates.canonical` — exact URL, no trailing slash, uses `https://beghr.com`
- [ ] OG title + OG description set and match metadata title/description
- [ ] Twitter card set and matches OG
- [ ] Page does NOT use the fallback layout title ("Business Executive Group - Payroll…")

### Title tag formula (always follow this)

**Structure:** `[Primary keyword] | [Bold differentiating claim] | BEG`

The differentiating claim must be something competitors literally cannot or do not publish. Generic modifiers ("fast", "affordable", "trusted") are NOT acceptable.

**Approved claims by vertical:**

| Vertical | Lead claim | Secondary options |
|----------|------------|-------------------|
| Managed Payroll | "We Run It. Not You." or "$25–$45 PEPM." | "Done For You. Not Software." / "3-5 Day Setup." |
| Job Placement | "23-35 Days. Guaranteed." or "86% Fill Rate." | "45-Day Guarantee." / "Roles Filled 3× Faster." |
| HCM Software | "Only Platform With Claude AI." or "330% ROI." | "BEG Implements." / "Claude AI Integration." |
| Cannabis/Church/specialty | Industry-specific compliance win | e.g. "280E Handled." / "Housing Allowance Handled." |
| Comparison pages | Direct outcome contrast | e.g. "We Cost Less. You Do Less Work." |

**Examples of good vs. bad:**

| Bad (generic) | Good (differentiating) |
|---------------|----------------------|
| "Managed Payroll Services \| BEG" | "Managed Payroll \| We Run It. Not You. $25–$45 PEPM. \| BEG" |
| "Attorney Placement Services \| BEG" | "Job Placement \| 23-35 Days. 86% Fill Rate. Guaranteed. \| BEG" |
| "iSolved HCM Software \| BEG" | "iSolved HCM \| Only Platform With Claude AI. 330% ROI. \| BEG" |

**Rules:**
- Primary keyword goes first (for ranking signal)
- Claim uses a specific stat, guarantee, or direct contrast — never a vague adjective
- `| BEG` at the end (brand recognition in SERP)
- Hard cap: 65 characters
- OG title and Twitter title must match the metadata title exactly

---

## 3. Images

- [ ] All images are **WebP format** — no raw PNGs or JPGs in production
- [ ] Hero images: max 900×900px, under 150KB
- [ ] Board/team photos: max 480×480px, under 50KB
- [ ] Every `<img>` tag has a meaningful `alt` attribute
- [ ] No staging or temp image files left in `public/assets/` (files named "new …")
- [ ] OG image (`/assets/og-image.png`) is 1200×630px — do not replace unless intentional

---

## 4. Schema Markup

- [ ] Service pages: include `Service` or `ProfessionalService` schema
- [ ] Blog posts: include `BlogPosting` schema with `datePublished`, `author`, `headline`
- [ ] Inner pages (not homepage): include `BreadcrumbList` schema
- [ ] No duplicate schema — check layout.tsx already has `Organization` globally

---

## 5. Internal Linking

- [ ] Page links to at least one relevant service page
- [ ] Page links to at least one relevant blog post (or vice versa)
- [ ] All internal `href` values use relative paths (`/services/...`, not `https://beghr.com/...`)
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`

**Service pages:** include a `<RelatedPosts />` section (3 cards) before the closing schema/tags. Import from `@/components/RelatedPosts`. Place after the last content section, before the `<script type="application/ld+json">` blocks. Pass `posts={[...]}` with `category`, `title`, `excerpt`, and `href` for 3 relevant blog posts.

**Blog posts:** include at least 1 external authority link contextually in the body copy. Approved sources by vertical:
- Legal hiring: americanbar.org, bls.gov/ooh/legal, nalp.org, acc.com
- Payroll: irs.gov, dol.gov, americanpayroll.org
- HCM software: shrm.org, isolved.com, gartner.com
- Entrepreneur: bls.gov, dol.gov, shrm.org

---

## 6. On-Page SEO

- [ ] One `<h1>` per page — contains primary keyword naturally
- [ ] `<h2>` and `<h3>` tags used for section structure (not styling)
- [ ] Primary keyword appears in first 100 words of body copy
- [ ] Calendly link is live: `https://calendly.com/tori-beghr/15-minute-beg-discovery-call`
- [ ] No placeholder copy ("Lorem ipsum", "Coming soon", "TBD")

---

## 7. Tracking

All three trackers fire automatically on every page — no per-page action needed:

- GTM (GTM-MVSLWC2S) — in layout.tsx globally. Loads GA4 + LinkedIn Insight Tag on every page.
- Meta Pixel (986930567552609) — in layout.tsx globally. PageView fires on every page.
- LinkedIn Insight Tag (Partner ID: 548960913) — GTM Version 4, trigger: All Pages.
- GA4 book_call_click — GTM fires on any click where URL contains calendly.com. Automatic on all pages.

Only action required per page:
- [ ] If the page has a NEW custom CTA that is NOT a Calendly link, add a GTM trigger + GA4 event tag for it
- [ ] New service/landing page: notify Anthony to check GA4 for traffic after deploy

---

## 8. Before Every Git Push

- [ ] Run: `git status` — confirm only intended files are staged
- [ ] No `.lock` files in `.git/` — if present, `rm -f .git/HEAD.lock` before push
- [ ] Sitemap `<lastmod>` dates updated to today for any modified pages
- [ ] Staging/temp files removed from `public/assets/`
- [ ] Command: `cd ~/Downloads/Claude/outputs/beghr-nextjs && git add -A && git commit -m "[description]" && git push origin master`

---

## 9. After Deploy (Vercel auto-deploys from master)

- [ ] Check live URL loads correctly
- [ ] Verify images display (not broken, not too slow)
- [ ] Share URL + page path with Anthony for review
- [ ] If new page: submit URL in Google Search Console → URL Inspection → Request Indexing

---

## Hard Rules (never violate)

- No em-dashes (`--`) in any copy
- Apollo company variable is `{{account.name}}`, not `{{company}}`
- Legal placement cost stat: always "roughly 50% less" — never "40%"
- `images: { unoptimized: true }` stays in next.config.js — we optimize manually to WebP
- isolved is always lowercase in copy
- Do not add `width`/`height` inline styles to the header logo `<img>` tag
