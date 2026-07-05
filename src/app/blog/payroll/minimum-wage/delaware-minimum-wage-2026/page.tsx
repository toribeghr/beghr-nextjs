import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delaware Minimum Wage 2026: What Changed | BEG',
  description: 'Delaware minimum wage 2026 is $15.00 per hour. Overtime rules, new PFML benefits, and payroll compliance guidance for Delaware employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/delaware-minimum-wage-2026' },
  openGraph: {
    title: 'Delaware Minimum Wage 2026: What Changed | BEG',
    description: 'Delaware minimum wage 2026 is $15.00 per hour. Overtime rules, new PFML benefits, and payroll compliance guidance for Delaware employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/delaware-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Delaware Minimum Wage 2026: What Changed | BEG', description: 'Delaware minimum wage 2026 is $15.00 per hour. Overtime rules, new PFML benefits, and payroll compliance guidance for Delaware employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Delaware in 2026?',
    answer: 'Delaware’s minimum wage is $15.00 per hour in 2026, per the U.S. Department of Labor.',
  },
  {
    question: 'What overtime rules apply in Delaware?',
    answer: 'Delaware follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Delaware require paid sick leave?',
    answer: 'No. Delaware does not mandate paid sick leave for private employers.',
  },
  {
    question: 'What is new with Delaware paid family leave in 2026?',
    answer: 'Delaware’s state paid family and medical leave benefits begin in 2026, a significant new payroll compliance requirement for employers in the state.',
  },
  {
    question: 'How should employers prepare for Delaware PFML?',
    answer: 'Employers should confirm current program details, contribution rates, and effective dates with the Delaware Department of Labor as the paid family and medical leave benefits roll out in 2026.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Delaware Minimum Wage 2026: What Changed", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/delaware-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Delaware Minimum Wage 2026: What Changed</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Delaware's 2026 minimum wage is $15.00 per hour, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>The bigger 2026 change for Delaware employers is not the wage rate; it is the launch of state paid family and medical leave benefits, a new payroll withholding and compliance obligation employers need to build into their processes now.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Delaware Minimum Wage Rate Table</h2>

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
                ['Delaware state minimum wage', '$15.00'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Delaware</h2>

        <p>Delaware follows federal FLSA overtime rules. Non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek, with no separate state daily overtime trigger.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Delaware does not mandate paid sick leave for private employers. However, state paid family and medical leave benefits begin in 2026, a meaningful new compliance requirement. Employers should confirm current contribution rates and effective dates with the Delaware Department of Labor as this program rolls out.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Delaware allows a tip credit against the state minimum wage for tipped employees. Confirm current tipped-wage rates and any local ordinance questions with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay practices.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Delaware's new paid family and medical leave program means payroll systems need updated withholding calculations and reporting starting in 2026. Multi-state employers rolling this out alongside other state PFML programs, sick leave laws, and minimum wage rates face real complexity, and missing a required withholding creates penalty exposure.</p>

        <p>BEG's managed payroll service builds new state programs like Delaware's PFML into your payroll automatically, so you are compliant from day one without manually researching every rule change.</p>

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
            <a href="/services/managed-payroll/delaware" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Delaware Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/delaware" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Delaware HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/florida-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Florida Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Delaware in 2026?","acceptedAnswer":{"@type":"Answer","text":"Delaware's minimum wage is $15.00 per hour in 2026, per the U.S. Department of Labor."}},{"@type":"Question","name":"What overtime rules apply in Delaware?","acceptedAnswer":{"@type":"Answer","text":"Delaware follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Delaware require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Delaware does not mandate paid sick leave for private employers."}},{"@type":"Question","name":"What is new with Delaware paid family leave in 2026?","acceptedAnswer":{"@type":"Answer","text":"Delaware's state paid family and medical leave benefits begin in 2026, a significant new payroll compliance requirement for employers in the state."}},{"@type":"Question","name":"How should employers prepare for Delaware PFML?","acceptedAnswer":{"@type":"Answer","text":"Employers should confirm current program details, contribution rates, and effective dates with the Delaware Department of Labor as the paid family and medical leave benefits roll out in 2026."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Delaware Minimum Wage 2026: What Changed","description":"Delaware minimum wage 2026 is $15.00 per hour. Overtime rules, new PFML benefits, and payroll compliance guidance for Delaware employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/delaware-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/delaware-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Delaware Minimum Wage 2026: What Changed","item":"https://www.beghr.com/blog/payroll/minimum-wage/delaware-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Florida Minimum Wage 2026: Rates & Rules", excerpt: "Florida's 2026 minimum wage is $14.00 per hour, rising to $15.00 in September 2026. Overtime and payroll compliance for Florida employers...", href: "/blog/payroll/minimum-wage/florida-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
