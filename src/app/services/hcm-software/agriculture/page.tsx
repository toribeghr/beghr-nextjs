import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM Software for Agriculture | Instant Price Quote | BEG',
  description: 'HCM software built for agriculture: seasonal workforce, multi-state compliance, piece-rate and hourly pay, and H-2A visa tracking on one connected isolved',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/agriculture' },
  openGraph: {
    title: 'HCM Software for Agriculture | Instant Price Quote | BEG',
    description: 'HCM software built for agriculture: seasonal workforce, multi-state compliance, piece-rate and hourly pay, and H-2A visa tracking on one connected isolved',
    url: 'https://www.beghr.com/services/hcm-software/agriculture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for Agriculture | Instant Price Quote | BEG', description: 'HCM software built for agriculture: seasonal workforce, multi-state compliance, piece-rate and hourly pay, and H-2A visa tracking on one connected isolved', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Can isolved handle piece-rate and hourly pay in the same payroll run?',
    a: 'Yes. The isolved platform supports multiple pay rate types within a single payroll run, including piece-rate, hourly, and salaried. BEG configures the pay structure to match how your crews actually work so every employee is paid correctly on every cycle.',
  },
  {
    q: 'Does isolved support H-2A visa worker tracking?',
    a: 'Yes. BEG configures isolved to track H-2A workers separately, flag visa expiration dates, and ensure housing and transportation benefit values are correctly handled in payroll. Compliance for guest agricultural workers requires specific configuration, and BEG manages that for you.',
  },
  {
    q: 'How does isolved manage a seasonal workforce that varies in size?',
    a: 'The isolved platform scales payroll and HR to match your headcount at any given time. You can onboard large seasonal crews quickly, process payroll for them during the season, and offboard cleanly at season end. Pricing adjusts to your active headcount so you are not paying for inactive workers.',
  },
  {
    q: 'Can isolved handle multi-state payroll for agricultural operations?',
    a: 'Yes. Multi-state payroll with accurate state and local tax handling is a core isolved capability. BEG configures the tax settings for each jurisdiction where you operate so you are not managing state rules manually.',
  },
  {
    q: 'What does BEG do after implementation?',
    a: 'BEG stays on as your dedicated support partner. When seasons start, you add a new growing region, or regulations change, your BEG contact handles the configuration update. You are not sent to a generic support queue.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'It is the only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation, not just answers questions. Your team can run payroll, pull labor reports, and update worker records by describing what they need. Available now through BEG.',
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
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Agriculture', item: 'https://www.beghr.com/services/hcm-software/agriculture' },
  ],
};

export default function HCMAgriculture() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Agriculture</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Agriculture Operations
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Agricultural payroll is not standard payroll. Piece-rate pay, seasonal swings, H-2A visa workers, and multi-state compliance mean generic HCM tools break down where you need them most. The isolved platform handles it all in one connected system. BEG implements and supports it for your operation.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Generic HCM Software Fails in Agriculture</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Agriculture HR has a complexity that most platforms are not built for. Your workforce triples at harvest and drops to a fraction in the off-season. You pay some workers by the piece, others by the hour, and some under H-2A visa terms that carry specific wage, housing, and transportation requirements. You operate across multiple states with different labor laws and tax rules. And you need it all to work cleanly together on the same payroll run.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Generic HR software ignores these realities. Spreadsheets and disconnected tools multiply the risk of miscalculation, compliance penalties, and H-2A audit exposure. What an agricultural operation needs is a platform that understands its specific pay types, workforce structure, and regulatory environment from the start.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved Handles Agricultural Complexity</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1.5rem' }}>
            The isolved platform is a single connected system for payroll, HR, time, and benefits. BEG configures it specifically for agricultural operations, covering the areas that generic platforms miss.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Piece-rate and hourly pay', body: 'Configure multiple pay rate types within a single payroll run. Piece-rate, hourly, and salary can coexist with accurate overtime calculations at each tier.' },
              { title: 'H-2A visa worker management', body: 'Track visa dates, manage housing and transportation benefit values, and ensure guest agricultural workers are paid according to DOL requirements.' },
              { title: 'Seasonal workforce scaling', body: 'Onboard large crews quickly at season start, process payroll accurately during the season, and offboard cleanly when the season ends.' },
              { title: 'Multi-state compliance', body: 'Run payroll across multiple states with accurate state and local tax handling automatically configured for each jurisdiction where you operate.' },
              { title: 'Time and attendance', body: 'Capture field time accurately with the isolved time and attendance module. GPS-enabled time capture supports remote and field-based workforce tracking.' },
              { title: 'Single source of truth', body: 'All worker data, pay rules, compliance records, and benefits live in one platform. No reconciling spreadsheets at harvest season when you are too busy to fix errors.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEG */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Configures and Supports It for Your Operation</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved is a capable platform. What turns that capability into something that works for your specific operation is a partner who configures it correctly. BEG manages the full implementation, from discovering how your operation pays workers and tracks time, to configuring every pay type, tax jurisdiction, and H-2A rule, to migrating your historical data and managing go-live without interrupting a payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG is your dedicated support contact year-round. When regulations change, a new season starts, or you add a growing location, you call BEG. Not a help desk. Not a ticket queue. One contact who already knows your setup.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. It is the only HCM platform integration that completes real HR tasks through a Claude AI conversation, not just answers questions. Your team can pull labor cost reports, update worker records, and manage compliance documentation by describing what they need in plain language.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            During a harvest with a crew of 80 and a deadline, the last thing your team needs is a slow back-office process. Chatbots answer questions. isolved does the task. No other HCM platform can say that.
          </p>
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

      {/* Calculator */}

      {/* CTA */}
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Handles Your Workforce
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your pay types, workforce structure, and current system, then show you exactly how isolved handles it.
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
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should be handling automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI automation targets and what to keep manual for seasonal and field-based workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
