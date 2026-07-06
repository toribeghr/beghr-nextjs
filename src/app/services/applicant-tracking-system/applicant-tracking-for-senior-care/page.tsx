import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Senior Care Hiring',
  description: 'A caregiver shortage and high turnover leave shifts and residents underserved. See how an applicant tracking system helps senior care teams hire faster.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-senior-care' },
  openGraph: {
    title: 'Applicant Tracking for Senior Care Hiring',
    description: 'A caregiver shortage and high turnover leave shifts and residents underserved. See how an applicant tracking system helps senior care teams hire faster.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-senior-care',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Senior Care Hiring', description: 'A caregiver shortage and high turnover leave shifts and residents underserved. See how an applicant tracking system helps senior care teams hire faster.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-senior-care');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for senior care hiring?',
    'An applicant tracking system for senior care hiring is software that collects applications for caregivers, CNAs, and aides into one tracked pipeline, instead of scattered calls, paper files, and separate logins per community.',
  ],
  [
    'Can it help track credentials and background checks during hiring?',
    'isolved Attract & Hire organizes candidate information and hiring workflow steps so certification, license, and background-check details are captured consistently during the application and offer stages, instead of being chased down after someone already started.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles, shifts, and communities.',
  ],
  [
    'We hire across multiple communities and shifts. Does that work?',
    'Yes. Roles, shifts, and community locations are configured into the system, so applicants for one community and applicants for another both land in the same tracked pipeline instead of separate spreadsheets per site.',
  ],
  [
    'How does this help with the caregiver shortage?',
    'A single pipeline gives hiring managers visibility into every applicant for every open shift, so candidates move faster toward an offer instead of drifting to whichever employer responds first.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForSeniorCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'A caregiver shortage is leaving shifts open and residents underserved',
            description: 'A caregiver shortage and high turnover leave shifts and residents underserved. See how an applicant tracking system helps senior care teams hire faster.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-senior-care',
          }),
        }}
      />
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
              { '@type': 'ListItem', position: 2, name: 'Applicant Tracking System', item: 'https://www.beghr.com/services/applicant-tracking-system' },
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Senior Care', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-senior-care' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Senior Care"
        title="A caregiver shortage is leaving shifts open and residents underserved"
        description="Caregivers, CNAs, and aides are harder to find and keep than almost any other role, and every open shift lands directly on the residents who need consistent care. isolved Attract & Hire gets every applicant into one tracked pipeline, built around your roles and communities, so your team can advance candidates and cover the shift before the next one opens up."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'All 50', label: 'States served' },
          { value: 'One pipeline', label: 'Every applicant, every community' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An open caregiving shift is not just a staffing gap. It is a resident going underserved</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Chronic shortage',
                  label: 'Caregivers and aides are in short supply everywhere',
                  sub: 'Demand for direct care workers keeps growing while the pool of available caregivers has not kept pace, and a slow process loses candidates to whoever hires first.',
                },
                {
                  stat: 'Very high turnover',
                  label: 'The same roles reopen constantly',
                  sub: 'Caregiver and aide roles turn over often, and a hiring process built for occasional openings cannot keep up with the pace of re-hiring.',
                },
                {
                  stat: 'Credential heavy',
                  label: 'Every hire carries certification and background-check steps',
                  sub: 'Senior care roles come with credential checks and compliance steps layered on top of the normal hiring process, and those steps get lost without a system tracking them.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources:{' '}
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS Job Openings and Labor Turnover Survey (JOLTS)</a>, which shows healthcare and social assistance with among the highest job-opening levels of any industry
              {' '}and{' '}
              <a href="https://www.phinational.org/policy-research/key-facts-faq/" target="_blank" rel="noopener noreferrer">PHI National's Direct Care Workforce key facts</a> on the ongoing direct care workforce shortage.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applicants to a covered shift in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and workflow',
                  body: 'Caregiver, CNA, and aide roles, shifts, and community locations get built into the system around how your organization actually staffs care, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open shift, across every community, shows up in one place instead of scattered calls and paper files.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the shift faster',
                  body: 'Hiring managers and care leads move candidates through the pipeline together, so the shift gets covered and residents keep getting consistent care.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT THIS SOLVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What This Solves</p>
              <h2>Built for how senior care organizations actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Caregiver and aide shortage',
                  body: 'A tracked pipeline means candidates move faster through your process, so you are not losing scarce caregivers to whoever responds first.',
                },
                {
                  title: 'Credential and background-check tracking',
                  body: 'Hiring workflow steps are configured to capture certification, license, and background-check details consistently, before someone starts, not after.',
                },
                {
                  title: 'Open shifts affecting resident care',
                  body: 'A single pipeline gives hiring managers visibility into every open shift, so coverage gets solved by filling the position, not by stretching the staff already on the floor.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Go Deeper</p>
              <h2>More on applicant tracking and the rest of the BEG stack</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>See the platform itself</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/isolved-attract-hire">Inside isolved Attract & Hire</Link>: what the platform actually does.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> for isolved Attract & Hire.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for your care team</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> for senior care employers.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need the role filled for you?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/job-placement">Job placement services</Link>: talent acquisition as an outcome, not a project.
                </p>
              </div>
            </div>
            <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/services/applicant-tracking-system" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Applicant Tracking System overview</Link>
            </p>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Ready?</p>
              <h2>See your isolved Attract & Hire price before you talk to anyone</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Applicant tracking for senior care, answered</h2>
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
