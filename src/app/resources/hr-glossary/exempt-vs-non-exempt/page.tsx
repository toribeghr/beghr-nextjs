import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exempt vs Non-Exempt | HR Glossary | BEG',
  description: 'The classification that determines whether an employee must receive overtime pay, based on job duties and salary structure under federal wage law.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/exempt-vs-non-exempt' },
  openGraph: { title: 'Exempt vs Non-Exempt | HR Glossary | BEG', description: 'The classification that determines whether an employee must receive overtime pay, based on job duties and salary structure under federal wage law.', url: 'https://www.beghr.com/resources/hr-glossary/exempt-vs-non-exempt', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Exempt vs Non-Exempt | HR Glossary | BEG', description: 'The classification that determines whether an employee must receive overtime pay, based on job duties and salary structure under federal wage law.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does paying a salary automatically make an employee exempt?", a: "No. Exempt status requires meeting a specific duties test, such as executive, administrative, or professional job duties, in addition to being paid on a salary basis above the applicable threshold." },
  { q: "Can an exempt employee's classification change over time?", a: "Yes. If job duties shift toward routine, non-discretionary tasks, or if pay structure changes, an employee who was properly exempt can become misclassified and owed back overtime." },
  { q: "What is the risk of misclassifying a non-exempt employee as exempt?", a: "Employers can owe back overtime pay, liquidated damages, and penalties, often reaching back multiple years and covering every similarly classified employee, not just one worker." },
];

export default function ExemptVsNonExemptPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Exempt vs Non-Exempt?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Exempt vs non-exempt is the classification that determines whether an employee must receive overtime pay, based on job duties and salary structure under federal wage law.</p>
        </div>

        <h2>Why exempt vs non-exempt classification matters for employers</h2>
        <p>Non-exempt employees must receive overtime pay for hours worked beyond the standard workweek, while exempt employees do not, provided they meet both a salary basis test and a duties test tied to executive, administrative, professional, or similar roles. Classification is not a title exercise. An employee called a "manager" who spends most of the workday on routine, non-discretionary tasks may still be non-exempt regardless of the job title on paper.</p>
        <p>The most common mistake employers make is assuming that paying someone a flat salary automatically makes them exempt. It does not. Both the salary structure and the actual duties performed have to satisfy the applicable test, and duties can drift over time as roles evolve, turning a properly classified position into a misclassified one without anyone updating the paperwork. Employers also frequently misclassify by industry convention rather than by evaluating the specific role, which spreads the same error across an entire job category.</p>
        <p>Employers who outsource HR and payroll typically get proactive classification reviews as part of the service, catching drift before it becomes a wage claim.</p>

        <h2>How BEG helps clients manage exempt and non-exempt classification</h2>
        <p>
          BEG HR outsourcing, powered by isolved, reviews job duties and pay structure to help employers classify roles correctly and stay ahead of wage and hour risk,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want help getting classification right?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/exempt-vs-non-exempt', url: 'https://www.beghr.com/resources/hr-glossary/exempt-vs-non-exempt', name: 'Exempt vs Non-Exempt | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Exempt vs Non-Exempt', description: 'The classification that determines whether an employee must receive overtime pay, based on job duties and salary structure under federal wage law.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Exempt vs Non-Exempt', item: 'https://www.beghr.com/resources/hr-glossary/exempt-vs-non-exempt' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
