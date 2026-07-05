import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Minimum Wage 2026: What Changed | BEG',
  description: 'Florida minimum wage 2026 is $14.00 per hour, rising to $15.00 on September 30, 2026. Overtime rules and payroll compliance for Florida employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/florida-minimum-wage-2026' },
  openGraph: {
    title: 'Florida Minimum Wage 2026: What Changed | BEG',
    description: 'Florida minimum wage 2026 is $14.00 per hour, rising to $15.00 on September 30, 2026. Overtime rules and payroll compliance for Florida employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/florida-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Florida Minimum Wage 2026: What Changed | BEG', description: 'Florida minimum wage 2026 is $14.00 per hour, rising to $15.00 on September 30, 2026. Overtime rules and payroll compliance for Florida employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Florida in 2026?',
    answer: 'Florida’s minimum wage is $14.00 per hour for most of 2026, rising to $15.00 on September 30, 2026 under the state’s constitutional amendment schedule, per the U.S. Department of Labor.',
  },
  {
    question: 'Why does Florida’s minimum wage increase mid-year?',
    answer: 'Florida’s minimum wage schedule was set by a voter-approved constitutional amendment that increases the rate each September 30 until it reaches $15.00, then adjusts for inflation.',
  },
  {
    question: 'What overtime rules apply in Florida?',
    answer: 'Florida follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek. Florida has no separate state overtime law.',
  },
  {
    question: 'Does Florida require paid sick leave?',
    answer: 'No. Florida does not mandate paid sick leave or a state paid family and medical leave program.',
  },
  {
    question: 'How should Florida employers prepare for the September 2026 increase?',
    answer: 'Employers should update payroll systems ahead of September 30, 2026 to apply the $15.00 rate on time and avoid underpayment claims.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Florida Minimum Wage 2026: What Changed", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/florida-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Florida Minimum Wage 2026: What Changed</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Florida's 2026 minimum wage is $14.00 per hour, rising to $15.00 on September 30, 2026 under the state's constitutional amendment schedule, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Florida is one of a handful of states with a scheduled mid-year rate increase, which means payroll systems need to update automatically on September 30 rather than at the start of the calendar year.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Florida Minimum Wage Rate Table</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Jurisdiction / Date</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Minimum Wage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Florida (through September 29, 2026)', '$14.00'],
                ['Florida (effective September 30, 2026)', '$15.00'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Florida</h2>

        <p>Florida has no separate state overtime law and follows federal FLSA rules. Non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek, with no daily overtime trigger.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Florida does not require paid sick leave, and there is no state paid family and medical leave (PFML) program. Employers offering these benefits do so voluntarily.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Florida allows a tip credit against the state minimum wage, and the tip credit amount adjusts as the underlying minimum wage rises. Confirm current tipped-wage rates and any local ordinance questions with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a>, particularly around the September 30 increase.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Florida's scheduled September 30 increase to $15.00 is easy to miss if payroll updates are handled manually only at the start of the year. Multi-state employers juggling several states' effective dates and rate schedules face real risk of underpayment, especially for tipped employees where the credit calculation also shifts.</p>

        <p>BEG's managed payroll service tracks Florida's scheduled increase and applies the correct rate automatically on September 30, alongside every other state where you have employees.</p>

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
            <a href="/services/managed-payroll/florida" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Florida Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/florida" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Florida HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/georgia-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Georgia Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Florida in 2026?","acceptedAnswer":{"@type":"Answer","text":"Florida's minimum wage is $14.00 per hour for most of 2026, rising to $15.00 on September 30, 2026 under the state's constitutional amendment schedule, per the U.S. Department of Labor."}},{"@type":"Question","name":"Why does Florida's minimum wage increase mid-year?","acceptedAnswer":{"@type":"Answer","text":"Florida's minimum wage schedule was set by a voter-approved constitutional amendment that increases the rate each September 30 until it reaches $15.00, then adjusts for inflation."}},{"@type":"Question","name":"What overtime rules apply in Florida?","acceptedAnswer":{"@type":"Answer","text":"Florida follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek. Florida has no separate state overtime law."}},{"@type":"Question","name":"Does Florida require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Florida does not mandate paid sick leave or a state paid family and medical leave program."}},{"@type":"Question","name":"How should Florida employers prepare for the September 2026 increase?","acceptedAnswer":{"@type":"Answer","text":"Employers should update payroll systems ahead of September 30, 2026 to apply the $15.00 rate on time and avoid underpayment claims."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Florida Minimum Wage 2026: What Changed","description":"Florida minimum wage 2026 is $14.00 per hour, rising to $15.00 on September 30, 2026. Overtime rules and payroll compliance for Florida employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/florida-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/florida-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Florida Minimum Wage 2026: What Changed","item":"https://www.beghr.com/blog/payroll/minimum-wage/florida-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Georgia Minimum Wage 2026: Rates & Rules", excerpt: "Georgia's 2026 minimum wage defaults to the federal $7.25 rate. Rates, overtime rules, and payroll compliance for Georgia employers...", href: "/blog/payroll/minimum-wage/georgia-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
