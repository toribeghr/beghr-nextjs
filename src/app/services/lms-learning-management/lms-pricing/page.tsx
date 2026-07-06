import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'LMS Pricing | isolved Learn & Grow Cost Per Employee | BEG',
  description: 'How isolved Learn & Grow pricing works: per employee per month, volume pricing that drops as you grow, added to your isolved platform. Get an instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management/lms-pricing' },
  openGraph: {
    title: 'LMS Pricing | isolved Learn & Grow Cost Per Employee | BEG',
    description: 'How isolved Learn & Grow pricing works: per employee per month, volume pricing that drops as you grow, added to your isolved platform. Get an instant estimate.',
    url: 'https://www.beghr.com/services/lms-learning-management/lms-pricing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'LMS Pricing | isolved Learn & Grow Cost Per Employee | BEG', description: 'How isolved Learn & Grow pricing works: per employee per month, volume pricing that drops as you grow, added to your isolved platform. Get an instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-pricing');

const FAQS: [string, string][] = [
  [
    'How is isolved Learn & Grow priced?',
    'Per employee per month, added to your isolved HCM platform rather than sold on its own. The per-employee rate drops as your headcount grows.',
  ],
  [
    'Is there a separate LMS bill?',
    'No. Learn & Grow is a module on your isolved platform, so it is part of your platform pricing rather than a standalone invoice to manage.',
  ],
  [
    'Can I see my exact price without a call?',
    'Yes. Answer a few questions and get an instant estimate on screen in about 90 seconds. Get Instant Pricing does the math for you.',
  ],
  [
    'Does BEG charge for setup?',
    'BEG configures and implements Learn & Grow as part of the relationship. Any one-time setup is quoted transparently, never a surprise professional-services invoice.',
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
            headline: 'isolved Learn & Grow pricing',
            description: 'How isolved Learn & Grow LMS pricing works, per employee per month with volume discounts.',
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
        title="isolved Learn & Grow pricing"
        description="isolved Learn & Grow is priced per employee per month and added to your isolved HCM platform rather than sold on its own. Per-learner pricing drops as your headcount grows. Here is how it works, and how to get your exact number in about 90 seconds."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" />}
        heroStats={[
          { value: 'Per learner', label: 'Priced per employee per month' },
          { value: 'Volume pricing', label: 'The rate drops as you grow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        <section className="section">
          <div className="container" style={{ maxWidth: '760px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How Pricing Works</p>
              <h2>Priced per learner, on the platform you already run</h2>
            </div>
            <p className="reveal" style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#444444', maxWidth: '680px', margin: '1.1rem auto 0' }}>isolved Learn &amp; Grow is priced per employee per month and added to your isolved HCM platform rather than sold as a standalone product. That means training lives on the same system as payroll, HR, and onboarding, with one relationship and one bill.</p>
            <p className="reveal" style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#444444', maxWidth: '680px', margin: '1.1rem auto 0' }}>The per-employee rate drops as your headcount grows, so larger teams pay less per person. Your exact number depends on how many employees are on the platform and how you configure it.</p>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '640px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Volume Pricing</p>
              <h2>Per-learner pricing that drops as you grow</h2>
            </div>
            <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ffffff' }}>
                    <th style={{ padding: '0.7rem 1rem', textAlign: 'left' }}>Employees on the platform</th>
                    <th style={{ padding: '0.7rem 1rem', textAlign: 'right' }}>Per employee / month</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'1 to 24'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$3.00'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'25 to 49'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$2.80'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'50 to 99'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$2.60'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'100 to 249'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$2.40'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'250 to 499'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$2.20'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'500 to 999'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$2.00'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'1,000 to 1,499'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$1.90'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'1,500 to 2,499'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$1.70'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'2,500 or more'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'$1.50'}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.85rem', color: '#888888', marginTop: '1rem', textAlign: 'center', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              isolved Learn &amp; Grow is added to your isolved HCM platform rather than sold on its own. Your exact number depends on headcount and configuration. Get it on screen in about 90 seconds, no call required.
            </p>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Shapes Your Number</p>
              <h2>Three things that determine your monthly price</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'How many employees',
                  body: 'Pricing is per employee per month, and the rate drops at each volume tier, so headcount is the biggest driver.',
                },
                {
                  title: 'Your configuration',
                  body: 'Whether you use the course library, upload your own content, and how many required courses you run all shape setup.',
                },
                {
                  title: 'The rest of your platform',
                  body: 'Learn & Grow is added to isolved HCM, so your total reflects the platform, not a separate LMS contract.',
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
              <h2>Get your exact isolved Learn &amp; Grow price in about 90 seconds</h2>
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
