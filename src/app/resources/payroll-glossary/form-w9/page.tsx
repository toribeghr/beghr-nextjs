import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form W-9 | Payroll Glossary | BEG',
  description: 'Learn when to collect Form W-9, what information it captures, and what backup withholding applies when a valid W-9 is not on file.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/form-w9' },
  openGraph: {
    title: 'Form W-9 | Payroll Glossary | BEG',
    description: 'Learn when to collect Form W-9, what information it captures, and what backup withholding applies when a valid W-9 is not on file.',
    url: 'https://beghr.com/resources/payroll-glossary/form-w9',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form W-9 | Payroll Glossary | BEG',
    description: 'Learn when to collect Form W-9, what information it captures, and what backup withholding applies when a valid W-9 is not on file.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "When should I collect Form W-9 from a vendor?", "a": "Collect the W-9 before making the first payment, not at year-end. Waiting creates backup withholding liability for past payments made without a valid TIN on file and makes year-end 1099 preparation rushed and error-prone."}, {"q": "Do I need a W-9 from corporations?", "a": "Generally, corporations are exempt from 1099-NEC reporting, so a W-9 is less critical for them. However, attorneys and law firms must be reported on 1099-MISC regardless of corporate status. Collecting W-9s from all vendors, including corporations, is a best practice that saves time when exceptions apply."}, {"q": "What is the penalty for not filing a 1099-NEC?", "a": "Penalties for missing or late 1099s range from $60 per form if corrected within 30 days, to $130 per form if corrected by August 1, to $330 per form for failures uncorrected after August 1. Intentional disregard carries a minimum $660 per form penalty."}];

export default function FormW9Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form W-9?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The IRS form used by payers to collect a vendor's or independent contractor's taxpayer identification number and certification before making payments, required before issuing a 1099-NEC for services of $600 or more.</p>
        </div>

        <h2>Why Form W-9 matters for employers</h2>
        <p>Form W-9, Request for Taxpayer Identification Number and Certification, is the document employers use to collect the name, address, taxpayer identification number (TIN), and tax classification from vendors, independent contractors, and other payees before making reportable payments. The W-9 must be collected before the first payment is made, not at year-end when 1099s are being prepared. Waiting until December to collect W-9s is a widespread mistake that creates audit risk and backup withholding liability. The W-9 captures: the payee's legal name as it appears on their tax return, their business name if different (for LLCs and DBAs), their federal tax classification (individual, sole proprietor, LLC, corporation, partnership, etc.), their TIN (SSN for individuals, EIN for businesses), and their certification that the TIN is correct and they are not subject to backup withholding. The payee signs the W-9 under penalty of perjury. Employers use the information on the W-9 to populate the 1099-NEC or 1099-MISC at year-end. A 1099-NEC is required for each non-corporate vendor paid $600 or more during the year for services. Corporations are generally exempt from 1099 reporting except in specific situations such as legal services. If a vendor refuses or fails to provide a valid W-9, the employer must begin backup withholding at 24% immediately on all payments to that vendor. W-9s should be retained as long as the relationship with the payee continues and for at least three years afterward.</p>

        <h2>How BEG handles Form W-9 for clients</h2>
        <p>BEG Managed Payroll tracks W-9 collection status for all 1099 payees and flags vendors with missing or expired information before year-end 1099 preparation. BEG produces 1099-NEC forms using accurate W-9 data and files them with the IRS. 1099 management is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>When should I collect Form W-9 from a vendor?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Collect the W-9 before making the first payment, not at year-end. Waiting creates backup withholding liability for past payments made without a valid TIN on file and makes year-end 1099 preparation rushed and error-prone.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Do I need a W-9 from corporations?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Generally, corporations are exempt from 1099-NEC reporting, so a W-9 is less critical for them. However, attorneys and law firms must be reported on 1099-MISC regardless of corporate status. Collecting W-9s from all vendors, including corporations, is a best practice that saves time when exceptions apply.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the penalty for not filing a 1099-NEC?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Penalties for missing or late 1099s range from $60 per form if corrected within 30 days, to $130 per form if corrected by August 1, to $330 per form for failures uncorrected after August 1. Intentional disregard carries a minimum $660 per form penalty.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/form-w9', url: 'https://beghr.com/resources/payroll-glossary/form-w9', name: 'Form W-9 | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form W-9', description: 'Learn when to collect Form W-9, what information it captures, and what backup withholding applies when a valid W-9 is not on file.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form W-9', item: 'https://beghr.com/resources/payroll-glossary/form-w9' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
