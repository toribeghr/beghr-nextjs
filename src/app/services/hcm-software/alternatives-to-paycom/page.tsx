import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best Paycom Alternative | iSolved Has Claude AI | BEG',
  description: 'Looking for a Paycom alternative? See the top options for companies with 50-500 employees, including iSolved, a single connected platform managed by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/alternatives-to-paycom' },
  openGraph: {
    title: 'Best Paycom Alternative | iSolved Has Claude AI | BEG',
    description: 'Looking for a Paycom alternative? See the top options for companies with 50-500 employees, including iSolved, a single connected platform managed by BEG.',
    url: 'https://beghr.com/services/hcm-software/alternatives-to-paycom',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best Paycom Alternative | iSolved Has Claude AI | BEG', description: 'Looking for a Paycom alternative? See the top options for companies with 50-500 employees, including iSolved, a single connected platform managed by BEG.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How hard is it to switch from Paycom to iSolved?',
    a: 'Less painful than you think. BEG manages the full transition: data migration, configuration, training, and go-live. Most clients complete the switch in 60 to 90 days with zero payroll interruption.',
  },
  {
    q: 'Will I lose my Paycom payroll history?',
    a: 'No. BEG migrates your historical payroll data, employee records, and benefits information as part of implementation. Your records are preserved.',
  },
  {
    q: 'How does iSolved compare to Paycom on support?',
    a: 'With iSolved through BEG you get a dedicated contact who knows your setup year-round, rather than a general support queue. BEG implements, configures, and supports the platform for you.',
  },
  {
    q: 'What if my current Paycom contract is not up yet?',
    a: 'BEG can start implementation now so you are ready to go live the moment your Paycom contract expires. We help you plan the timeline around your renewal date.',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Alternatives to Paycom', item: 'https://beghr.com/services/hcm-software/alternatives-to-paycom' },
  ],
};

export default function AlternativesToPaycomPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Paycom Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Best Paycom Alternatives for Mid-Market Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Paycom is a capable single-database HCM with strong employee self-service. But for companies with 50 to 500 employees, the sales pressure and the complexity can outweigh the fit. Here is the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See iSolved vs. Paycom for Free
          </Link>
        </div>
      </section>

      {/* Why people leave Paycom */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Mid-Market Companies Look Past Paycom</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Paycom built a real product. Its single-database design keeps employee data in one place, and its self-service tools push work to employees rather than HR. Those are genuine strengths. The friction we hear about most often is not the software itself. It is the experience around it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'A reputation for aggressive sales', desc: 'Buyers often describe a high-pressure sales process and feel pushed toward a decision before they are ready.' },
              { title: 'Complexity that lands on HR', desc: 'The self-service model is powerful, but configuring and managing it well can demand more from a lean HR team than expected.' },
              { title: 'You administer it yourself', desc: 'Paycom is software. The day-to-day setup, optimization, and troubleshooting sit with your team.' },
              { title: 'No AI that completes real tasks', desc: 'Paycom has automation features, but none complete actual HR tasks the way the iSolved Connector for Claude does.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>iSolved vs Paycom: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>iSolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Paycom</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single connected platform', '✓ Yes', '✓ Yes, single database'],
                  ['Employee self-service', '✓ Built-in', '✓ Strong self-service'],
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Claude AI integration', '✓ Completes tasks via Claude', '✗ Not available'],
                  ['Implementation support', '✓ BEG-dedicated contact', 'Software-led setup'],
                  ['Ongoing support', '✓ BEG manages year-round', 'General support model'],
                  ['Sales experience', 'Consultative through BEG', 'Reputation for high pressure'],
                  ['Mid-market fit (50-500)', '✓ Core market', 'Serves mid-market and up'],
                  ['Industry-specific config', '✓ Legal, healthcare, trades, more', 'General templates'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, paycom], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#444' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: paycom.startsWith('✓') ? '#166534' : '#991b1b' }}>{paycom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why iSolved + BEG */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Why iSolved + BEG Is the Right Move</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            iSolved is a single connected platform built for companies your size. Payroll, benefits, time, and talent live together, so your data stays consistent and your team stops reconciling separate tools. It is designed for the mid-market, not scaled down from an enterprise suite.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            The difference with BEG is that you are not handed software and left to run it. BEG implements, configures, supports, and migrates for you. When something changes, you call BEG, not a call center queue. That is the gap many Paycom buyers feel once the sale is over.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And only iSolved has the Connector for Claude, generally available in June 2026, the only HCM integration that completes real HR tasks through a conversation. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Paycom Switcher FAQ</h2>
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
            Ready to See iSolved vs. Paycom?
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
