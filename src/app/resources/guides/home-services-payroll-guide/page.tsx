import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Home Services Payroll Guide | Field Crews Handled | BEG',
  description: 'Home services payroll guide: field crew overtime, tool reimbursements, multi-state licensing, prevailing wage jobs, and dispatch pay, fully managed.',
  alternates: {
    canonical: 'https://beghr.com/resources/guides/home-services-payroll-guide',
  },
  openGraph: {
    title: 'Home Services Payroll Guide | Field Crews Handled | BEG',
    description: 'Home services payroll guide: field crew overtime, tool reimbursements, multi-state licensing, prevailing wage jobs, and dispatch pay, fully managed.',
    url: 'https://beghr.com/resources/guides/home-services-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Services Payroll Guide | Field Crews Handled | BEG',
    description: 'Home services payroll guide: field crew overtime, tool reimbursements, multi-state licensing, prevailing wage jobs, and dispatch pay, fully managed.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: "How is overtime handled for HVAC, plumbing, and electrical field crews?",
    a: "Field technicians are typically non-exempt, so any hours over 40 in a week earn overtime. The complication is what counts as hours worked. Drive time between job sites, mandatory shop check-ins, and on-call dispatch can all be compensable. When techs also earn spiffs or job bonuses, those non-discretionary amounts have to be folded into the regular rate. BEG tracks compensable time and blends the rate so overtime is correct.",
  },
  {
    q: "Are tool and vehicle reimbursements taxable on payroll?",
    a: "It depends on whether the plan is accountable. Under an accountable plan with proper documentation, tool, mileage, and equipment reimbursements are not taxable wages. Without documentation, the IRS treats them as taxable income. BEG sets up reimbursements correctly so legitimate expenses stay non-taxable and your techs are not over-taxed on their own tools.",
  },
  {
    q: "What is prevailing wage and when does it apply to home services work?",
    a: "Prevailing wage laws require set hourly rates and fringe amounts on certain public or government-funded jobs, even for trades that normally bill private rates. A plumbing or electrical contractor who picks up a public project may owe prevailing wage and certified payroll reporting on that job only. BEG can run prevailing-wage jobs alongside your standard payroll and produce the certified reports.",
  },
  {
    q: "How does multi-state licensing affect payroll for a service company?",
    a: "Crews that cross state lines to take jobs create multi-state withholding obligations, and each state has its own income tax, unemployment, and labor rules. A tech working a job in a neighboring state may trigger withholding there. BEG handles multi-state withholding and remittance so expanding your service area does not break payroll.",
  },
];

export default function HomeServicesPayrollGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://beghr.com/resources/guides/home-services-payroll-guide',
                url: 'https://beghr.com/resources/guides/home-services-payroll-guide',
                name: 'Home Services Payroll Guide',
                datePublished: '2026-06-28',
                dateModified: '2026-06-28',
                author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti' },
                publisher: { '@type': 'Organization', name: 'Business Executive Group' },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
                  { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://beghr.com/resources/guides' },
                  { '@type': 'ListItem', position: 4, name: 'Home Services Payroll Guide', item: 'https://beghr.com/resources/guides/home-services-payroll-guide' },
                ],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Payroll Guide</p>
            <h1>Home Services Payroll Guide</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#666666' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              HVAC, plumbing, and electrical crews bring field overtime, tool reimbursements, multi-state licensing, prevailing-wage jobs, and dispatch pay into payroll. Here is how each piece works and how managed payroll takes it off your plate.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Home Services Payroll Guide"
            toolDescription="Field crews, tool reimbursements, multi-state licensing, and dispatch overtime -- the full guide in your inbox."
            assetUrl="/resources/guides/home-services-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>


      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6f0', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <p style={{ fontWeight: '700', color: '#000000', marginBottom: '1rem', fontSize: '1rem' }}>Key takeaways</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.75', fontSize: '0.95rem' }}>
              <li>Field overtime hinges on what counts as hours worked: drive time, on-call dispatch, and mandatory check-ins can all be compensable.</li>
              <li>Tool, mileage, and equipment reimbursements stay non-taxable only under a documented accountable plan; without one they become taxable wages.</li>
              <li>Public or government-funded jobs can trigger prevailing wage and certified payroll reporting on that job only.</li>
              <li>BEG runs home services payroll fully managed at $25-$45 PEPM, including multi-state withholding and certified prevailing-wage reports.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>Field overtime and dispatch pay</h2>
            <p>
              Most HVAC, plumbing, and electrical technicians are non-exempt, so anything over 40 hours a week earns overtime. The hard part is not the multiplier, it is deciding what counts as hours worked. Drive time between job sites during the workday is generally compensable. On-call dispatch can be compensable depending on how restricted the technician is. A mandatory morning shop check-in before heading to the first call usually starts the clock.
            </p>
            <p>
              On top of that, service companies love incentives: spiffs for selling a maintenance plan, bonuses for closing a job, commission on parts. Those non-discretionary payments have to be folded into the regular rate before overtime is calculated, the same trap that catches manufacturers. Get the compensable-time rules wrong or skip the rate blending and you build wage-and-hour liability one ticket at a time. Managed payroll tracks compensable time and blends the rate every period.
            </p>

            <h2>Tool and vehicle reimbursements</h2>
            <p>
              Technicians spend real money on tools, and many drive personal vehicles or company trucks. How those reimbursements are handled on payroll decides whether they are taxed. Under an accountable plan, where the expense is business-related, substantiated with documentation, and excess advances are returned, reimbursements are not taxable wages. Without that structure, the IRS treats the same payments as taxable income, and the technician effectively pays tax on their own tools.
            </p>
            <p>
              This is easy to get wrong when reimbursements are dropped into payroll as a lump add. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> configures accountable-plan reimbursements correctly so legitimate tool, mileage, and equipment expenses stay non-taxable and your crews keep more of what they are owed.
            </p>

            <h2>Prevailing wage on public jobs</h2>
            <p>
              A service contractor that normally bills private residential and commercial work can suddenly land a public project, a school, a municipal building, a federally funded site. Those jobs often carry prevailing-wage requirements: mandated hourly rates, mandated fringe amounts, and certified payroll reporting that has to be filed on a set schedule. The rates apply to that job only, which means the same technician can earn a private rate on Monday and a prevailing rate on Tuesday.
            </p>
            <p>
              Running a prevailing-wage job alongside standard payroll without the right setup is where contractors get into trouble, because the certified reports have to be exact. BEG can run prevailing-wage jobs in parallel with your normal payroll and produce the certified payroll reports, so taking on public work does not require a separate payroll system.
            </p>

            <h2>Multi-state licensing and withholding</h2>
            <p>
              As a service company grows, crews start crossing state lines to take jobs, and each state where work is performed can create a withholding obligation with its own income tax, unemployment rate, and labor rules. A technician who spends a week on a job across the state line may trigger withholding in that state. Handled manually, this is where expansion quietly breaks payroll.
            </p>
            <p>
              Managed payroll consolidates it. BEG handles multi-state withholding and remittance so your service-area growth is a sales decision, not a payroll problem. For most home services companies the alternative is an internal payroll hire costing $60,000 to $100,000 fully loaded; BEG delivers the service directly at $25-$45 PEPM, all-inclusive, with implementation in three to five business days. See the full service on the <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll overview</Link> or browse more <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>payroll guides</Link>.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                <h3 style={{ fontSize: '1.02rem', fontWeight: '700', color: '#000000', marginBottom: '0.6rem' }}>{f.q}</h3>
                <p style={{ margin: 0, color: '#555555', lineHeight: '1.7', fontSize: '0.93rem' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#000000', borderRadius: '10px', padding: '2.5rem', textAlign: 'center', color: '#ffffff' }} className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Let BEG Run It</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles home services payroll fully managed. $25-$45 PEPM, all-inclusive.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Field overtime, accountable-plan reimbursements, prevailing-wage certified reports, and multi-state withholding, all handled by a dedicated BEG contact. No surcharges. No per-form fees.
            </p>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a Free 15-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
