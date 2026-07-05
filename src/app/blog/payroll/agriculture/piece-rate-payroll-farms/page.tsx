import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Piece Rate Payroll for Farms (What to Know) | BEG',
  description: 'How to calculate piece rate payroll for agricultural workers correctly: minimum wage floor, overtime for piece rate, record-keeping under FLSA, and common',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/agriculture/piece-rate-payroll-farms' },
  openGraph: {
    title: 'Piece Rate Payroll for Farms (What to Know) | BEG',
    description: 'How to calculate piece rate payroll for agricultural workers correctly: minimum wage floor, overtime for piece rate, record-keeping under FLSA, and common',
    url: 'https://www.beghr.com/blog/payroll/agriculture/piece-rate-payroll-farms',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-agriculture-piece-rate-payroll-farms.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Piece Rate Payroll for Farms (What to Know) | BEG', description: 'How to calculate piece rate payroll for agricultural workers correctly under FLSA.', images: ['https://www.beghr.com/blog-images/blog-payroll-agriculture-piece-rate-payroll-farms.webp'] },
};

const faqs = [
  {
    question: 'Can we pay farm workers purely by piece rate with no minimum wage guarantee?',
    answer: 'No. Piece rate pay must produce earnings equal to or greater than the applicable minimum wage for every hour worked. Federal minimum wage is $7.25 per hour, but most states have higher minimums. H-2A workers must earn at least the Adverse Effect Wage Rate. At the end of each pay period, divide the worker\'s total piece rate earnings by total hours worked. If the result is below the applicable minimum wage, you must pay the difference. This is not optional and is one of the most frequently cited violations in agricultural wage audits.',
  },
  {
    question: 'How does overtime work for piece rate agricultural workers?',
    answer: 'For farms subject to FLSA overtime (those exceeding the 500 person-day threshold), piece rate workers who work more than 40 hours in a workweek are owed overtime compensation. The overtime premium for piece rate workers is calculated using the regular rate method: divide total weekly piece rate earnings by total hours worked to find the regular rate, then pay an additional 0.5x the regular rate for each overtime hour. This is different from simply multiplying piece rate earnings by 1.5. The piece rate already compensates for all hours worked; the overtime premium adds only the additional half-time.',
  },
  {
    question: 'What records must we keep for piece rate workers?',
    answer: 'FLSA requires records for piece rate workers that include: the worker\'s name and identifying information, hours worked each day and total hours each workweek, the piece rate paid per unit, the number of pieces credited to the worker each pay period, total earnings from piece rate work, any additional pay (such as minimum wage supplements), all deductions itemized, and total net wages paid each pay period. These records must be retained for at least two years and must be available for DOL inspection. The piece count must be verifiable, which requires a credible production tracking system.',
  },
  {
    question: 'What is the most common piece rate payroll mistake in agriculture?',
    answer: 'The most common and costly mistake is failing to verify that piece rate earnings meet the minimum wage floor for all hours worked in each pay period. Farms that pay by the bin or crate often assume that workers who are experienced pickers will always clear minimum wage. In reality, weather, crop conditions, field locations, and worker health can all cause output to drop below the minimum wage threshold on any given week. Employers who do not check the floor every pay period accumulate minimum wage violations that can be assessed for up to two years of back wages in a DOL audit.',
  },
  {
    question: 'Do California\'s piece rate rules apply differently than federal rules?',
    answer: 'Yes. California has additional piece rate requirements beyond FLSA. California requires that piece rate workers be compensated separately for rest periods and recovery periods at a rate not less than the higher of the applicable minimum wage or the worker\'s average hourly rate. This is separate from piece rate compensation. Farms operating in California must configure payroll to pay separately for rest breaks rather than including break time in the hourly output average. California also has a comprehensive piece rate pay stub requirement. These California-specific rules are a common trap for farms that apply federal rules in a California operation.',
  },
  {
    question: 'Can BEG handle piece rate payroll for farms with hundreds of seasonal workers?',
    answer: 'Yes. BEG manages piece rate payroll for agricultural operations regardless of worker volume. The payroll system is configured with each worker\'s piece rate, the applicable minimum wage floor, and the AEWR if H-2A workers are involved. Each pay period, piece count data is input, the system calculates total piece rate earnings, performs the minimum wage floor check, and applies supplements where needed. For overtime-eligible workers, the regular rate overtime calculation is automated. Year-end W-2s are produced for all workers who received $600 or more during the year.',
  },
];

export default function PieceRatePayrollFarmsPage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Piece Rate Payroll for Farms | Calculation + Compliance | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/agriculture/piece-rate-payroll-farms"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Agriculture</p>
              <h1>Piece Rate Payroll for Agricultural Workers: How to Calculate It Correctly</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-agriculture-piece-rate-payroll-farms.webp" alt={`Piece Rate Payroll for Farms (What to Know)`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Piece rate payroll is the standard pay method for harvest labor in agriculture. It directly aligns worker compensation with output, which benefits both the farm and productive workers. It also creates a specific set of calculation requirements that farms routinely get wrong. The minimum wage floor check, the overtime premium calculation method for piece rate workers, and the record-keeping requirements are all different from hourly payroll, and all are enforced by the Department of Labor's Wage and Hour Division.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Minimum Wage Floor: The Calculation You Cannot Skip</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Every piece rate worker must earn at least the applicable minimum wage for every hour worked in every pay period. This is not optional and is not waived by agreement with the worker. The calculation:
        </p>
        <ol style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Total pieces produced x piece rate = gross piece rate earnings for the pay period</li>
          <li>Total hours worked in the pay period</li>
          <li>Gross piece rate earnings / total hours = effective hourly rate</li>
          <li>Compare effective hourly rate to applicable minimum wage (federal, state, or AEWR for H-2A workers)</li>
          <li>If effective rate is below minimum, pay the difference as a supplement</li>
        </ol>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Worker</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Piece Earnings</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Hours Worked</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Rate</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Min Wage</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Supplement?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Worker A', '$520', '40 hrs', '$13.00/hr', '$15.00/hr', 'Yes: $80'],
                ['Worker B', '$720', '40 hrs', '$18.00/hr', '$15.00/hr', 'No'],
                ['H-2A Worker', '$480', '40 hrs', '$12.00/hr', '$16.00/hr (AEWR)', 'Yes: $160'],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '10px 14px', borderBottom: '1px solid #eee', color: (j === 5 && cell.startsWith('Yes')) ? '#c00' : 'inherit' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Overtime for Piece Rate Workers: The Regular Rate Method</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          For farms subject to FLSA overtime, piece rate workers who exceed 40 hours in a workweek are owed an overtime premium. The calculation uses the "regular rate" method, which is different from simply multiplying earnings by 1.5:
        </p>
        <ol style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Total weekly piece rate earnings (including any minimum wage supplements) / total hours worked = regular rate</li>
          <li>Overtime hours (hours over 40)</li>
          <li>Regular rate x 0.5 x overtime hours = overtime premium</li>
          <li>Total pay = piece rate earnings + overtime premium</li>
        </ol>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Example: Worker earns $650 in piece rate earnings over 50 hours. Regular rate = $650/50 = $13.00/hr. Overtime premium = $13.00 x 0.5 x 10 = $65. Total pay = $650 + $65 = $715. Note that the piece rate already compensates for all 50 hours at the regular rate; overtime adds only the additional half-time.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Record-Keeping Requirements for Piece Rate Payroll</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The <a href="https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-recordkeeping" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>DOL FLSA record-keeping requirements</a> for piece rate workers include:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Worker name, address, and date of birth (if under 19)</li>
          <li>Occupation</li>
          <li>Hours worked each day and total hours worked each workweek</li>
          <li>Piece rate per unit and total units produced each pay period</li>
          <li>Total earnings from piece rate work</li>
          <li>Any additional compensation (minimum wage supplements, overtime premiums)</li>
          <li>All deductions itemized</li>
          <li>Total net wages paid each pay period</li>
          <li>Date of payment and pay period covered</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Common Piece Rate Errors That Trigger DOL Investigations</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          DOL agricultural investigations most frequently find piece rate violations in three areas: the minimum wage floor check (skipped or done incorrectly), rest break compensation in California (rest periods not paid separately from piece rate), and overtime calculation (using 1.5x piece rate instead of the regular rate half-time method). Any of these can result in two-year back wage liability across all affected workers.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/agriculture" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> automates the minimum wage floor check and overtime calculation for piece rate workers, removing the most common sources of error from the weekly payroll process.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Piece Rate Payroll, Calculated Correctly.</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages piece rate payroll for agricultural operations at $25-$45 PEPM. Minimum wage floor checks, overtime calculations, and year-end W-2s all included.
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
        headline: 'Piece Rate Payroll for Agricultural Workers: How to Calculate It Correctly',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/agriculture/piece-rate-payroll-farms',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Agriculture', item: 'https://www.beghr.com/blog/payroll/agriculture' },
          { '@type': 'ListItem', position: 5, name: 'Piece Rate Payroll for Farms', item: 'https://www.beghr.com/blog/payroll/agriculture/piece-rate-payroll-farms' },
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Farm and Agriculture Payroll Guide in 2026", excerpt: "Complete farm payroll guide: H-2A visa workers, seasonal crew pay, FLSA agricultural exemptions,...", href: "/blog/payroll/agriculture/agriculture-farm-payroll-guide" },
        { category: "Payroll", title: "Farm Payroll Outsourcing | Why It Works", excerpt: "Why farm and agriculture businesses outsource payroll, what a managed provider covers, and what to...", href: "/blog/payroll/agriculture/farm-payroll-outsourcing" },
        { category: "Payroll", title: "H-2A Worker Payroll Compliance | Housing + Deductions", excerpt: "H-2A agricultural worker payroll: Adverse Effect Wage Rate, housing and meal deductions, piece rate...", href: "/blog/payroll/agriculture/h2a-worker-payroll-compliance" },
      ]} />
      </article>
  );
}
