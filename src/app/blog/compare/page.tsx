import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll & Legal Recruiting Comparisons | BEG Resource Center',
  description: 'Honest side-by-side comparisons of payroll software, legal recruiting models, and managed service options. Research before you decide.',
  alternates: { canonical: 'https://beghr.com/blog/compare' },
};

const INDUSTRY_COMPARISONS = [
  {
    href: '/blog/payroll/trucking/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Trucking Companies: In-House vs. Outsourced',
    description: 'Driver classification, per diem, multi-state DOT compliance. What a managed service costs vs. a qualified in-house hire for fleets of 10–200 drivers.',
    time: '8 min read',
  },
  {
    href: '/blog/payroll/veterinary/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Veterinary Practices: In-House vs. Outsourced',
    description: 'DVM production bonuses, technician shift differentials, ACA FTE tracking, and multi-location expansion. Real numbers for practices of 10–100 staff.',
    time: '8 min read',
  },
  {
    href: '/blog/payroll/auto-dealership/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Auto Dealerships: In-House vs. Outsourced',
    description: 'Draw-plus-commission reconciliation, F&I chargebacks, flat-rate minimum wage floors. Full cost comparison for dealerships with 20–200 employees.',
    time: '8 min read',
  },
  {
    href: '/blog/payroll/cannabis/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Cannabis Businesses: In-House vs. Outsourced',
    description: '280E-aware payroll, banking constraints, and state licensing compliance. What managed payroll costs for dispensaries, cultivators, and processors.',
    time: '7 min read',
  },
  {
    href: '/blog/payroll/childcare/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Childcare Centers: In-House vs. Outsourced',
    description: 'FLSA overtime for aides, state subsidy documentation, high-turnover onboarding. Real numbers for centers with 10–80 staff.',
    time: '7 min read',
  },
  {
    href: '/blog/payroll/home-health/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Home Health Agencies: In-House vs. Outsourced',
    description: 'Travel time between clients, EVV reconciliation, and multi-state operations. Full cost comparison for agencies with 15–150 staff.',
    time: '8 min read',
  },
  {
    href: '/blog/payroll/church/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Churches: In-House vs. Outsourced',
    description: 'Minister housing allowance, dual tax status, Form 4361 opt-out, and FICA for non-ministerial staff. Full comparison for church and ministry payroll.',
    time: '7 min read',
  },
  {
    href: '/blog/payroll/marketing-agency/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Marketing Agencies: In-House vs. Outsourced',
    description: 'Multi-state remote teams, S-corp owner salary, and contractor classification risk. Real cost comparison for agencies with 10–80 employees.',
    time: '7 min read',
  },
  {
    href: '/blog/payroll/fitness/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Fitness Studios: In-House vs. Outsourced',
    description: 'Trainer W-2 vs. 1099 classification, per-class pay floors, and ACA FTE tracking. Full cost comparison for studios with 10–80 staff.',
    time: '7 min read',
  },
  {
    href: '/blog/payroll/franchise/managed-payroll-vs-in-house',
    title: 'Managed Payroll for Franchise Owners: In-House vs. Outsourced',
    description: 'Multi-location cost centers, state minimum wage auto-updates, employee transfers, and multi-brand management. Full comparison for franchise operators.',
    time: '8 min read',
  },
];

const PAYROLL_COMPARISONS = [
  {
    href: '/blog/compare/payroll-manager-vs-outsourcing',
    title: 'Hiring a Payroll Manager vs. Outsourcing',
    description: 'What does an in-house payroll manager actually cost — salary, benefits, errors, and replacement — vs. $25–$45 PEPM managed payroll?',
    time: '8 min read',
  },
  {
    href: '/blog/compare/managed-payroll-vs-gusto',
    title: 'Managed Payroll vs. Gusto',
    description: "Gusto is software you run. BEG is a service that runs it for you. Here's the real cost comparison and when each makes sense.",
    time: '7 min read',
  },
  {
    href: '/blog/compare/managed-payroll-vs-adp',
    title: 'ADP vs. Managed Payroll',
    description: "ADP is powerful — and priced accordingly. Is it still worth it for companies with 20–200 employees, or is there a better fit?",
    time: '7 min read',
  },
  {
    href: '/blog/compare/managed-payroll-vs-paychex',
    title: 'Paychex vs. Managed Payroll',
    description: 'Already on Paychex? BEG can operate within your existing account — or transition you to iSolved. Full comparison inside.',
    time: '6 min read',
  },
  {
    href: '/blog/compare/managed-payroll-vs-rippling',
    title: 'Rippling vs. Managed Payroll',
    description: "Rippling's all-in-one platform is impressive. But if you only need payroll handled, you may be buying far more than you need.",
    time: '7 min read',
  },
  {
    href: '/blog/compare/managed-payroll-vs-deel',
    title: 'Managed Payroll vs. Deel',
    description: "Deel is built for global contractors. If your workforce is domestic W-2 employees, you're solving the wrong problem with Deel.",
    time: '6 min read',
  },
  {
    href: '/blog/compare/peo-vs-managed-payroll',
    title: 'PEO vs. Managed Payroll',
    description: 'PEOs co-employ your staff. Managed payroll handles operations without touching your employment relationships. Major difference.',
    time: '8 min read',
  },
];

const LEGAL_COMPARISONS = [
  {
    href: '/blog/compare/contingency-vs-retained-vs-milestone',
    title: 'Contingency vs. Retained vs. Milestone Recruiting',
    description: 'Three ways to hire attorneys. One changes the cost equation entirely. Full breakdown of each model — fees, fill rates, and timelines.',
    time: '9 min read',
  },
  {
    href: '/blog/compare/how-long-should-attorney-placement-take',
    title: 'How Long Should an Attorney Search Take?',
    description: "If your search has been open 60+ days, you're not unlucky. You're using a model that's structurally slow. Here's what fills in 23–35 days.",
    time: '7 min read',
  },
  {
    href: '/blog/compare/legal-staffing-vs-placement',
    title: 'Legal Staffing Agency vs. Attorney Placement Service',
    description: "These terms get used interchangeably — but they describe fundamentally different models. Know which you need before you engage.",
    time: '7 min read',
  },
];

export default function ComparePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Resource Center · Comparisons</p>
              <h1>Honest Comparisons: Payroll and Legal Recruiting</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Side-by-side breakdowns of software, services, and recruiting models — written for buyers who want straight answers, not vendor marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '900px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        {/* Industry Comparisons */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Industry Payroll Comparisons</h2>
        <p style={{ color: '#555', marginBottom: '2rem' }}>
          Managed payroll vs. hiring in-house, by industry. Real cost breakdowns, compliance specifics, and what changes when you outsource — for your exact business type.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {INDUSTRY_COMPARISONS.map((post) => (
            <Link key={post.href} href={post.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
                height: '100%',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0, flex: 1 }}>{post.description}</p>
                <span style={{ fontSize: '0.8rem', color: '#ECAC60', fontWeight: 600 }}>{post.time} →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Payroll */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Managed Payroll Comparisons</h2>
        <p style={{ color: '#555', marginBottom: '2rem' }}>
          Comparing managed payroll against self-service platforms and other HR service models — for companies with 20–200 employees.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {PAYROLL_COMPARISONS.map((post) => (
            <Link key={post.href} href={post.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
                height: '100%',
                transition: 'box-shadow 0.15s',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0, flex: 1 }}>{post.description}</p>
                <span style={{ fontSize: '0.8rem', color: '#ECAC60', fontWeight: 600 }}>{post.time} →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Legal */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Legal Recruiting Comparisons</h2>
        <p style={{ color: '#555', marginBottom: '2rem' }}>
          Comparing attorney recruiting models for law firms with 11–200 attorneys — contingency, retained, and milestone-based placement.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {LEGAL_COMPARISONS.map((post) => (
            <Link key={post.href} href={post.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
                height: '100%',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0, flex: 1 }}>{post.description}</p>
                <span style={{ fontSize: '0.8rem', color: '#ECAC60', fontWeight: 600 }}>{post.time} →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Not sure what you actually need?</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>
            Free 15-minute discovery call. Whether it's payroll operations or attorney hiring, we'll ask about your situation and tell you honestly whether BEG is the right fit.
          </p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call →
          </a>
        </div>

      </section>
    </article>
  );
}
