import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DoD Contractor Payroll: ITAR, DCAA & Cleared Employees | BEG',
  description: 'DoD contractor payroll requirements: ITAR labor tracking, security clearance employee costs, DCAA audit readiness, indirect cost pools, and incurred cost submissions.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/government-contractor/dod-contractor-payroll-requirements' },
  openGraph: {
    title: 'DoD Contractor Payroll: ITAR, DCAA & Cleared Employees | BEG',
    description: 'DoD contractor payroll: ITAR labor cost documentation, DCAA audit readiness, cleared employee tracking, indirect cost pools, and incurred cost submissions.',
    url: 'https://www.beghr.com/blog/payroll/government-contractor/dod-contractor-payroll-requirements',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'DoD Contractor Payroll: ITAR, DCAA & Cleared Employees | BEG', description: 'DoD contractor payroll compliance: ITAR, DCAA audit readiness, cleared employees, and indirect cost allocation.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What are DCAA\'s timekeeping requirements for DoD contractors?',
    answer: 'DCAA requires DoD contractors to maintain a timekeeping system that supports the accurate allocation of labor costs to contracts and indirect cost pools. Core requirements include: employees record time daily (not reconstructed at week\'s end); timesheets are signed by the employee and countersigned by a supervisor; all hours worked each day are recorded, including uncompensated overtime for exempt employees; corrections are documented with the reason for change and signed by both the employee and supervisor; and the payroll system produces labor distribution reports that can be reconciled to accounting records and contract cost reports. DCAA commonly cites inadequate timekeeping systems as a significant deficiency in floor check audits.',
  },
  {
    question: 'What is the difference between direct labor and indirect labor for DoD contract payroll?',
    answer: 'Direct labor is time worked specifically on a contract and billed to that contract (identified by a contract number or contract line item number in the timekeeping system). Indirect labor covers all other time: overhead (support activities that benefit multiple contracts), general and administrative (G&A) time (company management, accounting, HR), bid and proposal time, and unallowable time (time that cannot be charged to any government contract under FAR cost principles). Each category must be tracked separately in payroll and the accounting system. DCAA examines whether direct and indirect costs are segregated and allocated consistently and in accordance with the contractor\'s disclosed accounting practices.',
  },
  {
    question: 'How does ITAR affect payroll tracking for DoD contractors?',
    answer: 'ITAR (International Traffic in Arms Regulations) restricts access to defense articles and technical data to U.S. persons. For DoD contractors, this creates a payroll tracking dimension: labor costs associated with ITAR-controlled programs must be billed only from U.S. persons (U.S. citizens, permanent residents, or those with appropriate licenses). Contractors must maintain records of employee citizenship status or ITAR license numbers where applicable and ensure that non-U.S. persons without proper licensing do not work on ITAR-controlled contracts. Payroll records may be required to demonstrate that charges to ITAR contracts came only from authorized personnel.',
  },
  {
    question: 'What is the incurred cost submission and how does payroll relate to it?',
    answer: 'Contractors with cost-type contracts (cost-plus-fixed-fee, cost-plus-incentive-fee) must submit an annual Incurred Cost Submission (ICS) to DCAA within six months after the close of each fiscal year. The ICS reconciles actual costs incurred on each contract during the year, including direct labor, indirect cost pool allocations, and overhead. Payroll records are the foundation of the direct labor section of the ICS. Payroll must be reconcilable to W-2s and tax records, contract charges must match the timekeeping system, and indirect pools must sum correctly. DCAA\'s ICS audit verifies that what was charged to contracts matches what was actually paid to employees.',
  },
  {
    question: 'How are executive compensation limits applied under FAR for DoD contractors?',
    answer: 'FAR 31.205-6 limits the amount of executive compensation that can be included as an allowable government contract cost. The limit is established annually by the Office of Federal Procurement Policy (OFPP) based on the median compensation of the five highest-paid officers at large public companies. For 2026, the cap is adjusted from prior year amounts and published in the Federal Register. Executive compensation above the FAR cap must be excluded from indirect cost pools before they are applied to government contracts. Failure to exclude above-cap compensation is a common DCAA audit finding for contractor G&A pools.',
  },
  {
    question: 'Can BEG handle payroll for DoD contractors with cost-type contracts?',
    answer: 'Yes. BEG configures payroll with contract-level cost center codes mapped to DoD contract numbers and Contract Line Item Numbers (CLINs). Employees record time by contract code through the timekeeping system; payroll processes and distributes labor costs accordingly. Labor distribution reports are produced showing direct labor by contract and indirect labor by pool, compatible with accounting system integration. Reports are formatted to support incurred cost submissions. For ITAR compliance, employee citizenship or license status can be tracked as a payroll field. Pricing is $25-$45 PEPM across all employees regardless of contract type or volume.',
  },
];

export default function DodContractorPayrollPage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "DoD Contractor Payroll: ITAR, DCAA & Cleared Employees | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/government-contractor/dod-contractor-payroll-requirements"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Government Contractor</p>
              <h1>DoD Contractor Payroll: ITAR, Security Clearance Labor Tracking, and Compliance Requirements</h1>
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
          Department of Defense contractors face payroll requirements that go beyond those of other government service contractors. DCAA audit exposure, ITAR labor tracking obligations, cost-type contract incurred cost submissions, and cleared employee documentation requirements create a payroll compliance environment that is more complex than typical federal contracting. Understanding what DoD-specific payroll requirements apply to your contract type is the starting point for building a compliant payroll and accounting system.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>DCAA and the Labor Cost Audit Trail</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          DCAA (Defense Contract Audit Agency) audits DoD contractor payroll to verify that labor costs charged to contracts are allowable, allocable, and reasonable under FAR Part 31 cost principles. For the payroll function, this means maintaining an audit trail that runs from the individual employee timesheet through payroll processing and into the accounting system.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The critical chain is: timesheet (employee daily record by contract code) connects to payroll (hours confirmed and wages calculated) connects to labor distribution (wages allocated to each contract or indirect pool) connects to the accounting system (contract costs recorded). If any link in this chain cannot be reconciled, DCAA will question the costs and may require contractor correction before reimbursement on cost-type contracts.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The <a href="https://www.dcaa.mil/Guidance/Audit-Guidance/" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DCAA audit guidance library</a> includes specific guidance on timekeeping requirements and common deficiencies identified in floor check audits.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Direct vs. Indirect Labor: The Core Allocation Structure</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          DoD contractor payroll must separate labor into direct and indirect categories. The allocation structure must be disclosed to the government and applied consistently. Common structures:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Labor Category</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Description</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Allowable on Government Contracts?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Direct Labor', 'Time worked on a specific contract, billed to that contract', 'Yes (if allowable under contract)'],
                ['Overhead', 'Support time benefiting multiple contracts (supervision, admin support)', 'Yes, allocated via overhead rate'],
                ['G&A', 'Company-wide management, accounting, executive time', 'Yes, allocated via G&A rate'],
                ['Bid and Proposal', 'Time spent pursuing new business', 'Yes, allocated as indirect cost'],
                ['Unallowable', 'Time on activities excluded by FAR 31.205', 'No (must be excluded from pools)'],
              ].map(([cat, desc, allowed], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee', fontWeight: 600 }}>{cat}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{desc}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{allowed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Cleared Employee Payroll Tracking</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          DoD contractors with programs requiring security clearances must track which employees are cleared and at what level. For payroll purposes, this affects:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Labor charges to classified contracts can only come from cleared employees with the appropriate clearance level for that program</li>
          <li>ITAR-controlled programs require U.S. person status documentation for all employees billing to those programs</li>
          <li>Security clearance costs (polygraph fees, clearance processing costs) may be allowable on government contracts when properly documented</li>
          <li>Personnel security records interact with payroll records when DCAA or security officers verify that cleared employees were working during periods charged to classified contracts</li>
        </ul>

        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/government-contractor" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> configures contract-level cost centers, tracks direct and indirect labor allocation, produces DCAA-compatible labor distribution reports, and supports incurred cost submission preparation. Setup in 3-5 business days at $25-$45 PEPM.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>DoD Contractor Payroll, DCAA Ready.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages DoD contractor payroll at $25-$45 PEPM. Contract-level cost centers, direct/indirect labor allocation, labor distribution reports, and incurred cost submission support all included. Setup in 3-5 business days.
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
        headline: 'DoD Contractor Payroll: ITAR, Security Clearance Labor Tracking, and Compliance Requirements',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/government-contractor/dod-contractor-payroll-requirements',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Government Contractor', item: 'https://www.beghr.com/blog/payroll/government-contractor' },
          { '@type': 'ListItem', position: 5, name: 'DoD Contractor Payroll', item: 'https://www.beghr.com/blog/payroll/government-contractor/dod-contractor-payroll-requirements' },
        ]
      }) }} />
    </article>
  );
}
