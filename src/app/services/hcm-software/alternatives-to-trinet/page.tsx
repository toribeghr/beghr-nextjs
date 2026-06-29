import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best TriNet Alternative | isolved + Claude AI | BEG',
  description: 'Want more control than a PEO like TriNet gives? See the top TriNet alternatives for 50-500 employees, including isolved, a connected platform managed by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/alternatives-to-trinet' },
  openGraph: {
    title: 'Best TriNet Alternative | isolved + Claude AI | BEG',
    description: 'Want more control than a PEO like TriNet gives? See the top TriNet alternatives for 50-500 employees, including isolved, a connected platform managed by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/alternatives-to-trinet',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best TriNet Alternative | isolved + Claude AI | BEG', description: 'Want more control than a PEO like TriNet gives? See the top TriNet alternatives for 50-500 employees, including isolved, a connected platform managed by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is the difference between TriNet and isolved?',
    a: 'TriNet is a PEO, which means it co-employs your staff and bundles HR and benefits under its umbrella. The isolved platform is a connected HCM system you own and run, with BEG implementing, configuring, and supporting it for you. You keep more control and direct ownership of your HR.',
  },
  {
    q: 'Will I lose my employee and payroll data leaving a PEO?',
    a: 'No. BEG migrates your employee records, payroll history, and benefits information as part of implementation. We help you plan the transition out of co-employment carefully.',
  },
  {
    q: 'Is leaving a PEO complicated?',
    a: 'Leaving co-employment takes planning, which is exactly why BEG manages it. We coordinate the timeline, set up your own benefits and payroll in isolved, and support you through go-live so the move is structured rather than risky.',
  },
  {
    q: 'Why would I move from a PEO to a platform?',
    a: 'Many growing companies want more control over their benefits and HR decisions and lower per-employee cost than a PEO model carries. With isolved and BEG you own your platform and still have a partner running it for you.',
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
    { '@type': 'ListItem', position: 3, name: 'Alternatives to TriNet', item: 'https://www.beghr.com/services/hcm-software/alternatives-to-trinet' },
  ],
};

export default function AlternativesToTriNetPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · TriNet Alternative</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Best TriNet Alternatives for Mid-Market Companies
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            TriNet is a PEO that bundles benefits and HR through co-employment, which works well for some companies. As you grow, many businesses want more control and lower per-employee cost than that model carries. Here is the honest comparison.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            See isolved vs. TriNet for Free
          </Link>
        </div>
      </section>

      {/* Why people leave TriNet */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Mid-Market Companies Move Off a PEO</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            A PEO like TriNet can be a great starting point. It bundles benefits, payroll, and HR support under a co-employment arrangement, which simplifies things for younger or smaller companies. The reasons companies move on are usually about control and cost as they grow, not about the value a PEO provides early on.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'Co-employment means less control', desc: 'In a PEO model your provider co-employs your staff, so you have less direct control over benefits and HR decisions.' },
              { title: 'Higher per-employee cost', desc: 'PEO bundling tends to carry a higher per-employee cost than running your own connected platform.' },
              { title: 'Benefits tied to the PEO', desc: 'Your plans live inside the PEO. Choosing your own benefits requires moving off the model.' },
              { title: 'No AI that completes real tasks', desc: 'A PEO service model does not give you an HCM platform with AI that completes HR tasks the way the isolved Connector for Claude does.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>isolved vs TriNet: Head-to-Head</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Category</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ECAC60' }}>isolved via BEG</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>TriNet</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Model', 'Platform you own', 'PEO co-employment'],
                  ['Control over benefits', '✓ You choose', 'Bundled through the PEO'],
                  ['Payroll (all 50 states)', '✓ Yes', '✓ Yes'],
                  ['Connected HCM platform', '✓ Single platform', 'Service plus platform'],
                  ['Claude AI integration', '✓ Completes tasks via Claude', '✗ Not available'],
                  ['Per-employee cost', 'Mid-market PEPM', 'Higher PEO bundling'],
                  ['Implementation support', '✓ BEG-dedicated contact', 'PEO onboarding'],
                  ['Ongoing support', '✓ BEG manages year-round', 'PEO service team'],
                  ['Mid-market fit (50-500)', '✓ Core market', 'Strong for early-stage'],
                  ['Forrester ROI', '330% documented', 'Not published for mid-market'],
                ].map(([feature, isolved, trinet], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: isolved.startsWith('✓') ? '#166534' : '#444' }}>{isolved}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: trinet.startsWith('✓') ? '#166534' : '#991b1b' }}>{trinet}</td>
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
            isolved is a single connected platform that you own. Payroll, benefits, time, and talent live together, and you keep direct control over your benefits and HR decisions rather than handing them to a co-employer. It is purpose-built for the mid-market.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            The PEO concern is usually losing support if you leave. With BEG you do not. BEG implements, configures, supports, and migrates for you, so you gain control without losing the hands-on partner. When something changes, you call BEG, not a general queue.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And only isolved has the Connector for Claude, generally available in June 2026, the only HCM integration that completes real HR tasks through a conversation. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>TriNet Switcher FAQ</h2>
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
            Ready to See isolved vs. TriNet?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15 minute call. We will run a side-by-side comparison and show you what moving off a PEO looks like for your company, with no commitment required.
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
