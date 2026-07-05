import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joint Employer | HR Glossary | BEG',
  description: 'A legal status where two separate businesses are both treated as an employee\'s employer, sharing liability for wage, hour, and labor law compliance.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/joint-employer' },
  openGraph: { title: 'Joint Employer | HR Glossary | BEG', description: 'A legal status where two separate businesses are both treated as an employee\'s employer, sharing liability for wage, hour, and labor law compliance.', url: 'https://www.beghr.com/resources/hr-glossary/joint-employer', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Joint Employer | HR Glossary | BEG', description: 'A legal status where two separate businesses are both treated as an employee\'s employer, sharing liability for wage, hour, and labor law compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is joint employer status the same as co-employment?", a: "They overlap but are not identical. Co-employment usually describes a contractual PEO relationship, while joint employer status is a legal finding based on the level of control a business exercises over workers, contractual or not." },
  { q: "What determines joint employer status?", a: "Regulators and courts look at factors such as who controls hiring, firing, scheduling, pay rates, and supervision. The more control a second entity exercises, the more likely joint employer status applies." },
  { q: "Does using a staffing agency create joint employer risk?", a: "It can. If the business directing the staffing agency's workers also controls scheduling, discipline, or pay decisions, both the agency and the business may be treated as joint employers." },
];

export default function JointEmployerPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is a Joint Employer?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Joint employer is a legal status in which two separate businesses are both treated as an employee&apos;s employer, sharing liability for wage, hour, and labor law compliance.</p>
        </div>

        <h2>Why joint employer status matters for employers</h2>
        <p>Joint employer status arises when regulators or courts determine that more than one business exercises meaningful control over the same worker, such as staffing arrangements, franchise relationships, or subcontracted labor. Unlike co-employment, which is typically a deliberate contractual arrangement with a PEO, joint employer status can be found even when no such contract exists, based purely on how much control a business actually exercises over hiring, firing, scheduling, discipline, or pay.</p>
        <p>The most common mistake employers make is assuming that using a staffing agency or contractor fully insulates them from labor law liability. It does not automatically. If the business directing the work also controls scheduling, supervises daily tasks, or has input into pay or discipline decisions, it can be found jointly liable for wage and hour violations, unfair labor practices, or safety failures alongside the staffing agency or contractor. Franchise businesses face similar exposure when a franchisor exerts too much operational control over a franchisee's employees.</p>
        <p>Employers who outsource HR typically get help structuring staffing and vendor relationships to minimize unintended joint employer exposure while staying compliant.</p>

        <h2>How BEG helps clients manage joint employer risk</h2>
        <p>
          BEG HR outsourcing, powered by isolved, helps employers structure staffing and vendor relationships to limit unintended joint employer exposure,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want help managing joint employer risk?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/joint-employer', url: 'https://www.beghr.com/resources/hr-glossary/joint-employer', name: 'Joint Employer | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Joint Employer', description: 'A legal status where two separate businesses are both treated as an employee\'s employer, sharing liability for wage, hour, and labor law compliance.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Joint Employer', item: 'https://www.beghr.com/resources/hr-glossary/joint-employer' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
