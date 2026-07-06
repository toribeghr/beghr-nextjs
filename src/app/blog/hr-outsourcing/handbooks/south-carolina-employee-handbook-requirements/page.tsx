import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SC Employee Handbook Rules (2026 Guide) | BEG',
  description: 'What a South Carolina employee handbook must cover in 2026: federal baseline, overtime, and the policies employers most often get wrong.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements' },
  openGraph: {
    title: 'SC Employee Handbook Rules (2026 Guide) | BEG',
    description: 'What a South Carolina employee handbook must cover in 2026: federal baseline, overtime, and the policies employers most often get wrong.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-hr-outsourcing-handbooks-south-carolina-employee-handbook-requirements.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SC Employee Handbook Rules (2026 Guide) | BEG', description: 'What a South Carolina employee handbook must cover in 2026: federal baseline, overtime, and the policies employers most often get wrong.', images: ['https://www.beghr.com/blog-images/blog-hr-outsourcing-handbooks-south-carolina-employee-handbook-requirements.webp'] },
};

const faqs = [
  {
    question: 'Does South Carolina require paid sick leave?',
    answer: 'No statewide paid sick leave mandate applies based on current data. Any paid leave offered by the company is a policy choice, and the handbook should describe it as such rather than a legal entitlement.',
  },
  {
    question: 'Does South Carolina have a state paid family or medical leave program?',
    answer: 'No state PFML program applies based on current data. The handbook should rely on FMLA where the employer meets the threshold and confirm any other requirement with the state labor office.',
  },
  {
    question: 'How is overtime calculated in South Carolina?',
    answer: 'South Carolina follows the federal FLSA standard for overtime, calculated on hours worked over 40 in a week, with no separate state daily overtime rule layered on top.',
  },
  {
    question: 'Is this a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  },
  {
    question: 'How often should a South Carolina handbook be updated?',
    answer: 'Review it at least annually and immediately after any change to federal wage, safety, or leave rules. BEG HR professionals monitor these updates so policies do not fall behind.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-hr-outsourcing-handbooks-south-carolina-employee-handbook-requirements.webp", "headline": "South Carolina Employee Handbook Requirements", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>South Carolina Employee Handbook Requirements</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-hr-outsourcing-handbooks-south-carolina-employee-handbook-requirements.webp" alt={`An HR team reviewing employee documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>A compliant South Carolina employee handbook must cover federal at-will and anti-harassment basics, federal overtime rules, and a signed acknowledgment page, since state law adds few mandates beyond federal baseline.</p>

        <p>Start at the <a href="/services/hr-outsourcing">HR outsourcing</a> hub, or see how BEG supports employers directly on the <a href="/services/hr-outsourcing/south-carolina">South Carolina HR outsourcing page</a>. Want your monthly range now? <a href="/services/hr-outsourcing">Get instant pricing</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Federal Law Requires in Every Handbook</h2>

        <p>Every handbook needs a clear at-will employment statement, an EEO and anti-harassment policy covering all protected classes, an FMLA policy where the employer meets the 50-employee threshold, wage and hour basics including how overtime is calculated, a workplace safety and injury reporting policy, and a signed acknowledgment page confirming the employee received and understood the handbook. These federal elements form the foundation for every South Carolina employer's handbook.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What South Carolina Adds</h2>

        <p>South Carolina follows the federal FLSA standard for overtime, based on hours worked over 40 in a week, with no additional state daily overtime rule. South Carolina does not currently have a statewide paid sick leave mandate or a state paid family and medical leave program in the data BEG tracks, so any paid leave benefit the company offers should be described in the handbook as a company policy rather than a legal requirement, and employees should be pointed to the state labor office for anything not covered here. Because South Carolina adds relatively little on top of the federal baseline, the handbook's core value comes from precise federal-law sections and a clear at-will statement.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Policy area</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Federal baseline</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>South Carolina addition</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Paid sick leave', 'Not federally required', 'No statewide mandate identified; company policy only'],
                ['Paid family/medical leave', 'Unpaid FMLA where eligible', 'No state PFML program identified; confirm locally'],
                ['Overtime', 'FLSA weekly-over-40 baseline', 'Follows federal FLSA rules with no added state rule'],
                ['At-will statement', 'Recommended everywhere', 'Carries extra weight given limited state mandates'],
                ['Acknowledgment page', 'Best practice, not mandated', 'Recommended for every South Carolina employee'],
              ].map(([a, b, c], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{a}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{b}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Policies South Carolina Employers Commonly Get Wrong</h2>

        <p>A frequent mistake is importing sick leave or paid family leave language from a template built for a state with a statewide mandate, which creates promises South Carolina does not require. Employers also sometimes skip the at-will statement, assuming it is implied, when an explicit statement matters most in states with fewer other written protections layered around it. For anything not addressed here, confirm with your state labor office at <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">the DOL state labor office directory</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>When to Update the Handbook</h2>

        <p>Review the handbook at least annually and immediately after any federal wage, safety, or leave law change. Handbook policy decisions on PTO accrual and final pay flow straight into how payroll runs, and BEG's <a href="/services/managed-payroll">managed payroll</a> keeps them connected so any voluntary paid leave policy actually processes correctly in the next pay run. Crossing the 50-employee FMLA threshold is a good trigger point for South Carolina employers to review handbook language.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How BEG Builds and Maintains Your Handbook</h2>

        <p>On the Expert plan, BEG's certified HR professionals build a custom handbook with a South Carolina supplement, with two states included as standard. The handbook is powered by isolved and kept current as federal and South Carolina law changes. This work draws on direct hire and talent acquisition experience, so onboarding paperwork stays aligned as the company grows.</p>

        <p>Federal wage and hour guidance is available directly from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor Wage and Hour Division</a>.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>A Handbook Built for South Carolina, Not a Template.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Certified HR professionals build your custom handbook with a state supplement, powered by isolved.</p>
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does South Carolina require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"No statewide paid sick leave mandate applies based on current data. Any paid leave offered by the company is a policy choice, and the handbook should describe it as such rather than a legal entitlement."}},{"@type":"Question","name":"Does South Carolina have a state paid family or medical leave program?","acceptedAnswer":{"@type":"Answer","text":"No state PFML program applies based on current data. The handbook should rely on FMLA where the employer meets the threshold and confirm any other requirement with the state labor office."}},{"@type":"Question","name":"How is overtime calculated in South Carolina?","acceptedAnswer":{"@type":"Answer","text":"South Carolina follows the federal FLSA standard for overtime, calculated on hours worked over 40 in a week, with no separate state daily overtime rule layered on top."}},{"@type":"Question","name":"Is this a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved."}},{"@type":"Question","name":"How often should a South Carolina handbook be updated?","acceptedAnswer":{"@type":"Answer","text":"Review it at least annually and immediately after any change to federal wage, safety, or leave rules. BEG HR professionals monitor these updates so policies do not fall behind."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"South Carolina Employee Handbook Requirements","description":"What a South Carolina employee handbook must cover in 2026: federal baseline, overtime, and the policies employers most often get wrong.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"South Carolina Employee Handbook Requirements","item":"https://www.beghr.com/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "North Carolina Employee Handbook Requirements", excerpt: "What every North Carolina employer must include in a compliant employee handbook for 2026.", href: "/blog/hr-outsourcing/handbooks/north-carolina-employee-handbook-requirements" },
        { category: "HR Outsourcing", title: "Oklahoma Employee Handbook Requirements", excerpt: "What every Oklahoma employer must include in a compliant employee handbook for 2026.", href: "/blog/hr-outsourcing/handbooks/oklahoma-employee-handbook-requirements" },
        { category: "HR Outsourcing", title: "Rhode Island Employee Handbook Requirements", excerpt: "What every Rhode Island employer must include in a compliant employee handbook for 2026.", href: "/blog/hr-outsourcing/handbooks/rhode-island-employee-handbook-requirements" },
      ]} />
    </article>
  );
}
