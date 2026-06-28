import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'iSolved vs Paycom | Claude AI Integration. 330% ROI. | BEG',
  description: 'iSolved vs Paycom compared across pricing, features, AI capabilities, and implementation. Find out which HCM platform is the better fit for your company.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/isolved-vs-paycom' },
  openGraph: {
    title: 'iSolved vs Paycom | Claude AI Integration. 330% ROI. | BEG',
    description: 'iSolved vs Paycom compared across pricing, features, AI capabilities, and implementation. Find out which HCM platform is the better fit for your company.',
    url: 'https://beghr.com/services/hcm-software/isolved-vs-paycom',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved vs Paycom | Claude AI Integration. 330% ROI. | BEG', description: 'iSolved vs Paycom compared across pricing, features, AI capabilities, and implementation. Find out which HCM platform is the better fit for your company.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function iSolvedVsPaycomPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Comparison</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            iSolved vs Paycom: The Honest Comparison
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Paycom built its reputation on a single-database model. iSolved built its reputation on mid-market service and a true all-in-one platform. Here&apos;s how they compare today.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Quick verdict */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Bottom Line Up Front</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: '#ECAC60', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>iSolved wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Claude AI integration — complete tasks, not just Q&A</li>
                <li>BEG-managed implementation and support</li>
                <li>Mid-market pricing without enterprise markups</li>
                <li>Industry-specific configurations (legal, healthcare, trades)</li>
                <li>Forrester-documented 330% ROI</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Paycom wins on:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Name recognition in large enterprise</li>
                <li>Direct data input model (employees enter their own data)</li>
                <li>Established customer base for large companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Side-by-Side Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>iSolved</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Paycom</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Payroll Processing', '✓ All 50 states', '✓ All 50 states'],
                  ['Benefits Administration', '✓ Built-in', '✓ Built-in'],
                  ['Time & Attendance', '✓ Native module', '✓ Native module'],
                  ['Talent & Recruiting', '✓ Included', '✓ Included'],
                  ['AI Workforce Tools', '✓ iSolved Brainware AI', 'Beta — limited availability'],
                  ['Claude AI Integration', '✓ iSolved Connector for Claude (GA)', '✗ Not available'],
                  ['Mid-market focus', '✓ 50-5,000 employees', 'Skews enterprise / large mid'],
                  ['Implementation', '✓ BEG-managed, dedicated support', 'Paycom direct (no reseller)'],
                  ['Pricing transparency', '✓ PEPM, clear scope', 'Per module, can escalate'],
                  ['Industry-specific setup', '✓ Legal, healthcare, trades, more', 'General configuration'],
                  ['Mobile self-service', '✓ Full app', '✓ Full app'],
                  ['Forrester ROI documentation', '330% ROI (2024)', 'Not published'],
                ].map(([feature, isolved, paycom], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#991b1b' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: paycom.startsWith('✓') ? '#166534' : '#991b1b' }}>{paycom}</td>
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>What Paycom Cannot Offer</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            iSolved is the only HCM platform with a generally available integration with Claude by Anthropic. The iSolved Connector for Claude lets your team complete actual HR tasks through a conversation — not just get answers, but take action.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Run payroll, pull headcount reports, update employee data, and manage workflows — all through Claude. Paycom has announced no equivalent. This capability is available right now through BEG.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {[
            {
              q: 'Can I switch from Paycom to iSolved without losing data?',
              a: 'Yes. BEG manages the full data migration from Paycom to iSolved, including payroll history, employee records, and benefits data. Most clients are live on iSolved within 60-90 days.',
            },
            {
              q: 'Is iSolved less expensive than Paycom?',
              a: 'iSolved is typically more competitive for mid-market companies. Paycom pricing can escalate quickly as you add modules. BEG provides a free side-by-side cost comparison before you commit to anything.',
            },
            {
              q: 'Does iSolved work for my industry?',
              a: 'Yes. BEG configures iSolved for legal firms, healthcare organizations, technology companies, finance and accounting, engineering, skilled trades, and manufacturing. Industry-specific setup is included.',
            },
            {
              q: 'What happens if I have questions after implementation?',
              a: 'BEG is your dedicated iSolved support contact. You are not sent to a general support queue. Your BEG team manages ongoing optimization, compliance updates, and system changes year-round.',
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
            See iSolved vs. Your Current Platform
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We&apos;ll walk through your setup, run a cost comparison, and show you what iSolved + BEG looks like for your company.
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
            excerpt: 'Federal and state payroll tax changes in 2026, FLSA threshold updates, and what your HCM platform should be handling automatically — not manually.',
            href: '/blog/hcm-technology/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
