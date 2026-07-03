import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'H-2A Worker Payroll Compliance | Housing + Deductions | BEG',
  description: 'H-2A agricultural worker payroll: Adverse Effect Wage Rate, housing and meal deductions, piece rate compliance, and DOL documentation requirements for 2026.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/agriculture/h2a-worker-payroll-compliance' },
  openGraph: {
    title: 'H-2A Worker Payroll Compliance | Housing + Deductions | BEG',
    description: 'H-2A agricultural worker payroll: Adverse Effect Wage Rate, housing and meal deductions, piece rate compliance, and DOL documentation requirements for 2026.',
    url: 'https://www.beghr.com/blog/payroll/agriculture/h2a-worker-payroll-compliance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'H-2A Worker Payroll Compliance | Housing + Deductions | BEG', description: 'H-2A worker payroll: AEWR rates, housing deductions, piece rate, and DOL compliance guide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the Adverse Effect Wage Rate and where do I find it?',
    answer: 'The Adverse Effect Wage Rate (AEWR) is the minimum wage that must be paid to H-2A workers and any domestic workers performing the same work, as published annually by the DOL for each state. The AEWR is set to prevent H-2A program wages from adversely affecting the wages of domestic agricultural workers. Rates vary significantly by state and are typically higher than the federal minimum wage. The DOL publishes updated AEWRs in January each year. For 2026, rates range from approximately $14 to $20 per hour depending on the state. The DOL Wage and Hour Division publishes the current rates at dol.gov.',
  },
  {
    question: 'Can we deduct housing costs from H-2A worker wages?',
    answer: 'Yes, but within strict limits. Employers who provide housing to H-2A workers may deduct the cost of that housing from wages, but the deduction cannot reduce the worker\'s net pay below the Adverse Effect Wage Rate. If housing has a cost of $150 per week and the AEWR is $15 per hour, a worker who works 40 hours must receive at least $600 gross before the housing deduction, leaving a minimum net of $450. The DOL also requires that any housing deduction be disclosed at recruitment, applied consistently, and documented in payroll records.',
  },
  {
    question: 'Are H-2A workers subject to FICA withholding?',
    answer: 'Generally no. H-2A agricultural workers performing agricultural labor are exempt from Social Security and Medicare (FICA) withholding on their H-2A wages. They are also exempt from federal unemployment tax (FUTA) on those wages. However, federal income tax withholding does apply to H-2A wages. State income tax withholding requirements vary by state. Payroll systems must be configured to apply the correct tax treatment for H-2A workers separately from domestic workers on the same operation.',
  },
  {
    question: 'Do H-2A workers receive W-2s at year-end?',
    answer: 'Yes. H-2A workers who are paid wages subject to federal income tax withholding must receive W-2s. The W-2 reflects their total wages and federal income tax withheld. Because FICA does not apply to H-2A wages, Boxes 3-6 (Social Security and Medicare wages and taxes) will be zero. This creates a non-standard W-2 that payroll systems must be configured to produce correctly. Errors in H-2A W-2 processing are common when farms use general-purpose payroll software not configured for agricultural exemptions.',
  },
  {
    question: 'What records must we keep for H-2A worker payroll?',
    answer: 'DOL requires comprehensive record-keeping for H-2A employment. Records must include: the worker\'s name and address, the date of hire and date employment ended, the hours worked each day and week, the piece rate or hourly rate paid, all deductions itemized with the basis for each deduction, gross wages earned, total net wages paid each pay period, and the AEWR in effect during each pay period. These records must be retained for at least three years and must be available for DOL inspection. For piece rate workers, records must also show the number of pieces credited to each worker each pay period.',
  },
  {
    question: 'What happens if we fail to pay the AEWR?',
    answer: 'Failure to pay the AEWR to H-2A workers is a serious violation of the H-2A program terms. The consequences include: back wage liability to affected workers, civil money penalties up to $12,695 per violation (adjusted for inflation), potential debarment from the H-2A program for one to three years, and possible referral for criminal prosecution in cases of willful violation. The DOL can investigate based on worker complaints or during routine audits. Farms found in violation are also required to pay workers for any transportation and subsistence costs they incurred in reliance on the job offer.',
  },
];

export default function H2AWorkerPayrollCompliancePage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "H-2A Worker Payroll Compliance | Housing + Deductions | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/agriculture/h2a-worker-payroll-compliance"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Agriculture</p>
              <h1>H-2A Agricultural Worker Payroll: Housing Deductions, Piece Rate, and DOL Compliance</h1>
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
          The H-2A agricultural guest worker program creates payroll obligations that are distinct from standard employment. The Adverse Effect Wage Rate, housing and meal deduction rules, FICA exemptions, and DOL record-keeping requirements all differ from what applies to domestic workers. Farms that process H-2A payroll as if it were standard employment create compliance gaps that can result in back wage liability, program debarment, and civil penalties.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Adverse Effect Wage Rate: Your Minimum Floor</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The Adverse Effect Wage Rate (AEWR) is the minimum hourly wage that must be paid to H-2A workers. It is published annually by the DOL and varies by state. For 2026, AEWRs across states range from approximately $14.22 to $20.47 per hour. If your state minimum wage is lower than the AEWR, the AEWR controls. If your agreed piece rate produces hourly earnings below the AEWR, you must supplement the piece rate to meet the floor.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The AEWR also applies to domestic workers doing the same agricultural work as your H-2A workers. Employers cannot pay domestic workers less than the AEWR simply because H-2A workers are present. This equal treatment requirement prevents farms from using H-2A workers to suppress wages for domestic workers.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The <a href="https://www.dol.gov/agencies/eta/foreign-labor/wages/adverse-effect-wage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DOL publishes current AEWR rates</a> by state each January. Payroll systems must be updated when new rates take effect.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Housing and Meal Deductions: The Rules</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Farms that provide housing and meals to H-2A workers may deduct the cost from wages, subject to DOL-published limits:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Housing deductions are allowed only if the housing meets DOL safety and habitability standards. Substandard housing cannot be charged to workers.</li>
          <li>Meal deductions are capped at the DOL-published daily rate, which is adjusted annually</li>
          <li>No deduction can reduce a worker's gross wages below the AEWR for hours worked</li>
          <li>All deductions must be disclosed in writing at the time of recruitment</li>
          <li>Deductions for personal items, transportation tools, or other charges not related to housing or meals require separate authorization and different limits</li>
        </ul>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Farms that deduct for housing or meals must document the basis for each deduction, the approved DOL rate in effect, and show that the deduction did not reduce net pay below the AEWR. Pay statements must itemize each deduction.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Piece Rate Pay for H-2A Workers</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          H-2A workers can be paid by piece rate, but the piece rate must produce earnings equal to or greater than the AEWR for every hour worked. At the end of each pay period, divide total piece rate earnings by total hours worked to determine the effective hourly rate. If the effective rate falls below the AEWR, a supplemental payment is required.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Scenario</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Calculation</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Worker picks 500 bins at $0.40/bin, works 40 hours', '$200 / 40 hours = $5.00/hr', 'Below AEWR - supplement required'],
                ['AEWR is $16.00/hr', '40 hrs x $16.00 = $640.00 required', 'Pay $640, not $200'],
                ['Worker picks 2,000 bins at $0.40/bin, works 40 hours', '$800 / 40 hours = $20.00/hr', 'Above AEWR - pay piece rate earnings'],
                ['Housing deduction: $100/week, net pay $740', '$740 / 40 hrs = $18.50/hr net', 'Above AEWR - deduction permissible'],
              ].map(([scenario, calc, result], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{scenario}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{calc}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #eee' }}>{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Tax Treatment for H-2A Workers</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          H-2A agricultural workers are generally exempt from FICA (Social Security and Medicare) and FUTA on their H-2A wages. Federal income tax withholding does apply. State income tax obligations vary by state. This creates a non-standard payroll configuration that requires specific setup in payroll systems.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          For <Link href="/services/managed-payroll/agriculture" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> clients, H-2A worker tax configuration is handled during onboarding. The system applies the correct federal income tax withholding, excludes FICA and FUTA, and produces W-2s with the appropriate boxes populated for H-2A employment. No manual intervention required.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>H-2A Payroll Done Right</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages H-2A and domestic agricultural worker payroll at $25-$45 PEPM, all-inclusive. AEWR compliance, housing deductions, piece rate calculations, and year-end W-2s. Setup in 3-5 business days.
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
        headline: 'H-2A Agricultural Worker Payroll: Housing Deductions, Piece Rate, and DOL Compliance',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/agriculture/h2a-worker-payroll-compliance',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Agriculture', item: 'https://www.beghr.com/blog/payroll/agriculture' },
          { '@type': 'ListItem', position: 5, name: 'H-2A Worker Payroll Compliance', item: 'https://www.beghr.com/blog/payroll/agriculture/h2a-worker-payroll-compliance' },
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Farm and Agriculture Payroll Guide in 2026", excerpt: "Complete farm payroll guide: H-2A visa workers, seasonal crew pay, FLSA agricultural exemptions,...", href: "/blog/payroll/agriculture/agriculture-farm-payroll-guide" },
        { category: "Payroll", title: "Farm Payroll Outsourcing | Why It Works", excerpt: "Why farm and agriculture businesses outsource payroll, what a managed provider covers, and what to...", href: "/blog/payroll/agriculture/farm-payroll-outsourcing" },
        { category: "Payroll", title: "Piece Rate Payroll for Farms (What to Know)", excerpt: "How to calculate piece rate payroll for agricultural workers correctly: minimum wage floor,...", href: "/blog/payroll/agriculture/piece-rate-payroll-farms" },
      ]} />
      </article>
  );
}
