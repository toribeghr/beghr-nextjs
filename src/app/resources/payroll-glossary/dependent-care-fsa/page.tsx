import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dependent Care FSA | Payroll Glossary | BEG',
  description: 'Learn how a Dependent Care FSA works, contribution limits, qualifying expenses, and the payroll tax savings it creates.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/dependent-care-fsa' },
  openGraph: {
    title: 'Dependent Care FSA | Payroll Glossary | BEG',
    description: 'Learn how a Dependent Care FSA works, contribution limits, qualifying expenses, and the payroll tax savings it creates.',
    url: 'https://www.beghr.com/resources/payroll-glossary/dependent-care-fsa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dependent Care FSA | Payroll Glossary | BEG',
    description: 'Learn how a Dependent Care FSA works, contribution limits, qualifying expenses, and the payroll tax savings it creates.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the 2025 dependent care FSA limit?", "a": "The IRS limit is $5,000 per household for married filing jointly or single filers, and $2,500 for married filing separately. These limits have not been indexed for inflation and have remained the same for many years."}, {"q": "Can unused DCFSA funds be rolled over?", "a": "No. Federal rules do not permit rollover of unused DCFSA funds. However, plan sponsors can offer a grace period of up to 2.5 months after the plan year end during which employees can use remaining funds. Funds not used by the end of the grace period are forfeited."}, {"q": "Does a DCFSA and the dependent care tax credit work together?", "a": "You cannot use both for the same expenses. DCFSA dollars reduce the amount of expenses eligible for the Dependent Care Tax Credit. High-income employees with the maximum DCFSA election may have little or no basis left for the credit. The interaction requires calculating both to determine which provides more after-tax benefit."}];

export default function DependentCareFsaPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Dependent Care FSA?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A pre-tax benefit account allowing employees to set aside up to $5,000 per household annually (or $2,500 if married filing separately) to pay for qualifying dependent care expenses, reducing FICA for both employee and employer.</p>
        </div>

        <h2>Why a dependent care FSA matters for employers</h2>
        <p>A Dependent Care FSA (DCFSA) is an employer-sponsored account that allows employees to pay for qualifying dependent care expenses with pre-tax dollars. Qualifying expenses include daycare, preschool, before-school and after-school programs, summer day camps (not overnight camps), and care for a dependent adult who lives with the employee, when the care is needed so both spouses (or a single parent) can work or actively look for work. The 2024-2025 contribution limit is $5,000 per household for those married filing jointly or single filers, and $2,500 for married filing separately. Because contributions are pre-tax, they reduce the employee's taxable wages for income tax and FICA purposes. The employer saves the 7.65% employer FICA match on every dollar contributed. For an employee contributing the maximum $5,000, the employer saves $382.50 in FICA annually. The DCFSA must be offered through a Section 125 cafeteria plan to be pre-tax. Employees must elect their contribution amount before the plan year begins and cannot change the election mid-year unless they have a qualifying life event. Unlike health FSAs, DCFSAs have no grace period or rollover option under federal rules, though some plan sponsors offer a 2.5-month grace period. The DCFSA benefit coordinates with the Dependent Care Tax Credit, and employees must weigh which provides more benefit based on their tax situation. High-income employees may find the DCFSA more valuable; lower-income employees may find the tax credit more beneficial.</p>

        <h2>How BEG handles Dependent Care FSA for clients</h2>
        <p>BEG Managed Payroll processes DCFSA payroll deductions and reports them correctly on W-2 Box 10, which is required for all dependent care benefit amounts regardless of whether they are pre-tax. BEG ensures the Section 125 pre-tax treatment is applied correctly and that year-end W-2 reporting matches plan records. Dependent care FSA administration is part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the 2025 dependent care FSA limit?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The IRS limit is $5,000 per household for married filing jointly or single filers, and $2,500 for married filing separately. These limits have not been indexed for inflation and have remained the same for many years.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can unused DCFSA funds be rolled over?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Federal rules do not permit rollover of unused DCFSA funds. However, plan sponsors can offer a grace period of up to 2.5 months after the plan year end during which employees can use remaining funds. Funds not used by the end of the grace period are forfeited.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does a DCFSA and the dependent care tax credit work together?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>You cannot use both for the same expenses. DCFSA dollars reduce the amount of expenses eligible for the Dependent Care Tax Credit. High-income employees with the maximum DCFSA election may have little or no basis left for the credit. The interaction requires calculating both to determine which provides more after-tax benefit.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/dependent-care-fsa', url: 'https://www.beghr.com/resources/payroll-glossary/dependent-care-fsa', name: 'Dependent Care FSA | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Dependent Care FSA', description: 'Learn how a Dependent Care FSA works, contribution limits, qualifying expenses, and the payroll tax savings it creates.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Dependent Care FSA', item: 'https://www.beghr.com/resources/payroll-glossary/dependent-care-fsa' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
