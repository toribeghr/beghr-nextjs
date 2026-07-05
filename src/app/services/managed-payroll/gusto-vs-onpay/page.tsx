import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Gusto vs OnPay: Honest Payroll Comparison + Instant Quote',
  description: 'Gusto vs OnPay refereed honestly: tiered feature plans vs one flat published price. Comparison table, decision scenarios, and FAQs.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/gusto-vs-onpay' },
  openGraph: {
    title: 'Gusto vs OnPay: Honest Payroll Comparison + Instant Quote',
    description: 'Gusto vs OnPay refereed honestly: tiered feature plans vs one flat published price. Comparison table, decision scenarios, and FAQs.',
    url: 'https://www.beghr.com/services/managed-payroll/gusto-vs-onpay',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gusto vs OnPay: Honest Payroll Comparison + Instant Quote',
    description: 'Gusto vs OnPay refereed honestly: tiered feature plans vs one flat published price. Comparison table, decision scenarios, and FAQs.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('managed-payroll-gusto-vs-onpay');

const FAQS: [string, string][] = [
  [
    'Does Gusto or OnPay have more plan tiers?',
    'Gusto publishes several tiers, from a contractor-only plan up through its premium plan with dedicated support, each with a different base fee and feature set. OnPay publishes one core plan structure with add-ons rather than multiple feature tiers, which its site frames as simpler.',
  ],
  [
    'Which is cheaper, Gusto or OnPay?',
    'Both publish pricing, so you can compare directly on their sites: Gusto\'s tiers scale up in base fee and per-employee cost as you add features, while OnPay lists one published base-plus-per-employee rate. Check both current pricing pages for your headcount since published numbers can change.',
  ],
  [
    'Does either platform handle benefits and workers comp?',
    'Both publish benefits and workers compensation administration as part of their platforms, tied to their respective broker or partner relationships. Gusto also operates its own licensed brokerage; OnPay\'s benefits page details its own broker partnerships.',
  ],
  [
    'Is OnPay or Gusto better for accountants and bookkeepers?',
    'Both run accountant partner programs. OnPay markets a dedicated accountant partner dashboard and revenue-share tiers on its accountant pricing page, while Gusto runs its own Gusto Pro partner program for accounting firms.',
  ],
  [
    'Where does BEG fit in a Gusto vs OnPay decision?',
    'Both are software your team runs yourselves, however simple the interface. If you would rather payroll actually be run for you at a flat $25 to $45 PEPM all-inclusive, inside your existing system, that is BEG managed payroll, with an instant on-screen estimate instead of signing up for another platform.',
  ],
];

export default function GustoVsOnpayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Gusto vs OnPay: An Honest Comparison',
            description: 'Gusto vs OnPay refereed honestly: tiered feature plans vs one flat published price. Comparison table, decision scenarios, and FAQs.',
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: 'https://www.beghr.com/services/managed-payroll/gusto-vs-onpay',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Gusto vs OnPay', item: 'https://www.beghr.com/services/managed-payroll/gusto-vs-onpay' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Gusto or OnPay: feature tiers, or one flat published price?"
        description="Gusto sells payroll, benefits, and HR across several published tiers. OnPay publishes a single core plan with add-ons and markets itself on simplicity. Honest referee breakdown."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'PEPM, all-inclusive, if you switch models' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: GUSTO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Gusto: published tiers that scale with feature depth</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/product/payroll" target="_blank" rel="noopener noreferrer">Gusto</a> publishes a tiered <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>, running from a contractor-only plan through simple, plus, and premium tiers, each adding a base monthly fee and a per-employee charge as features increase. Lower tiers cover core single-state payroll and tax filing; higher tiers add multi-state payroll, time tracking, and a dedicated service advisor, per that same page.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto also operates a licensed insurance brokerage and publishes add-on fees for things like broker integration and FSA administration, again linked on its pricing page. The tradeoff for that flexibility is more decisions: picking the right tier and the right add-ons takes more comparison shopping than a single flat plan.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: ONPAY */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>OnPay: one published plan, marketed on simplicity</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://onpay.com/payroll/software/" target="_blank" rel="noopener noreferrer">OnPay</a> publishes its <a href="https://onpay.com/payroll/software/costs-pricing/" target="_blank" rel="noopener noreferrer">pricing</a> as a single core plan, a base monthly fee plus a per-employee charge, rather than splitting features across multiple tiers. Its published position emphasizes that essentials like W-2 and 1099 filings, unlimited pay runs, and multi-state tax filing come standard rather than as paid add-ons.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                That single-plan simplicity is the whole pitch: less time comparing tiers, one number to budget against. The tradeoff is fewer built-in upgrade paths for companies that specifically want a dedicated service advisor or a premium support tier the way Gusto&apos;s top plan offers; OnPay&apos;s model assumes most companies want the same core feature set regardless of size.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Gusto vs OnPay, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>OnPay</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, you run payroll', 'Self-service software, you run payroll'],
                    ['Pricing visibility', 'Published, multiple tiers plus add-ons, linked', 'Published, one core plan plus add-ons, linked'],
                    ['Who runs payroll', 'Your team, inside the Gusto platform', 'Your team, inside the OnPay platform'],
                    ['Tax filing responsibility', 'Gusto files per its published model', 'OnPay files per its published model'],
                    ['Ideal company size', 'Small businesses wanting tiered feature choice', 'Small businesses wanting one simple published plan'],
                    ['Support model', 'Tier-dependent, dedicated advisor on top plan', 'Standard support across the single plan'],
                    ['Accountant partner program', 'Gusto Pro partner program', 'Dedicated accountant dashboard and revenue share'],
                  ].map(([factor, gusto, onpay], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{onpay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">Gusto&apos;s published pricing page</a> and <a href="https://onpay.com/payroll/software/costs-pricing/" target="_blank" rel="noopener noreferrer">OnPay&apos;s published pricing page</a>.
            </p>
          </div>
        </section>

        {/* HOW TO DECIDE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How to Actually Decide</p>
              <h2>Three buyer situations, three honest answers</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              {[
                {
                  title: 'You want to start small and add features as you grow',
                  body: 'Lean Gusto. Its tiered structure lets you start on a lower plan and move up as you need multi-state payroll, time tracking, or a dedicated advisor.',
                },
                {
                  title: 'You want one number and do not want to compare tiers',
                  body: 'Lean OnPay. A single published plan with the core essentials included is built for buyers who find tiered pricing more confusing than helpful.',
                },
                {
                  title: 'You are choosing based on a specific industry or niche need',
                  body: 'Check each provider\'s industry pages directly. Both publish guidance for specific business types, and niche fit can matter more than the base plan structure.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing Gusto against a different rival instead? See <Link href="/services/managed-payroll/square-payroll-vs-gusto">Square Payroll vs Gusto</Link> or <Link href="/services/managed-payroll/justworks-payroll-vs-gusto">Justworks Payroll vs Gusto</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both publish a price. Neither runs payroll for you.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                This is a genuinely close call: Gusto if you want tiered features and room to grow into them, OnPay if you want one simple published plan and fewer decisions. Both deserve credit for transparent pricing in a category where that is rarer than it should be.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                But both are software: you or someone on your team clicks run payroll every cycle. If you would rather have payroll actually run for you, inside your existing system, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: a flat $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum, a $10 PEPM benefits add-on if you need it, and a $300 one-time fee for multi-state setup. No new platform to learn: your estimate is on screen in about 90 seconds.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <PricingCta service="managed-payroll" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Gusto vs OnPay, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
