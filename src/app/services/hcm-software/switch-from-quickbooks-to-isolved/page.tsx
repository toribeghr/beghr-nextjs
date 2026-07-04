import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Switch QuickBooks to isolved | Instant Price Quote | BEG',
  description: 'Outgrown QuickBooks Payroll? Switching to isolved is painless when BEG manages the migration, configures the platform, and supports you year-round.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/switch-from-quickbooks-to-isolved' },
  openGraph: {
    title: 'Switch QuickBooks to isolved | Instant Price Quote | BEG',
    description: 'Outgrown QuickBooks Payroll? Switching to isolved is painless when BEG manages the migration, configures the platform, and supports you year-round.',
    url: 'https://www.beghr.com/services/hcm-software/switch-from-quickbooks-to-isolved',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Switch QuickBooks to isolved | Instant Price Quote | BEG', description: 'Outgrown QuickBooks Payroll? Switching to isolved is painless when BEG manages the migration, configures the platform, and supports you year-round.', images: ['https://www.beghr.com/assets/og-image.png'] },

};


const faqs = [
  {
    q: 'Is switching from QuickBooks Payroll to isolved really painless?',
    a: 'It is far smoother than going it alone. BEG manages the migration end to end. We move your data, configure the platform, train your team, and support go-live so payroll never misses a beat.',
  },
  {
    q: 'Will I lose my QuickBooks payroll history when I switch?',
    a: 'No. BEG migrates your historical payroll data, employee records, and benefits information into isolved. Your records are preserved.',
  },
  {
    q: 'How do I know if I have outgrown QuickBooks Payroll?',
    a: 'Common signs are multi-state payroll, growing headcount, more complex benefits, time and attendance needs, and HR work that QuickBooks Payroll was not built to handle. If payroll is starting to feel bolted onto your accounting, it may be time.',
  },
  {
    q: 'How long does the switch from QuickBooks to isolved take?',
    a: 'Most clients complete the move in 60 to 90 days with no interruption to payroll. BEG plans the timeline around your pay calendar and your renewal date.',
  },
  {
    q: 'Who supports the platform after we switch?',
    a: 'BEG does. You get a dedicated contact who supports, optimizes, and maintains your isolved platform year-round, not a general queue.',
  },
];

export default function SwitchFromQuickBooksToisolvedPage() {
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
      { '@type': 'ListItem', position: 3, name: 'Switch From QuickBooks to isolved', item: 'https://www.beghr.com/services/hcm-software/switch-from-quickbooks-to-isolved' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Switch From QuickBooks</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How to Switch From QuickBooks Payroll to isolved
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            The fear of switching payroll keeps a lot of growing companies stuck. It does not have to. BEG manages the entire migration from QuickBooks Payroll to isolved, so you move to a real HCM platform without the disruption you are worried about.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Address the fear */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The Fear Is the Switch. Let Us Take That Off Your Plate.</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            QuickBooks Payroll is basic small-business payroll attached to your accounting. It serves early-stage companies well, but it is commonly outgrown as headcount, states, and benefits get more complex. The thought of moving payroll feels risky. The risk is what stops people. So BEG owns it. We do not hand you a checklist and wish you luck. We run the migration for you.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { title: 'We manage the migration', desc: 'BEG moves your payroll history, employee records, and benefits data from QuickBooks into isolved.' },
              { title: 'We configure the platform', desc: 'BEG sets up isolved for your pay rules, your states, and your industry before you go live.' },
              { title: 'We protect every pay run', desc: 'The timeline is planned around your pay calendar so payroll never misses a beat.' },
              { title: 'We support you year-round', desc: 'After go-live, BEG is your dedicated contact for optimization, compliance, and changes.' },
            ].map(({ title, desc }, i) => (
              <div key={i} style={{ background: '#f9f9f9', padding: '1.25rem', borderRadius: '8px', borderLeft: '4px solid #ECAC60' }}>
                <strong style={{ display: 'block', marginBottom: '0.35rem' }}>{title}</strong>
                <p style={{ margin: 0, color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the switch looks like */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>What the Switch Looks Like</h2>
          {[
            { step: '1. Discovery and plan', desc: 'We review your QuickBooks Payroll setup, your pay calendar, and your renewal date, then build a timeline that fits your business.' },
            { step: '2. Data migration', desc: 'BEG moves your payroll history, employee records, and benefits information into isolved and verifies it.' },
            { step: '3. Configuration', desc: 'We configure isolved for your states, pay rules, and industry, and connect payroll, HR, time, and benefits in one platform.' },
            { step: '4. Training and parallel checks', desc: 'Your team is trained on the platform and we validate output so there are no surprises at go-live.' },
            { step: '5. Go-live and ongoing support', desc: 'You go live with BEG beside you, and we support and optimize the platform year-round.' },
          ].map(({ step, desc }, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: '#ECAC60', color: '#000000', fontWeight: '800', borderRadius: '50%', width: '2.25rem', height: '2.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{step}</strong>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you gain */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>What You Gain by Moving to isolved</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            You move from basic payroll attached to accounting to a full HCM platform. Payroll, HR, time, and benefits live together in isolved, so as you grow into multiple states and more complex needs your system grows with you instead of holding you back.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            You also gain the only HCM platform with a Connector for Claude, generally available in June 2026, that completes real HR tasks through a conversation. QuickBooks Payroll has no equivalent.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            And you gain a partner. BEG implements, configures, supports, and optimizes isolved for you. The platform serves more than 7 million employees and Forrester documented a 330% ROI.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Switching From QuickBooks FAQ</h2>
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
            Ready to Switch From QuickBooks to isolved?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15 minute call. We will map out your migration timeline and show you exactly what the move looks like for your company, with no commitment required.
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
