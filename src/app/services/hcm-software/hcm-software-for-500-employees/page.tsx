import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for a 500-Employee Company | BEG',
  description: 'HCM software for a 500-employee company. Run payroll, HR, time, and benefits on one connected iSolved platform with BEG-managed implementation and support.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/hcm-software-for-500-employees' },
  openGraph: {
    title: 'HCM Software for a 500-Employee Company | BEG',
    description: 'HCM software for a 500-employee company. Run payroll, HR, time, and benefits on one connected iSolved platform with BEG-managed implementation and support.',
    url: 'https://beghr.com/services/hcm-software/hcm-software-for-500-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for a 500-Employee Company | BEG', description: 'HCM software for a 500-employee company. Run payroll, HR, time, and benefits on one connected iSolved platform with BEG-managed implementation and support.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What makes HCM at 500 employees different from smaller firms?',
    a: 'At 500 people you are managing a workforce with real organizational complexity: multiple locations or states, layered approval structures, varied pay rules, and a benefits program with serious financial weight. The platform you run becomes core infrastructure, and its reliability affects every employee and every payroll cycle.',
  },
  {
    q: 'Is iSolved enterprise-grade enough for a company this size?',
    a: 'Yes. More than 7 million employees are managed on the iSolved platform, and it is built for growing, complex organizations. A single connected platform for payroll, HR, time, and benefits is precisely what a 500-employee company needs to operate with confidence.',
  },
  {
    q: 'How does a single connected platform reduce risk at scale?',
    a: 'When payroll, time, benefits, and HR data share one system, you eliminate the handoffs where errors and compliance gaps usually appear. At 500 employees, even small per-transaction issues multiply, so a single source of truth is a meaningful risk reduction, not just a convenience.',
  },
  {
    q: 'What does BEG handle for an organization at this scale?',
    a: 'BEG implements iSolved, configures it to your locations, pay rules, and approval hierarchy, migrates your historical data, and provides ongoing dedicated support. You get a partner who understands your configuration rather than a generic support line.',
  },
  {
    q: 'Can the platform support our reporting and compliance obligations?',
    a: 'Yes. With all workforce data on one connected platform, reporting draws from a single source, which makes labor cost analysis, headcount reporting, and regulatory compliance far more dependable than reconciling multiple systems by hand.',
  },
  {
    q: 'How does the Connector for Claude help at 500 employees?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. At this scale the routine workload is significant, and completing real HR tasks through conversation lets a sizable HR team reclaim time and focus on strategic priorities.',
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
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'HCM Software for a 500-Employee Company', item: 'https://beghr.com/services/hcm-software/hcm-software-for-500-employees' },
  ],
};

export default function HcmFor500EmployeesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · By Company Size</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for a 500-Employee Company
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            At 500 employees your HCM platform is core infrastructure. Multiple locations, layered approvals, and a substantial benefits program leave no room for disconnected tools. iSolved delivers one connected platform, and BEG implements and supports it.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Infrastructure stakes */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>At 500 Employees, Your Platform Is Infrastructure</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A 500-employee company runs on the kind of complexity that smaller firms only imagine. You likely operate across multiple locations or states, manage layered approval hierarchies, apply different pay rules to different groups, and carry a benefits program with real financial weight. Every payroll cycle touches hundreds of people, and the system that powers it is no longer a back-office tool. It is infrastructure that the entire organization depends on.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            At this scale, the cost of disconnected systems compounds quickly. A small error rate that was tolerable at 50 employees becomes a serious liability across 500. Reconciling separate payroll, time, and benefits tools consumes a full team, and compliance exposure grows with every manual handoff. What you need is a single connected platform engineered to carry that load reliably.
          </p>
        </div>
      </section>

      {/* Why iSolved */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why iSolved Carries a 500-Person Workforce</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved is built for growing, complex organizations, and a 500-employee company is exactly that. By keeping payroll, HR, time, and benefits on one connected platform, it removes the seams where errors and compliance gaps live. Your data becomes a single source of truth, which is the foundation for trustworthy reporting, accurate labor cost analysis, and clean regulatory compliance at scale.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The platform is proven where it counts. More than 7 million employees are managed on iSolved, and Forrester documented a 330% ROI. For an organization where the stakes of a payroll mistake are high, choosing a platform with that scale and demonstrated return is a sound, defensible decision.
          </p>
        </div>
      </section>

      {/* BEG */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements and Stands Behind It</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Deploying a platform across 500 employees demands a disciplined partner. BEG implements iSolved, configures it to your locations, pay rules, and approval hierarchy, and migrates your historical payroll, employee, and benefits data with care. A project of this scope is planned and managed rather than improvised, so your team is guiding the rollout, not absorbing it.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG provides dedicated support from people who know your configuration. When you open a new location, adjust a pay policy, or respond to a compliance change, you work with a partner who already understands your environment. For an organization of this size, that continuity is essential to keeping critical infrastructure running smoothly.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI Leverage Across a Large Workforce</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Rather than only answering questions, it completes real HR tasks through conversation, including running payroll, pulling reports, and updating employee data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Across a 500-person workforce, routine tasks add up to a heavy and constant load. Letting your team move that work forward by describing what it needs frees experienced HR professionals for strategic priorities. This capability is available today through BEG.
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
            See What iSolved Looks Like at 500 Employees
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will assess your current environment, scope the implementation, and show you what iSolved plus BEG looks like for an organization your size.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
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
            excerpt: 'Federal and state payroll tax changes in 2026, FLSA threshold updates, and what your HCM platform should be handling automatically, not manually.',
            href: '/blog/hcm-technology/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
