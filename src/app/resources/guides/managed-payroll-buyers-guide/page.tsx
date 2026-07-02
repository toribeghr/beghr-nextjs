import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: "Managed Payroll Buyer's Guide 2026 | Free Download | BEG",
  description: "What to ask before hiring a managed payroll provider: pricing model, implementation time, compliance coverage, and vendor scorecard.",
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides/managed-payroll-buyers-guide',
  },
  openGraph: {
    title: "Managed Payroll Buyer's Guide 2026 | Free Download | BEG",
    description: "What to ask before hiring a managed payroll provider: pricing model, implementation time, compliance coverage, and vendor scorecard.",
    url: 'https://www.beghr.com/resources/guides/managed-payroll-buyers-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Managed Payroll Buyer's Guide 2026 | Free Download | BEG",
    description: "What to ask before hiring a managed payroll provider: pricing model, implementation time, compliance coverage, and vendor scorecard.",
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};


export default function BuyersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.beghr.com/resources/guides' },
              { '@type': 'ListItem', position: 4, name: "Managed Payroll Buyer's Guide", item: 'https://www.beghr.com/resources/guides/managed-payroll-buyers-guide' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Buyer&apos;s Guide</p>
            <h1>Managed Payroll Buyer&apos;s Guide 2026</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              Everything you need to evaluate, compare, and choose a managed payroll provider. Pricing models, red flags, questions to ask, and a comparison scorecard.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Managed Payroll Buyer's Guide"
            toolDescription="Vendor scorecard, red-flag checklist, and 25 questions to ask any provider -- emailed to you."
            assetUrl="/resources/guides/managed-payroll-buyers-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>

      {/* GUIDE CONTENT */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div>
              <h2 style={{ marginBottom: '0.75rem' }}>What this guide covers</h2>
              <p style={{ color: '#555555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Most employers evaluating managed payroll have the same questions: what does it actually include, how does the pricing work, and how do I know if a provider is legitimate. This guide answers all of it, including what to watch out for when vendors quote you a low base fee that explodes with add-ons.
              </p>

              {[
                {
                  num: '01',
                  title: 'What managed payroll actually is',
                  body: 'Managed payroll is a fully outsourced payroll function. A managed service provider runs your payroll every cycle, handles all tax filings, produces W-2s, and manages compliance. It is not payroll software. You do not log in every two weeks and run payroll yourself. The provider handles it. The distinction matters because most vendors sell software and call it "managed."',
                },
                {
                  num: '02',
                  title: 'How pricing models work',
                  body: 'Three common pricing structures: PEPM (per employee per month) is the most transparent. Flat monthly base plus per-run fees adds up fast if you process weekly payroll. Per-run pricing with employee tiers is the least predictable. True managed payroll at a flat PEPM is what to look for. BEG charges $25-$45 PEPM all-inclusive.',
                },
                {
                  num: '03',
                  title: 'Questions to ask every provider',
                  body: 'Ask these before signing anything: What exactly is included in your base price? What triggers an additional charge? Do I get a dedicated contact or a shared support queue? How do you handle errors? What is your implementation timeline? Can you work in my existing payroll system, or do I have to migrate? What states are you licensed to process in? How are garnishments handled? Any provider who hedges on these is not a managed service.',
                },
                {
                  num: '04',
                  title: 'Red flags to avoid',
                  body: 'Walk away if you hear any of these: "base fee plus per-run charges plus filing fees" (hidden cost model), "you will have access to our support team" without a dedicated contact, "we do not handle garnishments" or "that is a separate service," "implementation takes 30 to 60 days" (standard is 3 to 14 days), or "we only work in our platform" with no option to use your current system.',
                },
                {
                  num: '05',
                  title: 'Vendor comparison scorecard',
                  body: 'When evaluating providers, score them on: all-inclusive pricing (yes/no), dedicated payroll contact (yes/no), works in your existing system (yes/no), all 50 states covered (yes/no), implementation in under 14 days (yes/no), guaranteed error correction at no charge (yes/no), and ACA reporting included (yes/no). Any vendor with fewer than 5 of 7 is not a full managed service.',
                },
                {
                  num: '06',
                  title: 'Implementation: what to expect',
                  body: 'A legitimate managed payroll provider onboards you in 3 to 14 business days depending on complexity and system. What should happen: discovery call to review your current setup, data migration or system access setup, a test cycle before your first live payroll, and a dedicated contact confirmed before you go live. If a provider quotes 30 to 60 days, they are either understaffed or treating you as a low priority.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ background: '#ECAC60', color: '#000000', fontWeight: '800', fontSize: '0.9rem', padding: '0.2rem 0.55rem', borderRadius: '4px', flexShrink: 0, marginTop: '3px' }}>{num}</span>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1.35' }}>{title}</h3>
                      <p style={{ color: '#555555', fontSize: '0.93rem', lineHeight: '1.7', margin: 0 }}>{body}</p>
                    </div>
                  </div>
                </div>
              ))}

              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: '1.65', marginTop: '1rem' }}>
                Ready to stop evaluating and start delegating payroll? <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> runs at $25-$45 PEPM all-inclusive. Book a free 15-minute call to get an exact quote.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem', maxWidth: '480px' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.6rem' }}>Also helpful:</strong>
                {[
                  { label: 'Year-End Payroll Checklist', href: '/resources/guides/year-end-payroll-checklist' },
                  { label: 'Payroll Complexity Scorer', href: '/resources/complexity-scorer' },
                  { label: 'Managed Payroll FAQ', href: '/faq/managed-payroll' },
                  { label: 'Switching Payroll Providers FAQ', href: '/faq/switching-payroll-providers' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} style={{ display: 'block', fontSize: '0.88rem', color: '#ECAC60', padding: '0.3rem 0', textDecoration: 'underline' }}>{label}</Link>
                ))}
              </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow">Ready to Get a Quote?</p>
          <h2>Book a free 15-minute call. Get an exact monthly cost before you commit.</h2>
          <p style={{ color: '#555555', lineHeight: '1.7', margin: '1rem 0 2rem' }}>
            BEG will review your current payroll setup, answer every question in this guide, and give you an exact PEPM quote on the call. No pressure. No commitment.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>
      </section>
    </>
  );
}
