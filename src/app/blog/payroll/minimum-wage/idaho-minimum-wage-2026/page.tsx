import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Idaho Minimum Wage 2026: What Employers Must Know | BEG',
  description: 'Idaho minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Idaho this year.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/idaho-minimum-wage-2026' },
  openGraph: {
    title: 'Idaho Minimum Wage 2026: What Employers Must Know | BEG',
    description: 'Idaho minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Idaho this year.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/idaho-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-idaho-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Idaho Minimum Wage 2026: What Employers Must Know | BEG', description: 'Idaho minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Idaho this year.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-idaho-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Idaho in 2026?',
    answer: 'The Idaho minimum wage is $7.25 per hour in 2026, the same as the federal minimum wage. Idaho has not enacted a state minimum wage above the federal floor.',
  },
  {
    question: 'Does Idaho require overtime pay?',
    answer: 'Yes. Idaho follows federal FLSA overtime rules, requiring 1.5 times the regular rate for hours worked over 40 in a workweek. There is no separate daily overtime rule under Idaho law.',
  },
  {
    question: 'Does Idaho require paid sick leave?',
    answer: 'No. Idaho does not have a state-mandated paid sick leave law or a state paid family and medical leave program. Employers should still confirm requirements for any city ordinances or federal leave laws that may apply.',
  },
  {
    question: 'Are tipped employees paid the full Idaho minimum wage?',
    answer: 'Idaho allows a tip credit against the minimum wage for eligible tipped employees. Rules can vary and are subject to change, so confirm current tipped-wage requirements at the Department of Labor state contacts page.',
  },
  {
    question: 'How does BEG help with Idaho payroll compliance?',
    answer: 'BEG manages payroll at $25-$45 PEPM, all-inclusive, handling Idaho state and federal wage compliance, tax filings, and overtime calculations as part of a flat monthly rate.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-idaho-minimum-wage-2026.webp", "headline": "Idaho Minimum Wage 2026: What Employers Must Know", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/idaho-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Idaho Minimum Wage 2026: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-idaho-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Idaho minimum wage in 2026 is $7.25 per hour, matching the federal minimum wage exactly, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Idaho is one of several states without a state minimum wage above the federal floor. This guide covers the current rate, overtime rules, and what Idaho employers need for payroll compliance in 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Idaho Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Idaho</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Because Idaho has not set a state minimum wage above the federal rate, employers must pay at least $7.25 per hour statewide, subject to any applicable tipped-wage rules.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Idaho</h2>

        <p>Idaho follows federal FLSA overtime rules: nonexempt employees are owed 1.5 times their regular rate for hours worked over 40 in a workweek. There is no state-specific daily overtime trigger in Idaho.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave in Idaho</h2>

        <p>Idaho does not currently mandate paid sick leave or operate a state paid family and medical leave program. Employers should still track federal leave obligations, such as FMLA where applicable, and monitor for any new city or county ordinances that could affect leave requirements.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Idaho permits a tip credit for eligible tipped employees, which can reduce the direct cash wage an employer must pay as long as tips bring total compensation to at least the applicable minimum wage. Because tip credit amounts and eligibility requirements can change, employers should confirm current rules and any local ordinances at the <a href="https://www.dol.gov/agencies/whd/state/contacts">Department of Labor state contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Even in a state without a higher state minimum wage, payroll compliance still requires accurate overtime calculations, tipped-wage tracking, and up-to-date monitoring of any local changes. Idaho employers running payroll manually risk errors as headcount grows or as pay practices change.</p>

        <p>BEG's managed payroll service builds Idaho's wage and overtime rules directly into your payroll configuration, so your team is not left tracking regulatory changes on top of running a business.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Idaho Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your Idaho business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <p>Learn more about <a href="/services/managed-payroll/idaho">managed payroll in Idaho</a> or <a href="/services/hr-outsourcing/idaho">HR outsourcing in Idaho</a> to see how BEG supports compliance beyond the pay run.</p>

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
            <a href="/services/managed-payroll/idaho" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Idaho Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/idaho" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Idaho HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Idaho in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Idaho minimum wage is $7.25 per hour in 2026, the same as the federal minimum wage. Idaho has not enacted a state minimum wage above the federal floor."}},{"@type":"Question","name":"Does Idaho require overtime pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Idaho follows federal FLSA overtime rules, requiring 1.5 times the regular rate for hours worked over 40 in a workweek. There is no separate daily overtime rule under Idaho law."}},{"@type":"Question","name":"Does Idaho require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Idaho does not have a state-mandated paid sick leave law or a state paid family and medical leave program. Employers should still confirm requirements for any city ordinances or federal leave laws that may apply."}},{"@type":"Question","name":"Are tipped employees paid the full Idaho minimum wage?","acceptedAnswer":{"@type":"Answer","text":"Idaho allows a tip credit against the minimum wage for eligible tipped employees. Rules can vary and are subject to change, so confirm current tipped-wage requirements at the Department of Labor state contacts page."}},{"@type":"Question","name":"How does BEG help with Idaho payroll compliance?","acceptedAnswer":{"@type":"Answer","text":"BEG manages payroll at $25-$45 PEPM, all-inclusive, handling Idaho state and federal wage compliance, tax filings, and overtime calculations as part of a flat monthly rate."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Idaho Minimum Wage 2026: What Employers Must Know","description":"Idaho minimum wage 2026 is $7.25 per hour, matching the federal rate. See overtime rules and what it means for payroll compliance in Idaho this year.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/idaho-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/idaho-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Idaho Minimum Wage 2026: What Employers Must Know","item":"https://www.beghr.com/blog/payroll/minimum-wage/idaho-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Illinois Minimum Wage 2026: What Employers Must Know", excerpt: "Illinois' 2026 minimum wage and Paid Leave for All Workers rules. See what it means for payroll compliance...", href: "/blog/payroll/minimum-wage/illinois-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
