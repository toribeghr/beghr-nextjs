import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washington Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Washington minimum wage 2026 is $17.13 per hour statewide, with higher local rates in Seattle. Overtime, sick leave, PFML, and payroll compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/washington-minimum-wage-2026' },
  openGraph: {
    title: 'Washington Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Washington minimum wage 2026 is $17.13 per hour statewide, with higher local rates in Seattle. Overtime, sick leave, PFML, and payroll compliance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/washington-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Washington Minimum Wage 2026: Rates & Rules | BEG', description: 'Washington minimum wage 2026 is $17.13 per hour statewide, with higher local rates in Seattle. Overtime, sick leave, PFML, and payroll compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Washington in 2026?',
    answer: 'Washington\'s statewide minimum wage in 2026 is $17.13 per hour, per the U.S. Department of Labor. The rate is adjusted annually by formula, and Seattle and other cities set higher local minimums.',
  },
  {
    question: 'Is Seattle\'s minimum wage higher than the state rate?',
    answer: 'Yes. Seattle and some other Washington cities set local minimum wages above the $17.13 statewide rate. Employers must pay whichever rate is higher for the specific work location.',
  },
  {
    question: 'Does Washington have its own overtime law?',
    answer: 'Yes. Washington requires overtime pay for hours worked over 40 in a workweek, at 1.5x the employee\'s regular rate.',
  },
  {
    question: 'Does Washington require paid sick leave and paid family leave?',
    answer: 'Yes. Washington mandates paid sick leave for employees and runs a state Paid Family and Medical Leave (PFML) program funded through payroll premiums.',
  },
  {
    question: 'What should multi-state employers with Washington workers watch for?',
    answer: 'Because Washington\'s rate adjusts annually and cities like Seattle set higher local minimums, multi-state employers should confirm the correct rate by work location each year, along with PFML premium obligations.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Washington Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/washington-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Washington Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Washington's 2026 statewide minimum wage is $17.13 per hour, adjusted annually by formula, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Washington layers city-level minimums on top of the state rate, mandates paid sick leave, and runs a state Paid Family and Medical Leave program, making it one of the more complex states for payroll compliance. Employers need to track the correct rate by work location and the state's leave requirements together.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Washington Minimum Wage Rate Table</h2>

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
                ['Washington (statewide)', '$17.13'],
                ['Federal minimum wage', '$7.25'],
                ['Washington (scheduled change)', 'Adjusted annually by formula'],
                ['Seattle and other cities', 'Higher local minimums apply; confirm current local rate'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Washington</h2>

        <p>Washington requires overtime pay for hours worked over 40 in a workweek, at 1.5x the employee's regular rate. There is no daily overtime trigger under Washington law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Washington mandates paid sick leave for employees statewide. Washington also runs a state Paid Family and Medical Leave (PFML) program, funded through payroll premiums shared between employers and employees, providing paid time off for qualifying family and medical events.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Washington does not allow a tip credit against the minimum wage; tipped employees must be paid the full minimum wage before tips. Seattle and other cities set higher local minimums, so employers must confirm the applicable rate for each work location. Rules change, so always verify current requirements with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay rates.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Between the annual wage adjustment, city-level minimums like Seattle's, mandatory paid sick leave, and PFML premium administration, Washington payroll compliance involves several interlocking pieces. Getting even one wrong, whether it is the local minimum wage or the PFML withholding rate, exposes the business to back-wage claims and penalties.</p>

        <p>This is exactly the kind of complexity BEG's managed payroll service is built to absorb. We track rate changes, local ordinances, and leave program requirements in every state where you have employees and apply them automatically, so nothing slips through.</p>

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
            <a href="/services/managed-payroll/washington" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Washington Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/washington" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Washington HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/west-virginia-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              West Virginia Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Washington in 2026?","acceptedAnswer":{"@type":"Answer","text":"Washington's statewide minimum wage in 2026 is $17.13 per hour, per the U.S. Department of Labor. The rate is adjusted annually by formula, and Seattle and other cities set higher local minimums."}},{"@type":"Question","name":"Is Seattle's minimum wage higher than the state rate?","acceptedAnswer":{"@type":"Answer","text":"Yes. Seattle and some other Washington cities set local minimum wages above the $17.13 statewide rate. Employers must pay whichever rate is higher for the specific work location."}},{"@type":"Question","name":"Does Washington have its own overtime law?","acceptedAnswer":{"@type":"Answer","text":"Yes. Washington requires overtime pay for hours worked over 40 in a workweek, at 1.5x the employee's regular rate."}},{"@type":"Question","name":"Does Washington require paid sick leave and paid family leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Washington mandates paid sick leave for employees and runs a state Paid Family and Medical Leave (PFML) program funded through payroll premiums."}},{"@type":"Question","name":"What should multi-state employers with Washington workers watch for?","acceptedAnswer":{"@type":"Answer","text":"Because Washington's rate adjusts annually and cities like Seattle set higher local minimums, multi-state employers should confirm the correct rate by work location each year, along with PFML premium obligations."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Washington Minimum Wage 2026: Rates & Rules","description":"Washington minimum wage 2026 is $17.13 per hour statewide, with higher local rates in Seattle. Overtime, sick leave, PFML, and payroll compliance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/washington-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/washington-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Washington Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/washington-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "West Virginia Minimum Wage 2026: Rates & Rules", excerpt: "West Virginia's 2026 minimum wage is $8.75 per hour. Rates, overtime rules, and payroll compliance for West Virginia employers...", href: "/blog/payroll/minimum-wage/west-virginia-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
