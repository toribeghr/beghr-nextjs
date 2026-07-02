import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Independent Contractor | Payroll Glossary | BEG',
  description: 'Worker classified as self-employed rather than an employee, receiving Form 1099-NEC and responsible for their own self-employment taxes.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/independent-contractor' },
  openGraph: { title: 'Independent Contractor | Payroll Glossary | BEG', description: 'Worker classified as self-employed rather than an employee, receiving Form 1099-NEC and responsible for their own self-employment taxes.', url: 'https://www.beghr.com/resources/payroll-glossary/independent-contractor', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Independent Contractor | Payroll Glossary | BEG', description: 'Worker classified as self-employed rather than an employee, receiving Form 1099-NEC and responsible for their own self-employment taxes.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the penalty for misclassifying an employee as a contractor?", a: "Penalties include 1.5% of wages for income tax, 20% of employee FICA not withheld, 100% of employer FICA not paid, interest, and potentially state penalties. Willful misclassification carries higher penalties and personal liability for responsible parties." },
  { q: "Can a contractor become an employee?", a: "Yes. When work arrangements change to reflect greater control, permanency, or economic dependence, reclassification may be required. The IRS Voluntary Classification Settlement Program (VCSP) allows partial penalty relief for prospective reclassification." },
  { q: "What is a 1099 employee?", a: "There is no such legal classification. The term is informal and often signals a misclassification risk. Workers are either employees (W-2) or independent contractors (1099-NEC), with legal tests determining the correct classification." },
];

export default function IndependentContractorPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Independent Contractor?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An independent contractor is a self-employed worker who receives 1099-NEC, not W-2, and is responsible for paying their own self-employment taxes.</p>
        </div>
        <h2>Why independent contractor classification matters for employers</h2>
        <p>Correct worker classification is one of the highest-risk areas of payroll compliance. Misclassifying an employee as an independent contractor exposes the employer to back payroll taxes, interest, penalties, state unemployment contributions, workers compensation liability, and potential ERISA liability for benefit plan eligibility.</p>
        <p>The IRS uses a multi-factor test examining behavioral control (does the company control how work is done), financial control (does the worker have investment and profit/loss exposure), and the type of relationship (permanency, integration into core business). No single factor is determinative.</p>
        <p>The DOL applies an economic reality test for FLSA purposes - focusing on whether the worker is economically dependent on the employer or truly in business for themselves. The DOL's 2024 final rule restored a totality-of-circumstances approach.</p>
        <p>Many states apply even stricter tests. California's ABC test, for example, presumes workers are employees unless the business can prove all three: (A) the worker is free from control in performing work, (B) the work is outside the usual course of the hiring entity's business, and (C) the worker is customarily engaged in an independently established trade.</p>
        <p>Independent contractors receive Form 1099-NEC for payments of $600 or more. Employers do not withhold income taxes or pay FICA on their payments. Contractors pay self-employment tax at 15.3% on net earnings.</p>
        <h2>How BEG helps clients manage contractor vs. employee questions</h2>
        <p>BEG Managed Payroll helps clients track worker classifications, issue correct 1099-NEC forms, and maintain documentation as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/independent-contractor', url: 'https://www.beghr.com/resources/payroll-glossary/independent-contractor', name: 'Independent Contractor | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Independent Contractor', description: 'Worker classified as self-employed rather than an employee, receiving Form 1099-NEC and responsible for their own self-employment taxes.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Independent Contractor', item: 'https://www.beghr.com/resources/payroll-glossary/independent-contractor' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
