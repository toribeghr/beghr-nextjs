import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Event Company Payroll Guide 2026 | Seasonal Crews | BEG",
  description: "Event company payroll: seasonal mass hire, same-day pay, W-2 vs 1099 classification, multi-state touring compliance, and California AB5 rules. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/events/event-company-payroll-guide" },
  openGraph: {
    title: "Event Company Payroll Guide 2026 | Seasonal Crews | BEG",
    description: "Event company payroll: seasonal mass hire, same-day pay, W-2 vs 1099 classification, multi-state touring compliance, and California AB5 rules. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/events/event-company-payroll-guide",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Event Company Payroll Guide 2026 | Seasonal Crews | BEG", description: "Event company payroll: seasonal crews, W-2 vs 1099, multi-state touring compliance, and AB5. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Do event workers who work one day need to be on payroll as W-2 employees?",
    answer: "It depends on the nature of the working relationship and the state where the event takes place. Under federal law, the determination is based on behavioral control, financial control, and the type of relationship. If you direct how and when the work is done, provide equipment, and the workers are economically dependent on your company, they are likely employees regardless of how brief the engagement. California AB5 has a stricter three-part test that makes it particularly difficult to classify event workers as independent contractors. In most states, recurring event workers who perform work that is central to your business operation should be classified as W-2 employees.",
  },
  {
    question: "How do we handle same-day or weekly payroll for event crew?",
    answer: "Same-day pay is becoming more common in the events industry as a recruiting tool for hourly crew. The mechanics require a payroll system that can process on-demand or at a frequency shorter than the standard bi-weekly cycle. BEG can configure weekly payroll runs for event crew, and some situations allow for same-day pay advances through earned wage access programs. The key compliance requirement is that regardless of pay frequency, workers must receive at least the applicable minimum wage and overtime must be calculated correctly across the full workweek, even if individual payments are made daily.",
  },
  {
    question: "We work events in 12 states per year. Do we need payroll registration in all of them?",
    answer: "Generally yes, if you have employees performing work in those states. When your crew works an event in a state where your company has no prior payroll presence, that state typically requires employer registration and withholding for those wages. The threshold varies by state. Some require registration from the first day a worker is in the state. Others have de minimis rules based on days or wage amounts. BEG handles employer registration in each state where your crews work and manages the quarterly and annual filing obligations so you are not tracking 12 separate state deadlines.",
  },
  {
    question: "What is the W-2 vs 1099 risk for recurring event workers?",
    answer: "The biggest risk with recurring event workers is misclassification. A worker who works your events every weekend but is paid on a 1099 is almost certainly misclassified if you control their schedule, provide direction on how to perform the work, or if working your events is their primary income source. State labor agencies and the IRS use different tests, but the economic reality in most situations points to an employment relationship. Penalties for misclassification include back payroll taxes, interest, penalties, and in some states, personal liability for the company principals. If recurring event workers are being paid on 1099, that classification should be reviewed before it becomes an audit issue.",
  },
  {
    question: "How does California AB5 affect event companies working events in California?",
    answer: "California AB5 applies a strict ABC test to worker classification. To classify a worker as an independent contractor under AB5, you must show: (A) the worker is free from your control in performing the work; (B) the work is outside your usual course of business; and (C) the worker is customarily engaged in an independently established trade or business. For most event crew, part (B) alone disqualifies independent contractor status because running events is exactly the event company's usual course of business. Event companies that operate in California - even for a single event - should assume their on-site crew must be treated as California W-2 employees for that event.",
  },
  {
    question: "Can BEG handle mass onboarding for a 200-person event crew that starts in two weeks?",
    answer: "Yes. BEG is set up for high-velocity onboarding scenarios. We can process bulk new hire data, configure pay rates, set up direct deposit or pay card options, and have those employees ready for payroll processing within 3 to 5 business days of receiving complete information. For mass events with large temporary crews, we recommend establishing the payroll relationship before the event rather than trying to onboard and pay in the same cycle. If you have recurring seasonal events, we can keep workers in the system between events so re-activation is faster than initial onboarding.",
  },
];

export default function EventCompanyPayrollGuidePage() {
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
              <p className="eyebrow">Blog · Payroll Management · Events</p>
              <h1>Event Company Payroll Guide: Seasonal Crews, 1099 vs W-2, and Multi-State Compliance (2026)</h1>
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
          Event companies run on flexible labor - crews that expand for a major production and contract when the season ends. That flexibility is the business model. But the payroll mechanics underneath it are anything but flexible: worker classification, multi-state tax obligations, California AB5, same-day or weekly pay expectations, and seasonal mass hire and terminate cycles create a compliance surface that most generic payroll processors are not designed to handle efficiently. This guide covers the core payroll challenges for event companies and how managed payroll addresses them.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Seasonal Mass Hire and Terminate Cycles</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Event companies routinely hire dozens or hundreds of workers for a season, a tour, or a single event - then terminate those workers when the work ends. The payroll system needs to handle this at volume without manual bottlenecks.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Mass onboarding requires bulk data intake: employee name, address, Social Security number, pay rate, direct deposit or pay card setup, and state withholding forms. At scale, manual data entry creates errors and delays. BEG handles bulk new hire processing and can import employee data from your staffing or event management platform to minimize re-entry.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Mass termination at season end requires prompt final pay processing. Most states have specific rules about when final wages must be paid after termination - some require payment on the final day of work, others allow the next regular payday. Failure to comply with final pay timing requirements triggers penalties. BEG manages final pay timing according to each state's rules, so you are not tracking state-by-state final pay deadlines manually.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>W-2 vs. 1099: The Classification Risk in Events</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The events industry has historically relied heavily on independent contractor classification for event crew. Stage hands, audio technicians, event setup crews, and production assistants are often paid on 1099 as a matter of industry convention. Industry convention is not a compliance defense.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The IRS uses a common law test that looks at behavioral control, financial control, and the nature of the relationship. State agencies often use different tests, and some states - most notably California with AB5 - have tests that are significantly stricter. When an event company controls how work is performed, determines the schedule, provides equipment, and the working relationship is ongoing rather than project-specific, the workers are employees under most tests regardless of how they are labeled.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/flsa/misclassification" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL Wage and Hour Division misclassification resources</a> cover the economic reality test in detail, including factors that determine whether a worker is economically dependent on the company or genuinely independent.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-State Compliance for Touring and Destination Events</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Touring event production companies and destination event firms work in multiple states throughout the year. Each state where employees perform work is potentially a state where employer payroll tax obligations arise.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Event Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Multi-State Risk</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Key Compliance Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["National concert tour", "High - new state every week", "Employer registration in each tour stop state"],
                ["Annual destination conference", "Medium - same 3-5 states each year", "Maintain standing registration in recurring states"],
                ["Regional festival circuit", "Medium - 5-10 states per season", "Seasonal registration; calendar-based filing"],
                ["Single-state event company", "Low - home state only", "Standard payroll; no multi-state burden"],
                ["International events", "High - federal and state plus FBAR/reporting", "Specialized international payroll guidance"],
              ].map(([type, risk, action], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{type}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{risk}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>California AB5 and 1-Day Event Worker Rules</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          California AB5, effective January 2020, changed the worker classification standard in California from a multifactor common law test to a stricter ABC test. For event companies, the most consequential part of AB5 is the B prong: a worker can only be classified as an independent contractor if the work they perform is outside the usual course of the hiring company's business.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          For an event production company, production work is the core business. That means event crew, stage hands, and on-site production staff performing work central to the event cannot satisfy the B prong. They must be classified as California employees. This applies to any event held in California, including companies headquartered elsewhere that bring a touring production to a California venue.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          California also has specific rules around 1-day and short-duration workers related to entertainment industry wage orders. These are technical rules governing minimum call times, travel pay, and overtime that apply to entertainment and event industry employees working under certain California wage orders.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for Event Companies</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Bulk new hire onboarding for seasonal crew</li>
          <li>Weekly or bi-weekly payroll with flexibility for high-frequency pay</li>
          <li>Final pay compliance for terminated crew by state rule</li>
          <li>W-2 vs. 1099 classification review and documentation</li>
          <li>Multi-state employer registration and quarterly filings for touring events</li>
          <li>California AB5 compliance for California events</li>
          <li>Minimum wage and overtime tracking across multiple state rates</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Event Company Payroll Without the Compliance Exposure</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages event company payroll including multi-state touring compliance and seasonal crew cycles at $25 to $45 per employee per month. Setup in 3 to 5 business days.
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

        <p style={{ lineHeight: "1.7" }}>
          Also relevant: <Link href="/services/managed-payroll/events" style={{ color: "#ECAC60" }}>Managed Payroll for Event Companies</Link> and <Link href="/blog/payroll/events" style={{ color: "#ECAC60" }}>Events Payroll Resource Hub</Link>.
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
        "headline": "Event Company Payroll Guide: Seasonal Crews, 1099 vs W-2, and Multi-State Compliance (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/events/event-company-payroll-guide"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Events", "item": "https://www.beghr.com/blog/payroll/events" },
          { "@type": "ListItem", "position": 5, "name": "Event Company Payroll Guide", "item": "https://www.beghr.com/blog/payroll/events/event-company-payroll-guide" }
        ]
      }) }} />
    </article>
  );
}
