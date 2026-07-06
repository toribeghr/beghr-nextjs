import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'LMS Pricing | isolved Learning Management Cost Per Employee | BEG',
  description: 'How isolved Learning Management is priced: bundled into the Grow tier of isolved HCM, no separate module fee. Get an instant estimate for your team size.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/lms-pricing' },
  openGraph: {
    title: 'LMS Pricing | isolved Learning Management Cost Per Employee | BEG',
    description: 'How isolved Learning Management is priced: bundled into the Grow tier of isolved HCM, no separate module fee. Get an instant estimate for your team size.',
    url: 'https://www.beghr.com/services/lms-learning-management/lms-pricing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'LMS Pricing | isolved Learning Management Cost Per Employee | BEG', description: 'How isolved Learning Management is priced: bundled into the Grow tier of isolved HCM, no separate module fee. Get an instant estimate for your team size.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-pricing');

const FAQS: [string, string][] = [
  [
    'How is isolved Learning Management priced?',
    'It is bundled into the Grow tier of isolved HCM, at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite alongside Learning Management.',
  ],
  [
    'Is there a separate LMS bill?',
    'No. Learning Management is included once you are on the Grow tier, so it is part of your platform pricing rather than a standalone invoice to manage.',
  ],
  [
    'Can I see my exact price without a call?',
    'Yes. Answer a few questions and get an instant estimate on screen in about 90 seconds. Get Instant Pricing does the math for you.',
  ],
  [
    'Does BEG charge for setup?',
    'BEG configures and implements Learning Management as part of the relationship. Any one-time setup is quoted transparently, never a surprise professional-services invoice.',
  ],
];

export default function LmsPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'isolved Learning Management pricing',
            description: 'How isolved Learning Management is priced: bundled into the Grow tier of isolved HCM, no separate module fee.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/lms-learning-management/lms-pricing',
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
              { '@type': 'ListItem', position: 3, name: 'LMS Pricing', item: 'https://www.beghr.com/services/lms-learning-management/lms-pricing' },
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
        eyebrow="Learning Management · Pricing"
        title="isolved Learning Management pricing"
        description="isolved Learning Management is bundled into the Grow tier of isolved HCM rather than sold on its own. There is no separate LMS fee: your total is the Grow tier's per-employee rate. Here is how it works, and how to get your exact number in about 90 seconds."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'Bundled', label: 'Included in the Grow tier, no separate fee' },
          { value: '$45 PEPM', label: "Grow tier's starting per-employee rate" },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section">
          <div className="container" style={{ maxWidth: '760px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How Pricing Works</p>
              <h2>No separate LMS bill, just the Grow tier it lives on</h2>
            </div>
            <p className="reveal" style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#444444', maxWidth: '680px', margin: '1.1rem auto 0' }}>isolved Learning Management is bundled into the Grow tier of isolved HCM rather than sold as a standalone product. That means training lives on the same system as payroll, HR, and onboarding, with one relationship and one bill.</p>
            <p className="reveal" style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#444444', maxWidth: '680px', margin: '1.1rem auto 0' }}>The Grow tier starts at $45 per employee per month and includes Learning Management alongside the rest of the full talent suite (performance management, engagement, compensation and more), so there is no extra per-learner charge on top.</p>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '640px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What's Included</p>
              <h2>Grow tier: everything Learning Management needs, in one price</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.95rem', color: '#333333', lineHeight: '1.6' }}>
                Learning Management System courses, certifications and career paths, plus the Content Library of ready-made training, are both included the moment you're on the Grow tier. Every tier below Grow (Pay, Build, Manage, Comply) does not include Learning Management, so the tier itself is the only decision that matters here.
              </p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#333333', lineHeight: '1.6' }}>
                Your exact number depends on headcount. Get it on screen in about 90 seconds, no call required.
              </p>
            </div>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Shapes Your Number</p>
              <h2>Two things that determine your monthly price</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'How many employees',
                  body: 'The Grow tier is priced per employee per month, so headcount is the biggest driver of your total.',
                },
                {
                  title: 'The rest of your platform',
                  body: 'Learning Management is bundled into isolved HCM, so your total reflects the full Grow tier, not a separate LMS contract.',
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
              Further reading and sources: <a href="https://www.td.org/content/press-release/atd-research-spending-on-employee-training-remains-strong" target="_blank" rel="noopener noreferrer">ATD, employee training spend research</a>, <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Ready?</p>
              <h2>Get your exact isolved Learning Management price in about 90 seconds</h2>
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
              <h2>LMS pricing, answered</h2>
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
