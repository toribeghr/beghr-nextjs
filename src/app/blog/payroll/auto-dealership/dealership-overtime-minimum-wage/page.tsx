import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dealership Overtime & Min Wage | FLSA Rules for Dealers | BEG',
  description: 'How FLSA overtime and minimum wage rules apply to auto dealership employees — the F&I and service advisor exemptions, flat-rate technician minimum wage.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/auto-dealership/dealership-overtime-minimum-wage' },
  openGraph: {
    title: 'Dealership Overtime & Min Wage | FLSA Rules for Dealers | BEG',
    description: 'How FLSA overtime and minimum wage rules apply to auto dealership employees — the F&I and service advisor exemptions, flat-rate technician minimum wage ...',
    url: 'https://beghr.com/blog/payroll/auto-dealership/dealership-overtime-minimum-wage',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Dealership Overtime & Min Wage | FLSA Rules for Dealers | BEG', description: 'How FLSA overtime and minimum wage rules apply to auto dealership employees — the F&I and service advisor exemptions, flat-rate technician minimum wage ...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Are F&I managers exempt from overtime?',
    a: 'Generally yes, under the FLSA Section 13(b)(10)(A) exemption for salespeople, parts people, and mechanics at automobile dealerships. F&I managers are considered part of the vehicle sales process. However, the exemption requires that more than half of their compensation come from commissions — if the compensation structure shifts significantly toward salary, the exemption may not apply. Confirm the compensation mix before relying on the exemption.',
  },
  {
    q: 'Are service advisors exempt from overtime?',
    a: 'The Supreme Court ruled in Navarro v. Encino Motorcars (2018) that service advisors are NOT exempt under the 13(b)(10)(A) exemption. The exemption applies to "salesmen, partsmen, or mechanics" — and the Court held that service advisors do not meet any of those definitions. Service advisors must be paid overtime for hours over 40 in a workweek.',
  },
  {
    q: 'Can a flat-rate technician earn less than minimum wage in a slow week?',
    a: 'No. Federal and state minimum wage laws apply regardless of pay structure. If a flat-rate technician\'s flat-rate earnings for the week divided by hours worked falls below the applicable minimum wage, the dealership must make up the shortfall. This is a common compliance failure at dealerships that track flat-rate hours but not actual clock hours.',
  },
  {
    q: 'How do you calculate overtime for employees with mixed pay — both salary and commissions?',
    a: 'For employees who earn both a salary and commissions in a workweek, the "regular rate" for overtime purposes must be calculated by adding all compensation earned and dividing by all hours worked. The overtime premium is then 0.5× that regular rate for each hour over 40. Simply paying 1.5× the salary component does not satisfy FLSA if commissions were also earned that week.',
  },
];

export default function DealershipOvertimeMinWagePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Auto Dealerships</p>
              <h1>Dealership Overtime and Minimum Wage: FLSA Rules for F&amp;I, Service Advisors, and Technicians</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Auto dealerships have some of the most complex FLSA compliance situations in any industry. Service advisors are not exempt. Flat-rate technicians can fall below minimum wage. Getting either wrong is expensive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Auto dealerships operate under a patchwork of FLSA rules that differ significantly by role. Salespeople, F&I managers, and mechanics typically qualify for a specific overtime exemption. Service advisors do not — a point that caught many dealerships off-guard after a 2018 Supreme Court ruling. Flat-rate technicians earn a floor minimum wage that may not be met in slow weeks. Misunderstanding any of these rules creates retroactive wage liability.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FLSA Exemption Status by Dealership Role</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>OT Exemption?</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Basis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Vehicle salespeople', 'Exempt', 'FLSA 13(b)(10)(A) — salesperson at auto dealer; requires commission majority'],
                ['F&I managers', 'Exempt (conditional)', 'Treated as salespeople; must have commission-majority pay structure'],
                ['Parts department staff (counterpersons)', 'Exempt', 'FLSA 13(b)(10)(A) explicitly covers "partsmen"'],
                ['Auto mechanics / technicians', 'Exempt', 'FLSA 13(b)(10)(A) explicitly covers "mechanics"'],
                ['Service advisors (writers)', 'NOT exempt', 'Navarro v. Encino Motorcars (2018) — Supreme Court ruled not covered by 13(b)(10)(A)'],
                ['Lot attendants / detailers', 'NOT exempt', 'No specific auto dealer exemption applies'],
                ['Office / administrative staff', 'Potentially exempt', 'Must meet white-collar exemption tests (salary + duties)'],
              ].map(([role, status, basis], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{role}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: status === 'NOT exempt' ? '#c0392b' : status === 'Exempt' ? '#27ae60' : '#e67e22' }}>{status}</td>
                  <td style={{ padding: '10px 14px', color: '#555', fontSize: '0.85rem' }}>{basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Service Advisor Overtime: What Navarro Changed</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Before the 2018 Navarro decision, many dealerships treated service advisors the same as salespeople — exempt from overtime. The Supreme Court rejected that interpretation. Service advisors sell services (not vehicles) and manage customer relationships around the service drive. They are non-exempt employees for FLSA purposes.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          This means service advisors must be paid 1.5× their regular rate for any hours over 40 in a workweek. If they earn commissions (flat pay per repair order, bonuses on customer pay), those commissions must be included in the regular rate calculation for weeks with overtime. Dealers who have not adjusted since 2018 may have years of unpaid overtime exposure.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Flat-Rate Technicians and the Minimum Wage Floor</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Flat-rate technicians are paid by the job — a brake job pays 1.5 hours of flat-rate time regardless of how long it actually takes. In productive weeks, technicians earn well above minimum wage. In slow weeks (few repair orders, warranty-intensive work with low pay times), the flat-rate earnings may fall below the minimum wage floor.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
          The FLSA requires that total flat-rate earnings ÷ total actual hours worked must be at or above the applicable minimum wage. Tracking actual clock hours (not just flag hours) is essential to identify when a supplement is required.
        </p>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', marginBottom: '2.5rem' }}>
          <strong>Example:</strong>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', lineHeight: '1.6', color: '#444' }}>
            Technician clocks 42 actual hours. Flat-rate earnings: $280 (14 flag hours × $20/flat-rate hour). Effective rate: $280 ÷ 42 = $6.67/hr — below federal minimum wage of $7.25. Dealership owes a supplement of ($7.25 × 42) − $280 = $24.50, plus standard overtime of 0.5× the regular rate for the 2 overtime hours.
          </p>
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Dealership payroll is complicated — let BEG manage it</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for auto dealerships including flat-rate technician minimum wage tracking, service advisor overtime, and commission payroll. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/auto-dealership">Managed Payroll for Auto Dealerships</Link> — full service details</li>
            <li><Link href="/blog/payroll/auto-dealership/dealer-commission-payroll">Commission and Draw-Against Payroll for Dealers</Link> — commission processing guide</li>
            <li><Link href="/blog/payroll/auto-dealership/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Dealerships</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Dealership Overtime & Minimum Wage', item: 'https://beghr.com/blog/payroll/auto-dealership/dealership-overtime-minimum-wage' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}