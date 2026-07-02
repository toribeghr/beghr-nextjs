import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Care Payroll Guide: CNA Pay and Shift Diffs | BEG',
  description: 'Senior care facility payroll guide: CNA overtime rules, shift differential configuration, CMS staffing compliance, and payroll management for nursing homes and ALFs.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/senior-care/senior-care-payroll-guide' },
  openGraph: {
    title: 'Senior Care Payroll Guide: CNA Pay and Shift Diffs | BEG',
    description: 'Senior care facility payroll guide: CNA overtime rules, shift differential configuration, CMS staffing compliance, and payroll management for nursing homes and ALFs.',
    url: 'https://www.beghr.com/blog/payroll/senior-care/senior-care-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Senior Care Payroll Guide: CNA Pay and Shift Diffs | BEG', description: 'Senior care payroll: CNA overtime, shift differentials, CMS compliance. Complete guide for nursing homes and ALFs.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Are CNAs and nurses exempt from FLSA overtime?',
    answer: 'No. CNAs (certified nursing assistants) are non-exempt employees under FLSA and are entitled to overtime at 1.5x their regular rate for all hours worked over 40 in a workweek. Registered Nurses (RNs) may qualify for the learned professional exemption if they hold a valid license and perform duties that require advanced knowledge, but only if they are also paid on a salary basis of at least $684 per week. Licensed Practical Nurses (LPNs) and CNAs do not meet the professional exemption standard and are non-exempt. The distinction matters significantly because RNs who are not on a salary basis, or who are paid hourly, are also non-exempt.',
  },
  {
    question: 'How do shift differentials affect overtime calculation?',
    answer: 'Shift differentials must be included in the regular rate of pay when calculating overtime. The regular rate is not simply the base hourly rate; it is the weighted average of all straight-time pay in the workweek divided by total hours worked. If a CNA works 30 hours at $18/hr base and 15 hours at $21/hr (with a $3 night differential), the regular rate for the week is: (30 x $18 + 15 x $21) / 45 hours = ($540 + $315) / 45 = $855 / 45 = $19.00/hr. Overtime on the 5 excess hours is $19.00 x 0.5 x 5 = $47.50, not $18.00 x 0.5 x 5. Failing to include differentials in the overtime regular rate calculation is one of the most common FLSA violations in senior care.',
  },
  {
    question: 'What are the CMS minimum staffing requirements that affect payroll?',
    answer: 'CMS finalized a minimum staffing rule for skilled nursing facilities that requires at least 3.48 total nurse staff hours per resident day, with at least 0.55 RN hours and 2.45 CNA hours per resident day. Facilities must also have an RN on site 24/7. These staffing minimums mean that facilities must maintain sufficient staff to meet the per-resident-day requirements, which directly drives the payroll budget. Payroll systems that track hours per resident day (rather than just total hours) help facilities monitor compliance and document staffing levels for CMS audits.',
  },
  {
    question: 'How do we handle on-call pay for nurses?',
    answer: 'On-call pay treatment depends on whether the on-call time is compensable under FLSA. Time spent primarily for the employer\'s benefit, where the restrictions on the employee are so significant they cannot effectively use the time for personal activities, is compensable working time. Time where an employee is merely required to be reachable is generally not compensable. In senior care, nurses on call who must stay near the facility, respond within a short time, and frequently receive calls are often in compensable on-call situations. Compensable on-call time must be included in total hours worked for overtime purposes.',
  },
  {
    question: 'What are the most common payroll compliance failures in senior care?',
    answer: 'The most common FLSA violations in senior care facilities are: failure to include shift differentials in the regular rate for overtime; off-the-clock work claims (CNAs completing documentation after their shift); missed meal break compensation (facilities that require staff to remain available during breaks, making the break compensable); improper application of the RN professional exemption to hourly RNs; and misclassification of contract nurses as independent contractors. DOL enforcement in the senior care industry is active because the workforce is largely hourly, non-exempt, and works variable schedules that create complex overtime calculations.',
  },
  {
    question: 'What does BEG charge for senior care facility payroll?',
    answer: 'BEG managed payroll for senior care facilities runs at $25-$45 per employee per month, all-inclusive. For a 60-bed facility with 80 staff, that is $2,000 to $3,600 per month. Compare to the cost of an in-house payroll specialist at $55,000 to $75,000 per year plus benefits and software. Setup takes 3-5 business days.',
  },
];

export default function SeniorCarePayrollGuidePage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Senior Care Payroll Guide 2026 | CNA + Shift Differential | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/senior-care/senior-care-payroll-guide"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Senior Care</p>
              <h1>Senior Care Facility Payroll Guide: CNA Overtime, Shift Differentials, and CMS Compliance (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Senior care facility payroll sits at the intersection of FLSA compliance, CMS staffing mandates, and high-volume hourly workforce management. Nursing homes, assisted living facilities, and memory care units operate around the clock with non-exempt CNAs and nurses working variable schedules, shift differentials, and mandatory overtime. The complexity of calculating regular rates with differentials, managing overtime for staff who float between shifts, and maintaining documentation for CMS audits makes senior care payroll one of the more demanding categories in managed payroll.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FLSA Overtime for Senior Care Workforce</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The senior care workforce is predominantly non-exempt. CNAs, medication aides, dietary staff, housekeeping, and laundry employees are all hourly, non-exempt workers entitled to overtime at 1.5x their regular rate for hours worked over 40 in a workweek. RNs on salary may qualify for the learned professional exemption, but only if they hold a valid nursing license and meet the salary basis and duties tests.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The overtime calculation for a senior care employee with shift differentials is more complex than a flat hourly rate. The FLSA regular rate must reflect all straight-time pay for the workweek, including differentials. A CNA who works some shifts at the base rate and some at the night differential rate has a blended regular rate, and overtime premium is calculated on that blended rate.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The <a href="https://www.dol.gov/agencies/whd/healthcare" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DOL Wage and Hour Division's healthcare compliance resources</a> cover the overtime rules applicable to healthcare and long-term care facilities in detail.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Shift Differential Configuration in Payroll</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Shift differentials are premium pay rates added to base pay for less desirable shifts, typically evenings, nights, weekends, and holidays. Senior care facilities almost universally use differentials to attract and retain staff for these shifts. Common structures:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Shift Type</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Typical Differential</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Overtime Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Evening shift (3pm-11pm)', '$1.00-$2.00/hr premium', 'Included in regular rate calculation'],
                ['Night shift (11pm-7am)', '$2.00-$4.00/hr premium', 'Included in regular rate calculation'],
                ['Weekend shift', '$1.00-$3.00/hr premium', 'Included in regular rate calculation'],
                ['Holiday shift', '1.5x base OR flat premium', 'If 1.5x, may satisfy OT. If flat premium, included in regular rate'],
                ['Mandatory overtime (call-in)', 'Base rate only or differential', 'All hours counted toward 40-hr threshold'],
              ].map(([shift, diff, ot], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{shift}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{diff}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{ot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>CMS Staffing Requirements and Payroll Tracking</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          CMS's minimum staffing rule for skilled nursing facilities requires maintaining staffing records that support audit defense. The rule requires 3.48 total nurse staff hours per resident day (HPRD), including 0.55 RN HPRD and 2.45 CNA HPRD. Facilities must submit staffing data through the Payroll-Based Journal (PBJ) system, which pulls directly from payroll and staffing records.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Payroll systems that track hours by employee classification and can produce PBJ-compatible output significantly reduce the administrative burden of CMS compliance. Facilities that maintain payroll records that do not align with PBJ submissions create audit risk. <Link href="/services/managed-payroll/senior-care" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> tracks hours by classification and supports PBJ export for CMS-regulated facilities.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>High-Turnover Payroll Management</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Senior care facilities consistently face among the highest employee turnover rates of any industry. Rapid onboarding and offboarding create recurring payroll setup and final pay processing demands. New employees must be added to payroll, withholding configured, and direct deposit set up before their first paycheck. Terminating employees require final pay processing within state-required timeframes and year-end W-2s regardless of employment duration.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The administrative cost of high turnover in payroll is significant. Managed payroll absorbs the volume of new hire and termination processing without requiring proportional increases in administrative staff.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Senior Care Payroll, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages senior care facility payroll at $25-$45 PEPM. CNA overtime, shift differentials, CMS PBJ support, and year-end W-2s all included. Setup in 3-5 business days.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < faqs.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{faq.question}</h3>
              <p style={{ lineHeight: '1.7', color: '#444' }}>{faq.answer}</p>
            </div>
          ))}
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Senior Care Facility Payroll Guide: CNA Overtime, Shift Differentials, and CMS Compliance (2026)',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/senior-care/senior-care-payroll-guide',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Senior Care', item: 'https://www.beghr.com/blog/payroll/senior-care' },
          { '@type': 'ListItem', position: 5, name: 'Senior Care Payroll Guide', item: 'https://www.beghr.com/blog/payroll/senior-care/senior-care-payroll-guide' },
        ]
      }) }} />
    </article>
  );
}
