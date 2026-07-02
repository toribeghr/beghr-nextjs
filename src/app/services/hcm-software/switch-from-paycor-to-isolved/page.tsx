import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Switch From Paycor to isolved | Instant Quote | BEG',
  description: 'Switching from Paycor to isolved is structured and low-risk when BEG manages the migration. We move your data, configure the platform, and support you year-round.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/switch-from-paycor-to-isolved' },
  openGraph: {
    title: 'Switch From Paycor to isolved | Instant Quote | BEG',
    description: 'Switching from Paycor to isolved is structured and low-risk when BEG manages the migration. We move your data, configure the platform, and support you year-round.',
    url: 'https://www.beghr.com/services/hcm-software/switch-from-paycor-to-isolved',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Switch From Paycor to isolved | Instant Quote | BEG', description: 'Switching from Paycor to isolved is structured and low-risk when BEG manages the migration.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Why do companies switch from Paycor to isolved?',
    a: 'The most common reasons are support frustration after implementation, pricing that increases at renewal, and wanting a single connected platform rather than stitching add-on modules. The isolved platform brings payroll, HR, time, and benefits together with BEG managing it for you.',
  },
  {
    q: 'Will I lose my Paycor payroll history when I switch?',
    a: 'No. BEG migrates your historical payroll data, employee records, and benefits information into isolved as part of the implementation. Your records are preserved and accessible.',
  },
  {
    q: 'How long does the switch from Paycor to isolved take?',
    a: 'Most clients complete the move in 60 to 90 days with no interruption to payroll. BEG plans the timeline around your pay calendar and your Paycor renewal date so you are not paying for two platforms.',
  },
  {
    q: 'What if my Paycor contract is not up yet?',
    a: 'BEG can begin scoping and implementation now so you are ready to go live the moment your Paycor contract expires. We help you map the transition to your renewal window.',
  },
  {
    q: 'What is different about isolved compared to Paycor?',
    a: 'Both are mid-market HCM platforms with overlapping capabilities. The main differences are the isolved Connector for Claude, which lets your team complete real HR tasks through AI conversation, and BEG, which implements, configures, and supports the platform for you rather than leaving you to run a complex system alone.',
  },
  {
    q: 'Who supports the platform after we switch?',
    a: 'BEG does. You get a dedicated contact who supports, optimizes, and maintains your isolved platform year-round, not a general queue or a ticket system.',
  },
];

export default function SwitchFromPaycorPage() {
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
      { '@type': 'ListItem', position: 3, name: 'Switch From Paycor to isolved', item: 'https://www.beghr.com/services/hcm-software/switch-from-paycor-to-isolved' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Switch From Paycor</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How to Switch From Paycor to isolved
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Companies leave Paycor for many reasons: support that disappears after go-live, pricing increases at renewal, and modules that never quite connected. BEG manages the entire migration from Paycor to isolved so you land on one connected platform without the disruption you are worried about.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Why companies switch */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Why Companies Switch From Paycor</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { head: 'Support drops after implementation', body: 'Paycor implementation teams hand off to a general support queue. When issues arise after go-live, you are often waiting for a response from someone who does not know your setup.' },
              { head: 'Renewal pricing increases', body: 'Per-employee-per-month pricing can climb at renewal, particularly as you add modules. Companies find the total cost of ownership higher than the original contract suggested.' },
              { head: 'Modules that do not connect', body: 'Despite being marketed as a single platform, some Paycor capabilities feel disconnected in practice, requiring double entry and manual reconciliation between HR and payroll data.' },
              { head: 'No AI that completes tasks', body: 'Paycor offers some AI features, but none equivalent to the isolved Connector for Claude, which completes real HR tasks through conversation rather than just answering questions.' },
            ].map(({ head, body }) => (
              <div key={head} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{head}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you gain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What You Gain With isolved and BEG</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved platform covers the same mid-market HCM ground as Paycor, with payroll, HR, time, benefits, onboarding, and talent management on one connected platform. The difference is two things Paycor cannot offer: the isolved Connector for Claude, which lets your team complete real HR tasks through a Claude AI conversation, and BEG, which implements and supports the platform for you rather than routing you to a general queue.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Forrester documented a 330% ROI for isolved clients. BEG manages your implementation, migration, training, and ongoing support. You get one contact who knows your setup, not a ticketing system.
          </p>
        </div>
      </section>

      {/* How BEG manages the move */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1.5rem' }}>How BEG Manages the Move</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Discovery and scoping', body: 'BEG reviews your Paycor configuration, data, and renewal date. You get a clear migration plan and timeline before committing to anything.' },
              { num: '02', title: 'Data migration', body: 'We move payroll history, employee records, and benefits information from Paycor into isolved. Your data is preserved and verified before go-live.' },
              { num: '03', title: 'Configuration and testing', body: 'BEG configures isolved for your pay rules, departments, locations, and benefits. We run parallel testing to confirm accuracy before live payroll runs.' },
              { num: '04', title: 'Go-live and ongoing support', body: 'BEG manages go-live and stays with you afterward. When you need a change or have a question, you call your BEG contact, not a queue.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ background: '#1a1a1a', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.6rem' }}>{num}</div>
                <strong style={{ display: 'block', marginBottom: '0.4rem', color: '#ffffff' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaaaaa', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
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
            Ready to leave Paycor behind?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. BEG will review your setup, run a cost comparison, and give you a clear transition plan at no obligation.
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
            excerpt: 'Payroll, onboarding, benefits enrollment, and compliance reporting are high-ROI automation targets. Here is what to prioritize.',
            href: '/blog/hcm-software/hr-automation',
          },
          {
            category: 'HCM technology',
            title: 'Chatbots Answer Questions. isolved Completes the Task.',
            excerpt: 'The difference between AI that retrieves information and AI that takes action inside your HCM platform.',
            href: '/blog/hcm-software/chatbots-answer-isolved-does-the-task',
          },
        ]}
      />
    </main>
  );
}
