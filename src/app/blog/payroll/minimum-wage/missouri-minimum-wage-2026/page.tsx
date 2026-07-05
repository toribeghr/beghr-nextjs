import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Missouri Minimum Wage 2026: What Employers Owe | BEG',
  description: 'Missouri minimum wage 2026 is $15.00 per hour. See the overtime rule, sick leave status in flux, and what it means for payroll compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/missouri-minimum-wage-2026' },
  openGraph: {
    title: 'Missouri Minimum Wage 2026: What Employers Owe | BEG',
    description: 'Missouri minimum wage 2026 is $15.00 per hour. See the overtime rule, sick leave status in flux, and what it means for payroll compliance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/missouri-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Missouri Minimum Wage 2026: What Employers Owe | BEG', description: 'Missouri minimum wage 2026 is $15.00 per hour. See the overtime rule, sick leave status in flux, and what it means for payroll compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the Missouri minimum wage in 2026?',
    answer: 'Missouri sets its minimum wage at $15.00 per hour in 2026, above the federal minimum wage of $7.25.',
  },
  {
    question: 'What is the overtime rule in Missouri?',
    answer: 'Missouri follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Is paid sick leave required in Missouri?',
    answer: 'Missouri sick leave status is unsettled. Voter-approved sick leave rules were modified by the state legislature, so employers should verify the current requirement directly with the Missouri labor office before configuring payroll.',
  },
  {
    question: 'Does Missouri have a paid family and medical leave program?',
    answer: 'Missouri does not currently have a state paid family and medical leave program.',
  },
  {
    question: 'Should Missouri employers expect further minimum wage changes?',
    answer: 'Missouri wage and leave law has seen legislative activity recently. Employers should monitor the Missouri Department of Labor for updates rather than treating current rules as permanent.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Missouri Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/missouri-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Missouri Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Missouri minimum wage in 2026 is $15.00 per hour, above the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Missouri's wage rate is settled, but paid sick leave rules have been in legislative flux. Employers running payroll in Missouri need to watch both the rate and the state's evolving leave requirements.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Missouri Minimum Wage vs. Federal Minimum Wage</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Wage Floor</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Hourly Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Missouri state minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$15.00</td>
              </tr>
              <tr style={{ background: '#fff' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Unlike some neighboring states, Missouri's minimum wage is not currently on an annual adjustment formula tied to inflation, which means the $15.00 figure is a fixed reference point rather than a number that moves every January. Employers should still confirm this status periodically, since Missouri wage and leave law has already shown it can change through ballot initiatives and subsequent legislative action.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Missouri</h2>

        <p>Missouri follows a weekly overtime standard. Nonexempt employees who work more than 40 hours in a workweek are owed 1.5x their regular rate of pay for every hour beyond 40.</p>

        <p>As with other states following the standard federal-aligned overtime rule, the regular rate used for the calculation should reflect all non-discretionary compensation earned that week, not just the base hourly wage. Bonuses, shift differentials, and certain incentive pay all need to be folded into the regular rate before the 1.5x multiplier is applied.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Missouri Sick Leave: Status in Flux</h2>

        <p>Missouri voters approved paid sick leave rules, but the state legislature has since modified them. Because the current status of Missouri sick leave requirements is unsettled, employers should not rely on secondhand summaries. Verify the current requirement directly with the Missouri Department of Labor before configuring accrual, usage, or payroll deduction rules. Missouri does not currently have a state paid family and medical leave program.</p>

        <p>This kind of legislative back-and-forth creates a genuine operational challenge: a policy or payroll configuration built around the voter-approved version of the law could already be out of step with the legislature's modifications, and vice versa. Employers should treat any written summary of Missouri sick leave rules, including this one, as a starting point for verification rather than a final answer, and check directly with the state before finalizing payroll deductions or employee-facing policy language.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee wage calculations and any local minimum wage ordinances in Missouri can vary and can change alongside the broader legislative activity affecting the state's wage and leave rules. Before running payroll for tipped staff, verify current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">U.S. DOL state labor office contacts directory</a>.</p>

        <p>Given the pace of legislative change in Missouri recently, tipped wage and local ordinance details should be checked more frequently than in a state with a more stable legal environment. Relying on a rate or rule that was accurate a year ago carries more risk here than in most other states.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>A settled $15.00 wage floor paired with an unsettled sick leave mandate is a difficult combination to manage in-house. Configuring payroll around rules that could shift again puts employers at risk of being out of compliance the moment the legislature or courts act again.</p>

        <p>This is precisely the scenario where ongoing compliance monitoring matters more than a one-time setup. A payroll configuration that was correct when it was built can become non-compliant without any action on the employer's part, simply because the underlying law changed.</p>

        <p>Employers in industries with high hourly turnover, such as retail, hospitality, and warehousing, face the greatest exposure in Missouri right now, since these are the workforces most likely to be directly affected by whichever version of the sick leave rules ultimately prevails. Building flexibility into payroll processes, rather than hardcoding a single interpretation of the current rules, will make it easier to adapt if the requirement shifts again during the year.</p>

        <p>BEG runs payroll for Missouri employers with current wage rates applied correctly and compliance monitoring that catches legislative changes to sick leave and other requirements as they happen, all included in a single all-inclusive PEPM rate.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Missouri Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/missouri" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Missouri Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/missouri" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Missouri HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/mississippi-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Mississippi Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Missouri minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Missouri sets its minimum wage at $15.00 per hour in 2026, above the federal minimum wage of $7.25."}},{"@type":"Question","name":"What is the overtime rule in Missouri?","acceptedAnswer":{"@type":"Answer","text":"Missouri follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Is paid sick leave required in Missouri?","acceptedAnswer":{"@type":"Answer","text":"Missouri sick leave status is unsettled. Voter-approved sick leave rules were modified by the state legislature, so employers should verify the current requirement directly with the Missouri labor office before configuring payroll."}},{"@type":"Question","name":"Does Missouri have a paid family and medical leave program?","acceptedAnswer":{"@type":"Answer","text":"Missouri does not currently have a state paid family and medical leave program."}},{"@type":"Question","name":"Should Missouri employers expect further minimum wage changes?","acceptedAnswer":{"@type":"Answer","text":"Missouri wage and leave law has seen legislative activity recently. Employers should monitor the Missouri Department of Labor for updates rather than treating current rules as permanent."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Missouri Minimum Wage 2026: What Employers Owe","description":"Missouri minimum wage 2026 is $15.00 per hour. See the overtime rule, sick leave status in flux, and what it means for payroll compliance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/missouri-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/missouri-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Missouri Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/missouri-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Mississippi Minimum Wage 2026: What Employers Owe", excerpt: "Mississippi minimum wage 2026 is the federal $7.25 rate, no state minimum wage law. See the overtime...", href: "/blog/payroll/minimum-wage/mississippi-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Per-Employee-Per-Month Means", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
