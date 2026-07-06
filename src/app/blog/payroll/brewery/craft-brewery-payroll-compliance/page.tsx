import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Craft Brewery Payroll Compliance in 2026 | BEG",
  description: "Craft brewery payroll compliance: TTB record-keeping, state liquor license labor conditions, and W-2 reporting for breweries and distilleries.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/brewery/craft-brewery-payroll-compliance" },
  openGraph: {
    title: "Craft Brewery Payroll Compliance in 2026 | BEG",
    description: "Craft brewery payroll compliance: TTB record-keeping, state liquor license labor conditions, and W-2 reporting for breweries and distilleries.",
    url: "https://www.beghr.com/blog/payroll/brewery/craft-brewery-payroll-compliance",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-brewery-craft-brewery-payroll-compliance.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Craft Brewery Payroll Compliance in 2026 | BEG", description: "Craft brewery payroll compliance: TTB record-keeping, state liquor license labor rules, and W-2 reporting.", images: ["https://www.beghr.com/blog-images/blog-payroll-brewery-craft-brewery-payroll-compliance.webp"] },
};

const faqs = [
  {
    question: "What TTB records are relevant to payroll compliance?",
    answer: "The TTB requires breweries and distilleries to maintain production records that document volumes of raw materials used, beer or spirits produced, and product removed from the premises. These records do not include payroll data directly, but TTB auditors and state liquor authority inspectors may cross-reference production volumes against staffing levels to assess whether reported production volumes are plausible given the workforce size. Payroll records showing headcount, hours worked, and overtime periods should be maintained and accessible. If production records show unusually high output with very few documented labor hours, it can trigger closer scrutiny.",
  },
  {
    question: "Do state liquor licenses impose any labor compliance conditions?",
    answer: "State liquor license conditions vary significantly. Some states require that licensees comply with all state labor laws as a condition of licensure, meaning that payroll or wage violations could threaten the license. Some states have specific age and hour restrictions for employees who serve alcohol (typically must be 18 or 21 depending on the state and service type). Some states restrict the number of hours a single employee can work in a licensed premises per week. Breweries operating taprooms should review their state license conditions carefully and ensure payroll configurations do not inadvertently schedule employees in ways that violate license conditions.",
  },
  {
    question: "What are the most common payroll W-2 errors at craft breweries?",
    answer: "The most common W-2 errors at craft breweries are: (1) failing to include tip income correctly in Box 7 (Social Security tips) and Box 1 (wages), especially when tip pooling is involved; (2) incorrect Box 3 and Box 5 (Social Security and Medicare wages) that do not match total compensation; (3) missing or incorrect Box 12 Code D or E for retirement plan contributions; (4) production bonus amounts that were excluded from wages incorrectly; and (5) FICA on tips that was not withheld or matched correctly. A managed payroll provider reconciles all W-2 data against quarterly 941 filings before W-2s are distributed, catching errors before they reach employees.",
  },
  {
    question: "Are there any special tax credits available to craft breweries related to payroll?",
    answer: "The Work Opportunity Tax Credit (WOTC) is available to employers who hire workers from certain target groups, including long-term unemployed individuals, veterans, and recipients of certain government assistance. Craft breweries that hire frequently for taproom and production positions may qualify for significant WOTC credits if new hires are screened and certified through the state workforce agency. The credit ranges from $1,200 to $9,600 per eligible new hire depending on the target group and hours worked. This is a payroll-adjacent credit that requires coordination between the hiring process and the payroll/HR function.",
  },
  {
    question: "How should we handle payroll for brewery owners and co-founders who also work in the brewery?",
    answer: "The correct treatment depends on the business structure. In an S-corporation or C-corporation, owners who perform services for the company are employees and must receive reasonable compensation through payroll. Distributions can be taken in addition to wages but cannot substitute for wages. The IRS has consistently challenged S-corporation owners who take little or no salary and large distributions to avoid payroll taxes. In an LLC taxed as a partnership, members who actively work in the business are generally subject to self-employment tax on their distributive share of income. Brewery owners operating as LLCs should work with a CPA to determine the correct treatment and ensure payroll is structured accordingly.",
  },
  {
    question: "What records should a craft brewery maintain to survive a DOL wage and hour audit?",
    answer: "DOL audits of craft breweries often focus on tip credit compliance, overtime calculation for production staff, and employee classification. Records to maintain include: timekeeping records (showing daily and weekly hours for every employee); pay stubs or payroll registers showing gross pay, deductions, and net pay; tip reports collected from tipped employees; documentation that employees were informed of the tip credit arrangement; commission plan agreements for sales reps; and new hire forms (W-4, I-9). These records should be maintained for at least 3 years for payroll records and 2 years for time and pay records. A managed payroll provider maintains an audit trail of all payroll data and can produce audit-ready reports quickly.",
  },
];

export default function CraftBreweryPayrollCompliancePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Brewery and Distillery</p>
              <h1>Craft Brewery Payroll Compliance: TTB Record-Keeping, State Liquor License Labor Rules, and W-2s</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-brewery-craft-brewery-payroll-compliance.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Craft breweries and distilleries operate under a compliance framework that most employers never encounter: TTB record-keeping obligations, state liquor authority requirements, and the layered wage and hour rules that apply to both hospitality and manufacturing workers under the same roof. Payroll compliance at a craft brewery requires attention to all three layers simultaneously. This post covers the compliance requirements specific to the craft beverage industry and how payroll intersects with each.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>TTB Record-Keeping and Payroll Intersection</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The Alcohol and Tobacco Tax and Trade Bureau regulates the production, distribution, and taxation of beer and spirits at the federal level. TTB-required records are primarily production and inventory records: batch logs, ingredient usage, fermentation volumes, packaging records, and excise tax payments. These are not payroll records, but they exist alongside payroll records in a brewery's compliance documentation.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The intersection with payroll occurs during audits. A TTB audit or state liquor authority inspection may request documentation to verify that the brewery's operations are as represented. Auditors sometimes cross-reference production volume records against staffing. A small craft brewery reporting high production volumes with minimal documented labor is a red flag. Payroll records that accurately reflect the workforce size and hours provide supporting documentation for reported production levels.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.ttb.gov/beer/beer-recordkeeping" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>TTB's brewery recordkeeping requirements</a> specify what production records must be maintained and for how long. Payroll records should be maintained on a parallel schedule: at least 4 years for tax purposes and at least 3 years for FLSA compliance.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>State Liquor License Labor Conditions</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          State liquor authority regulations vary widely in how much they touch employment practices. At minimum, most states require that alcohol servers meet a minimum age requirement (typically 18 or 21 depending on the license type and state). Some states impose additional requirements: mandatory responsible beverage service training, restrictions on the hours minors can work adjacent to alcohol service, and caps on the number of hours service employees can work in a licensed premises.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          More significantly, many state liquor licenses include a general compliance clause that makes compliance with all applicable state labor laws a condition of the license. A serious wage and hour violation, worker classification error, or tip credit violation could theoretically trigger a license review in states with broad compliance conditions. This is an uncommon but real consequence that elevates the stakes of payroll compliance beyond the standard penalties.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Breweries should review their state license terms annually, especially if they expand taproom operations or change staffing structures. License conditions can change with renewals, and new conditions sometimes affect how servers, hosts, and event staff are scheduled and paid.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>W-2 Compliance for Brewery Employees</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Year-end W-2 production is more complex for craft breweries than for most employers because of the multiple compensation components involved. A single taproom employee's W-2 may need to reflect: regular wages, tip credit wages, reported tip income in Box 7, employer allocated tips in Box 8 (if applicable), retirement plan contributions in Box 12, and health insurance premiums in Box 12 Code DD. Production staff W-2s may include shift differential wages, overtime pay, and production bonus amounts.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The IRS cross-references W-2 data against quarterly 941 filings. Discrepancies trigger automatic notices. Common mismatches at breweries include: tip income reported on employee tip reports that does not appear correctly in Box 7; FICA on tips withheld but not properly reconciled with the 941; and production bonuses that were included in gross wages on the 941 but excluded from Box 1 on the W-2. A managed payroll provider reconciles all data before W-2s are distributed and before they are filed electronically.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>FLSA Compliance Checklist for Craft Breweries</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Tip credit: confirmed state allows it, employees informed, weekly minimum wage verified</li>
          <li>Tip pooling: participants limited to customarily tipped employees (if tip credit taken)</li>
          <li>Production overtime: shift differentials and non-discretionary bonuses included in regular rate</li>
          <li>Overtime calculation: weekly basis, not daily (unless in a daily overtime state)</li>
          <li>Sales reps: outside sales exemption verified or overtime tracked for non-exempt reps</li>
          <li>Seasonal staff: fully onboarded as W-2 employees with state new hire reporting filed</li>
          <li>Owner compensation: S-corp or LLC owners receiving reasonable wage compensation</li>
          <li>Records: timekeeping, tip reports, commission agreements maintained for 3-plus years</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Brewery Payroll Compliance Managed for You</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages craft brewery and distillery payroll compliance at $25 to $45 PEPM, including tip credit, overtime, and W-2 reconciliation. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/brewery"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Brewery Payroll Services
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
        "image": "https://beghr.com/blog-images/blog-payroll-brewery-craft-brewery-payroll-compliance.webp",
        "headline": "Craft Brewery Payroll Compliance: TTB Record-Keeping, State Liquor License Labor Rules, and W-2s",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/brewery/craft-brewery-payroll-compliance"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Brewery", "item": "https://www.beghr.com/blog/payroll/brewery" },
          { "@type": "ListItem", "position": 5, "name": "Craft Brewery Payroll Compliance", "item": "https://www.beghr.com/blog/payroll/brewery/craft-brewery-payroll-compliance" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Brewery and Distillery Payroll Guide in 2026", excerpt: "Complete brewery and distillery payroll guide: taproom tip credit, production staff payroll, sales...", href: "/blog/payroll/brewery/brewery-distillery-payroll-guide" },
        { category: "Payroll", title: "Brewery Production Staff Payroll [Full Breakdown]", excerpt: "How to run payroll for brewery production staff: shift differentials, overtime for long production...", href: "/blog/payroll/brewery/brewery-production-payroll" },
        { category: "Payroll", title: "Outsource Brewery Payroll | Taproom to Production", excerpt: "Why breweries and distilleries outsource payroll, what to look for in a provider, and what changes...", href: "/blog/payroll/brewery/outsource-brewery-payroll" },
      ]} />
      </article>
  );
}
