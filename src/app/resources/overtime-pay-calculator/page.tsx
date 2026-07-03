import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';

const DESC =
  'Free FLSA overtime calculator. Get the correct regular rate of pay including nondiscretionary bonuses and blended multiple pay rates, plus daily-overtime flags for states like California. No email required.';

export const metadata: Metadata = {
  title: 'FLSA Overtime Pay Calculator (Regular Rate, Bonuses, Blended) | BEG',
  description: DESC,
  alternates: { canonical: 'https://www.beghr.com/resources/overtime-pay-calculator' },
  openGraph: {
    title: 'FLSA Overtime Pay Calculator | BEG',
    description: DESC,
    url: 'https://www.beghr.com/resources/overtime-pay-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLSA Overtime Pay Calculator | BEG',
    description: DESC,
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const FAQ = [
  {
    q: 'How is overtime pay calculated under the FLSA?',
    a: 'Overtime is 1.5 times the regular rate for hours over 40 in a workweek. The regular rate is all straight-time pay, including nondiscretionary bonuses, divided by all hours worked, not just the base hourly rate.',
  },
  {
    q: 'Do bonuses change the overtime rate?',
    a: 'Yes. Nondiscretionary bonuses and commissions must be added into the regular rate before overtime is figured. Forgetting this underpays overtime and is one of the most common wage-and-hour violations.',
  },
  {
    q: 'How does overtime work for two different pay rates?',
    a: 'When an employee works at two rates in one week, the regular rate is the weighted average: total straight-time earnings divided by total hours. Overtime premium is then half that blended rate for hours over 40.',
  },
  {
    q: 'Which states have daily overtime?',
    a: 'California, Alaska, Colorado, and Nevada apply daily overtime in addition to the 40-hour week. California pays 1.5x after 8 hours and 2x after 12 hours in a single day, so weekly math alone can understate what is owed.',
  },
];

export default function OvertimePayCalculatorPage() {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
          { '@type': 'ListItem', position: 3, name: 'Overtime Pay Calculator', item: 'https://www.beghr.com/resources/overtime-pay-calculator' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'FLSA Overtime Pay Calculator',
        applicationCategory: 'BusinessApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: 'https://www.beghr.com/resources/overtime-pay-calculator', description: DESC,
        provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/resources/overtime-pay-calculator',
      }) }} />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool · Payroll Math Suite</p>
            <h1>FLSA Overtime Pay Calculator</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555', maxWidth: '660px', margin: '1rem auto 0', textAlign: 'center' }}>
              Overtime is not just 1.5 times the hourly rate. Bonuses and second pay rates change the math, and most employers get it wrong. Enter the week and see the correct regular rate and overtime owed, plus where you might be underpaying. No email required.
            </p>
          </div>
          <div className="tldr" style={{ maxWidth: '660px', margin: '1.75rem auto 0', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.1rem 1.25rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            <strong>The short version:</strong> Overtime is 1.5x the regular rate for hours over 40, and the regular rate must include nondiscretionary bonuses and blend multiple pay rates. Leaving the bonus out is the single most common overtime mistake.
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      <OvertimePayCalculator />

      {/* AEO CONTENT */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What is the regular rate of pay?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            The regular rate is the basis for overtime. It equals all straight-time compensation for the week, including hourly wages, shift differentials, and nondiscretionary bonuses, divided by the total hours worked. Overtime is then 1.5 times that rate for hours over 40.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Why does forgetting a bonus cost so much?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            A production or attendance bonus raises the regular rate, which raises every overtime hour that week. Employers who pay overtime on the base rate alone underpay each affected check. Across a team and many pay periods, that becomes significant back pay and penalties.
          </p>

          <h2 style={{ marginTop: '2rem' }}>How is blended overtime calculated?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            When an employee earns two different rates in one week, you use a weighted average. Add all straight-time earnings, divide by total hours to get the blended regular rate, then pay half that rate as the premium on hours over 40.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Overtime pay FAQ</h2>
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
            <Link href="/resources/final-paycheck-calculator" style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000' }}>
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Final Paycheck Calculator</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>Get the exact final-pay deadline and PTO payout rule for any state.</span>
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
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Get Overtime Right Every Run</p>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Let BEG handle regular-rate overtime automatically.</h2>
          <p style={{ color: '#ccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG fully managed payroll runs at $25 to $45 PEPM, all-inclusive, and calculates regular-rate, blended-rate, and bonus overtime correctly on every cycle so you avoid back-pay and penalties. See your exact price in 90 seconds.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>
      </section>
    </>
  );
}
