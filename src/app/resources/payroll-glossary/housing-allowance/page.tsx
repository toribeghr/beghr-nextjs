import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Housing Allowance (IRC Section 119) | Payroll Glossary | BEG',
  description: 'Employer-provided housing or housing allowance excluded from taxable income when required as a condition of employment on the business premises.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/housing-allowance' },
  openGraph: { title: 'Housing Allowance (IRC Section 119) | Payroll Glossary | BEG', description: 'Employer-provided housing or housing allowance excluded from taxable income when required as a condition of employment on the business premises.', url: 'https://beghr.com/resources/payroll-glossary/housing-allowance', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Housing Allowance (IRC Section 119) | Payroll Glossary | BEG', description: 'Employer-provided housing or housing allowance excluded from taxable income when required as a condition of employment on the business premises.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can a cash housing allowance be excluded from taxes?", a: "Generally no for non-ministers. IRC Section 119 requires the employer to provide actual lodging on business premises. Cash allowances typically do not qualify for the exclusion." },
  { q: "Does the housing exclusion apply to ministers?", a: "Yes. IRC Section 107 provides ministers with a broader housing allowance exclusion that can cover a cash allowance used for actual housing expenses, not limited to employer-provided premises." },
  { q: "What happens if the housing exclusion is disallowed?", a: "The fair market value of the housing becomes taxable wages, subject to federal and state income tax withholding and FICA. Back taxes, interest, and penalties may apply." },
];

export default function HousingAllowancePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Housing Allowance (IRC Section 119)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A housing allowance under IRC Section 119 is excluded from taxable income when housing is provided for the employer's convenience and required as a condition of employment.</p>
        </div>
        <h2>Why housing allowances matter for employers</h2>
        <p>Under IRC Section 119, the value of employer-provided meals and lodging is excluded from an employee's gross income if two conditions are met: (1) the housing is on the business premises of the employer, and (2) the employee is required to accept the housing as a condition of employment.</p>
        <p>Common examples include live-in caretakers, hotel managers, hospital residents, school dormitory supervisors, and ranch hands required to live on-site. Both conditions must be met - convenience of the employer alone is not sufficient.</p>
        <p>A separate provision under IRC Section 107 provides a housing allowance exclusion specifically for ordained ministers. Ministers can exclude a housing allowance from income to the extent it is used to pay housing expenses, even if the housing is not on business premises. This is a significant and unique tax benefit.</p>
        <p>For non-ministerial employees, cash housing allowances generally do not qualify for the Section 119 exclusion - only in-kind housing (the actual lodging) qualifies. Some exceptions apply in specific industries and under collective bargaining arrangements.</p>
        <p>Employers providing qualifying lodging should document the business necessity, keep records showing the housing is a condition of employment, and consult with a tax advisor to ensure the exclusion is properly supported. Improperly excluded housing becomes taxable wages subject to FICA and income tax withholding.</p>
        <h2>How BEG handles housing allowance payroll for clients</h2>
        <p>BEG Managed Payroll properly codes housing allowances, applies correct taxable vs. excluded treatment, and ensures W-2 reporting is accurate as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/housing-allowance', url: 'https://beghr.com/resources/payroll-glossary/housing-allowance', name: 'Housing Allowance (IRC Section 119) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Housing Allowance (IRC Section 119)', description: 'Employer-provided housing or housing allowance excluded from taxable income when required as a condition of employment on the business premises.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Housing Allowance (IRC Section 119)', item: 'https://beghr.com/resources/payroll-glossary/housing-allowance' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
