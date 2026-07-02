import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accounting Firm Partner Draw Payroll (K-1 vs W-2) | BEG",
  description: "Partner draw and compensation payroll for accounting firms: K-1 guaranteed payments, W-2 salary for S-corp partners, reasonable compensation, and entity structure. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll" },
  openGraph: {
    title: "Accounting Firm Partner Draw Payroll (K-1 vs W-2) | BEG",
    description: "Partner draw and compensation payroll for accounting firms: K-1 guaranteed payments, W-2 salary for S-corp partners, reasonable compensation, and entity structure. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Accounting Firm Partner Draw Payroll (K-1 vs W-2) | BEG", description: "Partner draw payroll for accounting firms: K-1 vs W-2, reasonable comp, and entity structure. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What is a reasonable salary for a CPA firm partner-employee in an S-corp?",
    answer: "Reasonable compensation for a CPA firm partner-employee in an S-corporation is typically determined by comparing the services performed to market rates for similar services in the same geographic area and firm size. The AICPA and national accounting associations publish annual compensation surveys that are commonly used as benchmarks. A managing partner at a 10-person CPA firm in a mid-sized market performing client engagement work, business development, and firm management would reasonably be compensated at a salary comparable to what the firm would need to pay an unrelated person to perform the same services. The IRS has pursued CPA firms specifically for unreasonably low S-corp salaries because accountants are presumed to know the rules.",
  },
  {
    question: "Can a CPA firm partner take no salary at all and receive only K-1 distributions?",
    answer: "In a partnership or LLC taxed as a partnership, partners do not receive a salary - they receive guaranteed payments and profit distributions on a K-1, and this is the correct treatment. In an S-corporation, a partner-shareholder who performs services for the firm cannot take zero salary and receive only distributions. The IRS requires that S-corp shareholder-employees who provide services receive a reasonable W-2 salary. The distributions above that salary are not subject to self-employment tax, which is the tax advantage of the S-corp structure. A zero-salary arrangement in an S-corp is a clear audit target.",
  },
  {
    question: "We have equity partners and income partners. Do they have the same payroll treatment?",
    answer: "Not necessarily. Equity partners with full ownership stakes in an LLC or partnership typically receive both guaranteed payments and profit allocations on a K-1. Income partners - who may have a smaller ownership stake or a defined income share without full equity - may have arrangements closer to a high-salary employee with a bonus, depending on how the partnership agreement defines their compensation rights. The payroll treatment for income partners depends on whether they are actual partners in the legal entity (K-1 treatment) or employees with bonus compensation (W-2 treatment). The partnership agreement controls this determination.",
  },
  {
    question: "How do we handle draw advances taken throughout the year versus year-end profit allocation?",
    answer: "In an LLC or partnership, draws taken throughout the year are advances against the partner's anticipated profit allocation. At year-end, the actual profit is allocated according to the partnership agreement, and the draws are credited against that allocation. If draws exceed the allocated profit, the partner has overdrawn their capital account (potentially a loan from the partnership if the operating agreement allows). If the allocation exceeds draws, the partner has undistributed profit that either remains in the firm or is paid out as a year-end distribution. None of this flows through payroll - it is handled through the partnership capital accounts and reconciled at year-end by the CPA or accountant handling the firm books.",
  },
  {
    question: "What records does BEG maintain for partner payroll in an S-corp?",
    answer: "For S-corp partner-employees, BEG maintains all standard payroll records: W-4 withholding authorization, payroll register showing gross wages, withholding, and net pay for each pay period, quarterly 941 records, state payroll tax returns, and year-end W-2s. BEG also coordinates with your firm accountant on the allocation of health insurance premiums for more-than-2% S-corp shareholders, which must be included in W-2 wages but are deductible as self-employed health insurance on the partner's personal return. This is a commonly mishandled item for S-corp CPA firm partners.",
  },
  {
    question: "Does BEG coordinate with our accounting team when setting up partner payroll?",
    answer: "Yes. Setting up partner payroll correctly requires understanding the firm entity structure, the compensation arrangement in the partnership or operating agreement, and how the payroll component fits into the partner's overall compensation picture. BEG requests the relevant information during onboarding and, if permitted, coordinates directly with the firm's accounting team to ensure the payroll configuration aligns with how the CPA handling the firm books expects the partner compensation to be structured. This coordination prevents the common problem of payroll and accounting being set up independently and producing irreconcilable year-end numbers.",
  },
];

export default function AccountingFirmPartnerDrawPayrollPage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Accounting / CPA</p>
              <h1>Partner Draw and Compensation Payroll for Accounting Firms: K-1, W-2, and Reasonable Comp</h1>
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
          CPA and accounting firms are, paradoxically, among the most likely businesses to have their own partner compensation mishandled. The partners know the rules - they advise clients on these exact issues every year - but the firm's own payroll is often managed by the same office manager or bookkeeper who handles general administration, without the technical depth to navigate partner compensation correctly. The result is commonly either an S-corp firm where partners take no W-2 salary (clear IRS audit risk) or a partnership firm where partner draws are run through payroll (incorrect treatment with payroll tax consequences).
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Entity Structure Determines Everything</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The entity structure of the accounting firm is the starting point for any partner compensation discussion. Most small to mid-sized CPA firms are organized as LLPs (limited liability partnerships), LLCs, or professional corporations (PCs). The tax treatment of partner compensation differs significantly across these structures.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Entity Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Partner Comp Mechanism</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Payroll Required?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["LLP (default partnership)", "Guaranteed payments + profit allocation (K-1)", "No - partners are not employees"],
                ["LLC taxed as partnership", "Guaranteed payments + profit allocation (K-1)", "No - partners are not employees"],
                ["LLC taxed as S-corp", "W-2 salary (reasonable comp) + S-corp distributions (K-1)", "Yes - for the salary portion"],
                ["Professional Corporation (C-corp)", "W-2 salary; dividends taxed at corporate level", "Yes - for all compensation"],
                ["Professional Corporation taxed as S-corp", "W-2 salary (reasonable comp) + S-corp distributions", "Yes - for the salary portion"],
              ].map(([entity, comp, payroll], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{entity}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{comp}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{payroll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Guaranteed Payments vs. W-2 Salary: The Key Distinction</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Guaranteed payments in a partnership or LLC are fixed amounts paid to a partner for services or capital, regardless of whether the firm is profitable. They are deductible by the firm and taxable to the partner as ordinary income. Partners pay self-employment tax on guaranteed payments at the rate that applies to their share of active business income.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          A W-2 salary in an S-corp structure serves the same economic function - providing a regular income to the partner for services - but it is processed through payroll with FICA withholding and employer match. The S-corp pays payroll taxes on the salary; the partner does not pay self-employment tax on distributions above the salary.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The critical error to avoid: running guaranteed payments through payroll as if they are W-2 wages. They are not. Issuing a W-2 to a partner in a partnership or LLC taxed as a partnership is incorrect and can create double taxation and FICA overpayment that is difficult to correct after the fact.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Reasonable Compensation for CPA Firm Partners</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For S-corp CPA firms, the reasonable compensation standard requires that partner-employees receive a salary comparable to what the firm would pay an unrelated person to perform the same services. The IRS has brought cases specifically against accounting professionals, who are presumed to know the rules, when compensation is structured to minimize payroll taxes through below-market salaries.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Common benchmarks for CPA firm partner reasonable compensation include national and regional salary surveys published by the AICPA, state CPA societies, and accounting-specific compensation data providers. The reasonable salary for a managing partner performing engagement work and firm management is typically in the range of $150,000 to $250,000+ annually depending on market and firm size, with distributions above that amount taking advantage of the S-corp FICA savings structure.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Health Insurance Premium Treatment for S-Corp Partners</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          More-than-2% S-corp shareholders who receive health insurance as a benefit must have the insurance premiums included in their W-2 wages in Box 1 (gross wages), though these premiums are not subject to FICA. The partner then deducts the premium as self-employed health insurance on their personal return. This treatment is commonly mishandled, either by not including the premium in W-2 wages (underreporting income) or by including it in FICA-subject wages (over-withholding payroll taxes).
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          BEG configures S-corp partner payroll to correctly include health insurance premiums in W-2 Box 1 without treating them as FICA wages, consistent with IRS Notice 2008-1 and related guidance.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for Accounting Firm Partner Payroll</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>W-2 payroll for S-corp and PC partner-employees at reasonable compensation levels</li>
          <li>Health insurance premium inclusion in W-2 wages for more-than-2% S-corp shareholders</li>
          <li>Coordination with firm accountant on partner compensation structure</li>
          <li>Multi-partner payroll with different salary levels for different equity tiers</li>
          <li>Year-end W-2 production for all partner-employees</li>
          <li>Retirement plan contribution calculations for partners</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Partner Payroll That Matches Your Firm Structure</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages CPA firm partner payroll correctly from day one. $25 to $45 per employee per month. Setup in 3 to 5 business days.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
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

        <p style={{ lineHeight: "1.7" }}>
          Also relevant: <Link href="/services/managed-payroll/accounting-cpa" style={{ color: "#ECAC60" }}>Managed Payroll for CPA Firms</Link> and <Link href="/blog/payroll/accounting-cpa/cpa-firm-payroll-guide" style={{ color: "#ECAC60" }}>CPA Firm Payroll Guide 2026</Link>.
        </p>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Partner Draw and Compensation Payroll for Accounting Firms: K-1, W-2, and Reasonable Comp",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Accounting / CPA", "item": "https://www.beghr.com/blog/payroll/accounting-cpa" },
          { "@type": "ListItem", "position": 5, "name": "Partner Draw Payroll", "item": "https://www.beghr.com/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll" }
        ]
      }) }} />
    </article>
  );
}
