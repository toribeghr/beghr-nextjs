import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Brewery Safety and Compliance Training Software | BEG',
  description: 'Assign OSHA brewery safety and alcohol server training, track certifications, prove compliance instantly. See isolved Learn & Grow pricing.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/brewery' },
  openGraph: {
    title: 'Brewery Safety and Compliance Training Software | BEG',
    description: 'Assign OSHA brewery safety and alcohol server training, track certifications, prove compliance instantly. See isolved Learn & Grow pricing.',
    url: 'https://www.beghr.com/services/lms-learning-management/brewery',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Brewery Safety and Compliance Training Software | BEG', description: 'Assign OSHA brewery safety and alcohol server training, track certifications, prove compliance instantly. See isolved Learn & Grow pricing.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('brewery');

const FAQS: [string, string][] = [
  [
    'What OSHA training do breweries need?',
    'Breweries face unique hazards including CO2 asphyxiation, ammonia refrigeration, and confined space entry, all requiring documented, task-specific safety training beyond general industry basics. isolved Learn & Grow assigns brewery-specific safety modules by department and tracks completion.',
  ],
  [
    'Do brewery taproom staff need alcohol server certification?',
    'Most states require or strongly recommend responsible beverage service training for anyone serving alcohol, with certifications typically valid a few years before renewal. Learn & Grow tracks server certification status and expiration for every taproom employee, at every location.',
  ],
  [
    'Can we upload our own training content?',
    'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, so your specific breweries training lives in one system.',
  ],
  [
    'What does isolved Learn & Grow cost?',
    'It is priced per employee per month and added to your isolved HCM platform. Volume pricing lowers the per-employee rate as your headcount grows. Get an instant estimate on screen in about 90 seconds.',
  ],
  [
    'Do you serve employers in my state?',
    'Yes. BEG configures and supports isolved Learn & Grow for breweries employers in all 50 states, delivered remotely nationwide.',
  ],
];

export default function LmsBreweryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'A tasting room pouring without a certified alcohol server or a brewhouse running without OSHA safety training is one incident away from a shutdown.',
            description: 'Assign OSHA brewery safety and alcohol server training, track certifications, prove compliance instantly. See isolved Learn & Grow pricing.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/brewery',
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
              { '@type': 'ListItem', position: 3, name: 'Breweries LMS', item: 'https://www.beghr.com/services/lms-learning-management/brewery' },
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
        eyebrow="Learning Management · Breweries"
        title="A tasting room pouring without a certified alcohol server or a brewhouse running without OSHA safety training is one incident away from a shutdown."
        description="In breweries, a training gap shows up as a citation, a lawsuit, or a lost license, not just a missing checkbox. isolved Learn & Grow, resold and configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you audit-ready proof on demand, for breweries teams and all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" />}
        heroStats={[
          { value: 'One system', label: 'Every course and completion in one place' },
          { value: 'Built for Breweries', label: 'Configured to your roles and requirements' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Training Problem</p>
              <h2>Where training compliance actually bites in breweries</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'CO2, ammonia, confined space',
                  label: 'Brewery-specific OSHA hazards',
                  sub: 'Breweries face unique OSHA exposure from CO2 asphyxiation risk, ammonia refrigeration systems, and confined space entry into tanks, all of which require documented, task-specific safety training.',
                },
                {
                  stat: '3 years typical',
                  label: 'Alcohol server certification validity',
                  sub: 'Responsible beverage service certifications for tasting room and taproom staff are typically valid around three years, and multi-location brewers need a system to track expiration per employee, per state.',
                },
                {
                  stat: 'Free BA-sponsored courses',
                  label: 'Brewers Association safety training',
                  sub: 'The Brewers Association offers online brewery safety courses covering task-based hazard recognition, and completion needs to be documented per employee to demonstrate a functioning safety program.',
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
                  body: 'Your roles, required courses, and renewal schedules get built in around how breweries actually trains, not a generic template.',
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
              <h2>Training built for how breweries teams actually operate</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Assign OSHA brewery safety training by department',
                  body: 'isolved Learn & Grow lets you push CO2, ammonia, and confined space safety training to production staff while assigning responsible beverage service training separately to taproom staff.',
                },
                {
                  title: 'Track alcohol server certification expiration',
                  body: 'Get renewal reminders before a tasting room employee’s server certification lapses, across every location you operate.',
                },
                {
                  title: 'Prove compliance for insurance and state alcohol boards',
                  body: 'Generate a complete safety and server training report in minutes when your insurance carrier, state alcohol control board, or OSHA asks for documentation.',
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
              Further reading and sources: <a href="https://www.brewersassociation.org/educational-publications/a-guide-to-understanding-basic-osha-brewery-compliance/" target="_blank" rel="noopener noreferrer">Brewers Association Guide to OSHA Brewery Compliance</a>, <a href="https://www.brewersassociation.org/online-courses/brewery-safety/" target="_blank" rel="noopener noreferrer">Brewers Association Brewery Safety Courses</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
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
              <h2>Learning management for breweries, answered</h2>
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
