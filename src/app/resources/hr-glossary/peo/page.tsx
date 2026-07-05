import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PEO (Professional Employer Organization) | HR Glossary | BEG',
  description: 'A firm that enters co-employment with a client, becoming employer of record for tax and benefits while the client directs day-to-day work.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/peo' },
  openGraph: { title: 'PEO (Professional Employer Organization) | HR Glossary | BEG', description: 'A firm that enters co-employment with a client, becoming employer of record for tax and benefits while the client directs day-to-day work.', url: 'https://www.beghr.com/resources/hr-glossary/peo', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'PEO (Professional Employer Organization) | HR Glossary | BEG', description: 'A firm that enters co-employment with a client, becoming employer of record for tax and benefits while the client directs day-to-day work.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is BEG a PEO?", a: "No. BEG delivers HR outsourcing, powered by isolved. Clients remain the sole employer of record with their own EIN; BEG never enters a co-employment relationship." },
  { q: "Why do PEO fees grow over time?", a: "Many PEOs charge a percentage of total payroll rather than a flat fee, so costs rise automatically as headcount or wages grow, independent of any change in service level." },
  { q: "What happens if a business leaves a PEO?", a: "The business must re-establish its own payroll accounts, unemployment insurance history, and benefit plans, since these often run under the PEO's structure while the relationship is active." },
];

export default function PeoPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is a PEO (Professional Employer Organization)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A Professional Employer Organization enters a co-employment relationship with a client business, becoming employer of record for tax, benefits, and HR compliance while the client keeps operational control.</p>
        </div>

        <h2>Why the PEO model matters for employers</h2>
        <p>A PEO issues W-2s under its own EIN, remits payroll taxes, and pools clients into large-group benefit plans, which can produce better health insurance and retirement pricing than a small business could negotiate alone. In exchange, the client shares employer status with the PEO and often conforms to the PEO's systems, workers compensation program, and plan lineup.</p>
        <p>A frequent mistake is treating "PEO" and "outsourced HR" as interchangeable. They are not. A PEO changes who the legal employer is; HR outsourcing does not. Employers also sometimes miss that PEO pricing is often a percentage of payroll rather than a flat fee, and that workers compensation experience ratings get pooled across all of a PEO's clients, which can help or hurt depending on claims history.</p>
        <p>Employers who want compliance support and administrative relief without changing who employs their staff typically choose HR outsourcing instead, keeping their own EIN and unemployment insurance history intact.</p>

        <h2>How BEG differs from a PEO</h2>
        <p>
          BEG is not a PEO. BEG HR outsourcing, powered by isolved, gives clients certified HR support while they remain the sole employer of record,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want HR handled without co-employment?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/peo', url: 'https://www.beghr.com/resources/hr-glossary/peo', name: 'PEO (Professional Employer Organization) | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'PEO (Professional Employer Organization)', description: 'A firm that enters co-employment with a client, becoming employer of record for tax and benefits while the client directs day-to-day work.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'PEO (Professional Employer Organization)', item: 'https://www.beghr.com/resources/hr-glossary/peo' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
