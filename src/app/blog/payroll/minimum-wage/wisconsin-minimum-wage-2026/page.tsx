import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wisconsin Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Wisconsin minimum wage 2026 is $7.25 per hour, matching the federal rate. Overtime rules, sick leave, and payroll compliance for Wisconsin employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/wisconsin-minimum-wage-2026' },
  openGraph: {
    title: 'Wisconsin Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Wisconsin minimum wage 2026 is $7.25 per hour, matching the federal rate. Overtime rules, sick leave, and payroll compliance for Wisconsin employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/wisconsin-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-wisconsin-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Wisconsin Minimum Wage 2026: Rates & Rules | BEG', description: 'Wisconsin minimum wage 2026 is $7.25 per hour, matching the federal rate. Overtime rules, sick leave, and payroll compliance for Wisconsin employers.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-wisconsin-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Wisconsin in 2026?',
    answer: 'Wisconsin\'s minimum wage in 2026 is $7.25 per hour, matching the federal minimum wage, per the U.S. Department of Labor.',
  },
  {
    question: 'Does Wisconsin have its own overtime law?',
    answer: 'Yes. Wisconsin requires overtime pay for hours worked over 40 in a workweek, at 1.5x the employee\'s regular rate, similar to the federal FLSA structure.',
  },
  {
    question: 'Does Wisconsin require paid sick leave?',
    answer: 'No. Wisconsin does not mandate paid sick leave or a state paid family and medical leave program. Employers may offer these benefits voluntarily.',
  },
  {
    question: 'Can Wisconsin cities set a higher minimum wage?',
    answer: 'Wisconsin state law generally preempts local minimum wage ordinances. Always confirm current rules with the Wisconsin Department of Workforce Development before assuming a city-level rate applies.',
  },
  {
    question: 'What should multi-state employers with Wisconsin workers watch for?',
    answer: 'Employers with staff in Wisconsin and other states need to apply the correct rate per work location, since neighboring states may have higher minimums or different overtime triggers.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-wisconsin-minimum-wage-2026.webp", "headline": "Wisconsin Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/wisconsin-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Wisconsin Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-wisconsin-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Wisconsin's 2026 minimum wage is $7.25 per hour, matching the federal minimum wage rate, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Because Wisconsin's state rate mirrors the federal floor, employers here track one fewer moving target than businesses in states with independent minimum wage statutes. But payroll compliance is still not simple, especially for companies with employees in Wisconsin and other states with different rates and rules.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Wisconsin Minimum Wage Rate Table</h2>

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
                ['Wisconsin', '$7.25'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Wisconsin</h2>

        <p>Wisconsin requires overtime pay for hours worked over 40 in a workweek, at 1.5x the employee's regular rate. There is no daily overtime trigger under Wisconsin law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Wisconsin does not require employers to provide paid sick leave, and there is no state paid family and medical leave (PFML) program. Employers that want to offer these benefits do so voluntarily, and should document the policy clearly in an employee handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Wisconsin permits a tip credit toward the minimum wage for tipped employees under state and federal rules. Rules and any local variations can change, so always confirm current tipped-wage requirements with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay rates.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Even in a federal-minimum state like Wisconsin, payroll compliance is not "set it and forget it." Employers with workers across multiple states need to apply the correct minimum wage and overtime rule to each work location, every pay period. Getting it wrong exposes the business to back-wage claims, liquidated damages, and Department of Labor penalties.</p>

        <p>This is exactly the kind of multi-state complexity BEG's managed payroll service is built to absorb. We register in each state where you have employees, apply the correct rate and overtime rule automatically, and keep your filings current as rules change.</p>

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
            <a href="/services/managed-payroll/wisconsin" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Wisconsin Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/wisconsin" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Wisconsin HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/wyoming-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Wyoming Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Wisconsin in 2026?","acceptedAnswer":{"@type":"Answer","text":"Wisconsin's minimum wage in 2026 is $7.25 per hour, matching the federal minimum wage, per the U.S. Department of Labor."}},{"@type":"Question","name":"Does Wisconsin have its own overtime law?","acceptedAnswer":{"@type":"Answer","text":"Yes. Wisconsin requires overtime pay for hours worked over 40 in a workweek, at 1.5x the employee's regular rate, similar to the federal FLSA structure."}},{"@type":"Question","name":"Does Wisconsin require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Wisconsin does not mandate paid sick leave or a state paid family and medical leave program. Employers may offer these benefits voluntarily."}},{"@type":"Question","name":"Can Wisconsin cities set a higher minimum wage?","acceptedAnswer":{"@type":"Answer","text":"Wisconsin state law generally preempts local minimum wage ordinances. Always confirm current rules with the Wisconsin Department of Workforce Development before assuming a city-level rate applies."}},{"@type":"Question","name":"What should multi-state employers with Wisconsin workers watch for?","acceptedAnswer":{"@type":"Answer","text":"Employers with staff in Wisconsin and other states need to apply the correct rate per work location, since neighboring states may have higher minimums or different overtime triggers."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Wisconsin Minimum Wage 2026: Rates & Rules","description":"Wisconsin minimum wage 2026 is $7.25 per hour, matching the federal rate. Overtime rules, sick leave, and payroll compliance for Wisconsin employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/wisconsin-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/wisconsin-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Wisconsin Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/wisconsin-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Wyoming Minimum Wage 2026: Rates & Rules", excerpt: "Wyoming's 2026 minimum wage defaults to the federal $7.25 rate. Rates, overtime rules, and payroll compliance for Wyoming employers...", href: "/blog/payroll/minimum-wage/wyoming-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
