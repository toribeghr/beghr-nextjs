import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup | BEG',
  description: 'How to structure per diem pay for truck drivers correctly — IRS accountable plan rules, the 2025 rate, how per diem reduces payroll taxes, and common',
  alternates: { canonical: 'https://beghr.com/blog/payroll/trucking/per-diem-pay-truck-drivers' },
  openGraph: {
    title: 'Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup | BEG',
    description: 'How to structure per diem pay for truck drivers correctly — IRS accountable plan rules, the 2025 rate, how per diem reduces payroll taxes, and common se...',
    url: 'https://beghr.com/blog/payroll/trucking/per-diem-pay-truck-drivers',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup | BEG', description: 'How to structure per diem pay for truck drivers correctly — IRS accountable plan rules, the 2025 rate, how per diem reduces payroll taxes, and common se...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'What is the IRS per diem rate for truck drivers in 2025?',
    a: 'The IRS special per diem rate for transportation industry workers in 2025 is $80 per day for travel within the continental United States. This rate applies to drivers who are subject to DOT hours-of-service regulations. The rate changes periodically, so confirm the current rate with your payroll provider or on IRS.gov before each plan year.',
  },
  {
    q: 'Does per diem reduce FICA taxes?',
    a: 'Yes. Per diem paid under an accountable plan is excluded from the driver\'s taxable wages, which means neither the employee nor the employer owes Social Security or Medicare taxes on that amount. For a driver earning significant per diem, this can meaningfully reduce the total payroll tax burden for both parties.',
  },
  {
    q: 'Can I pay per diem to owner-operators?',
    a: 'Owner-operators who are independent contractors manage their own per diem deduction on Schedule C — it is not a payroll item for your business. Per diem structuring in payroll applies to W-2 employees only. If you are paying owner-operators per diem through payroll, that arrangement needs to be reviewed.',
  },
  {
    q: 'What happens if per diem is not set up under an accountable plan?',
    a: 'Per diem paid outside of an accountable plan is treated as additional wages — fully taxable to the employee and subject to FICA and income tax withholding. The tax savings disappear, and you may owe back taxes and penalties if the IRS determines the arrangement was non-compliant.',
  },
];

export default function PerDiemTruckDriversPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Trucking</p>
              <h1>Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Per diem is one of the most valuable payroll tools available to trucking companies. Structured correctly, it reduces taxable wages for drivers and lowers FICA costs for the employer. Structured incorrectly, it creates IRS exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Per diem is a daily allowance paid to employees to cover meals and incidental expenses while traveling away from home for work. For truck drivers who spend nights away from their tax home, per diem is both a legitimate business expense and a payroll tool that, when set up correctly, reduces taxable wages for the driver and FICA costs for the carrier.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Most small and mid-size fleets either skip per diem entirely or pay it in a way that creates IRS exposure. Here is how it works and how to set it up correctly.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Per Diem Is — and Is Not</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Per diem is not extra pay. It is a reimbursement for the costs of being away from home on a work trip. The IRS allows employers to reimburse employees for travel expenses at a standard rate without requiring receipts — provided the arrangement meets the requirements of an accountable plan.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          For truck drivers subject to DOT hours-of-service regulations, the IRS publishes a special per diem rate that is higher than the standard federal rate, recognizing the extended periods drivers spend away from home. The current rate applies to days spent away from the driver's tax home.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The key point: per diem paid at or below the IRS rate under an accountable plan is excluded from taxable wages. Per diem paid above the rate, or outside an accountable plan, is taxable compensation.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Accountable Plan Requirement</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          For per diem to be excluded from taxable wages, the payment must be made under an accountable plan. An accountable plan requires three elements:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            { n: '1', title: 'Business connection', body: 'The expense must have a business connection — the driver must be traveling away from their tax home overnight for work purposes.' },
            { n: '2', title: 'Substantiation', body: 'The reimbursement must be substantiated within a reasonable time. When using the IRS standard rate, substantiation consists of recording the date, destination, and business purpose of the travel — not individual receipts.' },
            { n: '3', title: 'Return of excess', body: 'If you advance more than the allowable rate, the driver must return the excess within a reasonable time. In practice, most plans pay exactly at the IRS rate to avoid this.' },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>{n}</div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{title}</strong>
                <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Tax Savings in Practice</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Here is a simplified example of the FICA savings from correctly structured per diem. Assume a driver works 250 days per year with 200 nights away from home, and the fleet pays the IRS rate of $80 per away day.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Annual per diem (200 days × $80)', '$16,000'],
                ['FICA employer savings (7.65% × $16,000)', '$1,224/driver/year'],
                ['FICA employee savings', '$1,224/driver/year'],
                ['Fleet with 30 drivers — employer FICA savings', '$36,720/year'],
              ].map(([label, val], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px' }}>{label}</td>
                  <td style={{ padding: '10px 14px', fontWeight: i === 3 ? 700 : 400, color: i === 3 ? '#000' : '#444' }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem', color: '#555', fontSize: '0.9rem' }}>
          Note: This is a simplified illustration. Actual savings depend on driver wages, days away from home, and IRS rate in effect. Consult your payroll provider for exact figures.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Common Per Diem Setup Mistakes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            'Paying per diem at a flat rate above the IRS limit — the excess is taxable and must be reported as wages.',
            'Not documenting travel dates and locations — without records, the arrangement fails the accountable plan test.',
            'Paying per diem to drivers who are not away from their tax home overnight — per diem is not a daily meal allowance for local drivers.',
            'Setting up per diem as a pay code in payroll without excluding it from taxable wages — a common system error that eliminates the tax benefit.',
            'Not updating the rate when the IRS changes it — using an outdated rate puts you over the exclusion limit.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Get per diem set up correctly from day one</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages trucking payroll including per diem structuring, multi-state withholding, and year-end W-2s. 15-minute discovery call — no obligation.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/trucking">Managed Payroll for Trucking Companies</Link> — full service details</li>
            <li><Link href="/blog/payroll/trucking/truck-driver-payroll-taxes">Trucking Company Payroll Taxes</Link> — the full tax guide</li>
            <li><Link href="/blog/payroll/trucking/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Trucking</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Per Diem for Truck Drivers', item: 'https://beghr.com/blog/payroll/trucking/per-diem-pay-truck-drivers' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
