import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Multi-State Tip Credit: The Truth About the Rules | BEG",
  description: "Multi-state restaurant tip credit compliance: which states allow it, tipped minimum wages by state, tip pool rules, and how to configure payroll",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-tip-credit-multi-state" },
  openGraph: {
    title: "Multi-State Tip Credit: The Truth About the Rules | BEG",
    description: "Multi-state restaurant tip credit compliance: which states allow it, tipped minimum wages by state, tip pool rules, and how to configure payroll",
    url: "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-tip-credit-multi-state",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-multi-unit-restaurant-restaurant-tip-credit-multi-state.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Multi-State Tip Credit: The Truth About the Rules | BEG", description: "Multi-state tip credit for restaurants: state-by-state rules, tipped minimum wages, and tip pool compliance. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/blog-images/blog-payroll-multi-unit-restaurant-restaurant-tip-credit-multi-state.webp"] },
};

const faqs = [
  {
    question: "What is the tip credit shortfall rule and what happens if tips do not cover the gap?",
    answer: "The tip credit shortfall rule requires that if a tipped employee's total compensation (cash wage plus tips) for any pay period does not reach the applicable minimum wage, the employer must make up the difference in additional cash wages. This is called a tip shortfall or tip credit failure. For example, if the minimum wage is $12 per hour, the cash wage is $5 per hour, and an employee works 40 hours but only receives $250 in tips, the total compensation is $450 versus $480 required. The employer must pay an additional $30 to bring total compensation to minimum wage. BEG calculates tip shortfall automatically each pay period based on reported tips and flags any shortfall for correction before payroll runs.",
  },
  {
    question: "California does not allow a tip credit. How does that affect our California locations payroll?",
    answer: "In California, all employees including tipped employees must be paid at least the California state minimum wage (or applicable local minimum wage if higher) as a base cash wage, before tips. Tips are in addition to - not in lieu of - the full minimum wage. This means your California restaurant locations have materially higher base labor costs than locations in tip credit states, all else equal. Payroll for California locations must be configured separately to apply the California rules, and any tip pool arrangements must comply with California tip pool law, which prohibits employers and supervisors from participating in tip pools.",
  },
  {
    question: "Can we have the same tip pool policy across all our locations?",
    answer: "A uniform tip pool policy across all locations works only if the policy satisfies the most restrictive state rules applicable to any of your locations. If you operate in California, you cannot include employer participation in a tip pool at any location because California prohibits it and you would face enforcement action. If you operate in tip credit states, you need to determine whether you are taking the tip credit (which limits tip pool eligibility to customarily tipped employees) or paying full minimum wage (which allows broader tip pool inclusion under federal rules). A legal analysis by state for each of your markets is the right starting point before setting a group-wide tip pool policy.",
  },
  {
    question: "We are expanding to New York. What is the tip credit situation there?",
    answer: "New York has a complex tip credit structure that varies by industry segment and region. New York City, Long Island, and Westchester County have different minimum wage rates and corresponding tip credit allowances than the rest of the state. For food service workers in New York City, the minimum wage and tipped credit allowance are set at one level; for the rest of the state, different rates apply. New York also has specific rules about service charges and how they are treated. When adding New York locations, BEG configures the payroll to apply the correct rates for the specific county and municipality where each location operates.",
  },
  {
    question: "How do we track tips for payroll purposes when employees receive both credit card tips and cash tips?",
    answer: "Credit card tips are trackable through your POS system and are straightforward to include in payroll reporting. Cash tips are reported by the employee - the employer is responsible for withholding income taxes on reported cash tips and remitting FICA taxes on them as well. The employer's FICA obligation applies to all reported tips over $20 in a month. If employees underreport cash tips, the employer still has potential liability for unreported tip income under IRS tip compliance agreements (GITCA). BEG supports tip reporting through your POS integration, configures withholding on reported tips, and maintains tip reporting records for IRS compliance.",
  },
  {
    question: "What is the FLSA rule about tip credit and non-tipped duties?",
    answer: "The FLSA has rules about how much time a tipped employee can spend on non-tipped duties while the employer takes the tip credit. Under the DOL dual jobs regulation, an employer cannot take the tip credit for time a tipped employee spends performing work that is not related to the tipped occupation, or when non-tipped work exceeds 20% of total hours in a workweek or exceeds 30 continuous minutes. For restaurant operations, this affects how time is allocated for side work, cleaning, and other non-customer-facing duties. Configuring time tracking to capture duty type is important for multi-unit groups that want to defend their tip credit usage during audits.",
  },
];

export default function RestaurantTipCreditMultiStatePage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>Check payroll rules in any state</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Minimum wage, paid leave, income tax, payday law, and new-hire reporting for all 50 states.</p>
          <a href="/resources/state-compliance-checker" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Open the State Compliance Checker &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Multi-Unit Restaurant</p>
              <h1>Multi-State Restaurant Tip Credit: How to Handle Different Rules Across Your Locations</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-multi-unit-restaurant-restaurant-tip-credit-multi-state.webp" alt={`A busy modern restaurant kitchen with chefs and staff working the line`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Tip credit is one of the most consequential payroll compliance issues for multi-location restaurant groups. A restaurant group operating in six states may be operating under six different tip credit rules: some states allow a federal-level tip credit, others set a state-specific tipped minimum wage, and others have eliminated the tip credit entirely. The payroll system must apply the correct rule at each location, and the restaurant operator must understand the financial impact of those differences on per-location labor cost. Getting it wrong is expensive: unpaid tip shortfalls create back-wage liability, and tip credit violations trigger penalties and liquidated damages under the FLSA.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>How the Federal Tip Credit Works</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Under the Fair Labor Standards Act, employers may pay tipped employees a cash wage as low as $2.13 per hour if tips bring total hourly compensation up to at least the federal minimum wage of $7.25 per hour. The difference between the cash wage and the minimum wage is the tip credit. The maximum federal tip credit is $5.12 per hour.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          To take the tip credit, the employer must: inform the employee of the tip credit arrangement, ensure that tips plus cash wages reach at least the minimum wage for each pay period, and not require tipped employees to share tips with non-customarily tipped employees if taking the tip credit.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          States can set higher standards than federal law. No state can lower the floor below the federal minimum wage or allow a lower tipped cash wage than the federal $2.13, but states can and do require more generous treatment of tipped employees.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>State-by-State Tip Credit Categories</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For multi-unit restaurant groups, understanding which category each of your location states falls into is the starting point for correct payroll configuration:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "1rem", paddingLeft: "1.5rem" }}>
          <li><strong>No tip credit states:</strong> California, Alaska, Minnesota, Montana, Nevada, Oregon, and Washington require full minimum wage to be paid as cash before tips. Tips are purely additional income for the employee.</li>
          <li><strong>Federal floor states:</strong> Some states defer to the federal minimum and allow the $2.13 tipped cash wage (though the effective minimum wage in those states may be higher than federal if the state has its own minimum).</li>
          <li><strong>State-set tipped minimum:</strong> Many states have their own tipped minimum wage that is higher than the federal $2.13 but lower than the full state minimum wage. New York, Illinois, Michigan, and many others fall into this category.</li>
          <li><strong>Transitional states:</strong> A growing number of states are phasing out their tip credit entirely over a scheduled timeline. Restaurant operators with locations in these states need to monitor the phase-out schedule.</li>
        </ul>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL state minimum wage map</a> provides current rates but does not always reflect local minimums. BEG monitors both state and local minimum wages for all locations in your group.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Shortfall: What Happens When Tips Fall Short</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          In any pay period where a tipped employee's total compensation (cash wage plus tips) does not meet the applicable minimum wage, the employer must pay additional wages to make up the shortfall. This is not optional and cannot be waived by the employee.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Tip shortfalls commonly occur during slow business periods: Monday lunch shifts at full-service restaurants, off-season periods for seasonal restaurant concepts, and periods when events or reservations unexpectedly cancel. BEG calculates tip shortfall automatically each pay period and adds the required make-up wages before payroll runs, so shortfalls are corrected rather than missed.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Pool Rules by State</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Federal rules since 2018 allow tip pools to include back-of-house employees if the employer does not take the tip credit. If the employer takes the tip credit, only customarily tipped front-of-house employees can participate. State rules vary: California prohibits employer and manager participation in any tip pool. Other states have their own restrictions. Multi-unit restaurant groups should have legal review of their tip pool policy before implementing it across all markets.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for Multi-State Tip Credit</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Location-specific tip credit configuration based on state and local rules</li>
          <li>Automatic tip shortfall calculation and make-up wage processing</li>
          <li>Tip pool policy documentation and compliance support</li>
          <li>FICA tip credit reporting for employer tax return purposes</li>
          <li>Minimum wage rate monitoring and updates as state/local rates change</li>
          <li>Tip reporting integration with major POS systems</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Multi-State Tip Credit Handled Correctly Across Every Location</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages restaurant payroll with state-specific tip credit configuration and automatic shortfall calculation at $25 to $45 per employee per month.
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

        <p style={{ lineHeight: "1.7" }}>
          Also relevant: <Link href="/services/managed-payroll/multi-unit-restaurant" style={{ color: "#ECAC60" }}>Managed Payroll for Multi-Unit Restaurants</Link> and <Link href="/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-guide" style={{ color: "#ECAC60" }}>Multi-Location Restaurant Payroll Guide 2026</Link>.
        </p>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "image": "https://beghr.com/blog-images/blog-payroll-multi-unit-restaurant-restaurant-tip-credit-multi-state.webp",
        "headline": "Multi-State Restaurant Tip Credit: How to Handle Different Rules Across Your Locations",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-tip-credit-multi-state"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Multi-Unit Restaurant", "item": "https://www.beghr.com/blog/payroll/multi-unit-restaurant" },
          { "@type": "ListItem", "position": 5, "name": "Multi-State Tip Credit", "item": "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-tip-credit-multi-state" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Multi-Location Restaurant Payroll: The Real Playbook", excerpt: "Multi-location restaurant payroll: consolidated reporting, tip credit by state, high-volume W-2...", href: "/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-guide" },
        { category: "Payroll", title: "Restaurant Payroll Reporting: What Operators Need", excerpt: "Per-location payroll reporting for multi-unit restaurant groups: labor cost by location, FOH vs BOH...", href: "/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-reporting" },
        { category: "Payroll", title: "Multi-Unit Restaurant Payroll: Worth Outsourcing?", excerpt: "Why multi-unit restaurant groups outsource payroll: consolidated compliance, tip credit management,...", href: "/blog/payroll/multi-unit-restaurant/outsource-multi-location-restaurant-payroll" },
      ]} />
      </article>
  );
}
