import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FUTA (Federal Unemployment Tax Act) | Payroll Glossary | BEG',
  description: 'Federal payroll tax of 6% on first $7,000 of each employee\'s wages, reduced to 0.6% for most employers via SUTA credit.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/futa' },
  openGraph: { title: 'FUTA (Federal Unemployment Tax Act) | Payroll Glossary | BEG', description: 'Federal payroll tax of 6% on first $7,000 of each employee\'s wages, reduced to 0.6% for most employers via SUTA credit.', url: 'https://beghr.com/resources/payroll-glossary/futa', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'FUTA (Federal Unemployment Tax Act) | Payroll Glossary | BEG', description: 'Federal payroll tax of 6% on first $7,000 of each employee\'s wages, reduced to 0.6% for most employers via SUTA credit.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do employees pay FUTA?", a: "No. FUTA is an employer-only tax. It is never withheld from employee paychecks." },
  { q: "What is the FUTA wage base?", a: "The FUTA wage base is $7,000 per employee per year and has not changed since 1983, though Congress periodically discusses increasing it." },
  { q: "What happens if a state has a credit reduction?", a: "Employers in credit reduction states pay a higher effective FUTA rate because part of the normal 5.4% SUTA credit is reduced. The reduction increases by 1.5 percentage points for each year the state remains in credit reduction status." },
];

export default function FutaPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is FUTA (Federal Unemployment Tax Act)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>FUTA is the federal unemployment tax paid only by employers at 6% on the first $7,000 of each employee's wages, typically reduced to 0.6% via SUTA credit.</p>
        </div>
        <h2>Why FUTA matters for employers</h2>
        <p>FUTA is paid entirely by the employer - it is never withheld from employee wages. The gross rate is 6% on the first $7,000 of each employee's annual wages. However, employers who pay state unemployment taxes (SUTA) on time receive a credit of up to 5.4%, reducing the effective net FUTA rate to 0.6% for most employers.</p>
        <p>The maximum FUTA tax per employee per year at the net rate of 0.6% is $42. Because the wage base is only $7,000, FUTA liability concentrates in the first quarter of the year when most employees cross the threshold quickly.</p>
        <p>FUTA deposits are required quarterly if the cumulative liability exceeds $500. If the liability for a quarter is $500 or less, it can be carried forward until it exceeds the threshold. Form 940 is filed annually by January 31 to reconcile the year's FUTA liability and credits.</p>
        <p>Credit reduction states are states that have borrowed from the federal unemployment trust fund and not repaid the loans. Employers in credit reduction states lose a portion of the 5.4% SUTA credit and pay a higher effective FUTA rate. The IRS publishes the list of credit reduction states each November with Form 940 Schedule A.</p>
        <h2>How BEG handles FUTA for clients</h2>
        <p>BEG Managed Payroll calculates FUTA liability, makes quarterly deposits, and files Form 940 annually as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/futa', url: 'https://beghr.com/resources/payroll-glossary/futa', name: 'FUTA (Federal Unemployment Tax Act) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'FUTA (Federal Unemployment Tax Act)', description: 'Federal payroll tax of 6% on first $7,000 of each employee\'s wages, reduced to 0.6% for most employers via SUTA credit.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'FUTA (Federal Unemployment Tax Act)', item: 'https://beghr.com/resources/payroll-glossary/futa' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
