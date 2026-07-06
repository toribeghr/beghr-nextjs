import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'LMS for Compliance Training | Assign, Track, Prove | BEG',
  description: 'Assign, track, and prove safety, harassment, HIPAA, and industry compliance training with isolved Learn & Grow, configured by BEG. Audit-ready records on demand.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/lms-for-compliance-training' },
  openGraph: {
    title: 'LMS for Compliance Training | Assign, Track, Prove | BEG',
    description: 'Assign, track, and prove safety, harassment, HIPAA, and industry compliance training with isolved Learn & Grow, configured by BEG. Audit-ready records on demand.',
    url: 'https://www.beghr.com/services/lms-learning-management/lms-for-compliance-training',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'LMS for Compliance Training | Assign, Track, Prove | BEG', description: 'Assign, track, and prove safety, harassment, HIPAA, and industry compliance training with isolved Learn & Grow, configured by BEG. Audit-ready records on demand.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-for-compliance-training');

const FAQS: [string, string][] = [
  [
    'What compliance training can we run?',
    'Safety and OSHA, harassment prevention, HIPAA, data security, and industry-specific requirements, plus any of your own required courses uploaded into the system.',
  ],
  [
    'How does it prove compliance?',
    'Required courses are assigned by role with due dates and renewals. Completions and pass rates are tracked, so you can produce an audit-ready record on demand.',
  ],
  [
    'Can we upload our own required courses?',
    'Yes. Alongside the isolved course library, upload your own videos, documents, and quizzes so your specific requirements live in the same system.',
  ],
  [
    'What does it cost?',
    'isolved Learn & Grow is included in the Grow tier of isolved HCM, at no separate module charge, starting at $45 per employee per month. Get an instant estimate on screen in about 90 seconds.',
  ],
];

export default function LmsForComplianceTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'LMS for compliance training',
            description: 'Assign, track, and prove required compliance training with isolved Learn & Grow.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/lms-for-compliance-training',
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
              { '@type': 'ListItem', position: 3, name: 'LMS for Compliance Training', item: 'https://www.beghr.com/services/lms-learning-management/lms-for-compliance-training' },
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
        eyebrow="Learning Management · Compliance Training"
        title="Assign, track, and prove compliance training without the binder"
        description="Safety, harassment, HIPAA, and industry-specific training cannot lapse, and a sign-in sheet is not proof. isolved Learn & Grow, configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you an audit-ready record on demand."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'Assigned', label: 'By role, with due dates and reminders' },
          { value: 'Tracked', label: 'Completions and renewals, automatically' },
          { value: 'Proven', label: 'Audit-ready record on demand' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Compliance Problem</p>
              <h2>Required training is only useful if you can prove it</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Deadlines',
                  label: 'Requirements have renewal dates',
                  sub: 'Safety, harassment, and industry certifications expire. Without automatic reminders, a lapse is discovered after it has already become a liability.',
                },
                {
                  stat: 'Turnover',
                  label: 'Every new hire resets the clock',
                  sub: 'New employees need required training before they are fully on the job. Doing that by hand for every hire is slow and easy to skip.',
                },
                {
                  stat: 'Audits',
                  label: 'Someone will ask for proof',
                  sub: 'Regulators, insurers, and clients ask who completed what and when. A binder makes that answer slow. A dashboard makes it instant.',
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
              <h2>Compliance training that assigns, tracks, and proves itself</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Assign by role automatically',
                  body: 'Required courses are assigned the moment someone is hired, by role, with due dates and reminders built in.',
                },
                {
                  title: 'Track renewals before they lapse',
                  body: 'Expiration dates and refreshers are tracked, and reminders go out ahead of time, so nothing quietly expires.',
                },
                {
                  title: 'Produce an audit-ready record',
                  body: 'Completions, pass rates, and dates live in one dashboard, so an audit or client request becomes a report you pull.',
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
              <h2>From required to proven in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG builds your requirements in',
                  body: 'Your required courses, roles, and renewal schedules get configured so the right training reaches the right people.',
                },
                {
                  num: '02',
                  title: 'Assign and remind automatically',
                  body: 'Learn & Grow assigns by role, sets due dates, and reminds people, so completion does not depend on chasing.',
                },
                {
                  num: '03',
                  title: 'Prove it on demand',
                  body: 'Pull an audit-ready report of who completed, passed, and is current whenever anyone asks.',
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
              Further reading and sources: <a href="https://www.osha.gov/training" target="_blank" rel="noopener noreferrer">OSHA worker training</a>, <a href="https://www.hhs.gov/hipaa/for-professionals/training/index.html" target="_blank" rel="noopener noreferrer">HHS, HIPAA training</a>, <a href="https://www.eeoc.gov/training-institute/harassment-prevention-and-respectful-workplaces-training" target="_blank" rel="noopener noreferrer">EEOC harassment-prevention training</a>.
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
              <h2>Compliance training, answered</h2>
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
