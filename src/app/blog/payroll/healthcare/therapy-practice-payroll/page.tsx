import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Therapy Practice Payroll, Per-Session Pay Explained | BEG",
  description: "Therapy practice payroll: per-session pay, PTO accrual, productivity thresholds, and contractor vs employee classification. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/healthcare/therapy-practice-payroll" },
  openGraph: {
    title: "Therapy Practice Payroll, Per-Session Pay Explained | BEG",
    description: "Therapy practice payroll: per-session pay, productivity thresholds, PTO for part-time clinicians, and contractor classification. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/healthcare/therapy-practice-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Therapy Practice Payroll, Per-Session Pay Explained | BEG", description: "Therapy practice payroll: per-session pay, productivity thresholds, PTO for part-time clinicians, and contractor classification. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Are therapists who own their own caseload independent contractors or employees?",
    answer: "The contractor vs. employee analysis for therapists follows the same economic reality test that applies in other industries, but the nature of clinical work creates specific factors that favor employee status in many practices. If the practice: sets the therapist's schedule, assigns clients to the therapist, controls the treatment protocols or documentation requirements, requires the therapist to work exclusively or primarily at the practice, provides the office space, EHR access, and billing services, and pays the therapist a set rate per session -- those factors collectively point toward employment. Independent contractors typically set their own fees, manage their own billing, and control their own caseload. Misclassifying therapists as contractors is one of the more common classification errors in behavioral health.",
  },
  {
    question: "How do we structure payroll for therapists paid per session rather than by the hour?",
    answer: "Per-session compensation for therapists is similar to piece-rate pay: the therapist earns a fixed amount for each completed session (or a percentage of collections for that session). For overtime purposes, per-session employees are still entitled to time-and-a-half for hours over 40 in the workweek. To calculate the overtime premium, you divide total session compensation by total hours worked to get the regular rate, then pay the additional 0.5x for overtime hours. If therapists routinely work more than 40 hours in a week due to documentation time, supervision, or administrative duties, overtime liability accumulates on each excess hour. We configure per-session payroll to track total hours and apply overtime correctly.",
  },
  {
    question: "How does PTO accrual work for part-time therapists with variable session loads?",
    answer: "PTO accrual for part-time employees with variable schedules can be structured a few ways: accrual per hour worked (a fixed number of hours earned per hour of work, regardless of the number of sessions), accrual per pay period based on scheduled hours, or a front-loaded grant at the beginning of a period. For therapists with unpredictable session counts, per-hour accrual is the most accurate and defensible method because it ties earned PTO directly to actual work. Some state paid leave laws require specific accrual methods -- California, for instance, requires that accrued PTO be treated as wages and cannot be forfeited.",
  },
  {
    question: "What are productivity thresholds and how do they interact with overtime?",
    answer: "Productivity thresholds are minimum session counts that a therapist must complete per pay period to maintain full employment status or to remain on schedule. Thresholds are operational targets, not payroll obligations -- if a therapist falls below the threshold, you may have a performance conversation, but you cannot reduce their pay below minimum wage for hours actually worked. Similarly, if a therapist does not meet their session target, that does not excuse unpaid overtime for hours worked over 40. Overtime is based on actual hours worked, not whether the employee met their productivity goal for the pay period.",
  },
  {
    question: "We have group practice with multiple locations. How do we handle payroll when therapists split their time?",
    answer: "A therapist who works at multiple locations has their hours counted in aggregate for overtime purposes. If a therapist sees clients at Location A for 25 hours and Location B for 20 hours in the same workweek, they have worked 45 hours and are owed 5 hours of overtime -- regardless of how the sessions were split across locations. We configure multi-location tracking under a single employee record so that cross-location hours aggregate correctly for overtime calculation.",
  },
  {
    question: "What does BEG charge for therapy practice payroll?",
    answer: "BEG manages therapy practice payroll at $25 per employee per month on your existing system, or $45 per employee per month on BEG's iSolved platform. For a 15-clinician group practice, that is $375 to $675 per month, all-inclusive. Per-session pay calculations, PTO accrual, multi-location tracking, and W-2 production included. Live in 3 to 5 business days from contract signing.",
  },
];

export default function TherapyPracticePayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Healthcare</p>
              <h1>Therapy Practice Payroll: Per-Session Pay, PTO Accrual, and Clinician Classification (2026)</h1>
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
          Therapy and behavioral health practices have a payroll structure unlike most businesses. Therapists may be paid per completed session or as a percentage of collections, not by the hour. They may work variable schedules with inconsistent session loads week to week. Many practices mix employees and contractors in ways that create significant classification risk. And the question of whether a therapist earns overtime -- and how to calculate it -- depends on pay structure in ways that most payroll systems are not configured to handle correctly out of the box.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Therapy Practice Pay Structures at a Glance</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Pay Structure</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>How It Works</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Overtime Calculation Method</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Salary", "Fixed amount per pay period regardless of sessions", "Must earn at least $684/week; OT exempt if salaried and qualified"],
                ["Per session flat rate", "Fixed amount per completed session", "Regular rate = total session pay / total hours worked; OT on excess"],
                ["Percentage of collections", "Percent of what insurance/client pays per session", "Same as per session -- regular rate must be calculated weekly"],
                ["Hourly", "Paid per hour worked (direct service + admin)", "Standard 1.5x after 40 hours per week"],
                ["Base + bonus", "Low base salary with bonus tied to session volume", "Non-discretionary bonuses included in regular rate for OT"],
              ].map(([structure, how, ot], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{structure}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{how}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{ot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Contractor vs. Employee Classification in Behavioral Health</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The IRS and Department of Labor use a multi-factor analysis to determine whether a therapist is an employee or independent contractor. The behavioral control factors -- who sets the schedule, who assigns clients, who determines treatment protocols -- are heavily weighted. The <a href="https://www.dol.gov/agencies/whd/flsa/misclassification" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's worker classification resources</a> outline the economic realities test that applies under the FLSA.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Therapists who function as contractors in name but employees in practice expose the practice to multi-year back taxes, benefits owed, and penalties. The liability is not limited to the IRS -- state agencies conduct their own audits and may reach different conclusions than the federal analysis. We can help you configure the correct classification for each population at setup, but the classification decision requires the practice to review actual working arrangements with employment counsel.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>PTO Accrual for Clinicians with Variable Session Loads</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The most equitable and audit-defensible PTO method for therapists with unpredictable session counts is per-hour accrual: the therapist earns a set number of PTO hours for each hour worked, regardless of how many sessions they complete. This method requires tracking total hours worked, including documentation and administrative time, not just face-to-face session time.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Several states treat accrued PTO as earned wages that cannot be forfeited. If your practice has therapists in California, Colorado, Massachusetts, or similar states, your PTO policy must account for state-specific vesting and payout rules. We configure PTO accrual per employee based on your policy and applicable state rules.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Therapy Practices</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Per-session and percentage-of-collections payroll with overtime calculation</li>
          <li>Regular rate calculation per pay period for non-hourly therapists</li>
          <li>PTO accrual on a per-hour basis for variable-schedule employees</li>
          <li>Multi-location hour aggregation for overtime tracking</li>
          <li>Separate W-2 and 1099 processing for employees and contractors</li>
          <li>State-specific PTO and final pay rules applied per employee location</li>
          <li>Payroll tax filings and W-2 production</li>
          <li>Setup in 3 to 5 business days from contract signing</li>
                    <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> -- fully managed payroll at $25-$45 PEPM, all 50 states</li>
            </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Payroll Built for How Therapists Actually Get Paid</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages therapy practice payroll at $25 to $45 per employee per month. Per-session calculations, PTO accrual, and multi-location tracking included. Live in 3 to 5 business days.
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
        "headline": "Therapy Practice Payroll: Per-Session Pay, PTO Accrual, and Clinician Classification (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/healthcare/therapy-practice-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Healthcare", "item": "https://www.beghr.com/blog/payroll/healthcare" },
          { "@type": "ListItem", "position": 5, "name": "Therapy Practice Payroll", "item": "https://www.beghr.com/blog/payroll/healthcare/therapy-practice-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Dental Office Payroll Outsourcing (Full Breakdown)", excerpt: "Dental office payroll outsourcing vs. hiring in-house. Hygienist tips, associate dentist comp, DSO...", href: "/blog/payroll/healthcare/dental" },
        { category: "Payroll", title: "Healthcare Payroll Benefits Integration (Full Breakdown)", excerpt: "Managed payroll for healthcare. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/healthcare/healthcare-benefits-integration-payroll" },
        { category: "Payroll", title: "Healthcare Payroll Direct Deposit Setup, Step by Step", excerpt: "Managed payroll for healthcare. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/healthcare/healthcare-direct-deposit-setup" },
      ]} />
      </article>
  );
}
