import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CPA Busy Season Payroll Overtime (FLSA Rules) | BEG",
  description: "CPA firm busy season payroll: FLSA overtime rules, exempt vs non-exempt staff classification, salary threshold, and overtime calculation for staff",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-busy-season-payroll-overtime" },
  openGraph: {
    title: "CPA Busy Season Payroll Overtime (FLSA Rules) | BEG",
    description: "CPA firm busy season payroll: FLSA overtime rules, exempt vs non-exempt staff classification, salary threshold, and overtime calculation for staff",
    url: "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-busy-season-payroll-overtime",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "CPA Busy Season Payroll Overtime (FLSA Rules) | BEG", description: "Busy season overtime rules for CPA firms: FLSA classification, exempt vs non-exempt, and calculation. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Can we require non-exempt staff accountants to work 60 hours a week during busy season without paying overtime?",
    answer: "No. Non-exempt employees are entitled to overtime pay (1.5x the regular rate) for all hours over 40 in a workweek, regardless of any agreement or firm policy to the contrary. This is an FLSA requirement that cannot be waived. If a non-exempt staff accountant works 60 hours in a busy season week, they are owed 20 hours of overtime pay in addition to their regular wages. Firm policies that cap hours or require overtime approval do not eliminate the obligation to pay overtime when it is worked - they may just mean the firm should discipline the employee for working unauthorized hours, but it still must pay for the hours worked.",
  },
  {
    question: "What is the FLSA salary threshold for the white-collar exemptions?",
    answer: "The FLSA salary basis threshold for executive, administrative, and professional exemptions has been subject to regulatory updates and court challenges in recent years. The threshold sets the minimum weekly salary an employee must receive to be eligible for exemption, in addition to meeting the duties test. Confirm the current applicable threshold with your payroll provider or legal counsel, as it may have changed since this was written. Employees whose salaries fall below the applicable threshold are non-exempt regardless of their job duties - the salary test must be satisfied in addition to the duties test.",
  },
  {
    question: "If we pay overtime during busy season, can we reduce pay during slow season to offset the cost?",
    answer: "Reducing an employee's hourly rate or salary during slow season to offset busy season overtime is permissible within limits. For non-exempt hourly employees, the rate can be changed going forward, but you cannot retroactively reduce pay for hours already worked. For exempt salaried employees, reducing the salary during slow season may destroy the salary basis test for exemption if the reduction is based on the quantity or quality of work performed. Exempt employees must receive their full salary for any week in which they perform any work, with very limited exceptions. Seasonal salary adjustments should be reviewed with your employment attorney before implementation.",
  },
  {
    question: "We offer compensatory time (comp time) instead of overtime pay. Is that legal for private employers?",
    answer: "No. Private employers covered by the FLSA are not permitted to use comp time in lieu of overtime pay for non-exempt employees. Comp time is available only for state and local government employers under specific FLSA provisions. Private accounting firms that offer comp time (extra time off) in exchange for overtime hours are violating the FLSA. Non-exempt employees must receive cash overtime pay for hours over 40 in a workweek. If your firm has been using comp time instead of overtime pay, you may have back-pay liability for unpaid overtime.",
  },
  {
    question: "How do we handle overtime for non-exempt staff who receive bonuses during busy season?",
    answer: "Non-discretionary bonuses (bonuses that employees are promised in advance based on meeting certain criteria) must be included in the regular rate of pay for overtime calculation purposes. If a non-exempt staff accountant is promised a $2,000 busy season bonus for working through tax season, that bonus must be allocated back over the weeks in which overtime was worked and used to recalculate the regular rate for those weeks. This increases the overtime premium owed for those weeks. Discretionary bonuses (decided at management discretion without advance commitment) are excluded from the regular rate. The distinction matters significantly for overtime cost calculations.",
  },
  {
    question: "Some of our non-exempt staff accountants earn over $100,000. Does their high income affect their overtime status?",
    answer: "The FLSA includes a highly compensated employee (HCE) exemption for employees earning above the HCE threshold (confirm current amount with your advisor, as it has been updated) who perform office or non-manual work and customarily perform at least one of the duties of an exempt executive, administrative, or professional employee. The HCE exemption has a lower duties threshold than the standard exemptions. A staff accountant earning above the HCE threshold who customarily performs professional accounting duties (applying knowledge in accounting, exercising judgment) may qualify for the HCE exemption even if they would not qualify for the full learned professional exemption based on their primary duty. Review each high-earning non-exempt employee against the HCE test.",
  },
];

export default function CpaBusySeasonPayrollOvertimePage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>Calculate overtime the right way</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Get the correct FLSA regular rate of pay, including bonuses and blended pay rates.</p>
          <a href="/resources/overtime-pay-calculator" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Open the Overtime Pay Calculator &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Accounting / CPA</p>
              <h1>CPA Firm Busy Season Payroll: Overtime Rules, Exempt vs Non-Exempt Staff, and FLSA Compliance</h1>
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
          Busy season at a CPA firm means long hours across the staff. For partners and senior managers who qualify for FLSA exemptions, those hours come with no overtime obligation. For junior staff, interns, and administrative employees who do not qualify for exemption, busy season creates real overtime liability that many firms underestimate. The assumption that everyone in a professional services firm is exempt is wrong, and acting on that assumption creates back-pay exposure that surfaces in audits or complaints years later.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The FLSA Exemption Analysis for Accounting Firm Staff</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The FLSA provides several overtime exemptions relevant to accounting firm staff. The most applicable are the learned professional exemption, the administrative exemption, and the executive exemption.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The <strong>learned professional exemption</strong> requires that the primary duty be work requiring advanced knowledge in a field of science or learning, customarily acquired by a prolonged course of specialized intellectual instruction. Certified public accountants and staff accountants who hold accounting degrees and apply advanced accounting knowledge in their work generally satisfy this test at the level of senior and experienced staff. Entry-level staff performing primarily routine tasks under close supervision are more difficult to classify as exempt.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The <strong>administrative exemption</strong> requires that the primary duty be office or non-manual work related to management or general business operations, and that the employee exercise discretion and independent judgment on matters of significance. This may apply to accounting firm staff in roles such as practice development, client relations management, or operations management, but not typically to staff accountants focused on engagement work.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/overtime/fact-sheets" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL overtime fact sheets</a> provide detailed guidance on each exemption including examples for professional services employees. Review these against actual job duties for each staff category before finalizing classification.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Classification by Staff Level at a CPA Firm</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Staff Level</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Common Classification</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Overtime Exposure</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Partners", "Not employees (partnership) or exempt executive (S-corp)", "None"],
                ["Managers and senior managers", "Exempt - learned professional or executive", "Low to none"],
                ["Senior staff accountants (CPA)", "Usually exempt - learned professional", "Low; review duties"],
                ["Staff accountants (degree, judgment work)", "Often exempt - review duties carefully", "Moderate risk"],
                ["Entry-level or associate staff", "May be non-exempt depending on duties", "High if hours exceed 40"],
                ["Administrative and clerical staff", "Non-exempt", "High during busy season"],
                ["Interns (paid)", "Non-exempt", "High if hours exceed 40"],
              ].map(([level, classification, exposure], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{level}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{classification}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{exposure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How to Calculate Busy Season Overtime Correctly</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For non-exempt employees, overtime is calculated on a workweek basis - all hours over 40 in a single workweek at 1.5x the regular rate. The regular rate is not just the base hourly rate; it must include any non-discretionary bonuses allocated to that week.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Example: A non-exempt staff accountant earns $25/hour. During a busy season week they work 55 hours. They are also entitled to a portion of a $3,000 non-discretionary busy season bonus. If that bonus is allocated over the 10-week busy season, the weekly bonus allocation is $300. The regular rate for that week is ($25 x 55 hours + $300) / 55 hours = $30.45/hour. The overtime premium owed is 0.5 x $30.45 x 15 hours = $228.41.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          This calculation is more complex than most firms expect, and doing it manually creates errors. BEG configures non-discretionary bonus allocation into the regular rate calculation automatically for non-exempt employees.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Alternative Workweek Considerations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Some firms attempt to manage busy season overtime by defining a compressed workweek schedule or requiring flexible scheduling. Under the FLSA, the workweek is a fixed recurring period of 168 hours (7 consecutive 24-hour periods). An employer can define when the workweek begins but cannot average hours across two weeks to avoid overtime.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Some states allow alternative workweek arrangements that permit longer daily hours without daily overtime through an employee vote process - but these apply to state daily overtime rules, not the federal 40-hour weekly rule. For federal FLSA purposes, the 40-hour weekly threshold always applies regardless of any alternative schedule arrangement.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for CPA Firm Busy Season Payroll</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>FLSA classification audit for all staff levels</li>
          <li>Non-exempt staff overtime calculation including non-discretionary bonus allocation</li>
          <li>Weekly time tracking for non-exempt employees during busy season</li>
          <li>Exempt classification documentation for defense in audits or complaints</li>
          <li>Payroll processing for mixed exempt/non-exempt workforce</li>
          <li>Year-end W-2 production reflecting all wages including overtime</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Busy Season Payroll Without the Compliance Risk</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages CPA firm payroll through busy season with correct overtime calculation and classification at $25 to $45 per employee per month.
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
        "headline": "CPA Firm Busy Season Payroll: Overtime Rules, Exempt vs Non-Exempt Staff, and FLSA Compliance",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-busy-season-payroll-overtime"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Accounting / CPA", "item": "https://www.beghr.com/blog/payroll/accounting-cpa" },
          { "@type": "ListItem", "position": 5, "name": "Busy Season Payroll and Overtime", "item": "https://www.beghr.com/blog/payroll/accounting-cpa/cpa-busy-season-payroll-overtime" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Accounting Firm Partner Draw Payroll (K-1 vs W-2)", excerpt: "Partner draw and compensation payroll for accounting firms: K-1 guaranteed payments, W-2 salary for...", href: "/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll" },
        { category: "Payroll", title: "Accounting Firm Payroll Compliance in 2026", excerpt: "CPA firm payroll compliance: multi-state remote staff, 401(k) administration, year-end close...", href: "/blog/payroll/accounting-cpa/accounting-firm-payroll-compliance" },
        { category: "Payroll", title: "CPA Firm Payroll Guide [2026 Data]", excerpt: "CPA firm payroll: partner draws vs K-1 vs W-2, busy season overtime, billing-code allocation,...", href: "/blog/payroll/accounting-cpa/cpa-firm-payroll-guide" },
      ]} />
      </article>
  );
}
