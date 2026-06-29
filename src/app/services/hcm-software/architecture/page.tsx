import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for Architecture Firms | isolved + BEG',
  description: 'HCM software for architecture and design firms: project-based time tracking, AIA license management, multi-state compliance, and benefits administration on isolved.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/architecture' },
  openGraph: {
    title: 'HCM Software for Architecture Firms | isolved + BEG',
    description: 'HCM software for architecture and design firms: project-based time tracking, AIA license management, multi-state compliance, and benefits administration on isolved.',
    url: 'https://www.beghr.com/services/hcm-software/architecture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for Architecture Firms | isolved + BEG', description: 'HCM software for architecture and design firms: project-based time tracking, AIA license management, multi-state compliance, and benefits administration on isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Can isolved track time by project for an architecture firm?',
    a: 'Yes. BEG configures project codes and cost centers in isolved so your team can track hours by project and client. That labor cost data feeds directly into payroll and gives you the clean per-project data your PMs and principals need for billing and profitability analysis.',
  },
  {
    q: 'Does isolved track professional engineering and architecture licenses?',
    a: 'Yes. BEG configures isolved to store license type, license number, and expiration date for each licensed professional, with alerts before credentials lapse. Keeping track of which staff hold active registrations in which states is a compliance requirement, and the platform manages it without manual spreadsheets.',
  },
  {
    q: 'How does isolved handle multi-state payroll for architecture firms with distributed offices?',
    a: 'The isolved platform handles multi-state payroll with accurate state and local tax calculations for every jurisdiction where your staff are located. BEG configures each state from the start so your payroll is correct from day one, not after an audit.',
  },
  {
    q: 'Can isolved handle the salary plus bonus structure common in architecture?',
    a: 'Yes. The isolved platform supports salary, discretionary and formula-based bonuses, and project incentives in one payroll run. BEG configures the pay structure to match how your firm compensates architects, project managers, and support staff.',
  },
  {
    q: 'What does BEG provide after implementation?',
    a: 'BEG is your dedicated support contact year-round. When you open a new office, bring on staff with new license types, or change your bonus structure, your BEG contact handles the update. No support queues, no starting over with someone unfamiliar with your firm.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your firm administrator can run payroll, pull project utilization reports, and check license expiration status by describing what they need. Available now through BEG.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Architecture Firms', item: 'https://www.beghr.com/services/hcm-software/architecture' },
  ],
};

export default function HCMArchitecture() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Architecture</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Architecture and Design Firms
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Architecture firms manage licensed professionals with active state registrations, project-based time tracking that drives billing and profitability, multi-state payroll for distributed offices, and salary structures that include project bonuses. The isolved platform handles it all in one connected system. BEG implements and supports it for your firm.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>HR in an Architecture Firm Is Not Simple</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            An architecture firm has HR requirements that sit at the intersection of professional services complexity and regulated practice. Your licensed architects hold state registrations that must stay current, often in multiple states for firms working on projects across jurisdictions. Time tracking is critical because your billing depends on it, but most payroll systems do not connect to project data in any useful way.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Add multi-office payroll across multiple states, salary structures that include project bonuses and year-end incentives, and the need to onboard and manage talent in a competitive professional services market, and the case for a connected HCM platform, rather than a payroll tool plus separate HR software, becomes clear. Clean data, no manual reconciliation, and one partner who manages the whole system.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for an Architecture Firm</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Project-based time tracking', body: 'Track hours by project and client with cost center coding that connects labor cost to each engagement. Clean data for billing reconciliation and profitability analysis.' },
              { title: 'License and registration management', body: 'Store state registration, AIA membership, and PE license data per professional with expiration alerts for every jurisdiction.' },
              { title: 'Multi-state payroll', body: 'Run payroll for staff across multiple offices and states with accurate state and local tax handling configured for each jurisdiction from the start.' },
              { title: 'Salary and bonus structures', body: 'Handle base salary, discretionary bonuses, project incentives, and year-end awards in one payroll run with correct tax treatment for each pay type.' },
              { title: 'Benefits administration', body: 'Manage health, dental, life, and professional development benefits in one platform. Enrollment, changes, and COBRA in the same system as payroll.' },
              { title: 'Talent management and onboarding', body: 'Digital onboarding, performance reviews, and development tracking for a workforce in high demand from competing firms.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Configures and Manages isolved for Your Firm</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Configuring isolved for an architecture firm starts with understanding your project structure, license types, office locations, and compensation model. BEG manages that discovery and configuration from start to finish, migrates your existing data, and handles go-live without interrupting a payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After implementation, BEG is your dedicated support partner year-round. When you open a new office, add licensed staff in a new state, or restructure your bonus program, your BEG contact handles the configuration update. One contact who already knows your setup.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. Your firm administrator can run payroll, pull project utilization data, check license expiration status, and manage employee records through a Claude AI conversation, without navigating multiple systems between project deadlines.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Chatbots answer questions. isolved does the task. That distinction matters for an admin team that is already managing back-office complexity for a high-demand professional services firm.
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
          <h2 style={{ marginBottom: '0.5rem' }}>What does each team member really cost your firm?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual cost per person. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Works for an Architecture Firm
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your office structure, license types, project tracking needs, and current system, then show you what isolved handles for your firm.
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
            excerpt: 'High-ROI HR automation targets for professional services firms with licensed and distributed workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
