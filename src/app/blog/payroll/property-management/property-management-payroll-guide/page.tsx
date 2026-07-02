import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Management Payroll [2026 Data] | BEG",
  description: "Property management payroll guide: resident manager housing allowances, leasing commissions, maintenance overtime, and multi-property consolidated payroll. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/property-management/property-management-payroll-guide" },
  openGraph: {
    title: "Property Management Payroll [2026 Data] | BEG",
    description: "Property management payroll guide: housing allowances, leasing commissions, maintenance overtime, and multi-property consolidated payroll. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/property-management/property-management-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Property Management Payroll [2026 Data] | BEG", description: "Property management payroll: housing allowances, commissions, overtime, and multi-property consolidated payroll.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What is IRC Section 119 and how does it apply to resident managers?",
    answer: "IRC Section 119 allows an employer to exclude the value of housing provided to an employee from gross income if the housing is furnished for the convenience of the employer and the employee is required to accept the housing as a condition of employment. For resident managers at apartment complexes, the exclusion typically applies because the manager must live on-site to fulfill their duties (responding to after-hours maintenance calls, monitoring the property, managing tenant issues). When the exclusion applies, the housing value is not included in the employee's taxable wages and is not subject to FICA. The exclusion must be properly documented and the conditions must genuinely be met.",
  },
  {
    question: "How does leasing commission payroll work for apartment leasing agents?",
    answer: "Leasing agent commissions are earned when a lease is executed and the tenant moves in. The commission is added to the agent's regular wages and processed through payroll as additional compensation. Federal and state income tax withholding applies to the full commission amount. FICA taxes also apply. The commission must be paid no later than the next regular payroll run following when it was earned. Some property management companies attempt to pay commissions as separate lump-sum payments outside the payroll system, which creates tax withholding compliance issues. All compensation to W-2 employees must flow through payroll.",
  },
  {
    question: "How do we handle payroll for maintenance staff who work on-call and overtime?",
    answer: "Maintenance staff are typically non-exempt employees under FLSA and are entitled to overtime at 1.5x their regular rate for all hours over 40 in a workweek. On-call time is counted as hours worked if the employee is required to remain at or near the workplace or if the restrictions on their freedom are so significant that they cannot use the on-call time effectively for personal activities. Maintenance staff who must remain on property and respond within 30 minutes are generally considered to be working during on-call periods. This on-call time counts toward the overtime threshold. Payroll must track on-call hours accurately.",
  },
  {
    question: "We manage 15 properties under different LLCs. Can we consolidate payroll under one EIN?",
    answer: "Consolidating payroll under a single EIN requires that the single entity be recognized as the common law employer of all the workers. If each LLC is a separate legal entity and each is the employer of its own on-site staff, each LLC needs its own EIN and payroll accounts. However, a management company that employs all staff and then provides services to the property LLCs can process all payroll under the management company's EIN and allocate costs to individual properties for accounting purposes. This is a common structure. The key is that the legal employer must be the entity issuing W-2s, not the property LLC.",
  },
  {
    question: "What records do we need to keep for property management payroll compliance?",
    answer: "Under FLSA, employers must keep payroll records for at least 3 years and records used to compute wages (time cards, schedules) for at least 2 years. For tax purposes, the IRS recommends keeping employment tax records for at least 4 years. For properties with Section 8 or HUD contracts, additional record-keeping requirements may apply under the contract terms. Housing allowance documentation under IRC Section 119 should be retained as long as the arrangement is in place plus at least 4 years. Written agreements establishing the on-site residency requirement for resident managers are critical documentation and should be retained permanently.",
  },
  {
    question: "How do we handle payroll for seasonal leasing staff hired during peak rental season?",
    answer: "Seasonal leasing staff are W-2 employees and must be onboarded through the standard new hire process: W-4, I-9, direct deposit authorization, and state new hire reporting. If they are expected to work fewer than 130 hours per month consistently, they may be classified as part-time for ACA purposes and the offer-of-coverage obligation may not apply, depending on the ACA measurement period in effect. Seasonal employees who work a defined season (e.g., May through August) and are not expected to return are generally exempt from ACA lookback requirements if the season is short enough. However, if the same seasonal employees return each year, ACA tracking over a longer measurement period may be required.",
  },
];

export default function PropertyManagementPayrollGuidePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Property Management</p>
              <h1>Property Management Payroll Guide: Housing Allowances, Commission, and Multi-Property Compliance (2026)</h1>
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
          Property management payroll combines the complexity of real estate tax rules, commission-based pay structures, and multi-entity accounting into a single administrative burden. Resident managers may qualify for housing allowance exclusions under federal tax law. Leasing agents earn commissions that must be processed through payroll on specific timing. Maintenance staff work irregular hours and on-call shifts that affect overtime calculations. And companies managing multiple properties often operate through multiple LLCs, which creates entity-level payroll complexity. This guide covers all of it.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Resident Manager Housing Allowances</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Many apartment communities require an on-site resident manager who lives in a unit provided by the property. Under IRC Section 119, the value of employer-provided housing may be excludable from the employee's gross income if two conditions are met: the housing is furnished for the convenience of the employer, and the employee is required to accept the housing as a condition of employment.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For a resident manager who must live on-site to respond to tenant emergencies, monitor property conditions, and be available outside business hours, both conditions are typically met. When the exclusion applies, the fair rental value of the unit is not included in the manager's W-2 wages and is not subject to FICA taxes. This is a meaningful benefit: a $1,500 per month housing unit represents $18,000 of compensation that is tax-free to the employee and FICA-free for both employee and employer.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Proper documentation is required. The employment agreement should specify that on-site residence is a condition of employment. The property should maintain written documentation of the business reasons for the on-site requirement. If the housing is provided as a convenience to the employee rather than a business requirement, the exclusion does not apply and the fair rental value must be included in wages.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>IRS Publication 15-B, Employer's Tax Guide to Fringe Benefits</a>, provides the authoritative guidance on IRC Section 119 housing exclusions and the documentation required to support them.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Leasing Commission Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Leasing agents at apartment communities typically earn a base wage plus a commission for each lease executed. The commission may be structured as a flat dollar amount per lease, a percentage of the first month's rent, or a tiered amount based on lease term or unit type. Some properties also pay renewal commissions when existing tenants re-sign.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Commissions earned by W-2 employees must be processed through payroll. They are subject to federal and state income tax withholding (using either the aggregate method or the 22% supplemental flat rate), Social Security and Medicare taxes, and any applicable state payroll taxes. Commissions cannot be paid as separate cash payments outside the payroll system without creating tax compliance violations.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Chargeback provisions are common in leasing commission plans: if a tenant breaks a lease within a specified period, the leasing agent's commission may be partially or fully charged back. Chargebacks must be handled carefully in payroll. The IRS does not allow retroactive adjustments to prior period wages. Instead, chargebacks in the current period are reflected as negative commission entries that reduce current period supplemental pay, not as corrections to prior W-2 wages.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Maintenance Overtime and On-Call Pay</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Maintenance technicians are almost always non-exempt from FLSA overtime requirements. Any hours over 40 in a workweek must be paid at 1.5x the regular rate of pay. The regular rate includes all remuneration except those excluded by statute, such as overtime premiums, gifts, and certain travel expense payments.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          On-call policies create a significant compliance risk if not structured carefully. If a maintenance technician must remain on property or within a specific distance and be available to respond within minutes, the on-call time is likely compensable working time under FLSA. Unrestricted on-call time, where the employee can go wherever they choose and simply carry a phone, is generally not compensable if response expectations are reasonable.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Shift differentials for evening, overnight, and weekend maintenance shifts are common at larger properties. These differentials must be included in the regular rate calculation for overtime purposes, which increases the overtime premium above the simple 1.5x base wage calculation.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-Property Payroll Consolidation</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Property management companies that operate multiple properties typically want consolidated payroll processing but per-property cost allocation. The most common structure is a management company that employs all staff and bills each property entity for its allocated labor costs. The management company runs a single payroll under its EIN, and property-level cost allocation is handled through accounting journal entries rather than separate payroll runs.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          This structure simplifies payroll administration significantly. Instead of 15 separate payroll accounts for 15 properties, the management company has one. W-2s are issued by the management company. Tax deposits are made under a single EIN. The property LLCs receive allocated labor cost invoices but are not payroll employers. This structure requires legal and accounting review to ensure it reflects the actual employment relationships accurately.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Property Management Companies</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages property management payroll at $25 to $45 per employee per month, including housing allowance configuration, commission processing, and multi-property cost allocation. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/property-management"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Property Management Payroll Services
            </Link>
            <PricingCta service="managed-payroll" subline={false} />
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
        "headline": "Property Management Payroll Guide: Housing Allowances, Commission, and Multi-Property Compliance (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/property-management/property-management-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Property Management", "item": "https://www.beghr.com/blog/payroll/property-management" },
          { "@type": "ListItem", "position": 5, "name": "Property Management Payroll Guide", "item": "https://www.beghr.com/blog/payroll/property-management/property-management-payroll-guide" }
        ]
      }) }} />
    </article>
  );
}
