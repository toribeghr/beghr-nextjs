import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "501(c)(3) Payroll Compliance: What Nobody Tells You | BEG",
  description: "501(c)(3) payroll compliance: FICA exemptions, FUTA rules, executive comp reporting on Form 990, and volunteer vs employee rules. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/nonprofits/501c3-payroll-compliance" },
  openGraph: {
    title: "501(c)(3) Payroll Compliance: What Nobody Tells You | BEG",
    description: "Nonprofit payroll: FICA exemptions, FUTA rules, 990 executive comp reporting, and volunteer classification. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/nonprofits/501c3-payroll-compliance",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "501(c)(3) Payroll Compliance: What Nobody Tells You | BEG", description: "Nonprofit payroll: FICA exemptions, FUTA rules, 990 exec comp reporting, and volunteer classification. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Are 501(c)(3) organizations exempt from paying payroll taxes?",
    answer: "Not entirely. 501(c)(3) organizations are exempt from federal income tax on their own income, but they are generally still required to withhold and pay FICA (Social Security and Medicare) taxes on employee wages. There is a narrow exception: certain religious organizations may qualify for an FICA exemption under IRC Section 3121(w), but this requires a specific election and applies only to ministers and certain other religious order members. For most 501(c)(3) nonprofits, FICA applies to all employees the same as it would at a for-profit organization. Similarly, state income tax withholding obligations apply even though the nonprofit itself does not pay state income tax.",
  },
  {
    question: "Is a 501(c)(3) exempt from FUTA (federal unemployment tax)?",
    answer: "Yes. Organizations described in IRC Section 501(c)(3) are exempt from FUTA. They are not required to pay the federal unemployment tax that for-profit employers pay. However, nonprofits are NOT exempt from state unemployment insurance (SUI) obligations in most states. Many states require nonprofits to participate in the state SUI system, though some states allow qualifying nonprofits to opt out of SUI and instead self-insure: paying benefits directly to former employees who qualify, which avoids paying SUI premiums but creates cash flow risk when claims arise.",
  },
  {
    question: "How does Form 990 executive compensation disclosure affect our payroll records?",
    answer: "Form 990 requires 501(c)(3) organizations to disclose compensation paid to officers, directors, trustees, key employees, and the five highest-compensated employees. The reported figures must include not just base salary but also bonuses, deferred compensation, and the value of fringe benefits that are reported as income. Payroll records must support the 990 disclosure -- if your payroll system cannot produce a per-person compensation summary including all reportable elements, you may have a reconciliation problem at 990 preparation time. We produce compensation summaries that reconcile to W-2 boxes and support 990 Schedule J preparation.",
  },
  {
    question: "How do we handle volunteers who occasionally perform work that would otherwise be paid?",
    answer: "Volunteers who freely provide services to a nonprofit without expectation of compensation are not employees and are not on payroll. However, a volunteer cannot do the same type of work for an organization as a paid employee -- if the organization employs paid workers to do a task, it cannot also use volunteers for the same task without compensation. Additionally, 'volunteer stipends' or 'expense reimbursements' that are actually compensating volunteers for their time must be treated as wages subject to withholding if they exceed actual expenses incurred. The line between volunteer and employee is one of the most litigated areas in nonprofit employment law.",
  },
  {
    question: "We have AmeriCorps members and intern stipends. How are those handled?",
    answer: "AmeriCorps members receive education awards and living allowances that have specific tax treatment defined by the national service program rules -- generally these are not treated as wages, though reporting requirements apply. Intern stipends are treated as wages subject to FICA and withholding if the intern is performing services as an employee of the organization. Unpaid internships must meet a strict six-factor test under the FLSA -- most internships at nonprofits that provide substantive work do not qualify as unpaid. We help configure each population's payroll treatment correctly at setup.",
  },
  {
    question: "What does BEG charge for nonprofit payroll?",
    answer: "BEG manages 501(c)(3) nonprofit payroll at $25 per employee per month on your existing system, or $45 per employee per month on BEG's isolved platform. We understand FICA applicability, FUTA exemption, and 990 compensation disclosure requirements. For a 20-person nonprofit, that is $500 to $900 per month, all-inclusive.",
  },
];

export default function Nonprofit501c3PayrollPage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-27", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Nonprofits</p>
              <h1>501(c)(3) Payroll Compliance: FICA Exemptions, FUTA Rules, and Form 990 Reporting (2026)</h1>
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
          Nonprofits often assume their tax-exempt status extends to payroll taxes. It mostly does not. 501(c)(3) organizations are exempt from federal income tax and FUTA, but they are still required to withhold and remit FICA, comply with state unemployment insurance rules, meet state income tax withholding obligations, and navigate a distinct set of compensation disclosure requirements on Form 990. Running nonprofit payroll through a system built for for-profit businesses without understanding these distinctions creates compliance errors on both sides -- missing genuine exemptions and failing to apply rules that do apply.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What Payroll Tax Exemptions Actually Apply to 501(c)(3) Organizations</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Tax / Obligation</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Applies to 501(c)(3)?</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Federal income tax (org)", "No -- exempt", "This is the core 501(c)(3) benefit"],
                ["FICA -- employee share withholding", "Yes", "Must withhold Social Security and Medicare"],
                ["FICA -- employer match", "Yes", "Employer pays 7.65% match same as for-profit"],
                ["FUTA", "No -- exempt", "Section 501(c)(3) orgs are FUTA exempt"],
                ["State unemployment insurance (SUI)", "Usually yes -- check state", "Many states require SUI; some allow nonprofit self-insurance"],
                ["State income tax withholding", "Yes", "Must withhold per state rules same as any employer"],
                ["Minister FICA exemption", "Available for qualifying ministers", "IRC 3121(w) election required; narrow"],
              ].map(([tax, applies, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{tax}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{applies}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Form 990 Compensation Disclosure and Payroll Records</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Form 990 requires public disclosure of compensation paid to the five highest-paid employees and all officers, directors, and key employees. The figures must be comprehensive: base salary, bonus, severance, deferred compensation, and the value of includable fringe benefits. The <a href="https://www.irs.gov/charities-non-profits/form-990-compensation-reporting" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>IRS compensation reporting guidance for Form 990</a> details what must be included in each box of Schedule J.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          If your payroll records do not capture all compensation elements in a way that maps to Schedule J requirements, year-end 990 preparation becomes a manual reconciliation exercise. We structure compensation records to support clean 990 disclosure without additional work at year end.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Reasonable Compensation for Nonprofit Executives</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The IRS can revoke 501(c)(3) status or impose excise taxes on "excess benefit transactions" -- compensation paid to disqualified persons (executives, board members, substantial donors) that exceeds reasonable compensation for services rendered. To protect the organization, the board should establish and document a rebuttable presumption process: approve compensation based on comparability data, document the decision in board minutes, and maintain records.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Payroll records that clearly show what each officer was paid -- and when -- provide the baseline documentation the board process requires. We flag executive compensation on a per-person basis in our reporting.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for 501(c)(3) Organizations</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>FICA withholding and employer match for all employees (including FUTA exemption flag)</li>
          <li>State SUI configuration (participation or self-insurance per state rules)</li>
          <li>State income tax withholding per employee location</li>
          <li>Executive compensation records structured for 990 Schedule J</li>
          <li>Minister FICA exemption configuration where applicable</li>
          <li>Stipend and intern payroll treatment</li>
          <li>W-2 production and payroll tax filings</li>
          <li>Multi-state payroll for nonprofits operating across state lines</li>
                    <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> -- fully managed payroll at $25-$45 PEPM, all 50 states</li>
            </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Nonprofit Payroll That Knows What Exempt Actually Means</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages 501(c)(3) nonprofit payroll at $25 to $45 per employee per month. All-inclusive, 990-ready records, FUTA-exempt configuration. Live in 3 to 5 business days.
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

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "501(c)(3) Payroll Compliance: FICA Exemptions, FUTA Rules, and Form 990 Reporting (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/nonprofits/501c3-payroll-compliance"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Nonprofits", "item": "https://www.beghr.com/blog/payroll/nonprofits" },
          { "@type": "ListItem", "position": 5, "name": "501(c)(3) Payroll", "item": "https://www.beghr.com/blog/payroll/nonprofits/501c3-payroll-compliance" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Nonprofit Payroll Outsourcing: Is It Worth It?", excerpt: "Nonprofit payroll outsourcing for 501(c)(3) organizations. Grant-funded payroll, Form 990, FUTA...", href: "/blog/payroll/nonprofits/charity-payroll" },
        { category: "Payroll", title: "Grant-Funded Payroll: What Nobody Tells You on Audits", excerpt: "Grant-funded payroll: cost allocation, time tracking for funder compliance, and single audit...", href: "/blog/payroll/nonprofits/grant-funded-payroll" },
        { category: "Payroll", title: "Nonprofit Payroll Benefits: What Nobody Tells You", excerpt: "Managed payroll for nonprofits. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/nonprofits/nonprofits-benefits-integration-payroll" },
      ]} />
      </article>
  );
}
