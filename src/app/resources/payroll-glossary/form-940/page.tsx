import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form 940 | Payroll Glossary | BEG',
  description: 'Learn how to file Form 940, when FUTA deposits are required, the FUTA tax rate, and how state unemployment credits reduce the amount owed.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/form-940' },
  openGraph: {
    title: 'Form 940 | Payroll Glossary | BEG',
    description: 'Learn how to file Form 940, when FUTA deposits are required, the FUTA tax rate, and how state unemployment credits reduce the amount owed.',
    url: 'https://www.beghr.com/resources/payroll-glossary/form-940',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 940 | Payroll Glossary | BEG',
    description: 'Learn how to file Form 940, when FUTA deposits are required, the FUTA tax rate, and how state unemployment credits reduce the amount owed.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the FUTA tax rate?", "a": "The gross FUTA rate is 6% on the first $7,000 of each employee's wages. Employers who pay state unemployment taxes on time receive a federal credit of up to 5.4%, making the effective FUTA rate 0.6% for most employers, or $42 per employee per year."}, {"q": "What is a credit reduction state?", "a": "A credit reduction state has borrowed money from the federal unemployment fund to pay benefits and has not fully repaid the loan. Employers in these states lose part of their FUTA credit, effectively paying a higher FUTA rate. The IRS publishes the list of credit reduction states and their reduction amounts each November."}, {"q": "When must FUTA taxes be deposited during the year?", "a": "When cumulative FUTA liability for the year exceeds $500 at the end of any quarter, the employer must deposit the liability by the last day of the month following the quarter end. If total FUTA liability remains $500 or under at year end, it can be paid with the Form 940 filing."}];

export default function Form940Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form 940?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The annual IRS return used by employers to report and pay Federal Unemployment Tax (FUTA), due January 31 of the following year, with deposits required during the year if the quarterly liability exceeds $500.</p>
        </div>

        <h2>Why Form 940 matters for employers</h2>
        <p>Form 940 is the Employer's Annual Federal Unemployment (FUTA) Tax Return. Most employers must file it. FUTA funds the federal-state unemployment insurance system. The FUTA tax rate is 6% on the first $7,000 of each employee's wages per year (the FUTA wage base). However, employers who pay state unemployment insurance taxes on time receive a credit of up to 5.4%, reducing the effective FUTA rate to 0.6% for most employers. That means the annual maximum FUTA cost per employee is $42 (0.6% of $7,000). The filing deadline for Form 940 is January 31 of the following year, with an extension to February 10 if all FUTA taxes were deposited on time during the year. While the return is filed annually, FUTA tax deposits may be required quarterly. If at any point during the year the cumulative FUTA tax liability exceeds $500, the employer must deposit that amount by the last day of the month following the end of the quarter. If the total FUTA liability for the year is $500 or less, the employer can pay it with the Form 940 filing. The credit for state unemployment taxes can be reduced in credit reduction states, which are states that have borrowed from the federal unemployment fund and have not fully repaid the loans. The IRS publishes the list of credit reduction states annually, and employers in those states pay more FUTA than the standard 0.6%.</p>

        <h2>How BEG handles Form 940 for clients</h2>
        <p>BEG Managed Payroll tracks each employee's wages against the $7,000 FUTA wage base throughout the year, monitors quarterly FUTA liability for deposit requirements, and files Form 940 accurately by the January 31 deadline. BEG applies state UI credits correctly and accounts for any credit reduction adjustments. FUTA compliance is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the FUTA tax rate?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The gross FUTA rate is 6% on the first $7,000 of each employee's wages. Employers who pay state unemployment taxes on time receive a federal credit of up to 5.4%, making the effective FUTA rate 0.6% for most employers, or $42 per employee per year.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is a credit reduction state?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A credit reduction state has borrowed money from the federal unemployment fund to pay benefits and has not fully repaid the loan. Employers in these states lose part of their FUTA credit, effectively paying a higher FUTA rate. The IRS publishes the list of credit reduction states and their reduction amounts each November.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>When must FUTA taxes be deposited during the year?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>When cumulative FUTA liability for the year exceeds $500 at the end of any quarter, the employer must deposit the liability by the last day of the month following the quarter end. If total FUTA liability remains $500 or under at year end, it can be paid with the Form 940 filing.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/form-940', url: 'https://www.beghr.com/resources/payroll-glossary/form-940', name: 'Form 940 | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form 940', description: 'Learn how to file Form 940, when FUTA deposits are required, the FUTA tax rate, and how state unemployment credits reduce the amount owed.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form 940', item: 'https://www.beghr.com/resources/payroll-glossary/form-940' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
