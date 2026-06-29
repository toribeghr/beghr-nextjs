import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leasing Commission Payroll | Payroll Glossary | BEG',
  description: 'Commission paid to leasing agents on apartment or commercial lease signings, subject to minimum wage compliance and chargeback rules.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/leasing-commission-payroll' },
  openGraph: { title: 'Leasing Commission Payroll | Payroll Glossary | BEG', description: 'Commission paid to leasing agents on apartment or commercial lease signings, subject to minimum wage compliance and chargeback rules.', url: 'https://www.beghr.com/resources/payroll-glossary/leasing-commission-payroll', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Leasing Commission Payroll | Payroll Glossary | BEG', description: 'Commission paid to leasing agents on apartment or commercial lease signings, subject to minimum wage compliance and chargeback rules.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can a leasing agent be paid commission only?", a: "Commission-only arrangements are permissible but the employer must still ensure the agent earns at least minimum wage for all hours worked in each workweek. A draw against commissions is the common solution." },
  { q: "Are leasing agents employees or independent contractors?", a: "This depends on the facts. On-site leasing agents with set hours, uniforms, and direct supervision are typically employees. Licensed real estate agents with significant autonomy may qualify as independent contractors under state broker laws." },
  { q: "Can employers deduct a chargeback from a leasing agent's next paycheck?", a: "Yes, but with limits. Chargebacks may not reduce an employee's wages below minimum wage in any workweek. State wage payment laws may also restrict when and how deductions can be made from earned commissions." },
];

export default function LeasingCommissionPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Leasing Commission Payroll?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Leasing commission payroll covers commission-based pay for property leasing agents, requiring careful minimum wage and overtime compliance and chargeback tracking.</p>
        </div>
        <h2>Why leasing commission payroll matters for employers</h2>
        <p>Leasing agents at apartment communities and commercial real estate firms are often compensated primarily or entirely on commission. This creates unique payroll complexity because commission-only arrangements must still satisfy the FLSA minimum wage requirement for each individual workweek.</p>
        <p>If a leasing agent earns no commissions in a given workweek, the employer must ensure total compensation for hours worked meets the federal or applicable state minimum wage. Commission draw arrangements - where the employer advances a minimum amount against future commissions - are common but must be structured carefully to avoid FLSA violations.</p>
        <p>Chargebacks occur when a lease falls through after the agent is paid the commission. Employers may deduct chargebacks from future commissions, but deductions that bring earnings below minimum wage in any workweek are unlawful. Chargeback agreements must be reviewed against state wage payment laws that may restrict deductions from earned wages.</p>
        <p>Real estate brokers who are licensed agents may qualify for the FLSA's outside sales exemption or may be independent contractors, depending on the level of control the firm exercises. Residential leasing agents who work primarily on-site and follow the employer's procedures are typically non-exempt employees.</p>
        <p>State laws add additional complexity - California, for example, has specific requirements for how real estate commission wages must be paid and strict limitations on chargebacks from earned wages.</p>
        <h2>How BEG handles leasing commission payroll for clients</h2>
        <p>BEG Managed Payroll processes commission payroll, tracks draws and chargebacks, and ensures minimum wage compliance for leasing clients as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/leasing-commission-payroll', url: 'https://www.beghr.com/resources/payroll-glossary/leasing-commission-payroll', name: 'Leasing Commission Payroll | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Leasing Commission Payroll', description: 'Commission paid to leasing agents on apartment or commercial lease signings, subject to minimum wage compliance and chargeback rules.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Leasing Commission Payroll', item: 'https://www.beghr.com/resources/payroll-glossary/leasing-commission-payroll' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
