import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Marketing Agency Hiring',
  description: 'New client wins mean new hires overnight. See how an applicant tracking system helps agencies staff account, creative, and strategy roles faster.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-marketing-agency' },
  openGraph: {
    title: 'Applicant Tracking for Marketing Agency Hiring',
    description: 'New client wins mean new hires overnight. See how an applicant tracking system helps agencies staff account, creative, and strategy roles faster.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-marketing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Marketing Agency Hiring', description: 'New client wins mean new hires overnight. See how an applicant tracking system helps agencies staff account, creative, and strategy roles faster.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-marketing-agency');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for marketing agency hiring?',
    'An applicant tracking system for marketing agency hiring is software that collects applications for account, creative, and strategy roles into one tracked pipeline instead of scattered emails, referrals, and job boards.',
  ],
  [
    'Can it help when a new client win means hiring fast?',
    'isolved Attract & Hire keeps a tracked pipeline of candidates and workflow steps ready to go, so when a new account lands and headcount needs to move fast, your team is advancing candidates instead of starting the search from zero.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your account, creative, and strategy roles so it works from day one.',
  ],
  [
    'How fast can an agency get this running?',
    'Timelines vary by agency size and role complexity, but the model is the same for every client: BEG configures the system to your roles and workflow, then your team starts posting and tracking candidates in one pipeline.',
  ],
  [
    'We staff up and down based on client rosters. Does that work?',
    'Yes. The system is configured around your roles and workflow, so project-based and client-driven staffing ramps run through the same tracked pipeline instead of rebuilding a process every time headcount shifts.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'A new client win should not mean a hiring scramble',
            description: 'New client wins mean new hires overnight. See how an applicant tracking system helps agencies staff account, creative, and strategy roles faster.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-marketing-agency',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Marketing Agencies', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-marketing-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Marketing Agencies"
        title="A new client win should not mean a hiring scramble"
        description="Agencies live and die by how fast they can staff a new account, and every open requisition for a strategist, creative, or account lead is competing for the same scarce talent everyone else wants. isolved Attract & Hire gets applicants into one tracked pipeline so your team can move fast on the people who can actually do the work, before the client notices the seat is still open."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For account, creative, and strategy roles' },
          { value: 'Built for ramps', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>Every slow requisition is a client relationship sitting on thin staffing</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Project-driven',
                  label: 'Headcount needs move with the client roster',
                  sub: 'A new account win or a scope expansion can mean hiring fast, and a scattered process cannot ramp up on the timeline the client expects.',
                },
                {
                  stat: 'Competitive market',
                  label: 'Strong creative and strategy talent does not wait',
                  sub: 'Skilled account leads, creatives, and strategists field multiple offers at once, and a slow, disorganized process hands them to the agency that moved first.',
                },
                {
                  stat: 'Fast-moving reqs',
                  label: 'Roles open and close quickly',
                  sub: 'Agency hiring windows are short, and candidates lost in email threads or spreadsheet trackers usually accept somewhere else before your team circles back.',
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
              <a href="https://www.aaaa.org/" target="_blank" rel="noopener noreferrer">American Association of Advertising Agencies (4A's)</a>, the industry association tracking agency talent and staffing trends
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/current/oes112021.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on advertising, promotions, and marketing managers, which shows demand for experienced marketing talent among the strongest in the professional services sector.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applications to a staffed account in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your account, creative, and strategy roles',
                  body: 'Client-facing, creative, and strategy positions get built into the system around how your agency actually staffs work, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open role, across every department, shows up in the same place instead of scattered inboxes and job board logins.',
                },
                {
                  num: '03',
                  title: 'Your team moves fast on the right candidates',
                  body: 'Hiring managers and recruiters work the same pipeline to advance strong candidates before a competing agency makes the offer first.',
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
              <h2>Built for how marketing and creative agencies actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Project and client-based staffing ramps',
                  body: 'A tracked pipeline lets your team scale hiring up or down with the client roster instead of rebuilding a process every time a new account lands.',
                },
                {
                  title: 'A competitive talent market',
                  body: 'Faster movement through the pipeline means strong account, creative, and strategy candidates get an answer before they accept somewhere else.',
                },
                {
                  title: 'Fast-moving requisitions',
                  body: 'A single pipeline gives hiring managers visibility into every open role, so no candidate sits unanswered in an inbox while the window closes.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for agencies</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/marketing-agency">HCM software for marketing agencies</Link>: payroll, time tracking, and HR in one system alongside hiring.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need talent found for you?</strong>
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
              <h2>Applicant tracking for marketing agencies, answered</h2>
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
