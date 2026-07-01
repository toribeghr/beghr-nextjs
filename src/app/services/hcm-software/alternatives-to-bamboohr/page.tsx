import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'BambooHR Alternative | Instant Price Quote + AI | BEG',
  description: 'Outgrowing BambooHR payroll add-ons and per-employee costs? See the top BambooHR alternatives for 50-500 employees, including isolved, managed by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/alternatives-to-bamboohr' },
  openGraph: {
    title: 'BambooHR Alternative | Instant Price Quote + AI | BEG',
    description: 'Outgrowing BambooHR payroll add-ons and per-employee costs? See the top BambooHR alternatives for 50-500 employees, including isolved, managed by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/alternatives-to-bamboohr',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'BambooHR Alternative | Instant Price Quote + AI | BEG', description: 'Outgrowing BambooHR payroll add-ons and per-employee costs? See the top BambooHR alternatives for 50-500 employees, including isolved, managed by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How hard is it to switch from BambooHR to isolved?',
    a: 'Less painful than you think. BEG manages the full transition: data migration, configuration, training, and go-live. Most clients complete the switch in 60 to 90 days with zero payroll interruption.',
  },
  {
    q: 'Will I lose my BambooHR employee records?',
    a: 'No. BEG migrates your employee records, payroll history, and benefits information as part of implementation. Your data is preserved.',
  },
  {
    q: 'Is isolved payroll deeper than the BambooHR payroll add-on?',
    a: 'isolved is built as a single connected platform where payroll, HR, time, and benefits work together natively. For multi-state payroll and more complex needs, that depth tends to fit better than a payroll add-on layered onto an HR product.',
  },
  {
    q: 'What if my current BambooHR contract is not up yet?',
    a: 'BEG can start implementation now so you are ready to go live the moment your BambooHR contract expires. We help you plan the timeline around your renewal date.',
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
    { '@type': 'ListItem', position: 3, name: 'Alternatives to BambooHR', item: 'https://www.beghr.com/services/hcm-software/alternatives-to-bamboohr' },
  ],
};

export default function AlternativesToBambooHRPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · BambooHR Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Best BambooHR Alternatives for Growing Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            BambooHR is loved for its people-first design and great user experience. But payroll is an add-on rather than a core strength, and as headcount climbs the per-employee cost adds up. Here is the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See isolved vs. BambooHR for Free
          </Link>
        </div>
      </section>

      {/* Why people leave BambooHR */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Growing Companies Outgrow BambooHR</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            BambooHR earned its reputation honestly. The interface is clean, the experience is friendly, and for core HR it is a pleasure to use. The reasons companies start looking elsewhere are usually about depth and cost as they grow, not about the basics.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Payroll is an add-on, not a core strength', desc: 'BambooHR began as an HR product. Payroll is layered on and tends to be less deep than a platform built around it.' },
              { title: 'Costs escalate per employee', desc: 'As headcount grows, the per-employee model can climb faster than companies expect.' },
              { title: 'Complex needs strain a lightweight tool', desc: 'Multi-state payroll, deeper benefits, and richer time tracking can outpace a people-first design.' },
              { title: 'No AI that completes real tasks', desc: 'BambooHR has helpful features, but none complete actual HR tasks the way the isolved Connector for Claude does.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>isolved vs BambooHR: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>isolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>BambooHR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['User experience', '✓ Modern and clean', '✓ Excellent, people-first'],
                  ['Core HR records', '✓ Yes', '✓ Strong'],
                  ['Native payroll (all 50 states)', '✓ Built into the platform', 'Add-on, less deep'],
                  ['Time & attendance', '✓ Native, included', 'Add-on or integration'],
                  ['Claude AI integration', '✓ Completes tasks via Claude', '✗ Not available'],
                  ['Implementation support', '✓ BEG-dedicated contact', 'Software-led setup'],
                  ['Ongoing support', '✓ BEG manages year-round', 'General support model'],
                  ['Cost as you scale', 'Mid-market PEPM', 'Per-employee, can escalate'],
                  ['Industry-specific config', '✓ Legal, healthcare, trades, more', 'General templates'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, bamboo], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#444' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: bamboo.startsWith('✓') ? '#166534' : '#991b1b' }}>{bamboo}</td>
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
            isolved is a single connected platform where payroll is a core capability, not a bolt-on. Payroll, benefits, time, and talent live together, so your data stays consistent as you scale into multi-state and more complex needs. It is built for the mid-market.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            BEG implements, configures, supports, and migrates for you. You are not left to run the platform alone. When something changes, you call BEG, not a general queue. You keep the clean experience you liked about BambooHR while gaining real payroll depth.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And only isolved has the Connector for Claude, generally available in June 2026, the only HCM integration that completes real HR tasks through a conversation. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>BambooHR Switcher FAQ</h2>
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
            Ready to See isolved vs. BambooHR?
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
