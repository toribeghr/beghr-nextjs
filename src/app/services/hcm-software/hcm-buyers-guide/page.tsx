import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'HCM Software Buyer\'s Guide | Instant Price Quote | BEG',
  description: 'Free HCM software buyer\'s guide for mid-market companies. Covers evaluation criteria, vendor comparison, implementation questions, and how to avoid the most common mistakes.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/hcm-buyers-guide' },
  openGraph: {
    title: 'HCM Software Buyer\'s Guide | Instant Price Quote | BEG',
    description: 'Free HCM buyer\'s guide for mid-market companies. Evaluation criteria, vendor comparison, implementation red flags, and an honest look at total cost.',
    url: 'https://www.beghr.com/services/hcm-software/hcm-buyers-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website' as const,
  },
  twitter: { card: 'summary_large_image' as const, title: 'HCM Software Buyer\'s Guide | Instant Price Quote | BEG', description: 'Free HCM buyer\'s guide. Evaluation criteria, vendor comparison, red flags, and total cost.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const sections = [
  {
    num: '01',
    title: 'Define your real requirements before you talk to a vendor',
    body: 'Most buyers walk into demos without a requirements list, which means vendors show you the features that photograph well rather than the ones that solve your actual problem. Your requirements list should cover: headcount and growth trajectory, number of states you run payroll in, pay types you manage (hourly, salaried, commission, tips, shift differentials), benefits you administer, current number of HR systems, and the compliance obligations you carry.',
  },
  {
    num: '02',
    title: 'Understand what one platform actually means',
    body: 'Every HCM vendor says they are one platform. The test is whether payroll, HR records, time and attendance, and benefits share a single employee record or whether they are separate modules that sync via API. A genuine single platform means data entered in HR automatically flows into payroll and time, with no reconciliation step. Ask vendors to show you a benefits election flowing into payroll deductions in real time, not a synchronized export.',
  },
  {
    num: '03',
    title: 'Total cost of ownership vs. the per-employee-per-month number',
    body: 'The per-employee-per-month rate is a fraction of the real number. Add implementation fees (many vendors charge separately), integration costs for any system that does not connect natively, annual price escalation clauses at renewal, the internal administration time your team spends in the system, and the cost of any errors or missed filings. A managed service like BEG bundles implementation, configuration, and year-round support into one relationship, which changes the comparison significantly.',
  },
  {
    num: '04',
    title: 'Implementation: where HCM decisions succeed or fail',
    body: 'A poorly scoped implementation is the most common reason HCM deployments disappoint. Before you sign, ask: who manages implementation, and are they the same team who will support you after go-live? What is the migration plan for your historical payroll data? What does parallel testing look like and who is responsible for sign-off? How are pay rules, locations, and benefits configured, and by whom? A vendor who hands off to a general support queue after go-live is a different product than one who stays.',
  },
  {
    num: '05',
    title: 'The AI question every buyer should ask in 2026',
    body: 'As of mid 2026, most HCM vendors offer AI features limited to question and answer, document summarization, or reporting assistance. One platform, isolved, offers the Connector for Claude, a generally available integration that completes real HR tasks through a Claude AI conversation. Running payroll, updating records, pulling reports, and managing open enrollment are all tasks the connector can complete. If AI that takes action rather than just answering questions matters to your team, ask every vendor to show you a task being completed through AI, not just a chatbot responding.',
  },
  {
    num: '06',
    title: 'Red flags in the evaluation process',
    body: 'Be cautious if: the sales team cannot show you the features you need live (recorded demos hide limitations); implementation is a separate contract with a separate firm; the vendor cannot name the specific person who will support your account post-launch; the contract auto-renews without a notification window; pricing for add-on modules is not disclosed upfront; or the vendor cannot provide references from companies similar in size and industry to yours.',
  },
];

const faqs = [
  {
    q: 'How long does an HCM implementation typically take?',
    a: 'For a mid-market company, a well-managed HCM implementation typically takes 60 to 90 days from signed contract to live payroll. Longer timelines usually reflect poor scoping, data migration issues, or an implementation team stretched across too many clients at once. BEG focuses on the 60 to 90 day window with zero payroll interruption.',
  },
  {
    q: 'What is the average cost of HCM software for a mid-market company?',
    a: 'Per-employee-per-month rates for mid-market HCM platforms typically range from $8 to $30 per employee depending on the modules included. The total cost of ownership, including implementation, annual increases, and administration time, is usually meaningfully higher than the base rate suggests. BEG provides a transparent cost comparison on your discovery call.',
  },
  {
    q: 'How do I evaluate HCM vendors fairly?',
    a: 'Use a structured requirements list, require live demos of your specific scenarios (not canned recordings), ask to see the payroll-to-HR data flow in real time, get references from companies your size in your industry, and ask who specifically will support your account after go-live. Price last, not first.',
  },
  {
    q: 'Is the isolved Connector for Claude real or still in beta?',
    a: 'The isolved Connector for Claude went generally available in June 2026. It is available in the Claude connector directory today, not on a roadmap. BEG configures and supports it for clients as part of the isolved implementation.',
  },
  {
    q: 'What is the difference between HCM software and managed payroll?',
    a: 'HCM software is the platform: the system of record for payroll, HR, time, and benefits. Managed payroll is a service where a partner runs the payroll function for you, often using an HCM platform as the engine. BEG offers both: isolved HCM software managed by BEG, so you get the platform and the service together.',
  },
];

export default function HCMBuyersGuidePage() {
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
      { '@type': 'ListItem', position: 3, name: 'HCM Software Buyer\'s Guide', item: 'https://www.beghr.com/services/hcm-software/hcm-buyers-guide' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Buyer Resource</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
            HCM Software Buyer&apos;s Guide 2026
          </h1>
          <p style={{ color: '#cccccc', fontSize: '1.1rem', lineHeight: '1.75', maxWidth: '680px' }}>
            Most mid-market HCM evaluations get it wrong: they start with demos before defining requirements, they compare per-employee rates without accounting for total cost, and they discover implementation problems only after signing. This guide covers what to ask, what to watch for, and how to make the comparison fair.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <PricingCta service="hcm-software" subline={false} />
            <a href="#get-the-guide" className="btn" style={{ background: 'transparent', border: '2px solid #ECAC60', color: '#ECAC60', padding: '0.75rem 1.75rem', borderRadius: '4px', fontWeight: '700', textDecoration: 'none' }}>
              Get the Full Guide
            </a>
          </div>
        </div>
      </section>

      {/* What is inside */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.25rem' }}>What this guide covers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              'How to define real requirements before your first demo',
              'What single platform actually means and how to test it',
              'Total cost of ownership vs. the per-employee-per-month rate',
              'Implementation red flags and the questions to ask before you sign',
              'The AI question every buyer should ask in 2026',
              'Vendor comparison criteria and a fair scoring approach',
            ].map((item, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', padding: '1rem', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#333', lineHeight: '1.6' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TL;DR Summary Box */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: '#ECAC60', borderRadius: '10px', padding: '2rem 2.5rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.75rem' }}>TL;DR - The six things that matter most</p>
            <ol style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '2' }}>
              <li>Define requirements before the first demo or you will be sold to, not served.</li>
              <li>Test single-platform claims with a live benefits-to-payroll flow, not a slide.</li>
              <li>Calculate total cost of ownership, not just the per-employee rate.</li>
              <li>Know who runs implementation and who supports you the day after go-live.</li>
              <li>Ask every vendor to show you AI completing a task, not answering a question.</li>
              <li>Price should be the last comparison, not the first.</li>
            </ol>
          </div>

          {/* Guide content */}
          <div style={{ display: 'grid', gap: '2rem' }}>
            {sections.map(({ num, title, body }) => (
              <div key={num} style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1 }}>{num}</span>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>{title}</h2>
                </div>
                <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.75', color: '#444' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gated download */}
      <section id="get-the-guide" style={{ background: '#000000', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Free Resource</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.7rem', fontWeight: '800', marginBottom: '1rem' }}>
                Get the printable HCM Buyer&apos;s Guide
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                The full guide includes a vendor comparison scorecard, an implementation question checklist, a total cost of ownership worksheet, and a requirements template you can take into your first demo.
              </p>
              <ul style={{ color: '#cccccc', paddingLeft: '1.25rem', lineHeight: '2', margin: 0 }}>
                <li>Vendor comparison scorecard</li>
                <li>Implementation question checklist</li>
                <li>Total cost of ownership worksheet</li>
                <li>Requirements template</li>
                <li>AI readiness checklist</li>
              </ul>
            </div>
            <div>
              <LeadCaptureForm
                toolName="HCM Software Buyer's Guide 2026"
                toolDescription="Get the full printable guide with a vendor scorecard, implementation checklist, and total cost of ownership worksheet."
                assetLabel="Send me the guide"
                calendlyLink={CALENDLY}
                followupText="your HCM software evaluation"
              />
            </div>
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

      {/* Related links */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.25rem' }}>Related tools and comparisons</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { label: 'HCM ROI Calculator', href: '/services/hcm-software/roi-calculator', desc: 'Estimate the savings from consolidating onto one platform.' },
              { label: 'isolved vs ADP', href: '/services/hcm-software/alternatives-to-adp', desc: 'How isolved and BEG compare to ADP for mid-market companies.' },
              { label: 'isolved vs Gusto', href: '/services/hcm-software/isolved-vs-gusto', desc: 'Small-business simplicity vs. a connected mid-market platform.' },
              { label: 'isolved vs Paycor', href: '/services/hcm-software/isolved-vs-paycor', desc: 'How two mid-market HCM platforms compare for growing firms.' },
            ].map(({ label, href, desc }) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '1.25rem', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', textDecoration: 'none', color: '#000' }}>
                <strong style={{ display: 'block', marginBottom: '0.3rem', color: '#000' }}>{label}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555', lineHeight: '1.5' }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
