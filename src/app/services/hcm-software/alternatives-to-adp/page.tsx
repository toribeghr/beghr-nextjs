import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best ADP Alternative | iSolved Has Claude AI. ADP Doesn\'t. | BEG',
  description: 'Tired of ADP price hikes and poor support? See the top ADP alternatives for companies with 50-500 employees, including iSolved, managed by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/alternatives-to-adp' },
  openGraph: {
    title: 'Best ADP Alternative | iSolved Has Claude AI. ADP Doesn\'t. | BEG',
    description: 'Tired of ADP price hikes and poor support? See the top ADP alternatives for companies with 50-500 employees, including iSolved, managed by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/alternatives-to-adp',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best ADP Alternative | iSolved Has Claude AI. ADP Doesn\'t. | BEG', description: 'Tired of ADP price hikes and poor support? See the top ADP alternatives for companies with 50-500 employees, including iSolved, managed by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function AlternativesToADPPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · ADP Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Best ADP Alternatives for Mid-Market Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            ADP works. But for companies with 50 to 500 employees, there are better-fit options that cost less, support better, and do more. Here&apos;s the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See iSolved vs. ADP for Free
          </Link>
        </div>
      </section>

      {/* Why people leave ADP */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Mid-Market Companies Leave ADP</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            ADP is the largest payroll company in the world. That&apos;s also its problem. For companies with under 500 employees, you are a small fish in a very large pond. The complaints we hear most often:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Annual price hikes with no notice', desc: 'ADP regularly increases fees. Mid-market clients rarely have leverage to push back.' },
              { title: 'Support that disappears after onboarding', desc: 'Your implementation rep moves on. Getting someone on the phone becomes a 2-hour task.' },
              { title: 'Modules that do not talk to each other', desc: 'ADP acquired many tools over the years. Integration between them is inconsistent.' },
              { title: 'No AI that actually does anything', desc: 'ADP has announced AI features, but none complete actual HR tasks the way iSolved\'s Claude Connector does.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>iSolved vs ADP: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>iSolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>ADP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Benefits administration', '✓ Built-in, no add-on fee', 'Add-on module, extra cost'],
                  ['Time & attendance', '✓ Native, included', 'Add-on or separate product'],
                  ['Claude AI integration', '✓ Complete tasks via Claude', '✗ Not available'],
                  ['Implementation support', '✓ BEG-dedicated contact', 'Varies, often minimal post-launch'],
                  ['Ongoing support', '✓ BEG manages year-round', 'General support queue'],
                  ['Pricing', 'Transparent PEPM', 'Per module, often increases annually'],
                  ['Mid-market fit (50-500)', '✓ Core market', 'Core market is enterprise'],
                  ['Industry-specific config', '✓ Legal, healthcare, trades, more', 'General templates'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, adp], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#991b1b' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: adp.startsWith('✓') ? '#166534' : '#991b1b' }}>{adp}</td>
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
            iSolved is purpose-built for companies your size. It&apos;s not a scaled-down enterprise tool. It&apos;s a full-featured HCM platform, payroll, benefits, time, talent, and AI, designed for 50 to 5,000 employees.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            BEG is an authorized iSolved reseller. We implement, train, and support your platform ongoing. When something changes, you call BEG, not a call center queue.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And only iSolved has the Claude AI Connector, the only HCM integration that lets your team complete HR tasks through a natural conversation. No equivalent exists at ADP, Paycom, or Paylocity.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>ADP Switcher FAQ</h2>
          {[
            {
              q: 'How hard is it to switch from ADP to iSolved?',
              a: 'Less painful than you think. BEG manages the full transition: data migration, configuration, training, and go-live. Most clients complete the switch in 60-90 days with zero payroll interruption.',
            },
            {
              q: 'Will I lose my ADP payroll history?',
              a: 'No. BEG migrates your historical payroll data, employee records, and benefits information as part of implementation. Your records are preserved.',
            },
            {
              q: 'How does iSolved pricing compare to what I pay ADP now?',
              a: 'iSolved is typically comparable or lower, especially once you factor in the modules ADP charges separately (benefits, time, talent). BEG runs a free cost comparison so you can see the actual numbers before deciding.',
            },
            {
              q: 'What if my current ADP contract is not up yet?',
              a: 'We can start implementation now so you are ready to go live the moment your ADP contract expires. BEG will help you plan the timeline around your renewal date.',
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
            Ready to See What iSolved Costs vs. ADP?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We&apos;ll run a side-by-side cost comparison and show you what the switch looks like for your company, no commitment required.
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
