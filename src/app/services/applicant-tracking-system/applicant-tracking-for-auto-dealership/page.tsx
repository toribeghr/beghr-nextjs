import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Auto Dealership Hiring',
  description: 'Sales turnover and a technician shortage slow dealership hiring. See how an applicant tracking system helps you hire across every department.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-auto-dealership' },
  openGraph: {
    title: 'Applicant Tracking for Auto Dealership Hiring',
    description: 'Sales turnover and a technician shortage slow dealership hiring. See how an applicant tracking system helps you hire across every department.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-auto-dealership',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Auto Dealership Hiring', description: 'Sales turnover and a technician shortage slow dealership hiring. See how an applicant tracking system helps you hire across every department.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-auto-dealership');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for auto dealership hiring?',
    'An applicant tracking system for auto dealership hiring is software that collects applications for sales, service, parts, and F&I roles into one tracked pipeline instead of separate processes run by each department manager.',
  ],
  [
    'Can it handle hiring across sales, service, and F&I at the same time?',
    "Yes. isolved Attract & Hire is configured around your dealership's departments, so sales, service technician, parts, and F&I openings all move through the same tracked pipeline instead of competing processes.",
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your departments and roles so it works from day one.',
  ],
  [
    'Can it help with the technician shortage?',
    'A tracked pipeline will not create more technicians, but it keeps qualified candidates from slipping through the cracks and lets your service manager move fast the moment someone qualified applies.',
  ],
  [
    'We hire across multiple dealership locations. Does that work?',
    'Yes. The system is configured around your roles and locations, so multi-store hiring runs through the same tracked pipeline instead of separate spreadsheets per store.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForAutoDealershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Sales turnover and a technician shortage are stretching your dealership thin',
            description: 'Sales turnover and a technician shortage slow dealership hiring. See how an applicant tracking system helps you hire across every department.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-auto-dealership',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Auto Dealership', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-auto-dealership' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Auto Dealership"
        title="Sales turnover and a technician shortage are stretching your dealership thin"
        description="Sales roles churn constantly, qualified technicians are hard to find, and every department, sales, service, parts, and F&I, runs its own version of hiring. isolved Attract & Hire gets every applicant into one tracked pipeline so your managers can move fast and fill seats before deals and repair orders back up."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For sales, service, parts, and F&I' },
          { value: 'Built for departments', label: 'Configured to your dealership structure' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An open seat in any department slows down the whole dealership</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'High turnover',
                  label: 'Sales roles churn fast',
                  sub: 'Commission-based sales positions see frequent turnover, which means the hiring process for that floor never really stops.',
                },
                {
                  stat: 'Technician shortage',
                  label: 'Qualified techs are hard to find',
                  sub: 'A shortage of qualified service technicians means every open req has to move quickly once a strong candidate applies, or they take another offer first.',
                },
                {
                  stat: 'Multi-department',
                  label: 'Sales, service, parts, and F&I at once',
                  sub: 'A single dealership is really several hiring processes running in parallel, and a separate system per department creates blind spots.',
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
              <a href="https://www.nada.org/" target="_blank" rel="noopener noreferrer">National Automobile Dealers Association</a>, which tracks workforce and staffing trends across franchised dealerships
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/current/oes493023.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on automotive service technicians and mechanics, an occupation facing a well-documented, persistent shortage of qualified workers.
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
                  title: 'BEG configures isolved Attract & Hire to your dealership departments',
                  body: 'Sales, service, parts, and F&I roles get built into the system around how your dealership actually hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open role, across every department and location, shows up in the same place instead of separate processes run by each manager.',
                },
                {
                  num: '03',
                  title: 'Your managers advance candidates and fill the seat faster',
                  body: 'Department managers move candidates through the pipeline on their own timeline, so a strong applicant does not sit waiting while another dealership makes an offer first.',
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
              <h2>Built for how dealerships actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'High sales-role turnover',
                  body: 'A tracked pipeline keeps qualified past applicants visible, so refilling a sales role does not mean starting the search from zero every time.',
                },
                {
                  title: 'Technician shortage',
                  body: 'A single pipeline means your service manager sees every technician applicant immediately, instead of finding out days later.',
                },
                {
                  title: 'Multi-department hiring',
                  body: 'Sales, service, parts, and F&I hiring all run through one system, giving dealership leadership visibility across every open role at once.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for dealerships</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/auto-dealership">HCM software for auto dealerships</Link>: payroll and commission tracking once your team is hired.
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
              <h2>Applicant tracking for auto dealerships, answered</h2>
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
