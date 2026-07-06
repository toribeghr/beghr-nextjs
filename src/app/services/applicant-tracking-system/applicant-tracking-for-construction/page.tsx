import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Construction Hiring',
  description: 'A skilled-labor shortage stalls projects when crews are short. See how an applicant tracking system helps trades teams hire faster, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-construction' },
  openGraph: {
    title: 'Applicant Tracking for Construction Hiring',
    description: 'A skilled-labor shortage stalls projects when crews are short. See how an applicant tracking system helps trades teams hire faster, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Construction Hiring', description: 'A skilled-labor shortage stalls projects when crews are short. See how an applicant tracking system helps trades teams hire faster, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-construction');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for construction hiring?',
    'An applicant tracking system for construction hiring is software that collects applications for skilled trades and project roles into one tracked pipeline, instead of scattered calls, texts, and paper applications on the jobsite.',
  ],
  [
    'Can it handle surge hiring for a new project?',
    'isolved Attract & Hire is configured around your roles and workflow, so a sudden push of applicants for a new project or a seasonal ramp flows into the same pipeline your team already uses, not a separate scramble.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your crews, roles, and workflow.',
  ],
  [
    'We hire for different trades and different job sites. Does that work?',
    'Yes. Roles, trades, and job sites are configured into the system, so applicants for a framing crew and applicants for an electrical crew both land in the same tracked pipeline, sorted the way your team hires.',
  ],
  [
    'How does this help with speed to hire?',
    'A single pipeline means hiring managers see every applicant for every open role in one place, so candidates get advanced faster and a crew gets staffed before a project timeline slips.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Short crews are stalling your projects and your revenue',
            description: 'A skilled-labor shortage stalls projects when crews are short. See how an applicant tracking system helps trades teams hire faster, nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-construction',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Construction', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-construction' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Construction"
        title="Short crews are stalling your projects and your revenue"
        description="A skilled-labor shortage means every open trade position is a project waiting to slip, and surge hiring for a new job never seems to move fast enough. isolved Attract & Hire gets every applicant into one tracked pipeline, built around your roles and job sites, so your team can advance candidates and staff the crew before the schedule falls behind."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For every trade and job site' },
          { value: 'Built for surges', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>A short crew does not stay a hiring problem. It becomes a schedule problem, then a revenue problem</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Skilled-labor shortage',
                  label: 'Every open trade role is harder to fill than the last',
                  sub: 'Framers, electricians, and equipment operators are in short supply everywhere, and a slow process loses candidates to whichever crew moves first.',
                },
                {
                  stat: 'Project hiring',
                  label: 'Surges hit without warning',
                  sub: 'A new job means a sudden wave of applicants, and a process built for steady-state hiring buckles under a surge.',
                },
                {
                  stat: 'Speed to hire',
                  label: 'Gates your revenue directly',
                  sub: 'A stalled project because a crew is short does not just cost a week. It costs the whole schedule downstream, and the next bid.',
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
              {' '}and the{' '}
              <a href="https://www.agc.org/news/2025/08/28/construction-workforce-shortages-are-leading-cause-project-delays-immigration-enforcement-affects" target="_blank" rel="noopener noreferrer">Associated General Contractors of America (AGC) 2025 workforce survey</a>, where about 92% of firms report trouble finding qualified craft workers.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applicants to a staffed crew in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and workflow',
                  body: 'Trades, job sites, and crew structures get built into the system around how your company actually staffs projects, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open trade role, across every job site, shows up in one place instead of scattered calls and texts.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the seat faster',
                  body: 'Project managers and hiring leads move candidates through together, so the crew gets staffed and the project keeps moving.',
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
              <h2>Built for how construction and trades teams actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Skilled-labor shortage',
                  body: 'A tracked pipeline means candidates move faster through your process, so you are not losing skilled applicants to whoever calls back first.',
                },
                {
                  title: 'Project and surge hiring',
                  body: 'When a new job creates a hiring surge, applicants flow into the same configured pipeline instead of overwhelming an inbox or a stack of paper.',
                },
                {
                  title: 'Speed-to-hire gating revenue',
                  body: 'One pipeline gives project leads visibility into every open role, so staffing decisions happen fast enough to protect the schedule.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Still running it off a spreadsheet?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-vs-spreadsheets">ATS vs spreadsheets</Link>: what changes when you switch.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> for isolved Attract & Hire.
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
              <h2>Applicant tracking for construction, answered</h2>
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
