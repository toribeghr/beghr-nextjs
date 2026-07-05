import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Justworks Payroll vs Gusto: Instant Quote Alternative',
  description: 'Justworks Payroll vs Gusto refereed honestly: a standalone payroll plan from a PEO company vs a payroll-first standalone platform.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/justworks-payroll-vs-gusto' },
  openGraph: {
    title: 'Justworks Payroll vs Gusto: Instant Quote Alternative',
    description: 'Justworks Payroll vs Gusto refereed honestly: a standalone payroll plan from a PEO company vs a payroll-first standalone platform.',
    url: 'https://www.beghr.com/services/managed-payroll/justworks-payroll-vs-gusto',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justworks Payroll vs Gusto: Instant Quote Alternative',
    description: 'Justworks Payroll vs Gusto refereed honestly: a standalone payroll plan from a PEO company vs a payroll-first standalone platform.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('managed-payroll-justworks-payroll-vs-gusto');

const FAQS: [string, string][] = [
  [
    'Is Justworks Payroll the same thing as Justworks PEO?',
    'No. Justworks publishes a standalone Payroll plan alongside its PEO Basic and PEO Plus plans on its pricing page. The Payroll plan keeps you as the employer of record with no co-employment; the PEO plans move you into co-employment with Justworks-sponsored benefits.',
  ],
  [
    'Which is cheaper, Justworks Payroll or Gusto?',
    'Both publish pricing you can compare directly. Justworks Payroll lists a published base fee plus a per-employee monthly charge on its pricing page; Gusto\'s tiers scale up in base fee and per-employee cost depending on which plan and features you choose. Check both current pages for your exact headcount.',
  ],
  [
    'Does Justworks Payroll include HR tools like Gusto does?',
    'Its published Payroll plan includes HR tools and access to time tracking per its pricing page, similar in spirit to Gusto\'s lower tiers, though the deeper HR consulting and benefits administration Justworks offers live in its PEO plans, not the standalone Payroll plan.',
  ],
  [
    'Can I add benefits to Justworks Payroll without becoming a PEO client?',
    'Justworks publishes a Payroll-plus-health-insurance add-on on its pricing page for benefits-eligible employees, letting Payroll customers add health insurance access without moving into the co-employment PEO plans.',
  ],
  [
    'Where does BEG fit in a Justworks Payroll vs Gusto decision?',
    'Both are self-service platforms your team operates, with published pricing. If you want payroll actually run for you at a flat $25 to $45 PEPM all-inclusive, without co-employment and without running the software yourself, that is BEG managed payroll, with an instant on-screen estimate.',
  ],
];

export default function JustworksPayrollVsGustoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Justworks Payroll vs Gusto: An Honest Comparison',
            description: 'Justworks Payroll vs Gusto refereed honestly: a standalone payroll plan from a PEO company vs a payroll-first standalone platform.',
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: 'https://www.beghr.com/services/managed-payroll/justworks-payroll-vs-gusto',
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
              { '@type': 'ListItem', position: 3, name: 'Justworks Payroll vs Gusto', item: 'https://www.beghr.com/services/managed-payroll/justworks-payroll-vs-gusto' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Justworks Payroll or Gusto: a PEO company's standalone plan, or payroll-first from day one?"
        description="Justworks Payroll is the no-co-employment plan from a company best known for its PEO. Gusto was built as a standalone payroll platform from the start. Honest referee breakdown, both publish pricing."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'PEPM, all-inclusive, if you switch models' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: JUSTWORKS PAYROLL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Justworks Payroll: the no-co-employment plan from a PEO company</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.justworks.com/platform/payroll" target="_blank" rel="noopener noreferrer">Justworks Payroll</a> is the standalone plan on Justworks&apos;s <a href="https://www.justworks.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>, sitting alongside its better-known PEO Basic and PEO Plus tiers. Unlike the PEO plans, Payroll keeps your company as the employer of record: no co-employment, no mandatory move to Justworks-sponsored benefits. Its published plan bundles payroll, HR tools, and access to time tracking for a base fee plus a per-employee monthly charge.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Justworks also publishes a Payroll-plus-health-insurance add-on, letting Payroll customers offer benefits without stepping into the co-employment PEO plans. The tradeoff is that Justworks&apos;s deepest HR consulting, dedicated support, and benefits administration live in its PEO tiers, not this standalone plan, so you are getting a lighter product than the company&apos;s flagship offering.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: GUSTO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Gusto: payroll-first, standalone from the start</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/product/payroll" target="_blank" rel="noopener noreferrer">Gusto</a> was built as a payroll platform first, with HR and benefits layered on as the product matured, rather than being the standalone offshoot of a PEO. Its <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">published tiers</a> run from contractor-only through premium, each adding a base fee, per-employee charge, and features like multi-state payroll and a dedicated service advisor at the top end.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto also operates a licensed insurance brokerage with published add-on fees for broker integration and benefits administration. Because it was never structured around a co-employment product, there is no PEO tier to compare against or graduate into; what you see in its published pricing is the whole platform.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Justworks Payroll vs Gusto, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Justworks Payroll</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, no co-employment', 'Self-service software, no co-employment'],
                    ['Pricing visibility', 'Published base plus per-employee fee, linked', 'Published, multiple tiers plus add-ons, linked'],
                    ['Who runs payroll', 'Your team, inside the Justworks platform', 'Your team, inside the Gusto platform'],
                    ['Tax filing responsibility', 'Justworks files per its published model', 'Gusto files per its published model'],
                    ['Ideal company size', 'Small businesses wanting a PEO company\'s payroll without co-employment', 'Small businesses wanting tiered feature choice'],
                    ['Relationship to a PEO product', 'Sibling plan to Justworks\'s PEO Basic and Plus', 'No PEO product; payroll-first from the start'],
                    ['Support model', 'Standard support on Payroll; deeper support lives in PEO tiers', 'Tier-dependent, dedicated advisor on top plan'],
                  ].map(([factor, jw, gusto], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{jw}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on <a href="https://www.justworks.com/pricing" target="_blank" rel="noopener noreferrer">Justworks&apos;s published pricing page</a> and <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">Gusto&apos;s published pricing page</a>.
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
                  title: 'You might want to graduate into a PEO relationship later',
                  body: 'Lean Justworks Payroll. Starting on its standalone plan keeps a path open to its PEO Basic or Plus tiers later, inside the same company, if co-employment ever becomes attractive.',
                },
                {
                  title: 'You want the deepest possible feature tiers for pure payroll',
                  body: 'Lean Gusto. Since it was built payroll-first with no PEO sibling product, its tiers and add-ons are focused entirely on payroll, HR, and benefits administration rather than splitting attention across a PEO offering.',
                },
                {
                  title: 'You are undecided between payroll software and a PEO',
                  body: 'Pin down that decision first. Justworks selling both models under one roof is a hint that the real fork in the road is payroll software versus PEO, not which vendor logo you pick.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Weighing Gusto against a different rival instead? See <Link href="/services/managed-payroll/gusto-vs-onpay">Gusto vs OnPay</Link> or <Link href="/services/managed-payroll/square-payroll-vs-gusto">Square Payroll vs Gusto</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both keep you the employer. Both keep you running payroll.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Justworks Payroll if a future PEO relationship with the same vendor appeals to you; Gusto if you want a platform built for payroll and nothing else, with no PEO sibling product pulling focus. Both publish real pricing, which makes comparing them on cost straightforward.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                But both leave payroll execution with your team. If you want it actually run for you, without co-employment and without learning new software, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: a flat $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum, a $10 PEPM benefits add-on if you need it, and a $300 one-time fee for multi-state setup. Your estimate is on screen in about 90 seconds.
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
              <h2>Justworks Payroll vs Gusto, answered</h2>
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
