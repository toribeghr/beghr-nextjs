import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM for Real Estate Companies | Instant Price Quote | BEG',
  description: 'HCM software for real estate brokerages and property companies: commission and W-2 pay, agent license tracking, multi-office payroll, and benefits',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/real-estate' },
  openGraph: {
    title: 'HCM for Real Estate Companies | Instant Price Quote | BEG',
    description: 'HCM software for real estate brokerages and property companies: commission and W-2 pay, agent license tracking, multi-office payroll, and benefits',
    url: 'https://www.beghr.com/services/hcm-software/real-estate',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM for Real Estate Companies | Instant Price Quote | BEG', description: 'HCM software for real estate brokerages and property companies: commission and W-2 pay, agent license tracking, multi-office payroll, and benefits', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Can isolved handle commission pay alongside W-2 salary for a real estate company?',
    a: 'Yes. The isolved platform supports multiple pay types in one payroll run, including salary, commission, draw against commission, and bonuses. BEG configures the pay structure to match how your brokerage or property company compensates W-2 employees across different roles.',
  },
  {
    q: 'Does isolved track real estate license expiration dates for agents and brokers?',
    a: 'Yes. BEG configures isolved to store license type, license number, and expiration date per employee, with expiration alerts. Keeping licensed agents current is a regulatory requirement, and the platform tracks it so your compliance does not depend on someone remembering to check.',
  },
  {
    q: 'How does isolved support multi-office real estate operations?',
    a: 'The isolved platform manages multiple office locations in one connected system with separate cost center tracking, consolidated payroll, and reporting that rolls up to ownership level. BEG configures each office location within the platform during implementation.',
  },
  {
    q: 'Can isolved manage benefits for a real estate company with a mix of full-time staff and part-time employees?',
    a: 'Yes. Benefits eligibility rules in isolved can be configured separately for full-time and part-time employees so each group enrolls in only what they are eligible for. BEG configures the rules to match your plan design during implementation.',
  },
  {
    q: 'What does BEG provide after the platform goes live?',
    a: 'BEG is your dedicated support contact year-round. When you open a new office, update commission structures, or add licensed staff in a new state, your BEG contact handles the update. One contact, no ticket queues.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your office manager or HR lead can run payroll, check license expiration dates, and pull compensation reports by describing what they need. Available now through BEG.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Real Estate Companies', item: 'https://www.beghr.com/services/hcm-software/real-estate' },
  ],
};

export default function HCMRealEstate() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Real Estate</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Real Estate Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Real estate brokerages and property companies manage licensed agents, commission-based pay structures, multi-office operations, and a workforce that spans W-2 employees and various compensation arrangements. The isolved platform handles all of that in one connected system. BEG implements and supports it for your company.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>HR Complexity in Real Estate Is Easy to Underestimate</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A real estate brokerage or property company has HR complexity that generic software was not designed for. Your W-2 employees include administrative staff, transaction coordinators, property managers, and sometimes salaried agents, each with different pay structures and benefits eligibility. Agent license tracking is a compliance requirement that carries real exposure if someone's state license lapses. Multi-office operations mean separate cost center management and consolidated reporting at the company level.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Add the need to onboard and offboard employees cleanly as market conditions change, manage benefits for a staff that may span full-time and part-time employees, and run payroll accurately across commission and non-commission pay types, and the case for a connected HCM platform over a basic payroll tool is clear. One system, one partner, no manual reconciliation.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for a Real Estate Company</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Commission and salary payroll', body: 'Run salary, commission, draw against commission, and bonuses in one payroll run with accurate tax handling for each pay type and employee classification.' },
              { title: 'Agent license tracking', body: 'Store state license numbers and expiration dates per employee with alerts before credentials lapse. Keep your compliance current without manual tracking.' },
              { title: 'Multi-office management', body: 'Run each office location in one connected platform with separate cost center tracking and consolidated reporting at the company or ownership level.' },
              { title: 'Benefits eligibility by classification', body: 'Configure separate eligibility rules for full-time and part-time employees so benefits enrollment is correct for each group without manual administration.' },
              { title: 'Onboarding and offboarding', body: 'Digital onboarding for new hires and clean offboarding when staff leave. Final pay, benefits termination, and document collection handled in one place.' },
              { title: 'HR compliance and reporting', body: 'ACA reporting, EEOC data, and labor law compliance managed within the platform so your team is not tracking regulatory requirements manually.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEG */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements and Supports isolved for Your Company</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Getting isolved configured correctly for a real estate company requires understanding your pay structures, license types, office locations, and benefits design. BEG manages that configuration from discovery through go-live, migrates your existing data, trains your team, and handles the transition without interrupting a payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG stays on as your year-round support partner. When you open a new office, update commission arrangements, or add licensed staff in a new state, your BEG contact handles the configuration update. No ticket queues, no starting over.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. It is the only HCM platform integration that completes real HR tasks through a Claude AI conversation. Your office manager or HR lead can run payroll, check license expiration dates, and pull compensation reports by describing what they need, without navigating complex menus or switching between systems.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Chatbots answer questions. isolved does the task. No other HCM platform offers that capability today.
          </p>
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


      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Works for a Real Estate Company
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your pay structures, office setup, license tracking needs, and current system, then show you what isolved handles for you.
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
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should handle automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI HR automation targets for real estate and professional services companies.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
