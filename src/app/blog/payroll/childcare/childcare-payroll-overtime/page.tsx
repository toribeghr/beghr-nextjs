import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Childcare Center Payroll and FLSA Overtime: What Operators Need to Know | BEG',
  description: 'FLSA overtime rules for childcare staff — which employees are exempt, how to calculate overtime for part-time and split-shift workers, and the most common compliance mistakes.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/childcare/childcare-payroll-overtime' },,
  openGraph: {
    title: 'Childcare Center Payroll and FLSA Overtime: What Operators Need to Know | BEG',
    description: 'FLSA overtime rules for childcare staff — which employees are exempt, how to calculate overtime for part-time and split-shift workers, and the most comm...',
    url: 'https://beghr.com/blog/payroll/childcare/childcare-payroll-overtime',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Childcare Center Payroll and FLSA Overtime: What Operators Need to Know | BEG', description: 'FLSA overtime rules for childcare staff — which employees are exempt, how to calculate overtime for part-time and split-shift workers, and the most comm...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Are childcare directors exempt from FLSA overtime?',
    a: 'Childcare directors may qualify for the executive exemption if their primary duty is managing the facility, they supervise two or more employees, and they have authority over hiring and termination decisions. They must also be paid on a salary basis of at least $684 per week. Directors who are primarily involved in classroom instruction or direct child supervision — even if they hold the "director" title — often do not meet the management primary duty test.',
  },
  {
    q: 'Can I average hours across multiple pay periods for childcare staff who work variable schedules?',
    a: 'No. FLSA overtime is calculated on a fixed 7-day workweek basis. Hours cannot be averaged across multiple weeks. A teacher who works 45 hours one week and 35 the next is owed 5 hours of overtime for the first week, regardless of what they worked the following week.',
  },
  {
    q: 'Do childcare employees who work split shifts owe overtime?',
    a: 'Yes, if total hours worked in the workweek exceed 40. Split shifts do not change overtime calculations — only total hours matter. An aide who works 7am to 11am and then 3pm to 7pm has worked 8 hours that day and those hours count toward the 40-hour threshold like any others.',
  },
  {
    q: 'What is the domestic service exemption and does it apply to nannies employed through a childcare center?',
    a: 'The domestic service exemption under FLSA covers workers employed in or about a private home. It does not apply to employees of a childcare center who work on the center\'s premises. If your center places staff in clients\' homes, the analysis is more complex and depends on who controls and directs the work.',
  },
];

export default function ChildcareOvertimePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Childcare</p>
              <h1>Childcare Center Payroll and FLSA Overtime: What Operators Need to Know</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Most childcare staff are non-exempt — entitled to overtime for hours over 40 per week. Variable schedules, split shifts, and high turnover make childcare payroll one of the most compliance-intensive operations in the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Childcare centers employ a mix of salaried directors, hourly teachers, part-time aides, and substitute staff — all of whom interact with FLSA differently. The high proportion of hourly, non-exempt workers, combined with variable scheduling and frequent coverage changes, creates a payroll environment where overtime errors are common and expensive.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Exemption Status by Role</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Typical Status</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Center Director (admin focus)', 'Likely exempt', 'Executive exemption; must meet salary + duties test'],
                ['Lead Teacher', 'Non-exempt', 'Instructional, not management primary duty'],
                ['Assistant Teacher', 'Non-exempt', 'Hourly; standard overtime applies'],
                ['Classroom Aide', 'Non-exempt', 'Hourly; overtime if hours exceed 40'],
                ['Substitute Teacher', 'Non-exempt', 'Hourly; track actual hours carefully'],
                ['Cook / Kitchen Staff', 'Non-exempt', 'Hourly; standard overtime applies'],
                ['Administrative Assistant', 'Non-exempt unless salaried $684+/wk', 'Clerical role; usually no exemption'],
              ].map(([role, status, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{role}</td>
                  <td style={{ padding: '10px 14px', color: status.includes('Non-exempt') ? '#c0392b' : '#27ae60', fontWeight: 600, fontSize: '0.85rem' }}>{status}</td>
                  <td style={{ padding: '10px 14px', color: '#555' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Variable Scheduling and Overtime Exposure</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Childcare staffing changes daily based on enrollment ratios, sick calls, and licensing requirements. Teachers who normally work 35 hours per week may regularly cover an additional shift when a colleague calls out — pushing them over 40 hours without a formal schedule change. That overtime is owed whether or not it was preapproved.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          FLSA does not require overtime to be approved in advance — it only requires that actual hours over 40 per workweek be compensated at 1.5x. If an employee works unapproved overtime, you can address the scheduling issue — but you cannot withhold the overtime pay.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>High Turnover and New Hire Payroll Compliance</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Childcare has among the highest employee turnover rates of any industry. Frequent onboarding and offboarding means constant new hire paperwork, I-9 verification, state new hire reporting, and direct deposit setup — on a cycle that can repeat multiple times per month for larger centers.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Centers that handle payroll in-house often fall behind on new hire state reporting (typically required within 20 days of hire) and may delay direct deposit setup while employees wait for their first paycheck. A managed payroll provider handles this as part of the standard onboarding process.
        </p>

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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Let BEG manage childcare payroll compliance</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>Overtime tracking, high-turnover onboarding, and year-end W-2s — fully managed at $25–$45 per employee per month. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/childcare">Managed Payroll for Childcare Centers</Link> — full service details</li>
            <li><Link href="/blog/payroll/childcare/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Childcare</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Childcare Overtime', item: 'https://beghr.com/blog/payroll/childcare/childcare-payroll-overtime' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
