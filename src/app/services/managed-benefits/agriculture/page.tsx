import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Administration for Farms | Instant Estimate | BEG',
  description: 'Benefits administration for agriculture: seasonal worker ACA tracking, enrollment, and carrier updates handled. You keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/agriculture' },
  openGraph: {
    title: 'Benefits Administration for Farms | Instant Estimate | BEG',
    description: 'Benefits administration for agriculture: seasonal worker ACA tracking, enrollment, and carrier updates handled. You keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/agriculture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Administration for Farms | Instant Estimate | BEG', description: 'Benefits administration for agriculture: seasonal worker ACA tracking, enrollment, and carrier updates handled. You keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-agriculture');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for an agricultural operation?',
    'Plan setup, enrollment for year-round and eligible seasonal staff, life-event changes, carrier updates, payroll deduction sync, and ACA eligibility tracking with Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'Do seasonal harvest workers count toward the ACA employer mandate?',
    'Hours from seasonal workers count when measuring workforce size, but IRS rules include a seasonal worker exception: an employer whose workforce exceeds 50 full-time equivalents for 120 or fewer days may avoid applicable large employer status. Tracking proves it either way.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, eligibility data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'Is this a PEO for farms?',
    'No. There is no co-employment and no employer-of-record change. Your operation stays the employer and your plans stay your plans. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for an agricultural employer?',
    'A monthly per-employee cost that lands far below one internal admin hire, which typically runs $60,000 to $100,000 a year loaded. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'Do H-2A workers get counted differently for ACA purposes?',
    'H-2A workers are nonimmigrant visa holders performing seasonal or temporary agricultural labor, and they typically fall inside the same seasonal worker treatment as other seasonal hires when the IRS measures full-time equivalents. What matters is the same for any seasonal roster: clean hours records so the exception, if it applies, is documented rather than assumed.',
  ],
  [
    'What happens if a returning seasonal worker was never terminated correctly in our system?',
    'It creates two problems at once: a phantom active employee still showing coverage or eligibility, and a break-in-service question for a worker who actually did return. Benefits administration tied to real hours and real termination dates keeps both from happening, so a rehired picker starts the season on an accurate record instead of an inherited error.',
  ],
  [
    'Can one system handle benefits across our land LLC, operating company, and packing shed?',
    'Yes. Common ownership across related agricultural entities usually has to be counted together for ACA purposes even though each entity runs its own payroll day to day. Administering benefits in one system keeps the combined full-time equivalent count accurate instead of three separate, and separately wrong, entity-level counts.',
  ],
];

export default function ManagedBenefitsAgriculturePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Agriculture', item: 'https://www.beghr.com/services/managed-benefits/agriculture' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Agriculture"
        title="Harvest headcount triples. Your benefits eligibility math has to keep up."
        description="Seasonal crews, H-2A workers, packing-shed shifts that swing with the weather: agriculture is the hardest ACA eligibility problem in the economy, run from a farm office with no benefits staff. BEG Managed Benefits, powered by isolved, tracks it all and handles the administration while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Every season', label: 'Eligibility tracked through the swings' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Agriculture Benefits Problem</p>
              <h2>Seasonal labor makes the ACA rules genuinely hard, not just tedious.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '120 days',
                  label: 'The IRS seasonal worker exception window',
                  sub: 'If your workforce tops 50 full-time equivalents for 120 or fewer days, and the overage is seasonal workers, you may avoid applicable large employer status. Proving it takes hour records you can defend.',
                },
                {
                  stat: '130 hours',
                  label: 'One month at this level makes an employee ACA full-time',
                  sub: 'Harvest weeks push field and packing staff past the line fast. Without measurement-period tracking, you find out who was owed a coverage offer after the penalty letter does.',
                },
                {
                  stat: 'Rehired yearly',
                  label: 'Returning crews reset the eligibility clock, or do not',
                  sub: 'IRS break-in-service rules decide whether a returning worker is a new hire or a continuing employee with prior status. Guessing wrong in either direction costs money.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Agriculture</p>
              <h2>The benefits problems specific to farm operations, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour tracking built for harvest math</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A picker who works 60-hour weeks in September and zero in January is exactly the employee the ACA lookback measurement method was written for. The Software + ACA Compliance plan tracks hours across measurement and stability periods, flags who crossed the full-time line and when a coverage offer is required, and keeps the record that shows who never did. When 1094-C and 1095-C season arrives, the forms come from the same data instead of a year-end reconstruction.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The seasonal worker exception, documented instead of assumed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Many growers assume they are under the applicable large employer line because the year-round crew is small. The IRS counts full-time equivalents month by month, and the seasonal worker exception only holds if the over-50 period stays at 120 days or fewer and the overage is genuinely seasonal labor. Clean hours data turns that from a hope into a defensible position, whichever side of the line your operation lands on.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that works from a truck, in more than one language</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Farm workforces do not sit at desks. Self-service enrollment lets year-round staff and eligible seasonal workers compare plans and enroll from a phone, with AI-guided recommendations that balance cost and coverage, instead of paper forms riding around in a glovebox until the deadline passes.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-entity operations counted the way the IRS counts them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Family agriculture often runs as several entities: the land LLC, the operating company, the packing shed, the trucking arm. Common ownership can pull those entities together for ACA workforce counting, which means eligibility has to be measured across the whole group, not entity by entity. Benefits administration in one system keeps the combined picture straight.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Separations and rehires without the paperwork pileup</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>End-of-season separations trigger benefits events for every enrolled worker: coverage end dates, continuation notices where required, deduction stops that actually stop. On the Fully Managed plan, a dedicated Managed Benefits Specialist processes the wave both directions, season out and season back in, and a Benefits Auditing Analyst checks that carrier records match reality before errors compound.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Agricultural employers with real payrolls and no benefits desk</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Row crop and grain operations', body: 'Lean year-round crews, planting and harvest surges, and multi-entity structures that complicate the ACA count.' },
                { title: 'Orchards and vineyards', body: 'Seasonal picking crews, H-2A labor, and eligibility questions that change with every contract season.' },
                { title: 'Dairies and livestock operations', body: 'Year-round shift work where full-time status is constant and enrollment logistics, not eligibility, is the problem.' },
                { title: 'Packing sheds and processors', body: 'Line staffing that swings with volume, variable-hour rosters, and real ACA reporting obligations.' },
                { title: 'Nurseries and greenhouses', body: 'Spring surges, retail seasons, and part-timers who drift across the 130-hour line without anyone noticing.' },
                { title: 'Custom harvesters and ag services', body: 'Crews that follow the season across state lines, with one benefits program that has to travel with them.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds the variable-hour eligibility tracking and Forms 1094-C and 1095-C that seasonal workforces need. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll for seasonal crews the bigger fight? BEG&apos;s core service is <Link href="/services/managed-payroll/agriculture">managed payroll for agriculture</Link>. People policies and compliance questions? See <Link href="/services/hr-outsourcing/agriculture">HR outsourcing for agriculture</Link>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where Farm Benefits Admin Breaks</p>
              <h2>Seasonal labor and H-2A rosters create failure points a year-round office never sees</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Pain point</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Why harvest labor creates it</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>What handles it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['FTE count assumed to be under 50', 'Year-round crew looks small, but the IRS counts full-time equivalents month by month across the whole seasonal workforce.', 'Monthly FTE tracking that shows the real count before filing season, not after.'],
                    ['Seasonal worker exception claimed without proof', 'The exception only holds if the over-50 period stays at 120 days or fewer and the overage is genuinely seasonal.', 'Hours data that documents the exception instead of assuming it applies.'],
                    ['H-2A and domestic seasonal hours mixed up', 'Visa-status recordkeeping and ACA hour-tracking run on different clocks, and one team rarely owns both.', 'One system tracking measurement-period hours regardless of visa classification.'],
                    ['Multi-entity operations counted separately', 'The land LLC, operating company, and packing shed each run payroll independently.', 'Combined workforce counting across commonly owned entities, the way the IRS counts them.'],
                    ['Rehire status guessed instead of applied', 'Break-in-service rules decide new-hire versus continuing-employee status, and the answer changes eligibility timing.', 'Break-in-service rules applied consistently across every returning worker, every season.'],
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
              <h2>The grower who assumed the seasonal exception without checking it</h2>
            </div>
            <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem', marginTop: '2rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                An orchard operation runs 22 year-round employees and brings on H-2A and domestic pickers for a 14-week harvest that pushes total headcount past 90. The owner assumes the seasonal worker exception covers them automatically because &quot;everyone knows harvest labor is seasonal.&quot; When hours are actually measured, the surge period runs 132 days that year, four days past the 120-day exception window, because early bloom pushed the start date up two weeks. Without hour-by-hour tracking, that four-day miss is invisible until an IRS inquiry raises it. With measurement-period tracking in place from planting through packing, the same operation sees the exception window closing in real time and can plan the harvest schedule, or the coverage response, around it instead of finding out after the season ends.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for agriculture, answered</h2>
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
