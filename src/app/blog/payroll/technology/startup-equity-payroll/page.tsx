import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Startup Equity Payroll: RSUs, Options and 83(b) | BEG",
  description: "Startup payroll for equity compensation: ISO and NSO stock options, RSU vesting, 83(b) elections, and withholding on equity income. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/technology/startup-equity-payroll" },
  openGraph: {
    title: "Startup Equity Payroll: RSUs, Options and 83(b) | BEG",
    description: "Startup payroll: ISO/NSO stock options, RSU vesting, 83(b) elections, and equity income withholding. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/technology/startup-equity-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Startup Equity Payroll: RSUs, Options and 83(b) | BEG", description: "Startup payroll: ISO/NSO stock options, RSU vesting, 83(b) elections, and equity income withholding. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What is the difference between ISOs and NSOs for payroll tax purposes?",
    answer: "Incentive Stock Options (ISOs) and Non-Qualified Stock Options (NSOs) have fundamentally different payroll tax treatment. When an employee exercises an NSO, the spread (the difference between the exercise price and the fair market value at exercise) is treated as ordinary income, subject to income tax withholding and FICA. The company must withhold and remit these taxes at exercise. When an employee exercises an ISO, there is no ordinary income recognition at exercise -- no withholding is required at that point (though the spread may be an AMT preference item). Payroll teams that fail to withhold on NSO exercises and try to withhold on ISO exercises have the treatment backwards.",
  },
  {
    question: "How does RSU vesting create a payroll tax event?",
    answer: "Restricted Stock Units (RSUs) are a company's promise to deliver shares at a future date, usually when vesting conditions are met. When RSUs vest, the fair market value of the shares on the vesting date is treated as ordinary W-2 income -- fully subject to federal and state income tax withholding and FICA. The company must withhold taxes even though no cash changes hands. Most companies handle this by withholding a portion of the shares (net settlement) to cover the tax obligation, then delivering the remaining shares. The payroll system must record the income and withholding on the vesting date.",
  },
  {
    question: "What is an 83(b) election and does it affect payroll?",
    answer: "An 83(b) election is a tax election that founders and early employees file with the IRS within 30 days of receiving restricted stock. It allows them to recognize the income on the grant date (when the stock is worth little or nothing) rather than at vesting (when it might be worth significantly more). If an employee makes an 83(b) election on a restricted stock grant, the payroll obligation runs at grant date -- the fair market value at grant is W-2 income, subject to withholding. If no election is made, income is recognized as the stock vests. For startup founders who receive their equity as restricted stock rather than options, the 83(b) election is almost always the right tax choice, but it must be timely filed.",
  },
  {
    question: "Our startup pays some team members in other states. How do we handle multi-state payroll?",
    answer: "Remote tech teams create multi-state payroll obligations almost immediately. Each state where an employee works requires employer registration, unemployment insurance account setup, and income tax withholding (in states that have income tax). Equity income -- RSU vesting, NSO exercise -- can also trigger multi-state allocation obligations depending on where the employee worked during the vesting or service period. We configure multi-state payroll at setup and add states as the team grows. This is one of the most common compliance gaps we see in early-stage startups.",
  },
  {
    question: "We have contractors who might actually be employees. How do we assess this?",
    answer: "Early-stage startups frequently classify workers as 1099 contractors to conserve cash and delay HR overhead. The IRS and most states have become aggressive about enforcement. The core question is control: does the company direct what work is done and how it is done? If you are telling someone when to show up, how to perform their work, and providing the tools, they are likely an employee. We help document classification decisions and flag borderline cases. For workers who are clearly employees, reclassifying early is far less expensive than a government audit finding.",
  },
  {
    question: "What does BEG charge for startup payroll with equity compensation?",
    answer: "BEG manages startup payroll at $25 per employee per month on your existing system, or $45 per employee per month on BEG's iSolved platform. Both include equity income event support (RSU, NSO, restricted stock), multi-state withholding, tax filings, and W-2 production. For a 15-person startup, that is $375 to $675 per month.",
  },
];

export default function StartupEquityPayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Technology</p>
              <h1>Startup Payroll with Equity Compensation: Stock Options, RSUs, and 83(b) Elections (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Startup payroll looks simple on the surface -- a small team, flat compensation, maybe a few contractors. Then equity compensation enters the picture and the complexity spikes immediately. RSU vesting creates a withholding event with no cash changing hands. NSO exercises generate ordinary income the payroll system must capture. 83(b) elections must be reflected correctly at grant. Miss any of these and the company faces IRS penalties and employees face tax surprises at year end.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Equity Compensation Tax Events Startups Must Handle in Payroll</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Equity Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Taxable Event</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Payroll Treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["NSO exercise", "At exercise", "Spread is ordinary income; withhold FICA and income tax"],
                ["ISO exercise", "Generally none at exercise", "No withholding at exercise; possible AMT item"],
                ["RSU vesting", "At vesting", "FMV on vesting date is W-2 income; withhold via net settlement"],
                ["Restricted stock (no 83b)", "At vesting", "FMV at vesting is ordinary income; withhold"],
                ["Restricted stock (with 83b)", "At grant", "FMV at grant date is ordinary income; withhold at grant"],
                ["ESPP purchase", "At purchase (disqualifying disposition)", "Discount is ordinary income; withhold"],
              ].map(([type, event, treatment], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{type}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{event}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The 83(b) Election: Why Timing Matters</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Section 83(b) of the Internal Revenue Code allows an employee or founder who receives restricted property to elect to include its value in income at the time of receipt rather than at vesting. For startup founders receiving restricted stock at inception when the company has minimal value, this means recognizing a tiny amount of income now in exchange for potentially dramatic future tax savings at vesting.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The election must be filed with the IRS within 30 days of the grant -- no exceptions, no extensions. The <a href="https://www.irs.gov/publications/p525#en_US_2023_publink1000229693" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>IRS Publication 525</a> covers restricted property elections in detail. If the election is timely made, the payroll obligation runs at grant. If it is missed, income recognition is deferred to vesting dates -- which may be dramatically larger amounts.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          We configure the payroll treatment based on whether an 83(b) election was made and document the record for each equity recipient.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-State Payroll for Remote Tech Teams</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Startups hiring remote engineers and designers frequently have employees spread across a dozen states within the first year. Each state where an employee physically works requires employer registration, unemployment insurance, and income tax withholding (for states with income tax). Missing state registrations means unremitted taxes, penalties, and interest.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Equity income events add another layer: when an employee vests RSUs or exercises NSOs, the income may need to be allocated across states they worked in during the service period. We handle the registration burden as the team grows and apply correct multi-state sourcing to equity income events.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Startups</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Standard salary and bonus payroll for all employees</li>
          <li>NSO and RSU income recognition and withholding at taxable events</li>
          <li>83(b) grant-date treatment configuration</li>
          <li>ISO exercise documentation (no withholding, AMT flag)</li>
          <li>Multi-state employer registration and withholding as the team scales</li>
          <li>Contractor vs. employee classification review</li>
          <li>W-2 and 1099 production; payroll tax filings across all active states</li>
          <li>Setup in 3 to 5 business days from contract signing</li>
                    <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> -- fully managed payroll at $25-$45 PEPM, all 50 states</li>
            </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Equity Payroll That Does Not Create Year-End Surprises</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages startup payroll at $25 to $45 per employee per month, all-inclusive. Live in 3 to 5 business days.
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
        "headline": "Startup Payroll with Equity Compensation: Stock Options, RSUs, and 83(b) Elections (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/technology/startup-equity-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Technology", "item": "https://www.beghr.com/blog/payroll/technology" },
          { "@type": "ListItem", "position": 5, "name": "Startup Equity Payroll", "item": "https://www.beghr.com/blog/payroll/technology/startup-equity-payroll" }
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Remote Tech Team Payroll: Multi-State Nexus Rules", excerpt: "Remote tech team payroll: multi-state withholding, contractor classification, nexus compliance, and...", href: "/blog/payroll/technology/remote-tech-team-payroll" },
        { category: "Payroll", title: "SaaS Payroll Outsourcing: Cost vs. an In-House Hire", excerpt: "SaaS company payroll outsourcing vs. hiring in-house. RSU tax events, multi-state remote,...", href: "/blog/payroll/technology/saas-payroll-outsourcing" },
        { category: "Payroll", title: "Tech Company Payroll: Integrating Benefits Right", excerpt: "Managed payroll for tech/SaaS. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Book...", href: "/blog/payroll/technology/technology-benefits-integration-payroll" },
      ]} />
      </article>
  );
}
