import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Georgia Minimum Wage 2026: Rates & Rules | BEG',
  description: 'Georgia minimum wage 2026 is the federal $7.25 rate; the $5.15 state rate is superseded by FLSA. Overtime and payroll compliance for Georgia employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/georgia-minimum-wage-2026' },
  openGraph: {
    title: 'Georgia Minimum Wage 2026: Rates & Rules | BEG',
    description: 'Georgia minimum wage 2026 is the federal $7.25 rate; the $5.15 state rate is superseded by FLSA. Overtime and payroll compliance for Georgia employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/georgia-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-georgia-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Georgia Minimum Wage 2026: Rates & Rules | BEG', description: 'Georgia minimum wage 2026 is the federal $7.25 rate; the $5.15 state rate is superseded by FLSA. Overtime and payroll compliance for Georgia employers.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-georgia-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Georgia in 2026?',
    answer: 'Georgia’s state minimum wage is technically $5.15 per hour, but this is superseded by the federal minimum wage of $7.25, which applies to most Georgia employers, per the U.S. Department of Labor.',
  },
  {
    question: 'Does the $5.15 Georgia state minimum wage ever apply?',
    answer: 'It applies only to a narrow set of employers not covered by the federal Fair Labor Standards Act. Nearly all employers must pay at least $7.25 per hour.',
  },
  {
    question: 'Does Georgia’s minimum wage law apply to every business?',
    answer: 'Georgia state minimum wage law applies to employers of 6 or more employees, though FLSA coverage often applies regardless of employer size.',
  },
  {
    question: 'What overtime rules apply in Georgia?',
    answer: 'Georgia follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Georgia require paid sick leave?',
    answer: 'No. Georgia does not mandate paid sick leave or a state paid family and medical leave program.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-georgia-minimum-wage-2026.webp", "headline": "Georgia Minimum Wage 2026: Rates & Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/georgia-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Georgia Minimum Wage 2026: Rates & Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-georgia-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Georgia's 2026 minimum wage is effectively the federal rate of $7.25 per hour; the state's own $5.15 rate is superseded by the FLSA for nearly all employers, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Georgia's dual-rate structure, an old state minimum wage that rarely governs in practice plus a size-based coverage threshold, is a common source of confusion for employers new to the state.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Georgia Minimum Wage Rate Table</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Jurisdiction</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>2026 Minimum Wage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Georgia state rate (rarely applies)', '$5.15'],
                ['Federal minimum wage (applies to most employers)', '$7.25'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Georgia</h2>

        <p>Georgia follows federal FLSA overtime rules. Non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek, with no separate state daily overtime trigger.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Threshold</h2>

        <p>Georgia's state minimum wage law applies to employers with 6 or more employees. However, most Georgia employers are also covered by the federal FLSA regardless of size, which sets the effective wage floor at $7.25 per hour in practice.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Georgia does not require paid sick leave, and there is no state paid family and medical leave (PFML) program. Employers offering these benefits do so on a voluntary basis.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Georgia follows the federal tip credit framework under the FLSA. Confirm current tipped-wage rules and any local ordinance questions with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a> before setting pay practices.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Georgia's outdated state minimum wage and employer-size threshold create real confusion risk: applying the $5.15 rate where the federal $7.25 rate actually governs is a compliance mistake that generates back-wage exposure. Multi-state employers need payroll logic that correctly applies FLSA coverage rather than the technical state rate.</p>

        <p>BEG's managed payroll service applies the correct effective rate in Georgia and every other state where you have employees, so you never risk underpaying based on an outdated state statute.</p>

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
            <a href="/services/managed-payroll/georgia" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Georgia Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/georgia" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Georgia HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/alabama-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Alabama Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Georgia in 2026?","acceptedAnswer":{"@type":"Answer","text":"Georgia's state minimum wage is technically $5.15 per hour, but this is superseded by the federal minimum wage of $7.25, which applies to most Georgia employers, per the U.S. Department of Labor."}},{"@type":"Question","name":"Does the $5.15 Georgia state minimum wage ever apply?","acceptedAnswer":{"@type":"Answer","text":"It applies only to a narrow set of employers not covered by the federal Fair Labor Standards Act. Nearly all employers must pay at least $7.25 per hour."}},{"@type":"Question","name":"Does Georgia's minimum wage law apply to every business?","acceptedAnswer":{"@type":"Answer","text":"Georgia state minimum wage law applies to employers of 6 or more employees, though FLSA coverage often applies regardless of employer size."}},{"@type":"Question","name":"What overtime rules apply in Georgia?","acceptedAnswer":{"@type":"Answer","text":"Georgia follows federal FLSA overtime rules: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Georgia require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Georgia does not mandate paid sick leave or a state paid family and medical leave program."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Georgia Minimum Wage 2026: Rates & Rules","description":"Georgia minimum wage 2026 is the federal $7.25 rate; the $5.15 state rate is superseded by FLSA. Overtime and payroll compliance for Georgia employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/georgia-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/georgia-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Georgia Minimum Wage 2026: Rates & Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/georgia-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Alabama Minimum Wage 2026: Rates & Rules", excerpt: "Alabama's 2026 minimum wage defaults to the federal $7.25 rate. Rates, overtime rules, and payroll compliance for Alabama employers...", href: "/blog/payroll/minimum-wage/alabama-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
