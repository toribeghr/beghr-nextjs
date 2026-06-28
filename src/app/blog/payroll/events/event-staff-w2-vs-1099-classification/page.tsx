import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Event Staff W-2 vs 1099 Classification | BEG Guide",
  description: "When event staff should be W-2 employees vs 1099 contractors: IRS tests, California AB5, recurring worker risk, and how to audit your classification. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/events/event-staff-w2-vs-1099-classification" },
  openGraph: {
    title: "Event Staff W-2 vs 1099 Classification | BEG Guide",
    description: "When event staff should be W-2 employees vs 1099 contractors: IRS tests, California AB5, recurring worker risk, and how to audit your classification. BEG at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/events/event-staff-w2-vs-1099-classification",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Event Staff W-2 vs 1099 Classification | BEG Guide", description: "W-2 vs 1099 for event crew and vendors: IRS rules, state tests, and AB5. BEG at $25-$45 PEPM.", images: ["https://beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "Can we use a contract or agreement to establish independent contractor status?",
    answer: "No. A written agreement calling someone an independent contractor does not determine their classification for tax or labor law purposes. The IRS, state labor agencies, and courts look at the actual working relationship, not what the contract says. If you control how, when, and where work is performed, provide equipment, and the worker is economically dependent on your company, they are an employee even if the contract says otherwise. The contract can be useful documentation if the relationship is genuinely independent, but it cannot override the substance of the relationship.",
  },
  {
    question: "What is the IRS common law test and how does it apply to event workers?",
    answer: "The IRS common law test evaluates three categories of factors. Behavioral control examines whether the company controls how the worker performs the work - if you tell event staff what to wear, when to arrive, how to set up equipment, and what to do throughout the event, that is behavioral control consistent with an employment relationship. Financial control examines whether the worker has invested in their own tools, markets their services to multiple clients, and can profit or lose money from the work. Relationship type examines whether the work is a key aspect of the company's regular business, whether there are benefits, and whether the relationship is ongoing. Event crew who work your events regularly, follow your direction, and do not have their own independent business are employees under this test.",
  },
  {
    question: "Which event roles are most likely to qualify as legitimate 1099 contractors?",
    answer: "The strongest candidates for legitimate 1099 status in the events industry are specialists who run their own independent businesses: wedding photographers with their own studio and multiple clients, specialized AV vendors who own their equipment and service multiple event companies, contract entertainers (bands, speakers, performers) with their own management and booking arrangements, and specialized consultants such as event designers or production coordinators who work for multiple clients simultaneously. The key distinguishing factors are that they have their own business identity, set their own rates, work for multiple clients, and are not economically dependent on any single event company.",
  },
  {
    question: "We hire the same crew for every event. Are they employees?",
    answer: "Recurring event workers are the highest-risk category for misclassification. When someone works your events consistently over time, follows your direction at each event, and depends on your work as a primary income source, virtually every applicable classification test points to an employment relationship. The fact that the work is event-by-event does not make it independent contracting. Many event companies operate under a longstanding misclassification that has never been audited. If your recurring crew members are on 1099, that classification should be reviewed before a state agency or former worker raises a complaint.",
  },
  {
    question: "What are the penalties for misclassifying event workers?",
    answer: "Penalties for worker misclassification include back payroll taxes (employer FICA, FUTA, and state unemployment taxes) for the misclassified period, interest on unpaid taxes, federal penalties ranging from 1.5% to 40% of wages depending on whether the misclassification was inadvertent or intentional, state penalties which vary but can be substantial, back wages for overtime and minimum wage violations, and in class action or PAGA (California) scenarios, penalties per pay period per employee. In California, the PAGA Private Attorneys General Act allows employees to sue on behalf of the state for labor code violations, which has made misclassification particularly expensive there.",
  },
  {
    question: "How do we transition misclassified workers to W-2 without creating a bigger problem?",
    answer: "Transitioning workers from 1099 to W-2 should be done carefully and ideally with legal counsel. Options include using the IRS Voluntary Classification Settlement Program (VCSP), which allows employers to prospectively reclassify workers with reduced back tax liability. For state purposes, check whether your state has a voluntary compliance program. Document the business reason for the reclassification and be consistent - reclassifying only some workers while keeping others on 1099 for the same type of work raises questions. BEG can help you set up the W-2 payroll structure for newly reclassified workers and ensure the onboarding is done correctly going forward.",
  },
];

export default function EventStaffW2Vs1099ClassificationPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Events</p>
              <h1>Event Staff Classification: When to Issue W-2 vs 1099 for Crew and Vendors</h1>
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
          Worker misclassification is the most common compliance problem in the events industry. Event companies have historically paid large portions of their workforce on 1099 as a matter of industry custom, not because the working relationships actually qualify for independent contractor status. State labor agencies have taken an increasingly aggressive posture on event industry misclassification, and California AB5 closed most of the remaining loopholes for event crew. This article explains how to evaluate classification for different types of event workers and what to do if your current setup is at risk.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The Core Question: Control and Economic Dependence</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Every worker classification test, regardless of jurisdiction, ultimately comes back to two core questions: does the company control how the work is performed, and is the worker economically dependent on the company?
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Control means more than just directing the final outcome. If you tell event staff when to arrive, what to wear, how to set up the room, what their role is during the event, and when they can take breaks, you are exercising behavioral control over the work. If you provide the equipment they use, set the rate they are paid without negotiation, and the engagement is indefinite rather than project-specific, you are also exercising financial control.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Economic dependence means the worker relies on your company as their primary source of income and cannot profit from their own investment or business decisions. Someone who sets up at your events every weekend as their only work is economically dependent, regardless of how the arrangement is labeled.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Classification by Role: Event Industry Examples</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Role</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Typical Classification</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Key Factor</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Event setup and breakdown crew", "W-2 employee", "Directed, recurring, no independent business"],
                ["In-house AV technician", "W-2 employee", "On your schedule, using your equipment"],
                ["Stage manager for your events only", "W-2 employee", "Economically dependent, ongoing relationship"],
                ["Independent AV company", "1099 - business entity", "Incorporated vendor with multiple clients"],
                ["Wedding band or performer", "1099 - business entity", "Independent business with own management"],
                ["Guest speaker or entertainment act", "1099 - business entity", "Independent contractor with own booking"],
                ["Specialized event designer", "Fact-dependent", "Analyze control and dependence factors"],
              ].map(([role, classification, factor], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{role}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{classification}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>California AB5: A Different Standard</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          California AB5 imposes a stricter ABC test for worker classification that overrides the common law test in California. Under AB5, a worker is presumed to be an employee unless all three conditions of the ABC test are satisfied:
        </p>
        <ul style={{ lineHeight: "1.8", marginBottom: "1rem", paddingLeft: "1.5rem" }}>
          <li><strong>A:</strong> The worker is free from control and direction in performing the work</li>
          <li><strong>B:</strong> The work is outside the usual course of the hiring company's business</li>
          <li><strong>C:</strong> The worker is customarily engaged in an independently established trade, occupation, or business</li>
        </ul>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          For event companies, the B prong is the critical barrier. If your business is producing events, then event crew performing event production work cannot satisfy part B. They must be classified as California employees. This applies to any company operating an event in California, regardless of where the company is headquartered.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Auditing Your Current Classification</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          If you currently pay recurring event crew on 1099, an audit of your classification is the first step. Review each 1099 worker against the relevant classification test for their primary work state. Ask: do they have their own business entity? Do they work for multiple event companies? Do we control how they perform the work? Is our work their primary income source?
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Workers who do not satisfy these tests should be reclassified. The IRS Voluntary Classification Settlement Program (VCSP) allows prospective reclassification with reduced penalties for past misclassification. State-level programs vary.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Handles</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>W-2 payroll processing for correctly classified event employees</li>
          <li>1099-NEC preparation for legitimate independent contractors</li>
          <li>Classification documentation and audit support</li>
          <li>Onboarding support for workers transitioning from 1099 to W-2</li>
          <li>California-specific compliance for events in California</li>
          <li><Link href="/services/managed-payroll">BEG Managed Payroll</Link> - fully managed at $25-$45 PEPM, all 50 states</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Get Your Classification Right Before an Audit Does It for You</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages event company payroll with proper W-2 and 1099 handling at $25 to $45 per employee per month. Setup in 3 to 5 business days.
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
          Also relevant: <Link href="/services/managed-payroll/events" style={{ color: "#ECAC60" }}>Managed Payroll for Event Companies</Link> and <Link href="/blog/payroll/events/event-company-payroll-guide" style={{ color: "#ECAC60" }}>Event Company Payroll Guide 2026</Link>.
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
        "headline": "Event Staff Classification: When to Issue W-2 vs 1099 for Crew and Vendors",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://beghr.com" },
        "datePublished": "2026-06-28",
        "dateModified": "2026-06-28",
        "url": "https://beghr.com/blog/payroll/events/event-staff-w2-vs-1099-classification"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Events", "item": "https://beghr.com/blog/payroll/events" },
          { "@type": "ListItem", "position": 5, "name": "W-2 vs 1099 Classification", "item": "https://beghr.com/blog/payroll/events/event-staff-w2-vs-1099-classification" }
        ]
      }) }} />
    </article>
  );
}
