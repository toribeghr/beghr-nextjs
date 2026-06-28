import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contractor Payroll Guide 2026 | Davis-Bacon | BEG',
  description: 'Government contractor payroll overview: certified payroll, Service Contract Act, Davis-Bacon prevailing wages, contract-specific compliance, and DCAA audit readiness.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/government-contractor/government-contractor-payroll-guide' },
  openGraph: {
    title: 'Government Contractor Payroll Guide 2026 | Davis-Bacon | BEG',
    description: 'Government contractor payroll overview: certified payroll, SCA, Davis-Bacon, contract compliance requirements, and DCAA audit readiness for 2026.',
    url: 'https://beghr.com/blog/payroll/government-contractor/government-contractor-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Government Contractor Payroll Guide 2026 | Davis-Bacon | BEG', description: 'Complete overview of government contractor payroll requirements: certified payroll, SCA, Davis-Bacon, and DCAA.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the difference between Davis-Bacon and the Service Contract Act?',
    answer: 'Both are federal prevailing wage laws that require government contractors to pay minimum wages set by the Department of Labor, but they apply to different types of work. The Davis-Bacon Act covers construction, alteration, and repair work on federal and federally assisted projects over $2,000. The Service Contract Act (SCA) covers service contracts with the federal government over $2,500, where the principal purpose is to furnish services through service employees rather than construction workers. An IT support contract at a federal facility is covered by the SCA. A contract to build a new facility is covered by Davis-Bacon. Some contracts that involve both construction and service work may be subject to both laws for different portions of the work.',
  },
  {
    question: 'What is certified payroll and when is it required?',
    answer: 'Certified payroll is a weekly payroll report submitted to the contracting agency by every prime contractor and subcontractor on a Davis-Bacon covered project. The federal form is WH-347. It documents each employee\'s name, address, work classification, hours worked each day, wages paid, deductions, and fringe benefit contributions. The certifying officer signs a statement declaring under penalty of perjury that the information is correct and that wages were paid as shown. Certified payroll is required for every week that workers are employed on the covered project, even if the project is completed in mid-week.',
  },
  {
    question: 'How does DCAA audit payroll records for government contractors?',
    answer: 'DCAA (Defense Contract Audit Agency) reviews payroll records as part of incurred cost audits, pre-award audits, and progress payment audits for DoD contracts. DCAA examines whether costs are allowable, allocable, and reasonable under the Federal Acquisition Regulation (FAR) cost principles. Payroll-related examinations include: verification that labor charges match timesheets and actual work performed; review of how labor costs are allocated between direct contracts and indirect cost pools; compliance with executive compensation limits; and proper classification of employees and their work. Inadequate payroll records are one of the most common DCAA audit findings.',
  },
  {
    question: 'What are the most common government contractor payroll compliance failures?',
    answer: 'The most frequently cited payroll compliance failures for government contractors are: failure to pay the applicable SCA wage determination for service employees; improper allocation of labor costs between contracts (charging time to the wrong project code); failure to produce certified payroll on Davis-Bacon projects; inadequate timekeeping that cannot support incurred cost claims; improper classification of workers that results in SCA or Davis-Bacon underpayment; and failure to meet fringe benefit requirements either through bona fide benefits or cash-in-lieu payments. Each of these creates exposure to back wage liability, contract termination, and potential debarment.',
  },
  {
    question: 'Do SCA and Davis-Bacon requirements apply to subcontractors?',
    answer: 'Yes. Both Davis-Bacon and the SCA flow down to subcontractors through the prime contract. The prime contractor is responsible for ensuring that all subcontractors comply with prevailing wage and fringe benefit requirements. Subcontractors on covered projects must also submit certified payroll (for Davis-Bacon projects) or maintain required payroll records (for SCA projects). Prime contractors that do not actively monitor subcontractor compliance remain liable for violations by their subs.',
  },
  {
    question: 'Can BEG handle payroll for contractors with both government and commercial work?',
    answer: 'Yes. Many government contractors also have commercial clients, and the payroll systems must maintain clear separation between government and commercial labor charges. BEG configures cost center codes that align with contract numbers, allowing labor to be allocated correctly between government and commercial work. Government contract employees who are subject to SCA or Davis-Bacon requirements are configured with the applicable wage determination rates, while commercial employees run under standard pay configurations. Reporting can be produced by contract, by cost center, or by employee classification for DCAA or contract officer review.',
  },
];

export default function GovernmentContractorPayrollGuidePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Government Contractor Payroll Guide 2026 | Davis-Bacon | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/payroll/government-contractor/government-contractor-payroll-guide"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Government Contractor</p>
              <h1>Government Contractor Payroll Guide: Certified Payroll, SCA, and Davis-Bacon Compliance (2026)</h1>
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
          Government contracting creates payroll obligations that do not exist in commercial work. Depending on the type of contract, contractors may face certified payroll reporting requirements under Davis-Bacon, minimum wage and fringe benefit obligations under the Service Contract Act, labor cost allocation and timekeeping requirements under DCAA audit standards, or all of the above simultaneously. Payroll compliance is not a back-office function for government contractors; it is directly tied to contract performance, bid competitiveness, and audit risk.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Federal Prevailing Wage Framework</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Federal law establishes minimum wage obligations for workers on government-funded contracts through three primary statutes:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Law</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Applies To</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Contract Threshold</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Administered By</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Davis-Bacon Act', 'Construction, alteration, repair on federal projects', '$2,000', 'DOL WHD'],
                ['Service Contract Act (SCA)', 'Service contracts (IT, maintenance, support, etc.)', '$2,500', 'DOL WHD'],
                ['Walsh-Healey Public Contracts Act', 'Manufacturing/supply contracts', '$15,000', 'DOL WHD'],
              ].map(([law, applies, threshold, admin], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee', fontWeight: 600 }}>{law}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{applies}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{threshold}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{admin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Certified Payroll: The Davis-Bacon Reporting Obligation</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Every prime contractor and subcontractor on a Davis-Bacon covered project must submit weekly certified payroll reports. The federal WH-347 form (or an equivalent format) documents each worker's classification, hours, wages, deductions, and fringe benefit contributions. The certifying officer signs under penalty of perjury that wages were paid as reported.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Certified payroll reports must be submitted for every week of the project, submitted to the contracting agency within seven days of the end of each payroll period, and retained for at least three years after contract completion. Failure to submit or falsification of certified payroll reports carries penalties including back wage liability and debarment.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The <a href="https://www.dol.gov/agencies/whd/government-contracts/construction" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DOL Wage and Hour Division construction contractor compliance resources</a> cover Davis-Bacon certified payroll requirements in detail.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Service Contract Act: Wage Determinations for Service Work</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The SCA requires that service employees on covered federal contracts be paid at least the wages and fringe benefits specified in the applicable wage determination. Wage determinations are issued by DOL for each locality and occupation, and they are incorporated into the contract. Unlike Davis-Bacon, SCA does not require weekly certified payroll submissions, but does require that contractors maintain payroll records that demonstrate compliance and make them available for DOL inspection.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          SCA fringe benefits can be provided as bona fide benefits (health insurance, pension, vacation) or paid as a cash equivalent on top of wages. The cash-in-lieu approach requires careful tracking to ensure the correct amount is paid for each employee class.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>DCAA Payroll and Timekeeping Requirements</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          DoD contractors subject to DCAA oversight face additional payroll documentation requirements. DCAA requires that contractors maintain an adequate timekeeping system that supports the allocation of labor costs to specific contracts. This means:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Employees must record time daily or at minimum weekly to individual contracts or indirect cost pools</li>
          <li>Timesheets must be signed by the employee and approved by a supervisor</li>
          <li>Labor costs must flow from timesheets to payroll and to the accounting system consistently</li>
          <li>Corrections to timesheets must be documented with the reason for correction</li>
          <li>The payroll system must support labor cost reports by contract for incurred cost submissions</li>
        </ul>

        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/government-contractor" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> configures payroll with contract-level cost center codes and produces the labor distribution reports needed for government contract compliance at $25-$45 per employee per month.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Government Contractor Payroll, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages government contractor payroll at $25-$45 PEPM. SCA compliance, certified payroll, fringe benefit tracking, and DCAA-ready cost center reporting all included. Setup in 3-5 business days.
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
        headline: 'Government Contractor Payroll Guide: Certified Payroll, SCA, and Davis-Bacon Compliance (2026)',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://beghr.com/blog/payroll/government-contractor/government-contractor-payroll-guide',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Government Contractor', item: 'https://beghr.com/blog/payroll/government-contractor' },
          { '@type': 'ListItem', position: 5, name: 'Government Contractor Payroll Guide', item: 'https://beghr.com/blog/payroll/government-contractor/government-contractor-payroll-guide' },
        ]
      }) }} />
    </article>
  );
}
