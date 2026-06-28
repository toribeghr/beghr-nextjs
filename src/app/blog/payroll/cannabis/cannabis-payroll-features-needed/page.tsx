import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cannabis Payroll: Must-Have Features | BEG',
  description: 'Managed payroll for cannabis. Payroll Features Every {label} Business Needs. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/cannabis/cannabis-payroll-features-needed' },
  openGraph: {
    title: 'Cannabis Payroll: Must-Have Features | BEG',
    description: 'Managed payroll for cannabis. Payroll Features Every {label} Business Needs. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
    url: 'https://beghr.com/blog/payroll/cannabis/cannabis-payroll-features-needed',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis Payroll: Must-Have Features | BEG', description: 'Managed payroll for cannabis. Payroll Features Every {label} Business Needs. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'How do you handle 280E payroll cost allocation?',
    answer: 'We work with your CPA to allocate payroll costs between COGS (cultivation, production, direct handling) and non-COGS (retail, admin, marketing) to capture the maximum allowable deduction under Section 280E.',
  },
  {
    question: 'Can you handle cash payroll for dispensary employees?',
    answer: 'We process payroll calculations and tax withholding digitally regardless of how employees are ultimately paid, and produce detailed payment records and tax documentation for audit readiness.',
  },
  {
    question: 'How do you handle state cannabis board payroll reporting?',
    answer: 'We maintain the required records and produce reports in the format required by your state&apos;s cannabis control board upon request.',
  },
  {
    question: 'What does BEG charge for cannabis business payroll?',
    answer: 'Cannabis payroll runs at $25–$45 per employee per month, including 280E-aware payroll allocation support and state licensing recordkeeping. For a single dispensary with 15 employees, that is $375–$675 per month.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Cannabis</p>
              <h1>Cannabis Businesses: Payroll Features Every {label} Business Needs (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Cannabis Businesses need payroll features that go beyond basic hourly and salary processing. The standard payroll software aimed at general businesses often lacks the specific configuration options that cannabis businesses require.</p>

        <p>Here are the payroll features most critical for cannabis businesses.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Must-Have Payroll Features for Cannabis Businesses</h2>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Multi-rate pay configuration.</strong> cannabis businesses often have budtenders and growers working at different rates or compensation structures. The payroll system must support multiple pay codes per employee with correct overtime blending.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>280E tax code payroll deductions support.</strong> This is a core requirement for cannabis businesses that generic payroll software often handles incorrectly or not at all.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Multi-state tax filing.</strong> cannabis businesses with employees or locations in multiple states need automated state tax filing in each applicable state.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Compliance updates.</strong> Tax tables, minimum wage rates, and state-specific rules change annually. The payroll system or provider must apply these updates before they take effect, not after you receive a penalty notice.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Year-end W-2 and 1099 production.</strong> All employees receive W-2s. Some workers at cannabis businesses may receive 1099-NEC instead if properly classified as independent contractors. The system needs to produce both correctly.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Direct deposit and pay schedule flexibility.</strong> Support for bi-weekly, semi-monthly, and off-cycle runs for bonuses, final paychecks, or mid-cycle adjustments.</li>
        </ul>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Most Payroll Software Misses for Cannabis Businesses</h2>

        <p>280E tax code payroll deductions, cash payroll documentation, state cannabis board reporting, banking restrictions are rarely handled correctly out of the box in standard payroll software. These require configuration work — and if you do not know the correct rules, you configure them wrong.</p>

        <p>Managed payroll from BEG eliminates the configuration risk. We set up your pay codes based on what cannabis businesses actually need, not generic defaults.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>BEG Managed Payroll for Cannabis Businesses: What Is Included</h2>

        <p>BEG provides all payroll features for cannabis businesses at $25–$45 PEPM, all-inclusive:</p>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Payroll processing on your schedule (weekly, bi-weekly, semi-monthly)</li>
          <li style={{ marginBottom: '0.5rem' }}>280E tax code payroll deductions configured correctly</li>
          <li style={{ marginBottom: '0.5rem' }}>Tax deposits and quarterly/annual filings in all applicable states</li>
          <li style={{ marginBottom: '0.5rem' }}>New hire reporting, direct deposit, and pay stub access</li>
          <li style={{ marginBottom: '0.5rem' }}>Year-end W-2 and 1099 production</li>
          <li style={{ marginBottom: '0.5rem' }}>Ongoing compliance monitoring and rule updates</li>
        </ul>

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
            <a href="/blog/payroll/cannabis" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              More Payroll Guides &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries including Cannabis Businesses. BEG manages payroll at $25&ndash;$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and industry-specific payroll requirements. Book a free 15-minute discovery call at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you handle 280E payroll cost allocation?","acceptedAnswer":{"@type":"Answer","text":"We work with your CPA to allocate payroll costs between COGS (cultivation, production, direct handling) and non-COGS (retail, admin, marketing) to capture the maximum allowable deduction under Section 280E."}},{"@type":"Question","name":"Can you handle cash payroll for dispensary employees?","acceptedAnswer":{"@type":"Answer","text":"We process payroll calculations and tax withholding digitally regardless of how employees are ultimately paid, and produce detailed payment records and tax documentation for audit readiness."}},{"@type":"Question","name":"How do you handle state cannabis board payroll reporting?","acceptedAnswer":{"@type":"Answer","text":"We maintain the required records and produce reports in the format required by your state&apos;s cannabis control board upon request."}},{"@type":"Question","name":"What does BEG charge for cannabis business payroll?","acceptedAnswer":{"@type":"Answer","text":"Cannabis payroll runs at $25–$45 per employee per month, including 280E-aware payroll allocation support and state licensing recordkeeping. For a single dispensary with 15 employees, that is $375–$675 per month."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Cannabis Businesses: Payroll Features Every {label} Business Needs (2026)","description":"Managed payroll for cannabis. Payroll Features Every {label} Business Needs. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.","datePublished":"2026-06-28","dateModified":"2026-06-28","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://beghr.com/assets/beg-header-image.png"}},"url":"https://beghr.com/blog/payroll/cannabis/cannabis-payroll-features-needed","mainEntityOfPage":{"@type":"WebPage","@id":"https://beghr.com/blog/payroll/cannabis/cannabis-payroll-features-needed"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Cannabis Businesses: Payroll Features Every {label} Business Needs (2026)","item":"https://beghr.com/blog/payroll/cannabis/cannabis-payroll-features-needed"}]}`,
        }}
      />
    </article>
  );
}
