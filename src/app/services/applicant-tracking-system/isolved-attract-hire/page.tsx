import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'isolved Attract & Hire, Resold by BEG',
  description: 'isolved Attract & Hire gives growing teams one applicant pipeline. BEG resells, configures, and supports it for you, delivered nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/isolved-attract-hire' },
  openGraph: {
    title: 'isolved Attract & Hire, Resold by BEG',
    description: 'isolved Attract & Hire gives growing teams one applicant pipeline. BEG resells, configures, and supports it for you, delivered nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/isolved-attract-hire',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Attract & Hire, Resold by BEG', description: 'isolved Attract & Hire gives growing teams one applicant pipeline. BEG resells, configures, and supports it for you, delivered nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-system-isolved-attract-hire');

const FAQS: [string, string][] = [
  [
    'What is isolved Attract & Hire Small Business?',
    'isolved Attract & Hire Small Business is applicant tracking software designed to simplify sourcing, screening, and hiring talent for small businesses. It is the recruiting module of the isolved HCM platform, covering job distribution, a branded career page, applicant pipeline management, screening, interview scheduling, offers, and handoff into onboarding.',
  ],
  [
    'Did BEG build isolved Attract & Hire?',
    'No. isolved builds and maintains the platform. BEG resells it, configures it to your roles and workflow, and provides the ongoing support so your team gets a working hiring pipeline without building anything themselves.',
  ],
  [
    'What does BEG actually do if isolved builds the software?',
    'BEG configures your career page, job templates, and pipeline stages, connects the module to your existing isolved payroll and HR setup if you have one, and stays available to fix and adjust things as your hiring needs change.',
  ],
  [
    'Does isolved Attract & Hire connect to payroll and onboarding?',
    'Yes. Once a candidate is hired, their information flows into isolved onboarding and payroll instead of being re-entered by hand, which is one of the main advantages over standalone or spreadsheet-based hiring.',
  ],
  [
    'Can I use isolved Attract & Hire without switching payroll providers?',
    'It is built to work as part of the full isolved HCM platform. Talk to BEG about your current setup and we will tell you honestly how it fits before you commit to anything.',
  ],
  [
    'How much does it cost?',
    'isolved Attract & Hire Small Business is $2.00 per employee per month, added to your isolved HCM platform rather than sold on its own. See ATS pricing for the full breakdown, or get an instant estimate on this page in about 90 seconds.',
  ],
];

export default function IsolvedAttractHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'isolved Attract & Hire, configured and supported by BEG',
            description: 'isolved Attract & Hire gives growing teams one applicant pipeline. BEG resells, configures, and supports it for you, delivered nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/isolved-attract-hire',
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
              { '@type': 'ListItem', position: 3, name: 'isolved Attract & Hire', item: 'https://www.beghr.com/services/applicant-tracking-system/isolved-attract-hire' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking System · Powered by isolved"
        title="isolved Attract & Hire, configured and supported by BEG"
        description="isolved builds the platform. BEG configures it to your roles, connects it to the rest of your isolved stack, and stays on call when something needs to change. One applicant pipeline, from job posting to signed offer, delivered nationwide. It is a $2.00 per employee per month add-on to isolved HCM, not standalone software."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: '1 pipeline', label: 'For every open role' },
          { value: 'Built by isolved', label: 'Configured and supported by BEG' },
          { value: '$2.00', label: 'Per employee per month, added to isolved HCM' },
        ]}
      >
        {/* CAPABILITY GRID */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What The Platform Does</p>
              <h2>Everything between an open role and a signed offer, in one place</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              {[
                {
                  title: 'Sourcing and job distribution',
                  body: 'Post once and reach 5,500+ free, premium, and social job boards, instead of managing each posting by hand.',
                },
                {
                  title: 'Branded career page',
                  body: 'Candidates apply through a career page that looks like your company, not a generic third-party listing.',
                },
                {
                  title: 'Resume parsing and candidate scoring',
                  body: 'Resumes are parsed automatically and candidates get a prioritized match score, so the strongest applicants surface first instead of getting buried in a stack.',
                },
                {
                  title: 'Automated screening',
                  body: 'Screening questions and AI-assisted candidate matching filter a large applicant pool down to the people worth a conversation.',
                },
                {
                  title: 'AI-assisted job ad writing',
                  body: 'Generative AI helps draft the job ad itself, so a posting goes out faster and reads better without starting from a blank page.',
                },
                {
                  title: 'Centralized candidate communication',
                  body: 'Text and email conversations with candidates live in one place, tied to the candidate record, instead of scattered across inboxes.',
                },
                {
                  title: 'Interview scheduling',
                  body: 'Scheduling happens inside the platform, cutting the back-and-forth that causes delays and no-shows.',
                },
                {
                  title: 'Offers and handoff',
                  body: 'Offers move through the pipeline and a hire flows directly into isolved onboarding and payroll, with no re-entering the same information twice.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source:{' '}
              <a href="https://www.isolvedhcm.com/platform/talent-acquisition/attract-and-hire" target="_blank" rel="noopener noreferrer sponsored">isolved Attract &amp; Hire, official platform page</a>.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From a blank career page to a working pipeline in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures it to your roles',
                  body: 'We set up your career page, job templates, and pipeline stages around how your company actually hires, not a generic default.',
                },
                {
                  num: '02',
                  title: 'Your team starts using the pipeline',
                  body: 'Applicants land in one place, interviews get scheduled inside the platform, and every hiring manager sees the same up-to-date picture.',
                },
                {
                  num: '03',
                  title: 'Hires flow into onboarding and payroll',
                  body: 'A signed offer moves a candidate straight into isolved onboarding and payroll, with no re-entering the same information twice.',
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

        {/* WHAT BEG DOES VS WHAT THE PLATFORM DOES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Clarity</p>
              <h2>What isolved built, and what BEG adds</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Area</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>What isolved built</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>What BEG adds</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['The platform', 'The applicant tracking software itself: pipeline, career page, scheduling, offers', 'Configuration to your roles, your workflow, and your branding'],
                    ['Connection to your stack', 'Native links to isolved payroll, HR, and onboarding modules', 'Setup so a hire flows through without manual re-entry'],
                    ['Ongoing changes', 'Platform updates and core functionality', 'Support when you add roles, change workflow, or hit a snag'],
                    ['Getting started', 'A capable but generic applicant tracking system', 'A pipeline that matches how your company actually hires, from day one'],
                  ].map(([area, isolved, beg], i) => (
                    <tr key={area} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{area}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{isolved}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              BEG resells, configures, implements, and supports isolved Attract &amp; Hire. BEG did not build the underlying software.
            </p>
          </div>
        </section>

        {/* BEG POSITIONING / CTA */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>One vendor for setup, support, and the rest of your HR stack</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                You get isolved Attract &amp; Hire configured to your company, with BEG on call for support and changes as you grow. See <Link href="/services/applicant-tracking-system/ats-pricing">what it costs</Link> or read <Link href="/services/applicant-tracking-system/ats-vs-spreadsheets">why not spreadsheets</Link> if you are still tracking applicants by hand.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" />
            </div>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>Hiring is one module. isolved HCM covers the rest.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e5e5' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Applicant tracking system</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Back to the <Link href="/services/applicant-tracking-system">Applicant Tracking System</Link> overview.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e5e5' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>New hire accepted. Now what?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> pick up where hiring leaves off, every cycle handled.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e5e5' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">HCM software</Link> puts payroll, HR, talent acquisition, and benefits on one system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>isolved Attract &amp; Hire, answered</h2>
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
