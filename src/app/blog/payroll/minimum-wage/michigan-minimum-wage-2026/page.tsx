import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Michigan Minimum Wage 2026: What Employers Owe | BEG',
  description: 'Michigan minimum wage 2026 is $13.73 per hour, rising to $15.00 in 2027. See the overtime rule, employer thresholds, and payroll compliance steps.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/michigan-minimum-wage-2026' },
  openGraph: {
    title: 'Michigan Minimum Wage 2026: What Employers Owe | BEG',
    description: 'Michigan minimum wage 2026 is $13.73 per hour, rising to $15.00 in 2027. See the overtime rule, employer thresholds, and payroll compliance steps.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/michigan-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Michigan Minimum Wage 2026: What Employers Owe | BEG', description: 'Michigan minimum wage 2026 is $13.73 per hour, rising to $15.00 in 2027. See the overtime rule, employer thresholds, and payroll compliance steps.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the Michigan minimum wage in 2026?',
    answer: 'Michigan sets its minimum wage at $13.73 per hour in 2026, above the federal minimum wage of $7.25.',
  },
  {
    question: 'Is the Michigan minimum wage scheduled to increase?',
    answer: 'Yes. Michigan is scheduled to reach $15.00 per hour on January 1, 2027, with formula-based adjustments after that.',
  },
  {
    question: 'What is the overtime rule in Michigan?',
    answer: 'Michigan follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Michigan minimum wage law apply to every employer?',
    answer: 'Michigan minimum wage law applies to employers with 2 or more employees. Smaller employers should still confirm current applicability with the state.',
  },
  {
    question: 'Does Michigan require paid sick leave?',
    answer: 'Yes. Michigan requires paid sick leave under state law. Confirm current accrual and usage requirements before setting up payroll deductions and tracking.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Michigan Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/michigan-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Michigan Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Michigan minimum wage in 2026 is $13.73 per hour, above the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Michigan's rate is also on a defined path upward. Employers running payroll in Michigan need to track both today's rate and the scheduled increase ahead.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Michigan Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Michigan state minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$13.73</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25</td>
              </tr>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Scheduled increase</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$15.00 on January 1, 2027, then formula-adjusted</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Employers should not wait until January 1, 2027 to prepare. Payroll systems, offer letters, and pay tables that reference "current Michigan minimum wage" without a build-in review process risk quietly underpaying employees the moment the new rate takes effect. Reviewing wage tables against the state's published schedule at least once per quarter is the safer practice.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Michigan</h2>

        <p>Michigan follows a weekly overtime standard. Nonexempt employees who work more than 40 hours in a workweek are owed 1.5x their regular rate of pay for every hour beyond 40.</p>

        <p>The regular rate calculation should include all non-discretionary compensation, not just the base hourly wage. Shift differentials, non-discretionary bonuses, and certain incentive pay all factor into the regular rate used to compute overtime. Employers who calculate overtime strictly off the posted hourly rate, while ignoring other compensation paid in the same workweek, risk underpaying overtime even when the base rate itself is correct.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Which Employers Does Michigan Minimum Wage Law Cover</h2>

        <p>Michigan's minimum wage law applies to employers with 2 or more employees. This threshold is broad enough to capture nearly every small business, so most Michigan employers should assume state minimum wage rules apply to their payroll.</p>

        <p>Because the threshold sits so low, exemptions are the exception rather than the rule in Michigan. Employers opening a new location, adding a first part-time hire, or converting from a sole proprietorship to an entity with employees should assume state minimum wage coverage applies from the moment they cross the 2-employee mark, rather than treating it as a distant compliance concern.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave in Michigan</h2>

        <p>Michigan requires paid sick leave under state law. Employers need accrual tracking, usage caps, and carryover rules configured correctly in payroll to stay compliant.</p>

        <p>Sick leave accrual is typically tied to hours actually worked, which means part-time and seasonal employees accrue leave at a different pace than full-time staff. A payroll system that applies a flat accrual rate across the entire workforce, regardless of hours worked, will misstate available balances for anyone working fewer than a standard full-time schedule. Carryover rules add another layer: unused balances that should roll into the next year but get zeroed out at year-end create an easily documented compliance gap if an employee later requests leave.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee wage calculations differ from the standard minimum wage and are subject to change. Before finalizing payroll for tipped staff, verify current tipped wage rates and any applicable local ordinance through the <a href="https://www.dol.gov/agencies/whd/state/contacts">U.S. DOL state labor office contacts directory</a>.</p>

        <p>Tip credit reconciliation should happen every pay period, not just at year-end. If a tipped employee's cash wage plus tips falls short of the full state minimum wage in any given week, the employer owes the shortfall for that week. Deferring this check to an annual review means back pay can accumulate for months before anyone catches the gap.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>A rising wage floor, a 2-employee applicability threshold, and mandatory paid sick leave accrual mean Michigan payroll has more compliance surface area than a flat federal-minimum state. Getting the January 2027 step-up built into your payroll system now avoids a scramble later.</p>

        <p>For employers with operations in multiple states, Michigan's combination of a scheduled wage increase and mandatory sick leave accrual needs to be tracked independently from whatever rules apply elsewhere. A payroll process built around a single national wage table will not catch Michigan-specific requirements.</p>

        <p>BEG runs payroll for Michigan employers with current and scheduled minimum wage rates, weekly overtime calculations, and paid sick leave accrual tracking built into every run, all included in a single all-inclusive PEPM rate.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Michigan Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/michigan" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Michigan Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/michigan" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Michigan HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/minnesota-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Minnesota Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Michigan minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Michigan sets its minimum wage at $13.73 per hour in 2026, above the federal minimum wage of $7.25."}},{"@type":"Question","name":"Is the Michigan minimum wage scheduled to increase?","acceptedAnswer":{"@type":"Answer","text":"Yes. Michigan is scheduled to reach $15.00 per hour on January 1, 2027, with formula-based adjustments after that."}},{"@type":"Question","name":"What is the overtime rule in Michigan?","acceptedAnswer":{"@type":"Answer","text":"Michigan follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Michigan minimum wage law apply to every employer?","acceptedAnswer":{"@type":"Answer","text":"Michigan minimum wage law applies to employers with 2 or more employees. Smaller employers should still confirm current applicability with the state."}},{"@type":"Question","name":"Does Michigan require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Michigan requires paid sick leave under state law. Confirm current accrual and usage requirements before setting up payroll deductions and tracking."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Michigan Minimum Wage 2026: What Employers Owe","description":"Michigan minimum wage 2026 is $13.73 per hour, rising to $15.00 in 2027. See the overtime rule, employer thresholds, and payroll compliance steps.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/michigan-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/michigan-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Michigan Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/michigan-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Minnesota Minimum Wage 2026: What Employers Owe", excerpt: "Minnesota minimum wage 2026 is $11.41 per hour. See the overtime rule, sick and paid leave requirements...", href: "/blog/payroll/minimum-wage/minnesota-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Per-Employee-Per-Month Means", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
