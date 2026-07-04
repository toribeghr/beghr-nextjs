import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved vs Rippling | Instant Price Quote + AI | BEG',
  description: 'isolved vs Rippling compared across platform design, pricing transparency, implementation, support, and AI.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-vs-rippling' },
  openGraph: {
    title: 'isolved vs Rippling | Instant Price Quote + AI | BEG',
    description: 'isolved vs Rippling compared across platform design, pricing transparency, implementation, support, and AI.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-vs-rippling',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved vs Rippling | Instant Price Quote + AI | BEG', description: 'isolved vs Rippling compared across platform design, pricing transparency, implementation, support, and AI.', images: ['https://www.beghr.com/assets/og-image.png'] },

};


const faqs = [
  {
    q: 'How is isolved different from Rippling?',
    a: 'Rippling is a modern all-in-one system that spans HR, IT, and payroll, and it is powerful but can be complex and IT-centric. The isolved platform focuses on bringing payroll, HR, time, and benefits onto a single connected platform with a partner who implements and runs it for you.',
  },
  {
    q: 'Is Rippling hard to set up?',
    a: 'Rippling is feature-rich, and that breadth can make setup and ongoing administration more involved, especially for teams without dedicated IT resources. With isolved, BEG handles implementation and configuration so the complexity does not fall on you.',
  },
  {
    q: 'Is Rippling pricing transparent?',
    a: 'Rippling pricing is often bundled and can be difficult to compare cleanly. With isolved, BEG scopes your configuration up front and runs a side-by-side cost comparison so you understand what you are buying.',
  },
  {
    q: 'Does isolved have an AI advantage over Rippling?',
    a: 'Yes. The isolved platform is the only HCM platform with a Connector for Claude, generally available in June 2026. It completes real HR tasks through conversation rather than just answering questions. Rippling does not offer an equivalent capability.',
  },
  {
    q: 'Can BEG migrate us from Rippling to isolved?',
    a: 'Yes. BEG manages migration of payroll history, employee records, and benefits data as part of implementation, so the move is structured and supported rather than do-it-yourself.',
  },
  {
    q: 'Is isolved proven at scale?',
    a: 'Yes. More than 7 million employees are managed on the isolved platform, and Forrester documented a 330% ROI. It is a proven choice for mid-market companies.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved vs Rippling', item: 'https://www.beghr.com/services/hcm-software/isolved-vs-rippling' },
  ],
};

export default function isolvedVsRipplingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            isolved vs Rippling: The Honest Comparison
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Rippling is a modern all-in-one system spanning HR, IT, and payroll. The isolved platform is a single connected HR system that BEG runs for you. Here is how they compare for a mid-market company.
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
                <li>Clear, scoped pricing for the mid-market</li>
                <li>Forrester-documented 330% ROI</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rippling wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Broad all-in-one scope across HR, IT, and payroll</li>
                <li>Strong fit for IT-led, device and app management needs</li>
                <li>Deep automation for technically sophisticated teams</li>
                <li>Modern, unified product design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform and all-in-one */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Platform Design and Scope</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Rippling is a powerful all-in-one platform that reaches across HR, IT, and payroll. That breadth is a real strength for IT-centric organizations that want to manage people, devices, and apps in one system. The same breadth can also add complexity, and it can be more than a people-focused HR team needs.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved takes a focused approach. It brings payroll, HR, time, and benefits onto a single connected platform built around the work HR teams actually do. For mid-market companies that want depth in HR without taking on an IT management suite, that focus is an advantage.
          </p>
        </div>
      </section>

      {/* Pricing and fees */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Pricing and Transparency</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Rippling pricing is often bundled, which can make it hard to see exactly what you are paying for and to compare cleanly against alternatives. For buyers who value predictability, that opacity is worth weighing.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With isolved, BEG scopes your configuration up front so the cost is clear and tied to what you actually use. BEG will run a side-by-side comparison so you can make a confident, informed decision.
          </p>
        </div>
      </section>

      {/* Implementation and support */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Implementation and Support</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Rippling is feature-rich, and realizing that value often takes meaningful configuration. Teams without dedicated IT resources can find the setup and ongoing administration demanding.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With isolved, BEG implements, configures, and supports the platform for you. You get a dedicated partner who handles migration from your current system and stays with you for ongoing optimization and compliance, rather than leaving the complexity on your desk.
          </p>
        </div>
      </section>

      {/* AI capabilities */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI Capabilities</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It completes real HR tasks through conversation, such as running payroll, pulling reports, and updating employee data, not just answering questions.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Rippling does not offer an equivalent capability. For teams that want AI to move work forward rather than simply look things up, this is a clear difference, and it is available today through BEG.
          </p>
        </div>
      </section>

      {/* Best-fit buyer / who should choose which */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Who Should Choose Which</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Choose Rippling if you want a broad, IT-centric all-in-one system to manage people, devices, and apps together, and you have the internal resources to configure and maintain it. For technically sophisticated teams, it is a capable platform.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Choose isolved if you want a single connected HR platform with depth in payroll, HR, time, and benefits, clear pricing, and a partner who runs it for you. With more than 7 million employees on isolved and a Forrester-documented 330% ROI, it is a strong mid-market fit.
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
