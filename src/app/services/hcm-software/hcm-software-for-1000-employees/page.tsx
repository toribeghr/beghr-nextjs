import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for 1,000-Employee Companies | BEG',
  description: 'HCM software for a 1,000-employee company. One connected isolved platform for payroll, HR, time, and benefits at scale, with BEG-managed implementation and dedicated support.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/hcm-software-for-1000-employees' },
  openGraph: {
    title: 'HCM Software for 1,000-Employee Companies | BEG',
    description: 'HCM software for a 1,000-employee company. One connected isolved platform for payroll, HR, time, and benefits at scale, with BEG-managed implementation and dedicated support.',
    url: 'https://www.beghr.com/services/hcm-software/hcm-software-for-1000-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for 1,000-Employee Companies | BEG', description: 'HCM software for a 1,000-employee company. One connected isolved platform for payroll, HR, time, and benefits at scale, with BEG-managed implementation and dedicated support.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What makes HCM at 1,000 employees fundamentally different from smaller companies?',
    a: 'At 1,000 employees you are running complex organizational infrastructure. Multiple states or business units, layered approval hierarchies, varied pay rules for different employee groups, union or non-union workforce segments, and a benefits program with significant financial weight all converge. The platform you run is no longer a back-office tool. It is the system that the entire workforce depends on every pay cycle.',
  },
  {
    q: 'Is isolved capable of handling an organization of this size?',
    a: 'Yes. More than 7 million employees are managed on the isolved platform. It is built for growing, complex organizations and handles multi-location, multi-state, multi-entity payroll with the reliability that a 1,000-person workforce requires. Forrester documented a 330% ROI for isolved clients, and that return is particularly pronounced at scale.',
  },
  {
    q: 'How does a single connected platform reduce compliance risk at 1,000 employees?',
    a: 'When payroll, time, benefits, and HR data all live in one system, you eliminate the seams where compliance gaps typically appear. ACA reporting, multi-state tax accuracy, FMLA tracking, and FLSA overtime calculations all draw from one source of truth rather than reconciled exports from separate tools. At 1,000 employees, even a small error rate in manual processes carries meaningful legal and financial exposure.',
  },
  {
    q: 'What does BEG handle for an organization at this scale?',
    a: 'BEG manages the full implementation, including discovery, configuration across all business units and states, data migration of historical payroll and employee records, testing, and go-live. After implementation, BEG provides dedicated ongoing support from people who know your specific configuration rather than a general support queue.',
  },
  {
    q: 'Can the platform support our executive and board reporting requirements?',
    a: 'Yes. The isolved platform generates labor cost analysis, headcount reporting, turnover analytics, and benefits utilization data from a single consolidated source. At 1,000 employees, accurate workforce reporting is a board-level concern, and a single source of truth makes that reporting reliable and defensible.',
  },
  {
    q: 'How does the Connector for Claude help at this scale?',
    a: 'isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. At 1,000 employees the volume of routine HR tasks is substantial. HR teams at this scale spend significant time on operational requests that the Claude connector can complete through conversation, freeing experienced professionals for strategic work.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for 1,000-Employee Companies', item: 'https://www.beghr.com/services/hcm-software/hcm-software-for-1000-employees' },
  ],
};

export default function HcmFor1000Employees() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · By Company Size</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for a 1,000-Employee Company
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            At 1,000 employees your HCM platform is mission-critical infrastructure. Multiple locations, business units, states, approval hierarchies, and a benefits program with real financial weight leave no room for disconnected systems. The isolved platform delivers one connected platform for payroll, HR, time, and benefits. BEG implements and supports it at the scale your organization demands.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Scale stakes */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>At 1,000 Employees, Your Platform Is Organizational Infrastructure</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A 1,000-employee organization operates at a scale where the HCM platform is no longer a back-office convenience. It is the system that determines whether 1,000 people are paid accurately, whether benefits are administered correctly across complex eligibility rules, whether time records are clean enough to satisfy an audit, and whether compliance reporting is trustworthy enough to present to a board or a regulator.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            At this scale, the cost of system fragmentation compounds rapidly. Reconciling separate payroll, time, and benefits platforms consumes significant HR bandwidth. Manual handoffs between systems are where errors and compliance gaps live. A single connected platform is not a preference at 1,000 employees. It is a risk management decision.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { stat: '7M+', label: 'Employees managed on isolved globally' },
              { stat: '330%', label: 'ROI documented by Forrester for isolved clients' },
              { stat: '1', label: 'Connected platform for payroll, HR, time, and benefits' },
              { stat: 'BEG', label: 'Implements, configures, and supports your platform' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.5rem', lineHeight: '1.4' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why isolved */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why isolved Carries a 1,000-Person Workforce</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved platform is built for growing, complex organizations and is proven at a scale well beyond 1,000 employees. By keeping payroll, HR, time, and benefits on one connected platform, it removes the seams where errors and compliance gaps live. Your data becomes a single source of truth, which is the foundation for trustworthy reporting, accurate labor cost analysis, and clean regulatory compliance at the size your organization operates.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The platform handles multi-location, multi-state, multi-entity payroll, complex benefits administration, layered approval structures, and the volume of HR transactions that a 1,000-person workforce generates every month. Choosing a platform proven at this scale, rather than one that will struggle as you grow, is a sound decision for any organization of this size.
          </p>
        </div>
      </section>

      {/* BEG */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements It and Stands Behind It</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Deploying a platform across 1,000 employees demands a disciplined, structured partner. BEG manages the full implementation: discovery across all business units, configuration of payroll rules, state tax settings, approval hierarchies, and benefits structures, migration of historical payroll, employee, and benefits data, parallel testing, and a managed go-live that does not interrupt a single payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG provides dedicated ongoing support from people who know your specific configuration in detail. When a business unit changes structure, a new state is added to your footprint, or a regulatory change requires platform updates, you work with a partner who already understands your environment. For an organization of this size, that continuity matters.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI Leverage Across a Large Workforce</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Rather than only answering questions, it completes real HR tasks through conversation: running payroll, pulling workforce reports, updating employee records, and managing compliance documentation.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Across a 1,000-person workforce, routine HR operational tasks represent a significant and constant workload. Letting your HR team complete those tasks by describing what they need frees experienced professionals for strategic priorities. That capability is available today through isolved and BEG.
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

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does each employee really cost at this scale?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost per person. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See What isolved Looks Like at 1,000 Employees
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We review your current environment, scope the implementation across your business units and states, and show you what isolved plus BEG looks like for an organization your size.
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
            excerpt: 'Payroll, onboarding, benefits enrollment, and compliance reporting are high-ROI automation targets. Here is what to prioritize at scale.',
            href: '/blog/hcm-software/hr-automation',
          },
          {
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should be handling automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
