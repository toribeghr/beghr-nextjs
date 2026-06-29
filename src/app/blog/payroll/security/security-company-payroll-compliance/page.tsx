import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Security Company Payroll Compliance 2026 | BEG Guide",
  description: "Payroll compliance for security companies: state guard licensing, workers compensation classifications, multi-state registration, and payroll record requirements. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/security/security-company-payroll-compliance" },
  openGraph: {
    title: "Security Company Payroll Compliance 2026 | BEG Guide",
    description: "Security company payroll compliance: state licensing, workers comp classifications, multi-state payroll, and record requirements. BEG managed payroll at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/security/security-company-payroll-compliance",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Security Company Payroll Compliance 2026 | BEG Guide", description: "Security company payroll compliance: state licensing, workers comp, multi-state registration, and records.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What are the payroll registration requirements when a security company expands into a new state?",
    answer: "When a security company places guards in a new state, it must register for payroll tax withholding in that state, register for state unemployment insurance (SUI), obtain state workers compensation coverage for guards working in the new state, register the guard licensing entity with the state's licensing board (most states regulate private security companies separately from general business registration), file new hire reports for all new employees in that state, and in some states, register for local income tax if operating in cities with local income taxes. The sequence matters: workers compensation coverage should be obtained before any guards begin work in the new state, and payroll tax registration should be complete before the first payroll is processed. Failure to register before employees work can result in penalties.",
  },
  {
    question: "How do state guard licensing requirements affect payroll?",
    answer: "State guard licensing requirements do not directly affect payroll calculations, but they create obligations that intersect with payroll administration. Most states require that licensed guards meet minimum training and background check requirements before working. Some states prohibit guards from working until their license application is processed, which affects when they can be added to payroll and begin earning wages. License renewal requirements may include continuing education that the employer pays for and tracks. If guards work without required licenses, the security company faces regulatory penalties and potentially employment law liability for work performed during an unlicensed period. Payroll records showing when each guard started should be cross-referenced against licensing records to confirm that guards were licensed before their first paycheck.",
  },
  {
    question: "What workers compensation code applies to armed vs unarmed security guards?",
    answer: "Workers compensation classification codes for security guards vary by state, but the National Council on Compensation Insurance (NCCI) maintains standard codes that most states use. The primary guard classifications are: Code 7720 (Detective or Patrol Agency and Drivers) for most general security guard operations; Code 7380 for building cleaning and maintenance operations that includes some security roles; and Code 7722 for armored car operations. Armed guards may be classified separately from unarmed guards in some states, with higher premium rates reflecting the elevated risk. Misclassifying armed guards under the unarmed rate is an audit risk that results in premium deficiency assessments. Payroll must track armed vs. unarmed hours separately if the workers comp policy applies different codes.",
  },
  {
    question: "What is the correct way to handle pre-employment screening costs in relation to payroll?",
    answer: "Background check costs, drug testing fees, and pre-employment physical expenses are generally employer costs and are not deducted from employee wages. Taking these costs from employee paychecks (either directly or through a negative adjustment) is a wage deduction that requires written employee authorization under state law and cannot reduce wages below minimum wage. Some states prohibit pre-employment cost deductions entirely. If the security company has a policy that recovers training costs from guards who leave within a specified period, the cost recovery provision must comply with state wage deduction laws and cannot be deducted from the final paycheck in states that restrict final pay deductions.",
  },
  {
    question: "How do we handle payroll records for guards with high turnover?",
    answer: "FLSA requires retaining payroll records for at least 3 years and time records for at least 2 years. For a high-turnover security company, this means maintaining records for a large number of former employees. Electronic payroll records stored in a cloud-based payroll system satisfy the retention requirement as long as the records are accessible and can be produced upon request. Former employee records should not be deleted when an employee separates; they should be archived and retained for the required period. At year-end, W-2s must be produced for every employee who worked during the calendar year, including those who worked only one shift. The payroll system should maintain each employee's record for the full calendar year plus the required retention period.",
  },
  {
    question: "Are there any payroll tax incentives specific to security companies for hiring veterans?",
    answer: "The Work Opportunity Tax Credit (WOTC) is available to employers who hire eligible veterans, among other target groups. Security companies that actively recruit and hire veterans, which many do given the transferable skills from military service, can claim WOTC credits ranging from $1,200 to $9,600 per eligible veteran depending on their target group and hours worked. The credit requires that the veteran be certified through the state workforce agency and that the certification form be submitted within 28 days of hire. Security companies with high hiring volumes and veteran recruitment programs should integrate WOTC screening into their new hire onboarding process to capture these credits systematically.",
  },
];

export default function SecurityCompanyPayrollCompliancePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Security Companies</p>
              <h1>Security Company Payroll Compliance: State Licensing, Workers Comp, and Guard Payroll Rules</h1>
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
          Security company payroll compliance operates across three regulatory layers simultaneously: federal FLSA wage and overtime rules, state licensing requirements for security companies and individual guards, and state payroll tax registration and workers compensation obligations. Companies that expand into new states often discover these layers only after guards have already started working, which creates retroactive compliance risk. This post covers the state-level compliance requirements that security company operators most frequently encounter.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>State Guard Licensing and Payroll Timing</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Most states require private security companies to obtain a company-level license and require individual guards to hold personal security guard licenses before performing guard services. The licensing timeline matters for payroll: if a guard starts working before their license is issued, the security company may face regulatory penalties from the state licensing board and potentially liability for guard work performed during the unlicensed period.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Some states have expedited temporary license provisions that allow guards to work while their full license application is processed. Others have strict prohibitions on working without a current license. The payroll department should have a checklist that confirms license status before a new guard is activated in the payroll system and receives their first paycheck.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/compliance-assistance" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's compliance assistance resources</a> cover the federal wage and hour obligations that apply to security companies, which operate alongside state licensing rules to create the full compliance framework.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Workers Compensation Classification for Guards</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Workers compensation premiums for security companies are calculated based on classification codes that reflect the risk profile of different job functions. Armed guards carry a higher risk profile than unarmed guards and are typically classified under higher-rate codes. Supervisors and management staff may be classified separately from field guards at lower rates.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Workers compensation audits by insurers typically occur annually and review actual payroll by classification code. If a security company has been classifying all employees under a single guard code without distinguishing armed from unarmed or field from administrative, the audit may result in a premium deficiency assessment for the underpaid portion. Payroll must track employee classification by workers comp code and report separately when the policy requires it.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Some states require specific workers compensation coverage for armed guards beyond standard commercial policies. Before deploying armed guards, confirm that the workers compensation policy explicitly covers armed security operations and that the coverage limits are appropriate for the risk.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-State Payroll Registration</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Security companies that operate in multiple states must be registered for payroll taxes in every state where they have employees working. This includes: state income tax withholding account registration, state unemployment insurance account registration, and local tax registration in jurisdictions that impose local income taxes (such as New York City, Philadelphia, and many Ohio and Pennsylvania municipalities).
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          State new hire reporting is also required in each state where a new employee works. Most states require that new hire reports be filed within 20 days of the employee's first day of work. Failure to file on time results in penalties, and some states share new hire data with child support enforcement agencies, making timely reporting a legal obligation for child support withholding purposes.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The administrative burden of multi-state registration and ongoing compliance is one of the primary drivers of payroll outsourcing for security companies. A managed payroll provider handles all state registrations, calculates and remits state taxes for each state, and files all state payroll tax returns on the correct schedule.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>FLSA Record-Keeping for Security Operations</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Employee name, address, and Social Security Number</li>
          <li>Daily and weekly hours worked for all non-exempt guards</li>
          <li>Wage rate, including shift differentials and SCA rates for covered contracts</li>
          <li>Total daily and weekly straight-time and overtime earnings</li>
          <li>All deductions from wages with authorization documentation</li>
          <li>Dates of payment and period covered by each payroll</li>
          <li>Records retained for: 3 years (payroll records) and 2 years (time records)</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Security Company Payroll Compliance Managed</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages security company payroll compliance including multi-state registration, workers comp reporting, and FLSA record-keeping at $25 to $45 PEPM. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/security"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Security Company Payroll Services
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
        "headline": "Security Company Payroll Compliance: State Licensing, Workers Comp, and Guard Payroll Rules",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/security/security-company-payroll-compliance"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Security", "item": "https://www.beghr.com/blog/payroll/security" },
          { "@type": "ListItem", "position": 5, "name": "Security Payroll Compliance", "item": "https://www.beghr.com/blog/payroll/security/security-company-payroll-compliance" }
        ]
      }) }} />
    </article>
  );
}
