import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form W-3 | Payroll Glossary | BEG',
  description: 'Learn what Form W-3 is, when it must be filed, how it relates to Form W-2, and how electronic filing changes the process.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/form-w3' },
  openGraph: {
    title: 'Form W-3 | Payroll Glossary | BEG',
    description: 'Learn what Form W-3 is, when it must be filed, how it relates to Form W-2, and how electronic filing changes the process.',
    url: 'https://beghr.com/resources/payroll-glossary/form-w3',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form W-3 | Payroll Glossary | BEG',
    description: 'Learn what Form W-3 is, when it must be filed, how it relates to Form W-2, and how electronic filing changes the process.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Do I need to file Form W-3 if I file W-2s electronically?", "a": "If you file electronically through the SSA's Business Services Online portal, you do not submit a physical W-3. The transmittal information is embedded in the electronic file. However, the equivalent of the W-3 data is always required as part of the submission."}, {"q": "Where is Form W-3 filed?", "a": "Form W-3 is filed with the Social Security Administration, not the IRS. Paper filers mail it to the SSA's processing center. Do not send W-3 to the IRS. The IRS receives Form 941 quarterly and uses that data, not the W-3, to reconcile employer payroll tax deposits."}, {"q": "What happens if the W-3 totals do not match the sum of the W-2s?", "a": "Discrepancies will trigger an SSA inquiry. The SSA matches W-2 data to individual Social Security earnings records. Errors must be corrected using W-2c and W-3c. Mismatches can also affect SSA benefit records for affected employees over time."}];

export default function FormW3Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form W-3?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The transmittal form that summarizes all W-2s filed with the Social Security Administration, showing combined totals for wages, tips, and taxes withheld across all employees for the calendar year.</p>
        </div>

        <h2>Why Form W-3 matters for employers</h2>
        <p>Form W-3 is the cover sheet that accompanies W-2 Copy A submissions to the Social Security Administration. While each W-2 reports an individual employee's wages and taxes, the W-3 reports the aggregate totals across all employees. The SSA uses the W-3 to verify that the sum of all individual W-2s matches the total amounts reported. The W-3 must include the employer's name, address, and EIN, the tax year, the total number of W-2 forms included, and the summed amounts from each corresponding W-2 box: total wages, total Social Security wages, total Medicare wages, total federal income tax withheld, total Social Security tax, total Medicare tax, and all Box 12 coded amounts. The W-3 is filed with the SSA by the same January 31 deadline as the W-2s. Employers who file 10 or more W-2s during the calendar year are required to file electronically through the SSA's Business Services Online (BSO) portal. Electronic filers do not submit a physical Form W-3 but instead include the equivalent transmittal data in their electronic submission file. Employers filing fewer than 10 W-2s may still file paper, and a paper W-3 accompanies the paper W-2 Copy A forms. The W-3 should never be sent to the IRS, only to the SSA. Errors on the W-3 often result from arithmetic errors in summing the W-2s rather than from incorrect individual W-2s, so a final reconciliation before filing is important.</p>

        <h2>How BEG handles Form W-3 for clients</h2>
        <p>BEG Managed Payroll prepares and submits Form W-3 along with W-2 Copy A data to the SSA for all clients by January 31. BEG files electronically for all clients with 10 or more employees and ensures the W-3 totals reconcile to the sum of all individual W-2s before submission. W-3 filing is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Do I need to file Form W-3 if I file W-2s electronically?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>If you file electronically through the SSA's Business Services Online portal, you do not submit a physical W-3. The transmittal information is embedded in the electronic file. However, the equivalent of the W-3 data is always required as part of the submission.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Where is Form W-3 filed?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Form W-3 is filed with the Social Security Administration, not the IRS. Paper filers mail it to the SSA's processing center. Do not send W-3 to the IRS. The IRS receives Form 941 quarterly and uses that data, not the W-3, to reconcile employer payroll tax deposits.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What happens if the W-3 totals do not match the sum of the W-2s?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Discrepancies will trigger an SSA inquiry. The SSA matches W-2 data to individual Social Security earnings records. Errors must be corrected using W-2c and W-3c. Mismatches can also affect SSA benefit records for affected employees over time.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/form-w3', url: 'https://beghr.com/resources/payroll-glossary/form-w3', name: 'Form W-3 | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form W-3', description: 'Learn what Form W-3 is, when it must be filed, how it relates to Form W-2, and how electronic filing changes the process.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form W-3', item: 'https://beghr.com/resources/payroll-glossary/form-w3' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
