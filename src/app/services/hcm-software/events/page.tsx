import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for Events Companies | isolved + BEG',
  description: 'HCM software for events and event staffing companies: variable headcount, per-event pay, multi-venue scheduling, and contractor vs. employee compliance on isolved.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/events' },
  openGraph: {
    title: 'HCM Software for Events Companies | isolved + BEG',
    description: 'HCM software for events and event staffing companies: variable headcount, per-event pay, multi-venue scheduling, and contractor vs. employee compliance on isolved.',
    url: 'https://www.beghr.com/services/hcm-software/events',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for Events Companies | isolved + BEG', description: 'HCM software for events and event staffing companies: variable headcount, per-event pay, multi-venue scheduling, and contractor vs. employee compliance on isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Can isolved handle a workforce that spikes for individual events?',
    a: 'Yes. The isolved platform scales to your active headcount. BEG configures it so you can onboard event staff quickly, run payroll for them, and offboard cleanly when an event concludes. You are not paying for inactive workers between events.',
  },
  {
    q: 'How does isolved handle pay for event staff who work different hours each week?',
    a: 'The isolved platform supports variable-hour workers and per-event pay structures. BEG configures pay rules to match how your event crews are compensated, including hourly, day rates, and bonus pay for specific roles or events.',
  },
  {
    q: 'Can isolved help manage contractor versus employee classification?',
    a: 'isolved manages payroll for W-2 employees cleanly, and BEG can advise on how to structure your workforce records. Contractor classification decisions are a legal question, but the platform can track both worker types with the right configuration.',
  },
  {
    q: 'Does isolved support scheduling across multiple venues?',
    a: 'Yes. The isolved scheduling and time modules support multi-venue assignments. BEG configures location codes and cost centers so labor time is tracked by venue and event, which keeps your job costing clean.',
  },
  {
    q: 'What does BEG provide after implementation?',
    a: 'BEG is your dedicated support contact year-round. When your event calendar expands, a new client requires a different pay structure, or you add a new venue market, BEG updates the configuration. No support queues.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes real HR tasks through a Claude AI conversation. Your production and operations team can pull staffing reports, run payroll, and update records by describing what they need. Available now.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Events Companies', item: 'https://www.beghr.com/services/hcm-software/events' },
  ],
};

export default function HCMEvents() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Events</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Events Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Events businesses run on variable headcount, per-event scheduling, multi-venue logistics, and a constant pressure to onboard and offboard staff fast. Generic HR software is not built for that rhythm. The isolved platform is. BEG implements and supports it for your operation.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Standard HR Tools Break Down for Events</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            An events company does not have a steady 40-hour workweek for most of its workforce. Headcount spikes for a weekend festival and returns to a core team on Monday. Staff work at different venues under different pay structures. Some events require specialized roles that command premium rates. And every few weeks, there is a new round of onboarding and offboarding that standard systems were not designed to handle at speed.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Add the complexity of managing W-2 event staff alongside contractor relationships, tracking labor cost by event and venue for accurate job costing, and handling overtime correctly across a variable-hour workforce, and the gap between what generic HCM tools offer and what events operations actually need becomes clear.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for Events Operations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Variable headcount payroll', body: 'Scale payroll up for peak event periods and down between them. Pricing adjusts to active headcount so you are not paying for inactive workers.' },
              { title: 'Per-event and day-rate pay', body: 'Configure hourly, day-rate, and event-based compensation in one payroll run with accurate overtime calculations for variable-hour staff.' },
              { title: 'Multi-venue time and scheduling', body: 'Track time by venue and event with cost center coding that keeps job costing clean and connects labor data to each engagement.' },
              { title: 'Fast onboarding and offboarding', body: 'Digital onboarding flows let you bring event crews onto the platform quickly and remove them cleanly when the event concludes.' },
              { title: 'Benefits for core staff', body: 'Manage health, dental, and voluntary benefits for your permanent team in the same platform as payroll for your event workforce.' },
              { title: 'Compliance across jurisdictions', body: 'For events in multiple states or municipalities, isolved handles the tax and labor law variation so you are not tracking it manually.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements and Supports It for Your Company</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Getting isolved configured for an events operation requires specific knowledge of variable-hour pay structures, multi-venue cost tracking, and fast-cycle onboarding. BEG manages that configuration from discovery through go-live, migrates your existing data, trains your team, and keeps payroll running without interruption during the transition.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG is your year-round support partner. One contact who knows your configuration handles new event types, new markets, and compliance questions. No ticket queues, no starting over with someone who has never seen your setup.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI That Keeps Pace With Your Production Schedule</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Your production and operations team can run payroll, pull event labor reports, and onboard new staff by describing what they need in a Claude AI conversation, without logging into multiple systems or waiting for HR to return a call.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Chatbots answer questions. isolved does the task. In an industry where the day-of timeline never waits, that difference is real.
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
          <h2 style={{ marginBottom: '0.5rem' }}>What does each event staff member really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Works for an Events Company
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your pay structure, venue setup, and current system, then show you what isolved handles for you.
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
            excerpt: 'High-ROI HR automation targets for variable-hour and event-based workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
