import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'iSolved vs Paycor | One Platform + Claude AI | BEG',
  description: 'iSolved vs Paycor compared on platform breadth, pricing, implementation, support, and AI. See which mid-market HCM fits your team and how BEG manages it for you.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/isolved-vs-paycor' },
  openGraph: {
    title: 'iSolved vs Paycor | One Platform + Claude AI | BEG',
    description: 'iSolved vs Paycor compared on platform breadth, pricing, implementation, support, and AI. See which mid-market HCM fits your team and how BEG manages it for you.',
    url: 'https://beghr.com/services/hcm-software/isolved-vs-paycor',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved vs Paycor | One Platform + Claude AI | BEG', description: 'iSolved vs Paycor compared on platform breadth, pricing, implementation, support, and AI. See which mid-market HCM fits your team and how BEG manages it for you.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Is Paycor a good HCM platform?',
    a: 'Yes. Paycor is a solid mid-market HCM with a broad set of features. It is a credible option for many growing companies, and it competes directly in the same space as iSolved.',
  },
  {
    q: 'When does it make sense to choose iSolved over Paycor?',
    a: 'iSolved tends to fit better when you want a single connected platform with clear, scoped configuration and a partner who runs it for you. Paycor can involve add-on pricing for additional modules, and support experiences can vary, so the difference often comes down to predictability and the partner relationship.',
  },
  {
    q: 'How does pricing compare between iSolved and Paycor?',
    a: 'Paycor often uses add-on pricing where modules are layered on, which can make the total harder to predict. With iSolved, BEG scopes your configuration up front so you get clarity on what you are buying. BEG will run a side-by-side cost comparison for your size and complexity.',
  },
  {
    q: 'What is the AI difference between iSolved and Paycor?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It completes real HR tasks through conversation, not just answers questions. That capability is available today through BEG.',
  },
  {
    q: 'Can I move my data from Paycor to iSolved?',
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
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'iSolved vs Paycor', item: 'https://beghr.com/services/hcm-software/isolved-vs-paycor' },
  ],
};

export default function iSolvedVsPaycorPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            iSolved vs Paycor: The Honest Comparison
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Paycor is a solid mid-market HCM that competes directly with iSolved. Both serve growing companies well, so the decision often comes down to pricing clarity, support, and the partner behind the platform. Here is how they compare.
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: '#ECAC60', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>iSolved wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>A single connected platform for payroll, HR, time, and benefits</li>
                <li>Connector for Claude that completes real HR tasks</li>
                <li>BEG implements, configures, and supports it for you</li>
                <li>Scoped, predictable configuration up front</li>
                <li>Forrester-documented 330% ROI</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Paycor wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>A solid, broad mid-market HCM feature set</li>
                <li>A credible option for many growing companies</li>
                <li>Established presence in the mid-market</li>
                <li>A wide catalog of available modules</li>
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
            Paycor is a solid mid-market HCM with a broad feature set, and it competes directly with iSolved for growing companies. It is a credible platform, and many teams are well served by it.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved is a single connected platform that brings payroll, HR, time, and benefits together, with configuration scoped to your needs. Because the platforms overlap so much in capability, the decision often comes down to pricing clarity, support, and the partner who runs it for you.
          </p>
        </div>
      </section>

      {/* Pricing and fees */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Pricing and Fees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Paycor often uses add-on pricing, where additional modules are layered on as you need them. That flexibility can be useful, but it can also make the total cost harder to predict as your requirements grow.
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
            Support experiences with mid-market platforms can vary depending on how you are routed and who you reach. For a growing company, consistent and knowledgeable support makes a real difference in how smoothly the platform runs day to day.
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
            Choose Paycor if you want a solid, broad mid-market HCM and are comfortable managing add-on modules and variable support as your needs evolve. It is a credible platform for many growing companies.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Choose iSolved if you want payroll, HR, time, and benefits to work together on one connected platform with scoped, predictable configuration and a partner who runs it for you. With more than 7 million employees on iSolved and a Forrester-documented 330% ROI, it is built to scale with you.
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
            href: '/blog/hcm-technology/isolved-platform',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'Payroll, onboarding, benefits enrollment, and compliance reporting are high-ROI automation targets. Here is what to prioritize and what to keep manual.',
            href: '/blog/hcm-technology/hr-automation',
          },
          {
            category: 'HCM technology',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026, FLSA threshold updates, and what your HCM platform should be handling automatically, not manually.',
            href: '/blog/hcm-technology/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
