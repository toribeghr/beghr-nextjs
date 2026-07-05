import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Home Health Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for home health agencies: caregiver ACA hour tracking, COBRA notice volume, and enrollment handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/home-health' },
  openGraph: {
    title: 'Home Health Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for home health agencies: caregiver ACA hour tracking, COBRA notice volume, and enrollment handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/home-health',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Health Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for home health agencies: caregiver ACA hour tracking, COBRA notice volume, and enrollment handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-home-health');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a home health agency?',
    'Plan setup, enrollment for office and field staff, variable-hour ACA eligibility tracking for caregivers, life-event changes, carrier updates, deduction sync with payroll, and Forms 1094-C and 1095-C, in one system.',
  ],
  [
    'How do you track ACA eligibility when caregiver hours change weekly?',
    'With the IRS look-back measurement method. Visit-driven hours are measured over a defined period to set full-time status for a stability period, so eligibility is documented instead of re-argued every census change.',
  ],
  [
    'Can you handle the COBRA volume caregiver turnover creates?',
    'That volume is the reason agencies outsource. Each covered exit starts a notice clock, and federal rules give qualified beneficiaries at least 60 days to elect. COBRA support is scoped exactly on your discovery call.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility tracking, data, and filings.',
  ],
  [
    'Can field staff enroll without coming into the office?',
    'Yes. Caregivers research, compare, and enroll from a phone between visits, with AI-guided recommendations. No paper packets riding around in car trunks during open enrollment.',
  ],
  [
    'Is this a PEO for home health agencies?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer.',
  ],
];

export default function ManagedBenefitsHomeHealthPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Home Health', item: 'https://www.beghr.com/services/managed-benefits/home-health' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Home Health"
        title="Caregiver hours follow the census. ACA eligibility follows the hours. Somebody has to follow both."
        description="Home health runs on visit-driven schedules that change with every admission and discharge, aides flexing from 20 hours to 45 and back, and turnover that makes COBRA notices a standing task. BEG Managed Benefits, powered by isolved, runs the administration for agencies nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Visit-driven', label: 'Variable-hour ACA tracking built in' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Home Health Benefits Problem</p>
              <h2>The schedule changes with the census. The compliance obligations do not.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Weekly',
                  label: 'How often caregiver hours swing with admissions and discharges',
                  sub: 'A full caseload one month, two discharges the next: aide and nurse hours track the census, not a schedule. That is textbook variable-hour employment, and it demands measurement-period tracking, not guesswork.',
                },
                {
                  stat: '60 days',
                  label: 'The federal COBRA election window each covered exit opens',
                  sub: 'Qualified beneficiaries get at least 60 days to elect continuation coverage, and the notice deadlines land on the employer side. Caregiver turnover keeps that pipeline permanently full.',
                },
                {
                  stat: 'Scattered',
                  label: 'A workforce you almost never see in one room',
                  sub: 'Open enrollment built on office meetings and paper packets fails a field workforce. Caregivers cross counties between visits; benefits administration has to reach the phone in their pocket.',
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
              Source: <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Home health benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: enrollment that reaches the field</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans live in one system and caregivers enroll from a phone between visits, with AI-guided recommendations balancing cost against coverage on caregiver wages. Life events like a new baby or a spouse&apos;s job change are self-service workflows, and deductions sync to payroll even when weekly hours never match.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: the plan built for census-driven hours</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>This is where most agencies land. Aides and nurses with visit-driven schedules are measured under the IRS look-back method, offers of coverage are documented per employee, and Forms 1094-C and 1095-C are produced on schedule. An agency living on Medicare and Medicaid margins cannot afford an employer shared responsibility penalty discovered two filing years late.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: turnover-scale administration, run by a dedicated team</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the constant hires, exits, and hour-status changes a caregiver roster generates, and keeps carrier records current. A Benefits Auditing Analyst checks for the leaks agencies rarely catch: departed aides still on the carrier bill, missed eligibility dates after a caseload increase, and deductions that drifted from elections.</p>
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
              Visit-based payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/home-health">managed payroll for home health</Link>, and aide credentialing and leave live in <Link href="/services/hr-outsourcing/home-health">home health HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Home health benefits administration, answered</h2>
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
