import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'LMS vs DIY Training | When Spreadsheets Stop Working | BEG',
  description: 'Spreadsheets and binders track attendance, not compliance. See where DIY training breaks down and what an LMS like isolved Learn & Grow changes.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/lms-vs-diy-training' },
  openGraph: {
    title: 'LMS vs DIY Training | When Spreadsheets Stop Working | BEG',
    description: 'Spreadsheets and binders track attendance, not compliance. See where DIY training breaks down and what an LMS like isolved Learn & Grow changes.',
    url: 'https://www.beghr.com/services/lms-learning-management/lms-vs-diy-training',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'LMS vs DIY Training | When Spreadsheets Stop Working | BEG', description: 'Spreadsheets and binders track attendance, not compliance. See where DIY training breaks down and what an LMS like isolved Learn & Grow changes.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-vs-diy-training');

const FAQS: [string, string][] = [
  [
    'What is wrong with tracking training in spreadsheets?',
    'Spreadsheets and sign-in sheets record attendance, not completion, scores, or renewals. They do not remind anyone, do not prove compliance, and break down the moment you have more than a handful of people or requirements.',
  ],
  [
    'When do teams outgrow DIY training?',
    'Usually when compliance requirements, turnover, or multiple locations make manual tracking too slow and too risky. If you cannot answer who is due to renew this month in a few seconds, you have outgrown it.',
  ],
  [
    'What does an LMS change?',
    'An LMS like isolved Learn & Grow assigns training by role, tracks completion automatically, reminds people, and produces an audit-ready record on demand.',
  ],
  [
    'What does it cost?',
    'isolved Learn & Grow is included in the Grow tier of isolved HCM, at no separate module charge, starting at $45 per employee per month. Get an instant estimate on screen in about 90 seconds.',
  ],
];

export default function LmsVsDiyTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'LMS vs DIY training',
            description: 'Where do-it-yourself training in spreadsheets and binders breaks down, and what an LMS changes.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/lms-vs-diy-training',
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
              { '@type': 'ListItem', position: 3, name: 'LMS vs DIY Training', item: 'https://www.beghr.com/services/lms-learning-management/lms-vs-diy-training' },
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
        eyebrow="Learning Management · Compare"
        title="LMS vs DIY training: spreadsheets, binders, and free videos"
        description="Tracking training in spreadsheets and binders works until it does not. Here is where do-it-yourself training breaks down as your team grows, and what an LMS like isolved Learn & Grow changes."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'One system', label: 'Instead of five tools and a binder' },
          { value: 'Audit-ready', label: 'Proof on demand, not a scramble' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where DIY Breaks Down</p>
              <h2>Do-it-yourself training works until it quietly stops working</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'No proof',
                  label: 'Attendance is not completion',
                  sub: 'A sign-in sheet says someone was in the room. It does not say they finished, passed, or understood, which is what an auditor or client actually asks for.',
                },
                {
                  stat: 'No reminders',
                  label: 'Renewals slip through',
                  sub: 'Certifications and required refreshers have expiration dates. A spreadsheet will not warn you before one lapses, so you find out when it is already a problem.',
                },
                {
                  stat: 'No scale',
                  label: 'It falls apart with volume',
                  sub: 'One location and ten people is manageable by hand. Multiple sites, turnover, and layered requirements are not. The manual approach breaks exactly when the stakes rise.',
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
              <p className="eyebrow">What An LMS Changes</p>
              <h2>What isolved Learn &amp; Grow does that a folder cannot</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Assigns automatically',
                  body: 'Required training is assigned by role the moment someone is hired, with due dates and reminders, so nothing depends on memory.',
                },
                {
                  title: 'Tracks and proves',
                  body: 'Completion, scores, and renewal dates are tracked in one dashboard, so proving compliance is a report, not a scramble.',
                },
                {
                  title: 'Scales with you',
                  body: 'Add a location, a requirement, or fifty new hires, and the system handles it. The manual version cannot.',
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
              <p className="eyebrow">Making The Switch</p>
              <h2>From binders to one tracked system in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures Learn & Grow to your requirements',
                  body: 'Your courses, roles, and renewal schedules get built in, so the system matches how you already train.',
                },
                {
                  num: '02',
                  title: 'Move your content in',
                  body: 'Upload your existing training and add from the isolved course library, then assign it by role.',
                },
                {
                  num: '03',
                  title: 'Track everything going forward',
                  body: 'Completions and renewals track automatically from day one, and BEG supports it as you grow.',
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
              <h2>LMS vs DIY training, answered</h2>
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
