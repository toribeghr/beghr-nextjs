import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Deel vs Rippling: Honest Global Payroll Comparison',
  description: 'Deel vs Rippling refereed honestly: both quote-gated global platforms. No invented prices, just an honest breakdown of who fits which team.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/deel-vs-rippling' },
  openGraph: {
    title: 'Deel vs Rippling: Honest Global Payroll Comparison',
    description: 'Deel vs Rippling refereed honestly: both quote-gated global platforms. No invented prices, just an honest breakdown of who fits which team.',
    url: 'https://www.beghr.com/services/managed-payroll/deel-vs-rippling',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deel vs Rippling: Honest Global Payroll Comparison',
    description: 'Deel vs Rippling refereed honestly: both quote-gated global platforms. No invented prices, just an honest breakdown of who fits which team.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('managed-payroll-deel-vs-rippling');

const FAQS: [string, string][] = [
  [
    'What is the core difference between Deel and Rippling?',
    'Deel built its reputation on global hiring: employer of record, international contractor payments, and compliance across many countries from day one. Rippling started as US-based HR and IT device management and expanded into payroll, HR, and global EOR from that base. Both now compete broadly, but their center of gravity is different.',
  ],
  [
    'Does either Deel or Rippling publish pricing?',
    'No, both are quote-gated for most of their offerings. Pricing depends on headcount, countries involved, which modules you need (payroll, EOR, IT, benefits), and contract terms, so any specific number you see online is not something you should rely on without your own quote.',
  ],
  [
    'Which is better for a US-only company?',
    'Rippling\'s roots in US HR, IT, and payroll make it a strong fit if you are primarily domestic with occasional international hires. Deel\'s core strength is global-first hiring, so a US-only company may be paying for international infrastructure it does not need.',
  ],
  [
    'Which is better for hiring internationally at scale?',
    'Deel\'s published positioning centers on global employer of record and contractor compliance across a large number of countries, which is its original and deepest specialty. Rippling has expanded its own global EOR and contractor tools, so the honest move is to compare both against your specific target countries.',
  ],
  [
    'Where does BEG fit in a Deel vs Rippling decision?',
    'Neither is really BEG\'s direct competitor: both are broad, quote-gated global platforms built for companies hiring across borders. If your team is US-based and you want payroll actually run for you at a flat $25 to $45 PEPM all-inclusive, that is BEG managed payroll, with an instant on-screen estimate instead of a sales process.',
  ],
];

export default function DeelVsRipplingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Deel vs Rippling: An Honest Comparison',
            description: 'Deel vs Rippling refereed honestly: both quote-gated global platforms. No invented prices, just an honest breakdown of who fits which team.',
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: 'https://www.beghr.com/services/managed-payroll/deel-vs-rippling',
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
              { '@type': 'ListItem', position: 3, name: 'Deel vs Rippling', item: 'https://www.beghr.com/services/managed-payroll/deel-vs-rippling' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Deel or Rippling: global-first hiring, or US-rooted HR that went global?"
        description="Deel and Rippling both sell global payroll, EOR, and HR from broad platforms, and both are quote-gated. The real difference is which market each one was built for first."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'PEPM, all-inclusive, if you are US-based' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: DEEL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Deel: built global-first, from contractor payments up</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.deel.com" target="_blank" rel="noopener noreferrer">Deel</a> built its business on hiring across borders: international contractor payments, employer of record coverage across a large published list of countries, and compliance handling for local labor law. Its platform grew outward from that global-first core into broader HR, payroll, and IT management, but the international hiring use case remains its clearest strength.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Pricing is quote-gated across most of Deel&apos;s offerings; it depends on the countries involved, the mix of contractors versus EOR employees, and which modules you add. If your growth plan involves hiring people in multiple countries without setting up local entities, this is the kind of platform built specifically for that problem, and you should get a quote scoped to your actual country list.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: RIPPLING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Rippling: US HR and IT roots, expanded into global</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.rippling.com" target="_blank" rel="noopener noreferrer">Rippling</a> started by combining US payroll, HR, and IT device management into one system, letting a single employee record drive everything from a paycheck to a laptop provisioning workflow. It has since expanded into global payroll, EOR, and international contractor management, but its architecture reflects that US-first, all-in-one-employee-record starting point.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Like Deel, Rippling is quote-gated: pricing depends on which modules you select (payroll, HR, IT, benefits, global EOR) and your headcount across countries. Companies that want IT device management alongside HR and payroll in the same system, particularly if most of the team is US-based with some international hires, are the clearest fit for Rippling&apos;s original design center.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Deel vs Rippling, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Deel</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Rippling</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service global platform, you manage it', 'Self-service global platform, you manage it'],
                    ['Pricing visibility', 'Quote-gated, scoped to countries and modules', 'Quote-gated, scoped to modules and headcount'],
                    ['Who runs payroll', 'Your team, inside the Deel platform', 'Your team, inside the Rippling platform'],
                    ['Tax filing responsibility', 'Deel or its EOR entity per country, per its model', 'Rippling per its published model, by module'],
                    ['Origin and center of gravity', 'Global-first: contractor payments and EOR', 'US-first: payroll, HR, and IT combined'],
                    ['IT device management', 'Not a core original feature', 'Native, from its original design'],
                    ['Ideal company profile', 'Distributed teams hiring across many countries', 'Primarily US teams with some international hires'],
                  ].map(([factor, deel, rippling], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{deel}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{rippling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published positioning at <a href="https://www.deel.com" target="_blank" rel="noopener noreferrer">deel.com</a> and <a href="https://www.rippling.com" target="_blank" rel="noopener noreferrer">rippling.com</a>. Both require a custom quote for pricing.
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
                  title: 'You are hiring contractors or EOR employees across many countries',
                  body: 'Lean Deel. Its platform was built around exactly this problem first, and its published country coverage and EOR depth reflect that origin.',
                },
                {
                  title: 'You are mostly US-based and want HR, payroll, and IT together',
                  body: 'Lean Rippling. Combining a single employee record with device provisioning and payroll in one system is closer to its original design than Deel\'s.',
                },
                {
                  title: 'You are US-only with no international hiring plans',
                  body: 'Pause before either. Both are broad, quote-gated global platforms built to solve cross-border complexity you may not have. Get quotes from both, but also compare what a US-focused payroll provider would cost for the same team.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing a US-focused published-pricing option instead? See <Link href="/services/managed-payroll/gusto-vs-onpay">Gusto vs OnPay</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both solve global complexity. Do you actually have it?</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you are hiring across borders, both Deel and Rippling are credible, well-built platforms, and the honest way to choose is to scope quotes from each against your specific country list and headcount. Neither will hand you a number without that conversation, and that is appropriate given the compliance complexity each one is managing on your behalf.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                But if your team is US-based and you do not need global EOR or IT device management, you may be shopping platforms built for a bigger problem than you have. <Link href="/services/managed-payroll">BEG managed payroll</Link> runs US payroll for you, inside your existing system, at a flat $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum, a $10 PEPM benefits add-on if you need it, and a $300 one-time fee for multi-state setup. No quote gate: your estimate is on screen in about 90 seconds.
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
              <h2>Deel vs Rippling, answered</h2>
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
