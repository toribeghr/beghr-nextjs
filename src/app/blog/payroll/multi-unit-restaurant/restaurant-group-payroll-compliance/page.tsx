import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Restaurant Group Payroll: What Nobody Tells You | BEG",
  description: "Payroll compliance for multi-unit restaurant groups: tip pools, minimum wage by location, overtime rules, and FLSA requirements across all locations.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-group-payroll-compliance" },
  openGraph: {
    title: "Restaurant Group Payroll: What Nobody Tells You | BEG",
    description: "Payroll compliance for multi-unit restaurant groups: tip pools, minimum wage by location, overtime rules, and FLSA requirements across all locations.",
    url: "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-group-payroll-compliance",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Restaurant Group Payroll: What Nobody Tells You | BEG", description: "Multi-unit restaurant payroll compliance: tip pools, minimum wage, overtime, and FLSA. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Can a manager participate in a tip pool at our restaurant locations?",
    answer: "Under federal law, managers and supervisors are explicitly prohibited from participating in tip pools, whether or not the employer takes a tip credit. This prohibition has been in place since the 2018 FLSA amendments. Some states have additional restrictions. The practical test for whether someone is a manager or supervisor for tip pool purposes is whether they have authority to hire and fire, set schedules, and direct the work of tipped employees. If a shift leader has those authorities, they cannot receive tip pool distributions. If they are functioning more as a lead employee without true supervisory authority, the analysis is more fact-specific.",
  },
  {
    question: "We have a location in a city with a higher minimum wage than the state. Which rate applies?",
    answer: "The higher rate always applies. When a city or county sets a minimum wage higher than the state, employers in that jurisdiction must pay the local rate. The state rate is a floor - localities can exceed it. For multi-unit restaurant groups, this means locations in high-wage cities like Seattle, Denver, Chicago, or New York City must pay the applicable local rate even when the state rate would allow a lower wage. BEG monitors local minimum wage rates for all of your locations and updates configuration when new rates take effect.",
  },
  {
    question: "What is the FLSA salary threshold for restaurant managers?",
    answer: "The FLSA's exemption for executive employees requires that the employee be paid a fixed salary of at least the current salary threshold (which has changed in recent years due to regulatory updates - confirm the current threshold with your payroll or legal advisor) and that their primary duty be managing the enterprise or a department, including regularly directing the work of at least two other full-time employees. For restaurant managers, the key question is whether their primary duty is management or whether they spend most of their time working alongside hourly crew. If a restaurant manager primarily cooks, takes orders, or does hourly work, they may not qualify for the executive exemption regardless of their title or salary.",
  },
  {
    question: "How do we handle overtime when employees work at multiple locations in the same workweek?",
    answer: "When an employee works shifts at more than one location owned by the same employer within a single workweek, all hours count toward the weekly overtime threshold collectively. The employer cannot split the hours across locations to avoid overtime. If an employee works 25 hours at Location A and 20 hours at Location B in the same week, they have worked 45 hours for the employer and are owed 5 hours of overtime. BEG aggregates hours across locations for each employee when calculating overtime, so multi-location hour splitting does not create an overtime undercount.",
  },
  {
    question: "What records do we need to keep for payroll compliance at each location?",
    answer: "The FLSA requires employers to maintain payroll records for at least 3 years and certain supporting records for at least 2 years. For restaurants, required records include each employee's name, address, and Social Security number; birth date for employees under 19; hours worked each day and total hours each workweek; basis on which wages are paid; regular hourly pay rate; total straight-time and overtime earnings; all additions and deductions from wages; total wages paid each pay period; and the date of payment and pay period covered. For tipped employees, records of reported tips must also be maintained. BEG maintains compliant payroll records in the system and provides audit support if records are requested.",
  },
  {
    question: "How often do restaurant payroll compliance rules change?",
    answer: "State and local minimum wages are the most frequently changing element - dozens of states and cities update their rates annually, often effective January 1 or July 1. Federal regulations covering overtime thresholds and FLSA rules change less frequently but can have significant impact when they do. Tip credit rules, tip pool eligibility, and wage statement requirements also change at the state and local level on a regular basis. For a multi-unit restaurant group operating in multiple states, staying current on all of these changes without a dedicated compliance team or payroll provider with active monitoring is genuinely difficult. BEG monitors all applicable law changes for your locations and updates configuration proactively.",
  },
];

export default function RestaurantGroupPayrollCompliancePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Multi-Unit Restaurant</p>
              <h1>Payroll Compliance for Multi-Unit Restaurant Groups: Tip Pools, Minimum Wage, and Overtime</h1>
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
          Multi-unit restaurant groups operate at the intersection of some of the most frequently changing employment law in the country. Minimum wages are updated annually in dozens of states and cities. Tip pool rules have been amended at the federal level and continue to evolve in individual states. Overtime rules, meal break requirements, and wage statement requirements vary by state and change regularly. A compliance failure that would be a minor issue at a single location becomes a group-level liability when the same error is repeated across 10 or 20 locations. This guide covers the core compliance areas where multi-unit restaurant groups face the most risk.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Minimum Wage Compliance Across Multiple Markets</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Minimum wage compliance for a multi-unit restaurant group requires tracking the applicable rate for each location. The hierarchy is: federal minimum wage as the absolute floor, state minimum wage if higher than federal, and local minimum wage if higher than state.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          State minimum wages are scheduled to increase in many states, and cities frequently update their local rates independently of state schedules. A restaurant group with 12 locations in 8 states may have a dozen different applicable minimum wages at any given time, and that number increases when local jurisdictions within those states also have their own rates.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The compliance risk is not just failing to pay the new rate when it takes effect. The risk also includes having incorrect rates in the payroll system for locations where rates changed mid-year, and failing to update tipped minimum wages in states where the relationship between the full minimum wage and the tipped minimum is formula-based rather than fixed.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Pool Compliance After the 2018 FLSA Amendments</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The 2018 Consolidated Appropriations Act amended the FLSA to expand tip pool eligibility for employers who do not take the tip credit, while maintaining the existing restriction for employers who do take the tip credit. The key rules:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "1rem", paddingLeft: "1.5rem" }}>
          <li>Employers taking the tip credit: tip pool limited to customarily tipped employees (servers, bartenders, bussers). Back-of-house employees cannot participate.</li>
          <li>Employers not taking the tip credit (paying full minimum wage to tipped employees): tip pool can include back-of-house employees such as cooks and dishwashers.</li>
          <li>All employers: managers and supervisors cannot receive tip pool distributions under any circumstances.</li>
          <li>All employers: employers cannot keep any portion of employee tips for themselves.</li>
        </ul>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          State rules may impose additional restrictions. California prohibits any participation by the employer, management, or supervisors in tip pooling. Other states have their own rules. A uniform national tip pool policy for a multi-state restaurant group should be reviewed by legal counsel against each state's requirements.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Overtime Rules: FLSA and State Variations</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Federal FLSA overtime is triggered by hours over 40 in a workweek. Several states have daily overtime rules in addition to the weekly rule: California requires 1.5x for hours over 8 in a day and 2x for hours over 12; Alaska also has daily overtime; Colorado and Nevada have adopted daily overtime rules. For multi-unit restaurant groups with locations in these states, overtime must be calculated on both a daily and weekly basis, and whichever calculation produces the higher overtime amount controls.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Restaurant managers who meet the FLSA executive exemption - salary at or above the threshold and primary duty of management including directing two or more full-time employees - are not owed overtime. Managers who spend most of their time doing hourly crew work may not meet the primary duty test and may be entitled to overtime. Regular review of manager duties against the exemption criteria is an important compliance practice for growing restaurant groups.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Wage Statement Requirements by State</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Many states have wage statement requirements that go beyond the federal standard - specifying what information must appear on the pay stub or wage statement delivered to employees. California, New York, Washington, and several other states have detailed requirements about what a compliant wage statement must show. Some states require itemized accrual information (showing how many hours of sick leave have been accrued and used). Others require the rate of pay and the number of hours worked at each rate to appear on every statement. Failure to provide a compliant wage statement can trigger per-employee, per-pay-period penalties in some states. BEG configures wage statements to meet the requirements of each state where your locations operate.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for Restaurant Group Compliance</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Minimum wage monitoring and automatic rate updates by location</li>
          <li>Tip credit configuration and shortfall calculation per state</li>
          <li>Tip pool policy implementation consistent with state-specific rules</li>
          <li>Daily and weekly overtime calculation including California daily rules</li>
          <li>Manager exemption documentation and review support</li>
          <li>Compliant wage statements for each state</li>
          <li>FLSA recordkeeping for all locations</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Compliance Managed Across Every Location</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages multi-unit restaurant payroll compliance across all locations at $25 to $45 per employee per month. Setup in 3 to 5 business days.
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
          Also relevant: <Link href="/services/managed-payroll/multi-unit-restaurant" style={{ color: "#ECAC60" }}>Managed Payroll for Multi-Unit Restaurants</Link> and <Link href="/blog/payroll/multi-unit-restaurant/restaurant-tip-credit-multi-state" style={{ color: "#ECAC60" }}>Multi-State Restaurant Tip Credit Guide</Link>.
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
        "headline": "Payroll Compliance for Multi-Unit Restaurant Groups: Tip Pools, Minimum Wage, and Overtime",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-group-payroll-compliance"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Multi-Unit Restaurant", "item": "https://www.beghr.com/blog/payroll/multi-unit-restaurant" },
          { "@type": "ListItem", "position": 5, "name": "Restaurant Group Payroll Compliance", "item": "https://www.beghr.com/blog/payroll/multi-unit-restaurant/restaurant-group-payroll-compliance" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <p style={{ fontSize: '0.85rem', color: '#666666', margin: '2.5rem 0 0' }}>Authoritative source: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor: Wage and Hour Division</a></p>
          <RelatedPosts posts={[
        { category: "Payroll", title: "Multi-Location Restaurant Payroll: The Real Playbook", excerpt: "Multi-location restaurant payroll: consolidated reporting, tip credit by state, high-volume W-2...", href: "/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-guide" },
        { category: "Payroll", title: "Restaurant Payroll Reporting: What Operators Need", excerpt: "Per-location payroll reporting for multi-unit restaurant groups: labor cost by location, FOH vs BOH...", href: "/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-reporting" },
        { category: "Payroll", title: "Multi-Unit Restaurant Payroll: Worth Outsourcing?", excerpt: "Why multi-unit restaurant groups outsource payroll: consolidated compliance, tip credit management,...", href: "/blog/payroll/multi-unit-restaurant/outsource-multi-location-restaurant-payroll" },
      ]} />
      </article>
  );
}
