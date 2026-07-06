import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Agriculture Hiring',
  description: 'Seasonal surges and H-2A paperwork slow down farm hiring. See how an applicant tracking system helps agriculture employers hire faster.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-agriculture' },
  openGraph: {
    title: 'Applicant Tracking for Agriculture Hiring',
    description: 'Seasonal surges and H-2A paperwork slow down farm hiring. See how an applicant tracking system helps agriculture employers hire faster.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-agriculture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Agriculture Hiring', description: 'Seasonal surges and H-2A paperwork slow down farm hiring. See how an applicant tracking system helps agriculture employers hire faster.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-agriculture');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for agriculture hiring?',
    'An applicant tracking system for agriculture hiring is software that collects applications for field, packing, equipment, and year-round operations roles into one tracked pipeline instead of paper applications and word-of-mouth referrals scattered across crews and locations.',
  ],
  [
    'Can it help with H-2A visa worker documentation?',
    'isolved Attract & Hire organizes candidate information and hiring workflow steps so H-2A related documentation is captured consistently during the application process, instead of being tracked separately in spreadsheets alongside your regular applicant flow.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your seasonal and year-round roles so it works from day one.',
  ],
  [
    'Can it handle a seasonal hiring surge?',
    'Yes. The system is configured to your roles and workflow, so a surge of seasonal applicants for planting or harvest moves through the same tracked pipeline as your year-round hires, instead of overwhelming a single inbox.',
  ],
  [
    'We hire across rural and remote locations. Does that work?',
    'Yes. Applicants can apply and move through the pipeline from anywhere, which matters when your labor pool is spread across rural areas without a central hiring office.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForAgriculturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Seasonal hiring surges are outrunning your farm’s paper process',
            description: 'Seasonal surges and H-2A paperwork slow down farm hiring. See how an applicant tracking system helps agriculture employers hire faster.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-agriculture',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Agriculture', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-agriculture' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Agriculture"
        title="Seasonal hiring surges are outrunning your farm's paper process"
        description="Planting and harvest bring a wave of applicants all at once, on top of year-round crew and equipment roles that never stop needing coverage. isolved Attract & Hire gets every applicant into one tracked pipeline so your team can move fast during the surge and stay organized once it passes."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For seasonal and year-round roles' },
          { value: 'Built for surges', label: 'Configured to your seasonal calendar' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>A missed planting or harvest window costs more than a slow hire ever should</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Seasonal spikes',
                  label: 'Hundreds of applicants in a short window',
                  sub: 'Planting and harvest compress your entire hiring need into a few weeks, and a paper process or single inbox cannot keep up with that volume.',
                },
                {
                  stat: 'H-2A paperwork',
                  label: 'Documentation before day one',
                  sub: 'Guest worker documentation has to be collected and organized before a hire can start, and it gets lost without a system tracking it alongside the rest of the application.',
                },
                {
                  stat: 'Remote pools',
                  label: 'Rural hiring without a central office',
                  sub: 'Labor pools spread across rural areas make in-person applications slow. Applicants need a way to apply and move forward from wherever they are.',
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
              <a href="https://www.usda.gov/topics/farming/farm-labor" target="_blank" rel="noopener noreferrer">USDA farm labor resources</a>, which cover the seasonal and H-2A guest worker programs that shape agricultural hiring
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/current/oes452092.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on farmworker and agricultural labor employment.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applications to a filled crew in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your seasonal and year-round roles',
                  body: 'Field, packing, equipment, and year-round operations roles get built into the system around your actual hiring calendar, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate, whether they applied ahead of harvest or for a year-round equipment role, shows up in the same place instead of scattered paper forms and referrals.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the crew faster',
                  body: 'Hiring managers move candidates through the pipeline together, so seasonal surges get absorbed instead of backing up into missed planting or harvest windows.',
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
              <h2>Built for how agriculture employers actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Seasonal hiring surges',
                  body: 'A short window with hundreds of applicants moves through the same tracked pipeline instead of overwhelming one inbox or a stack of paper forms.',
                },
                {
                  title: 'H-2A documentation during the application',
                  body: 'Hiring workflow steps are configured to capture guest worker documentation consistently, alongside the rest of the application, not chased down separately afterward.',
                },
                {
                  title: 'Remote and rural hiring pools',
                  body: 'Applicants apply and move through the pipeline from wherever they are, so a spread-out labor pool does not depend on a central hiring office.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for agriculture</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/agriculture">HCM software for agriculture</Link>: payroll and HR once your crew is hired.
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
              <h2>Applicant tracking for agriculture, answered</h2>
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
