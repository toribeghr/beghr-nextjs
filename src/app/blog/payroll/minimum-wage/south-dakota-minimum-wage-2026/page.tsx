import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South Dakota Minimum Wage 2026: Rates & Rules | BEG',
  description: 'South Dakota minimum wage 2026 is $11.85/hour, adjusted annually by formula. Overtime rules and payroll compliance for South Dakota employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026' },
  openGraph: {
    title: 'South Dakota Minimum Wage 2026: Rates & Rules | BEG',
    description: 'South Dakota minimum wage 2026 is $11.85/hour, adjusted annually by formula. Overtime rules and payroll compliance for South Dakota employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'South Dakota Minimum Wage 2026: Rates & Rules | BEG', description: 'South Dakota minimum wage 2026 is $11.85/hour, adjusted annually by formula. Overtime rules and payroll compliance for South Dakota employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in South Dakota in 2026?',
    answer: 'South Dakota\'s minimum wage in 2026 is $11.85 per hour, per the U.S. Department of Labor. The rate is adjusted annually by a state formula tied to cost-of-living changes.',
  },
  {
    question: 'Does South Dakota adjust its minimum wage every year?',
    answer: 'Yes. South Dakota\'s minimum wage is adjusted annually by formula, so employers should check the rate each year rather than assuming it holds steady.',
  },
  {
    question: 'Does South Dakota have its own overtime law?',
    answer: 'No. South Dakota follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does South Dakota require paid sick leave?',
    answer: 'No. South Dakota does not mandate paid sick leave or a state paid family and medical leave program. Employers may offer these benefits voluntarily.',
  },
  {
    question: 'What should multi-state employers with South Dakota workers watch for?',
    answer: 'Because South Dakota\'s rate adjusts annually, multi-state employers should confirm the current rate each year and apply it correctly alongside rules in their other work states.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "South Dakota Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>South Dakota Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>South Dakota's 2026 minimum wage is $11.85 per hour, adjusted annually by a state cost-of-living formula, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Because the rate moves each year, South Dakota employers cannot simply set a wage floor once and forget it. Payroll teams need a process for catching the annual adjustment before it takes effect, especially for businesses with hourly workers near the wage floor.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>South Dakota Minimum Wage Rate Table</h2>

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
                ['South Dakota', '$11.85'],
                ['Federal minimum wage', '$7.25'],
                ['South Dakota (scheduled change)', 'Adjusted annually by formula'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in South Dakota</h2>

        <p>South Dakota has no separate state overtime statute, so employers follow federal FLSA rules: non-exempt employees earn 1.5x their regular rate of pay for all hours worked over 40 in a single workweek. There is no daily overtime trigger in South Dakota.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>South Dakota does not require employers to provide paid sick leave, and there is no state paid family and medical leave (PFML) program. Employers that want to offer these benefits do so voluntarily, and should document the policy clearly in an employee handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>South Dakota permits a tip credit toward the minimum wage for tipped employees under state and federal rules. Rules and local ordinances can change, so always confirm current tipped-wage requirements and any local variations with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay rates.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>An annually adjusted minimum wage means South Dakota payroll compliance is a recurring task, not a one-time setup. Employers need a reliable way to catch the new rate each year and apply it before the effective date, especially across multi-state operations where every state moves on its own schedule.</p>

        <p>This is exactly the kind of ongoing complexity BEG's managed payroll service is built to absorb. We track rate changes in every state where you have employees and apply the correct wage and overtime rule automatically, so nothing slips through.</p>

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
            <a href="/services/managed-payroll/south-dakota" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              South Dakota Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/south-dakota" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              South Dakota HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/tennessee-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Tennessee Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in South Dakota in 2026?","acceptedAnswer":{"@type":"Answer","text":"South Dakota's minimum wage in 2026 is $11.85 per hour, per the U.S. Department of Labor. The rate is adjusted annually by a state formula tied to cost-of-living changes."}},{"@type":"Question","name":"Does South Dakota adjust its minimum wage every year?","acceptedAnswer":{"@type":"Answer","text":"Yes. South Dakota's minimum wage is adjusted annually by formula, so employers should check the rate each year rather than assuming it holds steady."}},{"@type":"Question","name":"Does South Dakota have its own overtime law?","acceptedAnswer":{"@type":"Answer","text":"No. South Dakota follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does South Dakota require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. South Dakota does not mandate paid sick leave or a state paid family and medical leave program. Employers may offer these benefits voluntarily."}},{"@type":"Question","name":"What should multi-state employers with South Dakota workers watch for?","acceptedAnswer":{"@type":"Answer","text":"Because South Dakota's rate adjusts annually, multi-state employers should confirm the current rate each year and apply it correctly alongside rules in their other work states."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"South Dakota Minimum Wage 2026: Rates & Rules","description":"South Dakota minimum wage 2026 is $11.85 per hour, adjusted annually by formula. Overtime rules, sick leave, and payroll compliance for South Dakota employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"South Dakota Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Tennessee Minimum Wage 2026: Rates & Rules", excerpt: "Tennessee's 2026 minimum wage defaults to the federal $7.25 rate. Rates, overtime rules, and payroll compliance for Tennessee employers...", href: "/blog/payroll/minimum-wage/tennessee-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
