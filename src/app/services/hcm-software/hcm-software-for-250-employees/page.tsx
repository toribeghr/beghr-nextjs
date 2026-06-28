import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for a 250-Employee Company | BEG',
  description: 'HCM software for a 250-employee company. See why mid-market firms run payroll, HR, time, and benefits on one connected iSolved platform managed by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/hcm-software-for-250-employees' },
  openGraph: {
    title: 'HCM Software for a 250-Employee Company | BEG',
    description: 'HCM software for a 250-employee company. See why mid-market firms run payroll, HR, time, and benefits on one connected iSolved platform managed by BEG.',
    url: 'https://beghr.com/services/hcm-software/hcm-software-for-250-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for a 250-Employee Company | BEG', description: 'HCM software for a 250-employee company. See why mid-market firms run payroll, HR, time, and benefits on one connected iSolved platform managed by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What defines HR needs at 250 employees?',
    a: 'At 250 people you are squarely in the mid-market. You typically run multi-state payroll, manage a real benefits program with multiple carriers, and have managers and HR staff who all touch the system. Data accuracy, reporting, and compliance become board-level concerns rather than back-office chores.',
  },
  {
    q: 'We have an HR team already. Why does the platform matter so much?',
    a: 'A capable HR team is held back by disconnected systems. When payroll, time, benefits, and HR data live in separate tools, your team spends its time reconciling instead of advising leadership. A single connected platform lets a strong team operate at the level the company needs.',
  },
  {
    q: 'Can iSolved handle the reporting and analytics we now require?',
    a: 'Yes. Because iSolved keeps payroll, HR, time, and benefits on one connected platform, reporting draws from a single source of truth. That makes headcount, labor cost, and compliance reporting far more reliable than assembling spreadsheets from multiple systems.',
  },
  {
    q: 'How does BEG support a company of this scale?',
    a: 'BEG implements and configures iSolved to your structure, migrates your historical data, and stays on as a dedicated support partner. At 250 employees you need a partner who knows your configuration, not a ticket queue, and that is exactly what BEG provides.',
  },
  {
    q: 'Is iSolved proven at mid-market scale?',
    a: 'Yes. More than 7 million employees are managed on the iSolved platform, and Forrester documented a 330% ROI. That scale and return make it a credible choice for a company managing hundreds of people.',
  },
  {
    q: 'What does the Connector for Claude add at 250 employees?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. At this size, the routine workload is substantial, and completing real HR tasks through conversation lets your team redirect hours toward higher-value work.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for a 250-Employee Company', item: 'https://beghr.com/services/hcm-software/hcm-software-for-250-employees' },
  ],
};

export default function HcmFor250EmployeesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · By Company Size</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for a 250-Employee Company
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            At 250 employees you are a mid-market business with mid-market complexity. Multi-state payroll, real benefits programs, and leadership reporting demand one connected platform. iSolved delivers it, and BEG runs it alongside your HR team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Mid-market reality */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The Mid-Market Reality at 250 Employees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            At 250 employees, HR stops being a support function and starts being a strategic one. Leadership wants accurate headcount and labor cost numbers on demand. You are almost certainly running payroll across more than one state, managing several benefits carriers, and tracking time for a workforce that may include hourly, salaried, and remote staff. The questions you face are no longer about whether a task got done, but about how the whole operation performs.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            That level of complexity exposes any seam between systems. If payroll, time, benefits, and core HR data live in separate tools, your team burns hours reconciling them and your reports are only as trustworthy as the last manual export. Compliance risk rises with every disconnected handoff. A company this size needs a platform built for the mid-market, not a collection of small-business apps stretched past their limit.
          </p>
        </div>
      </section>

      {/* Why iSolved */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why iSolved Fits a 250-Person Company</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved is purpose-built for growing, more complex companies. Bringing payroll, HR, time, and benefits onto one connected platform means your data lives in a single source of truth, which is exactly what reliable reporting and clean compliance require. For multi-state operations and multi-carrier benefits, that unified foundation removes the reconciliation tax that drags down most mid-market HR teams.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The platform is also proven at this scale. More than 7 million employees are managed on iSolved, and Forrester documented a 330% ROI. You are choosing a system with the depth to support 250 employees today and the headroom to carry you well beyond it.
          </p>
        </div>
      </section>

      {/* BEG partner */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Works Alongside Your HR Team</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            At 250 employees you likely have a capable HR team, and BEG is built to make that team more effective rather than replace it. BEG implements iSolved, configures it to your organizational structure and approval workflows, and migrates your historical payroll, employee, and benefits data so nothing is lost in the move.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Once live, BEG stays on as a dedicated support partner who knows your configuration. When you expand into a new state, restructure a department, or face a new reporting requirement, your team works with people who understand your setup. That partnership lets your HR leaders focus on strategy instead of system maintenance.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI Built for Mid-Market Workload</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. It does more than answer questions. It completes real HR tasks through conversation, such as running payroll, pulling reports, and updating employee data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            For a 250-person company, the routine workload is large enough that this capability translates directly into reclaimed hours. Your team can move work forward by describing what it needs, and that capability is available today through BEG.
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
            See What iSolved Looks Like at 250 Employees
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will review your current systems, scope the right configuration, and show you what iSolved plus BEG looks like for a mid-market company your size.
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
