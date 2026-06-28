import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best Rippling Alternative | iSolved + Claude AI | BEG',
  description: 'Looking for a Rippling alternative? Compare iSolved, managed by BEG, for companies with 50 to 500 employees. Simpler HR-first platform, Claude AI, and 330% ROI.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/alternatives-to-rippling' },
  openGraph: {
    title: 'Best Rippling Alternative | iSolved + Claude AI | BEG',
    description: 'Looking for a Rippling alternative? Compare iSolved, managed by BEG, for companies with 50 to 500 employees. Simpler HR-first platform, Claude AI, and 330% ROI.',
    url: 'https://beghr.com/services/hcm-software/alternatives-to-rippling',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best Rippling Alternative | iSolved + Claude AI | BEG', description: 'Looking for a Rippling alternative? Compare iSolved, managed by BEG, for companies with 50 to 500 employees. Simpler HR-first platform, Claude AI, and 330% ROI.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How hard is it to switch from Rippling to iSolved?',
    a: 'BEG manages the full transition, including data migration, configuration, training, and go-live. Most clients complete the switch in 60 to 90 days with no interruption to payroll.',
  },
  {
    q: 'Will I lose my Rippling payroll history?',
    a: 'No. BEG migrates your historical payroll data, employee records, and benefits information as part of implementation. Your records are preserved on the new platform.',
  },
  {
    q: 'Rippling is very IT centric. Is iSolved simpler for an HR team?',
    a: 'iSolved is an HR-first platform that brings payroll, HR, time, and benefits into one connected system. BEG configures it and supports it for you, so your HR team does not have to manage it like an IT product.',
  },
  {
    q: 'Rippling bundles pricing. How does iSolved compare?',
    a: 'BEG sets a clear scope with you up front rather than an opaque bundle. We provide a side-by-side comparison so you can see what you are paying for before deciding.',
  },
];

export default function AlternativesToRipplingPage() {
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
      { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
      { '@type': 'ListItem', position: 3, name: 'Alternatives to Rippling', item: 'https://beghr.com/services/hcm-software/alternatives-to-rippling' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Rippling Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Alternatives to Rippling for Mid-Market Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Rippling is a powerful, modern all-in-one for HR, IT, and payroll. For companies that want an HR-first platform with a partner who runs it, rather than an IT centric tool to administer, there are better fit options. Here is the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See iSolved vs. Rippling for Free
          </Link>
        </div>
      </section>

      {/* Why people look for alternatives */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Companies Look for a Rippling Alternative</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Rippling is genuinely capable. It unifies HR, IT, and payroll and offers deep automation. The reasons mid-market companies look for an alternative are usually about complexity and fit, not capability. The themes we hear most often:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Powerful but complex', desc: 'The breadth that makes Rippling strong can make it heavy to configure and maintain for a lean HR team.' },
              { title: 'IT centric by design', desc: 'Rippling leans toward IT and device management. HR-first teams often want a platform centered on their work.' },
              { title: 'Software only, self-managed', desc: 'You administer Rippling yourself. Many mid-market companies prefer a partner who configures and supports the platform.' },
              { title: 'Opaque bundled pricing', desc: 'Bundled modules can make it hard to see what you are paying for. Teams want a clear, defined scope.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>iSolved vs Rippling: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>iSolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Rippling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Single connected platform', '✓ Payroll, HR, time, benefits', '✓ Broad HR, IT, and payroll'],
                  ['HR-first focus', '✓ Centered on HR work', 'IT centric by design'],
                  ['Managed service', '✓ BEG implements and supports', '✗ Software only, self-managed'],
                  ['Ease of administration', '✓ BEG runs it for you', 'Powerful but complex'],
                  ['Connector for Claude', '✓ Completes real HR tasks (GA June 2026)', '✗ Not available'],
                  ['Implementation support', '✓ BEG dedicated contact', 'Self-serve or paid services'],
                  ['Pricing transparency', '✓ Clear scope set with BEG', 'Opaque bundled pricing'],
                  ['Mid-market fit (50 to 500)', '✓ Core market', 'Strong, but config heavy'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, rippling], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#991b1b' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: rippling.startsWith('✓') ? '#166534' : '#991b1b' }}>{rippling}</td>
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
            Rippling is one of several modern options. ADP and Paychex are the large established providers, Gusto is a small business favorite that stays software only, and Paylocity competes in the mid-market with strong engagement features. Each fits a different profile. For a 50 to 500 employee company that wants an HR-first connected platform plus a partner who configures and supports it, iSolved with BEG is the option we recommend.
          </p>
        </div>
      </section>

      {/* Why iSolved + BEG */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Why iSolved + BEG Is the Recommended Alternative</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            iSolved is a single connected platform that brings payroll, HR, time, and benefits together with an HR-first focus. It is built for the mid-market, so you get breadth without the weight of an IT centric system.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            The difference from a self-managed tool is the partnership. BEG implements, configures, and supports your platform, and manages the migration from Rippling. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            iSolved is also the only HCM platform with a Connector for Claude, generally available in June 2026, that completes real HR tasks through a conversation. No equivalent exists at Rippling.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Rippling Switcher FAQ</h2>
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
            Ready to Compare iSolved vs. Rippling?
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
