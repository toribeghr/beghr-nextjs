import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll Register | Payroll Glossary | BEG',
  description: 'A detailed report of all employee earnings, deductions, taxes, and net pay for each payroll period - the primary payroll record.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/payroll-register' },
  openGraph: { title: 'Payroll Register | Payroll Glossary | BEG', description: 'A detailed report of all employee earnings, deductions, taxes, and net pay for each payroll period - the primary payroll record.', url: 'https://www.beghr.com/resources/payroll-glossary/payroll-register', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Payroll Register | Payroll Glossary | BEG', description: 'A detailed report of all employee earnings, deductions, taxes, and net pay for each payroll period - the primary payroll record.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How long must payroll registers be kept?", a: "The IRS requires payroll tax records to be kept for at least four years. The FLSA requires payroll records showing earnings and deductions for at least three years. Best practice is to retain payroll registers for seven years." },
  { q: "Is the payroll register the same as a pay stub?", a: "No. The payroll register is a company-wide report covering all employees for a pay period. A pay stub is an individual employee summary of their own earnings and deductions for that period." },
  { q: "Can payroll registers be kept electronically?", a: "Yes. Electronic payroll records are acceptable as long as they are accurate, accessible, and can be reproduced in a readable format. Paper copies are not required." },
];

export default function PayrollRegisterPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Payroll Register?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The payroll register is the master report listing every employee's gross pay, deductions, taxes, and net pay for a given payroll run.</p>
        </div>
        <h2>Why the payroll register matters for employers</h2>
        <p>The payroll register is the central document of every payroll run. It provides a complete line-by-line record of how each employee's gross pay was calculated, what deductions were taken, which taxes were withheld, and what net pay was issued. It serves as the source document for general ledger journal entries, tax deposits, and benefit remittances.</p>
        <p>A well-designed payroll register includes for each employee: employee ID and name, pay period, hours worked (regular and overtime), gross pay by type (regular, overtime, bonus, commission), pre-tax deductions by type (401k, health, HSA), taxable wages for federal and state, federal income tax withheld, Social Security and Medicare taxes withheld, state income tax withheld, post-tax deductions (garnishments, Roth, post-tax benefits), and net pay.</p>
        <p>Summary totals at the bottom of the payroll register show company-wide amounts for each column, forming the basis for tax deposits. The employer's share of FICA taxes is typically shown separately as a cost to the company rather than a deduction from employee pay.</p>
        <p>Payroll registers must be retained as payroll records under federal law. The IRS requires employers to keep employment tax records for at least four years after the due date of the tax or payment, whichever is later. FLSA requires payroll records including earnings and deductions for at least three years.</p>
        <p>Audit requests from the IRS, state agencies, or workers compensation carriers typically begin with the payroll register. Gaps or inconsistencies in the register are red flags that prompt deeper examination.</p>
        <h2>How BEG maintains payroll registers for clients</h2>
        <p>BEG Managed Payroll produces a detailed payroll register for every pay run, maintains records for required retention periods, and provides them on demand for audits as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/payroll-register', url: 'https://www.beghr.com/resources/payroll-glossary/payroll-register', name: 'Payroll Register | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Payroll Register', description: 'A detailed report of all employee earnings, deductions, taxes, and net pay for each payroll period - the primary payroll record.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Payroll Register', item: 'https://www.beghr.com/resources/payroll-glossary/payroll-register' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
