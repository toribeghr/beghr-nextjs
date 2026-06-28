# BEG Page Build Standard
> Every new page on beghr.com follows this structure. Do not deviate without Anthony's approval.

---

## Hero Section (required on every page)

All pages use the **split hero layout**: text left, image right on desktop. Image stacks below CTA on mobile (≤880px breakpoint).

### Structure
```
[HERO — black bg]
  [GRID 50/50, gap 64px, align-items: stretch]
    LEFT: eyebrow → h1 → lede → CTA button
    RIGHT: HeroImageBox (SVG placeholder or real photo)
  [/GRID]
  [TRUST ROW or STATS — full width, spans both columns, sits below the grid]
[/HERO]
```

### Rules
- Eyebrow stays **inside** the left text column (paired with h1)
- Stats / trust-row goes **outside** the `.hero-split` div, after it closes, still inside `.container`
- Image box has **no fixed aspect ratio** — height matches the left column dynamically
- Image box: 14px border-radius, strong black modal shadow, subtle gold border ring (all in `.hero-img-box` CSS)
- On mobile: image `order: 2` (stacks below CTA)

---

## Standard Page Template (no ServicePage component)

Use this for: home, about, contact, network pages, blog index pages, standalone pages.

```tsx
import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Page Title | Business Executive Group',
  description: 'Page description.',
  alternates: { canonical: 'https://beghr.com/your-slug' },
};

export default function YourPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Category · Subcategory</p>
              <h1>Your headline here.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Supporting paragraph copy.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn--gold"
                  href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
            <HeroImageBox
              src="/assets/hero-images/your-image.svg"
              alt="Descriptive alt text"
            />
          </div>
          {/* OPTIONAL: trust-row or stats go HERE, outside hero-split, inside container */}
          {/* <div className="trust-row">...</div> */}
        </div>
      </section>

      {/* Page body sections below */}
    </>
  );
}
```

---

## Service Page Template (uses ServicePage component)

Use this for: all `/services/*` pages. The `ServicePage` component handles the hero split automatically.

```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Service Name | Business Executive Group',
  description: 'Service description.',
  alternates: { canonical: 'https://beghr.com/services/your-service' },
};

const pageSlug = 'your-service';
const calendlyLink = getCalendlyLink(pageSlug);

export default function YourServicePage() {
  return (
    <ServicePage
      eyebrow="Service Category · Powered by iSolved"
      title="Your service headline."
      description="Supporting description paragraph."
      calendlyLink={calendlyLink}
      imageSrc="/assets/hero-images/your-image.svg"
      imageAlt="Descriptive alt text"
      heroStats={[
        { value: 'Stat', label: 'Label' },
        { value: 'Stat', label: 'Label' },
        { value: 'Stat', label: 'Label' },
      ]}
    >
      {/* Page body sections here */}
    </ServicePage>
  );
}
```

---

## Blog Article Template

Use this for: all individual blog post pages under `/blog/`.

```tsx
import { Metadata } from 'next';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Article Title',
  description: 'Article description.',
  alternates: { canonical: 'https://beghr.com/blog/category/article-slug' },
};

export default function ArticlePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Category Name</p>
              <h1>Article Title</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> Month DD, YYYY</span>
                <span><strong>Read time:</strong> X min</span>
              </div>
            </div>
            <HeroImageBox
              src="/assets/hero-images/your-image.svg"
              alt="Article topic"
            />
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        {/* Article body */}
      </section>
    </article>
  );
}
```

---

## Hero Images

All placeholder SVGs live in `/public/assets/hero-images/`. When swapping in a real photo:
1. Drop the image file into `/public/assets/hero-images/`
2. Update the `src` prop on `HeroImageBox` in the page file
3. `git add -A && git commit -m "..." && git push origin master`

**Available SVGs:**

| File | Topic |
|------|-------|
| `home.svg` | Homepage / general BEG |
| `about.svg` | About / people |
| `contact.svg` | Contact |
| `membership.svg` | Network community |
| `sponsorship.svg` | Brand / broadcast |
| `payroll.svg` | Payroll / calculator |
| `hcm-software.svg` | HCM software / laptop |
| `job-placement.svg` | Job placement / person |
| `legal.svg` | Legal / scales |
| `healthcare.svg` | Healthcare / cross |
| `finance.svg` | Finance / bar chart |
| `technology.svg` | Technology / chip |
| `engineering.svg` | Engineering / gear |
| `executive.svg` | Executive / suit |
| `trades.svg` | Trades / wrench |
| `blog.svg` | Blog / open book |
| `entrepreneur.svg` | Entrepreneur / lightbulb |
| `trends.svg` | Market trends / chart |
| `remote-work.svg` | Remote work / wifi screen |
| `startup.svg` | Startup / rocket |
| `automation.svg` | HR automation / gears |
| `compliance.svg` | Compliance / shield |
| `restaurant.svg` | Restaurant / utensils |
| `hotel.svg` | Hospitality / building |
| `ecommerce.svg` | E-commerce / shopping bag |
| `cloud-saas.svg` | SaaS / cloud |
| `dental.svg` | Dental / tooth |
| `real-estate.svg` | Real estate / house |
| `recruiting.svg` | Recruiting / magnifying glass |
| `nonprofit.svg` | Nonprofit / heart |
| `retail.svg` | Retail / price tag |
| `manufacturing.svg` | Manufacturing / factory |
| `wealth.svg` | Wealth / coins + chart |
| `construction.svg` | Construction / hard hat |

---

## Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.hero` | Black hero section, white text, 88px padding |
| `.hero-split` | 50/50 grid, align-items stretch, 64px gap |
| `.hero-split-text` | Left text column |
| `.hero-split-img` | Right image column (flex, fills height) |
| `.hero-img-box` | Image container — 14px radius, modal shadow, gold border ring |
| `.hero-img-placeholder` | Gradient placeholder when no photo |
| `.trust-row` | Full-width stat row, sits outside `.hero-split` |
| `.hero-cta` | CTA button row inside text column |
| `.section` | Standard content section, 88px padding |
| `.section--soft` | Light gray background section |
| `.section--navy` | Black background section |
| `.container` | Max-width 1140px, centered, 24px side padding |

---

## Universal Layout (layout.tsx)

Every page automatically renders in this order — no per-page setup needed:

```
<Header />
{children}         ← page content
<SocialFollow />   ← Option A strip: black bg, gold icons, 4 platform buttons
<Footer />         ← contact info + map only (social icons removed)
```

**SocialFollow component:** `src/components/SocialFollow.tsx`
CSS class: `.social-follow` — defined in globals.css.
Platforms: LinkedIn (@businessexecutivegroup), Facebook, Instagram, YouTube (@TheHRExecutiveGroup).
Mobile: buttons stack single column, centered, max-width 280px.

**Footer:** 4-column grid — Contact info (left) + Managed Payroll links + HCM Software links + Job Placement links. No map (map lives on /contact only). No social icons (those live in SocialFollow). Gold column headers, arrow link style (`›`), Overview link bolded per column. Mobile: collapses to 2-col at 880px, 1-col at 520px.

---

## Mobile Behavior (≤880px)
- `.hero-split` collapses to single column
- `.hero-split-img` gets `order: 2` — image appears below CTA, never above text
- All other sections stack naturally

---

## Voice + AEO Content Standard (REQUIRED on every new page)

This is a build-process rule, not optional polish. The same answer-first structure that wins voice-assistant answers also wins AI-search citations (ChatGPT, Perplexity, Gemini, Google AI Overviews). Apply it to every new page.

1. **Question-style headings.** Phrase key H2/H3s the way people ask out loud: "What is the best HCM software for restaurants?" not "Restaurant HCM."
2. **A ~29-word direct answer first.** Immediately under each question heading, give one clear, self-contained answer of roughly 25 to 35 words before the longer prose. That short answer is what gets read aloud and pulled as a snippet or citation.
3. **Conversational FAQs.** Keep the FAQ block on every page, phrased in natural spoken language, with `FAQPage` JSON-LD (already standard).
4. **Speakable schema on key pages.** Add a `speakable` block to the page JSON-LD pointing at the answer passages, so assistants know what to read:

```tsx
{
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'],
  },
  url: 'https://beghr.com/your-slug',
}
```

5. **TL;DR / key-takeaways block** near the top (class `tldr`) summarizing the page in 2 to 3 lines. Comparison pages already do this as "Bottom Line Up Front"; extend the pattern to all page types.

Rules that still apply: no em-dashes, iSolved capitalized in display text, one clear claim per section backed by a fact.

---

## Lead Pages + Mobile Responsiveness (REQUIRED on every lead or landing page)

Every page that captures a lead (forms, calculators, gated downloads, salary or resource pages) must be fully responsive and must never split or smush on mobile. These are build-process rules, not optional polish.

1. **Always use the shared `LeadCaptureForm` component.** Never hand-build a form. Import it from `@/components/LeadCaptureForm`. It is responsive by default: `width: 100%` up to a `460px` max, centered with `margin: 0 auto`, `box-sizing: border-box`, single column on every screen. Props: `toolName`, `toolDescription`, optional `assetUrl`, `assetLabel`, `calendlyLink`, `followupText`.

2. **Place the opt-in directly under the H1, not at the bottom.** Put the form in a centered container immediately after the hero so it is the first thing under the headline:
   ```tsx
   <section className="section section--soft">
     <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
       <h2>Get the [asset]</h2>
       <p>One line on what they are requesting.</p>
       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
         <LeadCaptureForm toolName="..." toolDescription="..." />
       </div>
     </div>
   </section>
   ```

3. **No fixed two-column layouts that do not stack.** Any side-by-side block must collapse to one column on mobile. Use `display: grid; gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'` or `display: flex; flexWrap: 'wrap'`, or the site grid classes. Never use a fixed `'1fr 1fr'` / `'repeat(2, 1fr)'` without a wrap or breakpoint.

4. **Wide tables scroll, not smush.** Wrap any data table in a scroll container and give the table a `min-width` so it scrolls horizontally on small screens instead of cramming:
   ```tsx
   <div style={{ overflowX: 'auto' }}>
     <table style={{ width: '100%', minWidth: '440px' }}>...</table>
   </div>
   ```

5. **Verify at 390px.** Before shipping a lead page, confirm at phone width that the form, tables, and any columns stack cleanly and the page itself has no horizontal scroll.
