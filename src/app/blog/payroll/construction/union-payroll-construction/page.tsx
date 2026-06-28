import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Union Construction Payroll | Davis-Bacon & CBA | BEG",
  description: "Union construction payroll: certified payroll, collective bargaining agreement rates, fringe tracking, and remittance reporting. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/construction/union-payroll-construction" },
  openGraph: {
    title: "Union Construction Payroll | Davis-Bacon & CBA | BEG",
    description: "Union construction payroll: CBA rates, certified payroll, fringe tracking, and remittance. BEG at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/construction/union-payroll-construction",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Union Payroll for Construction | Davis-Bacon & CBA. Handled. | BEG", description: "Union construction payroll: CBA rates, certified payroll, fringe tracking, and remittance. BEG at $25-$45 PEPM.", images: ["https://beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What is a collective bargaining agreement and how does it affect payroll?",
    answer: "A collective bargaining agreement (CBA) is a negotiated contract between an employer and a union that sets wages, benefits, overtime rules, work classifications, shift differentials, and other employment terms. For payroll, every pay calculation must follow the CBA rather than federal or state minimums alone — the CBA terms are almost always higher. This includes base wages by classification and experience tier, overtime triggers and premiums, shift differentials for night or weekend work, fringe benefit contribution rates for health insurance, pension, and training funds, and any paid leave accrual rules specific to the agreement.",
  },
  {
    question: "What are union fringe benefit remittances and when are they due?",
    answer: "Union contracts require employers to contribute to third-party benefit funds — typically health and welfare, pension, annuity, and apprenticeship training funds — on behalf of each covered employee. These contributions are called remittances. They are calculated as a dollar amount per hour worked (not per employee per month) and are submitted to the union benefit fund administrator, not withheld from the employee's paycheck. Remittance frequency varies by CBA — typically monthly, though some funds require payment within 10 days of each payroll. Late remittances trigger interest charges, liquidated damages, and can put the employer in breach of the CBA.",
  },
  {
    question: "How do we handle employees who work on both union and non-union projects?",
    answer: "When an employee covered by a CBA works on a non-union private commercial project, the applicable wages and benefits depend on the CBA language. Some agreements require the union rates on all work regardless of project type. Others allow standard rates on non-covered work. The default is to apply CBA terms to any work during a payroll period unless the agreement explicitly carves out non-covered projects. We configure employee profiles to flag CBA status and apply the correct rate set based on the project the employee is assigned to each pay period.",
  },
  {
    question: "Our CBA has multiple wage tiers based on years of experience. How is that tracked?",
    answer: "CBAs frequently include progression schedules: a first-year apprentice earns a percentage of journeyman scale, with increases at set intervals. We configure each employee's hire date, union classification, and progression schedule at setup. The system automatically applies the correct wage tier for each period and advances the employee's rate on schedule. We also notify you before tier changes take effect so there are no surprises on the paycheck.",
  },
  {
    question: "What happens if a certified payroll report is late on a union prevailing wage job?",
    answer: "On prevailing wage jobs, the contracting agency requires weekly certified payroll reports (WH-347 or equivalent). Late submissions can result in stop-work notices, contract suspension, and ultimately contract termination. On union jobs, the CBA may have additional reporting requirements to the union itself. We run certified payroll reporting as part of our standard service — reports are generated weekly and submitted on schedule. You receive copies for your records.",
  },
  {
    question: "Can BEG handle multi-union projects where different crews belong to different unions?",
    answer: "Yes. Many large construction projects have crews covered by multiple CBAs — carpenters, electricians, plumbers, and operating engineers may each have separate agreements with different wage scales, fringe rates, and remittance funds. We configure each CBA as a separate pay rule set and assign employees to the correct agreement based on their classification. Fringe remittances are calculated and reported separately for each fund administrator. One payroll service, multiple CBAs, no confusion.",
  },
];

export default function UnionPayrollConstructionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Construction</p>
              <h1>Union Payroll for Construction: CBA Rates, Fringe Remittances, and Certified Payroll (2026)</h1>
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
          Union construction payroll is not standard payroll with a few extra steps. It is a separate compliance framework: collective bargaining agreement wage schedules, multi-tier classification systems, fringe benefit remittances to multiple fund administrators, certified payroll reporting, and audit exposure from both the contracting agency and the union itself. Most payroll software handles W-2 employees. Very few handle all of this correctly without custom configuration.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How CBA Wages Differ From Standard Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          In standard payroll, you set an employee's hourly rate and run it. In union construction payroll, the wage is determined by the employee's classification under the CBA, their years of service or apprenticeship tier, the type of project they are working on, and whether prevailing wage rules also apply. An electrician on year 3 of a 5-year apprenticeship program earns a different rate than a journeyman electrician — and both may earn different rates on a federally funded prevailing wage job than on private commercial work.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          CBAs also define overtime differently in some cases. While federal law requires overtime after 40 hours in a workweek, a CBA may require daily overtime after 8 hours, double-time on Sundays, or premium pay for holiday work. The CBA terms govern — they cannot be contracted away even if an employee agrees.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/olms/laws/labormanagementreportingdisclosureact" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>Department of Labor's Office of Labor-Management Standards</a> oversees union reporting and compliance. Contractors on prevailing wage jobs also answer to the Wage and Hour Division for Davis-Bacon compliance.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Fringe Benefit Remittances: The Most Common Compliance Error</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Fringe benefit remittances are the contributions an employer makes to union benefit funds on behalf of each covered employee. These are separate from the employee's wages and are not withheld from their paycheck. They are an employer cost, calculated per hour worked, and submitted directly to the fund administrator.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Fund Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Purpose</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Typical Trigger</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Health & Welfare", "Medical, dental, vision for covered employees", "Per hour worked"],
                ["Pension", "Defined benefit or defined contribution retirement", "Per hour worked"],
                ["Annuity", "Supplemental retirement savings", "Per hour worked"],
                ["Apprenticeship / Training", "Journeyman training programs", "Per hour worked"],
                ["Vacation / Holiday fund", "Accrued paid time off (some CBAs)", "Per hour worked"],
                ["Industry Advancement", "Union promotional and industry programs", "Per hour worked"],
              ].map(([fund, purpose, trigger], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{fund}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{purpose}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Certified Payroll on Union Prevailing Wage Projects</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          When a union contractor wins a federal or state prevailing wage project, Davis-Bacon certified payroll requirements layer on top of the CBA obligations. In many cases the prevailing wage rates are lower than the CBA rates — in that case the CBA governs and the certified payroll report must reflect actual wages paid. The report still goes in weekly and must be signed under penalty of perjury.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          See our guide to <a href="/services/managed-payroll" style={{ color: "#ECAC60" }}>managed payroll for construction</a> for more detail on prevailing wage compliance at the service level.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for Union Construction Contractors</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>CBA wage schedule configuration by classification and experience tier</li>
          <li>Overtime and shift differential rules per agreement</li>
          <li>Fringe benefit remittance calculation and reporting to each fund administrator</li>
          <li>Weekly certified payroll reports (WH-347) for prevailing wage projects</li>
          <li>Multi-union project support: separate pay rules per CBA</li>
          <li>Apprenticeship progression tracking and automatic rate advancement</li>
          <li>Payroll tax filings and W-2 production</li>
          <li>Audit support documentation for DOL or union trust fund audits</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Stop Running Union Payroll in a System Built for Office Workers</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages union construction payroll at $25 to $45 per employee per month, all-inclusive. Setup takes 3 to 5 business days from contract signing to first live payroll run.
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
        "headline": "Union Payroll for Construction: CBA Rates, Fringe Remittances, and Certified Payroll (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://beghr.com/blog/payroll/construction/union-payroll-construction"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Construction", "item": "https://beghr.com/blog/payroll/construction" },
          { "@type": "ListItem", "position": 5, "name": "Union Payroll", "item": "https://beghr.com/blog/payroll/construction/union-payroll-construction" }
        ]
      }) }} />
    </article>
  );
}
