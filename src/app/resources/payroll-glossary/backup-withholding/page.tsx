import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backup Withholding | Payroll Glossary | BEG',
  description: 'Learn what backup withholding is, when it applies to vendor payments, and how to avoid it by collecting accurate W-9 information.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/backup-withholding' },
  openGraph: {
    title: 'Backup Withholding | Payroll Glossary | BEG',
    description: 'Learn what backup withholding is, when it applies to vendor payments, and how to avoid it by collecting accurate W-9 information.',
    url: 'https://www.beghr.com/resources/payroll-glossary/backup-withholding',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backup Withholding | Payroll Glossary | BEG',
    description: 'Learn what backup withholding is, when it applies to vendor payments, and how to avoid it by collecting accurate W-9 information.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the backup withholding rate?", "a": "The backup withholding rate is 24% of the gross payment. This rate is set by the IRS and can change when tax laws are updated. It applies to the full payment amount before any deductions."}, {"q": "How do I stop backup withholding once it starts?", "a": "Provide the payer with a correct taxpayer identification number on a signed W-9. Once the payer receives the correct TIN and the IRS confirms it is no longer required, backup withholding stops on future payments."}, {"q": "Does backup withholding apply to employee wages?", "a": "No. Backup withholding applies to payments reported on information returns such as 1099-NEC, 1099-INT, and 1099-DIV. Employee wages are subject to regular income tax withholding based on the W-4, not backup withholding."}];

export default function BackupWithholdingPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Backup Withholding?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A flat 24% federal tax withheld by payers from payments to vendors or contractors who fail to provide a correct taxpayer identification number or who have under-reported income on prior returns.</p>
        </div>

        <h2>Why backup withholding matters for employers</h2>
        <p>Most payments to independent contractors are made without any withholding, with the contractor responsible for their own estimated taxes. Backup withholding is the exception that kicks in when the IRS cannot match the payment to a correctly identified taxpayer. The IRS will notify a payer to begin backup withholding when: the payee fails to provide a taxpayer identification number on Form W-9, the IRS notifies the payer that the TIN provided is incorrect, the IRS notifies the payer that the payee under-reported interest or dividend income in the past, or the payee fails to certify they are not subject to backup withholding. When backup withholding is required, the payer must withhold 24% from the gross payment and deposit it using EFTPS as federal income tax. The withheld amount is reported on Form 1099, and the payee receives a credit for the withheld amount when filing their return. The practical implication for employers is that every vendor or contractor payment that will be reported on a 1099-NEC must be backed by a Form W-9 collected before any payment is made. If a contractor cannot or will not provide a valid W-9, backup withholding at 24% must begin immediately. Employers who fail to withhold when required can be held liable for the uncollected tax. The solution is a simple internal process: collect and verify the W-9 before cutting the first check.</p>

        <h2>How BEG handles Backup Withholding for clients</h2>
        <p>BEG Managed Payroll handles 1099-NEC production and tracks which contractor payments require proper TIN documentation. BEG flags missing W-9s before year-end so backup withholding liability does not catch you by surprise. This is part of BEG's fully managed payroll compliance service at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the backup withholding rate?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The backup withholding rate is 24% of the gross payment. This rate is set by the IRS and can change when tax laws are updated. It applies to the full payment amount before any deductions.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How do I stop backup withholding once it starts?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Provide the payer with a correct taxpayer identification number on a signed W-9. Once the payer receives the correct TIN and the IRS confirms it is no longer required, backup withholding stops on future payments.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does backup withholding apply to employee wages?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Backup withholding applies to payments reported on information returns such as 1099-NEC, 1099-INT, and 1099-DIV. Employee wages are subject to regular income tax withholding based on the W-4, not backup withholding.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/backup-withholding', url: 'https://www.beghr.com/resources/payroll-glossary/backup-withholding', name: 'Backup Withholding | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Backup Withholding', description: 'Learn what backup withholding is, when it applies to vendor payments, and how to avoid it by collecting accurate W-9 information.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Backup Withholding', item: 'https://www.beghr.com/resources/payroll-glossary/backup-withholding' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
