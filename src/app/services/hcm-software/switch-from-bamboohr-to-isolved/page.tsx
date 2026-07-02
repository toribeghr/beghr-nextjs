import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Switch BambooHR to isolved | Instant Price Quote | BEG',
  description: 'BambooHR is a great HR tool but thin on payroll. Switching to isolved gives you one connected platform for payroll, HR, time, and benefits. BEG manages the move.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/switch-from-bamboohr-to-isolved' },
  openGraph: {
    title: 'Switch BambooHR to isolved | Instant Price Quote | BEG',
    description: 'BambooHR is a great HR tool but thin on payroll. Switching to isolved gives you one connected platform for payroll, HR, time, and benefits. BEG manages the move.',
    url: 'https://www.beghr.com/services/hcm-software/switch-from-bamboohr-to-isolved',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Switch BambooHR to isolved | Instant Price Quote | BEG', description: 'BambooHR is thin on payroll. Switching to isolved brings everything onto one connected platform.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Why do companies switch from BambooHR to isolved?',
    a: 'BambooHR is a well-liked HR software tool, but it is not a payroll platform. Companies that start with BambooHR often end up running payroll in a separate system, which means double entry, reconciliation headaches, and two support relationships. The isolved platform covers HR, payroll, time, and benefits in one connected system.',
  },
  {
    q: 'Will I lose my HR data when switching from BambooHR?',
    a: 'No. BEG migrates your employee records, HR data, and payroll history into isolved as part of implementation. Your data is preserved and validated before go-live.',
  },
  {
    q: 'How long does the BambooHR to isolved transition take?',
    a: 'Most clients complete the move in 60 to 90 days with no interruption to payroll. BEG plans the timeline around your pay calendar and your BambooHR renewal.',
  },
  {
    q: 'Does isolved have the HR features BambooHR is known for?',
    a: 'Yes. The isolved platform covers employee records, onboarding, performance management, and employee self-service alongside payroll, time, and benefits. You get BambooHR-style HR features plus a payroll engine, all in one connected system rather than two separate tools.',
  },
  {
    q: 'What AI capabilities does isolved offer that BambooHR does not?',
    a: 'The isolved Connector for Claude, generally available since June 2026, lets your team complete real HR tasks through a Claude AI conversation. Run payroll, pull reports, and update records by describing what you need. BambooHR does not offer an equivalent task-completing AI connector.',
  },
  {
    q: 'Who handles support after we move from BambooHR to isolved?',
    a: 'BEG does. You get a named contact who supports, optimizes, and maintains your isolved platform year-round, not a help center or general queue.',
  },
];

export default function SwitchFromBambooHRPage() {
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
      { '@type': 'ListItem', position: 3, name: 'Switch From BambooHR to isolved', item: 'https://www.beghr.com/services/hcm-software/switch-from-bamboohr-to-isolved' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Switch From BambooHR</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How to Switch From BambooHR to isolved
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            BambooHR built its reputation as a clean, friendly HR tool. But it is not a payroll platform. Companies that outgrow that gap end up running HR in BambooHR and payroll somewhere else, which means two systems, two support contacts, and data that never quite agrees. The isolved platform puts payroll, HR, time, and benefits together, and BEG manages the move.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* The BambooHR gap */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>The BambooHR Gap That Sends Companies Looking</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { head: 'Payroll is a bolt-on', body: 'BambooHR added payroll capability over time, but it is not the same depth as a platform built for payroll from the ground up. Complex pay rules, multi-state filings, and detailed tax handling are areas where the seams show.' },
              { head: 'HR and payroll still separate', body: 'Many BambooHR users also run a separate payroll tool. The reconciliation between the two systems is manual overhead that should not exist in a connected platform.' },
              { head: 'Time and attendance thin', body: 'BambooHR time tracking is basic. Companies with hourly workers, complex schedules, or multi-location operations often find it insufficient as they grow.' },
              { head: 'No AI task connector', body: 'BambooHR does not offer an equivalent to the isolved Connector for Claude, which completes real HR tasks through Claude AI conversation. That capability is available through BEG now.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>One Connected Platform, One Partner</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved platform covers everything BambooHR does in HR plus a full payroll engine, time and attendance, benefits administration, and the Connector for Claude. Your employee record is the same record in every module. When payroll runs, it reads from the same data HR maintains.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved Connector for Claude, generally available since June 2026, lets your team complete HR tasks by describing them to Claude. Pull a headcount report, run payroll, update a direct deposit, manage open enrollment. No extra login. No menu-clicking. BambooHR has no equivalent.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            BEG implements, configures, migrates, and supports the platform year-round. Forrester documented a 330% ROI for isolved clients.
          </p>
        </div>
      </section>

      {/* How BEG manages the move */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1.5rem' }}>How BEG Manages the Move</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Discovery and scoping', body: 'BEG reviews your BambooHR setup, your payroll tool, and your renewal dates. You get a consolidated migration plan before you commit.' },
              { num: '02', title: 'Data migration', body: 'We pull employee and HR data from BambooHR and payroll history from your payroll system into isolved. Records are validated before any live run.' },
              { num: '03', title: 'Configuration and testing', body: 'BEG configures isolved for your pay rules, locations, benefits, and HR workflows. We test against your existing data to confirm accuracy.' },
              { num: '04', title: 'Go-live and ongoing support', body: 'BEG manages go-live and stays with you. One contact for HR, payroll, time, and benefits, year-round.' },
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
            Ready to move from BambooHR?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. BEG will review your setup, run a cost comparison, and give you a clear migration plan at no obligation.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>


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
