import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved vs Workday | Instant Price Quote + AI | BEG',
  description: 'isolved vs Workday compared across platform breadth, pricing, implementation, support, and AI.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-vs-workday' },
  openGraph: {
    title: 'isolved vs Workday | Instant Price Quote + AI | BEG',
    description: 'isolved vs Workday compared across platform breadth, pricing, implementation, support, and AI.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-vs-workday',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved vs Workday | Instant Price Quote + AI | BEG', description: 'isolved vs Workday compared across platform breadth, pricing, implementation, support, and AI.', images: ['https://www.beghr.com/assets/og-image.png'] },

};


const faqs = [
  {
    q: 'Is Workday a good HCM platform?',
    a: 'Yes. Workday is an enterprise leader and a very powerful platform. For the largest, most complex global organizations, it is among the most capable systems available.',
  },
  {
    q: 'When does it make sense to choose isolved over Workday?',
    a: 'isolved tends to fit better for mid-market companies that do not need enterprise scale. Workday is powerful but very expensive and often involves long implementations, which can be overkill for most mid-market firms. The isolved platform delivers a connected platform without that overhead.',
  },
  {
    q: 'Is Workday harder to implement than isolved?',
    a: 'Workday is an enterprise platform, and implementations are often long and involved. With isolved, BEG implements, configures, and supports the platform for you and manages migration, which keeps the process manageable for a mid-market team.',
  },
  {
    q: 'What is the AI difference between isolved and Workday?',
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
    { '@type': 'ListItem', position: 3, name: 'isolved vs Workday', item: 'https://www.beghr.com/services/hcm-software/isolved-vs-workday' },
  ],
};

export default function isolvedVsWorkdayPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            isolved vs Workday: The Honest Comparison
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Workday is an enterprise leader and a very powerful platform for the largest organizations. The platform is a single connected isolved system built for the mid-market. Here is how they compare.
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
                <li>Strong fit for the mid-market without enterprise overhead</li>
                <li>Forrester-documented 330% ROI</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Workday wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Enterprise leadership and proven scale</li>
                <li>Very powerful HCM and financials capabilities</li>
                <li>Breadth designed for the largest global organizations</li>
                <li>A fit for the most complex enterprise requirements</li>
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
            Workday is a very powerful enterprise platform and a recognized leader for the largest, most complex organizations. That depth is genuinely valuable at enterprise scale, and Workday has earned its standing there.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved is a single connected platform that brings payroll, HR, time, and benefits together for the mid-market. You get the consolidation of one platform without taking on enterprise-scale tooling that can be overkill for most mid-market firms. For a growing company, that focus keeps the system practical to run.
          </p>
        </div>
      </section>

      {/* Pricing and fees */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Pricing and Fees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Workday is very expensive, which reflects the scale and depth it delivers at the enterprise level. For a large global organization with the requirements to match, that investment can be justified. For a mid-market company, it can mean paying for capacity that goes unused.
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
            Workday implementations are often long and involved, which is part of the territory for an enterprise platform of its scope. For a large organization with a dedicated project team, that is manageable. For a leaner mid-market team, a long rollout can be a real strain.
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
            Choose Workday if you are a large, complex global enterprise that needs a powerful enterprise platform, has the budget for it, and is ready to manage a long implementation. For that profile, Workday is a leading and capable choice.
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
