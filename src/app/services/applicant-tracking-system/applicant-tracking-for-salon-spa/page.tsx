import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Salon & Spa Hiring',
  description: 'License checks and constant churn slow salon and spa hiring. See how an applicant tracking system helps you hire stylists and therapists faster.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-salon-spa' },
  openGraph: {
    title: 'Applicant Tracking for Salon & Spa Hiring',
    description: 'License checks and constant churn slow salon and spa hiring. See how an applicant tracking system helps you hire stylists and therapists faster.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-salon-spa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Salon & Spa Hiring', description: 'License checks and constant churn slow salon and spa hiring. See how an applicant tracking system helps you hire stylists and therapists faster.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-salon-spa');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for salon and spa hiring?',
    'An applicant tracking system for salon and spa hiring is software that collects applications for stylists, estheticians, and massage therapists into one tracked pipeline instead of texts, walk-ins, and paper applications spread across locations.',
  ],
  [
    'Can it help verify cosmetology and other licenses during hiring?',
    'isolved Attract & Hire organizes hiring workflow steps so license verification for cosmetology, esthetics, and other licensed roles is captured consistently during the application process, instead of being confirmed informally after someone already started.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles and locations so it works from day one.',
  ],
  [
    'Can it help with the turnover common in commission-based roles?',
    'A single tracked pipeline keeps qualified past applicants visible, so when a commission-based stylist or therapist role opens again, you are not starting the search from zero.',
  ],
  [
    'We hire across multiple salon or spa locations. Does that work?',
    'Yes. The system is configured around your roles and locations, so multi-location hiring runs through the same tracked pipeline instead of separate processes at every site.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForSalonSpaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Licensed-role hiring and stylist turnover are wearing down your salon or spa',
            description: 'License checks and constant churn slow salon and spa hiring. See how an applicant tracking system helps you hire stylists and therapists faster.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-salon-spa',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Salon & Spa', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-salon-spa' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Salon & Spa"
        title="Licensed-role hiring and stylist turnover are wearing down your salon or spa"
        description="Every chair you cannot fill is lost revenue, and commission-based roles like stylists, estheticians, and massage therapists turn over fast. isolved Attract & Hire gets applicants into one tracked pipeline so license verification happens the same way every time and empty chairs get filled before clients start looking elsewhere."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For stylists, estheticians, and therapists' },
          { value: 'Built for licensing', label: 'Configured to verify credentials up front' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An empty chair does not wait quietly, it shows up as lost bookings</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Licensed roles',
                  label: 'Credential checks before day one',
                  sub: 'Cosmetology, esthetics, and massage therapy licenses need to be verified before someone touches a client, and that step gets skipped without a system tracking it.',
                },
                {
                  stat: 'High turnover',
                  label: 'Stylists and therapists move often',
                  sub: 'Commission-based roles see frequent movement between salons and spas, which means the hiring process runs constantly, not once a year.',
                },
                {
                  stat: 'Commission churn',
                  label: 'An empty chair is lost revenue immediately',
                  sub: 'Unlike a back-office role, an open chair or treatment room stops generating revenue the moment it sits empty.',
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
              <a href="https://probeauty.org/" target="_blank" rel="noopener noreferrer">Professional Beauty Association</a>, which tracks workforce and licensing trends across the beauty and wellness industry
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/current/oes399011.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on hairdressers, hairstylists, and cosmetologists, an occupation with turnover well above the average across all jobs.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applications to a filled chair in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and locations',
                  body: 'Stylist, esthetician, therapist, and front desk roles get built into the system around how your salon or spa actually hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open chair or treatment room, across every location, shows up in the same place instead of scattered texts and walk-ins.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the chair faster',
                  body: 'Managers move candidates through the pipeline with license verification built in, so the open chair gets filled instead of sitting empty for weeks.',
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
              <h2>Built for how salons and spas actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Licensed-role hiring',
                  body: 'Hiring workflow steps are configured to capture cosmetology and other license details consistently, before someone starts, not after a client complaint.',
                },
                {
                  title: 'High turnover',
                  body: 'A tracked pipeline keeps qualified past applicants visible, so refilling a stylist or therapist role does not mean starting from zero every time.',
                },
                {
                  title: 'Commission-based churn',
                  body: 'Faster time to fill means fewer empty chairs and treatment rooms sitting idle while clients book somewhere else.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for salons and spas</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/salon-spa">HCM software for salon & spa</Link>: payroll and commission tracking once your team is hired.
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
              <h2>Applicant tracking for salons and spas, answered</h2>
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
