import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Salon Commission Payroll: Splits, Chargebacks & Tips | BEG",
  description: "How to process salon commission payroll correctly: percentage splits, product chargebacks, tip pooling, and minimum wage compliance. BEG managed payroll at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/salon-spa/salon-commission-payroll" },
  openGraph: {
    title: "Salon Commission Payroll: Splits, Chargebacks & Tips | BEG",
    description: "Salon commission payroll: percentage splits, product chargebacks, tip pooling, and minimum wage compliance. BEG managed payroll at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/salon-spa/salon-commission-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Salon Commission Payroll: Splits, Chargebacks & Tips | BEG", description: "Salon commission payroll: splits, chargebacks, tip pooling, and minimum wage compliance.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "How do we calculate overtime for a commission-based stylist?",
    answer: "Overtime for commission-based employees is calculated on the regular rate of pay, which is total straight-time earnings (commissions plus any other non-overtime compensation) divided by total hours worked in the workweek. For example, if a stylist works 50 hours and earns $600 in commissions during the week, the regular rate is $600 / 50 = $12 per hour. Overtime is owed for the 10 overtime hours at $12 x 0.5 = $6 per overtime hour (the half-time premium, because the straight-time pay for those hours is already included in the $600 commissions). Total overtime supplement: $60. If tips are included in compensation, they must also be included in the regular rate calculation.",
  },
  {
    question: "What happens if commission earnings fall below minimum wage in a slow week?",
    answer: "FLSA requires that employees earn at least minimum wage for every hour worked in every workweek. If a stylist's commission earnings do not total minimum wage for all hours worked in a given week, the salon must pay the difference as a wage supplement. For example, if a stylist works 40 hours at a state minimum wage of $12 per hour ($480 minimum required) but only earns $350 in commissions, the salon must pay an additional $130 in that pay period. This make-up payment cannot be recovered from future commissions in most states. The salon must absorb the shortfall.",
  },
  {
    question: "Can we use tip pooling to help commission-based stylists meet minimum wage?",
    answer: "No. Tip credit rules and commission minimum wage rules are separate mechanisms. A salon that takes the tip credit pays stylists a reduced direct cash wage and uses tips to meet minimum wage. A salon that pays commission wages is paying full wages (not a tip credit wage), and commissions must independently meet minimum wage without relying on tip income. If a salon wants to use the tip credit, it must pay a tip credit wage rate (e.g., $2.13 federally) and allow tip income to satisfy the gap to minimum wage. Commissions and tip credit cannot be combined in a way that reduces the employer's wage obligation below the amount required to reach minimum wage from the direct cash wage.",
  },
  {
    question: "How do we handle a product sale chargeback when a client returns a product?",
    answer: "Chargebacks on product sales reduce the stylist's commission on that product sale. The chargeback must be applied in the current pay period, not retroactively to the period when the commission was paid. The chargeback cannot reduce the stylist's total earnings below minimum wage in the week the chargeback is applied. If the chargeback would push earnings below minimum wage, the excess chargeback must be carried forward to a future period when the stylist earns more. In states requiring written authorization for paycheck deductions, the commission plan agreement (if signed at hire) typically serves as the required authorization for chargebacks described in that plan.",
  },
  {
    question: "What is the correct tax withholding rate for salon commission pay?",
    answer: "Commissions paid to salon employees are supplemental wages. When paid separately from regular wages, the 22% federal flat supplemental withholding rate can be applied to commissions under $1 million per year. When commissions are included in the same paycheck as regular wages (if any), the aggregate method applies, calculating withholding on the combined total using the employee's W-4 elections. State supplemental withholding rates vary: some states match the federal 22% flat rate for supplemental wages, others require the aggregate method, and some have their own flat rates. FICA (Social Security and Medicare) applies at the standard rates to all commission earnings.",
  },
  {
    question: "Should we use bi-weekly or semi-monthly payroll for commission-based stylists?",
    answer: "Bi-weekly payroll (every two weeks, 26 pay periods per year) is generally preferred for commission-based employees because the 14-day pay period aligns with a standard two-workweek period, making it easier to track weekly hours and minimum wage compliance across both workweeks in each period. Semi-monthly payroll (twice per month, 24 pay periods per year) creates pay periods that do not align consistently with seven-day workweeks, which complicates minimum wage calculation and overtime tracking. Whichever schedule you choose, state law may specify a maximum pay period length for commission employees. Most states require at least semi-monthly pay for employees, and some require more frequent pay for tipped or commission-based workers.",
  },
];

export default function SalonCommissionPayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Salon and Spa</p>
              <h1>Salon Commission Payroll: How to Handle Percentage Splits, Product Chargebacks, and Tip Pooling</h1>
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
          Commission-based pay is the dominant compensation model for salon employees, but it creates more payroll complexity than most salon owners realize. Minimum wage verification every workweek, overtime calculation on the regular rate, chargeback handling without violating wage deduction rules, and tip pooling coordination all require precise configuration. This post explains how to process salon commission payroll correctly from calculation through W-2 filing.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How Salon Commission Structures Work</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Most salon commission plans pay employees a percentage of service revenue, typically ranging from 40% to 60% depending on the stylist's experience, clientele, and the salon's price structure. Some salons use a tiered commission that increases as the stylist hits revenue thresholds (for example, 45% on the first $2,000 of monthly service revenue, 50% above that). Others pay a flat percentage plus a bonus for hitting volume targets.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Product sales commissions are typically separate, often 10-15% of retail product revenue. The retail commission plan should be documented separately in the compensation agreement so that chargebacks on product returns can be applied clearly against product commissions rather than service commissions.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa/overtime" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL overtime regulations</a> require that commission earnings be included in the regular rate for overtime purposes, and that any week where commission earnings fall below minimum wage be supplemented by the employer.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Minimum Wage Compliance for Commission Employees</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Every week, for every commission-based employee, the salon must verify that total commissions (and tips, if applicable) meet the applicable minimum wage for all hours worked. This is not optional and cannot be deferred to end-of-month or averaged across weeks. The calculation must happen for each individual workweek.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The calculation: (total commissions for the week) divided by (total hours worked in the week) must be greater than or equal to the applicable minimum wage. If the result is below minimum wage, the salon must pay the shortfall. This payment is treated as regular wages for the period.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Salons that process commission payroll manually often skip this weekly calculation, particularly in weeks when stylists work fewer hours than usual. This creates systematic minimum wage violations that can become the basis for DOL back-wage assessments covering all commission employees for the prior two years.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Pooling in Commission Salons</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Tip pooling in a commission salon requires careful design. If the salon pays commission wages (not tip credit wages), tips are additional income that cannot be used to satisfy minimum wage. Tip pools can be structured to allow sharing among stylists, assistants, and shampoo technicians who customarily receive tips. Back-office staff who do not interact with clients generally cannot participate in mandatory tip pools.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Voluntary tip sharing (where stylists choose to share tips with assistants at their own discretion) is legal in all states. Mandatory tip pools (where the salon requires a percentage to be contributed and distributed) require compliance with FLSA tip pooling rules and state law. Some states prohibit mandatory tip pools entirely or impose requirements beyond the federal standard.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Chargeback Processing in Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          When a client returns a product or disputes a service charge, the associated commission is charged back to the stylist. The chargeback must be applied as a reduction to the current period's commission earnings, not as a retroactive correction to prior period wages. Prior period wages have already been paid and cannot be undone. The chargeback reduces current period earnings by the commission amount on the returned product or disputed service.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          If the chargeback is larger than the current period's commission earnings, the excess can be carried forward only if the commission plan agreement authorizes future period collection and state law permits it. Even with authorization, the chargeback cannot reduce the stylist's net compensation below minimum wage in any week.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Commission Payroll Built for Salons</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages salon commission payroll including weekly minimum wage verification, overtime on the regular rate, and chargeback tracking at $25 to $45 PEPM. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/salon-spa"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Salon and Spa Payroll Services
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
        "headline": "Salon Commission Payroll: How to Handle Percentage Splits, Product Chargebacks, and Tip Pooling",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/salon-spa/salon-commission-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Salon and Spa", "item": "https://www.beghr.com/blog/payroll/salon-spa" },
          { "@type": "ListItem", "position": 5, "name": "Salon Commission Payroll", "item": "https://www.beghr.com/blog/payroll/salon-spa/salon-commission-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Outsourcing Salon and Spa Payroll: What Changes", excerpt: "Why salons and spas outsource payroll, what to look for in a provider, and what changes immediately...", href: "/blog/payroll/salon-spa/outsource-salon-spa-payroll" },
        { category: "Payroll", title: "Salon Booth Rental vs. W-2: IRS Classification Rules", excerpt: "How to classify salon stylists for payroll: the IRS booth rental test, what must be in booth rental...", href: "/blog/payroll/salon-spa/salon-booth-rental-payroll-classification" },
        { category: "Payroll", title: "Salon and Spa Payroll Guide for 2026", excerpt: "Complete salon and spa payroll guide: booth rental IRS rules, W-2 employee stylists, commission...", href: "/blog/payroll/salon-spa/salon-spa-payroll-guide" },
      ]} />
      </article>
  );
}
