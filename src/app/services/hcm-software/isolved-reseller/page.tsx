import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'iSolved Reseller & Partner | BEG',
  description: 'BEG is an authorized iSolved reseller and partner. Learn what that means and why buying iSolved through BEG includes implementation, migration, and support.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/isolved-reseller' },
  openGraph: {
    title: 'iSolved Reseller & Partner | BEG',
    description: 'BEG is an authorized iSolved reseller and partner. Learn what that means and why buying iSolved through BEG includes implementation, migration, and support.',
    url: 'https://beghr.com/services/hcm-software/isolved-reseller',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved Reseller & Partner | BEG', description: 'BEG is an authorized iSolved reseller and partner. Learn what that means and why buying iSolved through BEG includes implementation, migration, and support.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does it mean that BEG is an iSolved reseller?',
    a: 'As an authorized iSolved reseller and partner, BEG sells, implements, configures, and supports the iSolved platform directly. You get the same platform along with a local partner who is accountable for making it work for your business.',
  },
  {
    q: 'Does buying iSolved through BEG cost more than going direct?',
    a: 'Buying through BEG bundles implementation, configuration, migration, and ongoing support into your relationship rather than leaving you to source those separately. BEG will run a custom cost comparison so you can see exactly what is included for your size and needs.',
  },
  {
    q: 'What is included when I buy iSolved from BEG?',
    a: 'BEG implements the platform, configures it to your policies, migrates your existing payroll and employee data, and provides ongoing support. You are buying an outcome, not just a software license.',
  },
  {
    q: 'Who do I call for help after go-live?',
    a: 'You call BEG. As your partner, BEG provides support from a team that already knows your configuration, rather than routing you into a general queue that has no context on your setup.',
  },
  {
    q: 'Does the reseller relationship affect the AI capabilities?',
    a: 'No. You get the full iSolved platform, including the Connector for Claude, generally available in June 2026, which completes real HR tasks through conversation. BEG helps you put that capability to work.',
  },
  {
    q: 'Is iSolved a proven platform to buy into?',
    a: 'Yes. More than 7 million employees are managed on the iSolved platform, and Forrester documented a 330% ROI. Buying through BEG pairs that proven platform with hands-on partnership.',
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
    { '@type': 'ListItem', position: 3, name: 'iSolved Reseller', item: 'https://beghr.com/services/hcm-software/isolved-reseller' },
  ],
};

export default function iSolvedResellerPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · iSolved Partner</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            BEG Is an Authorized iSolved Reseller and Partner
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            You can buy iSolved as software. Or you can buy it from a partner who implements it, configures it, migrates your data, and stands behind it. That is what BEG does as an authorized iSolved reseller.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* What a reseller is */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What an Authorized iSolved Reseller Actually Is</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            An authorized reseller is more than a sales channel. As an iSolved partner, BEG is licensed to sell the platform and is also responsible for delivering it well. That means BEG sits between you and a complex piece of software, translating your business needs into a working configuration and staying accountable for the result.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The distinction matters because HCM software is only as valuable as its setup. A platform that is wrong for your policies, or half configured, creates more work than it removes. Buying through a partner means the people selling you the system are the same people making sure it fits.
          </p>
        </div>
      </section>

      {/* Why buy through BEG */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Buy iSolved Through BEG</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            When you buy iSolved through BEG, you are not buying a login and a manual. You are buying an outcome. BEG implements the platform, configures it to your policies and workflows, migrates your existing payroll history and employee records, and provides ongoing support. Each of those is a service you would otherwise have to source, manage, and pay for separately.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Because pricing depends on your headcount and the modules you need, BEG runs a custom cost comparison rather than quoting a one-size-fits-all number. You see what is included and why, so the decision is grounded in your actual requirements instead of a generic price sheet.
          </p>
        </div>
      </section>

      {/* Implementation + support included */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Implementation and Support Are Part of the Deal</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The hardest part of any HCM project is rarely the software itself. It is getting it stood up correctly and keeping it healthy as your business changes. As your reseller, BEG owns that work. The team configures the platform around how you actually run payroll, time, and benefits, and migrates your data so go-live is clean.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After launch, support comes from people who know your account. When a tax rule changes, you add a location, or you simply have a question, you reach a partner with context rather than a queue without it. That is the practical advantage of buying through an authorized reseller instead of going it alone.
          </p>
        </div>
      </section>

      {/* AI / platform */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Full Platform, Including AI</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            Buying through BEG gives you the complete iSolved platform: payroll, HR, time, and benefits on a single connected system. That includes the Connector for Claude, generally available in June 2026, which is the only AI of its kind in HCM and completes real HR tasks through conversation.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            More than 7 million employees are managed on iSolved, and Forrester documented a 330% ROI. As your partner, BEG helps you turn that platform and its capabilities into real results, not just a subscription you have to figure out alone.
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
            Buy iSolved From a Partner Who Stands Behind It
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will explain what buying through BEG includes, run a custom cost comparison, and show you what iSolved plus BEG looks like for your business.
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
