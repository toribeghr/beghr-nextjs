import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved Demo | Instant Price Quote + Book a Demo | BEG',
  description: 'What an isolved demo covers, what to ask before you book one, and how BEG runs a discovery-first walkthrough tailored to your actual environment and',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-demo' },
  openGraph: {
    title: 'isolved Demo | Instant Price Quote + Book a Demo | BEG',
    description: 'What an isolved demo covers, what to ask before you book one, and how BEG runs a discovery-first walkthrough tailored to your actual environment and',
    url: 'https://www.beghr.com/services/hcm-software/isolved-demo',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Demo | Instant Price Quote + Book a Demo | BEG', description: 'What an isolved demo covers, what to ask before you book one, and how BEG runs a discovery-first walkthrough tailored to your actual environment and', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'What does an isolved demo cover?',
    a: 'A BEG-led isolved demo covers the platform modules relevant to your situation. That typically includes the payroll engine, HR and employee records, time and attendance, benefits administration, and the Connector for Claude. Rather than a standard product tour, BEG starts with your current system and pain points, then shows you the specific capabilities that address them.',
  },
  {
    q: 'How long does a demo take?',
    a: 'A BEG discovery call is 15 minutes. In that time, BEG assesses your current environment and what you are trying to accomplish. If isolved is the right fit, a full platform walkthrough follows, typically 30 to 45 minutes, focused on your specific use case.',
  },
  {
    q: 'What should I prepare before an isolved demo?',
    a: 'Bring information about your current system or systems, your employee count, the states where you operate, and the specific pain points you are trying to solve. The more context you share, the more relevant the demo will be. A generic platform tour rarely answers the real questions.',
  },
  {
    q: 'Is the demo through isolved directly or through BEG?',
    a: 'Through BEG. As an authorized isolved reseller and implementation partner, BEG runs the discovery and demo process. This matters because BEG focuses on whether isolved is the right fit for your situation, not just on showing the platform. If it is not the right fit, BEG will tell you.',
  },
  {
    q: 'Can I see the Connector for Claude in the demo?',
    a: 'Yes. BEG can show you how the isolved Connector for Claude works during the walkthrough. It is the only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation, rather than just answering questions. Available now in the Claude directory.',
  },
  {
    q: 'What happens after the demo?',
    a: 'After the demo, BEG provides a cost comparison based on your headcount and modules, and outlines what implementation looks like for your specific situation. There is no obligation to proceed. The goal is to give you the information you need to make a confident decision.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved Demo', item: 'https://www.beghr.com/services/hcm-software/isolved-demo' },
  ],
};

export default function IsolvedDemo() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>isolved · Demo</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Requesting an isolved Demo: What to Expect
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Most software demos show you features. A BEG-led isolved demo starts with your situation: your current system, your pain points, your industry, and what you actually need to see. Then it shows you the platform through that lens. Here is how it works and what to prepare.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Why BEG for the demo */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why a BEG Demo Is Different From Going Direct to isolved</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Requesting a demo directly from isolved typically routes you into a sales process managed by an inside sales team whose goal is to close a deal. A BEG-led demo starts differently. BEG is an authorized isolved reseller and implementation partner, which means we have seen dozens of platform deployments across different industries, sizes, and complexity levels.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The discovery call that precedes the demo is designed to understand your environment first. What system are you running now? How many employees, in which states? What is breaking? What do you want to accomplish? That context shapes the demo so you are seeing relevant capabilities, not a standard product tour.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            If isolved is not the right fit for your situation, BEG will tell you that. The goal is to help you make a confident decision, not to sell a platform that does not fit.
          </p>
        </div>
      </section>

      {/* What the demo covers */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What a BEG-Led isolved Demo Covers</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1.5rem' }}>
            The demo is scoped to your situation. The following are the areas most commonly covered, depending on what you are trying to accomplish.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Payroll engine', body: 'How isolved runs payroll across multiple pay types, states, and entities. What automation looks like versus your current process. Where errors typically happen in competing systems and how isolved handles them.' },
              { title: 'HR and employee records', body: 'The isolved single employee record: all history, documents, and data in one place. Onboarding flows, offboarding, org chart, and position management.' },
              { title: 'Time and attendance', body: 'Time capture options, scheduling, shift management, overtime calculations, and how time data flows directly into payroll without re-entry.' },
              { title: 'Benefits administration', body: 'Open enrollment, eligibility rules, carrier connections, and how benefits administration connects to payroll and HR records in one system.' },
              { title: 'Connector for Claude', body: 'The only live AI integration in an HCM platform. How your team can complete real HR tasks through a Claude AI conversation instead of navigating menus. Available now.' },
              { title: 'Reporting and analytics', body: 'Labor cost analysis, headcount reporting, turnover analytics, and compliance reporting from a single data source. What the reporting library covers and how custom reports are built.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Questions Worth Asking in Any HCM Demo</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1.5rem' }}>
            Whether you are evaluating isolved through BEG or comparing it to other platforms, these questions cut through the demo theater and reveal what you are actually buying.
          </p>
          {[
            { q: 'Who implements it?', a: 'Ask whether implementation is handled by the vendor, a third party, or a partner like BEG. The answer tells you who is responsible when something goes wrong during go-live.' },
            { q: 'What does go-live look like?', a: 'Ask for a timeline and a description of what the client does versus what the vendor does. A vague answer is a red flag.' },
            { q: 'What does ongoing support look like?', a: 'Ask whether you get a named account contact or a support ticket queue. This determines what your experience is like after the contract is signed.' },
            { q: 'Show me something breaking.', a: 'Ask the demo presenter to show you what happens when something goes wrong, not just the happy path. The error handling and exception workflow reveal the platform\'s true maturity.' },
            { q: 'What does the AI actually do?', a: 'If AI is mentioned, ask whether it answers questions or completes tasks. Most platforms only answer questions. isolved\'s Connector for Claude completes actual HR actions.' },
          ].map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{q}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ECAC60', marginBottom: '1rem' }}>
            Ready for a Discovery-First isolved Walkthrough?
          </h2>
          <p style={{ color: '#cccccc', fontSize: '1.05rem', marginBottom: '1.5rem', maxWidth: '650px', margin: '0 auto 1.5rem' }}>
            The 15-minute discovery call comes first. BEG learns about your current environment, your employee count, and what you are trying to accomplish. Then the demo is built around your situation, not a generic script.
          </p>
          <PricingCta service="hcm-software" subline={false} />
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No obligation. We show you what isolved looks like for your situation and give you a cost comparison on the same call.</p>
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
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI HR automation targets and what to keep manual when evaluating an HCM platform.',
            href: '/blog/hcm-software/hr-automation',
          },
          {
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should handle automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
