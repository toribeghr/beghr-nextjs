import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Switch From UKG to isolved | BEG Manages the Move',
  description: 'Switching from UKG to isolved cuts enterprise complexity and cost for mid-market companies. BEG manages the full migration so payroll never misses a beat.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/switch-from-ukg-to-isolved' },
  openGraph: {
    title: 'Switch From UKG to isolved | BEG Manages the Move',
    description: 'Switching from UKG to isolved cuts enterprise complexity and cost for mid-market companies. BEG manages the full migration so payroll never misses a beat.',
    url: 'https://www.beghr.com/services/hcm-software/switch-from-ukg-to-isolved',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Switch From UKG to isolved | BEG Manages the Move', description: 'Cut enterprise complexity and cost. BEG manages the full UKG to isolved migration.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Why do mid-market companies switch from UKG to isolved?',
    a: 'UKG (formerly Ultimate Software and Kronos) is built for large enterprises and carries enterprise pricing, complexity, and implementation timelines to match. Mid-market companies often find they are paying for capabilities they do not need and navigating a system sized for thousands of employees when they have hundreds. The isolved platform is purpose-built for the mid-market.',
  },
  {
    q: 'Will I lose payroll history and employee data when switching from UKG?',
    a: 'No. BEG migrates your historical payroll data, employee records, and benefits information into isolved. Your data is preserved and verified before go-live.',
  },
  {
    q: 'How long does the transition from UKG to isolved take?',
    a: 'Most mid-market clients complete the move in 60 to 90 days with no interruption to payroll. BEG plans the timeline around your pay calendar and your UKG contract renewal.',
  },
  {
    q: 'Is isolved significantly less expensive than UKG for a mid-market company?',
    a: 'For most mid-market companies, yes. UKG enterprise licensing is priced for larger organizations. BEG will provide a transparent cost comparison on your discovery call so you can see the actual numbers for your headcount and modules.',
  },
  {
    q: 'What about the AI features in UKG compared to isolved?',
    a: 'UKG has invested in AI, but does not offer an equivalent to the isolved Connector for Claude, which is generally available since June 2026 and completes real HR tasks through conversation rather than just surfacing information. It is the only HCM platform with that capability.',
  },
  {
    q: 'Who supports the platform after we move from UKG?',
    a: 'BEG does. You get a named contact who supports, optimizes, and maintains your isolved platform year-round. Not a large vendor support queue.',
  },
];

export default function SwitchFromUKGPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
      { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
      { '@type': 'ListItem', position: 3, name: 'Switch From UKG to isolved', item: 'https://www.beghr.com/services/hcm-software/switch-from-ukg-to-isolved' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Switch From UKG</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How to Switch From UKG to isolved
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            UKG is a powerful platform, built for enterprises that need workforce management at scale. If your company is in the mid-market, you may be paying enterprise prices for capabilities you do not use and running on a system that was never designed for your size. The isolved platform is built for companies like yours, and BEG manages the entire migration.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* The case for switching */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>The Mid-Market Case for Leaving UKG</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { head: 'Priced for enterprises', body: 'UKG licensing was built for organizations with thousands of employees. Mid-market companies often find themselves paying for breadth they cannot use and support tiers sized for bigger customers.' },
              { head: 'Complexity that does not fit', body: 'Configuration and administration in enterprise platforms can be heavy. What works for a 5,000-person company adds overhead for a 200-person firm with a lean HR team.' },
              { head: 'No AI task connector', body: 'UKG has AI features, but no equivalent to the isolved Connector for Claude, which completes real HR tasks through conversation. That capability is available through BEG now.' },
              { head: 'Support routed through queues', body: 'Enterprise vendors operate large support organizations. Mid-market clients often get routed rather than getting a dedicated partner who knows their configuration.' },
            ].map(({ head, body }) => (
              <div key={head} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{head}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you gain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What You Gain With isolved and BEG</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved platform covers payroll, HR, time, benefits, onboarding, and talent management in one connected system, designed and priced for the mid-market. You get a platform sized for your company, not for an enterprise ten times larger.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved Connector for Claude, generally available since June 2026, lets your HR team complete actual tasks through Claude AI conversation. Run payroll, pull reports, update records, and handle exceptions without navigating menus. No comparable capability exists in UKG today.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            BEG implements, configures, migrates, and supports your isolved platform year-round. One contact. No queue. Forrester documented a 330% ROI for isolved clients.
          </p>
        </div>
      </section>

      {/* How BEG manages the move */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1.5rem' }}>How BEG Manages the Transition</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Discovery and contract timing', body: 'BEG reviews your UKG setup and renewal date. You get a migration plan that avoids overlapping contracts and keeps the timeline practical.' },
              { num: '02', title: 'Data extraction and migration', body: 'We pull payroll history, employee records, and benefits data from UKG and migrate it into isolved. Every record is verified before go-live.' },
              { num: '03', title: 'Configuration and parallel testing', body: 'BEG configures isolved for your pay rules, locations, and benefits. We run parallel pay cycles to confirm accuracy before you cut over.' },
              { num: '04', title: 'Go-live and year-round support', body: 'BEG manages go-live and stays with you. New hires, rule changes, and compliance updates all go through your BEG contact, not a vendor queue.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ background: '#1a1a1a', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.6rem' }}>{num}</div>
                <strong style={{ display: 'block', marginBottom: '0.4rem', color: '#ffffff' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaaaaa', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{q}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            Ready to right-size from UKG?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. BEG will review your setup, run a cost comparison, and give you a clear transition plan at no obligation.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost. Free, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'HCM technology',
            title: "isolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)",
            excerpt: 'Full isolved platform review covering payroll, benefits, time tracking, and the Connector for Claude.',
            href: '/blog/hcm-software/isolved-platform',
          },
          {
            category: 'HCM technology',
            title: 'Chatbots Answer Questions. isolved Completes the Task.',
            excerpt: 'The difference between AI that retrieves information and AI that takes action inside your HCM platform.',
            href: '/blog/hcm-software/chatbots-answer-isolved-does-the-task',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'Payroll, onboarding, and benefits enrollment are high-ROI automation targets. Here is what to prioritize.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
