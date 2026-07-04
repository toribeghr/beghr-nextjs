import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import FinalPaycheckCalculator from '@/components/FinalPaycheckCalculator';

const DESC =
  'Free final paycheck calculator. Pick any of the 50 states, choose fired or quit, and get the exact deadline to issue a final check plus the PTO payout';

export const metadata: Metadata = {
  title: 'Final Paycheck Calculator by State (2026) | BEG',
  description: DESC,
  alternates: { canonical: 'https://www.beghr.com/resources/final-paycheck-calculator' },
  openGraph: {
    title: 'Final Paycheck Calculator by State (2026) | BEG',
    description: DESC,
    url: 'https://www.beghr.com/resources/final-paycheck-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Paycheck Calculator by State (2026) | BEG',
    description: DESC,
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const FAQ = [
  {
    q: 'When is a final paycheck due after termination?',
    a: 'It depends on the state and whether the employee was fired or quit. Some states require immediate payment on the last day, while others allow until the next regular payday. The calculator gives the exact deadline.',
  },
  {
    q: 'Do you have to pay out unused PTO when an employee leaves?',
    a: 'It varies by state. About a dozen states treat accrued, unused PTO as earned wages that must be paid out at separation. In the rest, payout is required only if your written policy provides for it.',
  },
  {
    q: 'Which state law applies for a remote employee?',
    a: 'Final-pay and PTO-payout rules follow the state where the employee physically works, not where your company is headquartered. Multi-state teams must apply each employee’s work-state rule.',
  },
  {
    q: 'What happens if a final paycheck is late?',
    a: 'Many states impose waiting-time penalties, often a full day of wages for each day the payment is late, plus potential employee claims. Penalties can quickly exceed the wages owed.',
  },
];

export default function FinalPaycheckCalculatorPage() {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
          { '@type': 'ListItem', position: 3, name: 'Final Paycheck Calculator', item: 'https://www.beghr.com/resources/final-paycheck-calculator' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Final Paycheck Calculator by State',
        applicationCategory: 'BusinessApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: 'https://www.beghr.com/resources/final-paycheck-calculator', description: DESC,
        provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/resources/final-paycheck-calculator',
      }) }} />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool · Payroll Math Suite</p>
            <h1>Final Paycheck Calculator by State</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555', maxWidth: '660px', margin: '1rem auto 0', textAlign: 'center' }}>
              When someone leaves, the clock starts. Pick the state, choose fired or quit, and get the exact deadline to issue the final check, plus whether unused PTO has to be paid out. Everything runs in your browser. No email required.
            </p>
          </div>
          <div className="tldr" style={{ maxWidth: '660px', margin: '1.75rem auto 0', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.1rem 1.25rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            <strong>The short version:</strong> Final-pay deadlines run from same-day (California, Massachusetts) to the next regular payday, and about a dozen states force a payout of accrued PTO. The rule follows the employee’s work state, and missing it triggers daily penalties.
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      <FinalPaycheckCalculator />

      {/* AEO CONTENT */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>How do final paycheck laws work?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            Final paycheck deadlines are set by each state and almost always differ for an involuntary termination versus a voluntary resignation. The strictest states require payment the moment you end the relationship; the most lenient allow until the next regular payday.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Which states make you pay a fired employee immediately?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            Several do. California and Massachusetts require the final check on the day of discharge, Colorado requires it immediately, and Utah and Minnesota require it within 24 hours of demand. Quitting employees usually get more time.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Does unused PTO have to be paid out?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            In states like California, Colorado, Illinois, and Massachusetts, accrued PTO is treated as earned wages and must be paid out. Elsewhere it depends on your written policy. The calculator flags which rule applies and estimates the payout.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Final paycheck FAQ</h2>
          {FAQ.map((f) => (
            <div key={f.q} className="faq-item" style={{ borderBottom: '1px solid #e5e5e5', padding: '1.1rem 0' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{f.q}</h3>
              <p style={{ color: '#555', lineHeight: 1.7, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUITE CROSS-LINKS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center"><p className="eyebrow">More Free Payroll Tools</p><h2>The rest of the payroll math suite</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.75rem' }}>
            <Link href="/resources/overtime-pay-calculator" style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000' }}>
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Overtime Pay Calculator</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>Get the FLSA regular rate right, including bonuses and blended rates.</span>
            </Link>
            <Link href="/resources/true-cost-of-an-employee-calculator" style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000' }}>
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>True Cost of an Employee</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>See the fully loaded cost of a hire, beyond base pay.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Stop Tracking Deadlines by Hand</p>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Let BEG manage every final paycheck for you.</h2>
          <p style={{ color: '#ccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG fully managed payroll runs at $25 to $45 PEPM, all-inclusive, and handles separation pay, PTO payout, and multi-state deadlines so a missed date never becomes a penalty. See your exact price in 90 seconds.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>
      </section>
    </>
  );
}
