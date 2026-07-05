import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Co-Employment | HR Glossary | BEG',
  description: 'A contractual arrangement where a PEO becomes employer of record for tax and benefits while the client business keeps day-to-day direction of staff.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/co-employment' },
  openGraph: { title: 'Co-Employment | HR Glossary | BEG', description: 'A contractual arrangement where a PEO becomes employer of record for tax and benefits while the client business keeps day-to-day direction of staff.', url: 'https://www.beghr.com/resources/hr-glossary/co-employment', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Co-Employment | HR Glossary | BEG', description: 'A contractual arrangement where a PEO becomes employer of record for tax and benefits while the client business keeps day-to-day direction of staff.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does co-employment mean my employees work for someone else?", a: "No. Employees still report to you and do the same work every day. Legally, their W-2s, payroll taxes, and benefits enrollment run through the PEO under the co-employment contract." },
  { q: "Does co-employment protect a business from lawsuits?", a: "Only partially. Tax remittance liability can shift to a certified PEO, but discrimination, wrongful termination, and wage claims still follow the entity that made the employment decision." },
  { q: "Is HR outsourcing the same as co-employment?", a: "No. HR outsourcing and ASO models leave the client as the sole employer of record. BEG is not a PEO and does not enter co-employment; clients keep their own EIN." },
];

export default function CoEmploymentPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Co-Employment?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Co-employment is a contractual arrangement in which a PEO becomes employer of record for tax, payroll, and benefits purposes while the client business retains day-to-day control of employees.</p>
        </div>

        <h2>Why co-employment matters for employers</h2>
        <p>Under co-employment, two organizations hold employer-like responsibilities over the same workforce. The PEO typically issues W-2s under its own EIN, files payroll taxes, and administers a pooled benefits plan. The client company keeps functional control: hiring, firing, scheduling, and daily supervision. Businesses choose this structure to gain access to large-group benefit rates and offload payroll tax administration.</p>
        <p>The most common mistake employers make is assuming co-employment eliminates their legal exposure. It does not. Liability for discrimination, retaliation, and wage and hour violations still attaches to whichever entity directed the work, regardless of who signs the paychecks. Employers also underestimate exit friction: leaving a co-employment arrangement means rebuilding payroll accounts, unemployment insurance history, and benefit plans from scratch, often best timed to a plan year boundary.</p>
        <p>Employers who want the compliance support without changing who employs their staff typically look at HR outsourcing instead. That model keeps the client as the sole employer of record while outside professionals handle the HR workload.</p>

        <h2>How BEG helps clients avoid unnecessary co-employment</h2>
        <p>
          BEG HR outsourcing, powered by isolved, gives employers certified HR support without entering co-employment.
          Clients keep their own EIN and full employer authority at a fraction of the cost of a $60K to $100K in-house HR hire.{' '}
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want HR fully handled, without co-employment?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/co-employment', url: 'https://www.beghr.com/resources/hr-glossary/co-employment', name: 'Co-Employment | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Co-Employment', description: 'A contractual arrangement where a PEO becomes employer of record for tax and benefits while the client business keeps day-to-day direction of staff.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Co-Employment', item: 'https://www.beghr.com/resources/hr-glossary/co-employment' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
