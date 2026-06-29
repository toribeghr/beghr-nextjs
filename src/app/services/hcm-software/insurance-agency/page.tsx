import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for Insurance Agencies | isolved + BEG',
  description: 'HCM software for insurance agencies: commission and salary pay, producer licensing tracking, multi-state compliance, and benefits administration on one isolved platform.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/insurance-agency' },
  openGraph: {
    title: 'HCM Software for Insurance Agencies | isolved + BEG',
    description: 'HCM software for insurance agencies: commission and salary pay, producer licensing tracking, multi-state compliance, and benefits administration on one isolved platform.',
    url: 'https://www.beghr.com/services/hcm-software/insurance-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for Insurance Agencies | isolved + BEG', description: 'HCM software for insurance agencies: commission and salary pay, producer licensing tracking, multi-state compliance, and benefits administration on one isolved platform.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Can isolved handle commission pay alongside salary for insurance producers?',
    a: 'Yes. The isolved platform supports multiple pay types in a single payroll run, including salary, commission, draw against commission, and bonuses. BEG configures the pay structure to match how your agency compensates producers and support staff.',
  },
  {
    q: 'Does isolved track producer licensing and E&O credentials?',
    a: 'Yes. BEG configures isolved to store license types, license numbers, and expiration dates per employee, with alerts before credentials expire. For an insurance agency, having an unlicensed producer handling business is a regulatory violation, and credential tracking prevents it.',
  },
  {
    q: 'How does isolved support multi-state operations for an insurance agency?',
    a: 'The isolved platform handles multi-state payroll with accurate state and local tax calculations for each jurisdiction. For agencies with producers licensed and operating in multiple states, BEG configures tax settings for each state from the start.',
  },
  {
    q: 'Can isolved handle benefits administration for an insurance agency that has its own complex benefits program?',
    a: 'Yes. Benefits administration is a core isolved module. BEG configures it to match your specific plans, eligibility rules, and enrollment periods. It is a separate function from the coverage you sell, and the platform manages it cleanly on the admin side for your own employees.',
  },
  {
    q: 'What does BEG handle after implementation?',
    a: 'BEG is your dedicated support partner year-round. When you add producers, expand to a new state, update commission structures, or face a compliance change, your BEG contact handles it. No ticket queues, no support lines.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your operations team can run payroll, pull commission reports, and manage licensing records by describing what they need. Available now through BEG.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Insurance Agencies', item: 'https://www.beghr.com/services/hcm-software/insurance-agency' },
  ],
};

export default function HCMInsuranceAgency() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Insurance Agency</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Insurance Agencies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Insurance agencies manage commission-based producers, strict licensing requirements, multi-state operations, and complex benefits for their own staff. Generic HR software is not built for that combination. The isolved platform handles it all in one connected system. BEG implements and supports it for your agency.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>HR Complexity at an Insurance Agency Is Different</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Insurance agencies deal with HR complexity that most platforms are not designed for. Your producers earn commissions that vary monthly, sometimes supplemented by draws, bonuses, or renewal payments. They hold state-specific licenses that expire and must be renewed to keep them legally authorized to write business. You may have producers operating across multiple states, each with its own licensing and tax requirements.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            At the same time, you are administering benefits for your own employees, managing performance and onboarding for support staff, and running payroll that needs to track compensation accurately for both producers and non-producing staff. A single connected platform that handles the full picture is what removes the risk and the manual work of stitching disconnected systems together.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for an Insurance Agency</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Commission and salary payroll', body: 'Configure salary, commission, draw against commission, and bonus pay in one payroll run with accurate tax handling for each pay type.' },
              { title: 'Producer license tracking', body: 'Store license types, numbers, and expiration dates per producer with expiration alerts so you never have an unlicensed producer handling business unknowingly.' },
              { title: 'Multi-state tax compliance', body: 'Run payroll for producers operating in multiple states with accurate state and local tax calculations for every jurisdiction automatically.' },
              { title: 'Benefits administration', body: 'Manage health, dental, life, and voluntary benefits for your own employees in the same platform as payroll. Enrollment, changes, and COBRA are handled in one place.' },
              { title: 'Onboarding and talent management', body: 'Digital onboarding for new producers and support staff, performance tracking, and document management in one connected platform.' },
              { title: 'HR compliance and reporting', body: 'ACA reporting, EEOC data, and labor law compliance managed automatically within the platform so your team is not tracking regulatory requirements manually.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements and Supports isolved for Your Agency</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Configuring isolved correctly for an insurance agency means understanding how your producers are compensated, which states they operate in, what licenses they hold, and how your benefits program is structured. BEG manages that discovery and configuration from start to finish, migrates your existing data, and handles go-live without interrupting a payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG stays on as your dedicated support partner. When you bring on a new producer, expand to a new state, or update commission structures, your BEG contact handles the configuration update. One contact, year-round, who already knows your setup.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. It is the only HCM platform integration that completes real HR tasks through a Claude AI conversation. Your operations team can run payroll, pull commission reports, check license expiration status, and manage employee records by describing what they need in plain language.
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

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does each employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base compensation and see the fully loaded annual cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Works for an Insurance Agency
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your producer pay structure, licensing requirements, and current system, then show you what isolved handles for you.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
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
            excerpt: 'High-ROI HR automation targets for professional services and distributed workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
