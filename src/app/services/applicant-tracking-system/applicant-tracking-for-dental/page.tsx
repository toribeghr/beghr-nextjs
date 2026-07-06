import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Dental Practice Hiring',
  description: 'A hygienist and assistant shortage strains practices with no dedicated HR. See how an applicant tracking system helps dental teams hire, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-dental' },
  openGraph: {
    title: 'Applicant Tracking for Dental Practice Hiring',
    description: 'A hygienist and assistant shortage strains practices with no dedicated HR. See how an applicant tracking system helps dental teams hire, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-dental',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Dental Practice Hiring', description: 'A hygienist and assistant shortage strains practices with no dedicated HR. See how an applicant tracking system helps dental teams hire, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-dental');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for dental practice hiring?',
    'An applicant tracking system for dental practice hiring is software that collects applications for hygienists, assistants, and front-office staff into one tracked pipeline, instead of a stack of resumes and voicemails the office manager handles between patients.',
  ],
  [
    'We are a small practice with no dedicated HR person. Is this still worth it?',
    'Yes. isolved Attract & Hire is built for exactly this situation. BEG configures the system around your roles and workflow, so a small practice gets a real hiring process without needing to hire an HR person to run it.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your clinical and front-office roles.',
  ],
  [
    'Can it help track licenses and credentials during hiring?',
    'isolved Attract & Hire organizes candidate information and workflow steps so license and credential details are captured consistently during the application and offer stages, instead of being chased down after someone already started.',
  ],
  [
    'We hire both clinical roles and front-office roles. Does that work?',
    'Yes. Hygienist, assistant, and front-office roles are all configured into the same system, so every applicant moves through one tracked pipeline no matter which role they applied for.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForDentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'A hygienist and assistant shortage is stretching your practice thin, and there is no HR team to fix it',
            description: 'A hygienist and assistant shortage strains practices with no dedicated HR. See how an applicant tracking system helps dental teams hire, nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-dental',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Dental', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-dental' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Dental"
        title="A hygienist and assistant shortage is stretching your practice thin, and there is no HR team to fix it"
        description="A small dental practice does not have a recruiting department, but it still has to compete for hygienists and assistants in a tight market, on top of hiring front-office staff. isolved Attract & Hire gets every applicant into one tracked pipeline built around your roles, so a practice with no dedicated HR still runs a real hiring process instead of chasing resumes between patients."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For clinical and front-office roles' },
          { value: 'No HR team needed', label: 'Configured to your practice by BEG' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An open hygienist or assistant seat does not just cost money. It costs chair time</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Hygienist shortage',
                  label: 'Makes every opening a competition',
                  sub: 'Hygienists and assistants are in short supply nationwide, and a slow, informal process loses candidates to whichever practice responds first.',
                },
                {
                  stat: 'No dedicated HR',
                  label: 'Means the owner or office manager does it all',
                  sub: 'Most practices do not have a recruiter. Hiring gets squeezed between patient care and everything else the office manager already handles.',
                },
                {
                  stat: 'Ghosting and no-shows',
                  label: 'Waste hours with no way to track it',
                  sub: 'Without a tracked pipeline, it is hard to see which candidates went quiet, so the same dead leads get chased more than once.',
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
              <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on dental hygienist and dental assistant employment
              {' '}and the{' '}
              <a href="https://www.ada.org/resources/research/health-policy-institute/dental-practice-research/dental-workforce-shortages" target="_blank" rel="noopener noreferrer">ADA Health Policy Institute</a>, where surveyed dentists report hygienist recruitment as very or extremely challenging.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered resumes to a filled chair in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your practice',
                  body: 'Hygienist, assistant, and front-office roles get built into the system around how your practice actually hires, without needing an HR department to run it.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open role shows up in one place, so nothing gets lost in a personal inbox or a stack of paper resumes.',
                },
                {
                  num: '03',
                  title: 'You advance candidates and fill the seat faster',
                  body: 'The owner or office manager can see every applicant at a glance and move the right ones forward, without chasing down where each resume went.',
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
              <h2>Built for how small dental practices actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Hygienist and assistant shortage',
                  body: 'A tracked pipeline moves qualified candidates through faster, so a practice is not losing clinical hires to whoever calls back first.',
                },
                {
                  title: 'No dedicated HR',
                  body: 'BEG configures and supports the system, so the practice gets a real hiring process without hiring someone just to manage hiring.',
                },
                {
                  title: 'Mixed clinical and front-office roles',
                  body: 'Every role, clinical or administrative, runs through the same pipeline, so nothing gets tracked in a separate system or a sticky note.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Built for small teams</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/small-business-applicant-tracking-system">Small business applicant tracking</Link>: no HR department required.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> for isolved Attract & Hire.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for your practice</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> for dental employers.
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
              <h2>Applicant tracking for dental practices, answered</h2>
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
