import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tip Credit | HR Glossary | BEG',
  description: 'A wage rule letting employers count a portion of an employee\'s tips toward the minimum wage obligation, provided strict conditions are met.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/tip-credit' },
  openGraph: { title: 'Tip Credit | HR Glossary | BEG', description: 'A wage rule letting employers count a portion of an employee\'s tips toward the minimum wage obligation, provided strict conditions are met.', url: 'https://www.beghr.com/resources/hr-glossary/tip-credit', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Tip Credit | HR Glossary | BEG', description: 'A wage rule letting employers count a portion of an employee\'s tips toward the minimum wage obligation, provided strict conditions are met.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can an employer take a tip credit for any tipped employee?", a: "Only for employees who customarily and regularly receive tips, and only after giving proper advance notice of the tip credit arrangement and the applicable cash wage." },
  { q: "What happens if tips plus cash wage don't reach minimum wage?", a: "The employer must make up the difference. The tip credit only applies as long as actual tips bring total pay up to at least the applicable minimum wage for every hour worked." },
  { q: "Do all states allow a tip credit?", a: "No. Some states do not permit any tip credit and require the full state minimum wage in cash regardless of tips, so employers with multi-state tipped staff must track each state's rule separately." },
];

export default function TipCreditPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is a Tip Credit?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A tip credit is a wage rule that lets an employer count a portion of an employee&apos;s tips toward its minimum wage obligation, provided strict notice and pay conditions are met.</p>
        </div>

        <h2>Why the tip credit matters for employers</h2>
        <p>Under a tip credit arrangement, an employer pays a reduced direct cash wage to a tipped employee and counts a portion of that employee&apos;s tips toward the rest of the minimum wage requirement. The arrangement only works if the employee actually earns enough in tips to close the gap; if tips fall short in any workweek, the employer owes the difference in cash. Employers must also give tipped employees advance notice of exactly how the tip credit works before applying it, and the rules around tip pooling, service charges, and dual roles that mix tipped and non-tipped work add further layers of complexity.</p>
        <p>The most common mistake employers make is applying a tip credit without giving the required notice, which can invalidate the credit entirely and expose the employer to full minimum wage liability retroactively. Employers also frequently mishandle tip pools by including managers or back-of-house staff who are not eligible to participate, or by not tracking hours carefully enough to catch workweeks where tips did not make up the shortfall. State rules vary significantly, and some states do not allow a tip credit at all, so a policy that works in one location can be unlawful in another.</p>
        <p>Employers who outsource payroll and HR typically get tip credit compliance built into payroll processing so shortfalls and notice requirements are caught automatically.</p>

        <h2>How BEG helps clients manage tip credit compliance</h2>
        <p>
          BEG HR outsourcing, powered by isolved, helps employers track tip credit notice requirements and wage shortfalls across every location and state,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want tip credit compliance handled for you?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/tip-credit', url: 'https://www.beghr.com/resources/hr-glossary/tip-credit', name: 'Tip Credit | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Tip Credit', description: 'A wage rule letting employers count a portion of an employee\'s tips toward the minimum wage obligation, provided strict conditions are met.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Tip Credit', item: 'https://www.beghr.com/resources/hr-glossary/tip-credit' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
