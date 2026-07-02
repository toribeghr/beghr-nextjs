import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved Pricing | Instant Price Quote | BEG',
  description: 'How isolved pricing works: scoped by modules and headcount, transparent, and tailored to your needs. BEG runs a custom cost comparison on what you are buying.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-pricing' },
  openGraph: {
    title: 'isolved Pricing | Instant Price Quote | BEG',
    description: 'How isolved pricing works: scoped by modules and headcount, transparent, and tailored to your needs. BEG runs a custom cost comparison on what you are buying.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-pricing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Pricing | Instant Price Quote | BEG', description: 'How isolved pricing works: scoped by modules and headcount, transparent, and tailored to your needs. BEG runs a custom cost comparison on what you are buying.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'How does isolved pricing work?',
    a: 'isolved pricing is scoped to your business. The two biggest drivers are the modules you choose, such as payroll, time, benefits, and talent, and your employee headcount. Because every company has a different mix, pricing is tailored rather than fixed on a public list.',
  },
  {
    q: 'Why is there no single published price?',
    a: 'A 50-person company running payroll only and a 400-person company running payroll, time, benefits, and talent have very different needs. A single sticker price would be misleading for one of them. Scoping the configuration first is what makes the pricing honest.',
  },
  {
    q: 'Does BEG help me understand the cost?',
    a: 'Yes. BEG runs a custom cost comparison based on your headcount and the modules you actually need, then walks you through it. The goal is clarity on what you are buying and why, not a number pulled from thin air.',
  },
  {
    q: 'Is implementation a separate cost?',
    a: 'Implementation, configuration, and migration are part of working with BEG as your partner. BEG will lay out what is included for your situation during the cost comparison so there are no surprises.',
  },
  {
    q: 'Will I pay for features I do not use?',
    a: 'BEG scopes only the modules that fit your needs today, so you are not buying capability you will not touch. As you grow, you can add modules, and BEG helps you decide when that makes sense.',
  },
  {
    q: 'Is isolved worth the investment?',
    a: 'Forrester documented a 330% ROI for isolved, and more than 7 million employees are managed on the platform. The right way to judge value is against your current costs, which is exactly what the BEG cost comparison is designed to show.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved Pricing', item: 'https://www.beghr.com/services/hcm-software/isolved-pricing' },
  ],
};

export default function isolvedPricingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Pricing</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How isolved Pricing Works
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            isolved pricing is scoped to your business, not pulled from a one-size-fits-all list. It reflects the modules you choose and your headcount. BEG runs a custom cost comparison so you know exactly what you are buying and why.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* How pricing is structured */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What Drives isolved Pricing</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved pricing is built around two main factors. The first is the set of modules you choose. The platform is a single connected isolved system covering payroll, HR, time, and benefits, and you select the capabilities that match how your business runs. A company that needs only payroll is scoped differently from one that needs payroll, time tracking, benefits administration, and talent tools.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second factor is headcount. As the number of employees on the platform changes, so does the scope of what the system manages. Together, modules and headcount produce a price that reflects your actual usage rather than an arbitrary tier. This is why you will not find a meaningful published price online: a real number requires knowing your specific needs first.
          </p>
        </div>
      </section>

      {/* Transparency */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Tailored Does Not Mean Opaque</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Some buyers worry that custom pricing is a way to hide the ball. With BEG, the opposite is true. Scoping the configuration up front is what makes the pricing transparent. Once BEG understands your headcount and the modules you need, you get a clear picture of what is included, what each piece does for you, and how it maps to the way you operate.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Because BEG scopes only what fits your needs today, you avoid paying for features you will not use. If your needs grow, you can add modules later, and BEG helps you decide when that move actually pays off. The aim is a price you understand and can defend, not a number you have to take on faith.
          </p>
        </div>
      </section>

      {/* BEG cost comparison */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The BEG Custom Cost Comparison</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The most useful number is not the isolved price in isolation. It is how that price compares to what you spend today across the tools and manual work you currently rely on. BEG runs a custom cost comparison that puts your current setup next to a scoped isolved configuration, so you can judge value on real terms.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            That comparison also accounts for what BEG handles as your partner: implementation, configuration, data migration, and ongoing support. When you weigh isolved against your current state, you are comparing a managed, single connected platform against a patchwork you maintain yourself. Forrester documented a 330% ROI for isolved, and the cost comparison is how you see what that could mean for your business.
          </p>
        </div>
      </section>

      {/* Platform value / AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>What You Get for the Price</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            Your investment buys a single connected platform for payroll, HR, time, and benefits, managed and supported by BEG. It also includes the Connector for Claude, generally available in June 2026, the only AI of its kind in HCM, which completes real HR tasks through conversation.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            With more than 7 million employees managed on isolved, you are investing in a platform proven at scale. The custom cost comparison from BEG is the fastest way to see how that value lines up against what you spend now.
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
            Get a Custom isolved Cost Comparison
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will scope the modules you need, factor in your headcount, and compare a tailored isolved price against what you spend today.
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
