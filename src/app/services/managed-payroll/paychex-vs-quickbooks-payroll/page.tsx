import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Paychex vs QuickBooks Payroll: Instant Quote Alternative',
  description: 'Paychex vs QuickBooks Payroll refereed honestly: quote-gated full service vs published tiers inside your books. Comparison table plus FAQs.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/paychex-vs-quickbooks-payroll' },
  openGraph: {
    title: 'Paychex vs QuickBooks Payroll: Instant Quote Alternative',
    description: 'Paychex vs QuickBooks Payroll refereed honestly: quote-gated full service vs published tiers inside your books. Comparison table plus FAQs.',
    url: 'https://www.beghr.com/services/managed-payroll/paychex-vs-quickbooks-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paychex vs QuickBooks Payroll: Instant Quote Alternative',
    description: 'Paychex vs QuickBooks Payroll refereed honestly: quote-gated full service vs published tiers inside your books. Comparison table plus FAQs.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('managed-payroll-paychex-vs-quickbooks-payroll');

const FAQS: [string, string][] = [
  [
    'Does QuickBooks Payroll require QuickBooks Online for accounting?',
    'It works best bundled with QuickBooks Online, and QuickBooks sells combined payroll-and-accounting plans on its pricing page, but standalone payroll-only options exist too. If your books already live in QuickBooks, the bundle is the more natural fit.',
  ],
  [
    'Is Paychex only for larger companies?',
    'No. Paychex markets tiers across small, midsize, and larger employers, with its published entry-level plans aimed at small business alongside heavier-service tiers for bigger, more complex payrolls. Exact plan cost and inclusions are quote-gated.',
  ],
  [
    'Which is cheaper, Paychex or QuickBooks Payroll?',
    'QuickBooks publishes tiered base-plus-per-employee pricing on its site, so you can estimate cost before talking to anyone. Paychex requires a quote for its plans, so the honest comparison is QuickBooks\'s published number against a Paychex quote for the same headcount, not a guess at what Paychex costs.',
  ],
  [
    'Who actually files payroll taxes with each provider?',
    'Both providers publish that they handle federal, state, and local payroll tax filings as part of their core service. The difference is less about who files and more about how much support surrounds that filing when something goes wrong.',
  ],
  [
    'Where does BEG fit in a Paychex vs QuickBooks Payroll decision?',
    'Both are software: your team still owns running payroll and monitoring the account, even with taxes filed automatically. If you want payroll actually run for you at a flat $25 to $45 PEPM all-inclusive, that is BEG managed payroll, with an instant on-screen estimate instead of a sales quote.',
  ],
];

export default function PaychexVsQuickbooksPayrollPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Paychex vs QuickBooks Payroll: An Honest Comparison',
            description: 'Paychex vs QuickBooks Payroll refereed honestly: quote-gated full service vs published tiers inside your books. Comparison table plus FAQs.',
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: 'https://www.beghr.com/services/managed-payroll/paychex-vs-quickbooks-payroll',
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
              { '@type': 'ListItem', position: 3, name: 'Paychex vs QuickBooks Payroll', item: 'https://www.beghr.com/services/managed-payroll/paychex-vs-quickbooks-payroll' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Paychex or QuickBooks Payroll: quote-gated service, or published price inside your books?"
        description="Paychex sells payroll and HR service tiers behind a sales quote. QuickBooks Payroll publishes its pricing and anchors to the accounting software you may already run. Honest referee breakdown."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'PEPM, all-inclusive, if you switch models' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: PAYCHEX */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Paychex: tiered payroll and HR service, priced by quote</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.paychex.com" target="_blank" rel="noopener noreferrer">Paychex</a> is one of the largest payroll and HR service providers in the country, with plans that scale from small-business payroll up through more complex HR and benefits administration for larger employers. Its published positioning leans on breadth: payroll, tax filing, HR support, benefits, and time and attendance are all available inside the Paychex ecosystem, with heavier service tiers adding dedicated support.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Paychex does not publish plan pricing on its site. Cost depends on headcount, pay frequency, state footprint, and which HR or benefits modules you add, so getting a real number means a sales conversation. For companies that want a single vendor covering payroll through benefits, with a rep to call, Paychex is built for exactly that; for companies that want to see a price before they talk to anyone, it is not.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: QUICKBOOKS PAYROLL */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>QuickBooks Payroll: published pricing, anchored to your books</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://quickbooks.intuit.com/payroll/" target="_blank" rel="noopener noreferrer">QuickBooks Payroll</a> is Intuit&apos;s payroll product, sold standalone or bundled with QuickBooks Online accounting. Its <a href="https://quickbooks.intuit.com/payroll/pricing/" target="_blank" rel="noopener noreferrer">pricing page</a> lists tiered plans, each a published base fee plus a per-employee monthly charge, scaling up through tiers that add features like same-day direct deposit, expert setup review, and HR support resources. Full-service tax filing and forms are included across its tiers per that same page.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The obvious strength is transparency: you can price it out before signing up. The obvious limit is that QuickBooks Payroll is most natural for companies already living inside the QuickBooks accounting ecosystem; the value proposition softens if your books are somewhere else. Like any self-service platform, your team still runs the payroll and monitors the account.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Paychex vs QuickBooks Payroll, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Paychex</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>QuickBooks Payroll</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software with optional service tiers', 'Self-service software, bundled with accounting'],
                    ['Pricing visibility', 'Quote-gated, sales call required', 'Published base-plus-per-employee tiers, linked'],
                    ['Who runs payroll', 'Your team, inside the Paychex platform', 'Your team, inside QuickBooks'],
                    ['Tax filing responsibility', 'Paychex files per its published model', 'Intuit files per its published model'],
                    ['Ideal company size', 'Small through larger employers across tiers', 'Small businesses, especially existing QuickBooks users'],
                    ['Ecosystem anchor', 'Payroll, HR, benefits under one vendor', 'Tied to QuickBooks accounting for full value'],
                    ['Support model', 'Tiered service levels, quote-dependent', 'Standard support, higher tiers add expert review'],
                  ].map(([factor, paychex, qbp], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{paychex}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{qbp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on <a href="https://www.paychex.com" target="_blank" rel="noopener noreferrer">Paychex&apos;s</a> published positioning and QuickBooks&apos;s <a href="https://quickbooks.intuit.com/payroll/pricing/" target="_blank" rel="noopener noreferrer">published pricing page</a>.
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
                  title: 'You already run QuickBooks Online for your books',
                  body: 'Lean QuickBooks Payroll. Bundling payroll with the accounting software you already use keeps everything in sync and the pricing is on the page before you commit.',
                },
                {
                  title: 'You want payroll, HR, and benefits under one vendor',
                  body: 'Lean Paychex. Its broader service tiers are built for companies that want a single relationship to call for payroll, HR questions, and benefits, and are comfortable getting a quote to see the number.',
                },
                {
                  title: 'You want the price without a sales call, whatever the accounting setup',
                  body: 'Start with QuickBooks Payroll\'s published tiers to anchor your budget expectations, then decide if Paychex\'s broader service is worth a quote for your headcount.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Weighing a published-pricing alternative instead? See <Link href="/services/managed-payroll/gusto-vs-onpay">Gusto vs OnPay</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Published price or not, both leave payroll on your desk.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Pick QuickBooks Payroll if you want a published number and live in the QuickBooks ecosystem already. Pick Paychex if you want a broader service relationship and are fine getting a quote. Either way, someone on your team is still clicking run payroll, reviewing the report, and fielding the employee question when a paycheck looks wrong.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you would rather have payroll actually run for you, inside your existing system, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: a flat $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum, a $10 PEPM benefits add-on if you need it, and a $300 one-time fee for multi-state setup. No sales call and no quote gate: your estimate is on screen in about 90 seconds.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <PricingCta service="managed-payroll" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Paychex vs QuickBooks Payroll, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
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
