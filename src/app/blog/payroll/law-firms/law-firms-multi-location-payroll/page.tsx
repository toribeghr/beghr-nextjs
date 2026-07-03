import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law Firm Payroll: What Nobody Tells Multi-Office Firms | BEG',
  description: 'Managed payroll for law firms. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/law-firms/law-firms-multi-location-payroll' },
  openGraph: {
    title: 'Law Firm Payroll: What Nobody Tells Multi-Office Firms | BEG',
    description: 'Managed payroll for law firms. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.',
    url: 'https://www.beghr.com/blog/payroll/law-firms/law-firms-multi-location-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firm Payroll: What Nobody Tells Multi-Office Firms | BEG', description: 'Managed payroll for law firms. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.', images: ['https://www.beghr.com/assets/og-image.png'] },
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
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Law Firm Payroll: What Nobody Tells Multi-Office Firms | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/law-firms/law-firms-multi-location-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Law Firm</p>
              <h1>Law Firms: Multi-Location Payroll Guide (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Law Firms payroll operations involve more moving parts than standard business payroll. billable hours tracking, partner draw vs. salary, attorney bonus structures, IOLTA compliance all create operational complexity that grows as your business scales.</p>

        <p>This guide covers how to run Law Firms payroll operations efficiently, whether you have 10 employees or 100.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Key Operational Challenges in Law Firms Payroll</h2>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Billable hours tracking.</strong> This affects law firms differently than businesses in other industries because of how work is structured and compensated.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Partner draw vs. salary.</strong> This affects law firms differently than businesses in other industries because of how work is structured and compensated.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Attorney bonus structures.</strong> This affects law firms differently than businesses in other industries because of how work is structured and compensated.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>IOLTA compliance.</strong> This affects law firms differently than businesses in other industries because of how work is structured and compensated.</li>
        </ul>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Payroll Run Frequency for Law Firms</h2>

        <p>Most law firms run payroll bi-weekly or semi-monthly. The right choice depends on how your attorneys and paralegals are paid. Hourly staff often prefer bi-weekly for faster access to earnings. Salaried management often runs semi-monthly to align with accounting cycles.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Managing Payroll Across Multiple Law Firms Locations</h2>

        <p>For law firms with multiple locations, payroll operations must track hours, pay rates, and tax obligations by location. Multi-state operations add state withholding and unemployment filing requirements in each state where employees work.</p>

        <p>The most efficient approach is a single payroll system with location-based cost centers. This gives you consolidated payroll processing in one cycle with per-location reporting for labor cost analysis.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>New Hire Payroll Onboarding for Law Firms</h2>

        <p>New hire payroll onboarding for law firms requires: collecting the W-4 and state equivalent, I-9 verification, direct deposit authorization, benefit enrollment if applicable, and state new hire reporting within 20 days of the hire date. Setting up this process as a checklist prevents missed steps that create compliance exposure later.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How Managed Payroll Simplifies Law Firms Operations</h2>

        <p>BEG managed payroll at $25–$45 PEPM handles all of the above as part of the base service. Payroll operations run on your schedule without requiring your management team to maintain expertise in billable hours tracking or partner draw vs. salary.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Managed Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25&ndash;$45 per employee per month, all-inclusive. Book a free 15-minute discovery call to get a cost comparison for your business.</p>
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
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Law Firms: Multi-Location Payroll Guide (2026)","description":"Managed payroll for law firms. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.","datePublished":"2026-06-28","dateModified":"2026-06-28","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/law-firms/law-firms-multi-location-payroll","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/law-firms/law-firms-multi-location-payroll"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Law Firms: Multi-Location Payroll Guide (2026)","item":"https://www.beghr.com/blog/payroll/law-firms/law-firms-multi-location-payroll"}]}`,
        }}
      />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Law Firm Payroll: What Nobody Tells You About Benefits", excerpt: "Managed payroll for law firms. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Book...", href: "/blog/payroll/law-firms/law-firms-benefits-integration-payroll" },
        { category: "Payroll", title: "Law Firm Payroll: Direct Deposit Done Right", excerpt: "Managed payroll for law firms. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free...", href: "/blog/payroll/law-firms/law-firms-direct-deposit-setup" },
        { category: "Payroll", title: "Law Firm Payroll: The Truth About Classification", excerpt: "Managed payroll for law firms. Employee Classification for Payroll. $25-$45 PEPM all-inclusive....", href: "/blog/payroll/law-firms/law-firms-employee-classification-guide" },
      ]} />
      </article>
  );
}
