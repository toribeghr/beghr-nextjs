import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Church Child Protection Training Software | BEG',
  description: 'Assign Safe Sanctuaries training, track background checks and renewals, prove compliance instantly. See isolved Learn & Grow pricing for churches.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/church' },
  openGraph: {
    title: 'Church Child Protection Training Software | BEG',
    description: 'Assign Safe Sanctuaries training, track background checks and renewals, prove compliance instantly. See isolved Learn & Grow pricing for churches.',
    url: 'https://www.beghr.com/services/lms-learning-management/church',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Church Child Protection Training Software | BEG', description: 'Assign Safe Sanctuaries training, track background checks and renewals, prove compliance instantly. See isolved Learn & Grow pricing for churches.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('church');

const FAQS: [string, string][] = [
  [
    'What is Safe Sanctuaries training and who needs it?',
    'Safe Sanctuaries is a child and vulnerable adult protection training, typically a 90-minute course with an assessment, required for any staff member or volunteer who works with children, youth, or vulnerable adults. isolved Learn & Grow assigns the course to every relevant volunteer and keeps a dated completion record.',
  ],
  [
    'How often should church volunteers get background checks?',
    'Denominational guidance commonly recommends a national background check every three years for anyone supervising children or vulnerable adults. Learn & Grow tracks each volunteer’s last check date and flags who is due for renewal.',
  ],
  [
    'Can we upload our own training content?',
    'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, so your specific churches training lives in one system.',
  ],
  [
    'What does isolved Learn & Grow cost?',
    'It is bundled into the Grow tier of isolved HCM at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite. Get an instant estimate on screen in about 90 seconds.',
  ],
  [
    'Do you serve employers in my state?',
    'Yes. BEG configures and supports isolved Learn & Grow for churches employers in all 50 states, delivered remotely nationwide.',
  ],
];

export default function LmsChurchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'A volunteer working with kids without a background check or Safe Sanctuaries training is a liability your church cannot afford to carry.',
            description: 'Assign Safe Sanctuaries training, track background checks and renewals, prove compliance instantly. See isolved Learn & Grow pricing for churches.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/church',
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
              { '@type': 'ListItem', position: 3, name: 'Churches & Faith-Based LMS', item: 'https://www.beghr.com/services/lms-learning-management/church' },
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
        eyebrow="Learning Management · Churches &amp; Faith-Based"
        title="A volunteer working with kids without a background check or Safe Sanctuaries training is a liability your church cannot afford to carry."
        description="In churches, a training gap shows up as a citation, a lawsuit, or a lost license, not just a missing checkbox. isolved Learn & Grow, resold and configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you audit-ready proof on demand, for churches teams and all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'One system', label: 'Every course and completion in one place' },
          { value: 'Built for Churches', label: 'Configured to your roles and requirements' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Training Problem</p>
              <h2>Where training compliance actually bites in churches</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '90 minutes',
                  label: 'Typical Safe Sanctuaries course length',
                  sub: 'Safe Sanctuaries training is commonly delivered as a 90-minute course with interactive modules and a comprehension assessment, required for every staff member and volunteer working with children, youth, or vulnerable adults.',
                },
                {
                  stat: 'Every 3 years',
                  label: 'Recommended background check cycle',
                  sub: 'Denominational guidance recommends every staff member or volunteer working with vulnerable populations complete a national background check at least every three years, and tracking that cycle by hand across dozens of volunteers gets missed.',
                },
                {
                  stat: '1996 mandate',
                  label: 'Denominational policy requirement',
                  sub: 'Since a 1996 General Conference mandate, United Methodist churches and many other denominations require a documented child protection policy covering background checks, training, and reporting procedures for every congregation.',
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
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered training to one tracked system in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Learn & Grow to your requirements',
                  body: 'Your roles, required courses, and renewal schedules get built in around how churches actually trains, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Assign courses and upload your own content',
                  body: 'Use the isolved course library or upload your own videos, documents, and quizzes, then assign them by role, location, or team.',
                },
                {
                  num: '03',
                  title: 'Track completions and stay audit-ready',
                  body: 'Every completion, score, and due date is tracked automatically, so your team stays current and you can prove it on demand.',
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
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What This Solves</p>
              <h2>Training built for how churches teams actually operate</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Assign Safe Sanctuaries training to every volunteer',
                  body: 'isolved Learn & Grow lets a church push child protection training to staff and volunteers before they are ever alone with a child, with a documented completion record.',
                },
                {
                  title: 'Track background check renewal cycles',
                  body: 'Set background check dates for every volunteer and staff member and get reminders before the recommended renewal window closes.',
                },
                {
                  title: 'Prove compliance to your denomination or insurer',
                  body: 'Pull a complete roster of trained, background-checked volunteers instantly when your conference, insurer, or a concerned parent asks for proof.',
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
        <section className="section">
          <div className="container" style={{ maxWidth: '760px' }}>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center' }}>
              Further reading and sources: <a href="https://www.txcumc.org/safe-sanctuary" target="_blank" rel="noopener noreferrer">Safe Sanctuary Training Overview</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Go Deeper</p>
              <h2>More on learning management and the rest of the BEG stack</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>See the platform itself</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/lms-learning-management/isolved-learn-grow">Inside isolved Learn &amp; Grow</Link>: what the platform actually does.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/lms-learning-management/lms-pricing">See pricing</Link> for isolved Learn &amp; Grow.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for your team</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link>, fully handled in your existing system.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, time, benefits, and Learn &amp; Grow on one platform.
                </p>
              </div>
            </div>
            <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/services/lms-learning-management" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Learning Management System overview</Link>
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
              <h2>Learning management for churches, answered</h2>
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
