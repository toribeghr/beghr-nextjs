import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best Workday Alternative | isolved + Claude AI | BEG',
  description: 'Workday too expensive and slow to implement for the mid-market? See the top Workday alternatives for 50-500 employees, including isolved, managed by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/alternatives-to-workday' },
  openGraph: {
    title: 'Best Workday Alternative | isolved + Claude AI | BEG',
    description: 'Workday too expensive and slow to implement for the mid-market? See the top Workday alternatives for 50-500 employees, including isolved, managed by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/alternatives-to-workday',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best Workday Alternative | isolved + Claude AI | BEG', description: 'Workday too expensive and slow to implement for the mid-market? See the top Workday alternatives for 50-500 employees, including isolved, managed by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How hard is it to switch from Workday to isolved?',
    a: 'BEG manages the full transition: data migration, configuration, training, and go-live. Moving to a mid-market platform is typically faster and lighter than an enterprise implementation, and most clients complete the switch in 60 to 90 days with no payroll interruption.',
  },
  {
    q: 'Will I lose my Workday data?',
    a: 'No. BEG migrates your employee records, payroll history, and benefits information as part of implementation. Your data is preserved.',
  },
  {
    q: 'Is isolved a fit if Workday felt like overkill?',
    a: 'Yes. Workday is built for large enterprises. The isolved platform is purpose-built for companies with 50 to 500 employees, so you get the capability you need without paying for and managing enterprise complexity you do not.',
  },
  {
    q: 'How long does implementation take compared to Workday?',
    a: 'Enterprise Workday rollouts can run for many months. A mid-market isolved implementation managed by BEG is typically far shorter, often 60 to 90 days, because the scope fits your size.',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Alternatives to Workday', item: 'https://www.beghr.com/services/hcm-software/alternatives-to-workday' },
  ],
};

export default function AlternativesToWorkdayPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Workday Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Best Workday Alternatives for the Mid-Market
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Workday is the enterprise leader and a genuinely powerful system. For companies with 50 to 500 employees, it is often very expensive, slow to implement, and more than you need. Here is the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See isolved vs. Workday for Free
          </Link>
        </div>
      </section>

      {/* Why people look past Workday */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Mid-Market Companies Look Past Workday</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Workday is excellent at what it was built for: large, complex enterprises with deep configuration needs and the teams to manage them. The challenge is not the product. It is the fit. For a mid-market company, the strengths can become liabilities.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Enterprise pricing', desc: 'Workday is priced for large enterprises, which makes it a heavy investment for companies under 500 employees.' },
              { title: 'Slow, complex implementation', desc: 'Rollouts can stretch across many months and require significant internal resources and consultants.' },
              { title: 'Overkill for the mid-market', desc: 'The breadth of configuration is powerful for enterprises but more than most mid-market teams need or can maintain.' },
              { title: 'No AI that completes real tasks', desc: 'Workday has AI features, but none complete actual HR tasks the way the isolved Connector for Claude does.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>isolved vs Workday: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>isolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Workday</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single connected platform', '✓ Yes', '✓ Yes'],
                  ['Enterprise depth', 'Mid-market depth, well matched', '✓ Very deep'],
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Claude AI integration', '✓ Completes tasks via Claude', '✗ Not available'],
                  ['Implementation time', 'Typically 60-90 days', 'Often many months'],
                  ['Pricing', 'Mid-market PEPM', 'Enterprise pricing'],
                  ['Implementation support', '✓ BEG-dedicated contact', 'Enterprise consultants'],
                  ['Ongoing support', '✓ BEG manages year-round', 'General enterprise support'],
                  ['Mid-market fit (50-500)', '✓ Core market', 'Built for large enterprise'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, workday], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#444' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: workday.startsWith('✓') ? '#166534' : '#991b1b' }}>{workday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why isolved + BEG */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Why isolved + BEG Is the Right Move</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is a single connected platform purpose-built for companies with 50 to 500 employees. Payroll, benefits, time, and talent live together, so you get real capability without the cost and complexity of an enterprise suite designed for organizations many times your size.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            BEG implements, configures, supports, and migrates for you. Instead of a multi-month enterprise rollout, you get a right-sized implementation and a dedicated contact who knows your setup. When something changes, you call BEG, not a general queue.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And only isolved has the Connector for Claude, generally available in June 2026, the only HCM integration that completes real HR tasks through a conversation. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Workday Switcher FAQ</h2>
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
            Ready to See isolved vs. Workday?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15 minute call. We will run a side-by-side comparison and show you what a right-sized switch looks like for your company, with no commitment required.
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
