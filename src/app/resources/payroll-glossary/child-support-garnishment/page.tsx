import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Child Support Garnishment | Payroll Glossary | BEG',
  description: 'Learn how child support garnishment works, what CCPA limits apply, and what employers must do when they receive an income withholding order.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/child-support-garnishment' },
  openGraph: {
    title: 'Child Support Garnishment | Payroll Glossary | BEG',
    description: 'Learn how child support garnishment works, what CCPA limits apply, and what employers must do when they receive an income withholding order.',
    url: 'https://www.beghr.com/resources/payroll-glossary/child-support-garnishment',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Support Garnishment | Payroll Glossary | BEG',
    description: 'Learn how child support garnishment works, what CCPA limits apply, and what employers must do when they receive an income withholding order.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the maximum amount that can be withheld for child support?", "a": "The CCPA limits withholding for child support to 50% of disposable earnings for employees supporting another family, or 60% for those who do not. These limits increase by 5 percentage points if the employee is 12 or more weeks in arrears."}, {"q": "Can I terminate an employee because of a child support garnishment?", "a": "No. Federal law prohibits employers from terminating, refusing to hire, or taking disciplinary action against an employee because of a single garnishment order for child support. Violations can result in fines and reinstatement with back pay."}, {"q": "How quickly must I begin withholding after receiving an IWO?", "a": "Federal law requires the employer to begin withholding no later than the first pay period that begins after the date the IWO is received. Some states require faster implementation."}];

export default function ChildSupportGarnishmentPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Child Support Garnishment?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A court-ordered or administrative payroll deduction requiring an employer to withhold child support from an employee's wages and remit it to the state disbursement unit, subject to Title III CCPA withholding limits.</p>
        </div>

        <h2>Why child support garnishment matters for employers</h2>
        <p>When an employee owes child support, the court or state child support agency issues an Income Withholding Order (IWO) directing the employer to deduct child support from the employee's wages and send the funds to the state disbursement unit within a specified time. Federal law requires employers to begin withholding no later than the first pay period that begins after receipt of the IWO. Employers do not have discretion to refuse or delay a valid IWO. The Consumer Credit Protection Act (CCPA) Title III sets the maximum amount that can be withheld from an employee's disposable earnings for child support in any workweek. Disposable earnings are wages remaining after legally required deductions such as taxes and Social Security. The CCPA limits are: 50% of disposable earnings if the employee supports another family, 60% if not. These limits increase by 5 percentage points (to 55% and 65%) if the employee is 12 or more weeks behind on support. These are the maximum federal limits; the IWO itself specifies the actual amount to withhold, which is often less. If multiple IWOs are received for the same employee, the employer must prorate the available withholding across them according to federal priority rules, with current support obligations paid before arrears. Employers may charge a reasonable administrative fee (typically up to $5 per payment) for processing the IWO, deducted from the employee's wages. Failing to comply with an IWO can result in the employer being held personally liable for the amount that should have been withheld.</p>

        <h2>How BEG handles Child Support Garnishment for clients</h2>
        <p>BEG Managed Payroll processes child support income withholding orders and remits funds to state disbursement units on the correct schedule. When a client receives a new IWO, BEG sets up the deduction, calculates the CCPA limit, and remits on time each pay period. Child support garnishment administration is fully handled by BEG at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the maximum amount that can be withheld for child support?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The CCPA limits withholding for child support to 50% of disposable earnings for employees supporting another family, or 60% for those who do not. These limits increase by 5 percentage points if the employee is 12 or more weeks in arrears.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can I terminate an employee because of a child support garnishment?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Federal law prohibits employers from terminating, refusing to hire, or taking disciplinary action against an employee because of a single garnishment order for child support. Violations can result in fines and reinstatement with back pay.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How quickly must I begin withholding after receiving an IWO?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Federal law requires the employer to begin withholding no later than the first pay period that begins after the date the IWO is received. Some states require faster implementation.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/child-support-garnishment', url: 'https://www.beghr.com/resources/payroll-glossary/child-support-garnishment', name: 'Child Support Garnishment | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Child Support Garnishment', description: 'Learn how child support garnishment works, what CCPA limits apply, and what employers must do when they receive an income withholding order.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Child Support Garnishment', item: 'https://www.beghr.com/resources/payroll-glossary/child-support-garnishment' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
