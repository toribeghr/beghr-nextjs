import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Louisiana Minimum Wage 2026: What Employers Must Know | BEG',
  description: 'Louisiana has no state minimum wage law in 2026, so the federal $7.25 rate applies. See overtime rules and what it means for payroll compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/louisiana-minimum-wage-2026' },
  openGraph: {
    title: 'Louisiana Minimum Wage 2026: What Employers Must Know | BEG',
    description: 'Louisiana has no state minimum wage law in 2026, so the federal $7.25 rate applies. See overtime rules and what it means for payroll compliance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/louisiana-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-louisiana-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Louisiana Minimum Wage 2026: What Employers Must Know | BEG', description: 'Louisiana has no state minimum wage law in 2026, so the federal $7.25 rate applies. See overtime rules and what it means for payroll compliance.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-louisiana-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Louisiana in 2026?',
    answer: 'Louisiana has no state minimum wage law, so the federal minimum wage of $7.25 per hour applies in 2026.',
  },
  {
    question: 'Does Louisiana require overtime pay?',
    answer: 'Yes. Louisiana follows federal FLSA overtime rules, requiring 1.5 times the regular rate for hours worked over 40 in a workweek. There is no state-specific daily overtime rule.',
  },
  {
    question: 'Does Louisiana require paid sick leave?',
    answer: 'No. Louisiana does not have a state-mandated paid sick leave law or a state paid family and medical leave program.',
  },
  {
    question: 'Are tipped employees paid the full Louisiana minimum wage?',
    answer: 'Tipped wage rules follow federal guidelines in the absence of a state minimum wage law. Confirm current tip credit requirements at the Department of Labor state contacts page, since local ordinances can also apply.',
  },
  {
    question: 'How does BEG help with Louisiana payroll compliance?',
    answer: 'BEG manages payroll at $25-$45 PEPM, all-inclusive, handling Louisiana wage compliance under federal rules, overtime calculations, and tax filings as part of a flat monthly rate.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-louisiana-minimum-wage-2026.webp", "headline": "Louisiana Minimum Wage 2026: What Employers Must Know", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/louisiana-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Louisiana Minimum Wage 2026: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-louisiana-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Louisiana has no state minimum wage law in 2026, so the federal minimum wage of $7.25 per hour applies statewide, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Because Louisiana defers entirely to federal wage law, employers need to track FLSA rules closely rather than a separate state statute. This guide covers overtime rules and what Louisiana employers need for payroll compliance in 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Louisiana Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Louisiana</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>Federal $7.25 (no state minimum wage law)</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Since Louisiana has not enacted its own minimum wage statute, the federal FLSA rate of $7.25 per hour is the controlling wage floor for covered employers statewide.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Louisiana</h2>

        <p>Louisiana follows federal FLSA overtime rules: nonexempt employees are owed 1.5 times their regular rate for hours worked over 40 in a workweek. There is no state-specific daily overtime trigger in Louisiana.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave in Louisiana</h2>

        <p>Louisiana does not currently mandate paid sick leave or operate a state paid family and medical leave program. Employers should track any applicable federal leave obligations and monitor for parish or city-level changes.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Because Louisiana has no state minimum wage law, tipped-wage practices generally follow the federal framework, including any applicable tip credit. Employers should confirm current federal tip credit rules and any local requirements at the <a href="https://www.dol.gov/agencies/whd/state/contacts">Department of Labor state contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Relying entirely on federal wage law does not reduce payroll complexity. Louisiana employers still need accurate overtime tracking, correct tip credit application, and vigilance for any new local ordinances.</p>

        <p>BEG's managed payroll service builds Louisiana's federal wage floor and overtime rules directly into your payroll configuration, so your team is not left interpreting FLSA rules manually.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Louisiana Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your Louisiana business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <p>Learn more about <a href="/services/managed-payroll/louisiana">managed payroll in Louisiana</a> or <a href="/services/hr-outsourcing/louisiana">HR outsourcing in Louisiana</a> to see how BEG supports compliance beyond the pay run.</p>

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
            <a href="/services/managed-payroll/louisiana" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Louisiana Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/louisiana" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Louisiana HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Louisiana in 2026?","acceptedAnswer":{"@type":"Answer","text":"Louisiana has no state minimum wage law, so the federal minimum wage of $7.25 per hour applies in 2026."}},{"@type":"Question","name":"Does Louisiana require overtime pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Louisiana follows federal FLSA overtime rules, requiring 1.5 times the regular rate for hours worked over 40 in a workweek. There is no state-specific daily overtime rule."}},{"@type":"Question","name":"Does Louisiana require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Louisiana does not have a state-mandated paid sick leave law or a state paid family and medical leave program."}},{"@type":"Question","name":"Are tipped employees paid the full Louisiana minimum wage?","acceptedAnswer":{"@type":"Answer","text":"Tipped wage rules follow federal guidelines in the absence of a state minimum wage law. Confirm current tip credit requirements at the Department of Labor state contacts page, since local ordinances can also apply."}},{"@type":"Question","name":"How does BEG help with Louisiana payroll compliance?","acceptedAnswer":{"@type":"Answer","text":"BEG manages payroll at $25-$45 PEPM, all-inclusive, handling Louisiana wage compliance under federal rules, overtime calculations, and tax filings as part of a flat monthly rate."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Louisiana Minimum Wage 2026: What Employers Must Know","description":"Louisiana has no state minimum wage law in 2026, so the federal $7.25 rate applies. See overtime rules and what it means for payroll compliance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/louisiana-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/louisiana-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Louisiana Minimum Wage 2026: What Employers Must Know","item":"https://www.beghr.com/blog/payroll/minimum-wage/louisiana-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Maine Minimum Wage 2026: What Employers Must Know", excerpt: "Maine's 2026 minimum wage adjusts annually by formula. See what it means for payroll compliance...", href: "/blog/payroll/minimum-wage/maine-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
