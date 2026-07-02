import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FICA | Payroll Glossary | BEG',
  description: 'Learn how FICA taxes work, the rates for Social Security and Medicare, the wage base, and how employers deposit and report FICA.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/fica' },
  openGraph: {
    title: 'FICA | Payroll Glossary | BEG',
    description: 'Learn how FICA taxes work, the rates for Social Security and Medicare, the wage base, and how employers deposit and report FICA.',
    url: 'https://www.beghr.com/resources/payroll-glossary/fica',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FICA | Payroll Glossary | BEG',
    description: 'Learn how FICA taxes work, the rates for Social Security and Medicare, the wage base, and how employers deposit and report FICA.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the Social Security wage base for 2025?", "a": "The Social Security wage base for 2025 is $176,100. Wages above that amount in a calendar year are not subject to the 6.2% employee or employer Social Security tax for the rest of the year. Medicare tax and the Additional Medicare Tax have no wage cap."}, {"q": "Who pays the Additional Medicare Tax?", "a": "Employees earning more than $200,000 per year pay an additional 0.9% Medicare tax on wages above that threshold. The employer must withhold it but does not match it. This means the combined Medicare rate for high earners is 2.35% employee, 1.45% employer."}, {"q": "Are FICA taxes the same as self-employment tax?", "a": "Self-employment tax is the equivalent of FICA for self-employed individuals. Because there is no employer to match, self-employed people pay both the employee and employer shares, for a combined 15.3% on the first $176,100 (2025) and 2.9% above that. Half the self-employment tax is deductible on the individual's return."}];

export default function FicaPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is FICA?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Federal Insurance Contributions Act taxes that fund Social Security and Medicare. Both employers and employees pay 6.2% each for Social Security (up to the annual wage base) and 1.45% each for Medicare on all wages, with no cap.</p>
        </div>

        <h2>Why FICA matters for employers</h2>
        <p>FICA is the payroll tax that funds two federal programs: Social Security (formally the Old-Age, Survivors, and Disability Insurance program) and Medicare. Every employer that pays wages must withhold FICA from employees and match it with an equal employer contribution. The Social Security tax rate is 6.2% for the employee and 6.2% for the employer, for a combined 12.4%. This applies only to wages up to the annual Social Security wage base, which is indexed for inflation and adjusted each year. For 2025, the wage base is $176,100. Once an employee's year-to-date wages exceed the wage base, Social Security withholding stops for that employee for the remainder of the year. The employer stops the employer match simultaneously. The Medicare tax rate is 1.45% for the employee and 1.45% for the employer, for a combined 2.9%. There is no wage cap on Medicare. Additionally, the Additional Medicare Tax of 0.9% applies to employees whose wages exceed $200,000 in a calendar year. The employer must withhold the Additional Medicare Tax once wages pass that threshold, but the employer does not match it. FICA taxes are deposited through EFTPS on the employer's monthly or semi-weekly deposit schedule along with federal income tax withholding. Total FICA (combined employee and employer shares) plus federal income tax withheld equals the employer's 941 deposit liability for each pay period. FICA is reported quarterly on Form 941 and annually reconciled on W-2s and W-3.</p>

        <h2>How BEG handles FICA for clients</h2>
        <p>BEG Managed Payroll calculates and withholds FICA correctly for every employee every pay period, tracks each employee against the Social Security wage base, applies the Additional Medicare Tax at the $200,000 threshold, and deposits the combined liability on the correct EFTPS schedule. FICA management is a core function of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the Social Security wage base for 2025?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The Social Security wage base for 2025 is $176,100. Wages above that amount in a calendar year are not subject to the 6.2% employee or employer Social Security tax for the rest of the year. Medicare tax and the Additional Medicare Tax have no wage cap.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Who pays the Additional Medicare Tax?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Employees earning more than $200,000 per year pay an additional 0.9% Medicare tax on wages above that threshold. The employer must withhold it but does not match it. This means the combined Medicare rate for high earners is 2.35% employee, 1.45% employer.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Are FICA taxes the same as self-employment tax?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Self-employment tax is the equivalent of FICA for self-employed individuals. Because there is no employer to match, self-employed people pay both the employee and employer shares, for a combined 15.3% on the first $176,100 (2025) and 2.9% above that. Half the self-employment tax is deductible on the individual's return.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/fica', url: 'https://www.beghr.com/resources/payroll-glossary/fica', name: 'FICA | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'FICA', description: 'Learn how FICA taxes work, the rates for Social Security and Medicare, the wage base, and how employers deposit and report FICA.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'FICA', item: 'https://www.beghr.com/resources/payroll-glossary/fica' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
