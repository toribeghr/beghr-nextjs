import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Architecture Firm Payroll Guide in 2026 | BEG",
  description: "Architecture firm payroll: AIA project billing, licensed architect and PE tracking, partner draws, multi-state staff, and overtime compliance. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/architecture/architecture-firm-payroll-guide" },
  openGraph: {
    title: "Architecture Firm Payroll Guide in 2026 | BEG",
    description: "Architecture firm payroll: AIA project billing, licensed architect and PE tracking, partner draws, multi-state staff, and overtime compliance. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/architecture/architecture-firm-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Architecture Firm Payroll Guide in 2026 | BEG", description: "Architecture firm payroll: project billing, licensed staff tracking, partner draws, and overtime. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "How does project-coded payroll work for architecture firms?",
    answer: "Project-coded payroll assigns each employee's hours to specific project codes before payroll runs. Instead of tracking only total hours worked, the system captures time against project numbers that correspond to active AIA contracts. When payroll processes, labor costs are distributed to those project codes in your accounting system. This gives you real-time labor cost visibility by project, which directly feeds into your project profitability reporting and AIA billing calculations. BEG configures your payroll to accept time entries coded by project and pushes those allocations to your accounting system automatically.",
  },
  {
    question: "What is the correct way to pay licensed architects and PEs differently from unlicensed staff?",
    answer: "Licensure itself does not determine pay classification under the FLSA - the duties test does. Most licensed architects and PEs qualify as exempt professionals under the FLSA's learned professional exemption, meaning they can be paid a fixed salary without overtime. However, some firms pay project architects on an hourly basis, which changes the overtime obligation. The key is consistency: each employee's classification must be based on their actual job duties, and the compensation structure must match that classification. BEG tracks licensure status for compliance documentation purposes while ensuring the pay structure is correctly configured for each classification.",
  },
  {
    question: "How do partner draws work in an architecture firm payroll context?",
    answer: "Architecture firm partners typically receive compensation through one of three structures: a W-2 salary (common in corporations), guaranteed payments and profit distributions reported on a K-1 (common in LLCs and partnerships), or a combination of both. W-2 partner salaries run through payroll like any other employee. Guaranteed payments in an LLC are not payroll - they are reported on Schedule K-1 and partners pay self-employment tax on them directly. If a partner receives both a W-2 salary and K-1 distributions, only the W-2 portion runs through payroll. BEG coordinates with your accountant to ensure partner compensation is structured correctly for your entity type.",
  },
  {
    question: "How do we handle payroll for staff licensed in multiple states?",
    answer: "Multi-state licensing creates multi-state payroll tax obligations. When an employee is physically working in a state, that state generally has the right to tax that income, regardless of where the firm is headquartered. If you have architects performing work in multiple states throughout the year - whether traveling to project sites or working remotely - you may need to withhold and remit taxes in each state where work is performed. BEG handles multi-state tax registration, withholding, and filings for all states where your employees work. You tell us where work was performed; we handle the tax mechanics.",
  },
  {
    question: "What happens to payroll during deadline sprints when staff work nights and weekends?",
    answer: "Deadline sprint overtime depends entirely on whether the employees involved are exempt or non-exempt. Exempt salaried employees - which includes most licensed architects and senior staff - can work extended hours without additional pay beyond their salary. Non-exempt hourly employees, which may include drafters, interns, and some junior staff, must be paid overtime at 1.5x their regular rate for all hours over 40 in a workweek. The mistake many firms make is treating all staff as exempt during sprints because they are salaried. If any salaried employee does not meet the FLSA duties test for exemption AND earns under the salary threshold, they are non-exempt and overtime applies. BEG audits classifications before issues arise.",
  },
  {
    question: "Can BEG handle payroll for a firm with both in-state and out-of-state project sites?",
    answer: "Yes. Architecture firms frequently send staff to project sites in states where the firm has no office. When that happens, state income tax withholding obligations typically arise in the project state. BEG registers your firm in each required state, sets up withholding accounts, and handles quarterly and annual filings. We also track reciprocity agreements between states that can reduce the filing burden for employees who cross state lines regularly. Firms working across multiple states should not wait until year-end to address this - penalties for late registration and failure to withhold accumulate quickly.",
  },
];

export default function ArchitectureFirmPayrollGuidePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Architecture</p>
              <h1>Architecture Firm Payroll Guide: Project Billing, Licensed Staff, and Partner Draws (2026)</h1>
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
          Architecture firms carry payroll complexity that most generic payroll processors are not built to handle. Project-coded labor costs need to map to AIA billing structures. Licensed architects and professional engineers require licensure tracking for compliance and credentialing. Partners draw compensation through a mix of W-2 salaries and K-1 distributions that must be structured correctly for the firm's entity type. And deadline sprints create overtime exposure that firms with primarily salaried staff often underestimate. This guide walks through each of these challenges and how managed payroll solves them at $25-$45 per employee per month.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>AIA Project-Coded Payroll: Aligning Labor Costs to Billing</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The American Institute of Architects billing framework ties project revenue to labor costs at the project level. If your payroll system does not capture hours by project code, you are reconstructing labor costs from memory or timesheets after the fact - which introduces error and delays your billing cycle.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Project-coded payroll captures time at the source. Each pay period, employees log hours against active project numbers. Payroll processes those coded hours and pushes the distribution to your accounting system. Project managers see real-time labor burn against project budgets. Billing staff pull accurate labor costs directly from the payroll record rather than estimating.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.aia.org/resources/6076-the-architects-handbook-of-professional-p" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>AIA Handbook of Professional Practice</a> covers project financial management in detail, including labor cost tracking as a core discipline for project profitability.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Licensed Architect and PE Payroll Compliance</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Architectural and engineering licensure creates two categories of compliance concern in payroll: pay classification and multi-state registration.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          On classification: most licensed architects and PEs qualify as exempt professionals under the FLSA because their work requires advanced knowledge in a field of science or learning and they exercise discretion and judgment. This means overtime rules typically do not apply to their hours. But licensure alone does not determine exemption status. Drafters, junior designers, and interns who hold licenses but perform primarily routine work may not qualify as exempt. Misclassification in either direction creates liability.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          On multi-state registration: architects and PEs who travel to project sites in other states may trigger payroll tax obligations in those states. If a project architect spends four weeks on a job site in a state where the firm has no office, that state may require withholding on those wages. BEG handles state registration and multi-state withholding for all project-site states.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Partner Draw vs. Salary Structures</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Architecture firm principals typically own equity in one of several entity structures: a professional corporation (PC), a limited liability company (LLC), or a partnership. Each structure handles partner compensation differently.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Entity Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Partner Comp Structure</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Payroll Treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Professional Corporation (PC)", "W-2 salary, possible S-corp distributions", "Full payroll for salary; distributions not on payroll"],
                ["LLC taxed as partnership", "Guaranteed payments + profit distributions (K-1)", "Guaranteed payments not on payroll; no W-2 issued"],
                ["LLC taxed as S-corp", "Reasonable W-2 salary + distributions", "Salary runs through payroll; distributions do not"],
                ["General partnership", "Draws against profit share (K-1)", "Draws are not payroll; partners pay self-employment tax"],
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

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Overtime During Deadline Sprints</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Architecture firms run on deadlines. Permit submissions, design development milestones, and construction document delivery often require extended hours across the team. For most licensed professional staff who qualify as exempt, those extra hours carry no overtime obligation.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The risk comes from non-exempt staff: interns, junior drafters, administrative staff, and some project coordinators. If these employees work more than 40 hours in a workweek, they must receive 1.5x their regular rate for each hour over 40. Firms that pay everyone a salary and assume that eliminates overtime liability are exposed.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          BEG audits your classification setup before onboarding, flags any employee whose classification does not match their duties, and configures the payroll system to automatically calculate overtime for non-exempt staff based on actual hours submitted.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Architecture Firms</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Project-coded payroll with accounting system integration</li>
          <li>Exempt vs. non-exempt classification audit and configuration</li>
          <li>Multi-state payroll tax registration and filing for project-site states</li>
          <li>Partner W-2 payroll coordinated with your accountant on K-1 structure</li>
          <li>Deadline sprint overtime calculations for non-exempt staff</li>
          <li>Licensed staff credentialing tracking for HR records</li>
          <li>Benefits administration including health, 401(k), and FSA</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Architecture Payroll Done Right from Day One</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages architecture firm payroll including project coding, multi-state compliance, and partner structures at $25 to $45 per employee per month. Setup takes 3 to 5 business days. No per-run fees.
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

        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Also relevant: <Link href="/services/managed-payroll/architecture" style={{ color: "#ECAC60" }}>Managed Payroll for Architecture Firms</Link> and <Link href="/blog/payroll/architecture" style={{ color: "#ECAC60" }}>Architecture Payroll Resource Hub</Link>.
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
        "headline": "Architecture Firm Payroll Guide: Project Billing, Licensed Staff, and Partner Draws (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/architecture/architecture-firm-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Architecture", "item": "https://www.beghr.com/blog/payroll/architecture" },
          { "@type": "ListItem", "position": 5, "name": "Architecture Firm Payroll Guide", "item": "https://www.beghr.com/blog/payroll/architecture/architecture-firm-payroll-guide" }
        ]
      }) }} />
    </article>
  );
}
