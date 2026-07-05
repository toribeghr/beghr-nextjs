import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indiana Minimum Wage 2026: What Employers Must Know | BEG',
  description: 'Indiana minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Indiana.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/indiana-minimum-wage-2026' },
  openGraph: {
    title: 'Indiana Minimum Wage 2026: What Employers Must Know | BEG',
    description: 'Indiana minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Indiana.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/indiana-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Indiana Minimum Wage 2026: What Employers Must Know | BEG', description: 'Indiana minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Indiana.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Indiana in 2026?',
    answer: 'The Indiana minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. Indiana has not enacted a state minimum wage above the federal floor.',
  },
  {
    question: 'Does Indiana require overtime pay?',
    answer: 'Yes. Indiana calculates overtime on a weekly basis, requiring 1.5 times the regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Which employers must comply with Indiana minimum wage law?',
    answer: 'Indiana minimum wage law generally applies to employers with 2 or more employees. Very small employers should confirm their specific obligations with the state labor office.',
  },
  {
    question: 'Does Indiana require paid sick leave?',
    answer: 'No. Indiana does not have a state-mandated paid sick leave law or a state paid family and medical leave program. Employers should still confirm any applicable federal leave requirements.',
  },
  {
    question: 'How does BEG help with Indiana payroll compliance?',
    answer: 'BEG manages payroll at $25-$45 PEPM, all-inclusive, covering Indiana wage compliance, overtime, and filings as part of a flat monthly rate with no per-run add-ons.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Indiana Minimum Wage 2026: What Employers Must Know", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/indiana-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Indiana Minimum Wage 2026: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Indiana minimum wage in 2026 is $7.25 per hour, matching the federal minimum wage exactly, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Indiana is one of several states that has not enacted a state minimum wage above the federal floor. This guide covers the current rate, overtime rules, and what Indiana employers need for payroll compliance in 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Indiana Minimum Wage vs. Federal Minimum Wage</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Jurisdiction</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>2026 Minimum Wage</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Indiana</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Because Indiana has not set a state minimum wage above the federal rate, employers must pay at least $7.25 per hour statewide, subject to any applicable tipped-wage rules.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Indiana</h2>

        <p>Indiana calculates overtime on a weekly basis: nonexempt employees are owed 1.5 times their regular rate for hours worked over 40 in a workweek. There is no daily overtime requirement under Indiana law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Threshold</h2>

        <p>Indiana minimum wage law generally applies to employers with 2 or more employees. This is a lower threshold than many states, meaning most Indiana businesses are covered. Employers with only one employee should confirm their specific status with the Indiana labor office.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave in Indiana</h2>

        <p>Indiana does not currently mandate paid sick leave or operate a state paid family and medical leave program. Employers should track any applicable federal leave obligations and watch for local ordinances that could add requirements in the future.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Indiana permits a tip credit for eligible tipped employees against the state minimum wage. Because credit amounts and eligibility rules can change, employers should confirm current tipped-wage requirements and any local rules at the <a href="https://www.dol.gov/agencies/whd/state/contacts">Department of Labor state contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Even without a state minimum wage above the federal rate, Indiana employers still need accurate overtime calculations, correct employer-size classification, and tipped-wage tracking on every pay run.</p>

        <p>BEG's managed payroll service builds Indiana's wage and overtime rules directly into your payroll configuration, so a growing headcount does not translate into growing compliance risk.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Indiana Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your Indiana business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <p>Learn more about <a href="/services/managed-payroll/indiana">managed payroll in Indiana</a> or <a href="/services/hr-outsourcing/indiana">HR outsourcing in Indiana</a> to see how BEG supports compliance beyond the pay run.</p>

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
            <a href="/services/managed-payroll/indiana" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Indiana Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/indiana" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Indiana HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              More Minimum Wage Guides &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Indiana in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Indiana minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. Indiana has not enacted a state minimum wage above the federal floor."}},{"@type":"Question","name":"Does Indiana require overtime pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Indiana calculates overtime on a weekly basis, requiring 1.5 times the regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Which employers must comply with Indiana minimum wage law?","acceptedAnswer":{"@type":"Answer","text":"Indiana minimum wage law generally applies to employers with 2 or more employees. Very small employers should confirm their specific obligations with the state labor office."}},{"@type":"Question","name":"Does Indiana require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Indiana does not have a state-mandated paid sick leave law or a state paid family and medical leave program. Employers should still confirm any applicable federal leave requirements."}},{"@type":"Question","name":"How does BEG help with Indiana payroll compliance?","acceptedAnswer":{"@type":"Answer","text":"BEG manages payroll at $25-$45 PEPM, all-inclusive, covering Indiana wage compliance, overtime, and filings as part of a flat monthly rate with no per-run add-ons."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Indiana Minimum Wage 2026: What Employers Must Know","description":"Indiana minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Indiana.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/indiana-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/indiana-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Indiana Minimum Wage 2026: What Employers Must Know","item":"https://www.beghr.com/blog/payroll/minimum-wage/indiana-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Iowa Minimum Wage 2026: What Employers Must Know", excerpt: "Iowa's 2026 minimum wage still tracks the federal rate. See overtime rules and what it means for payroll compliance...", href: "/blog/payroll/minimum-wage/iowa-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
