import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iSolved HCM Platform Review: Modules, Pricing & Fit (2026)',
  description: 'Full isolved HCM platform review: payroll, benefits, time tracking, talent management, and Connector for Claude. Who isolved fits and how BEG manages it.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-technology/isolved-platform' },
  openGraph: {
    title: "iSolved HCM Platform Review: Modules, Pricing, and Who It's For",
    description: 'Full isolved HCM platform review. Payroll, benefits, time and attendance, talent management, and the Connector for Claude. Who isolved fits best and how...',
    url: 'https://beghr.com/blog/hcm-technology/isolved-platform',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: "iSolved HCM Platform Review: Modules, Pricing, and Who It's For", description: 'Full isolved HCM platform review. Payroll, benefits, time and attendance, talent management, and the Connector for Claude. Who isolved fits best and how...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    question: 'What is isolved and who is it built for?',
    answer: 'isolved is a unified HCM (Human Capital Management) platform built for mid-market companies -- typically 20 to 500 employees -- that need more than a basic payroll processor but do not require the complexity or cost of enterprise platforms like Workday or Oracle. isolved consolidates payroll processing, benefits administration, time and attendance, talent management, and HR compliance into a single system. It is designed for companies that currently manage payroll and HR across multiple disconnected tools and want to eliminate the manual data transfer and reconciliation that creates between those systems.',
  },
  {
    question: 'What modules does isolved include?',
    answer: 'isolved\'s core platform includes: payroll processing (federal and multi-state), benefits administration with carrier connectivity, time and attendance with scheduling, talent acquisition (applicant tracking and onboarding), performance management, learning management, HR compliance (ACA tracking, COBRA administration, FMLA tracking), and employee self-service via web and mobile. The platform is modular -- companies can implement the full suite or start with payroll and add modules as needs grow. BEG configures and manages the platform for clients as part of the managed payroll engagement.',
  },
  {
    question: 'How does isolved compare to ADP and Paychex?',
    answer: 'ADP and Paychex are both larger platforms with more name recognition and broader enterprise reach. isolved competes on mid-market fit, all-in-one integration depth, and total cost. ADP and Paychex both add fees for modules and services that isolved includes in the core platform. Both ADP and Paychex also have tiered support models where the quality of service correlates with spend tier -- isolved clients working with BEG get dedicated managed service regardless of headcount. For companies in the 20–300 employee range, isolved consistently delivers comparable or superior functionality at lower total cost.',
  },
  {
    question: 'What is isolved Connector for Claude?',
    answer: 'isolved Connector for Claude is a generally available integration between isolved\'s HCM platform and Claude, Anthropic\'s AI assistant. The integration allows HR administrators to complete tasks within isolved using natural language instructions -- running payroll, updating employee records, pulling compliance reports, generating analytics -- rather than navigating platform menus. Competitors connect to AI tools for Q&A; isolved Connector for Claude completes the work. BEG is an authorized isolved reseller; clients using BEG managed payroll on isolved have access to this integration.',
  },
  {
    question: 'Does switching to isolved require migrating from our current payroll system?',
    answer: 'Moving to isolved involves a data migration from your current system -- employee records, pay history, tax registrations, benefits elections. BEG manages this migration process as part of the implementation. Managed payroll activation typically takes 3–5 business days. Full isolved platform migration (data from a prior system, benefits carrier connectivity, integrations) adds 2–4 weeks depending on complexity. BEG also offers managed payroll within your existing system (ADP, Paychex, QuickBooks Payroll) if you prefer not to migrate -- the migration to isolved is a separate decision from engaging BEG for managed payroll.',
  },
  {
    question: 'How does BEG fit into the isolved platform?',
    answer: 'BEG is an authorized isolved reseller. Clients who want isolved managed under BEG\'s service model get the platform configured and operated by BEG -- payroll processing, compliance monitoring, tax filing, benefits administration coordination, employee self-service setup, and ongoing platform management. The client\'s payment relationship is with BEG at $25–$45 PEPM all-inclusive. BEG handles the isolved relationship and platform management so the client interacts with BEG, not with isolved support queues.',
  },
];

export default function iSolvedPlatformPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "iSolved HCM Platform Review: Modules, Pricing & Fit (2026)", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/hcm-technology/isolved-platform"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-single">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HCM Software &amp; HR Tech</p>
              <h1>iSolved HCM Platform Review: Modules, Pricing, and Who It&apos;s Built For (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 25, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Most growing companies reach the same inflection point somewhere between 25 and 75 employees: the payroll processor they started with no longer fits, benefits administration has outgrown a spreadsheet, and HR is spending more time reconciling data between disconnected systems than doing actual HR work.</p>

        <p>isolved is the HCM platform designed for this moment. It consolidates payroll, benefits, time and attendance, and talent management into a single system -- eliminating the manual data transfer and reconciliation that creates errors and absorbs HR time in multi-tool environments.</p>

        <p>This review covers what isolved includes, how it compares to the major alternatives, who it fits best, and how BEG manages it as an authorized reseller.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>isolved Platform: Full Module Overview</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Module</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What It Covers</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Key Capability</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Payroll Processing', 'Federal and multi-state payroll, tax filing, direct deposit', 'Automated calculation, garnishment processing, off-cycle payroll'],
                ['Benefits Administration', 'Health, dental, vision, life, 401K', 'Employee self-service enrollment, carrier EDI connectivity, ACA tracking'],
                ['Time &amp; Attendance', 'Timekeeping, scheduling, overtime tracking', 'Clock-in/out integration, shift scheduling, payroll sync'],
                ['Talent Acquisition', 'Applicant tracking, job posting, offer management', 'Career page, interview scheduling, background check integration'],
                ['Onboarding', 'New hire workflows, document collection, I-9/E-Verify', 'Automated task sequences, e-signatures, day-one readiness'],
                ['Performance Management', 'Review cycles, goals, continuous feedback', 'Configurable review templates, manager dashboards'],
                ['Learning Management', 'Training assignments, compliance training, certificates', 'Course library, completion tracking, required training alerts'],
                ['HR Compliance', 'ACA, COBRA, FMLA, state compliance', 'Measurement period tracking, notice generation, reporting'],
                ['Employee Self-Service', 'Mobile and web portal for employees', 'Paystubs, W-2s, benefits elections, PTO requests, direct deposit updates'],
                ['Connector for Claude', 'AI task execution within isolved via natural language', 'Complete payroll runs, update records, pull reports via Claude'],
              ].map(([mod, covers, cap], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: mod }} />
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: covers }} />
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.9rem', color: '#555' }} dangerouslySetInnerHTML={{ __html: cap }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>isolved vs. Competitors: Mid-Market HCM Comparison</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Factor</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>isolved</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>ADP Workforce Now</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Paychex Flex</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Gusto</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Best for company size', '20–500 employees', '100–5,000+', '50–500+', '1–100 employees'],
                ['Unified platform', 'Yes -- all-in-one', 'Yes, with add-ons', 'Yes, with add-ons', 'Limited'],
                ['AI integration', 'Connector for Claude (GA)', 'ADP Assist (beta)', 'Limited', 'None announced'],
                ['Multi-state payroll', 'All 50 states', 'All 50 states', 'All 50 states', 'All 50 states'],
                ['Managed service option', 'Yes (via BEG)', 'ADP TotalSource (PEO)', 'HR outsourcing tiers', 'No'],
                ['Pricing model', '$25–$45 PEPM via BEG', 'Quoted -- $20–$60+ PEPM', 'Quoted -- tiered', '$6–$12 PEPM base + add-ons'],
                ['Contract terms', 'Month-to-month (BEG)', 'Annual', 'Annual', 'Monthly'],
                ['Implementation', 'Managed by BEG', 'Self-guided or paid impl.', 'Self-guided or paid impl.', 'Self-guided'],
              ].map(([factor, isolved, adp, paychex, gusto], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{factor}</td>
                  <td style={{ padding: '0.65rem 0.75rem', color: '#2a7a2a', fontWeight: '600' }}>{isolved}</td>
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.9rem' }}>{adp}</td>
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.9rem' }}>{paychex}</td>
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.9rem' }}>{gusto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>isolved Connector for Claude: What It Actually Does</h2>

        <p>isolved launched its Connector for Claude in June 2026, making it generally available in Claude's connector directory. The integration addresses a limitation of AI-assisted HR tools that previously stopped at answering questions.</p>

        <p>The distinction matters in practice: a chatbot that answers "What is the overtime threshold in California?" gives you information. isolved Connector for Claude can run the payroll cycle, update an employee's direct deposit, pull a compliance report, or adjust a benefits election -- directly within isolved, triggered by a natural language instruction. The work happens in the platform, not in the conversation window.</p>

        <p>For HR teams using isolved, this means exception handling, one-off requests, and reporting tasks that previously required navigating platform menus can be completed conversationally. BEG clients on isolved have access to this integration as part of the platform configuration.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>isolved, Managed by BEG at $25–$45 PEPM.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Full platform -- payroll, benefits, time, talent, Connector for Claude -- configured and managed by BEG. No platform management on your team's plate. Book a 15-minute call to see what your company size costs.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: '#ECAC60', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: '600', textDecoration: 'none' }}>Schedule Your Discovery Call</a>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>FAQ: isolved HCM Platform</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/hcm-software" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>HCM Software Services &rarr;</a>
            <a href="/blog/hcm-technology/hr-automation" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>HR Automation Guide &rarr;</a>
            <a href="/blog/compare/managed-payroll-vs-adp" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>BEG vs. ADP &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads HCM platform and managed payroll solutions at Business Executive Group. BEG is an authorized isolved reseller -- configuring, implementing, and managing the full isolved platform for clients at $25–$45 PEPM all-inclusive.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BlogPosting',
        headline: 'iSolved HCM Platform Review: Modules, Pricing, and Who It\'s Built For (2026)',
        description: 'Full isolved HCM platform review -- modules, competitor comparison, Connector for Claude, and how BEG manages isolved at $25–$45 PEPM.',
        datePublished: '2026-06-25', dateModified: '2026-06-27',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', logo: { '@type': 'ImageObject', url: 'https://beghr.com/assets/beg-header-image.png' } },
        url: 'https://beghr.com/blog/hcm-technology/isolved-platform',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://beghr.com/blog/hcm-technology/isolved-platform' },
      }) }} />
    </article>
  );
}
