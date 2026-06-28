import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accountable Plan | Payroll Glossary | BEG',
  description: 'Learn what an accountable plan is, how IRS rules work, and why proper expense reimbursement matters for payroll tax compliance.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/accountable-plan' },
  openGraph: {
    title: 'Accountable Plan | Payroll Glossary | BEG',
    description: 'Learn what an accountable plan is, how IRS rules work, and why proper expense reimbursement matters for payroll tax compliance.',
    url: 'https://beghr.com/resources/payroll-glossary/accountable-plan',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountable Plan | Payroll Glossary | BEG',
    description: 'Learn what an accountable plan is, how IRS rules work, and why proper expense reimbursement matters for payroll tax compliance.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What happens if my expense plan does not qualify as accountable?", "a": "The reimbursements become taxable wages, must be included in W-2 boxes 1, 3, and 5, and are subject to full FICA and income tax withholding. You will also owe the employer share of FICA on those amounts."}, {"q": "Can I pay a flat monthly expense allowance tax-free?", "a": "No. Flat allowances with no substantiation requirement are non-accountable plans and are fully taxable as wages, even if the employee actually spent the money on business expenses."}, {"q": "What is the IRS deadline for substantiating expenses under an accountable plan?", "a": "Employees must substantiate expenses within 60 days after they are paid or incurred. Excess advances must be returned within 120 days. Many employers use a 30-day internal deadline to stay safely inside the IRS window."}];

export default function AccountablePlanPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Accountable Plan?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An IRS-compliant reimbursement arrangement where expense repayments are tax-free because employees substantiate costs, return excess advances, and have a legitimate business purpose.</p>
        </div>

        <h2>Why an accountable plan matters for employers</h2>
        <p>Under IRS rules, employee expense reimbursements are either taxable wages or tax-free reimbursements depending entirely on how you structure the arrangement. An accountable plan requires three things: the expense must have a business connection, the employee must substantiate it with documentation within 60 days, and any excess advance must be returned within 120 days. When all three conditions are met, the reimbursement is excluded from the employee's gross income and is not subject to FICA or income tax withholding. That means neither the employee nor the employer pays payroll taxes on those dollars. When a plan fails any of those conditions, the reimbursement converts to taxable wages and must be included in the employee's W-2, grossed up for taxes, and deposited accordingly. Common failures include reimbursing personal expenses without documentation, allowing employees to keep excess advances, or paying flat monthly allowances with no substantiation requirement. Car allowances are a frequent trap: a flat $600/month car allowance with no mileage log is a non-accountable plan and is fully taxable. A properly documented per-mile reimbursement at or below the IRS rate is tax-free. The same logic applies to cell phone allowances, home office stipends, and travel per diems.</p>

        <h2>How BEG handles Accountable Plan for clients</h2>
        <p>BEG Managed Payroll reviews your expense reimbursement structure during onboarding and flags non-accountable plan arrangements before they create a payroll tax liability. If your current process is paying flat allowances without documentation, BEG works with you to convert to an accountable plan so those reimbursements come out of payroll tax-free. All reimbursements processed through BEG are coded correctly on employee W-2s. BEG Managed Payroll covers this and all other payroll compliance obligations at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What happens if my expense plan does not qualify as accountable?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The reimbursements become taxable wages, must be included in W-2 boxes 1, 3, and 5, and are subject to full FICA and income tax withholding. You will also owe the employer share of FICA on those amounts.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can I pay a flat monthly expense allowance tax-free?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Flat allowances with no substantiation requirement are non-accountable plans and are fully taxable as wages, even if the employee actually spent the money on business expenses.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the IRS deadline for substantiating expenses under an accountable plan?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Employees must substantiate expenses within 60 days after they are paid or incurred. Excess advances must be returned within 120 days. Many employers use a 30-day internal deadline to stay safely inside the IRS window.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/accountable-plan', url: 'https://beghr.com/resources/payroll-glossary/accountable-plan', name: 'Accountable Plan | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Accountable Plan', description: 'Learn what an accountable plan is, how IRS rules work, and why proper expense reimbursement matters for payroll tax compliance.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Accountable Plan', item: 'https://beghr.com/resources/payroll-glossary/accountable-plan' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
