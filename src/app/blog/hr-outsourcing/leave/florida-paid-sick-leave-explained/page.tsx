import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Paid Sick Leave Explained: What Employers Must Know',
  description: 'Does Florida require paid sick leave? What employers must build instead, including local-ordinance and multi-state remote employee risk.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained' },
  openGraph: {
    title: 'Florida Paid Sick Leave Explained: What Employers Must Know',
    description: 'Does Florida require paid sick leave? What employers must build instead, including local-ordinance and multi-state remote employee risk.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-florida-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Florida Paid Sick Leave Explained: What Employers Must Know', description: 'Does Florida require paid sick leave? What employers must build instead, including local-ordinance and multi-state remote employee risk.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-florida-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does Florida require employers to offer paid sick leave?',
    answer: 'No. Florida has no statewide paid sick leave mandate and no state paid family and medical leave program. Employers still need a written sick leave policy for consistency and to manage risk.',
  },
  {
    question: 'Can a Florida employer still face sick leave obligations?',
    answer: 'Yes, if the company has remote employees working from a state with its own mandate. That employee is generally covered by their work state\'s rules, not Florida\'s, even if payroll runs out of Florida.',
  },
  {
    question: 'Does FMLA apply to Florida employers?',
    answer: 'FMLA can apply to Florida employers that meet the federal headcount threshold. It provides unpaid, job-protected leave for qualifying reasons but does not require any leave to be paid.',
  },
  {
    question: 'Should a Florida employer have a written sick leave policy anyway?',
    answer: 'Yes. Even without a state mandate, a clear written policy reduces inconsistent manager decisions, supports morale, and prepares the company for multi-state growth or a future state requirement.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "Florida Paid Sick Leave Explained: What Employers Must Know", "description": "Does Florida require paid sick leave? What employers must build instead, including local-ordinance and multi-state remote employee risk.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Florida Paid Sick Leave Explained: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-florida-paid-sick-leave-explained.webp" alt={`Florida Paid Sick Leave Explained: What Employers Must Know`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Florida does not mandate paid sick leave and has no state paid family and medical leave program, but employers still need a written policy, especially once remote or multi-state employees enter the picture.</p>

        <p>The absence of a state mandate is often read as the absence of any obligation, and that is where Florida employers get into trouble. No statewide sick leave law does not mean no leave-related risk. It means the risk shows up differently: through local ordinances employers assume do not apply to them, and through remote or hybrid employees who are legally covered by an entirely different state's rules while sitting on a Florida-based payroll.</p>

        <p>This is exactly the kind of gap <a href="/services/hr-outsourcing">HR outsourcing</a> is built to close, because it requires watching every state where an employer actually has people working, not just the state where the company is headquartered.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>No statewide mandate does not mean no risk</h2>

        <p>Florida has not adopted a statewide paid sick leave law. There is no accrual requirement, no carryover rule, and no state agency enforcing a minimum sick leave benefit for private employers generally. That gives Florida employers real flexibility to design a policy that fits the business, but flexibility is not the same as zero obligation.</p>

        <p>Local paid sick leave ordinances are common in some states, most notably Pennsylvania's Philadelphia and Pittsburgh ordinances, and new local rules can appear in other states over time. A Florida-headquartered company with a location or employees physically working in a city with a local ordinance would be subject to that ordinance regardless of where the company is based. Employers should not assume "we're a Florida company" settles the question if any part of the workforce sits elsewhere.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Remote and multi-state employees create real obligations</h2>

        <p>The bigger and more common exposure for a Florida employer is the remote employee working from a state with its own paid sick leave mandate or paid family and medical leave program. Leave law generally follows the employee's actual work location, not the employer's headquarters or payroll address. A Florida company that hires a remote worker in a mandate state can find itself responsible for that state's accrual, carryover, and notice requirements even though no such requirement exists in Florida.</p>

        <p>Building policy for where people actually work, rather than defaulting to a single company-wide handbook, is the only reliable way to manage this. That means tracking every state where an employee is physically located, confirming which of those states carry a mandate, and layering state-specific addenda into the handbook rather than trying to write one policy that quietly ignores the differences.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act sits underneath all of this regardless of state mandates. FMLA provides unpaid, job-protected leave to eligible employees at covered employers, determined by headcount and hours-worked thresholds, for qualifying medical and family circumstances. It guarantees job restoration but does not require any wage replacement. Florida employers sometimes conflate FMLA eligibility with a paid sick leave obligation; they are not the same thing, and a policy that blurs the two creates confusion for managers handling a leave request. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>A Florida employer's leave exposure changes the moment headcount crosses a new state line, and it can change again if a new local ordinance is adopted somewhere the company has a location. BEG's certified HR professionals track sick leave and paid family and medical leave requirements state by state and city by city, keeping handbook language and manager guidance current, powered by isolved. This runs alongside talent acquisition and direct hire support as Florida employers add headcount in new states. See the <a href="/services/hr-outsourcing/florida">Florida HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a state with statutory local ordinances layered on top of no statewide mandate, see how <a href="/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained">Pennsylvania paid sick leave</a> handles the Philadelphia and Pittsburgh rules.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Florida status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'No mandate', 'Adopt a written policy anyway for consistency'],
                ['State paid family and medical leave', 'No state program', 'Rely on federal FMLA and any employer-provided benefits'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on headcount; does not require paid leave'],
                ['Local ordinances', 'None currently in Florida', 'Monitor if operations expand into cities with ordinances'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>Sick Leave Policy Built for Where Your People Actually Work.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Florida require employers to offer paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Florida has no statewide paid sick leave mandate and no state paid family and medical leave program. Employers still need a written sick leave policy for consistency and to manage risk."}},{"@type":"Question","name":"Can a Florida employer still face sick leave obligations?","acceptedAnswer":{"@type":"Answer","text":"Yes, if the company has remote employees working from a state with its own mandate. That employee is generally covered by their work state's rules, not Florida's, even if payroll runs out of Florida."}},{"@type":"Question","name":"Does FMLA apply to Florida employers?","acceptedAnswer":{"@type":"Answer","text":"FMLA can apply to Florida employers that meet the federal headcount threshold. It provides unpaid, job-protected leave for qualifying reasons but does not require any leave to be paid."}},{"@type":"Question","name":"Should a Florida employer have a written sick leave policy anyway?","acceptedAnswer":{"@type":"Answer","text":"Yes. Even without a state mandate, a clear written policy reduces inconsistent manager decisions, supports morale, and prepares the company for multi-state growth or a future state requirement."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Florida Paid Sick Leave Explained: What Employers Must Know","item":"https://www.beghr.com/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Georgia Paid Sick Leave Explained", excerpt: "What Georgia employers must know about paid sick leave, local risk, and remote hiring in 2026.", href: "/blog/hr-outsourcing/leave/georgia-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Pennsylvania Paid Sick Leave Explained", excerpt: "How Philadelphia and Pittsburgh local ordinances change the picture for Pennsylvania employers.", href: "/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "California Paid Sick Leave Explained", excerpt: "Does California mandate paid sick leave and paid family leave? How the two programs differ.", href: "/blog/hr-outsourcing/leave/california-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
