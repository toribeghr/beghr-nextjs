import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Events HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for event companies: day-rate classification, seasonal rehires, and overtime across event weeks handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/events' },
  openGraph: {
    title: 'Events HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for event companies: day-rate classification, seasonal rehires, and overtime across event weeks handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/events',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Events HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for event companies: day-rate classification, seasonal rehires, and overtime across event weeks handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-events');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for an event company?',
    'Certified HR professionals handle your handbook, day-rate and variable-hour classification reviews, seasonal rehire paperwork, minor work rules, and manager coaching, sized to an event business instead of an arena operator.',
  ],
  [
    'Are day-rate event staff exempt from overtime?',
    'Usually not. A day rate alone does not satisfy the salary basis test, and most event crew roles fail the duties tests anyway. Overtime is owed on top, calculated correctly.',
  ],
  [
    'Can it handle minors working our events?',
    'Yes at the policy level: age verification at hire, documented hour restrictions, and prohibited-task lists for anyone under 18, aligned to federal rules and the stricter state rules where you operate.',
  ],
  [
    'Is this a PEO for event companies?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does events HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingEventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'Events', item: 'https://www.beghr.com/services/hr-outsourcing/events' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Events"
        title="Your team produces flawless events. Who produces the employment paperwork?"
        description="Day-rate crew who work sixty hours in an event week, seasonal staff rehired every spring on paperwork from last year, a seventeen-year-old on the load-out crew: event businesses run on exactly the workforce patterns wage law watches closest. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Events HR Problem</p>
              <h2>The show gets the run sheet. Employment compliance gets improvised.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before event-season complexity',
                  sub: 'Event companies staff lean between shows, so HR lands on the operations director, handled between site visits and vendor calls.',
                },
                {
                  stat: '40 hours',
                  label: 'The overtime line a day rate does not erase',
                  sub: 'Pay someone a flat day rate for three sixteen-hour event days and overtime is still owed on the hours past forty. The day rate sets the regular rate; it does not replace the math.',
                },
                {
                  stat: 'Under 18',
                  label: 'Where event staffing meets child labor rules',
                  sub: 'Minors on setup, concessions, or street teams bring hour restrictions, prohibited-task lists, and in many states work permit requirements, all enforced against the employer.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.dol.gov/agencies/whd/child-labor" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, child labor provisions</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Events HR Compliance</p>
              <h2>The employment problems specific to event businesses, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour and day-rate staff, classified before someone else does it</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Event staffing runs on flexible labels: day-rate stagehands, per-event coordinators, 1099 brand ambassadors booked through a group chat. Wage law does not run on labels. A day rate rarely satisfies the salary basis test for exemption, and crew who work your schedule under your direction are employees under the economic reality factors no matter what the booking text said. HR outsourcing classifies each role in writing, sets pay structures that satisfy minimum wage and overtime in every state you produce in, and standardizes the engagement paperwork so a busy season does not create a season of misclassification.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Minors on event day, without the violation</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Events attract young workers: concessions, guest services, street teams, junior crew. Federal child labor rules restrict hours for fourteen and fifteen year olds and prohibit hazardous work for anyone under eighteen, which reaches deeper into event operations than most managers realize: forklifts and powered equipment at load-in, certain driving, some rigging-adjacent tasks. States layer work permits, curfews, and stricter hour caps on top, and event-day exceptions are narrower than folklore suggests. HR outsourcing builds the controls: age verification at hire, documented schedule restrictions, prohibited-task lists by age, and manager training so an enthusiastic seventeen-year-old never ends up on the wrong equipment.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Seasonal surges and rehires with paperwork that resets correctly</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Event businesses hire the same people every season, and each return raises questions a spreadsheet cannot answer. Does a returning worker need a new I-9 or does reverification rules apply? Which policy acknowledgments must be re-signed after a handbook update? Do prior seasons count toward leave eligibility thresholds? Does a state require rehire offers to former seasonal staff before new hiring? HR outsourcing turns the seasonal ramp into a checklist: compliant rehire packets, I-9 handling that matches the federal rules, acknowledgment tracking, and clean separation documentation at season end, so recruiting for next season starts from an orderly file instead of a shoebox.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Overtime that whipsaws between event weeks and office weeks</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The event calendar produces a schedule wage law was not designed around: seventy-hour install weeks followed by quiet office weeks. Overtime is calculated week by week, so the quiet weeks do not offset the loud ones, and informal comp time arrangements for non-exempt staff simply convert unpaid overtime into a documented violation. Travel days, on-site waiting time, and overnight stays each have their own compensability rules that event schedules trigger constantly. HR outsourcing writes the timekeeping and travel-time policies, trains coordinators on what counts as hours worked, and keeps records that make an audit boring.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Venue and site conduct policies as employment documents</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Your people work in venues you do not control, alongside vendors you did not hire, at events where alcohol is often part of the product. That makes conduct and safety policies employment documents, not laminated signage: harassment reporting that works when the incident involves a venue employee or a guest, alcohol rules for staff working bars and hospitality suites, incident reporting that protects both the injured worker and the company, and site safety expectations workers acknowledge in writing. HR outsourcing drafts the policy set, wires it into onboarding, and coaches managers on responding to event-night incidents in a way that stands up later.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Event businesses big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Event production companies', body: 'Install crews, day-rate technicians, and workweeks that spike past forty hours every time a show loads in.' },
                { title: 'Catering and event hospitality', body: 'Variable-hour servers and bartenders, tip rules by state, and rosters that double for wedding season.' },
                { title: 'AV and staging companies', body: 'Riggers, operators, and hazardous-equipment rules that collide with young crew members and long calls.' },
                { title: 'Experiential and brand activation agencies', body: 'Street teams and brand ambassadors in multiple states, booked fast, and classified correctly or expensively.' },
                { title: 'Festivals and venue operators', body: 'Seasonal box office, security, and grounds staff, with minors in the applicant pool every summer.' },
                { title: 'Wedding and corporate event planners', body: 'A core salaried team plus event-day contractors, and the classification line between them nobody has drawn.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/events">managed payroll for event companies</Link>. Running food and beverage at scale? See <Link href="/services/hr-outsourcing/multi-unit-restaurant">HR outsourcing for multi-unit restaurants</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Events HR outsourcing, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
