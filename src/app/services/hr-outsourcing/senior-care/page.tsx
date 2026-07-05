import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Senior Care HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for senior care: background check compliance, aide certification tracking, and turnover paperwork handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/senior-care' },
  openGraph: {
    title: 'Senior Care HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for senior care: background check compliance, aide certification tracking, and turnover paperwork handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/senior-care',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Senior Care HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for senior care: background check compliance, aide certification tracking, and turnover paperwork handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-senior-care');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a senior care community?',
    'Certified HR professionals build your handbook, background check and certification tracking procedures, abuse-reporting policies, and leave administration, and coach your administrators through discipline and terminations.',
  ],
  [
    'Does it handle state background check requirements?',
    'At the process level, yes: written screening procedures matched to your state, registry check documentation, disqualifying-offense handling, and re-check schedules where required.',
  ],
  [
    'Can it track CNA and aide certifications?',
    'Yes: verification at hire, renewal tracking policies, and job descriptions tied to required certifications, so a lapsed credential surfaces before a survey finds it.',
  ],
  [
    'Is this a PEO for senior living operators?',
    'No. There is no co-employment and no employer-of-record change. Your community stays the employer; the HR professionals support your administrators. Powered by isolved.',
  ],
  [
    'What does senior care HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingSeniorCarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Senior Care', item: 'https://www.beghr.com/services/hr-outsourcing/senior-care' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Senior Care"
        title="Your residents depend on your staff. Your staff files depend on nobody."
        description="Background checks with state-specific rules, aide certifications on renewal clocks, mandatory reporting policies, and turnover that never slows down: senior care HR is survey-critical and chronically understaffed. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house hire."
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
              <p className="eyebrow">The Senior Care HR Problem</p>
              <h2>Every personnel file is one survey away from becoming a finding.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager most communities cannot fund',
                  sub: 'Margins in senior care do not leave room for administrative headcount, so HR falls to the administrator or executive director between everything else.',
                },
                {
                  stat: 'Pre-hire',
                  label: 'When background screening has to be complete and documented',
                  sub: 'States require registry checks and criminal screening before direct care begins. A missing check found at survey is an immediate citation, not a paperwork note.',
                },
                {
                  stat: '50%+/yr',
                  label: 'Caregiver turnover many operators absorb',
                  sub: 'Every departure and replacement is a full compliance cycle: screening, certification verification, onboarding paperwork, and separation documentation.',
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
              Source: <a href="https://www.cms.gov/medicare/health-safety-standards/certification-compliance/nursing-homes" target="_blank" rel="noopener noreferrer">CMS nursing home certification and compliance</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Senior Care HR Compliance</p>
              <h2>The employment problems specific to senior care, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Background screening that matches your state, not a generic checklist</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Senior care screening is state law, and the details differ everywhere: which registries get checked (nurse aide registry, adult abuse registry, sex offender registry), whether fingerprint-based checks are required, which offenses disqualify and for how long, whether provisional employment is allowed while results are pending, and how often re-checks run. Getting it wrong in either direction hurts: skip a required check and a survey citation follows; over-exclude and you face fair-hiring and ban-the-box exposure. HR outsourcing builds the written screening procedure for your state, the documentation trail, and the individualized-assessment process for records that need judgment.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>CNA, med tech, and aide certification tracking</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Direct care staffing runs on certifications with renewal clocks: CNA registry status, medication aide or med tech certifications, CPR and first aid cards, dementia care training hours where states mandate them, and annual in-service requirements measured in hours per caregiver per year. Each lapse is a staffing-qualification finding waiting for a surveyor. HR outsourcing sets up verification at hire, renewal tracking procedures, training documentation standards, and job descriptions that state required credentials, so qualification status is a report, not an archaeology project.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Mandatory reporting and abuse-prevention policies with teeth</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every state makes senior care staff mandatory reporters of suspected abuse, neglect, and exploitation, with short reporting windows and personal liability for failures. The employment-side requirements are concrete: written policies that name reporting channels and deadlines, training documented at hire and annually, anti-retaliation protections for staff who report, and disciplinary procedures for violations that are applied consistently. When an incident happens, the first records requested are the policy, the training log, and the personnel files of everyone involved. HR outsourcing makes sure those three things exist and match.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Leave administration in a ratio-driven workplace</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Caregiving is physical work with real injury rates, which means workers compensation leave, FMLA, ADA accommodation requests, and state paid leave programs all show up regularly, and they interact. A back injury can be a comp claim, an FMLA event, and an accommodation conversation at the same time, each with its own paperwork and deadlines, while the schedule still has to meet staffing expectations. On the Expert and Elite plans, HR professionals run each leave from first notice to return-to-work, keeping the legal steps clean while your administrators solve coverage.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Wage and hour rules for 24-hour care models</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Around-the-clock care creates pay questions most employers never face: sleep-time deductions for shifts of 24 hours or more and the agreement and interruption rules that govern them, meal periods that are not really duty-free on a memory care unit, shift differentials, and overtime across schedules that do not fit neat workweeks. Each has FLSA rules plus state overlays that are frequently stricter. HR outsourcing puts written, state-correct policies behind your pay practices so the practices you already run are the practices you can defend.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Senior care operators with survey-critical HR and no HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Assisted living communities', body: 'State-licensed communities where the executive director carries HR alongside census, families, and surveys.' },
                { title: 'Memory care communities', body: 'Dementia training mandates, higher staffing intensity, and policies that surveyors read closely.' },
                { title: 'Skilled nursing facilities', body: 'CMS survey exposure, nurse aide registry compliance, and in-service hour tracking across large hourly teams.' },
                { title: 'Independent living with services', body: 'Hybrid staffing models where which rules apply depends on what each role actually does.' },
                { title: 'Adult day programs', body: 'Part-time and variable-hour staff, transportation roles, and screening rules that match residential care.' },
                { title: 'CCRCs and multi-community operators', body: 'Multiple license types under one operator, each with its own staffing and screening rules, needing one consistent HR standard.' },
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
              Payroll across differentials and overnight shifts the bigger problem? That is <Link href="/services/managed-payroll/senior-care">managed payroll for senior care</Link>. Also in this silo: <Link href="/services/hr-outsourcing/healthcare">healthcare HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Senior care HR outsourcing, answered</h2>
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
