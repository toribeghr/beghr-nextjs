import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law Firms: Managed Payroll for Small Businesses (Under 25 Em',
  description: 'Managed payroll for law firms. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/law-firms/law-firms-managed-payroll-small-business' },
  openGraph: {
    title: 'Law Firms: Managed Payroll for Small Businesses (Under 25 Em',
    description: 'Managed payroll for law firms. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
    url: 'https://beghr.com/blog/payroll/law-firms/law-firms-managed-payroll-small-business',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firms: Managed Payroll for Small Businesses (Under 25 Em', description: 'Managed payroll for law firms. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Can you handle attorney bonus payroll?',
    answer: 'Yes. Attorney bonuses are processed as supplemental pay runs with the correct federal and state supplemental withholding rates applied.',
  },
  {
    question: 'How do you handle partner draws vs. salary?',
    answer: 'Partners taking guaranteed payments or draws are set up with the correct pay type. For W-2 partners, salary runs normally. For guaranteed payments outside W-2, we coordinate with your accounting team.',
  },
  {
    question: 'How do you handle attorney overtime exemptions?',
    answer: 'Attorneys meeting the FLSA learned professional exemption are classified as exempt and not subject to overtime. We ensure exemption criteria are documented in the payroll system.',
  },
  {
    question: 'Can you process payroll across multiple office locations?',
    answer: 'Yes. Law firms with multiple offices run on a single payroll system with state withholding and unemployment handled for each state.',
  },
  {
    question: 'What does BEG charge for law firm payroll?',
    answer: 'Law firm payroll runs at $25–$45 per employee per month, all-inclusive. For a 20-attorney firm with 30 total staff, that is approximately $750–$1,350 per month.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Law Firm</p>
              <h1>Law Firms: Managed Payroll for Small Businesses (Under 25 Employees) (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Managed payroll at $25–$45 PEPM all-inclusive makes economic sense at nearly every size for law firms, but the specific value drivers differ depending on headcount.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Payroll at Different Sizes for Law Firms</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Law Firms Size</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Monthly Cost</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>vs. In-House Hire</th>
              </tr>
            </thead>
            <tbody>
                <tr key={0} style={{ background: 0 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem' }}>5-attorney firm</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$125–$225/mo</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: '600' }}>Save $63K–$98K/yr</td>
                </tr>
                <tr key={1} style={{ background: 1 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem' }}>20-attorney firm</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$500–$900/mo</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: '600' }}>Save $58K–$92K/yr</td>
                </tr>
                <tr key={2} style={{ background: 2 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem' }}>50-attorney firm</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$1,250–$2,250/mo</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: '600' }}>Save $48K–$78K/yr</td>
                </tr>
            </tbody>
          </table>
        </div>

        <p>The comparison is against an in-house hire at $65,000–$100,000 fully loaded to $67K–$13K per year.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Under 25 Employees: The Clearest ROI</h2>

        <p>For law firms under 25 employees, in-house payroll cannot be justified. A payroll coordinator costs $65,000–$100,000 fully loaded — compared to $625–$1,125/month for managed payroll. The savings pay for a year of managed payroll in the first 2–3 months.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>25–75 Employees: Complexity Drives the Case</h2>

        <p>In the 25–75 employee range, law firms are dealing with more billable hours tracking, partner draw vs. salary, attorney bonus structures, IOLTA compliance. An in-house generalist is less likely to have the depth needed in these areas. Managed payroll provides specialist coverage that reduces exposure.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>75–200 Employees: Hybrid Approaches Emerge</h2>

        <p>At 75+ employees, law firms often consider a hybrid approach: an HR generalist handles employee relations and benefits while a managed payroll provider handles the compliance-heavy payroll function. This keeps an internal HR presence while outsourcing the most technically complex piece.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How to Get a Quote for Your Law Firms</h2>

        <p>BEG quotes managed payroll based on your actual headcount and pay frequency. For most law firms, the first discovery call includes a custom cost comparison against your current setup.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Managed Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25&ndash;$45 per employee per month, all-inclusive. Book a free 15-minute discovery call to get a cost comparison for your business.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Your Discovery Call</a>
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
            <a href="/services/managed-payroll" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Managed Payroll &rarr;
            </a>
            <a href="/services/managed-payroll/pricing" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Payroll Pricing &rarr;
            </a>
            <a href="/blog/payroll/law-firms" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              More Payroll Guides &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries including Law Firms. BEG manages payroll at $25&ndash;$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and industry-specific payroll requirements. Book a free 15-minute discovery call at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can you handle attorney bonus payroll?","acceptedAnswer":{"@type":"Answer","text":"Yes. Attorney bonuses are processed as supplemental pay runs with the correct federal and state supplemental withholding rates applied."}},{"@type":"Question","name":"How do you handle partner draws vs. salary?","acceptedAnswer":{"@type":"Answer","text":"Partners taking guaranteed payments or draws are set up with the correct pay type. For W-2 partners, salary runs normally. For guaranteed payments outside W-2, we coordinate with your accounting team."}},{"@type":"Question","name":"How do you handle attorney overtime exemptions?","acceptedAnswer":{"@type":"Answer","text":"Attorneys meeting the FLSA learned professional exemption are classified as exempt and not subject to overtime. We ensure exemption criteria are documented in the payroll system."}},{"@type":"Question","name":"Can you process payroll across multiple office locations?","acceptedAnswer":{"@type":"Answer","text":"Yes. Law firms with multiple offices run on a single payroll system with state withholding and unemployment handled for each state."}},{"@type":"Question","name":"What does BEG charge for law firm payroll?","acceptedAnswer":{"@type":"Answer","text":"Law firm payroll runs at $25–$45 per employee per month, all-inclusive. For a 20-attorney firm with 30 total staff, that is approximately $750–$1,350 per month."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Law Firms: Managed Payroll for Small Businesses (Under 25 Employees) (2026)","description":"Managed payroll for law firms. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.","datePublished":"2026-06-28","dateModified":"2026-06-28","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://beghr.com/assets/beg-header-image.png"}},"url":"https://beghr.com/blog/payroll/law-firms/law-firms-managed-payroll-small-business","mainEntityOfPage":{"@type":"WebPage","@id":"https://beghr.com/blog/payroll/law-firms/law-firms-managed-payroll-small-business"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Law Firms: Managed Payroll for Small Businesses (Under 25 Employees) (2026)","item":"https://beghr.com/blog/payroll/law-firms/law-firms-managed-payroll-small-business"}]}`,
        }}
      />
    </article>
  );
}
