import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Mexico Minimum Wage 2026: What Employers Owe | BEG',
  description: 'New Mexico minimum wage 2026 is $12.00/hour, above the federal $7.25. Santa Fe and Albuquerque set higher local rates. Get a free managed payroll quote.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026' },
  openGraph: {
    title: 'New Mexico Minimum Wage 2026: What Employers Owe | BEG',
    description: 'New Mexico minimum wage 2026 is $12.00/hour, above the federal $7.25. Santa Fe and Albuquerque set higher local rates. Get a free managed payroll quote.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-new-mexico-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Mexico Minimum Wage 2026: What Employers Owe | BEG', description: 'New Mexico minimum wage 2026 is $12.00/hour, above the federal $7.25. Santa Fe and Albuquerque set higher local rates. Get a free managed payroll quote.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-new-mexico-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the New Mexico minimum wage in 2026?',
    answer: 'New Mexico\'s state minimum wage is $12.00 per hour in 2026, well above the federal minimum of $7.25. Employers must pay whichever rate is higher, which in New Mexico is always the state rate.',
  },
  {
    question: 'Do Santa Fe and Albuquerque have their own minimum wage?',
    answer: 'Yes. Santa Fe and Albuquerque set local minimum wage ordinances that are higher than the $12.00 state rate. Employers with workers in those cities need to confirm the current local rate rather than defaulting to the state number.',
  },
  {
    question: 'What is the overtime rule in New Mexico?',
    answer: 'New Mexico follows a weekly overtime standard: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does New Mexico require paid sick leave?',
    answer: 'Yes. New Mexico has a statewide paid sick leave requirement. New Mexico does not currently have a state paid family and medical leave (PFML) program.',
  },
  {
    question: 'Where can employers confirm current New Mexico wage and hour rules?',
    answer: 'The U.S. Department of Labor maintains a state-by-state minimum wage chart, and its state contacts directory links directly to the New Mexico labor office for local ordinance detail and enforcement questions.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-new-mexico-minimum-wage-2026.webp", "headline": "New Mexico Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>New Mexico Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-new-mexico-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>New Mexico's 2026 minimum wage is $12.00 per hour, well above the federal $7.25 floor, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>For New Mexico employers, payroll compliance means tracking the state rate, watching for higher city ordinances, and applying overtime correctly. This guide breaks down what New Mexico requires in 2026 and what it means for your payroll process.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>New Mexico Minimum Wage Rates for 2026</h2>

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
                ['New Mexico state minimum wage', '$12.00'],
                ['Federal minimum wage (FLSA)', '$7.25'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Because the state rate exceeds the federal rate, New Mexico employers must pay at least $12.00 per hour to non-exempt employees, regardless of the federal floor.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Local Minimum Wage: Santa Fe and Albuquerque</h2>

        <p>Santa Fe and Albuquerque both set local minimum wage ordinances that run higher than the $12.00 state rate. If you have employees working within these city limits, the local ordinance rate applies, not the statewide rate. Local minimums change on their own schedules, so confirm the current city rate directly with the applicable city wage office or the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL's state labor office contact directory</a> before running payroll.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in New Mexico</h2>

        <p>New Mexico uses a weekly overtime standard: non-exempt employees are owed 1.5x their regular rate of pay for all hours worked beyond 40 in a single workweek. There is no daily overtime threshold under state law, so overtime obligations are calculated on total weekly hours.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave in New Mexico</h2>

        <p>New Mexico requires employers to provide paid sick leave under state law. New Mexico does not currently operate a state paid family and medical leave (PFML) program, so employers should rely on federal FMLA rules where applicable and monitor for future state PFML legislation.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>Tipped employees in New Mexico may be paid a lower direct cash wage as long as tips bring total compensation up to at least the applicable minimum wage. Tip credit rules and local minimum wage ordinances change independently of the statewide rate, so confirm current tipped wage rules and any city-specific requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a> rather than relying on a fixed number in this guide.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Getting New Mexico wage and hour rules right at every payroll close means tracking the state rate, verifying whether any employee falls under a higher Santa Fe or Albuquerque ordinance, applying the weekly overtime rule correctly, and administering paid sick leave accrual. Missing any one of these creates real liability, especially for multi-location New Mexico employers.</p>

        <p>BEG's managed payroll service builds New Mexico's wage floor, overtime rule, and sick leave requirements directly into every payroll run, so your business does not have to track rate changes manually.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>New Mexico Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/new-mexico" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New Mexico Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/new-mexico" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New Mexico HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the New Mexico minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"New Mexico's state minimum wage is $12.00 per hour in 2026, well above the federal minimum of $7.25. Employers must pay whichever rate is higher, which in New Mexico is always the state rate."}},{"@type":"Question","name":"Do Santa Fe and Albuquerque have their own minimum wage?","acceptedAnswer":{"@type":"Answer","text":"Yes. Santa Fe and Albuquerque set local minimum wage ordinances that are higher than the $12.00 state rate. Employers with workers in those cities need to confirm the current local rate rather than defaulting to the state number."}},{"@type":"Question","name":"What is the overtime rule in New Mexico?","acceptedAnswer":{"@type":"Answer","text":"New Mexico follows a weekly overtime standard: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does New Mexico require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. New Mexico has a statewide paid sick leave requirement. New Mexico does not currently have a state paid family and medical leave (PFML) program."}},{"@type":"Question","name":"Where can employers confirm current New Mexico wage and hour rules?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Department of Labor maintains a state-by-state minimum wage chart, and its state contacts directory links directly to the New Mexico labor office for local ordinance detail and enforcement questions."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"New Mexico Minimum Wage 2026: What Employers Owe","description":"New Mexico minimum wage 2026 is $12.00/hour, above the federal $7.25. Santa Fe and Albuquerque set higher local rates. Get a free managed payroll quote.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"New Mexico Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "New York Minimum Wage 2026: NYC vs Rest of State", excerpt: "New York minimum wage 2026 varies by region: $17.00 in NYC, Nassau, Suffolk, and Westchester versus $16.00 elsewhere...", href: "/blog/payroll/minimum-wage/new-york-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
