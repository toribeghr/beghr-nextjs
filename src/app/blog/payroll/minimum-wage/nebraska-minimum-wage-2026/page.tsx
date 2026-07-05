import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nebraska Minimum Wage 2026: What Employers Owe | BEG',
  description: 'Nebraska minimum wage 2026 is $15.00 per hour. See the employer threshold, new paid sick leave law, and what it means for payroll compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/nebraska-minimum-wage-2026' },
  openGraph: {
    title: 'Nebraska Minimum Wage 2026: What Employers Owe | BEG',
    description: 'Nebraska minimum wage 2026 is $15.00 per hour. See the employer threshold, new paid sick leave law, and what it means for payroll compliance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/nebraska-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Nebraska Minimum Wage 2026: What Employers Owe | BEG', description: 'Nebraska minimum wage 2026 is $15.00 per hour. See the employer threshold, new paid sick leave law, and what it means for payroll compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the Nebraska minimum wage in 2026?',
    answer: 'Nebraska sets its minimum wage at $15.00 per hour in 2026, above the federal minimum wage of $7.25.',
  },
  {
    question: 'Does Nebraska minimum wage law apply to every employer?',
    answer: 'Nebraska minimum wage law applies to employers with 4 or more employees. Employers below that threshold should confirm current applicability with the state.',
  },
  {
    question: 'What is the overtime rule in Nebraska?',
    answer: 'Nebraska follows federal FLSA overtime rules: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Nebraska require paid sick leave?',
    answer: 'Yes. A voter-approved paid sick leave law recently took effect in Nebraska. Employers should verify current accrual and usage details directly with the state before finalizing payroll deductions.',
  },
  {
    question: 'Does Nebraska have a paid family and medical leave program?',
    answer: 'No. Nebraska does not currently have a state paid family and medical leave program.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Nebraska Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/nebraska-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Nebraska Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Nebraska minimum wage in 2026 is $15.00 per hour, above the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Nebraska recently added a voter-approved paid sick leave requirement on top of its existing wage floor. Employers running payroll in Nebraska need both pieces configured correctly.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Nebraska Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Nebraska state minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$15.00</td>
              </tr>
              <tr style={{ background: '#fff' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Which Employers Does Nebraska Minimum Wage Law Cover</h2>

        <p>Nebraska's minimum wage law applies to employers with 4 or more employees. Smaller employers should confirm current applicability directly with the state rather than assuming exemption.</p>

        <p>Employers hovering near the 4-employee line should pay particular attention during growth periods. A business that adds a fourth employee mid-year moves into coverage immediately, not at the next calendar year or the next open enrollment period, which means payroll needs to reflect the state minimum wage from that employee's very first paycheck under the new headcount.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Nebraska</h2>

        <p>Nebraska follows federal FLSA overtime rules. Nonexempt employees who work more than 40 hours in a workweek are owed 1.5x their regular rate of pay for every hour beyond 40.</p>

        <p>As with other federal FLSA states, the regular rate used for overtime must include all non-discretionary compensation, not just the base hourly wage. Shift differentials, non-discretionary bonuses, and certain incentive pay all need to be included before the overtime multiplier is applied.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Nebraska's New Paid Sick Leave Law</h2>

        <p>A voter-approved paid sick leave law recently took effect in Nebraska. Because this is a new requirement, employers should verify current accrual rates, usage rules, and covered reasons directly with the state before setting up payroll deductions and tracking. Nebraska does not currently have a state paid family and medical leave program.</p>

        <p>New paid sick leave laws are a common source of first-year compliance gaps, since neither employers nor payroll systems have had the chance to work through a full accrual and usage cycle yet. Employers should build in extra review time during the first year this law is in effect, rather than assuming a payroll vendor's default configuration is automatically correct for Nebraska's specific accrual formula and covered-use definitions.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee wage rules and any local ordinances in Nebraska can vary and can change. Before running payroll for tipped staff, verify current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">U.S. DOL state labor office contacts directory</a>.</p>

        <p>Tip credit reconciliation should happen every pay period. If a tipped employee's cash wage plus reported tips does not reach the full state minimum wage in a given week, the employer owes the shortfall for that specific week.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>A $15.00 wage floor, a 4-employee applicability threshold, and a brand-new paid sick leave law create several places where payroll can go wrong at once, especially for employers who have not run payroll under the new sick leave requirement before.</p>

        <p>Employers growing past the 4-employee threshold mid-year face a compounding risk: onboarding a new hire while simultaneously triggering state minimum wage coverage for the first time is exactly the kind of transition where manual payroll processes miss a step.</p>

        <p>Employers with a multi-state footprint should also avoid applying Nebraska's specific sick leave accrual rules to employees working in other states, or vice versa. Each state's sick leave law, where one exists, has its own accrual formula, usage rules, and covered reasons, and Nebraska's new law should be tracked as its own distinct compliance obligation rather than folded into a generic company-wide policy.</p>

        <p>BEG runs payroll for Nebraska employers with current wage rates, correct overtime calculations, and the new paid sick leave law tracked and applied correctly on every run, all included in a single all-inclusive PEPM rate.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Nebraska Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/nebraska" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Nebraska Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/nebraska" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Nebraska HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/montana-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Montana Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Nebraska minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Nebraska sets its minimum wage at $15.00 per hour in 2026, above the federal minimum wage of $7.25."}},{"@type":"Question","name":"Does Nebraska minimum wage law apply to every employer?","acceptedAnswer":{"@type":"Answer","text":"Nebraska minimum wage law applies to employers with 4 or more employees. Employers below that threshold should confirm current applicability with the state."}},{"@type":"Question","name":"What is the overtime rule in Nebraska?","acceptedAnswer":{"@type":"Answer","text":"Nebraska follows federal FLSA overtime rules: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Nebraska require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. A voter-approved paid sick leave law recently took effect in Nebraska. Employers should verify current accrual and usage details directly with the state before finalizing payroll deductions."}},{"@type":"Question","name":"Does Nebraska have a paid family and medical leave program?","acceptedAnswer":{"@type":"Answer","text":"No. Nebraska does not currently have a state paid family and medical leave program."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Nebraska Minimum Wage 2026: What Employers Owe","description":"Nebraska minimum wage 2026 is $15.00 per hour. See the employer threshold, new paid sick leave law, and what it means for payroll compliance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/nebraska-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/nebraska-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Nebraska Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/nebraska-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Montana Minimum Wage 2026: What Employers Owe", excerpt: "Montana minimum wage 2026 is $10.85 per hour, adjusted annually. See the small-business exception...", href: "/blog/payroll/minimum-wage/montana-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Per-Employee-Per-Month Means", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
