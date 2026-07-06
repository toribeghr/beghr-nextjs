import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Real Estate Brokerages',
  description: 'Hiring agents, brokers, and ops staff through email and spreadsheets slows growth. See how an applicant tracking system fixes brokerage hiring.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-real-estate' },
  openGraph: {
    title: 'Applicant Tracking for Real Estate Brokerages',
    description: 'Hiring agents, brokers, and ops staff through email and spreadsheets slows growth. See how an applicant tracking system fixes brokerage hiring.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-real-estate',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Real Estate Brokerages', description: 'Hiring agents, brokers, and ops staff through email and spreadsheets slows growth. See how an applicant tracking system fixes brokerage hiring.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-real-estate');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for real estate brokerages?',
    'An applicant tracking system for real estate brokerages is software that collects applications for agents, brokers, and operations staff, your own employees, into one tracked pipeline, instead of resumes scattered across email and referrals. It is a hiring tool, not a tenant screening or rental application system.',
  ],
  [
    'Is this the same thing as tenant screening software?',
    'No. isolved Attract & Hire is built for hiring your own staff: agents, brokers, transaction coordinators, and operations roles. It does not screen rental applicants or tenants, and it is not a property management tool.',
  ],
  [
    'Can it help with licensing verification during hiring?',
    'isolved Attract & Hire organizes candidate information and hiring workflow steps so real estate license details are captured consistently during the application and offer stages, instead of being chased down after someone already started.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles, workflow, and team so it works from day one.',
  ],
  [
    'We operate across multiple offices. Does that work?',
    'Yes. The system is configured around your roles and workflow, so multi-office hiring runs through the same tracked pipeline instead of separate spreadsheets per branch.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForRealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Growing your brokerage means hiring agents and staff faster than a spreadsheet allows',
            description: 'Hiring agents, brokers, and ops staff through email and spreadsheets slows growth. See how an applicant tracking system fixes brokerage hiring.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-real-estate',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Real Estate', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-real-estate' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Real Estate"
        title="Growing your brokerage means hiring agents and staff faster than a spreadsheet allows"
        description="Recruiting agents, brokers, and operations staff is its own competitive market, and it has nothing to do with screening tenants or rental applicants. isolved Attract & Hire gets applications for your own open roles into one tracked pipeline so your brokerage can bring on producing agents and support staff without losing them to a faster-moving competitor."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For every agent and staff opening' },
          { value: 'Staff hiring only', label: 'Not tenant or rental screening' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>An open desk is lost revenue, and a slow process keeps desks empty longer</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Not tenant screening',
                  label: 'This is about hiring your own team',
                  sub: 'Agents, brokers, transaction coordinators, and office staff are employees you hire, a different problem entirely from screening a rental applicant or tenant.',
                },
                {
                  stat: 'Competitive recruiting',
                  label: 'Producing agents have options',
                  sub: 'Experienced agents and brokers field offers from multiple firms, and a slow, informal process signals a brokerage that is not organized enough to work with.',
                },
                {
                  stat: 'Multi-office growth',
                  label: 'Hiring does not scale on spreadsheets',
                  sub: 'Adding offices and headcount without a shared system means every branch tracks candidates its own way, and nobody above the branch level sees the full picture.',
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
              <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer">National Association of Realtors research and statistics</a> on brokerage and agent trends
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on real estate brokers and sales agents.
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
                  body: 'Agent, broker, and operations roles get built into the system around how your brokerage actually recruits and hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open role, across every office, shows up in the same place instead of scattered inboxes and individual broker contacts.',
                },
                {
                  num: '03',
                  title: 'Your team moves fast enough to sign the agent',
                  body: 'Managing brokers and HR advance candidates through the pipeline together, so a strong agent gets an offer before a competing brokerage does.',
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
              <h2>Built for how brokerages actually hire their own team</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Agent and broker recruiting',
                  body: 'Every open producing role moves through the same tracked pipeline instead of living in one broker’s personal contact list.',
                },
                {
                  title: 'License verification',
                  body: 'Hiring workflow steps are configured to capture real estate license details consistently, before someone starts, not after.',
                },
                {
                  title: 'Multi-office visibility',
                  body: 'Leadership gets one view of hiring activity across every branch, instead of piecing together updates office by office.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>See it built for brokerage HR</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/real-estate">HCM software for real estate brokerages</Link>: payroll, HR, and compliance in one system.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for your brokerage</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> for real estate brokerages, including commission-based pay.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need the role filled for you?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/job-placement/real-estate">Real estate job placement services</Link>: talent acquisition as an outcome, not a project.
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
              <h2>Applicant tracking for real estate brokerages, answered</h2>
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
