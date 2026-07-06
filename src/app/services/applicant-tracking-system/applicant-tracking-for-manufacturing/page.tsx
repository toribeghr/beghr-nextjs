import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Manufacturing Jobs',
  description: 'Unfilled shifts slow the line and shrink output. See how an applicant tracking system helps manufacturers hire at volume, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-manufacturing' },
  openGraph: {
    title: 'Applicant Tracking for Manufacturing Jobs',
    description: 'Unfilled shifts slow the line and shrink output. See how an applicant tracking system helps manufacturers hire at volume, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-manufacturing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Manufacturing Jobs', description: 'Unfilled shifts slow the line and shrink output. See how an applicant tracking system helps manufacturers hire at volume, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-manufacturing');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for manufacturing hiring?',
    'An applicant tracking system for manufacturing hiring is software that collects applications for line, shift, and skilled production roles into one tracked pipeline, instead of scattered paper applications and spreadsheets across shifts.',
  ],
  [
    'Can it handle high-volume shift hiring?',
    'isolved Attract & Hire is configured around your roles and shift patterns, so a wave of applicants for first, second, and third shift all lands in the same tracked pipeline, sorted the way your plant hires.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your plant, roles, and workflow.',
  ],
  [
    'Does this help with seasonal hiring surges?',
    'Yes. Because the system is configured to your workflow, seasonal or demand-driven hiring pushes flow through the same pipeline your team uses year-round, instead of a separate scramble each time volume spikes.',
  ],
  [
    'How does this connect to replacing an aging workforce?',
    'A tracked pipeline gives plant leadership visibility into every open role and every candidate in process, which matters most when steady retirements mean production roles need filling on an ongoing basis, not just occasionally.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForManufacturingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Unfilled shifts are slowing your line and capping your output',
            description: 'Unfilled shifts slow the line and shrink output. See how an applicant tracking system helps manufacturers hire at volume, nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-manufacturing',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Manufacturing', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-manufacturing' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Manufacturing"
        title="Unfilled shifts are slowing your line and capping your output"
        description="An open production role does not sit quietly on a roster. It slows the line, caps output, and pushes overtime onto the workers already there. isolved Attract & Hire gets every applicant, for every shift, into one tracked pipeline, so your team can advance candidates and staff the line at the volume manufacturing hiring actually demands."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For every shift and production role' },
          { value: 'Built for volume', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An unfilled shift is not a staffing note. It is lost output</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Shift and seasonal volume',
                  label: 'Hiring at a scale most processes were not built for',
                  sub: 'Production hiring runs across multiple shifts and seasonal demand swings, and a process built for one-off hiring cannot keep up with that volume.',
                },
                {
                  stat: 'Aging workforce',
                  label: 'Replacement hiring never really stops',
                  sub: 'Steady retirements mean production roles need refilling on an ongoing basis, and a system has to handle that as routine, not as a surprise.',
                },
                {
                  stat: 'Line output',
                  label: 'Tied directly to staffing levels',
                  sub: 'Every open seat on the floor is capacity the plant is not running. Staffing speed and output are the same number.',
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
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS Job Openings and Labor Turnover Survey (JOLTS)</a>
              {' '}and{' '}
              <a href="https://themanufacturinginstitute.org/2-1-million-manufacturing-jobs-could-go-unfilled-by-2030-11330/" target="_blank" rel="noopener noreferrer">the Manufacturing Institute and Deloitte skills-gap study</a>, projecting about 2.1 million manufacturing jobs could go unfilled by 2030.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From open shifts to a staffed line in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and workflow',
                  body: 'Shifts, production roles, and plant structure get built into the system around how your facility actually hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open shift and role shows up in one place instead of separate lists for first, second, and third shift.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the seat faster',
                  body: 'Plant leadership and hiring managers move candidates through together, so the line stays staffed and output stays up.',
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
              <h2>Built for how manufacturers actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Shift and seasonal volume hiring',
                  body: 'A single configured pipeline absorbs volume swings, so a seasonal surge does not overwhelm the process that works fine the rest of the year.',
                },
                {
                  title: 'Aging-workforce replacement',
                  body: 'Ongoing replacement hiring runs through the same tracked system every time, so retirements do not turn into scrambles.',
                },
                {
                  title: 'Line output tied to staffing',
                  body: 'Visibility into every open role and every candidate in process means staffing decisions happen fast enough to protect output.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for shift and hourly staff</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> built for shift-based teams.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">HCM software</Link>: payroll, HR, talent, and benefits on one system.
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
              <h2>Applicant tracking for manufacturing, answered</h2>
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
