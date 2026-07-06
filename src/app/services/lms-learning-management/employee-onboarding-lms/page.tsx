import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Employee Onboarding LMS | Faster, Consistent Onboarding | BEG',
  description: 'Get new hires productive in days with isolved Learn & Grow, configured by BEG. A consistent onboarding path connected to HR and payroll, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/employee-onboarding-lms' },
  openGraph: {
    title: 'Employee Onboarding LMS | Faster, Consistent Onboarding | BEG',
    description: 'Get new hires productive in days with isolved Learn & Grow, configured by BEG. A consistent onboarding path connected to HR and payroll, nationwide.',
    url: 'https://www.beghr.com/services/lms-learning-management/employee-onboarding-lms',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Employee Onboarding LMS | Faster, Consistent Onboarding | BEG', description: 'Get new hires productive in days with isolved Learn & Grow, configured by BEG. A consistent onboarding path connected to HR and payroll, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('employee-onboarding-lms');

const FAQS: [string, string][] = [
  [
    'How does an LMS help onboarding?',
    'It gives every new hire the same structured path of training and paperwork, delivered on any device, so they get productive faster and nothing gets skipped.',
  ],
  [
    'How long should employee onboarding take?',
    'Most structured onboarding runs across the first 30 to 90 days, with the core training front-loaded into the first week. An LMS delivers that path consistently so every new hire gets the same start and reaches productivity faster.',
  ],
  [
    'Can we use our own onboarding content?',
    'Yes. Upload your own videos, documents, and quizzes alongside the isolved course library, and assign them automatically to new hires.',
  ],
  [
    'Does it connect to payroll and HR?',
    'Yes. Because Learn & Grow is part of the isolved platform, onboarding connects to HR and payroll, so a new hire is not re-keyed from one system to the next.',
  ],
  [
    'What does it cost?',
    'isolved Learn & Grow is included in the Grow tier of isolved HCM, at no separate module charge, starting at $45 per employee per month. Get an instant estimate on screen in about 90 seconds.',
  ],
];

export default function EmployeeOnboardingLmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Employee onboarding LMS',
            description: 'Get new hires productive faster with a consistent onboarding path in isolved Learn & Grow.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/employee-onboarding-lms',
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
              { '@type': 'ListItem', position: 2, name: 'Learning Management System', item: 'https://www.beghr.com/services/lms-learning-management' },
              { '@type': 'ListItem', position: 3, name: 'Employee Onboarding LMS', item: 'https://www.beghr.com/services/lms-learning-management/employee-onboarding-lms' },
            ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <ServicePage
        showHeroImage={false}
        eyebrow="Learning Management · Onboarding"
        title="Get new hires productive in days, not weeks"
        description="A strong first week decides whether a new hire stays. isolved Learn & Grow, configured by BEG, gives every new hire a consistent onboarding path, including your own content, and connects it to HR and payroll so nothing gets re-keyed."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'Consistent', label: 'The same strong start for every hire' },
          { value: 'Faster', label: 'Productive in days, not weeks' },
          { value: 'Connected', label: 'Into HR and payroll, no re-keying' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Onboarding Problem</p>
              <h2>A rough first week is the fastest way to lose a new hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Week one',
                  label: 'Decides whether they stay',
                  sub: 'New hires form their opinion of the job fast. A scattered, inconsistent first week tells them the rest will be the same.',
                },
                {
                  stat: 'Inconsistent',
                  label: 'Every manager onboards differently',
                  sub: 'When onboarding lives in one manager memory, no two new hires get the same start, and required steps get skipped.',
                },
                {
                  stat: 'Re-keyed',
                  label: 'The same data entered again and again',
                  sub: 'When onboarding is disconnected from HR and payroll, someone re-enters the same information into every system by hand.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What This Solves</p>
              <h2>Onboarding that is consistent, fast, and connected</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'A consistent path for every hire',
                  body: 'Every new employee runs the same onboarding sequence of training and paperwork, so nothing depends on who is managing them.',
                },
                {
                  title: 'Productive in days',
                  body: 'Structured training, including your own content, gets new hires up to speed faster than shadowing until it sticks.',
                },
                {
                  title: 'Connected to HR and payroll',
                  body: 'Because it lives in isolved, onboarding hands off into HR and payroll instead of being re-entered by hand.',
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
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From offer accepted to productive in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG builds your onboarding path',
                  body: 'Your training, forms, and required courses get configured into one consistent sequence for new hires.',
                },
                {
                  num: '02',
                  title: 'New hires run it on any device',
                  body: 'The moment someone is hired, their onboarding assigns automatically and they complete it from anywhere.',
                },
                {
                  num: '03',
                  title: 'Records flow into HR and payroll',
                  body: 'Completion and employee data connect to the rest of isolved, so nothing gets re-keyed.',
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
        <section className="section">
          <div className="container" style={{ maxWidth: '760px' }}>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center' }}>
              Further reading and sources: <a href="https://www.td.org/content/press-release/atd-research-spending-on-employee-training-remains-strong" target="_blank" rel="noopener noreferrer">ATD, employee training spend research</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Ready?</p>
              <h2>See your isolved Learn &amp; Grow price before you talk to anyone</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Employee onboarding, answered</h2>
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
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link href="/services/lms-learning-management" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Learning Management System overview</Link>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
