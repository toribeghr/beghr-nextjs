import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Minimum Wage 2026: What Employers Must Know | BEG',
  description: 'Illinois minimum wage 2026 is $15.00 per hour. See overtime rules, paid leave requirements, and what it means for payroll compliance this year.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/illinois-minimum-wage-2026' },
  openGraph: {
    title: 'Illinois Minimum Wage 2026: What Employers Must Know | BEG',
    description: 'Illinois minimum wage 2026 is $15.00 per hour. See overtime rules, paid leave requirements, and what it means for payroll compliance this year.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/illinois-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Illinois Minimum Wage 2026: What Employers Must Know | BEG', description: 'Illinois minimum wage 2026 is $15.00 per hour. See overtime rules, paid leave requirements, and what it means for payroll compliance this year.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Illinois in 2026?',
    answer: 'The Illinois minimum wage is $15.00 per hour in 2026, well above the federal minimum wage of $7.25. Employers should confirm current rates directly with the state labor office.',
  },
  {
    question: 'Does Illinois require overtime pay?',
    answer: 'Yes. Illinois calculates overtime on a weekly basis, requiring 1.5 times the regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Which employers must comply with Illinois minimum wage law?',
    answer: 'Illinois minimum wage law applies to employers of 4 or more employees, with family members generally excluded from that headcount. Smaller employers should verify their specific obligations with the state.',
  },
  {
    question: 'Does Illinois require paid leave?',
    answer: 'Yes. Illinois has a Paid Leave for All Workers law that lets employees use accrued leave for any reason, not just illness. This is separate from a state paid family and medical leave insurance program.',
  },
  {
    question: 'How does BEG help with Illinois payroll compliance?',
    answer: 'BEG manages payroll at $25-$45 PEPM, all-inclusive, covering Illinois wage compliance, overtime, and paid leave tracking as part of a flat monthly rate with no per-run add-ons.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Illinois Minimum Wage 2026: What Employers Must Know", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/illinois-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Illinois Minimum Wage 2026: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Illinois minimum wage in 2026 is $15.00 per hour, more than double the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>For Illinois employers, that rate interacts with overtime rules, a specific employer-size threshold, and the state's Paid Leave for All Workers law. This guide covers what employers need for payroll compliance in 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Illinois Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Illinois</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$15.00/hour</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal (FLSA)</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25/hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Illinois employers must pay the higher of the two rates. Since the state minimum exceeds the federal rate, $15.00 per hour applies to covered employees statewide.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Illinois</h2>

        <p>Illinois calculates overtime on a weekly basis: nonexempt employees are owed 1.5 times their regular rate for hours worked over 40 in a workweek. There is no daily overtime requirement under Illinois law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Threshold</h2>

        <p>Illinois minimum wage law applies to employers of 4 or more employees, with family members generally excluded from that headcount for purposes of the threshold. Employers near this size should confirm their specific coverage status with the Illinois labor office, since misclassifying employer size can create compliance exposure.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Leave Requirements</h2>

        <p>Illinois requires Paid Leave for All Workers, which allows employees to use accrued leave for any reason, not only illness. This is a broader entitlement than a typical paid sick leave law and should be tracked separately in payroll and time-off systems. Illinois does not currently operate a state paid family and medical leave insurance program.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee pay rules, along with any city-level wage ordinances such as those in Chicago, can affect the total amount employees must be paid. Because these rules change and vary by locality, employers should confirm current tipped-wage credit amounts and local requirements at the <a href="https://www.dol.gov/agencies/whd/state/contacts">Department of Labor state contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Illinois payroll compliance means tracking the state minimum wage, the employer-size threshold, overtime, and the Paid Leave for All Workers accrual rules simultaneously, all while watching for city-level ordinances that can raise the bar further.</p>

        <p>BEG's managed payroll service builds Illinois' wage floor, overtime rules, and paid leave accrual tracking directly into your payroll configuration, closing out each pay cycle without manual rule-checking.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Illinois Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your Illinois business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <p>Learn more about <a href="/services/managed-payroll/illinois">managed payroll in Illinois</a> or <a href="/services/hr-outsourcing/illinois">HR outsourcing in Illinois</a> to see how BEG supports compliance beyond the pay run.</p>

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
            <a href="/services/managed-payroll/illinois" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Illinois Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/illinois" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Illinois HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Illinois in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Illinois minimum wage is $15.00 per hour in 2026, well above the federal minimum wage of $7.25. Employers should confirm current rates directly with the state labor office."}},{"@type":"Question","name":"Does Illinois require overtime pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Illinois calculates overtime on a weekly basis, requiring 1.5 times the regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Which employers must comply with Illinois minimum wage law?","acceptedAnswer":{"@type":"Answer","text":"Illinois minimum wage law applies to employers of 4 or more employees, with family members generally excluded from that headcount. Smaller employers should verify their specific obligations with the state."}},{"@type":"Question","name":"Does Illinois require paid leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Illinois has a Paid Leave for All Workers law that lets employees use accrued leave for any reason, not just illness. This is separate from a state paid family and medical leave insurance program."}},{"@type":"Question","name":"How does BEG help with Illinois payroll compliance?","acceptedAnswer":{"@type":"Answer","text":"BEG manages payroll at $25-$45 PEPM, all-inclusive, covering Illinois wage compliance, overtime, and paid leave tracking as part of a flat monthly rate with no per-run add-ons."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Illinois Minimum Wage 2026: What Employers Must Know","description":"Illinois minimum wage 2026 is $15.00 per hour. See overtime rules, paid leave requirements, and what it means for payroll compliance this year.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/illinois-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/illinois-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Illinois Minimum Wage 2026: What Employers Must Know","item":"https://www.beghr.com/blog/payroll/minimum-wage/illinois-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Indiana Minimum Wage 2026: What Employers Must Know", excerpt: "Indiana's 2026 minimum wage still tracks the federal rate. See overtime rules and what it means for payroll compliance...", href: "/blog/payroll/minimum-wage/indiana-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
