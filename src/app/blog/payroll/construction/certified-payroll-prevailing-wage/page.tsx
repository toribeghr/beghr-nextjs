import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certified Payroll and Prevailing Wage for Contractors | BEG",
  description: "Certified payroll reporting and prevailing wage compliance for construction contractors on federal and state public works projects. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/construction/certified-payroll-prevailing-wage" },
  openGraph: {
    title: "Certified Payroll and Prevailing Wage for Contractors | BEG",
    description: "Certified payroll reporting and prevailing wage compliance for construction contractors on federal and state public works projects. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/construction/certified-payroll-prevailing-wage",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-construction-certified-payroll-prevailing-wage.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Certified Payroll and Prevailing Wage for Contractors | BEG", description: "Certified payroll and prevailing wage compliance for construction contractors on public works projects. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/blog-images/blog-payroll-construction-certified-payroll-prevailing-wage.webp"] },
};

const faqs = [
  {
    question: "What is the difference between certified payroll and regular payroll?",
    answer: "Regular payroll tracks wages, taxes, and deductions for your employees. Certified payroll does all of that AND produces a weekly report (WH-347 or equivalent) that documents each employee's name, address, work classification, hours worked each day, wages paid, deductions, and fringe benefit contributions. This report is submitted to the contracting agency and certifies under penalty of perjury that workers were paid correctly. The certification obligation applies to the prime contractor and all subcontractors on the project.",
  },
  {
    question: "What is prevailing wage and how is it determined?",
    answer: "Prevailing wage is the minimum wage rate, including fringe benefits, that must be paid to workers on government-funded construction projects. Federal prevailing wages are set by the Department of Labor under the Davis-Bacon Act and vary by county and craft classification. State prevailing wage laws (sometimes called Little Davis-Bacon Acts) may set different rates for state-funded projects. Rates are updated periodically and vary significantly by location and trade -- a carpenter in one county may have a different prevailing wage than a carpenter 50 miles away.",
  },
  {
    question: "We have workers who perform multiple trades on a project. How do we handle mixed classifications?",
    answer: "When a worker performs work that falls under multiple wage determinations in a single day or week, the correct approach is to pay the applicable prevailing wage for each type of work performed. If a worker spends 4 hours doing carpentry work and 4 hours doing laborer work, they are owed carpentry prevailing wage for the 4 carpentry hours and laborer prevailing wage for the 4 laborer hours. This requires tracking time by classification, not just by day. We configure time tracking to capture classification-level hours and apply the correct rate to each portion.",
  },
  {
    question: "What are fringe benefits and do we have to provide them on prevailing wage projects?",
    answer: "Prevailing wage determinations include a fringe benefit component in addition to the base wage. Contractors can satisfy the fringe benefit requirement by: (1) providing bona fide fringe benefits such as health insurance, pension contributions, vacation pay, or apprenticeship contributions equal to at least the fringe amount; or (2) paying the fringe amount in cash on top of the base wage. Most contractors without union benefit plans pay the fringe in cash. We track the fringe obligation per classification and ensure each worker receives the full required compensation.",
  },
  {
    question: "What happens if we make a mistake on certified payroll?",
    answer: "Errors on certified payroll can result in back-wage assessments, contract suspension, debarment from future federal contracts, and civil or criminal penalties for knowingly false certifications. The severity depends on whether the error was inadvertent or deliberate. Inadvertent errors that are self-corrected quickly typically result in back-wage payments with minimal penalties. Deliberate underpayment or falsified certifications can result in debarment for up to 3 years under Davis-Bacon. Compliance is not optional -- the certifying officer signs under penalty of perjury.",
  },
  {
    question: "Can BEG handle both our commercial work payroll and our prevailing wage project payroll?",
    answer: "Yes. Many construction contractors have a mix of private commercial work (regular payroll rules) and public works projects (prevailing wage and certified payroll). We manage both under one service. Employees working on prevailing wage projects are flagged, their hours are tracked by classification and project, the correct prevailing wage rates are applied, and WH-347 reports are produced weekly. Employees on private commercial work run under your standard pay structure. One service, no confusion between the two.",
  },
];

export default function CertifiedPayrollPrevailingWagePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Construction</p>
              <h1>Certified Payroll and Prevailing Wage Compliance: A Contractor's Guide to Davis-Bacon (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-construction-certified-payroll-prevailing-wage.webp" alt={`A real construction site, workers in hard hats and hi-vis vests reviewing plans`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Winning a federal or state public works contract is a significant milestone for a construction company. It also creates a payroll compliance burden that most contractors underestimate. Certified payroll reporting, prevailing wage rates, fringe benefit tracking, and weekly WH-347 submissions require a level of payroll infrastructure that standard in-house processing rarely has. One misfiled report or underpaid classification can jeopardize a contract and trigger debarment proceedings.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Davis-Bacon Act: The Foundation of Federal Prevailing Wage</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The Davis-Bacon Act of 1931 requires that all laborers and mechanics employed on federal construction contracts exceeding $2,000 be paid the prevailing wage for the locality where work is performed. The Department of Labor publishes wage determinations by county and by trade classification. These rates include a base wage and a fringe benefit component.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Coverage extends beyond direct federal contracts. Related acts extend Davis-Bacon requirements to federally assisted construction in housing, transportation, environmental, and other sectors. If federal money touches a project, there is a reasonable chance Davis-Bacon applies. Contractors should verify coverage on every government-funded project before beginning work.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/government-contracts/construction" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's Wage and Hour Division</a> maintains current wage determinations at sam.gov and provides compliance resources for contractors navigating Davis-Bacon for the first time.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What Certified Payroll Reports Require</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Every contractor and subcontractor on a covered project must submit a weekly certified payroll report. The federal form is WH-347, though many state programs have their own equivalent. Each report must document:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "1rem", paddingLeft: "1.5rem" }}>
          <li>Employee name, address, and Social Security Number (last four digits on submitted forms)</li>
          <li>Worker classification (carpenter, electrician, laborer, etc.)</li>
          <li>Hours worked each day of the week</li>
          <li>Total hours worked</li>
          <li>Rate of pay (base wage and fringe)</li>
          <li>Gross wages earned</li>
          <li>All deductions itemized</li>
          <li>Net pay</li>
        </ul>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The contractor's certifying officer signs a statement declaring under penalty of perjury that wages and fringe benefits were paid as stated. This is not a formality -- knowingly false certifications carry criminal penalties under federal law.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Prevailing Wage Rates by Classification</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Prevailing wages are not uniform. They vary by county, by trade classification, and whether the project is building construction, heavy construction, highway construction, or residential construction. The same county may have four different wage determinations depending on project type.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Classification Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Examples</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Rate Determination</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Building construction", "Carpenters, electricians, plumbers, ironworkers", "DOL Building WD for county"],
                ["Heavy construction", "Operators, laborers on infrastructure", "DOL Heavy WD for county"],
                ["Highway construction", "Paving, grading, bridge work", "DOL Highway WD for county"],
                ["Residential (4 stories or less)", "Framers, drywall, finish work", "DOL Residential WD for county"],
                ["Subclassifications", "Apprentices, helpers, trainees", "Percentage of journeyman rate"],
              ].map(([type, examples, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{type}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{examples}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for Certified Payroll Projects</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Prevailing wage rate lookup and configuration by project, county, and classification</li>
          <li>Per-classification time tracking across multiple projects</li>
          <li>Weekly WH-347 generation and submission preparation</li>
          <li>Fringe benefit tracking and cash-in-lieu calculations</li>
          <li>Apprentice ratio monitoring</li>
          <li>Standard commercial payroll for non-public-works employees on the same roster</li>
          <li>Multi-state prevailing wage compliance for contractors working across state lines</li>
          <li>Audit support documentation</li>
                    <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> -- fully managed payroll at $25-$45 PEPM, all 50 states</li>
            </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Stop Managing Certified Payroll Manually</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages construction payroll including certified payroll reporting at $25 to $45 per employee per month. Setup takes 3 to 5 business days.
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
        "image": "https://beghr.com/blog-images/blog-payroll-construction-certified-payroll-prevailing-wage.webp",
        "headline": "Certified Payroll and Prevailing Wage Compliance: A Contractor's Guide to Davis-Bacon (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/construction/certified-payroll-prevailing-wage"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Construction", "item": "https://www.beghr.com/blog/payroll/construction" },
          { "@type": "ListItem", "position": 5, "name": "Certified Payroll", "item": "https://www.beghr.com/blog/payroll/construction/certified-payroll-prevailing-wage" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Construction Payroll Benefits Integration", excerpt: "Managed payroll for construction. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive....", href: "/blog/payroll/construction/construction-benefits-integration-payroll" },
        { category: "Payroll", title: "Construction Payroll Direct Deposit Setup for Crews", excerpt: "Managed payroll for construction. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/construction/construction-direct-deposit-setup" },
        { category: "Payroll", title: "Construction Payroll: Employee or Contractor?", excerpt: "Managed payroll for construction. Employee Classification for Payroll. $25-$45 PEPM all-inclusive....", href: "/blog/payroll/construction/construction-employee-classification-guide" },
      ]} />
      </article>
  );
}
