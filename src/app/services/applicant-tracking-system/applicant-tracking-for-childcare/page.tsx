import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Childcare Centers',
  description: 'Background checks and ratio compliance leave childcare centers understaffed. See how an applicant tracking system helps you hire faster and stay compliant.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-childcare' },
  openGraph: {
    title: 'Applicant Tracking for Childcare Centers',
    description: 'Background checks and ratio compliance leave childcare centers understaffed. See how an applicant tracking system helps you hire faster and stay compliant.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-childcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Childcare Centers', description: 'Background checks and ratio compliance leave childcare centers understaffed. See how an applicant tracking system helps you hire faster and stay compliant.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-childcare');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for childcare hiring?',
    'An applicant tracking system for childcare hiring is software that collects applications for lead teachers, aides, and support staff into one tracked pipeline, instead of scattered emails, paper files, and job board logins.',
  ],
  [
    'Can it help with background check and credentialing requirements?',
    'isolved Attract & Hire organizes candidate information and hiring workflow steps so background check and credential requirements are captured consistently before a hire can start, instead of being chased down after someone is already on the floor.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles, workflow, and team so it works from day one.',
  ],
  [
    'We run multiple centers. Does that work?',
    'Yes. The system is configured around your roles and workflow, so multi-center hiring runs through the same tracked pipeline instead of separate spreadsheets per location.',
  ],
  [
    'How fast can a childcare provider get this running?',
    'Timelines vary by organization size and role complexity, but the model is the same for every client: BEG configures the system to your roles and workflow, then your team starts posting and tracking candidates in one pipeline.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForChildcarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Understaffed classrooms and ratio risk start with a hiring process that cannot keep up',
            description: 'Background checks and ratio compliance leave childcare centers understaffed. See how an applicant tracking system helps you hire faster and stay compliant.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-childcare',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Childcare', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-childcare' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Childcare"
        title="Understaffed classrooms and ratio risk start with a hiring process that cannot keep up"
        description="Lead teachers and aides leave faster than most centers can replace them, and every background check or credential step adds days before a new hire can even start. isolved Attract & Hire gets applicants into one tracked pipeline so your team can move candidates forward and keep ratios covered instead of scrambling before every shift."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For every classroom and support role' },
          { value: 'Compliance ready', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>Every open classroom seat is a ratio problem waiting to happen</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'High turnover',
                  label: 'Lead teachers and aides churn constantly',
                  sub: 'Childcare staff turn over at a fast pace, and a scattered hiring process cannot refill classroom seats quickly enough to keep up.',
                },
                {
                  stat: 'Pre-start steps',
                  label: 'Background checks and credentials come before day one',
                  sub: 'Every hire needs background check and credentialing steps cleared before they can start, and those steps get lost or delayed without a system tracking them.',
                },
                {
                  stat: 'Ratio risk',
                  label: 'Understaffing is a compliance problem, not just a scheduling one',
                  sub: 'An unfilled classroom role does not wait quietly. It shows up as ratio violations, burned-out staff, and risk that reaches licensing inspectors directly.',
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
              <a href="https://www.childcareaware.org/" target="_blank" rel="noopener noreferrer">Child Care Aware of America</a>, which tracks workforce shortages and staffing challenges across the childcare sector
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on childcare worker employment, among the highest-turnover occupations tracked.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applications to a filled seat in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and workflow',
                  body: 'Lead teacher, aide, and support roles across every center get built into the system around how your organization actually hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open classroom role, across every center, shows up in the same place instead of scattered inboxes and paper applications.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the seat faster',
                  body: 'Hiring managers move candidates through the pipeline together, so the open classroom role gets filled instead of sitting on a to-do list while ratios tighten.',
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
              <h2>Built for how childcare centers actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'High-turnover classroom roles',
                  body: 'Lead teacher and aide openings move through the same tracked pipeline instead of competing for attention in separate center inboxes.',
                },
                {
                  title: 'Background checks and credentials',
                  body: 'Hiring workflow steps are configured to capture background check and credentialing details consistently, before someone starts, not after.',
                },
                {
                  title: 'Ratio and staffing compliance',
                  body: 'A single pipeline gives directors visibility into every open role, so ratios get covered by filling the position, not by stretching the staff already in the room.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for childcare</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/childcare">HCM software for childcare centers</Link>: manage the full employee lifecycle after the hire.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> for isolved Attract & Hire.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for your center</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> for childcare employers.
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
              <h2>Applicant tracking for childcare, answered</h2>
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
