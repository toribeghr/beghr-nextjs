import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iSolved People Cloud Review 2026 | Features & Pricing | BEG',
  description: 'Full iSolved People Cloud review for 2026. Modules, pricing model, implementation timeline, Connector for Claude, and how it compares to Paycom and ADP.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-technology/isolved-platform' },
  openGraph: {
    title: 'iSolved People Cloud Review 2026 | Features & Pricing | BEG',
    description: 'Full iSolved People Cloud review for 2026. Modules, pricing model, implementation timeline, Connector for Claude, and how it compares to Paycom, Payloci...',
    url: 'https://beghr.com/blog/hcm-technology/isolved-platform',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved People Cloud Review 2026 | Features & Pricing | BEG', description: 'Full iSolved People Cloud review for 2026. Modules, pricing model, implementation timeline, Connector for Claude, and how it compares to Paycom, Payloci...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    question: 'How does isolved compare to Rippling?',
    answer: 'Rippling is strong for IT-heavy companies that want device management alongside HR and payroll in one platform. isolved focuses on HR and payroll depth — compliance automation, ACA tracking, garnishment processing, and the Connector for Claude — without the IT infrastructure layer. For companies whose primary need is HR and payroll consolidation rather than IT management, isolved typically delivers more depth in those areas and faster implementation. Rippling is a better fit when device and app provisioning are a core requirement.',
  },
  {
    question: 'What drives isolved pricing and what does it cost?',
    answer: 'isolved is priced on a per employee per month model. The exact rate depends on which modules are included, company size, and contract term. BEG provides a transparent cost comparison against your current stack on the discovery call — most companies consolidating from 3+ tools find isolved is price-competitive or less expensive on a total-stack basis. Custom quotes require a brief conversation about your headcount and current tools.',
  },
  {
    question: 'What is the implementation timeline and what does BEG handle?',
    answer: 'Implementation with BEG runs 60-90 days depending on company size, number of integrations, and data migration complexity. BEG manages configuration, data migration from your prior system, benefit carrier feed setup, HR team training, a parallel payroll run to validate accuracy, and go-live support. Implementation is included in the engagement — no separate professional services invoice.',
  },
  {
    question: 'How does the Connector for Claude handle data security?',
    answer: 'The Connector for Claude operates within isolved\'s existing permission model. It can only execute actions that the authenticated user is authorized to perform within isolved. Data is not used to train external AI models. The connection uses OAuth-based authentication, and access can be revoked by the system administrator at any time. BEG walks through the technical security architecture on request.',
  },
  {
    question: 'Who supports us after implementation is complete?',
    answer: 'BEG provides ongoing support post-implementation. You have a dedicated BEG contact for platform questions, configuration changes, and compliance updates. isolved also provides its own support resources. You are not left to figure it out from a ticket queue — BEG is your first call for anything isolved-related.',
  },
  {
    question: 'How does data migration from our prior system work?',
    answer: 'BEG handles data migration as part of implementation. This includes employee records, historical payroll data (typically last three years), benefits elections, and PTO balances. The migration process includes a validation step to confirm accuracy before go-live. Most migrations complete within the 60-90 day implementation window. Complex situations — multiple acquired entities, unusual payroll configurations — may extend the timeline.',
  },
];

const modulesRows = [
  ['HR Core', 'Employee records, org chart, document management', 'Manual files, BambooHR, Rippling HR'],
  ['Payroll', 'Processing, tax filing, W-2/1099 production', 'ADP, Paychex, Gusto'],
  ['Time & Attendance', 'Clock-in/clock-out, shift management, overtime rules', 'TSheets, Homebase, Deputy'],
  ['Benefits Administration', 'Enrollment, carrier feeds, ACA tracking', 'PlanSource, Benefitfocus, manual'],
  ['Talent Acquisition', 'ATS, job board posting, candidate tracking', 'Greenhouse (SMB), JazzHR'],
  ['Onboarding', 'Paperwork, I-9, background checks, task routing', 'Manual onboarding checklists'],
  ['Performance Management', 'Reviews, goals, 360 feedback', 'Lattice (SMB), manual review cycle'],
  ['Learning Management', 'Training courses, completion tracking, certifications', 'TalentLMS, Cornerstone (SMB)'],
  ['Analytics & Reporting', 'HR dashboards, custom reports, headcount trends', 'Separate BI tools, Excel'],
  ['Connector for Claude', 'AI task execution through natural language', 'No equivalent at any competitor'],
];

const comparisonRows = [
  ['Single database architecture', 'Yes — one record per employee', 'Yes', 'Partial (some modules separate)', 'No — multiple systems integrated'],
  ['Claude AI connector (task execution)', 'Yes — GA June 2026', 'No', 'No', 'No'],
  ['Implementation model', 'BEG-managed, included', 'In-house team required', 'In-house team required', 'Professional services extra'],
  ['Mid-market sweet spot (employees)', '50-2,000', '1-1,000', '50-2,000', '50-10,000+'],
  ['AI assistant type', 'Task execution via Claude', 'Proprietary chat (answers only)', 'Basic assistant', 'ADP Lyric (answers only)'],
];

const comparisonHeaders = ['Feature', 'isolved', 'Paycom', 'Paylocity', 'ADP Workforce Now'];

const situationRows = [
  ['Currently on 1-2 integrated tools, no reconciliation pain', 'Evaluate carefully — switching costs may not be worth it'],
  ['On 3+ tools, reconciling manually every pay period', 'Strong case for isolved consolidation'],
  ['Growing fast, adding states, compliance exposure building', 'isolved handles multi-state natively with automated compliance'],
  ['Want AI task execution, not just AI chat', 'Only isolved has the Claude Connector in GA'],
  ['Need implementation managed end-to-end', 'BEG handles all of it, included'],
];

export default function IsolvedPlatformPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HCM Software &amp; HR Tech</p>
              <h1>iSolved People Cloud Review: Features, Pricing, and What to Expect in 2026</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 25, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>

        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          isolved People Cloud is a single-database HCM platform used by 7M+ employees. It is not one of the fifty HR SaaS tools competing for attention in your inbox. It is the platform that mid-market HR teams move to when they are done reconciling three systems every pay period, manually chasing down compliance updates, and explaining payroll errors to employees who noticed before HR did.
        </p>

        <p>
          This is a complete review of isolved People Cloud for 2026: what it includes, how it compares to competitors, the Connector for Claude that went generally available in June 2026, pricing model, and what implementation looks like with BEG as your authorized reseller.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What isolved People Cloud Includes
        </h2>

        <p>
          isolved is a true single-database platform — one employee record that all modules read from and write to. When an employee is hired, their record populates payroll, benefits, time, and onboarding simultaneously. There is no sync, no data transfer, no reconciliation. Here is the full module list:
        </p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Module</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What It Does</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What It Replaces</th>
              </tr>
            </thead>
            <tbody>
              {modulesRows.map(([module, what, replaces], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{module}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{what}</td>
                  <td style={{ padding: '0.65rem 0.75rem', color: '#555', fontSize: '0.9rem' }}>{replaces}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          isolved vs. Competitors
        </h2>

        <p>
          Here is how isolved compares across the dimensions that matter most for mid-market buyers:
        </p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                {comparisonHeaders.map((h, i) => (
                  <th key={i} style={{ padding: '0.75rem', textAlign: 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '0.65rem 0.75rem', fontWeight: j === 0 ? '600' : '400' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The single-database architecture is isolved&rsquo;s most durable structural advantage. Paylocity and ADP both operate with varying degrees of module separation — data moves between systems and reconciliation is part of the normal workflow. isolved eliminates that by design.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          The Connector for Claude
        </h2>

        <p>
          In June 2026, isolved launched the Connector for Claude — the first generally available AI integration in the HCM market that executes HR tasks through Claude rather than just answering questions about them.
        </p>

        <p>
          The distinction matters. Paycom has an in-platform AI chat feature. ADP has Lyric. Both answer questions: &ldquo;What is our current PTO policy?&rdquo; or &ldquo;How many employees are eligible for ACA coverage?&rdquo; Those are useful but passive. The user still has to act on the information.
        </p>

        <p>
          The isolved Connector for Claude acts. A user types a request in Claude, and the Connector executes it inside the isolved platform. Run payroll. Pull a headcount report. Update an employee record. Initiate an onboarding workflow. The platform does the work; the user provides the direction.
        </p>

        <p>
          For HR managers who are generalists — not platform power users — this removes the navigation burden entirely. For HR directors managing large teams, it accelerates execution on routine tasks without requiring a deep platform specialist on staff.
        </p>

        <p>
          No competitor has an equivalent integration in general availability as of June 2026.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          isolved Pricing
        </h2>

        <p>
          isolved is priced on a per employee per month basis. The rate varies by module selection, company size, and contract term. There is no publicly listed pricing — custom quotes require a brief conversation about headcount and current tool stack.
        </p>

        <p>
          The more relevant question for most buyers is not the isolved rate in isolation but the total stack comparison. Companies currently running three to five separate HR and payroll tools typically find that isolved is price-competitive or less expensive when the full stack is accounted for. BEG provides that comparison on the discovery call — your current tool costs versus consolidated isolved pricing — so you can make the decision with actual numbers.
        </p>

        <p>
          Most mid-market companies in the 50-500 employee range see total savings of 20-40% when consolidating from a fragmented stack onto isolved, depending on how many tools they are currently paying for.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          BEG Implementation: What Is Included
        </h2>

        <p>
          BEG is an authorized isolved reseller. Implementation is included in the engagement — there is no separate professional services invoice.
        </p>

        <p>
          The implementation process covers: configuration scoping and platform setup, data migration from your prior system (employee records, historical payroll, benefits elections, PTO balances), benefit carrier feed setup, time and attendance configuration, HR team training, a parallel payroll run to validate accuracy before cutover, and go-live support.
        </p>

        <p>
          Timeline: 60-90 days from signed agreement to first live payroll run. A single BEG point of contact manages the process throughout.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Decision Framework: Is isolved Right for You?
        </h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Your Current Situation</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {situationRows.map(([situation, recommendation], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{situation}</td>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: recommendation.startsWith('Strong') ? '600' : '400' }}>{recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Book a 15-Minute Demo with BEG</h3>
          <p style={{ marginBottom: '1.5rem' }}>See isolved People Cloud in action and get a cost comparison against your current stack. Implementation included. No separate professional services invoice.</p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}
          >
            Schedule Your Discovery Call
          </a>
        </div>

        <div className="faq" style={{ marginTop: '1rem' }}>
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{faq.question}</h3>
              <p style={{ margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/hcm-software" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>isolved HCM Software &rarr;</a>
            <a href="/blog/hcm-software/hr-automation" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>HR Automation in 2026 &rarr;</a>
            <a href="/services/hcm-software/isolved-vs-paycom" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>isolved vs. Paycom &rarr;</a>
            <a href="/services/hcm-software/isolved-vs-paylocity" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>isolved vs. Paylocity &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads HCM platform sales at Business Executive Group, an authorized isolved reseller. BEG implements isolved People Cloud with implementation included in the engagement.</p>
        </div>

      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'iSolved People Cloud Review: Features, Pricing, and What to Expect in 2026',
            description: 'Full iSolved People Cloud review for 2026. Modules, pricing model, implementation timeline, Connector for Claude, and how it compares to Paycom, Paylocity, and ADP.',
            datePublished: '2026-06-25',
            dateModified: '2026-06-27',
            author: {
              '@type': 'Person',
              name: 'Anthony Moretti',
              jobTitle: 'VP of Sales',
              worksFor: { '@type': 'Organization', name: 'Business Executive Group' },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              logo: { '@type': 'ImageObject', url: 'https://beghr.com/assets/beg-header-image.png' },
            },
            url: 'https://beghr.com/blog/hcm-software/isolved-platform',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://beghr.com/blog/hcm-software/isolved-platform',
            },
          }),
        }}
      />
    </article>
  );
}
