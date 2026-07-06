import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Hospitality Hiring',
  description: 'Relentless turnover leaves hotels short-staffed at peak season. See how an applicant tracking system helps hospitality teams hire faster, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-hospitality' },
  openGraph: {
    title: 'Applicant Tracking for Hospitality Hiring',
    description: 'Relentless turnover leaves hotels short-staffed at peak season. See how an applicant tracking system helps hospitality teams hire faster, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-hospitality',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Hospitality Hiring', description: 'Relentless turnover leaves hotels short-staffed at peak season. See how an applicant tracking system helps hospitality teams hire faster, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-hospitality');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for hospitality hiring?',
    'An applicant tracking system for hospitality hiring is software that collects applications for front-desk, housekeeping, food and beverage, and back-of-house roles into one tracked pipeline, instead of scattered calls, walk-ins, and paper applications across properties.',
  ],
  [
    'Can it handle hiring across multiple properties?',
    'Yes. isolved Attract & Hire is configured around your roles and properties, so an applicant for a front-desk role at one hotel and a housekeeping role at another both land in the same tracked pipeline, sorted by location.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles, shifts, and properties so it works from day one.',
  ],
  [
    'Can it handle a seasonal hiring surge?',
    'Yes. The pipeline is built to take a wave of applicants for peak season the same way it takes steady, year-round hiring, so a seasonal ramp does not turn into a scramble.',
  ],
  [
    'We hire across front-of-house, housekeeping, and back-of-house at once. Does that work?',
    'Yes. Every role type is configured into the system, so front-of-house, housekeeping, and back-of-house applicants all move through the same tracked pipeline instead of separate processes per department.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForHospitalityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Relentless turnover is leaving your property short right when guests need you most',
            description: 'Relentless turnover leaves hotels short-staffed at peak season. See how an applicant tracking system helps hospitality teams hire faster, nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-hospitality',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Hospitality', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-hospitality' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Hospitality"
        title="Relentless turnover is leaving your property short right when guests need you most"
        description="Front desk, housekeeping, food and beverage, and back-of-house roles turn over faster than most hotels and hospitality groups can replace them, and the gap always lands hardest during peak season. isolved Attract & Hire gets every applicant into one tracked pipeline across every property, so your team can move candidates forward and staff the shift before the next check-in rush."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For every role and every property' },
          { value: 'Built for peaks', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>Hospitality turnover does not slow down, and neither can hiring</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Highest churn',
                  label: 'Of any major industry',
                  sub: 'Front desk, housekeeping, and food and beverage staff leave faster than almost any other line of work, and a slow process never catches up.',
                },
                {
                  stat: 'Seasonal peaks',
                  label: 'Hit every property at once',
                  sub: 'A summer or holiday surge means every location needs staff at the same time, and a scattered process cannot scale to meet it.',
                },
                {
                  stat: 'Multi-property hiring',
                  label: 'Fragments without one system',
                  sub: 'Front-of-house, housekeeping, and back-of-house roles across multiple properties get lost in separate spreadsheets and inboxes without a shared pipeline.',
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
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS Job Openings and Labor Turnover Survey (JOLTS)</a>, which consistently shows accommodation and food services with the highest quits rate of any industry
              {' '}and the{' '}
              <a href="https://www.ahla.com/news/65-surveyed-hotels-report-staffing-shortages" target="_blank" rel="noopener noreferrer">American Hotel & Lodging Association</a>, where roughly two-thirds of surveyed hotels report ongoing staffing shortages, led by housekeeping and front desk roles.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applicants to a staffed property in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and properties',
                  body: 'Front desk, housekeeping, food and beverage, and back-of-house roles get built into the system around how your properties actually hire, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open role, across every property and shift, shows up in the same place instead of scattered calls, walk-ins, and paper.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and staffs the shift faster',
                  body: 'Property managers and hiring leads move candidates through the pipeline together, so the open shift gets filled before the next peak hits.',
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
              <h2>Built for how hotels and hospitality groups actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Constant, high-volume turnover',
                  body: 'A steady pipeline keeps candidates ready to move into open roles as they turn over, instead of restarting the search from zero every time.',
                },
                {
                  title: 'Seasonal and peak hiring',
                  body: 'The system is configured to absorb a surge of applicants ahead of peak season, so every property can staff up at the same time without chaos.',
                },
                {
                  title: 'Multi-property visibility',
                  body: 'One tracked pipeline gives hiring managers visibility into every role at every property, so guest experience does not suffer while a seat sits open.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Similar high-turnover hiring</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/applicant-tracking-for-restaurants">Applicant tracking for restaurants</Link>: the same playbook for food service.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> for isolved Attract & Hire.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for a multi-property team</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> for hospitality employers.
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
              <h2>Applicant tracking for hospitality, answered</h2>
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
