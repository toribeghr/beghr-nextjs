import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Senior Care Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for senior care: variable-hour caregivers tracked for ACA, COBRA at turnover volume. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/senior-care' },
  openGraph: {
    title: 'Senior Care Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for senior care: variable-hour caregivers tracked for ACA, COBRA at turnover volume. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/senior-care',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Senior Care Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for senior care: variable-hour caregivers tracked for ACA, COBRA at turnover volume. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-senior-care');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a senior care operator?',
    'Plan setup, online enrollment that works across three shifts, variable-hour ACA eligibility tracking for caregivers and per-diem staff, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support at care-industry turnover volume.',
  ],
  [
    'How does ACA tracking work for caregivers with changing schedules?',
    'IRS rules allow a lookback measurement method: hours are averaged over a defined period, and anyone at 30 or more per week must be offered coverage for the following stability period. The system tracks it continuously, including per-diem and PRN staff whose hours swing week to week.',
  ],
  [
    'Can it handle enrollment for overnight and weekend staff?',
    'Yes. Enrollment is online and self-service, so an aide on the night shift compares plans and enrolls from a phone at 3 AM without waiting for an office administrator to be in the building.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for senior care?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your agency or community stays the employer.',
  ],
  [
    'What does senior care benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What is the real financial exposure of getting caregiver eligibility wrong?',
    'For 2026, the IRS penalty under Section 4980H(a) for not offering coverage to enough full-time employees is $3,340 per full-time employee, and the Section 4980H(b) penalty for an offer that is unaffordable or fails minimum value is $5,010 per affected employee. On a community running three shifts with constant caregiver movement, a handful of missed determinations adds up fast.',
  ],
  [
    'Who regulates senior care staffing versus benefits compliance?',
    'State health departments, state boards of nursing, and in many states a separate assisted living licensing agency oversee staffing ratios and caregiver credentialing. That is distinct from ACA, COBRA, and ERISA, which are federal benefits rules enforced by the IRS and DOL. BEG Managed Benefits handles the benefits administration layer only; your licensing and staffing compliance stay with your operations team.',
  ],
];

export default function ManagedBenefitsSeniorCarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Senior Care', item: 'https://www.beghr.com/services/managed-benefits/senior-care' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Senior Care"
        title="Care never stops. Neither does the eligibility math behind it."
        description="Round-the-clock shift coverage, per-diem caregivers, and turnover that never lets up: senior care runs the exact workforce that makes benefits administration a full-time job nobody was hired for. BEG Managed Benefits, powered by isolved, tracks eligibility, runs enrollment, and handles the notices while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '24/7', label: 'Shift workforces tracked for ACA' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Senior Care Benefits Problem</p>
              <h2>The fastest-growing workforce in America, and the hardest one to keep enrolled.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'No. 1',
                  label: 'Home health and personal care aides top BLS job-growth projections',
                  sub: 'BLS projects home health and personal care aides to add more jobs than any other occupation this decade. Hiring never stops, which means benefits onboarding, eligibility measurement, and coverage changes never stop either.',
                },
                {
                  stat: '3 shifts',
                  label: 'Coverage that runs around the clock, hours that never sit still',
                  sub: 'Aides pick up overnights, drop weekends, and float between communities or clients. Hours swing across the 30-hour ACA line constantly, which is precisely the pattern lookback measurement exists to handle.',
                },
                {
                  stat: '60 days',
                  label: 'The COBRA election window every caregiver departure can open',
                  sub: 'Federal rules give qualified beneficiaries at least 60 days to elect continuation coverage, with employer-side notice deadlines. At care-industry turnover rates, that is a standing weekly workload.',
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
              Sources: <a href="https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Outlook, home health and personal care aides</a> and <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Senior care benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that reaches the night shift</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A caregiver working overnights in a client home never sees the office where the enrollment forms live. The Benefits Admin Software plan puts plan comparison and enrollment on the phone: employees research options, get AI-guided recommendations that balance cost and coverage, and enroll themselves on any shift. Life events run through self-service workflows, and deductions sync to payroll so coverage changes never turn into paycheck disputes for people who cannot walk down the hall to ask.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour ACA measurement for per-diem and PRN staff</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Senior care rosters are full of employees nobody can classify on hire date: the aide at 25 hours who covers every callout, the PRN nurse who works full-time in flu season. The Software + ACA Compliance plan runs lookback measurement continuously, so eligibility is determined by actual averaged hours instead of guesswork, offers of coverage go out when the law requires them, and Forms 1094-C and 1095-C are produced for you from data the system tracked all year. Take a caregiver who covers 22 hours a week most quarters but picks up enough overnight shifts during a bad flu season to average 33 hours over the measurement period: the system catches that shift and documents the resulting offer, rather than leaving it to whoever happens to be reviewing the schedule that week. Getting it wrong is not free either: for 2026, the Section 4980H(a) penalty for insufficient coverage offers is $3,340 per full-time employee, and the Section 4980H(b) penalty for an inadequate offer is $5,010 per employee.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>COBRA and continuation notices at caregiver turnover volume</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Turnover in direct care is a structural fact, and every covered departure opens a notice obligation on a federal deadline. Terminations trigger the required election notices automatically, windows are tracked, and coverage end dates flow to carriers without a scheduler or administrator keeping a side spreadsheet. State continuation rules for smaller operations are scoped exactly on your discovery call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team so yours can stay on care</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the constant flow of new hires and departures, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors churn creates: departed aides still on the invoice, elections that never reached the carrier, dependents past eligibility. In an industry where administrators already cover callouts and surveys, benefits should not be the third job.</p>
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
                Benefits Admin Software puts enrollment online for every shift. Software + ACA Compliance adds variable-hour tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Shift differentials and overtime the bigger fire? That is <Link href="/services/managed-payroll/senior-care">managed payroll for senior care</Link>; for caregiver policies and compliance guidance, see <Link href="/services/hr-outsourcing/senior-care">senior care HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Senior care benefits administration, answered</h2>
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
