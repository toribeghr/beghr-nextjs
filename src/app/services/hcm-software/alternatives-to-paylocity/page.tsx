import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Paylocity Alternative | Instant Price Quote + AI | BEG',
  description: 'Looking for a Paylocity alternative? Compare isolved, managed by BEG, for companies with 50 to 500 employees. Smooth implementation, Claude AI, and 330% ROI.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/alternatives-to-paylocity' },
  openGraph: {
    title: 'Paylocity Alternative | Instant Price Quote + AI | BEG',
    description: 'Looking for a Paylocity alternative? Compare isolved, managed by BEG, for companies with 50 to 500 employees. Smooth implementation, Claude AI, and 330% ROI.',
    url: 'https://www.beghr.com/services/hcm-software/alternatives-to-paylocity',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Paylocity Alternative | Instant Price Quote + AI | BEG', description: 'Looking for a Paylocity alternative? Compare isolved, managed by BEG, for companies with 50 to 500 employees. Smooth implementation, Claude AI, and 330% ROI.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How hard is it to switch from Paylocity to isolved?',
    a: 'BEG manages the full transition, including data migration, configuration, training, and go-live. Most clients complete the switch in 60 to 90 days with no interruption to payroll.',
  },
  {
    q: 'Will I lose my Paylocity payroll history?',
    a: 'No. BEG migrates your historical payroll data, employee records, and benefits information as part of implementation. Your records are preserved on the new platform.',
  },
  {
    q: 'We had a rough implementation with Paylocity. How is isolved with BEG different?',
    a: 'BEG owns your implementation end to end with a dedicated contact, and then supports the platform year-round. You are not handed off to a general queue after go-live.',
  },
  {
    q: 'Does isolved have an AI task connector that Paylocity does not?',
    a: 'Yes. The isolved platform is the only HCM platform with a Connector for Claude, generally available in June 2026, that completes real HR tasks through a conversation. Paylocity has no equivalent.',
  },
];

export default function AlternativesToPaylocityPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
      { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
      { '@type': 'ListItem', position: 3, name: 'Alternatives to Paylocity', item: 'https://www.beghr.com/services/hcm-software/alternatives-to-paylocity' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Paylocity Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Alternatives to Paylocity for Mid-Market Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Paylocity is a capable mid-market HCM with strong engagement features. For companies that want a smoother implementation, dependable support, and an AI task connector, there are better fit options. Here is the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See isolved vs. Paylocity for Free
          </Link>
        </div>
      </section>

      {/* Why people look for alternatives */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Companies Look for a Paylocity Alternative</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Paylocity competes well in the mid-market and is known for its engagement and communication features. The reasons companies start shopping for an alternative are usually about the experience around the product, not the feature list. The themes we hear most often:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Implementation friction', desc: 'Some teams report a bumpy implementation. Companies want a partner who owns the rollout end to end.' },
              { title: 'Support friction after launch', desc: 'Getting consistent answers after go-live can be a challenge. Teams want a dedicated, accountable contact.' },
              { title: 'No AI task connector', desc: 'Paylocity has no equivalent to the isolved Connector for Claude, which completes real HR tasks through a conversation.' },
              { title: 'Wanting one accountable partner', desc: 'Mid-market teams often prefer a single partner who configures, supports, and optimizes the platform year-round.' },
            ].map(({ title, desc }, i) => (
              <div key={i} style={{ background: '#f9f9f9', padding: '1.25rem', borderRadius: '8px', borderLeft: '4px solid #ECAC60' }}>
                <strong style={{ display: 'block', marginBottom: '0.35rem' }}>{title}</strong>
                <p style={{ margin: 0, color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>isolved vs Paylocity: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>isolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Paylocity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Single connected platform', '✓ Payroll, HR, time, benefits', '✓ Mid-market HCM suite'],
                  ['Engagement features', '✓ Included', '✓ A known strength'],
                  ['Time and attendance', '✓ Native, included', '✓ Native module'],
                  ['Connector for Claude', '✓ Completes real HR tasks (GA June 2026)', '✗ Not available'],
                  ['Implementation', '✓ BEG owns it end to end', 'Reports of friction'],
                  ['Ongoing support', '✓ BEG dedicated contact', 'Reports of friction'],
                  ['Industry-specific config', '✓ Legal, healthcare, trades, more', 'General configuration'],
                  ['Mid-market fit (50 to 500)', '✓ Core market', '✓ Core market'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, paylocity], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#991b1b' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: paylocity.startsWith('✓') ? '#166534' : '#991b1b' }}>{paylocity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The broader market */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The Broader Market</h2>
          <p style={{ color: '#444', lineHeight: '1.7' }}>
            Paylocity is one of several mid-market options. ADP and Paychex are the large established providers, Gusto is a small business favorite that stays software only, and Rippling is a modern but IT centric all-in-one. Each fits a different profile. For a 50 to 500 employee company that wants one connected platform plus a partner who owns implementation and support, isolved with BEG is the option we recommend.
          </p>
        </div>
      </section>

      {/* Why isolved + BEG */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Why isolved + BEG Is the Recommended Alternative</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is a single connected platform that brings payroll, HR, time, and benefits together. It is built for the mid-market, the same companies Paylocity targets, with a different experience around the product.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            That experience is the partnership. BEG implements, configures, and supports your platform with a dedicated contact, and manages the migration from Paylocity. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            isolved is also the only HCM platform with a Connector for Claude, generally available in June 2026, that completes real HR tasks through a conversation. No equivalent exists at Paylocity.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Paylocity Switcher FAQ</h2>
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
            Ready to Compare isolved vs. Paylocity?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15 minute call. We will run a side-by-side comparison and show you what the switch looks like for your company, with no commitment required.
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
