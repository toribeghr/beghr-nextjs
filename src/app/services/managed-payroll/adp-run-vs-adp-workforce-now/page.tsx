import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'ADP RUN vs Workforce Now: Instant Quote Alternative',
  description: 'ADP RUN vs ADP Workforce Now refereed honestly: small-business simplicity vs midmarket depth, both quote-gated. See the honest breakdown.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/adp-run-vs-adp-workforce-now' },
  openGraph: {
    title: 'ADP RUN vs Workforce Now: Instant Quote Alternative',
    description: 'ADP RUN vs ADP Workforce Now refereed honestly: small-business simplicity vs midmarket depth, both quote-gated. See the honest breakdown.',
    url: 'https://www.beghr.com/services/managed-payroll/adp-run-vs-adp-workforce-now',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADP RUN vs Workforce Now: Instant Quote Alternative',
    description: 'ADP RUN vs ADP Workforce Now refereed honestly: small-business simplicity vs midmarket depth, both quote-gated. See the honest breakdown.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('managed-payroll-adp-run-vs-adp-workforce-now');

const FAQS: [string, string][] = [
  [
    'Are ADP RUN and ADP Workforce Now the same product?',
    'No. They are two separate ADP platforms built for different company sizes. RUN targets small businesses with a simplified setup, while Workforce Now is ADP\'s midmarket HCM suite with deeper HR, benefits, and reporting built to handle more complex organizations.',
  ],
  [
    'Can I move from ADP RUN to Workforce Now as I grow?',
    'ADP positions Workforce Now as the natural upgrade path from RUN, since both live inside the same ADP ecosystem. In practice this still means a migration project and a new sales conversation, not a simple plan toggle, so budget time for setup either way.',
  ],
  [
    'How much do ADP RUN and ADP Workforce Now cost?',
    'Neither publishes pricing. Both are quote-gated: ADP prices per company based on headcount, states, pay frequency, and add-ons like HR or benefits admin. The only honest way to compare cost is to request quotes for both on the same census.',
  ],
  [
    'Which ADP product handles multi-state payroll better?',
    'Workforce Now is built with multi-state and higher-complexity payroll in mind as part of its midmarket positioning. RUN can run multi-state payroll too, but companies with a growing multi-state footprint are the exact profile ADP steers toward Workforce Now.',
  ],
  [
    'Where does BEG fit in an ADP RUN vs Workforce Now decision?',
    'Both are software you or your team operate inside the ADP ecosystem. If you would rather have payroll run for you, inside a system you do not have to manage, at a flat $25 to $45 per employee per month all-inclusive, that is BEG managed payroll, with an instant on-screen estimate instead of a sales quote.',
  ],
];

export default function AdpRunVsAdpWorkforceNowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ADP RUN vs ADP Workforce Now: An Honest Comparison',
            description: 'ADP RUN vs ADP Workforce Now refereed honestly: small-business simplicity vs midmarket depth, both quote-gated. See the honest breakdown.',
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: 'https://www.beghr.com/services/managed-payroll/adp-run-vs-adp-workforce-now',
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
              { '@type': 'ListItem', position: 3, name: 'ADP RUN vs ADP Workforce Now', item: 'https://www.beghr.com/services/managed-payroll/adp-run-vs-adp-workforce-now' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="ADP RUN or ADP Workforce Now: which ADP product actually fits your headcount?"
        description="Same parent company, two different products built for two different company sizes. RUN keeps small-business payroll simple; Workforce Now is the midmarket HCM suite. Honest referee breakdown, both quote-gated."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'PEPM, all-inclusive, if you switch models' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: ADP RUN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>ADP RUN: payroll software sized for small business</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/products/adp-run.aspx" target="_blank" rel="noopener noreferrer">ADP RUN</a> is ADP&apos;s payroll and basic HR platform aimed squarely at small businesses, typically companies with fewer than 50 employees. It handles core payroll, tax filing, new-hire reporting, and simple HR tasks in an interface built to be usable without a dedicated payroll administrator. Because it is an ADP product, you get the reliability of an established payroll vendor with the option to add HR, time tracking, and benefits modules as you need them.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                RUN&apos;s tradeoff is depth. Its HR and reporting tools are intentionally lighter than ADP&apos;s midmarket products, which is exactly right for a 10-person company and exactly wrong for a 300-person one. Pricing is quote-gated: you talk to ADP sales and get a number based on your headcount and selected modules, so budgeting requires a quote in hand rather than a published rate card.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: ADP WORKFORCE NOW */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>ADP Workforce Now: the midmarket HCM suite</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/products/adp-workforce-now.aspx" target="_blank" rel="noopener noreferrer">ADP Workforce Now</a> is built for growing and midsize companies, generally in the roughly 50 to 1,000 employee range, and it is a genuinely different product from RUN rather than a bigger version of it. Workforce Now bundles payroll with deeper HR, talent management, time and attendance, and benefits administration, plus reporting built for organizations that need to slice data by department, location, or job code.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                That depth comes with more implementation and more complexity than a small company typically needs. Like RUN, Workforce Now is quote-gated: ADP prices it per company based on headcount, modules selected, and state footprint, and moving between RUN and Workforce Now later still means a project, even though both live inside the same ADP ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>ADP RUN vs ADP Workforce Now, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP RUN</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP Workforce Now</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, you or staff run payroll', 'Self-service software, you or staff run payroll'],
                    ['Pricing visibility', 'Quote-gated, sales call required', 'Quote-gated, sales call required'],
                    ['Who runs payroll', 'Your team, inside the RUN platform', 'Your team, inside the Workforce Now platform'],
                    ['Tax filing responsibility', 'ADP files on your behalf per its published model', 'ADP files on your behalf per its published model'],
                    ['Ideal company size', 'Small business, generally under 50 employees', 'Growing and midsize, generally 50 to 1,000+ employees'],
                    ['HR depth', 'Basic HR tools', 'Full HCM: talent, benefits admin, advanced reporting'],
                    ['Support model', 'Standard small-business support tiers', 'Dedicated account structure typical of midmarket ADP'],
                  ].map(([factor, run, wfn], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{run}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{wfn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each product&apos;s published positioning at <a href="https://www.adp.com" target="_blank" rel="noopener noreferrer">adp.com</a>. Both require a custom quote for pricing.
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
                  title: 'You are under about 50 employees and want simplicity',
                  body: 'Lean RUN. It is built for exactly this size, with a lighter setup and a lower learning curve than a full HCM suite you do not need yet.',
                },
                {
                  title: 'You are 50 to 1,000 employees with multi-department needs',
                  body: 'Lean Workforce Now. Its deeper HR, talent, and reporting tools are built for organizations that need to manage complexity RUN was not designed to handle.',
                },
                {
                  title: 'You are outgrowing RUN but dread a full HCM project',
                  body: 'Get both quotes before committing. Ask ADP directly what a RUN-to-Workforce-Now migration actually involves, since staying inside one ecosystem does not guarantee a light lift.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing ADP against a published-pricing rival instead? See <Link href="/services/managed-payroll/gusto-vs-onpay">Gusto vs OnPay</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both are software you run yourself. Do you want that?</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                RUN for small teams, Workforce Now for growing ones, and you will not get a price for either without a sales conversation. That is a completely normal way to buy payroll software. But notice the word: software. Whichever ADP product you pick, someone on your team still runs payroll, checks the tax filings, and manages the account.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If what you actually want is payroll run for you, inside your existing system, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: a flat $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum, a $10 PEPM benefits add-on if you need it, and a $300 one-time fee for multi-state setup. No sales call and no quote gate: answer a few questions and your estimate appears on screen in about 90 seconds.
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
              <h2>ADP RUN vs ADP Workforce Now, answered</h2>
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
