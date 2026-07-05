import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Trucking HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for trucking: DOT drug and alcohol testing programs, driver qualification files, and CDL tracking handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/trucking' },
  openGraph: {
    title: 'Trucking HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for trucking: DOT drug and alcohol testing programs, driver qualification files, and CDL tracking handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/trucking',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Trucking HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for trucking: DOT drug and alcohol testing programs, driver qualification files, and CDL tracking handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-trucking');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a trucking company?',
    'Certified HR professionals handle your handbook, driver qualification file procedures, DOT testing program policies, CDL and medical card tracking processes, and manager coaching, sized to a carrier instead of a mega-fleet HR department.',
  ],
  [
    'Does it cover DOT drug and alcohol testing compliance?',
    'It builds the HR side: written testing policies, pre-employment and annual Clearinghouse query procedures, reasonable suspicion documentation, and supervisor training requirements, coordinated with your testing consortium.',
  ],
  [
    'Can it help with owner-operator classification questions?',
    'Yes. HR professionals help you document the relationship correctly: lease agreements, control factors, and state-test considerations, and flag when a driver arrangement looks like employment wearing a 1099.',
  ],
  [
    'Is this a PEO for trucking companies?',
    'No. There is no co-employment and no employer-of-record change. Your carrier stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does trucking HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingTruckingPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Trucking', item: 'https://www.beghr.com/services/hr-outsourcing/trucking' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Trucking"
        title="Your trucks are DOT compliant. Are your driver files?"
        description="Clearinghouse queries, driver qualification files, expiring med cards, and a testing program with federal minimums: trucking HR is regulated like the equipment. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Trucking HR Problem</p>
              <h2>Dispatch gets the systems. Driver files get a drawer in the office.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before DOT complexity',
                  sub: 'Carriers under a few hundred employees rarely have the volume to justify that hire, so HR lands on the safety manager or the office manager, on top of keeping trucks moving.',
                },
                {
                  stat: 'Pre-hire',
                  label: 'When the Clearinghouse query has to happen, every time',
                  sub: 'A full Clearinghouse query before a driver performs a safety-sensitive function, plus an annual query on every driver after that. Miss one and the violation is on your audit, not the driver.',
                },
                {
                  stat: '1 file',
                  label: 'One incomplete driver qualification file is an audit finding',
                  sub: 'MVRs, medical certificates, road tests, prior employer checks: the DQF has required contents and retention rules, and a compliance review samples them. Gaps found after a crash cost far more.',
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
              Source: <a href="https://www.fmcsa.dot.gov/regulations/drug-alcohol-testing-program" target="_blank" rel="noopener noreferrer">FMCSA, drug and alcohol testing program</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Trucking HR Compliance</p>
              <h2>The employment problems specific to trucking, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>DOT drug and alcohol testing, run as an HR process with an owner</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The FMCSA testing program is prescriptive: pre-employment tests before safety-sensitive work, random testing at federally set annual rates, post-accident tests within tight windows, and reasonable suspicion testing backed by trained supervisors. Your consortium runs the selections; someone at your company still has to own the policy, the documentation, and the follow-through when a result comes back positive, including return-to-duty and follow-up processes. HR outsourcing writes the required policy, builds the supervisor training requirement into your calendar, and makes sure Clearinghouse queries, pre-employment and annual, happen on schedule with a record to prove it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Driver qualification files that survive a compliance review</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every CDL driver needs a qualification file with specific contents: application, motor vehicle records pulled at hire and annually, medical examiner certificate, road test or equivalent, and safety performance history from previous DOT-regulated employers. Then the expirations start: med cards on their own cycles, CDL renewals, endorsements. A driver whose med card lapsed on a Tuesday is unqualified on Wednesday, and dispatch rarely knows. HR outsourcing builds the tracking process: what goes in the file, who pulls the annual MVR, how renewals are flagged with lead time, and how the file is organized so an auditor finds everything in minutes.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Owner-operator or employee driver: the classification that decides everything</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Trucking runs on both models, and the line between them is patrolled by the IRS, the DOL, and increasingly aggressive state tests. An owner-operator who drives your truck, on your schedule, with your dispatcher controlling every load, looks like an employee no matter what the lease says, and reclassification brings back taxes, overtime exposure, and benefits claims at once. HR outsourcing helps document the relationship you actually intend: lease terms, control factors, and operating practices that match the classification, plus a straight answer when an arrangement has drifted into employment and needs to be fixed before an agency finds it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Scheduling and attendance policies that respect hours of service</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Hours-of-service limits belong to your safety department, but your employment policies live right next to them. An attendance policy that penalizes a driver for running out of hours, a bonus plan that quietly rewards pushing the clock, or a dispatcher habit of leaning on drivers to move when they should rest: those are employment documents and management behaviors, and they surface in coercion complaints and post-crash litigation. HR outsourcing reviews attendance, pay, and scheduling policies for conflicts with safety rules, and coaches your dispatch and terminal managers so the paperwork and the pressure both point the same direction: legal miles only.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Per-mile, detention, and accessorial pay, documented before it is disputed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Per-mile pay is legal; unexplained per-mile pay is a claim generator. Drivers paid by the mile still must average at least minimum wage for all hours worked each workweek, and some states demand separate pay for non-driving time like detention, inspections, and loading. When the pay plan lives in a dispatcher&apos;s head, every departing driver is a potential wage claim with no written agreement to answer it. HR outsourcing puts the pay plan in writing: mileage basis, detention terms, accessorial pay, and deductions, acknowledged at hire and updated when the plan changes, so recruiting promises and pay stubs finally match.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Carriers big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Regional dry van and reefer carriers', body: 'Company drivers across several states, DQF volume, and recruiting that never stops because turnover never stops.' },
                { title: 'Flatbed and specialized haulers', body: 'Endorsement tracking, securement training documentation, and higher-stakes safety-sensitive roles.' },
                { title: 'Last-mile and courier fleets', body: 'Non-CDL drivers, high-volume hiring, and classification questions across contractor and employee models.' },
                { title: 'Private fleets inside other businesses', body: 'A DOT-regulated driver population inside a company whose HR was never built for FMCSA rules.' },
                { title: 'Intermodal and drayage operators', body: 'Port credentials layered on DOT requirements, and owner-operator relationships that need clean documentation.' },
                { title: 'Mixed fleets scaling up', body: 'Employee drivers and owner-operators side by side, where consistent files and clear classification matter most.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/trucking">managed payroll for trucking</Link>. Crews on job sites too? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Trucking HR outsourcing, answered</h2>
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
