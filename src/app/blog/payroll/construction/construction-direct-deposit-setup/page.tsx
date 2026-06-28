import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Payroll: Direct Deposit Setup | BEG',
  description: 'Managed payroll for construction. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/construction/construction-direct-deposit-setup' },
  openGraph: {
    title: 'Construction Payroll: Direct Deposit Setup | BEG',
    description: 'Managed payroll for construction. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
    url: 'https://beghr.com/blog/payroll/construction/construction-direct-deposit-setup',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Construction Payroll: Direct Deposit Setup | BEG', description: 'Managed payroll for construction. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Can you handle certified payroll for government projects?',
    answer: 'Yes. Certified payroll reports under Davis-Bacon and state prevailing wage laws are produced for each pay period in WH-347 format or state electronic reporting systems with fringe benefit credits documented.',
  },
  {
    question: 'How do you handle union vs. non-union employees on the same job?',
    answer: 'Union and non-union employees are set up with separate pay rate structures and fringe benefit calculations. Union payroll includes remittance to applicable union trust funds.',
  },
  {
    question: 'Can you handle seasonal crew ramp-ups?',
    answer: 'Yes. Bulk new hire entry processes seasonal crew in time for the first pay cycle, including new hire reporting, withholding setup, and direct deposit.',
  },
  {
    question: 'What does BEG charge for construction company payroll?',
    answer: 'Construction payroll runs at $25–$45 per employee per month, all-inclusive. Certified payroll report production is included at no add-on fee. For a 25-person crew, that is $625–$1,125 per month.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Construction</p>
              <h1>Construction Companies: Setting Up Direct Deposit (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Setting up or managing payroll for construction companies involves more steps than the basic payroll guides cover. Davis-Bacon certified payroll for federally funded projects, state prevailing wage, union fringe benefits, workers comp class codes applies on top of standard federal requirements.</p>

        <p>This guide covers the specific payroll setup and management requirements for construction companies.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Step 1: Get Your Employer Accounts Set Up</h2>

        <p>Before running payroll for construction companies, you need an Employer Identification Number (EIN) from the IRS, a state employer withholding account in each state where you have employees, and a state unemployment insurance (SUTA) account. For construction companies operating in multiple states, this means separate registrations in each state.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Step 2: Configure Pay Types for Construction Companies</h2>

        <p>Construction Companies have non-standard pay types that require specific configuration: prevailing wage compliance, certified payroll, union vs non-union, seasonal crew cycles. Each of these must be set up as a separate pay code in your payroll system with the correct tax treatment applied.</p>

        <p>Missing this step means your system calculates overtime incorrectly, applies the wrong withholding rate, or misses required reporting — and you do not find out until you receive a penalty notice or employee complaint.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Step 3: Set Up Compliance Tracking</h2>

        <p>Construction Companies payroll compliance requires: Davis-Bacon certified payroll for federally funded projects, state prevailing wage, union fringe benefits, workers comp class codes. Each of these has filing deadlines, rate requirements, or calculation rules that must be maintained current.</p>

        <p>Set up a compliance calendar that tracks: tax deposit deadlines (semi-weekly or monthly based on your lookback period), quarterly Form 941 due dates, annual Form 940 due dates, state quarterly filings, and new hire reporting requirements.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Step 4: Run Payroll and File on Time</h2>

        <p>With accounts set up and pay types configured, run payroll on your selected frequency. For construction companies, bi-weekly or semi-monthly works for most salaried staff. prevailing wage compliance may require different frequency or supplemental runs.</p>

        <p>Tax deposits must be made on the IRS schedule — either semi-weekly (if your lookback period tax liability exceeds $50,000) or monthly (if less than $50,000). Missing the deposit date triggers the IRS failure-to-deposit penalty.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Faster Path: Managed Payroll for Construction Companies</h2>

        <p>BEG managed payroll handles all of the above for construction companies at $25–$45 PEPM, all-inclusive. Setup takes 3–5 business days. We configure your pay types, establish your tax accounts, and run your first payroll on schedule.</p>

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
            <a href="/blog/payroll/construction" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              More Payroll Guides &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries including Construction Companies. BEG manages payroll at $25&ndash;$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and industry-specific payroll requirements. Book a free 15-minute discovery call at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can you handle certified payroll for government projects?","acceptedAnswer":{"@type":"Answer","text":"Yes. Certified payroll reports under Davis-Bacon and state prevailing wage laws are produced for each pay period in WH-347 format or state electronic reporting systems with fringe benefit credits documented."}},{"@type":"Question","name":"How do you handle union vs. non-union employees on the same job?","acceptedAnswer":{"@type":"Answer","text":"Union and non-union employees are set up with separate pay rate structures and fringe benefit calculations. Union payroll includes remittance to applicable union trust funds."}},{"@type":"Question","name":"Can you handle seasonal crew ramp-ups?","acceptedAnswer":{"@type":"Answer","text":"Yes. Bulk new hire entry processes seasonal crew in time for the first pay cycle, including new hire reporting, withholding setup, and direct deposit."}},{"@type":"Question","name":"What does BEG charge for construction company payroll?","acceptedAnswer":{"@type":"Answer","text":"Construction payroll runs at $25–$45 per employee per month, all-inclusive. Certified payroll report production is included at no add-on fee. For a 25-person crew, that is $625–$1,125 per month."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Construction Companies: Setting Up Direct Deposit (2026)","description":"Managed payroll for construction. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.","datePublished":"2026-06-28","dateModified":"2026-06-28","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://beghr.com/assets/beg-header-image.png"}},"url":"https://beghr.com/blog/payroll/construction/construction-direct-deposit-setup","mainEntityOfPage":{"@type":"WebPage","@id":"https://beghr.com/blog/payroll/construction/construction-direct-deposit-setup"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Construction Companies: Setting Up Direct Deposit (2026)","item":"https://beghr.com/blog/payroll/construction/construction-direct-deposit-setup"}]}`,
        }}
      />
    </article>
  );
}
