import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PEO (Professional Employer Organization) | Payroll Glossary | BEG',
  description: 'A co-employment arrangement where a PEO becomes the employer of record for HR and benefits purposes while the client business directs the work.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/peo' },
  openGraph: { title: 'PEO (Professional Employer Organization) | Payroll Glossary | BEG', description: 'A co-employment arrangement where a PEO becomes the employer of record for HR and benefits purposes while the client business directs the work.', url: 'https://www.beghr.com/resources/payroll-glossary/peo', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'PEO (Professional Employer Organization) | Payroll Glossary | BEG', description: 'A co-employment arrangement where a PEO becomes the employer of record for HR and benefits purposes while the client business directs the work.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is co-employment?", a: "Co-employment is the legal arrangement in which both the PEO and the client company have employer-like rights and responsibilities over the same workers. The PEO handles HR, benefits, and payroll taxes; the client directs day-to-day work." },
  { q: "Is a PEO the same as managed payroll?", a: "No. A PEO enters a co-employment relationship and becomes the employer of record. Managed payroll processes payroll on the client's behalf while the client remains the sole employer of record with their own EIN." },
  { q: "What are the risks of using a PEO?", a: "Risks include loss of control over HR practices, pooled workers compensation experience ratings, percentage-of-payroll fees that grow with wages, and potential complications if the relationship ends, since transitioning employees back to the client's EIN can be complex." },
];

export default function PeoPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is PEO (Professional Employer Organization)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A PEO enters a co-employment relationship with client businesses, becoming the employer of record for HR, benefits, and payroll tax purposes while clients retain operational control.</p>
        </div>
        <h2>Why the PEO model matters for employers considering outsourcing</h2>
        <p>A Professional Employer Organization enters a co-employment relationship with client businesses. Under this arrangement, the PEO becomes the employer of record (EOR) for payroll tax, benefits, and HR compliance purposes, while the client company retains control over the employees' day-to-day work.</p>
        <p>Under co-employment, the PEO issues W-2s under its own EIN, files payroll taxes under its EIN, and provides access to its large-group benefits pool. Because PEOs aggregate thousands of employees across all clients, they can negotiate more competitive health insurance rates, retirement plan options, and workers compensation coverage than small businesses could obtain independently.</p>
        <p>However, the PEO model involves tradeoffs. The employer loses some control over HR practices and must conform to the PEO's systems and policies. Workers compensation experience ratings are pooled with all PEO clients, which can be beneficial or harmful depending on the client's claims history. Some PEOs charge a percentage of total payroll (2-8%) rather than a flat PEPM rate, making costs scale with payroll growth.</p>
        <p>Regulation of PEOs has grown significantly. The IRS created the Certified PEO (CPEO) designation in 2016, providing legal clarity on tax liability allocation for certified PEOs. State PEO laws vary widely.</p>
        <p>Managed payroll is a distinct alternative to the PEO model. With managed payroll, the client remains the sole employer of record, retains full control over employment practices, and pays a lower flat fee. BEG Managed Payroll is not a PEO - clients keep their own EIN and full employment authority.</p>
        <h2>How BEG Managed Payroll differs from a PEO</h2>
        <p>BEG Managed Payroll handles payroll without co-employment. Clients remain the employer of record, keep their own EIN, and pay a flat $25-$45 PEPM with no percentage-of-payroll markup. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Compare your options</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. See your exact price in 90 seconds.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>
        <p style={{ marginTop: '2rem' }}><Link href="/resources/payroll-glossary" style={{ color: '#ECAC60' }}>Back to Payroll Glossary</Link></p>
        <div style={{ borderTop: '1px solid #e5e5e5', marginTop: '3rem', paddingTop: '1.5rem' }}>
          <p style={{ margin: '0 0 0.35rem', fontWeight: '700' }}>About the author</p>
          <p style={{ margin: '0 0 0.5rem', color: '#444', fontSize: '0.9rem', lineHeight: '1.7' }}>Anthony Moretti is VP of Sales at Business Executive Group, where he builds BEG&apos;s managed payroll and HR service verticals for employers across Dallas-Fort Worth and nationwide. He writes the BEG Payroll Glossary to give employers plain-English answers on payroll and compliance.</p>
          <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>Connect with Anthony on LinkedIn &rarr;</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/peo', url: 'https://www.beghr.com/resources/payroll-glossary/peo', name: 'PEO (Professional Employer Organization) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'PEO (Professional Employer Organization)', description: 'A co-employment arrangement where a PEO becomes the employer of record for HR and benefits purposes while the client business directs the work.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'PEO (Professional Employer Organization)', item: 'https://www.beghr.com/resources/payroll-glossary/peo' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
