import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Switch Dayforce to isolved | Instant Price Quote | BEG',
  description: 'Switching from Dayforce (Ceridian) to isolved gives growing mid-market companies a connected HCM platform with BEG-managed implementation and year-round support.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/switch-from-dayforce-to-isolved' },
  openGraph: {
    title: 'Switch Dayforce to isolved | Instant Price Quote | BEG',
    description: 'Switching from Dayforce to isolved gives growing mid-market companies a connected HCM platform with BEG-managed implementation and year-round support.',
    url: 'https://www.beghr.com/services/hcm-software/switch-from-dayforce-to-isolved',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website' as const,
  },
  twitter: { card: 'summary_large_image' as const, title: 'Switch Dayforce to isolved | Instant Price Quote | BEG', description: 'Mid-market HCM without enterprise overhead. BEG manages the Dayforce to isolved migration.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Why do companies switch from Dayforce to isolved?',
    a: 'Dayforce (formerly Ceridian) is a solid HCM platform, but common reasons companies look elsewhere include pricing that scales aggressively with headcount, support that slows after implementation, and platform complexity that outpaces a lean HR team. The isolved platform covers the same HCM ground with BEG managing it for you.',
  },
  {
    q: 'Will I lose Dayforce data when I switch?',
    a: 'No. BEG migrates payroll history, employee records, and benefits information from Dayforce into isolved. Your data is preserved and validated before any live payroll runs on the new platform.',
  },
  {
    q: 'How long does the transition from Dayforce to isolved take?',
    a: 'Most clients complete the move in 60 to 90 days with no payroll interruption. BEG plans the migration around your pay calendar and your Dayforce renewal date.',
  },
  {
    q: 'How do I compare isolved to Dayforce for my company?',
    a: 'Both platforms cover payroll, HR, time, and benefits for the mid-market. The differences tend to show up in pricing transparency, implementation experience, ongoing support, and AI capability. The isolved Connector for Claude, which completes real HR tasks through conversation, is available through BEG today. Dayforce has no equivalent.',
  },
  {
    q: 'What AI can isolved do that Dayforce cannot?',
    a: 'The isolved Connector for Claude, generally available since June 2026, lets your team complete actual HR tasks through Claude AI. Run payroll, pull reports, update records, manage enrollment. Dayforce does not offer an equivalent task-completing connector for Claude.',
  },
  {
    q: 'Who handles support after switching from Dayforce?',
    a: 'BEG does. You get a named contact who supports, optimizes, and maintains your isolved platform year-round. One person who knows your setup, not a support queue.',
  },
];

export default function SwitchFromDayforcePage() {
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
      { '@type': 'ListItem', position: 3, name: 'Switch From Dayforce to isolved', item: 'https://www.beghr.com/services/hcm-software/switch-from-dayforce-to-isolved' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Switch From Dayforce</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How to Switch From Dayforce to isolved
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Dayforce covers a lot of HCM ground. So does isolved. The questions that send companies looking for an alternative are usually about pricing at renewal, support after go-live, and whether the platform they are running actually fits their size and complexity. BEG manages the full migration from Dayforce to isolved, so the transition is structured and payroll never skips a beat.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Why companies look */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>What Sends Dayforce Customers Looking</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { head: 'Pricing at renewal', body: 'Per-employee-per-month pricing can increase meaningfully at renewal, especially as modules are added. Companies find the total cost of ownership is higher than the original contract suggested.' },
              { head: 'Post-implementation support gaps', body: 'Implementation teams hand off, and ongoing support can feel slow or generic. When you have a time-sensitive payroll issue, waiting in a queue is not an option.' },
              { head: 'Platform sized above your needs', body: 'Dayforce is competitive at the higher end of the mid-market. Companies below that band can find themselves paying for scale they do not need and navigating configuration complexity that does not match their team size.' },
              { head: 'No AI task connector', body: 'Dayforce does not offer an equivalent to the isolved Connector for Claude, which completes real HR tasks through Claude AI conversation. That capability is available through BEG today.' },
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
            The isolved platform covers payroll, HR, time, benefits, onboarding, and talent management in one connected system, purpose-built for companies in the 50 to 500 employee range. You get the coverage Dayforce offers at a price and complexity level that fits a mid-market firm.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved Connector for Claude, generally available since June 2026, lets your HR team complete actual tasks through Claude AI. Payroll runs, headcount reports, employee record updates, open enrollment management. All by describing what you need. No comparable capability exists in Dayforce today.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            BEG implements, migrates, and supports the platform. Forrester documented a 330% ROI for isolved clients. One contact year-round. No ticket queue.
          </p>
        </div>
      </section>

      {/* How BEG manages the move */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1.5rem' }}>How BEG Manages the Transition</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Discovery and renewal planning', body: 'BEG reviews your Dayforce setup and renewal date. You get a migration plan timed to avoid paying for both platforms.' },
              { num: '02', title: 'Data migration', body: 'We extract your payroll history, employee records, and benefits data from Dayforce and migrate it into isolved. Validated before go-live.' },
              { num: '03', title: 'Configuration and testing', body: 'BEG configures isolved for your pay rules, locations, and benefits. We run parallel testing to confirm accuracy before live payroll.' },
              { num: '04', title: 'Go-live and ongoing support', body: 'BEG manages go-live. Your named contact stays with you year-round for changes, compliance updates, and anything else the platform needs.' },
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
            Ready to move from Dayforce?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. BEG will review your Dayforce setup, run a cost comparison, and give you a clear migration plan at no obligation.
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
            excerpt: 'Full isolved platform review covering payroll, benefits, time tracking, and the Connector for Claude.',
            href: '/blog/hcm-software/isolved-platform',
          },
          {
            category: 'HCM technology',
            title: 'Chatbots Answer Questions. isolved Completes the Task.',
            excerpt: 'The difference between AI that retrieves information and AI that takes action inside your HCM platform.',
            href: '/blog/hcm-software/chatbots-answer-isolved-does-the-task',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'The highest-ROI HR automation targets for a lean mid-market HR team.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
