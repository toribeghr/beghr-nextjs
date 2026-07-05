import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oregon Employee Handbook Rules (2026 Guide) | BEG',
  description: 'What an Oregon employee handbook must cover in 2026: federal baseline, paid sick leave, paid leave, regional wage zones, and employer mistakes.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements' },
  openGraph: {
    title: 'Oregon Employee Handbook Rules (2026 Guide) | BEG',
    description: 'What an Oregon employee handbook must cover in 2026: federal baseline, paid sick leave, paid leave, regional wage zones, and employer mistakes.',
    url: 'https://www.beghr.com/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Oregon Employee Handbook Rules (2026 Guide) | BEG', description: 'What an Oregon employee handbook must cover in 2026: federal baseline, paid sick leave, paid leave, regional wage zones, and employer mistakes.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Does Oregon require paid sick leave?',
    answer: 'Yes. Oregon has a statewide paid sick leave mandate, so the handbook needs a dedicated accrual and usage policy rather than a generic vacation policy adapted from another state.',
  },
  {
    question: 'Does Oregon have a state paid family or medical leave program?',
    answer: 'Yes. Oregon runs a state paid leave program, and the handbook should explain how it works alongside FMLA so employees understand which benefit applies and how the two interact during a leave event.',
  },
  {
    question: 'Why does Oregon have different minimum wage zones?',
    answer: 'Oregon sets a standard rate, a higher rate for the Portland metro area, and a lower rate for non-urban counties, adjusted annually each July. The handbook should describe zone-based pay in words rather than by dollar amount.',
  },
  {
    question: 'Is this a PEO?',
    answer: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  },
  {
    question: 'How often should an Oregon handbook be updated?',
    answer: 'Review it at least annually given the July wage adjustment, and immediately after any change to sick leave or paid leave rules. BEG HR professionals track these updates continuously.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Oregon Employee Handbook Requirements", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements"}) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HR Outsourcing</p>
              <h1>Oregon Employee Handbook Requirements</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>A compliant Oregon employee handbook must cover federal at-will and anti-harassment basics, statewide paid sick leave, the state paid leave program, regional wage zones, and an acknowledgment page.</p>

        <p>Start at the <a href="/services/hr-outsourcing">HR outsourcing</a> hub, or see how BEG supports employers directly on the <a href="/services/hr-outsourcing/oregon">Oregon HR outsourcing page</a>. Want your monthly range now? <a href="/services/hr-outsourcing">Get instant pricing</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Federal Law Requires in Every Handbook</h2>

        <p>Every handbook needs a clear at-will employment statement, an EEO and anti-harassment policy covering all protected classes, an FMLA policy where the employer meets the 50-employee threshold, wage and hour basics including how overtime is calculated, a workplace safety and injury reporting policy, and a signed acknowledgment page confirming the employee received and understood the handbook. These federal requirements apply in Oregon just as they do everywhere else.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What Oregon Adds</h2>

        <p>Oregon requires paid sick leave statewide, so the handbook needs a specific accrual, usage, and carryover policy. Oregon also runs a state paid leave program that operates separately from FMLA, and the handbook should explain both so employees understand which applies during a given leave event and how the two can work together. Oregon sets three different minimum wage zones: a standard rate, a higher rate for the Portland metro area, and a lower rate for non-urban counties, adjusted annually each July 1, so the handbook should describe pay as zone-based without quoting specific figures that change every year. Overtime generally follows the weekly-over-40 standard, though Oregon does apply daily overtime rules in some mill and factory settings, which employers in those industries should flag specifically.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Policy area</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Federal baseline</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Oregon addition</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Paid sick leave', 'Not federally required', 'Statewide paid sick leave mandate applies'],
                ['Paid family/medical leave', 'Unpaid FMLA where eligible', 'State paid leave program applies'],
                ['Wage zones', 'Single federal minimum wage', 'Standard, Portland metro, and non-urban zones, adjusted each July'],
                ['Overtime', 'FLSA weekly-over-40 baseline', 'Weekly over 40, plus daily rules in some mills and factories'],
                ['Acknowledgment page', 'Best practice, not mandated', 'Recommended for every Oregon employee'],
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

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Policies Oregon Employers Commonly Get Wrong</h2>

        <p>A recurring mistake is applying the statewide standard wage zone to Portland-metro employees when the higher metro rate applies, or the reverse for non-urban county staff. Employers also frequently blur the line between paid sick leave and the state paid leave program, when Oregon treats them as separate benefits with different triggers and durations. Mill and factory employers sometimes miss the daily overtime rule that applies in their industry specifically. For anything not addressed here, confirm with your state labor office at <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">the DOL state labor office directory</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>When to Update the Handbook</h2>

        <p>Review the handbook every year around the July 1 wage adjustment, and immediately after any change to sick leave or paid leave program rules. Handbook policy decisions on PTO accrual and final pay flow straight into how payroll runs, and BEG's <a href="/services/managed-payroll">managed payroll</a> keeps them connected so the correct wage zone and leave accruals show up in the next pay run. Opening a location in a different wage zone is a particularly important trigger point for Oregon employers.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>How BEG Builds and Maintains Your Handbook</h2>

        <p>On the Expert plan, BEG's certified HR professionals build a custom handbook with an Oregon supplement, with two states included as standard. The handbook is powered by isolved and kept current as Oregon's wage zones and leave programs change. This work draws on direct hire and talent acquisition experience, so new hire paperwork reflects the correct wage zone from day one.</p>

        <p>Federal wage and hour guidance is available directly from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor Wage and Hour Division</a>.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>A Handbook Built for Oregon, Not a Template.</h3>
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Oregon require paid sick leave?","acceptedAnswer":{"@type":"Answer","text":"Yes. Oregon has a statewide paid sick leave mandate, so the handbook needs a dedicated accrual and usage policy rather than a generic vacation policy adapted from another state."}},{"@type":"Question","name":"Does Oregon have a state paid family or medical leave program?","acceptedAnswer":{"@type":"Answer","text":"Yes. Oregon runs a state paid leave program, and the handbook should explain how it works alongside FMLA so employees understand which benefit applies and how the two interact during a leave event."}},{"@type":"Question","name":"Why does Oregon have different minimum wage zones?","acceptedAnswer":{"@type":"Answer","text":"Oregon sets a standard rate, a higher rate for the Portland metro area, and a lower rate for non-urban counties, adjusted annually each July. The handbook should describe zone-based pay in words rather than by dollar amount."}},{"@type":"Question","name":"Is this a PEO?","acceptedAnswer":{"@type":"Answer","text":"No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved."}},{"@type":"Question","name":"How often should an Oregon handbook be updated?","acceptedAnswer":{"@type":"Answer","text":"Review it at least annually given the July wage adjustment, and immediately after any change to sick leave or paid leave rules. BEG HR professionals track these updates continuously."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Oregon Employee Handbook Requirements","description":"What an Oregon employee handbook must cover in 2026: federal baseline, paid sick leave, paid leave, regional wage zones, and employer mistakes.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"HR Outsourcing","item":"https://www.beghr.com/blog/hr-outsourcing"},{"@type":"ListItem","position":4,"name":"Oregon Employee Handbook Requirements","item":"https://www.beghr.com/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "HR Outsourcing", title: "Pennsylvania Employee Handbook Requirements", excerpt: "What every Pennsylvania employer must include in a compliant employee handbook for 2026.", href: "/blog/hr-outsourcing/handbooks/pennsylvania-employee-handbook-requirements" },
        { category: "HR Outsourcing", title: "Rhode Island Employee Handbook Requirements", excerpt: "What every Rhode Island employer must include in a compliant employee handbook for 2026.", href: "/blog/hr-outsourcing/handbooks/rhode-island-employee-handbook-requirements" },
        { category: "HR Outsourcing", title: "New York Employee Handbook Requirements", excerpt: "What every New York employer must include in a compliant employee handbook for 2026.", href: "/blog/hr-outsourcing/handbooks/new-york-employee-handbook-requirements" },
      ]} />
    </article>
  );
}
