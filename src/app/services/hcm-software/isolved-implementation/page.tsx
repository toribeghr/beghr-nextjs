import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'iSolved Implementation by BEG | BEG',
  description: 'How BEG manages iSolved implementation: discovery, configuration, data migration, testing, and go-live, plus ongoing support from a team that knows your setup.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-implementation' },
  openGraph: {
    title: 'iSolved Implementation by BEG | BEG',
    description: 'How BEG manages iSolved implementation: discovery, configuration, data migration, testing, and go-live, plus ongoing support from a team that knows your setup.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-implementation',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved Implementation by BEG | BEG', description: 'How BEG manages iSolved implementation: discovery, configuration, data migration, testing, and go-live, plus ongoing support from a team that knows your setup.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Who runs the iSolved implementation, my team or BEG?',
    a: 'BEG runs it. BEG implements, configures, migrates, and supports the platform, while your team guides decisions and reviews the work. You are never left to stand up a complex platform on your own.',
  },
  {
    q: 'How long does an iSolved implementation take?',
    a: 'Timelines depend on the modules you adopt, your headcount, and the state of your current data. Rather than quote a generic number, BEG scopes a realistic plan up front so you know what to expect for your specific situation.',
  },
  {
    q: 'What happens to my existing payroll and employee data?',
    a: 'BEG migrates your payroll history, employee records, and benefits data as part of implementation. The migration is structured and validated so you start on iSolved with accurate, complete information.',
  },
  {
    q: 'Will the platform reflect our specific policies?',
    a: 'Yes. Configuration is built around how you actually operate, including your pay rules, approval flows, PTO policies, and benefits structure. That tailoring is what makes the platform feel like it was built for you.',
  },
  {
    q: 'What support do we get after go-live?',
    a: 'BEG stays on as your support partner. When rules change, you add a location, or you have a question, you reach a team that already knows your configuration rather than a general queue.',
  },
  {
    q: 'Is the AI part of implementation?',
    a: 'Yes. iSolved includes the Connector for Claude, generally available in June 2026, which completes real HR tasks through conversation. BEG helps you put it to work as part of getting you fully up and running.',
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
    { '@type': 'ListItem', position: 3, name: 'iSolved Implementation', item: 'https://www.beghr.com/services/hcm-software/isolved-implementation' },
  ],
};

export default function iSolvedImplementationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Implementation</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            iSolved Implementation, Managed by BEG
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            The platform is only as good as the setup behind it. BEG manages your iSolved implementation end to end, from discovery and configuration through data migration and go-live, so the system works the way your business does.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Why implementation matters */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Implementation Decides the Outcome</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The difference between an HCM platform that transforms your operations and one that frustrates your team is almost always the implementation. A capable system configured carelessly creates more work, not less. That is why BEG treats implementation as the heart of the engagement rather than an afterthought to a software sale.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With BEG, you do not buy a login and a stack of documentation. You get a partner who owns the work of standing up iSolved correctly. Your team stays in the driver seat on decisions, while BEG carries the technical load of turning a powerful platform into a system tailored to your business.
          </p>
        </div>
      </section>

      {/* The process */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The BEG Implementation Process</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Implementation begins with discovery. BEG learns how you run payroll, time, and benefits, what your policies are, and where your current setup falls short. From there, BEG scopes the right modules and configures iSolved to your pay rules, approval flows, PTO policies, and benefits structure, so the platform reflects how you actually operate.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Next comes data migration. BEG moves your payroll history, employee records, and benefits data into iSolved with validation along the way, so you start on accurate, complete information. Before go-live, the configuration is tested against real scenarios. Then BEG manages the transition itself, so your first payroll on the new platform runs smoothly rather than anxiously.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What to Expect on Timing</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Every implementation is different, so BEG does not pretend there is a single fixed timeline. The pace depends on how many modules you adopt, your headcount, and the condition of your current data. A focused payroll setup for a smaller company moves faster than a multi-module rollout for a larger, multi-state organization.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            What stays constant is the discipline. BEG scopes a realistic plan up front, sets clear milestones, and keeps the project moving so it does not drag. You always know where things stand and what comes next, which removes the uncertainty that makes platform changes stressful.
          </p>
        </div>
      </section>

      {/* Ongoing support + AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Go-Live Is the Beginning, Not the End</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            Once you are live, BEG stays on as your support partner. When a tax rule changes, you open a new location, or a question comes up, you reach a team that already knows your configuration instead of a queue with no context. That continuity keeps the platform healthy as your business evolves.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Implementation also sets you up to use the Connector for Claude, generally available in June 2026, the only AI of its kind in HCM, which completes real HR tasks through conversation. With more than 7 million employees managed on iSolved and a Forrester-documented 330% ROI, a well-run BEG implementation is how you reach that value.
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

      {/* CTA */}
      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            Plan a Smooth iSolved Implementation
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will scope your modules, outline the implementation plan, and show you how BEG manages the move from start to finish.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'HCM technology',
            title: "iSolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)",
            excerpt: 'Full isolved platform review covering payroll, benefits, time tracking, and the Connector for Claude. Who it fits best and how BEG manages it for you.',
            href: '/blog/hcm-software/isolved-platform',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'Payroll, onboarding, benefits enrollment, and compliance reporting are high-ROI automation targets. Here is what to prioritize and what to keep manual.',
            href: '/blog/hcm-software/hr-automation',
          },
          {
            category: 'HCM technology',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026, FLSA threshold updates, and what your HCM platform should be handling automatically, not manually.',
            href: '/blog/hcm-software/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
