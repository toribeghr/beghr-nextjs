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

- [ ] `title` — unique, under 60 characters, includes primary keyword
- [ ] `description` — unique, 140–160 characters, includes keyword + CTA signal
- [ ] `alternates.canonical` — exact URL, no trailing slash, uses `https://beghr.com`
- [ ] OG title + description set (inherits from metadata — confirm they're not generic)
- [ ] Page does NOT use the fallback layout title ("Business Executive Group - Payroll…")

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

---

## 6. On-Page SEO

- [ ] One `<h1>` per page — contains primary keyword naturally
- [ ] `<h2>` and `<h3>` tags used for section structure (not styling)
- [ ] Primary keyword appears in first 100 words of body copy
- [ ] Calendly link is live: `https://calendly.com/tori-beghr/15-minute-beg-discovery-call`
- [ ] No placeholder copy ("Lorem ipsum", "Coming soon", "TBD")

---

## 7. Tracking

- [ ] GTM fires on page (GTM-MVSLWC2S is in layout.tsx — no action needed per page)
- [ ] Meta Pixel fires on page (986930567552609 is in layout.tsx — no action needed per page)
- [ ] If page has a unique CTA button, confirm `book_call_click` or equivalent event fires
- [ ] New service/landing pages: notify Anthony to check GA4 for traffic after deploy

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
