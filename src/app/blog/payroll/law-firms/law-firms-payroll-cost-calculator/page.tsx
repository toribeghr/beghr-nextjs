import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law Firm Payroll: What Does It Actually Cost? | BEG',
  description: 'Managed payroll for law firms. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/law-firms/law-firms-payroll-cost-calculator' },
  openGraph: {
    title: 'Law Firm Payroll: What Does It Actually Cost? | BEG',
    description: 'Managed payroll for law firms. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.',
    url: 'https://www.beghr.com/blog/payroll/law-firms/law-firms-payroll-cost-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-law-firms-law-firms-payroll-cost-calculator.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firm Payroll: What Does It Actually Cost? | BEG', description: 'Managed payroll for law firms. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.', images: ['https://www.beghr.com/blog-images/blog-payroll-law-firms-law-firms-payroll-cost-calculator.webp'] },
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
    answer: 'Law firm payroll runs at $25-$45 per employee per month, all-inclusive. For a 20-attorney firm with 30 total staff, that is approximately $750-$1,350 per month.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>Estimate your managed payroll cost</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Enter your headcount and current spend to see what fully managed payroll would cost at $25 to $45 PEPM.</p>
          <a href="/services/managed-payroll/cost-calculator" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Open the Cost Calculator &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Law Firm Payroll: What Does It Actually Cost? | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/law-firms/law-firms-payroll-cost-calculator"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Law Firm</p>
              <h1>Law Firms: How to Calculate Your Payroll Costs (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-law-firms-law-firms-payroll-cost-calculator.webp" alt={`Law Firm Payroll: What Does It Actually Cost?`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Managing payroll for law firms is more complex than most business owners realize before they hire someone to do it. Between billable hours tracking, partner draw vs. salary, and state compliance requirements that change annually, payroll demands consistent specialist attention.</p>

        <p>The question is whether that attention should come from an in-house hire or an outsourced managed payroll provider. Here is the full cost comparison.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The True Cost of an In-House Payroll Hire for Law Firms</h2>

        <p>An in-house payroll coordinator for law firms earns $65,000-$100,000 in base salary. That is the number most owners compare against outsourcing. Here is the full picture when you add employment costs:</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>In-House Cost Category</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Annual Cost</th>
              </tr>
            </thead>
            <tbody>
                <tr key={0} style={{ background: 0 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: false ? '700' : '400' }}>Base salary (payroll/HR coordinator)</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: false ? '700' : '400' }}>$65,000-$100,000</td>
                </tr>
                <tr key={1} style={{ background: 1 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: false ? '700' : '400' }}>Benefits (health, dental, 401K) ~30%</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: false ? '700' : '400' }}>Add 30%</td>
                </tr>
                <tr key={2} style={{ background: 2 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: false ? '700' : '400' }}>Payroll taxes (FICA, FUTA, SUTA) ~10%</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: false ? '700' : '400' }}>Add 10%</td>
                </tr>
                <tr key={3} style={{ background: 3 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: false ? '700' : '400' }}>Payroll software license</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: false ? '700' : '400' }}>$1,800-$4,200</td>
                </tr>
                <tr key={4} style={{ background: 4 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: false ? '700' : '400' }}>Training and compliance updates</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: false ? '700' : '400' }}>$1,200-$2,500</td>
                </tr>
                <tr key={5} style={{ background: 5 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: false ? '700' : '400' }}>Hiring and onboarding (amortized)</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: false ? '700' : '400' }}>$2,000-$4,000</td>
                </tr>
                <tr key={6} style={{ background: 6 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: true ? '700' : '400' }}>Total loaded cost</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', fontWeight: true ? '700' : '400' }}>See note below</td>
                </tr>
            </tbody>
          </table>
        </div>

        <p>Total loaded annual cost typically runs $65000120K-$130K when benefits, employer taxes, software, training, and turnover cost are included. And when that person leaves, the cost resets.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>BEG Managed Payroll at $25-$45 PEPM: What It Costs for Law Firms</h2>

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
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$125-$225/mo</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: '600' }}>Save $63K-$98K/yr</td>
                </tr>
                <tr key={1} style={{ background: 1 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem' }}>20-attorney firm</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$500-$900/mo</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: '600' }}>Save $58K-$92K/yr</td>
                </tr>
                <tr key={2} style={{ background: 2 % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem' }}>50-attorney firm</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>$1,250-$2,250/mo</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right', color: '#2a7a2a', fontWeight: '600' }}>Save $48K-$78K/yr</td>
                </tr>
            </tbody>
          </table>
        </div>

        <p>All-inclusive: payroll processing, tax filing, W-2 production, billable hours tracking, partner draw vs. salary, and year-round compliance monitoring.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Law Firms Owners Miss in the Cost Calculation</h2>

        <p><strong>Compliance exposure.</strong> State bar payroll requirements, attorney overtime exemptions under FLSA, IOLTA trust accounting separation. A single filing error or misclassification can cost more to correct than months of managed payroll fees.</p>

        <p><strong>Key person dependency.</strong> When your in-house payroll coordinator leaves, you have a payroll gap. Recruiting and onboarding a replacement takes 4-8 weeks. An outsourced provider has no single point of failure.</p>

        <p><strong>Software and update costs.</strong> Payroll software licenses run $1,800-$4,200 per year, not including the time required to stay current on tax table updates, new hire reporting changes, and state-specific rule modifications.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>When Should Law Firms Outsource Payroll?</h2>

        <p>For businesses under 100 employees, outsourcing almost always wins on total cost. At 25 employees paying $45 PEPM, monthly cost is $1,125 -- compared to a loaded in-house hire of $7,000-$9,000 per month. The math is clear at nearly any headcount below 100.</p>

        <p>The strongest case for outsourcing: billable hours tracking, partner draw vs. salary, which require specialized knowledge most in-house generalists do not have.</p>

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
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries including Law Firms. BEG manages payroll at $25-$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and industry-specific payroll requirements. Get instant pricing at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can you handle attorney bonus payroll?","acceptedAnswer":{"@type":"Answer","text":"Yes. Attorney bonuses are processed as supplemental pay runs with the correct federal and state supplemental withholding rates applied."}},{"@type":"Question","name":"How do you handle partner draws vs. salary?","acceptedAnswer":{"@type":"Answer","text":"Partners taking guaranteed payments or draws are set up with the correct pay type. For W-2 partners, salary runs normally. For guaranteed payments outside W-2, we coordinate with your accounting team."}},{"@type":"Question","name":"How do you handle attorney overtime exemptions?","acceptedAnswer":{"@type":"Answer","text":"Attorneys meeting the FLSA learned professional exemption are classified as exempt and not subject to overtime. We ensure exemption criteria are documented in the payroll system."}},{"@type":"Question","name":"Can you process payroll across multiple office locations?","acceptedAnswer":{"@type":"Answer","text":"Yes. Law firms with multiple offices run on a single payroll system with state withholding and unemployment handled for each state."}},{"@type":"Question","name":"What does BEG charge for law firm payroll?","acceptedAnswer":{"@type":"Answer","text":"Law firm payroll runs at $25-$45 per employee per month, all-inclusive. For a 20-attorney firm with 30 total staff, that is approximately $750-$1,350 per month."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Law Firms: How to Calculate Your Payroll Costs (2026)","description":"Managed payroll for law firms. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.","datePublished":"2026-06-28","dateModified":"2026-06-28","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/law-firms/law-firms-payroll-cost-calculator","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/law-firms/law-firms-payroll-cost-calculator"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Law Firms: How to Calculate Your Payroll Costs (2026)","item":"https://www.beghr.com/blog/payroll/law-firms/law-firms-payroll-cost-calculator"}]}`,
        }}
      />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Law Firm Payroll: What Nobody Tells You About Benefits", excerpt: "Managed payroll for law firms. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/law-firms/law-firms-benefits-integration-payroll" },
        { category: "Payroll", title: "Law Firm Payroll: Direct Deposit Done Right", excerpt: "Managed payroll for law firms. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/law-firms/law-firms-direct-deposit-setup" },
        { category: "Payroll", title: "Law Firm Payroll: The Truth About Classification", excerpt: "Managed payroll for law firms. Employee Classification for Payroll. $25-$45 PEPM all-inclusive....", href: "/blog/payroll/law-firms/law-firms-employee-classification-guide" },
      ]} />
      </article>
  );
}
