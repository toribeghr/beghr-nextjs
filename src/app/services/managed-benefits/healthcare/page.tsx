import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Healthcare Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for healthcare: 24/7 variable-hour ACA tracking, per-diem eligibility, and COBRA volume handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/healthcare' },
  openGraph: {
    title: 'Healthcare Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for healthcare: 24/7 variable-hour ACA tracking, per-diem eligibility, and COBRA volume handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/healthcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for healthcare: 24/7 variable-hour ACA tracking, per-diem eligibility, and COBRA volume handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-healthcare');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a healthcare organization?',
    'Plan setup, open enrollment, life-event changes, carrier updates, variable-hour ACA eligibility tracking for per-diem and PRN staff, deduction sync with payroll, and Forms 1094-C and 1095-C, all in one system.',
  ],
  [
    'How do you handle ACA eligibility for per-diem and PRN staff?',
    'With the IRS look-back measurement method. Hours are tracked over a measurement period to determine full-time status, since the ACA counts anyone averaging 30 hours a week or 130 hours a month as full-time.',
  ],
  [
    'Can you keep up with our COBRA volume?',
    'High clinical and support turnover means a steady stream of qualifying events, each with notice deadlines. COBRA and state continuation support is available and scoped exactly on your discovery call.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility, data, and filings.',
  ],
  [
    'Does one system work across multiple sites and entities?',
    'Yes. Clinics, agencies, and groups with several locations or EINs run in one system nationwide, so a nurse picking up shifts at two sites has one eligibility record instead of two guesses.',
  ],
  [
    'Is this a PEO for healthcare employers?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer.',
  ],
  [
    'What happens if we misclassify a per-diem employee as part-time?',
    'For 2026, the IRS penalty under Section 4980H(a) for failing to offer coverage to enough full-time employees is $3,340 per full-time employee, and the Section 4980H(b) penalty for an unaffordable or insufficient offer is $5,010 per affected employee. A single misclassified per-diem nurse who should have been offered coverage can trigger either exposure, which is why measurement-period documentation matters more than a snapshot headcount.',
  ],
  [
    'Who actually regulates healthcare staffing and benefits compliance?',
    'Multiple layers apply at once: CMS and state health departments oversee facility licensing and staffing ratios, the IRS enforces ACA employer shared responsibility, and the DOL oversees COBRA and ERISA. BEG Managed Benefits handles the benefits administration layer; your credentialing and licensing obligations stay with your compliance team.',
  ],
];

export default function ManagedBenefitsHealthcarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://www.beghr.com/services/managed-benefits/healthcare' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Healthcare"
        title="A 24/7 schedule makes ACA tracking brutal. Turnover makes COBRA relentless."
        description="Nurses flexing between 24 and 40 hours, per-diem staff nobody can classify, twelve-hour shifts that wreck monthly hour counts, and a turnover rate that turns COBRA notices into a weekly chore. BEG Managed Benefits, powered by isolved, runs the administration for healthcare employers nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '24/7 rosters', label: 'Variable-hour ACA tracking built in' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Healthcare Benefits Problem</p>
              <h2>The industry that provides healthcare has the hardest time administering it for its own people.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '130 hrs',
                  label: 'The monthly hour count that makes someone ACA full-time',
                  sub: 'The IRS treats 130 hours of service in a month as full-time. A per-diem aide who picks up extra shifts for three months can cross the line while the spreadsheet still lists her as part-time.',
                },
                {
                  stat: '24/7',
                  label: 'Coverage schedules that never produce a clean weekly average',
                  sub: 'Twelve-hour shifts, self-scheduling, floats between units and sites: clinical hours refuse to sit still, which is exactly the workforce the look-back measurement method exists for, and almost nobody runs it by hand correctly.',
                },
                {
                  stat: 'Every exit',
                  label: 'High turnover means constant COBRA qualifying events',
                  sub: 'Clinical and support roles turn over faster than most industries, and each covered exit starts a clock on election notices. Volume is what breaks manual COBRA administration, not difficulty.',
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

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Healthcare benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: enrollment that fits clinical schedules</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans live in one system and staff enroll themselves online, on a night-shift break or between home visits, with AI-guided recommendations balancing cost and coverage. Life events are self-service workflows instead of a form waiting on the practice manager, and deductions sync to payroll across differentials and irregular hours.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: the plan built for variable-hour clinical rosters</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>This is where most healthcare employers land. Per-diem, PRN, and flex staff are measured under the IRS look-back method, offers of coverage are documented, and Forms 1094-C and 1095-C are produced on schedule. When the IRS asks why a 32-hour-average tech was or was not offered coverage, the measurement records answer instead of the office manager&apos;s memory. Consider a home health aide who works 24 hours a week for most of the year, then covers 36 to 40 hours a week for a three-month stretch while a colleague is out. Under the look-back method, that stretch can pull her average into full-time territory for the following stability period, whether or not anyone in the office noticed the schedule change in real time.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: turnover volume becomes someone else&apos;s inbox</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the constant flow of hires, exits, and status changes a healthcare roster generates, and keeps carrier records current. A Benefits Auditing Analyst checks the data for the errors that cost real money: departed staff still on the carrier bill, missed eligibility dates, and deductions that stopped matching elections after a status change.</p>
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
              Shift differentials and payroll the bigger fire? BEG&apos;s core service is <Link href="/services/managed-payroll/healthcare">managed payroll for healthcare</Link>, and credential tracking and leave live in <Link href="/services/hr-outsourcing/healthcare">healthcare HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Healthcare benefits administration, answered</h2>
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
