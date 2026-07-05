import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brewery and Distillery Payroll Guide in 2026 | BEG",
  description: "Complete brewery and distillery payroll guide: taproom tip credit, production staff payroll, sales rep commissions, seasonal staffing, and TTB",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/brewery/brewery-distillery-payroll-guide" },
  openGraph: {
    title: "Brewery and Distillery Payroll Guide in 2026 | BEG",
    description: "Complete brewery and distillery payroll guide: taproom tip credit, production staff, sales rep commissions, seasonal staffing, and TTB record-keeping. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/brewery/brewery-distillery-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-brewery-brewery-distillery-payroll-guide.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Brewery and Distillery Payroll Guide in 2026 | BEG", description: "Brewery and distillery payroll: taproom tips, production staff, sales rep commissions, and compliance.", images: ["https://www.beghr.com/blog-images/blog-payroll-brewery-brewery-distillery-payroll-guide.webp"] },
};

const faqs = [
  {
    question: "Can we apply the FLSA tip credit to taproom servers at our brewery?",
    answer: "Yes, if your state permits it. The federal tip credit allows employers to pay tipped employees as little as $2.13 per hour in direct wages, provided the employee earns enough in tips to bring their total hourly compensation to at least the federal minimum wage of $7.25. If tips are insufficient to cover the gap, the employer must make up the difference. Many states have eliminated the tip credit entirely and require all employees to receive the full state minimum wage in direct wages regardless of tip income. States like California, Oregon, Minnesota, and others do not allow the tip credit. Check your state's rules before configuring taproom server wages.",
  },
  {
    question: "How do production staff and taproom staff payroll differ?",
    answer: "Production staff (brewers, cellar workers, packaging line workers) are typically hourly non-exempt employees with fixed wage rates, shift differentials for evening or weekend work, and standard overtime rules. They are not tipped employees and their pay calculation is straightforward. Taproom staff are also non-exempt but may receive tip credit wages, participate in tip pooling, and have highly variable total compensation depending on shift and customer volume. Production staff overtime is calculated on a simple base wage. Taproom staff overtime must be calculated on the regular rate, which includes cash wages plus tips received, making the overtime calculation more complex.",
  },
  {
    question: "How do we handle payroll for sales representatives who sell to distributors or retailers?",
    answer: "Brewery and distillery sales representatives are typically W-2 employees paid a combination of base salary and commission. The commission is earned when a sale is made and the product is delivered. Commission payments are processed through payroll as supplemental wages subject to withholding and FICA. If sales reps receive advance draws against future commissions, the draw is processed as wages when paid. If the draw exceeds commissions earned, the employer may be able to recover the excess under the commission agreement, but state wage laws restrict deductions from future paychecks in ways that vary by state. Commission plans should be carefully reviewed by employment counsel before implementation.",
  },
  {
    question: "How does seasonal taproom staffing affect payroll during peak periods?",
    answer: "Craft breweries typically see significant staffing spikes during summer outdoor season, holiday weekends, and special release events. Seasonal taproom staff are W-2 employees who must be properly onboarded (W-4, I-9, direct deposit setup, state new hire reporting) regardless of how short their expected tenure. If the same seasonal workers return each year and work more than a defined short season, ACA tracking may be required. A well-configured payroll system handles seasonal employee onboarding quickly and can re-activate prior-year employees without full re-entry if their information has not changed.",
  },
  {
    question: "What are TTB record-keeping requirements and how do they intersect with payroll?",
    answer: "The Alcohol and Tobacco Tax and Trade Bureau (TTB) requires breweries and distilleries to maintain records of production volumes, ingredient usage, and product removals. These records are separate from payroll records and are maintained in the TTB-regulated record system. However, the intersection with payroll occurs when auditors look at production volume records in relation to labor costs. A TTB audit or state liquor authority audit may request payroll records to verify that staffing levels are consistent with claimed production volumes. Payroll records should be maintained for at least 4 years and be accessible for cross-referencing with TTB production logs.",
  },
  {
    question: "Do we need separate payroll configurations for our taproom versus our production operation?",
    answer: "You do not necessarily need separate payroll accounts, but you do need separate pay rate configurations, earning code setups, and potentially separate overtime pools within your payroll system. Taproom staff need tip credit wage configurations, tip income reporting fields, and tip pooling logic if applicable. Production staff need shift differential codes, production incentive bonus tracking, and standard overtime calculation. If an employee works in both the taproom and production in the same week (common at small craft breweries), the payroll system must track hours and pay by role to apply the correct rate to each hour worked.",
  },
];

export default function BreweryDistilleryPayrollGuidePage() {
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
              <h1>Brewery and Distillery Payroll Guide: Taproom Tips, Production Staff, and Sales Reps (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-brewery-brewery-distillery-payroll-guide.webp" alt={`Brewery and Distillery Payroll Guide in 2026`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Craft breweries and distilleries operate two businesses under one roof: a manufacturing operation and a hospitality operation. The payroll requirements for each are fundamentally different. Production brewers and cellar workers are manufacturing employees whose payroll follows standard hourly wage and overtime rules. Taproom servers are hospitality workers who may receive tip credit wages, participate in tip pools, and have overtime calculated on a composite regular rate that includes tip income. Sales representatives add a commission component. This guide covers all three employee types and the compliance requirements unique to craft beverage employers.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Taproom Payroll: Tip Credit and Tip Reporting</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The federal Fair Labor Standards Act permits employers to pay tipped employees a direct cash wage as low as $2.13 per hour, taking credit for tip income to satisfy the $7.25 federal minimum wage. This tip credit only applies in states that allow it. Roughly 20 states (including California, Oregon, Washington, Minnesota, and Alaska) have eliminated the tip credit and require full minimum wage in direct wages regardless of tips received.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          When the tip credit is used, the employer is required to: inform employees of the tip credit before taking it; maintain records of tips reported by employees; make up any shortfall if tips plus direct wages fall below minimum wage in any workweek; and comply with tip pooling rules, which limit tip pool contributions to employees who customarily and regularly receive tips (under the 2018 rule change, employers can include back-of-house employees in mandatory tip pools only if no tip credit is taken).
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa/tips" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL's tip credit and tip pooling resources</a> provide the authoritative federal rules, which must be applied alongside any state-specific requirements. Payroll must track reported tip income, calculate the tip credit taken, and verify minimum wage compliance for each tipped employee each workweek.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Production Staff Payroll: Shifts and Overtime</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Brewery production environments often operate extended shifts during high-volume production periods: 10-hour or 12-hour days during recipe brew days, packaging line shifts that start early morning, and cellar work that may occur on weekends. FLSA overtime applies when any non-exempt employee works more than 40 hours in a workweek at 1.5x their regular rate.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Shift differentials are common in production environments: an additional $1 to $3 per hour for evening shifts, weekend shifts, or cold-storage cellar work. These differentials must be included in the regular rate calculation for overtime purposes, which means the overtime premium is calculated on the employee's average hourly rate for the week including differentials, not just the base rate.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Production incentive bonuses, such as a bonus for meeting a batch production target or a case count goal, must also be included in the regular rate if they are performance-based. Discretionary bonuses are excluded, but bonuses tied to specific measurable outcomes are generally non-discretionary and must be spread across the hours worked in the bonus period to calculate the overtime rate correctly.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Sales Representative Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Brewery and distillery sales reps working in the three-tier distribution system sell to distributors, who then sell to retailers. The commission structure reflects this: a rep may earn a percentage of gross sales to distributors within their territory, with accelerators for exceeding quota or for selling new SKUs.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Sales reps who are W-2 employees must have their commissions processed through payroll. Draw advances against commissions are also payroll items. Reps who meet the FLSA outside sales exemption criteria (primary duty is making sales, and they are customarily and regularly engaged away from the employer's place of business) may be exempt from overtime, which eliminates the regular rate calculation complexity. However, the outside sales exemption requires that sales actually occur away from the company's premises, and reps who primarily work remotely from a home office may not qualify.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Seasonal Staffing for Events and Peak Periods</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Craft breweries often hire seasonal taproom staff for summer outdoor seasons, can releases, brewery events, and festival season. These hires require the same onboarding as any other W-2 employee. The onboarding process should be efficient enough to handle multiple new hires in a short window: electronic W-4 and I-9 collection, direct deposit setup, and state new hire reporting filed within the required period.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          If seasonal workers return each year for the same recurring season, the employer should maintain their records in the payroll system rather than fully deleting them at season end. Reactivation of a prior-year employee is significantly faster than onboarding a brand-new employee and reduces the risk of data entry errors.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Brewery and Distillery Payroll at $25-$45 PEPM</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages craft brewery payroll including tip credit configuration, production staff overtime, and sales rep commission processing. Setup in 3 to 5 business days.
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
        "headline": "Brewery and Distillery Payroll Guide: Taproom Tips, Production Staff, and Sales Reps (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/brewery/brewery-distillery-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Brewery", "item": "https://www.beghr.com/blog/payroll/brewery" },
          { "@type": "ListItem", "position": 5, "name": "Brewery Distillery Payroll Guide", "item": "https://www.beghr.com/blog/payroll/brewery/brewery-distillery-payroll-guide" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Brewery Production Staff Payroll [Full Breakdown]", excerpt: "How to run payroll for brewery production staff: shift differentials, overtime for long production...", href: "/blog/payroll/brewery/brewery-production-payroll" },
        { category: "Payroll", title: "Craft Brewery Payroll Compliance in 2026", excerpt: "Craft brewery payroll compliance: TTB record-keeping, state liquor license labor conditions, and...", href: "/blog/payroll/brewery/craft-brewery-payroll-compliance" },
        { category: "Payroll", title: "Outsource Brewery Payroll | Taproom to Production", excerpt: "Why breweries and distilleries outsource payroll, what to look for in a provider, and what changes...", href: "/blog/payroll/brewery/outsource-brewery-payroll" },
      ]} />
      </article>
  );
}
