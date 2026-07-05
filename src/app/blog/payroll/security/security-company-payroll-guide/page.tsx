import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Security Company Payroll Guide: Guard Shifts & SCA | BEG",
  description: "Security company payroll guide: SCA compliance for federal contracts, 24/7 shift processing, overtime for long shifts, and high-volume W-2 production.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/security/security-company-payroll-guide" },
  openGraph: {
    title: "Security Company Payroll Guide: Guard Shifts & SCA | BEG",
    description: "Security company payroll guide: SCA compliance, 24/7 shift payroll, overtime for long shifts, and high-turnover W-2 production. BEG managed payroll at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/security/security-company-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-security-security-company-payroll-guide.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Security Company Payroll Guide: Guard Shifts & SCA | BEG", description: "Security company payroll: SCA compliance, 24/7 shifts, overtime, and high-volume W-2s.", images: ["https://www.beghr.com/blog-images/blog-payroll-security-security-company-payroll-guide.webp"] },
};

const faqs = [
  {
    question: "What is the Service Contract Act and which security contracts does it cover?",
    answer: "The Service Contract Act (SCA) requires that contractors and subcontractors performing services on federal government contracts valued at over $2,500 pay their service employees at least the prevailing wage rates and fringe benefits for the locality where the services are performed. For security companies, SCA applies to guard and security services on federal installations, federal buildings, military bases, and other government facilities. SCA wage determinations are issued by the DOL for specific localities and occupations, including security guard classifications. Security companies bidding on federal contracts must identify the applicable wage determination and confirm their pay structure meets or exceeds SCA requirements.",
  },
  {
    question: "How do shift differentials work in security guard payroll?",
    answer: "Security guards often work evening, overnight, and weekend shifts that warrant additional pay above the base rate. Shift differentials are additional hourly compensation for working less desirable hours. In payroll, differentials must be tracked as separate earning codes that apply to hours worked during defined shift windows. The differential is included in the regular rate of pay for overtime calculation purposes under FLSA. A security guard earning $18 per hour base rate plus a $2 per hour overnight differential is earning an effective rate of $20 per hour during overnight shifts. Overtime must be calculated on the weighted average regular rate for the week, including all differential hours.",
  },
  {
    question: "How does overtime work for guards who work 12-hour or longer shifts?",
    answer: "Under federal FLSA, overtime is triggered when weekly hours exceed 40. A guard working three 12-hour shifts in a week (36 hours) owes no FLSA overtime. The same guard working four 12-hour shifts (48 hours) owes 8 hours of overtime at 1.5x the regular rate. In California, daily overtime rules also apply: hours over 8 in a single day require time-and-a-half, and hours over 12 in a single day require double-time. Security companies with California operations must apply both daily and weekly overtime rules and pay whichever results in higher total compensation. Most other states follow the federal weekly-only standard.",
  },
  {
    question: "What makes security company W-2 production more complex than other industries?",
    answer: "Security companies typically have very high employee turnover, which means producing W-2s for a large number of employees who worked briefly during the year. A security company that employs 200 guards across the year may have had 350 or more individual employees when accounting for turnover. Each former employee requires a W-2 mailed to their last known address by January 31. Tracking current mailing addresses for former employees is a significant administrative challenge. Additionally, SCA fringe benefit payments, shift differentials, and any hazard pay or equipment allowances must be reflected correctly in W-2 Box 1 and the applicable Box 12 codes.",
  },
  {
    question: "Do security guards need to be classified differently if they carry firearms?",
    answer: "Worker classification for FLSA and payroll purposes does not change based on whether a guard is armed or unarmed. All security guards performing services for an employer are employees, not independent contractors, under the standard classification tests. The armed status affects licensing requirements (most states require additional licensing for armed guards), workers compensation classification codes (armed guards typically have a higher rate than unarmed), and liability insurance requirements. Payroll processing is the same for armed and unarmed guards: they are W-2 employees with the same withholding and FICA obligations.",
  },
  {
    question: "How do we handle payroll for guards who work at multiple client sites in the same week?",
    answer: "Guards working at multiple client sites in the same week are still employees of the security company, and their payroll is processed under the security company's single payroll account. The total hours worked at all sites in the week are aggregated for overtime calculation. If the security company has SCA contracts at some sites and non-SCA contracts at others, the guard's hours on SCA-covered sites must be paid at least the SCA wage determination rate, while hours at non-SCA sites can be paid at the company's standard rate (which may or may not be higher than SCA). The payroll system must track which hours are SCA-covered and ensure the correct rate is applied.",
  },
];

export default function SecurityCompanyPayrollGuidePage() {
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
              <h1>Security Company Payroll Guide: Guard Shifts, SCA Compliance, and High-Volume W-2s (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-security-security-company-payroll-guide.webp" alt={`Security Company Payroll Guide: Guard Shifts & SCA`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Private security companies face a payroll compliance environment that most employers do not encounter. Federal contracts trigger Service Contract Act requirements with prevailing wage rates and mandatory fringe benefits. Around-the-clock operations create overtime exposure in every workweek. High turnover means producing W-2s for hundreds of employees who may have worked only a few shifts. Multi-state operations add state licensing and payroll tax complexity. This guide covers the complete payroll picture for private security companies in 2026.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Service Contract Act: The Federal Compliance Layer</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The McNamara-O'Hara Service Contract Act of 1965 requires that service employees on covered federal contracts be paid at least the prevailing wage and fringe benefits for their locality and occupation. For security companies, this means the DOL wage determination for the locality where guards are deployed must be obtained and applied to all hours worked on the covered contract.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          SCA wage determinations are published at sam.gov and are incorporated into federal solicitations and contracts. Each determination specifies an hourly wage rate and an hourly health and welfare (H&W) benefit rate for each covered occupation. The security guard occupation is specifically identified in SCA wage determinations. If the H&W rate is not satisfied through actual health insurance or other benefits, it must be paid in cash as additional wages.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/government-contracts/service-contracts" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's Service Contract Act compliance resources</a> provide wage determinations, compliance guides, and enforcement information for security companies working on federal contracts.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>24/7 Shift Payroll Operations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Security companies operating around-the-clock face continuous payroll processing complexity. Shifts that straddle the designated workweek boundary must be handled carefully: hours worked before the workweek cutoff are credited to one week, and hours after the cutoff belong to the next week. This split-shift handling is critical for accurate overtime calculation.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          A guard who works a 12-hour overnight shift from 8pm Sunday to 8am Monday faces a split if the employer's workweek begins at midnight Monday. The 4 hours from 8pm to midnight belong to the prior week. The 8 hours from midnight to 8am belong to the new week. The payroll system must track which hours fall in which workweek to apply overtime correctly for each week independently.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Shift scheduling software that integrates with payroll (or exports time data that imports cleanly into payroll) is essential for security companies at this scale. Manual time entry for hundreds of guards across multiple shifts is a reliable source of payroll errors.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Overtime for Long-Shift Security Operations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Security guards working 10-hour or 12-hour shifts regularly exceed 40 hours in a workweek. A guard on a 4x10 schedule works exactly 40 hours with no overtime under FLSA. A guard on a 4x12 schedule works 48 hours, generating 8 hours of overtime each week. At scale, this is a significant payroll cost that must be calculated correctly.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The overtime rate is 1.5x the regular rate, which includes base wage plus any shift differentials for the week. If a guard earns $18 base rate and $2 overnight differential for 24 of their 48 hours, the regular rate calculation: ($18 x 24 + $20 x 24) / 48 = $19 per hour regular rate. Overtime supplement: $19 x 0.5 x 8 overtime hours = $76. Total overtime cost: $19 x 8 (straight time already included in base pay) + $76 = $228. Payroll systems that calculate overtime on base rate only, ignoring differentials, systematically underpay guards.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>High-Volume W-2 Production</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Security companies with high turnover must produce W-2s for every employee who worked during the calendar year, including employees who worked a single shift. These W-2s must be mailed to the employee's last known address by January 31 (or made available electronically with employee consent). W-2s returned undelivered must be retained in the employer's files. If the employer cannot locate the employee, the W-2 should be retained until the IRS requests it.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Maintaining current employee addresses is a significant operational challenge for high-turnover security companies. Implementing a practice of updating employee addresses at every contact (payroll inquiries, schedule changes, benefit enrollment) reduces the volume of undeliverable W-2s at year-end.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Security Company Payroll at $25-$45 PEPM</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages security company payroll including SCA wage compliance, 24/7 shift overtime, and high-volume W-2 production at $25 to $45 PEPM. Setup in 3 to 5 business days.
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
        "headline": "Security Company Payroll Guide: Guard Shifts, SCA Compliance, and High-Volume W-2s (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/security/security-company-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Security", "item": "https://www.beghr.com/blog/payroll/security" },
          { "@type": "ListItem", "position": 5, "name": "Security Company Payroll Guide", "item": "https://www.beghr.com/blog/payroll/security/security-company-payroll-guide" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Outsourcing Security Company Payroll: What Changes", excerpt: "Why security companies outsource payroll, what to look for in a provider, and what changes...", href: "/blog/payroll/security/outsource-security-company-payroll" },
        { category: "Payroll", title: "Security Company Payroll Compliance for 2026", excerpt: "Payroll compliance for security companies: state guard licensing, workers compensation...", href: "/blog/payroll/security/security-company-payroll-compliance" },
        { category: "Payroll", title: "Security Guard Overtime Payroll: 24/7 FLSA Rules", excerpt: "FLSA overtime rules for security guards: 24/7 operations, shift differential regular rate, state...", href: "/blog/payroll/security/security-guard-overtime-payroll" },
      ]} />
      </article>
  );
}
