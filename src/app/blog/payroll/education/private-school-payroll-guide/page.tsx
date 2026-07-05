import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private School Payroll in 2026: Teachers and Staff | BEG",
  description: "How private schools handle 10-month teacher pay spread over 12, summer benefits, substitute payroll, and 403(b) administration. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/education/private-school-payroll-guide" },
  openGraph: {
    title: "Private School Payroll in 2026: Teachers and Staff | BEG",
    description: "How private schools handle 10-month teacher pay spread over 12, summer benefits, substitute payroll, and 403(b) administration. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/education/private-school-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-education-private-school-payroll-guide.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Private School Payroll in 2026: Teachers and Staff | BEG", description: "How private schools handle 10-month teacher pay, substitute payroll, and 403(b) administration. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/blog-images/blog-payroll-education-private-school-payroll-guide.webp"] },
};

const faqs = [
  {
    question: "Do teachers have to be paid on a 12-month schedule, or can the school spread pay differently?",
    answer: "Schools have two legally compliant options. The first is to pay teachers only during the 10 months they work, which means paychecks stop in the summer. The second is to spread the annual salary across 12 months so teachers receive equal paychecks year-round, including summer. Most private schools use the 12-month spread because it helps with teacher retention and financial planning. The key compliance issue is that withholding calculations must reflect when income is actually earned under FLSA, even if payment is spread. Working with a managed payroll provider ensures the spread is configured correctly from the start.",
  },
  {
    question: "How do benefits work during the summer when teachers are not working?",
    answer: "This depends on how the school structures its employment agreements. If teachers are on a 12-month pay spread, they are typically considered employed year-round and benefits continue without interruption. If teachers are paid only during the school year and rehired each fall, the school must decide whether to continue benefits through the summer (paying the employer premium during the gap) or terminate and re-enroll. Many private schools continue benefits through the summer to avoid turnover and administrative complexity. The choice has implications for ACA reporting, retirement plan eligibility, and COBRA notices.",
  },
  {
    question: "What is the difference between a 403(b) and a 401(k) for private school employees?",
    answer: "A 403(b) is a retirement plan designed specifically for employees of public schools, nonprofits, and certain private schools that qualify as tax-exempt under IRC Section 501(c)(3). A 401(k) is the standard plan for for-profit employers. Many private schools qualify for 403(b) plans because they operate as nonprofits. The contribution limits are similar, but 403(b) plans have a special catch-up provision for employees with 15 or more years of service. Administration differs: 403(b) plans typically use individual annuity contracts or custodial accounts, while 401(k) plans use a pooled trust. Payroll must correctly code deferrals to the right plan type.",
  },
  {
    question: "How do we handle payroll for part-time aides and paraprofessionals who work variable hours?",
    answer: "Part-time aides and paraprofessionals are W-2 employees and must be paid at least minimum wage for all hours worked. If they work more than 40 hours in a week, overtime applies under FLSA. For ACA purposes, variable-hour employees must be tracked during a measurement period (typically 12 months) to determine whether they average 30 or more hours per week, which triggers the offer-of-coverage requirement. Schools with variable-hour support staff often underestimate the ACA tracking burden. A managed payroll provider handles ACA lookback calculations automatically and sends required notices on time.",
  },
  {
    question: "Are private school teachers exempt from overtime under FLSA?",
    answer: "Teachers at private elementary and secondary schools are generally exempt from FLSA overtime requirements under the professional employee exemption, provided they are paid on a salary basis and their primary duty is teaching. This exemption applies regardless of the salary level test that governs other white-collar exemptions. However, the exemption applies to teaching duties specifically. If a teacher is required to perform substantial non-teaching work (coaching, administrative tasks, facilities work) and that time is significant, the exemption analysis becomes more complex. Paraprofessionals, aides, and non-teaching staff are generally not exempt and must receive overtime.",
  },
  {
    question: "How does payroll differ between a private school and a charter school?",
    answer: "Private schools are independent institutions funded primarily by tuition and donations. Charter schools are publicly funded but independently operated under a charter with a state or local authorizing agency. Charter school employees are often considered public school employees for purposes of retirement plan eligibility, which may require enrollment in the state teacher retirement system rather than a 403(b). Charter schools may also be subject to public employee wage transparency requirements. Private schools have more flexibility in benefit design and compensation structure. Payroll configuration must reflect which category the school falls into, especially for retirement and reporting purposes.",
  },
];

export default function PrivateSchoolPayrollGuidePage() {
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
              <h1>Private School Payroll Guide: 10-Month Teacher Pay, Substitutes, and 403(b) Administration</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-education-private-school-payroll-guide.webp" alt={`Private School Payroll in 2026: Teachers and Staff`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Running payroll for a private school looks straightforward until you get into the details. Teachers work 10 months but are often paid across 12. Substitute teachers show up unpredictably and need daily-rate processing. Support staff may work variable hours that trigger ACA tracking obligations. And unlike most employers, many private schools offer 403(b) retirement plans instead of 401(k)s, which carry their own administrative requirements. This guide covers every layer of private school payroll so administrators know what they are managing and where errors typically occur.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The 10-Month Salary Spread</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Most private school teachers are contracted for a 10-month academic year. Schools have two options for how to pay that annual salary. The first is to pay the full salary only during the school year, which means teachers receive paychecks from August or September through May or June, with nothing in the summer. The second option, and the more common one, is to divide the annual salary by 26 bi-weekly pay periods (or 24 semi-monthly periods) so teachers receive equal checks year-round.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The 12-month spread is popular for retention reasons: teachers can budget more predictably, and schools avoid the summer cash-flow disruption of paying nothing. However, the spread creates a bookkeeping requirement. The school must track how much of each paycheck represents earned wages and how much is prepaid or deferred compensation. Payroll tax withholding must reflect earnings correctly, and benefits continuation during summer depends on how the employment agreement characterizes the summer months.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Errors in setting up the salary spread show up in W-2s at year-end and can trigger IRS questions about deferred compensation. A managed payroll provider configures the spread correctly at setup and ensures it flows properly into tax reporting.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Summer Benefit Continuation</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Whether teacher benefits continue during summer is a policy decision, but it has compliance consequences. Schools using the 12-month pay spread typically treat teachers as employed year-round, which means health insurance, dental, and vision coverage continue without a break. Retirement plan contributions may pause if the plan document ties contributions to active pay periods.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Schools that terminate and rehire teachers each year must issue COBRA notices at the end of the school year if health coverage terminates. They must also re-enroll teachers in health plans each fall, which means open enrollment administration on a non-standard schedule. For ACA purposes, teachers who return each fall need to have their prior measurement period hours considered when determining whether they are full-time for coverage obligations.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Most schools find that the administrative simplicity of year-round employment (and year-round benefits) outweighs the summer premium costs. The alternative creates more paperwork and more opportunities for compliance gaps.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Substitute Teacher Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Substitutes are almost always W-2 employees, not independent contractors. The IRS applies a behavioral and financial control test to this classification, and most substitute arrangements fail the independent contractor test: the school controls when, where, and how they work; provides the workspace; and sets the pay rate. Misclassifying substitutes as 1099 contractors exposes the school to back payroll taxes and penalties.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Substitute pay is typically structured as a daily rate. Payroll must handle irregular pay periods: a substitute might work zero days one week, three days the next, and one day the following week. This variability requires either on-demand payroll runs or a batching system that captures all daily placements and processes them on a regular cycle.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>Department of Labor's FLSA resources</a> provide guidance on employee classification and minimum wage obligations that apply to substitute teachers and other variable-hour school staff.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>403(b) Plan Administration</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Many private schools operate as nonprofits under IRC Section 501(c)(3), which makes them eligible to offer 403(b) retirement plans. A 403(b) functions similarly to a 401(k): employees contribute pre-tax dollars, the school may offer a match, and funds grow tax-deferred until retirement. But 403(b) administration has some differences payroll must handle correctly.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Employee deferrals must be coded as 403(b) contributions, not 401(k). The annual contribution limit is the same as a 401(k) ($23,500 in 2026 for employees under 50, $31,000 for those 50 and older), but 403(b) plans include a special catch-up provision: employees with 15 or more years of service at qualifying organizations can contribute an additional $3,000 per year, up to a lifetime limit of $15,000. Payroll must track years of service and apply the correct catch-up limit for eligible employees.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Employer contributions, if offered, are processed through payroll and must flow to the correct plan custodian on the correct schedule. Late remittances trigger DOL prohibited transaction issues. A managed payroll provider automates the remittance schedule and maintains an audit trail.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Part-Time Aides and ACA Tracking</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Private schools often employ part-time instructional aides, library assistants, administrative support, and facilities staff. These employees are typically variable-hour, meaning their weekly hours fluctuate. Under the ACA, employers with 50 or more full-time equivalent employees must track variable-hour employees through a measurement period to determine average weekly hours. Employees averaging 30 or more hours must be offered qualifying health coverage during the subsequent stability period.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Schools that employ enough full-time teachers and staff to cross the 50 FTE threshold need ACA tracking infrastructure. This is often overlooked because schools think about their full-time teacher count and forget that part-time aide hours count toward the FTE calculation. A school with 30 full-time teachers and 40 part-time aides averaging 20 hours per week is at 50 FTEs for ACA purposes and subject to employer mandate requirements.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Private and Charter Schools</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages school payroll at $25 to $45 per employee per month, including salary spreads, substitute processing, 403(b) administration, and ACA tracking. Setup takes 3 to 5 business days.
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
        "headline": "Private School Payroll Guide: 10-Month Teacher Pay, Substitutes, and 403(b) Administration",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/education/private-school-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Education", "item": "https://www.beghr.com/blog/payroll/education" },
          { "@type": "ListItem", "position": 5, "name": "Private School Payroll Guide", "item": "https://www.beghr.com/blog/payroll/education/private-school-payroll-guide" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "School Payroll Costs: In-House vs Managed, the Gap", excerpt: "What it really costs to run payroll for a private school in-house vs managed. Hidden costs, staff...", href: "/blog/payroll/education/education-payroll-cost" },
        { category: "Payroll", title: "Outsource School Payroll: What Charter Schools Miss", excerpt: "Why private and charter schools outsource payroll, what to look for in a provider, and how managed...", href: "/blog/payroll/education/outsource-education-payroll" },
        { category: "Payroll", title: "Substitute Teacher Payroll: What Districts Get Wrong", excerpt: "How to run payroll for substitute teachers: daily pay rates, W-2 requirements, ACA tracking, and...", href: "/blog/payroll/education/school-substitute-teacher-payroll" },
      ]} />
      </article>
  );
}
