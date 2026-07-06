import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Administration for Fitness | Instant Estimate | BEG',
  description: 'Benefits administration for gyms and studios: per-class instructor pay, variable-hour ACA tracking, and eligibility churn handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/fitness' },
  openGraph: {
    title: 'Benefits Administration for Fitness | Instant Estimate | BEG',
    description: 'Benefits administration for gyms and studios: per-class instructor pay, variable-hour ACA tracking, and eligibility churn handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/fitness',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Administration for Fitness | Instant Estimate | BEG', description: 'Benefits administration for gyms and studios: per-class instructor pay, variable-hour ACA tracking, and eligibility churn handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-fitness');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a gym or fitness studio?',
    'Plan setup, enrollment for full-time staff, variable-hour eligibility tracking for instructors and front-desk teams, life-event changes, deduction sync with payroll, and ACA reporting, all in one system across every location.',
  ],
  [
    'Do part-time instructors count toward ACA requirements?',
    'Their hours do. Part-time hours aggregate into full-time equivalents when determining whether you are an applicable large employer, so a part-time-heavy roster can cross the 50-FTE line before anyone notices.',
  ],
  [
    'How do you track ACA eligibility for instructors paid per class?',
    'With the IRS look-back measurement method: hours are measured over a defined period to determine full-time status for a stability period, so eligibility decisions are documented instead of guessed at each month.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility tracking, data, and filings.',
  ],
  [
    'Can this handle multiple studio locations?',
    'Yes. One system covers every location nationwide, so a manager transfer or an instructor teaching across two sites does not break eligibility tracking or duplicate an enrollment record.',
  ],
  [
    'Is this a PEO for fitness businesses?',
    'No. There is no co-employment and your plans stay your plans. BEG Managed Benefits, powered by isolved, administers the coverage you and your broker already chose. You stay the employer.',
  ],
  [
    'Our instructors are 1099 contractors. Does that change anything?',
    'It changes what needs to be checked, not whether it needs checking. Misclassifying an instructor who is functionally an employee (set schedule, studio equipment, no other clients) creates ACA and payroll exposure at once. BEG Managed Benefits tracks classification alongside eligibility so a reclassified instructor is caught and enrolled on schedule instead of surfacing during an audit.',
  ],
  [
    'Instructor turnover is constant. Does that create a COBRA problem?',
    'Volume, mainly. Every enrolled instructor or front-desk employee who leaves triggers a COBRA notice, an election window, and premium billing, and a studio with high seasonal turnover can generate dozens of these a year. Internal teams that miss a notice deadline own the liability directly; outsourced COBRA administration typically runs around $110 a day per plan administrator, and BEG Managed Benefits includes it, notices and all, inside Fully Managed.',
  ],
];

export default function ManagedBenefitsFitnessPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Fitness', item: 'https://www.beghr.com/services/managed-benefits/fitness' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Fitness"
        title="Instructors paid per class. Eligibility that changes per season. Benefits admin built for neither."
        description="Fitness rosters mix salaried managers, hourly front desk, and instructors paid per class or per session, most of them part-time and many of them briefly. BEG Managed Benefits, powered by isolved, tracks the eligibility churn and runs the administration, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Variable-hour', label: 'Look-back ACA tracking built in' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Fitness Benefits Problem</p>
              <h2>A part-time-heavy roster is exactly the workforce ACA tracking punishes.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '3-12 mo',
                  label: 'The IRS look-back window for variable-hour employees',
                  sub: 'Instructors paid per class rarely know their own weekly hours in advance, which is why the IRS look-back measurement method exists. Applying it takes real tracking, not a January guess.',
                },
                {
                  stat: 'FTE math',
                  label: 'Part-timers count toward the 50-employee ACA line',
                  sub: 'Part-time hours aggregate into full-time equivalents for applicable large employer status. A three-studio operation full of 15-hour instructors can cross 50 FTEs without one new full-time hire.',
                },
                {
                  stat: 'Seasonal',
                  label: 'January surges and summer slumps churn eligibility',
                  sub: 'Class loads swell in resolution season and thin out by July. Hours swing, eligibility swings with them, and every instructor who quits mid-year adds a COBRA or state continuation notice to the pile.',
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

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Fitness operators carrying real ACA exposure without a benefits department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Independent gyms', body: 'A single-location gym with salaried managers, hourly front desk, and a bench of per-class instructors, where eligibility tracking has been a spreadsheet someone updates when they remember.' },
                { title: 'Boutique fitness studios', body: 'Yoga, pilates, and cycling studios paying instructors per class taught, with weekly hours that swing with class sign-ups instead of a fixed schedule.' },
                { title: 'Multi-location franchise operators', body: 'Regional operators running a dozen or more clubs under one ownership group, where combined part-time hours can cross the 50-FTE line long before headcount at any single location looks like it.' },
                { title: 'CrossFit-style affiliate boxes', body: 'Owner-operators with a small core staff and a rotating group of coaches paid per class, where classification and eligibility questions come up constantly and get answered inconsistently.' },
                { title: 'Martial arts and dance studios', body: 'Instructor-heavy rosters with after-school scheduling gaps and instructors who teach at more than one location, complicating both eligibility and payroll.' },
                { title: 'Personal training studios', body: 'Trainers paid per session with client loads that vary week to week, making the IRS look-back measurement method the only reliable way to know who is eligible.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Fitness benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: enrollment that works from a phone between classes</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Managers, trainers, and front-desk staff research, compare, and enroll themselves online, with AI-guided recommendations balancing cost and coverage. Nobody chases an instructor who teaches at 6 AM and 7 PM for a paper form. Life events are self-service workflows, and deductions sync to payroll no matter how irregular the pay pattern.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: the plan built for per-class rosters</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>This is where fitness businesses usually land. Variable-hour tracking applies the look-back method to every instructor, FTE counts are watched so applicable large employer status is a known fact rather than a surprise, and Forms 1094-C and 1095-C are produced on schedule. When an auditor or the IRS asks why someone was or was not offered coverage, the measurement records answer.</p>
                <p style={{ margin: '0.9rem 0 0', color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Take a three-studio operator with 40 payroll employees across managers and front desk, plus 25 instructors teaching 8 to 15 hours a week apiece. No single studio looks like an applicable large employer. Aggregate every instructor&apos;s hours into full-time equivalents across all three locations, though, and that operator can cross 50 FTEs while still telling people they run three small studios. The measurement period is what catches it, not a headcount check done location by location.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: turnover volume handled by someone else</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment across every location, processes the constant joins and exits a fitness roster generates, and keeps carrier records current. A Benefits Auditing Analyst checks the data for the classic studio errors: departed instructors still on the carrier bill, missed eligibility dates, deduction mismatches after a pay-rate change.</p>
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
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds variable-hour tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Per-class pay breaking payroll too? BEG&apos;s core service is <Link href="/services/managed-payroll/fitness">managed payroll for fitness businesses</Link>, and the people side lives in <Link href="/services/hr-outsourcing/fitness">fitness HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Fitness benefits administration, answered</h2>
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
