import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Security Guard Overtime Payroll: 24/7 FLSA Rules | BEG",
  description: "FLSA overtime rules for security guards: 24/7 operations, shift differential regular rate, state daily overtime, and correct overtime calculation.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/security/security-guard-overtime-payroll" },
  openGraph: {
    title: "Security Guard Overtime Payroll: 24/7 FLSA Rules | BEG",
    description: "Overtime rules for security guards: 24/7 shift operations, shift differentials in the regular rate, state daily overtime laws, and correct calculation. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/security/security-guard-overtime-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Security Guard Overtime Payroll: 24/7 FLSA Rules | BEG", description: "FLSA overtime rules for security guards working 24/7 operations: regular rate, shift differentials, and state rules.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Do security guards working 12-hour shifts automatically get overtime every week?",
    answer: "Not automatically under federal FLSA. FLSA overtime is based on weekly hours, not daily hours. A guard working three 12-hour shifts in a workweek works 36 hours total, which is below the 40-hour overtime threshold, and owes no FLSA overtime. A guard working four 12-hour shifts works 48 hours and owes 8 hours of overtime. In California, the analysis is different: California requires overtime pay for all hours over 8 in a single workday, regardless of weekly total. A guard working a single 12-hour shift in California owes 4 hours of overtime for that day, even if they only work that one shift all week. Security companies with California operations must apply California daily overtime rules in addition to FLSA weekly rules.",
  },
  {
    question: "How do we calculate overtime when a guard works both day shifts and overnight shifts with different pay rates in the same week?",
    answer: "When a guard works hours at different pay rates in the same workweek, overtime is calculated on the weighted average regular rate. The weighted average regular rate is: (total straight-time earnings for the week) divided by (total hours worked in the week). For example, if a guard works 20 day-shift hours at $18 and 28 overnight hours at $21 (including a $3 differential) for a 48-hour week: total straight-time earnings = (20 x $18) + (28 x $21) = $360 + $588 = $948. Regular rate = $948 / 48 = $19.75. Overtime supplement = $19.75 x 0.5 x 8 overtime hours = $79. Total compensation = $948 + $79 = $1,027. Overtime calculated only on the base rate ($18) would have produced a lower (and incorrect) result.",
  },
  {
    question: "Can security guards waive overtime through an agreement with the employer?",
    answer: "No. FLSA overtime rights cannot be waived by employees or agreed away through employment contracts. Any agreement between an employer and employee that purports to waive overtime is unenforceable. Security companies sometimes use flat-rate or salary arrangements to attempt to avoid overtime liability, but FLSA requires overtime to be paid to non-exempt employees regardless of how compensation is structured. A guard paid a flat weekly salary is still owed overtime for hours over 40 in a workweek unless the guard meets a specific FLSA exemption (which most security guards do not). The DOL regularly investigates and finds back-wage violations in security companies using flat-rate arrangements to avoid overtime.",
  },
  {
    question: "What is the 7(b)(1) or 7(b)(2) FLSA partial overtime exemption and does it apply to security companies?",
    answer: "FLSA Sections 7(b)(1) and 7(b)(2) allow certain employers to use alternative overtime arrangements under collective bargaining agreements or guaranteed pay plans. Section 7(b)(1) allows paying overtime after 1,000 hours in a 26-week period rather than after 40 hours per week. Section 7(b)(2) allows paying overtime after 2,080 hours in a 52-week period. These provisions are available to employers in industries with irregular hours and apply only when specific conditions are met, including guaranteeing minimum annual compensation and meeting employee notification requirements. Very few security companies use these provisions because they require careful administration and union or employee consent. Standard security company payroll uses the regular weekly FLSA overtime calculation.",
  },
  {
    question: "How does on-call time work for security guard overtime?",
    answer: "On-call time for security guards is a nuanced FLSA issue. Guards who are required to remain on the employer's premises or within a restricted area during on-call periods are generally considered to be working during those periods, and the hours count toward the overtime threshold. Guards who carry a pager or phone and can use on-call time freely for personal activities are generally not considered to be working during on-call periods, and those hours do not count toward overtime unless they are called in. Guards who must respond within a very short time (e.g., 15 minutes) to a call and whose personal activities are substantially restricted as a result may have those on-call hours counted as work time even away from the employer's premises.",
  },
  {
    question: "Does compensatory time (comp time) instead of overtime cash payment work for security guards?",
    answer: "Comp time instead of cash overtime is generally not permissible for private sector employees under FLSA. Government employers may offer comp time arrangements to public sector employees under specific FLSA provisions. A private security company cannot legally substitute comp time for overtime pay for its employees. The employer must pay overtime at 1.5x the regular rate in cash for all overtime hours in the pay period in which they were worked. Telling guards they will receive time off later instead of overtime cash is an FLSA violation, even if the guards agree to the arrangement.",
  },
];

export default function SecurityGuardOvertimePayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Security Companies</p>
              <h1>Security Guard Overtime and Shift Payroll: FLSA Rules for 24/7 Operations</h1>
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
          Security companies running 24/7 operations generate overtime in virtually every payroll period for a significant portion of their workforce. Understanding how to calculate overtime correctly, how to handle the interaction between shift differentials and the regular rate, and how state daily overtime laws affect long-shift scheduling is essential for both compliance and cost management. This post covers the complete FLSA and state overtime analysis for security guard employers.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>FLSA Overtime Basics for Security Operations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The Fair Labor Standards Act requires overtime pay at 1.5x the regular rate for all hours worked over 40 in a workweek. For security companies, the workweek is a fixed 168-hour period that the employer designates (e.g., Sunday midnight to Saturday midnight). Hours cannot be averaged across weeks. Each workweek stands alone for overtime calculation.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Security guards are almost universally non-exempt from FLSA overtime. The primary exemptions for overtime (executive, administrative, professional) require a salary basis above $684 per week and specific primary duties that most guard positions do not satisfy. A shift supervisor or operations manager might qualify for the executive exemption if they genuinely manage other employees and have hiring/firing authority. A rank-and-file guard does not.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's FLSA overtime guidance</a> provides the complete legal framework for overtime obligations, including the regular rate calculation methodology that applies to employees with multiple pay rates or shift differentials.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Regular Rate Calculation with Shift Differentials</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The FLSA regular rate is not simply the base hourly rate. It is the total straight-time compensation for the workweek divided by total hours worked. For security guards with shift differentials, the regular rate calculation must include all differential earnings.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Scenario</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Hours</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Rate</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Earnings</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Day shift hours", "24", "$18.00", "$432"],
                ["Overnight shift hours", "24", "$21.00 (with $3 diff)", "$504"],
                ["Total / Regular Rate", "48 hours", "$19.50/hr avg", "$936"],
                ["Overtime hours", "8 OT hours", "0.5x $19.50 = $9.75", "$78"],
                ["Total Compensation", "", "", "$1,014"],
              ].map(([scenario, hours, rate, earnings], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee", fontWeight: i === 4 ? 700 : 400 }}>{scenario}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee", fontWeight: i === 4 ? 700 : 400 }}>{hours}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee", fontWeight: i === 4 ? 700 : 400 }}>{rate}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee", fontWeight: i === 4 ? 700 : 400 }}>{earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>State Daily Overtime Laws</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          California requires overtime pay for all hours over 8 in a single workday (time-and-a-half) and double-time pay for hours over 12 in a single workday. This applies regardless of weekly total. A guard in California working a single 12-hour shift owes 4 hours of overtime even if they work no other days that week.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Alaska and Nevada also have daily overtime requirements. Security companies with guards in these states must apply both daily and weekly overtime rules and pay whichever results in greater total compensation for the employee. The two calculations are not additive; the employer pays the higher of the two results, not both.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          States with daily overtime rules require the payroll system to calculate overtime at the daily level, not just the weekly level. Standard payroll software configured only for FLSA weekly overtime will systematically underpay guards in daily overtime states. This is a configuration issue, not a data entry issue, and must be addressed at the payroll system level.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Workweek Boundary Management for Overnight Shifts</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Overnight shifts that cross the employer's designated workweek boundary must be split between workweeks. Hours worked before midnight (or whatever time the workweek ends) belong to the ending week. Hours worked after the workweek boundary belong to the new week. This split affects overtime calculation for both weeks and must be handled correctly in the timekeeping and payroll system.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Security companies that use manual time entry or simple timeclock systems without workweek-boundary awareness frequently accumulate overnight shift errors. A time and attendance system that automatically assigns hours to the correct workweek based on the designated boundary eliminates this source of overtime calculation errors.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Security Guard Overtime Calculated Correctly</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages security company payroll with correct overtime calculation including shift differentials in the regular rate and state daily overtime rules at $25 to $45 PEPM. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/security"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Security Company Payroll Services
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
        "headline": "Security Guard Overtime and Shift Payroll: FLSA Rules for 24/7 Operations",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/security/security-guard-overtime-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Security", "item": "https://www.beghr.com/blog/payroll/security" },
          { "@type": "ListItem", "position": 5, "name": "Security Guard Overtime", "item": "https://www.beghr.com/blog/payroll/security/security-guard-overtime-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Outsourcing Security Company Payroll: What Changes", excerpt: "Why security companies outsource payroll, what to look for in a provider, and what changes...", href: "/blog/payroll/security/outsource-security-company-payroll" },
        { category: "Payroll", title: "Security Company Payroll Compliance for 2026", excerpt: "Payroll compliance for security companies: state guard licensing, workers compensation...", href: "/blog/payroll/security/security-company-payroll-compliance" },
        { category: "Payroll", title: "Security Company Payroll Guide: Guard Shifts & SCA", excerpt: "Security company payroll guide: SCA compliance for federal contracts, 24/7 shift processing,...", href: "/blog/payroll/security/security-company-payroll-guide" },
      ]} />
      </article>
  );
}
