import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Licensed Professional Payroll | PE + Architect | BEG",
  description: "Payroll compliance for licensed architects and engineers: state license tracking, FLSA classification, multi-state obligations, and PE credentialing. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/architecture/licensed-professional-payroll-tracking" },
  openGraph: {
    title: "Licensed Professional Payroll | PE + Architect | BEG",
    description: "Payroll compliance for licensed architects and engineers: state license tracking, FLSA classification, multi-state obligations, and PE credentialing. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/architecture/licensed-professional-payroll-tracking",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Licensed Professional Payroll | PE + Architect | BEG", description: "Payroll for licensed architects and engineers: state license tracking, FLSA classification, multi-state compliance. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Does holding a state license automatically make an architect or PE exempt from overtime?",
    answer: "No. Licensure does not determine FLSA exemption status on its own. The FLSA learned professional exemption requires that the employee's primary duty involves work requiring advanced knowledge in a field of science or learning, that the knowledge is customarily acquired by a prolonged course of specialized instruction, and that the employee exercises discretion and independent judgment. Most licensed architects and PEs meet this test. But a licensed architect who is performing drafting tasks, following detailed instructions without exercising independent judgment, or otherwise working in a primarily non-professional capacity may not qualify as exempt regardless of their license status.",
  },
  {
    question: "What records should we keep on licensed staff for payroll and HR purposes?",
    answer: "For each licensed employee, maintain records of the license number and issuing state, the license expiration date, any CE or continuing education requirements and completion records, and any states where they hold reciprocal licenses. These records serve payroll compliance (knowing when a staff member may trigger a new state tax obligation), HR compliance (verifying the firm is employing licensed professionals as required by state professional practice acts), and client-facing purposes such as proposal submittals that require listing licensed personnel. BEG maintains these records in the employee profile within the payroll and HR system.",
  },
  {
    question: "We have a staff architect who is licensed in our home state but just started working on a project in a different state. What are the payroll implications?",
    answer: "When an employee performs work in a state where the firm has no existing payroll presence, two obligations typically arise. First, the firm may need to register as an employer in that state and set up withholding. Second, the employee may need to file a non-resident state income tax return for the wages earned in that state. The threshold for when a state's withholding requirement kicks in varies. Some states require withholding from the first day of work. Others have de minimis thresholds of a certain number of days or a dollar amount of wages before the obligation starts. BEG monitors these thresholds and handles registration and withholding for project-site states.",
  },
  {
    question: "One of our PEs holds licenses in six states. Does that mean we have payroll tax obligations in all six?",
    answer: "Holding a license in a state does not by itself create a payroll tax obligation. The obligation arises when the employee physically performs work in a state, or in some cases when they are a resident of that state. If your PE holds licenses in six states but only performs work in two of them during the tax year, you generally only have withholding obligations in those two states (plus any home state obligation). However, if your PE travels to perform inspections, client meetings, or site visits in other states, those visits may create obligations even if the PE is not permanently assigned there.",
  },
  {
    question: "Can BEG handle payroll for a firm that has both licensed professionals and unlicensed support staff on the same payroll?",
    answer: "Yes. Most architecture and engineering firms have a mix of licensed professionals, unlicensed design staff, administrative staff, and perhaps interns or co-op students. BEG manages all employee types on a single payroll with the appropriate classification, pay structure, and tax treatment for each. Licensed professional staff who qualify as exempt are set up as salaried exempt. Unlicensed or non-exempt staff are configured with overtime tracking. Interns may have special considerations depending on whether they are paid or unpaid and their relationship to an accredited program.",
  },
  {
    question: "What happens when a licensed staff member lets their license lapse?",
    answer: "License lapse is primarily an HR and professional practice compliance issue rather than a direct payroll issue. However, payroll records that track license status alert you when a license is approaching expiration or has lapsed, so you can take action before it becomes a liability. Firms that inadvertently employ someone whose license has lapsed on a project that requires a licensed professional of record may face regulatory consequences. Maintaining license expiration tracking in your HR system and using automated renewal reminders is the standard way to prevent this.",
  },
];

export default function LicensedProfessionalPayrollTrackingPage() {
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
              <h1>Payroll for Licensed Architects and Engineers: State License Tracking and Compliance</h1>
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
          Licensed architects and professional engineers create payroll compliance considerations that go beyond standard employee management. Their licenses span multiple states, their classification under the FLSA requires careful analysis of job duties, and their work on out-of-state project sites can trigger new payroll tax registration obligations with minimal warning. Architecture and engineering firm operators who manage payroll in-house or with a generalist processor often discover these issues during an audit, not before. This article covers what firms need to track and why it matters.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>FLSA Classification: The Learned Professional Exemption</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The Fair Labor Standards Act exempts employees from overtime requirements if they qualify under one of several exemption categories. For licensed architects and engineers, the relevant exemption is the learned professional exemption, which requires three conditions: the primary duty involves work requiring advanced knowledge, that knowledge is in a field of science or learning, and it is customarily acquired by a prolonged course of specialized intellectual instruction.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Architecture and engineering degrees, combined with the licensure examination process, generally satisfy the educational requirement. The question is whether the employee's actual job duties involve the exercise of advanced knowledge and independent judgment. A licensed architect managing a project, reviewing structural systems, or making design decisions meets this standard. A licensed architect who has been placed in a role doing primarily production drafting under close supervision is more difficult to classify as exempt, regardless of credentials.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa/overtime/fact-sheets" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL Wage and Hour Division fact sheets</a> provide detailed guidance on the professional exemption, including examples relevant to design professions. Firms should review classification for every employee, not just those with licenses.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>State License Tracking for Payroll Purposes</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Architecture and engineering licenses are issued by individual states. An architect licensed in Texas who wants to stamp drawings on a project in Colorado must hold a Colorado license (or obtain reciprocal licensure). For payroll, state license tracking serves two purposes: knowing which states an employee is authorized to work in professionally, and knowing when they are performing work in a state where tax obligations may arise.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          When a licensed professional travels to perform work in a state where they hold a license, that usually means the firm has an active project in that state - which in turn creates payroll tax registration obligations. License tracking and project-state tracking should be maintained in parallel.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          License expiration tracking prevents a different problem: inadvertently employing someone in a licensed capacity after their license has lapsed. Architecture and engineering licenses require continuing education for renewal, and the renewal cycle varies by state. A staff member whose license lapses in a state where the firm has an active project creates professional practice exposure.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-State Payroll Obligations for Traveling Professionals</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Every state that an employee performs compensated work in potentially has the right to tax those wages. For a licensed professional who visits project sites in multiple states throughout the year, this can mean the firm needs to withhold state income taxes for several states in addition to the home state.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Scenario</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Payroll Obligation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Employee lives and works only in home state", "Register and withhold in home state only"],
                ["Employee lives in home state, occasionally visits project site in another state", "Home state + potential obligation in project state depending on day/dollar threshold"],
                ["Employee is a remote worker living in a different state than firm headquarters", "Register and withhold in employee residence state; may also have nexus in firm state"],
                ["Employee travels to multiple project states throughout year", "Register and withhold in each state where work thresholds are met; track by state"],
                ["Two states with a reciprocity agreement", "May be able to withhold only in one state; employee files exemption form"],
              ].map(([scenario, obligation], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{scenario}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{obligation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Tracks for Licensed Staff</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>License number, issuing state, and expiration date per employee</li>
          <li>Continuing education completion records tied to license renewal cycles</li>
          <li>States where each licensed employee has performed work (for tax obligation tracking)</li>
          <li>Multi-state tax registration and withholding account management</li>
          <li>FLSA classification documentation for each employee position</li>
          <li>Overtime configuration for non-exempt staff; exempt status documentation for licensed professionals</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Licensed Staff Payroll Handled Correctly</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages payroll for architecture and engineering firms with licensed professionals in multiple states. $25 to $45 per employee per month. Setup in 3 to 5 business days.
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

        <p style={{ lineHeight: "1.7" }}>
          Also relevant: <Link href="/services/managed-payroll/architecture" style={{ color: "#ECAC60" }}>Managed Payroll for Architecture Firms</Link> and <Link href="/blog/payroll/architecture/architecture-firm-payroll-guide" style={{ color: "#ECAC60" }}>Architecture Firm Payroll Guide 2026</Link>.
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
        "headline": "Payroll for Licensed Architects and Engineers: State License Tracking and Compliance",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/architecture/licensed-professional-payroll-tracking"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Architecture", "item": "https://www.beghr.com/blog/payroll/architecture" },
          { "@type": "ListItem", "position": 5, "name": "Licensed Professional Payroll", "item": "https://www.beghr.com/blog/payroll/architecture/licensed-professional-payroll-tracking" }
        ]
      }) }} />
    </article>
  );
}
