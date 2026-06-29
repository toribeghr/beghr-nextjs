import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nursing Home Payroll Compliance 2026 | CMS + FLSA | BEG',
  description: 'Nursing home payroll compliance guide: CMS minimum staffing rules, FLSA overtime for nurses and CNAs, state wage laws, PBJ reporting, and ACA tracking.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/senior-care/nursing-home-payroll-compliance' },
  openGraph: {
    title: 'Nursing Home Payroll Compliance 2026 | CMS + FLSA | BEG',
    description: 'Nursing home payroll compliance: CMS staffing requirements, FLSA overtime, state wage laws, PBJ reporting, and ACA tracking for long-term care facilities.',
    url: 'https://www.beghr.com/blog/payroll/senior-care/nursing-home-payroll-compliance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Nursing Home Payroll Compliance 2026 | CMS + FLSA | BEG', description: 'Nursing home payroll compliance: CMS staffing, FLSA, state wage laws, and PBJ reporting.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the CMS Payroll-Based Journal and how does it relate to payroll?',
    answer: 'The Payroll-Based Journal (PBJ) is CMS\'s electronic reporting system that requires skilled nursing facilities to submit staffing data quarterly. The data reported includes hours worked by employee classification, agency staff hours, census data, and contract staff information. PBJ data is used to calculate published staffing ratings on the CMS Nursing Home Compare website. Payroll systems that are configured to export PBJ-compatible data significantly reduce the manual work of quarterly submissions and help ensure consistency between what is reported in PBJ and what is in the facility\'s payroll records.',
  },
  {
    question: 'Which nursing home employees are exempt from FLSA overtime?',
    answer: 'In nursing homes, very few workers are exempt from FLSA overtime. Executive, administrative, and professional exemptions apply to salaried administrators and directors who meet both the salary basis test ($684/week minimum) and the applicable duties test. RNs on a salary basis who hold a valid nursing license and perform advanced duties may qualify for the learned professional exemption. All other clinical and support staff, including CNAs, LPNs, dietary, housekeeping, and laundry workers, are non-exempt and entitled to overtime at 1.5x for hours over 40 per workweek.',
  },
  {
    question: 'How do state nursing home wage laws interact with FLSA?',
    answer: 'State wage laws are layered on top of FLSA and control when they are more protective of employees. Many states have nursing home-specific minimum wage requirements that exceed the federal minimum. Several states have mandatory minimum wage scales for direct care workers including CNAs. Some states require premium pay for certain mandatory overtime situations in long-term care. Nursing homes operating in multiple states must track and apply the higher standard in each state. State requirements also change more frequently than federal requirements, requiring ongoing monitoring.',
  },
  {
    question: 'Does ACA apply to nursing homes and how does it affect payroll?',
    answer: 'Nursing homes with 50 or more full-time equivalent employees are Applicable Large Employers (ALEs) under the ACA and must offer affordable minimum value health coverage to full-time employees (those averaging 30+ hours per week) or pay a penalty. Payroll must track hours to determine ACA full-time status and must produce Forms 1094-C and 1095-C annually. High-turnover nursing homes face ACA complexity because workers who average 30+ hours over the standard measurement period are full-time for ACA purposes regardless of whether they are classified as part-time. This is a common source of unexpected ACA penalties.',
  },
  {
    question: 'What happens when a nursing home fails to meet CMS minimum staffing requirements?',
    answer: 'CMS can impose civil money penalties for failure to meet minimum staffing requirements, currently up to $10,000 per day per deficiency. Facilities with persistent staffing deficiencies can face denial of payment for new Medicare and Medicaid admissions. In severe cases, CMS can appoint a temporary manager or initiate termination from Medicare and Medicaid participation. The minimum staffing rule creates direct financial pressure to maintain adequate staffing levels, which makes accurate payroll tracking of hours by classification not just an administrative function but a risk management function.',
  },
  {
    question: 'Can BEG handle payroll for nursing homes with multiple locations?',
    answer: 'Yes. BEG manages multi-location nursing home payroll with consolidated reporting across all facilities and per-location cost center tracking. Each location operates under its own payroll configuration for state-specific requirements while sharing a common system. PBJ export data can be produced by facility. Year-end W-2s are produced for all employees across all locations through a single year-end process. Multi-location clients at $25-$45 PEPM pay based on total employee count across all locations with no per-location add-ons.',
  },
];

export default function NursingHomePayrollCompliancePage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Nursing Home Payroll Compliance 2026 | CMS + FLSA | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/senior-care/nursing-home-payroll-compliance"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Senior Care</p>
              <h1>Nursing Home Payroll Compliance: CMS Staffing Requirements, FLSA, and State Wage Laws</h1>
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
          Nursing home payroll compliance operates at the intersection of federal wage law, federal healthcare regulation, and state-specific requirements that vary significantly by jurisdiction. FLSA overtime for a predominantly non-exempt workforce, CMS minimum staffing mandates that require hourly tracking by staff classification, ACA compliance for large employers, and state direct care worker wage requirements all run simultaneously. Missing any layer creates exposure from DOL, CMS, IRS, or state labor agencies simultaneously.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>CMS Minimum Staffing Rule: Payroll Implications</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          CMS finalized minimum staffing requirements for skilled nursing facilities that are among the most consequential operational changes in the long-term care industry in decades. The rule requires 3.48 total nurse staff hours per resident day, with specific minimums of 0.55 RN hours per resident day and 2.45 CNA hours per resident day. Facilities must also maintain an RN on-site 24 hours a day, 7 days a week.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          From a payroll perspective, the rule requires that facilities track and document staff hours by employee classification for every day of operation. This data feeds the Payroll-Based Journal (PBJ) submissions that CMS uses to calculate published staffing ratings. Payroll systems that capture hours by classification automatically produce the PBJ-compatible data that used to require separate manual tracking.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          For detailed CMS compliance guidance, the <a href="https://www.cms.gov/medicare/provider-enrollment-and-certification/guidanceforlawsandregulations/nursing-homes" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>CMS nursing home regulatory resources</a> cover the staffing rule implementation timeline and enforcement priorities.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FLSA Compliance in the Nursing Home Workforce</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The nursing home workforce is predominantly non-exempt. Most clinical and support staff are hourly workers who must receive overtime for hours exceeding 40 in a workweek. The complexity arises from several factors:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Shift differentials must be included in the regular rate for overtime calculation purposes</li>
          <li>Mandatory overtime situations (called-in workers, census-driven staffing requirements) create significant overtime expense that must be tracked and paid correctly</li>
          <li>On-call policies vary and may create compensable on-call time depending on the restrictions placed on employees</li>
          <li>Meal break interruptions in nursing home environments can make "unpaid" meal breaks compensable working time</li>
          <li>Pre- and post-shift activities (donning and doffing PPE, report time) may be compensable depending on facts</li>
        </ul>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          DOL enforcement in long-term care is active. The agency has identified nursing homes and other care facilities as a priority sector for wage and hour investigations given the prevalence of non-exempt workers and complex scheduling.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>State Wage Law Compliance</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Many states have enacted direct care worker wage requirements that go beyond federal minimum wage. Some states have implemented minimum wage floors specifically for nursing home staff, including CNAs and direct care workers. Others have enacted mandatory minimum wage scales tied to Medicaid reimbursement rates. Nursing homes operating across state lines must track and apply the applicable state wage floor in each state.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          State wage laws also change frequently. Annual minimum wage increases, scheduled rate increases tied to legislation, and cost-of-living adjustments require payroll systems to be updated at the effective date without missing a payroll run.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Managed Payroll Supports Nursing Home Compliance</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/senior-care" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> handles the full payroll compliance function for nursing homes: regular rate overtime calculations including shift differentials, PBJ-compatible hour tracking by employee classification, ACA full-time status monitoring for facilities with 50+ FTEs, state wage law updates as they take effect, and year-end W-2 production for all employees. The service runs at $25-$45 per employee per month with no compliance surcharges.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Nursing Home Payroll Compliance, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages nursing home payroll compliance at $25-$45 PEPM. CMS PBJ support, FLSA overtime, state wage law tracking, ACA compliance, and year-end W-2s all included.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', fontWeight: 700, padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none' }}
          >
            Book a Free 15-Min Call
          </a>
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
        headline: 'Nursing Home Payroll Compliance: CMS Staffing Requirements, FLSA, and State Wage Laws',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/senior-care/nursing-home-payroll-compliance',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Senior Care', item: 'https://www.beghr.com/blog/payroll/senior-care' },
          { '@type': 'ListItem', position: 5, name: 'Nursing Home Payroll Compliance', item: 'https://www.beghr.com/blog/payroll/senior-care/nursing-home-payroll-compliance' },
        ]
      }) }} />
    </article>
  );
}
