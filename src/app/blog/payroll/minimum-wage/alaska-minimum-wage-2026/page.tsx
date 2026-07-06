import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alaska Minimum Wage 2026: What Changed | BEG',
  description: 'Alaska minimum wage 2026 is $13.00 per hour, rising to $14.00 on July 1, 2026. Overtime, sick leave, and payroll compliance for Alaska employers.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/alaska-minimum-wage-2026' },
  openGraph: {
    title: 'Alaska Minimum Wage 2026: What Changed | BEG',
    description: 'Alaska minimum wage 2026 is $13.00 per hour, rising to $14.00 on July 1, 2026. Overtime, sick leave, and payroll compliance for Alaska employers.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/alaska-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-alaska-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Alaska Minimum Wage 2026: What Changed | BEG', description: 'Alaska minimum wage 2026 is $13.00 per hour, rising to $14.00 on July 1, 2026. Overtime, sick leave, and payroll compliance for Alaska employers.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-alaska-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the minimum wage in Alaska in 2026?',
    answer: 'Alaska\'s minimum wage is $13.00 per hour for most of 2026, scheduled to rise to $14.00 on July 1, 2026, per the U.S. Department of Labor.',
  },
  {
    question: 'How does Alaska overtime differ from federal rules?',
    answer: 'Alaska requires overtime for hours worked over 8 in a day as well as over 40 in a week, which is stricter than the federal FLSA weekly-only standard.',
  },
  {
    question: 'Are small employers exempt from Alaska daily overtime?',
    answer: 'Yes. The daily and weekly overtime premium does not apply to employers with fewer than 4 employees under Alaska law.',
  },
  {
    question: 'Does Alaska require paid sick leave?',
    answer: 'Alaska has sick leave provisions employers should track, though there is no state paid family and medical leave (PFML) program as of 2026.',
  },
  {
    question: 'When does the Alaska minimum wage increase to $14.00?',
    answer: 'The scheduled increase to $14.00 per hour takes effect July 1, 2026. Employers should update payroll systems ahead of that date to avoid underpayment.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-alaska-minimum-wage-2026.webp", "headline": "Alaska Minimum Wage 2026: What Changed", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/alaska-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Alaska Minimum Wage 2026: What Changed</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-alaska-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Alaska's 2026 minimum wage is $13.00 per hour, scheduled to rise to $14.00 on July 1, 2026, according to the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor</a>.</p>

        <p>Alaska stands out for its daily overtime rule and a mid-year wage increase, both of which require payroll teams to update rates and pay calculations at a specific point in the year rather than just at January 1.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Alaska Minimum Wage Rate Table</h2>

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
                ['Alaska (through June 30, 2026)', '$13.00'],
                ['Alaska (effective July 1, 2026)', '$14.00'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Alaska</h2>

        <p>Alaska requires overtime pay for hours worked over 8 in a single day as well as over 40 in a workweek, whichever produces more overtime pay for the employee. This daily trigger is stricter than the federal FLSA standard and needs to be built into time-tracking and payroll calculations separately from weekly totals.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Small-Employer Threshold</h2>

        <p>Alaska's daily and weekly overtime premium does not apply to employers with fewer than 4 employees. Very small businesses should confirm their exact obligations with the state, since misclassifying employee count can lead to back-pay exposure.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Family Leave</h2>

        <p>Alaska has sick leave provisions that employers need to track. There is no state paid family and medical leave (PFML) program in Alaska as of 2026, so employers offering leave beyond sick time do so voluntarily.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Wages and Local Ordinances</h2>

        <p>Tipped-wage rules and any local ordinance questions specific to Alaska municipalities should be confirmed directly with the <a href="https://www.dol.gov/agencies/whd/state/contacts">state labor office contacts</a>, since city-level requirements can shift independently of the state rate.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Alaska's daily overtime rule and mid-year rate change are exactly the kind of detail that trips up in-house payroll teams, especially at multi-state employers juggling different overtime triggers in different states. Missing the July 1 increase or miscalculating daily overtime creates real penalty exposure.</p>

        <p>BEG's managed payroll service applies the correct rate and overtime rule automatically, including scheduled increases like Alaska's, so your payroll stays compliant without manual rate updates.</p>

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
            <a href="/services/managed-payroll/alaska" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Alaska Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/alaska" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Alaska HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage/arizona-minimum-wage-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Arizona Minimum Wage 2026 &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum wage in Alaska in 2026?","acceptedAnswer":{"@type":"Answer","text":"Alaska's minimum wage is $13.00 per hour for most of 2026, scheduled to rise to $14.00 on July 1, 2026, per the U.S. Department of Labor."}},{"@type":"Question","name":"How does Alaska overtime differ from federal rules?","acceptedAnswer":{"@type":"Answer","text":"Alaska requires overtime for hours worked over 8 in a day as well as over 40 in a week, which is stricter than the federal FLSA weekly-only standard."}},{"@type":"Question","name":"Are small employers exempt from Alaska daily overtime?","acceptedAnswer":{"@type":"Answer","text":"Yes. The daily and weekly overtime premium does not apply to employers with fewer than 4 employees under Alaska law."}},{"@type":"Question","name":"Does Alaska require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Alaska has sick leave provisions employers should track, though there is no state paid family and medical leave (PFML) program as of 2026."}},{"@type":"Question","name":"When does the Alaska minimum wage increase to $14.00?","acceptedAnswer":{"@type":"Answer","text":"The scheduled increase to $14.00 per hour takes effect July 1, 2026. Employers should update payroll systems ahead of that date to avoid underpayment."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Alaska Minimum Wage 2026: What Changed","description":"Alaska minimum wage 2026 is $13.00 per hour, rising to $14.00 on July 1, 2026. Overtime, sick leave, and payroll compliance for Alaska employers.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/alaska-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/alaska-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Alaska Minimum Wage 2026: What Changed","item":"https://www.beghr.com/blog/payroll/minimum-wage/alaska-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Arizona Minimum Wage 2026: Rates & Rules", excerpt: "Arizona's 2026 minimum wage is $15.15 per hour. Overtime rules, sick leave, and payroll compliance for Arizona employers...", href: "/blog/payroll/minimum-wage/arizona-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "All-Inclusive Managed Payroll: What Is Included", excerpt: "All-Inclusive Managed Payroll: What Is and Is Not Included. Managed payroll at $25-$45 PEPM...", href: "/blog/payroll/cost/fully-managed-payroll-all-inclusive-pricing" },
      ]} />
    </article>
  );
}
