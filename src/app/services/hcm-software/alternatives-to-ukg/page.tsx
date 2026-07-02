import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'UKG Alternative | Instant Price Quote + Claude AI | BEG',
  description: 'Find UKG too complex and enterprise-priced for the mid-market? See the top UKG alternatives for 50-500 employees, including isolved, managed by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/alternatives-to-ukg' },
  openGraph: {
    title: 'UKG Alternative | Instant Price Quote + Claude AI | BEG',
    description: 'Find UKG too complex and enterprise-priced for the mid-market? See the top UKG alternatives for 50-500 employees, including isolved, managed by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/alternatives-to-ukg',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'UKG Alternative | Instant Price Quote + Claude AI | BEG', description: 'Find UKG too complex and enterprise-priced for the mid-market? See the top UKG alternatives for 50-500 employees, including isolved, managed by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },

};


const faqs = [
  {
    q: 'How hard is it to switch from UKG to isolved?',
    a: 'BEG manages the full transition: data migration, configuration, training, and go-live. Moving to a mid-market platform is typically lighter than an enterprise rollout, and most clients complete the switch in 60 to 90 days with no payroll interruption.',
  },
  {
    q: 'Will I lose my UKG data?',
    a: 'No. BEG migrates your employee records, payroll history, and benefits information as part of implementation. Your data is preserved.',
  },
  {
    q: 'Is isolved a fit if UKG felt too complex?',
    a: 'Yes. UKG is built for large enterprises with deep workforce management needs. The isolved platform is purpose-built for companies with 50 to 500 employees, so you get the capability you need without the enterprise complexity.',
  },
  {
    q: 'What if my current UKG contract is not up yet?',
    a: 'BEG can start implementation now so you are ready to go live the moment your UKG contract expires. We help you plan the timeline around your renewal date.',
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
    { '@type': 'ListItem', position: 3, name: 'Alternatives to UKG', item: 'https://www.beghr.com/services/hcm-software/alternatives-to-ukg' },
  ],
};

export default function AlternativesToUKGPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · UKG Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Best UKG Alternatives for the Mid-Market
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            UKG is a strong enterprise workforce management platform with powerful scheduling and time tools. For companies with 50 to 500 employees, it is often complex and enterprise-priced. Here is the honest comparison.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Why people look past UKG */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Mid-Market Companies Look Past UKG</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            UKG is genuinely capable, especially for complex workforce management in large organizations with shift-based labor. The product is not the issue. For a mid-market company, the depth and the enterprise orientation can become more than the team needs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Powerful but complex', desc: 'UKG offers deep workforce management, but that depth can be heavy to configure and maintain for a lean team.' },
              { title: 'Enterprise pricing', desc: 'Pricing reflects an enterprise platform, which can be a heavy investment for companies under 500 employees.' },
              { title: 'Built for large organizations', desc: 'UKG shines in big, shift-based enterprises. Mid-market companies often use only a fraction of its breadth.' },
              { title: 'No AI that completes real tasks', desc: 'UKG has AI features, but none complete actual HR tasks the way the isolved Connector for Claude does.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>isolved vs UKG: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>isolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>UKG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single connected platform', '✓ Yes', '✓ Yes'],
                  ['Workforce management depth', 'Strong for mid-market', '✓ Very deep'],
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Claude AI integration', '✓ Completes tasks via Claude', '✗ Not available'],
                  ['Ease of use for lean teams', '✓ Right-sized', 'Can be complex'],
                  ['Pricing', 'Mid-market PEPM', 'Enterprise pricing'],
                  ['Implementation support', '✓ BEG-dedicated contact', 'Enterprise implementation'],
                  ['Ongoing support', '✓ BEG manages year-round', 'General enterprise support'],
                  ['Mid-market fit (50-500)', '✓ Core market', 'Built for large enterprise'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, ukg], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#444' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: ukg.startsWith('✓') ? '#166534' : '#991b1b' }}>{ukg}</td>
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
            isolved is a single connected platform purpose-built for companies with 50 to 500 employees. Payroll, benefits, time, and talent live together, so you get the workforce capability you need without paying for and managing enterprise depth built for far larger organizations.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            BEG implements, configures, supports, and migrates for you. You get a right-sized implementation and a dedicated contact who knows your setup, rather than navigating an enterprise platform alone. When something changes, you call BEG, not a general queue.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And only isolved has the Connector for Claude, generally available in June 2026, the only HCM integration that completes real HR tasks through a conversation. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>UKG Switcher FAQ</h2>
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
            Ready to See isolved vs. UKG?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15 minute call. We will run a side-by-side comparison and show you what a right-sized switch looks like for your company, with no commitment required.
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
