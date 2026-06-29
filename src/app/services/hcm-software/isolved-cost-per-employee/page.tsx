import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'isolved Cost Per Employee: How Pricing Works | BEG',
  description: 'How isolved cost per employee is calculated, what drives the per-PEPM price, and how BEG provides a custom cost comparison against your current system on a discovery call.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-cost-per-employee' },
  openGraph: {
    title: 'isolved Cost Per Employee: How Pricing Works | BEG',
    description: 'How isolved cost per employee is calculated, what drives the per-PEPM price, and how BEG provides a custom cost comparison against your current system on a discovery call.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-cost-per-employee',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Cost Per Employee: How Pricing Works | BEG', description: 'How isolved cost per employee is calculated, what drives the per-PEPM price, and how BEG provides a custom cost comparison against your current system on a discovery call.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is the isolved cost per employee per month?',
    a: 'isolved pricing is structured on a per-employee-per-month (PEPM) basis, with the rate varying by the modules you select. There is no single published PEPM number because companies with 50 employees running payroll only and companies with 300 employees running payroll, time, benefits, and talent have fundamentally different needs. BEG scopes the exact modules for your situation and provides a transparent cost comparison on your discovery call.',
  },
  {
    q: 'What modules drive the isolved cost per employee?',
    a: 'The primary cost drivers are the modules you choose: payroll, HR, time and attendance, benefits administration, talent management, and the Connector for Claude. Each module adds to the per-employee-per-month rate. BEG scopes only the modules you actually need so you are not paying for capability you will not use.',
  },
  {
    q: 'Does the cost per employee go down as headcount increases?',
    a: 'Generally, yes. isolved pricing has volume considerations that reduce the per-employee rate at higher headcount tiers. The exact breakpoints depend on your configuration. BEG factors this into the cost comparison it builds for your specific headcount.',
  },
  {
    q: 'Is implementation included in the isolved cost per employee?',
    a: 'Implementation, configuration, and migration are part of working with BEG as your partner. BEG covers implementation as part of the relationship rather than as a separate professional services invoice. The discovery call covers what is included for your specific situation.',
  },
  {
    q: 'How does isolved cost per employee compare to what I am paying now?',
    a: 'That is exactly what the BEG cost comparison is designed to show. Most companies running disconnected payroll, HR, and benefits tools are paying more in combined per-employee costs than a consolidated isolved platform costs, once you add up per-employee fees across multiple systems. BEG builds that comparison for your actual headcount and module mix.',
  },
  {
    q: 'What ROI should I expect from isolved?',
    a: 'Forrester documented a 330% ROI for isolved clients, driven by reduced administrative time, eliminated errors, consolidated system costs, and improved compliance. That figure is an average across Forrester\'s study population, and your actual return depends on your current environment. BEG walks through the ROI picture on your discovery call.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved Cost Per Employee', item: 'https://www.beghr.com/services/hcm-software/isolved-cost-per-employee' },
  ],
};

export default function IsolvedCostPerEmployee() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>isolved · Cost Per Employee</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            isolved Cost Per Employee: How the Pricing Works
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            isolved pricing is per employee per month, scoped to the modules you actually need. There is no single published rate because the right number depends on your headcount, your module selection, and your current environment. Here is how it works, what drives the cost, and how to get a real comparison against what you are paying now.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Get a Custom Cost Comparison
          </Link>
        </div>
      </section>

      {/* How PEPM works */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved Per-Employee Pricing Is Structured</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved uses a per-employee-per-month (PEPM) pricing model. You pay a monthly rate based on two variables: your active employee headcount and the modules you have enabled. This means a company running payroll only pays less per employee than a company running payroll, time, benefits, and talent management, because the second company is using more platform capability.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The per-employee rate typically decreases as headcount grows, meaning larger organizations pay less per person. The rate you pay is set at the start of your agreement based on your expected headcount and module configuration, and it adjusts as headcount changes over time.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            What this means practically: there is no meaningful answer to "what does isolved cost per employee" without knowing your headcount and modules. Any number you find quoted publicly is either a range, a floor, or a number for a specific configuration that may not match yours.
          </p>
        </div>
      </section>

      {/* What drives cost */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What Drives the isolved Cost Per Employee</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Module selection', body: 'The core cost driver. Payroll, HR, time and attendance, benefits administration, talent management, and the Connector for Claude each add to the PEPM rate. BEG scopes only what you actually need.' },
              { title: 'Employee headcount', body: 'Volume pricing applies. Larger headcounts reduce the per-employee rate. The exact breakpoints depend on your configuration. BEG accounts for this in the cost comparison.' },
              { title: 'Implementation', body: 'With BEG, implementation is part of the relationship. You are not paying a separate professional services invoice to stand up the platform. This is factored into your total cost picture.' },
              { title: 'Complexity of configuration', body: 'Multi-state payroll, multiple entities, complex benefits structures, and specialized pay types can affect the scope of implementation. BEG prices based on your actual situation.' },
              { title: 'Current contract timing', body: 'Switching from your current platform before a contract auto-renewal avoids paying for two systems. BEG times implementation to your renewal window to manage that cost.' },
              { title: 'ROI offset', body: 'Forrester documented a 330% ROI for isolved clients. Reduced admin time, eliminated errors, consolidated system costs, and improved compliance change the net cost picture significantly.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The Right Question Is Not What isolved Costs. It Is What Your Current Setup Costs.</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Most companies evaluating isolved are currently running two to four systems: a payroll tool, a separate HR system, a time and attendance platform, and sometimes a separate benefits tool. Each of those has its own PEPM fee. Add them up, add the admin time spent reconciling them, add the cost of the errors that happen at the handoffs, and the real cost of your current setup is higher than the line item on any one invoice.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved platform consolidates those systems into one. The PEPM for a consolidated platform often comes in below the combined PEPM of the tools it replaces, and that is before accounting for the administrative time and error cost that disappears when the seams between systems are removed.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            BEG builds that comparison for your actual headcount and current system configuration on the discovery call. You leave knowing the real cost delta, not an estimate.
          </p>
        </div>
      </section>

      {/* AI value */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Cost of the Connector for Claude: Built Into Your Platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. It is included in the isolved platform and is the only live AI integration in an HCM system that completes actual HR tasks through a Claude AI conversation rather than just answering questions.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            No other HCM platform has this capability today. For companies evaluating the total value of the isolved platform against alternatives, the Connector for Claude is a capability that does not have an equivalent cost-per-employee line item anywhere else. It is part of the isolved platform, managed by BEG.
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
          <h2 style={{ marginBottom: '0.5rem' }}>What does each employee really cost your business?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual cost per employee. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            Get a Real Cost Comparison for Your Headcount
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. BEG scopes the modules you need and builds a side-by-side cost comparison against your current system. You leave knowing the real number.
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
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI HR automation targets and what they save your team in time and cost each month.',
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
