import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kentucky Minimum Wage 2026: What Employers Must Know | BEG',
  description: 'Kentucky minimum wage 2026 is $7.25 per hour. See the 7th-day overtime rule and what it means for payroll compliance in Kentucky this year.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/kentucky-minimum-wage-2026' },
  openGraph: {
    title: 'Kentucky Minimum Wage 2026: What Employers Must Know | BEG',
    description: 'Kentucky minimum wage 2026 is $7.25 per hour. See the 7th-day overtime rule and what it means for payroll compliance in Kentucky this year.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/kentucky-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Kentucky Minimum Wage 2026: What Employers Must Know | BEG', description: 'Kentucky minimum wage 2026 is $7.25 per hour. See the 7th-day overtime rule and what it means for payroll compliance in Kentucky this year.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Kentucky in 2026?',
    answer: 'The Kentucky minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. Kentucky has not enacted a state minimum wage above the federal floor.',
  },
  {
    question: 'Does Kentucky require overtime pay?',
    answer: 'Yes. Kentucky requires 1.5 times the regular rate for hours worked over 40 in a workweek, plus a 7th-day overtime rule requiring premium pay for employees who work all seven days of a workweek.',
  },
  {
    question: 'What is the Kentucky 7th-day overtime rule?',
    answer: 'Kentucky law requires overtime premium pay for hours worked on the 7th consecutive day in a single workweek, in addition to the standard weekly overtime threshold. Employers should confirm current application details with the state.',
  },
  {
    question: 'Does Kentucky require paid sick leave?',
    answer: 'No. Kentucky does not have a state-mandated paid sick leave law or a state paid family and medical leave program.',
  },
  {
    question: 'How does BEG help with Kentucky payroll compliance?',
    answer: 'BEG manages payroll at $25-$45 PEPM, all-inclusive, handling Kentucky wage compliance, the 7th-day overtime rule, and tax filings as part of a flat monthly rate.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Kentucky Minimum Wage 2026: What Employers Must Know", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/kentucky-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Kentucky Minimum Wage 2026: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Kentucky minimum wage in 2026 is $7.25 per hour, matching the federal minimum wage exactly, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Kentucky pairs its wage floor with a distinctive 7th-day overtime rule that trips up many employers. This guide covers the current rate, overtime rules, and what Kentucky employers need for payroll compliance in 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Kentucky Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Kentucky</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Because Kentucky has not set a state minimum wage above the federal rate, employers must pay at least $7.25 per hour statewide, subject to any applicable tipped-wage rules.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Kentucky</h2>

        <p>Kentucky requires 1.5 times the regular rate for hours worked over 40 in a workweek, consistent with federal FLSA rules. Kentucky also has a 7th-day overtime rule: employees who work all seven days of a single workweek are generally owed overtime premium pay for hours worked on that 7th consecutive day, regardless of total weekly hours. This rule is easy to miss in standard payroll setups and deserves specific attention for businesses that run continuous operations.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave in Kentucky</h2>

        <p>Kentucky does not currently mandate paid sick leave or operate a state paid family and medical leave program. Employers should track any applicable federal leave obligations and watch for local ordinances that could change requirements.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee pay rules can affect the total compensation owed on top of the base minimum wage. Because these rules and any local ordinances can change, employers should confirm current requirements at the <a href="https://www.dol.gov/agencies/whd/state/contacts">Department of Labor state contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Kentucky's 7th-day overtime rule is exactly the kind of state-specific nuance that generic payroll software misses. Getting it wrong means underpaid employees, back-pay exposure, and potential penalties.</p>

        <p>BEG's managed payroll service builds Kentucky's wage floor and 7th-day overtime rule directly into your payroll configuration, so continuous-operation schedules do not create compliance gaps.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Kentucky Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your Kentucky business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <p>Learn more about <a href="/services/managed-payroll/kentucky">managed payroll in Kentucky</a> or <a href="/services/hr-outsourcing/kentucky">HR outsourcing in Kentucky</a> to see how BEG supports compliance beyond the pay run.</p>

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
            <a href="/services/managed-payroll/kentucky" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Kentucky Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/kentucky" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Kentucky HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Kentucky in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Kentucky minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. Kentucky has not enacted a state minimum wage above the federal floor."}},{"@type":"Question","name":"Does Kentucky require overtime pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Kentucky requires 1.5 times the regular rate for hours worked over 40 in a workweek, plus a 7th-day overtime rule requiring premium pay for employees who work all seven days of a workweek."}},{"@type":"Question","name":"What is the Kentucky 7th-day overtime rule?","acceptedAnswer":{"@type":"Answer","text":"Kentucky law requires overtime premium pay for hours worked on the 7th consecutive day in a single workweek, in addition to the standard weekly overtime threshold. Employers should confirm current application details with the state."}},{"@type":"Question","name":"Does Kentucky require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Kentucky does not have a state-mandated paid sick leave law or a state paid family and medical leave program."}},{"@type":"Question","name":"How does BEG help with Kentucky payroll compliance?","acceptedAnswer":{"@type":"Answer","text":"BEG manages payroll at $25-$45 PEPM, all-inclusive, handling Kentucky wage compliance, the 7th-day overtime rule, and tax filings as part of a flat monthly rate."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Kentucky Minimum Wage 2026: What Employers Must Know","description":"Kentucky minimum wage 2026 is $7.25 per hour. See the 7th-day overtime rule and what it means for payroll compliance in Kentucky this year.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/kentucky-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/kentucky-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Kentucky Minimum Wage 2026: What Employers Must Know","item":"https://www.beghr.com/blog/payroll/minimum-wage/kentucky-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Louisiana Minimum Wage 2026: What Employers Must Know", excerpt: "Louisiana has no state minimum wage law, so the federal rate applies. See what it means for payroll compliance...", href: "/blog/payroll/minimum-wage/louisiana-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
