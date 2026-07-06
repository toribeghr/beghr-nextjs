import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'North Dakota Minimum Wage 2026: What Employers Owe | BEG',
  description: 'North Dakota minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026' },
  openGraph: {
    title: 'North Dakota Minimum Wage 2026: What Employers Owe | BEG',
    description: 'North Dakota minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-north-dakota-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'North Dakota Minimum Wage 2026: What Employers Owe | BEG', description: 'North Dakota minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-north-dakota-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the North Dakota minimum wage in 2026?',
    answer: 'North Dakota\'s minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. The state has not enacted a minimum wage above the federal floor.',
  },
  {
    question: 'What is the overtime rule in North Dakota?',
    answer: 'North Dakota follows the standard weekly overtime rule: 1.5x the regular rate of pay for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does North Dakota require paid sick leave or paid family leave?',
    answer: 'No. North Dakota does not have a statewide paid sick leave mandate or a state paid family and medical leave (PFML) program as of 2026.',
  },
  {
    question: 'Are there local minimum wage ordinances in North Dakota?',
    answer: 'North Dakota does not have widespread city-level minimum wage ordinances. Employers should confirm current local requirements with the state labor office, since local rules can change.',
  },
  {
    question: 'Where can employers verify current North Dakota wage and hour rules?',
    answer: 'The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the North Dakota labor office for enforcement and local ordinance detail.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-north-dakota-minimum-wage-2026.webp", "headline": "North Dakota Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>North Dakota Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-north-dakota-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>North Dakota's 2026 minimum wage is $7.25 per hour, matching the federal floor exactly, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>With North Dakota's rate set at the federal minimum, employers there primarily follow federal FLSA rules for wage and hour compliance. This guide covers what North Dakota requires for 2026 and where employers should watch for changes.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>North Dakota Minimum Wage Rates for 2026</h2>

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
                ['North Dakota state minimum wage', '$7.25'],
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

        <p>Because North Dakota's rate matches the federal minimum exactly, employers should track federal FLSA guidance closely and stay alert for any future state-level minimum wage legislation.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in North Dakota</h2>

        <p>North Dakota applies the standard weekly overtime rule: non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek. There is no daily overtime threshold under state law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Paid Family Leave</h2>

        <p>North Dakota does not currently require paid sick leave or operate a state paid family and medical leave (PFML) program. Employers there rely on federal FMLA protections where applicable, along with any voluntary leave benefits they choose to offer.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>Tip credit provisions allow eligible employers to pay a lower direct cash wage to tipped employees, provided tips bring total compensation up to at least minimum wage. Because tipped wage rules and any local ordinance activity can change, confirm current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a> before finalizing pay rates.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Even at the federal wage floor, North Dakota payroll compliance means applying overtime correctly, administering tip credit accurately, and monitoring for any future state minimum wage changes. Simple wage rates do not eliminate the need for careful payroll processing.</p>

        <p>BEG's managed payroll service applies North Dakota's wage and overtime rules automatically at every payroll close, keeping your business current without manual tracking.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>North Dakota Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/north-dakota" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              North Dakota Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/north-dakota" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              North Dakota HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the North Dakota minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"North Dakota's minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. The state has not enacted a minimum wage above the federal floor."}},{"@type":"Question","name":"What is the overtime rule in North Dakota?","acceptedAnswer":{"@type":"Answer","text":"North Dakota follows the standard weekly overtime rule: 1.5x the regular rate of pay for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does North Dakota require paid sick leave or paid family leave?","acceptedAnswer":{"@type":"Answer","text":"No. North Dakota does not have a statewide paid sick leave mandate or a state paid family and medical leave (PFML) program as of 2026."}},{"@type":"Question","name":"Are there local minimum wage ordinances in North Dakota?","acceptedAnswer":{"@type":"Answer","text":"North Dakota does not have widespread city-level minimum wage ordinances. Employers should confirm current local requirements with the state labor office, since local rules can change."}},{"@type":"Question","name":"Where can employers verify current North Dakota wage and hour rules?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the North Dakota labor office for enforcement and local ordinance detail."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"North Dakota Minimum Wage 2026: What Employers Owe","description":"North Dakota minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"North Dakota Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "North Carolina Minimum Wage 2026: Federal Floor Rules", excerpt: "North Carolina's 2026 minimum wage is $7.25 per hour, matching the federal floor exactly. See overtime rules and...", href: "/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
