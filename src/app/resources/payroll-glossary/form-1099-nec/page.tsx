import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form 1099-NEC | Payroll Glossary | BEG',
  description: 'IRS form used to report non-employee compensation of $600 or more paid to independent contractors, due January 31 each year.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/form-1099-nec' },
  openGraph: { title: 'Form 1099-NEC | Payroll Glossary | BEG', description: 'IRS form used to report non-employee compensation of $600 or more paid to independent contractors, due January 31 each year.', url: 'https://www.beghr.com/resources/payroll-glossary/form-1099-nec', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Form 1099-NEC | Payroll Glossary | BEG', description: 'IRS form used to report non-employee compensation of $600 or more paid to independent contractors, due January 31 each year.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "When is Form 1099-NEC due?", a: "Form 1099-NEC is due to recipients and the IRS by January 31 of the year following payment. There is no extended deadline for paper vs. electronic filing as with some other 1099 forms." },
  { q: "Do I need to file a 1099-NEC for payments to corporations?", a: "Generally no. Payments to C-corporations and S-corporations are exempt from 1099-NEC reporting, with exceptions for attorney fees and certain medical payments." },
  { q: "What if I miss the 1099-NEC deadline?", a: "Late filing penalties range from $60 per form (30 days late) to $630 per form for intentional disregard. Filing as soon as possible after the deadline reduces the penalty amount." },
];

export default function Form1099NecPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form 1099-NEC?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Form 1099-NEC reports non-employee compensation of $600 or more paid to independent contractors during the tax year.</p>
        </div>
        <h2>Why Form 1099-NEC matters for employers</h2>
        <p>Form 1099-NEC was reinstated by the IRS in 2020 to report non-employee compensation separately from Form 1099-MISC. Any business that pays an individual independent contractor $600 or more during the tax year must issue a 1099-NEC by January 31 of the following year.</p>
        <p>The form covers payments for services performed by non-employees including freelancers, sole proprietors, and single-member LLCs. Payments to corporations generally do not require a 1099-NEC, with exceptions for attorney fees and medical payments.</p>
        <p>Failure to file accurate 1099-NECs by the deadline can result in penalties ranging from $60 to $630 per form depending on how late the filing is and whether the failure was intentional. Employers must also furnish a copy to the recipient by January 31.</p>
        <p>Before issuing any 1099-NEC, employers should collect Form W-9 from each contractor to obtain the taxpayer identification number (TIN). Backup withholding of 24% applies when a contractor fails to provide a valid TIN. Proper contractor classification is critical - misclassifying employees as contractors creates payroll tax liability, penalties, and back pay exposure.</p>
        <h2>How BEG handles 1099-NEC filing for clients</h2>
        <p>BEG Managed Payroll manages contractor payment tracking, W-9 collection, and 1099-NEC filing as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/form-1099-nec', url: 'https://www.beghr.com/resources/payroll-glossary/form-1099-nec', name: 'Form 1099-NEC | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form 1099-NEC', description: 'IRS form used to report non-employee compensation of $600 or more paid to independent contractors, due January 31 each year.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form 1099-NEC', item: 'https://www.beghr.com/resources/payroll-glossary/form-1099-nec' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
