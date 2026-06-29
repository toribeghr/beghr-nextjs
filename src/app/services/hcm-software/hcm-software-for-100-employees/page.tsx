import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'HCM Software for a 100-Employee Company | BEG',
  description: 'HCM software for a 100-employee company. See why a single connected isolved platform with BEG-managed setup and support fits firms scaling past first systems.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/hcm-software-for-100-employees' },
  openGraph: {
    title: 'HCM Software for a 100-Employee Company | BEG',
    description: 'HCM software for a 100-employee company. See why a single connected isolved platform with BEG-managed setup and support fits firms scaling past first systems.',
    url: 'https://www.beghr.com/services/hcm-software/hcm-software-for-100-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software for a 100-Employee Company | BEG', description: 'HCM software for a 100-employee company. See why a single connected isolved platform with BEG-managed setup and support fits firms scaling past first systems.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is different about HR at 100 employees versus 50?',
    a: 'At 100 people HR becomes a function rather than a side task. You usually have at least one dedicated HR person, more managers approving time and requests, and enough headcount that small process gaps multiply quickly. A connected platform turns that complexity into a repeatable system.',
  },
  {
    q: 'We already have a payroll provider. Why switch at 100?',
    a: 'Many 100-employee companies are running payroll in one tool, benefits in another, and time tracking in a third. The cost of stitching those together shows up as double entry, reconciliation, and reporting headaches. The isolved platform consolidates them into one connected platform, and BEG manages the move.',
  },
  {
    q: 'How long does implementation take for a company this size?',
    a: 'Timelines vary with the number of modules and the state of your current data, so BEG scopes a realistic plan up front rather than quoting a generic number. BEG handles configuration and migration so your team is not running the project alone.',
  },
  {
    q: 'Can isolved handle multi-state payroll and more complex benefits?',
    a: 'Yes. The isolved platform is built for growing, more complex companies, including multi-state payroll and deeper benefits administration. That breadth is one of the main reasons firms choose it as they pass 100 employees.',
  },
  {
    q: 'Will this reduce the load on our HR team?',
    a: 'That is the goal. By consolidating systems and automating routine work, your HR person or small team spends less time on data entry and more on people. BEG also stays on as a support partner so they are never stuck alone with a complex platform.',
  },
  {
    q: 'How does the Connector for Claude help at this size?',
    a: 'isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. At 100 employees, the volume of routine tasks is high enough that completing them through conversation, rather than clicking through screens, frees up meaningful time.',
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
    { '@type': 'ListItem', position: 3, name: 'HCM Software for a 100-Employee Company', item: 'https://www.beghr.com/services/hcm-software/hcm-software-for-100-employees' },
  ],
};

export default function HcmFor100EmployeesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · By Company Size</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for a 100-Employee Company
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            At 100 employees, HR is a real function and the patchwork of separate tools you started with begins to cost you. The isolved platform consolidates payroll, HR, time, and benefits onto one connected platform, with BEG managing the setup and support.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* The 100 inflection */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The 100-Employee Inflection Point</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            At 100 employees, the systems that carried you to this point start to strain. The tools you adopted at 20 or 40 people were chosen for a smaller, simpler company, and they were the right call then. Now you likely have a dedicated HR person, several managers approving time and requests, and a benefits program that is no longer trivial to administer. Every workaround you tolerated at half this size now repeats across twice as many people.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The pattern is almost always the same. Payroll lives in one system, benefits in another, and time tracking in a third. They do not share data cleanly, so someone spends hours reconciling them, and reporting to leadership becomes a manual project. The fix is not another point tool. It is a single connected platform that ends the stitching once and for all.
          </p>
        </div>
      </section>

      {/* Why isolved */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why isolved Fits at 100 Employees</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved is built for growing, more complex companies, which is exactly what a 100-employee firm has become. It brings payroll, HR, time, and benefits onto one connected platform, so the reconciliation work disappears and your data tells a single, consistent story. For multi-state payroll, deeper benefits administration, and richer reporting, that breadth matters.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            With more than 7 million employees managed on isolved and a Forrester-documented 330% ROI, the platform has the scale and track record to support you not just at 100 people but through your next phase of growth. You will not need to rip and replace again at 200 or 300.
          </p>
        </div>
      </section>

      {/* BEG manages */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Manages the Move and Stays On</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Consolidating three systems into one sounds daunting, and that is precisely where BEG comes in. BEG implements isolved, configures it to your policies and approval flows, and migrates your payroll history, employee records, and benefits data so the transition is structured rather than risky. Your HR person guides the project instead of running it alone.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG remains your support partner. When you add a state, change a benefits carrier, or face a new compliance requirement, you reach a team that already knows your configuration. That continuity is what keeps a 100-person company from being held hostage by its own systems.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>AI That Completes Real HR Tasks</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Rather than simply answering questions, it completes real HR tasks through conversation, including running payroll, pulling reports, and updating employee data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            At 100 employees, the sheer volume of routine work is high. Moving that work forward by describing what you need, instead of clicking through screen after screen, gives your HR function real leverage. It is available today through BEG.
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
            See What isolved Looks Like at 100 Employees
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will map your current systems, scope the consolidation, and show you what isolved plus BEG looks like for a company your size.
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
