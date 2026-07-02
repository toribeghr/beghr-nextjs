import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Accountable Plan | Payroll Glossary | BEG',
  description: 'Expense reimbursement arrangement that does not meet IRS substantiation requirements, making all payments taxable wages subject to withholding.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/non-accountable-plan' },
  openGraph: { title: 'Non-Accountable Plan | Payroll Glossary | BEG', description: 'Expense reimbursement arrangement that does not meet IRS substantiation requirements, making all payments taxable wages subject to withholding.', url: 'https://www.beghr.com/resources/payroll-glossary/non-accountable-plan', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Non-Accountable Plan | Payroll Glossary | BEG', description: 'Expense reimbursement arrangement that does not meet IRS substantiation requirements, making all payments taxable wages subject to withholding.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What makes an expense reimbursement plan accountable?", a: "Three conditions: the expense must have a business connection, the employee must provide adequate documentation (receipts and business purpose), and any excess reimbursement must be returned within a reasonable time (typically 120 days)." },
  { q: "Are flat car allowances taxable?", a: "Yes, if no mileage documentation is required. A flat monthly car allowance without substantiation is a non-accountable plan payment and is fully taxable. Reimbursements tied to actual mileage at or below the IRS standard rate are tax-free under an accountable plan." },
  { q: "What is the IRS standard mileage rate?", a: "The IRS sets the standard mileage rate annually. For 2024 it is 67 cents per mile for business use. Reimbursements at this rate with documented business mileage qualify for accountable plan treatment." },
];

export default function NonAccountablePlanPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Non-Accountable Plan?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A non-accountable plan is any expense reimbursement arrangement that fails IRS substantiation rules, treating all reimbursements as taxable wages.</p>
        </div>
        <h2>Why non-accountable plan treatment matters for employers</h2>
        <p>When an employer reimburses employee business expenses, IRS rules determine whether those payments are tax-free or treated as additional taxable wages. An accountable plan satisfies three requirements: (1) the expense has a business connection, (2) the employee adequately accounts for the expense (receipts, dates, purpose, amount), and (3) the employee returns any excess reimbursement within a reasonable time.</p>
        <p>A non-accountable plan is any arrangement that fails one or more of these tests. Common examples include flat monthly car allowances without mileage documentation, per diem payments that exceed IRS rates and are not returned, expense reimbursements with no receipt requirement, and lump-sum payments described as expense allowances but with no substantiation.</p>
        <p>All payments under a non-accountable plan must be included in the employee's gross wages, reported in Box 1 of the W-2, and subjected to income tax withholding and FICA. This creates unexpected tax costs for both the employer (employer FICA) and the employee (income and FICA taxes on what they may have perceived as a reimbursement).</p>
        <p>Converting a non-accountable plan to an accountable plan requires implementing a proper expense reporting process: employees submit expense reports with receipts, amounts are compared to IRS rates or actual costs, and excess reimbursements are returned within 60 days (120 days if using a periodic return policy).</p>
        <p>Per diem rates set by the IRS General Services Administration are a safe harbor for substantiating lodging and M&IE costs without individual receipts.</p>
        <h2>How BEG helps clients structure accountable expense plans</h2>
        <p>BEG Managed Payroll correctly classifies reimbursements as accountable or non-accountable and handles proper tax treatment and W-2 reporting as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/non-accountable-plan', url: 'https://www.beghr.com/resources/payroll-glossary/non-accountable-plan', name: 'Non-Accountable Plan | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Non-Accountable Plan', description: 'Expense reimbursement arrangement that does not meet IRS substantiation requirements, making all payments taxable wages subject to withholding.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Non-Accountable Plan', item: 'https://www.beghr.com/resources/payroll-glossary/non-accountable-plan' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
