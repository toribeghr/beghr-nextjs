import { Metadata } from 'next';
import Link from 'next/link';
import PayrollCalculator from '@/components/PayrollCalculator';

export const metadata: Metadata = {
  title: 'Managed Payroll Cost Calculator | Monthly Savings | BEG',
  description: 'Calculate what you\'re paying for payroll today vs. BEG managed payroll at $25–$45 PEPM. Compare in-house, software, PEO, and accountant costs. See your estimated annual savings instantly.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/cost-calculator' },,
  openGraph: {
    title: 'Managed Payroll Cost Calculator | Monthly Savings | BEG',
    description: 'Calculate what you\',
    url: 'https://beghr.com/services/managed-payroll/cost-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll Cost Calculator | Monthly Savings | BEG', description: 'Calculate what you\', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function PayrollCostCalculatorPage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background: '#000000', color: '#ffffff', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Managed Payroll · Cost Calculator</p>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              Managed Payroll Cost Calculator
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '600px', margin: '0 auto' }}>
              Enter your employee count and current payroll method. See what you are actually spending today — and what BEG's fully managed service costs at $25–$45 per employee per month.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR + SUPPORTING SECTIONS */}
      <PayrollCalculator />

      {/* SCARCITY CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Ready to Stop Estimating?</p>
            <h2 style={{ color: '#ffffff', fontSize: '1.7rem', fontWeight: '800', marginBottom: '1rem' }}>
              Get your exact monthly cost in 15 minutes.
            </h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
              The calculator uses industry averages. Your BEG contact will review your exact headcount, states, pay schedules, and complexity — and give you a flat monthly number with nothing excluded.
            </p>
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
              style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            >
              Book a Free 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#666666', fontSize: '0.82rem', marginTop: '0.85rem' }}>
              No commitment. No sales pressure. Just a straight number.
            </p>
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
              <h3>How accurate is this calculator?</h3>
              <p>The calculator uses industry benchmarks: average payroll manager salaries from BLS data, platform pricing from published rates, and PEO estimates from NAPEO research. Your actual costs may be higher or lower depending on your market, benefits structure, and current platform. The discovery call replaces the estimate with an exact number.</p>
            </div>
            <div className="faq-item">
              <h3>Why is in-house so expensive compared to the calculator?</h3>
              <p>The in-house estimate includes base salary, employer FICA (7.65%), health insurance contribution, PTO, overhead, and HR management time — all costs that are real but rarely tracked in a single line item. Most companies only see the salary. The total cost of the function is typically 1.25x to 1.4x base salary once all-in costs are included.</p>
            </div>
            <div className="faq-item">
              <h3>What is included in the $25–$45 PEPM rate?</h3>
              <p>Everything: payroll processing, direct deposit, tax withholding and remittance, quarterly and annual filings, W-2 preparation and delivery, new hire reporting, garnishment processing, year-end close, and employee support for paycheck questions. No per-run fees, no filing surcharges, no module add-ons, no year-end invoices.</p>
            </div>
            <div className="faq-item">
              <h3>Is the $25 rate really all-inclusive or is it a base rate?</h3>
              <p>All-inclusive. The $25 PEPM covers full managed payroll service when BEG operates in your existing system. The $45 PEPM covers full managed payroll service when BEG migrates you to iSolved. Both rates include everything listed above. Your discovery call confirms the exact rate for your situation before you commit to anything.</p>
            </div>
            <div className="faq-item">
              <h3>Can the calculator handle multi-state payroll?</h3>
              <p>The calculator does not differentiate by state count — BEG covers all 50 states at the same flat rate. Multi-state registrations, state-specific filings, and local tax handling are all included. If you have employees in multiple states, mention that on your discovery call so we can confirm all registrations are in place.</p>
            </div>
            <div className="faq-item">
              <h3>What if my company has more than 250 employees?</h3>
              <p>The calculator caps at 250 for display purposes. BEG serves companies well above that headcount. Book a discovery call and your BEG contact will scope the engagement and give you an exact monthly cost at your actual employee count.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HUB BACK-LINK */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Ready to see all managed payroll options?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            {' '}or view our{' '}
            <Link href="/services/managed-payroll/pricing" style={{ color: '#ECAC60', fontWeight: '600' }}>
              full pricing page
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
              {
                '@type': 'Question',
                name: 'How accurate is this managed payroll cost calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The calculator uses industry benchmarks from BLS salary data, published platform pricing, and NAPEO research. Your discovery call replaces the estimate with an exact monthly number.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is included in the $25–$45 PEPM managed payroll rate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Everything: payroll processing, direct deposit, tax withholding and remittance, quarterly and annual filings, W-2 preparation and delivery, new hire reporting, garnishment processing, year-end close, and employee support. No per-run fees or add-ons.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is the $25 managed payroll rate all-inclusive?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. The $25 PEPM covers full managed payroll service when BEG operates in your existing system. The $45 PEPM covers full managed payroll when BEG migrates you to iSolved. Both include everything with no add-ons.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does managed payroll cost for a 50-employee company?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At BEG\'s $25–$45 PEPM rate, a 50-employee company pays $1,250–$2,250 per month all-inclusive. This compares to $6,000–$9,000 per month for an in-house payroll manager including salary and benefits.',
                },
              },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Cost Calculator', item: 'https://beghr.com/services/managed-payroll/cost-calculator' },
            ],
          }),
        }}
      />
    </>
  );
}
