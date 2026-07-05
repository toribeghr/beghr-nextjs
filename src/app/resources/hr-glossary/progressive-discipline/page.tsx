import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progressive Discipline | HR Glossary | BEG',
  description: 'A structured process of escalating consequences for workplace performance or conduct problems, moving from a verbal warning toward termination.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/progressive-discipline' },
  openGraph: { title: 'Progressive Discipline | HR Glossary | BEG', description: 'A structured process of escalating consequences for workplace performance or conduct problems, moving from a verbal warning toward termination.', url: 'https://www.beghr.com/resources/hr-glossary/progressive-discipline', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Progressive Discipline | HR Glossary | BEG', description: 'A structured process of escalating consequences for workplace performance or conduct problems, moving from a verbal warning toward termination.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is progressive discipline legally required?", a: "No federal law requires it, but a documented, consistently applied process gives employers stronger evidence of a legitimate, non-discriminatory reason if a termination is later challenged." },
  { q: "Can an employer skip steps in progressive discipline?", a: "Yes, for serious misconduct like theft, violence, or safety violations, most policies allow moving straight to suspension or termination, provided the handbook makes that discretion clear." },
  { q: "What is the biggest risk in applying progressive discipline?", a: "Inconsistency. Applying different discipline standards to similarly situated employees is one of the most common pieces of evidence used to support discrimination claims." },
];

export default function ProgressiveDisciplinePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Progressive Discipline?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Progressive discipline is a structured process of escalating consequences for workplace performance or conduct problems, typically moving from a verbal warning toward termination.</p>
        </div>

        <h2>Why progressive discipline matters for employers</h2>
        <p>A typical progressive discipline sequence moves from a verbal warning, to a written warning, to a final written warning or suspension, and ultimately to termination if the problem continues. The goal is twofold: give the employee a genuine opportunity to correct the issue, and build a documented record showing the employer acted fairly and consistently if the termination is later questioned. Serious misconduct, such as theft, workplace violence, or safety violations, is usually carved out so an employer can move directly to suspension or termination without working through every step.</p>
        <p>The most common mistake employers make is applying the process inconsistently across employees, disciplining one worker more harshly than another for comparable conduct. That gap is one of the first things an investigator or plaintiff's attorney looks for in a discrimination or wrongful termination claim. Employers also frequently fail to document verbal warnings at all, leaving no record when the same behavior recurs months later and a written warning suddenly looks like it came out of nowhere.</p>
        <p>Employers who outsource HR typically get consistent documentation templates and manager coaching so discipline decisions hold up if challenged later.</p>

        <h2>How BEG helps clients apply progressive discipline consistently</h2>
        <p>
          BEG HR outsourcing, powered by isolved, gives employers documentation tools and manager guidance to apply discipline fairly and consistently across the workforce,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want discipline documentation that holds up?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/progressive-discipline', url: 'https://www.beghr.com/resources/hr-glossary/progressive-discipline', name: 'Progressive Discipline | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Progressive Discipline', description: 'A structured process of escalating consequences for workplace performance or conduct problems, moving from a verbal warning toward termination.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Progressive Discipline', item: 'https://www.beghr.com/resources/hr-glossary/progressive-discipline' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
