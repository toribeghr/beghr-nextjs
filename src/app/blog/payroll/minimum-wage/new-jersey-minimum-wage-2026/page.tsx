import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Jersey Minimum Wage 2026: What Employers Owe | BEG',
  description: 'New Jersey minimum wage 2026 is $15.92 per hour, adjusted annually. See the small-employer rate, overtime rule, and payroll compliance steps.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/new-jersey-minimum-wage-2026' },
  openGraph: {
    title: 'New Jersey Minimum Wage 2026: What Employers Owe | BEG',
    description: 'New Jersey minimum wage 2026 is $15.92 per hour, adjusted annually. See the small-employer rate, overtime rule, and payroll compliance steps.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/new-jersey-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Jersey Minimum Wage 2026: What Employers Owe | BEG', description: 'New Jersey minimum wage 2026 is $15.92 per hour, adjusted annually. See the small-employer rate, overtime rule, and payroll compliance steps.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the New Jersey minimum wage in 2026?',
    answer: 'New Jersey sets its minimum wage at $15.92 per hour in 2026, above the federal minimum wage of $7.25.',
  },
  {
    question: 'Does the New Jersey minimum wage change every year?',
    answer: 'Yes. New Jersey adjusts its minimum wage annually by a statutory formula, so employers should check the current rate at the start of each year.',
  },
  {
    question: 'Is there a lower minimum wage for small New Jersey employers?',
    answer: 'Yes. A $15.23 rate applies to employers with fewer than 6 employees and to seasonal work. Larger and non-seasonal employers pay the standard $15.92 rate.',
  },
  {
    question: 'What is the overtime rule in New Jersey?',
    answer: 'New Jersey follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does New Jersey require paid sick leave and paid family leave?',
    answer: 'Yes. New Jersey requires paid sick leave and runs a state paid family and medical leave program funded through payroll contributions.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "New Jersey Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/new-jersey-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>New Jersey Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The New Jersey minimum wage in 2026 is $15.92 per hour, above the federal minimum wage of $7.25, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>New Jersey adjusts its rate annually and carries a separate rate for small and seasonal employers. Employers running payroll in New Jersey need to apply the right rate to the right workforce.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>New Jersey Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>New Jersey standard minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$15.92</td>
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

        <p>Because New Jersey's standard rate adjusts annually by formula, employers should re-verify the $15.92 figure at the start of each year rather than treating it as a permanent number carried forward from 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Rate in New Jersey</h2>

        <p>New Jersey sets a $15.23 rate for employers with fewer than 6 employees and for seasonal work. Employers should confirm their headcount and whether their work qualifies as seasonal before applying the reduced rate rather than the standard $15.92 rate.</p>

        <p>This distinction matters most for small businesses that grow during the year. An employer that starts the year with 5 employees and hires a sixth partway through moves out of the small-employer rate and into the standard rate at that point, which means payroll needs to reflect the change immediately rather than at the next scheduled wage review.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in New Jersey</h2>

        <p>New Jersey follows a weekly overtime standard. Nonexempt employees who work more than 40 hours in a workweek are owed 1.5x their regular rate of pay for every hour beyond 40.</p>

        <p>The regular rate calculation must include all non-discretionary compensation earned in the workweek, not just the base hourly wage, whether the employee is paid the standard rate or the small-employer and seasonal rate discussed above.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Paid Family Leave in New Jersey</h2>

        <p>New Jersey requires paid sick leave for employees and administers a state paid family and medical leave program funded through payroll contributions. Employers need both sick time accrual tracking and paid family leave contribution withholding and remittance built into payroll.</p>

        <p>These are two separate compliance tracks. Paid sick leave is typically accrued based on hours worked and administered directly by the employer. Paid family leave, by contrast, functions more like a payroll tax, with contributions calculated, withheld from wages, and remitted to the state on a defined schedule. Employers who treat these as a single combined leave benefit risk missing the contribution and remittance side of the paid family leave program entirely.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee wage calculations and any local ordinances in New Jersey can vary and can change. Before running payroll for tipped staff, verify current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">U.S. DOL state labor office contacts directory</a>.</p>

        <p>Tip credit reconciliation should happen every pay period against whichever wage rate applies to the specific employer, standard or small-employer and seasonal, since applying the wrong base rate compounds into an incorrect tip credit calculation as well.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>An annually adjusted wage rate, a separate small-employer and seasonal rate, mandatory paid sick leave, and a payroll-funded paid family leave program add up to significant compliance surface area for New Jersey employers. Applying the wrong rate to a small or seasonal workforce, or missing a paid family leave contribution, creates direct financial exposure.</p>

        <p>For multi-state employers, New Jersey's combination of a dual wage rate structure and payroll-funded leave contributions needs to be tracked separately from whatever rules apply in other states where the business operates.</p>

        <p>BEG runs payroll for New Jersey employers with correct standard and small-employer wage rates, weekly overtime calculations, and both paid sick leave and paid family leave contributions handled on every run, all included in a single all-inclusive PEPM rate.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>New Jersey Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/new-jersey" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New Jersey Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/new-jersey" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New Jersey HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/nevada-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Nevada Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the New Jersey minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"New Jersey sets its minimum wage at $15.92 per hour in 2026, above the federal minimum wage of $7.25."}},{"@type":"Question","name":"Does the New Jersey minimum wage change every year?","acceptedAnswer":{"@type":"Answer","text":"Yes. New Jersey adjusts its minimum wage annually by a statutory formula, so employers should check the current rate at the start of each year."}},{"@type":"Question","name":"Is there a lower minimum wage for small New Jersey employers?","acceptedAnswer":{"@type":"Answer","text":"Yes. A $15.23 rate applies to employers with fewer than 6 employees and to seasonal work. Larger and non-seasonal employers pay the standard $15.92 rate."}},{"@type":"Question","name":"What is the overtime rule in New Jersey?","acceptedAnswer":{"@type":"Answer","text":"New Jersey follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does New Jersey require paid sick leave and paid family leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. New Jersey requires paid sick leave and runs a state paid family and medical leave program funded through payroll contributions."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"New Jersey Minimum Wage 2026: What Employers Owe","description":"New Jersey minimum wage 2026 is $15.92 per hour, adjusted annually. See the small-employer rate, overtime rule, and payroll compliance steps.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/new-jersey-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/new-jersey-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"New Jersey Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/new-jersey-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Nevada Minimum Wage 2026: What Employers Owe", excerpt: "Nevada minimum wage 2026 is $12.00 per hour. See the daily overtime trigger, large-employer paid...", href: "/blog/payroll/minimum-wage/nevada-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Per-Employee-Per-Month Means", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
