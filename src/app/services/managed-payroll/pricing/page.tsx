import { Metadata } from 'next';
import Link from 'next/link';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';

export const metadata: Metadata = {
  title: 'Managed Payroll Pricing | Instant Quote in 90 Seconds | BEG',
  description: 'BEG managed payroll pricing starts at $25 PEPM, all-inclusive. No per-run fees, no module add-ons, no year-end surprises. See what is included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/pricing' },
  openGraph: {
    title: 'Managed Payroll Pricing | Instant Quote in 90 Seconds | BEG',
    description: 'BEG managed payroll pricing starts at $25 PEPM, all-inclusive. No per-run fees, no module add-ons, no year-end surprises. See what is included.',
    url: 'https://www.beghr.com/services/managed-payroll/pricing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll Pricing | Instant Quote in 90 Seconds | BEG', description: 'BEG managed payroll pricing starts at $25 PEPM, all-inclusive. No per-run fees, no module add-ons, no year-end surprises. See what is included.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function ManagedPayrollPricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background: '#000000', color: '#ffffff', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Managed Payroll · Pricing</p>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              Managed Payroll Pricing
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '620px', margin: '0 auto' }}>
              One flat rate. Everything included. No per-run fees, no module charges, no year-end invoices. Your BEG contact gives you an exact monthly number on your discovery call before you commit to anything.
            </p>
          </div>
        </div>
      </section>

      {/* TWO TIERS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Your Two Options</p>
            <h2>Same full service. Two ways to run it.</h2>
            <p style={{ marginTop: '0.75rem', color: '#666666', maxWidth: '580px', margin: '0.75rem auto 0', fontSize: '0.97rem', lineHeight: '1.7' }}>
              The difference is where payroll runs -- in your existing system or in BEG's iSolved account. The service scope is identical either way.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }} className="reveal">
            {/* Tier 1 */}
            <div style={{ border: '2px solid #e5e5e5', borderRadius: '12px', padding: '2.25rem', background: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#f2f2f2', color: '#555', fontWeight: '700', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Tier 1</span>
                </div>
              </div>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#000', lineHeight: 1, marginTop: '0.75rem' }}>$25</div>
              <div style={{ fontSize: '0.88rem', color: '#777', marginBottom: '1.25rem' }}>per employee / month</div>
              <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.6rem' }}>We work in your existing system</strong>
              <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                BEG operates as your managed payroll team inside your current platform -- ADP, Gusto, Rippling, QuickBooks Payroll, Paychex, or other. No migration required. You keep your existing software. We run payroll for you from the inside.
              </p>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1rem', fontSize: '0.85rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem', color: '#000' }}>Best for:</strong>
                Companies satisfied with their current platform who want payroll off their plate without changing software or disrupting existing workflows.
              </div>
              <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '0.85rem 1rem' }}>
                Get My Exact Quote
              </Link>
            </div>

            {/* Tier 2 */}
            <div style={{ border: '2px solid #ECAC60', borderRadius: '12px', padding: '2.25rem', background: '#fffdf5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000', fontWeight: '700', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Tier 2</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#888', fontStyle: 'italic' }}>Most popular</span>
              </div>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#000', lineHeight: 1, marginTop: '0.75rem' }}>$45</div>
              <div style={{ fontSize: '0.88rem', color: '#777', marginBottom: '1.25rem' }}>per employee / month</div>
              <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.6rem' }}>We move you to iSolved</strong>
              <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                BEG migrates your payroll to iSolved -- a full HCM platform with automated compliance updates, employee self-service, benefits administration, and time tracking beyond basic payroll. Onboarding: 3–5 business days from contract to live payroll.
              </p>
              <div style={{ background: '#fff9ee', border: '1px solid #f0d898', borderRadius: '8px', padding: '1rem', fontSize: '0.85rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem', color: '#000' }}>Best for:</strong>
                Companies ready to upgrade to a purpose-built HCM platform and get access to employee self-service, integrated benefits, and automated compliance -- not just payroll processing.
              </div>
              <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '0.85rem 1rem' }}>
                Get My Exact Quote
              </Link>
            </div>
          </div>

          {/* No gotchas callout */}
          <div style={{ marginTop: '1.5rem', background: '#000', color: '#fff', borderRadius: '10px', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' as const }} className="reveal">
            <div style={{ fontSize: '1.75rem' }}>✓</div>
            <div>
              <strong style={{ color: '#ECAC60', display: 'block', marginBottom: '0.2rem' }}>No hidden fees. Ever.</strong>
              <span style={{ fontSize: '0.9rem', color: '#ccc' }}>No base fee. No per-run charges. No year-end invoice. No state registration fees. No W-2 fees. The PEPM rate is the total monthly cost.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Complete Scope</p>
            <h2>What both tiers include</h2>
            <p style={{ marginTop: '0.75rem', color: '#666666', maxWidth: '580px', margin: '0.75rem auto 0', fontSize: '0.97rem' }}>
              The scope is identical between Tier 1 and Tier 2. The only difference is which platform payroll runs on.
            </p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#000', color: '#ECAC60' }}>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700, minWidth: '200px' }}>What is included</th>
                  <th style={{ padding: '13px 16px', textAlign: 'center', fontWeight: 700 }}>Tier 1 · $25/ee/mo</th>
                  <th style={{ padding: '13px 16px', textAlign: 'center', fontWeight: 700 }}>Tier 2 · $45/ee/mo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Full payroll processing, every cycle', true, true],
                  ['Direct deposit and pay stub delivery', true, true],
                  ['Federal and state tax withholding', true, true],
                  ['Quarterly 941, 940, and SUTA filings', true, true],
                  ['New hire reporting -- all 50 states', true, true],
                  ['Off-cycle and bonus payrolls', true, true],
                  ['Garnishment calculation and remittance', true, true],
                  ['W-2 preparation, filing, and delivery', true, true],
                  ['Year-end reconciliation and close', true, true],
                  ['W-2c corrections', true, true],
                  ['IRS and state notice management', true, true],
                  ['Employee paycheck support (direct to BEG)', true, true],
                  ['Dedicated BEG payroll contact', true, true],
                  ['Multi-state payroll -- all 50 states', true, true],
                  ['New state registrations as you grow', true, true],
                  ['iSolved HCM platform access', false, true],
                  ['Employee self-service portal', false, true],
                  ['Automated compliance updates', false, true],
                  ['Time and attendance integration', false, true],
                  ['Benefits administration tools', false, true],
                  ['3–5 day implementation to live payroll', false, true],
                ].map(([feature, t1, t2], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '11px 16px', color: '#333', fontWeight: typeof feature === 'string' && feature.includes('iSolved') ? '600' : '400' }}>{feature as string}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'center', fontSize: '1.1rem' }}>{t1 ? <span style={{ color: '#1a6e1a', fontWeight: 700 }}>✓</span> : <span style={{ color: '#ccc' }}>-</span>}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'center', fontSize: '1.1rem' }}>{t2 ? <span style={{ color: '#1a6e1a', fontWeight: 700 }}>✓</span> : <span style={{ color: '#ccc' }}>-</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPARISON: BEG vs ALTERNATIVES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Compares</p>
            <h2>BEG managed payroll pricing vs. the alternatives</h2>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#000', color: '#ECAC60' }}>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Cost factor</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Payroll</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>In-House Manager</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Self-Service Software</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly cost (50 employees)', '$1,250–$2,250 total', '$6,500–$9,000+ all-in', '$300–$700 + your time', '$7,500–$10,000+'],
                  ['Per-run fees', 'None', 'N/A', '$25–$150/run', 'None (in admin fee)'],
                  ['Year-end W-2 fees', 'None', 'N/A', '$3–$10/W-2', 'None (in admin fee)'],
                  ['State registration fees', 'None', 'N/A', '$150–$400/state', 'None (in admin fee)'],
                  ['Who does the work', 'BEG -- fully managed', 'Your employee', 'You and your team', 'Split between you and PEO'],
                  ['Time to first payroll', '3–5 business days', '6–12 weeks to hire', '4–8 weeks to configure', '30–60 days'],
                  ['Contract / lock-in', 'Month-to-month', 'At-will employment', 'Month-to-month or annual', 'Annual minimum'],
                ].map(([factor, beg, inhouse, software, peo], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: '#333' }}>{factor}</td>
                    <td style={{ padding: '11px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{inhouse}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{software}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{peo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Run the Numbers</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>See your savings before the call.</h2>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Enter your employee count and current payroll method. Get an instant estimate of what you are paying today vs. what BEG costs -- and how much you would save annually.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/services/managed-payroll/cost-calculator" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2rem', display: 'inline-block', marginBottom: '0.75rem' }}>
                Open the Cost Calculator
              </Link>
              <p style={{ fontSize: '0.82rem', color: '#888', margin: 0 }}>No email required. Instant results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Real Cost of Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                Every month you overpay for payroll is a month you do not get back.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.95rem' }}>
                A payroll manager at $80,000 costs $104,000 per year fully loaded. BEG at $25–$45 PEPM for a 50-person company costs $15,000–$27,000 per year -- all-inclusive. The difference compounds every month you stay on your current setup.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Exact Number</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                Get your flat monthly cost in a 15-minute call.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.95rem' }}>
                We review your headcount, states, pay schedules, and current setup. You walk away with a single number -- your exact BEG monthly cost -- with nothing excluded and no commitment required.
              </p>
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
                style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.95rem', padding: '0.85rem 2rem' }}
              >
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about managed payroll pricing</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Is there a minimum employee count?</h3>
              <p>No hard minimum. BEG works with companies from 5 employees to several hundred. At very small headcounts the economics tighten, which is why your discovery call confirms the exact rate -- we will tell you if a different approach makes more sense for your situation.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a setup fee?</h3>
              <p>No. There is no onboarding fee, no setup charge, and no implementation fee. The monthly PEPM rate starts when your first live payroll runs. If you are migrating to iSolved (Tier 2), BEG handles the migration -- no separate charge.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a contract or minimum commitment?</h3>
              <p>BEG operates month-to-month. There is no annual contract requirement and no cancellation fee. Most clients stay because the service works -- not because they are locked in.</p>
            </div>
            <div className="faq-item">
              <h3>What if my headcount changes month to month?</h3>
              <p>Your monthly invoice reflects your active employee count for that pay period. If you add employees, the rate increases accordingly. If headcount drops, the rate drops. You pay for what you actually use.</p>
            </div>
            <div className="faq-item">
              <h3>Do you charge for multi-state payroll?</h3>
              <p>No. Multi-state payroll is included in the flat PEPM rate. State registrations, SUTA filings, and local tax handling for every state where you have employees are covered. Adding a new state is handled by your BEG contact at no additional charge.</p>
            </div>
            <div className="faq-item">
              <h3>Are W-2s and year-end included?</h3>
              <p>Yes. W-2 preparation, SSA filing, employee delivery, and year-end reconciliation are all included in the monthly rate. There is no year-end invoice or W-2 per-form charge.</p>
            </div>
            <div className="faq-item">
              <h3>What is not included?</h3>
              <p>BEG does not administer health insurance or 401(k) contributions -- those remain with your benefits broker and plan administrator. If you need benefits administration added, that is handled through the iSolved platform (Tier 2) as a separate engagement. Everything on the scope table above is included in the PEPM rate.</p>
            </div>
            <div className="faq-item">
              <h3>How do I get my exact monthly cost?</h3>
              <p>Book a 15-minute discovery call. Your BEG contact reviews your headcount, states, pay frequency, and any complexity (garnishments, commissions, multi-entity) and gives you a flat monthly number during the call. No follow-up proposal, no waiting -- a straight number before you leave the call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HUB BACK-LINK */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Want to explore managed payroll for your industry?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            {' '}or{' '}
            <Link href="/services/managed-payroll/cost-calculator" style={{ color: '#ECAC60', fontWeight: '600' }}>
              run the cost calculator
            </Link>
            .
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Is there a setup fee for managed payroll?', acceptedAnswer: { '@type': 'Answer', text: 'No. There is no onboarding fee, setup charge, or implementation fee. The monthly PEPM rate starts when your first live payroll runs.' } },
              { '@type': 'Question', name: 'Is there a contract or minimum commitment?', acceptedAnswer: { '@type': 'Answer', text: 'BEG operates month-to-month. No annual contract, no cancellation fee.' } },
              { '@type': 'Question', name: 'How much does managed payroll cost per employee?', acceptedAnswer: { '@type': 'Answer', text: 'BEG managed payroll costs $25 per employee per month when operating in your existing system, or $45 per employee per month when migrating to iSolved. Both rates are all-inclusive with no per-run or year-end fees.' } },
              { '@type': 'Question', name: 'Is multi-state payroll included in the price?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Multi-state payroll is included in the flat PEPM rate. State registrations, SUTA filings, and local tax handling are all covered at no additional charge.' } },
              { '@type': 'Question', name: 'Are W-2s and year-end included in managed payroll pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. W-2 preparation, SSA filing, employee delivery, and year-end reconciliation are all included in the monthly PEPM rate. No year-end invoice or per-W-2 charges.' } },
            ],
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
              { '@type': 'ListItem', position: 3, name: 'Pricing', item: 'https://www.beghr.com/services/managed-payroll/pricing' },
            ],
          }),
        }}
      />
      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Comparing our pricing to a quote you got? Audit it.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>We are flat $25 to $45 PEPM, all-inclusive. Run any competitor quote through the auditor to see its real cost per employee and which add-on fees are hiding inside. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </>
  );
}
