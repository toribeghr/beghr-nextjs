import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Hampshire Minimum Wage 2026: What Employers Owe | BEG',
  description: 'New Hampshire minimum wage 2026 is the federal $7.25 rate. See the overtime rule, voluntary paid leave plan, and what it means for payroll compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/new-hampshire-minimum-wage-2026' },
  openGraph: {
    title: 'New Hampshire Minimum Wage 2026: What Employers Owe | BEG',
    description: 'New Hampshire minimum wage 2026 is the federal $7.25 rate. See the overtime rule, voluntary paid leave plan, and what it means for payroll compliance.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/new-hampshire-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Hampshire Minimum Wage 2026: What Employers Owe | BEG', description: 'New Hampshire minimum wage 2026 is the federal $7.25 rate. See the overtime rule, voluntary paid leave plan, and what it means for payroll compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the New Hampshire minimum wage in 2026?',
    answer: 'New Hampshire follows the federal minimum wage of $7.25 per hour in 2026.',
  },
  {
    question: 'What is the overtime rule in New Hampshire?',
    answer: 'New Hampshire follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does New Hampshire require paid sick leave?',
    answer: 'No. New Hampshire does not have a state paid sick leave mandate.',
  },
  {
    question: 'Does New Hampshire have a paid family leave program?',
    answer: 'New Hampshire offers a voluntary state paid family leave plan. Participation is not automatically required of employers, so confirm current enrollment mechanics before assuming coverage.',
  },
  {
    question: 'Are there city minimum wage ordinances in New Hampshire?',
    answer: 'Confirm current local ordinance status directly with the U.S. DOL state contacts directory, since local rules can be adopted or changed independent of state law.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "New Hampshire Minimum Wage 2026: What Employers Owe", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/new-hampshire-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>New Hampshire Minimum Wage 2026: What Employers Owe</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>The New Hampshire minimum wage in 2026 is the federal rate of $7.25 per hour, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>New Hampshire keeps its wage floor at the federal minimum but offers a voluntary paid family leave option. Here is what employers running payroll in New Hampshire need to know for 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>New Hampshire Minimum Wage vs. Federal Minimum Wage</h2>

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
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>New Hampshire minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25</td>
              </tr>
              <tr style={{ background: '#fff' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Federal minimum wage</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$7.25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>New Hampshire has not set its own minimum wage above the federal rate, so employers should not assume a state-specific number applies. The federal $7.25 rate is the operative wage floor.</p>

        <p>Because there is no state minimum wage statute layered on top of the federal number, any future change to New Hampshire's wage floor would have to come from a change in the federal minimum wage itself, absent new state legislation. Employers should still monitor for state-level developments rather than assuming the current arrangement is permanent.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in New Hampshire</h2>

        <p>New Hampshire follows a weekly overtime standard. Nonexempt employees who work more than 40 hours in a workweek are owed 1.5x their regular rate of pay for every hour beyond 40.</p>

        <p>The regular rate used for this calculation must include all non-discretionary compensation earned during the workweek, not just the base hourly wage. Employers who calculate overtime off base pay alone, while an employee also earns a shift differential or non-discretionary bonus in the same week, risk underpaying overtime even when the hourly rate itself is correctly set at or above $7.25.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Voluntary Paid Family Leave in New Hampshire</h2>

        <p>New Hampshire does not mandate paid sick leave, but it does offer a voluntary state paid family leave plan. Because participation is voluntary rather than required, employers should confirm current enrollment mechanics and whether they have opted in before assuming any paid family leave coverage applies to their payroll.</p>

        <p>Voluntary programs create a specific payroll risk: an employer that enrolls in the plan takes on new payroll deduction and remittance obligations that a non-enrolled employer in the same state does not have. Confirming enrollment status directly, rather than assuming a peer company's participation status applies universally, avoids configuring payroll for a program the business never actually opted into, or missing deductions for one it did.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped employee wage rules and any local ordinances in New Hampshire can vary and can change. Before running payroll for tipped staff or assuming no local minimum wage applies to your location, verify current requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">U.S. DOL state labor office contacts directory</a>.</p>

        <p>Tip credit reconciliation should still happen every pay period. If a tipped employee's cash wage plus reported tips falls short of the full applicable minimum wage in a given week, the employer owes the shortfall for that week.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Sitting at the federal wage floor does not remove payroll complexity. Employers still need accurate FLSA classification, correct overtime calculations, and clarity on whether they participate in the voluntary paid family leave plan.</p>

        <p>For employers weighing whether to opt into the voluntary paid family leave plan, the payroll implications should factor into that decision just as much as the underlying benefits policy question, since enrollment changes ongoing payroll obligations for the life of the plan.</p>

        <p>Employers with operations in both New Hampshire and neighboring states with mandatory paid leave programs should be especially careful not to assume New Hampshire's voluntary framework applies company-wide. An employee working in New Hampshire is not automatically covered by a mandatory program that applies to colleagues in a different state, and the reverse is equally true.</p>

        <p>BEG runs payroll for New Hampshire employers with federal wage and hour rules applied correctly and voluntary paid leave participation tracked accurately, all included in a single all-inclusive PEPM rate.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>New Hampshire Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/new-hampshire" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New Hampshire Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/new-hampshire" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New Hampshire HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/massachusetts-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Massachusetts Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the New Hampshire minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"New Hampshire follows the federal minimum wage of $7.25 per hour in 2026."}},{"@type":"Question","name":"What is the overtime rule in New Hampshire?","acceptedAnswer":{"@type":"Answer","text":"New Hampshire follows a weekly overtime standard: nonexempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does New Hampshire require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. New Hampshire does not have a state paid sick leave mandate."}},{"@type":"Question","name":"Does New Hampshire have a paid family leave program?","acceptedAnswer":{"@type":"Answer","text":"New Hampshire offers a voluntary state paid family leave plan. Participation is not automatically required of employers, so confirm current enrollment mechanics before assuming coverage."}},{"@type":"Question","name":"Are there city minimum wage ordinances in New Hampshire?","acceptedAnswer":{"@type":"Answer","text":"Confirm current local ordinance status directly with the U.S. DOL state contacts directory, since local rules can be adopted or changed independent of state law."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"New Hampshire Minimum Wage 2026: What Employers Owe","description":"New Hampshire minimum wage 2026 is the federal $7.25 rate. See the overtime rule, voluntary paid leave plan, and what it means for payroll compliance.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/new-hampshire-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/new-hampshire-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"New Hampshire Minimum Wage 2026: What Employers Owe","item":"https://www.beghr.com/blog/payroll/minimum-wage/new-hampshire-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Massachusetts Minimum Wage 2026: What Employers Owe", excerpt: "Massachusetts minimum wage 2026 is $15.00 per hour. See the overtime rule, sick and paid leave...", href: "/blog/payroll/minimum-wage/massachusetts-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Per-Employee-Per-Month Means", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
