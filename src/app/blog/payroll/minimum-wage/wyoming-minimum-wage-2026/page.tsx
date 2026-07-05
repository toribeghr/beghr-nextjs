import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wyoming Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Wyoming minimum wage 2026 is the federal $7.25 rate (state rate of $5.15 is superseded). Overtime rules, sick leave, and payroll compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/wyoming-minimum-wage-2026' },
  openGraph: {
    title: 'Wyoming Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Wyoming minimum wage 2026 is the federal $7.25 rate (state rate of $5.15 is superseded). Overtime rules, sick leave, and payroll compliance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/wyoming-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Wyoming Minimum Wage 2026: Rates & Rules | BEG', description: 'Wyoming minimum wage 2026 is the federal $7.25 rate (state rate of $5.15 is superseded). Overtime rules, sick leave, and payroll compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Wyoming in 2026?',
    answer: 'Wyoming employers must pay the federal minimum wage of $7.25 per hour in 2026. Wyoming\'s own state rate of $5.15 is superseded by the higher federal FLSA rate, per the U.S. Department of Labor.',
  },
  {
    question: 'Why does Wyoming have a $5.15 state rate on the books if it does not apply?',
    answer: 'Wyoming\'s state-set minimum wage of $5.15 predates more recent federal increases. Where the federal rate is higher, covered employers must pay the federal $7.25 rate instead.',
  },
  {
    question: 'Does Wyoming have its own overtime law?',
    answer: 'No. Wyoming follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Wyoming require paid sick leave?',
    answer: 'No. Wyoming does not mandate paid sick leave or a state paid family and medical leave program. Employers may offer these benefits voluntarily.',
  },
  {
    question: 'What should multi-state employers with Wyoming workers watch for?',
    answer: 'Employers with staff in Wyoming and other states need to apply the correct rate per work location, since neighboring states may have higher minimums or different overtime triggers.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Wyoming Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/wyoming-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Wyoming Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Wyoming's 2026 minimum wage is the federal rate of $7.25 per hour, since Wyoming's own state rate of $5.15 is superseded by the higher federal FLSA rate, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Wyoming's state minimum wage statute technically sets a lower figure, but federal law requires covered employers to pay whichever rate is higher. In practice, that means Wyoming employers should plan around the federal $7.25 floor, not the state number on the books.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Wyoming Minimum Wage Rate Table</h2>

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
                ['Wyoming (state rate, superseded)', '$5.15 (not controlling)'],
                ['Wyoming (rate that applies)', '$7.25 (federal rate governs)'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Wyoming</h2>

        <p>Wyoming has no separate state overtime statute, so employers follow federal FLSA rules: non-exempt employees earn 1.5x their regular rate of pay for all hours worked over 40 in a single workweek. There is no daily overtime trigger in Wyoming.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Wyoming does not require employers to provide paid sick leave, and there is no state paid family and medical leave (PFML) program. Employers that want to offer these benefits do so voluntarily, and should document the policy clearly in an employee handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Wyoming follows the federal tip credit framework under the FLSA. Rules and any local ordinances can change, so always confirm current tipped-wage requirements and local variations with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay rates.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Wyoming is a good example of why payroll teams cannot rely on a state statute number alone: the $5.15 figure on the books is not what employers should actually pay. Businesses with workers across multiple states need to apply the correct, currently controlling minimum wage and overtime rule to each work location, every pay period.</p>

        <p>This is exactly the kind of nuance BEG's managed payroll service is built to catch. We apply the correct, currently controlling rate and overtime rule in every state where you have employees, so outdated state figures never slip through.</p>

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
            <a href="/services/managed-payroll/wyoming" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Wyoming Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/wyoming" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Wyoming HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              South Dakota Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Wyoming in 2026?","acceptedAnswer":{"@type":"Answer","text":"Wyoming employers must pay the federal minimum wage of $7.25 per hour in 2026. Wyoming's own state rate of $5.15 is superseded by the higher federal FLSA rate, per the U.S. Department of Labor."}},{"@type":"Question","name":"Why does Wyoming have a $5.15 state rate on the books if it does not apply?","acceptedAnswer":{"@type":"Answer","text":"Wyoming's state-set minimum wage of $5.15 predates more recent federal increases. Where the federal rate is higher, covered employers must pay the federal $7.25 rate instead."}},{"@type":"Question","name":"Does Wyoming have its own overtime law?","acceptedAnswer":{"@type":"Answer","text":"No. Wyoming follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Wyoming require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Wyoming does not mandate paid sick leave or a state paid family and medical leave program. Employers may offer these benefits voluntarily."}},{"@type":"Question","name":"What should multi-state employers with Wyoming workers watch for?","acceptedAnswer":{"@type":"Answer","text":"Employers with staff in Wyoming and other states need to apply the correct rate per work location, since neighboring states may have higher minimums or different overtime triggers."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Wyoming Minimum Wage 2026: Rates & Rules","description":"Wyoming minimum wage 2026 is the federal $7.25 rate (state rate of $5.15 is superseded). Overtime rules, sick leave, and payroll compliance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/wyoming-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/wyoming-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Wyoming Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/wyoming-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "South Dakota Minimum Wage 2026: Rates & Rules", excerpt: "South Dakota's 2026 minimum wage is $11.85 per hour, adjusted annually by formula. Rates, overtime rules, and payroll compliance for South Dakota employers...", href: "/blog/payroll/minimum-wage/south-dakota-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
