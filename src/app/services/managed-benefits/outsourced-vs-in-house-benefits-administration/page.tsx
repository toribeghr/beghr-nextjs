import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'Outsourced vs In-House Benefits Admin: The Real Math | BEG',
  description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration' },
  openGraph: {
    title: 'Outsourced vs In-House Benefits Admin: The Real Math | BEG',
    description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.',
    url: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Outsourced vs In-House Benefits Admin: The Real Math | BEG', description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-outsourced-vs-in-house');

const FAQS: [string, string][] = [
  [
    'What does outsourcing benefits administration mean?',
    'A service provider runs the operations behind your benefit plans: setup, open enrollment, life events, eligibility data, carrier updates, and compliance filings. Your plans, broker, and employer status stay exactly as they are.',
  ],
  [
    'What does in-house benefits administration really cost?',
    'The visible cost is a salary; per BLS, compensation and benefits specialists average well into five figures loaded, before software and overhead. Most companies under a few hundred employees never budget a fully loaded $60,000 to $100,000 hire for this and instead absorb it into an HR generalist role, which hides the real number. The hidden cost sits on top of that: error exposure, penalty risk, and everything that person is not doing instead.',
  ],
  [
    'How much does a missed COBRA or ACA deadline actually cost?',
    'Under federal COBRA, ERISA allows penalties of up to $110 per day per beneficiary for notice failures, and the IRS can assess a separate excise tax for COBRA violations. ACA reporting failures carry per-form IRS penalties for late or incorrect 1095-C filings, which scale with headcount. None of this shows up on a budget line until the notice arrives.',
  ],
  [
    'When does keeping benefits administration in-house make sense?',
    'When you have enough benefits-eligible headcount to keep a specialist genuinely busy, real HRIS tooling instead of spreadsheets, stable headcount with low plan-change volume, and coverage for the person who owns COBRA deadlines when they take vacation. Low-change, single-state, stable-headcount companies are the profile where in-house holds up best.',
  ],
  [
    'What happens to benefits administration when that person quits or takes leave?',
    'In most in-house setups, nothing is documented outside one person\'s head and inbox. When they leave or take PTO, deadlines still land, carrier files still need reconciling, and open enrollment does not pause. Turnover in this role is one of the least discussed costs of the in-house model because it never appears until the week it happens.',
  ],
  [
    'Is outsourcing benefits administration the same as buying software?',
    'No. Software gives your team better tools and keeps the work on your desk. An administration service takes the work itself. Many companies buy software believing they bought the service.',
  ],
  [
    'How do I decide by headcount and how fast we are changing?',
    'Roughly: under 100 employees with stable headcount and one state, in-house can work if the role is real and covered. Growing headcount, multi-state operations, high turnover, or frequent M&A activity push the math toward outsourcing, because each of those multiplies the work a single in-house owner has to track without multiplying their hours.',
  ],
  [
    'Can we outsource benefits administration and keep our broker?',
    'Yes, and you should. The broker advises on plan design and placement; the administration service runs operations behind those plans. BEG Managed Benefits is built to work alongside your broker, not around them.',
  ],
];

export default function OutsourcedVsInHouseBenefitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Outsourced vs in-house benefits administration: the real math',
            description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration',
          }),
        }}
      />
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
              { '@type': 'ListItem', position: 3, name: 'Outsourced vs In-House', item: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title={'Outsourced vs in-house benefits administration: the real math'}
        description="In-house benefits administration costs a salary you can see and an error exposure you cannot. Outsourcing costs a monthly fee you can see on screen in 90 seconds. Here is the honest comparison."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>In-house vs outsourced, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In-House</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Outsourced Administration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cost shape', 'A salary plus benefits plus tools, whether busy or not', 'Per-employee monthly fee that scales with headcount'],
                    ['Depth of bench', 'One person; vacation and turnover are single points of failure', 'A team; deadlines do not depend on one calendar'],
                    ['Open enrollment', 'A month of nights for whoever owns it', 'Run as a process, with self-service and guidance for employees'],
                    ['ACA and COBRA deadlines', 'Tracked in whatever system that person built', 'Tracked systematically; forms produced as a plan feature'],
                    ['Data quality', 'Spreadsheets reconciled by hand against carrier bills', 'One system of record, synced with payroll'],
                    ['Scaling to a new state or acquisition', 'Research project for one person', 'Already in scope, all 50 states'],
                    ['Institutional knowledge', 'Walks out the door with the hire', 'Documented in the system and the service'],
                    ['Leaving', 'Severance, rehire, retrain', 'Stop the service; your plans never moved'],
                  ].map(([factor, inh, out], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{inh}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{out}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.bls.gov/oes/current/oes131141.htm" target="_blank" rel="noopener noreferrer">BLS OES, compensation, benefits, and job analysis specialists</a> · <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>
            </p>
          </div>
        </section>

        {/* COST COMPARISON TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Numbers</p>
              <h2>What each model costs, line by line</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Most comparisons stop at &quot;a salary vs a fee.&quot; Here is what actually sits inside each number for a company with roughly 150 benefits-eligible employees.
              </p>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '190px' }}>Cost Line</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In-House Hire</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Outsourced Administration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Base cost', 'Loaded salary of $60,000 to $100,000 for a dedicated benefits admin specialist (BLS OES puts the role well into five figures before loading)', 'Per-employee-per-month fee, billed monthly, scales directly with headcount'],
                    ['Software and tools', 'HRIS or benefits admin software license, typically separate from the salary line', 'Included in the service; one system of record'],
                    ['Backup during PTO or leave', 'Usually none; deadlines wait on one person or get missed', 'Team coverage; no single point of failure'],
                    ['Ramp time for a new hire', '2 to 4 months to reach full competence on carrier rules and your specific plans', 'None; the service is already trained on your plans'],
                    ['Error and rework cost', 'Hard to quantify but shows up as carrier bill disputes, employee escalations, and manual reconciliation hours', 'Built into the service; caught before it becomes a claim or penalty'],
                    ['Compliance risk exposure', 'COBRA penalty exposure up to $110/day per beneficiary; ACA per-form penalties; both uncapped by headcount', 'Deadlines tracked systematically as a plan feature, not a personal task list'],
                    ['Turnover cost', 'Severance, recruiting, and a knowledge gap that is rarely documented anywhere else', 'Not applicable; institutional knowledge lives in the system, not one inbox'],
                  ].map(([factor, inh, out], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{inh}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{out}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.bls.gov/oes/current/oes131141.htm" target="_blank" rel="noopener noreferrer">BLS OES, compensation, benefits, and job analysis specialists</a> · <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a> · <a href="https://www.irs.gov/affordable-care-act/employers/aca-information-center-for-applicable-large-employers-ales" target="_blank" rel="noopener noreferrer">IRS, ACA information reporting penalties</a>
            </p>
          </div>
        </section>

        {/* HIDDEN COSTS OF IN-HOUSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Does Not Show Up On The Org Chart</p>
              <h2>The hidden costs of keeping it in-house</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'Turnover and knowledge loss',
                  body: 'When the person who owns benefits administration leaves, the process usually leaves with them. Carrier quirks, plan-year exceptions, and the informal workarounds built up over years rarely make it into a written procedure before the exit interview.',
                },
                {
                  title: 'Missed COBRA or ACA deadlines',
                  body: 'A dedicated specialist stretched across five other duties is the profile most likely to miss a notice window. COBRA exposure runs up to $110 per day per beneficiary under ERISA; ACA reporting penalties apply per form under IRS rules.',
                },
                {
                  title: 'No backup during PTO',
                  body: 'Open enrollment, new hires, and life events do not pause because the one person who understands your plans is on vacation or out sick. Deadlines either wait, or someone unfamiliar with the process handles them under pressure.',
                },
                {
                  title: 'Data drift between systems',
                  body: 'Spreadsheets reconciled by hand against carrier invoices drift over time. Each drift becomes a billing dispute, a coverage gap, or an employee who finds out at the doctor\'s office that their dependent was never added.',
                },
                {
                  title: 'Opportunity cost',
                  body: 'Every hour spent on enrollment paperwork and carrier chasing is an hour not spent on the strategic HR work that person was probably hired to do. The fractional version of this role is the most expensive, because the company pays full salary for partial output.',
                },
                {
                  title: 'Scaling friction',
                  body: 'A new state, an acquisition, or a headcount jump that outpaces hiring all land on the same one or two people. Each becomes a research project instead of a solved problem.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION FRAMEWORK */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Decision Framework</p>
              <h2>Decide by headcount and change-volume, not gut feel</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                The single biggest predictor of whether in-house or outsourced wins is not company size alone. It is size crossed with how much your plans and headcount change in a given year.
              </p>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Headcount</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Stable, low change-volume</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Growth, multi-state, or high turnover</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Under 100 employees', 'In-house can work if one person owns it with real bandwidth and a backup for PTO. Otherwise outsource the whole function.', 'Outsource. There is rarely enough dedicated headcount to justify a specialist, and change-volume will overwhelm a generalist fast.'],
                    ['100 to 500 employees', 'In-house with an HRIS is viable; the role is real enough to justify a dedicated hire and a documented process.', 'Outsource or hybrid. Multi-state rules and turnover-driven enrollment churn are exactly what a fractional in-house owner cannot keep up with.'],
                    ['500+ employees', 'In-house with a small team usually wins on day-to-day speed and institutional knowledge.', 'Hybrid: keep an in-house owner for strategy and escalations, outsource high-volume production work like ACA filing and COBRA administration.'],
                  ].map(([hc, low, high], i) => (
                    <tr key={hc} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{hc}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{low}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHEN IN-HOUSE WINS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Honest Case</p>
              <h2>When in-house genuinely wins</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                It is easy for a page like this to tilt toward outsourcing because that is the service being sold at the bottom of it. The honest answer is that in-house wins in a specific, identifiable set of conditions, and pretending otherwise does not help anyone make a good decision. In-house is the better model when the benefits-eligible headcount is large enough to keep a specialist genuinely busy on this work alone, when the company runs a real HRIS instead of spreadsheets, when headcount and plan design are stable year over year, and when a second trained person can cover COBRA and enrollment deadlines during vacations or departures. Under those conditions, an internal owner is faster on same-day requests, carries more institutional context about your specific plans and employees, and costs less over a multi-year horizon than a per-employee monthly fee once the specialist is fully ramped. The model breaks down when any one of those conditions is missing, most commonly when the role is fractional, spreadsheets stand in for real systems, or the company is changing faster than one person can track. The honest test is not company size; it is whether the role, as staffed today, would survive an audit of its own deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Math</p>
              <h2>What each model actually costs</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The in-house cost you can see, and the one you cannot</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The visible cost of in-house benefits administration is a salary: <a href="https://www.bls.gov/oes/current/oes131141.htm" target="_blank" rel="noopener noreferrer">BLS wage data for compensation and benefits specialists</a> puts the dedicated version of this role well into five figures before benefits and overhead, and in most companies under a few hundred employees the work lands on an HR generalist or office manager who was hired for something else. The invisible cost is exposure. A missed COBRA notice accrues penalties per day per beneficiary under <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">federal COBRA rules</a>, ACA forms carry per-form penalties, and an enrollment error surfaces months later as a carrier bill dispute or an employee without the coverage they elected. None of that appears on a budget line until the year it does.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The honest case for keeping it in-house</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In-house wins when the role is real. If your benefits-eligible headcount is large enough to keep a specialist genuinely occupied, if you run an HRIS instead of spreadsheets, and if a second person can cover deadlines during vacations and departures, an internal owner gives you speed and institutional intimacy no vendor matches. The failure mode is not the dedicated specialist; it is the fractional version, where benefits administration is one-fifth of someone&apos;s job, done in the gaps, with every deadline resting on one memory. If that sentence describes your company, the question is not whether the work moves, only whether it moves before or after the first penalty letter.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software is not the same decision as service</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plenty of companies believe they outsourced benefits administration when they actually bought benefits administration software. The software moves the work into a better tool; your team still does the work. That is a fine choice, and it is the entry tier of <Link href="/services/managed-benefits">BEG Managed Benefits</Link> for teams that want self-service enrollment with payroll sync. A managed service is a different purchase: a dedicated specialist runs enrollment, changes, and carrier updates, and an auditing analyst checks the data behind them. Price both before assuming which one you need; the estimate form shows all three tiers side by side for your headcount.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The broker stays either way</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Neither choice on this page touches your broker relationship. Brokers advise on plan design, negotiate renewals, and place coverage; almost none are staffed to run your enrollment data, chase carrier updates, or produce ACA forms, and the good ones say so out loud. Outsourced administration takes exactly the work brokers do not want, which is why the arrangement tends to make the broker relationship better, not worse. If a benefits vendor requires displacing your broker to work with them, you are not looking at an administration service; you are looking at a <Link href="/services/managed-benefits/tpa-vs-peo">different model entirely</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH SHOULD YOU CHOOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Which Should You Choose</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'Benefits admin is one-fifth of someone’s job',
                  body: 'Outsource it. The fractional model is where deadlines slip and penalties live. The person gets their week back, and the deadlines get a team.',
                },
                {
                  title: 'You have a real benefits specialist who is drowning seasonally',
                  body: 'Consider the software tier plus enrollment support at open enrollment, keeping your specialist as the owner. Not every outsourcing decision is all or nothing.',
                },
                {
                  title: 'You are past a few hundred employees with a benefits team',
                  body: 'In-house probably wins on the day-to-day. The gaps worth outsourcing are audits, ACA production at scale, and COBRA volume, priced as add-ons, not a takeover.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>Outsourced administration with the price on screen</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, is the outsourced column of this page as a service: three tiers from self-service software to a fully managed dedicated team, your broker intact, all 50 states. The category quotes this work behind demos; BEG shows your monthly estimate on screen in about 90 seconds, then confirms exact pricing on one 15-minute call. Full plan detail lives on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Outsourcing benefits administration, answered</h2>
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
