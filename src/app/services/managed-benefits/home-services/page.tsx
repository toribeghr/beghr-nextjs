import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Home Services Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for home services companies: seasonal ACA eligibility, part-time FTE counts, and enrollment handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/home-services' },
  openGraph: {
    title: 'Home Services Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for home services companies: seasonal ACA eligibility, part-time FTE counts, and enrollment handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/home-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Services Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for home services companies: seasonal ACA eligibility, part-time FTE counts, and enrollment handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-home-services');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a home services company?',
    'Plan setup, enrollment for office staff and field techs, eligibility tracking across hourly, per-job, and commissioned pay, life-event changes, deduction sync with payroll, and ACA reporting, all in one system.',
  ],
  [
    'Do our part-time and seasonal workers count toward ACA requirements?',
    'Their hours do. Part-time hours combine into full-time equivalents when determining applicable large employer status, so a busy-season roster of part-timers can push you past the 50-FTE line.',
  ],
  [
    'How do you track eligibility when hours spike every busy season?',
    'With the IRS look-back measurement method: hours are measured over a defined period to set full-time status for a stability period, so a tech who ran 45-hour weeks all summer is handled by rule, not by memory.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility, data, and filings.',
  ],
  [
    'Can techs enroll from the field?',
    'Yes. Enrollment, plan comparison, and life-event changes all work from a phone, so open enrollment does not depend on getting every crew into the shop on the same morning.',
  ],
  [
    'Is this a PEO for home services businesses?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer.',
  ],
  [
    'What happens when a tech quits mid-season and stays on the health plan by mistake?',
    'That is the most common home services benefits error: a termination gets flagged in the field but never reaches the carrier feed, so premiums keep billing for a tech who left in June. A Benefits Auditing Analyst on the Fully Managed plan checks carrier records against active roster data so terminated techs come off the bill on schedule and COBRA notices go out on the federal timeline.',
  ],
  [
    'What does benefits administration cost for a home services company?',
    'A monthly per-employee cost that runs well under the $60,000 to $100,000 a year a mid-market employer typically pays to hire a benefits admin in-house. Answer five questions in the estimate form and a monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What happens if we miss a COBRA notice for a departed tech?',
    'Missed or late COBRA election notices carry real exposure. Continuation coverage itself commonly runs at least $110 a day once elected, and separately the IRS can assess excise tax penalties for notice failures. Tracking departures and notice deadlines in one system is what keeps that from happening by accident.',
  ],
];

export default function ManagedBenefitsHomeServicesPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Home Services', item: 'https://www.beghr.com/services/managed-benefits/home-services' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Home Services"
        title="Hourly techs, per-job pay, seasonal swings. Benefits admin was not built for your roster."
        description="HVAC, plumbing, electrical, cleaning, landscaping: home services rosters mix hourly, per-job, and commissioned pay across crews that swell every busy season. BEG Managed Benefits, powered by isolved, tracks the eligibility churn and runs the administration, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Seasonal', label: 'FTE counts and eligibility churn tracked' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Home Services Benefits Problem</p>
              <h2>The busy season that makes your revenue also makes your ACA problem.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '50 FTEs',
                  label: 'The ACA line part-timers quietly push you across',
                  sub: 'Applicable large employer status counts full-time equivalents, not just full-time hires. IRS rules aggregate part-time hours, so a summer roster heavy on part-time helpers can cross 50 FTEs without a single salaried addition.',
                },
                {
                  stat: 'Per job',
                  label: 'Pay structures that make hour tracking genuinely hard',
                  sub: 'Flat-rate jobs, piece-rate installs, commission on sold work: when pay is not a clean hourly clock, eligibility hours still have to be captured, because the ACA measures service hours regardless of how you pay for them.',
                },
                {
                  stat: 'Spring hires',
                  label: 'Seasonal onboarding waves, then fall exits with notices attached',
                  sub: 'Every busy-season wave of hires starts waiting periods and measurement clocks, and every fall wind-down triggers coverage terminations and continuation notices. The churn is annual and predictable, and it still gets fumbled.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/determining-if-an-employer-is-an-applicable-large-employer" target="_blank" rel="noopener noreferrer">IRS, determining applicable large employer status</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Home services benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: enrollment from the truck, not the break room</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans are set up in one system and techs enroll from a phone between service calls, with AI-guided recommendations that make a first real benefits election less intimidating for a crew that has never had coverage explained. Life events run as self-service workflows, and deductions sync to payroll across hourly, flat-rate, and commission pay.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: seasonal churn, measured by rule</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>FTE counts are watched so applicable large employer status is a known fact before filing season, seasonal and variable-hour workers are measured under the IRS look-back method, and Forms 1094-C and 1095-C are produced on schedule. The owner who found out about ACA reporting from a penalty letter is the story this plan exists to prevent.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: the office manager gets her spring back</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment, processes the spring hiring wave and the fall exits with their continuation notices, and keeps carrier records current all year. A Benefits Auditing Analyst checks the data for the errors seasonal businesses breed: terminated techs still on the carrier bill through the off-season and waiting periods applied inconsistently across hiring waves.</p>
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
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds FTE and variable-hour tracking with Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Per-job pay breaking payroll too? BEG&apos;s core service is <Link href="/services/managed-payroll/home-services">managed payroll for home services</Link>, and crew policies and compliance live in <Link href="/services/hr-outsourcing/home-services">home services HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where Home Services Benefits Admin Breaks</p>
              <h2>Field crews and busy seasons create failure points a desk job never sees</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Pain point</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>Why it happens on a crew roster</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #ECAC60', fontWeight: 700 }}>What handles it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Techs missing open enrollment', 'Crews are on trucks, not at a shop meeting, so a paper packet or one shop-floor session never reaches everyone.', 'Phone-based self-service enrollment with AI-guided plan recommendations, open on the tech’s own schedule.'],
                    ['FTE count drifts past 50 unnoticed', 'Spring and summer hiring waves are part-timers and helpers, and their hours combine into full-time equivalents under IRS rules.', 'FTE counts tracked monthly so applicable large employer status is a known fact, not a year-end surprise.'],
                    ['Eligibility hours hard to capture', 'Flat-rate jobs, piece-rate installs, and commission pay do not produce a clean hourly clock the way a shift punch does.', 'IRS look-back measurement applied to actual service hours, regardless of how the tech is paid.'],
                    ['Terminated techs still on the carrier bill', 'A fall wind-down separation gets logged in payroll but never reaches the benefits carrier feed.', 'Carrier records audited against active roster data, with COBRA notices triggered on the federal timeline.'],
                    ['1094-C and 1095-C assembled from scratch every January', 'Seasonal hire and exit waves make year-end reconstruction from spreadsheets slow and error-prone.', 'Forms produced from the same hours data tracked all year, not rebuilt at filing season.'],
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
              <h2>The office manager who found out about ACA the hard way</h2>
            </div>
            <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem', marginTop: '2rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A residential HVAC company runs 38 year-round employees. Every summer they bring on 15 to 20 seasonal helpers and dispatch techs to keep up with install season. Nobody ran the math on full-time equivalents, because the company &quot;isn&apos;t a 50-employee business.&quot; By July, combined FTEs crossed 50 for the first time, triggering applicable large employer status and a coverage-offer obligation the owner did not know existed until a letter arrived the following year. With hours tracked under the IRS look-back method from day one, the same company sees the FTE line coming months in advance, with time to decide how to respond instead of reacting to a penalty notice.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Home services benefits administration, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
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
