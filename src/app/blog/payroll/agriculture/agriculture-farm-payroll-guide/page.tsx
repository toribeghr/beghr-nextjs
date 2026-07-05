import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Farm and Agriculture Payroll Guide in 2026 | BEG',
  description: 'Complete farm payroll guide: H-2A visa workers, seasonal crew pay, FLSA agricultural exemptions, MSPA compliance, and piece rate calculations for 2026.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/agriculture/agriculture-farm-payroll-guide' },
  openGraph: {
    title: 'Farm and Agriculture Payroll Guide in 2026 | BEG',
    description: 'Complete farm payroll guide: H-2A visa workers, seasonal crew pay, FLSA agricultural exemptions, MSPA compliance, and piece rate calculations for 2026.',
    url: 'https://www.beghr.com/blog/payroll/agriculture/agriculture-farm-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-agriculture-agriculture-farm-payroll-guide.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Farm and Agriculture Payroll Guide in 2026 | BEG', description: 'Complete farm payroll guide: H-2A workers, seasonal crews, MSPA compliance, and piece rate calculations.', images: ['https://www.beghr.com/blog-images/blog-payroll-agriculture-agriculture-farm-payroll-guide.webp'] },
};

const faqs = [
  {
    question: 'Are farm workers exempt from FLSA overtime requirements?',
    answer: 'Many agricultural workers are exempt from FLSA overtime, but the exemption is not universal. The FLSA agricultural exemption applies to workers employed by a farm that used fewer than 500 person-days of agricultural labor in any quarter of the prior calendar year. Most small and mid-size farms qualify. However, H-2A program requirements typically mandate paying the Adverse Effect Wage Rate, which may be higher than the standard federal minimum wage. Farms that also employ non-agricultural workers, or that operate packing facilities, may have different overtime obligations for those employees.',
  },
  {
    question: 'What records must farms keep for agricultural workers under FLSA?',
    answer: 'Farms covered by FLSA must keep records of each employee\'s name, address, occupation, and date of birth (for minors), the hours worked each day and week, and the wages paid each period. For piece rate workers, records must also show the piece rate paid and the number of pieces produced. MSPA-covered operations must maintain additional records related to housing, transportation, and the terms of employment disclosed to workers at recruitment. DOL can request these records during any investigation.',
  },
  {
    question: 'Who is covered by the Migrant and Seasonal Agricultural Worker Protection Act (MSPA)?',
    answer: 'MSPA covers farm labor contractors, agricultural employers, and agricultural associations that recruit, hire, or use migrant or seasonal agricultural workers. Migrant workers are those who travel from their permanent residence to do agricultural work. Seasonal agricultural workers perform agricultural work locally but do not travel. Farms with family member workers or operations using fewer than 500 person-days of agricultural labor and no farm labor contractors are generally exempt. MSPA requires written disclosure of working conditions at recruitment, safe housing and transportation, and timely wage payments.',
  },
  {
    question: 'What payroll taxes apply to agricultural workers?',
    answer: 'Federal income tax withholding applies to agricultural wages. FICA (Social Security and Medicare) applies differently depending on the size of the operation: farms that paid cash wages of $2,500 or more in the prior year must withhold FICA on each worker\'s agricultural wages. FUTA (federal unemployment) applies to farms that paid cash wages of $20,000 or more in any calendar quarter of the current or prior year. State income tax withholding requirements vary by state. H-2A workers are generally exempt from FICA and FUTA on their H-2A wages.',
  },
  {
    question: 'How do we handle payroll for workers who pick up and quit frequently during harvest season?',
    answer: 'Short-tenure agricultural workers must still receive accurate final paychecks including any outstanding piece rate wages, and must receive W-2s for any year in which they earned $600 or more. The practical challenge is maintaining current address information for workers who may be migratory. Best practices include collecting complete contact information at hire, processing final pay promptly (state final pay laws apply to agricultural workers), and maintaining a year-round worker database that retains records for W-2 production even for workers who departed months earlier.',
  },
  {
    question: 'Can BEG handle payroll for both domestic and H-2A workers on the same farm?',
    answer: 'Yes. BEG manages mixed-workforce agricultural payroll that includes both domestic workers and H-2A visa holders. Each worker type has different withholding requirements, different pay rate obligations (H-2A workers must receive the Adverse Effect Wage Rate), and different tax treatment. We configure the payroll system to apply the correct rules to each worker category and produce the appropriate year-end tax forms. H-2A workers receive W-2s but with FICA and FUTA excluded from their H-2A wages.',
  },
];

export default function AgricultureFarmPayrollGuidePage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-agriculture-agriculture-farm-payroll-guide.webp" alt={`Farm and Agriculture Payroll Guide in 2026`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Farm & Agriculture Payroll Guide 2026 | H-2A + Seasonal | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/agriculture/agriculture-farm-payroll-guide"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Agriculture</p>
              <h1>Farm and Agriculture Payroll Guide: H-2A Workers, Seasonal Crews, and MSPA Compliance (2026)</h1>
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
          Agricultural payroll operates under a separate legal framework from standard business payroll. The Fair Labor Standards Act has specific agricultural exemptions, the H-2A visa program imposes its own wage and documentation requirements, piece rate pay requires specialized calculation methods, and the Migrant and Seasonal Agricultural Worker Protection Act adds disclosure and record-keeping obligations that do not exist in other industries. For farm operators who grow their own crops, this complexity is manageable but demanding. For those operating at scale with hundreds of seasonal workers, it is a full-time compliance function.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FLSA Agricultural Exemptions: What Applies to Your Farm</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The Fair Labor Standards Act exempts many agricultural workers from its overtime requirements. The primary exemption applies to farms that used fewer than 500 person-days of agricultural labor in any calendar quarter of the prior year. One person-day is any day in which an employee performs at least one hour of agricultural work. Most operations with fewer than 50 peak-season workers qualify under this threshold.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The FLSA minimum wage exemption also applies differently in agriculture. Workers who are immediate family members of the farm operator are exempt from both minimum wage and overtime requirements. Workers employed by a small farm (one that did not use more than 500 person-days of labor in the prior year) are also exempt from overtime, but minimum wage still applies unless the small farm exemption under Section 13(a)(6) applies.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          For detailed guidance, the <a href="https://www.dol.gov/agencies/whd/agriculture" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DOL Wage and Hour Division's agricultural compliance resources</a> are the authoritative reference for determining which provisions apply to a specific farm operation.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>H-2A Visa Workers: Payroll Requirements</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The H-2A agricultural guest worker program allows farms to temporarily hire foreign nationals for seasonal agricultural work when domestic workers are unavailable. H-2A workers are subject to specific payroll requirements that go beyond standard employment:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Adverse Effect Wage Rate (AEWR): H-2A workers must be paid at least the DOL-published AEWR for the state, which is typically higher than the federal minimum wage</li>
          <li>H-2A workers must also be paid the same wage as domestic workers performing the same work, if that wage is higher than the AEWR</li>
          <li>Housing provided to H-2A workers must meet DOL standards and can be deducted from wages, but deductions cannot reduce pay below the AEWR</li>
          <li>Meals provided by the employer can be deducted at DOL-approved rates</li>
          <li>FICA and FUTA do not apply to H-2A wages, but federal income tax withholding does apply</li>
        </ul>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          H-2A payroll records must document the AEWR in effect, all deductions and their basis, and total wages paid. These records are subject to DOL inspection.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Migrant and Seasonal Agricultural Worker Protection Act (MSPA)</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          MSPA imposes disclosure, record-keeping, and working condition requirements on agricultural employers and farm labor contractors. At hiring, covered employers must provide written disclosure of wages, working conditions, housing conditions if provided, and the nature of the work. These disclosures must be in the worker's language.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          MSPA also requires that wages be paid on the agreed schedule and that a written statement of earnings be provided to each worker for each pay period showing hours worked, piece rate, deductions, and net pay.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Farm labor contractors operating under MSPA must also be registered with the DOL and must carry insurance and surety bonds as required by the program.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Piece Rate and Seasonal Payroll Complexity</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Piece rate pay is common in agriculture because productivity varies significantly by worker. Piece rate payroll requires calculating each worker's total pieces produced, multiplying by the piece rate, verifying the result meets the minimum wage floor for all hours worked, and processing payment on the established pay schedule. For seasonal workers who may only be active for 4-8 weeks, year-end W-2 production requires maintaining accurate records from hire through termination and beyond.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Pay Type</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Minimum Wage Check</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Overtime Treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Hourly (domestic)', 'Apply federal or state minimum, whichever higher', 'OT only if farm over 500 person-day threshold'],
                ['Piece rate (domestic)', 'Total earnings / hours worked must equal min wage', 'Same threshold applies'],
                ['H-2A hourly', 'Must be at least the AEWR for state', 'FLSA OT may not apply depending on farm size'],
                ['H-2A piece rate', 'Must yield at least AEWR per hour worked', 'Same as H-2A hourly'],
              ].map(([type, minwage, ot], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{type}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{minwage}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{ot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How BEG Handles Agricultural Payroll</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/agriculture" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> handles the full agricultural payroll function including H-2A wage compliance, piece rate calculations, AEWR lookup and configuration, housing and meal deduction management, MSPA pay statement requirements, and year-end W-2 production for all workers regardless of employment duration. The service runs at $25-$45 per employee per month and can scale for seasonal volume spikes without renegotiating pricing.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Agricultural Payroll, Handled.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages farm and agriculture payroll at $25-$45 PEPM. H-2A compliance, piece rate, seasonal volumes, and year-end W-2s included. Setup in 3-5 business days.
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
        headline: 'Farm and Agriculture Payroll Guide: H-2A Workers, Seasonal Crews, and MSPA Compliance (2026)',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/agriculture/agriculture-farm-payroll-guide',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Agriculture', item: 'https://www.beghr.com/blog/payroll/agriculture' },
          { '@type': 'ListItem', position: 5, name: 'Agriculture Farm Payroll Guide', item: 'https://www.beghr.com/blog/payroll/agriculture/agriculture-farm-payroll-guide' },
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Farm Payroll Outsourcing | Why It Works", excerpt: "Why farm and agriculture businesses outsource payroll, what a managed provider covers, and what to...", href: "/blog/payroll/agriculture/farm-payroll-outsourcing" },
        { category: "Payroll", title: "H-2A Worker Payroll Compliance | Housing + Deductions", excerpt: "H-2A agricultural worker payroll: Adverse Effect Wage Rate, housing and meal deductions, piece rate...", href: "/blog/payroll/agriculture/h2a-worker-payroll-compliance" },
        { category: "Payroll", title: "Piece Rate Payroll for Farms (What to Know)", excerpt: "How to calculate piece rate payroll for agricultural workers correctly: minimum wage floor,...", href: "/blog/payroll/agriculture/piece-rate-payroll-farms" },
      ]} />
      </article>
  );
}
