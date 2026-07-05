import { Metadata } from 'next';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'Managed Benefits Pricing | Instant Estimate | BEG',
  description: 'BEG Managed Benefits pricing, powered by isolved: three plans from self-service software to fully managed. No demo gate. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/pricing' },
  openGraph: {
    title: 'Managed Benefits Pricing | Instant Estimate | BEG',
    description: 'BEG Managed Benefits pricing, powered by isolved: three plans from self-service software to fully managed. No demo gate. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/pricing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Benefits Pricing | Instant Estimate | BEG', description: 'BEG Managed Benefits pricing, powered by isolved: three plans from self-service software to fully managed. No demo gate. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const FAQS: [string, string][] = [
  [
    'How much does benefits administration cost?',
    'It is a monthly per-employee cost that lands far below the price of one internal benefits admin hire. Your rate depends on the plan you pick, your headcount, and whether you add ACA reporting or carrier feeds. Answer five questions in the estimate form and your monthly range appears on screen.',
  ],
  [
    'Why do you not just list a price?',
    'Because the right number depends on your team size, the plan level you need, and add-ons like ACA forms or carrier feeds. Rather than post one misleading figure, the estimate form prices your exact situation in about 90 seconds, with no demo gate.',
  ],
  [
    'What is the difference between the three plans?',
    'Benefits Admin Software gives your team self-service enrollment in one system. Software plus ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and an auditing analyst who run enrollment, changes, and carrier updates for you. Each plan includes everything below it.',
  ],
  [
    'Is there a setup fee?',
    'Any one-time setup is scoped on your discovery call and shown before you commit to anything. Carrier feeds and additional integrations can carry a one-time setup depending on your carriers, which is why exact pricing is confirmed live rather than guessed online.',
  ],
  [
    'Do we have to leave our broker to get this price?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits prices only the administration behind those plans: enrollment, data, changes, and compliance. The broker relationship does not change.',
  ],
  [
    'Does timing around open enrollment affect anything?',
    'Timing does not change your rate, but it changes urgency. Setup works back from your next open enrollment date, so the closer that date, the sooner scoping should happen. The estimate form asks when your enrollment lands so your BEG contact can plan the runway.',
  ],
];

export default function ManagedBenefitsPricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background: '#000000', color: '#ffffff', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Managed Benefits · Pricing</p>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              Managed Benefits Pricing
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '640px', margin: '0 auto' }}>
              Three plans, one per-employee monthly cost, no demo gate. Answer five questions and your monthly range appears on screen. Your BEG contact confirms the exact number on a 15-minute call before you commit to anything.
            </p>
            <div style={{ marginTop: '1.75rem' }}>
              <PricingCta service="managed-benefits" subline={false} />
            </div>
          </div>
        </div>
      </section>

      {/* THREE PLANS LADDER */}
      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Are Pricing</p>
            <h2>Three plans. Pick how much benefits work you want to stop doing.</h2>
            <p style={{ marginTop: '0.75rem', color: '#666666', maxWidth: '620px', margin: '0.75rem auto 0', fontSize: '0.97rem', lineHeight: '1.7' }}>
              Every plan includes everything below it, all powered by isolved. The estimate form shows your monthly range for all three so you can see the step-up before you decide.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }} className="reveal">
            {[
              {
                heading: 'Benefits Admin Software',
                tag: 'Enrollment, self-served',
                best: 'Teams that want employees enrolling themselves in one clean system instead of spreadsheets and paper forms.',
                items: [
                  'Benefit plans set up and managed in one system',
                  'Employees research, compare, and enroll themselves online',
                  'AI-guided plan recommendations balance cost and coverage',
                  'Life events and changes handled with self-service workflows',
                  'Deductions sync with payroll',
                  'Real-time reporting and cost analysis built in',
                ],
              },
              {
                heading: 'Software + ACA Compliance',
                tag: 'Enrollment plus ACA handled',
                best: 'Companies near or over 50 full-time employees, or with variable-hour staff, where ACA filing is a real deadline risk.',
                items: [
                  'Everything in Benefits Admin Software',
                  'ACA eligibility tracking across your workforce',
                  'Forms 1094-C and 1095-C produced for you',
                  'Variable-hour employee measurement for ACA',
                  'Deadlines watched so filing season stops being a fire drill',
                ],
              },
              {
                heading: 'Fully Managed',
                tag: 'A dedicated team runs it',
                best: 'Owners and HR teams who want benefits administration off their desk entirely, especially through open enrollment.',
                items: [
                  'Everything in Software + ACA Compliance',
                  'Dedicated Managed Benefits Specialist runs enrollment and changes',
                  'Benefits Auditing Analyst checks your data for costly errors',
                  'Open enrollment handled start to finish',
                  'Carrier updates flow without your team chasing them',
                ],
              },
            ].map(({ heading, tag, best, items }) => (
              <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.15rem', color: '#000000' }}>{heading}</h3>
                <p style={{ fontSize: '0.82rem', color: '#9a6b1f', fontWeight: 600, margin: '0 0 1rem', paddingBottom: '0.6rem', borderBottom: '2px solid #ECAC60' }}>{tag}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.1rem' }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontSize: '0.88rem', padding: '0.35rem 0', color: '#444444', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.45' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '0.9rem 1rem', fontSize: '0.84rem', color: '#555555', lineHeight: '1.6' }}>
                  <strong style={{ display: 'block', marginBottom: '0.3rem', color: '#000000' }}>Best for:</strong>
                  {best}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <PricingCta service="managed-benefits" subline={false} />
          </div>
        </div>
      </section>

      {/* WHAT DRIVES YOUR ESTIMATE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How the Number Is Built</p>
            <h2>Five things move your estimate</h2>
            <p style={{ marginTop: '0.75rem', color: '#666666', maxWidth: '580px', margin: '0.75rem auto 0', fontSize: '0.97rem', lineHeight: '1.7' }}>
              The estimate form asks about each of these, then prices your exact situation. Nothing here requires a sales call to see.
            </p>
          </div>
          <div className="beg-grid-2 reveal" style={{ marginTop: '2.25rem' }}>
            {[
              ['Headcount', 'Benefits administration is priced per employee per month, so your active headcount sets the base of the estimate.'],
              ['Plan level', 'Software, Software plus ACA, or Fully Managed. Each step up adds work that moves off your team, and the estimate shows all three.'],
              ['ACA reporting', 'If you track eligibility and file Forms 1094-C and 1095-C, that sits in the Software plus ACA plan and above.'],
              ['Carrier feeds', 'Automated 834 feeds to your carriers can be added so enrollment data flows without manual files. Feeds can carry a one-time setup.'],
              ['COBRA and continuation', 'COBRA and state continuation support is scoped to the rules that apply to your company and states. It is a flag on your estimate, not a hidden surprise.'],
              ['Open enrollment timing', 'Timing does not change the rate, but it sets the runway. Setup works back from your next enrollment date.'],
            ].map(([title, body]) => (
              <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.4rem 1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.98rem', marginBottom: '0.35rem', color: '#000000' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HONEST COMPARISON */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Honest Comparison</p>
            <h2>What benefits administration really costs, three ways</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ECAC60' }}>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700, minWidth: '170px' }}>Cost factor</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Benefits</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>An Internal Admin Hire</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Doing It In Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost shape', 'Per employee per month, all-inclusive', '$60,000 to $100,000 salary, loaded', 'Hidden in your team’s hours'],
                  ['Who does the work', 'A dedicated team, or software with our backup', 'One person, if they stay', 'You and your managers'],
                  ['ACA filing', 'Tracked and produced for you', 'Depends on that hire', 'Manual, deadline risk'],
                  ['COBRA exposure', 'Support scoped to your states', 'On that hire to catch', 'Up to $110/day per beneficiary if a notice is missed'],
                  ['If they leave', 'Nothing changes, the team continues', 'Knowledge walks out the door', 'The pileup lands on someone new'],
                ].map(([factor, beg, hire, sheets], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                    <td style={{ padding: '12px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                    <td style={{ padding: '12px 16px', color: '#555555' }}>{hire}</td>
                    <td style={{ padding: '12px 16px', color: '#555555' }}>{sheets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
            COBRA penalty exposure per{' '}
            <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a>.
          </p>
        </div>
      </section>

      {/* BROKER-ALLY REASSURANCE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.75rem 2rem' }}>
            <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Your broker is not part of this price.</strong>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#555555', lineHeight: '1.7' }}>
              BEG does not sell insurance and does not replace your broker. You are paying for the administration behind your plans: enrollment, data, changes, and compliance. Your broker keeps advising you, negotiating renewals, and placing coverage. Most brokers are glad someone finally owns the operational load.
            </p>
          </div>
        </div>
      </section>

      {/* ESTIMATE CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Number, No Sales Call</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                See your monthly range in about 90 seconds.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Answer five questions about your team, your carriers, and what you want handled. Your monthly estimate for all three plans appears on screen and lands in your inbox, with no commitment required.
              </p>
            </div>
            <div>
              <PricingCta service="managed-benefits" subline={false} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about managed benefits pricing</h2>
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

      {/* HUB BACK-LINK */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Want the full picture?{' '}
            <Link href="/services/managed-benefits" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See everything BEG Managed Benefits handles
            </Link>
            {' '}or compare{' '}
            <Link href="/services/managed-benefits/tpa-vs-peo" style={{ color: '#ECAC60', fontWeight: '600' }}>
              TPA vs PEO
            </Link>
            .
          </p>
        </div>
      </section>

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Pricing', item: 'https://www.beghr.com/services/managed-benefits/pricing' },
            ],
          }),
        }}
      />
    </>
  );
}
