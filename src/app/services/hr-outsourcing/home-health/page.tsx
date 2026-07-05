import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Home Health HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for home health: aide credential files, EVV-era policies, field-staff handbooks, and leave handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/home-health' },
  openGraph: {
    title: 'Home Health HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for home health: aide credential files, EVV-era policies, field-staff handbooks, and leave handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/home-health',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Health HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for home health: aide credential files, EVV-era policies, field-staff handbooks, and leave handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-home-health');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a home health agency?',
    'Certified HR professionals build your handbook for a field workforce, aide competency and credential file procedures, compliant hiring paperwork, and guide leave, discipline, and terminations.',
  ],
  [
    'Does it help with caregiver overtime rules?',
    'At the policy level, yes: written pay policies reflecting the FLSA home care rules on overtime and travel time between clients, plus state overlays, so your practices are documented and defensible.',
  ],
  [
    'Can it manage aide personnel files for survey?',
    'Yes: file structure, competency evaluation documentation, in-service hour tracking procedures, and TB screening records organized the way surveyors expect to find them.',
  ],
  [
    'Is this a PEO for home health agencies?',
    'No. There is no co-employment and no employer-of-record change. Your agency stays the employer; the HR professionals support your office team. Powered by isolved.',
  ],
  [
    'What does home health HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingHomeHealthPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Home Health', item: 'https://www.beghr.com/services/hr-outsourcing/home-health' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Home Health"
        title="Your workforce is in a hundred living rooms. Your HR is in a filing cabinet."
        description="Caregivers you rarely see in person, credential files surveyors always ask for, overtime rules written specifically for home care, and turnover that never rests: home health HR is field-shaped and unforgiving. BEG HR outsourcing, powered by isolved, handles it for a fraction of an in-house hire."
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
              <p className="eyebrow">The Home Health HR Problem</p>
              <h2>Field care runs on trust. Compliance runs on files you may not have.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager on home care margins',
                  sub: 'Reimbursement rates do not fund administrative headcount, so HR lands on the administrator or the owner between intake, scheduling, and billing.',
                },
                {
                  stat: '2015',
                  label: 'When the FLSA companionship exemption narrowed',
                  sub: 'Third-party home care employers owe minimum wage and overtime to most caregivers, including travel time between clients. Agencies still running pre-2015 assumptions carry silent liability.',
                },
                {
                  stat: '12 hrs/yr',
                  label: 'In-service training many states require per aide',
                  sub: 'Multiply by every aide on the roster and training-hour tracking becomes a real system, or a repeating survey finding.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/direct-care" target="_blank" rel="noopener noreferrer">US Department of Labor, home care and direct care workers under the FLSA</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Home Health HR Compliance</p>
              <h2>The employment problems specific to home health, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Pay policies built on the post-2015 home care rules</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Since the Department of Labor narrowed the companionship exemption, third-party agencies owe most caregivers minimum wage and overtime, and travel time between client visits during the workday is compensable. Live-in arrangements, sleep time on extended shifts, and per-visit pay for clinical staff each carry their own federal rules, with state overlays that are often stricter. The exposure compounds quietly, one aide and one week at a time, until a wage claim opens the whole roster. HR outsourcing documents pay policies that match the current rules, so the practices you run are practices you can defend.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Aide files that pass survey: competency, training hours, TB screening</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Home health aide files have a required anatomy: certification or training program documentation, competency evaluations, annual in-service hours, TB screening records, and for Medicare-certified agencies the elements surveyors check against the Conditions of Participation. The failure mode is drift: files complete at hire and stale within a year as renewals lapse and training hours go unlogged. HR outsourcing builds the file standard, the renewal and training tracking procedures, and the audit rhythm that keeps the roster survey-ready instead of survey-scrambled.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Managing people you rarely see: policies for a distributed field workforce</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Field employment breaks office assumptions. Discipline happens over the phone about events nobody from the office witnessed. Client complaints arrive secondhand. Timekeeping disputes involve EVV records, client signatures, and drive time. A field-shaped handbook covers what office templates never do: visit documentation expectations, client home conduct, gift and boundary policies, no-show and late-cancellation procedures, mileage and travel-time rules, and communication expectations between visits. The Expert plan writes that handbook around how your agency actually operates and keeps it current across your states.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Screening and registry checks for in-home workers</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Sending workers into private homes raises the screening bar: state-required criminal checks, abuse and neglect registry checks, nurse aide registry verification, and in many states periodic re-screening. Negligent-hiring claims name the agency when something goes wrong in a client home, and the defense is the documented screening process you ran before the first visit. HR outsourcing builds the state-correct screening procedure, the adverse-action process under the FCRA when a check disqualifies, and the documentation trail that protects the agency.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Leave and injury in a physical, distributed job</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Caregiving injuries happen in client homes, without witnesses, on schedules HR never sees. Workers compensation claims, FMLA where the agency is covered, ADA accommodation requests, and state paid leave programs arrive tangled together, and mishandling the interaction is where agencies lose. On the Expert and Elite plans, HR professionals run each leave end to end: the notices, the certifications, the return-to-work steps, coordinated with your comp carrier and your scheduler instead of fought over later.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Home-based care operators with field-scale HR and office-scale staffing</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Medicare-certified home health', body: 'Conditions of Participation, aide competency files, and clinical staff credentialing under survey pressure.' },
                { title: 'Private-duty home care', body: 'Hourly caregivers across dozens of client homes, with wage-and-hour exposure as the number one risk.' },
                { title: 'Hospice agencies', body: 'Interdisciplinary teams, volunteers with their own file requirements, and bereavement-sensitive employment decisions.' },
                { title: 'Pediatric home care', body: 'Private-duty nursing files, family-employer dynamics, and screening standards families rely on.' },
                { title: 'Consumer-directed program FMSes', body: 'Fiscal intermediaries handling employment paperwork for participant-directed workers at volume.' },
                { title: 'Multi-branch agencies', body: 'Several offices, several states, one HR standard needed across every branch and payer mix.' },
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
              Caregiver overtime math the bigger fire? That is <Link href="/services/managed-payroll/home-health">managed payroll for home health</Link>. Also in this silo: <Link href="/services/hr-outsourcing/senior-care">senior care HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Home health HR outsourcing, answered</h2>
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
