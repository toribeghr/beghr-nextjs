import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional HR | HR Glossary | BEG',
  description: 'Part-time or outsourced access to experienced HR expertise, giving employers senior-level guidance without a full-time HR salary.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/fractional-hr' },
  openGraph: { title: 'Fractional HR | HR Glossary | BEG', description: 'Part-time or outsourced access to experienced HR expertise, giving employers senior-level guidance without a full-time HR salary.', url: 'https://www.beghr.com/resources/hr-glossary/fractional-hr', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Fractional HR | HR Glossary | BEG', description: 'Part-time or outsourced access to experienced HR expertise, giving employers senior-level guidance without a full-time HR salary.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How is fractional HR different from a full HR outsourcing engagement?", a: "Fractional HR often means part-time access to a single HR professional's time, while broader HR outsourcing engagements typically bundle a team, technology, and compliance monitoring into one service." },
  { q: "Is fractional HR only for very small businesses?", a: "It is most common among growing companies without enough HR workload to justify a full-time hire, but the model can also supplement an existing HR team that needs specialized expertise." },
  { q: "What tasks does fractional HR typically cover?", a: "Common tasks include policy development, handbook updates, compliance questions, hiring process support, and manager coaching on documentation and discipline." },
];

export default function FractionalHrPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Fractional HR?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Fractional HR is part-time or outsourced access to experienced HR expertise, letting employers get senior-level guidance without carrying a full-time HR salary and benefits load.</p>
        </div>

        <h2>Why fractional HR matters for employers</h2>
        <p>Many growing businesses reach a point where founders, office managers, or operations staff are handling HR questions they are not trained for, but the company does not yet have enough HR workload to justify a full-time hire. Fractional HR fills that gap: an experienced HR professional supports the company on an ongoing but part-time basis, handling policy questions, employee relations issues, and compliance concerns as they arise.</p>
        <p>The most common mistake employers make with fractional HR is underestimating scope creep. A single fractional HR contact can become overloaded as the company grows, and employers should periodically reassess whether part-time support still matches the actual volume of HR work. Employers should also clarify whether the fractional HR arrangement includes compliance monitoring across all the states where they have employees, since remote and multi-state teams are the fastest way fractional support gets outgrown.</p>
        <p>Fractional HR is closely related to broader HR outsourcing, which typically adds a full team, technology platform, and structured compliance monitoring rather than a single point of contact.</p>

        <h2>How BEG scales HR support as companies grow</h2>
        <p>
          BEG HR outsourcing, powered by isolved, gives employers a full HR team and compliance monitoring rather than a single fractional contact,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Outgrown a single fractional HR contact?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/fractional-hr', url: 'https://www.beghr.com/resources/hr-glossary/fractional-hr', name: 'Fractional HR | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Fractional HR', description: 'Part-time or outsourced access to experienced HR expertise, giving employers senior-level guidance without a full-time HR salary.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Fractional HR', item: 'https://www.beghr.com/resources/hr-glossary/fractional-hr' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
