import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SCA Payroll Compliance for Security Companies | BEG",
  description: "Service Contract Act compliance for security companies: SCA pay rates, health and welfare benefits, certified payroll, and DOL audit preparation.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/security/service-contract-act-security-payroll" },
  openGraph: {
    title: "SCA Payroll Compliance for Security Companies | BEG",
    description: "SCA compliance for security companies: prevailing wage rates, H&W benefits, certified payroll, and DOL audit preparation. BEG managed payroll at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/security/service-contract-act-security-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-security-service-contract-act-security-payroll.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SCA Payroll Compliance for Security Companies | BEG", description: "Service Contract Act compliance for security companies: pay rates, benefits, certified payroll, and audits.", images: ["https://www.beghr.com/blog-images/blog-payroll-security-service-contract-act-security-payroll.webp"] },
};

const faqs = [
  {
    question: "Where do we find the SCA wage determination for our specific federal contract?",
    answer: "SCA wage determinations are incorporated into federal solicitations and contracts. When a security company receives a request for proposal (RFP) or contract award from a federal agency, the wage determination applicable to the contract location and occupation is attached as part of the contract documents. Wage determinations can also be searched at sam.gov using the locality, occupation, and determination number. The contracting officer for the agency can provide the applicable wage determination if it is not clear from the contract documents. It is the contractor's responsibility to identify the correct determination and apply it; the agency does not monitor payroll compliance proactively in most cases.",
  },
  {
    question: "What is the health and welfare benefit rate under SCA and how do we satisfy it?",
    answer: "The SCA health and welfare (H&W) rate is a per-hour benefit rate specified in the wage determination that represents the minimum value of fringe benefits that must be provided to covered employees. In 2026, the standard H&W rate for most localities is $4.80 per hour for all hours paid (including overtime hours). Contractors satisfy the H&W requirement by: (1) providing bona fide fringe benefits (health insurance, dental, vision, retirement contributions, paid vacation, sick leave) with a per-hour value equal to or greater than the H&W rate; or (2) paying the H&W rate in cash as additional wages for each hour worked. Most small security companies pay the H&W rate in cash because they do not offer benefit packages worth $4.80 per hour per employee.",
  },
  {
    question: "Does SCA apply to subcontractors that a security company uses on federal contracts?",
    answer: "Yes. SCA obligations flow through the contract to all subcontractors performing services on the covered contract. If a prime security contractor subcontracts guard services to another security company, the subcontractor is bound by the same SCA wage and benefit requirements as the prime contractor. The prime contractor is responsible for ensuring that subcontractors comply with SCA. Failure of a subcontractor to comply does not shield the prime contractor from liability; the DOL can hold the prime contractor responsible for SCA violations by its subcontractors. Prime contractors should include SCA compliance requirements in subcontract agreements and monitor compliance.",
  },
  {
    question: "What records must security companies maintain for SCA compliance?",
    answer: "SCA record-keeping requirements mirror Davis-Bacon certified payroll requirements in some respects. Security companies on covered contracts must maintain: employee name and address; work classification (e.g., guard, unarmed guard, armed guard); hours worked each day and each week; rate of pay; fringe benefits provided or cash H&W payments made; and deductions. These records must be maintained for at least three years after the contract work is performed and must be made available to the DOL upon request. Unlike Davis-Bacon, SCA does not require weekly certified payroll report submissions unless the contract specifically requires it, but records must be available for audit.",
  },
  {
    question: "What are the penalties for SCA non-compliance?",
    answer: "SCA violations can result in: back-wage assessments for the difference between wages actually paid and required SCA rates; debarment from future federal contracts for up to three years; contract termination; and in cases of knowing and willful violations, referral for criminal prosecution. The DOL's Wage and Hour Division investigates SCA complaints and can conduct compliance reviews. Back-wage assessments for a security company that paid guards below the SCA rate on a multi-year federal contract can reach significant amounts when compounded across all affected employees and all hours worked. SCA compliance is not optional for contractors on covered federal contracts.",
  },
  {
    question: "How does SCA interact with the FLSA minimum wage and overtime requirements?",
    answer: "SCA establishes a wage floor for covered federal contracts that is typically higher than the FLSA minimum wage. SCA does not replace FLSA; both apply simultaneously. Guards on SCA contracts must receive at least the SCA wage rate (which may be $15-$20 or higher depending on locality and classification) and at least the FLSA minimum wage. Since SCA rates are always higher than FLSA minimum wage, compliance with SCA generally satisfies the FLSA wage floor for covered hours. However, FLSA overtime rules apply independently: if a guard works more than 40 hours in a week on SCA-covered work, overtime must be paid at 1.5x the SCA rate (not just 1.5x the FLSA minimum wage).",
  },
];

export default function ServiceContractActSecurityPayrollPage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-security-service-contract-act-security-payroll.webp" alt={`SCA Payroll Compliance for Security Companies`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Security Companies</p>
              <h1>Service Contract Act Compliance for Security Companies: Pay Rates, Benefits, and Reporting</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The Service Contract Act is a federal prevailing wage law that applies specifically to service contractors on federal government contracts, including security guard services at federal installations, military bases, and other government-owned or leased facilities. Security companies that win federal guard contracts must comply with SCA wage determinations, health and welfare benefit requirements, and record-keeping obligations that go beyond standard FLSA compliance. Non-compliance can result in back-wage assessments, contract termination, and debarment from future federal contracting opportunities.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>SCA Wage Determinations for Security Guards</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The DOL publishes SCA wage determinations for specific localities and service occupations. For security services, the relevant occupation codes include unarmed guard, armed guard, and in some localities, specific classifications for different guard roles. Each determination specifies: the hourly wage rate that must be paid at minimum to covered employees, and the health and welfare (H&W) fringe benefit rate.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Wage determinations vary significantly by geography. An armed security guard in a major metropolitan area may have an SCA wage determination of $18 to $22 per hour, while the same classification in a rural area might be $14 to $16. Security companies bidding on contracts in multiple localities must obtain the wage determination for each location and price their bids accordingly.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/government-contracts/service-contracts/wage-determinations" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL Service Contract Act wage determination resources</a> provide the current determinations and instructions for identifying the correct determination for a specific contract.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Health and Welfare Benefit Compliance</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The H&W rate is a per-hour amount that must be provided to SCA-covered employees in the form of bona fide fringe benefits or cash. The standard H&W rate for 2026 is $4.80 per hour for all hours paid, including overtime hours. This means a guard working 48 hours in a week (40 regular plus 8 overtime) must receive H&W benefits or cash equivalent to $4.80 x 48 = $230.40 for that week.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Security companies that provide health insurance, dental, vision, life insurance, and retirement plan contributions to their employees can credit the per-hour value of those benefits against the H&W requirement. If the benefit package is worth $3 per hour, the company must pay the remaining $1.80 per hour in cash. If the benefit package is worth $5 or more per hour, the H&W requirement is fully satisfied with no additional cash payment.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Small security companies that do not offer robust benefit packages typically pay the full H&W rate in cash. This cash payment is taxable wages subject to all standard withholding and FICA obligations, even though it is labeled as a "health and welfare" payment. Payroll must track H&W cash payments separately to ensure they are correctly included in wages and reported on W-2s.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Payroll Configuration for SCA Contracts</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For security companies with both SCA and non-SCA contracts, payroll must track which hours are covered by which contract and apply the correct pay structure to each. A guard who works on a federal installation for 30 hours and at a private commercial site for 12 hours in the same week must be paid the SCA rate for the federal hours and the company's standard rate for the commercial hours (assuming the commercial rate is at least FLSA minimum wage). Total weekly hours for FLSA overtime purposes are combined: the 42 total hours generate 2 hours of overtime, which must be calculated on the weighted average regular rate for the week.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          This multi-contract, multi-rate configuration requires a payroll system that supports cost center coding and per-hour rate variation. A single flat rate applied to all hours regardless of contract is not sufficient for SCA compliance when guards work across both covered and uncovered contracts.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Preparing for a SCA Compliance Review</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Wage determinations for all covered contracts on file and applied to payroll</li>
          <li>H&W benefit calculations documented per contract year and per employee</li>
          <li>Payroll records showing actual wages paid vs. SCA required rates</li>
          <li>Time records showing hours worked per employee per day</li>
          <li>Documentation of any fringe benefits applied toward the H&W requirement</li>
          <li>Employee classification documentation matching the contract wage determination</li>
          <li>Subcontractor compliance documentation if applicable</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>SCA Payroll Configured Correctly</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages security company payroll including SCA wage determination configuration, H&W benefit tracking, and multi-contract rate management at $25 to $45 PEPM. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/security"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Security Company Payroll Services
            </Link>
            <PricingCta service="managed-payroll" subline={false} />
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: i < faqs.length - 1 ? "1px solid #eee" : "none" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{faq.question}</h3>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{faq.answer}</p>
            </div>
          ))}
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Service Contract Act Compliance for Security Companies: Pay Rates, Benefits, and Reporting",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/security/service-contract-act-security-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Security", "item": "https://www.beghr.com/blog/payroll/security" },
          { "@type": "ListItem", "position": 5, "name": "SCA Security Payroll", "item": "https://www.beghr.com/blog/payroll/security/service-contract-act-security-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Outsourcing Security Company Payroll: What Changes", excerpt: "Why security companies outsource payroll, what to look for in a provider, and what changes...", href: "/blog/payroll/security/outsource-security-company-payroll" },
        { category: "Payroll", title: "Security Company Payroll Compliance for 2026", excerpt: "Payroll compliance for security companies: state guard licensing, workers compensation...", href: "/blog/payroll/security/security-company-payroll-compliance" },
        { category: "Payroll", title: "Security Company Payroll Guide: Guard Shifts & SCA", excerpt: "Security company payroll guide: SCA compliance for federal contracts, 24/7 shift processing,...", href: "/blog/payroll/security/security-company-payroll-guide" },
      ]} />
      </article>
  );
}
