import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tennessee Paid Sick Leave Explained (2026) | BEG',
  description: 'Does Tennessee require paid sick leave? What employers must know about local ordinances, remote workers, and FMLA in 2026.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/tennessee-paid-sick-leave-explained' },
  openGraph: {
    title: 'Tennessee Paid Sick Leave Explained (2026) | BEG',
    description: 'Does Tennessee require paid sick leave? What employers must know about local ordinances, remote workers, and FMLA in 2026.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/tennessee-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-tennessee-paid-sick-leave-explained.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Tennessee Paid Sick Leave Explained (2026) | BEG', description: 'Does Tennessee require paid sick leave? What employers must know about local ordinances, remote workers, and FMLA in 2026.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-leave-tennessee-paid-sick-leave-explained.webp'] },
};

const faqs = [
  {
    question: 'Does Tennessee require employers to offer paid sick leave?',
    answer: 'No. Tennessee has no statewide paid sick leave mandate. Employers may offer paid sick leave voluntarily, but there is no state law requiring accrual, carryover, or a minimum number of hours.',
  },
  {
    question: 'Can a city in Tennessee require paid sick leave?',
    answer: 'Local ordinances can change over time, and requirements vary by city and county. Confirm current local ordinance status with the state labor office before finalizing a policy.',
  },
  {
    question: 'What if a Tennessee employer has remote workers in other states?',
    answer: 'A remote employee working from a mandate state is generally covered by that state\'s paid sick leave rules regardless of where the company is headquartered, so policy should match where people actually work.',
  },
  {
    question: 'Does FMLA guarantee paid sick leave in Tennessee?',
    answer: 'No. FMLA provides unpaid, job-protected leave for eligible employees at covered employers based on headcount. It is a separate protection from paid sick leave and should not be confused with it.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "Tennessee Paid Sick Leave Explained: What Employers Must Know", "description": "Does Tennessee require paid sick leave? What employers must know about local ordinances, remote workers, and FMLA in 2026.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/tennessee-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Tennessee Paid Sick Leave Explained: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-leave-tennessee-paid-sick-leave-explained.webp" alt={`Tennessee Paid Sick Leave Explained (2026)`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Tennessee does not mandate paid sick leave statewide. Employers are free to design their own policy, but must watch for local ordinance activity and account for remote employees working from mandate states.</p>

        <p>Tennessee is one of many states where paid sick leave is left entirely to employer discretion, with no statewide statute setting accrual rates, carryover rules, or permitted uses. That does not mean the topic is risk-free. Employers headquartered in Tennessee that hire remote workers, expand into other cities, or bring on employees who live in mandate states can find themselves subject to obligations that have nothing to do with Tennessee law at all.</p>

        <p>This is exactly where <a href="/services/hr-outsourcing">HR outsourcing</a> earns its keep: a policy built only around Tennessee's baseline can leave a company exposed the moment its workforce spreads beyond state lines.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Local ordinance risk in a no-mandate state</h2>

        <p>Even in states without a statewide paid sick leave law, cities and counties can pass their own ordinances requiring paid sick leave for employees working within their boundaries. These ordinances can appear with little warning and often carry different accrual and notice requirements than anything a company has built into its existing policy. An employer that only tracks state-level law can miss a local requirement entirely.</p>

        <p>Because ordinance activity changes over time and varies by jurisdiction, the safest approach is to confirm current status directly. Anything not addressed here should be verified with the state labor office, and employers can start with the <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Multi-state employees change the picture</h2>

        <p>A company based in Tennessee that hires a remote worker living in a state with a paid sick leave mandate generally has to comply with that state's law for that employee, regardless of where the company itself is headquartered. This catches many growing employers off guard, since it is natural to assume one policy can cover the whole team. Policy should be built around where people actually work, not just where the company is registered.</p>

        <p>Employers expanding through talent acquisition and remote hiring should treat each new state as a fresh compliance question rather than assuming Tennessee's light-touch rules travel with the employee. A single national policy document, if it is not built carefully, can either overpromise benefits that Tennessee does not require or underdeliver on what a mandate state actually requires for a remote hire living there.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The federal Family and Medical Leave Act provides unpaid, job-protected leave to eligible employees at covered employers, based on headcount and hours worked thresholds. FMLA is not paid sick leave, and it is not triggered by every illness. It is a distinct protection that guarantees job restoration for qualifying medical and family reasons, separate from any day-to-day sick pay a company chooses to offer. Employers should keep FMLA policy language and any voluntary paid sick leave policy clearly separated in employee-facing materials so the two are never confused. More detail is available from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Building a voluntary policy the right way</h2>

        <p>Even without a state mandate, a written voluntary sick leave or PTO policy protects the company by setting clear expectations. A workable policy generally addresses how time accrues or is granted, whether unused time carries over into the next year, what uses are permitted, what documentation an employee may be asked to provide for extended absences, and how much advance notice is expected for foreseeable absences. Because Tennessee sets no statutory floor, the company has flexibility here, but that flexibility should be used deliberately rather than left undefined.</p>

        <p>Employers that also operate in other states should build the Tennessee-based policy as one part of a broader, multi-state leave framework rather than as a single flat document, so that adding a mandate-state hire later does not require rebuilding the whole policy from scratch.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Laws change, ordinances get passed, and remote hiring patterns shift, often faster than an internal HR function can track across every jurisdiction where employees live. BEG's certified HR professionals monitor sick leave and paid leave developments across all fifty states and update policy language as rules change, powered by isolved. That includes flagging when a new hire's home state triggers an obligation the existing handbook does not cover, and blending in talent acquisition and direct hire support as the team grows. See the <a href="/services/hr-outsourcing/tennessee">Tennessee HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For a look at how a neighboring no-mandate state compares, see how <a href="/blog/hr-outsourcing/leave/texas-paid-sick-leave-explained">Texas paid sick leave</a> policy is handled.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Tennessee status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'No mandate', 'Design a voluntary policy or confirm none is offered, in writing'],
                ['Local ordinances', 'Varies, confirm current status', 'Check the city and county where each employee works'],
                ['State paid family and medical leave', 'No state program', 'Rely on federal FMLA baseline where eligible'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on employer headcount and employee eligibility'],
                ['Remote employees in mandate states', 'Governed by the employee\'s work state', 'Build a multi-state policy, not a single flat document'],
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
          <h3 style={{ color: '#000000', margin: 0 }}>Leave Policy That Travels With Your Workforce.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Tennessee require employers to offer paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No. Tennessee has no statewide paid sick leave mandate. Employers may offer paid sick leave voluntarily, but there is no state law requiring accrual, carryover, or a minimum number of hours."}},{"@type":"Question","name":"Can a city in Tennessee require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Local ordinances can change over time, and requirements vary by city and county. Confirm current local ordinance status with the state labor office before finalizing a policy."}},{"@type":"Question","name":"What if a Tennessee employer has remote workers in other states?","acceptedAnswer":{"@type":"Answer","text":"A remote employee working from a mandate state is generally covered by that state's paid sick leave rules regardless of where the company is headquartered, so policy should match where people actually work."}},{"@type":"Question","name":"Does FMLA guarantee paid sick leave in Tennessee?","acceptedAnswer":{"@type":"Answer","text":"No. FMLA provides unpaid, job-protected leave for eligible employees at covered employers based on headcount. It is a separate protection from paid sick leave and should not be confused with it."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Tennessee Paid Sick Leave Explained: What Employers Must Know","item":"https://www.beghr.com/blog/hr-outsourcing/leave/tennessee-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Texas Paid Sick Leave Explained", excerpt: "Does Texas require paid sick leave? What employers must know for 2026.", href: "/blog/hr-outsourcing/leave/texas-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Virginia Paid Sick Leave Explained", excerpt: "Does Virginia require paid sick leave? What employers must know for 2026.", href: "/blog/hr-outsourcing/leave/virginia-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "West Virginia Paid Sick Leave Explained", excerpt: "Does West Virginia require paid sick leave? What employers must know for 2026.", href: "/blog/hr-outsourcing/leave/west-virginia-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
