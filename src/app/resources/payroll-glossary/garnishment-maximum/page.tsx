import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garnishment Maximum (Title III) | Payroll Glossary | BEG',
  description: 'Federal CCPA cap limiting wage garnishments to 25% of disposable earnings or the amount above 30x the federal minimum wage, whichever is less.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/garnishment-maximum' },
  openGraph: { title: 'Garnishment Maximum (Title III) | Payroll Glossary | BEG', description: 'Federal CCPA cap limiting wage garnishments to 25% of disposable earnings or the amount above 30x the federal minimum wage, whichever is less.', url: 'https://beghr.com/resources/payroll-glossary/garnishment-maximum', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Garnishment Maximum (Title III) | Payroll Glossary | BEG', description: 'Federal CCPA cap limiting wage garnishments to 25% of disposable earnings or the amount above 30x the federal minimum wage, whichever is less.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can an employer fire an employee because of a wage garnishment?", a: "Federal law prohibits discharging an employee because of any single garnishment. However, Title III does not protect employees with two or more separate garnishment orders." },
  { q: "How is disposable income calculated for garnishment purposes?", a: "Disposable earnings are gross wages minus legally required deductions such as taxes and FICA. Voluntary deductions like 401(k) or health insurance premiums are not subtracted." },
  { q: "Do state garnishment limits override federal limits?", a: "States can provide greater protection to employees by setting lower garnishment limits, but they cannot exceed the federal maximums set by Title III of the CCPA." },
];

export default function GarnishmentMaximumPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Garnishment Maximum (Title III)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Title III of the CCPA caps wage garnishments at 25% of disposable earnings or the amount exceeding 30 times the federal minimum wage, whichever is less.</p>
        </div>
        <h2>Why the garnishment maximum matters for employers</h2>
        <p>Title III of the Consumer Credit Protection Act (CCPA) limits the amount of an employee's disposable earnings that can be garnished in any single workweek. Disposable earnings are wages remaining after legally required deductions such as federal, state, and local taxes, FICA, and state unemployment insurance. Voluntary deductions like 401(k) contributions and health insurance do not reduce disposable earnings for garnishment purposes.</p>
        <p>The federal cap is the lesser of: (1) 25% of disposable earnings, or (2) the amount by which disposable earnings exceed 30 times the federal minimum wage ($7.25/hour), which equals $217.50 per week. This means employees earning less than $290/week have protected earnings that reduce or eliminate the garnishable amount.</p>
        <p>Child support and alimony garnishments have higher caps - up to 50% of disposable earnings if the employee is supporting another spouse or child, and up to 60% if not. An additional 5% can be withheld if the support is 12 or more weeks in arrears.</p>
        <p>Federal student loan garnishments are capped at 15% of disposable earnings. State laws may set lower limits than the federal maximums but cannot exceed them. Employers who fail to comply with garnishment orders face contempt of court liability. Discharging an employee because of a single garnishment is prohibited under Title III.</p>
        <h2>How BEG handles garnishments for clients</h2>
        <p>BEG Managed Payroll processes garnishment orders, calculates allowable withholding amounts, remits funds to the appropriate agency, and maintains compliance records as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/garnishment-maximum', url: 'https://beghr.com/resources/payroll-glossary/garnishment-maximum', name: 'Garnishment Maximum (Title III) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Garnishment Maximum (Title III)', description: 'Federal CCPA cap limiting wage garnishments to 25% of disposable earnings or the amount above 30x the federal minimum wage, whichever is less.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Garnishment Maximum (Title III)', item: 'https://beghr.com/resources/payroll-glossary/garnishment-maximum' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
