import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taproom Tip Credit Payroll | State Rules Explained | BEG",
  description: "How craft breweries apply the FLSA tip credit for taproom servers: tip pooling, tip reporting, state variations, and overtime on tipped wages.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/brewery/taproom-tip-credit-payroll" },
  openGraph: {
    title: "Taproom Tip Credit Payroll | State Rules Explained | BEG",
    description: "How craft breweries apply the FLSA tip credit for taproom servers: tip pooling, tip reporting, state variations, and overtime on tipped wages.",
    url: "https://www.beghr.com/blog/payroll/brewery/taproom-tip-credit-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Taproom Tip Credit Payroll | State Rules Explained | BEG", description: "Brewery taproom tip credit: FLSA rules, tip pooling, state variations, and overtime calculation for tipped servers.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Which states do not allow the tip credit for taproom servers?",
    answer: "As of 2026, states that have eliminated the tip credit and require full minimum wage in direct wages include California, Oregon, Washington, Nevada, Minnesota, Montana, Alaska, and several others. These states may have a separate minimum wage tier for tipped employees that is higher than the federal $2.13 floor but still below full minimum wage, or they may require the full state minimum wage regardless of tip income. Breweries operating taprooms in these states must pay all servers at least the full state minimum wage and cannot use tip credit, though employees can still receive tips on top of their wages.",
  },
  {
    question: "How does tip pooling work in a brewery taproom and who can participate?",
    answer: "Under the 2018 amendment to the FLSA, employers have two options for tip pooling. If the employer takes the tip credit, the tip pool can only include employees who customarily and regularly receive tips, which means servers, bartenders, and bussers, but not back-of-house production or kitchen staff. If the employer pays full minimum wage and does not take the tip credit, the tip pool can include any employee of the establishment, including back-of-house staff. Managers and supervisors are excluded from tip pools regardless of which approach is used. The rules are enforced by the DOL, and employers who violate tip pooling rules can be required to pay back all improperly retained tips.",
  },
  {
    question: "How do we calculate overtime for a taproom server who receives the tip credit wage?",
    answer: "Overtime for tipped employees who receive the tip credit wage is calculated at 1.5 times the regular rate, which is the full minimum wage (not the tip credit cash wage). For example, in a state with a $7.25 federal minimum wage, the overtime rate for a tipped employee is $7.25 x 1.5 = $10.875. The employer pays $10.875 minus the tip credit ($7.25 - $2.13 = $5.12), meaning the employer's direct overtime payment is $10.875 - $5.12 = $5.755 per overtime hour, assuming the employee earned enough in tips to cover the gap. If tips are insufficient to cover the full overtime premium, the employer must make up the difference.",
  },
  {
    question: "What tip reporting do we need to collect from taproom employees?",
    answer: "Employers must collect tip reports from all tipped employees for each payroll period. Employees are legally required to report all tips to their employer. In practice, most employers use a daily tip reporting system where employees record their tips at the end of each shift, either in the POS system or on a paper log. The employer then uses these reports to calculate the tip credit taken and to verify that total compensation meets minimum wage in every workweek. The reported tip amounts must be included on the employee's W-2 in Box 8 (allocated tips) and Box 7 (social security tips), and FICA taxes on reported tips must be withheld.",
  },
  {
    question: "Can a taproom server be required to share tips with production staff who make the beer?",
    answer: "Under the 2018 FLSA rule, if the brewery pays all employees (including taproom servers) the full minimum wage without taking the tip credit, the employer can establish a mandatory tip pool that includes production staff. This is somewhat controversial in the craft brewery context because production brewers do not interact with customers. However, it is legally permissible if the employer does not take the tip credit. If the employer does take the tip credit for taproom servers, those servers cannot be required to share tips with production staff who do not customarily and regularly receive tips.",
  },
  {
    question: "What happens if a taproom server's tips plus cash wages fall short of minimum wage in a week?",
    answer: "The employer is responsible for making up the shortfall. If a server's tips plus the $2.13 direct wage do not total at least the applicable minimum wage for all hours worked in a workweek, the employer must pay the difference. This must be calculated and paid in the same payroll period. The make-up payment is a wage payment subject to all normal withholding and FICA. Employers who systematically fail to make up tip shortfalls face back-wage liability, penalties, and potential class action exposure. Payroll systems should automatically flag any week where a tipped employee's compensation falls below minimum wage.",
  },
];

export default function TaproomTipCreditPayrollPage() {
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
              <h1>Taproom Tip Credit and Tip Reporting: How Breweries Handle It Correctly</h1>
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
          The FLSA tip credit is one of the most complicated and frequently violated provisions in wage and hour law. For craft brewery taprooms, the stakes are high: the wrong tip pooling structure, incorrect minimum wage make-up calculations, or improper use of the tip credit can result in back-wage liability, civil penalties, and DOL audits. This post explains exactly how the tip credit works, what state variations breweries need to know, and how to configure it correctly in payroll.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How the Federal Tip Credit Works</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The federal tip credit allows an employer to pay tipped employees a direct cash wage of $2.13 per hour, taking credit for up to $5.12 per hour in tip income to satisfy the $7.25 federal minimum wage. The credit is the difference between the direct cash wage and the minimum wage. If an employee does not earn enough in tips to reach $7.25 per hour in any workweek, the employer must make up the shortfall in direct wages.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Using the tip credit requires the employer to: (1) inform employees of the tip credit before applying it; (2) ensure employees retain all tips they receive (except through valid tip pooling arrangements); (3) calculate minimum wage compliance weekly; and (4) make up any shortfall promptly. Failing to meet any of these conditions results in the employer owing the full minimum wage for all hours worked in the affected period, losing the credit retroactively.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa/tips" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL tip credit and tip pooling guidance</a> provides the authoritative federal rules and explains the conditions under which the credit applies and can be lost.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>State Tip Credit Variations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          State law governs the tip credit in states where state minimum wage laws are more protective than federal law. Roughly half of all states have eliminated the tip credit entirely or have a direct wage requirement higher than $2.13. A brewery taproom in California must pay all servers the California minimum wage ($16.50 per hour in 2026) regardless of tips earned. A taproom in Texas, which has no state tip credit law above the federal floor, may use the $2.13 federal rate.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Breweries operating taprooms in multiple states must configure payroll with the correct direct wage rate for each state. This is not optional: applying the wrong rate is a wage theft violation under state law, even if the error is inadvertent. A managed payroll provider configured for multi-state operations applies the correct minimum wage and tip credit rules for each state automatically.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Reporting and FICA on Tips</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          All tips received by taproom employees are subject to FICA taxes (Social Security and Medicare). Employees are responsible for reporting their tips to the employer, and the employer is responsible for withholding FICA on reported tip income. The employee's FICA on tips is withheld from their direct wages each period. The employer owes the matching FICA on reported tips.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          If an employee fails to report tips, the employer can estimate tip income based on the IRS 8% of gross receipts rule for tipped positions and allocate the difference between reported tips and 8% of receipts on the employee's W-2. This allocated tips figure appears in Box 8 of the W-2 and is used by the IRS to identify employees who may be underreporting tip income.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Employers with more than 10 employees in the prior year who are in the food and beverage industry (which includes brewery taprooms) are subject to mandatory tip reporting under IRS rules and must submit Form 8027 annually if gross receipts from food and beverage operations exceed a threshold.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Brewery Payroll Configured for Tip Credit Compliance</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages brewery and distillery payroll including tip credit configuration, tip pooling setup, and FICA on tips at $25 to $45 PEPM. Setup in 3 to 5 business days.
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
        "headline": "Taproom Tip Credit and Tip Reporting: How Breweries Handle It Correctly",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/brewery/taproom-tip-credit-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Brewery", "item": "https://www.beghr.com/blog/payroll/brewery" },
          { "@type": "ListItem", "position": 5, "name": "Taproom Tip Credit", "item": "https://www.beghr.com/blog/payroll/brewery/taproom-tip-credit-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Brewery and Distillery Payroll Guide in 2026", excerpt: "Complete brewery and distillery payroll guide: taproom tip credit, production staff payroll, sales...", href: "/blog/payroll/brewery/brewery-distillery-payroll-guide" },
        { category: "Payroll", title: "Brewery Production Staff Payroll [Full Breakdown]", excerpt: "How to run payroll for brewery production staff: shift differentials, overtime for long production...", href: "/blog/payroll/brewery/brewery-production-payroll" },
        { category: "Payroll", title: "Craft Brewery Payroll Compliance in 2026", excerpt: "Craft brewery payroll compliance: TTB record-keeping, state liquor license labor conditions, and...", href: "/blog/payroll/brewery/craft-brewery-payroll-compliance" },
      ]} />
      </article>
  );
}
