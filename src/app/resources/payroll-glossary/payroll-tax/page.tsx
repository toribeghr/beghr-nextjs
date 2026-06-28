import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll Tax | Payroll Glossary | BEG',
  description: 'Taxes withheld from employee wages or paid by employers based on wages, including federal income tax, FICA, FUTA, and state income taxes.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/payroll-tax' },
  openGraph: { title: 'Payroll Tax | Payroll Glossary | BEG', description: 'Taxes withheld from employee wages or paid by employers based on wages, including federal income tax, FICA, FUTA, and state income taxes.', url: 'https://beghr.com/resources/payroll-glossary/payroll-tax', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Payroll Tax | Payroll Glossary | BEG', description: 'Taxes withheld from employee wages or paid by employers based on wages, including federal income tax, FICA, FUTA, and state income taxes.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the total payroll tax burden on an employer?", a: "At the federal level, employers pay 6.2% Social Security, 1.45% Medicare, and 0.6% net FUTA per employee, totaling approximately 8.25% of wages up to the Social Security wage base. State unemployment adds additional cost that varies by state and employer experience rating." },
  { q: "What is the Trust Fund Recovery Penalty?", a: "The Trust Fund Recovery Penalty allows the IRS to hold individuals personally liable for payroll taxes withheld from employees but not deposited. Officers, owners, bookkeepers, or anyone with authority over payroll funds can be personally assessed 100% of the undeposited employee taxes." },
  { q: "Do payroll taxes apply to bonuses?", a: "Yes. Bonuses are supplemental wages subject to FICA and federal income tax withholding. The supplemental withholding rate is 22% for federal income tax (37% above $1 million), but FICA applies at the regular rate." },
];

export default function PayrollTaxPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Payroll Tax?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Payroll taxes are taxes calculated as a percentage of wages, including amounts withheld from employees and matching contributions paid by employers.</p>
        </div>
        <h2>Why payroll taxes matter for employers</h2>
        <p>Payroll taxes are the largest tax obligation most businesses face. They include: federal income tax withheld from employee wages based on W-4 elections; Social Security tax (6.2% employee, 6.2% employer) on wages up to the annual wage base ($168,600 in 2024); Medicare tax (1.45% employee, 1.45% employer) on all wages plus 0.9% Additional Medicare Tax on employee wages above $200,000; Federal Unemployment Tax (FUTA) of 0.6% net on first $7,000 per employee; state income tax withholding; and State Unemployment Insurance (SUTA) with rates and wage bases varying by state.</p>
        <p>Employers are responsible for two distinct payroll tax obligations: withholding and remitting the employee share, and paying the employer share out of company funds. Failure to do either triggers separate penalties. The Trust Fund Recovery Penalty is particularly severe - it holds individual officers and managers personally liable for the employee share of FICA and income taxes that were withheld but not deposited.</p>
        <p>Total payroll tax cost adds approximately 7-8% to each employee's wages at the federal level (employer FICA), plus state unemployment taxes that vary widely. For a $50,000 employee, federal employer payroll tax cost is roughly $3,825 per year.</p>
        <p>Deposit requirements are strict. Most employers use the Electronic Federal Tax Payment System (EFTPS) for all federal deposits. Late deposits trigger penalties from 2% to 15% depending on how late, regardless of whether taxes were withheld correctly.</p>
        <p>Year-end payroll tax responsibilities include filing Form 940 (annual FUTA), issuing W-2s to employees by January 31, and filing Form W-3 with the Social Security Administration.</p>
        <h2>How BEG manages all payroll taxes for clients</h2>
        <p>BEG Managed Payroll handles all federal and state payroll tax calculations, withholding, deposits, and filings as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/payroll-tax', url: 'https://beghr.com/resources/payroll-glossary/payroll-tax', name: 'Payroll Tax | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Payroll Tax', description: 'Taxes withheld from employee wages or paid by employers based on wages, including federal income tax, FICA, FUTA, and state income taxes.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Payroll Tax', item: 'https://beghr.com/resources/payroll-glossary/payroll-tax' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
