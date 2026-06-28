import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mass Layoff | Payroll Glossary | BEG',
  description: 'WARN Act triggering event when 500+ employees or 50-499 employees representing 33%+ of workforce are laid off in any 30-day period.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/mass-layoff' },
  openGraph: { title: 'Mass Layoff | Payroll Glossary | BEG', description: 'WARN Act triggering event when 500+ employees or 50-499 employees representing 33%+ of workforce are laid off in any 30-day period.', url: 'https://beghr.com/resources/payroll-glossary/mass-layoff', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Mass Layoff | Payroll Glossary | BEG', description: 'WARN Act triggering event when 500+ employees or 50-499 employees representing 33%+ of workforce are laid off in any 30-day period.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does the WARN Act apply to all employers?", a: "No. The WARN Act applies to employers with 100 or more full-time employees, or 100 or more employees who collectively work at least 4,000 hours per week." },
  { q: "What is the difference between a mass layoff and a plant closing under WARN?", a: "A plant closing involves the shutdown of a facility affecting 50 or more employees. A mass layoff involves a reduction at a continuing facility affecting 500 or more employees, or 50-499 employees representing 33%+ of the workforce." },
  { q: "Are there penalties for violating WARN Act notice requirements?", a: "Yes. Employers who fail to give proper notice owe affected employees back pay and benefits for each day of violation up to 60 days, plus civil penalties of up to $500 per day to local governments." },
];

export default function MassLayoffPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Mass Layoff?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A mass layoff under the WARN Act requires 60 days advance written notice when 500+ employees or 50-499 employees (33%+ of workforce) lose jobs in 30 days.</p>
        </div>
        <h2>Why mass layoff notice requirements matter for employers</h2>
        <p>The Worker Adjustment and Retraining Notification (WARN) Act requires employers with 100 or more employees to provide 60 calendar days advance written notice before a mass layoff or plant closing. A mass layoff occurs during any 30-day period when either 500 or more employees lose their jobs, or 50 to 499 employees lose their jobs and those employees represent at least 33% of the workforce at the site.</p>
        <p>Employees counted for WARN purposes include part-time workers who have worked more than six of the last twelve months or work more than 20 hours per week. Independent contractors and temporary employees supplied by a staffing firm may not count in the employer's total depending on the nature of the relationship.</p>
        <p>Notice must be provided to each affected employee (or their union representative), the state dislocated worker unit, and the chief elected official of the local government where the facility is located. The content requirements for each notice recipient differ slightly.</p>
        <p>Failure to provide proper WARN notice exposes the employer to liability for back pay and benefits for each day of violation - up to 60 days. The employer is also liable for civil penalties of up to $500 per day to the local government for each day of violation, up to 60 days.</p>
        <p>Exceptions to the 60-day notice requirement exist for faltering companies actively seeking financing, unforeseeable business circumstances, and natural disasters. These exceptions reduce but do not eliminate the notice requirement and must be asserted in writing.</p>
        <h2>How BEG supports clients through workforce reductions</h2>
        <p>BEG Managed Payroll helps clients calculate final pay, process COBRA notifications, and manage payroll transitions during workforce reductions as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/mass-layoff', url: 'https://beghr.com/resources/payroll-glossary/mass-layoff', name: 'Mass Layoff | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Mass Layoff', description: 'WARN Act triggering event when 500+ employees or 50-499 employees representing 33%+ of workforce are laid off in any 30-day period.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Mass Layoff', item: 'https://beghr.com/resources/payroll-glossary/mass-layoff' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
