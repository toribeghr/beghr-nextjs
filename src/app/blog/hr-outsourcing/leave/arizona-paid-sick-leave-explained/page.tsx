import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arizona Paid Sick Leave Explained (2026) | BEG',
  description: 'Does Arizona mandate paid sick leave? What a compliant policy needs and how FMLA fits in, explained for employers in 2026.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/arizona-paid-sick-leave-explained' },
  openGraph: {
    title: 'Arizona Paid Sick Leave Explained (2026) | BEG',
    description: 'Does Arizona mandate paid sick leave? What a compliant policy needs and how FMLA fits in, explained for employers in 2026.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/arizona-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-arizona-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Arizona Paid Sick Leave Explained (2026) | BEG', description: 'Does Arizona mandate paid sick leave? What a compliant policy needs and how FMLA fits in, explained for employers in 2026.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-arizona-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does Arizona require employers to provide paid sick leave?',
    answer: 'Yes, Arizona mandates paid sick leave under a voter-approved law. Employers need a compliant accrual and carryover policy. Confirm current accrual rates and caps with the state labor office.',
  },
  {
    question: 'Does Arizona have a state paid family and medical leave program?',
    answer: 'No, Arizona does not currently operate a state paid family and medical leave program. Employees rely on paid sick leave for shorter absences and federal FMLA for longer job-protected leave.',
  },
  {
    question: 'What can Arizona paid sick leave be used for?',
    answer: 'Permitted uses generally include the employee\'s own illness and caring for a family member, among other qualifying reasons defined in the law. Confirm the full current list with the state labor office.',
  },
  {
    question: 'Is Arizona paid sick leave the same as FMLA?',
    answer: 'No. FMLA is unpaid, job-protected leave for eligible employees at covered employers based on headcount. Paid sick leave is a separate day-to-day paid benefit and the two should not be confused.',
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
        "image": "https://beghr.com/blog-images/blog-hr-outsourcing-leave-arizona-paid-sick-leave-explained.webp", "headline": "Arizona Paid Sick Leave Explained: What a Compliant Policy Needs", "description": "Does Arizona mandate paid sick leave? What a compliant policy needs and how FMLA fits in, explained for employers in 2026.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/arizona-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Arizona Paid Sick Leave Explained: What a Compliant Policy Needs</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-arizona-paid-sick-leave-explained.webp" alt={`An HR team reviewing employee documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Arizona mandates paid sick leave statewide. Employers must maintain a compliant accrual and carryover policy, and confirm the current figures with the state labor office before finalizing written language.</p>

        <p>Arizona voters approved a statewide paid sick leave requirement, which means employers here cannot treat sick leave as a purely voluntary benefit the way employers in some other states can. A compliant policy needs specific language around how time is earned, how much can roll into the next year, what it can be used for, and what an employer can reasonably ask an employee to document.</p>

        <p>Getting the details right, and keeping them right as figures adjust over time, is exactly what <a href="/services/hr-outsourcing">HR outsourcing</a> is built to handle for growing companies that do not have a dedicated compliance function watching Arizona law full time.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What a compliant policy needs</h2>

        <p>A policy that satisfies Arizona's mandate generally addresses five things. First, an accrual method, typically tied to hours worked, that reflects the current legal requirement rather than an arbitrary internal number. Second, a carryover rule describing what happens to unused time at year end, including whether a cap applies. Third, a clear list of permitted uses, which generally covers the employee's own illness or medical care and caring for a covered family member. Fourth, reasonable documentation standards for extended absences, since employers can request verification but only within limits set by law. Fifth, a fair notice provision for absences an employee can reasonably foresee in advance.</p>

        <p>Because the exact accrual rate, carryover cap, and permitted-use definitions can be updated, employers should confirm current figures with the state labor office rather than copying language from an older policy or a template built for a different jurisdiction. The <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a> is a good starting point for that confirmation.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>No state paid family and medical leave program</h2>

        <p>Arizona has a paid sick leave mandate but does not currently operate a state paid family and medical leave program. That is an important distinction: paid sick leave is generally designed for shorter, day-to-day absences, while a paid family and medical leave program, where one exists, typically provides wage replacement over a longer duration for events such as the birth of a child or a serious health condition, usually funded through a separate payroll contribution mechanism. Without a state program in Arizona, employees rely on paid sick leave for shorter absences and on federal FMLA, where eligible, for longer job-protected time away from work.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act provides unpaid, job-protected leave to eligible employees at covered employers, determined by headcount and hours-worked thresholds. It guarantees job restoration for qualifying medical and family circumstances but does not pay wages during the leave itself. FMLA and Arizona's paid sick leave mandate operate independently of each other, and handbook language should keep them clearly separated so managers and employees understand which protection applies to a given absence. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Arizona's paid sick leave figures and permitted-use language can be revisited over time, and employers hiring remote workers in other states add a whole additional layer of leave rules to track. BEG's certified HR professionals monitor Arizona's requirements alongside every other state where a client has employees, keeping accrual, carryover, and usage language current, powered by isolved. That work runs alongside talent acquisition and recruiting support as headcount grows. See the <a href="/services/hr-outsourcing/arizona">Arizona HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a look at a state that pairs paid sick leave with a state paid family leave program, see <a href="/blog/hr-outsourcing/leave/colorado-paid-sick-leave-explained">Colorado paid sick leave</a>.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Arizona status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'Mandated, voter-approved', 'Confirm current accrual, carryover, and cap figures with the state'],
                ['Permitted uses', 'Own illness, family care, and other qualifying reasons', 'Document clearly; confirm the full current list with the state'],
                ['State paid family and medical leave', 'No state program', 'Rely on federal FMLA where the employee is eligible'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Keep separate from paid sick leave in handbook language'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>Sick Leave Policy That Stays Compliant As Arizona's Rules Change.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Arizona require employers to provide paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes, Arizona mandates paid sick leave under a voter-approved law. Employers need a compliant accrual and carryover policy. Confirm current accrual rates and caps with the state labor office."}},{"@type":"Question","name":"Does Arizona have a state paid family and medical leave program?","acceptedAnswer":{"@type":"Answer","text":"No, Arizona does not currently operate a state paid family and medical leave program. Employees rely on paid sick leave for shorter absences and federal FMLA for longer job-protected leave."}},{"@type":"Question","name":"What can Arizona paid sick leave be used for?","acceptedAnswer":{"@type":"Answer","text":"Permitted uses generally include the employee's own illness and caring for a family member, among other qualifying reasons defined in the law. Confirm the full current list with the state labor office."}},{"@type":"Question","name":"Is Arizona paid sick leave the same as FMLA?","acceptedAnswer":{"@type":"Answer","text":"No. FMLA is unpaid, job-protected leave for eligible employees at covered employers based on headcount. Paid sick leave is a separate day-to-day paid benefit and the two should not be confused."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Arizona Paid Sick Leave Explained: What a Compliant Policy Needs","item":"https://www.beghr.com/blog/hr-outsourcing/leave/arizona-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Colorado Paid Sick Leave Explained", excerpt: "Colorado's paid sick leave and paid family leave programs explained for 2026.", href: "/blog/hr-outsourcing/leave/colorado-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Alaska Paid Sick Leave Explained", excerpt: "What Alaska's paid sick leave mandate requires from employers in 2026.", href: "/blog/hr-outsourcing/leave/alaska-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Arkansas Paid Sick Leave Explained", excerpt: "Does Arkansas require paid sick leave? What employers must know for 2026.", href: "/blog/hr-outsourcing/leave/arkansas-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
