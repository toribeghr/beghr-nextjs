import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Field Technician Payroll, Drive Time and OT Rules | BEG',
  description: 'Field technician payroll compliance: when drive time is compensable, overtime for service techs, tool reimbursement minimum wage rules, and on-call pay',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/home-services/field-technician-payroll-compliance' },
  openGraph: {
    title: 'Field Technician Payroll, Drive Time and OT Rules | BEG',
    description: 'Field technician payroll compliance: when drive time is compensable, overtime for service techs, tool reimbursement minimum wage rules, and on-call pay',
    url: 'https://www.beghr.com/blog/payroll/home-services/field-technician-payroll-compliance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-home-services-field-technician-payroll-compliance.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Field Technician Payroll, Drive Time and OT Rules | BEG', description: 'FLSA compliance for field techs: drive time, overtime, tool reimbursement, and on-call pay.', images: ['https://www.beghr.com/blog-images/blog-payroll-home-services-field-technician-payroll-compliance.webp'] },
};

const faqs = [
  {
    question: 'How do we track drive time for payroll purposes?',
    answer: 'Drive time tracking requires a method that captures when technicians depart one location and arrive at another during the workday. GPS dispatch systems integrated with time and attendance capture this automatically. For companies without GPS dispatch, technicians can log departure and arrival times at each job site through a mobile app. Paper time sheets are the highest-risk method because technicians may not record drive time if they are not prompted to do so. Whatever method is used, the time records should show each leg of the technician\'s workday including drive segments, so overtime calculations can incorporate all compensable time.',
  },
  {
    question: 'What is the Portal-to-Portal Act and how does it affect field tech payroll?',
    answer: 'The Portal-to-Portal Act of 1947 limits what constitutes compensable time under FLSA. Specifically, it excludes "ordinary home to work travel" and preliminary or postliminary activities that are not integral and indispensable to the principal work activity. For field technicians, this means the drive from home to the first job site is not compensable under the Portal-to-Portal Act (it is ordinary commuting), but all subsequent travel between job sites during the workday is compensable. Activities like loading a truck at a shop before driving to the first job are integral to the work and may be compensable depending on facts.',
  },
  {
    question: 'Does the Portal-to-Portal Act apply to after-hours emergency calls?',
    answer: 'Emergency calls present a different analysis. If a technician is called in from home for an emergency after normal hours, the drive from home to the emergency job site is generally compensable from the point the technician is required to leave home, because this is not ordinary home-to-work commuting. It is an interruption of personal time at the employer\'s direction. Some courts treat this differently depending on whether the employer has a policy that compensates for on-call response time. Employers should have a written policy that clearly addresses how emergency call-in time and the associated drive time is handled.',
  },
  {
    question: 'Are technicians who use their personal vehicles entitled to mileage reimbursement?',
    answer: 'FLSA does not require mileage reimbursement, but federal tax law allows employers to reimburse at the IRS standard mileage rate ($0.67 per mile for 2024) without creating taxable income for the employee. If an employer does not reimburse for required vehicle use and the unreimbursed costs reduce the employee\'s net pay below minimum wage, the employer has a minimum wage violation. Many states also have vehicle expense reimbursement requirements. California, for example, requires employers to reimburse all necessary business expenses including vehicle use. Confirming state requirements is essential for multi-state home services companies.',
  },
  {
    question: 'How does flat-rate pay work for overtime purposes?',
    answer: 'Flat-rate pay (also called book rate or job rate) is common in skilled trades: the technician is paid a fixed amount per job type regardless of how long the job takes. Under FLSA, flat-rate pay creates a regular rate that is calculated as total flat-rate earnings divided by total hours worked in the week. For overtime, the employer owes an additional 0.5x the regular rate for each hour over 40 (since the flat rate already compensated all hours at 1x). Example: technician completes jobs earning $600 flat rate in 50 hours. Regular rate = $600/50 = $12/hr. Overtime premium = $12 x 0.5 x 10 = $60. Total pay = $660.',
  },
  {
    question: 'What happens if our technicians work in states we are not registered in for payroll?',
    answer: 'Any state where a technician performs services triggers state payroll tax obligations for the employer. HVAC and plumbing companies that send crews to neighboring states for disaster response, large commercial projects, or recurring service contracts must register in those states for income tax withholding and unemployment insurance. The registration must happen before the first paycheck, not after. Failure to register creates back tax liability and penalties that accrue from the first day of unregistered employment.',
  },
];

export default function FieldTechnicianPayrollCompliancePage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Field Technician Payroll Compliance | Overtime + Travel | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/home-services/field-technician-payroll-compliance"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Home Services</p>
              <h1>Field Technician Payroll Compliance: Overtime, Drive Time, and Tool Reimbursement Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-home-services-field-technician-payroll-compliance.webp" alt={`Field Technician Payroll, Drive Time and OT Rules`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Field technician payroll compliance requires understanding a set of FLSA rules that do not apply to employees who work at a fixed location. Drive time compensability, the Portal-to-Portal Act, flat-rate overtime calculation, and tool reimbursement minimum wage implications are all areas where home services employers routinely make mistakes. The DOL enforces these rules actively in the home services sector, and back-wage liability can accumulate significantly before an investigation surfaces the violations.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Drive Time: A Decision Framework</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The Portal-to-Portal Act establishes the framework for field technician drive time compensability. The key principle: time spent traveling between job sites during the workday is compensable. Ordinary home-to-work commuting is not.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Travel Situation</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Compensable?</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Authority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Home to first job site (ordinary commute)', 'No', 'Portal-to-Portal Act'],
                ['Last job site to home (ordinary commute)', 'No', 'Portal-to-Portal Act'],
                ['Home to employer\'s shop, then to first job', 'No for home-to-shop; Yes for shop-to-job', 'FLSA + Portal-to-Portal Act'],
                ['Between job sites during workday', 'Yes', 'FLSA Section 7'],
                ['Emergency call-in from home after hours', 'Yes, from time required to leave home', 'DOL guidance'],
                ['After-hours drive home after emergency call', 'Depends on facts; often not compensable', 'Case law varies'],
              ].map(([sit, comp, auth], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{sit}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee', fontWeight: 600, color: comp.startsWith('Yes') ? '#006600' : comp.startsWith('No') ? '#cc0000' : 'inherit' }}>{comp}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{auth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Flat-Rate Pay and Overtime Compliance</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Flat-rate pay (a fixed amount per job type) is common in skilled trades. Technicians who are paid by the job rather than by the hour are still non-exempt employees entitled to overtime. The overtime calculation uses the regular rate method:
        </p>
        <ol style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Total flat-rate earnings for the workweek (all jobs completed)</li>
          <li>Total hours worked in the workweek (including drive time and any other compensable time)</li>
          <li>Regular rate = total flat-rate earnings / total hours</li>
          <li>Overtime premium = regular rate x 0.5 x hours over 40</li>
          <li>Total gross pay = total flat-rate earnings + overtime premium</li>
        </ol>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The <a href="https://www.dol.gov/agencies/whd/overtime/regular-rate" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DOL's regular rate guidance</a> addresses flat-rate and piece-rate overtime calculation methods in detail.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Tool Reimbursement and Minimum Wage</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Requiring technicians to provide their own tools is common in trades. It is lawful under FLSA unless the required tool costs reduce the technician's effective hourly rate below the applicable minimum wage. The analysis:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Identify tools required by the employer (not optional personal tools)</li>
          <li>Estimate the weekly cost of required tools (purchase price amortized over useful life)</li>
          <li>Subtract weekly tool cost from weekly wages</li>
          <li>Divide net wages by hours worked to get effective hourly rate</li>
          <li>Compare effective hourly rate to applicable minimum wage (federal or state, whichever is higher)</li>
          <li>If effective rate falls below minimum wage, supplement wages to cover the gap</li>
        </ul>

        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          For <Link href="/services/managed-payroll/home-services" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> clients in home services, we configure payroll to track all compensable time including drive time, calculate flat-rate overtime correctly, and flag any pay configurations that create minimum wage risk from required tool costs.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Field Tech Payroll Compliance, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages home services payroll at $25-$45 PEPM. Drive time tracking, flat-rate overtime calculations, and year-end W-2s all included. Setup in 3-5 business days.
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
        headline: 'Field Technician Payroll Compliance: Overtime, Drive Time, and Tool Reimbursement Rules',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/home-services/field-technician-payroll-compliance',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Home Services', item: 'https://www.beghr.com/blog/payroll/home-services' },
          { '@type': 'ListItem', position: 5, name: 'Field Technician Payroll Compliance', item: 'https://www.beghr.com/blog/payroll/home-services/field-technician-payroll-compliance' },
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Home Services Payroll Costs, In-House vs Managed", excerpt: "How much does payroll cost for a home services company? Compare in-house payroll specialist...", href: "/blog/payroll/home-services/home-services-payroll-cost" },
        { category: "Payroll", title: "Home Services Payroll Guide for HVAC and Plumbing", excerpt: "Complete home services payroll guide: field tech pay structures, overtime, drive time compensation,...", href: "/blog/payroll/home-services/home-services-payroll-guide" },
        { category: "Payroll", title: "HVAC Company Payroll, Seasonal Spikes and Overtime", excerpt: "HVAC company payroll guide: managing summer and winter demand spikes, seasonal technician overtime,...", href: "/blog/payroll/home-services/hvac-company-payroll" },
      ]} />
      </article>
  );
}
