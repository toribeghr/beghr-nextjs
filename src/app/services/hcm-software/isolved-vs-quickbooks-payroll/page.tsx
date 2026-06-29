import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'iSolved vs QuickBooks Payroll | One Platform + AI | BEG',
  description: 'iSolved vs QuickBooks Payroll compared on platform breadth, pricing, support, and AI. See which fits basic small-business payroll versus a full connected HCM.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-vs-quickbooks-payroll' },
  openGraph: {
    title: 'iSolved vs QuickBooks Payroll | One Platform + AI | BEG',
    description: 'iSolved vs QuickBooks Payroll compared on platform breadth, pricing, support, and AI. See which fits basic small-business payroll versus a full connected HCM.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-vs-quickbooks-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved vs QuickBooks Payroll | One Platform + AI | BEG', description: 'iSolved vs QuickBooks Payroll compared on platform breadth, pricing, support, and AI. See which fits basic small-business payroll versus a full connected HCM.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Is QuickBooks Payroll a good fit for a small business?',
    a: 'Yes. QuickBooks Payroll is a good fit for very small businesses that want basic payroll attached to their accounting. If your needs are simple and you already use QuickBooks for bookkeeping, it can serve you well.',
  },
  {
    q: 'What is the difference between QuickBooks Payroll and iSolved?',
    a: 'QuickBooks Payroll is basic small-business payroll tied to accounting, not a full HCM. iSolved is a single connected platform that brings payroll, HR, time, and benefits together. The core difference is basic payroll versus a complete HCM platform.',
  },
  {
    q: 'When does it make sense to move from QuickBooks Payroll to iSolved?',
    a: 'Companies commonly outgrow QuickBooks Payroll as they add employees and need HR, time and attendance, and benefits administration in addition to payroll. When you need more than basic payroll, iSolved brings those functions onto one connected platform.',
  },
  {
    q: 'What is the AI difference between iSolved and QuickBooks Payroll?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It completes real HR tasks through conversation, not just answers questions. That capability is available today through BEG.',
  },
  {
    q: 'Can I move my data from QuickBooks Payroll to iSolved?',
    a: 'Yes. BEG manages the migration of payroll history, employee records, and benefits data as part of implementation, so the transition is structured rather than something you handle on your own.',
  },
  {
    q: 'Is iSolved proven to deliver a return on investment?',
    a: 'Forrester documented a 330% ROI for iSolved. More than 7 million employees are managed on the iSolved platform, which speaks to its scale and reliability across many industries.',
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
    { '@type': 'ListItem', position: 3, name: 'iSolved vs QuickBooks Payroll', item: 'https://www.beghr.com/services/hcm-software/isolved-vs-quickbooks-payroll' },
  ],
};

export default function iSolvedVsQuickBooksPayrollPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            iSolved vs QuickBooks Payroll: The Honest Comparison
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            QuickBooks Payroll is basic small-business payroll attached to accounting. iSolved is a single connected platform for payroll, HR, time, and benefits. Here is how they compare.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Bottom Line Up Front */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Bottom Line Up Front</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#ECAC60', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>iSolved wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>A single connected platform for payroll, HR, time, and benefits</li>
                <li>Connector for Claude that completes real HR tasks</li>
                <li>BEG implements, configures, and supports it for you</li>
                <li>A complete HCM, not just basic payroll</li>
                <li>Forrester-documented 330% ROI</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>QuickBooks Payroll wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Basic payroll tied directly to accounting</li>
                <li>Familiarity for businesses already on QuickBooks</li>
                <li>Speed to get started for very small teams</li>
                <li>A clean fit for simple payroll-only needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform and all-in-one */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Platform and All-in-One Coverage</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            QuickBooks Payroll is basic payroll attached to accounting, and it does that job well for very small businesses. It is intentionally narrow, which is part of its appeal if you only need to run payroll and keep it close to your books. As your needs grow beyond payroll, a payroll-only tool can start to feel thin.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved is a single connected platform that brings payroll, HR, time, and benefits together. Rather than running payroll in one place and managing HR, time, and benefits elsewhere, your data lives in one system. For companies that have outgrown basic payroll, that consolidation matters.
          </p>
        </div>
      </section>

      {/* Pricing and fees */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Pricing and Fees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            QuickBooks Payroll is generally affordable for very small teams, which is part of why it is so widely used. The trade-off is that the low cost reflects a narrow scope, so as needs grow you often end up adding other tools alongside it for HR, time, and benefits.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved is priced for the mid-market and bundles broad capability into one connected platform. Because BEG scopes your configuration up front, you get clarity on what you are buying and why. BEG will run a side-by-side cost comparison so you can make a fair decision for your size and complexity.
          </p>
        </div>
      </section>

      {/* Implementation and support */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Implementation and Support</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            QuickBooks Payroll is largely self-service, so setup and ongoing administration sit with your team. For a very small business running simple payroll, that is often fine. As you add employees and complexity, doing it all alone can become a burden.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With iSolved, BEG implements, configures, and supports the platform for you. You get a dedicated partner who knows your setup, manages migration from your current system, and stays with you for ongoing optimization and compliance updates rather than routing you to a general queue.
          </p>
        </div>
      </section>

      {/* AI capabilities */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI Capabilities</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It does not just answer questions. It completes real HR tasks through conversation, such as running payroll, pulling reports, and updating employee data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            For teams that want to move work forward through AI rather than just look things up, this is a meaningful difference, and it is available today through BEG.
          </p>
        </div>
      </section>

      {/* Best-fit buyer / who should choose which */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Who Should Choose Which</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Choose QuickBooks Payroll if you are a very small business that only needs basic payroll tied to your accounting and does not expect much complexity. It is a genuinely good option for that profile, and there is no need to over-buy.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Choose iSolved if you have outgrown basic payroll and want payroll, HR, time, and benefits to work together on one connected platform with a partner who runs it for you. With more than 7 million employees on iSolved and a Forrester-documented 330% ROI, it is built to scale with you.
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
            See iSolved vs. Your Current Platform
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your setup, run a cost comparison, and show you what iSolved plus BEG looks like for your company.
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
