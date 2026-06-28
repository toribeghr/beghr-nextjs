import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Consulting Firm Payroll | Billable Hours & Multi-State | BEG",
  description: "Consulting firm payroll: utilization bonuses, multi-state remote consultant compliance, exempt classification, and W-2 vs 1099. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/professional-services/consulting-firm-payroll" },
  openGraph: {
    title: "Consulting Firm Payroll | Billable Hours & Multi-State | BEG",
    description: "Consulting firm payroll: billable hours, utilization bonuses, multi-state compliance, and contractor classification. BEG at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/professional-services/consulting-firm-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Consulting Firm Payroll | Billable Hours, Bonus & Multi-State | BEG", description: "Consulting firm payroll: billable hours, utilization bonuses, multi-state compliance, and contractor classification. BEG at $25-$45 PEPM.", images: ["https://beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Are consultants salaried exempt employees or hourly? How does that affect overtime?",
    answer: "Most consultants at professional services firms are classified as salaried exempt employees under the FLSA's learned professional or administrative exemption. To qualify: the employee must earn at least $684 per week, and their primary duty must involve advanced knowledge, professional judgment, or the exercise of discretion and independent judgment over matters of significance. Senior consultants, managers, and partners who lead engagements and apply specialized expertise generally qualify. Junior consultants or analysts who follow defined methodologies and produce deliverables with close supervision may not. Misclassifying consultants as exempt when they do not qualify creates overtime liability across every pay period they worked over 40 hours.",
  },
  {
    question: "We pay annual bonuses tied to utilization rates. Do those bonuses affect overtime calculations for non-exempt employees?",
    answer: "Yes. Non-discretionary bonuses — including utilization bonuses where the payout is determined by a formula (e.g., 'you receive $X for every point of utilization above 70%') — must be included in the employee's regular rate for the workweek in which they were earned or, if earned over a longer period, must be retroactively blended into each week's regular rate. For salaried exempt employees, bonus calculation is simpler since overtime does not apply. For any non-exempt consultants who receive non-discretionary bonuses, the bonus must be allocated back to the weeks it covered and the regular rate recalculated for each week. We handle this retroactive blending calculation when bonuses are paid.",
  },
  {
    question: "We have consultants who work at client sites in multiple states. How do we handle state withholding?",
    answer: "Multi-state withholding for traveling consultants is one of the most administratively complex areas in professional services payroll. The general rule is that an employee owes income tax in the state where they perform the work. If a consultant spends 3 weeks in New York and 2 weeks in their home state of Texas, the New York wages are subject to New York state income tax. Some states have reciprocity agreements that simplify this — if the home and work states have reciprocity, only the home state withholds. Other states, like New York, have strict nexus rules. We track work location by state for each pay period and apply the correct withholding configuration per state.",
  },
  {
    question: "Can we pay our senior consultants as S-corp contractors to avoid FICA?",
    answer: "The IRS scrutinizes S-corp arrangements where a shareholder-employee takes a low salary and high distributions to reduce FICA taxes. S-corp shareholder-employees who provide services to the corporation must receive reasonable compensation for those services — reasonable being defined as what you would pay a third party to do the same work. The IRS has a history of reclassifying S-corp distributions as wages when the salary is unreasonably low. Beyond the FICA question, consultants who work exclusively for one firm under its direction are generally employees regardless of their business structure. The contractor vs. employee analysis is based on economic reality, not the form of payment.",
  },
  {
    question: "What is a 'nexus' and when does our consulting firm owe employer taxes in a state?",
    answer: "Tax nexus is the connection between your business and a state that creates a legal obligation to register and pay taxes there. For consulting firms, nexus is typically established when an employee performs work in a state for an extended period (varies by state — some trigger at 1 day, others at 30 days). Once nexus exists, the firm must register as an employer in that state, withhold state income tax, and pay state unemployment insurance for that employee. We can configure multi-state payroll once you have registered, but employer registration is a step your firm must complete directly with each state's tax and unemployment agencies.",
  },
  {
    question: "What does BEG charge for consulting firm payroll?",
    answer: "BEG manages consulting firm payroll at $25 per employee per month on your existing system, or $45 per employee per month on BEG's iSolved platform. For a 30-person consulting firm, that is $750 to $1,350 per month, all-inclusive: multi-state withholding, bonus regular rate blending, exempt vs. non-exempt configuration, and W-2 and 1099 production. No per-run fees. Live in 3 to 5 business days from contract signing.",
  },
];

export default function ConsultingFirmPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Professional Services</p>
              <h1>Consulting Firm Payroll: Billable Hours, Utilization Bonuses, and Multi-State Compliance (2026)</h1>
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
          Consulting firms have a workforce structure that creates payroll complexity in three specific areas: exemption classification (most consultants are salaried exempt, but not all), multi-state withholding (consultants who travel to client sites create tax nexus in states the firm may not have anticipated), and bonus treatment (utilization and performance bonuses tied to formulas are non-discretionary and must be included in overtime regular rate calculations for any non-exempt employees). Handle these correctly and payroll is manageable. Handle them wrong and you have underpayment liability, state registration exposure, and potential audit risk.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Consulting Firm Employee Classification and Pay Structure</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Role</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Typical Classification</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Pay Structure</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Key Risk</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Partner / Principal", "Salaried exempt (executive)", "Salary + profit share / K-1", "Reasonable comp for S-corp structures"],
                ["Senior Manager", "Salaried exempt (professional)", "Salary + annual bonus", "Must still meet $684/week salary threshold"],
                ["Manager / Consultant", "Salaried exempt (professional)", "Salary + utilization bonus", "Non-discretionary bonuses in regular rate if any non-exempt"],
                ["Analyst / Junior Consultant", "Salaried exempt or hourly", "Salary or hourly", "May not meet exemption test — OT exposure if mis-exempt"],
                ["Contract / project staff", "1099 contractor", "Flat project fee or hourly", "Misclassification if they work like employees"],
              ].map(([role, classification, pay, risk], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{role}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{classification}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{pay}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-State Withholding for Traveling Consultants</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          When your consultants travel to client sites in other states, they perform work in those states — and most states assert income tax jurisdiction over wages earned within their borders. A consultant based in Texas who spends the month of October at a client site in Illinois has October wages that are subject to Illinois income tax withholding, even though the firm's home state is Texas.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          State tax agencies track this through employer withholding filings. If your firm withholds only for the home state while consultants are working in other states, you have exposure for those other states. The <a href="https://www.calt.iastate.edu/article/multi-state-taxation-employers" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>multi-state employer tax guidance</a> from accounting and tax resources covers the general framework. We configure state withholding per employee location and update it when work location changes.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          See <a href="/services/managed-payroll" style={{ color: "#ECAC60" }}>BEG's managed payroll service</a> for how multi-state configuration is handled in practice.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Consulting Firms</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Salaried exempt and hourly non-exempt payroll with correct overtime treatment</li>
          <li>Utilization and performance bonus regular rate blending for non-exempt employees</li>
          <li>Multi-state income tax withholding based on work location by pay period</li>
          <li>W-2 and 1099 production for employees and contractors</li>
          <li>Remote and traveling consultant location tracking</li>
          <li>Payroll tax filings in home state and any states with registered nexus</li>
          <li>Setup in 3 to 5 business days from contract signing</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Payroll That Follows Your Consultants Wherever They Bill</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages consulting firm payroll at $25 to $45 per employee per month. Multi-state, bonus blending, and correct exemption treatment included. Live in 3 to 5 business days.
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
        "headline": "Consulting Firm Payroll: Billable Hours, Utilization Bonuses, and Multi-State Compliance (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://beghr.com/blog/payroll/professional-services/consulting-firm-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Professional Services", "item": "https://beghr.com/blog/payroll/professional-services" },
          { "@type": "ListItem", "position": 5, "name": "Consulting Firm Payroll", "item": "https://beghr.com/blog/payroll/professional-services/consulting-firm-payroll" }
        ]
      }) }} />
    </article>
  );
}
