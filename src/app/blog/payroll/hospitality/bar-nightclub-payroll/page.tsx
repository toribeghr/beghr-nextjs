import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bar & Nightclub Payroll | Tip Pools & Late-Night Staff | BEG",
  description: "Bar and nightclub payroll outsourcing: tip credits, tip pools, late-night shift rules, bartender classification. BEG manages it all at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/hospitality/bar-nightclub-payroll" },
  openGraph: {
    title: "Bar & Nightclub Payroll | Tip Pools & Late-Night Staff | BEG",
    description: "Bar and nightclub payroll outsourcing: tip credits, tip pools, late-night shift rules, bartender classification. BEG manages it all at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/hospitality/bar-nightclub-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Bar & Nightclub Payroll | Tip Pools, Late-Night Staff. Handled. | BEG", description: "Bar and nightclub payroll: tip credits, tip pools, late-night shift rules, bartender classification. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "How does the tip pool work for bars that include barbacks and security?",
    answer: "Under the 2018 FLSA amendments, tip pools can include back-of-house and support employees like barbacks, provided no managers or supervisors participate. Security staff is trickier: if they are employed by the bar and perform some customer-facing service role, they may be includable. If they are strictly non-service security, they typically should not participate. We configure your tip pool distribution rules per your policy, apply them each cycle, and document the setup so you have a clear audit trail.",
  },
  {
    question: "Our bartenders work split shifts and closing shifts. How do split-shift premiums work?",
    answer: "Split-shift premiums are state-specific. California requires an additional hour of pay at minimum wage when the gap between work segments exceeds one hour. New York has similar requirements. Most other states do not mandate split-shift premiums, though collective bargaining agreements may create them. We configure split-shift rules by state and apply them automatically when a shift qualifies. For states without a mandate, we still flag split shifts so managers can review scheduling costs.",
  },
  {
    question: "We have a mix of employed staff and entertainment contractors (DJs, performers). How do we handle that?",
    answer: "Employed staff run through payroll in the normal way. Entertainment contractors who are genuinely independent (set their own rates, work for multiple venues, control how they perform) can receive 1099s. However, many venues misclassify performers who work exclusive arrangements or follow venue direction. We can help you document the relationship correctly, but classification decisions should involve your attorney for anyone whose status is ambiguous.",
  },
  {
    question: "How do you handle payroll for staff who regularly work past midnight?",
    answer: "Workday and workweek definitions matter a lot for late-night operations. The FLSA allows employers to define a workday as any 24-hour consecutive period and a workweek as any fixed 7-day period. If your workday starts at 4pm and runs to 3:59pm the next day, a bartender who starts at 9pm and works until 2am is solidly in one workday. We configure your workday and workweek definitions correctly at setup so late-night hours are assigned to the right pay periods and overtime is calculated accurately.",
  },
  {
    question: "What does BEG charge for bar and nightclub payroll?",
    answer: "BEG manages bar and nightclub payroll at $25 per employee per month on your existing system, or $45 per employee per month on BEG's iSolved platform, which includes the software. For a 25-person bar team, that is $625 to $1,125 per month all-inclusive. Included: tip pool tracking, tipped minimum wage compliance, tax filings, W-2 production, and automatic compliance updates when your state's minimum wage changes. No per-run fees.",
  },
];

export default function BarNightclubPayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Hospitality</p>
              <h1>Bar and Nightclub Payroll: Tip Pools, Late-Night Shifts, and Tipped Minimum Wage (2026)</h1>
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
          Bars and nightclubs share payroll complexity with restaurants but layer on top: late-night workday definitions, tip pools that often include barbacks and support staff, entertainment contractor questions, and high staff turnover that means constant onboarding. If your payroll is being run the same way a retail store runs payroll, you are almost certainly making errors -- and those errors accumulate fast.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Credits and Tipped Minimum Wage for Bar Staff</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Bartenders and cocktail servers are among the clearest cases for tip credit eligibility: they customarily and regularly receive tips, and federal and most state laws recognize the tip credit for their roles. The current federal tipped minimum wage is $2.13 per hour, with tips expected to bring total compensation to at least $7.25 per hour.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The compliance risk is the makeup obligation: if tips do not bring an employee to minimum wage in a given workweek, the employer must make up the difference in cash wages. Many bars track this incorrectly because they look at average tips rather than verifying each pay period. According to the <a href="https://www.dol.gov/agencies/whd/flsa/tipped-employees" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>Department of Labor's FLSA guidance</a>, the minimum wage test must be applied workweek by workweek, not as an average over multiple periods.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Role</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Tip Credit Eligible?</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Key Consideration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bartenders", "Yes", "Must verify tip minimum weekly"],
                ["Cocktail servers", "Yes", "Split-shift premium may apply (state-specific)"],
                ["Barbacks", "Possibly -- as tip pool participants", "Cannot receive tip credit if not tipped directly"],
                ["Bouncers / door staff", "Typically no", "Not a tipped occupation unless dual role"],
                ["DJs / performers", "No (usually contractors)", "Verify classification carefully"],
                ["Coat check / hosts", "State-specific", "May qualify if they receive tips customarily"],
              ].map(([role, eligible, note], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{role}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{eligible}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Late-Night Operations and Workday Definitions</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          A bartender who starts at 9pm Thursday and works until 3am Friday is working a shift that crosses midnight. How their hours are assigned to a workday depends on how you have defined your workday.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Under the FLSA, a workday can be any fixed 24-consecutive-hour period. Most bars set their workday to start and end in the afternoon (say, 4pm to 3:59pm) so that a full closing shift falls within one workday. If you have not formally established a workday definition, the IRS and DOL will look at your practices to determine one -- and they may not define it the way you assumed.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Workweek definition matters for overtime: any fixed 7-consecutive-day period. Most bars run Tuesday through Monday or Sunday through Saturday. Getting this set correctly at payroll setup prevents overtime miscalculations that compound over time.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Tip Pool Compliance After the 2018 FLSA Changes</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The 2018 Consolidated Appropriations Act changed the rules on tip pools. Employers who do not take a tip credit can now include back-of-house employees in tip pools. Employers who take a tip credit must limit the pool to customarily tipped employees.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For bars, this typically means:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Bartenders and servers: always eligible for tip pools</li>
          <li>Barbacks: eligible if the employer does not take a tip credit; otherwise state-specific</li>
          <li>Managers and supervisors: prohibited from participating under any circumstances</li>
          <li>Owners: prohibited if they manage or supervise employees</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Bars and Nightclubs</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Tipped minimum wage configuration by employee and state</li>
          <li>Per-period makeup pay calculations when tips fall short</li>
          <li>Tip pool setup and per-cycle distribution processing</li>
          <li>Workday and workweek definition configuration</li>
          <li>Split-shift premium tracking in states that require it</li>
          <li>Payroll tax filings and W-2 production</li>
          <li>Automatic updates when state minimum wages change</li>
          <li>High-turnover onboarding support -- fast setup for new hires</li>
                    <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> -- fully managed payroll at $25-$45 PEPM, all 50 states</li>
            </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Take Payroll Off the Manager's Plate</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG handles bar and nightclub payroll at $25 to $45 per employee per month, all-inclusive. Most operations are live within 3 to 5 business days. No per-run fees, no setup charges.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            style={{ display: "inline-block", background: "#ECAC60", color: "#000", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
          >
            Book a 15-Minute Discovery Call
          </a>
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
        "headline": "Bar and Nightclub Payroll: Tip Pools, Late-Night Shifts, and Tipped Minimum Wage (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/hospitality/bar-nightclub-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Hospitality", "item": "https://www.beghr.com/blog/payroll/hospitality" },
          { "@type": "ListItem", "position": 5, "name": "Bar and Nightclub Payroll", "item": "https://www.beghr.com/blog/payroll/hospitality/bar-nightclub-payroll" }
        ]
      }) }} />
    </article>
  );
}
