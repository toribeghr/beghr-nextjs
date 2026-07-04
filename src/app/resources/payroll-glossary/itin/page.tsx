import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITIN: Individual Taxpayer ID Number | BEG',
  description: 'IRS tax processing number for individuals not eligible for a Social Security number, used for tax withholding and reporting purposes.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/itin' },
  openGraph: { title: 'ITIN: Individual Taxpayer ID Number | BEG', description: 'IRS tax processing number for individuals not eligible for a Social Security number, used for tax withholding and reporting purposes.', url: 'https://www.beghr.com/resources/payroll-glossary/itin', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'ITIN: Individual Taxpayer ID Number | BEG', description: 'IRS tax processing number for individuals not eligible for a Social Security number, used for tax withholding and reporting purposes.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can an employee with an ITIN receive a W-2?", a: "Yes. Employers issue W-2s to all employees regardless of whether they have an SSN or ITIN. The ITIN is used in place of the SSN on the W-2." },
  { q: "Does having an ITIN mean an employee is authorized to work?", a: "No. An ITIN is a tax processing number only and does not establish work authorization. Employers must still verify work eligibility through Form I-9." },
  { q: "Do ITINs expire?", a: "Yes. ITINs expire if not used on a federal tax return for three consecutive years. They must be renewed through the IRS before the individual can use them for tax filing purposes." },
];

export default function ItinPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is ITIN (Individual Taxpayer Identification Number)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An ITIN is an IRS-issued nine-digit number for individuals who need to file taxes but are not eligible for a Social Security number.</p>
        </div>
        <h2>Why ITINs matter for employers</h2>
        <p>Employers may have employees or contractors who do not have Social Security Numbers but do have Individual Taxpayer Identification Numbers. ITINs are issued by the IRS to individuals who need to comply with US tax laws but are not eligible for an SSN - including nonresident aliens, foreign nationals, and their dependents.</p>
        <p>An ITIN does not authorize work in the United States and does not confer immigration status. However, it does allow individuals to file tax returns, pay taxes, and receive refunds. For payroll purposes, employers must withhold federal and state income taxes and FICA from wages regardless of whether the employee has an SSN or ITIN.</p>
        <p>ITINs always begin with the number 9 and have a 7 or 8 in the fourth digit (for example, 9XX-7X-XXXX). They expire if not used on a tax return for three consecutive years and must be renewed through the IRS before they can be used again for tax purposes.</p>
        <p>Employers should not refuse to hire someone solely because they have an ITIN rather than an SSN - doing so may constitute illegal immigration-related employment discrimination under the INA. However, employers are required to use E-Verify or Form I-9 to verify work authorization separately from tax identification.</p>
        <p>When an employee obtains an SSN after having an ITIN, they should notify the employer and update payroll records. The IRS will merge the tax records associated with the ITIN into the SSN account.</p>
        <h2>How BEG handles ITIN employees in payroll</h2>
        <p>BEG Managed Payroll processes payroll and withholding correctly for employees with ITINs and ensures proper W-2 reporting as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. See your exact price in 90 seconds.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/itin', url: 'https://www.beghr.com/resources/payroll-glossary/itin', name: 'ITIN: Individual Taxpayer ID Number | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'ITIN (Individual Taxpayer Identification Number)', description: 'IRS tax processing number for individuals not eligible for a Social Security number, used for tax withholding and reporting purposes.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'ITIN (Individual Taxpayer Identification Number)', item: 'https://www.beghr.com/resources/payroll-glossary/itin' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
