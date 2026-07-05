import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employer of Record | HR Glossary | BEG',
  description: 'The legal entity responsible for payroll taxes, W-2s, and statutory employment obligations for a worker, which can differ from who directs the work.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/employer-of-record' },
  openGraph: { title: 'Employer of Record | HR Glossary | BEG', description: 'The legal entity responsible for payroll taxes, W-2s, and statutory employment obligations for a worker, which can differ from who directs the work.', url: 'https://www.beghr.com/resources/hr-glossary/employer-of-record', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Employer of Record | HR Glossary | BEG', description: 'The legal entity responsible for payroll taxes, W-2s, and statutory employment obligations for a worker, which can differ from who directs the work.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Who is the employer of record when a business uses a PEO?", a: "The PEO becomes the employer of record for tax and benefits purposes under the co-employment contract, while the client keeps day-to-day direction of the work." },
  { q: "Does using an employer of record eliminate all employment risk?", a: "No. Employer of record status affects tax and benefits liability. Claims tied to how work was directed, such as discrimination or wrongful termination, typically still follow the entity that supervised the employee." },
  { q: "Does BEG act as an employer of record for clients?", a: "No. BEG HR outsourcing, powered by isolved, supports clients who remain their own employer of record; BEG does not take on that legal status." },
];

export default function EmployerOfRecordPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Employer of Record?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Employer of record refers to the legal entity that holds statutory employment responsibilities, including payroll taxes and W-2 issuance, for a worker, which may differ from the entity directing daily work.</p>
        </div>

        <h2>Why employer of record status matters for employers</h2>
        <p>Employer of record status determines which entity's EIN appears on tax filings, which entity issues W-2s, and which entity's unemployment insurance account is charged for a given worker. In a standard employment relationship, one company holds this status alone. In a PEO co-employment arrangement, the PEO holds employer of record status for tax and benefits purposes while the client retains supervisory control.</p>
        <p>A common misunderstanding is treating employer of record status as a complete liability shield. It is not. Employer of record status is primarily about tax remittance and benefits administration. Claims involving how an employee was treated, supervised, or terminated generally follow the entity that made those decisions, regardless of whose EIN is on the paycheck. Employers evaluating outsourced HR or staffing arrangements should ask directly which party holds employer of record status and understand exactly what that does and does not cover.</p>
        <p>Businesses that want HR support without giving up employer of record status typically use HR outsourcing rather than a PEO or a formal employer of record service.</p>

        <h2>How BEG supports clients who keep their own employer of record status</h2>
        <p>
          BEG HR outsourcing, powered by isolved, gives clients certified HR support while they remain their own employer of record,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want HR support without giving up your EIN?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/employer-of-record', url: 'https://www.beghr.com/resources/hr-glossary/employer-of-record', name: 'Employer of Record | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Employer of Record', description: 'The legal entity responsible for payroll taxes, W-2s, and statutory employment obligations for a worker, which can differ from who directs the work.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Employer of Record', item: 'https://www.beghr.com/resources/hr-glossary/employer-of-record' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
