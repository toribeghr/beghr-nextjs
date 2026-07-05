import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'North Carolina Minimum Wage 2026: Federal Floor Rules | BEG',
  description: 'North Carolina minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026' },
  openGraph: {
    title: 'North Carolina Minimum Wage 2026: Federal Floor Rules | BEG',
    description: 'North Carolina minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'North Carolina Minimum Wage 2026: Federal Floor Rules | BEG', description: 'North Carolina minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the North Carolina minimum wage in 2026?',
    answer: 'North Carolina\'s minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. North Carolina has not set a state minimum wage above the federal floor.',
  },
  {
    question: 'What is the overtime rule in North Carolina?',
    answer: 'North Carolina generally follows the weekly overtime standard: 1.5x the regular rate for hours worked over 40 in a workweek. A 45-hour threshold applies in seasonal amusement or recreational establishments.',
  },
  {
    question: 'Does North Carolina require paid sick leave or paid family leave?',
    answer: 'No. North Carolina does not have a statewide paid sick leave mandate or a state paid family and medical leave (PFML) program as of 2026.',
  },
  {
    question: 'Do any North Carolina cities set a higher local minimum wage?',
    answer: 'North Carolina does not have widespread local minimum wage ordinances at the city level. Employers should still confirm current requirements with the state labor office, since local rules can change.',
  },
  {
    question: 'Where can employers verify current North Carolina wage and hour requirements?',
    answer: 'The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the North Carolina labor office for enforcement and local ordinance questions.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "North Carolina Minimum Wage 2026: Federal Floor Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>North Carolina Minimum Wage 2026: Federal Floor Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>North Carolina's 2026 minimum wage is $7.25 per hour, matching the federal floor exactly, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>Because North Carolina has not enacted a state minimum wage above the federal rate, employers there follow federal wage and hour law for pay floors, with a state-specific overtime wrinkle for seasonal amusement businesses. This guide covers what North Carolina requires for 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>North Carolina Minimum Wage Rates for 2026</h2>

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
                ['North Carolina state minimum wage', '$7.25'],
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

        <p>Since North Carolina's state rate equals the federal rate, employers should default to federal FLSA guidance for wage floor questions, while still watching for any future state-level changes.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in North Carolina</h2>

        <p>North Carolina generally follows a weekly overtime standard of 1.5x the regular rate for hours worked over 40. There is one notable exception: employees in seasonal amusement or recreational establishments have a 45-hour threshold before overtime applies, rather than the standard 40-hour mark.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Paid Family Leave</h2>

        <p>North Carolina does not currently mandate paid sick leave or operate a state paid family and medical leave (PFML) program. Employers there rely on federal FMLA protections where applicable, along with any voluntary leave policies they choose to offer.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>Tip credit rules allow eligible employers to pay tipped employees a lower direct cash wage as long as tips bring total pay up to at least minimum wage. Local ordinance activity and tipped wage rules can shift independently of the statewide rate, so confirm current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a> rather than assuming a fixed figure.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Even at the federal floor, North Carolina payroll compliance requires tracking the seasonal amusement overtime exception, applying tip credit rules correctly, and staying alert for any future state minimum wage legislation. Getting these details wrong at payroll close creates back-pay exposure even when the base wage rate itself is simple.</p>

        <p>BEG's managed payroll service applies North Carolina's overtime rules and wage floor automatically at every payroll run, so your team is not tracking exceptions manually.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>North Carolina Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/north-carolina" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              North Carolina Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/north-carolina" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              North Carolina HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the North Carolina minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"North Carolina's minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. North Carolina has not set a state minimum wage above the federal floor."}},{"@type":"Question","name":"What is the overtime rule in North Carolina?","acceptedAnswer":{"@type":"Answer","text":"North Carolina generally follows the weekly overtime standard: 1.5x the regular rate for hours worked over 40 in a workweek. A 45-hour threshold applies in seasonal amusement or recreational establishments."}},{"@type":"Question","name":"Does North Carolina require paid sick leave or paid family leave?","acceptedAnswer":{"@type":"Answer","text":"No. North Carolina does not have a statewide paid sick leave mandate or a state paid family and medical leave (PFML) program as of 2026."}},{"@type":"Question","name":"Do any North Carolina cities set a higher local minimum wage?","acceptedAnswer":{"@type":"Answer","text":"North Carolina does not have widespread local minimum wage ordinances at the city level. Employers should still confirm current requirements with the state labor office, since local rules can change."}},{"@type":"Question","name":"Where can employers verify current North Carolina wage and hour requirements?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the North Carolina labor office for enforcement and local ordinance questions."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"North Carolina Minimum Wage 2026: Federal Floor Rules","description":"North Carolina minimum wage 2026 is $7.25/hour, matching the federal floor. See overtime rules, caveats, and get a free managed payroll quote from BEG.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"North Carolina Minimum Wage 2026: Federal Floor Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/north-carolina-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "North Dakota Minimum Wage 2026: What Employers Need to Know", excerpt: "North Dakota's 2026 minimum wage is $7.25 per hour, matching the federal floor. See overtime rules and...", href: "/blog/payroll/minimum-wage/north-dakota-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
