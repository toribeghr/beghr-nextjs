import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HRO (HR Outsourcing) | HR Glossary | BEG',
  description: 'Contracting HR functions like compliance, handbooks, and leave administration to an outside provider without changing employer of record status.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/hro' },
  openGraph: { title: 'HRO (HR Outsourcing) | HR Glossary | BEG', description: 'Contracting HR functions like compliance, handbooks, and leave administration to an outside provider without changing employer of record status.', url: 'https://www.beghr.com/resources/hr-glossary/hro', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'HRO (HR Outsourcing) | HR Glossary | BEG', description: 'Contracting HR functions like compliance, handbooks, and leave administration to an outside provider without changing employer of record status.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What does HRO typically include?", a: "Common scope includes handbook development, policy updates, leave administration, hiring paperwork, HR compliance guidance, and access to certified HR professionals for day-to-day questions." },
  { q: "Does HRO change who employs the staff?", a: "No. HRO is a services relationship. The client company remains the employer of record throughout, unlike a PEO arrangement." },
  { q: "Is HRO only for large companies?", a: "No. Smaller employers often benefit the most, since they typically cannot justify a full in-house HR department but still carry the same compliance obligations as larger employers." },
];

export default function HroPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is HRO (HR Outsourcing)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>HRO, or HR outsourcing, is the practice of contracting HR functions such as compliance, handbooks, and leave administration to an outside provider while the client remains the employer of record.</p>
        </div>

        <h2>Why HRO matters for employers</h2>
        <p>Most small and mid-size employers face the same compliance obligations as much larger companies, including handbook requirements, leave laws, hiring paperwork, and wage and hour rules, but without the budget to staff a dedicated HR department. HRO closes that gap by giving employers access to certified HR professionals, current policy documents, and ongoing compliance monitoring for a predictable monthly cost.</p>
        <p>A common mistake is assuming any outsourced HR relationship is a PEO. It is not. Under HRO, the client keeps its own EIN, its own unemployment insurance history, and full authority over hiring and firing decisions; the provider supplies expertise and administrative support rather than becoming a co-employer. Employers should also confirm exactly which functions are included, since HRO scope varies by provider and can range from handbook support alone to full compliance monitoring across every state where the business operates.</p>
        <p>HRO is often the right fit for employers who want the HR department without the cost of building one internally and without the co-employment tradeoffs of a PEO.</p>

        <h2>How BEG delivers HR outsourcing</h2>
        <p>
          BEG HR outsourcing, powered by isolved, gives employers certified HR professionals, state-specific handbooks, and compliance monitoring,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want the HR department without the headcount?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/hro', url: 'https://www.beghr.com/resources/hr-glossary/hro', name: 'HRO (HR Outsourcing) | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'HRO (HR Outsourcing)', description: 'Contracting HR functions like compliance, handbooks, and leave administration to an outside provider without changing employer of record status.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'HRO (HR Outsourcing)', item: 'https://www.beghr.com/resources/hr-glossary/hro' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
