import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shift Work Payroll: The Truth About 24/7 Overtime | BEG",
  description: "Manufacturing shift work payroll: shift differentials, rotating schedules, overtime rules, and FLSA compliance. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/manufacturing/shift-work-payroll" },
  openGraph: {
    title: "Shift Work Payroll: The Truth About 24/7 Overtime | BEG",
    description: "Shift work payroll: differentials, rotating schedules, 24/7 overtime, and FLSA compliance. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/manufacturing/shift-work-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Shift Work Payroll: The Truth About 24/7 Overtime | BEG", description: "Shift work payroll: differentials, rotating schedules, 24/7 overtime, and FLSA compliance. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What is a shift differential and how is it included in overtime calculations?",
    answer: "A shift differential is additional compensation paid to employees who work less desirable shifts -- typically evening, overnight, or weekend shifts. Differentials may be expressed as a flat dollar add-on per hour (e.g., $2/hour for second shift) or as a percentage of the regular rate (e.g., 10% premium for night shift). For overtime calculations, shift differentials that are non-discretionary must be included in the employee's regular rate before computing overtime. If an employee earns $18/hour plus a $2 night differential and works 50 hours, their regular rate for overtime purposes is $20/hour, not $18/hour -- and their overtime premium is 0.5x $20 for the 10 excess hours. Using $18 as the overtime base in this scenario underpays overtime.",
  },
  {
    question: "We run 12-hour shifts with rotating schedules. How do we define a workday and workweek for overtime purposes?",
    answer: "Under the FLSA, the workday and workweek are defined by the employer and can be any fixed 24-hour and 7-day consecutive periods. For 12-hour shift operations, the workday definition matters for states with daily overtime requirements -- California, Colorado, and Alaska require overtime after 8 hours in a workday, not just weekly. For federal FLSA purposes, only weekly overtime (over 40 hours) is required. Most manufacturers set workweeks to align with their shift rotation cycle to minimize overtime exposure. We configure workday and workweek definitions at setup and apply them consistently.",
  },
  {
    question: "What is the 8 and 80 rule and can we use it for our plant operations?",
    answer: "The Section 7(j) 8-and-80 rule is a FLSA exception that allows hospitals and residential care facilities to use an 80-hour/14-day period instead of a 7-day workweek for overtime calculations, paying overtime only for hours over 8 in a day or 80 in the 14-day period. The 8-and-80 rule applies ONLY to hospitals and residential care facilities -- it does not apply to manufacturing. Manufacturing operations must use a standard 7-day workweek. If a consultant or payroll system suggests the 8-and-80 as a manufacturing solution, that is incorrect and creates overtime underpayment liability.",
  },
  {
    question: "Some of our employees are paid by piece-rate. How does overtime work?",
    answer: "Piece-rate employees -- workers paid per unit produced rather than per hour -- are still entitled to overtime under the FLSA. For overtime, you must first calculate the employee's regular rate for the week by dividing their total piece-rate earnings by the total hours worked. Then overtime is the additional 0.5x of that regular rate for each hour over 40 in the workweek. This is often called the half-time method. If an employee produces 400 units at $0.50 each and works 50 hours, their regular rate is $200/50 = $4/hour, and they owe 10 hours of overtime at $2/hour additional premium.",
  },
  {
    question: "We provide meals to plant employees during long shifts. Are those taxable?",
    answer: "Meals provided to employees on employer premises for the employer's convenience are excludable from wages under IRC Section 119. The key requirements: the meals must be provided on business premises (not cash reimbursements for meals off-site), and they must be provided for the convenience of the employer -- i.e., there is a substantial business reason such as keeping employees on-site during shifts when no food options are available. If those conditions are met, the value of the meals is not included in wages and is not subject to withholding. We can configure the meal exclusion treatment at setup for employees who receive employer-provided meals on premises.",
  },
  {
    question: "What does BEG charge for manufacturing shift work payroll?",
    answer: "BEG manages manufacturing payroll including shift differentials and 24/7 scheduling at $25 per employee per month on your existing system, or $45 per employee per month on BEG's isolved platform. For a 100-person manufacturing operation, that is $2,500 to $4,500 per month, all-inclusive. Setup takes 3 to 5 business days from contract signing.",
  },
];

export default function ShiftWorkPayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Manufacturing</p>
              <h1>Shift Work Payroll: Differentials, Rotating Schedules, and 24/7 Operations Overtime (2026)</h1>
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
          Manufacturing payroll is not complicated because the headcount is large -- it is complicated because the rules governing how those employees are paid are layered. Shift differentials that must be blended into overtime calculations. Rotating schedules that cross midnight and span multiple paydays. Piece-rate workers whose regular rate changes every week. 24/7 operations where workday definitions determine whether employees earn daily overtime. Run these incorrectly and you accumulate underpayment liability across every pay period.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Shift Differentials and the Regular Rate Problem</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The FLSA's "regular rate" is not the same as an employee's base hourly rate. It is the total compensation for the workweek divided by total hours worked. Non-discretionary bonuses and premiums -- including shift differentials -- must be included in the regular rate before computing overtime. This is one of the most common overtime calculation errors in manufacturing.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Pay Component</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Included in Regular Rate?</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Base hourly wage", "Yes", "Always included"],
                ["Shift differential (non-discretionary)", "Yes", "Must be included before OT calculation"],
                ["Production bonuses", "Yes", "Non-discretionary production incentives are included"],
                ["Attendance bonuses", "Yes", "If non-discretionary, included"],
                ["Discretionary bonuses", "No", "Only if truly discretionary -- employer decides after the fact"],
                ["Overtime premium pay", "No", "The extra 0.5x itself is excluded from the regular rate"],
                ["Employer benefit plan contributions", "No", "401k, health, HSA contributions excluded"],
              ].map(([component, included, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{component}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{included}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Workday and Workweek Definitions for 24/7 Operations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For manufacturing plants running three shifts around the clock, workday and workweek definitions are not administrative formalities -- they determine which employees earn overtime and how much. Most manufacturers establish workweeks that align with their shift rotation: a Sunday-to-Saturday workweek for a five-day operation; a rotating definition for a continuous 24/7 plant.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa/overtime_worker_vs" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's overtime resources for manufacturing workers</a> cover the workweek definition rules and common calculation methods. We configure workday and workweek definitions at setup and do not change them without a documented business reason -- retroactive changes to avoid overtime are prohibited under the FLSA.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Piece-Rate Overtime: A Frequently Misunderstood Calculation</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Piece-rate workers in manufacturing are among the most commonly underpaid populations in the country. The mistake: employers pay piece rates without any overtime, or calculate overtime using just the piece-rate equivalent hourly wage without applying the regular rate formula. The correct method requires calculating the actual regular rate for each week (total piece-rate earnings divided by total hours worked) and paying the additional 0.5x premium for hours over 40. The regular rate changes every week if production volume changes.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          We configure piece-rate payroll to calculate the weekly regular rate automatically and apply correct overtime treatment per the FLSA half-time method.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Manufacturing Operations</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Shift differential configuration and blending into overtime regular rate calculations</li>
          <li>Workday and workweek definition setup for 24/7 operations</li>
          <li>Piece-rate regular rate calculation and half-time overtime processing</li>
          <li>Non-discretionary bonus inclusion in weekly regular rate</li>
          <li>Daily overtime configuration for operations in CA, CO, and AK</li>
          <li>Payroll tax filings and W-2 production</li>
          <li>Multi-location payroll for plants in multiple states</li>
          <li>Clean audit documentation for DOL wage and hour reviews</li>
                    <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> -- fully managed payroll at $25-$45 PEPM, all 50 states</li>
            </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Payroll That Handles Shifts, Not Just Paychecks</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages manufacturing payroll at $25 to $45 per employee per month. Shift differentials, piece rates, and rotating schedules handled correctly from day one. Live in 3 to 5 business days.
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
        "headline": "Shift Work Payroll: Differentials, Rotating Schedules, and 24/7 Operations Overtime (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/manufacturing/shift-work-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Manufacturing", "item": "https://www.beghr.com/blog/payroll/manufacturing" },
          { "@type": "ListItem", "position": 5, "name": "Shift Work Payroll", "item": "https://www.beghr.com/blog/payroll/manufacturing/shift-work-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Manufacturing Payroll Outsourcing: Is It Worth It?", excerpt: "Manufacturing payroll outsourcing vs. hiring in-house. Real cost comparison: shift differentials,...", href: "/blog/payroll/manufacturing/outsourcing-payroll" },
        { category: "Payroll", title: "Union Manufacturing Payroll: What Nobody Tells You", excerpt: "Union manufacturing payroll: CBA wage schedules, fringe remittances, grievance documentation, and...", href: "/blog/payroll/manufacturing/union-manufacturing-payroll" },
        { category: "Accounting Hiring", title: "Accounting Job Description: What Candidates Notice First", excerpt: "Most accounting job descriptions repel the best candidates. Learn what to include, what to cut, and...", href: "/blog/accounting-hiring/accounting-job-description" },
      ]} />
      </article>
  );
}
