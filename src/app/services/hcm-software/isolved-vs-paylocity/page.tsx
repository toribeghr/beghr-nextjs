import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'iSolved vs Paylocity | Claude AI. 330% ROI. No Contest. | BEG',
  description: 'Side-by-side comparison of iSolved and Paylocity. Pricing, features, implementation, and AI capabilities compared. See which platform fits your company.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/isolved-vs-paylocity' },
  openGraph: {
    title: 'iSolved vs Paylocity | Claude AI. 330% ROI. No Contest. | BEG',
    description: 'Side-by-side comparison of iSolved and Paylocity. Pricing, features, implementation, and AI capabilities compared. See which platform fits your company.',
    url: 'https://beghr.com/services/hcm-software/isolved-vs-paylocity',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved vs Paylocity | Claude AI. 330% ROI. No Contest. | BEG', description: 'Side-by-side comparison of iSolved and Paylocity. Pricing, features, implementation, and AI capabilities compared. See which platform fits your company.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function iSolvedVsPaylocityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            iSolved vs Paylocity: Which Platform Wins for Your Company?
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Both handle payroll and HR. But they serve different companies in very different ways. Here&apos;s the honest breakdown so you can make the right call.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Quick verdict */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>The Short Answer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: '#ECAC60', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Choose iSolved if you want:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>A true all-in-one platform (HR + payroll + benefits + talent + AI)</li>
                <li>The iSolved Connector for Claude — complete HR tasks through AI</li>
                <li>BEG-managed implementation and ongoing support</li>
                <li>Documented 330% ROI (Forrester, 2024)</li>
                <li>50 to 5,000 employees, any industry</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Paylocity may fit if you:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Already have deep Paylocity integrations in place</li>
                <li>Are a large enterprise above 5,000 employees</li>
                <li>Prioritize social collaboration features over HR core</li>
                <li>Have a dedicated internal HRIS team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Feature-by-Feature Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>iSolved</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Paylocity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Payroll Processing', '✓ All 50 states', '✓ All 50 states'],
                  ['Benefits Administration', '✓ Built-in', '✓ Built-in'],
                  ['Time & Attendance', '✓ Native module', '✓ Native module'],
                  ['Talent Management', '✓ Included', '✓ Included'],
                  ['AI Workforce Tools', '✓ iSolved Brainware AI', 'Limited'],
                  ['Claude AI Integration', '✓ iSolved Connector for Claude (GA)', '✗ Not available'],
                  ['Implementation Support', '✓ BEG-managed', 'Self-serve or paid add-on'],
                  ['Mid-market focus (50-5K employees)', '✓ Core market', 'Larger enterprise lean'],
                  ['Pricing model', 'PEPM, transparent', 'Per module, can expand'],
                  ['Mobile employee self-service', '✓ Full mobile app', '✓ Full mobile app'],
                  ['Multi-state compliance', '✓ Auto-updated', '✓ Auto-updated'],
                  ['Forrester ROI study', '330% ROI documented', 'Not published'],
                ].map(([feature, isolved, paylocity], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
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

      {/* The Claude differentiator */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Differentiator No Competitor Has</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            In June 2026, iSolved launched the iSolved Connector for Claude — the first HCM platform to be fully integrated with Anthropic&apos;s Claude AI. While competitors offer chatbots that answer questions, iSolved&apos;s Connector actually completes tasks.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Run payroll, pull reports, update employee records, and manage HR workflows — all through a natural conversation with Claude. Paylocity has no equivalent. This is not a roadmap item. It is live and available today through BEG.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Common Questions</h2>
          {[
            {
              q: 'Can I switch from Paylocity to iSolved without migrating data?',
              a: 'Yes. BEG manages the data migration as part of implementation. Your historical payroll records, employee files, and benefits data transfer cleanly. Most clients are live in 60-90 days.',
            },
            {
              q: 'Is iSolved cheaper than Paylocity?',
              a: 'iSolved is competitively priced per employee per month, with no hidden per-module fees. The exact comparison depends on your headcount and modules. BEG will run a side-by-side cost analysis at no charge.',
            },
            {
              q: 'What industries is iSolved best for?',
              a: 'iSolved serves all industries: legal, healthcare, finance, technology, engineering, skilled trades, and more. Industry-specific configurations are available and BEG implements them as part of your setup.',
            },
            {
              q: 'Who supports us after implementation?',
              a: 'BEG provides ongoing support, training, and system optimization. You are never handed off to a call center. Your BEG contact manages your iSolved relationship ongoing.',
            },
          ].map(({ q, a }, i) => (
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
            Ready to See iSolved in Action?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Book a 15-minute call. We&apos;ll show you the platform, walk through your current setup, and give you a no-obligation cost comparison.
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
            excerpt: 'Federal and state payroll tax changes in 2026, FLSA threshold updates, and what your HCM platform should be handling automatically — not manually.',
            href: '/blog/hcm-technology/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
