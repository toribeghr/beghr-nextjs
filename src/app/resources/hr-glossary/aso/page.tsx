import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASO (Administrative Services Organization) | HR Glossary | BEG',
  description: 'A model where an outside firm handles payroll, benefits, and HR administration while the client stays the sole employer of record.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/aso' },
  openGraph: { title: 'ASO (Administrative Services Organization) | HR Glossary | BEG', description: 'A model where an outside firm handles payroll, benefits, and HR administration while the client stays the sole employer of record.', url: 'https://www.beghr.com/resources/hr-glossary/aso', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'ASO (Administrative Services Organization) | HR Glossary | BEG', description: 'A model where an outside firm handles payroll, benefits, and HR administration while the client stays the sole employer of record.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How is an ASO different from a PEO?", a: "An ASO does not enter co-employment. The client stays the sole employer of record with its own EIN, unlike a PEO where employer status is shared under contract." },
  { q: "Does an ASO offer benefits like a PEO does?", a: "Some ASOs administer the client's own benefit plans rather than offering a pooled master plan. The client's broker and carrier relationships typically stay intact." },
  { q: "Is ASO the right fit for every business?", a: "It fits businesses that want administrative and compliance support but do not want to share employer status or move their EIN and unemployment history to a third party." },
];

export default function AsoPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is an ASO (Administrative Services Organization)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An Administrative Services Organization handles payroll processing, benefits administration, and HR support for a client business, which remains the sole employer of record throughout the engagement.</p>
        </div>

        <h2>Why the ASO model matters for employers</h2>
        <p>An ASO functions as a vendor rather than a co-employer. The client keeps its own EIN, its own unemployment insurance account, and full legal responsibility as the employer, while the ASO delivers services such as payroll processing, benefits administration support, and HR compliance guidance under a service agreement.</p>
        <p>Employers frequently confuse ASO with PEO because both outsource HR-adjacent work. The distinction that matters legally and financially is employer of record status: a PEO becomes a co-employer, while an ASO does not touch that status at all. Missing this distinction leads some employers to assume they've transferred liability they still fully hold, or to overpay for co-employment they never needed. Since the client keeps its own EIN, exiting an ASO relationship is also typically far less disruptive than unwinding a PEO contract.</p>
        <p>Businesses evaluating outsourced HR support should confirm upfront whether a vendor is proposing an ASO arrangement, a PEO arrangement, or a broader HR outsourcing relationship, since pricing structure and legal exposure differ across all three.</p>

        <h2>How BEG delivers ASO-style support without co-employment</h2>
        <p>
          BEG HR outsourcing, powered by isolved, delivers administrative and compliance support while clients remain the sole employer of record,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want HR administration handled, EIN untouched?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/aso', url: 'https://www.beghr.com/resources/hr-glossary/aso', name: 'ASO (Administrative Services Organization) | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'ASO (Administrative Services Organization)', description: 'A model where an outside firm handles payroll, benefits, and HR administration while the client stays the sole employer of record.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'ASO (Administrative Services Organization)', item: 'https://www.beghr.com/resources/hr-glossary/aso' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
