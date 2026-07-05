import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Healthcare HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for healthcare: credential tracking, exclusion screening, and leave administration handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/healthcare' },
  openGraph: {
    title: 'Healthcare HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for healthcare: credential tracking, exclusion screening, and leave administration handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/healthcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for healthcare: credential tracking, exclusion screening, and leave administration handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-healthcare');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a healthcare organization?',
    'Certified HR professionals handle your handbook, license and certification tracking policies, leave administration, exclusion screening procedures, and manager coaching, sized to a practice or agency instead of a hospital system.',
  ],
  [
    'Does HR outsourcing cover HIPAA compliance?',
    'It covers the employment side: confidentiality policies, training documentation, and personnel file separation. Your privacy and security officers still own clinical HIPAA compliance for patient data.',
  ],
  [
    'Can it handle clinical credential tracking?',
    'Yes at the policy and process level: license verification procedures, renewal tracking policies, and job descriptions tied to credentials, built and maintained by HR professionals who know healthcare employment.',
  ],
  [
    'Is this a PEO for medical practices?',
    'No. There is no co-employment and no employer-of-record change. Your practice stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does healthcare HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingHealthcarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://www.beghr.com/services/hr-outsourcing/healthcare' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Healthcare"
        title="Your clinicians care for patients. Who takes care of the employment side?"
        description="Credential tracking, exclusion screening, leave administration, and personnel files that brush up against HIPAA: healthcare HR carries more compliance weight per employee than almost any industry. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Healthcare HR Problem</p>
              <h2>Clinical operations get the attention. Employment compliance gets the lawsuit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before healthcare complexity',
                  sub: 'Practices and agencies under a few hundred employees rarely have the volume to justify that hire, so HR lands on the practice manager, on top of everything else.',
                },
                {
                  stat: 'Monthly',
                  label: 'How often OIG exclusion screening should run',
                  sub: 'Employing an excluded individual can trigger civil monetary penalties on every claim they touch. Screening against the OIG LEIE is an HR process that needs an owner and a paper trail.',
                },
                {
                  stat: '1 lapse',
                  label: 'One expired license working one shift is an incident',
                  sub: 'License and certification tracking fails quietly: a lapsed RN license or BLS card discovered after the fact means an unqualified-staffing finding waiting to happen.',
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
              Source: <a href="https://oig.hhs.gov/exclusions/" target="_blank" rel="noopener noreferrer">HHS Office of Inspector General, exclusions program</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Healthcare HR Compliance</p>
              <h2>The employment problems specific to healthcare, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>License and certification tracking that does not depend on memory</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every clinical hire arrives with a stack of credentials: state licenses, DEA registrations for prescribers, BLS/ACLS/PALS cards, specialty certifications. Each has its own renewal cycle, and letting one lapse while the employee keeps working creates unqualified-staffing exposure with surveyors, payers, and malpractice carriers. HR outsourcing builds the tracking process: verification at hire, documented renewal policies, job descriptions that state required credentials, and a personnel file structure that survives an audit. Your practice manager stops running credential renewals from a spreadsheet and sticky notes.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Exclusion screening with a paper trail</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The HHS Office of Inspector General maintains the List of Excluded Individuals and Entities, and employing an excluded person in any role that touches federal healthcare program business can trigger civil monetary penalties. OIG guidance points to screening at hire and monthly thereafter. The HR process questions are the ones that bite: who runs the check, where is it documented, what happens when a name matches, and who verifies it is actually your employee. HR outsourcing turns that into a written procedure with assigned ownership instead of an assumption that somebody in billing probably does it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Personnel files where employment records meet health information</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Healthcare employers hold employee records that carry their own confidentiality rules: FMLA medical certifications, ADA accommodation documentation, workers compensation injury records, vaccination and TB screening records. Mixing them into the general personnel file is a common finding, since ADA and FMLA rules require medical information kept in separate, confidential files with restricted access. HR outsourcing sets up the file architecture, the access rules, and the retention schedule, so a records request or agency audit does not turn into a scramble.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Leave administration for a workforce that cannot simply be short-staffed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Clinical staffing means a leave of absence is both a legal process and a coverage crisis. FMLA eligibility, state family and medical leave programs that now layer on top of federal rules in a growing list of states, intermittent leave for chronic conditions, and fitness-for-duty certifications on return: each step has documentation requirements and deadlines. On the Expert and Elite plans, HR professionals guide every leave from first notice to return, with the correct notices sent on time, while your managers plan clinical coverage instead of interpreting regulations.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Handbooks that reflect healthcare reality, not a generic template</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A healthcare handbook has sections a generic small-business template never touches: confidentiality obligations that reference patient information, drug testing and impairment policies for clinical roles, infection control and exposure procedures as employment policies, on-call and shift expectations, and social media rules written for people who work around protected health information. The Expert plan builds the handbook custom to your practices and keeps it current as federal and state law changes; Elite adds proactive alerts when a change hits your states.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Healthcare organizations big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Medical practices and physician groups', body: 'Multi-provider practices where the practice manager is also the de facto HR department, credential tracker, and leave administrator.' },
                { title: 'Dental and specialty practices', body: 'Clinical and front-office teams with certification requirements, high turnover in support roles, and no dedicated HR.' },
                { title: 'Outpatient clinics and surgery centers', body: 'Per-diem staff, RN and surgical tech credentialing, and survey-readiness that depends on clean personnel files.' },
                { title: 'Behavioral health organizations', body: 'Licensure levels from LCSW to MD, supervision documentation requirements, and confidentiality policies that carry real weight.' },
                { title: 'Home health and hospice agencies', body: 'Field staff across counties and states, aide certification tracking, and the leave complexity of a caregiver workforce. See the dedicated home health page as it ships.' },
                { title: 'Senior care communities', body: 'Background check requirements, staffing-ratio pressure, and a workforce where one HR miss becomes a regulatory finding.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/healthcare">managed payroll for healthcare</Link>. Need clinical roles filled? <Link href="/services/job-placement/healthcare">Healthcare job placement</Link> fills them for a flat fee per hire.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Healthcare HR outsourcing, answered</h2>
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
