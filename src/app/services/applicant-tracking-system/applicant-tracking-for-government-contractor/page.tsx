import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Government Contractors',
  description: 'OFCCP compliance and scattered hiring records create audit risk. See how an applicant tracking system keeps contractor hiring documented and defensible.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-government-contractor' },
  openGraph: {
    title: 'Applicant Tracking for Government Contractors',
    description: 'OFCCP compliance and scattered hiring records create audit risk. See how an applicant tracking system keeps contractor hiring documented and defensible.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-government-contractor',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Government Contractors', description: 'OFCCP compliance and scattered hiring records create audit risk. See how an applicant tracking system keeps contractor hiring documented and defensible.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-government-contractor');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for government contractors?',
    'An applicant tracking system for government contractors is software that captures every applicant, requisition, and hiring decision for contract-covered roles in one documented pipeline, instead of scattered emails and spreadsheets that cannot stand up to an audit.',
  ],
  [
    'Does this help with OFCCP compliance?',
    'isolved Attract & Hire organizes applicant flow data, requisition records, and hiring workflow steps in one system, which gives contractors a documented, consistent process to reference for affirmative action and EEO recordkeeping. It does not replace legal or compliance counsel.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your contract requirements, roles, and workflow.',
  ],
  [
    'We hold contracts across multiple agencies. Does the system handle that?',
    'Yes. Requisitions, roles, and workflow steps are configured to your organization, so hiring across multiple contracts and agencies runs through the same tracked pipeline instead of separate files per contract.',
  ],
  [
    'How fast can a contractor get this running?',
    'Timelines vary by organization size and role complexity, but the model is the same for every client: BEG configures the system to your roles and workflow, then your team starts posting and tracking candidates in one pipeline.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForGovernmentContractorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Scattered hiring records are an audit risk your contract cannot afford',
            description: 'OFCCP compliance and scattered hiring records create audit risk. See how an applicant tracking system keeps contractor hiring documented and defensible.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-government-contractor',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Government Contractors', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-government-contractor' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Government Contractors"
        title="Scattered hiring records are an audit risk your contract cannot afford"
        description="Federal and state contracts come with affirmative action plans, EEO recordkeeping, and documentation rules that a spreadsheet was never built to survive. isolved Attract & Hire gets every requisition, applicant, and hiring decision into one tracked pipeline, so you can answer an audit request without a scramble."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For every contract-covered requisition' },
          { value: 'Documented', label: 'Applicant flow, start to finish' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Undocumented Hiring</p>
              <h2>An audit does not wait for you to reconstruct your hiring records</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'OFCCP scrutiny',
                  label: 'Affirmative action plans demand a paper trail',
                  sub: 'Covered contractors have to show applicant flow data and hiring decisions on request, and an inbox full of resumes does not count as a record.',
                },
                {
                  stat: 'Contract-specific',
                  label: 'Cleared and specialized roles carry extra steps',
                  sub: 'Clearance status, contract requirements, and role-specific documentation pile up on top of the normal hiring process, and those steps get lost without a system tracking them.',
                },
                {
                  stat: 'Exposure grows',
                  label: 'Every scattered file is a gap in the record',
                  sub: 'When hiring records live across email threads and personal spreadsheets, the contractor carries the audit risk, not the software vendor.',
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
              <a href="https://www.dol.gov/agencies/ofccp" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Office of Federal Contract Compliance Programs (OFCCP)</a>, which sets affirmative action and EEO compliance obligations for covered federal contractors
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a> on compliance and administrative occupations.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered files to a documented pipeline in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your contracts and roles',
                  body: 'Requisitions, contract-specific roles, and documentation steps get built into the system around how your organization actually hires, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Every applicant and decision lands in one tracked pipeline',
                  body: 'Applicant flow data, resumes, and hiring decisions for every contract-covered role show up in the same place instead of scattered inboxes and personal files.',
                },
                {
                  num: '03',
                  title: 'Your team hires faster with a record ready if anyone asks',
                  body: 'Hiring managers and recruiters move candidates through the pipeline together, and the documentation exists because it was built in from the start, not reconstructed later.',
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
              <h2>Built for how government contractors actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'OFCCP and EEO documentation',
                  body: 'Applicant flow data and hiring decisions are captured consistently in one system, giving you a record to reference instead of one to rebuild.',
                },
                {
                  title: 'Contract-specific and cleared roles',
                  body: 'Hiring workflow steps are configured to capture clearance status and contract requirements at the right stage, before someone starts, not after.',
                },
                {
                  title: 'Audit exposure from scattered records',
                  body: 'A single pipeline gives your team one place to point to when a contracting officer or compliance review asks how a role was filled.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for contractors</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/government-contractor">HCM software for government contractors</Link>: compliance across the full employee lifecycle.
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
                  <Link href="/services/job-placement/government">Job placement services for government roles</Link>: talent acquisition as an outcome, not a project.
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
              <h2>Applicant tracking for government contractors, answered</h2>
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
