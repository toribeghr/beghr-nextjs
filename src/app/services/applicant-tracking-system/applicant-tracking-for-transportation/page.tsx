import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Transportation Hiring',
  description: 'CDL driver shortages and DOT hiring paperwork slow trucking companies down. See how an applicant tracking system keeps drivers moving into seats.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-transportation' },
  openGraph: {
    title: 'Applicant Tracking for Transportation Hiring',
    description: 'CDL driver shortages and DOT hiring paperwork slow trucking companies down. See how an applicant tracking system keeps drivers moving into seats.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-transportation',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Transportation Hiring', description: 'CDL driver shortages and DOT hiring paperwork slow trucking companies down. See how an applicant tracking system keeps drivers moving into seats.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-transportation');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for transportation hiring?',
    'An applicant tracking system for transportation hiring is software that collects applications for CDL drivers and operations staff into one tracked pipeline instead of scattered job boards, driver referrals, and paper files.',
  ],
  [
    'Can it help with DOT and CDL hiring paperwork?',
    'isolved Attract & Hire organizes candidate information and hiring workflow steps so DOT-required documentation, license verification, and pre-employment screening steps are captured consistently during the application and offer stages, instead of being chased down after a driver is already scheduled to start.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your driver roles, terminals, and workflow so it works from day one.',
  ],
  [
    'How fast can a trucking or transportation company get this running?',
    'Timelines vary by fleet size and role complexity, but the model is the same for every client: BEG configures the system to your driver and operations roles and workflow, then your team starts posting and tracking candidates in one pipeline.',
  ],
  [
    'We hire drivers across multiple terminals and regions. Does that work?',
    'Yes. The system is configured around your roles and workflow, so multi-terminal and multi-region driver hiring runs through the same tracked pipeline instead of separate spreadsheets per location.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForTransportationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Empty trucks and DOT paperwork are slowing down your driver hiring',
            description: 'CDL driver shortages and DOT hiring paperwork slow trucking companies down. See how an applicant tracking system keeps drivers moving into seats.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-transportation',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Transportation', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-transportation' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Transportation"
        title="Empty trucks and DOT paperwork are slowing down your driver hiring"
        description="A CDL applicant who looks solid on paper can still stall out in DOT documentation, license verification, and pre-employment checks before ever reaching a truck. isolved Attract & Hire gets driver and operations applicants into one tracked pipeline so your team can move qualified candidates through the compliance steps and into a seat before the load goes uncovered."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For drivers and operations staff' },
          { value: 'Built for DOT steps', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An open driver seat is not a scheduling problem. It is a revenue problem.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Compliance heavy',
                  label: 'DOT and CDL steps stack up before day one',
                  sub: 'License verification, medical certification, and DOT-required background steps all land on top of the normal hiring process, and those steps get lost without a system tracking them.',
                },
                {
                  stat: 'Driver shortage',
                  label: 'Fewer qualified CDL applicants chasing every opening',
                  sub: 'Freight and logistics employers are competing hard for a shrinking pool of licensed drivers, and a slow process hands that candidate to the carrier that responded first.',
                },
                {
                  stat: 'High turnover',
                  label: 'Seats reopen faster than most fleets can refill them',
                  sub: 'Driver turnover runs well above average for the broader labor market, so the same pipeline has to refill the same seats again and again without falling behind.',
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
              <a href="https://www.fmcsa.dot.gov/" target="_blank" rel="noopener noreferrer">Federal Motor Carrier Safety Administration (FMCSA)</a>, which sets the driver qualification, medical certification, and background check requirements carriers must document before a driver can operate
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/current/oes533032.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on heavy and tractor-trailer truck drivers, which shows the occupation among the largest by employment with turnover well above the all-industry average.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered driver applications to a covered load in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your driver and operations roles',
                  body: 'CDL driver roles, dispatch, operations, and terminal-specific requirements get built into the system around how your company actually hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every driver and operations candidate, across every terminal and region, shows up in the same place instead of scattered inboxes and job board logins.',
                },
                {
                  num: '03',
                  title: 'Your team moves candidates through compliance steps and into the seat',
                  body: 'Recruiters and safety staff work the same pipeline to capture license and DOT documentation and advance qualified drivers, so the seat gets filled instead of sitting open.',
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
              <h2>Built for how transportation and logistics companies actually hire drivers</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'DOT and CDL compliance documentation',
                  body: 'Hiring workflow steps are configured to capture license, medical certification, and DOT-required background details consistently, before a driver is scheduled to start, not after.',
                },
                {
                  title: 'The driver shortage',
                  body: 'A single tracked pipeline lets recruiters move fast on qualified CDL applicants instead of losing them to a competing carrier during a slow, scattered process.',
                },
                {
                  title: 'High driver turnover',
                  body: 'The same pipeline that filled the seat last time is ready to fill it again, so recurring turnover does not mean rebuilding the hiring process from scratch every time.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for transportation</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/transportation">HCM software for transportation companies</Link>: payroll, time tracking, and HR in one system alongside hiring.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need drivers found for you?</strong>
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
              <h2>Applicant tracking for transportation, answered</h2>
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
