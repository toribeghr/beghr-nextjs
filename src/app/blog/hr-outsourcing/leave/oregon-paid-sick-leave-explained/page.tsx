import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oregon Paid Sick Leave Explained (2026) | BEG',
  description: 'What Oregon paid sick leave requires, how it differs from Paid Leave Oregon, and the federal FMLA baseline employers must document.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained' },
  openGraph: {
    title: 'Oregon Paid Sick Leave Explained (2026) | BEG',
    description: 'What Oregon paid sick leave requires, how it differs from Paid Leave Oregon, and the federal FMLA baseline employers must document.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-oregon-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Oregon Paid Sick Leave Explained (2026) | BEG', description: 'What Oregon paid sick leave requires, how it differs from Paid Leave Oregon, and the federal FMLA baseline employers must document.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-oregon-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does Oregon require paid sick leave statewide?',
    answer: 'Yes. Oregon has a statewide paid sick leave law requiring accrual, carryover, and specific permitted uses that must be documented accurately in the employee handbook.',
  },
  {
    question: 'Is Oregon paid sick leave the same as Paid Leave Oregon?',
    answer: 'No. Paid sick leave covers shorter-term illness or family care. Paid Leave Oregon is a separate state-run program for bonding, serious health conditions, or safe leave needs.',
  },
  {
    question: 'Does the Portland metro area have additional wage rules that affect sick leave?',
    answer: 'Portland metro has a history of a higher regional minimum wage than the rest of the state, which can affect sick leave pay calculations. Confirm current rates with the state labor office.',
  },
  {
    question: 'Does FMLA replace Paid Leave Oregon?',
    answer: 'No. FMLA is unpaid and federal, while Paid Leave Oregon is a state-run paid benefit program. Employers should track both programs separately alongside statewide paid sick leave.',
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
        "image": "https://beghr.com/blog-images/blog-hr-outsourcing-leave-oregon-paid-sick-leave-explained.webp", "headline": "Oregon Paid Sick Leave Explained: What Employers Must Know", "description": "What Oregon paid sick leave requires, how it differs from Paid Leave Oregon, and the federal FMLA baseline employers must document.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Oregon Paid Sick Leave Explained: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-oregon-paid-sick-leave-explained.webp" alt={`An HR team reviewing employee documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Oregon requires a statewide paid sick leave policy covering accrual, carryover, and permitted uses, and it also runs Paid Leave Oregon, a separate state program employers must document apart from sick leave.</p>

        <p>Oregon layers a statewide paid sick leave mandate on top of Paid Leave Oregon, its own state-run paid family and medical leave program, alongside the federal FMLA baseline. Employers who treat these as one combined benefit, or who borrow handbook language from a state with only a single leave mandate, tend to miss the details that separate the two programs. A compliant Oregon policy needs to get the structure right first, then keep the current figures accurate as they change.</p>

        <p>This is exactly where <a href="/services/hr-outsourcing">HR outsourcing</a> earns its keep: Oregon's combination of statewide sick leave and a dedicated paid leave program is more complex than a single-mandate state, and a generic template rarely captures both correctly.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Building a compliant sick leave accrual framework</h2>

        <p>A compliant Oregon sick leave policy generally needs to address how leave accrues as an employee works, whether accrual is capped at a certain point in the year, whether unused leave carries over to the following year and whether a cap applies to how much carries over, what reasons qualify for use, and what documentation an employer may request for longer absences. Employers should confirm the exact current figures directly with the state rather than relying on outdated summaries, since accrual rates and caps are exactly the kind of detail that changes and that a stale policy gets wrong first.</p>

        <p>Permitted uses typically include the employee's own illness or preventive care, care for a family member, and reasons connected to domestic violence or public health closures, though the precise list should be confirmed against current guidance. Employers with locations in the Portland metro area should also confirm current regional wage rates, since Portland metro has a history of a higher minimum wage than the rest of the state, which can affect how sick leave pay is calculated for hourly employees.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid sick leave versus Paid Leave Oregon</h2>

        <p>Paid Leave Oregon is a separate, state-run paid family and medical leave program distinct from statewide paid sick leave, and the two are frequently confused in employee-facing materials. Paid sick leave generally covers shorter absences tied to an employee's own illness or a family member's care needs. Paid Leave Oregon typically covers longer absences for bonding with a new child, a serious health condition, or safe leave needs connected to domestic violence or harassment, and is funded through a payroll contribution structure separate from the employer's general sick leave obligation. Employers should confirm current benefit duration, contribution structure, and eligibility rules directly with the state rather than assuming either program covers what the other does, and should keep sick leave and Paid Leave Oregon clearly separated as two distinct sections in the handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The federal Family and Medical Leave Act provides unpaid, job-protected leave to eligible employees at covered employers, based on headcount and hours worked thresholds. FMLA does not replace Oregon's sick leave requirement or Paid Leave Oregon, and it runs on its own separate eligibility rules. It guarantees job restoration for qualifying medical and family reasons but provides no wage replacement on its own. More detail is available from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a>. Anything not addressed here should be verified with the state labor office, and employers can start with the <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Accrual rules, caps, and Paid Leave Oregon contribution and benefit rules can all be updated by regulators, and a policy written once and never revisited is one of the most common compliance gaps for growing Oregon employers. BEG's certified HR professionals monitor Oregon's paid sick leave and Paid Leave Oregon requirements and update policy language as rules change, powered by isolved, while blending in talent acquisition and direct hire support as the team grows. See the <a href="/services/hr-outsourcing/oregon">Oregon HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For comparison, see how <a href="/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained">New York paid sick leave</a> policy is structured alongside its own paid family leave program.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Oregon status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'Mandated', 'Build a policy covering accrual, carryover, permitted uses, and documentation'],
                ['Paid Leave Oregon', 'Separate state program', 'Document distinctly from sick leave; confirm current contribution and benefit rules'],
                ['Portland metro wage context', 'Regional rate has exceeded statewide rate', 'Confirm current rates before finalizing pay-related policy'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on employer headcount and employee eligibility'],
                ['Policy documentation', 'Required for defensibility', 'Keep sick leave, Paid Leave Oregon, and FMLA clearly separated in the handbook'],
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Oregon require paid sick leave statewide?","acceptedAnswer":{"@type":"Answer","text":"Yes. Oregon has a statewide paid sick leave law requiring accrual, carryover, and specific permitted uses that must be documented accurately in the employee handbook."}},{"@type":"Question","name":"Is Oregon paid sick leave the same as Paid Leave Oregon?","acceptedAnswer":{"@type":"Answer","text":"No. Paid sick leave covers shorter-term illness or family care. Paid Leave Oregon is a separate state-run program for bonding, serious health conditions, or safe leave needs."}},{"@type":"Question","name":"Does the Portland metro area have additional wage rules that affect sick leave?","acceptedAnswer":{"@type":"Answer","text":"Portland metro has a history of a higher regional minimum wage than the rest of the state, which can affect sick leave pay calculations. Confirm current rates with the state labor office."}},{"@type":"Question","name":"Does FMLA replace Paid Leave Oregon?","acceptedAnswer":{"@type":"Answer","text":"No. FMLA is unpaid and federal, while Paid Leave Oregon is a state-run paid benefit program. Employers should track both programs separately alongside statewide paid sick leave."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Oregon Paid Sick Leave Explained: What Employers Must Know","item":"https://www.beghr.com/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "New York Paid Sick Leave Explained", excerpt: "What New York paid sick leave and paid family leave require in 2026.", href: "/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Rhode Island Paid Sick Leave Explained", excerpt: "What Rhode Island paid sick leave and paid family leave require in 2026.", href: "/blog/hr-outsourcing/leave/rhode-island-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Ohio Paid Sick Leave Explained", excerpt: "Does Ohio require paid sick leave? Local ordinance risk and remote worker rules for 2026.", href: "/blog/hr-outsourcing/leave/ohio-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
