import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Fitness HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for gyms and studios: trainer classification, certification tracking, and pay plans handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/fitness' },
  openGraph: {
    title: 'Fitness HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for gyms and studios: trainer classification, certification tracking, and pay plans handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/fitness',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Fitness HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for gyms and studios: trainer classification, certification tracking, and pay plans handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-fitness');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a gym or studio?',
    'Certified HR professionals handle your handbook, trainer classification reviews at the policy level, certification tracking, session and commission pay documentation, harassment policies, and coaching for the managers who run the floor.',
  ],
  [
    'Are my trainers employees or independent contractors?',
    'It depends on control, not the agreement title. Trainers who work your schedule, your prices, and your clients usually look like employees under federal tests. HR professionals help you document a defensible structure.',
  ],
  [
    'Does overtime apply to trainers paid per session?',
    'Usually yes for employee trainers. Session fees and commissions fold into the regular rate, which raises the overtime rate. The pay plan has to show that math in writing.',
  ],
  [
    'Is this a PEO for fitness businesses?',
    'No. There is no co-employment and no employer-of-record change. Your gym stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does fitness HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingFitnessPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Fitness', item: 'https://www.beghr.com/services/hr-outsourcing/fitness' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Fitness"
        title="Your trainers build strength. Who covers the employment side of the gym?"
        description="Trainer classification is the single biggest legal trap in fitness, and it travels with session pay math, certification tracking, minor employees at the front desk, and harassment policies for a hands-on workplace. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Fitness HR Problem</p>
              <h2>The workouts get the attention. The trainer contract gets the audit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before fitness complexity',
                  sub: 'Gyms and studios run lean, so HR lands on the owner or general manager, somewhere between the 5AM open and the evening rush.',
                },
                {
                  stat: '1 test',
                  label: 'Contractor status turns on control, not the contract',
                  sub: 'If the gym sets the schedule, the prices, and owns the clients, the trainer looks like an employee under the economic reality test, whatever the agreement says on page one.',
                },
                {
                  stat: 'Every cert',
                  label: 'CPR, AED, and training certifications all expire',
                  sub: 'Insurers and injury lawyers both check whether the trainer on the floor held current certifications on the day it mattered. Tracking has to live in a system, not in memory.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/flsa/misclassification" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, worker misclassification under the FLSA</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Fitness HR Compliance</p>
              <h2>The employment problems specific to fitness, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Trainer classification, the biggest trap in the industry</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Fitness runs on the independent contractor model, and much of it would not survive an audit. Federal and state tests look at economic reality: who sets the schedule, who sets session prices, who owns the client relationship, whose brand the trainer works under, and whether the trainer carries real opportunity for profit or loss. A trainer who teaches your programmed classes, at your rates, on your app, is an employee in most analyses, and misclassification means back wages, overtime, and payroll tax exposure for years. HR outsourcing reviews your model at the policy level and documents a structure you can actually defend.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Certification tracking for a floor full of expiration dates</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>CPR and AED cards, personal training certifications from NASM or ACE or NSCA, group fitness credentials, lifeguard certifications at clubs with pools: every one has its own renewal cycle, and your insurance and your defense in an injury claim both assume they are current. The question after an incident is always specific: was the trainer certified that day, and can you produce the record. HR outsourcing builds certification requirements into job descriptions, sets verification at hire and renewal tracking as written process, and keeps the documentation in personnel files that answer that question in minutes, not weeks.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Session and commission pay with the overtime math shown</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Employee trainers rarely earn a simple hourly wage. They stack a base rate for floor hours, per-session fees, sales commissions on training packages, and sometimes class-size bonuses. Under the FLSA all of it folds into the regular rate, and the overtime rate rises with it, a calculation many gyms have never run. Unpaid time between sessions and mandatory meetings off the clock compound the exposure. HR outsourcing documents each pay plan in writing, defines when commissions are earned, and coordinates with payroll so the blended overtime math happens automatically instead of surfacing for the first time in a wage claim.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Minor members are a waiver issue. Minor employees are federal law.</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Gyms think hard about members under 18 and hardly at all about employees under 18, and the law runs the other way. Teen front-desk staff, childcare room attendants, and junior coaches face federal hour limits and time-of-day rules for workers under sixteen, hazardous task bars under eighteen, and state work permit requirements on top. Meanwhile a sixteen-year-old supervising the kids club raises its own supervision and ratio questions. HR outsourcing separates the two cleanly: employment policies that scope what each minor employee can do and when, documented age verification, and manager training so scheduling software never outruns child labor law.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Harassment policies for a hands-on workplace</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Fitness work involves physical proximity and touch as part of the job: spotting lifts, correcting form, assisted stretching. That reality demands sharper policies than a generic template offers, not looser ones. A strong program defines professional touch and how consent is sought, sets locker room and personal relationship boundaries between staff and members, gives employees a complaint path that does not run through the person they are complaining about, and documents investigations consistently. Several states also mandate harassment training on a schedule. HR outsourcing writes the policy for how your floor actually works and keeps the training records audit-ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Fitness businesses big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Independent gyms and health clubs', body: 'Full-service clubs with trainers, front desk, childcare rooms, and maintenance staff, all on different pay structures.' },
                { title: 'Franchise fitness locations', body: 'Multi-unit owners who inherited brand standards but not employment policies, hiring across locations with one lean office.' },
                { title: 'Boutique studios', body: 'Yoga, pilates, barre, and cycling studios where nearly every instructor question is a classification question.' },
                { title: 'CrossFit and strength gyms', body: 'Coach-owners, part-time coaches with day jobs, and drop-in staffing that needs clean employment paperwork behind it.' },
                { title: 'Martial arts and gymnastics schools', body: 'Minor students everywhere, teen assistant coaches on payroll, and youth-safety screening that must be documented.' },
                { title: 'Climbing gyms and aquatics centers', body: 'Belay and lifeguard certifications with hard expiration dates, plus safety-adjacent discipline that has to hold up.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/fitness">managed payroll for fitness</Link>, built for session and commission pay. Tracking credentials in a clinical setting instead? See <Link href="/services/hr-outsourcing/healthcare">HR outsourcing for healthcare</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Fitness HR outsourcing, answered</h2>
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
