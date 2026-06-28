import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Management Commission Payroll | Chargebacks | BEG",
  description: "How to handle leasing agent commission payroll: splits, chargebacks, reconciliation, and tax withholding. BEG managed payroll for property management at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/property-management/property-management-commission-payroll" },
  openGraph: {
    title: "Property Management Commission Payroll | Chargebacks | BEG",
    description: "How to handle leasing agent commission payroll: splits, chargebacks, reconciliation, and tax withholding. BEG managed payroll at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/property-management/property-management-commission-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Property Management Commission Payroll | Chargebacks | BEG", description: "Leasing agent commission payroll: splits, chargebacks, reconciliation, and tax withholding for property management.", images: ["https://beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "When is a leasing commission considered earned for payroll timing purposes?",
    answer: "Under the FLSA, supplemental wages like commissions are earned when the commission is definite, fixed, and no longer contingent on any future event. For leasing commissions, this typically means the commission is earned when the lease is executed and the tenant has taken occupancy, not simply when the application is approved. Some property management companies use a slightly later trigger (first month's rent received), which is also defensible. The important principle is that once the commission is earned, it must be paid in the next regular payroll cycle. Holding commissions for extended periods or batching them on a quarterly basis does not comply with timely wage payment requirements in most states.",
  },
  {
    question: "How do we handle commission splits between multiple leasing agents?",
    answer: "Commission splits are common when multiple agents contribute to a lease (for example, one agent shows the unit and another closes the application). The split arrangement should be documented in the company's commission plan. Each agent's portion of the commission is processed through payroll as supplemental wages in the same pay period. The gross commission is split according to the plan, and each agent receives their share as a line item on their paycheck. If the split is not pre-defined in the commission plan, the property manager should approve the split in writing before payroll is processed to create an audit trail.",
  },
  {
    question: "Can leasing agent chargebacks reduce a paycheck below minimum wage?",
    answer: "No. Under FLSA, an employer cannot reduce an employee's wages below the applicable minimum wage in any workweek, even through chargeback deductions. If a leasing agent earns base pay plus commissions, and a chargeback would reduce their total hourly earnings below minimum wage, the chargeback cannot be applied in that pay period. In some states, deductions from wages to recover chargebacks require written employee authorization. Even with authorization, the deduction cannot drop wages below minimum wage. If the full chargeback cannot be applied in one period, the excess can be carried forward to future periods when the agent earns more.",
  },
  {
    question: "What tax withholding rate applies to leasing commissions?",
    answer: "Leasing commissions paid to W-2 employees are supplemental wages. If the commission is paid separately from the employee's regular paycheck, the flat 22% federal supplemental withholding rate can be applied (for commissions under $1 million). Alternatively, the aggregate method can be used, which treats the commission as part of regular wages for that period and calculates withholding based on the employee's W-4 elections applied to the combined total. The 22% flat rate is simpler to calculate. State supplemental withholding rates vary by state. Some states require the flat rate method; others allow either method.",
  },
  {
    question: "How do we reconcile commissions paid through payroll with our leasing software?",
    answer: "The cleanest reconciliation process is to generate a commission report from the leasing software (showing all leases executed in the period and the commission earned on each), compare it to the commission payroll amounts for each agent, and confirm the totals match before running payroll. Any discrepancies should be investigated and resolved before the payroll is processed. After payroll is run, the payroll register should be cross-referenced against the leasing software report to confirm all commissions were paid correctly. This two-step reconciliation catches errors before they become compliance issues.",
  },
  {
    question: "Do renewal commissions have different payroll rules than new lease commissions?",
    answer: "Renewal commissions are processed the same way as new lease commissions in payroll: they are supplemental wages subject to income tax withholding and FICA, processed in the regular payroll cycle after the renewal is executed. The difference may be in the commission plan itself, as many property management companies pay a lower renewal rate than a new lease rate, or pay renewals only when the rent increases above a threshold. The payroll treatment does not change based on the commission rate, only the amount differs. Renewal commissions should be documented in the commission plan and tracked in the leasing software the same way new lease commissions are.",
  },
];

export default function PropertyManagementCommissionPayrollPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Property Management</p>
              <h1>Leasing Agent Commission Payroll: How to Handle Splits, Chargebacks, and Reconciliation</h1>
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
          Leasing agent commissions are a standard part of compensation at apartment communities and commercial property management firms. They are also one of the most frequently mishandled payroll elements in the industry. Commissions paid as cash outside the payroll system, chargebacks applied without authorization, withholding calculated incorrectly, and reconciliation done manually in a spreadsheet are all common. This post explains the correct way to process leasing commissions through payroll from start to finish.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Commission Structure and Payroll Timing</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Leasing agent commission plans vary by company, but the most common structures include a flat dollar amount per lease (ranging from $100 to $500 per unit depending on the market and unit type), a percentage of the first month's rent, or a tiered structure where higher-rent units generate larger commissions. Some plans also pay a smaller renewal commission when an existing tenant signs a new lease term.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The commission becomes a wage obligation when it is earned. For most property management companies, a commission is earned when the lease is executed and the tenant has taken occupancy. Once earned, the commission must be paid in the next regular payroll run. Delaying commission payments to batch them monthly, quarterly, or at year-end is not compliant in most states, which have strict wage payment timing requirements.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>Department of Labor's FLSA guidance on commissions</a> clarifies when commission wages are considered earned and the employer's obligation to pay them timely. State wage payment laws often impose stricter timing requirements than the federal standard.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Processing Commission Splits</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          When multiple agents are involved in a single lease, the commission split must be defined before payroll is processed. The commission plan should specify the split rules for common scenarios: one agent shows, another closes; a referring agent passes a prospect to a specific property; a senior agent assists a new hire. Splits not covered by the plan require written manager approval.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          In payroll, each agent's portion is entered as a separate supplemental wage line item on their individual paycheck. The gross commission is not combined on a single paycheck and then split after. Each agent's gross commission share, withholding, and FICA are calculated independently.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Chargebacks: Rules and Compliance</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Many property management commission plans include a chargeback provision: if a tenant breaks a lease or does not take occupancy within a specified period (often 60 to 90 days), the leasing agent's commission is partially or fully charged back. The chargeback is a reduction to future commissions, not a correction to prior period wages.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Chargebacks must be handled carefully in payroll. The employer cannot retroactively reduce wages already paid in a prior period. Instead, the chargeback is applied as a reduction to current-period commissions or, if no commissions were earned this period, as an offset against future commissions. The chargeback cannot reduce the agent's total compensation below minimum wage in any workweek.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Many states require that payroll deductions (including chargebacks) be authorized in writing by the employee before they are applied. The commission plan agreement signed at hire typically serves as this authorization, but the chargeback provision must be clearly written and understood by the employee.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tax Withholding on Commissions</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Leasing commissions are supplemental wages for federal tax purposes. When paid separately from regular wages, the employer may withhold at the 22% flat federal rate (for supplemental wages under $1 million per year per employee). When paid in the same check as regular wages, the aggregate method applies, calculating withholding on the combined total using the employee's W-4 elections.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          FICA taxes (6.2% Social Security on wages up to the annual wage base, plus 1.45% Medicare on all wages) apply to commission wages the same as regular wages. The employer pays the matching FICA. Commission wages paid after the Social Security wage base is exceeded ($176,100 in 2026) are still subject to Medicare tax.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Commission Payroll Handled Correctly</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages property management payroll including leasing commission processing, chargeback tracking, and reconciliation at $25 to $45 PEPM. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/property-management"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Property Management Payroll Services
            </Link>
            <a
              href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              style={{ display: "inline-block", background: "#ECAC60", color: "#000", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Book a 15-Minute Discovery Call
            </a>
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
        "headline": "Leasing Agent Commission Payroll: How to Handle Splits, Chargebacks, and Reconciliation",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://beghr.com/blog/payroll/property-management/property-management-commission-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Property Management", "item": "https://beghr.com/blog/payroll/property-management" },
          { "@type": "ListItem", "position": 5, "name": "Commission Payroll", "item": "https://beghr.com/blog/payroll/property-management/property-management-commission-payroll" }
        ]
      }) }} />
    </article>
  );
}
