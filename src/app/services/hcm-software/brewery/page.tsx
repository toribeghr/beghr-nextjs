import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM Software for Breweries | Instant Price Quote | BEG',
  description: 'HCM software for craft breweries and taprooms: tipped and non-tipped pay, production and retail roles, multi-location management, and TTB compliance',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/brewery' },
  openGraph: {
    title: 'HCM Software for Breweries | Instant Price Quote | BEG',
    description: 'HCM software for craft breweries and taprooms: tipped and non-tipped pay, production and retail roles, multi-location management, and TTB compliance',
    url: 'https://www.beghr.com/services/hcm-software/brewery',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for Breweries | Instant Price Quote | BEG', description: 'HCM software for craft breweries and taprooms: tipped and non-tipped pay, production and retail roles, multi-location management, and TTB compliance', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Can isolved handle tipped and non-tipped employees in the same payroll run?',
    a: 'Yes. The isolved platform supports tipped wage calculations, tip credits, and accurate FLSA overtime for tipped workers alongside non-tipped production and administrative employees in one payroll run. BEG configures the pay types to match your taproom and production floor.',
  },
  {
    q: 'Does isolved support multi-location brewery operations?',
    a: 'Yes. The isolved platform manages multiple locations in one system with separate cost center tracking, individual pay rule configurations, and consolidated reporting. BEG sets up each taproom or production facility as its own entity within the platform.',
  },
  {
    q: 'Can isolved track labor costs by department for a brewery?',
    a: 'Yes. BEG configures cost centers so you can track payroll cost separately for production, taproom, distribution, and administrative roles. Clean departmental labor data helps with pricing decisions and profitability analysis.',
  },
  {
    q: 'What about benefits for a mixed workforce of part-time taproom and full-time production staff?',
    a: 'isolved manages benefits eligibility by employee classification. BEG configures separate eligibility rules for full-time production employees and part-time or seasonal taproom staff so benefits enrollment is handled correctly for each group.',
  },
  {
    q: 'What does BEG provide after the platform goes live?',
    a: 'BEG is your dedicated support contact year-round. When you open a new taproom location, add a distribution team, or face a regulatory change, one BEG contact updates your configuration. No support tickets, no starting over with someone who does not know your setup.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your brewery team can run payroll, pull labor reports, and update records by describing what they need. Available now through BEG.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Breweries', item: 'https://www.beghr.com/services/hcm-software/brewery' },
  ],
};

export default function HCMBrewery() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Brewery</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Breweries and Taprooms
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Craft breweries manage tipped taproom staff, non-tipped production crews, part-time and full-time employees, and often multiple locations, all with different pay rules and benefits eligibility. The isolved platform handles that complexity in one connected system. BEG implements and supports it for your brewery.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The Payroll Complexity Behind the Pint Glass</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A craft brewery is really two businesses operating under one roof. Your taproom runs like a restaurant, with tipped employees, tip credits, variable hours, and scheduling complexity. Your production floor runs like a light manufacturer, with fixed shifts, production roles, equipment certifications, and safety compliance. Your distribution operation may cross state lines and add a third jurisdiction to manage.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Most HCM software is built for one of those businesses, not all three at once. The result for breweries is a patchwork of tools that do not communicate: a payroll system that cannot handle tip credits, a scheduling tool disconnected from time tracking, and a spreadsheet stitching it all together at month-end. A platform configured for brewery complexity removes those seams and the errors that come with them.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for a Brewery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Tipped and non-tipped payroll', body: 'Handle tip credits, tip pooling configurations, and accurate FLSA overtime for taproom staff alongside standard pay for production and admin employees in one payroll run.' },
              { title: 'Multi-location management', body: 'Run each taproom or production location as its own entity within isolved, with separate pay rules and consolidated reporting at the brewery level.' },
              { title: 'Department cost tracking', body: 'Configure cost centers for taproom, production, distribution, and admin so labor cost rolls up cleanly by department for pricing and margin analysis.' },
              { title: 'Benefits eligibility by classification', body: 'Separate eligibility rules for full-time production employees and part-time or seasonal taproom staff so benefits enrollment is accurate for every group.' },
              { title: 'Scheduling and time capture', body: 'Manage taproom shifts alongside production schedules in one platform. Accurate time data flows directly into payroll without manual entry.' },
              { title: 'Onboarding for seasonal and part-time staff', body: 'Digital onboarding flows bring seasonal taproom hires onto the platform quickly and accurately without burdening your small admin team.' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Configures isolved for Your Specific Operation</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A brewery with a taproom and a production floor needs an isolved configuration that reflects both operations, not a generic setup that ignores the difference. BEG manages the full implementation, starting with a discovery of how your brewery actually pays employees, tracks time, and runs benefits, then configuring every rule correctly before migration and go-live.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After implementation, BEG stays on as your dedicated support partner. When you open a second location, add a distribution route, or face a compliance change, your BEG contact handles it, not a support queue.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. It is the only HCM platform integration that completes real HR tasks through a Claude AI conversation. Your team can run payroll, pull labor reports by department, and manage onboarding by describing what they need, without navigating complex menus or waiting for an HR callback.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            For a small brewery team wearing multiple hats, that time savings compounds every payroll cycle. Chatbots answer questions. isolved does the task.
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


      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Works for a Brewery
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your taproom and production pay structures, current system, and what isolved handles for you.
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
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should handle automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI HR automation targets for small and growing businesses with mixed workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
