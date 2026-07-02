import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Time and Attendance Tracking: What isolved Automates | BEG",
  description: "isolved time and attendance: punch methods, overtime alerts, geofencing, scheduling, and direct payroll integration. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/hcm-software/time-attendance-tracking" },
  openGraph: {
    title: "Time and Attendance Tracking: What isolved Automates | BEG",
    description: "isolved time and attendance: punch-in methods, overtime alerts, geofencing, scheduling, and payroll integration. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/hcm-software/time-attendance-tracking",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Time and Attendance Tracking: What isolved Automates | BEG", description: "isolved time and attendance: punch methods, overtime alerts, geofencing, and payroll integration. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const faqs = [
  {
    question: "What are the different ways employees can clock in with isolved time tracking?",
    answer: "isolved supports multiple punch methods to match different work environments: web-based clock-in from a browser (for office workers), mobile app punch-in with GPS location capture (for field employees), physical time clock kiosks (for manufacturing or retail), and biometric authentication options. Employers can configure which methods are available by employee group -- requiring kiosk punches for hourly plant workers while allowing mobile app punches for field service technicians. Each punch method captures the timestamp, the employee's identity, and optionally the GPS coordinates or device ID, creating a full audit trail for every time entry.",
  },
  {
    question: "How does isolved automatically calculate overtime?",
    answer: "isolved applies your configured overtime rules to each employee's time entries at the end of each workday and workweek. You define the workweek (start day and time), the overtime threshold (40 hours for most states; 8 hours per day for California and a few others), and any shift differential rules. When an employee's hours exceed the threshold, isolved flags the overtime hours and calculates the premium pay automatically when the time is exported to payroll. The system prevents the overtime from being 'corrected away' without an audit trail -- any time edits are logged with the editor's name and timestamp.",
  },
  {
    question: "What is geofencing and how does it work for field employees?",
    answer: "Geofencing creates a virtual boundary around a physical location. When configured in isolved's mobile time tracking, the system verifies that the employee's GPS coordinates are within the defined boundary (such as a client site or job site) before allowing a punch. If an employee tries to clock in from outside the geofence -- for example, clocking in from home while claiming to be on a job site -- the punch can be flagged or blocked depending on your configuration. Geofencing addresses the 'buddy punching' and time fraud problems common in field service, construction, and home care industries.",
  },
  {
    question: "How does time and attendance data get from isolved to payroll?",
    answer: "Because isolved is a single integrated platform, time and attendance data does not need to be exported and imported between systems -- it exists in the same database as payroll. When a pay period closes, managers approve time for their employees, and the approved hours flow directly into the payroll calculation. There is no file transfer, no manual re-entry, and no risk of data mismatch between the time system and the payroll system. Corrections made to time after approval are tracked in the audit log and reflected in the next payroll run or an off-cycle correction.",
  },
  {
    question: "Can isolved handle scheduling, not just timekeeping?",
    answer: "Yes. The isolved platform includes scheduling functionality that allows managers to build weekly schedules, assign shifts, and publish schedules to employees through the self-service portal or mobile app. Employees can see their upcoming shifts, request time off, and swap shifts with manager approval. The scheduling module integrates with time tracking so that the system can compare scheduled hours to actual punched hours and flag variances. For industries with complex scheduling needs (healthcare, retail, hospitality), this integration eliminates the need for a separate scheduling tool.",
  },
  {
    question: "What does BEG charge for isolved time and attendance?",
    answer: "Time and attendance is included in BEG's fully managed payroll service on isolved at $45 per employee per month. For a 40-person company, that is $1,800 per month for managed payroll, isolved time and attendance, benefits administration, and core HR -- all integrated, no file transfers between systems. If you have your own isolved account and want to manage it yourself, ask about the isolved platform reselling option.",
  },
];

export default function TimeAttendanceTrackingPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-27", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-single">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HCM Technology</p>
              <h1>Time and Attendance Tracking with isolved: Punch Methods, Overtime Automation, and Payroll Integration (2026)</h1>
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
          Time and attendance tracking is the foundational data layer for accurate payroll. Every hour recorded correctly or incorrectly cascades into overtime calculations, payroll tax remittances, labor cost reporting, and wage and hour compliance. The gap between standalone timekeeping tools that export to payroll and an integrated system where time data lives in the same platform as payroll is not just operational convenience -- it is audit defensibility. When the DOL audits your wage records, a unified system with an immutable audit log is fundamentally stronger than reconciled exports across disconnected systems.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>isolved Time and Attendance Capability Overview</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Feature</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>What It Solves</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Web browser punch", "Office workers who sit at computers all day", "Professional services, admin, tech"],
                ["Mobile app with GPS", "Field employees who work across locations", "Home care, construction, field service"],
                ["Kiosk / physical time clock", "Shared workstations, shift workers without devices", "Manufacturing, retail, healthcare"],
                ["Geofencing", "Verifies employee is physically on-site at punch", "Field service, home care, job sites"],
                ["Overtime auto-calculation", "Federal and state OT rules applied per employee", "All industries with hourly staff"],
                ["Manager approval workflow", "Managers review and approve before payroll runs", "All hourly workforce environments"],
                ["Scheduling integration", "Compare actual hours to scheduled hours", "Healthcare, retail, hospitality"],
                ["Payroll direct integration", "Approved hours flow to payroll with no file transfer", "All isolved users"],
              ].map(([feature, solves, best], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{feature}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{solves}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The FLSA Requirement: Accurate Timekeeping Is Not Optional</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The FLSA requires employers to maintain accurate records of hours worked for non-exempt employees. The employer -- not the employee -- bears the burden of demonstrating accurate records in a wage dispute. The <a href="https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL recordkeeping fact sheet</a> specifies that time records must be preserved for at least two years. A wage dispute that reaches the DOL or litigation without credible time records defaults in favor of the employee's recollection.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          isolved's time records are stored with timestamp, user ID, method of entry, and any manager edits -- creating a defensible log that documents both what was recorded and any changes made after the fact.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Real-Time Overtime Alerts: Preventing the Problem Before the Payroll Run</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          One of the practical advantages of integrated time tracking is the ability to flag overtime exposure in real time rather than discovering it after the fact. isolved can alert managers when an employee is approaching or has crossed the overtime threshold mid-week -- giving the manager the option to adjust scheduling before more overtime accrues. This does not mean denying employees their earned overtime (employees must be paid for all hours worked), but it gives operations visibility to make informed scheduling decisions.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          See <a href="/services/managed-payroll" style={{ color: "#ECAC60" }}>BEG's managed payroll service</a> for how time data flows into payroll processing and how we configure overtime rules at setup.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Configures for isolved Time and Attendance</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Punch method setup per employee group (web, mobile, kiosk)</li>
          <li>Geofencing boundaries for client sites and job locations</li>
          <li>Workday and workweek definition per your operation</li>
          <li>State-specific overtime rules (CA daily OT, CO daily OT, standard federal 40-hour weekly)</li>
          <li>Shift differential configuration and regular rate blending</li>
          <li>Manager approval workflow per department</li>
          <li>Scheduling templates and shift assignment</li>
          <li>Payroll integration verification -- approved hours to payroll with no manual steps</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Timekeeping That Lives in the Same System as Payroll</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG's fully managed service on isolved includes time and attendance, payroll, benefits administration, and core HR at $45 per employee per month. No file transfers. No reconciliation. Live in 3 to 5 business days.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>

        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem", color: "#666", fontSize: "0.9rem" }}>
          Also see: <a href="/services/hcm-software" style={{ color: "#ECAC60" }}>BEG's isolved HCM platform overview</a> -- full capabilities, industries served, and how the platform integrates time, payroll, and HR in a single system.
        </p>

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
        "headline": "Time and Attendance Tracking with isolved: Punch Methods, Overtime Automation, and Payroll Integration (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/hcm-software/time-attendance-tracking"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "HCM Technology", "item": "https://www.beghr.com/blog/hcm-software" },
          { "@type": "ListItem", "position": 4, "name": "Time and Attendance Tracking", "item": "https://www.beghr.com/blog/hcm-software/time-attendance-tracking" }
        ]
      }) }} />
    </article>
  );
}
