import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Services Payroll Guide for HVAC and Plumbing | BEG',
  description: 'Complete home services payroll guide: field tech pay structures, overtime, drive time compensation, tool reimbursement, and seasonal workforce management',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-guide' },
  openGraph: {
    title: 'Home Services Payroll Guide for HVAC and Plumbing | BEG',
    description: 'Complete home services payroll guide: field tech pay, overtime, drive time, tool reimbursement, and seasonal workforce management for HVAC, plumbing, and electrical companies.',
    url: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-home-services-home-services-payroll-guide.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Services Payroll Guide for HVAC and Plumbing | BEG', description: 'Complete payroll guide for HVAC, plumbing, electrical, and field tech companies.', images: ['https://www.beghr.com/blog-images/blog-payroll-home-services-home-services-payroll-guide.webp'] },
};

const faqs = [
  {
    question: 'Are HVAC and plumbing technicians exempt from overtime?',
    answer: 'Most field technicians in home services are non-exempt employees entitled to FLSA overtime. To qualify for an exemption, a technician would need to meet both the salary basis test ($684/week minimum) and one of the white-collar duties tests, which typically does not apply to technicians who primarily perform manual installation, repair, or maintenance work. Technicians who are salaried but perform primarily manual work do not qualify for the administrative or executive exemption. The result is that virtually all field service technicians in HVAC, plumbing, electrical, and related trades are non-exempt and owed overtime at 1.5x for hours over 40 in a workweek.',
  },
  {
    question: 'Do we have to pay technicians for drive time between job sites?',
    answer: 'Yes, in most situations. Under FLSA, time spent traveling from one job site to another during the workday is compensable working time. Technicians who drive from their first service call to their second, third, and subsequent calls must be paid for that drive time. The exception is normal home-to-work commuting: a technician who drives from home to the first job site of the day is typically in unpaid commute status for that first leg. However, if the employer requires the technician to report to a shop or dispatch location first, all time after arrival at the employer\'s location is compensable, including the drive to the first job site.',
  },
  {
    question: 'How should we handle on-call pay for technicians who may be called in after hours?',
    answer: 'On-call pay treatment depends on the restrictions placed on the technician during on-call periods. If a technician must stay near home, respond within a short time, and receives frequent calls that interrupt personal activities, the on-call time is likely compensable. If the technician is merely required to be reachable and rarely receives calls, the on-call time is generally not compensable. Actual time worked when a technician responds to an on-call situation is always compensable, including the drive time to the job. If on-call response counts toward the 40-hour weekly threshold, it can push the technician into overtime even if the regular workweek appeared to be under 40 hours.',
  },
  {
    question: 'What is the minimum wage floor impact of requiring technicians to buy their own tools?',
    answer: 'If tool costs are required by the employer and primarily benefit the employer, they must not reduce the technician\'s effective hourly rate below the applicable minimum wage. Under FLSA, deductions or required purchases that reduce pay below minimum wage are not permitted. A technician who earns $18/hr but is required to spend $200/week on tools required by the employer may have an effective wage below minimum wage depending on their state\'s minimum. The employer can require tools, but the technician\'s net pay after any work-related required expenses cannot fall below minimum wage.',
  },
  {
    question: 'How do we manage payroll during seasonal demand spikes?',
    answer: 'Seasonal spikes in HVAC (summer heat, winter cold) create temporary workforce expansions that add payroll complexity. Options include hiring seasonal W-2 employees, using staffing agency placements, or increasing overtime for existing staff. Each option has different payroll implications. Seasonal W-2 employees must be onboarded, new hire reported, and produce W-2s at year-end. Staffing agency placements are billed as invoices. Overtime for existing staff is straightforward but drives up labor cost. Many home services companies use a combination of planned overtime and a small pool of seasonal hires to manage peak demand.',
  },
  {
    question: 'What does BEG charge for home services company payroll?',
    answer: 'BEG managed payroll for home services companies runs at $25-$45 per employee per month, all-inclusive. For a company with 15 field technicians and 5 office staff (20 total), that is $500 to $900 per month. Compare to an in-house payroll specialist at $55,000 to $75,000 per year plus benefits and software. For most home services companies with 10-50 employees, managed payroll delivers a significant cost advantage. Setup takes 3-5 business days.',
  },
];

export default function HomeServicesPayrollGuidePage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-home-services-home-services-payroll-guide.webp" alt={`Home Services Payroll Guide for HVAC and Plumbing`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Home Services Payroll Guide 2026 | HVAC Plumbing | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/home-services/home-services-payroll-guide"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Home Services</p>
              <h1>Home Services Payroll Guide: HVAC, Plumbing, Electrical, and Field Tech Pay (2026)</h1>
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
          Home services payroll has a set of compliance requirements that does not exist in office-based businesses. Field technicians who drive between job sites, work varying hours driven by call volume and weather, carry tools and equipment they may be required to own, and respond to after-hours emergencies create payroll complexity that goes well beyond calculating hourly pay and overtime. HVAC, plumbing, electrical, and general home services companies that manage payroll without understanding these rules accumulate liability over time.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Pay Structures in Home Services</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Home services companies use several compensation models for field technicians. The most common:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Pay Structure</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Description</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Overtime Treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Flat hourly', 'Fixed rate per hour worked', 'Standard 1.5x for hours over 40'],
                ['Hourly + commission', 'Base hourly rate plus % of job revenue', 'Regular rate includes commission; blended overtime'],
                ['Flat-rate (book rate)', 'Fixed amount per job type regardless of time', 'Overtime at half the regular rate (all hours already paid at 1x)'],
                ['Piece rate per job', 'Same as flat-rate, variable by job type', 'Same as flat-rate treatment'],
                ['Salary (non-exempt)', 'Fixed weekly salary, works variable hours', 'Fluctuating workweek method possible; requires specific setup'],
              ].map(([structure, desc, ot], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{structure}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{desc}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{ot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Drive Time: When You Must Pay and When You Do Not</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Drive time is one of the most consistently misunderstood FLSA requirements for home services employers. The rules:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Home-to-first-job commute: not compensable if the technician travels directly from home to the first job site</li>
          <li>Last-job-to-home commute: not compensable if the technician travels directly from the last job site to home</li>
          <li>Between-job travel: compensable working time for the full duration of travel between job sites</li>
          <li>Home to shop then to job site: the home-to-shop portion is not compensable commute, but shop-to-job-site is compensable</li>
          <li>Emergency after-hours travel from home: generally compensable from the moment the technician is required to leave home</li>
        </ul>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The between-job drive time rule creates substantial additional compensable hours for technicians who make multiple service calls per day. A technician who drives 30 minutes between each of 5 calls accrues 2 hours of compensable drive time per day that must be tracked and paid.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Tool Reimbursement and Minimum Wage Compliance</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Many home services companies require technicians to supply their own tools. This practice is lawful under FLSA as long as the required tool costs do not reduce the technician's effective hourly rate below the applicable minimum wage. If a technician earns $17/hr but is required to spend $200/week on tools for the employer's benefit, the effective rate is approximately $12/hr on a 40-hour week, which falls below the minimum wage in many states.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Best practice is either to provide required tools directly, to reimburse tool costs so the net pay remains above minimum wage, or to ensure that technician pay rates are high enough that the cost of required tools does not create a minimum wage violation. For <Link href="/services/managed-payroll/home-services" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> clients, we flag any pay rate configurations that create minimum wage risk.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Seasonal Workforce Management</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          HVAC companies face predictable demand spikes in summer and winter. Plumbing companies see spikes during freeze events. Roofing and exterior services spike in spring. Managing seasonal workforce expansion in payroll requires: rapid onboarding for seasonal hires, tracking of hours for seasonal employees who may work only 2-3 months, year-end W-2s for all seasonal employees regardless of duration, and compliance with state laws that may require specific final pay timing.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Managed payroll providers that can scale with seasonal volume without renegotiating pricing or adding per-employee fees above the base rate are the best fit for home services companies. BEG pricing at $25-$45 PEPM applies regardless of whether the month is a slow January or a peak August.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Home Services Payroll, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages home services company payroll at $25-$45 PEPM. Field tech overtime, drive time tracking, seasonal volume, and year-end W-2s all included. Setup in 3-5 business days.
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
        headline: 'Home Services Payroll Guide: HVAC, Plumbing, Electrical, and Field Tech Pay (2026)',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-guide',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Home Services', item: 'https://www.beghr.com/blog/payroll/home-services' },
          { '@type': 'ListItem', position: 5, name: 'Home Services Payroll Guide', item: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-guide' },
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Field Technician Payroll, Drive Time and OT Rules", excerpt: "Field technician payroll compliance: when drive time is compensable, overtime for service techs,...", href: "/blog/payroll/home-services/field-technician-payroll-compliance" },
        { category: "Payroll", title: "Home Services Payroll Costs, In-House vs Managed", excerpt: "How much does payroll cost for a home services company? Compare in-house payroll specialist...", href: "/blog/payroll/home-services/home-services-payroll-cost" },
        { category: "Payroll", title: "HVAC Company Payroll, Seasonal Spikes and Overtime", excerpt: "HVAC company payroll guide: managing summer and winter demand spikes, seasonal technician overtime,...", href: "/blog/payroll/home-services/hvac-company-payroll" },
      ]} />
      </article>
  );
}
