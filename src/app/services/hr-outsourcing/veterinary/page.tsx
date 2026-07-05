import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Veterinary HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for veterinary practices: DVM license tracking, on-call pay, and controlled-substance conduct policies handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/veterinary' },
  openGraph: {
    title: 'Veterinary HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for veterinary practices: DVM license tracking, on-call pay, and controlled-substance conduct policies handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/veterinary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Veterinary HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for veterinary practices: DVM license tracking, on-call pay, and controlled-substance conduct policies handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-veterinary');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a veterinary practice?',
    'Certified HR professionals handle your handbook, DVM and technician license tracking policies, on-call pay documentation, production pay records, and manager coaching, sized to an independent practice instead of a consolidator group.',
  ],
  [
    'Can it track DVM licenses and DEA registrations?',
    'Yes at the policy and process level: verification at hire, documented renewal tracking for licenses and prescriber DEA registrations, and job descriptions that make active credentials a condition of the role.',
  ],
  [
    'Does it handle production-based pay documentation?',
    'Yes. HR professionals put ProSal and production plans in writing: how production is calculated, how negative accrual is treated, and acknowledgment at every plan change.',
  ],
  [
    'Is this a PEO for veterinary practices?',
    'No. There is no co-employment and no employer-of-record change. Your practice stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does veterinary HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingVeterinaryPage() {
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
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'Veterinary', item: 'https://www.beghr.com/services/hr-outsourcing/veterinary' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Veterinary"
        title="Your team cares for the animals. Who takes care of the employment side?"
        description="DVM licenses and DEA registrations on renewal clocks, emergency on-call pay nobody wrote down, production pay plans explained verbally, and a controlled-substance cabinet that makes conduct policy a legal necessity: veterinary HR carries clinical-grade compliance weight. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Veterinary HR Problem</p>
              <h2>Patient care gets the attention. Employment compliance gets the board complaint.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before veterinary complexity',
                  sub: 'Independent practices rarely have the headcount to justify that hire, so HR lands on the practice manager, on top of scheduling, inventory, and clients.',
                },
                {
                  stat: '1 lapse',
                  label: 'One expired license or DEA registration is an incident',
                  sub: 'A DVM practicing on a lapsed license or prescribing on an expired DEA registration exposes the veterinarian and the practice both. Renewal tracking is an HR process that needs an owner.',
                },
                {
                  stat: '24/7',
                  label: 'Emergency coverage runs around the clock, and so does the pay question',
                  sub: 'On-call rotations, after-hours callbacks, and techs answering messages at midnight create compensable time that informal arrangements never account for.',
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
              Source: <a href="https://www.deadiversion.usdoj.gov/" target="_blank" rel="noopener noreferrer">U.S. Drug Enforcement Administration, Diversion Control Division</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Veterinary HR Compliance</p>
              <h2>The employment problems specific to veterinary practices, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>DVM, technician, and DEA credentials as employment records</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A veterinary practice runs on credentials with independent renewal clocks: DVM licenses per state, credentialed technician licenses and CE requirements where states regulate the role, and DEA registrations for every prescribing veterinarian. Each is issued to the individual, but the practice carries the consequences of a lapse, from board discipline to prescribing violations. HR outsourcing makes the credential file an employment system: verification at hire, a documented renewal tracking policy with advance notice, job descriptions that condition the role on active licensure and registration, and a personnel record that shows the practice managed it rather than assumed it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>On-call and emergency shift pay, written before the dispute</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Emergency coverage is where veterinary pay practices break. Whether on-call hours are compensable depends on how restricted the employee is, callbacks in the middle of the night are working time from the moment the phone rings in most scenarios, and non-exempt techs answering treatment questions by text are accruing minutes nobody records. Salaried associates are not automatically exempt either; the duties and salary tests still have to be met. HR outsourcing writes the on-call policy deliberately: rotation expectations, callback pay, time recording for after-hours work, and exemption classifications checked against reality, so the emergency line stops generating quiet wage liability.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Compassion fatigue, leave, and accommodation handled properly</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Veterinary medicine has one of the highest burnout and mental-health strain profiles of any profession, and that reality arrives at the front desk as an employment question: a tech who needs intermittent leave, an associate who discloses depression, a doctor who cannot face euthanasia appointments for a while. FMLA, state leave programs, and the ADA&apos;s interactive process each have documentation requirements and deadlines, and a compassionate answer delivered without process is still a legal exposure. HR outsourcing guides each case: eligibility, notices, certification handling, accommodation dialogue, and return-to-work steps, documented correctly while managers stay focused on keeping the schedule humane.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Production-based pay documented like the wage plan it is</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>ProSal and production-based compensation dominate associate pay, and most plans live in an offer letter paragraph and a spreadsheet the associate has never seen. That is how disputes start: what counts toward production, how discounts and missed charges are treated, whether negative accrual carries forward, and what happens to production earned but unpaid at departure. State wage laws treat earned compensation as wages with penalties for getting it wrong. HR outsourcing documents the plan properly: written terms acknowledged at hire and at every change, a transparent calculation record, and separation procedures that settle production pay by rule instead of negotiation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Controlled-substance conduct policies at the employment layer</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every practice with ketamine and opioids in the cabinet has a diversion risk that is fundamentally an employment issue. DEA rules govern storage and recordkeeping; what they do not supply is the personnel side: a written policy on access and handling, screening appropriate to roles with drug access, a documented investigation process when counts go wrong, and discipline consistent enough to defend. Practices that improvise a diversion response often create a second problem, from defamation exposure to a mishandled termination. HR outsourcing builds that layer in advance: policies acknowledged in writing, an investigation playbook, and manager coaching for the worst week your practice will have. Recruiting for drug-access roles gets a documented standard too.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Practices big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Companion animal practices', body: 'One to five doctors, a tech and assistant team with real turnover, and a practice manager doing HR from memory.' },
                { title: 'Emergency and specialty hospitals', body: 'Overnight shifts, on-call specialists, and pay differentials where the wage-and-hour math has to be right at scale.' },
                { title: 'Mixed and large animal practices', body: 'Doctors on the road, drive time between farm calls, and after-hours coverage as a way of life, all compensable-time questions.' },
                { title: 'Equine practices', body: 'Ambulatory schedules, on-call rotations around foaling season, and production pay plans that need documentation, not folklore.' },
                { title: 'Multi-location practice groups', body: 'Two to ten clinics with staff floating between them, different location cultures, and one set of employment policies trying to cover all of it.' },
                { title: 'Independent practices near a sale', body: 'Owners preparing for a consolidator conversation, where clean personnel files and documented pay plans show up in diligence.' },
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
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Production pay making payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/veterinary">managed payroll for veterinary practices</Link>. Licensed clinical teams are familiar ground: see <Link href="/services/hr-outsourcing/healthcare">healthcare HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Veterinary HR outsourcing, answered</h2>
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
