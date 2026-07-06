import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pennsylvania Paid Sick Leave Explained: Local Rules Inside',
  description: 'No statewide Pennsylvania sick leave law, but Philadelphia and Pittsburgh have their own ordinances. What employers must build for 2026.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained' },
  openGraph: {
    title: 'Pennsylvania Paid Sick Leave Explained: Local Rules Inside',
    description: 'No statewide Pennsylvania sick leave law, but Philadelphia and Pittsburgh have their own ordinances. What employers must build for 2026.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-pennsylvania-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Pennsylvania Paid Sick Leave Explained: Local Rules Inside', description: 'No statewide Pennsylvania sick leave law, but Philadelphia and Pittsburgh have their own ordinances. What employers must build for 2026.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-pennsylvania-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does Pennsylvania have a statewide paid sick leave law?',
    answer: 'No. Pennsylvania has no statewide mandate and no state paid family and medical leave program. Philadelphia and Pittsburgh, however, each have their own local paid sick leave ordinances.',
  },
  {
    question: 'Do the Philadelphia and Pittsburgh ordinances apply the same way?',
    answer: 'No. Each city\'s ordinance is a separate local law with its own coverage rules. Employers with workers physically located in either city should confirm current requirements directly with the city.',
  },
  {
    question: 'Does a Pennsylvania employer outside Philadelphia or Pittsburgh need a sick leave policy?',
    answer: 'There is no state mandate requiring one, but a written policy is still recommended for consistency, and it becomes essential if the company has any employee working inside either city.',
  },
  {
    question: 'Does FMLA apply to Pennsylvania employers?',
    answer: 'Yes, FMLA applies nationally to eligible employees at covered employers, including in Pennsylvania, based on headcount. It provides unpaid, job-protected leave, not a paid sick leave benefit.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "Pennsylvania Paid Sick Leave Explained: Local Rules Inside", "description": "No statewide Pennsylvania sick leave law, but Philadelphia and Pittsburgh have their own ordinances. What employers must build for 2026.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Pennsylvania Paid Sick Leave Explained: Local Rules Inside</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-pennsylvania-paid-sick-leave-explained.webp" alt={`Pennsylvania Paid Sick Leave Explained: Local Rules Inside`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Pennsylvania has no statewide paid sick leave mandate, but Philadelphia and Pittsburgh each enforce their own local paid sick leave ordinances that apply regardless of the state's approach.</p>

        <p>Pennsylvania is the clearest example in this cluster of why "no state mandate" is an incomplete answer. A Pennsylvania employer that only checks state law and concludes there is no sick leave obligation can still be out of compliance the moment an employee works a shift inside Philadelphia or Pittsburgh city limits. These are two of the most well-established municipal paid sick leave ordinances in the country, and they exist independently of whatever Harrisburg does or does not require.</p>

        <p>This is exactly the layered compliance problem <a href="/services/hr-outsourcing">HR outsourcing</a> is built to solve, tracking state, city, and remote-employee obligations at the same time rather than treating Pennsylvania as a single flat jurisdiction.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>No state mandate, but two major city ordinances</h2>

        <p>Pennsylvania has not adopted a statewide paid sick leave law, and there is no state agency requiring a minimum accrual rate or carryover balance for private employers generally across the state. But Philadelphia and Pittsburgh have each enacted their own local paid sick leave ordinances, and those ordinances apply to employers with workers physically performing work inside city limits, independent of the employer's headquarters location or the state's own silence on the issue.</p>

        <p>Because each city's ordinance is a distinct local law with its own coverage thresholds, permitted uses, and administrative requirements, a Pennsylvania employer with locations or employees in both Philadelphia and Pittsburgh needs to treat them as two separate compliance obligations, not one generic "Pennsylvania" policy. Employers should confirm current ordinance requirements directly with each city rather than assuming state-level silence extends to municipal law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Remote and multi-state employees add a third layer</h2>

        <p>On top of the state and city layers, Pennsylvania employers with remote employees in other states face the same exposure as any multi-state employer. Leave law generally follows the employee's physical work location, not the employer's headquarters or payroll address. A Pennsylvania company hiring a remote worker in a state with its own paid sick leave mandate can become responsible for that state's rules for that one employee, separate entirely from the Philadelphia and Pittsburgh ordinances.</p>

        <p>The only reliable approach is building policy for where people actually work: state, city, and beyond. That means maintaining a live map of every jurisdiction where employees are physically located, whether that is a Pennsylvania city with its own ordinance or an entirely different state with a mandate, and layering the right requirements into the handbook accordingly.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The Family and Medical Leave Act applies in Pennsylvania the same way it applies nationally, and it runs independently of the state's lack of a mandate and the city ordinances. FMLA provides unpaid, job-protected leave to eligible employees at covered employers, based on headcount and hours-worked thresholds, for qualifying medical and family circumstances. It guarantees job restoration but never requires the leave to be paid, and it should be documented separately from any Philadelphia or Pittsburgh ordinance obligation. See the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a> for the federal framework.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Pennsylvania's mix of no state mandate, two active city ordinances, and multi-state remote hiring risk makes it one of the more complex states in this cluster to get right. BEG's certified HR professionals track Philadelphia and Pittsburgh ordinance requirements alongside every other state and city where a client has employees, keeping handbook language current, powered by isolved. This runs alongside talent acquisition and direct hire support as Pennsylvania employers grow into new cities and states. See the <a href="/services/hr-outsourcing/pennsylvania">Pennsylvania HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a state with a statewide mandate plus its own local layer, see how <a href="/blog/hr-outsourcing/leave/washington-paid-sick-leave-explained">Washington paid sick leave</a> handles Seattle's additional local rules.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Pennsylvania status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'No mandate', 'Adopt a written statewide policy anyway for consistency'],
                ['Philadelphia paid sick leave ordinance', 'Local mandate in effect', 'Confirm current requirements directly with the city'],
                ['Pittsburgh paid sick leave ordinance', 'Local mandate in effect', 'Confirm current requirements directly with the city'],
                ['State paid family and medical leave', 'No state program', 'Rely on federal FMLA and any employer-provided benefits'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on headcount; does not require paid leave'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>State, City, and Multi-State Sick Leave Policy, Handled Together.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Pennsylvania have a statewide paid sick leave law?","acceptedAnswer":{"@type":"Answer","text":"No. Pennsylvania has no statewide mandate and no state paid family and medical leave program. Philadelphia and Pittsburgh, however, each have their own local paid sick leave ordinances."}},{"@type":"Question","name":"Do the Philadelphia and Pittsburgh ordinances apply the same way?","acceptedAnswer":{"@type":"Answer","text":"No. Each city's ordinance is a separate local law with its own coverage rules. Employers with workers physically located in either city should confirm current requirements directly with the city."}},{"@type":"Question","name":"Does a Pennsylvania employer outside Philadelphia or Pittsburgh need a sick leave policy?","acceptedAnswer":{"@type":"Answer","text":"There is no state mandate requiring one, but a written policy is still recommended for consistency, and it becomes essential if the company has any employee working inside either city."}},{"@type":"Question","name":"Does FMLA apply to Pennsylvania employers?","acceptedAnswer":{"@type":"Answer","text":"Yes, FMLA applies nationally to eligible employees at covered employers, including in Pennsylvania, based on headcount. It provides unpaid, job-protected leave, not a paid sick leave benefit."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Pennsylvania Paid Sick Leave Explained: Local Rules Inside","item":"https://www.beghr.com/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Washington Paid Sick Leave Explained", excerpt: "How Washington's statewide mandate, PFML program, and Seattle local rules work together.", href: "/blog/hr-outsourcing/leave/washington-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Florida Paid Sick Leave Explained", excerpt: "Does Florida require paid sick leave? What employers must build instead in 2026.", href: "/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "New Jersey Paid Sick Leave Explained", excerpt: "How New Jersey's statewide paid sick leave mandate and PFML program work together.", href: "/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
