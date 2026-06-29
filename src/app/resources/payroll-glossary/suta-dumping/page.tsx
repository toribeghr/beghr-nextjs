import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SUTA Dumping | Payroll Glossary | BEG',
  description: 'Illegal scheme of moving employees to a new entity to obtain a lower state unemployment tax rate -- states penalize it aggressively.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/suta-dumping' },
  openGraph: {
    title: 'SUTA Dumping | Payroll Glossary | BEG',
    description: 'Illegal scheme of moving employees to a new entity to obtain a lower state unemployment tax rate -- states penalize it aggressively.',
    url: 'https://www.beghr.com/resources/payroll-glossary/suta-dumping',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SUTA Dumping | Payroll Glossary | BEG', description: 'Illegal scheme of moving employees to a new entity to obtain a lower state unemployment tax rate -- states penalize it aggressively.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do employers have to manage SUTA Dumping themselves?", a: "No. A managed payroll provider handles SUTA Dumping as part of full-service payroll. BEG manages this for clients at $25-$45 PEPM with no system migration required." },
  { q: "What happens if SUTA Dumping is handled incorrectly?", a: "Errors related to SUTA Dumping can trigger IRS penalties, state agency assessments, or employee disputes. Catching and correcting errors before filing is far less costly than after-the-fact corrections." },
  { q: "How does BEG handle SUTA Dumping for managed payroll clients?", a: "BEG tracks, calculates, and remits everything related to SUTA Dumping as part of fully managed payroll. Clients do not need to monitor compliance -- that is included in the service at $25-$45 PEPM." },
];

export default function SutaDumpingPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is SUTA Dumping?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The illegal practice of transferring employees or payroll to a newly formed entity to obtain a lower state unemployment tax rate. States detect and penalize SUTA dumping with mandatory rate assignments and fines.</p>
        </div>

        <h2>Why SUTA Dumping matters for employers</h2>
        <p>SUTA dumping schemes typically involve an owner creating a new business entity, transferring payroll to the new entity, and applying for a new employer SUI rate -- which is always lower than a seasoned employer's experience-rated rate. States have enacted anti-SUTA-dumping laws under federal mandate (Public Law 108-295) that require states to assign the predecessor employer's rate to successor entities in transfer-of-business situations.</p>
        <p>Violations result in mandatory rate assignment at the highest state SUI rate, substantial fines, and in some states, criminal charges against the individuals who arranged the scheme. State labor agencies actively compare employer ownership structures and payroll records to detect transfers designed to manipulate SUI rates.</p>

        <h2>How BEG handles SUTA Dumping for clients</h2>
        <p>
          BEG Managed Payroll handles SUTA Dumping as part of a fully managed payroll service at $25-$45 per employee per month.
          Clients do not need to track compliance rules, filing deadlines, or calculation methods related to SUTA Dumping on their own.
          Everything is included.{' '}
          <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. Book a 15-minute discovery call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" style={{ background: 'linear-gradient(135deg,#ECAC60,#d4924a)', color: '#000', fontWeight: '700', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>Book a Free Discovery Call</a>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/suta-dumping', url: 'https://www.beghr.com/resources/payroll-glossary/suta-dumping', name: 'SUTA Dumping | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'SUTA Dumping', description: 'Illegal scheme of moving employees to a new entity to obtain a lower state unemployment tax rate -- states penalize it aggressively.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'SUTA Dumping', item: 'https://www.beghr.com/resources/payroll-glossary/suta-dumping' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
