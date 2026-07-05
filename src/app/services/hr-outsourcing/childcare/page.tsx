import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Childcare HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for childcare: ratio-driven staffing rules, background checks, and training-hour tracking handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/childcare' },
  openGraph: {
    title: 'Childcare HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for childcare: ratio-driven staffing rules, background checks, and training-hour tracking handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/childcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Childcare HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for childcare: ratio-driven staffing rules, background checks, and training-hour tracking handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-childcare');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a childcare center?',
    'Certified HR professionals handle your handbook, background check procedures, training-hour tracking policies, mandated reporter documentation, onboarding packets, and manager coaching, sized to a center or small group instead of a national chain.',
  ],
  [
    'Does it cover state licensing compliance?',
    'It covers the employment side of licensing: qualification documentation, background check files, training records, and personnel file structure. Your director still owns the operational licensing relationship with the state.',
  ],
  [
    'Can it keep up with background check renewals?',
    'Yes at the policy and process level: written procedures for each required check, renewal tracking, provisional-hire supervision rules, and documentation that shows a licensor every check ran on time.',
  ],
  [
    'Is this a PEO for childcare centers?',
    'No. There is no co-employment and no employer-of-record change. Your center stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does childcare HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingChildcarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Childcare', item: 'https://www.beghr.com/services/hr-outsourcing/childcare' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Childcare"
        title="Your teachers care for children. Who takes care of the employment side?"
        description="Ratio rules that turn a callout into a compliance event, background checks with renewal clocks, training hours that must be documented per teacher per year: childcare HR is licensing compliance wearing an employment badge. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Childcare HR Problem</p>
              <h2>The classroom gets the attention. The personnel file gets the licensing citation.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, on childcare margins',
                  sub: 'Centers run on tuition math that rarely supports a dedicated HR hire, so HR lands on the director, between classroom coverage and parent calls.',
                },
                {
                  stat: '5 checks',
                  label: 'Background check components federal rules require',
                  sub: 'FBI fingerprints, state criminal history, sex offender registry, child abuse registry, and checks in prior states of residence. Each needs documentation and a renewal clock.',
                },
                {
                  stat: '1 callout',
                  label: 'One absent teacher can put a classroom out of ratio',
                  sub: 'State ratio and qualification rules make staffing a compliance function. Who can float, who counts toward ratio, and who is qualified to lead a room are HR questions.',
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
              Source: <a href="https://www.acf.hhs.gov/occ" target="_blank" rel="noopener noreferrer">HHS Administration for Children and Families, Office of Child Care</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Childcare HR Compliance</p>
              <h2>The employment problems specific to childcare, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Ratio and qualification rules as staffing constraints</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every state sets teacher-to-child ratios by age group and qualification requirements by role, which means a childcare schedule is a compliance document. A lead teacher resignation is not just a vacancy; it can determine whether a classroom legally opens Monday. HR outsourcing builds the employment infrastructure that makes ratios manageable: job descriptions tied to state qualification levels, documented float and substitute policies, attendance policies with teeth that still survive a wrongful termination claim, and hiring paperwork that captures credentials on day one. Your director stops rebuilding the staffing puzzle from memory every time someone calls out.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background checks and registry checks, per state, on schedule</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal CCDBG rules push states to require comprehensive checks for childcare staff: FBI fingerprints, state criminal history, sex offender registries, child abuse and neglect registries, and equivalent checks in every state the person lived in over the past five years, with renewals on a five-year cycle. States add their own layers, including rules on when a provisional hire can work under supervision while results are pending. The HR failure mode is quiet: a renewal missed, a prior state skipped, a file with no proof. HR outsourcing turns the checks into written procedure with tracking, ownership, and audit-ready documentation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>CPR, first aid, and annual training hours that actually get tracked</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Licensing rules require CPR and first aid certification, often with a minimum number of certified staff present at all times, plus annual training hours per employee in specified topics: health and safety, safe sleep, medication administration, and more depending on the state. Certifications expire on individual clocks, training hours reset annually, and a licensor will ask for the records by name. HR outsourcing sets up the tracking policies, the documentation standards, and the personnel file structure so every teacher file shows current cards and completed hours, and expirations surface before a licensing visit finds them instead.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Mandated reporter policies with training you can prove</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Childcare staff are mandated reporters of suspected abuse and neglect in every state, and the employer&apos;s obligations go beyond a line in the handbook. Staff need a written policy that states the duty, the reporting procedure, and the strict prohibition on retaliation against a reporter; they need training on recognizing signs; and the center needs documentation that each employee received both. When an incident happens, the first records requested are the policy, the acknowledgment signatures, and the training log. HR outsourcing drafts the policy for your state, builds the acknowledgment into onboarding, and keeps the training documentation current and retrievable.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Turnover paperwork at childcare margins</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Childcare turnover runs among the highest of any industry, and every departure and hire drags the full compliance load with it: background checks, qualification verification, training plans, handbook acknowledgments, and state new hire reporting, all on margins that leave no room for a dedicated coordinator. Recruiting never really stops, so the paperwork machine cannot either. HR outsourcing standardizes the cycle: compliant offer letters, onboarding packets that collect every required document once, clean separation processes, and files that stay licensor-ready no matter how fast the roster turns. The director gets hours back; the talent acquisition treadmill stops generating compliance debt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Childcare operations big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Independent childcare centers', body: 'Single-site centers where the director is also HR, background check coordinator, and training tracker, usually during nap time.' },
                { title: 'Multi-site childcare groups', body: 'Two to twenty locations needing one handbook framework, consistent check procedures, and files that pass any site inspection.' },
                { title: 'Preschools and pre-K programs', body: 'Degreed lead teachers, qualification tiers, and academic-year staffing rhythms layered on top of licensing rules.' },
                { title: 'Montessori and specialty schools', body: 'Credentialed guides with their own certification tracks, plus the same state background check and training-hour obligations as everyone else.' },
                { title: 'After-school and enrichment programs', body: 'Part-time staff, split shifts, minor employees as junior counselors, and seasonal enrollment swings.' },
                { title: 'Faith-based and nonprofit programs', body: 'Volunteer and employee lines that need drawing, board-governed policies, and licensing obligations that apply regardless of mission.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/childcare">managed payroll for childcare</Link>. Caring for the other end of the age curve? See <Link href="/services/hr-outsourcing/senior-care">HR outsourcing for senior care</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Childcare HR outsourcing, answered</h2>
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
