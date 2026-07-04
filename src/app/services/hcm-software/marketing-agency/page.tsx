import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM for Marketing Agencies | Instant Price Quote | BEG',
  description: 'HCM software for marketing and creative agencies: project-based teams, contractor and employee mix, remote workforces, and client-aligned time tracking on',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/marketing-agency' },
  openGraph: {
    title: 'HCM for Marketing Agencies | Instant Price Quote | BEG',
    description: 'HCM software for marketing and creative agencies: project-based teams, contractor and employee mix, remote workforces, and client-aligned time tracking on',
    url: 'https://www.beghr.com/services/hcm-software/marketing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM for Marketing Agencies | Instant Price Quote | BEG', description: 'HCM software for marketing and creative agencies: project-based teams, contractor and employee mix, remote workforces, and client-aligned time tracking on', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Can isolved handle a mix of full-time employees and freelance contractors?',
    a: 'Yes. The isolved platform manages W-2 payroll for full-time and part-time employees. BEG configures it to track both employee types cleanly so your classification and tax handling is accurate for each group.',
  },
  {
    q: 'Does isolved support remote and distributed workforces for a marketing agency?',
    a: 'Yes. The isolved platform handles multi-state payroll with accurate state and local tax calculations for wherever your employees are located. BEG configures every jurisdiction from the start so your remote-first team is covered correctly.',
  },
  {
    q: 'Can isolved track time against clients or projects?',
    a: 'Yes. BEG configures cost centers and project codes in isolved so your team can track billable time by client or project. That data feeds directly into payroll and labor cost reporting, giving you what you need for billing reconciliation and profitability analysis.',
  },
  {
    q: 'How does isolved help with performance management for a creative team?',
    a: 'The isolved talent management module supports goal setting, performance reviews, and development tracking. BEG configures it to match your review cycles and team structure so performance conversations happen in the same system as everything else.',
  },
  {
    q: 'What does BEG provide after the platform goes live?',
    a: 'BEG is your dedicated support contact year-round. When you bring on a new client, restructure teams, add remote employees in a new state, or change your review process, your BEG contact handles the update. No support queues.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your ops team can run payroll, pull utilization reports, and manage onboarding by describing what they need. Available now through BEG.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Marketing Agencies', item: 'https://www.beghr.com/services/hcm-software/marketing-agency' },
  ],
};

export default function HCMMarketingAgency() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Marketing Agency</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Marketing and Creative Agencies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Marketing agencies run on project-based teams, a mix of full-time employees and contractors, remote and distributed workforces, and the constant pressure to track time and cost against client engagements. The isolved platform manages all of it in one connected system. BEG implements and supports it for your agency.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The HR Challenge at a Creative Agency</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Marketing and creative agencies often have HR situations that outgrow simple payroll tools fast. You have full-time employees in multiple states, freelancers on retainer, contractors on specific projects, and the constant task of sorting out who is classified as what for tax purposes. Time tracking is critical because your revenue depends on accurately billing client hours, but most payroll systems do not connect time data to billing in a useful way.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Layer on the need to manage performance for a creative workforce, handle benefits for a remote-first team, and onboard and offboard employees as client engagements start and end, and the gap between a simple payroll tool and a real HCM platform becomes apparent. A connected platform removes that administrative load and lets your team focus on client work.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for a Marketing Agency</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Multi-state remote payroll', body: 'Handle state and local tax accurately for wherever your employees are located. BEG configures each jurisdiction so your distributed team is covered correctly from day one.' },
              { title: 'Client and project time tracking', body: 'Track billable time by client and project with cost center coding that connects labor cost to each engagement for billing reconciliation and margin analysis.' },
              { title: 'Mixed workforce management', body: 'Run payroll for W-2 employees with accurate classification and tax handling. Track both employee types cleanly for reporting and compliance.' },
              { title: 'Performance and talent management', body: 'Goal setting, review cycles, and development tracking for creative teams in the same platform as payroll and HR. No separate performance tool to reconcile.' },
              { title: 'Digital onboarding and offboarding', body: 'Bring new employees onto the platform quickly with digital onboarding flows. Offboard cleanly when engagements end, with accurate final pay and benefits handling.' },
              { title: 'Benefits administration', body: 'Manage health, dental, and voluntary benefits for your full-time team in the same platform as payroll. Remote employees in different states are handled correctly.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Configures and Manages isolved for Your Agency</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Marketing agencies have specific configuration requirements: multi-state remote payroll, client-aligned time tracking, mixed workforce records, and performance cycles for creative teams. BEG manages the full implementation, configuring each component to match how your agency actually operates, then migrating your data and handling go-live without payroll interruption.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After implementation, BEG is your dedicated support partner. When you win a new client, bring on staff in a new state, or restructure your review process, your BEG contact handles the configuration update. One contact, year-round.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. It is the only HCM platform integration that completes real HR tasks through a Claude AI conversation. Your ops or finance lead can run payroll, pull utilization reports by client, and manage employee records by describing what they need, without navigating deep menus or waiting on an HR callback.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            A lean agency team does not have dedicated HR staff. Chatbots answer questions. isolved does the task. That is the practical value of AI in an HCM platform.
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
            See How isolved Works for a Marketing Agency
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your team structure, remote payroll footprint, and current system, then show you what isolved handles for you.
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
            excerpt: 'High-ROI HR automation targets for lean agency teams managing remote and mixed workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
