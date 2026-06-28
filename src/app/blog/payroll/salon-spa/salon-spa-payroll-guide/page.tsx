import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Salon & Spa Payroll Guide 2026 | Booth Rental + Tips | BEG",
  description: "Complete salon and spa payroll guide: booth rental IRS rules, W-2 employee stylists, commission payroll, tip credit, and cosmetology minimum wage. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/salon-spa/salon-spa-payroll-guide" },
  openGraph: {
    title: "Salon & Spa Payroll Guide 2026 | Booth Rental + Tips | BEG",
    description: "Salon and spa payroll guide: booth rental classification, commission payroll, tip credit, and W-2 vs 1099 for stylists and estheticians. BEG at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/salon-spa/salon-spa-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Salon & Spa Payroll Guide 2026 | BEG", description: "Salon and spa payroll: booth rental, W-2 stylists, commission, tip credit, and cosmetology wage rules.", images: ["https://beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Can salon owners pay all stylists as 1099 independent contractors?",
    answer: "Not if those stylists are employees under the IRS and FLSA multi-factor tests. The tests look at behavioral control (does the salon direct how the work is done, set hours, require attendance at meetings?), financial control (does the stylist have their own clients, set their own prices, use their own tools?), and the nature of the relationship (is there a written contract establishing independence?). A stylist who works set hours on the salon's schedule, uses the salon's products and equipment, and primarily serves the salon's clients is almost certainly an employee, not a contractor. Misclassification creates liability for back payroll taxes, interest, penalties, and potential state labor department action.",
  },
  {
    question: "What makes a booth renter a legitimate independent contractor?",
    answer: "A true booth renter is genuinely in business for themselves. They pay a flat weekly or monthly rental fee to use a chair or station, regardless of how much revenue they generate. They set their own prices, maintain their own client list, set their own hours, purchase their own supplies, and can work at other locations. The salon does not direct how they do their work, does not require them to attend training or meetings, and does not receive a percentage of their revenue. The booth rental agreement should document all of these elements. When these conditions are genuinely met, the stylist is an independent contractor and the salon has no payroll obligation to them.",
  },
  {
    question: "How does the tip credit work for W-2 salon employees?",
    answer: "In states where the tip credit is permitted, salons can pay tipped employees a reduced direct wage (as low as $2.13 per hour federally) and take credit for tips to satisfy the minimum wage requirement. Stylists who receive tips as a regular part of their income may qualify as tipped employees. The salon must notify employees of the tip credit arrangement, verify weekly that tips plus direct wages meet minimum wage, make up any shortfall, and maintain accurate tip records. States without a tip credit (California, Oregon, Washington, and others) must pay all employees the full state minimum wage in direct wages regardless of tip income.",
  },
  {
    question: "How do we handle payroll for a stylist who earns both a commission and tips?",
    answer: "A commission-based stylist who also receives tips has compensation from two sources, both of which flow through payroll. The commission is calculated based on the commission plan (typically 40-60% of service revenue) and processed as supplemental wages. Tips are reported by the employee and tracked separately. For minimum wage compliance under FLSA, the salon must verify that total compensation (commission wages plus tips) meets at least minimum wage for all hours worked in any week. Overtime is calculated on the regular rate, which includes both commission earnings and tip credit amounts. This composite calculation requires careful payroll configuration.",
  },
  {
    question: "What are the IRS reporting obligations for salon tip income?",
    answer: "Tipped employees are required to report all tip income to their employer daily or at least monthly using IRS Form 4070 or an equivalent record. The employer uses these reports to withhold income tax and FICA on tip income. The employee's FICA on tips (7.65%) is withheld from their direct wages each pay period. The employer pays the matching FICA on reported tips. Tips are reported in Box 7 (Social Security tips) and Box 1 (wages, tips, and other compensation) of the W-2. If an employee's reported tips are less than 8% of gross receipts for the period, the employer may be required to allocate the difference as additional income in Box 8.",
  },
  {
    question: "Do cosmetology licensing requirements affect who can be classified as an independent contractor?",
    answer: "State cosmetology licensing requirements can complicate the independent contractor analysis. Many states require that cosmetology services be performed within a licensed establishment and that the establishment maintain certain oversight of licensed practitioners. If the state cosmetology board requires the salon owner to supervise licensed employees as a condition of the establishment's license, that supervision requirement may point toward an employment relationship rather than an independent contractor one. Salons should review their state cosmetology license terms alongside the IRS contractor classification criteria when deciding whether booth rental or employee models are appropriate.",
  },
];

export default function SalonSpaPayrollGuidePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Salon and Spa</p>
              <h1>Salon and Spa Payroll Guide: Booth Rental, Commission, Tips, and W-2 vs 1099 (2026)</h1>
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
          Salon and spa payroll is more complex than most beauty industry owners expect when they start their business. Worker classification, commission payroll, tip credit rules, and cosmetology licensing requirements all intersect in ways that general-purpose payroll software does not automatically handle correctly. Many salons operate a mix of W-2 employees and booth renters, each with completely different payroll and tax obligations. This guide covers the full landscape of salon and spa payroll compliance for 2026.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Worker Classification: The Foundation of Salon Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The first question in salon payroll is whether each person working in the salon is an employee or a genuine independent contractor. This is not a choice the salon owner makes arbitrarily; it is a legal determination based on the actual working relationship. The IRS applies a common law control test, and the DOL uses an economic realities test under FLSA. Both tests examine whether the salon controls the work and whether the worker is genuinely in business for themselves.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          A stylist who is scheduled by the salon, works primarily with the salon's clients, uses the salon's products and equipment, is required to attend meetings or training, and has their earnings structured as a percentage of salon revenue is an employee. A stylist who pays a flat weekly rent for a chair, sets their own prices and hours, maintains their own client list, and uses their own supplies is a legitimate booth renter and independent contractor.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>IRS classification guidance</a> provides the detailed factors used to distinguish employees from independent contractors in service businesses including personal care services.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Commission-Based Pay for W-2 Stylists</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Most salons that employ W-2 stylists pay a commission based on a percentage of service revenue, typically ranging from 40% to 60% depending on the stylist's experience, client base, and the salon's price point. Some salons pay a guaranteed minimum wage with the commission as a supplement; others pay commission-only and rely on minimum wage compliance rules to ensure workers are paid enough.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          FLSA requires that commission-based employees earn at least minimum wage for all hours worked in any workweek. If a stylist works a slow week and commissions do not total minimum wage for all hours worked, the salon must pay the difference as a draw or wage supplement. This must be calculated every week and paid promptly.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Commission wages are supplemental wages for withholding purposes. The 22% federal flat rate can be applied when commissions are paid separately from base wages. FICA applies to all commission earnings regardless of the withholding method. State income tax withholding follows state-specific supplemental wage rules.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Credit for Salon Service Employees</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Stylists and other service employees who customarily receive tips may be paid tip credit wages in states that permit the tip credit. The federal tip credit wage is $2.13 per hour, with the employer taking credit for up to $5.12 per hour in tips to satisfy the $7.25 federal minimum wage. States like California, Oregon, and Washington do not allow the tip credit and require full minimum wage in direct wages.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          For commission-based stylists who also receive tips, the tip credit calculation interacts with the commission regular rate calculation. The salon must verify that total compensation (commissions plus tips) meets minimum wage for every hour worked in every week. Overtime is calculated on the regular rate, which includes commissions allocated on a per-hour basis.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Product Sales and Retail Commission</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Many salons pay stylists a small commission (typically 10-15%) on retail product sales. This retail commission is additional compensation subject to withholding and FICA. Chargebacks on product returns must be handled carefully: the salon cannot reduce a paycheck below minimum wage through product return chargebacks, and some states require written employee authorization before any paycheck deductions are made.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Retail commissions should be tracked separately from service commissions in the payroll system and reported as supplemental wages. Including them in the regular rate calculation for overtime is required when they are non-discretionary.
        </p>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Salon and Spa Payroll at $25-$45 PEPM</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages salon and spa payroll including commission payroll, tip credit configuration, and minimum wage compliance at $25 to $45 PEPM. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/salon-spa"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Salon and Spa Payroll Services
            </Link>
            <a
              href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              style={{ display: "inline-block", background: "#ECAC60", color: "#000", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Book a 15-Minute Discovery Call
            </a>
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
        "headline": "Salon and Spa Payroll Guide: Booth Rental, Commission, Tips, and W-2 vs 1099 (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://beghr.com/blog/payroll/salon-spa/salon-spa-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Salon and Spa", "item": "https://beghr.com/blog/payroll/salon-spa" },
          { "@type": "ListItem", "position": 5, "name": "Salon Spa Payroll Guide", "item": "https://beghr.com/blog/payroll/salon-spa/salon-spa-payroll-guide" }
        ]
      }) }} />
    </article>
  );
}
