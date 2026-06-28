import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Contract Act Payroll Compliance 2026 | BEG',
  description: 'SCA payroll compliance guide: wage determinations, health and welfare benefits, contractor obligations, enforcement, and how managed payroll handles SCA requirements.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/government-contractor/service-contract-act-payroll' },
  openGraph: {
    title: 'Service Contract Act Payroll Compliance 2026 | BEG',
    description: 'SCA payroll compliance: wage determinations, health and welfare benefits, contractor obligations, DOL enforcement, and managed payroll solutions for service contractors.',
    url: 'https://beghr.com/blog/payroll/government-contractor/service-contract-act-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Service Contract Act Payroll Compliance 2026 | BEG', description: 'SCA payroll compliance guide for government service contractors: wage determinations, fringe benefits, and enforcement.', images: ['https://beghr.com/assets/og-image.org'] },
};

const faqs = [
  {
    question: 'How do I find the applicable SCA wage determination for my contract?',
    answer: 'SCA wage determinations are issued by the DOL and are incorporated into federal service contracts by the contracting officer. The applicable wage determination for your contract should be attached to your contract documents or accessible through SAM.gov. Wage determinations are specific to the locality (state and often metropolitan area) and the occupation codes covered by the contract. If your contract covers multiple locations, there may be separate wage determinations for each location. The contracting officer can provide the controlling wage determination if it is not clear from the contract documents.',
  },
  {
    question: 'What occupations are covered by SCA wage determinations?',
    answer: 'SCA wage determinations cover a wide range of service occupations organized into categories including administrative support, automatic data processing, automotive services, food preparation, health occupations, information technology, janitorial, security, and technical occupations, among others. Each occupation has a specific occupational code and corresponding wage rate in the wage determination. Employees must be classified under the correct occupational code for their actual job duties, not their job title. Misclassification of SCA workers, particularly placing workers under lower-wage codes, is a common violation.',
  },
  {
    question: 'What is the SCA health and welfare benefit requirement?',
    answer: 'SCA wage determinations include a health and welfare (H&W) benefit rate in addition to base wages. The H&W rate is a per-hour amount that the contractor must provide for each hour paid, including paid leave hours but up to 40 hours per week. For 2026, the SCA H&W rate for fringe benefits is published annually by DOL and typically ranges from $4 to $5.50 per hour. The H&W benefit can be satisfied by providing bona fide fringe benefits (health insurance, pension, vacation) equal to at least the H&W rate, or by paying the H&W amount in cash on top of wages. Paying cash-in-lieu is simpler to administer but adds directly to wage cost.',
  },
  {
    question: 'What are the SCA record-keeping requirements?',
    answer: 'SCA contractors must maintain payroll records for each covered employee that include: name, address, and Social Security number; occupation and wage determination code; basic hourly rate of pay; total daily and weekly hours worked; gross wages earned; deductions; net wages paid; fringe benefit contributions or cash-in-lieu amounts; and the applicable wage determination number and effective date. These records must be maintained for at least three years after the contract completion. Contractors must make these records available to DOL investigators and must post SCA notices in a prominent location at each contract site.',
  },
  {
    question: 'How does the SCA apply when a contract is renewed or rebid?',
    answer: 'When a service contract is renewed, the contractor must obtain the current wage determination for the new contract period and apply it from the first day of the new period. Wage determinations may have been updated since the original contract, and the new rates apply immediately upon contract renewal. For contracts rebid competitively, the winning contractor must honor the SCA wage determination regardless of the wages paid under the prior contract. Successor contractors are also required under SCA Section 4(c) to hire the predecessor contractor\'s service employees and give them priority in filling positions under the new contract.',
  },
  {
    question: 'Can BEG handle payroll for contractors with multiple SCA contracts at different locations?',
    answer: 'Yes. BEG manages SCA payroll for government service contractors with multiple contracts across different locations and occupation codes. Each contract location is configured with the applicable wage determination, occupation code rates, and H&W benefit amounts. Employees who work on multiple contracts may have different SCA rates depending on the contract and location. The payroll system tracks contract-specific hours and applies the correct SCA rates for each. Labor cost reports can be produced by contract for DCAA or contract officer review. Pricing is $25-$45 PEPM across all employees regardless of the number of contracts covered.',
  },
];

export default function ServiceContractActPayrollPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Service Contract Act Payroll Compliance 2026 | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/payroll/government-contractor/service-contract-act-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Government Contractor</p>
              <h1>Service Contract Act (SCA) Payroll Compliance: What Government Service Contractors Must Know</h1>
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
          The McNamara-O'Hara Service Contract Act (SCA) is a federal law that requires government service contractors to pay their service employees at least the wage rates and fringe benefits specified in DOL-issued wage determinations. For contractors that provide IT support, janitorial, security, food service, maintenance, or other services to federal agencies, SCA compliance is a contract requirement enforced by DOL's Wage and Hour Division. Violations can result in back wage liability, contract termination, and debarment from future federal contracting.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Who Is Covered by the SCA</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The SCA applies to contracts with the federal government where the principal purpose is to furnish services to the United States through service employees. Contracts over $2,500 are covered. Prime contractors and all subcontractors on covered contracts must comply.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The law covers a wide range of service types: building maintenance and janitorial, guard and security, food preparation and cafeteria, laundry and dry cleaning, IT support and helpdesk, administrative and clerical support, transportation, grounds maintenance, and many others. The critical factor is that the work is performed by service employees rather than professional, administrative, or executive employees who might be classified differently.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Understanding SCA Wage Determinations</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          SCA wage determinations are the core compliance document. Each determination specifies the minimum wage rates and fringe benefits for covered occupations in a specific geographic locality. Wage determinations are incorporated into the contract by the contracting officer and are legally binding on the contractor.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Key elements of a wage determination:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Occupational codes and titles (must match actual employee duties)</li>
          <li>Minimum wage rate for each occupation</li>
          <li>Health and welfare benefit rate per hour</li>
          <li>Vacation and holiday requirements</li>
          <li>Geographic scope (state, metropolitan area, or county)</li>
          <li>Effective date of the determination</li>
        </ul>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The <a href="https://sam.gov/content/wage-determinations" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>SAM.gov wage determination database</a> allows contractors to look up applicable SCA wage determinations by location and occupation category.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>SCA Fringe Benefit Requirements</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          In addition to minimum wage rates, SCA wage determinations include a health and welfare (H&W) benefit obligation. The H&W rate is a per-hour amount that must be provided for each hour paid, up to 40 hours per week. This includes paid leave hours. The H&W requirement can be satisfied by:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Providing bona fide fringe benefits valued at least equal to the H&W rate (health insurance, pension, vacation pay, life insurance, disability insurance)</li>
          <li>Paying the H&W amount in cash on top of wages (cash-in-lieu)</li>
          <li>A combination of bona fide benefits and cash that together equals or exceeds the H&W rate</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>SCA Compliance in Payroll Processing</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          SCA compliance requires the payroll system to:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Track each employee's SCA occupational code</li>
          <li>Apply the correct wage determination rate for each employee's code and work location</li>
          <li>Calculate H&W benefit obligations per hour paid (up to 40 hours/week)</li>
          <li>Track bona fide benefit contributions by employee to verify they meet the H&W requirement</li>
          <li>Pay cash-in-lieu where benefits fall short of the H&W rate</li>
          <li>Maintain records for DOL inspection showing compliance with wage determination rates</li>
        </ul>

        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/government-contractor" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> configures SCA wage determination rates by occupation code and contract location, calculates H&W obligations, tracks bona fide benefit contributions, and processes cash-in-lieu payments where needed. All SCA record-keeping requirements are maintained as part of the base service at $25-$45 PEPM.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>SCA Payroll Compliance, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages SCA payroll compliance at $25-$45 PEPM. Wage determination configuration, H&W tracking, and required record-keeping all included. Setup in 3-5 business days.
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
        headline: 'Service Contract Act (SCA) Payroll Compliance: What Government Service Contractors Must Know',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://beghr.com/blog/payroll/government-contractor/service-contract-act-payroll',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Government Contractor', item: 'https://beghr.com/blog/payroll/government-contractor' },
          { '@type': 'ListItem', position: 5, name: 'Service Contract Act Payroll', item: 'https://beghr.com/blog/payroll/government-contractor/service-contract-act-payroll' },
        ]
      }) }} />
    </article>
  );
}
