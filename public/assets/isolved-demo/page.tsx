import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved Demo: What to Expect | BEG',
  description: 'Book an isolved demo with BEG. See what a tailored walkthrough covers, how BEG maps the platform to your real workflows, and how to prepare to get the most.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-demo' },
  openGraph: {
    title: 'isolved Demo: What to Expect | BEG',
    description: 'Book an isolved demo with BEG. See what a tailored walkthrough covers, how BEG maps the platform to your real workflows, and how to prepare to get the most.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-demo',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Demo: What to Expect | BEG', description: 'Book an isolved demo with BEG. See what a tailored walkthrough covers, how BEG maps the platform to your real workflows, and how to prepare to get the most.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How do I book an isolved demo?',
    a: 'Start with a short discovery call through BEG. That call lets BEG understand your business so the demo that follows is tailored to your workflows rather than a generic product tour.',
  },
  {
    q: 'What will the demo actually show me?',
    a: 'A BEG demo walks through how isolved handles payroll, HR, time, and benefits as one connected platform, mapped to scenarios that match your business. The goal is to show how the system fits your work, not just to list features.',
  },
  {
    q: 'Will I see the AI capabilities in the demo?',
    a: 'Yes. BEG can show how the Connector for Claude, generally available in June 2026, completes real HR tasks through conversation. It is one of the clearest ways to see how isolved differs from other platforms.',
  },
  {
    q: 'How should I prepare to get the most from a demo?',
    a: 'Come with your current pain points, the tools you use today, and your headcount. The more BEG knows about how you operate, the more specific and useful the walkthrough will be.',
  },
  {
    q: 'Is the demo a sales pitch?',
    a: 'It is a working session, not a hard sell. BEG focuses on whether isolved is the right fit for you, and will be candid if a particular need is better served a different way.',
  },
  {
    q: 'What happens after the demo?',
    a: 'If isolved is a fit, BEG can scope a configuration, run a custom cost comparison, and outline implementation. There is no obligation, and you leave with a clear understanding either way.',
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

export default function isolvedDemoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Demo</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            What to Expect From an isolved Demo With BEG
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            A good demo is not a feature tour. It shows you how isolved fits the way your business actually runs. Here is what a BEG-led walkthrough covers and how to get the most out of it.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your isolved Demo
          </Link>
        </div>
      </section>

      {/* Why a tailored demo */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why a Tailored Demo Beats a Generic Tour</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Most software demos run the same script for every viewer, clicking through screens that may have nothing to do with your business. That kind of tour leaves you guessing whether the platform fits your reality. BEG takes a different approach. Before the demo, a short discovery conversation captures how you run payroll, time, and benefits today and where the friction lives.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With that context, the walkthrough is built around your scenarios. You see isolved handle the situations you face every week, not a polished but irrelevant highlight reel. By the end, you are not wondering how the platform might work for you. You have watched it do exactly that.
          </p>
        </div>
      </section>

      {/* What the demo covers */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What the Demo Covers</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A BEG demo walks through isolved as a single connected platform, showing how payroll, HR, time, and benefits work together rather than as separate tools. You will see how data flows through one system, how routine tasks get done, and how reporting pulls from a single source of truth. Where it helps, BEG ties each part back to a workflow you already recognize.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The demo is also your chance to ask hard questions. How does it handle your multi-state payroll? What does open enrollment look like? How are approvals structured? BEG answers in the context of your business, so you leave with a realistic sense of fit rather than a list of features you have to interpret on your own.
          </p>
        </div>
      </section>

      {/* See the AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>See the AI in Action</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            One of the most memorable parts of the demo is the AI. isolved is the only HCM platform with a Connector for Claude, generally available in June 2026, and BEG can show it completing real HR tasks through conversation, such as running payroll, pulling reports, and updating employee data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Seeing work actually move forward through conversation, rather than just hearing about it, is often the moment the difference clicks. It is the clearest illustration of why isolved stands apart, and it is available today through BEG.
          </p>
        </div>
      </section>

      {/* How to prepare */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How to Prepare and What Comes Next</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            To get the most from your demo, bring your current pain points, a sense of the tools you use today, and your headcount. The more BEG understands about how you operate, the sharper and more relevant the walkthrough will be. Inviting the people who live in your HR and payroll processes also helps, since they will ask the questions that matter.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After the demo, if isolved is a fit, BEG can scope a configuration, run a custom cost comparison, and outline what implementation would look like. There is no obligation. Whether you move forward or not, you leave with genuine clarity about whether isolved plus BEG is right for your business.
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
            Book Your Tailored isolved Demo
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call to start. We will learn how you operate, then show you isolved built around your real workflows, including the Connector for Claude.
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
