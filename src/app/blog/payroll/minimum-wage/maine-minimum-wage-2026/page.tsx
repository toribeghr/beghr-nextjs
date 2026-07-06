import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maine Minimum Wage 2026: What Employers Must Know | BEG',
  description: 'Maine minimum wage 2026 is $15.10 per hour. See overtime rules, earned paid leave, and what it means for payroll compliance this year.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/maine-minimum-wage-2026' },
  openGraph: {
    title: 'Maine Minimum Wage 2026: What Employers Must Know | BEG',
    description: 'Maine minimum wage 2026 is $15.10 per hour. See overtime rules, earned paid leave, and what it means for payroll compliance this year.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/maine-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-maine-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Maine Minimum Wage 2026: What Employers Must Know | BEG', description: 'Maine minimum wage 2026 is $15.10 per hour. See overtime rules, earned paid leave, and what it means for payroll compliance this year.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-maine-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Maine in 2026?',
    answer: 'The Maine minimum wage is $15.10 per hour in 2026, well above the federal minimum wage of $7.25. Maine adjusts its minimum wage annually by formula, so employers should confirm the current rate each year.',
  },
  {
    question: 'Does Maine require overtime pay?',
    answer: 'Yes. Maine calculates overtime on a weekly basis, requiring 1.5 times the regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Maine adjust its minimum wage every year?',
    answer: 'Yes. Maine minimum wage is adjusted annually using a set formula, which typically ties increases to a cost-of-living measure. Employers should verify the current rate at the start of each year rather than assuming it carries over.',
  },
  {
    question: 'Does Maine require paid leave?',
    answer: 'Yes. Maine requires earned paid leave that employees can use for any reason, not just illness. This is broader than a typical sick leave law and should be tracked in payroll and time-off systems.',
  },
  {
    question: 'How does BEG help with Maine payroll compliance?',
    answer: 'BEG manages payroll at $25-$45 PEPM, all-inclusive, covering Maine annually adjusted wage rate, overtime, and earned paid leave tracking as part of a flat monthly rate.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-maine-minimum-wage-2026.webp", "headline": "Maine Minimum Wage 2026: What Employers Must Know", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/maine-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Maine Minimum Wage 2026: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-maine-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Maine minimum wage in 2026 is $15.10 per hour, more than double the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Maine adjusts its minimum wage every year by formula, which means the rate that applied last year may not apply this year. This guide covers the current rate, overtime rules, and what Maine employers need for payroll compliance in 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Maine Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Maine</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$15.10/hour</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
              <tr style={{ background: '#fff7ec', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Scheduled Change</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>Adjusted annually by formula</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Maine employers must pay the higher of the two rates. Because Maine's rate is adjusted annually, employers should verify the current figure with the state at the start of each year rather than relying on last year's number.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Maine</h2>

        <p>Maine calculates overtime on a weekly basis: nonexempt employees are owed 1.5 times their regular rate for hours worked over 40 in a workweek. There is no daily overtime requirement under Maine law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Earned Paid Leave and Family Leave in Maine</h2>

        <p>Maine requires earned paid leave that employees can use for any reason, not only illness, which is a broader entitlement than a standard sick leave law. Maine also has a state paid family and medical leave framework. Both require careful tracking in payroll and time-off systems, and specific contribution and eligibility details should be confirmed with the state since program details can change.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee pay rules can affect the total compensation owed on top of the base minimum wage, and local ordinances may add further requirements. Because these rules change, employers should confirm current tipped-wage credit amounts at the <a href="https://www.dol.gov/agencies/whd/state/contacts">Department of Labor state contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>An annually adjusted minimum wage combined with earned paid leave and paid family leave programs makes Maine one of the more complex states for manual payroll administration. Missing an annual wage adjustment or a leave accrual update creates real compliance exposure.</p>

        <p>BEG's managed payroll service builds Maine's current wage rate, overtime rules, and leave tracking directly into your payroll configuration, so annual formula updates do not slip through the cracks.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Maine Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your Maine business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <p>Learn more about <a href="/services/managed-payroll/maine">managed payroll in Maine</a> or <a href="/services/hr-outsourcing/maine">HR outsourcing in Maine</a> to see how BEG supports compliance beyond the pay run.</p>

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
            <a href="/services/managed-payroll/maine" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Maine Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/maine" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Maine HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Maine in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Maine minimum wage is $15.10 per hour in 2026, well above the federal minimum wage of $7.25. Maine adjusts its minimum wage annually by formula, so employers should confirm the current rate each year."}},{"@type":"Question","name":"Does Maine require overtime pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Maine calculates overtime on a weekly basis, requiring 1.5 times the regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Maine adjust its minimum wage every year?","acceptedAnswer":{"@type":"Answer","text":"Yes. Maine's minimum wage is adjusted annually using a set formula, which typically ties increases to a cost-of-living measure. Employers should verify the current rate at the start of each year rather than assuming it carries over."}},{"@type":"Question","name":"Does Maine require paid leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Maine requires earned paid leave that employees can use for any reason, not just illness. This is broader than a typical sick leave law and should be tracked in payroll and time-off systems."}},{"@type":"Question","name":"How does BEG help with Maine payroll compliance?","acceptedAnswer":{"@type":"Answer","text":"BEG manages payroll at $25-$45 PEPM, all-inclusive, covering Maine's annually adjusted wage rate, overtime, and earned paid leave tracking as part of a flat monthly rate."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Maine Minimum Wage 2026: What Employers Must Know","description":"Maine minimum wage 2026 is $15.10 per hour. See overtime rules, earned paid leave, and what it means for payroll compliance this year.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/maine-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/maine-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Maine Minimum Wage 2026: What Employers Must Know","item":"https://www.beghr.com/blog/payroll/minimum-wage/maine-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Maryland Minimum Wage 2026: What Employers Must Know", excerpt: "Maryland's 2026 minimum wage and FAMLI paid leave program. See what it means for payroll compliance...", href: "/blog/payroll/minimum-wage/maryland-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
