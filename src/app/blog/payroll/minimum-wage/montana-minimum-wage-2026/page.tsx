import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Montana Minimum Wage 2026: What Employers Owe | BEG',
  description: 'Montana minimum wage 2026 is $10.85 per hour, adjusted annually. See the small-business exception, overtime rule, and payroll compliance steps.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/montana-minimum-wage-2026' },
  openGraph: {
    title: 'Montana Minimum Wage 2026: What Employers Owe | BEG',
    description: 'Montana minimum wage 2026 is $10.85 per hour, adjusted annually. See the small-business exception, overtime rule, and payroll compliance steps.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/montana-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-montana-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Montana Minimum Wage 2026: What Employers Owe | BEG', description: 'Montana minimum wage 2026 is $10.85 per hour, adjusted annually. See the small-business exception, overtime rule, and payroll compliance steps.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-montana-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the Montana minimum wage in 2026?',
    answer: 'Montana sets its minimum wage at $10.85 per hour in 2026, above the federal minimum wage of $7.25.',
  },
  {
    question: 'Does the Montana minimum wage change every year?',
    answer: 'Yes. Montana adjusts its minimum wage annually by a statutory formula, so employers should check the current rate each year rather than assuming it stays flat.',
  },
  {
    question: 'Is there a lower minimum wage for small Montana businesses?',
    answer: 'Yes. A $4.00 rate is allowed for non-FLSA-covered businesses with gross annual sales of $110,000 or less. Most employers exceed this threshold or are covered by federal FLSA rules, so this exception applies narrowly.',
  },
  {
    question: 'What is the overtime rule in Montana?',
    answer: 'Montana follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Montana require paid sick leave?',
    answer: 'No. Montana does not have a state paid sick leave mandate or a state paid family and medical leave program.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-montana-minimum-wage-2026.webp", "headline": "Montana Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/montana-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Montana Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-montana-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The Montana minimum wage in 2026 is $10.85 per hour, above the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Montana adjusts its rate every year and carries a narrow small-business exception. Employers running payroll in Montana need to apply the right rate to the right business.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Montana Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Montana state minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$10.85</td>
              </tr>
              <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25</td>
              </tr>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Scheduled increase</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>Adjusted annually by formula</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Because Montana's rate resets every year by formula, employers should treat the $10.85 figure as valid only for 2026 and plan to re-verify it at the start of each subsequent year rather than assuming it stays constant.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Threshold in Montana</h2>

        <p>Montana allows a reduced $4.00 hourly rate for non-FLSA-covered businesses with gross annual sales of $110,000 or less. This exception applies narrowly. Most employers either exceed the sales threshold or are covered by federal FLSA rules, which set a higher effective floor. Do not apply the $4.00 rate without first confirming your business qualifies as non-FLSA-covered and falls under the sales threshold.</p>

        <p>This exception exists for a genuinely small slice of the Montana employer population. Any business engaged in interstate commerce, or meeting the FLSA's enterprise coverage tests, is bound by the higher federal-aligned standard regardless of its sales volume. Employers should document the basis for applying the $4.00 rate if they believe they qualify, since this is exactly the kind of edge case that draws scrutiny in a wage and hour audit.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Montana</h2>

        <p>Montana follows a weekly overtime standard. Nonexempt employees who work more than 40 hours in a workweek are owed 1.5x their regular rate of pay for every hour beyond 40.</p>

        <p>The regular rate calculation must reflect all non-discretionary compensation earned in the workweek, including shift differentials and non-discretionary bonuses, not just the posted hourly wage. This applies regardless of whether the employee is paid the standard $10.85 rate or the narrow $4.00 small-business rate discussed above.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Sick Leave and Paid Family Leave in Montana</h2>

        <p>Montana does not mandate paid sick leave and does not run a state paid family and medical leave program. Employers offering these benefits do so voluntarily.</p>

        <p>Without a state mandate to follow, Montana employers designing voluntary paid time off or sick leave policies have flexibility in structuring accrual rates, caps, and eligibility. That flexibility comes with a responsibility to apply the policy consistently once it is written, since inconsistent application of an otherwise voluntary benefit can still create legal exposure under general employment discrimination principles.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee wage rules and any local ordinances in Montana can vary and can change. Before running payroll for tipped staff, verify current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">U.S. DOL state labor office contacts directory</a>.</p>

        <p>As with the standard minimum wage, tipped wage figures in Montana are subject to the same annual formula adjustment, so any tip credit calculation should be re-verified each year rather than carried forward automatically.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>An annually adjusted wage rate combined with a narrow small-business exception creates real risk of misapplying the wrong rate to the wrong employee classification. Getting the annual rate update and the exception eligibility check right every year matters for Montana payroll accuracy.</p>

        <p>Employers who qualify for the small-business exception need extra care: applying the $4.00 rate to an employee who is actually covered by federal FLSA rules is a wage violation, even if the employer genuinely believed the exception applied.</p>

        <p>BEG runs payroll for Montana employers with the current annual wage rate and correct exception eligibility checks built into every run, all included in a single all-inclusive PEPM rate.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Montana Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/montana" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Montana Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/montana" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Montana HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/nebraska-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Nebraska Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Montana minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Montana sets its minimum wage at $10.85 per hour in 2026, above the federal minimum wage of $7.25."}},{"@type":"Question","name":"Does the Montana minimum wage change every year?","acceptedAnswer":{"@type":"Answer","text":"Yes. Montana adjusts its minimum wage annually by a statutory formula, so employers should check the current rate each year rather than assuming it stays flat."}},{"@type":"Question","name":"Is there a lower minimum wage for small Montana businesses?","acceptedAnswer":{"@type":"Answer","text":"Yes. A $4.00 rate is allowed for non-FLSA-covered businesses with gross annual sales of $110,000 or less. Most employers exceed this threshold or are covered by federal FLSA rules, so this exception applies narrowly."}},{"@type":"Question","name":"What is the overtime rule in Montana?","acceptedAnswer":{"@type":"Answer","text":"Montana follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Montana require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Montana does not have a state paid sick leave mandate or a state paid family and medical leave program."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Montana Minimum Wage 2026: What Employers Owe","description":"Montana minimum wage 2026 is $10.85 per hour, adjusted annually. See the small-business exception, overtime rule, and payroll compliance steps.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/montana-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/montana-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Montana Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/montana-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Nebraska Minimum Wage 2026: What Employers Owe", excerpt: "Nebraska minimum wage 2026 is $15.00 per hour. See the employer threshold, overtime rule, and payroll...", href: "/blog/payroll/minimum-wage/nebraska-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Per-Employee-Per-Month Means", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
