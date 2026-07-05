import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arizona Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Arizona minimum wage 2026 is $15.15 per hour. Overtime rules, sick leave requirements, and payroll compliance guidance for Arizona employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/arizona-minimum-wage-2026' },
  openGraph: {
    title: 'Arizona Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Arizona minimum wage 2026 is $15.15 per hour. Overtime rules, sick leave requirements, and payroll compliance guidance for Arizona employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/arizona-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Arizona Minimum Wage 2026: Rates & Rules | BEG', description: 'Arizona minimum wage 2026 is $15.15 per hour. Overtime rules, sick leave requirements, and payroll compliance guidance for Arizona employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Arizona in 2026?',
    answer: 'Arizona\'s minimum wage is $15.15 per hour in 2026, well above the federal minimum of $7.25, per the U.S. Department of Labor.',
  },
  {
    question: 'What overtime rules apply in Arizona?',
    answer: 'Arizona follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek. Arizona has no daily overtime trigger.',
  },
  {
    question: 'Does Arizona require paid sick leave?',
    answer: 'Yes. Arizona requires paid sick time for employees under its Fair Wages and Healthy Families Act, separate from the minimum wage requirement.',
  },
  {
    question: 'Does Arizona have a state paid family leave program?',
    answer: 'No. Arizona does not currently have a state paid family and medical leave (PFML) program.',
  },
  {
    question: 'Are there city minimum wages in Arizona above the state rate?',
    answer: 'Some Arizona municipalities, such as Flagstaff, have historically set local minimum wages above the state rate. Confirm current city ordinances with the state labor office before finalizing pay rates.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Arizona Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/arizona-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Arizona Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Arizona's 2026 minimum wage is $15.15 per hour, more than double the federal minimum, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Arizona employers need to track both a high state minimum wage and a state-mandated paid sick time law, two requirements that add real complexity for businesses used to federal-minimum states.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Arizona Minimum Wage Rate Table</h2>

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
                ['Arizona state minimum wage', '$15.15'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Arizona</h2>

        <p>Arizona follows federal FLSA overtime rules. Non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek. There is no separate daily overtime trigger under Arizona law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Arizona requires paid sick time for employees, separate from and in addition to the minimum wage requirement. There is currently no state paid family and medical leave (PFML) program in Arizona, so any additional leave benefits are voluntary.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Arizona allows a tip credit against the state minimum wage, and some cities have set local minimums above the state rate historically. Because ordinances can change, confirm current tipped-wage and city-level rules with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before running payroll.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Arizona's combination of a high state minimum wage and mandatory paid sick time means payroll systems need to track two separate compliance requirements correctly, especially for employers with workers in multiple states with different rules. Applying the wrong rate or missing sick-time accrual creates penalty exposure fast.</p>

        <p>BEG's managed payroll service applies the correct Arizona rate and sick-time accrual automatically, alongside every other state where you have employees, so nothing falls through the cracks.</p>

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
            <a href="/services/managed-payroll/arizona" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Arizona Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/arizona" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Arizona HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/arkansas-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Arkansas Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Arizona in 2026?","acceptedAnswer":{"@type":"Answer","text":"Arizona's minimum wage is $15.15 per hour in 2026, well above the federal minimum of $7.25, per the U.S. Department of Labor."}},{"@type":"Question","name":"What overtime rules apply in Arizona?","acceptedAnswer":{"@type":"Answer","text":"Arizona follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek. Arizona has no daily overtime trigger."}},{"@type":"Question","name":"Does Arizona require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Arizona requires paid sick time for employees under its Fair Wages and Healthy Families Act, separate from the state's minimum wage requirement."}},{"@type":"Question","name":"Does Arizona have a state paid family leave program?","acceptedAnswer":{"@type":"Answer","text":"No. Arizona does not currently have a state paid family and medical leave (PFML) program."}},{"@type":"Question","name":"Are there city minimum wages in Arizona above the state rate?","acceptedAnswer":{"@type":"Answer","text":"Some Arizona municipalities, such as Flagstaff, have historically set local minimum wages above the state rate. Confirm current city ordinances with the state labor office before finalizing pay rates."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Arizona Minimum Wage 2026: Rates & Rules","description":"Arizona minimum wage 2026 is $15.15 per hour. Overtime rules, sick leave requirements, and payroll compliance guidance for Arizona employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/arizona-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/arizona-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Arizona Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/arizona-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Arkansas Minimum Wage 2026: Rates & Rules", excerpt: "Arkansas's 2026 minimum wage is $11.00 per hour. Overtime rules, sick leave, and payroll compliance for Arkansas employers...", href: "/blog/payroll/minimum-wage/arkansas-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
