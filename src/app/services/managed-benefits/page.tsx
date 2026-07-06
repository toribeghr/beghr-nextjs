import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import InlineSearch from '@/components/InlineSearch';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Benefits | Instant Estimate, Powered by isolved | BEG',
  description: 'BEG Managed Benefits, powered by isolved: enrollment, ACA and benefits admin off your desk. You keep your broker. Get your instant estimate.',
  alternates: {
    canonical: 'https://www.beghr.com/services/managed-benefits',
  },
  openGraph: {
    title: 'Managed Benefits | Instant Estimate, Powered by isolved | BEG',
    description: 'BEG Managed Benefits, powered by isolved: enrollment, ACA and benefits admin off your desk. You keep your broker. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Benefits | Instant Estimate, Powered by isolved | BEG', description: 'BEG Managed Benefits, powered by isolved: enrollment, ACA and benefits admin off your desk. You keep your broker. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits');

const FAQS: [string, string][] = [
  [
    'What is benefits administration?',
    'Benefits administration is the operational work behind employee benefits: plan setup, open enrollment, life-event changes, carrier updates, eligibility tracking, and compliance filings like ACA forms, handled in one system instead of spreadsheets.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, data, changes, and compliance. Brokers usually welcome it.',
  ],
  [
    'What does benefits administration cost?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'Is this a PEO?',
    'No. A PEO takes over as employer of record through co-employment and replaces your benefits plans with theirs. BEG Managed Benefits administers the plans you already chose while you stay the employer.',
  ],
  [
    'What does the Fully Managed plan include?',
    'A dedicated Managed Benefits Specialist runs enrollment, changes, and carrier updates for you, and a Benefits Auditing Analyst checks your data for errors. Open enrollment is handled start to finish.',
  ],
  [
    'Can you handle ACA reporting?',
    'Yes. The Software + ACA Compliance plan tracks eligibility across your workforce, including variable-hour employees, and produces Forms 1094-C and 1095-C so filing deadlines stop being a fire drill.',
  ],
  [
    'What about COBRA?',
    'COBRA and state continuation support is available and scoped exactly on your discovery call, so notices, elections, and payment tracking follow the rules that apply to your company and states.',
  ],
];

export default function ManagedBenefitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
      <ServicePage
        heroVideoId="Zf-CDxr2q68"
        showHeroImage={false}
        eyebrow="Managed Benefits · Powered by isolved"
        title="Benefits administration is a full-time job. It should not be yours."
        description="Open enrollment chaos, ACA forms, COBRA notices, carrier updates: BEG Managed Benefits, powered by isolved, takes the administration off your desk while your broker keeps doing what brokers do. Delivered remotely, all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '3 Plans', label: 'From self-service software to fully managed' },
        ]}
      >
        {/* SITE SEARCH: vertical-scoped band beneath the hero */}
        <InlineSearch
          vertical="Managed Benefits"
          heading="Looking for something specific?"
          subhead="Search our Managed Benefits pages and guides."
          chips={['benefits admin', 'by industry', 'pricing', 'COBRA']}
        />

        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Benefits Admin Actually Costs You</p>
              <h2>Benefits work hides until enrollment season or a penalty letter finds it.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '1 in 2',
                  label: 'Employees would consider leaving after a bad open enrollment',
                  sub: 'Per isolved research, half of employees say a poor open enrollment experience would make them consider leaving. The enrollment experience is a retention lever, not paperwork.',
                },
                {
                  stat: 'Up to $110/day',
                  label: 'Per beneficiary exposure for COBRA notice failures',
                  sub: 'Miss a required COBRA notice and federal law allows penalties that accrue per day, per beneficiary, on top of lawsuits from the person who never got the notice. Nobody tracks this in a spreadsheet well.',
                },
                {
                  stat: '2 weeks to days',
                  label: 'What a benefits audit takes with clean, centralized data',
                  sub: 'One isolved client, a 350-employee publisher, cut benefit audit data pulls from two weeks to a few days after consolidating administration in one system. Clean data is the whole game.',
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
              Sources:{' '}
              <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a>
              {' '}and{' '}
              <a href="https://www.isolvedhcm.com/benefits" target="_blank" rel="noopener noreferrer sponsored">isolved benefits research and client results</a>.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From enrollment chaos to benefits handled in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'Get your instant estimate',
                  body: 'Answer five questions about your team, your carriers, and what you want handled. Your monthly estimate appears on screen and lands in your inbox. No demo gate, no sales call required to see a number.',
                },
                {
                  num: '02',
                  title: 'Scope it on a 15-minute call',
                  body: 'We review your answers, confirm the right plan, loop in what your broker already covers, and turn your estimate into exact pricing. Setup works back from your next open enrollment date.',
                },
                {
                  num: '03',
                  title: 'The administration moves off your desk',
                  body: 'Plans set up, employees enrolling themselves with AI guidance, deductions syncing to payroll, ACA forms produced. On the top plan, a dedicated specialist and auditing analyst run it all for you.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE PLANS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Three Plans</p>
              <h2>Pick how much benefits work you want to stop doing.</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Every plan includes everything below it. The estimate form shows your monthly range for all three; exact pricing is confirmed on your call.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Benefits Admin Software',
                  tag: 'Enrollment, self-served',
                  items: [
                    'Benefit plans set up and managed in one system',
                    'Employees research, compare, and enroll themselves online',
                    'AI-guided plan recommendations balance cost and coverage',
                    'Life events and changes handled with self-service workflows',
                    'Deductions sync with payroll',
                    'Real-time reporting and cost analysis built in',
                  ],
                },
                {
                  heading: 'Software + ACA Compliance',
                  tag: 'Enrollment plus ACA handled',
                  items: [
                    'Everything in Benefits Admin Software',
                    'ACA compliance tracking across your workforce',
                    'Forms 1094-C and 1095-C produced for you',
                    'Variable-hour employee tracking for ACA eligibility',
                    'Deadlines watched so filing season stops being a fire drill',
                  ],
                },
                {
                  heading: 'Fully Managed',
                  tag: 'A dedicated team runs it',
                  items: [
                    'Everything in Software + ACA Compliance',
                    'Dedicated Managed Benefits Specialist runs enrollment and changes',
                    'Benefits Auditing Analyst checks your data for costly errors',
                    'Open enrollment handled start to finish',
                    'Carrier updates flow without your team chasing them',
                  ],
                },
              ].map(({ heading, tag, items }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.15rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#9a6b1f', fontWeight: 600, margin: '0 0 1rem', paddingBottom: '0.6rem', borderBottom: '2px solid #ECAC60' }}>{tag}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map((item) => (
                      <li key={item} style={{ fontSize: '0.88rem', padding: '0.35rem 0', color: '#444444', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.45' }}>
                        <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
          </div>
        </section>

        {/* THREE BONUSES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Makes This Different</p>
              <h2>Three things most benefits administration providers cannot offer</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  badge: 'Bonus 01',
                  title: 'You keep your broker. We do the administration.',
                  objection: 'Common objection: "Our broker handles benefits, I do not want to blow up that relationship."',
                  body: 'BEG does not sell insurance and does not compete with your broker. Your broker keeps advising you, negotiating renewals, and placing coverage. What moves to us is the operational load behind those plans: enrollment, changes, data, and compliance. Most brokers are glad someone finally owns it.',
                },
                {
                  badge: 'Bonus 02',
                  title: 'An instant estimate. No demo gate.',
                  objection: 'Common objection: "Every benefits administration site makes me sit through a demo just to hear a price."',
                  body: 'The category hides pricing behind sales processes. BEG shows you a real monthly estimate on screen in about 90 seconds, then confirms exact pricing on one 15-minute call. You decide whether the numbers are worth a conversation, not the other way around.',
                },
                {
                  badge: 'Bonus 03',
                  title: 'Not a PEO. Your plans stay your plans.',
                  objection: 'Common objection: "The last benefits pitch wanted to move us onto their master plans through co-employment."',
                  body: 'PEOs bundle benefits administration inside co-employment: they become the employer of record and your people move onto their plans. BEG Managed Benefits administers the plans you and your broker already chose. You stay the employer, the coverage stays yours, and leaving never requires an unwind.',
                },
              ].map(({ badge, title, objection, body }) => (
                <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                  <div>
                    <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                    <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Compares</p>
              <h2>Managed benefits vs. software alone vs. a TPA vs. a PEO</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Benefits</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Ben-Admin Software Alone</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Traditional TPA</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who does the admin work', 'A dedicated team, or software with our backup', 'Your team, in the tool', 'Their back office', 'Their back office'],
                    ['Your broker', 'Stays, we work alongside', 'Stays', 'Sometimes displaced', 'Usually displaced'],
                    ['Your benefit plans', 'Stay yours', 'Stay yours', 'Stay yours', 'Replaced by PEO master plans'],
                    ['Who employs your staff', 'You do', 'You do', 'You do', 'Co-employment: the PEO does'],
                    ['Pricing visibility', 'Instant on-screen estimate', 'Published software rates', 'Quote-gated', 'Quote-gated, percent of payroll'],
                    ['ACA and filings', 'Tracked and produced for you', 'Extra modules, your work', 'Included, scope varies', 'Included'],
                    ['Payroll connection', 'Same platform as BEG managed payroll', 'Integration project', 'File feeds', 'Their payroll only'],
                    ['Leaving', 'Stop the service', 'Export and rebuild', 'Contract unwind', 'Painful co-employment unwind'],
                  ].map(([factor, beg, software, tpa, peo], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{software}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{tpa}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', marginTop: '1.5rem', textAlign: 'center', lineHeight: '1.7' }}>
              Go deeper: <Link href="/services/managed-benefits/tpa-vs-peo">TPA vs PEO</Link> · <Link href="/services/managed-benefits/outsourced-vs-in-house-benefits-administration">outsourced vs in-house benefits administration</Link>
            </p>
          </div>
        </section>

        {/* COMPARE YOUR OPTIONS */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">Compare Your Options</p>
              <h2>Benefits administration, compared without the sales gate</h2>
              <p style={{ marginTop: '0.75rem', color: '#666666', maxWidth: '620px', margin: '0.75rem auto 0', fontSize: '0.97rem', lineHeight: '1.7' }}>
                The category hides behind demos. These break down the models and the named platforms in plain language, then point you at an instant estimate.
              </p>
            </div>
            <div className="cards">
              {([
                ['tpa-vs-peo', 'TPA vs PEO'],
                ['outsourced-vs-in-house-benefits-administration', 'Outsourced vs In-House Benefits Admin'],
                ['what-is-a-third-party-administrator', 'What Is a Third-Party Administrator?'],
                ['cobra-vs-mini-cobra', 'COBRA vs Mini-COBRA'],
                ['irs-226j-letter', 'The IRS 226-J Letter, Explained'],
                ['benefits-administration-software-vs-services', 'Benefits Software vs Services'],
                ['employee-navigator-alternative', 'Employee Navigator Alternative'],
                ['bswift-alternative', 'bswift Alternative'],
                ['businessolver-alternative', 'Businessolver Alternative'],
                ['plansource-alternative', 'PlanSource Alternative'],
                ['tasc-alternative', 'TASC Alternative'],
                ['wex-alternative', 'WEX Alternative'],
                ['employee-navigator-vs-plansource', 'Employee Navigator vs PlanSource'],
                ['bswift-vs-businessolver', 'bswift vs Businessolver'],
                ['gusto-benefits-vs-employee-navigator', 'Gusto Benefits vs Employee Navigator'],
                ['wex-vs-healthequity', 'WEX vs HealthEquity'],
                ['wex-vs-tasc', 'WEX vs TASC'],
              ] as [string, string][]).map(([slug, label]) => (
                <Link key={slug} href={`/services/managed-benefits/${slug}`} className="card-link reveal">
                  <h3 style={{ fontSize: '1rem', margin: 0 }}>{label}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BY INDUSTRY */}
        <section className="section section--soft">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By Industry</p>
              <h2>Benefits administration built for how your industry gets in trouble</h2>
            </div>
            <div className="cards">
              {([
                ['healthcare', 'Healthcare', 'Variable-hour ACA tracking and relentless COBRA volume.'],
                ['multi-unit-restaurant', 'Multi-Unit Restaurants', 'Hourly swings, high turnover, and per-location enrollment.'],
                ['manufacturing', 'Manufacturing', 'Shift workers, plant turnover, and ACA measurement.'],
                ['construction', 'Construction', 'Seasonal crews, fringe benefits, and mobile enrollment.'],
                ['senior-care', 'Senior Care', 'Aide turnover, variable hours, and constant COBRA events.'],
                ['home-health', 'Home Health', 'Field caregivers, variable hours, and eligibility tracking.'],
                ['franchise', 'Franchise', 'One benefits standard across units, no joint-employer risk.'],
                ['staffing-agency', 'Staffing Agencies', 'Assignment churn, ACA look-back, and heavy COBRA volume.'],
                ['education', 'Education', 'Academic-year schedules, adjuncts, and 1095-C filing.'],
                ['technology', 'Technology', 'Fast hiring, equity-heavy comp, and clean enrollment.'],
                ['accounting-cpa', 'Accounting & CPA Firms', 'Busy-season hours, ACA measurement, and clean filings.'],
                ['agriculture', 'Agriculture', 'Seasonal crews and variable-hour ACA eligibility.'],
                ['architecture', 'Architecture', 'Project-cycle staffing and streamlined enrollment.'],
                ['auto-dealership', 'Auto Dealerships', 'Commissioned staff, turnover, and deduction accuracy.'],
                ['brewery', 'Breweries', 'Taproom part-timers, seasonal spikes, and ACA hours.'],
                ['cannabis', 'Cannabis', 'Fast growth, high turnover, and by-the-book enrollment.'],
                ['childcare', 'Childcare', 'Part-time ratios, turnover, and eligibility tracking.'],
                ['church', 'Churches & Faith-Based', 'Mixed staff and volunteers with clean benefits records.'],
                ['engineering', 'Engineering', 'Project benches, cleared staff, and accurate deductions.'],
                ['events', 'Events', 'Seasonal surges, part-time crews, and ACA measurement.'],
                ['executive', 'Executive Teams', 'Group-term life over $50,000 and imputed-income accuracy.'],
                ['finance', 'Finance', 'Licensed staff, turnover, and precise enrollment data.'],
                ['fitness', 'Fitness & Gyms', 'Trainer part-timers, session pay, and ACA hours.'],
                ['government-contractor', 'Government Contractors', 'SCA fringe, ACA filing, and audit-ready records.'],
                ['home-services', 'Home Services', 'Field techs, seasonal swings, and mobile enrollment.'],
                ['insurance-agency', 'Insurance Agencies', 'Producer turnover and clean benefits administration.'],
                ['legal', 'Legal', 'Associate churn and precise enrollment and deductions.'],
                ['marketing-agency', 'Marketing Agencies', 'Contract-to-hire churn and streamlined enrollment.'],
                ['property-management', 'Property Management', 'Multi-site staff, turnover, and one eligibility record.'],
                ['salon-spa', 'Salons & Spas', 'Booth and hourly mix, tips, and ACA hours.'],
                ['security', 'Security', '24/7 guards, high turnover, and variable-hour ACA.'],
                ['trades', 'Trades', 'Seasonal crews, mobile staff, and eligibility tracking.'],
                ['trucking', 'Trucking', 'Driver turnover, DOT churn, and COBRA volume.'],
                ['veterinary', 'Veterinary', 'Clinic turnover, part-timers, and ACA measurement.'],
              ] as [string, string, string][]).map(([slug, label, blurb]) => (
                <Link key={slug} href={`/services/managed-benefits/${slug}`} className="card-link reveal">
                  <span className="tag">{label}</span>
                  <h3>{label}</h3>
                  <p>{blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BY STATE */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By State</p>
              <h2>State continuation (mini-COBRA) rules, one page per state</h2>
              <p style={{ margin: '0.75rem auto 0', maxWidth: '640px', color: '#666666', fontSize: '0.97rem', lineHeight: '1.7' }}>
                Employer-size thresholds and continuation limits vary hard by state, and some states have no mini-COBRA at all. Find yours below.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.4rem 1.25rem', marginTop: '2rem' }}>
              <Link key="alabama" href="/services/managed-benefits/alabama" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Alabama</Link>
              <Link key="alaska" href="/services/managed-benefits/alaska" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Alaska</Link>
              <Link key="arizona" href="/services/managed-benefits/arizona" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Arizona</Link>
              <Link key="arkansas" href="/services/managed-benefits/arkansas" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Arkansas</Link>
              <Link key="california" href="/services/managed-benefits/california" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>California</Link>
              <Link key="colorado" href="/services/managed-benefits/colorado" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Colorado</Link>
              <Link key="connecticut" href="/services/managed-benefits/connecticut" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Connecticut</Link>
              <Link key="delaware" href="/services/managed-benefits/delaware" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Delaware</Link>
              <Link key="florida" href="/services/managed-benefits/florida" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Florida</Link>
              <Link key="georgia" href="/services/managed-benefits/georgia" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Georgia</Link>
              <Link key="hawaii" href="/services/managed-benefits/hawaii" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Hawaii</Link>
              <Link key="idaho" href="/services/managed-benefits/idaho" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Idaho</Link>
              <Link key="illinois" href="/services/managed-benefits/illinois" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Illinois</Link>
              <Link key="indiana" href="/services/managed-benefits/indiana" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Indiana</Link>
              <Link key="iowa" href="/services/managed-benefits/iowa" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Iowa</Link>
              <Link key="kansas" href="/services/managed-benefits/kansas" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Kansas</Link>
              <Link key="kentucky" href="/services/managed-benefits/kentucky" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Kentucky</Link>
              <Link key="louisiana" href="/services/managed-benefits/louisiana" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Louisiana</Link>
              <Link key="maine" href="/services/managed-benefits/maine" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Maine</Link>
              <Link key="maryland" href="/services/managed-benefits/maryland" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Maryland</Link>
              <Link key="massachusetts" href="/services/managed-benefits/massachusetts" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Massachusetts</Link>
              <Link key="michigan" href="/services/managed-benefits/michigan" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Michigan</Link>
              <Link key="minnesota" href="/services/managed-benefits/minnesota" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Minnesota</Link>
              <Link key="mississippi" href="/services/managed-benefits/mississippi" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Mississippi</Link>
              <Link key="missouri" href="/services/managed-benefits/missouri" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Missouri</Link>
              <Link key="montana" href="/services/managed-benefits/montana" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Montana</Link>
              <Link key="nebraska" href="/services/managed-benefits/nebraska" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Nebraska</Link>
              <Link key="nevada" href="/services/managed-benefits/nevada" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Nevada</Link>
              <Link key="new-hampshire" href="/services/managed-benefits/new-hampshire" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>New Hampshire</Link>
              <Link key="new-jersey" href="/services/managed-benefits/new-jersey" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>New Jersey</Link>
              <Link key="new-mexico" href="/services/managed-benefits/new-mexico" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>New Mexico</Link>
              <Link key="new-york" href="/services/managed-benefits/new-york" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>New York</Link>
              <Link key="north-carolina" href="/services/managed-benefits/north-carolina" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>North Carolina</Link>
              <Link key="north-dakota" href="/services/managed-benefits/north-dakota" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>North Dakota</Link>
              <Link key="ohio" href="/services/managed-benefits/ohio" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Ohio</Link>
              <Link key="oklahoma" href="/services/managed-benefits/oklahoma" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Oklahoma</Link>
              <Link key="oregon" href="/services/managed-benefits/oregon" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Oregon</Link>
              <Link key="pennsylvania" href="/services/managed-benefits/pennsylvania" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Pennsylvania</Link>
              <Link key="rhode-island" href="/services/managed-benefits/rhode-island" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Rhode Island</Link>
              <Link key="south-carolina" href="/services/managed-benefits/south-carolina" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>South Carolina</Link>
              <Link key="south-dakota" href="/services/managed-benefits/south-dakota" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>South Dakota</Link>
              <Link key="tennessee" href="/services/managed-benefits/tennessee" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Tennessee</Link>
              <Link key="texas" href="/services/managed-benefits/texas" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Texas</Link>
              <Link key="utah" href="/services/managed-benefits/utah" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Utah</Link>
              <Link key="vermont" href="/services/managed-benefits/vermont" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Vermont</Link>
              <Link key="virginia" href="/services/managed-benefits/virginia" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Virginia</Link>
              <Link key="washington" href="/services/managed-benefits/washington" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Washington</Link>
              <Link key="west-virginia" href="/services/managed-benefits/west-virginia" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>West Virginia</Link>
              <Link key="wisconsin" href="/services/managed-benefits/wisconsin" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Wisconsin</Link>
              <Link key="wyoming" href="/services/managed-benefits/wyoming" style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}>Wyoming</Link>
            </div>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>Benefits handled. BEG handles the rest too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll eating your week?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  BEG&apos;s core service is <Link href="/services/managed-payroll">fully managed payroll</Link>: every cycle, filing, and W-2 handled at $25-$45 per employee per month, in your existing system. Benefits and payroll run on the same data, so deductions stop breaking.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HR problems beyond benefits?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Handbooks, leave administration, compliance alerts, and a dedicated HR pro live in <Link href="/services/hr-outsourcing">HR outsourcing</Link>. Benefits administration handles the plans; HR outsourcing handles the people questions around them.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the platform itself?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  If your team runs benefits internally and needs better software, <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, talent acquisition, and benefits enrollment on one platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration, answered plainly</h2>
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
