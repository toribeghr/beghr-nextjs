import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Manufacturing Payroll Guide | Shift & Overtime Handled | BEG',
  description: 'Manufacturing payroll guide: shift differentials, regular-rate overtime, union contracts, piece-rate pay, and multi-plant compliance, fully managed.',
  alternates: {
    canonical: 'https://beghr.com/resources/guides/manufacturing-payroll-guide',
  },
  openGraph: {
    title: 'Manufacturing Payroll Guide | Shift & Overtime Handled | BEG',
    description: 'Manufacturing payroll guide: shift differentials, regular-rate overtime, union contracts, piece-rate pay, and multi-plant compliance, fully managed.',
    url: 'https://beghr.com/resources/guides/manufacturing-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Payroll Guide | Shift & Overtime Handled | BEG',
    description: 'Manufacturing payroll guide: shift differentials, regular-rate overtime, union contracts, piece-rate pay, and multi-plant compliance, fully managed.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: "How is overtime calculated when a manufacturing employee earns a shift differential?",
    a: "Shift differentials are part of the regular rate of pay under the Fair Labor Standards Act. When an employee works overtime on a differential shift, the differential must be folded into the regular rate before the 1.5 multiplier is applied. Paying overtime on base wage alone underpays the worker and creates back-pay liability. BEG calculates the blended regular rate automatically every pay period.",
  },
  {
    q: "Can payroll handle non-discretionary production bonuses in the overtime rate?",
    a: "Yes, and it must. Attendance bonuses, safety bonuses, and production or piece-rate bonuses are non-discretionary and have to be added into the regular rate for overtime in the period they are earned. This is one of the most common manufacturing wage violations. BEG retro-allocates bonuses across the worked weeks so the overtime premium is correct.",
  },
  {
    q: "Does BEG support union contract rules like dues, shift premiums, and grievance pay?",
    a: "Yes. BEG configures payroll to your collective bargaining agreement, including union dues remittance, contractual shift premiums, call-in and reporting pay, and tiered wage scales. Each remittance is tracked so reporting to the union stays clean and on time.",
  },
  {
    q: "How does multi-plant payroll work if my facilities are in different states?",
    a: "Each plant can sit in a different state with its own income tax, unemployment rate, and local rules. BEG runs one consolidated payroll while withholding and remitting correctly per location, so you get a single point of contact instead of separate processors per plant.",
  },
];

export default function ManufacturingPayrollGuidePage() {
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
                '@id': 'https://beghr.com/resources/guides/manufacturing-payroll-guide',
                url: 'https://beghr.com/resources/guides/manufacturing-payroll-guide',
                name: 'Manufacturing Payroll Guide',
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
                  { '@type': 'ListItem', position: 4, name: 'Manufacturing Payroll Guide', item: 'https://beghr.com/resources/guides/manufacturing-payroll-guide' },
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
            <h1>Manufacturing Payroll Guide</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#666666' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Shift differentials, regular-rate overtime, union contracts, piece-rate pay, and multi-plant withholding make manufacturing payroll one of the hardest to run cleanly. Here is how each piece works and how managed payroll takes it off your plate.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6f0', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <p style={{ fontWeight: '700', color: '#000000', marginBottom: '1rem', fontSize: '1rem' }}>Key takeaways</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.75', fontSize: '0.95rem' }}>
              <li>Shift differentials and non-discretionary bonuses must be added into the regular rate before overtime is calculated, or the employer owes back pay.</li>
              <li>Piece-rate workers are still entitled to overtime; the regular rate is total piece earnings divided by total hours worked that week.</li>
              <li>Union contracts add dues, premium pay, and tiered scales that payroll must mirror exactly to avoid grievances.</li>
              <li>BEG runs multi-plant, multi-state manufacturing payroll fully managed at $25-$45 PEPM with one dedicated contact.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>The regular-rate overtime trap</h2>
            <p>
              The single most expensive payroll mistake in manufacturing is calculating overtime on the base hourly wage instead of the regular rate of pay. Under the Fair Labor Standards Act, the regular rate includes far more than base wages. Shift differentials, non-discretionary bonuses, production incentives, and certain premium payments all have to be blended into the rate before the 1.5 overtime multiplier is applied.
            </p>
            <p>
              A second-shift operator earning a base wage plus a differential who works ten hours of overtime is owed time-and-a-half on the blended rate, not the base. The gap looks small per hour, but multiplied across a plant floor and three years of back-pay exposure it becomes a six-figure liability. Wage-and-hour audits target manufacturers specifically because this error is so common. Managed payroll closes the gap by recomputing the regular rate every period instead of hard-coding overtime to base pay.
            </p>

            <h2>Piece-rate pay still owes overtime</h2>
            <p>
              Many shops pay piece rate to drive throughput, then assume piece workers are exempt from overtime. They are not. A piece-rate employee who works more than 40 hours in a week is owed an overtime premium. The regular rate is total piece earnings for the week divided by total hours worked, and the overtime premium is half that rate for each hour over 40, on top of the piece earnings already paid.
            </p>
            <p>
              This calculation has to happen every week because the rate floats with output. It cannot be set once and forgotten. When piece rate is combined with a guaranteed hourly minimum or a quality bonus, the math compounds. BEG configures piece-rate overtime so the weekly blended rate is computed automatically and the premium is paid correctly, which removes the manual spreadsheet most shops rely on.
            </p>

            <h2>Union contracts and collective bargaining rules</h2>
            <p>
              A collective bargaining agreement turns payroll into a compliance document. Contractual shift premiums, call-in pay, reporting pay, holiday and double-time rules, tiered wage progressions, and union dues all have to be mirrored exactly. A single misapplied premium can trigger a grievance, and chronic errors damage the labor relationship long after the dollars are repaid.
            </p>
            <p>
              Dues remittance adds its own burden. Dues have to be withheld at the contractual rate, tracked per member, and remitted to the local on schedule with accurate reporting. BEG builds the agreement into the payroll configuration so premiums, scales, and remittances follow the contract instead of relying on a payroll clerk to remember the rules.
            </p>

            <h2>Multi-plant and multi-state complexity</h2>
            <p>
              Once a manufacturer operates more than one facility, payroll multiplies. Each plant may sit in a different state with its own income tax withholding, unemployment insurance rate, local taxes, and paid-leave rules. Employees who transfer between plants or work across state lines complicate withholding further. Many manufacturers end up with a separate processor or a separate spreadsheet per location, which fractures reporting and invites error.
            </p>
            <p>
              Managed payroll consolidates this. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> runs every plant through one process while withholding and remitting correctly per location, and you get a single dedicated contact rather than a vendor per site. That is the difference between a controller chasing five processors and a controller reviewing one register.
            </p>

            <h2>What managed payroll replaces</h2>
            <p>
              For most manufacturers the alternative to managed payroll is an internal payroll hire who costs $60,000 to $100,000 fully loaded, plus the software, plus the risk that the knowledge walks out the door when that person leaves. BEG delivers the service directly at $25-$45 PEPM, all-inclusive, working in your existing system or on BEG's platform. Implementation runs three to five business days from signed contract to live payroll. If you want to see the broader service, the <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll overview</Link> covers it, and you can browse more in our <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>payroll guides</Link>.
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
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles manufacturing payroll fully managed. $25-$45 PEPM, all-inclusive.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Shift differentials, regular-rate overtime, piece-rate math, union remittances, and multi-plant withholding, all handled by a dedicated BEG contact. No surcharges. No per-form fees.
            </p>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a Free 15-Minute Call
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Manufacturing Payroll Guide"
            toolDescription="Shift work, regular-rate overtime, union contracts, and piece-rate pay -- the full guide in your inbox."
            assetUrl="/resources/guides/manufacturing-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>
    </>
  );
}
