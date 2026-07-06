import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Georgia Paid Sick Leave Explained: Employer Requirements',
  description: 'Does Georgia mandate paid sick leave? What Georgia employers should build instead, including local-ordinance and remote hiring risk.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/georgia-paid-sick-leave-explained' },
  openGraph: {
    title: 'Georgia Paid Sick Leave Explained: Employer Requirements',
    description: 'Does Georgia mandate paid sick leave? What Georgia employers should build instead, including local-ordinance and remote hiring risk.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/georgia-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-georgia-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Georgia Paid Sick Leave Explained: Employer Requirements', description: 'Does Georgia mandate paid sick leave? What Georgia employers should build instead, including local-ordinance and remote hiring risk.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-georgia-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does Georgia require paid sick leave?',
    answer: 'No. Georgia has no statewide paid sick leave mandate and no state paid family and medical leave program. A written company policy is still recommended for consistency and manager clarity.',
  },
  {
    question: 'Does Georgia\'s employee headcount threshold matter for leave policy?',
    answer: 'Georgia applies certain state employment laws based on employer size, but paid sick leave itself is not mandated regardless of headcount. FMLA has its own separate federal threshold.',
  },
  {
    question: 'What happens if a Georgia employer hires a remote worker in another state?',
    answer: 'That employee is generally governed by their own state\'s leave rules, not Georgia\'s. A Georgia-based company can unexpectedly owe sick leave accrual in a state with a mandate.',
  },
  {
    question: 'Does FMLA apply in Georgia?',
    answer: 'Yes, FMLA applies nationally, including in Georgia, to eligible employees at covered employers based on headcount. It is unpaid and job-protected, not a substitute for paid sick leave.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "Georgia Paid Sick Leave Explained: Employer Requirements", "description": "Does Georgia mandate paid sick leave? What Georgia employers should build instead, including local-ordinance and remote hiring risk.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/georgia-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Georgia Paid Sick Leave Explained: Employer Requirements</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-georgia-paid-sick-leave-explained.webp" alt={`Georgia Paid Sick Leave Explained: Employer Requirements`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Georgia does not mandate paid sick leave and has no state paid family and medical leave program, but that does not remove the need for a clear written policy, especially with remote or multi-state employees.</p>

        <p>Georgia employers often treat the absence of a state mandate as the end of the conversation. It is really the beginning. Without a state-required accrual system, Georgia companies have flexibility in how they structure sick leave, but flexibility without a written policy tends to produce inconsistent manager decisions, employee confusion, and exposure the moment the company hires outside Georgia's borders.</p>

        <p>This is where <a href="/services/hr-outsourcing">HR outsourcing</a> earns its keep for Georgia employers, building policy that reflects both Georgia's lighter-touch approach and the requirements of any other state where the company has people working.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>No statewide mandate, but not zero exposure</h2>

        <p>Georgia has not enacted a statewide paid sick leave law, and there is no state agency requiring a minimum accrual rate, carryover balance, or permitted-use list for private employers generally. That said, "no mandate" is not the same as "no obligation ever." Local paid sick leave ordinances exist in some parts of the country, most notably Pennsylvania's Philadelphia and Pittsburgh ordinances, and new local rules can be adopted elsewhere. A Georgia employer with any location or employee physically present in a jurisdiction with a local ordinance would need to comply with that ordinance regardless of the company's home state.</p>

        <p>Even without any local ordinance risk, a written sick leave policy protects a Georgia employer from inconsistent treatment across departments and locations, which is itself a source of discrimination claims and morale problems.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Multi-state and remote employees change the calculus</h2>

        <p>The most common way a Georgia-based employer ends up with sick leave obligations is by hiring remotely. Leave requirements generally attach to where the employee physically performs work, not where the employer is headquartered or where payroll is processed. A Georgia company hiring a remote employee in a state with a paid sick leave mandate can find itself responsible for that state's accrual and carryover rules for that one employee, even while every Georgia-based employee remains under the company's discretionary policy.</p>

        <p>Building policy for where people actually work, rather than a single company-wide handbook, is the practical answer. That means maintaining a current map of every state where employees are located, confirming which carry a mandate, and adding state-specific addenda rather than assuming the Georgia default applies everywhere.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act operates independently of Georgia's lack of a state mandate. FMLA provides unpaid, job-protected leave to eligible employees at covered employers, based on headcount and hours-worked thresholds, for qualifying medical and family circumstances. It guarantees job restoration but never requires paid wages during the leave. Georgia employers should keep FMLA eligibility and any company-provided paid sick leave clearly separated in handbook language so managers do not conflate the two. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>A Georgia employer's leave exposure can shift the moment the company adds a remote hire in a mandate state or opens a location in a city with a local ordinance. BEG's certified HR professionals track sick leave requirements state by state and city by city, keeping Georgia handbook language and any multi-state addenda current, powered by isolved. This runs alongside talent acquisition and direct hire support as Georgia employers expand into new states. See the <a href="/services/hr-outsourcing/georgia">Georgia HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a look at how local ordinances create obligations even without a statewide mandate, see <a href="/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained">Pennsylvania paid sick leave</a> and the Philadelphia and Pittsburgh rules.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Georgia status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'No mandate', 'Adopt a written policy anyway for consistency'],
                ['State paid family and medical leave', 'No state program', 'Rely on federal FMLA and any employer-provided benefits'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on headcount; does not require paid leave'],
                ['Local ordinances', 'None currently in Georgia', 'Monitor if operations expand into cities with ordinances'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>Sick Leave Policy Built for Georgia and Every State You Hire In.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Georgia require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Georgia has no statewide paid sick leave mandate and no state paid family and medical leave program. A written company policy is still recommended for consistency and manager clarity."}},{"@type":"Question","name":"Does Georgia's employee headcount threshold matter for leave policy?","acceptedAnswer":{"@type":"Answer","text":"Georgia applies certain state employment laws based on employer size, but paid sick leave itself is not mandated regardless of headcount. FMLA has its own separate federal threshold."}},{"@type":"Question","name":"What happens if a Georgia employer hires a remote worker in another state?","acceptedAnswer":{"@type":"Answer","text":"That employee is generally governed by their own state's leave rules, not Georgia's. A Georgia-based company can unexpectedly owe sick leave accrual in a state with a mandate."}},{"@type":"Question","name":"Does FMLA apply in Georgia?","acceptedAnswer":{"@type":"Answer","text":"Yes, FMLA applies nationally, including in Georgia, to eligible employees at covered employers based on headcount. It is unpaid and job-protected, not a substitute for paid sick leave."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Georgia Paid Sick Leave Explained: Employer Requirements","item":"https://www.beghr.com/blog/hr-outsourcing/leave/georgia-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Florida Paid Sick Leave Explained", excerpt: "Does Florida require paid sick leave? What employers must build instead in 2026.", href: "/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "South Carolina Paid Sick Leave Explained", excerpt: "What South Carolina employers must know about paid sick leave and multi-state risk.", href: "/blog/hr-outsourcing/leave/south-carolina-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Pennsylvania Paid Sick Leave Explained", excerpt: "How Philadelphia and Pittsburgh local ordinances change the picture for employers.", href: "/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
