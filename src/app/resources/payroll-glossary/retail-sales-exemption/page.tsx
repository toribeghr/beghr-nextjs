import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Sales Exemption (FLSA) | Payroll Glossary | BEG',
  description: 'FLSA overtime exemption for commissioned retail employees earning over 1.5x minimum wage when commissions exceed half their compensation.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/retail-sales-exemption' },
  openGraph: {
    title: 'Retail Sales Exemption (FLSA) | Payroll Glossary | BEG',
    description: 'FLSA overtime exemption for commissioned retail employees earning over 1.5x minimum wage when commissions exceed half their compensation.',
    url: 'https://beghr.com/resources/payroll-glossary/retail-sales-exemption',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Retail Sales Exemption (FLSA) | Payroll Glossary | BEG', description: 'FLSA overtime exemption for commissioned retail employees earning over 1.5x minimum wage when commissions exceed half their compensation.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do employers have to manage Retail Sales Exemption (FLSA) themselves?", a: "No. A managed payroll provider handles Retail Sales Exemption (FLSA) as part of full-service payroll. BEG manages this for clients at $25-$45 PEPM with no system migration required." },
  { q: "What happens if Retail Sales Exemption (FLSA) is handled incorrectly?", a: "Errors related to Retail Sales Exemption (FLSA) can trigger IRS penalties, state agency assessments, or employee disputes. Catching and correcting errors before filing is far less costly than after-the-fact corrections." },
  { q: "How does BEG handle Retail Sales Exemption (FLSA) for managed payroll clients?", a: "BEG tracks, calculates, and remits everything related to Retail Sales Exemption (FLSA) as part of fully managed payroll. Clients do not need to monitor compliance -- that is included in the service at $25-$45 PEPM." },
];

export default function RetailSalesExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Retail Sales Exemption (FLSA)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An FLSA overtime exemption for commissioned employees of retail or service establishments who earn at least 1.5 times minimum wage and whose commissions represent more than half of their total pay.</p>
        </div>

        <h2>Why Retail Sales Exemption (FLSA) matters for employers</h2>
        <p>Under Section 7(i) of the FLSA, employees of retail or service establishments may be exempt from overtime if they earn more than 1.5 times the applicable minimum wage and more than half their compensation represents commissions on goods or services. This exemption applies to establishments where 75% or more of annual sales are retail in nature and not for resale. Auto dealerships, clothing stores, and furniture retailers frequently use this exemption for commissioned sales staff.</p>
        <p>The exemption must be evaluated on a workweek-by-workweek basis. If a commissioned employee's earnings fall below the 1.5x threshold or the commission proportion dips below 50% in any workweek, overtime must be paid for that week. Tracking these thresholds accurately is essential to avoiding FLSA exposure.</p>

        <h2>How BEG handles Retail Sales Exemption (FLSA) for clients</h2>
        <p>
          BEG Managed Payroll handles Retail Sales Exemption (FLSA) as part of a fully managed payroll service at $25-$45 per employee per month.
          Clients do not need to track compliance rules, filing deadlines, or calculation methods related to Retail Sales Exemption (FLSA) on their own.
          Everything is included.{' '}
          <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.
        </p>

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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/retail-sales-exemption', url: 'https://beghr.com/resources/payroll-glossary/retail-sales-exemption', name: 'Retail Sales Exemption (FLSA) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Retail Sales Exemption (FLSA)', description: 'FLSA overtime exemption for commissioned retail employees earning over 1.5x minimum wage when commissions exceed half their compensation.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Retail Sales Exemption (FLSA)', item: 'https://beghr.com/resources/payroll-glossary/retail-sales-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
