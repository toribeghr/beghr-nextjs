import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Childcare | Instant Estimate | BEG',
  description: 'Benefits administration for childcare centers: part-time aide ACA tracking, enrollment, and carrier updates handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/childcare' },
  openGraph: {
    title: 'Benefits Admin for Childcare | Instant Estimate | BEG',
    description: 'Benefits administration for childcare centers: part-time aide ACA tracking, enrollment, and carrier updates handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/childcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Childcare | Instant Estimate | BEG', description: 'Benefits administration for childcare centers: part-time aide ACA tracking, enrollment, and carrier updates handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-childcare');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a childcare center?',
    'Plan setup, enrollment for teachers and aides, life-event changes, carrier updates, payroll deduction sync, variable-hour ACA eligibility tracking, and Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'Our aides float between part-time and full-time hours. How does eligibility work?',
    'Through the IRS lookback measurement method: hours are averaged over a measurement period to set full-time status for a following stability period. The system runs that math continuously and documents every determination.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, changes, eligibility data, and compliance filings. Brokers usually welcome it.',
  ],
  [
    'Is this a PEO for childcare centers?',
    'No. There is no co-employment and no employer-of-record change. Your center stays the employer, which matters when state licensing holds you responsible for your staff. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a childcare business?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsChildcarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Childcare', item: 'https://www.beghr.com/services/managed-benefits/childcare' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Childcare"
        title="Staff-to-child ratios run your schedules. The IRS runs your eligibility rules."
        description="Floating aides, split shifts, ratio coverage, and turnover: childcare scheduling creates exactly the variable-hour workforce ACA tracking rules punish when nobody tracks them. BEG Managed Benefits, powered by isolved, handles eligibility, enrollment, and the filings while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Every shift', label: 'Hours flow into eligibility math automatically' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Childcare Benefits Problem</p>
              <h2>Thin margins, part-time rosters, and a director doing benefits at naptime.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '30 hrs/wk',
                  label: 'The IRS full-time line for ACA purposes',
                  sub: 'An aide averaging 30 hours a week, or 130 hours in a month, is full-time under the ACA. Ratio coverage and pickup shifts push part-timers across that line quietly.',
                },
                {
                  stat: '50 FTE',
                  label: 'Part-time hours aggregate into the reporting threshold',
                  sub: 'Full-time equivalents count combined part-time hours. A center group with a deep part-time bench can owe ACA reporting while believing it is too small.',
                },
                {
                  stat: '1 director',
                  label: 'The usual owner of enrollment, changes, and carrier calls',
                  sub: 'Between licensing visits, parent conversations, and staffing gaps, the director is also the benefits department. Something gets dropped, and it is usually the paperwork.',
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
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Childcare</p>
              <h2>The benefits problems specific to childcare, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour tracking for floaters and aides</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Ratio requirements mean schedules flex daily: an aide covers an infant room Monday, closes Thursday, picks up a summer camp week in June. The Software + ACA Compliance plan applies the IRS lookback measurement method to those hours continuously, so full-time determinations, offers of coverage, and the records behind them happen on schedule instead of in a panicked January reconstruction.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Turnover events processed before they become penalties</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Early childhood education runs on tight wages and high churn. Every enrolled teacher who leaves triggers a coverage end date, potential continuation rights, and a deduction stop, each with its own deadline. Processed in one system, the chain runs automatically, with continuation support scoped to your center&apos;s size and states on the discovery call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-site groups and the eligibility rules that must match</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Center groups grow location by location, sometimes entity by entity, and staff float between sites to cover ratios. Hours worked across locations belong in one eligibility calculation, and common ownership can combine entities for ACA counting. One system holds the whole roster, so a floater&apos;s combined hours count the way the IRS says they should.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits as a hiring answer in a field that struggles to hire</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Centers compete for teachers against school districts and retail wages. A real benefits program, presented through self-service enrollment a teacher can complete from a phone with AI-guided recommendations, is one of the few levers a center owner controls. The administration should not be the reason it goes unused.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The director&apos;s desk, cleared</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes changes, and chases carrier updates, while a Benefits Auditing Analyst reconciles elections against carrier bills. The director goes back to running classrooms; the paperwork gets a professional owner.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Childcare operators big enough to owe benefits work, too lean to staff it</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Independent childcare centers', body: 'Owner-directors running enrollment and carrier calls between ratio coverage and licensing prep.' },
                { title: 'Multi-site center groups', body: 'Floating staff, entity-per-location structures, and one combined ACA picture to get right.' },
                { title: 'Preschools and early learning academies', body: 'Academic-year rhythms, aide benches, and eligibility that shifts with enrollment season.' },
                { title: 'Montessori and specialty programs', body: 'Credentialed lead teachers worth retaining with benefits that actually work.' },
                { title: 'Before and after school programs', body: 'Split-shift staff whose short daily hours still add up in the ACA math.' },
                { title: 'Franchise childcare locations', body: 'Franchisees who own the employer obligations the brand does not handle for them.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds the variable-hour eligibility tracking and Forms 1094-C and 1095-C childcare rosters need. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll for split shifts the bigger problem? BEG&apos;s core service is <Link href="/services/managed-payroll/childcare">managed payroll for childcare</Link>. Handbooks and staffing policy questions? See <Link href="/services/hr-outsourcing/childcare">HR outsourcing for childcare</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for childcare, answered</h2>
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
