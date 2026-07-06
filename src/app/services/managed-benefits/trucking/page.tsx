import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Trucking Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for trucking: multi-state drivers, owner-operator vs W-2 lines, ACA tracking handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/trucking' },
  openGraph: {
    title: 'Trucking Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for trucking: multi-state drivers, owner-operator vs W-2 lines, ACA tracking handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/trucking',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Trucking Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for trucking: multi-state drivers, owner-operator vs W-2 lines, ACA tracking handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-trucking');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a trucking company?',
    'Plan setup, online enrollment drivers complete from the road, ACA eligibility tracking for W-2 drivers, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support when drivers leave, all handled nationally.',
  ],
  [
    'Do owner-operators count toward our ACA obligations?',
    'Properly classified owner-operators are independent contractors and do not count toward applicable-large-employer status or offers of coverage. Company drivers on your W-2 do. The administrative risk is keeping the two rosters cleanly separated, because misclassification flips the math.',
  ],
  [
    'How do drivers enroll when they are never at the terminal?',
    'Enrollment is online and self-service. A driver compares plans, gets AI-guided recommendations, and enrolls from a phone at a truck stop. Life events and coverage changes run the same way, without paperwork waiting in a terminal mailbox.',
  ],
  [
    'Does multi-state driving complicate benefits administration?',
    'Less than people fear. ACA is federal, so eligibility rules follow the employer, not the state line. What multi-state operations do create is scattered employees who need remote enrollment and notices that reliably reach home addresses, which is an administration problem the system is built for.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for trucking companies?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your company stays the employer.',
  ],
  [
    'What does benefits administration cost for a trucking company?',
    'A monthly per-employee cost, well under the $60,000 to $100,000 a year an in-house benefits hire typically costs loaded. Answer five questions in the estimate form and a monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What happens if COBRA notices get missed for high driver turnover?',
    'The exposure is real at fleet turnover volume. Continuation coverage commonly runs at least $110 a day once elected, and the IRS can separately assess excise tax penalties for notice failures. Tracking every driver departure against the federal notice deadline, no matter which terminal they worked out of, is what keeps that from compounding.',
  ],
  [
    'How do we keep owner-operator and W-2 driver rosters from getting mixed together?',
    'The two rosters have to stay administratively separate because they answer different questions: who counts toward applicable large employer status, and who is offered coverage. Running benefits administration in one system with owner-operators excluded by design keeps ACA filings reflecting your actual W-2 population instead of a blended file that invites a misclassification question.',
  ],
];

export default function ManagedBenefitsTruckingPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Trucking', item: 'https://www.beghr.com/services/managed-benefits/trucking' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Trucking"
        title="Your drivers cross state lines daily. Their benefits paperwork should not care."
        description="A trucking company administers benefits for people who are never in the building: W-2 drivers scattered across terminals and time zones, owner-operators who must stay off the benefits roster entirely, and enrollment that has to work from a cab. BEG Managed Benefits, powered by isolved, runs the administration nationally while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'W-2 drivers', label: 'Tracked for ACA; owner-operators kept clear' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trucking Benefits Problem</p>
              <h2>Two million drivers, two classification lines, and zero of them at a desk.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '2M+',
                  label: 'Heavy and tractor-trailer truck driver jobs nationwide per BLS',
                  sub: 'BLS counts over two million heavy and tractor-trailer truck driver jobs in the United States. Fleets compete for the same drivers, and a benefits package that actually gets enrolled in is part of the recruiting pitch.',
                },
                {
                  stat: 'W-2 vs 1099',
                  label: 'The class line that decides who counts for ACA',
                  sub: 'Company drivers count toward applicable-large-employer status and offers of coverage under IRS common-law employee rules. Properly classified owner-operators do not. Blur that line in your records and your ACA filings inherit the blur.',
                },
                {
                  stat: 'Multi-state',
                  label: 'Home terminals and driver addresses spread across the map',
                  sub: 'ACA is federal, but enrollment materials, required notices, and COBRA elections still have to reach drivers reliably wherever they live, on deadlines that do not pause for a long haul.',
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
              Sources: <a href="https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Outlook, heavy and tractor-trailer truck drivers</a> and <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Trucking benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that works from a truck stop</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Open enrollment by terminal bulletin board reaches whoever happens to be home that week. The Benefits Admin Software plan puts plan comparison and enrollment on the driver&apos;s phone: research options, get AI-guided recommendations that balance cost and coverage, and enroll from the sleeper berth. Life events run through self-service workflows, and deductions sync to payroll so a plan change made in Ohio shows up correctly on a paycheck settled in Texas.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA tracking for the W-2 fleet, clean separation for owner-operators</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan tracks eligibility across your company drivers, including part-time and casual drivers whose hours vary by season and freight cycle, and produces Forms 1094-C and 1095-C for you at filing time. Just as important is who stays out of the data: owner-operators live outside the benefits roster entirely, so your filings reflect your actual employee population instead of a mixed file that invites classification questions.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>COBRA notices that reach drivers wherever home is</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Driver turnover is a fact of freight, and every covered departure opens federal notice deadlines. Terminations trigger the required election notices, windows are tracked, and coverage end dates flow to carriers without a terminal manager keeping a spreadsheet. With drivers domiciled across many states, getting notices out correctly and on time is exactly the kind of repetitive deadline work that belongs in a managed process.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team so dispatch stays dispatch</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes driver adds and departures, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors fleet churn creates: departed drivers still on the invoice, elections that never reached the carrier, dependent records past eligibility. In an industry recruiting against everyone else&apos;s sign-on bonus, benefits that actually work are retention equipment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment on every driver&apos;s phone. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Multi-state withholding and settlements the bigger fire? That is <Link href="/services/managed-payroll/trucking">managed payroll for trucking</Link>; for driver classification policies and handbooks, see <Link href="/services/hr-outsourcing/trucking">trucking HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where Trucking Benefits Admin Breaks</p>
              <h2>Driver turnover, DOT churn, and multi-state rosters create failure points a terminal office never sees</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Pain point</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Why a driver fleet creates it</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>What handles it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Drivers never enroll', 'Open enrollment by terminal bulletin board only reaches whoever happens to be home that week.', 'Online self-service enrollment a driver completes from a phone at any truck stop.'],
                    ['Owner-operators bleed into ACA filings', 'Dispatch and payroll data often mix W-2 drivers and contracted owner-operators in the same roster view.', 'Owner-operators excluded from the benefits roster by design, keeping filings tied to actual employees.'],
                    ['High turnover outruns COBRA deadlines', 'DOT-driven churn and constant recruiting mean covered departures happen weekly, not occasionally.', 'Every termination tracked against federal notice deadlines, with elections and coverage end dates sent to carriers.'],
                    ['Notices never reach drivers', 'Drivers are domiciled across many states and rarely see paperwork routed through a home terminal.', 'Notices and enrollment materials sent to reliably reach drivers wherever they actually live.'],
                    ['1094-C and 1095-C rebuilt from scratch', 'Fleet churn and seasonal freight cycles make year-end reconstruction from separate systems slow.', 'Forms produced from the same hours and eligibility data tracked on W-2 drivers all year.'],
                  ].map(([pain, why, fix]) => (
                    <tr key={pain} style={{ borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{pain}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#555555' }}>{why}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#555555' }}>{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SCENARIO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Common Scenario</p>
              <h2>The fleet that blended two rosters and inherited a filing problem</h2>
            </div>
            <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem', marginTop: '2rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A regional carrier runs 60 W-2 company drivers and leases on 25 owner-operators. Payroll and benefits data live in the same spreadsheet because it is simpler to manage one file, and the owner-operators get pulled into the ACA eligibility count by mistake during a system migration. The fleet nearly offers coverage to contractors who should never have been on the benefits roster, and separately understates its true W-2 headcount for the year. With owner-operators excluded from the benefits system by design and W-2 driver hours tracked independently, the same fleet files 1094-C and 1095-C forms that reflect its actual employee population, with no reclassification scramble before the deadline.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Trucking benefits administration, answered</h2>
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
