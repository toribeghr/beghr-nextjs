import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form I-9 | HR Glossary | BEG',
  description: 'The federal form employers must complete for every new hire to verify identity and authorization to work in the United States.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/i-9' },
  openGraph: { title: 'Form I-9 | HR Glossary | BEG', description: 'The federal form employers must complete for every new hire to verify identity and authorization to work in the United States.', url: 'https://www.beghr.com/resources/hr-glossary/i-9', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Form I-9 | HR Glossary | BEG', description: 'The federal form employers must complete for every new hire to verify identity and authorization to work in the United States.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How soon must Form I-9 be completed for a new hire?", a: "Section 1 must be completed by the employee no later than their first day of work, and the employer's Section 2 review of documents must generally be completed within three business days of the start date." },
  { q: "How long must employers retain Form I-9?", a: "Employers must retain completed forms for a set period after hire or after termination, whichever is later, and the forms must be available for inspection if requested by authorized government officials." },
  { q: "What are common I-9 mistakes?", a: "Frequent errors include missing signatures, incomplete sections, accepting documents that do not meet the form's requirements, and failing to reverify work authorization when required." },
];

export default function I9Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Form I-9?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Form I-9 is the federal document employers must complete for every new hire to verify the employee's identity and authorization to work in the United States.</p>
        </div>

        <h2>Why Form I-9 matters for employers</h2>
        <p>Every employer in the country must complete Form I-9 for each new employee, regardless of company size or industry. The process requires the employee to attest to work authorization and present specific documents, while the employer reviews those documents and certifies the review within the required timeframe.</p>
        <p>I-9 errors are among the most common compliance findings in HR audits. Frequent mistakes include missing employer or employee signatures, incomplete sections, accepting a combination of documents that does not satisfy the form's requirements, and failing to track reverification dates for employees whose work authorization has an expiration date. Retention is another common gap: employers must keep completed forms for a defined period and produce them promptly if requested, and disorganized recordkeeping can turn a minor paperwork issue into a documented compliance failure.</p>
        <p>Because I-9 penalties can apply per form and per violation, consistent processes and periodic internal audits are the most effective way employers reduce exposure.</p>

        <h2>How BEG helps employers manage I-9 compliance</h2>
        <p>
          BEG HR outsourcing, powered by isolved, helps employers standardize I-9 completion, tracking, and retention across their entire workforce,
          at a fraction of the cost of a $60K to $100K in-house HR hire.{' '}
          <Link href="/services/hr-outsourcing" style={{ color: '#ECAC60' }}>See how BEG HR outsourcing works</Link>.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want hiring paperwork done right, every time?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/i-9', url: 'https://www.beghr.com/resources/hr-glossary/i-9', name: 'Form I-9 | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form I-9', description: 'The federal form employers must complete for every new hire to verify identity and authorization to work in the United States.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form I-9', item: 'https://www.beghr.com/resources/hr-glossary/i-9' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
