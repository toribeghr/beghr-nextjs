import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form W-2 | Payroll Glossary | BEG',
  description: 'Learn what Form W-2 contains, the January 31 deadline, how to correct errors, and what happens if W-2s are late.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/form-w2' },
  openGraph: {
    title: 'Form W-2 | Payroll Glossary | BEG',
    description: 'Learn what Form W-2 contains, the January 31 deadline, how to correct errors, and what happens if W-2s are late.',
    url: 'https://www.beghr.com/resources/payroll-glossary/form-w2',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form W-2 | Payroll Glossary | BEG',
    description: 'Learn what Form W-2 contains, the January 31 deadline, how to correct errors, and what happens if W-2s are late.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "When must W-2s be issued to employees?", "a": "W-2s must be furnished to employees by January 31 of the year following the tax year. The same January 31 deadline applies for filing Copy A with the Social Security Administration. If January 31 falls on a weekend or holiday, the deadline moves to the next business day."}, {"q": "What is the penalty for issuing W-2s late?", "a": "The penalty is $60 per W-2 if corrected within 30 days of the due date, $130 per W-2 if corrected between 30 days and August 1, and $330 per W-2 if corrected after August 1. Intentional disregard carries a minimum $670 per W-2 penalty."}, {"q": "How do I correct an error on a W-2 after it has been filed?", "a": "File a corrected W-2 using Form W-2c. Provide a copy to the affected employee and submit Copy A to the SSA along with Form W-3c. Correct errors as soon as they are discovered to minimize penalties."}];

export default function FormW2Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form W-2?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The annual wage and tax statement employers must provide to each employee and the Social Security Administration by January 31, showing total wages paid and all taxes withheld during the prior calendar year.</p>
        </div>

        <h2>Why Form W-2 matters for employers</h2>
        <p>Form W-2 is the bridge between the employer's payroll records and the employee's individual income tax return. Every employer who paid wages, tips, or other compensation to an employee must issue a W-2 for that employee by January 31 of the following year. The same deadline applies for providing copies to the Social Security Administration along with Form W-3. The W-2 reports federal taxable wages (Box 1), federal income tax withheld (Box 2), Social Security wages (Box 3), Social Security tax withheld (Box 4), Medicare wages (Box 5), Medicare tax withheld (Box 6), state wages, state income tax withheld, and numerous coded amounts in Box 12 for items such as employer-sponsored health plan costs, 401(k) contributions, HSA contributions, and many others. Accuracy is critical: errors in W-2 reporting create problems for employees when they file their returns and can trigger IRS notices. Common W-2 errors include incorrect Social Security numbers, mismatched Box 1 and Box 16 state wages, failure to include all forms of compensation, and incorrect Box 12 codes. Corrected W-2s are filed on Form W-2c. The penalty for late or incorrect W-2s depends on how late: $60 per W-2 if corrected within 30 days, $130 per W-2 if corrected after 30 days but before August 1, and $330 per W-2 for failures corrected after August 1 or never corrected. Intentional disregard for the requirement carries a minimum $670 per W-2 penalty. Employers must also furnish copies to employees by the same January 31 deadline.</p>

        <h2>How BEG handles Form W-2 for clients</h2>
        <p>BEG Managed Payroll produces accurate W-2s for all client employees by January 31, transmits W-2 data to the SSA on Form W-3, and provides employees with electronic or paper copies. BEG handles W-2c corrections when errors are identified and files them with the SSA. Year-end W-2 production is a core deliverable of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>When must W-2s be issued to employees?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>W-2s must be furnished to employees by January 31 of the year following the tax year. The same January 31 deadline applies for filing Copy A with the Social Security Administration. If January 31 falls on a weekend or holiday, the deadline moves to the next business day.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the penalty for issuing W-2s late?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The penalty is $60 per W-2 if corrected within 30 days of the due date, $130 per W-2 if corrected between 30 days and August 1, and $330 per W-2 if corrected after August 1. Intentional disregard carries a minimum $670 per W-2 penalty.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How do I correct an error on a W-2 after it has been filed?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>File a corrected W-2 using Form W-2c. Provide a copy to the affected employee and submit Copy A to the SSA along with Form W-3c. Correct errors as soon as they are discovered to minimize penalties.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/form-w2', url: 'https://www.beghr.com/resources/payroll-glossary/form-w2', name: 'Form W-2 | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form W-2', description: 'Learn what Form W-2 contains, the January 31 deadline, how to correct errors, and what happens if W-2s are late.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form W-2', item: 'https://www.beghr.com/resources/payroll-glossary/form-w2' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
