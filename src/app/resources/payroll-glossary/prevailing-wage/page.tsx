import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prevailing Wage | Payroll Glossary | BEG',
  description: 'The hourly wage and fringe benefit rate set by the DOL for a specific occupation in a geographic area, required on federal and many state contracts.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/prevailing-wage' },
  openGraph: { title: 'Prevailing Wage | Payroll Glossary | BEG', description: 'The hourly wage and fringe benefit rate set by the DOL for a specific occupation in a geographic area, required on federal and many state contracts.', url: 'https://www.beghr.com/resources/payroll-glossary/prevailing-wage', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Prevailing Wage | Payroll Glossary | BEG', description: 'The hourly wage and fringe benefit rate set by the DOL for a specific occupation in a geographic area, required on federal and many state contracts.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is a certified payroll report?", a: "A certified payroll report (Form WH-347) is a weekly payroll report required on federal prevailing wage projects. It lists each worker, their classification, hours worked, wages paid, and fringe benefits, certified by a company officer under penalty of perjury." },
  { q: "Can prevailing wage fringe benefits be paid as cash?", a: "Yes. Contractors who do not provide benefits can pay the fringe benefit rate in cash in addition to the base wage rate. However, this increases cash labor cost substantially versus providing actual benefits." },
  { q: "Do state prevailing wage laws differ from federal?", a: "Yes significantly. State laws vary on coverage thresholds, applicable occupations, rate determination methodology, and certified payroll requirements. California, for example, has prevailing wage requirements for many projects that federal law would not cover." },
];

export default function PrevailingWagePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Prevailing Wage?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Prevailing wage is the DOL-determined minimum hourly wage and fringe rate for specific trades in a geographic area, mandatory on federal construction and service contracts.</p>
        </div>
        <h2>Why prevailing wage matters for employers</h2>
        <p>Prevailing wage laws require employers on government-funded contracts to pay workers at rates determined by the Department of Labor for each type of work in each geographic area. The Davis-Bacon Act applies to federal construction contracts over $2,000. The Service Contract Act (SCA) applies to federal service contracts over $2,500. Many states have their own prevailing wage laws with lower thresholds.</p>
        <p>The DOL determines prevailing wages through surveys of wages actually paid to workers in the same or similar occupations in the same geographic area. These rates are published in wage determinations that are incorporated into federal contracts. Contractors must pay at least the applicable wage determination rate for each classification of work performed.</p>
        <p>Prevailing wage includes both a base hourly wage and a separate fringe benefit rate. The fringe benefit rate can be satisfied by providing bona fide fringe benefits (health insurance, retirement contributions, vacation accrual) or by paying the fringe rate in cash as additional wages. Paying fringe in cash significantly increases labor costs compared to providing benefits.</p>
        <p>Compliance requires detailed certified payroll records submitted weekly using Form WH-347. These records show each employee's name, classification, hours, wages, and fringe benefit payments. Federal contractors must post wage determinations at job sites and maintain certified payroll records for three years.</p>
        <p>Violations of prevailing wage laws can result in debarment from future federal contracts, back wage liability, and liquidated damages. This makes accurate payroll processing critical for government contractors.</p>
        <h2>How BEG handles prevailing wage payroll for clients</h2>
        <p>BEG Managed Payroll processes prevailing wage payroll, calculates correct fringe rates, and prepares certified payroll records for government contractors as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/prevailing-wage', url: 'https://www.beghr.com/resources/payroll-glossary/prevailing-wage', name: 'Prevailing Wage | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Prevailing Wage', description: 'The hourly wage and fringe benefit rate set by the DOL for a specific occupation in a geographic area, required on federal and many state contracts.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Prevailing Wage', item: 'https://www.beghr.com/resources/payroll-glossary/prevailing-wage' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
