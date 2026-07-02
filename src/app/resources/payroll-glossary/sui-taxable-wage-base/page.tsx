import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SUI Taxable Wage Base | Payroll Glossary | BEG',
  description: 'The per-employee annual earnings cap subject to state unemployment tax -- varies from $7,000 to over $60,000 depending on the state.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/sui-taxable-wage-base' },
  openGraph: {
    title: 'SUI Taxable Wage Base | Payroll Glossary | BEG',
    description: 'The per-employee annual earnings cap subject to state unemployment tax -- varies from $7,000 to over $60,000 depending on the state.',
    url: 'https://www.beghr.com/resources/payroll-glossary/sui-taxable-wage-base',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SUI Taxable Wage Base | Payroll Glossary | BEG', description: 'The per-employee annual earnings cap subject to state unemployment tax -- varies from $7,000 to over $60,000 depending on the state.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do employers have to manage SUI Taxable Wage Base themselves?", a: "No. A managed payroll provider handles SUI Taxable Wage Base as part of full-service payroll. BEG manages this for clients at $25-$45 PEPM with no system migration required." },
  { q: "What happens if SUI Taxable Wage Base is handled incorrectly?", a: "Errors related to SUI Taxable Wage Base can trigger IRS penalties, state agency assessments, or employee disputes. Catching and correcting errors before filing is far less costly than after-the-fact corrections." },
  { q: "How does BEG handle SUI Taxable Wage Base for managed payroll clients?", a: "BEG tracks, calculates, and remits everything related to SUI Taxable Wage Base as part of fully managed payroll. Clients do not need to monitor compliance -- that is included in the service at $25-$45 PEPM." },
];

export default function SuiTaxableWageBasePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is SUI Taxable Wage Base?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The maximum wages per employee subject to state unemployment tax in a given year. The wage base varies widely by state, from $7,000 in Florida to over $60,000 in Washington, and resets each January 1.</p>
        </div>

        <h2>Why SUI Taxable Wage Base matters for employers</h2>
        <p>The SUI taxable wage base resets to zero for each employee on January 1 of each year. Once an employee earns wages above the state wage base in a given year, no additional SUI tax is owed on their wages for the rest of that year. Employers in states with high wage bases (such as Washington, Oregon, and Hawaii) face significantly higher annual SUI costs than employers in states with low wage bases (such as Florida, Arizona, and California).</p>
        <p>Some states adjust their SUI taxable wage base annually based on average wages, while others hold the base constant until a legislative change. Employers with high-wage employees in high-wage-base states should factor SUI costs into payroll budgeting, as the per-employee annual SUI expense can be substantial.</p>

        <h2>How BEG handles SUI Taxable Wage Base for clients</h2>
        <p>
          BEG Managed Payroll handles SUI Taxable Wage Base as part of a fully managed payroll service at $25-$45 per employee per month.
          Clients do not need to track compliance rules, filing deadlines, or calculation methods related to SUI Taxable Wage Base on their own.
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/sui-taxable-wage-base', url: 'https://www.beghr.com/resources/payroll-glossary/sui-taxable-wage-base', name: 'SUI Taxable Wage Base | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'SUI Taxable Wage Base', description: 'The per-employee annual earnings cap subject to state unemployment tax -- varies from $7,000 to over $60,000 depending on the state.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'SUI Taxable Wage Base', item: 'https://www.beghr.com/resources/payroll-glossary/sui-taxable-wage-base' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
