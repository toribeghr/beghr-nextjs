import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Switch From Workday to isolved | BEG Manages the Move',
  description: 'Workday is enterprise software. If you are a mid-market company paying enterprise prices, switching to isolved with BEG gives you a purpose-built platform at the right scale.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/switch-from-workday-to-isolved' },
  openGraph: {
    title: 'Switch From Workday to isolved | BEG Manages the Move',
    description: 'Workday is enterprise software. Mid-market companies switching to isolved get a purpose-built platform at the right scale. BEG manages the full migration.',
    url: 'https://www.beghr.com/services/hcm-software/switch-from-workday-to-isolved',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website' as const,
  },
  twitter: { card: 'summary_large_image' as const, title: 'Switch From Workday to isolved | BEG Manages the Move', description: 'Mid-market companies switching from Workday to isolved get a purpose-built platform at the right scale.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'Why do mid-market companies switch from Workday to isolved?',
    a: 'Workday is a powerful enterprise platform, but it is priced and designed for large organizations. Mid-market companies often find themselves over-paying for capability they do not use, under-served by support designed for enterprise accounts, and running a system that is genuinely difficult to administer with a lean HR team.',
  },
  {
    q: 'Will I lose Workday data and history when switching?',
    a: 'No. BEG migrates your payroll history, employee records, and benefits information from Workday into isolved as part of implementation. Every record is validated before go-live.',
  },
  {
    q: 'How long does a Workday to isolved migration take?',
    a: 'Most mid-market clients complete the move in 60 to 90 days. BEG plans the timeline around your pay calendar and your Workday contract renewal so you are not paying for both platforms longer than necessary.',
  },
  {
    q: 'Does isolved cover everything a mid-market company needs from Workday?',
    a: 'For mid-market HR, payroll, time, benefits, and talent management, yes. The isolved platform covers all of the capabilities a growing company actually uses, without the enterprise-scale modules and overhead a 500-person firm does not need.',
  },
  {
    q: 'What AI capabilities does isolved offer?',
    a: 'The isolved Connector for Claude, generally available since June 2026, lets your team complete real HR tasks through Claude AI conversation. Run payroll, pull reports, update employee records, and handle open enrollment by describing what you need. Workday has AI features, but no equivalent generally available task-completing connector for Claude.',
  },
  {
    q: 'Who handles support after we leave Workday?',
    a: 'BEG does. You get a named contact who supports, optimizes, and maintains your isolved platform year-round. One contact for the entire platform, not an enterprise support organization routing tickets.',
  },
];

export default function SwitchFromWorkdayPage() {
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
      { '@type': 'ListItem', position: 3, name: 'Switch From Workday to isolved', item: 'https://www.beghr.com/services/hcm-software/switch-from-workday-to-isolved' },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Switch From Workday</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            How to Switch From Workday to isolved
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Workday is genuinely impressive software for the organizations it was built for. A 5,000-person enterprise with a large HRIT team gets real value from it. A 150-person mid-market company often gets enterprise complexity, enterprise pricing, and support designed for clients ten times their size. The isolved platform is purpose-built for the mid-market, and BEG manages every step of the transition.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* The mismatch */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Why Workday Can Be the Wrong Fit for Mid-Market</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { head: 'Enterprise pricing for mid-market budgets', body: 'Workday licensing is priced for large enterprises. Mid-market companies pay for the full platform regardless of which capabilities they actually use.' },
              { head: 'Implementation timelines that stretch', body: 'Workday implementations for mid-market clients can run 6 to 12 months and often require external consultants. That is overhead you should not carry.' },
              { head: 'Administration that requires specialists', body: 'Day-to-day Workday administration typically requires dedicated Workday-trained administrators. A lean HR team should not need a platform specialist just to run payroll.' },
              { head: 'No mid-market AI task connector', body: 'Workday has AI features, but none equivalent to the isolved Connector for Claude, which completes real HR tasks through conversation. That capability is available through BEG today.' },
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
            The isolved platform covers payroll, HR, time, benefits, onboarding, and talent management in one connected system. Built for companies between 50 and 500 employees. Priced for that market, not for an enterprise.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The isolved Connector for Claude, generally available since June 2026, lets your HR team complete actual tasks through Claude AI. Run payroll, pull a headcount report, update an employee record, manage an open enrollment cycle. No Workday specialist required. Forrester documented a 330% ROI.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            BEG implements, migrates, configures, and supports the platform. You work with one named contact who knows your setup, year-round. No consultant engagement. No implementation firm.
          </p>
        </div>
      </section>

      {/* How BEG manages the move */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1.5rem' }}>How BEG Manages the Transition</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Review and right-sizing', body: 'BEG reviews what you are actually using in Workday, maps it to isolved modules, and shows you where the configuration fits. You see the comparison before you commit.' },
              { num: '02', title: 'Data migration', body: 'We extract payroll history and employee records from Workday and migrate them into isolved. Every record is validated before the first live payroll run.' },
              { num: '03', title: 'Configuration and parallel testing', body: 'BEG configures isolved for your pay rules, benefits, and HR workflows and runs parallel testing to confirm accuracy before go-live.' },
              { num: '04', title: 'Go-live and year-round support', body: 'BEG manages go-live and supports the platform after. One contact. No consultant needed after day one.' },
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
            Ready to right-size from Workday?
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. BEG will review your Workday setup, run a cost comparison, and give you a clear migration plan at no obligation.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded cost. Free, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />

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
