import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Security Company Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for security companies: 24/7 guard rosters tracked for ACA, enrollment and COBRA at turnover volume. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/security' },
  openGraph: {
    title: 'Security Company Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for security companies: 24/7 guard rosters tracked for ACA, enrollment and COBRA at turnover volume. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/security',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Security Company Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for security companies: 24/7 guard rosters tracked for ACA, enrollment and COBRA at turnover volume. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-security');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a security company?',
    'Plan setup, online enrollment guards can complete from any post, ACA eligibility tracking across variable schedules and multiple sites, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support at guard-industry turnover volume.',
  ],
  [
    'How does ACA eligibility work when guard hours change with contracts?',
    'IRS rules allow a lookback measurement method: hours are averaged over a defined period, and guards averaging 30 or more per week must be offered coverage for the following stability period. The system tracks it continuously, so a guard picking up extra posts is flagged before filing season, not after.',
  ],
  [
    'Can guards enroll without coming to the office?',
    'Yes. Enrollment is online and self-service, so a guard on an overnight post compares plans and enrolls from a phone. Life events and coverage changes run the same way, without paperwork routed through a branch office.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for security companies?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your company stays the employer.',
  ],
  [
    'What does security company benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire, which typically runs $60,000 to $100,000 a year loaded. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What happens if a departed guard is missed for COBRA?',
    'A missed or late election notice carries real cost. Continuation coverage itself commonly runs at least $110 a day once elected, and separately the IRS can assess excise tax penalties for notice failures on top of that. At guard-industry turnover volume, tracking every departure against the federal notice deadline is what prevents that from becoming a pattern instead of a one-off.',
  ],
  [
    'How do we handle benefits when guards are assigned across multiple branches or franchises?',
    'Eligibility and enrollment data has to reconcile at the company level even when scheduling happens branch by branch. One system tracking hours and eligibility across every site keeps a guard who splits time between two contracts from falling through a gap between two branch offices that each assume the other has it covered.',
  ],
  [
    'Do part-time guards ever need a coverage offer?',
    'Only if their averaged hours cross the ACA full-time threshold under the lookback measurement method, generally 30 hours a week. A guard hired as part-time who picks up extra shifts to cover a colleague, or wins hours from a new contract, can cross that line mid-year without anyone flagging it by hand.',
  ],
];

export default function ManagedBenefitsSecurityPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Security Companies', item: 'https://www.beghr.com/services/managed-benefits/security' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Security Companies"
        title="Your guards cover every post, every hour. Somebody has to cover their eligibility."
        description="A security company runs 24/7 rosters across client sites, with guard hours that swell when a contract lands and shrink when it ends. That is variable-hour ACA tracking, turnover-driven COBRA volume, and enrollment for people who never visit the office. BEG Managed Benefits, powered by isolved, handles the administration while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '24/7', label: 'Post coverage tracked for ACA' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Security Benefits Problem</p>
              <h2>A million-guard industry built on the schedules ACA tracking hates most.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '1M+',
                  label: 'Security guards employed nationwide per BLS',
                  sub: 'BLS counts over a million security guard jobs in the United States, most of them hourly and shift-based. It is a high-churn, contract-driven workforce, and every roster change is a benefits data event somewhere.',
                },
                {
                  stat: '30 hrs/wk',
                  label: 'The ACA full-time line contract changes push guards across',
                  sub: 'A new client site means doubled hours for half the roster; a lost contract means the reverse. Under IRS rules, averaged hours decide who must be offered coverage, so contract swings are eligibility swings.',
                },
                {
                  stat: 'Every exit',
                  label: 'Departures that can open a continuation notice deadline',
                  sub: 'Guard turnover runs high, and each covered departure triggers notice obligations on federal timelines. Tracked by hand across branches, that is how notices get missed and penalties accrue.',
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
              Sources: <a href="https://www.bls.gov/ooh/protective-service/security-guards.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Outlook, security guards</a> and <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Security benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment for a workforce posted everywhere but headquarters</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Guards work at client sites, not your office, and open enrollment by paper packet dies somewhere between the branch and the post. The Benefits Admin Software plan puts plan comparison and enrollment on the phone: guards research options, get AI-guided recommendations, and enroll from any post on any shift. Deductions sync to payroll so a mid-year plan change never becomes a paycheck dispute relayed through a site supervisor.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA measurement that follows contract swings</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security hours are contract-driven: win a hospital account and forty guards jump to full-time; lose a warehouse account and they drop back. The Software + ACA Compliance plan runs lookback measurement continuously, averaging hours across every post and site, so offers of coverage go out when IRS rules require them and Forms 1094-C and 1095-C are produced for you from hours tracked all year. No branch spreadsheet reconstruction in January, no surprise at filing time.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>COBRA handled at guard-turnover volume</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>High churn means continuation events arrive constantly. Terminations trigger the required election notices, windows and elections are tracked, and coverage end dates flow to carriers without an office manager owning a deadline calendar across branches. State continuation rules are scoped exactly on your discovery call so the process matches where you actually operate.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team behind your operations staff</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes adds and drops as rosters change, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors churn creates: departed guards still on the invoice, elections that never reached the carrier, dependent records past eligibility. Your operations team schedules posts; the benefits team handles benefits.</p>
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
                Benefits Admin Software puts enrollment online for every post. Software + ACA Compliance adds variable-hour tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Overtime and multi-site pay runs the bigger fire? That is <Link href="/services/managed-payroll/security">managed payroll for security companies</Link>; for licensing policies and guard handbooks, see <Link href="/services/hr-outsourcing/security">security company HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where Security Company Benefits Admin Breaks</p>
              <h2>24/7 posts, contract swings, and high turnover create failure points a fixed office never sees</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Pain point</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Why a guard roster creates it</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>What handles it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Guards never enroll', 'Posts run 24/7 across client sites, so a branch-office enrollment event never reaches an overnight shift.', 'Online self-service enrollment a guard completes from any post, any shift.'],
                    ['Contract wins and losses swing eligibility', 'Winning a new site can double a group of guards hours overnight; losing one halves them.', 'Continuous lookback measurement that catches averaged hours crossing the 30-hour line either direction.'],
                    ['COBRA notices missed at high turnover', 'Guard turnover runs well above average, and every covered exit opens a federal notice deadline.', 'Every termination tracked against notice deadlines, with elections and coverage end dates flowing to carriers.'],
                    ['Multi-branch data never reconciles', 'Scheduling happens branch by branch, but eligibility has to be counted at the company level.', 'One system tracking hours and eligibility across every branch and site.'],
                    ['Departed guards stay on the carrier invoice', 'A termination logged at the branch does not always reach the carrier feed on the same day.', 'Carrier records audited against active roster data by a Benefits Auditing Analyst.'],
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
              <h2>The contract win that quietly created a coverage obligation</h2>
            </div>
            <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem', marginTop: '2rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A regional security company wins a hospital contract that requires round-the-clock coverage. Forty guards who were averaging 22 hours a week across two smaller sites suddenly pick up enough extra shifts to average 32 hours over the following measurement period. Nobody flags it, because the contract win looks like good news, not a benefits event. Six months later, an ACA penalty notice arrives for failing to offer coverage to newly full-time guards. With lookback measurement running continuously across every site, the same company sees the averaged-hours shift the month it happens and has the measurement period to plan a coverage offer instead of a penalty letter to answer.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Security company benefits administration, answered</h2>
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
