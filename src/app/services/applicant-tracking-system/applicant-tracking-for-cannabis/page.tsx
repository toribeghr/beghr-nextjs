import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Cannabis Hiring',
  description: 'State licensing rules and high turnover slow cannabis hiring. See how an applicant tracking system helps operators hire faster and stay compliant.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-cannabis' },
  openGraph: {
    title: 'Applicant Tracking for Cannabis Hiring',
    description: 'State licensing rules and high turnover slow cannabis hiring. See how an applicant tracking system helps operators hire faster and stay compliant.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-cannabis',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Cannabis Hiring', description: 'State licensing rules and high turnover slow cannabis hiring. See how an applicant tracking system helps operators hire faster and stay compliant.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-cannabis');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for cannabis hiring?',
    'An applicant tracking system for cannabis hiring is software that collects applications for retail, cultivation, and processing roles into one tracked pipeline, so state licensing steps and background checks happen consistently instead of getting handled ad hoc for every new hire.',
  ],
  [
    'Can it help with state licensing and background check requirements?',
    'isolved Attract & Hire organizes hiring workflow steps so state-specific licensing and background check requirements are captured consistently before a hire can start, instead of being tracked in a separate compliance spreadsheet.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    "No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around the licensing requirements in your state and your roles so it works from day one.",
  ],
  [
    'Cannabis regulation varies a lot by state. Does the system account for that?',
    "Yes. BEG configures the hiring workflow to the specific requirements in your state. Since cannabis employment rules differ significantly state by state, the workflow is built around your operation, not a generic template.",
  ],
  [
    'Can it help with the turnover in retail and cultivation roles?',
    'A single tracked pipeline means you are not rebuilding your hiring process from scratch every time a budtender or trimmer role opens. Candidates who did not get the last opening stay visible for the next one.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForCannabisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'State licensing rules and turnover are slowing down cannabis hiring',
            description: 'State licensing rules and high turnover slow cannabis hiring. See how an applicant tracking system helps operators hire faster and stay compliant.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-06',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-cannabis',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Cannabis', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-cannabis' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Cannabis"
        title="State licensing rules and turnover are slowing down cannabis hiring"
        description="Every hire in a licensed cannabis operation carries state-specific requirements before day one, and retail and cultivation turnover means you are running that process constantly. isolved Attract & Hire gets applicants into one tracked pipeline so licensing steps happen the same way every time and open roles get filled without compliance risk."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'For retail, cultivation, and processing roles' },
          { value: 'Built for compliance', label: 'Configured to your state requirements' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>A skipped compliance step costs more than a slow hire ever will</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'State-specific',
                  label: 'Licensing before day one',
                  sub: 'Cannabis employees often need state licensing and background checks cleared before they can start, and a manual process makes it easy to miss a step.',
                },
                {
                  stat: 'High turnover',
                  label: 'Retail and cultivation roles churn fast',
                  sub: 'Budtender, trimmer, and processing roles turn over often, which means you are running the hiring and compliance process again and again.',
                },
                {
                  stat: 'Regulated industry',
                  label: 'Documentation risk sits with the operator',
                  sub: 'In a heavily regulated industry, missing or incomplete hiring documentation is a risk that lands on the operator, not just the applicant.',
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
              <a href="https://thecannabisindustry.org/" target="_blank" rel="noopener noreferrer">National Cannabis Industry Association</a>, which tracks the state-by-state rules that shape cannabis employment
              {' '}and{' '}
              <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer">BLS Occupational Employment and Wage Statistics</a>. Federal data on cannabis-specific occupations is limited because the industry is regulated state by state rather than tracked as a single federal category.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From application to compliant hire in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: "BEG configures isolved Attract & Hire to the requirements in your state",
                  body: "Retail, cultivation, and processing roles get built into the system around your state's licensing and background check requirements, not a generic template.",
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate moves through the same compliance steps in the same order, so nothing gets skipped when hiring picks up.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates without compliance guesswork',
                  body: 'Hiring managers can see where each candidate stands on licensing and background checks before extending an offer, not after.',
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
              <h2>Built for how licensed cannabis operators actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'State licensing and background checks',
                  body: "Hiring workflow steps are configured to the requirements in your state, so licensing and background check documentation is captured before someone starts, not chased down after.",
                },
                {
                  title: 'High turnover in retail and cultivation',
                  body: 'A single tracked pipeline keeps past candidates visible, so refilling a budtender or trimmer role does not mean starting the search from zero.',
                },
                {
                  title: 'Compliance documentation risk',
                  body: 'A consistent, tracked hiring workflow reduces the chance that a compliance step gets missed during a busy hiring stretch.',
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
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>HCM built for cannabis</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software/cannabis">HCM software for cannabis</Link>: payroll and HR once your team is hired.
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
              <h2>Applicant tracking for cannabis, answered</h2>
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
