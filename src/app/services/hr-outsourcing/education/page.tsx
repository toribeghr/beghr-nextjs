import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Education HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for schools: background checks, certification tracking, and academic-year contracts handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/education' },
  openGraph: {
    title: 'Education HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for schools: background checks, certification tracking, and academic-year contracts handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/education',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Education HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for schools: background checks, certification tracking, and academic-year contracts handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-education');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a school?',
    'Certified HR professionals handle your handbook, background check and fingerprinting procedures, certification tracking policies, academic-year contract templates, mandated reporter documentation, and coaching for the administrators who manage staff.',
  ],
  [
    'Does it cover teacher certification tracking?',
    'Yes at the policy and process level: verification at hire, renewal tracking, assignment rules tied to certification areas, and personnel files that show every teacher qualified for the room they teach.',
  ],
  [
    'Can it help with academic-year contracts and summer pay?',
    'Yes. Contract templates, pay-spread election policies, mid-year resignation terms, and non-renewal procedures are exactly the documents HR professionals build and keep current for schools.',
  ],
  [
    'Is this a PEO for schools?',
    'No. There is no co-employment and no employer-of-record change. Your school stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does education HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingEducationPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Education', item: 'https://www.beghr.com/services/hr-outsourcing/education' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Education"
        title="Your teachers run classrooms. Who runs the employment side of the school?"
        description="Fingerprint clearances before day one, certifications with renewal clocks, contracts that follow an academic year instead of a calendar, and student workers with hour limits: school HR has rules no generic handbook anticipates. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Education HR Problem</p>
              <h2>Instruction gets the attention. The personnel file gets the audit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, on a school budget',
                  sub: 'Independent schools and small networks rarely fund that role, so HR lands on the head of school or the business manager, on top of enrollment season.',
                },
                {
                  stat: 'Day one',
                  label: 'Clearances must land before the first bell',
                  sub: 'States require fingerprint-based checks before school staff start work. A teacher in a classroom with a pending check is a finding, and sometimes a headline.',
                },
                {
                  stat: '10 or 12',
                  label: 'Months of pay for an academic year of work',
                  sub: 'Summer pay spread elections, mid-year resignations, and non-renewals all turn on contract language most schools inherited and no one has reviewed in years.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/youthrules" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, YouthRules, young worker protections</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Education HR Compliance</p>
              <h2>The employment problems specific to schools, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background checks and fingerprinting, before the first day</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every state requires criminal background screening for school employees, most with fingerprint-based checks against state and FBI databases, and many extend the requirement to substitutes, coaches, aides, and contractors who work around students. The rules differ on timing, renewal, and who pays, but they agree on one thing: the check clears before the employee starts. The HR failure is procedural, an offer letter that starts someone Monday when clearance takes three weeks, or a coach who slipped through because athletics hired informally. HR outsourcing builds the screening workflow into hiring so no role, however casual, bypasses it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Teacher certification tracking tied to actual assignments</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Certifications expire, endorsements cover specific subjects and grade bands, and accreditors check whether the person in the room matches the credential on file. Schools drift out of compliance one schedule change at a time: the science teacher covering a math section, the provisional certificate that quietly lapsed, the professional development hours nobody logged. HR outsourcing sets up certification tracking as an employment process: verification at hire, renewal calendars, job descriptions and assignment policies that reference required credentials, and files that answer an accreditation review without a scramble. Certification stays a known quantity instead of an annual surprise during scheduling week.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Academic-year contracts and summer pay elections as written policy</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Educators work ten months and get paid over ten or twelve, and that ordinary arrangement hides real complexity: pay spread elections that have to be documented, what happens to accrued but unpaid amounts when a teacher resigns in March, non-renewal notice deadlines that state law or the contract itself imposes, and benefits continuation across the summer. Schools that handle this with tradition instead of documents discover the gaps at the worst time, in a dispute with a departing teacher. HR outsourcing builds contract templates, election forms, and separation procedures that make the academic calendar an administrative rhythm instead of a liability.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Student workers and minors on the payroll</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Schools employ minors constantly: students in work-study roles, teen lifeguards at the school pool, junior camp counselors in summer programs, and student aides in the front office. Federal child labor rules cap hours and times of day for workers under sixteen and bar hazardous tasks for anyone under eighteen, while states add work permits and their own hour limits during school weeks. The school that teaches the rules still has to follow them as an employer. HR outsourcing scopes each minor role in writing, tracks permits and age documentation, and gives supervisors clear schedules that stay inside the lines.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Mandated reporting and staff-student boundary policies</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>School employees are mandated reporters in every state, and the obligation belongs to the individual, not the institution: a staff member cannot satisfy it by telling the principal and stopping there. The employment side is policy and proof: a written reporting procedure, training on recognition and reporting with documented completion, and boundary policies that govern staff-student communication, including texting, social media, closed-door meetings, and off-campus contact. When an allegation surfaces, investigators ask for the policy, the signatures, and the training log first. HR outsourcing drafts those documents for your state, builds them into onboarding, and keeps the records retrievable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Schools big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Private and independent schools', body: 'Faculty contracts, tuition-remission questions, and a head of school doing HR between admissions events and board meetings.' },
                { title: 'Charter school operators', body: 'Public accountability with private-employer mechanics, authorizer audits, and growth that outpaces the back office.' },
                { title: 'Faith-based schools', body: 'Ministerial exception questions layered on ordinary school compliance, plus religious preference in hiring done lawfully.' },
                { title: 'Early learning academies', body: 'Where education rules meet childcare licensing: ratios, training hours, and background checks with their own renewal cycles.' },
                { title: 'Tutoring and enrichment companies', body: 'Part-time instructors across sites, classification questions, and recruiting cycles that peak every semester.' },
                { title: 'Trade and career schools', body: 'Instructors hired from industry, credential and license tracking, and adult students working alongside teen ones.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/education">managed payroll for education</Link>, including pay-spread handling. Comparing credential-heavy industries? See <Link href="/services/hr-outsourcing/healthcare">HR outsourcing for healthcare</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Education HR outsourcing, answered</h2>
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
