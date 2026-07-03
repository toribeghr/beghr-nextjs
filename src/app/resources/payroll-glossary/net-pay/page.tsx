import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Net Pay | Payroll Glossary | BEG',
  description: 'Employee take-home pay after all deductions including taxes, benefits, garnishments, and voluntary withholdings are subtracted from gross pay.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/net-pay' },
  openGraph: { title: 'Net Pay | Payroll Glossary | BEG', description: 'Employee take-home pay after all deductions including taxes, benefits, garnishments, and voluntary withholdings are subtracted from gross pay.', url: 'https://www.beghr.com/resources/payroll-glossary/net-pay', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Net Pay | Payroll Glossary | BEG', description: 'Employee take-home pay after all deductions including taxes, benefits, garnishments, and voluntary withholdings are subtracted from gross pay.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What reduces an employee's net pay?", a: "Federal, state, and local income taxes; employee FICA; pre-tax and post-tax benefit premiums; garnishments; voluntary deductions such as union dues; and any other authorized withholdings all reduce net pay." },
  { q: "Why does an employee's net pay change when gross pay stays the same?", a: "Net pay can change due to benefit election changes, crossing payroll tax wage bases (Social Security cap), changes in tax withholding elections, new garnishment orders, or year-end adjustments." },
  { q: "Is a pay stub required?", a: "Most states require employers to provide employees with a written or electronic pay stub showing gross pay, all deductions, and net pay for each pay period. Federal law does not mandate pay stubs, but state laws govern in most cases." },
];

export default function NetPayPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Net Pay?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Net pay is the amount deposited into an employee's bank account after subtracting all taxes, benefit deductions, garnishments, and other withholdings from gross pay.</p>
        </div>
        <h2>Why net pay accuracy matters for employers</h2>
        <p>Net pay is what the employee actually receives - every payroll calculation ultimately reduces to this number. Errors in net pay create immediate employee relations problems and, depending on the nature of the error, potential legal liability.</p>
        <p>The path from gross pay to net pay involves multiple sequential calculations. Pre-tax deductions (401(k) contributions, Section 125 health premiums, HSA contributions, FSA elections) are subtracted from gross pay first, reducing the taxable wage base. Then federal income tax withholding is calculated based on the Form W-4 and taxable wages. Employee FICA (6.2% Social Security and 1.45% Medicare) is calculated on gross wages up to the wage bases. State and local income tax withholding follows. Post-tax deductions (Roth 401(k), union dues, garnishments, voluntary benefit premiums not in a Section 125 plan) are then subtracted.</p>
        <p>Net pay variances between pay periods can alarm employees even when they are correct - changes in hours, benefit elections, wage base crossovers (when an employee exceeds the Social Security wage base), or Year-to-date withholding reconciliations all affect net pay legitimately.</p>
        <p>Direct deposit of net pay requires ACH processing with banking information verified before the payroll date. Returned ACH transactions occur when banking information is incorrect or accounts are closed, requiring re-processing and potentially creating late payment issues.</p>
        <p>Pay stubs documenting the calculation from gross to net pay are required by most states and must be retained as part of payroll records.</p>
        <h2>How BEG ensures accurate net pay for clients</h2>
        <p>BEG Managed Payroll applies all deductions in correct sequence, manages direct deposit processing, and resolves net pay discrepancies as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/net-pay', url: 'https://www.beghr.com/resources/payroll-glossary/net-pay', name: 'Net Pay | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Net Pay', description: 'Employee take-home pay after all deductions including taxes, benefits, garnishments, and voluntary withholdings are subtracted from gross pay.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Net Pay', item: 'https://www.beghr.com/resources/payroll-glossary/net-pay' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
