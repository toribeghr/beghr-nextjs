import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'California Minimum Wage 2026: Rates & Rules | BEG',
  description: 'California minimum wage 2026 is $16.90 per hour statewide, with many cities set higher. Overtime, sick leave, PFML, and payroll compliance guidance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/california-minimum-wage-2026' },
  openGraph: {
    title: 'California Minimum Wage 2026: Rates & Rules | BEG',
    description: 'California minimum wage 2026 is $16.90 per hour statewide, with many cities set higher. Overtime, sick leave, PFML, and payroll compliance guidance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/california-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'California Minimum Wage 2026: Rates & Rules | BEG', description: 'California minimum wage 2026 is $16.90 per hour statewide, with many cities set higher. Overtime, sick leave, PFML, and payroll compliance guidance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in California in 2026?',
    answer: 'California’s statewide minimum wage is $16.90 per hour in 2026, adjusted annually by formula, per the U.S. Department of Labor. Many cities set higher local minimums.',
  },
  {
    question: 'What overtime rules apply in California?',
    answer: 'California requires overtime at 1.5x pay for hours over 8 in a day or 40 in a week, 2x pay for hours over 12 in a day, and special 7th-consecutive-day rules.',
  },
  {
    question: 'Do California cities have higher minimum wages?',
    answer: 'Yes. Many California cities set local minimum wages above the $16.90 state rate. Employers must apply the highest applicable rate for each work location.',
  },
  {
    question: 'Does California require paid sick leave and paid family leave?',
    answer: 'Yes. California requires paid sick leave statewide and has a state paid family and medical leave (PFML) program funded through payroll contributions.',
  },
  {
    question: 'How often does the California minimum wage change?',
    answer: 'California adjusts its minimum wage annually by a statutory formula, so employers should check for updates each year rather than assuming the rate carries over.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "California Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/california-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>California Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>California's 2026 statewide minimum wage is $16.90 per hour, with many cities setting higher local minimums, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>California is one of the most complex states for payroll compliance: a high statewide rate, an annual formula-based adjustment, dozens of city ordinances that can exceed the state rate, and some of the strictest overtime rules in the country. Getting any one of these wrong creates real exposure.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>California Minimum Wage Rate Table</h2>

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
                ['California statewide minimum wage', '$16.90'],
                ['Federal minimum wage', '$7.25'],
                ['Future years', 'Adjusted annually by statutory formula'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Many California cities set minimum wages above the statewide rate. Employers must confirm the current local rate for every city where they have employees and apply whichever rate is highest.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in California</h2>

        <p>California overtime rules are among the strictest in the country. Non-exempt employees earn 1.5x their regular rate for hours worked over 8 in a day or over 40 in a week, and 2x their regular rate for hours worked over 12 in a day. California also has special premium pay rules for the 7th consecutive day worked in a workweek.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>California requires paid sick leave statewide and operates a state paid family and medical leave (PFML) program funded through payroll contributions. Both requirements apply regardless of the local minimum wage in effect.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>California does not allow a tip credit against the minimum wage; tipped employees must be paid the full applicable minimum wage before tips. Because many cities set their own local minimums above the state rate, always confirm current city-level requirements with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before running payroll.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>California's layered wage structure, daily and weekly overtime rules, and annual formula adjustments make this one of the highest-risk states for payroll errors. Multi-state employers need to apply the correct city and state minimum wage, calculate daily and weekly overtime correctly, and track annual rate changes without missing a beat. Penalty exposure in California is significant, including waiting-time penalties for wage violations.</p>

        <p>BEG's managed payroll service tracks California's statewide rate, local city ordinances, and annual formula adjustments automatically, applying the correct wage and overtime calculation for every employee, every pay period.</p>

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
            <a href="/services/managed-payroll/california" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              California Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/california" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              California HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/colorado-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Colorado Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in California in 2026?","acceptedAnswer":{"@type":"Answer","text":"California's statewide minimum wage is $16.90 per hour in 2026, adjusted annually by formula, per the U.S. Department of Labor. Many cities set higher local minimums."}},{"@type":"Question","name":"What overtime rules apply in California?","acceptedAnswer":{"@type":"Answer","text":"California requires overtime at 1.5x pay for hours over 8 in a day or 40 in a week, 2x pay for hours over 12 in a day, and special 7th-consecutive-day rules."}},{"@type":"Question","name":"Do California cities have higher minimum wages?","acceptedAnswer":{"@type":"Answer","text":"Yes. Many California cities set local minimum wages above the $16.90 state rate. Employers must apply the highest applicable rate for each work location."}},{"@type":"Question","name":"Does California require paid sick leave and paid family leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. California requires paid sick leave statewide and has a state paid family and medical leave (PFML) program funded through payroll contributions."}},{"@type":"Question","name":"How often does the California minimum wage change?","acceptedAnswer":{"@type":"Answer","text":"California adjusts its minimum wage annually by a statutory formula, so employers should check for updates each year rather than assuming the rate carries over."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"California Minimum Wage 2026: Rates & Rules","description":"California minimum wage 2026 is $16.90 per hour statewide, with many cities set higher. Overtime, sick leave, PFML, and payroll compliance guidance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/california-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/california-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"California Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/california-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Colorado Minimum Wage 2026: Rates & Rules", excerpt: "Colorado's 2026 minimum wage is $15.16 per hour. Overtime rules, sick leave, PFML, and payroll compliance for Colorado employers...", href: "/blog/payroll/minimum-wage/colorado-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
