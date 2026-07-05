import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Square Payroll vs Gusto: Instant Quote Alternative',
  description: 'Square Payroll vs Gusto refereed honestly: point-of-sale-attached payroll vs a standalone tiered platform. Comparison table plus FAQs.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/square-payroll-vs-gusto' },
  openGraph: {
    title: 'Square Payroll vs Gusto: Instant Quote Alternative',
    description: 'Square Payroll vs Gusto refereed honestly: point-of-sale-attached payroll vs a standalone tiered platform. Comparison table plus FAQs.',
    url: 'https://www.beghr.com/services/managed-payroll/square-payroll-vs-gusto',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Square Payroll vs Gusto: Instant Quote Alternative',
    description: 'Square Payroll vs Gusto refereed honestly: point-of-sale-attached payroll vs a standalone tiered platform. Comparison table plus FAQs.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('managed-payroll-square-payroll-vs-gusto');

const FAQS: [string, string][] = [
  [
    'Do I need to use Square point of sale to use Square Payroll?',
    'No, Square Payroll can run as a standalone product, but its published integration with Square point of sale and Square timecards is the core of its pitch. If you already run Square for sales or scheduling, payroll syncs directly with hours already tracked there.',
  ],
  [
    'Does Square Payroll handle contractor-only payments?',
    'Yes. Square publishes a contractor-only option alongside its full employee payroll plan, similar to how Gusto separates a contractor-only tier from its employee plans.',
  ],
  [
    'Which is cheaper, Square Payroll or Gusto?',
    'Both publish pricing on their sites, so you can compare directly for your headcount. Square markets one flat published price per its payroll page, while Gusto\'s tiers scale up in base fee and per-employee cost as you add features, so which is cheaper depends on which Gusto tier you actually need.',
  ],
  [
    'Is Square Payroll better for hourly, tip-based teams?',
    'Its published integration with Square point of sale for tracking hours and tips is built specifically for retail, restaurant, and service businesses already using Square hardware. Gusto is not built around any point-of-sale system, so it fits a broader range of business types without that specific tie-in.',
  ],
  [
    'Where does BEG fit in a Square Payroll vs Gusto decision?',
    'Both are software you or your team run yourselves. If you want payroll actually run for you at a flat $25 to $45 PEPM all-inclusive, whatever point-of-sale or accounting system you use, that is BEG managed payroll, with an instant on-screen estimate instead of signing up for another platform.',
  ],
];

export default function SquarePayrollVsGustoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Square Payroll vs Gusto: An Honest Comparison',
            description: 'Square Payroll vs Gusto refereed honestly: point-of-sale-attached payroll vs a standalone tiered platform. Comparison table plus FAQs.',
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: 'https://www.beghr.com/services/managed-payroll/square-payroll-vs-gusto',
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
              { '@type': 'ListItem', position: 3, name: 'Square Payroll vs Gusto', item: 'https://www.beghr.com/services/managed-payroll/square-payroll-vs-gusto' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Square Payroll or Gusto: point-of-sale-attached, or a standalone tiered platform?"
        description="Square Payroll anchors to Square's point-of-sale and timecard ecosystem. Gusto is a standalone platform with tiered plans built for any small business. Honest referee breakdown."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'PEPM, all-inclusive, if you switch models' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: SQUARE PAYROLL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Square Payroll: built around the Square ecosystem</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://squareup.com/us/en/payroll" target="_blank" rel="noopener noreferrer">Square Payroll</a> is Block&apos;s payroll product, and its clearest differentiator is the connection to Square point of sale and Square timecards. Hours worked, tips, and shifts tracked in Square sync directly into payroll, which its published materials position as a natural fit for retail, restaurants, and other hourly, tip-heavy businesses already running Square hardware.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Square publishes automatic federal, state, and local tax filing as part of its core payroll offering, plus a separate contractor-only option for businesses without W-2 employees. The tradeoff is the same as any ecosystem play: the deepest value shows up if you already run Square for sales or scheduling. Businesses without a Square point-of-sale footprint get a competent payroll product without that specific integration advantage.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: GUSTO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Gusto: a standalone platform for any small business</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/product/payroll" target="_blank" rel="noopener noreferrer">Gusto</a> is not tied to any point-of-sale or hardware ecosystem; its <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">published pricing</a> runs from a contractor-only tier up through progressively richer plans with multi-state payroll, time tracking, and HR resources. That makes it a broader fit across industries: professional services, remote teams, and hourly businesses alike can use the same core platform.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto also operates a licensed insurance brokerage and publishes add-on pricing for benefits administration and broker integration. Without a native point-of-sale tie-in, hourly and shift-based businesses need a separate time tracking tool or Gusto&apos;s own add-on, rather than the built-in sync Square offers to its own hardware users.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Square Payroll vs Gusto, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Square Payroll</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, you run payroll', 'Self-service software, you run payroll'],
                    ['Pricing visibility', 'Published flat pricing, linked', 'Published, multiple tiers plus add-ons, linked'],
                    ['Who runs payroll', 'Your team, inside the Square platform', 'Your team, inside the Gusto platform'],
                    ['Tax filing responsibility', 'Square files per its published model', 'Gusto files per its published model'],
                    ['Ideal company size', 'Small, hourly and tip-based teams on Square hardware', 'Small businesses across any industry'],
                    ['Point-of-sale integration', 'Native sync with Square POS and timecards', 'None built in; needs a separate time tool'],
                    ['Support model', 'Standard support across its plan', 'Tier-dependent, dedicated advisor on top plan'],
                  ].map(([factor, square, gusto], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{square}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on <a href="https://squareup.com/us/en/payroll" target="_blank" rel="noopener noreferrer">Square&apos;s payroll page</a> and <a href="https://gusto.com/product/pricing" target="_blank" rel="noopener noreferrer">Gusto&apos;s published pricing page</a>.
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
                  title: 'You already run Square for sales, tips, or scheduling',
                  body: 'Lean Square Payroll. The native sync between point of sale, timecards, and payroll removes a manual step you would otherwise handle yourself with any other provider.',
                },
                {
                  title: 'You are not on Square hardware or want tiered feature choice',
                  body: 'Lean Gusto. Its platform is not tied to any specific hardware ecosystem, and its tiers let you add multi-state payroll, time tracking, and HR resources as you need them.',
                },
                {
                  title: 'You run a mixed hourly and salaried team across locations',
                  body: 'Compare both on your actual headcount and state footprint before deciding. Multi-location, multi-state complexity is where feature depth matters more than point-of-sale convenience.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Weighing Gusto against a different rival instead? See <Link href="/services/managed-payroll/gusto-vs-onpay">Gusto vs OnPay</Link> or <Link href="/services/managed-payroll/justworks-payroll-vs-gusto">Justworks Payroll vs Gusto</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Ecosystem fit decides this one. Running it yourself does not change.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you run Square hardware, Square Payroll&apos;s native sync is a real, practical advantage. If you do not, Gusto&apos;s standalone platform and tiered features stand on their own without needing a point-of-sale tie-in. Both publish honest, comparable pricing, which makes this an easier decision than most in this category.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Either way, your team still runs payroll every cycle. If you want it actually run for you, whatever point-of-sale or accounting system you use, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: a flat $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum, a $10 PEPM benefits add-on if you need it, and a $300 one-time fee for multi-state setup. Your estimate is on screen in about 90 seconds, no new platform to learn.
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
              <h2>Square Payroll vs Gusto, answered</h2>
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
