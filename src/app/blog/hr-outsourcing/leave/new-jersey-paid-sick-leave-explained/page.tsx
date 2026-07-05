import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Jersey Paid Sick Leave Explained: Sick Leave vs. PFML',
  description: 'Does New Jersey mandate paid sick leave and paid family leave? How the two programs differ, and what employers must do in 2026.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained' },
  openGraph: {
    title: 'New Jersey Paid Sick Leave Explained: Sick Leave vs. PFML',
    description: 'Does New Jersey mandate paid sick leave and paid family leave? How the two programs differ, and what employers must do in 2026.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Jersey Paid Sick Leave Explained: Sick Leave vs. PFML', description: 'Does New Jersey mandate paid sick leave and paid family leave? How the two programs differ, and what employers must do in 2026.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Does New Jersey require paid sick leave?',
    answer: 'Yes. New Jersey mandates statewide paid sick leave. Employers need a compliant accrual and carryover policy. Confirm current accrual rates and caps with the state labor office.',
  },
  {
    question: 'Is New Jersey paid family leave the same as paid sick leave?',
    answer: 'No. Paid sick leave covers short-term absences and is employer-provided. The state paid family and medical leave program is a separate wage-replacement benefit with different triggers and funding.',
  },
  {
    question: 'How is New Jersey\'s state paid family and medical leave program funded?',
    answer: 'It generally operates through a separate payroll contribution mechanism distinct from ordinary wages. Confirm current contribution structure and benefit duration with the state program directly.',
  },
  {
    question: 'Does FMLA overlap with New Jersey\'s leave programs?',
    answer: 'FMLA is a separate federal protection providing unpaid, job-protected leave for eligible employees at covered employers, based on headcount. It can run alongside the state programs.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "New Jersey Paid Sick Leave Explained: Sick Leave vs. PFML", "description": "Does New Jersey mandate paid sick leave and paid family leave? How the two programs differ, and what employers must do in 2026.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>New Jersey Paid Sick Leave Explained: Sick Leave vs. PFML</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>New Jersey mandates both statewide paid sick leave and a separate state paid family and medical leave program. Employers must maintain compliant policy for both and confirm current figures with the state labor office.</p>

        <p>New Jersey is one of the states where employers most often collapse two distinct legal obligations into one paragraph of the handbook, and that shortcut creates confusion for managers and employees alike. Paid sick leave and the state paid family and medical leave program are not interchangeable. They have different triggers, different funding structures, and different durations, and a New Jersey employer needs both pieces documented separately and correctly.</p>

        <p>This is exactly why <a href="/services/hr-outsourcing">HR outsourcing</a> matters in New Jersey, where the distance between a generic leave policy and a compliant one is significant and the two programs need to stand on their own.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What a compliant paid sick leave policy needs</h2>

        <p>New Jersey's statewide paid sick leave mandate requires an accrual method, generally tied to hours worked, that reflects the current legal requirement. Unused time typically carries over between years in some form, though the exact mechanics and any cap should be confirmed directly rather than assumed. The policy needs a clear list of permitted uses, generally covering the employee's own illness or medical need and caring for a covered family member, along with reasonable documentation standards for extended absences and a fair notice provision for foreseeable absences.</p>

        <p>Because accrual rates, carryover caps, and permitted-use language can be updated, employers should confirm the current figures with the state labor office rather than relying on older policy language. The <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a> is a reliable starting point.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid sick leave vs. New Jersey's state paid family and medical leave program</h2>

        <p>Paid sick leave and New Jersey's state paid family and medical leave program are frequently confused, but they serve different purposes. Paid sick leave is generally designed for shorter, day-to-day absences tied to illness or family caregiving, funded directly by the employer as part of ordinary payroll. The state paid family and medical leave program, by contrast, is typically funded through a separate payroll contribution mechanism and provides wage replacement over a longer duration for events such as the birth of a child, bonding with a new child, or a serious health condition affecting the employee or a family member.</p>

        <p>The eligibility triggers differ too. Paid sick leave usually applies from early in employment for common short-term absences, while the state paid family and medical leave program generally requires a claim process tied to a qualifying life event and provides benefits over a period set by the state program rather than an accrued balance. Because duration, benefit levels, and program dates can change, employers should confirm current details with the state program directly before finalizing employee-facing materials.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act adds a third layer on top of these two state programs. FMLA provides unpaid, job-protected leave to eligible employees at covered employers, determined by headcount and hours-worked thresholds. It guarantees job restoration for qualifying medical and family circumstances but does not itself pay wages. In New Jersey, an employee taking leave for a qualifying reason may be covered by FMLA's job protection at the same time they receive wage replacement through the state paid family and medical leave program, which is a common point of confusion that handbook language should address directly. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>New Jersey's paid sick leave figures and paid family and medical leave program details are both subject to change, and remote hiring can add employees whose home state has an entirely different structure. BEG's certified HR professionals monitor New Jersey's requirements alongside every other state where a client has employees, keeping accrual, carryover, and program language current, powered by isolved. This runs alongside talent acquisition and direct hire support as companies scale their New Jersey workforce. See the <a href="/services/hr-outsourcing/new-jersey">New Jersey HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For comparison, see how <a href="/blog/hr-outsourcing/leave/california-paid-sick-leave-explained">California paid sick leave</a> structures its own combination of sick leave and paid family leave.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>New Jersey status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'Mandated', 'Confirm current accrual, carryover, and cap figures with the state'],
                ['State paid family and medical leave', 'State program in effect', 'Confirm current duration and benefit rules; document separately from sick leave'],
                ['Federal FMLA', 'Unpaid, job-protected', 'May run alongside the state program; explain the overlap clearly'],
                ['Permitted sick leave uses', 'Own illness, family care, and other qualifying reasons', 'Confirm the full current list with the state labor office'],
                ['Remote employees in other states', 'Governed by the employee\'s work state', 'Build multi-state policy as headcount grows'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>Sick Leave and Paid Family Leave Policy, Kept Current for New Jersey.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does New Jersey require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. New Jersey mandates statewide paid sick leave. Employers need a compliant accrual and carryover policy. Confirm current accrual rates and caps with the state labor office."}},{"@type":"Question","name":"Is New Jersey paid family leave the same as paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Paid sick leave covers short-term absences and is employer-provided. The state paid family and medical leave program is a separate wage-replacement benefit with different triggers and funding."}},{"@type":"Question","name":"How is New Jersey's state paid family and medical leave program funded?","acceptedAnswer":{"@type":"Answer","text":"It generally operates through a separate payroll contribution mechanism distinct from ordinary wages. Confirm current contribution structure and benefit duration with the state program directly."}},{"@type":"Question","name":"Does FMLA overlap with New Jersey's leave programs?","acceptedAnswer":{"@type":"Answer","text":"FMLA is a separate federal protection providing unpaid, job-protected leave for eligible employees at covered employers, based on headcount. It can run alongside the state programs."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"New Jersey Paid Sick Leave Explained: Sick Leave vs. PFML","item":"https://www.beghr.com/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "California Paid Sick Leave Explained", excerpt: "Does California mandate paid sick leave and paid family leave? How the two programs differ.", href: "/blog/hr-outsourcing/leave/california-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Washington Paid Sick Leave Explained", excerpt: "How Washington's statewide mandate, PFML program, and Seattle local rules work together.", href: "/blog/hr-outsourcing/leave/washington-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Pennsylvania Paid Sick Leave Explained", excerpt: "How Philadelphia and Pittsburgh local ordinances change the picture for employers.", href: "/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
