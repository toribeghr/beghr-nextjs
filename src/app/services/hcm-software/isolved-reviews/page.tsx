import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'isolved Reviews | Instant Price Quote | BEG',
  description: 'A fair overview of isolved: its strengths as a single connected HCM platform, honest considerations to weigh, and how BEG addresses them through implementation.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-reviews' },
  openGraph: {
    title: 'isolved Reviews | Instant Price Quote | BEG',
    description: 'A fair overview of isolved: its strengths as a single connected HCM platform, honest considerations to weigh, and how BEG addresses them through implementation.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-reviews',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Reviews | Instant Price Quote | BEG', description: 'A fair overview of isolved: its strengths as a single connected HCM platform, honest considerations to weigh, and how BEG addresses them through implementation.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What do users tend to like about isolved?',
    a: 'Sentiment is generally most positive about having payroll, HR, time, and benefits on a single connected platform instead of juggling separate tools. Buyers also value the platform scale, with more than 7 million employees managed on isolved.',
  },
  {
    q: 'What are common considerations buyers raise?',
    a: 'As with any capable HCM platform, the main consideration is that the breadth of the system rewards thoughtful setup. A platform configured poorly will frustrate any team, which is why the quality of your implementation partner matters as much as the software.',
  },
  {
    q: 'Does BEG help with the configuration concerns people mention?',
    a: 'Yes. BEG implements, configures, and supports isolved for you, which directly addresses the most common consideration. A well-scoped configuration tailored to your policies is what turns platform breadth into an advantage rather than a burden.',
  },
  {
    q: 'Is isolved a good choice for growing companies?',
    a: 'Yes. The isolved platform is built for growing, more complex companies and is proven at scale. The single connected platform model is especially valuable as you add states, benefits complexity, and headcount.',
  },
  {
    q: 'What about the AI capabilities people are talking about?',
    a: 'isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It completes real HR tasks through conversation rather than only answering questions, which is a genuine point of differentiation.',
  },
  {
    q: 'Has isolved demonstrated real return on investment?',
    a: 'Yes. Forrester documented a 330% ROI for isolved. Paired with a partner-led implementation from BEG, that return reflects a platform built to deliver measurable value.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved Reviews', item: 'https://www.beghr.com/services/hcm-software/isolved-reviews' },
  ],
};

export default function isolvedReviewsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Reviews</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            isolved Reviews: A Fair Look at Strengths and Considerations
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Reviews are most useful when they are honest. Here is a balanced overview of where isolved earns praise, the considerations worth weighing, and how a partner-led approach from BEG addresses them.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* How to read reviews */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How to Read HCM Software Reviews</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Software reviews are a helpful starting point, but they reflect a wide range of companies, setups, and implementation partners. A review written by a business with a poorly configured system tells you more about that configuration than about the platform itself. The most valuable signal is not a single score but the patterns in what users consistently praise and consistently raise as considerations.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With that lens, the picture of isolved is clear and reasonable. The platform is widely valued for breadth and consolidation, and the considerations users mention are the same ones that apply to any capable, full-featured HCM system. What follows is an honest read of both sides.
          </p>
        </div>
      </section>

      {/* Strengths */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Where isolved Earns Praise</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The strength users return to most often is the value of a single connected platform. Having payroll, HR, time, and benefits in one system, rather than stitched together from separate tools, removes reconciliation work and gives teams a single source of truth. For growing, more complex companies, that consolidation is consistently described as the biggest practical win.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Buyers also weigh the platform proof points. More than 7 million employees are managed on isolved, and Forrester documented a 330% ROI. Scale and documented return give buyers confidence that they are choosing a serious, established system rather than an unproven product. Increasingly, the Connector for Claude, generally available in June 2026, stands out as a forward-looking strength because it completes real HR tasks through conversation.
          </p>
        </div>
      </section>

      {/* Considerations */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Considerations Worth Weighing</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            No platform is perfect, and an honest review acknowledges that. The most common consideration with any broad HCM system is that its depth rewards a thoughtful setup. A platform with many capabilities can feel complex if it is configured without care, and teams that try to stand it up entirely on their own can find the breadth overwhelming at first.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            This is less a flaw in the software than a reflection of what full-featured HCM platforms require. The companies that report the best experiences are those that invested in a proper configuration aligned to their policies and had support they could rely on. In other words, the implementation and the partner behind it shape the experience as much as the platform.
          </p>
        </div>
      </section>

      {/* How BEG addresses */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>How BEG Tilts the Experience in Your Favor</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            The single biggest factor in a positive isolved experience is a strong implementation, and that is precisely what BEG provides. BEG implements, configures, and supports the platform for you, scoping it to your policies and migrating your data so the system works the way your business does from day one.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            That partner-led approach directly addresses the most common consideration in reviews. Instead of facing the breadth of the platform alone, you have a team that knows your configuration and stays with you. It is how the praised strengths become your reality and the considerations stop being your problem.
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
            Decide for Yourself With BEG
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through what isolved does well, address any considerations honestly, and show you how a BEG-led setup looks for your business.
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
