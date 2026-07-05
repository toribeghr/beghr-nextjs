import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Substitute Teacher Payroll: What Districts Get Wrong | BEG",
  description: "How to run payroll for substitute teachers: daily pay rates, W-2 requirements, ACA tracking, and worker classification rules.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/education/school-substitute-teacher-payroll" },
  openGraph: {
    title: "Substitute Teacher Payroll: What Districts Get Wrong | BEG",
    description: "How to run payroll for substitute teachers: daily pay rates, W-2 requirements, ACA tracking, and worker classification rules.",
    url: "https://www.beghr.com/blog/payroll/education/school-substitute-teacher-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-education-school-substitute-teacher-payroll.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Substitute Teacher Payroll: What Districts Get Wrong | BEG", description: "How to run payroll for substitute teachers correctly: daily rates, W-2s, ACA tracking, and classification.", images: ["https://www.beghr.com/blog-images/blog-payroll-education-school-substitute-teacher-payroll.webp"] },
};

const faqs = [
  {
    question: "Can we pay substitute teachers as independent contractors to avoid payroll taxes?",
    answer: "This is one of the most common mistakes private schools make, and the IRS has been aggressive in correcting it. Substitute teachers almost universally fail the independent contractor test. The school controls when and where they work, provides the classroom and materials, sets the pay rate, and has the right to direct their work. These are the hallmarks of an employer-employee relationship. Misclassifying substitutes as 1099 contractors exposes the school to back payroll taxes (both the employee and employer share), interest, and penalties. The correct form is W-2.",
  },
  {
    question: "How do we process payroll for substitutes who work irregular days?",
    answer: "The most efficient approach is to collect substitute placement records throughout the pay period, batch them, and process on a fixed schedule. Most schools run substitutes through the same bi-weekly or semi-monthly payroll cycle as regular staff. At each pay period, the business office tallies the days worked by each substitute and calculates gross pay as the daily rate multiplied by days worked. This batch approach is administratively simpler than processing a separate payroll run each time a substitute works. The key is having a reliable system for capturing which substitutes worked which days, which is where a time and attendance integration helps.",
  },
  {
    question: "Do substitute teachers earn overtime?",
    answer: "Substitute teachers may or may not be exempt from FLSA overtime depending on their duties and compensation. If a substitute is paid a fixed daily rate equivalent to at least $684 per week (the current FLSA salary basis threshold) and their primary duty is teaching, they may qualify for the professional employee exemption from overtime. However, most substitutes are paid a daily rate well below the $684 weekly threshold or work on a per-diem basis that does not satisfy the salary basis test. In those cases, if a substitute works more than 40 hours in a week (which is rare but possible if covering multiple schools), overtime is owed. Tracking weekly hours prevents surprises.",
  },
  {
    question: "Are substitutes eligible for benefits?",
    answer: "Generally, substitute teachers are not eligible for the same benefits as full-time teachers. However, for ACA purposes, if a substitute averages 30 or more hours per week during a 12-month measurement period, the school may be required to offer qualifying health coverage during the subsequent stability period. Schools that use the same pool of substitutes heavily and repeatedly may find that certain substitutes cross the ACA full-time threshold. Tracking substitute hours during the measurement period is important for schools subject to the ACA employer mandate (those with 50 or more full-time equivalent employees).",
  },
  {
    question: "What information goes on a substitute teacher's W-2?",
    answer: "A substitute teacher's W-2 includes: Box 1 (federal taxable wages), Box 3 and 5 (Social Security and Medicare wages, which are usually the same as Box 1 unless there are pre-tax deductions), Box 4 and 6 (Social Security and Medicare taxes withheld), Box 2 (federal income tax withheld), and the applicable state wage and tax boxes. If the substitute has no W-4 on file and is processed at the default single withholding rate, that is permissible, but the school should collect a W-4 at engagement to ensure correct withholding. Annual earnings below $600 still require a W-2 if FICA taxes were withheld.",
  },
  {
    question: "We use a third-party substitute placement service. Does that change our payroll obligations?",
    answer: "It depends on whether the placement service is the employer of record or a referral agency. If the placement service employs the substitutes, issues their W-2s, and handles payroll taxes, the school has no payroll obligation to those workers. The school pays the staffing agency, not the individual. However, if the placement service simply matches substitutes with schools but the school controls the work and pays the substitutes directly, the school is the employer regardless of what the placement contract says. Review the arrangement carefully. Co-employment situations can also arise, where both the agency and the school share employer obligations.",
  },
];

export default function SchoolSubstituteTeacherPayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Education</p>
              <h1>How to Run Payroll for Substitute Teachers: Daily Pay, W-2 Requirements, and ACA Tracking</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-education-school-substitute-teacher-payroll.webp" alt={`Substitute Teacher Payroll: What Districts Get Wrong`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Substitute teachers are one of the most administratively complex employee categories in private school payroll. They work irregular days, are often paid a flat daily rate rather than an hourly wage, and are sometimes misclassified as independent contractors to avoid payroll overhead. All three of those characteristics create compliance exposure. This guide explains the correct way to classify, pay, and report payroll for substitute teachers.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Worker Classification: W-2, Not 1099</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The IRS uses a multi-factor test to determine whether a worker is an employee or an independent contractor. The test looks at behavioral control (does the company direct how the work is done?), financial control (does the company control business aspects of the worker's relationship?), and the type of relationship (are there written contracts, benefits, or an indefinite engagement?).
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Substitute teachers almost always fail the independent contractor test on all three dimensions. The school tells them when and where to work, provides the classroom and curriculum materials, sets the pay rate, and has the right to end the relationship at any time. These are the defining characteristics of employment, not contracting.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>IRS worker classification guidance</a> makes this clear. Schools that issue 1099s to substitute teachers instead of W-2s are exposed to back taxes, penalties, and interest if audited. Reclassification also triggers state unemployment and workers compensation liability.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Daily Pay Rate Structures</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Most private schools pay substitutes a fixed daily rate, which typically ranges from $100 to $200 per day depending on the school, the subject area, and whether the substitute is certified. Some schools pay a higher rate for certified substitutes and a lower rate for uncertified. Others pay a premium for long-term substitutes who cover an assignment for more than five consecutive days.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The daily rate is gross pay, from which the school must withhold federal and state income tax and FICA taxes (7.65% employee share). The school also pays the employer FICA match (7.65%), federal unemployment tax (FUTA, currently 0.6% on the first $7,000 of wages after the state credit), and state unemployment tax at the school's experience rate.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          If no W-4 is on file for a substitute, the IRS requires withholding at the default rate for a single filer with no adjustments. Schools should collect a completed W-4 from every substitute before their first day of work.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Processing Irregular Pay Periods</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The most practical approach for substitute payroll is to include substitutes in the regular payroll cycle rather than running separate off-cycle payments. Each pay period, the payroll administrator tallies the days worked by each substitute from the scheduling system or attendance records, calculates gross pay, and runs it through the same process as regular employee payroll.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          This requires a reliable system for tracking substitute placements. Schools using paper sign-in logs often have gaps. A digital scheduling platform that captures actual hours or days worked is much more reliable and reduces the risk of missed payments or incorrect amounts.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          For substitutes who work only one or two days per month, it is tempting to wait until year-end to pay them a lump sum. This is not compliant. Wages must be paid in the regular pay period in which they were earned, not deferred to convenience. Late payment also complicates withholding calculations.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>ACA Tracking for Substitutes</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Private schools with 50 or more full-time equivalent employees are subject to the ACA employer mandate. For variable-hour employees like substitutes, the school must measure average weekly hours over a 12-month initial measurement period for new employees. If a substitute averages 30 or more hours per week during the measurement period, the school must offer qualifying coverage during the subsequent stability period, even if the substitute only occasionally works more than 30 hours.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Most substitutes work far fewer than 30 hours per week on average. But schools that rely heavily on a core group of long-term substitutes, especially when covering extended absences, may find that those substitutes cross the threshold. Tracking substitute hours through the measurement period is the only way to know.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          ACA Forms 1095-C must be issued to all full-time employees and to any variable-hour employee who was offered coverage. Substitutes who were offered coverage must receive a 1095-C by January 31. Errors on 1095-C filings are a common audit trigger.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Substitute Teacher Payroll Done Right</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages school payroll including substitute daily-rate processing, W-2 production, and ACA tracking at $25 to $45 per employee per month. Setup takes 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/education"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Education Payroll Services
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
        "headline": "How to Run Payroll for Substitute Teachers: Daily Pay, W-2 Requirements, and ACA Tracking",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/education/school-substitute-teacher-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Education", "item": "https://www.beghr.com/blog/payroll/education" },
          { "@type": "ListItem", "position": 5, "name": "Substitute Teacher Payroll", "item": "https://www.beghr.com/blog/payroll/education/school-substitute-teacher-payroll" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "School Payroll Costs: In-House vs Managed, the Gap", excerpt: "What it really costs to run payroll for a private school in-house vs managed. Hidden costs, staff...", href: "/blog/payroll/education/education-payroll-cost" },
        { category: "Payroll", title: "Outsource School Payroll: What Charter Schools Miss", excerpt: "Why private and charter schools outsource payroll, what to look for in a provider, and how managed...", href: "/blog/payroll/education/outsource-education-payroll" },
        { category: "Payroll", title: "Private School Payroll in 2026: Teachers and Staff", excerpt: "How private schools handle 10-month teacher pay spread over 12, summer benefits, substitute...", href: "/blog/payroll/education/private-school-payroll-guide" },
      ]} />
      </article>
  );
}
