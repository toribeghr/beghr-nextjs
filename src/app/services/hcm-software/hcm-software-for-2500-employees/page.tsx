import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for 2,500 Employees | Instant Quote | BEG',
  description: 'HCM software for a 2,500-employee company. One connected isolved platform for enterprise-scale payroll, HR, time, and benefits with BEG-managed implementation and support.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/hcm-software-for-2500-employees' },
  openGraph: {
    title: 'HCM Software for 2,500 Employees | Instant Quote | BEG',
    description: 'HCM software for a 2,500-employee company. One connected isolved platform for enterprise-scale payroll, HR, time, and benefits with BEG-managed implementation and support.',
    url: 'https://www.beghr.com/services/hcm-software/hcm-software-for-2500-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for 2,500 Employees | Instant Quote | BEG', description: 'HCM software for a 2,500-employee company. One connected isolved platform for enterprise-scale payroll, HR, time, and benefits with BEG-managed implementation and support.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Can isolved handle an organization of 2,500 employees?',
    a: 'Yes. The isolved platform is built for large, complex organizations. More than 7 million employees are managed on the platform globally, and it handles multi-entity, multi-state, multi-location enterprise payroll with the reliability and accuracy a workforce of this size demands.',
  },
  {
    q: 'What makes HCM complexity different at 2,500 employees versus smaller organizations?',
    a: 'At 2,500 employees you are running what is effectively a complex enterprise. Multiple entities, business units, or divisions. Many states and possibly international operations. Deep benefits programs with multiple plan options and complex eligibility rules. Layered approval hierarchies. Workforce analytics that need to support board-level reporting. The stakes of a system failure or compliance gap are proportionally larger at this scale.',
  },
  {
    q: 'How does BEG approach an implementation of this size?',
    a: 'BEG manages the implementation as a structured project. Discovery covers each business unit, entity, and state in your footprint. Configuration is built to your specific approval hierarchies, pay rules, and benefits structures. Data migration handles your historical payroll, employee, and benefits records. Testing is thorough before go-live to ensure nothing is disrupted. BEG manages the whole process.',
  },
  {
    q: 'How does a single connected platform reduce risk at enterprise scale?',
    a: 'At 2,500 employees, the cost of system fragmentation is material. Reconciling separate payroll, time, and benefits tools consumes entire HR team roles. Manual handoffs between systems are where compliance gaps and payroll errors originate. ACA reporting, multi-state tax accuracy, FMLA tracking, and workforce analytics all become significantly more reliable when they draw from one source of truth instead of reconciled exports.',
  },
  {
    q: 'What ongoing support does BEG provide at this scale?',
    a: 'BEG provides dedicated ongoing support from people who know your specific configuration. At 2,500 employees, the volume and complexity of support needs is substantial. When business units restructure, new states are added, benefits change, or a regulatory update requires platform action, you work with a BEG partner who understands your environment rather than a general support queue that has never seen your configuration.',
  },
  {
    q: 'How does the Connector for Claude help a large HR team?',
    a: 'isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. For a 2,500-employee organization, the volume of routine HR operational tasks is significant. The Claude connector completes real tasks through conversation, including running payroll, pulling workforce reports, updating records, and managing compliance documentation. That operational leverage frees a large HR team for strategic priorities.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for 2,500-Employee Companies', item: 'https://www.beghr.com/services/hcm-software/hcm-software-for-2500-employees' },
  ],
};

export default function HcmFor2500Employees() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · By Company Size</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for a 2,500-Employee Company
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            At 2,500 employees your HCM platform is enterprise-grade infrastructure. Multiple entities, states, business units, complex benefits programs, and deep approval hierarchies demand a system proven at that scale. The isolved platform delivers it. BEG implements and supports it for your organization.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* Scale */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>At 2,500 Employees, HCM Is Enterprise Infrastructure</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A 2,500-employee organization is running enterprise-level HR complexity. You likely manage multiple legal entities or business divisions. Your payroll spans many states and possibly international locations. Your benefits program has multiple plan options, complex eligibility rules, and meaningful financial weight. Your approval hierarchy has layers. Your workforce analytics need to support board and executive reporting.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            At this scale, the platform you run determines whether 2,500 people trust that their pay and benefits are handled correctly. That is not a back-office question. It is an organizational trust question. And the risk of getting it wrong, whether through system fragmentation, manual error, or compliance gaps, is proportionally large.
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
              { stat: '1', label: 'Connected platform: payroll, HR, time, benefits' },
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why isolved Carries Enterprise-Scale Complexity</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved platform is a single connected system for payroll, HR, time, and benefits across large, complex organizations. It handles multi-entity and multi-state payroll, deep benefits administration with complex eligibility structures, workforce analytics and reporting, talent management, and the volume of HR transactions that a 2,500-person workforce generates on a continuous basis.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            More than 7 million employees are managed on the platform, and Forrester documented a 330% ROI. Both figures reflect a system that performs reliably at the scale where payroll mistakes carry real legal and financial consequences. For an organization of 2,500 employees, proven scale is not a nice-to-have. It is a baseline requirement.
          </p>
        </div>
      </section>

      {/* BEG */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements and Stands Behind It at Scale</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Implementing a platform across 2,500 employees is a disciplined, multi-phase project. BEG manages it: discovery across every entity, business unit, and state; configuration of payroll rules, tax settings, benefits structures, and approval hierarchies; full data migration of historical payroll, employee, and benefits records; structured testing; and a managed go-live that keeps every payroll cycle intact.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG provides dedicated ongoing support from people who know your specific configuration in depth. Restructuring, new states, benefits changes, and regulatory updates are handled by a partner who already understands your environment. At 2,500 employees, that continuity is essential.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Enterprise AI Leverage Through the Connector for Claude</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. At 2,500 employees, the volume of routine HR operations is substantial. Your HR team can run payroll, pull workforce analytics, update records, and manage compliance tasks through a Claude AI conversation, completing real actions without navigating deep menu structures.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Chatbots answer questions. isolved does the task. No other HCM platform offers that at scale today, and the operational leverage it creates for a large HR team is measurable from the first month of use.
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
          <h2 style={{ marginBottom: '0.5rem' }}>What does each employee really cost at enterprise scale?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost per person. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See What isolved Looks Like at 2,500 Employees
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We review your current environment, your entity and state footprint, and the scope of what implementation looks like for an organization your size.
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
            excerpt: 'High-ROI automation targets for enterprise HR teams managing large, complex workforces.',
            href: '/blog/hcm-software/hr-automation',
          },
          {
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should be handling automatically at enterprise scale.',
            href: '/blog/hcm-software/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
