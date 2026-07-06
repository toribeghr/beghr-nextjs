import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Staffing Agency Hiring',
  description: 'Recruiter and ops turnover slows your own agency down. See how an applicant tracking system helps staffing firms hire their internal team faster.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-staffing-agency' },
  openGraph: {
    title: 'Applicant Tracking for Staffing Agency Hiring',
    description: 'Recruiter and ops turnover slows your own agency down. See how an applicant tracking system helps staffing firms hire their internal team faster.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-staffing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Staffing Agency Hiring', description: 'Recruiter and ops turnover slows your own agency down. See how an applicant tracking system helps staffing firms hire their internal team faster.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-staffing-agency');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for staffing agency hiring?',
    'An applicant tracking system for staffing agency hiring is software that collects applications for your own internal recruiters, account managers, and back-office staff into one tracked pipeline, separate from the candidates you place with clients.',
  ],
  [
    'Is this the same thing as the software our recruiters use to place candidates?',
    'No. isolved Attract & Hire is a standard single-pipeline applicant tracking system built for hiring your own employees. It is not a split-placement or multi-client candidate database like the dedicated staffing platforms your recruiting desks may already run. Those tools solve a different problem: tracking candidates across many clients. This tool solves hiring for your agency itself.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles, workflow, and team so it works from day one.',
  ],
  [
    'How fast can a staffing agency get this running?',
    'Timelines vary by agency size and role mix, but the model is the same for every client: BEG configures the system to your roles and workflow, then your team starts posting and tracking candidates in one pipeline.',
  ],
  [
    'We run multiple branches or divisions. Does that work?',
    'Yes. The system is configured around your roles and workflow, so multi-branch or multi-division hiring for your own staff runs through the same tracked pipeline instead of separate spreadsheets per office.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForStaffingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Your agency finds jobs for everyone else. Who is filling your own openings?',
            description: 'Recruiter and ops turnover slows your own agency down. See how an applicant tracking system helps staffing firms hire their internal team faster.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-staffing-agency',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Staffing Agency', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-staffing-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Staffing & Recruiting"
        title="Your agency finds jobs for everyone else. Who is filling your own openings?"
        description="Recruiters, account managers, and back-office staff at staffing agencies turn over fast, and every open desk means fewer clients served and fewer candidates placed. isolved Attract & Hire gets applicants for your own team into one tracked pipeline, separate from the candidates you place with clients, so you can fill your internal seats without borrowing time from the desks already stretched thin."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For your own recruiters and staff' },
          { value: 'Built for growth', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An open desk at your own agency is a problem you feel every day, not just on a org chart</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'High turnover',
                  label: 'Recruiter and ops roles churn fast',
                  sub: 'Employment services is a high-churn industry on its own, and every open recruiter or coordinator seat means fewer client requisitions worked and fewer candidates placed.',
                },
                {
                  stat: 'Not a placement tool',
                  label: 'This is about staffing your agency, not your clients',
                  sub: 'This is a standard single-pipeline system for hiring your own internal team. It is not the split-placement or multi-client candidate tracking that dedicated staffing tools handle for the desks placing candidates with clients.',
                },
                {
                  stat: 'Growth stalls',
                  label: 'Without enough internal staff to run it',
                  sub: 'New client contracts and higher fill volume mean nothing if there is nobody internally to source, screen, and manage the work. Internal hiring capacity caps everything else.',
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
              <a href="https://americanstaffing.net/research/" target="_blank" rel="noopener noreferrer">American Staffing Association research</a>, which tracks staffing and recruiting industry employment and turnover trends
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/current/naics4_561300.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics for employment services (NAICS 5613)</a>.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applications to a filled desk in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and workflow',
                  body: 'Recruiter, account manager, and operations roles get built into the system around how your agency actually hires its own team, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open internal role, across every branch or division, shows up in the same place instead of scattered inboxes and job board logins.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the desk faster',
                  body: 'Hiring managers and leadership move candidates through the pipeline together, so the open desk gets filled instead of sitting on a to-do list.',
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
              <h2>Built for how staffing and recruiting agencies hire their own team</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Recruiter and account manager turnover',
                  body: 'Openings for the people who run your desks move through the same tracked pipeline instead of competing for attention in a shared inbox.',
                },
                {
                  title: 'Growth without an internal hiring bottleneck',
                  body: 'New branches or service lines need internal staff before they can produce. A single pipeline keeps that hiring moving instead of stalling behind client work.',
                },
                {
                  title: 'Back-office and operations roles',
                  body: 'Payroll coordinators, credentialing staff, and support roles get the same tracked process as your revenue-generating positions, so nothing falls through the cracks.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for staffing firms</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/best-hcm-software-for-staffing-agencies">HCM software for staffing agencies</Link>: high-volume onboarding and multi-client payroll on one platform.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need a role filled for you?</strong>
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
              <h2>Applicant tracking for staffing agencies, answered</h2>
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
