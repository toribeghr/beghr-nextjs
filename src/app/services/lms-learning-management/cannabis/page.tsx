import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cannabis Compliance Training Software | BEG',
  description: 'Assign state responsible vendor and seed-to-sale training, track annual renewals, prove compliance instantly. See isolved Learn & Grow pricing.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/cannabis' },
  openGraph: {
    title: 'Cannabis Compliance Training Software | BEG',
    description: 'Assign state responsible vendor and seed-to-sale training, track annual renewals, prove compliance instantly. See isolved Learn & Grow pricing.',
    url: 'https://www.beghr.com/services/lms-learning-management/cannabis',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis Compliance Training Software | BEG', description: 'Assign state responsible vendor and seed-to-sale training, track annual renewals, prove compliance instantly. See isolved Learn & Grow pricing.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('cannabis');

const FAQS: [string, string][] = [
  [
    'What is Responsible Vendor Training for cannabis employees?',
    'Most states require cannabis business agents to complete approved Responsible Vendor Training covering topics like preventing sales to minors and public health compliance, often required annually or within a set window after hire. isolved Learn & Grow tracks each employee’s certificate and renewal deadline by state.',
  ],
  [
    'What happens if a cannabis employee’s training lapses?',
    'Without a valid, current Responsible Vendor Training certificate, an employee generally cannot legally handle, sell, or transport cannabis products under state law. Learn & Grow flags expiring certificates before they lapse so agents stay compliant.',
  ],
  [
    'Can we upload our own training content?',
    'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, so your specific cannabis training lives in one system.',
  ],
  [
    'What does isolved Learn & Grow cost?',
    'It is priced per employee per month and added to your isolved HCM platform. Volume pricing lowers the per-employee rate as your headcount grows. Get an instant estimate on screen in about 90 seconds.',
  ],
  [
    'Do you serve employers in my state?',
    'Yes. BEG configures and supports isolved Learn & Grow for cannabis employers in all 50 states, delivered remotely nationwide.',
  ],
];

export default function LmsCannabisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'An untrained budtender selling to a minor or a seed-to-sale tracking gap can cost a cannabis operator their license overnight.',
            description: 'Assign state responsible vendor and seed-to-sale training, track annual renewals, prove compliance instantly. See isolved Learn & Grow pricing.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/cannabis',
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
              { '@type': 'ListItem', position: 3, name: 'Cannabis LMS', item: 'https://www.beghr.com/services/lms-learning-management/cannabis' },
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
        eyebrow="Learning Management · Cannabis"
        title="An untrained budtender selling to a minor or a seed-to-sale tracking gap can cost a cannabis operator their license overnight."
        description="In cannabis, a training gap shows up as a citation, a lawsuit, or a lost license, not just a missing checkbox. isolved Learn & Grow, resold and configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you audit-ready proof on demand, for cannabis teams and all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" />}
        heroStats={[
          { value: 'One system', label: 'Every course and completion in one place' },
          { value: 'Built for Cannabis', label: 'Configured to your roles and requirements' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Training Problem</p>
              <h2>Where training compliance actually bites in cannabis</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Annual renewal',
                  label: 'Responsible Vendor Training cycle',
                  sub: 'States like Maryland require every cannabis business agent to complete an approved Responsible Vendor Training course before January 1st each year to remain compliant.',
                },
                {
                  stat: 'Within 90 days of hire',
                  label: 'New employee training deadline',
                  sub: 'Massachusetts requires cannabis employees who handle or sell product to complete responsible vendor training within 90 days of hire, on top of an annual general training minimum.',
                },
                {
                  stat: 'No certificate, no sales',
                  label: 'Training gates legal work',
                  sub: 'Employees of licensed cannabis businesses generally cannot legally handle, sell, or transport product without a valid, state-approved Responsible Vendor Training certificate on file.',
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
                  body: 'Your roles, required courses, and renewal schedules get built in around how cannabis actually trains, not a generic template.',
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
              <h2>Training built for how cannabis teams actually operate</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Assign state-specific responsible vendor training',
                  body: 'isolved Learn & Grow lets multi-state cannabis operators configure the correct Responsible Vendor and seed-to-sale training per state license, matched to each jurisdiction’s specific hours and topics.',
                },
                {
                  title: 'Track new hire deadlines and annual renewals',
                  body: 'Get automatic alerts as a new budtender’s 90-day training deadline approaches, and again as annual renewal windows come up for every agent.',
                },
                {
                  title: 'Prove compliance to state cannabis regulators',
                  body: 'Pull a per-location, per-employee training certificate report instantly when a state cannabis control commission audits your license.',
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
              Further reading and sources: <a href="https://cannabis.maryland.gov/pages/responsible_vendor_training.aspx" target="_blank" rel="noopener noreferrer">Maryland Cannabis Responsible Vendor Training</a>, <a href="https://masscannabiscontrol.com/applicants-licensees/responsible-vendor-training/" target="_blank" rel="noopener noreferrer">Massachusetts Cannabis Control Commission Responsible Vendor Training</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
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
              <h2>Learning management for cannabis, answered</h2>
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
