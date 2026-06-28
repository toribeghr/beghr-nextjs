import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imputed Income | Payroll Glossary | BEG',
  description: 'Value of employer-provided non-cash benefits that must be included in employee taxable wages, such as group life over $50K or domestic partner benefits.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/imputed-income' },
  openGraph: { title: 'Imputed Income | Payroll Glossary | BEG', description: 'Value of employer-provided non-cash benefits that must be included in employee taxable wages, such as group life over $50K or domestic partner benefits.', url: 'https://beghr.com/resources/payroll-glossary/imputed-income', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Imputed Income | Payroll Glossary | BEG', description: 'Value of employer-provided non-cash benefits that must be included in employee taxable wages, such as group life over $50K or domestic partner benefits.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the most common imputed income item?", a: "Group-term life insurance over $50,000 is the most frequently encountered imputed income item. The cost of coverage above $50,000 is calculated using IRS Table I rates and added to taxable wages." },
  { q: "Do employees owe FICA on imputed income?", a: "Yes. Imputed income is subject to both income tax withholding and FICA taxes. The employer also owes the matching employer share of FICA on the imputed amount." },
  { q: "How is domestic partner benefit imputed income calculated?", a: "The fair market value of the health insurance coverage extended to a domestic partner (minus any after-tax employee contribution) is added to taxable wages if the partner is not the employee's tax dependent." },
];

export default function ImputedIncomePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Imputed Income?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Imputed income is the taxable value of non-cash employer benefits that must be added to an employee's gross wages for income tax and FICA purposes.</p>
        </div>
        <h2>Why imputed income matters for employers</h2>
        <p>When employers provide non-cash benefits, the value of those benefits is generally taxable unless a specific exclusion applies. When a taxable benefit is provided without cash changing hands, the value is imputed - added to the employee's taxable wages even though no cash was paid.</p>
        <p>The most common imputed income items include: group-term life insurance coverage exceeding $50,000 (the cost of the excess coverage is imputed using IRS Table I rates), domestic partner health coverage (if the partner is not a tax dependent), personal use of a company vehicle (calculated using the IRS standard mileage rate or annual lease value method), employer-provided cell phones used for personal purposes (when the personal use can be isolated), and discounts on company products or services that exceed the exclusion limits.</p>
        <p>Employers must add imputed income to the employee's W-2 in Box 1 (federal wages), Box 3 (Social Security wages), and Box 5 (Medicare wages). The employee owes income tax and FICA on the imputed amount. Employers also owe the employer share of FICA on imputed income.</p>
        <p>Imputed income does not result in additional cash to the employee - they owe taxes on income they never directly received. This often surprises employees when they see their W-2 and is a common source of payroll disputes. Clear communication about imputed income policies reduces confusion.</p>
        <h2>How BEG handles imputed income for clients</h2>
        <p>BEG Managed Payroll calculates and adds imputed income for all applicable benefit types, ensuring correct W-2 reporting and FICA treatment as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/imputed-income', url: 'https://beghr.com/resources/payroll-glossary/imputed-income', name: 'Imputed Income | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Imputed Income', description: 'Value of employer-provided non-cash benefits that must be included in employee taxable wages, such as group life over $50K or domestic partner benefits.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Imputed Income', item: 'https://beghr.com/resources/payroll-glossary/imputed-income' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
