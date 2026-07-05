import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CPA Firm Payroll Guide [2026 Data] | BEG",
  description: "CPA firm payroll: partner draws vs K-1 vs W-2, busy season overtime, billing-code allocation, 401(k) tied to variable comp, and remote staff compliance.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-firm-payroll-guide" },
  openGraph: {
    title: "CPA Firm Payroll Guide [2026 Data] | BEG",
    description: "CPA firm payroll: partner draws vs K-1 vs W-2, busy season overtime, billing-code allocation, 401(k) tied to variable comp, and remote staff compliance.",
    url: "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-firm-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "CPA Firm Payroll Guide [2026 Data] | BEG", description: "CPA firm payroll: partner draws, busy season overtime, billing codes, and 401(k) for accounting firms. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Do CPA firm staff accountants qualify for overtime exemption?",
    answer: "Whether a staff accountant qualifies for an FLSA exemption depends on their specific duties and compensation. Many experienced staff accountants and seniors qualify for the learned professional exemption - they hold accounting degrees, the work requires advanced knowledge in accounting, and they exercise discretion and judgment. However, entry-level staff accountants performing routine bookkeeping, data entry, and tick-and-tie procedures under close supervision may not meet the primary duty test for professional exemption, even if they have a degree. Firms that classify all accounting staff as exempt without reviewing actual duties may be underestimating their overtime exposure, especially for junior staff during busy season.",
  },
  {
    question: "How does the partner draw work differ between an LLC and an S-corp CPA firm?",
    answer: "In an LLC taxed as a partnership, partners receive guaranteed payments (fixed amounts for services) and profit distributions, both reported on Schedule K-1. These are not processed through payroll - partners pay self-employment tax on guaranteed payments and their share of active income. In an S-corporation CPA firm, partner-shareholders who provide services must receive a reasonable W-2 salary through payroll. Distributions above the salary are not subject to self-employment tax, which is the tax advantage of the S-corp structure. The critical difference: LLC partners are not on payroll; S-corp partner-employees are on payroll with standard withholding.",
  },
  {
    question: "How do we calculate overtime for non-exempt staff during busy season without creating payroll errors?",
    answer: "The FLSA overtime calculation for non-exempt employees is hours over 40 in a workweek at 1.5x the regular rate of pay. For staff accountants working 60 to 70 hours during peak busy season weeks, overtime accrues significantly. The payroll system must accept actual hours worked each week (not estimated hours), calculate the overtime premium accurately, and apply the correct regular rate when the employee receives any incentive pay or shift differentials that affect the regular rate calculation. BEG configures the payroll system to accept weekly time entries for non-exempt staff and calculates overtime automatically, preventing the manual calculation errors that commonly occur when overtime is handled outside the payroll system.",
  },
  {
    question: "We allocate time to billing codes. Can that data flow into payroll automatically?",
    answer: "Yes. When staff submit time against client billing codes in your practice management software, that data can flow into payroll as project-coded labor. BEG integrates with the common practice management platforms used by accounting firms and receives time data coded by client and matter. Payroll processes total hours (and any overtime) and distributes labor costs to the corresponding billing codes in your accounting system. This eliminates manual re-entry of time data and ensures payroll labor costs reconcile with your client billing records.",
  },
  {
    question: "How does 401(k) matching work for partners and staff when compensation varies?",
    answer: "401(k) employer matching is calculated as a percentage of eligible compensation as defined by the plan document. For staff on salary, eligible compensation is consistent year to year. For partners receiving variable distributions or guaranteed payments, the matching calculation depends on whether the plan includes guaranteed payments or only W-2 salary in the eligible compensation definition. S-corp partners have W-2 salary and potentially S-corp distributions; typically only the W-2 salary is included in 401(k) eligible compensation. For firms using a profit-sharing 401(k) structure where contributions are discretionary, the allocation can be designed to reflect partner performance without being tied mechanically to a match percentage.",
  },
  {
    question: "We have remote staff accountants in four states. How does that affect payroll?",
    answer: "Remote staff who are full-time residents of states other than your firm's home state create payroll tax obligations in those states. The firm must register as an employer in each state where a remote employee resides, set up withholding for that state, pay SUTA in the employee's state, and file quarterly and annual returns in each state. This applies regardless of whether the work is performed for clients in another state - the key factor is where the employee is physically working. BEG handles the multi-state employer registrations and all quarterly and annual filings for your remote staff states.",
  },
];

export default function CpaFirmPayrollGuidePage() {
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
              <h1>CPA and Accounting Firm Payroll Guide: Partner Draws, Busy Season, and 401(k) Administration (2026)</h1>
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
          Accounting firms are in the unusual position of being the experts their clients call for payroll questions - while often managing their own payroll with less rigor than they would recommend to a client. The complications are real: partner compensation flows through K-1s or W-2s depending on entity structure; busy season creates overtime exposure for staff who are not uniformly exempt; billing-code time tracking should connect to payroll but often does not; and remote staff in multiple states multiply compliance obligations. This guide addresses the payroll challenges specific to CPA and accounting firms.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Partner Compensation: W-2, K-1, or Both</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The correct payroll treatment for CPA firm partners depends entirely on the firm's entity structure. Most accounting firms operate as partnerships, LLPs, LLCs, or professional corporations (PCs).
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          In a partnership or LLC taxed as a partnership, partners are not employees. They receive guaranteed payments (taxable as self-employment income) and profit distributions (K-1). No W-2 is issued. Partners pay self-employment tax on their share of active income. In a professional corporation or LLC taxed as an S-corporation, partner-shareholders who work in the firm must receive a reasonable W-2 salary through payroll. Profit distributions flow through a K-1 separately.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.aicpa-cima.com/professional-insights/download?file=/content/dam/aicpa/interestareas/tax/resources/staffing/downloadabledocuments/20100501-compensation-tax-guide.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>AICPA professional compensation resources</a> provide additional guidance on partner compensation structure considerations for accounting firms, including benchmarking data for reasonable compensation determinations.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Busy Season Overtime: The FLSA Analysis</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          January through April tax season is when accounting firm overtime exposure is highest. Whether overtime is owed depends on each employee's FLSA exemption status.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Staff Level</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Typical FLSA Status</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Busy Season OT?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Partners / principals", "Not applicable (not employees)", "N/A"],
                ["Senior managers and managers (CPA, experienced)", "Likely exempt - learned professional", "No"],
                ["Senior staff accountants (CPA or advanced degree, judgment work)", "Often exempt - learned professional", "Depends on duties"],
                ["Staff accountants (entry level, routine work)", "May be non-exempt", "Yes if non-exempt"],
                ["Administrative / clerical staff", "Non-exempt", "Yes"],
                ["Interns (paid)", "Non-exempt", "Yes if hours exceed 40"],
              ].map(([level, status, ot], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{level}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{status}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{ot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Billing-Code Payroll Allocation</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          CPA firms track time against client billing codes for invoicing. That same data can drive payroll labor cost allocation by client and matter - eliminating the gap between what your time tracking system knows and what your accounting system reflects.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          When payroll is configured to receive coded time data and push labor costs to client cost centers, engagement managers can see real-time labor burn against engagement budgets. Billing staff can reconcile time charges to payroll costs directly. And the firm's P&L reflects accurate per-client labor cost rather than estimates based on headcount allocation.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>401(k) Matching Tied to Variable Compensation</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          CPA firms often use profit-sharing 401(k) plans where employer contributions are discretionary and can vary year to year based on firm profitability. For staff on salary, this creates a predictable contribution amount. For partners whose compensation varies based on firm performance, the contribution calculation depends on what the plan document defines as eligible compensation.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Safe harbor 401(k) plans, which avoid nondiscrimination testing by providing guaranteed minimum employer contributions, are common at accounting firms because they simplify plan administration and allow partners to maximize their own contributions without being limited by highly compensated employee testing. BEG coordinates with your plan administrator on contribution calculations and remittance timing for each plan design.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Remote Staff Multi-State Compliance</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The accounting industry has embraced remote and hybrid work, and many firms now have staff distributed across multiple states. Each remote employee creates an employer payroll tax registration obligation in their home state.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          BEG handles employer registration, withholding configuration, and quarterly and annual filings for all states where your remote employees are located. As the firm adds remote staff in new states, BEG initiates registration in those states promptly and configures payroll before the first paycheck is processed.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for CPA and Accounting Firms</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Partner W-2 payroll for S-corp and PC structure firms</li>
          <li>FLSA classification audit for staff at all levels</li>
          <li>Busy season overtime calculation for non-exempt staff</li>
          <li>Billing-code payroll allocation integrated with practice management software</li>
          <li>401(k) contribution calculations coordinated with your plan administrator</li>
          <li>Multi-state compliance for remote staff</li>
          <li>Benefits administration for health, retirement, and supplemental benefits</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>CPA Firm Payroll Managed by Experts</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages accounting firm payroll including partner compensation structures, busy season overtime, and remote staff compliance at $25 to $45 per employee per month.
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
          Also relevant: <Link href="/services/managed-payroll/accounting-cpa" style={{ color: "#ECAC60" }}>Managed Payroll for CPA Firms</Link> and <Link href="/blog/payroll/accounting-cpa" style={{ color: "#ECAC60" }}>Accounting Firm Payroll Resource Hub</Link>.
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
        "headline": "CPA and Accounting Firm Payroll Guide: Partner Draws, Busy Season, and 401(k) Administration (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-firm-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Accounting / CPA", "item": "https://www.beghr.com/blog/payroll/accounting-cpa" },
          { "@type": "ListItem", "position": 5, "name": "CPA Firm Payroll Guide", "item": "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-firm-payroll-guide" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Accounting Firm Partner Draw Payroll (K-1 vs W-2)", excerpt: "Partner draw and compensation payroll for accounting firms: K-1 guaranteed payments, W-2 salary for...", href: "/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll" },
        { category: "Payroll", title: "Accounting Firm Payroll Compliance in 2026", excerpt: "CPA firm payroll compliance: multi-state remote staff, 401(k) administration, year-end close...", href: "/blog/payroll/accounting-cpa/accounting-firm-payroll-compliance" },
        { category: "Payroll", title: "CPA Busy Season Payroll Overtime (FLSA Rules)", excerpt: "CPA firm busy season payroll: FLSA overtime rules, exempt vs non-exempt staff classification,...", href: "/blog/payroll/accounting-cpa/cpa-busy-season-payroll-overtime" },
      ]} />
      </article>
  );
}
