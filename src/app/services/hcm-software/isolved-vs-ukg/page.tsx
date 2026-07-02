import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved vs UKG | Instant Price Quote + Claude AI | BEG',
  description: 'isolved vs UKG compared across platform breadth, pricing, implementation, support, and AI. See which HCM fits the mid-market versus large, complex enterprises.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-vs-ukg' },
  openGraph: {
    title: 'isolved vs UKG | Instant Price Quote + Claude AI | BEG',
    description: 'isolved vs UKG compared across platform breadth, pricing, implementation, support, and AI. See which HCM fits the mid-market versus large, complex enterprises.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-vs-ukg',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved vs UKG | Instant Price Quote + Claude AI | BEG', description: 'isolved vs UKG compared across platform breadth, pricing, implementation, support, and AI. See which HCM fits the mid-market versus large, complex enterprises.', images: ['https://www.beghr.com/assets/og-image.png'] },

};


const faqs = [
  {
    q: 'Is UKG a good HCM platform?',
    a: 'Yes. UKG is a powerful platform with deep workforce management capabilities, and it is a serious option for large, complex enterprises. Its strength in scheduling and labor management is well regarded across industries that run large hourly workforces.',
  },
  {
    q: 'When does it make sense to choose isolved over UKG?',
    a: 'isolved tends to fit better for mid-market companies that want a single connected platform without the complexity and long implementation cycles that often come with enterprise systems. If you do not need enterprise-scale workforce management, isolved can deliver what you need with less overhead.',
  },
  {
    q: 'Is UKG harder to implement than isolved?',
    a: 'Enterprise platforms like UKG are powerful, and that power often comes with longer, more involved implementations. With isolved, BEG implements, configures, and supports the platform for you and manages migration, which keeps the process structured and manageable for a mid-market team.',
  },
  {
    q: 'What is the AI difference between isolved and UKG?',
    a: 'isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It completes real HR tasks through conversation, not just answers questions. That capability is available today through BEG.',
  },
  {
    q: 'Can I move my data to isolved?',
    a: 'Yes. BEG manages the migration of payroll history, employee records, and benefits data as part of implementation, so the transition is structured rather than something you handle on your own.',
  },
  {
    q: 'Is isolved proven to deliver a return on investment?',
    a: 'Forrester documented a 330% ROI for isolved. More than 7 million employees are managed on the isolved platform, which speaks to its scale and reliability across many industries.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved vs UKG', item: 'https://www.beghr.com/services/hcm-software/isolved-vs-ukg' },
  ],
};

export default function isolvedVsUkgPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            isolved vs UKG: The Honest Comparison
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            UKG is a powerful enterprise workforce management platform built for large, complex organizations. The platform is a single connected isolved system built for the mid-market. Here is how they compare.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Bottom Line Up Front */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Bottom Line Up Front</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#ECAC60', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>isolved wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>A single connected platform for payroll, HR, time, and benefits</li>
                <li>Connector for Claude that completes real HR tasks</li>
                <li>BEG implements, configures, and supports it for you</li>
                <li>Strong fit for the mid-market without enterprise complexity</li>
                <li>Forrester-documented 330% ROI</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>UKG wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Deep enterprise workforce management capabilities</li>
                <li>Advanced scheduling and labor management at scale</li>
                <li>A fit for very large, complex organizations</li>
                <li>Breadth designed for enterprise-level requirements</li>
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
            UKG is a powerful enterprise platform with deep workforce management, especially around scheduling and labor management for large hourly workforces. That depth is genuinely valuable for the largest, most complex organizations, and UKG has earned its reputation in that space.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved is a single connected platform that brings payroll, HR, time, and benefits together for the mid-market. You get the consolidation of one platform without taking on enterprise-scale tooling you may not need. For a growing company, that focus keeps the system practical to run.
          </p>
        </div>
      </section>

      {/* Pricing and fees */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Pricing and Fees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            UKG is priced for the enterprise, which is appropriate for the scale and depth it delivers. For a large organization with the budget and the requirements to match, that investment can be justified. For a mid-market company, it can mean paying for capacity that goes unused.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved is priced for the mid-market and bundles broad capability into one connected platform. Because BEG scopes your configuration up front, you get clarity on what you are buying and why. BEG will run a side-by-side cost comparison so you can make a fair decision for your size and complexity.
          </p>
        </div>
      </section>

      {/* Implementation and support */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Implementation and Support</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Enterprise platforms like UKG are powerful, and that power often comes with longer, more involved implementation timelines. For a large organization with a dedicated project team, that is part of the territory. For a leaner mid-market team, a long rollout can be a real strain.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With isolved, BEG implements, configures, and supports the platform for you. You get a dedicated partner who knows your setup, manages migration from your current system, and stays with you for ongoing optimization and compliance updates rather than routing you to a general queue.
          </p>
        </div>
      </section>

      {/* AI capabilities */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI Capabilities</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It does not just answer questions. It completes real HR tasks through conversation, such as running payroll, pulling reports, and updating employee data.
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
            Choose UKG if you are a large, complex enterprise with deep workforce management needs, the budget for an enterprise platform, and a team ready to manage a longer implementation. For that profile, UKG is a strong and capable choice.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Choose isolved if you are a mid-market company that wants payroll, HR, time, and benefits to work together on one connected platform, with a partner who runs it for you. With more than 7 million employees on isolved and a Forrester-documented 330% ROI, it is built to scale with you.
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
            See isolved vs. Your Current Platform
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your setup, run a cost comparison, and show you what isolved plus BEG looks like for your company.
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
