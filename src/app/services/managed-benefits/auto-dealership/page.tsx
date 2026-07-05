import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Auto Dealers | Instant Estimate | BEG',
  description: 'Benefits administration for auto dealerships: COBRA notice volume, ACA tracking, and enrollment handled. You keep your broker. Get an instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/auto-dealership' },
  openGraph: {
    title: 'Benefits Admin for Auto Dealers | Instant Estimate | BEG',
    description: 'Benefits administration for auto dealerships: COBRA notice volume, ACA tracking, and enrollment handled. You keep your broker. Get an instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/auto-dealership',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Auto Dealers | Instant Estimate | BEG', description: 'Benefits administration for auto dealerships: COBRA notice volume, ACA tracking, and enrollment handled. You keep your broker. Get an instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-auto-dealership');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a dealership?',
    'Plan setup, enrollment for every department from sales to service, life-event changes, carrier updates, payroll deduction sync, ACA eligibility tracking, and Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'Why is COBRA such a problem for dealerships specifically?',
    'Turnover. Every enrolled employee who leaves is a qualifying event with federal notice deadlines, and sales floors generate those events constantly. High volume plus manual tracking is how notices get missed, and missed notices carry per-day penalty exposure.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising the dealership and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, terminations, data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'Is this a PEO for dealer groups?',
    'No. There is no co-employment and no employer-of-record change. The dealership stays the employer and your plans stay your plans. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a dealership?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsAutoDealershipPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Auto Dealerships', item: 'https://www.beghr.com/services/managed-benefits/auto-dealership' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Auto Dealerships"
        title="Sales turnover is a fact of the business. COBRA penalties do not have to be."
        description="Every salesperson who quits after four months is a benefits event with federal deadlines attached, and dealerships generate those events faster than almost any industry. BEG Managed Benefits, powered by isolved, keeps enrollment, terminations, and ACA reporting handled across every rooftop while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Every rooftop', label: 'One system across the dealer group' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Dealership Benefits Problem</p>
              <h2>High turnover turns benefits administration into a deadline factory.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '44 days',
                  label: 'Total time to get a COBRA election notice out',
                  sub: 'Under Department of Labor rules, the employer has 30 days to report a qualifying event and the plan administrator 14 more to send the election notice. On a busy sales floor, that clock starts several times a month.',
                },
                {
                  stat: 'Up to $110/day',
                  label: 'Exposure for a missed COBRA notice',
                  sub: 'Notice failures carry per-day, per-beneficiary penalty exposure plus private lawsuits from the person who never got the notice. Volume makes manual tracking a gamble.',
                },
                {
                  stat: '2 pay plans',
                  label: 'Salaried in the office, commission on the floor',
                  sub: 'Commission-heavy pay makes ACA affordability testing genuinely tricky, and variable schedules in the detail bay and BDC create eligibility questions salaried workforces never face.',
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
              Source: <a href="https://www.dol.gov/sites/dolgov/files/ebsa/about-ebsa/our-activities/resource-center/publications/an-employers-guide-to-group-health-continuation-coverage-under-cobra.pdf" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, An Employer&apos;s Guide to Group Health Continuation Coverage Under COBRA</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Dealerships</p>
              <h2>The benefits problems specific to dealerships, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Termination events processed the day they happen</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a salesperson leaves, three things have to happen fast: coverage ends on the right date, the continuation clock starts with the right notice, and the payroll deduction stops. When those steps live in three different systems and one office manager&apos;s memory, turnover volume guarantees misses. Administered in one system, the separation triggers the whole chain, and continuation support is scoped exactly to your company and states on the discovery call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA tracking for commission and variable-hour staff</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Porters, detailers, BDC reps, and part-time weekend staff drift across the 130-hour monthly line, and commission-only pay complicates the affordability safe harbors that salaried workforces take for granted. The Software + ACA Compliance plan tracks hours and eligibility across every department, documents offers of coverage, and produces Forms 1094-C and 1095-C, so an IRS 226-J letter never turns into an archaeology project.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-rooftop groups counted as the IRS counts them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Dealer groups usually run each store as its own entity, often with a management company on top. Common ownership can combine those entities for ACA workforce counting, which means eligibility and reporting have to be managed across the group, not store by store. One system holds the combined roster, and benefits move with employees who transfer between rooftops instead of being terminated and re-enrolled by mistake.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment a new hire can finish before the Saturday rush</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Dealerships hire fast and put people to work faster. Self-service enrollment with AI-guided plan recommendations lets a new hire compare options and enroll from a phone during onboarding week, and waiting-period tracking makes sure the offer lands when it should, not when someone remembers.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>An audit trail for the carrier bill</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>High turnover means the monthly carrier invoice is wrong more often than in any calm industry: departed employees still on the bill, new hires missing, dependents never removed. On the Fully Managed plan a Benefits Auditing Analyst reconciles elections against carrier records every cycle, and a dedicated Managed Benefits Specialist runs enrollment and changes so the office manager can go back to running the office.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Dealerships with real headcount and no benefits department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Franchise new-car dealerships', body: 'Sales, F&I, service, parts, and body shop under one roof: five departments with five different work patterns on one plan.' },
                { title: 'Multi-rooftop dealer groups', body: 'Several stores, several entities, one combined ACA picture that the IRS expects you to get right.' },
                { title: 'Independent used-car dealers', body: 'Lean back offices where the controller or office manager is also the entire benefits function.' },
                { title: 'RV, powersports, and marine dealers', body: 'Seasonal sales surges and service schedules that push part-timers across eligibility lines.' },
                { title: 'Heavy truck and equipment dealers', body: 'Technician-heavy rosters where benefits quality decides who wins the wrench war for talent.' },
                { title: 'Auto service groups', body: 'Multi-location service and collision operations with dealership-grade turnover and no dealership-grade back office.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst who run it all, including the termination volume. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Commission payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/auto-dealership">managed payroll for auto dealerships</Link>. Handbook and HR questions? See <Link href="/services/hr-outsourcing/auto-dealership">HR outsourcing for auto dealerships</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for dealerships, answered</h2>
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
