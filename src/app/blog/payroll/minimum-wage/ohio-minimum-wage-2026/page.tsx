import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ohio Minimum Wage 2026: Rates by Employer Size | BEG',
  description: 'Ohio minimum wage 2026 is $11.00/hour for larger employers, $7.25 for smaller ones. See the annual adjustment schedule and get a free payroll quote.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/ohio-minimum-wage-2026' },
  openGraph: {
    title: 'Ohio Minimum Wage 2026: Rates by Employer Size | BEG',
    description: 'Ohio minimum wage 2026 is $11.00/hour for larger employers, $7.25 for smaller ones. See the annual adjustment schedule and get a free payroll quote.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/ohio-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-ohio-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Ohio Minimum Wage 2026: Rates by Employer Size | BEG', description: 'Ohio minimum wage 2026 is $11.00/hour for larger employers, $7.25 for smaller ones. See the annual adjustment schedule and get a free payroll quote.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-ohio-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the Ohio minimum wage in 2026?',
    answer: 'Ohio\'s minimum wage in 2026 is $11.00 per hour for employers with gross annual receipts of $405,000 or more. Employers below that threshold pay the federal minimum of $7.25 per hour.',
  },
  {
    question: 'Why does Ohio have two different minimum wage rates?',
    answer: 'Ohio ties its higher minimum wage to a gross receipts threshold. Employers grossing $405,000 or more annually must pay the state rate, while smaller employers below that threshold follow the federal minimum instead.',
  },
  {
    question: 'Does the Ohio minimum wage change every year?',
    answer: 'Yes. Ohio adjusts its minimum wage annually by formula, typically tied to inflation. Employers should check the current rate each year rather than assuming it stays flat.',
  },
  {
    question: 'What is the overtime rule in Ohio?',
    answer: 'Ohio follows the standard weekly overtime rule: 1.5x the regular rate of pay for hours worked over 40 in a workweek.',
  },
  {
    question: 'Where can Ohio employers confirm the current gross receipts threshold and rate?',
    answer: 'The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the Ohio labor office for the current threshold figure and any local ordinance detail.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-ohio-minimum-wage-2026.webp", "headline": "Ohio Minimum Wage 2026: Rates by Employer Size", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/ohio-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Ohio Minimum Wage 2026: Rates by Employer Size</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-ohio-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Ohio's 2026 minimum wage is $11.00 per hour for employers grossing $405,000 or more annually, and $7.25 below that threshold, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>Ohio ties its minimum wage to employer size, measured by gross annual receipts, which makes correct classification an important payroll compliance step. This guide covers Ohio's rate structure, the annual adjustment schedule, and overtime rules for 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Ohio Minimum Wage Rates for 2026</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Wage Floor</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Hourly Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ohio minimum wage (employers grossing $405,000+)', '$11.00'],
                ['Ohio rate for smaller employers', '$7.25'],
                ['Federal minimum wage (FLSA)', '$7.25'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
              <tr style={{ background: '#fff7ec', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Scheduled adjustment</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>Adjusted annually by formula</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Ohio's minimum wage is adjusted annually by formula, so the rate that applies in 2026 will not necessarily be the same rate in 2027. Employers should verify the current figure each year rather than relying on a prior year's number.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The $405,000 Gross Receipts Threshold</h2>

        <p>Ohio's higher minimum wage applies only to employers with gross annual receipts of $405,000 or more. Employers below that threshold are required to pay only the federal minimum wage of $7.25 per hour. Correctly classifying your business against this threshold is essential, since paying the wrong rate in either direction creates compliance risk. Confirm your current classification and the exact threshold figure with the Ohio labor office, since the number itself can be revised.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Ohio</h2>

        <p>Ohio follows the standard weekly overtime rule: non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek. There is no daily overtime threshold under Ohio law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Paid Family Leave</h2>

        <p>Ohio does not currently require paid sick leave or operate a state paid family and medical leave (PFML) program. Employers rely on federal FMLA protections where applicable, along with any voluntary leave benefits they choose to offer.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>Ohio permits a tip credit for qualifying tipped employees, with a lower direct cash wage allowed as long as tips bring total pay up to at least the applicable minimum wage. Because tipped wage rules and gross receipts thresholds are both subject to annual revision, confirm current figures through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a> rather than relying on a fixed number.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Ohio payroll compliance means correctly classifying your business against the gross receipts threshold, applying the right wage rate for each employee, tracking the annual rate adjustment, and calculating overtime correctly. Getting the threshold classification wrong is the most common Ohio compliance mistake, and it directly affects every paycheck.</p>

        <p>BEG's managed payroll service applies Ohio's threshold-based wage rules and annual rate adjustments automatically at every payroll close, so your team is not tracking formula changes manually.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Ohio Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/managed-payroll/ohio" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Ohio Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/ohio" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Ohio HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              More Minimum Wage Guides &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries. BEG manages payroll at $25-$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and state-specific wage and hour requirements. Get instant pricing at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Ohio minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Ohio's minimum wage in 2026 is $11.00 per hour for employers with gross annual receipts of $405,000 or more. Employers below that threshold pay the federal minimum of $7.25 per hour."}},{"@type":"Question","name":"Why does Ohio have two different minimum wage rates?","acceptedAnswer":{"@type":"Answer","text":"Ohio ties its higher minimum wage to a gross receipts threshold. Employers grossing $405,000 or more annually must pay the state rate, while smaller employers below that threshold follow the federal minimum instead."}},{"@type":"Question","name":"Does the Ohio minimum wage change every year?","acceptedAnswer":{"@type":"Answer","text":"Yes. Ohio adjusts its minimum wage annually by formula, typically tied to inflation. Employers should check the current rate each year rather than assuming it stays flat."}},{"@type":"Question","name":"What is the overtime rule in Ohio?","acceptedAnswer":{"@type":"Answer","text":"Ohio follows the standard weekly overtime rule: 1.5x the regular rate of pay for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Where can Ohio employers confirm the current gross receipts threshold and rate?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the Ohio labor office for the current threshold figure and any local ordinance detail."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Ohio Minimum Wage 2026: Rates by Employer Size","description":"Ohio minimum wage 2026 is $11.00/hour for larger employers, $7.25 for smaller ones. See the annual adjustment schedule and get a free payroll quote.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/ohio-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/ohio-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Ohio Minimum Wage 2026: Rates by Employer Size","item":"https://www.beghr.com/blog/payroll/minimum-wage/ohio-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Oklahoma Minimum Wage 2026: What Employers Owe", excerpt: "Oklahoma's 2026 minimum wage is $7.25 per hour for larger employers, with state law superseded by the federal rate...", href: "/blog/payroll/minimum-wage/oklahoma-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
