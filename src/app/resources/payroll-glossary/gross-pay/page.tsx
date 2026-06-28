import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gross Pay | Payroll Glossary | BEG',
  description: 'Total compensation before any deductions, including base wages, overtime, bonuses, commissions, and taxable fringe benefits.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/gross-pay' },
  openGraph: { title: 'Gross Pay | Payroll Glossary | BEG', description: 'Total compensation before any deductions, including base wages, overtime, bonuses, commissions, and taxable fringe benefits.', url: 'https://beghr.com/resources/payroll-glossary/gross-pay', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Gross Pay | Payroll Glossary | BEG', description: 'Total compensation before any deductions, including base wages, overtime, bonuses, commissions, and taxable fringe benefits.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the difference between gross pay and net pay?", a: "Gross pay is total earnings before deductions. Net pay is what the employee actually receives after taxes, benefit premiums, garnishments, and other withholdings are subtracted." },
  { q: "Are bonuses included in gross pay?", a: "Yes. All bonuses, commissions, and supplemental wages are included in gross pay and subject to payroll taxes. The withholding method may differ from regular wages." },
  { q: "Does gross pay include employer-paid benefits?", a: "No. Gross pay reflects employee compensation. Employer-paid benefits such as health insurance premiums and 401(k) matches are separate employer costs not included in the employee's gross pay." },
];

export default function GrossPayPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Gross Pay?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Gross pay is total compensation before any deductions, including wages, overtime, bonuses, commissions, and taxable benefits.</p>
        </div>
        <h2>Why gross pay matters for employers</h2>
        <p>Gross pay is the starting point for every payroll calculation. It includes all forms of compensation: regular hourly wages or salary, overtime pay, shift differentials, commissions, bonuses, tips, piece-rate earnings, and the value of certain taxable fringe benefits.</p>
        <p>For hourly employees, gross pay is calculated by multiplying hours worked by the hourly rate, then adding any overtime at 1.5x the regular rate for hours over 40 in a workweek. For salaried employees, gross pay is the agreed salary amount for the pay period, plus any additional compensation earned.</p>
        <p>Taxable fringe benefits - such as personal use of a company vehicle, group-term life insurance over $50,000, or employer-paid gym memberships - are added to gross pay before tax withholding is calculated, even though no additional cash changes hands.</p>
        <p>Gross pay is the basis for calculating all payroll taxes. FICA taxes (Social Security and Medicare), federal income tax withholding, and state income tax withholding are all calculated against gross pay (with certain pre-tax deductions reducing the taxable base). Employer payroll taxes including FUTA and SUTA are also assessed on gross wages up to their respective wage bases.</p>
        <p>Understanding the difference between gross pay and taxable wages is essential - pre-tax benefit deductions such as 401(k) contributions and Section 125 premiums reduce taxable wages but do not reduce gross pay for all purposes.</p>
        <h2>How BEG handles gross pay calculations for clients</h2>
        <p>BEG Managed Payroll accurately calculates gross pay for all compensation types, applies pre-tax deductions correctly, and processes payroll as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/gross-pay', url: 'https://beghr.com/resources/payroll-glossary/gross-pay', name: 'Gross Pay | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Gross Pay', description: 'Total compensation before any deductions, including base wages, overtime, bonuses, commissions, and taxable fringe benefits.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Gross Pay', item: 'https://beghr.com/resources/payroll-glossary/gross-pay' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
