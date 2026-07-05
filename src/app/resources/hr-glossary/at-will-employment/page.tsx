import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Will Employment | HR Glossary | BEG',
  description: 'The default employment relationship in which either the employer or the employee can end the job at any time, for any lawful reason or no reason.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/at-will-employment' },
  openGraph: { title: 'At-Will Employment | HR Glossary | BEG', description: 'The default employment relationship in which either the employer or the employee can end the job at any time, for any lawful reason or no reason.', url: 'https://www.beghr.com/resources/hr-glossary/at-will-employment', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'At-Will Employment | HR Glossary | BEG', description: 'The default employment relationship in which either the employer or the employee can end the job at any time, for any lawful reason or no reason.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does at-will employment mean an employer can fire anyone for any reason?", a: "No. Employers still cannot terminate for illegal reasons such as discrimination, retaliation for protected activity, or in violation of an employment contract or public policy." },
  { q: "Can an employee handbook accidentally cancel at-will status?", a: "Yes. Language promising termination only \"for cause\" or outlining a mandatory disciplinary process can be read as an implied contract that overrides at-will status if not drafted carefully." },
  { q: "Do all states recognize at-will employment the same way?", a: "No. Most states default to at-will employment, but courts recognize different exceptions, such as public policy or implied contract exceptions, so practical protections vary by state." },
];

export default function AtWillEmploymentPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is At-Will Employment?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>At-will employment is the default employment relationship in which either the employer or the employee can end the job at any time, for any lawful reason or no reason at all.</p>
        </div>

        <h2>Why at-will employment matters for employers</h2>
        <p>Most states presume employment is at-will unless a contract, collective bargaining agreement, or specific policy says otherwise. That means an employer generally does not need to prove "cause" to end employment, and an employee is equally free to resign without notice. This flexibility is often misunderstood as unlimited discretion, when in practice it is bounded on all sides by anti-discrimination law, retaliation protections, and any promises the employer has made in writing or in practice.</p>
        <p>The most common mistake employers make is drafting handbooks or offer letters that unintentionally undo at-will status. Phrases like "employees will only be terminated for just cause" or a rigid, numbered disciplinary process presented as mandatory can create an implied contract that a court may enforce against the employer later. Another frequent error is documenting a termination reason that conflicts with the real reason, which can turn a lawful at-will decision into evidence of pretext if the employee alleges discrimination.</p>
        <p>Employers who outsource HR typically get handbook language and termination documentation reviewed to preserve at-will status while staying compliant with anti-discrimination and retaliation rules.</p>

        <h2>How BEG helps clients protect at-will status</h2>
        <p>
          BEG HR outsourcing, powered by isolved, reviews handbook language and termination practices to help employers preserve at-will protections without exposing themselves to claims,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want your at-will status protected?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/at-will-employment', url: 'https://www.beghr.com/resources/hr-glossary/at-will-employment', name: 'At-Will Employment | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'At-Will Employment', description: 'The default employment relationship in which either the employer or the employee can end the job at any time, for any lawful reason or no reason.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'At-Will Employment', item: 'https://www.beghr.com/resources/hr-glossary/at-will-employment' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
