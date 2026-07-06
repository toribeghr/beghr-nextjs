import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering Firm CE Tracking Software | BEG',
  description: 'Assign PDH continuing education and safety training, track hours toward state license renewal, prove compliance instantly. See isolved pricing.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/engineering' },
  openGraph: {
    title: 'Engineering Firm CE Tracking Software | BEG',
    description: 'Assign PDH continuing education and safety training, track hours toward state license renewal, prove compliance instantly. See isolved pricing.',
    url: 'https://www.beghr.com/services/lms-learning-management/engineering',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Engineering Firm CE Tracking Software | BEG', description: 'Assign PDH continuing education and safety training, track hours toward state license renewal, prove compliance instantly. See isolved pricing.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('engineering');

const FAQS: [string, string][] = [
  [
    'How many PDH hours does a professional engineer need?',
    'Most states require between 15 and 36 professional development hours per renewal cycle, with cycles ranging from annual to triennial depending on the state board. isolved Learn & Grow tracks each engineer’s hours against their specific state’s requirement and cycle.',
  ],
  [
    'Do engineers need ethics-specific continuing education?',
    'Some states, like Texas, require a set number of ethics hours within the total PDH requirement each year. Learn & Grow separates ethics completion from general PDH tracking so firms can confirm both requirements are met, not just the total hour count.',
  ],
  [
    'Can we upload our own training content?',
    'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, so your specific engineering training lives in one system.',
  ],
  [
    'What does isolved Learn & Grow cost?',
    'It is priced per employee per month and added to your isolved HCM platform. Volume pricing lowers the per-employee rate as your headcount grows. Get an instant estimate on screen in about 90 seconds.',
  ],
  [
    'Do you serve employers in my state?',
    'Yes. BEG configures and supports isolved Learn & Grow for engineering employers in all 50 states, delivered remotely nationwide.',
  ],
];

export default function LmsEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'A firm that lets a PE’s license lapse over missed continuing education hours can lose a project stamp right when a client needs it signed.',
            description: 'Assign PDH continuing education and safety training, track hours toward state license renewal, prove compliance instantly. See isolved pricing.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/engineering',
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
              { '@type': 'ListItem', position: 3, name: 'Engineering LMS', item: 'https://www.beghr.com/services/lms-learning-management/engineering' },
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
        eyebrow="Learning Management · Engineering"
        title="A firm that lets a PE’s license lapse over missed continuing education hours can lose a project stamp right when a client needs it signed."
        description="In engineering, a training gap shows up as a citation, a lawsuit, or a lost license, not just a missing checkbox. isolved Learn & Grow, resold and configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you audit-ready proof on demand, for engineering teams and all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" />}
        heroStats={[
          { value: 'One system', label: 'Every course and completion in one place' },
          { value: 'Built for Engineering', label: 'Configured to your roles and requirements' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Training Problem</p>
              <h2>Where training compliance actually bites in engineering</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '15 to 36 PDH',
                  label: 'State PDH ranges per cycle',
                  sub: 'Most states require between 15 and 36 professional development hours per renewal cycle for a licensed PE, with no national standard since each state board sets its own rule.',
                },
                {
                  stat: '1 ethics hour',
                  label: 'Common ethics carve-out',
                  sub: 'States like Texas require engineers to complete 15 PDH annually with at least one hour specifically in ethics, a requirement that is easy to lose track of within broader technical training.',
                },
                {
                  stat: 'Biennial or triennial cycles',
                  label: 'Renewal windows vary by state',
                  sub: 'Some states set annual PDH requirements while others use two or three-year cycles, meaning multi-state engineering firms must track several different renewal clocks simultaneously.',
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
                  body: 'Your roles, required courses, and renewal schedules get built in around how engineering actually trains, not a generic template.',
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
              <h2>Training built for how engineering teams actually operate</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Assign PDH and ethics training by license state',
                  body: 'isolved Learn & Grow lets a firm configure PDH tracking per engineer’s licensing jurisdiction, so multi-state PEs are not managed against a single generic requirement.',
                },
                {
                  title: 'Track hours toward each state’s renewal cycle',
                  body: 'See exactly how many PDH and ethics hours each licensed engineer has banked against their specific annual, biennial, or triennial deadline.',
                },
                {
                  title: 'Prove compliance for license renewal and project stamps',
                  body: 'Generate a PDH transcript instantly when a state board audit or client due diligence request requires documented proof of an engineer’s current hours.',
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
              Further reading and sources: <a href="https://ncees.org/continuing-education/" target="_blank" rel="noopener noreferrer">NCEES Continuing Education for Engineers</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
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
              <PricingCta service="hcm-software" label="Get Instant Pricing" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Learning management for engineering, answered</h2>
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
