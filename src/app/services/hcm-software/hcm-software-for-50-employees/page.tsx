import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM Software for 50 Employees | Instant Quote | BEG',
  description: 'HCM software for a 50-employee company. See why a single connected isolved platform, implemented and supported by BEG, fits firms outgrowing basic payroll.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/hcm-software-for-50-employees' },
  openGraph: {
    title: 'HCM Software for 50 Employees | Instant Quote | BEG',
    description: 'HCM software for a 50-employee company. See why a single connected isolved platform, implemented and supported by BEG, fits firms outgrowing basic payroll.',
    url: 'https://www.beghr.com/services/hcm-software/hcm-software-for-50-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for 50 Employees | Instant Quote | BEG', description: 'HCM software for a 50-employee company. See why a single connected isolved platform, implemented and supported by BEG, fits firms outgrowing basic payroll.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Is 50 employees too small for a full HCM platform?',
    a: 'No. At around 50 people, most companies have crossed the line where a basic payroll app stops being enough. You likely have benefits, time tracking, and onboarding to manage, and a single connected platform keeps those from living in separate tools.',
  },
  {
    q: 'What usually breaks at the 50-employee mark?',
    a: 'Spreadsheets and disconnected apps start to create double entry and small errors that take real time to fix. PTO tracking, benefits changes, and new-hire paperwork are the most common pain points, and they are exactly what a connected platform is built to handle.',
  },
  {
    q: 'Do I need a dedicated HR person to run isolved at this size?',
    a: 'No. Many 50-employee companies still split HR duties across a founder, an office manager, or a finance lead. Because BEG implements, configures, and supports isolved for you, you do not need deep in-house HR expertise to run it well.',
  },
  {
    q: 'Will isolved still fit when we grow past 50?',
    a: 'Yes. The isolved platform is built to scale into the mid-market, so the platform you set up at 50 employees can grow with you through 100, 250, and beyond without forcing another migration.',
  },
  {
    q: 'How does BEG help a company our size specifically?',
    a: 'BEG scopes only the modules you need today, configures the platform to your policies, migrates your existing payroll and employee data, and stays on as your support partner rather than handing you off to a general queue.',
  },
  {
    q: 'Is the AI capability relevant for a 50-person team?',
    a: 'Yes. The isolved platform is the only HCM platform with a Connector for Claude, generally available in June 2026. For a lean team, completing real HR tasks through conversation saves time that smaller companies rarely have to spare.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for a 50-Employee Company', item: 'https://www.beghr.com/services/hcm-software/hcm-software-for-50-employees' },
  ],
};

export default function HcmFor50EmployeesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · By Company Size</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for a 50-Employee Company
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            At 50 employees you have outgrown the basic payroll app, but you are not ready to be buried in enterprise complexity. The isolved platform gives you one connected platform, and BEG runs it for you so a lean team stays lean.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* What changes at 50 */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What Changes When You Hit 50 Employees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Fifty employees is a quiet turning point. Below it, a founder or office manager can usually keep payroll, time off, and onboarding moving with a basic app and a few spreadsheets. Around 50, the volume of small changes adds up. Someone updates a benefit election in one place but forgets the other. A new hire form sits unsigned. PTO balances drift out of sync. None of these are disasters on their own, but together they steal hours every week and create the kind of quiet risk that surfaces at the worst time.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            This is also the size where compliance starts to matter more. You may now cross headcount thresholds for certain reporting and benefits rules, and manual tracking becomes a liability rather than a shortcut. The right move is not a bigger spreadsheet. It is a single connected platform that keeps payroll, HR, time, and benefits in one place.
          </p>
        </div>
      </section>

      {/* Why isolved fits */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why isolved Fits a 50-Person Company</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved brings payroll, HR, time, and benefits together on one connected platform, so your data lives in a single system instead of scattered across tools that do not talk to each other. For a 50-employee company, that consolidation is the difference between an HR function that runs in the background and one that constantly pulls people away from their actual jobs.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Just as important, you only buy what you need. BEG scopes your configuration to the modules that matter at your size today, so you are not paying for enterprise features you will not touch for years. With more than 7 million employees managed on isolved and a Forrester-documented 330% ROI, you are choosing a platform built to perform, not just to check a box.
          </p>
        </div>
      </section>

      {/* BEG handles it */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Runs It So Your Lean Team Stays Lean</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The biggest worry at this size is not the software. It is who will set it up and keep it running when nobody on the team is a full-time HR professional. With BEG, you are not handed a login and left to figure it out. BEG implements the platform, configures it to your policies, and migrates your existing payroll history and employee records so nothing falls through the cracks.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG stays with you as your support partner. When a tax rule changes, a new state comes into play, or you simply have a question, you reach a team that already knows your setup. That is the kind of backup a 50-person company needs and rarely gets from software-only providers.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI That Does the Work, Not Just Answers Questions</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It does not just look things up. It completes real HR tasks through conversation, such as running payroll, pulling reports, and updating employee data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            For a 50-person team, time is the scarcest resource. Being able to move HR work forward by simply describing what you need is a genuine advantage, and it is available today through BEG.
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

      {/* CTA */}
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See What isolved Looks Like at 50 Employees
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your current setup, scope the right modules, and show you what isolved plus BEG looks like for a company your size.
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
