import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New York Paid Sick Leave Explained (2026) | BEG',
  description: 'What New York paid sick leave requires, how it differs from Paid Family Leave, and the federal FMLA baseline employers must document.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained' },
  openGraph: {
    title: 'New York Paid Sick Leave Explained (2026) | BEG',
    description: 'What New York paid sick leave requires, how it differs from Paid Family Leave, and the federal FMLA baseline employers must document.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-new-york-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New York Paid Sick Leave Explained (2026) | BEG', description: 'What New York paid sick leave requires, how it differs from Paid Family Leave, and the federal FMLA baseline employers must document.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-new-york-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does New York require paid sick leave statewide?',
    answer: 'Yes. New York has a statewide paid sick leave law requiring accrual based on employer size, with specific rules for carryover and permitted uses that employers must document accurately.',
  },
  {
    question: 'Is New York Paid Sick Leave the same as New York Paid Family Leave?',
    answer: 'No. Paid sick leave covers an employee\'s own short-term illness or a family member\'s care. Paid Family Leave is a separate state program for bonding, caregiving, or military family needs.',
  },
  {
    question: 'Do New York City, Nassau, Suffolk, or Westchester have additional rules?',
    answer: 'Local wage and scheduling rules can layer on top of state requirements in some New York localities. Confirm current local ordinance status with the state labor office before finalizing policy.',
  },
  {
    question: 'Does FMLA cover the same leave as New York Paid Family Leave?',
    answer: 'No. FMLA is unpaid and federal; New York Paid Family Leave is a state-run paid benefit. Employers should keep both programs and paid sick leave clearly separated in employee materials.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting",
        "image": "https://beghr.com/blog-images/blog-hr-outsourcing-leave-new-york-paid-sick-leave-explained.webp", "headline": "New York Paid Sick Leave Explained: What Employers Must Know", "description": "What New York paid sick leave requires, how it differs from Paid Family Leave, and the federal FMLA baseline employers must document.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>New York Paid Sick Leave Explained: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-new-york-paid-sick-leave-explained.webp" alt={`An HR team reviewing employee documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>New York requires a statewide paid sick leave policy with accrual tied to employer size, and it operates a separate Paid Family Leave program, so employers need both documented correctly and kept apart in the handbook.</p>

        <p>New York is one of the more layered states for leave compliance because it runs both a statewide paid sick leave mandate and a distinct Paid Family Leave program, alongside the federal FMLA baseline. A generic multistate template that treats New York like a single-mandate state will almost certainly get the structure wrong, either by conflating sick leave with family leave or by missing one program entirely. Getting the framework right, not just printing a single number, is what keeps a New York handbook defensible.</p>

        <p>This is exactly where <a href="/services/hr-outsourcing">HR outsourcing</a> earns its keep: New York's combination of overlapping leave programs is one of the more complex setups nationally, and the gap between a generic template and a compliant policy is wide.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Building a compliant sick leave accrual framework</h2>

        <p>A compliant New York sick leave policy generally needs to address how leave accrues as an employee works, whether the accrual rate or annual cap differs based on employer size, whether unused leave carries over to the next year and whether usage can be capped even if accrual carries over, what reasons qualify for use, and what notice or documentation an employer may request. Employers should confirm the exact current figures directly with the state rather than relying on outdated summaries, since accrual rates and size-based thresholds are exactly the kind of detail that changes and that a stale policy gets wrong first.</p>

        <p>Permitted uses under New York's sick leave law typically include the employee's own illness or preventive care, care for a family member, and reasons connected to domestic violence, though the precise list should be confirmed against current guidance. Employers with locations in New York City, Nassau, Suffolk, or Westchester should also confirm whether any additional local wage or scheduling rules interact with sick leave pay calculations, since local requirements in parts of the state can differ from the rest.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid sick leave versus New York Paid Family Leave</h2>

        <p>New York Paid Family Leave is a distinct, state-run program separate from paid sick leave, and the two are frequently confused in employee-facing materials. Paid sick leave generally covers shorter absences tied to an employee's own illness or a family member's care needs. Paid Family Leave typically covers longer absences for bonding with a new child, caring for a family member with a serious health condition, or certain military family needs, and is usually funded through a payroll deduction structure separate from the employer's general sick leave obligation. Employers should confirm current benefit duration, wage replacement structure, and eligibility rules directly with the state rather than assuming either program covers what the other does, and should keep sick leave and Paid Family Leave clearly separated as two distinct sections in the handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The federal Family and Medical Leave Act provides unpaid, job-protected leave to eligible employees at covered employers, based on headcount and hours worked thresholds. FMLA does not replace New York's paid sick leave requirement or its Paid Family Leave program, and it runs on its own separate eligibility rules. It guarantees job restoration for qualifying medical and family reasons but provides no wage replacement itself. More detail is available from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a>. Anything not addressed here should be verified with the state labor office, and employers can start with the <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Accrual thresholds, employer-size tiers, and Paid Family Leave benefit rules can all be updated by regulators, and a policy written once and never revisited is one of the most common compliance gaps for growing New York employers. BEG's certified HR professionals monitor New York's paid sick leave and Paid Family Leave requirements and update policy language as rules change, powered by isolved, while blending in talent acquisition and direct hire support as the team grows. See the <a href="/services/hr-outsourcing/new-york">New York HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For comparison, see how <a href="/blog/hr-outsourcing/leave/rhode-island-paid-sick-leave-explained">Rhode Island paid sick leave</a> policy is structured alongside its own paid family leave program.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>New York status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'Mandated, accrual tied to employer size', 'Build a policy covering accrual, carryover, permitted uses, and documentation'],
                ['New York Paid Family Leave', 'Separate state program', 'Document distinctly from sick leave; confirm current benefit rules'],
                ['Local wage/scheduling rules', 'Vary by locality (e.g., NYC, Nassau, Suffolk, Westchester)', 'Confirm current local ordinance status before finalizing pay-related policy'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on employer headcount and employee eligibility'],
                ['Policy documentation', 'Required for defensibility', 'Keep sick leave, Paid Family Leave, and FMLA clearly separated in the handbook'],
              ].map(([type, status, action], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{type}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{status}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#666' }}>General information, not legal advice. For anything not covered above, confirm current requirements with your state labor office: <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">DOL state labor office contacts</a>.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Leave Policy That Stays Current, Automatically.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Certified HR professionals build and maintain it for a fraction of an in-house hire that can run $60K to $100K a year.</p>
          <p style={{ marginBottom: '1.25rem', color: '#555', lineHeight: 1.7 }}>A new hire in a new state changes payroll too. BEG pairs this with <a href="/services/managed-payroll">managed payroll</a> so the written policy and the actual paycheck stay in sync.</p>
            <PricingCta service="hr-outsourcing" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads HR outsourcing strategy at Business Executive Group, a national HR outsourcing firm serving employers across every state. BEG HR outsourcing is powered by isolved, with certified HR professionals building and maintaining state-correct leave policy as laws change.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does New York require paid sick leave statewide?","acceptedAnswer":{"@type":"Answer","text":"Yes. New York has a statewide paid sick leave law requiring accrual based on employer size, with specific rules for carryover and permitted uses that employers must document accurately."}},{"@type":"Question","name":"Is New York Paid Sick Leave the same as New York Paid Family Leave?","acceptedAnswer":{"@type":"Answer","text":"No. Paid sick leave covers an employee's own short-term illness or a family member's care. Paid Family Leave is a separate state program for bonding, caregiving, or military family needs."}},{"@type":"Question","name":"Do New York City, Nassau, Suffolk, or Westchester have additional rules?","acceptedAnswer":{"@type":"Answer","text":"Local wage and scheduling rules can layer on top of state requirements in some New York localities. Confirm current local ordinance status with the state labor office before finalizing policy."}},{"@type":"Question","name":"Does FMLA cover the same leave as New York Paid Family Leave?","acceptedAnswer":{"@type":"Answer","text":"No. FMLA is unpaid and federal; New York Paid Family Leave is a state-run paid benefit. Employers should keep both programs and paid sick leave clearly separated in employee materials."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"New York Paid Sick Leave Explained: What Employers Must Know","item":"https://www.beghr.com/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Rhode Island Paid Sick Leave Explained", excerpt: "What Rhode Island paid sick leave and paid family leave require in 2026.", href: "/blog/hr-outsourcing/leave/rhode-island-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "New Mexico Paid Sick Leave Explained", excerpt: "What New Mexico paid sick leave requires and local ordinance context for 2026.", href: "/blog/hr-outsourcing/leave/new-mexico-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Oregon Paid Sick Leave Explained", excerpt: "What Oregon paid sick leave and paid family and medical leave require in 2026.", href: "/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
