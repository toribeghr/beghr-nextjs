import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Urgent Care Payroll, Clinical Staff and HIPAA Ops | BEG",
  description: "Urgent care payroll: physician and PA compensation, clinical overtime, credential tracking, and multi-site compliance. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/healthcare/urgent-care-payroll" },
  openGraph: {
    title: "Urgent Care Payroll, Clinical Staff and HIPAA Ops | BEG",
    description: "Urgent care payroll: physician comp, clinical overtime, credential tracking, and multi-site compliance. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/healthcare/urgent-care-payroll",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-healthcare-urgent-care-payroll.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Urgent Care Payroll, Clinical Staff and HIPAA Ops | BEG", description: "Urgent care payroll: physician comp, clinical overtime, credential tracking, and multi-site compliance. BEG at $25-$45 PEPM.", images: ["https://www.beghr.com/blog-images/blog-payroll-healthcare-urgent-care-payroll.webp"] },
};

const faqs = [
  {
    question: "Are physician assistants and nurse practitioners exempt from overtime?",
    answer: "It depends on how they are paid and whether they meet the FLSA's learned professional exemption. To qualify as exempt under the learned professional exemption, the employee must: earn at least $684 per week on a salary or fee basis, have work requiring advanced knowledge in a field of science or learning, and have acquired that knowledge through a prolonged course of specialized intellectual instruction. PAs and NPs who are salaried and work independently applying advanced clinical knowledge generally qualify. Hourly PAs and NPs who perform defined tasks and follow set protocols may not qualify. We recommend confirming exemption status with employment counsel before classifying clinical staff as exempt.",
  },
  {
    question: "How do we handle payroll for physicians who work as independent contractors versus employees?",
    answer: "Physicians at urgent care facilities may be structured as W-2 employees or as independent contractors who work per shift or per session. The classification analysis is the same as any industry: behavioral control (does the clinic direct how the physician provides care?), financial control (does the physician bear their own malpractice costs and work for multiple organizations?), and relationship (is there a written independent contractor agreement, and does the relationship resemble employment?). Physicians who work shifts at one clinic under clinic protocols and use clinic-provided equipment are frequently employees regardless of contract language. Misclassification exposes the clinic to significant liability.",
  },
  {
    question: "We have a mix of full-time and per diem clinical staff. How does per diem payroll work?",
    answer: "Per diem staff are employees who work variable schedules without a guaranteed number of hours. They are paid only for hours worked and are not guaranteed a minimum number of shifts. For payroll purposes, per diem employees are typically non-exempt hourly workers entitled to overtime if they work more than 40 hours in a workweek. If a per diem employee picks up enough shifts to exceed 40 hours in a week -- which can happen during staffing shortages -- they are owed overtime regardless of their per diem status. We track hours for all employees, including per diem, and flag overtime events.",
  },
  {
    question: "How do we handle on-call pay for clinical staff?",
    answer: "On-call pay treatment depends on whether the on-call time is 'hours worked' under the FLSA. If employees are required to remain on the employer's premises or so restricted that they cannot use the time effectively for their own purposes, on-call time is compensable. If employees can be at home or otherwise free to use the time but must respond quickly when called, the time may or may not be compensable depending on the restrictions. Most urgent care facilities that require clinical staff to be available within 30 minutes while on call and face frequent callbacks will find that on-call time is compensable. We configure on-call pay based on your actual policy and applicable rules.",
  },
  {
    question: "We have multiple clinic locations. Does each location need a separate payroll setup?",
    answer: "No. We configure payroll at the company level with location codes for each clinic. Employees who float between clinics are assigned to their primary location for tax purposes but can clock in at any location. If your clinics are in different states -- common for urgent care chains near state borders -- each state requires separate withholding configuration and employer registration. We handle multi-location and multi-state configurations under one service.",
  },
  {
    question: "What does BEG charge for urgent care payroll?",
    answer: "BEG manages urgent care payroll at $25 per employee per month on your existing payroll system, or $45 per employee per month on BEG's isolved platform. For a 3-location urgent care group with 45 employees, that is $1,125 to $2,025 per month, all-inclusive. Live in 3 to 5 business days from contract signing.",
  },
];

export default function UrgentCarePayrollPage() {
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
              <p className="eyebrow">Blog · Payroll Management · Healthcare</p>
              <h1>Urgent Care Payroll: Clinical Staff Compensation, Overtime Rules, and Multi-Site Compliance (2026)</h1>
              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", color: "#666", marginTop: "1rem" }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-healthcare-urgent-care-payroll.webp" alt={`Urgent Care Payroll, Clinical Staff and HIPAA Ops`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          Urgent care payroll has to handle a workforce structure that combines physicians and advanced practice providers (who may be exempt or contractors), registered nurses and medical assistants (who are non-exempt hourly), per diem staff with variable schedules, and administrative and front desk employees running on standard biweekly cycles. Each category has different overtime rules, classification considerations, and pay structures. Running all of them through a single generic payroll setup without distinction creates errors across every employee population.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Urgent Care Workforce Pay Structures</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Role Type</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Typical Pay Structure</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>Key Payroll Issue</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Medical Director / physician (W-2)", "Salary or per-shift", "Exempt status analysis; on-call pay rules"],
                ["PA / NP", "Salary or hourly", "Exempt analysis; overtime if hourly non-exempt"],
                ["RN / LVN", "Hourly non-exempt", "Overtime after 40 hours per week (or daily in CA)"],
                ["Medical assistant (MA)", "Hourly non-exempt", "Minimum wage, overtime, break requirements"],
                ["Per diem clinical staff", "Hourly -- shifts only", "No guaranteed hours; still entitled to OT if >40 hours"],
                ["Front desk / admin", "Hourly or salary", "Standard non-exempt if hourly; salary threshold if exempt"],
              ].map(([role, pay, issue], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{role}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{pay}</td>
                  <td style={{ padding: "10px 14px", borderBottom: "1px solid #eee" }}>{issue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The 8-and-80 Rule: Does It Apply to Urgent Care?</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          The FLSA Section 7(j) 8-and-80 rule allows certain healthcare employers to use a 14-day work period instead of a 7-day workweek for overtime calculations, paying overtime only for hours over 8 in a day or 80 in the 14-day period. This option is available to hospitals and residential care establishments -- but not all healthcare facilities qualify.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Urgent care facilities do not typically qualify as hospitals or residential care establishments under the FLSA definition. The standard 7-day workweek and 40-hour overtime threshold applies. If a consultant or payroll system has suggested the 8-and-80 rule for your urgent care operation, that needs to be reviewed with employment counsel.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The <a href="https://www.dol.gov/agencies/whd/overtime/workers" target="_blank" rel="noopener noreferrer" style={{ color: "#ECAC60" }}>DOL overtime guidance for healthcare workers</a> provides the applicable standards and which facilities qualify for the 8-and-80 option.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Multi-Site Urgent Care Payroll</h2>
        <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
          Urgent care groups that operate multiple clinics often have staff who float between locations. Cross-location scheduling creates the same multi-location overtime challenge as retail: all hours worked across all locations in a workweek count toward the overtime threshold. If a MA works 24 hours at Clinic A and 20 hours at Clinic B, they have worked 44 hours and are owed 4 hours of overtime.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "2.5rem" }}>
          See <a href="/services/managed-payroll" style={{ color: "#ECAC60" }}>BEG's managed payroll service</a> for details on how multi-location tracking is configured.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What BEG Manages for Urgent Care Groups</h2>
        <ul style={{ lineHeight: "1.8", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
          <li>Multi-population payroll: physicians, APPs, nurses, MAs, admin</li>
          <li>Per diem scheduling payroll with overtime tracking across all shifts</li>
          <li>Exempt vs. non-exempt configuration per role</li>
          <li>On-call pay configuration per your policy and applicable rules</li>
          <li>Multi-location hour tracking for floating staff</li>
          <li>Multi-state employer registration for border-area clinic groups</li>
          <li>W-2 and 1099 production; payroll tax filings</li>
          <li>Setup in 3 to 5 business days from contract signing</li>
        </ul>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Payroll That Handles Your Clinical and Non-Clinical Staff Correctly</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages urgent care payroll at $25 to $45 per employee per month, all-inclusive. Live in 3 to 5 business days.
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
        "headline": "Urgent Care Payroll: Clinical Staff Compensation, Overtime Rules, and Multi-Site Compliance (2026)",
        "author": { "@type": "Person", "name": "Anthony Moretti" },
        "publisher": { "@type": "Organization", "name": "Business Executive Group", "url": "https://www.beghr.com" },
        "datePublished": "2026-06-27",
        "dateModified": "2026-06-27",
        "url": "https://www.beghr.com/blog/payroll/healthcare/urgent-care-payroll"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Healthcare", "item": "https://www.beghr.com/blog/payroll/healthcare" },
          { "@type": "ListItem", "position": 5, "name": "Urgent Care Payroll", "item": "https://www.beghr.com/blog/payroll/healthcare/urgent-care-payroll" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Dental Office Payroll Outsourcing (Full Breakdown)", excerpt: "Dental office payroll outsourcing vs. hiring in-house. Hygienist tips, associate dentist comp, DSO...", href: "/blog/payroll/healthcare/dental" },
        { category: "Payroll", title: "Healthcare Payroll Benefits Integration (Full Breakdown)", excerpt: "Managed payroll for healthcare. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/healthcare/healthcare-benefits-integration-payroll" },
        { category: "Payroll", title: "Healthcare Payroll Direct Deposit Setup, Step by Step", excerpt: "Managed payroll for healthcare. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/healthcare/healthcare-direct-deposit-setup" },
      ]} />
      </article>
  );
}
