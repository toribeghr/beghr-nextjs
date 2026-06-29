import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "California Event Payroll Rules | AB5 + 1-Day | BEG",
  description: "California event payroll: AB5 worker classification, 1-day worker rules, entertainment wage orders, minimum wage, and overtime for events in California. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/events/california-event-payroll-rules" },
  openGraph: {
    title: "California Event Payroll Rules | AB5 + 1-Day | BEG",
    description: "California event payroll: AB5 worker classification, 1-day worker rules, entertainment wage orders, minimum wage, and overtime for events in California. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/events/california-event-payroll-rules",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "California Event Payroll Rules | AB5 + 1-Day | BEG", description: "California event payroll: AB5, 1-day worker rules, entertainment wage orders, and overtime. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Does AB5 apply to an out-of-state event company bringing a production to California?",
    answer: "Yes. AB5 applies to work performed in California, not just to companies headquartered in California. If your event company brings a touring production to a California venue and employs crew to work that event in California, those California workers are subject to AB5 classification standards. You cannot avoid California worker protection laws simply by being an out-of-state employer. California has broad jurisdiction over working conditions for workers physically performing labor within the state.",
  },
  {
    question: "Are there any exemptions from AB5 that apply to event workers?",
    answer: "AB5 includes a long list of specific occupational exemptions, many of which were added through subsequent legislation including AB 2257. Some entertainment industry exemptions exist for specific roles, including licensed talent agencies, recording artists, songwriters, lyricists, composers, and certain performers with specific contractual arrangements. However, most event production crew, stage hands, setup workers, and general event staff do not fall within these narrow exemptions. The exemptions are highly specific - do not assume they apply without reviewing the current list of exempted occupations against the actual role.",
  },
  {
    question: "What is the 1-day worker rule in California and how does it affect events?",
    answer: "California's Industrial Welfare Commission (IWC) Wage Orders include provisions for employees who work daily or on a call-in basis. Under some California wage orders applicable to the entertainment industry, daily-hire employees have specific rights including minimum call guarantees (you must pay a minimum number of hours even if the worker is dismissed early), travel time pay, and overtime calculated on an 8-hour daily basis rather than only a 40-hour weekly basis. California requires daily overtime - any hours over 8 in a single workday trigger 1.5x overtime, and hours over 12 in a day trigger 2x overtime, regardless of the total weekly hours worked.",
  },
  {
    question: "California requires daily overtime. How is that different from federal overtime?",
    answer: "Federal FLSA overtime is triggered by hours over 40 in a workweek. California overtime is triggered by hours over 8 in a single workday OR hours over 40 in a workweek, whichever applies. California also requires double-time (2x the regular rate) for hours over 12 in a single day. For event companies, this means a crew member who works 10 hours at a California event must receive 2 hours of overtime pay even if they only work 30 total hours that week. This is a significant compliance difference from what event companies operating primarily outside California may be accustomed to.",
  },
  {
    question: "What is California's current minimum wage for event workers?",
    answer: "California has a statewide minimum wage that applies to most workers, but many California cities and counties have their own local minimum wages that exceed the state rate. Los Angeles, San Francisco, San Jose, and many other California jurisdictions have local minimum wages higher than the state floor. Event companies operating in California must pay at least the local minimum wage for the jurisdiction where the event is held, which may be higher than what they pay crew in other states. Failure to pay the applicable local minimum wage triggers back-pay liability plus California-specific penalties.",
  },
  {
    question: "Can California employees waive their rights to overtime, meal breaks, and rest periods?",
    answer: "Generally no. California labor law rights, including overtime, meal breaks, and rest periods, cannot be waived by individual agreement. Employees can agree to alternative workweek schedules under specific California procedures that allow longer daily hours without daily overtime, but these arrangements require a formal employee vote and certification with the Division of Labor Standards Enforcement. A blanket agreement in an employment contract or independent contractor agreement waiving California labor rights is not enforceable. Event companies operating in California should assume full California labor code compliance is required regardless of what any agreement says.",
  },
];

export default function CaliforniaEventPayrollRulesPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Events</p>
              <h1>California Event Payroll: AB5, 1-Day Worker Rules, and How to Stay Compliant</h1>
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
          California is the most complex state for event company payroll. AB5 effectively eliminated independent contractor classification for most event crew. California overtime rules apply on a daily basis, not just weekly. Local minimum wages in Los Angeles, San Francisco, and dozens of other California jurisdictions exceed the state minimum wage. And the California Labor Code enforcement apparatus - including the Private Attorneys General Act (PAGA) - makes non-compliance expensive in ways that other states do not match. If your event company operates in California, even for a single event, you need to understand these rules before the crew arrives.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>AB5: The ABC Test for California Workers</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          California AB5, effective January 1, 2020, established the ABC test as the standard for worker classification in California. Under this test, a worker is presumed to be an employee unless the hiring company can prove all three of the following:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "1rem", paddingLeft: "1.5rem" }}>
          <li><strong>A:</strong> The worker is free from control and direction in performing the work, both under the contract and in actual practice.</li>
          <li><strong>B:</strong> The work performed is outside the usual course of the hiring entity's business.</li>
          <li><strong>C:</strong> The worker is customarily engaged in an independently established trade, occupation, or business of the same nature as the work performed.</li>
        </ul>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          For event companies, Part B is the key barrier. Event production is the event company's business. Event crew performing production work cannot satisfy the requirement that their work is outside the company's usual course of business. The result: most event crew in California must be classified as W-2 employees. This applies to any company operating an event in California, regardless of the company's state of incorporation or headquarters.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>California Daily Overtime: The Event Industry Impact</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Federal law requires overtime only for hours over 40 in a workweek. California requires overtime for hours over 8 in a single workday, hours over 40 in a workweek, and double-time for hours over 12 in a single day. California overtime is triggered by daily hours, not just weekly hours.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Hours Worked</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Federal Rule</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>California Rule</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["First 8 hours in a day", "Regular rate", "Regular rate"],
                ["Hours 8-12 in a day", "Regular rate (unless weekly OT triggers)", "1.5x overtime"],
                ["Hours over 12 in a day", "Regular rate (unless weekly OT triggers)", "2x double time"],
                ["Hours over 40 in a week", "1.5x overtime", "1.5x overtime"],
                ["7th consecutive day of work in week", "Regular rate", "1.5x for first 8 hrs, 2x over 8 hrs"],
              ].map(([hours, federal, california], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{hours}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{federal}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{california}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Meal and Rest Break Requirements</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          California requires a 30-minute unpaid meal break for employees who work more than 5 hours in a day, and a second 30-minute break for employees who work more than 10 hours. California also requires a 10-minute paid rest break for every 4 hours worked, or major fraction thereof.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          If an employer fails to provide a required meal or rest break, the employee is owed one additional hour of pay at the regular rate for each missed break. For a large event crew working a 12-hour setup day, missed breaks become expensive quickly. PAGA allows employees to pursue these claims on behalf of all similarly situated workers, which can convert individual violations into significant aggregate liability.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>California Local Minimum Wages</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          California has a statewide minimum wage, but many California localities have set higher local minimums. Event companies must pay at least the local minimum wage for the jurisdiction where the event is held. Cities with local minimum wages include Los Angeles, San Francisco, San Jose, Berkeley, Santa Monica, and many others.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dir.ca.gov/dlse/localminimumwage.htm" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>California DLSE local minimum wage lookup</a> provides current rates by city and county. BEG configures California payroll to apply the correct local rate based on the event location.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles for California Events</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>California employer registration if not already registered</li>
          <li>AB5-compliant W-2 payroll for California event crew</li>
          <li>Daily and weekly overtime calculation under California rules</li>
          <li>Local minimum wage configuration by event location</li>
          <li>Meal and rest break policy documentation</li>
          <li>California SDI and PFL withholding and remittance</li>
          <li>California DE 9 and DE 9C quarterly payroll tax returns</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>California Event Payroll Done Right</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages California event payroll with AB5 compliance, daily overtime, and local minimum wage configuration at $25 to $45 per employee per month.
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
          Also relevant: <Link href="/services/managed-payroll/events" style={{ color: "#ECAC60" }}>Managed Payroll for Event Companies</Link> and <Link href="/blog/payroll/events/multi-state-event-payroll-compliance" style={{ color: "#ECAC60" }}>Multi-State Event Payroll Compliance</Link>.
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
        "headline": "California Event Payroll: AB5, 1-Day Worker Rules, and How to Stay Compliant",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://www.beghr.com/blog/payroll/events/california-event-payroll-rules"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Events", "item": "https://www.beghr.com/blog/payroll/events" },
          { "@type": "ListItem", "position": 5, "name": "California Event Payroll Rules", "item": "https://www.beghr.com/blog/payroll/events/california-event-payroll-rules" }
        ]
      }) }} />
    </article>
  );
}
