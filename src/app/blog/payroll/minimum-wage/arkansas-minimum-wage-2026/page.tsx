import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arkansas Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Arkansas minimum wage 2026 is $11.00 per hour. Overtime rules, small-employer thresholds, and payroll compliance guidance for Arkansas employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/arkansas-minimum-wage-2026' },
  openGraph: {
    title: 'Arkansas Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Arkansas minimum wage 2026 is $11.00 per hour. Overtime rules, small-employer thresholds, and payroll compliance guidance for Arkansas employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/arkansas-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Arkansas Minimum Wage 2026: Rates & Rules | BEG', description: 'Arkansas minimum wage 2026 is $11.00 per hour. Overtime rules, small-employer thresholds, and payroll compliance guidance for Arkansas employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Arkansas in 2026?',
    answer: 'Arkansas’s minimum wage is $11.00 per hour in 2026, above the federal minimum of $7.25, per the U.S. Department of Labor.',
  },
  {
    question: 'What overtime rules apply in Arkansas?',
    answer: 'Arkansas requires overtime pay of 1.5x the regular rate for hours worked over 40 in a workweek. There is no daily overtime trigger.',
  },
  {
    question: 'Does the Arkansas minimum wage apply to every employer?',
    answer: 'The state minimum wage applies to employers with 4 or more employees. Very small employers should confirm their exact obligations with the Arkansas Department of Labor.',
  },
  {
    question: 'Does Arkansas require paid sick leave?',
    answer: 'No. Arkansas does not mandate paid sick leave or a state paid family and medical leave program.',
  },
  {
    question: 'How should multi-state employers handle Arkansas payroll?',
    answer: 'Employers with workers in Arkansas and neighboring states need to apply the correct minimum wage per work location, since rates and overtime thresholds vary significantly across state lines.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Arkansas Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/arkansas-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Arkansas Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Arkansas's 2026 minimum wage is $11.00 per hour, above the federal minimum of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Arkansas applies its state minimum wage only to employers above a certain size, which means smaller businesses need to confirm which rate actually applies to them before running payroll.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Arkansas Minimum Wage Rate Table</h2>

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
                ['Arkansas state minimum wage', '$11.00'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Arkansas</h2>

        <p>Arkansas requires overtime pay of 1.5x the regular rate for hours worked over 40 in a workweek. There is no state daily overtime trigger, so overtime calculations follow the same weekly cadence as the federal FLSA standard.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Threshold</h2>

        <p>Arkansas's state minimum wage applies to employers with 4 or more employees. Businesses below that threshold should confirm with the Arkansas Department of Labor which wage floor applies, since misapplying the threshold can create back-pay liability.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Arkansas does not require paid sick leave, and there is no state paid family and medical leave (PFML) program. Employers that choose to offer these benefits do so on a voluntary basis.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Arkansas permits a tip credit against its minimum wage. Local ordinance questions and current tipped-wage rules should be confirmed with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay practices.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Arkansas's employer-size threshold adds a layer of complexity that a flat state minimum wage would not have. Multi-state employers need to apply the correct rate per location and per employer size, then keep that logic current as rules evolve. Getting it wrong means back wages, penalties, and reputational risk.</p>

        <p>BEG's managed payroll service applies Arkansas's rate and threshold rules automatically alongside every other state where you operate, so your payroll team is not left tracking employer-size exceptions by hand.</p>

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
            <a href="/services/managed-payroll/arkansas" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Arkansas Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/arkansas" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Arkansas HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/california-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              California Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Arkansas in 2026?","acceptedAnswer":{"@type":"Answer","text":"Arkansas's minimum wage is $11.00 per hour in 2026, above the federal minimum of $7.25, per the U.S. Department of Labor."}},{"@type":"Question","name":"What overtime rules apply in Arkansas?","acceptedAnswer":{"@type":"Answer","text":"Arkansas requires overtime pay of 1.5x the regular rate for hours worked over 40 in a workweek. There is no daily overtime trigger."}},{"@type":"Question","name":"Does the Arkansas minimum wage apply to every employer?","acceptedAnswer":{"@type":"Answer","text":"The state minimum wage applies to employers with 4 or more employees. Very small employers should confirm their exact obligations with the Arkansas Department of Labor."}},{"@type":"Question","name":"Does Arkansas require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Arkansas does not mandate paid sick leave or a state paid family and medical leave program."}},{"@type":"Question","name":"How should multi-state employers handle Arkansas payroll?","acceptedAnswer":{"@type":"Answer","text":"Employers with workers in Arkansas and neighboring states need to apply the correct minimum wage per work location, since rates and overtime thresholds vary significantly across state lines."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Arkansas Minimum Wage 2026: Rates & Rules","description":"Arkansas minimum wage 2026 is $11.00 per hour. Overtime rules, small-employer thresholds, and payroll compliance guidance for Arkansas employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/arkansas-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/arkansas-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Arkansas Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/arkansas-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "California Minimum Wage 2026: Rates & Rules", excerpt: "California's 2026 minimum wage is $16.90 per hour. Overtime rules, sick leave, PFML, and payroll compliance for California employers...", href: "/blog/payroll/minimum-wage/california-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
