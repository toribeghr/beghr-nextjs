import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'isolved Learn & Grow | LMS Resold and Configured by BEG',
  description: 'Inside isolved Learn & Grow, the learning management system BEG resells, configures, and supports. Course library, content upload, tracking, and reporting.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/isolved-learn-grow' },
  openGraph: {
    title: 'isolved Learn & Grow | LMS Resold and Configured by BEG',
    description: 'Inside isolved Learn & Grow, the learning management system BEG resells, configures, and supports. Course library, content upload, tracking, and reporting.',
    url: 'https://www.beghr.com/services/lms-learning-management/isolved-learn-grow',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Learn & Grow | LMS Resold and Configured by BEG', description: 'Inside isolved Learn & Grow, the learning management system BEG resells, configures, and supports. Course library, content upload, tracking, and reporting.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('isolved-learn-grow');

const FAQS: [string, string][] = [
  [
    'What is isolved Learn & Grow?',
    'isolved Learn & Grow is the learning management system built into the isolved platform. It hosts training courses, lets you upload your own content, assigns training by role, and tracks completion, with social learning and gamification built in.',
  ],
  [
    'Does BEG or isolved build it?',
    'isolved builds and maintains Learn & Grow. BEG resells, configures, implements, and supports it so it fits your roles, courses, and workflow from day one.',
  ],
  [
    'Can we upload our own courses?',
    'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes.',
  ],
  [
    'What does it cost?',
    'It is bundled into the Grow tier of isolved HCM at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite. Get an instant estimate on screen in about 90 seconds.',
  ],
];

export default function IsolvedLearnGrowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Inside isolved Learn & Grow',
            description: 'What the isolved Learn & Grow learning management system does and how BEG configures it.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/isolved-learn-grow',
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
              { '@type': 'ListItem', position: 3, name: 'isolved Learn & Grow', item: 'https://www.beghr.com/services/lms-learning-management/isolved-learn-grow' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'isolved Learn & Grow',
            category: 'Learning Management System',
            brand: { '@type': 'Brand', name: 'isolved' },
            description: 'Learning management system resold, configured, implemented, and supported by Business Executive Group.',
            url: 'https://www.beghr.com/services/lms-learning-management/isolved-learn-grow',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '45.00',
              description: 'Included in the Grow tier of the isolved HCM platform at no separate module charge, starting at $45 per employee per month.',
              seller: { '@type': 'Organization', name: 'Business Executive Group' },
            },
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
        eyebrow="Learning Management · The Platform"
        title="Inside isolved Learn & Grow"
        description="isolved Learn & Grow is the learning management system built into the isolved platform. BEG resells, configures, and supports it so your team can host courses, upload your own content, assign training by role, and track every completion in one place, nationwide."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'One platform', label: 'Courses, tracking, and reporting together' },
          { value: 'Your content', label: 'Upload your own training too' },
          { value: 'isolved', label: 'Built in, configured by BEG' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Platform</p>
              <h2>What isolved Learn &amp; Grow does</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Course library',
                  body: 'A ready-made library of training courses you can assign right away, from compliance to professional development.',
                },
                {
                  heading: 'Upload your own content',
                  body: 'Add your own videos, documents, slide decks, and quizzes so your specific training lives in the same system.',
                },
                {
                  heading: 'Social learning and gamification',
                  body: 'Keep learners engaged with social learning and gamification built into the platform, not bolted on.',
                },
                {
                  heading: 'Assignments and reminders',
                  body: 'Assign training by role, location, or team, with due dates, renewals, and automatic reminders.',
                },
                {
                  heading: 'Completion tracking and reporting',
                  body: 'See who completed, who passed, and who is due to renew in one dashboard, ready for any audit.',
                },
                {
                  heading: 'Mobile and connected to HR',
                  body: 'Learners train from any device, and records connect to onboarding, HR, and payroll inside isolved.',
                },
              ].map(({ heading, body }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How BEG Sets It Up</p>
              <h2>From license to live training in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures it to your roles and courses',
                  body: 'We build your required courses, renewal schedules, and assignment rules around how your team actually trains.',
                },
                {
                  num: '02',
                  title: 'Load the library and your own content',
                  body: 'Use the isolved course library and upload your own material, then assign it by role, location, or team.',
                },
                {
                  num: '03',
                  title: 'BEG supports it year-round',
                  body: 'When you add a course, a location, or a new requirement, BEG is who you call. Not a ticket queue.',
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
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '760px' }}>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center' }}>
              Further reading and sources: <a href="https://www.isolvedhcm.com/talent-management/learning-management-system" target="_blank" rel="noopener noreferrer">isolved Learn &amp; Grow, product</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
            </p>
          </div>
        </section>
        <section className="section section--soft">
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
              <h2>isolved Learn &amp; Grow, answered</h2>
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
