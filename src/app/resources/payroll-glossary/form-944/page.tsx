import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form 944 | Payroll Glossary | BEG',
  description: 'Learn who qualifies to file Form 944, how it differs from 941, and when you must switch between the two forms.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/form-944' },
  openGraph: {
    title: 'Form 944 | Payroll Glossary | BEG',
    description: 'Learn who qualifies to file Form 944, how it differs from 941, and when you must switch between the two forms.',
    url: 'https://www.beghr.com/resources/payroll-glossary/form-944',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 944 | Payroll Glossary | BEG',
    description: 'Learn who qualifies to file Form 944, how it differs from 941, and when you must switch between the two forms.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "How do I know if I should file Form 944 or Form 941?", "a": "The IRS notifies you in writing if you are assigned to file Form 944. If you have not received such notice, file Form 941 quarterly. Do not switch to Form 944 on your own without IRS assignment, even if your liability is under $1,000."}, {"q": "What is the annual liability threshold for Form 944?", "a": "The threshold is $1,000 or less in total annual payroll tax liability. This includes income tax withheld plus both the employee and employer shares of Social Security and Medicare taxes. It corresponds to very small employers with minimal payroll."}, {"q": "Can I switch from Form 944 to Form 941?", "a": "Yes. If you are a Form 944 filer and expect your annual liability to exceed $1,000, you can request to switch to quarterly 941 filing by calling the IRS or writing a letter by the deadline specified in the annual IRS publication. The IRS must confirm the change before you begin filing 941."}];

export default function Form944Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form 944?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An annual IRS payroll tax return for very small employers whose annual payroll tax liability is $1,000 or less, allowing them to file and pay once per year instead of quarterly on Form 941.</p>
        </div>

        <h2>Why Form 944 matters for small employers</h2>
        <p>Form 944, the Employer's Annual Federal Tax Return, is designed for the smallest employers: those whose total annual payroll tax liability (income tax withheld plus Social Security and Medicare taxes) is $1,000 or less. This typically means employers with one or two employees earning minimal wages. The threshold corresponds roughly to an employer with annual wages below $4,000. Qualifying small employers file and pay their payroll taxes once per year instead of quarterly, reducing administrative burden. The Form 944 is due January 31 of the following year, the same deadline as Form 940. There is a key procedural rule: the IRS notifies employers in writing when they are assigned to use Form 944. Employers do not elect to use it on their own. If the IRS has not notified an employer to use Form 944, the employer must file Form 941 quarterly. Employers assigned to Form 944 who expect their liability to exceed $1,000 can request to switch back to quarterly 941 filing by contacting the IRS before a specified deadline each year. If an employer assigned to Form 944 finds during the year that their tax liability has grown to more than $1,000, they should continue filing on 944 until the IRS changes their assignment, but they should notify the IRS. Depositing rules also differ: Form 944 filers generally do not need to make deposits during the year if their total liability for the year is $2,500 or less, paying everything with the annual return instead.</p>

        <h2>How BEG handles Form 944 for clients</h2>
        <p>BEG Managed Payroll handles Form 944 filers as well as quarterly 941 filers. If your organization qualifies for annual filing, BEG tracks the annual liability and files Form 944 by January 31 with accurate reporting. As your business grows and your liability exceeds the threshold, BEG coordinates the transition to quarterly 941 filing. Annual tax return management is part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How do I know if I should file Form 944 or Form 941?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The IRS notifies you in writing if you are assigned to file Form 944. If you have not received such notice, file Form 941 quarterly. Do not switch to Form 944 on your own without IRS assignment, even if your liability is under $1,000.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the annual liability threshold for Form 944?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The threshold is $1,000 or less in total annual payroll tax liability. This includes income tax withheld plus both the employee and employer shares of Social Security and Medicare taxes. It corresponds to very small employers with minimal payroll.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can I switch from Form 944 to Form 941?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. If you are a Form 944 filer and expect your annual liability to exceed $1,000, you can request to switch to quarterly 941 filing by calling the IRS or writing a letter by the deadline specified in the annual IRS publication. The IRS must confirm the change before you begin filing 941.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/form-944', url: 'https://www.beghr.com/resources/payroll-glossary/form-944', name: 'Form 944 | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form 944', description: 'Learn who qualifies to file Form 944, how it differs from 941, and when you must switch between the two forms.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form 944', item: 'https://www.beghr.com/resources/payroll-glossary/form-944' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
