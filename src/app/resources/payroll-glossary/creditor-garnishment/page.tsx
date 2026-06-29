import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creditor Garnishment | Payroll Glossary | BEG',
  description: 'Learn how creditor garnishment works, the CCPA withholding limits, and what employers must do when they receive a creditor garnishment order.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/creditor-garnishment' },
  openGraph: {
    title: 'Creditor Garnishment | Payroll Glossary | BEG',
    description: 'Learn how creditor garnishment works, the CCPA withholding limits, and what employers must do when they receive a creditor garnishment order.',
    url: 'https://www.beghr.com/resources/payroll-glossary/creditor-garnishment',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creditor Garnishment | Payroll Glossary | BEG',
    description: 'Learn how creditor garnishment works, the CCPA withholding limits, and what employers must do when they receive a creditor garnishment order.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the maximum amount that can be garnished for a creditor debt?", "a": "The CCPA limits creditor garnishment to the lesser of 25% of disposable earnings or the amount by which disposable earnings exceed 30 times the federal minimum wage per week. Some states provide greater protection with lower limits."}, {"q": "Can an employer fire an employee because of a garnishment?", "a": "No. Federal law prohibits terminating an employee because of any single garnishment. The protection applies to the first garnishment order only. Employers can legally terminate for a second or subsequent garnishment in most states, though some states provide broader protection."}, {"q": "What if the employee leaves before the judgment is satisfied?", "a": "The employer's obligation to withhold ends when employment ends. The creditor must re-serve the garnishment on any new employer. The employer should notify the court or creditor when the employee separates."}];

export default function CreditorGarnishmentPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Creditor Garnishment?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A court-ordered payroll deduction directing an employer to withhold wages to satisfy a civil money judgment owed to a creditor, subject to Title III CCPA limits of 25% of disposable earnings.</p>
        </div>

        <h2>Why creditor garnishment matters for employers</h2>
        <p>A creditor who wins a civil money judgment against an individual can use wage garnishment to collect the debt directly from the debtor's paycheck. This requires the creditor to go back to court and obtain a garnishment order or writ that is served on the debtor's employer. The employer then becomes a garnishee and must withhold the ordered amount from the employee's wages each pay period and remit it to the court or the creditor until the judgment is satisfied. The Consumer Credit Protection Act (CCPA) Title III limits how much can be withheld: the lesser of 25% of the employee's disposable earnings for the week, or the amount by which disposable earnings exceed 30 times the federal hourly minimum wage. Disposable earnings are the wages remaining after all legally required deductions, meaning taxes, Social Security, Medicare, and state unemployment, but not voluntary deductions like health insurance or 401(k). If an employee has multiple garnishments, the CCPA limits apply to the total withholding. Child support garnishments take priority over creditor garnishments, and the combined withholding cannot exceed the CCPA caps. Some states have more protective garnishment exemption limits than federal law; in those states, the state limit applies. Texas, South Carolina, Pennsylvania, and North Carolina significantly restrict or prohibit wage garnishment for ordinary consumer debts under state law. Employers who fail to comply with a garnishment order can be held in contempt of court or held liable for the debt themselves.</p>

        <h2>How BEG handles Creditor Garnishment for clients</h2>
        <p>BEG Managed Payroll processes creditor garnishments, calculates the CCPA maximum correctly, prioritizes competing orders, and remits funds to the correct recipient on schedule. When multiple garnishments are in effect for the same employee, BEG applies the correct priority and pro-ration rules. Garnishment administration is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the maximum amount that can be garnished for a creditor debt?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The CCPA limits creditor garnishment to the lesser of 25% of disposable earnings or the amount by which disposable earnings exceed 30 times the federal minimum wage per week. Some states provide greater protection with lower limits.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer fire an employee because of a garnishment?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Federal law prohibits terminating an employee because of any single garnishment. The protection applies to the first garnishment order only. Employers can legally terminate for a second or subsequent garnishment in most states, though some states provide broader protection.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What if the employee leaves before the judgment is satisfied?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The employer's obligation to withhold ends when employment ends. The creditor must re-serve the garnishment on any new employer. The employer should notify the court or creditor when the employee separates.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/creditor-garnishment', url: 'https://www.beghr.com/resources/payroll-glossary/creditor-garnishment', name: 'Creditor Garnishment | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Creditor Garnishment', description: 'Learn how creditor garnishment works, the CCPA withholding limits, and what employers must do when they receive a creditor garnishment order.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Creditor Garnishment', item: 'https://www.beghr.com/resources/payroll-glossary/creditor-garnishment' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
