import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connecticut Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Connecticut minimum wage 2026 is $16.94 per hour. Overtime rules, sick leave, PFML, and payroll compliance guidance for Connecticut employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/connecticut-minimum-wage-2026' },
  openGraph: {
    title: 'Connecticut Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Connecticut minimum wage 2026 is $16.94 per hour. Overtime rules, sick leave, PFML, and payroll compliance guidance for Connecticut employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/connecticut-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Connecticut Minimum Wage 2026: Rates & Rules | BEG', description: 'Connecticut minimum wage 2026 is $16.94 per hour. Overtime rules, sick leave, PFML, and payroll compliance guidance for Connecticut employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Connecticut in 2026?',
    answer: 'Connecticut’s minimum wage is $16.94 per hour in 2026, per the U.S. Department of Labor.',
  },
  {
    question: 'What overtime rules apply in Connecticut?',
    answer: 'Connecticut requires overtime pay of 1.5x the regular rate for hours worked over 40 in a workweek, following the standard weekly threshold.',
  },
  {
    question: 'Is there a special overtime rule for restaurants in Connecticut?',
    answer: 'Yes. Connecticut has a 7th-consecutive-day premium pay rule that applies specifically to restaurants and hotel restaurants.',
  },
  {
    question: 'Does Connecticut require paid sick leave and paid family leave?',
    answer: 'Yes. Connecticut requires paid sick leave and operates a state paid family and medical leave (PFML) program.',
  },
  {
    question: 'Do restaurant employers in Connecticut need special payroll handling?',
    answer: 'Yes. Restaurant and hotel restaurant employers must track consecutive days worked to correctly apply the 7th-day premium pay rule, in addition to standard weekly overtime.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Connecticut Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/connecticut-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Connecticut Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Connecticut's 2026 minimum wage is $16.94 per hour, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Connecticut employers, especially in restaurants and hotel restaurants, need to track an additional 7th-consecutive-day premium pay rule on top of standard weekly overtime, making accurate time tracking essential.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Connecticut Minimum Wage Rate Table</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Jurisdiction</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>2026 Minimum Wage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Connecticut state minimum wage', '$16.94'],
                ['Federal minimum wage', '$7.25'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Connecticut</h2>

        <p>Connecticut requires overtime pay of 1.5x the regular rate for hours worked over 40 in a workweek. In addition, Connecticut applies a 7th-consecutive-day premium pay rule specifically in restaurants and hotel restaurants, requiring extra pay when an employee works seven consecutive days.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Connecticut requires paid sick leave and operates a state paid family and medical leave (PFML) program. Both requirements apply on top of the state's wage and hour rules.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Connecticut allows a tip credit against the state minimum wage for certain tipped occupations. Confirm current tipped-wage rates and any local ordinance questions with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a>, since rules and rates can shift.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Connecticut's 7th-consecutive-day premium rule for restaurants adds a layer of complexity that most payroll systems are not built to catch automatically. Multi-state employers, especially in hospitality, need consecutive-day tracking alongside standard weekly overtime and correct minimum wage application. Missing the premium pay rule creates direct penalty exposure.</p>

        <p>BEG's managed payroll service applies Connecticut's overtime and consecutive-day premium rules automatically, so restaurant and hospitality employers do not have to track this manually across every location.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Managed Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/connecticut" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Connecticut Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/connecticut" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Connecticut HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/delaware-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Delaware Minimum Wage 2026 &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries. BEG manages payroll at $25-$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and industry-specific payroll requirements. Get instant pricing at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Connecticut in 2026?","acceptedAnswer":{"@type":"Answer","text":"Connecticut's minimum wage is $16.94 per hour in 2026, per the U.S. Department of Labor."}},{"@type":"Question","name":"What overtime rules apply in Connecticut?","acceptedAnswer":{"@type":"Answer","text":"Connecticut requires overtime pay of 1.5x the regular rate for hours worked over 40 in a workweek, following the standard weekly threshold."}},{"@type":"Question","name":"Is there a special overtime rule for restaurants in Connecticut?","acceptedAnswer":{"@type":"Answer","text":"Yes. Connecticut has a 7th-consecutive-day premium pay rule that applies specifically to restaurants and hotel restaurants."}},{"@type":"Question","name":"Does Connecticut require paid sick leave and paid family leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Connecticut requires paid sick leave and operates a state paid family and medical leave (PFML) program."}},{"@type":"Question","name":"Do restaurant employers in Connecticut need special payroll handling?","acceptedAnswer":{"@type":"Answer","text":"Yes. Restaurant and hotel restaurant employers must track consecutive days worked to correctly apply the 7th-day premium pay rule, in addition to standard weekly overtime."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Connecticut Minimum Wage 2026: Rates & Rules","description":"Connecticut minimum wage 2026 is $16.94 per hour. Overtime rules, sick leave, PFML, and payroll compliance guidance for Connecticut employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/connecticut-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/connecticut-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Connecticut Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/connecticut-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Delaware Minimum Wage 2026: Rates & Rules", excerpt: "Delaware's 2026 minimum wage is $15.00 per hour. Overtime rules, PFML, and payroll compliance for Delaware employers...", href: "/blog/payroll/minimum-wage/delaware-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
