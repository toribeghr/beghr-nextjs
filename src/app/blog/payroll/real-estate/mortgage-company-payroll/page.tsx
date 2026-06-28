import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mortgage Company Payroll | LO Commission & RESPA Rules | BEG",
  description: "Mortgage company payroll: loan officer commission, RESPA compliance, draw programs, and multi-state filings. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/real-estate/mortgage-company-payroll" },
  openGraph: {
    title: "Mortgage Company Payroll | LO Commission & RESPA Rules | BEG",
    description: "Mortgage payroll: loan officer commission, RESPA compliance, draw programs, and multi-state filings. BEG at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/real-estate/mortgage-company-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Mortgage Company Payroll | LO Commission & RESPA Rules | BEG", description: "Mortgage payroll: loan officer commission, RESPA compliance, draw programs, and multi-state filings. BEG at $25-$45 PEPM.", images: ["https://beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "How is loan officer commission calculated for payroll purposes?",
    answer: "Loan officer commission is typically a basis point amount applied to the loan amount -- for example, 100 basis points (1%) on a $400,000 loan generates $4,000 gross commission. The LO's actual pay is their split of that gross commission after the firm's override. Commission is generally earned when the loan closes and funds, not when the application is submitted or approved. For payroll, the commission becomes a wage at closing and must be reported and withheld in that pay period, even if the cycle is irregular.",
  },
  {
    question: "What is the Dodd-Frank LO compensation rule and how does it affect payroll?",
    answer: "The Dodd-Frank Wall Street Reform Act includes specific restrictions on loan officer compensation through Regulation Z. LOs cannot be paid based on the terms of a loan (interest rate, fees, product type) -- they can only be paid based on loan amount or flat fee per loan. They also cannot receive compensation from both the borrower and the lender on the same transaction. These restrictions apply to both the compensation plan design and the actual payroll calculation. Running payroll that reflects a non-compliant comp plan exposes the firm to CFPB enforcement.",
  },
  {
    question: "How do draw programs work for loan officers?",
    answer: "Many mortgage companies provide LOs a monthly draw -- a guaranteed minimum payment each cycle -- against future commission earnings. When loans close, the earned commission is applied against the outstanding draw balance. If the LO earns more than their draws, they receive the surplus. If they earn less, the shortfall either accumulates as a recoverable debt or is forgiven depending on the terms of the draw agreement. We track each LO's draw balance, apply closings against the balance, and produce clear statements showing current position.",
  },
  {
    question: "Loan officers need to be NMLS licensed. Does that affect how we classify them?",
    answer: "NMLS licensing is a regulatory requirement for individuals who originate residential mortgage loans. It does not by itself determine employment status. Most LOs at retail mortgage companies are W-2 employees. Some work as independent contractors through their own licensed entities and originate for multiple companies. The classification analysis still runs on the standard IRS factors: control, financial risk, and relationship type. NMLS licensing status is not a factor in that analysis.",
  },
  {
    question: "We operate in multiple states. How do we handle multi-state payroll for LOs who work with borrowers across state lines?",
    answer: "If an LO is licensed and actively originating loans in multiple states, the income attributable to work performed in each state may be subject to that state's income tax withholding. Most states use a sourcing rule based on where the work is performed, not where the property is located. Remote LOs who work from home in one state while licensed in others create multi-state withholding complexity. We configure withholding by state at setup and update it when LOs add licensed states or relocate.",
  },
  {
    question: "What does BEG charge for mortgage company payroll?",
    answer: "BEG manages mortgage company payroll at $25 per employee per month on your existing payroll system, or $45 per employee per month on BEG's iSolved platform with the software included. For a 30-person mortgage operation, that is $750 to $1,350 per month, all-inclusive: LO commission tracking, draw reconciliation, multi-state withholding, tax filings, and W-2 production. No per-run fees, no setup charges.",
  },
];

export default function MortgageCompanyPayrollPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-27", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Real Estate</p>
              <h1>Mortgage Company Payroll: Loan Officer Commission, Dodd-Frank Rules, and Draw Programs (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Mortgage company payroll is regulated at multiple levels simultaneously. Federal compensation rules under Dodd-Frank restrict how loan officers can be paid and what their commissions can be based on. State licensing requirements add another layer. Multi-state origination creates withholding complexity. And the irregular timing of loan closings means payroll is not a simple biweekly process. Most off-the-shelf payroll systems handle none of this correctly without significant custom configuration.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Loan Officer Compensation: Federal Restrictions Under Dodd-Frank</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Regulation Z, implementing the Dodd-Frank Act, places strict limits on how mortgage loan originators can be compensated. The rules are designed to prevent LOs from steering borrowers into higher-cost loans for their own financial benefit. The key restrictions:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "1rem", paddingLeft: "1.5rem" }}>
          <li>LO compensation cannot vary based on the terms of the loan (rate, APR, product type, or fees paid by the borrower)</li>
          <li>LOs cannot receive compensation from both the borrower and the lender on the same transaction</li>
          <li>Compensation can be based on loan amount, flat fee per loan, or firm performance (not individual loan terms)</li>
        </ul>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.consumerfinance.gov/rules-policy/final-rules/loan-originator-compensation-requirements/" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>CFPB loan originator compensation guidance</a> governs plan design. If your compensation plan is non-compliant, the payroll reflects the violation -- fixing payroll alone is not enough. We flag compensation plan issues at onboarding and recommend involving compliance counsel before launch.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Commission Timing and Pay Cycle Design</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Mortgage commission is earned at loan closing, not at application or approval. This means commission income arrives irregularly -- heavy months when pipelines close, thin months when they do not. Most mortgage companies address this with one of two approaches: paying commission as earned on the date each loan closes (irregular timing), or batching closings and paying on a regular cycle (biweekly or semimonthly).
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Pay Approach</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>How It Works</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Payroll Implication</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Per-closing payment", "Pay commission on the day each loan funds", "Irregular pay dates; withholding on each event"],
                ["Biweekly batch", "Accumulate closings, pay every two weeks", "Regular cycle; variable amounts each run"],
                ["Draw + true-up", "Advance each cycle; reconcile monthly against closings", "Dual tracking: draw as wages, commission as offset"],
                ["Salary + commission", "Fixed base plus commission on closings", "Two components; commission adds to regular wages"],
              ].map(([approach, how, implication], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{approach}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{how}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-State Licensing and Payroll Obligations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          LOs licensed in multiple states through the NMLS create multi-state payroll tax obligations. The analysis is where the work is performed, not where the property is located. A remote LO who lives in Florida and originates loans on properties in Georgia, North Carolina, and Tennessee may have withholding requirements in Florida (where they work) but not necessarily in the property states, depending on each state's sourcing rules.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          See <a href="/services/managed-payroll" style={{ color: "#ECAC60" }}>BEG's managed payroll service</a> for details on how we configure multi-state setups from day one.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Mortgage Companies</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>LO commission calculation and pay scheduling (per-closing or batched)</li>
          <li>Draw advance tracking and commission reconciliation</li>
          <li>Dodd-Frank Regulation Z compliance check on comp plan inputs</li>
          <li>Multi-state withholding for LOs licensed in multiple states</li>
          <li>Standard payroll for operations, processing, and underwriting staff</li>
          <li>Tax filings and W-2 production across all active states</li>
          <li>1099 preparation for true independent contractor originators</li>
          <li>Clean records for CFPB or state regulatory audits</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Mortgage Payroll That Handles Closings, Not Just Cycles</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages mortgage company payroll at $25 to $45 per employee per month, all-inclusive. Live in 3 to 5 business days. No per-run fees.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            style={{ display: "inline-block", background: "#ECAC60", color: "#000", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
          >
            Book a 15-Minute Discovery Call
          </a>
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
        "headline": "Mortgage Company Payroll: Loan Officer Commission, Dodd-Frank Rules, and Draw Programs (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://beghr.com/blog/payroll/real-estate/mortgage-company-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Real Estate", "item": "https://beghr.com/blog/payroll/real-estate" },
          { "@type": "ListItem", "position": 5, "name": "Mortgage Company Payroll", "item": "https://beghr.com/blog/payroll/real-estate/mortgage-company-payroll" }
        ]
      }) }} />
    </article>
  );
}
