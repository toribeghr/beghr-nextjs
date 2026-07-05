import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Mexico Paid Sick Leave Explained (2026) | BEG',
  description: 'What New Mexico paid sick leave requires: accrual, carryover, permitted uses, and how local minimums in Santa Fe and Albuquerque add complexity.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-mexico-paid-sick-leave-explained' },
  openGraph: {
    title: 'New Mexico Paid Sick Leave Explained (2026) | BEG',
    description: 'What New Mexico paid sick leave requires: accrual, carryover, permitted uses, and how local minimums in Santa Fe and Albuquerque add complexity.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/leave/new-mexico-paid-sick-leave-explained',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Mexico Paid Sick Leave Explained (2026) | BEG', description: 'What New Mexico paid sick leave requires: accrual, carryover, permitted uses, and how local minimums in Santa Fe and Albuquerque add complexity.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Does New Mexico require paid sick leave statewide?',
    answer: 'Yes. New Mexico has a statewide paid sick leave law. Employers need a compliant policy covering accrual, carryover, permitted uses, and documentation, confirmed against current state guidance.',
  },
  {
    question: 'Do Santa Fe and Albuquerque have their own rules?',
    answer: 'Both cities have a history of setting higher local minimum wage requirements than the state, which can affect related pay calculations. Confirm current local ordinance details with the state labor office.',
  },
  {
    question: 'Does New Mexico have a state paid family and medical leave program?',
    answer: 'Check current status directly, since paid family and medical leave programs are new and expanding nationally. Confirm current dates and eligibility with the state labor office before finalizing policy.',
  },
  {
    question: 'How does paid sick leave differ from FMLA in New Mexico?',
    answer: 'Paid sick leave covers shorter-term, typically paid absences under state law. FMLA is a separate federal protection providing unpaid, job-protected leave for eligible employees at covered employers.',
  },
  {
    question: 'Is BEG a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BlogPosting", "headline": "New Mexico Paid Sick Leave Explained: What Employers Must Know", "description": "What New Mexico paid sick leave requires: accrual, carryover, permitted uses, and how local minimums in Santa Fe and Albuquerque add complexity.", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/leave/new-mexico-paid-sick-leave-explained"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>New Mexico Paid Sick Leave Explained: What Employers Must Know</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>New Mexico requires a statewide paid sick leave policy covering accrual, carryover, permitted uses, and documentation, and employers with workers in Santa Fe or Albuquerque should also watch for higher local minimum requirements.</p>

        <p>New Mexico is one of a growing number of states where paid sick leave is not optional. A compliant policy needs to be built around several core concepts: how leave accrues over time, whether unused time carries into the next year, what reasons qualify for use, what documentation an employer may request for longer absences, and how much notice an employee should give when the need for leave is foreseeable. Getting the framework right matters more than any single number, since the details of accrual and caps are the parts most likely to be misapplied by a generic template.</p>

        <p>This is exactly where <a href="/services/hr-outsourcing">HR outsourcing</a> earns its keep: a policy that gets the concepts right but leaves the current figures stale is nearly as risky as having no policy at all.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Building a compliant accrual and carryover framework</h2>

        <p>A compliant New Mexico policy generally needs language addressing how sick leave accrues as an employee works, whether accrual is capped at a certain point in the year, whether unused leave carries over to the following year or resets, and whether there is a cap on how much can be carried over. Employers should confirm the exact current figures directly rather than relying on outdated summaries, since accrual rates and caps are exactly the kind of detail that changes and that a stale policy gets wrong first.</p>

        <p>Permitted uses typically include the employee's own illness or medical care, care for a family member, and reasons connected to domestic violence or safety concerns, though the precise list should be confirmed against current guidance. A policy should also describe what documentation, if any, an employer may request for absences beyond a certain length, and how much advance notice is expected when the need for leave is foreseeable rather than an emergency.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Local context: Santa Fe and Albuquerque</h2>

        <p>Employers with workers in Santa Fe or Albuquerque should be aware that both cities have a history of setting local minimum requirements above the statewide baseline, which can interact with how sick leave pay is calculated for hourly employees. This is context for local ordinance awareness, not a substitute for confirming current rules. Anything not addressed here should be verified with the state labor office, and employers can start with the <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office contact directory</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid sick leave versus a state paid family and medical leave program</h2>

        <p>Paid sick leave and a state paid family and medical leave program are two different protections that are frequently confused in employee-facing materials. Paid sick leave under state law generally covers shorter, more frequent absences tied to illness or safety needs. A state paid family and medical leave program, where one exists or is being phased in, typically covers longer absences tied to a serious health condition, bonding with a new child, or caring for a family member with a serious condition, often funded through a separate payroll contribution structure. Employers should confirm current program status, effective dates, and eligibility rules directly rather than assuming either program covers what the other does, and should keep the two policies clearly separated in the handbook so employees are not confused about which applies to their situation.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The federal FMLA baseline</h2>

        <p>The federal Family and Medical Leave Act provides unpaid, job-protected leave to eligible employees at covered employers, based on headcount and hours worked thresholds. FMLA does not replace New Mexico's paid sick leave requirement, and it is not triggered by every illness. It is a distinct protection guaranteeing job restoration for qualifying medical and family reasons, separate from the day-to-day paid sick leave the state requires. More detail is available from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor Wage and Hour Division</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How HR outsourcing keeps policy current</h2>

        <p>Accrual rates, caps, and permitted uses can be updated by regulators, and a policy written once at founding and never revisited is one of the most common compliance gaps for growing New Mexico employers. BEG's certified HR professionals monitor New Mexico's paid sick leave requirements and any state paid family and medical leave developments, updating policy language as rules change, powered by isolved. That includes tracking local context in cities like Santa Fe and Albuquerque and blending in talent acquisition and direct hire support as the team grows. See the <a href="/services/hr-outsourcing/new-mexico">New Mexico HR outsourcing page</a>, the <a href="/services/hr-outsourcing">HR outsourcing</a> overview, or <a href="/services/hr-outsourcing">get instant pricing</a>.</p>

        <p>For comparison, see how a neighboring state with no statewide mandate approaches the topic in <a href="/blog/hr-outsourcing/leave/oklahoma-paid-sick-leave-explained">Oklahoma paid sick leave explained</a>.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Leave type</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>New Mexico status</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>What employers should do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Statewide paid sick leave', 'Mandated', 'Build a policy covering accrual, carryover, permitted uses, and documentation'],
                ['Local context (Santa Fe, Albuquerque)', 'Higher local minimums have applied', 'Confirm current local ordinance details before finalizing pay-related policy'],
                ['State paid family and medical leave', 'Confirm current status', 'Verify effective dates and eligibility with the state labor office'],
                ['Federal FMLA', 'Unpaid, job-protected', 'Applies based on employer headcount and employee eligibility'],
                ['Policy documentation', 'Required for defensibility', 'Keep sick leave and FMLA language clearly separated in the handbook'],
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does New Mexico require paid sick leave statewide?","acceptedAnswer":{"@type":"Answer","text":"Yes. New Mexico has a statewide paid sick leave law. Employers need a compliant policy covering accrual, carryover, permitted uses, and documentation, confirmed against current state guidance."}},{"@type":"Question","name":"Do Santa Fe and Albuquerque have their own rules?","acceptedAnswer":{"@type":"Answer","text":"Both cities have a history of setting higher local minimum wage requirements than the state, which can affect related pay calculations. Confirm current local ordinance details with the state labor office."}},{"@type":"Question","name":"Does New Mexico have a state paid family and medical leave program?","acceptedAnswer":{"@type":"Answer","text":"Check current status directly, since paid family and medical leave programs are new and expanding nationally. Confirm current dates and eligibility with the state labor office before finalizing policy."}},{"@type":"Question","name":"How does paid sick leave differ from FMLA in New Mexico?","acceptedAnswer":{"@type":"Answer","text":"Paid sick leave covers shorter-term, typically paid absences under state law. FMLA is a separate federal protection providing unpaid, job-protected leave for eligible employees at covered employers."}},{"@type":"Question","name":"Is BEG a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. HR outsourcing, powered by isolved."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"New Mexico Paid Sick Leave Explained: What Employers Must Know","item":"https://www.beghr.com/blog/hr-outsourcing/leave/new-mexico-paid-sick-leave-explained"}]}`,
        }}
      />

      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Oklahoma Paid Sick Leave Explained", excerpt: "Does Oklahoma require paid sick leave? Local ordinance risk and remote worker rules for 2026.", href: "/blog/hr-outsourcing/leave/oklahoma-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "New York Paid Sick Leave Explained", excerpt: "What New York paid sick leave and paid family leave require in 2026.", href: "/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained" },
        { category: "HR Outsourcing", title: "Oregon Paid Sick Leave Explained", excerpt: "What Oregon paid sick leave and paid family and medical leave require in 2026.", href: "/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained" },
      ]} />
    </article>
  );
}
