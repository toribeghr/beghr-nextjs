import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outside Sales Exemption | Payroll Glossary | BEG',
  description: 'FLSA overtime exemption for employees whose primary duty is making sales away from the employer\'s place of business, with no salary minimum required.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/outside-sales-exemption' },
  openGraph: { title: 'Outside Sales Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for employees whose primary duty is making sales away from the employer\'s place of business, with no salary minimum required.', url: 'https://beghr.com/resources/payroll-glossary/outside-sales-exemption', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Outside Sales Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for employees whose primary duty is making sales away from the employer\'s place of business, with no salary minimum required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is there a salary minimum for the outside sales exemption?", a: "No. Unlike most FLSA white-collar exemptions, the outside sales exemption has no minimum salary or fee basis requirement. A commission-only salesperson can qualify." },
  { q: "Does a salesperson who works from home qualify for outside sales?", a: "Generally no. Working from home is not the same as selling away from the employer's place of business. Outside sales requires making sales in the field, visiting customers at their locations." },
  { q: "What if an outside salesperson also does inside work?", a: "Incidental inside work does not disqualify an employee from the exemption. The employee must simply spend the majority of their time, or have their principal duty be, making sales away from the employer's premises." },
];

export default function OutsideSalesExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Outside Sales Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The outside sales exemption covers employees whose primary duty is making sales or obtaining orders away from the employer's premises. No minimum salary threshold applies.</p>
        </div>
        <h2>Why the outside sales exemption matters for employers</h2>
        <p>The outside sales exemption is one of the narrowest and most straightforward FLSA overtime exemptions because it has no salary or fee basis requirement. An employee can be paid entirely on commission and still qualify - as long as they meet the duties test.</p>
        <p>To qualify, the employee's primary duty must be making sales or obtaining orders or contracts for services or facility use. The sales must be made at a location away from the employer's place of business. Employees who primarily sell inside (at stores, phone centers, or via internet) do not qualify for the outside sales exemption, even if they occasionally visit customers.</p>
        <p>Primary duty is the principal, main, major, or most important duty of the employee. Employees who spend more than 50% of their time in outside sales generally meet the primary duty test. However, spending less than 50% outside does not automatically disqualify an employee if their outside sales work is otherwise the most important aspect of their job.</p>
        <p>Incidental inside work - writing up orders, making calls to arrange appointments, sending follow-up emails - does not disqualify employees from the exemption as long as outside sales remain the primary duty.</p>
        <p>Inside salespersons do not qualify for the outside sales exemption and are generally non-exempt unless they meet a different exemption (such as earning over $107,432 under the HCE exemption or meeting the administrative exemption criteria). Inside salespeople earning commissions may qualify for a different FLSA exemption under Section 7(i) for retail or service establishment employees.</p>
        <h2>How BEG helps clients classify sales employees correctly</h2>
        <p>BEG Managed Payroll helps clients document outside sales activities, apply correct exemption classifications, and track compensation for sales teams as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/outside-sales-exemption', url: 'https://beghr.com/resources/payroll-glossary/outside-sales-exemption', name: 'Outside Sales Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Outside Sales Exemption', description: 'FLSA overtime exemption for employees whose primary duty is making sales away from the employer\'s place of business, with no salary minimum required.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Outside Sales Exemption', item: 'https://beghr.com/resources/payroll-glossary/outside-sales-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
