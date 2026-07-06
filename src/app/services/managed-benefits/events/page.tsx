import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Events Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for event companies: seasonal and variable-hour ACA tracking, high-turnover COBRA volume handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/events' },
  openGraph: {
    title: 'Events Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for event companies: seasonal and variable-hour ACA tracking, high-turnover COBRA volume handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/events',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Events Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for event companies: seasonal and variable-hour ACA tracking, high-turnover COBRA volume handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-events');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for an events company?',
    'Plan setup, open enrollment, life-event changes, carrier updates, variable-hour and seasonal ACA eligibility tracking, deduction sync with payroll, and Forms 1094-C and 1095-C, all in one system instead of spreadsheets between event seasons.',
  ],
  [
    'How does ACA eligibility work for seasonal and part-time event staff?',
    'The IRS look-back measurement method tracks hours over a measurement period, since anyone averaging 30 hours a week or 130 hours a month counts as full-time. Genuinely seasonal roles have their own rules, and the measurement records show which staff crossed the line and which did not.',
  ],
  [
    'Our headcount triples for peak season. Can the system handle that swing?',
    'Yes. Staff enroll themselves online as they onboard, eligibility is measured as hours accumulate, and the same records carry through when the season ends. The swing is the whole reason variable-hour tracking exists, and it runs in one system.',
  ],
  [
    'Can you keep up with our COBRA volume after a season ends?',
    'Post-season offboarding creates a wave of qualifying events, each with notice deadlines. COBRA and state continuation support is available and scoped exactly on your discovery call, so notices and elections follow the rules that apply to your company and states.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility, data, and filings.',
  ],
  [
    'Is this a PEO for event companies?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer.',
  ],
  [
    'Our event-day crew is a mix of 1099 contractors and W-2 staff. Does that change benefits eligibility?',
    'Only W-2 employees count toward ACA hours tracking and eligibility; properly classified 1099 contractors do not. The risk shows up when day-of gig staff are treated as contractors but actually work under the kind of direction and schedule control that makes them employees. Getting that classification right first is what makes the hours count trustworthy, and misclassification review is scoped on your discovery call alongside eligibility tracking.',
  ],
  [
    'Our crews work events in multiple states. Do COBRA and continuation rules travel with them?',
    'Federal COBRA applies the same way regardless of which state an employee works in, but many states layer on their own mini-COBRA continuation rules for smaller employers, and those rules follow the state where the employee was covered, not where your company is headquartered. A crew that works festivals in three states in one season can trigger three different continuation frameworks at offboarding. Which states apply to your roster is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsEventsPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Events', item: 'https://www.beghr.com/services/managed-benefits/events' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Events"
        title="Your headcount swings with the season. ACA tracking does not care."
        description="Peak-season crews that triple then vanish, part-time staff nobody can classify, and a post-event offboarding wave that turns COBRA notices into a project. BEG Managed Benefits, powered by isolved, runs the administration for event companies nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Seasonal', label: 'Variable-hour ACA tracking built in' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Events Benefits Problem</p>
              <h2>A workforce that scales up and down on the calendar is the hardest kind to administer benefits for.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '130 hrs',
                  label: 'The monthly hour count that makes someone ACA full-time',
                  sub: 'The IRS treats 130 hours of service in a month as full-time. A part-time coordinator who works peak weeks back to back can cross the line while the spreadsheet still lists them as seasonal.',
                },
                {
                  stat: 'Peak swings',
                  label: 'Crews that triple for a season, then drop back',
                  sub: 'Conference season, wedding season, and holiday galas spike headcount, then it falls off. That swing is exactly the workforce the look-back measurement method exists for, and almost nobody runs it by hand correctly.',
                },
                {
                  stat: 'Every season',
                  label: 'Offboarding waves mean batches of COBRA events',
                  sub: 'When a season ends, covered staff roll off together, and each exit starts a clock on election notices. Volume in bursts is what breaks manual COBRA administration, not difficulty.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/identifying-full-time-employees" target="_blank" rel="noopener noreferrer">IRS, identifying full-time employees under the ACA</a>.
            </p>
            <p className="reveal" style={{ marginTop: '1.5rem', color: '#444444', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Picture a mid-size event production company with 14 core, year-round staff. Every spring it staffs up for wedding season: 40 additional coordinators, day-of crew, and setup hands come on between April and September, most of them part-time or seasonal. The look-back measurement period that started the previous fall determines, hour by hour, which of those seasonal hires already crossed into ACA full-time status before the season even peaks. Then September ends, wedding season winds down, and 30 or more people roll off coverage inside a few weeks, each one starting its own COBRA election clock. Handled by hand, that is two compliance projects a year running on spreadsheets. Handled in one system, the measurement periods and the offboarding wave are just two phases of the same process.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Events benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: enrollment that keeps up with onboarding waves</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans live in one system and staff enroll themselves online as they onboard for a season, with AI-guided recommendations balancing cost and coverage. Life events are self-service workflows instead of a form waiting on the operations lead, and deductions sync to payroll across variable schedules and multiple event sites.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: the plan built for seasonal, variable-hour rosters</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>This is where most event companies land. Part-time, seasonal, and flex staff are measured under the IRS look-back method, offers of coverage are documented, and Forms 1094-C and 1095-C are produced on schedule. When the IRS asks why a coordinator averaging 32 hours was or was not offered coverage, the measurement records answer instead of last year&apos;s memory.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: peak-season churn becomes someone else&apos;s inbox</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the flood of hires, exits, and status changes each season generates, and keeps carrier records current. A Benefits Auditing Analyst checks the data for the errors that cost real money: departed seasonal staff still on the carrier bill, missed eligibility dates, and deductions that stopped matching elections after a schedule change.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Year-round core staff and seasonal surge staff, tracked as the different populations they are</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>An events company usually runs two workforces at once: a small year-round core that behaves like ordinary full-time or part-time staff, and a much larger surge population that comes and goes with the calendar. Eligibility measurement treats them differently from day one instead of forcing one rule onto both, so core staff get standard tracking while surge hires run through look-back measurement built for variable hours. Getting that split wrong in either direction, over-tracking core staff or under-tracking surge hires, is where most in-house event benefits administration breaks down.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Event businesses carrying real ACA and COBRA exposure without a benefits department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Wedding and event planning companies', body: 'A small year-round planning team backed by a much larger roster of day-of coordinators and assistants who only show up on booked weekends.' },
                { title: 'Corporate and conference event staffing firms', body: 'Registration, AV, and hospitality crews that scale up for a conference calendar and scale back down between bookings, often across multiple client sites and states.' },
                { title: 'Festival and concert production companies', body: 'Short, intense builds where headcount can multiply for a single weekend, then drop to a skeleton crew until the next show.' },
                { title: 'Catering companies with event divisions', body: 'A core kitchen and office staff plus a rotating bench of event-day servers and bartenders whose hours swing with the booking calendar.' },
                { title: 'Trade show and exhibition staffing agencies', body: 'Crews that travel from city to city on a show circuit, working under different state rules from one event to the next.' },
                { title: 'Seasonal holiday event and pop-up operators', body: 'Businesses that exist in a concentrated burst each year, hiring fast for the season and offboarding an entire workforce at once when it ends.' },
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
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds seasonal and variable-hour tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Seasonal payroll the bigger fire? BEG&apos;s core service is <Link href="/services/managed-payroll/events">managed payroll for events</Link>, and hiring surges and leave live in <Link href="/services/hr-outsourcing/events">events HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Events benefits administration, answered</h2>
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
