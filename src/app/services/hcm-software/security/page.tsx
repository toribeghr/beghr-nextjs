import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM for Security Companies | Instant Price Quote | BEG',
  description: 'HCM software for security firms: shift-based scheduling, multi-site time tracking, licensing compliance, and multi-state payroll on one connected isolved',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/security' },
  openGraph: {
    title: 'HCM for Security Companies | Instant Price Quote | BEG',
    description: 'HCM software for security firms: shift-based scheduling, multi-site time tracking, licensing compliance, and multi-state payroll on one connected isolved',
    url: 'https://www.beghr.com/services/hcm-software/security',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM for Security Companies | Instant Price Quote | BEG', description: 'HCM software for security firms: shift-based scheduling, multi-site time tracking, licensing compliance, and multi-state payroll on one connected isolved', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Can isolved handle 24/7 shift scheduling for a security company?',
    a: 'Yes. The isolved platform supports complex shift patterns including 24/7 coverage, rotating schedules, and multi-site assignments. BEG configures it to match how your operation schedules officers across client sites.',
  },
  {
    q: 'How does isolved track guard licenses and certifications?',
    a: 'BEG configures isolved to store license and certification data per employee, set expiration alerts, and flag officers whose credentials are due for renewal. Keeping a guard on post with an expired license is a compliance risk you can prevent with proper platform configuration.',
  },
  {
    q: 'Can isolved support multi-state payroll for security operations that cross state lines?',
    a: 'Yes. Multi-state payroll with accurate state and local tax handling is a core isolved capability. BEG configures the tax settings for every jurisdiction where you operate officers.',
  },
  {
    q: 'Does isolved handle billing rates by client site alongside payroll rates?',
    a: 'BEG configures isolved to track time by client site and cost center so your labor cost data supports billing reconciliation. How that connects to your billing system depends on your setup, and BEG walks through that integration during discovery.',
  },
  {
    q: 'What does BEG provide after the platform goes live?',
    a: 'BEG is your dedicated support contact year-round. When you win a new client contract, add officers, or face a compliance change, you call one person who knows your configuration.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your dispatch and HR team can pull staffing reports, update records, and manage scheduling by describing what they need in plain language. Available now through BEG.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Security Companies', item: 'https://www.beghr.com/services/hcm-software/security' },
  ],
};

export default function HCMSecurity() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Security</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Security Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Security companies run on shift coverage, guard licensing, multi-site scheduling, and multi-state compliance. Generic HCM tools are not built for any of that. The isolved platform handles it all in one connected system. BEG implements and supports it for your firm.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The HR Complexity Security Firms Live With Daily</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Running a security company means managing officers across multiple client sites, often in multiple states, around the clock. Your workforce requires active licensing and certification tracking, because putting an officer on post with an expired credential is a compliance failure that can end a contract. Scheduling is constant, shift coverage drives overtime calculations, and multi-site time tracking needs to connect cleanly to billing and payroll.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Most HCM platforms treat this complexity as an afterthought. The result is a patchwork of scheduling tools, spreadsheets, and a payroll system that does not talk to any of them. A platform built to handle shift-based, multi-site, credentialed workforces removes that friction and the compliance risk that comes with it.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved Serves a Security Workforce</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1.5rem' }}>
            The isolved platform connects scheduling, time, payroll, compliance, and benefits in one system. BEG configures it for the specific demands of a security operation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Shift scheduling and coverage', body: 'Support 24/7 rotating schedules, multi-site assignments, and real-time coverage gaps. Officers always know where they are assigned and when.' },
              { title: 'License and certification tracking', body: 'Store credential data per officer, set expiration alerts, and flag renewals before they become a compliance problem or contract risk.' },
              { title: 'Multi-site time and attendance', body: 'Capture time accurately at each client site with mobile check-in and GPS-enabled time capture. Site-level labor data feeds directly into payroll.' },
              { title: 'Multi-state payroll', body: 'Handle state and local tax accurately across every jurisdiction where you post officers, with BEG configuring each tax setting from the start.' },
              { title: 'Overtime and FLSA compliance', body: 'Shift-based workforces generate overtime regularly. isolved calculates it correctly across sites and pay periods so you are not correcting errors after the fact.' },
              { title: 'Benefits administration', body: 'Manage health, dental, and voluntary benefits in the same platform as payroll. Enrollment, changes, and terminations are handled in one place.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Configures and Manages the Platform for You</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved is the right platform for a security company. Getting it configured correctly for your shift patterns, client sites, licensing rules, and state jurisdictions is what BEG does. BEG manages the full implementation, migrates your historical data, trains your team, and handles go-live without interrupting a payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After implementation, BEG is your ongoing support contact. When you win a new contract, expand to a new state, or need to update credential tracking rules, one BEG contact handles it. No ticket queues, no escalations to people who do not know your configuration.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI That Works While Your Team Is Focused on Coverage</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Your dispatch and HR team can pull staffing reports, update officer records, and check compliance status through a Claude AI conversation without navigating deep menu trees.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Chatbots answer questions. isolved does the task. That distinction matters when a shift call-out happens at 2 a.m. and your team needs real actions taken, not a search result.
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
            See How isolved Works for a Security Firm
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We review your shift structure, licensing requirements, and current system, then show you what isolved handles for you.
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
            excerpt: 'High-ROI HR automation targets and what to keep manual for shift-based and multi-site workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
