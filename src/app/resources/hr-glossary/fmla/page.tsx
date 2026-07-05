import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMLA (Family and Medical Leave Act) | HR Glossary | BEG',
  description: 'A federal law giving eligible employees unpaid, job-protected leave for certain family and medical reasons at covered employers.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/fmla' },
  openGraph: { title: 'FMLA (Family and Medical Leave Act) | HR Glossary | BEG', description: 'A federal law giving eligible employees unpaid, job-protected leave for certain family and medical reasons at covered employers.', url: 'https://www.beghr.com/resources/hr-glossary/fmla', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'FMLA (Family and Medical Leave Act) | HR Glossary | BEG', description: 'A federal law giving eligible employees unpaid, job-protected leave for certain family and medical reasons at covered employers.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is FMLA leave paid?", a: "No. FMLA guarantees unpaid, job-protected leave. Some states and employers separately provide paid leave benefits that can run alongside FMLA." },
  { q: "Which employers must comply with FMLA?", a: "FMLA generally applies to employers with a minimum headcount threshold within a 75-mile radius, along with public agencies and schools regardless of size." },
  { q: "Does FMLA guarantee the same job back after leave?", a: "It generally guarantees the same or an equivalent position with equivalent pay, benefits, and other terms of employment, subject to certain exceptions defined in the law." },
];

export default function FmlaPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is FMLA (Family and Medical Leave Act)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>FMLA is a federal law that provides eligible employees at covered employers with unpaid, job-protected leave for qualifying family and medical reasons.</p>
        </div>

        <h2>Why FMLA matters for employers</h2>
        <p>FMLA eligibility depends on both employer coverage, generally tied to headcount within a set radius, and employee-level criteria, including length of service and hours worked. Qualifying reasons include the employee's own serious health condition, caring for a family member with a serious health condition, and the birth, adoption, or foster placement of a child, among other categories defined by the law.</p>
        <p>A frequent mistake is assuming FMLA leave must be paid; it is unpaid unless an employer chooses to run paid leave concurrently or a separate state paid leave law applies. Another common error is mishandling intermittent or reduced-schedule leave, which FMLA permits for certain medical conditions but which requires careful tracking against the employee's total leave entitlement. Employers also sometimes fail to maintain group health coverage during FMLA leave or fail to restore the employee to an equivalent position afterward, both of which create legal exposure.</p>
        <p>Because FMLA interacts with state leave laws, paid leave programs, and disability accommodation obligations, coordinating leave administration correctly is one of the more complex compliance areas covered employers face.</p>

        <h2>How BEG helps employers administer FMLA correctly</h2>
        <p>
          BEG HR outsourcing, powered by isolved, helps employers track eligibility, documentation, and job restoration obligations under FMLA and related leave laws,
          at a fraction of the cost of a $60K to $100K in-house HR hire.{' '}
          <Link href="/services/hr-outsourcing/leave-law-lookup" style={{ color: '#ECAC60' }}>Look up leave law requirements by state</Link>.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want leave administration handled correctly?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG HR outsourcing, powered by isolved, costs a fraction of an in-house hire. See your exact price in 90 seconds.</p>
          <PricingCta service="hr-outsourcing" subline={false} />
        </div>

        <p style={{ marginTop: '2rem' }}><Link href="/resources/hr-glossary" style={{ color: '#ECAC60' }}>Back to HR Glossary</Link></p>

        <div style={{ borderTop: '1px solid #e5e5e5', marginTop: '3rem', paddingTop: '1.5rem' }}>
          <p style={{ margin: '0 0 0.35rem', fontWeight: '700' }}>About the author</p>
          <p style={{ margin: '0 0 0.5rem', color: '#444', fontSize: '0.9rem', lineHeight: '1.7' }}>Anthony Moretti is VP of Sales at Business Executive Group, where he builds BEG&apos;s HR outsourcing and managed payroll service verticals for employers nationwide. He writes the BEG HR Glossary to give employers plain-English answers on HR and compliance.</p>
          <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>Connect with Anthony on LinkedIn &rarr;</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/fmla', url: 'https://www.beghr.com/resources/hr-glossary/fmla', name: 'FMLA (Family and Medical Leave Act) | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'FMLA (Family and Medical Leave Act)', description: 'A federal law giving eligible employees unpaid, job-protected leave for certain family and medical reasons at covered employers.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'FMLA (Family and Medical Leave Act)', item: 'https://www.beghr.com/resources/hr-glossary/fmla' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
