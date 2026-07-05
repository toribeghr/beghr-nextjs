import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Manufacturing Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for manufacturers: union and non-union benefit classes, shift workforce ACA tracking, and COBRA handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/manufacturing' },
  openGraph: {
    title: 'Manufacturing Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for manufacturers: union and non-union benefit classes, shift workforce ACA tracking, and COBRA handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/manufacturing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Manufacturing Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for manufacturers: union and non-union benefit classes, shift workforce ACA tracking, and COBRA handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-manufacturing');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a manufacturer?',
    'Plan setup across union and non-union classes, open enrollment by shift, life-event changes, carrier updates, eligibility tracking including temp-to-hire conversions, deduction sync with payroll, and ACA reporting.',
  ],
  [
    'Can you administer union and non-union benefit classes side by side?',
    'Yes. CBA-driven plans and company plans run as separate benefit classes with their own eligibility rules and contributions, so a floor employee and an office hire each get exactly what their class provides.',
  ],
  [
    'How do temp-to-hire conversions affect benefits?',
    'Conversion starts waiting periods and eligibility clocks that someone must track. Administration applies the right class and waiting period at conversion automatically, so a converted machinist is not discovered unoffered a year later.',
  ],
  [
    'What is IRS Letter 226-J and why should a plant manager care?',
    'It is the letter proposing an employer shared responsibility payment, and it typically arrives more than a year after the filing it questions. Clean eligibility records are what let you respond by the deadline instead of reconstructing history.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, classes, eligibility data, and filings.',
  ],
  [
    'Is this a PEO for manufacturers?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer.',
  ],
];

export default function ManagedBenefitsManufacturingPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Manufacturing', item: 'https://www.beghr.com/services/managed-benefits/manufacturing' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Manufacturing"
        title="Three shifts, two benefit classes, one payroll clerk doing enrollment between runs."
        description="Manufacturing benefits carry structural complexity: union classes set by a CBA next to company plans, rotating shifts that muddy hour counts, and temp-to-hire conversions that start eligibility clocks nobody logs. BEG Managed Benefits, powered by isolved, runs the administration for plants nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Class-aware', label: 'Union and non-union plans, one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Manufacturing Benefits Problem</p>
              <h2>The penalty letter arrives a year after the mistake. The records have to still exist.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '226-J',
                  label: 'The IRS letter that proposes an employer shared responsibility payment',
                  sub: 'Letter 226-J typically lands long after the filing year it questions, with a response deadline attached. Answering it means producing eligibility and offer records for employees who may have left the floor years ago.',
                },
                {
                  stat: '2 classes',
                  label: 'Union plans and company plans, administered side by side',
                  sub: 'A CBA fixes benefits for covered employees while office and non-union staff run on company plans. Wrong-class enrollment is simultaneously a carrier problem, a grievance, and a bargaining-table exhibit.',
                },
                {
                  stat: 'Temp first',
                  label: 'Staffing-agency conversions start eligibility clocks nobody logs',
                  sub: 'Most plants convert their keepers from agency rosters. Each conversion is a hiring event with a waiting period and an offer deadline, and it happens at whatever pace production demands, not when HR is watching.',
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
              Source: <a href="https://www.irs.gov/individuals/understanding-your-letter-226-j" target="_blank" rel="noopener noreferrer">IRS, understanding your Letter 226-J</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Manufacturing benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: enrollment that reaches all three shifts</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Union and non-union classes are configured with their own plans, contributions, and waiting periods, and employees enroll themselves online, second and third shift included, without a lunchroom meeting the night crew always misses. Life events run as self-service workflows, and deductions sync to payroll across shift differentials and overtime swings.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: offer records that can answer a 226-J</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Eligibility is tracked across the plant, including converted temps and variable-hour production staff measured under the IRS look-back method, and Forms 1094-C and 1095-C are produced on schedule. If the IRS proposes a penalty years later, the offer-of-coverage history exists in one system instead of a departed HR coordinator&apos;s spreadsheet.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: the plant office stops moonlighting as a benefits department</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment across shifts and classes, processes conversions, exits, and the continuation notices turnover generates, and keeps carrier records current. A Benefits Auditing Analyst checks the data for plant-floor classics: wrong-class enrollments, departed operators still on the carrier bill, and deductions that stopped matching elections after a shift change.</p>
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
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Shift differentials and union payroll the bigger problem? BEG&apos;s core service is <Link href="/services/managed-payroll/manufacturing">managed payroll for manufacturing</Link>, and attendance and discipline systems live in <Link href="/services/hr-outsourcing/manufacturing">manufacturing HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Manufacturing benefits administration, answered</h2>
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
