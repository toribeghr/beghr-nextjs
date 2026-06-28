import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Senior Care Payroll Guide | 24/7 Shifts Handled | BEG',
  description: 'Senior care payroll guide: 24/7 shifts, shift differentials, high turnover, CNA compliance, and memory care vs skilled nursing staffing, fully managed.',
  alternates: {
    canonical: 'https://beghr.com/resources/guides/senior-care-payroll-guide',
  },
  openGraph: {
    title: 'Senior Care Payroll Guide | 24/7 Shifts Handled | BEG',
    description: 'Senior care payroll guide: 24/7 shifts, shift differentials, high turnover, CNA compliance, and memory care vs skilled nursing staffing, fully managed.',
    url: 'https://beghr.com/resources/guides/senior-care-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Care Payroll Guide | 24/7 Shifts Handled | BEG',
    description: 'Senior care payroll guide: 24/7 shifts, shift differentials, high turnover, CNA compliance, and memory care vs skilled nursing staffing, fully managed.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: "How are shift differentials handled for overnight and weekend care staff?",
    a: "Senior care runs around the clock, and most facilities pay extra for nights, weekends, and holidays. Those differentials are part of the regular rate of pay, so when a caregiver works overtime on a differential shift, the differential must be blended into the rate before the overtime premium is calculated. Tracking differentials per shift and folding them into overtime is exactly the kind of repetitive math BEG automates every pay period.",
  },
  {
    q: "Does high turnover make payroll harder, and can managed payroll help?",
    a: "Yes on both counts. Constant onboarding and offboarding means a steady stream of new hire setups, final paychecks, and benefit changes, each of which carries its own deadline and compliance rule. Mistakes on final pay are a common source of complaints. BEG absorbs the churn, processing new hires and terminations cleanly so a high-turnover workforce does not overwhelm an internal payroll clerk.",
  },
  {
    q: "How does CNA and caregiver compliance affect payroll?",
    a: "Certified nursing assistants and licensed staff bring credential, training-hour, and labor-rule requirements that intersect with pay. Mandatory training time and certain meeting time are usually compensable, and miscoding them creates wage exposure. While credential tracking lives in your clinical systems, BEG makes sure compensable training and meeting time is paid correctly.",
  },
  {
    q: "Can payroll separate memory care and skilled nursing staffing costs?",
    a: "Yes. Memory care and skilled nursing carry different staffing ratios and pay scales, and most operators need labor cost broken out by unit for budgeting and, in some cases, reimbursement reporting. BEG codes payroll by department or unit so you can see labor cost per care level instead of one undifferentiated number.",
  },
];

export default function SeniorCarePayrollGuidePage() {
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
                '@id': 'https://beghr.com/resources/guides/senior-care-payroll-guide',
                url: 'https://beghr.com/resources/guides/senior-care-payroll-guide',
                name: 'Senior Care Payroll Guide',
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
                  { '@type': 'ListItem', position: 4, name: 'Senior Care Payroll Guide', item: 'https://beghr.com/resources/guides/senior-care-payroll-guide' },
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
            <h1>Senior Care Payroll Guide</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#666666' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Around-the-clock shifts, shift differentials, high turnover, CNA compliance, and the split between memory care and skilled nursing make senior care payroll relentless. Here is how each piece works and how managed payroll takes it off your plate.
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
              <li>Night, weekend, and holiday differentials are part of the regular rate and must be blended into overtime, not paid on base wage alone.</li>
              <li>High turnover floods payroll with new hire setups and final paychecks, each with its own deadline and compliance rule.</li>
              <li>Mandatory training and certain meeting time for CNAs and caregivers is usually compensable and must be paid.</li>
              <li>BEG runs senior care payroll fully managed at $25-$45 PEPM, coding labor cost by unit across memory care and skilled nursing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>24/7 coverage and shift differentials</h2>
            <p>
              Senior care never closes, so payroll has to handle three shifts, weekends, and holidays every single week. Most facilities pay differentials to staff the harder slots: a premium for the overnight shift, extra for weekends, holiday pay rates. Those differentials are not a side payment, they are part of the regular rate of pay. When a caregiver works overtime during a week that included differential shifts, the differential has to be blended into the rate before the overtime premium is applied.
            </p>
            <p>
              Done by hand across dozens of caregivers rotating through different shift types, this is error-prone and slow. Paying overtime on base wage while ignoring the differential underpays staff and builds liability. Managed payroll recomputes the blended regular rate every period so the overtime premium is right regardless of how the shifts fell.
            </p>

            <h2>High turnover is a payroll load, not just an HR problem</h2>
            <p>
              Senior care has some of the highest turnover of any industry, and every departure and replacement lands on payroll. New hires need setup, tax forms, and benefit enrollment. Terminations need final paychecks that meet state deadlines, which in some states is the next business day. Miss a final-pay deadline and you risk penalties and complaints. A single internal payroll clerk handling constant churn on top of a normal cycle is a recipe for missed steps.
            </p>
            <p>
              This is where outsourcing pays for itself fastest. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> absorbs the onboarding and offboarding volume, processing new hires and final pay cleanly so turnover does not translate into payroll errors.
            </p>

            <h2>CNA and caregiver compliance</h2>
            <p>
              Certified nursing assistants and other licensed caregivers come with credentialing, training-hour, and labor requirements that touch pay directly. Mandatory in-service training, required meetings, and certain orientation time are generally compensable working time. Treating them as unpaid is a common and costly mistake. There are also rules around meal and rest breaks for direct-care staff that vary by state and affect how hours are recorded.
            </p>
            <p>
              Credential tracking itself lives in your clinical and scheduling systems, but the pay side has to match. BEG makes sure compensable training and meeting time is captured and paid correctly so the payroll record lines up with the hours your staff actually worked.
            </p>

            <h2>Memory care versus skilled nursing cost coding</h2>
            <p>
              A facility that offers both memory care and skilled nursing runs two different staffing models. Skilled nursing carries higher licensure requirements and ratios; memory care has its own specialized staffing. Operators almost always need labor cost broken out by unit for budgeting, and in some payer arrangements for cost reporting. One blended payroll number hides which level of care is driving labor spend.
            </p>
            <p>
              BEG codes payroll by department or unit so you see labor cost per care level. For most operators the alternative to managed payroll is an internal hire costing $60,000 to $100,000 fully loaded; BEG delivers the service directly at $25-$45 PEPM, all-inclusive, with implementation in three to five business days. See the full service on the <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll overview</Link> or browse more <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>payroll guides</Link>.
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
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles senior care payroll fully managed. $25-$45 PEPM, all-inclusive.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Shift differentials blended into overtime, clean high-turnover processing, compensable training pay, and unit-level cost coding, all handled by a dedicated BEG contact. No surcharges. No per-form fees.
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
