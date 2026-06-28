import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motor Carrier Exemption | Payroll Glossary | BEG',
  description: 'FLSA overtime exemption for drivers, driver helpers, loaders, and mechanics affecting interstate commerce regulated by the DOT.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/motor-carrier-exemption' },
  openGraph: { title: 'Motor Carrier Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for drivers, driver helpers, loaders, and mechanics affecting interstate commerce regulated by the DOT.', url: 'https://beghr.com/resources/payroll-glossary/motor-carrier-exemption', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Motor Carrier Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for drivers, driver helpers, loaders, and mechanics affecting interstate commerce regulated by the DOT.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does the motor carrier exemption apply to all truck drivers?", a: "No. Drivers must work for a motor carrier subject to DOT jurisdiction and must drive in interstate commerce or transport goods that are part of an interstate shipment. Local delivery drivers may not qualify." },
  { q: "Are small vehicle drivers covered by FLSA overtime?", a: "Yes. Drivers who use vehicles weighing 10,000 pounds or less are covered by FLSA overtime protections regardless of whether they are involved in interstate commerce." },
  { q: "Does the motor carrier exemption eliminate all DOT requirements?", a: "No. The motor carrier exemption removes the FLSA overtime obligation, but DOT hours-of-service regulations - which limit driving hours for safety purposes - still apply independently." },
];

export default function MotorCarrierExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Motor Carrier Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The motor carrier exemption excludes certain transportation workers affecting interstate commerce from FLSA overtime requirements when the DOT has hours-of-service authority.</p>
        </div>
        <h2>Why the motor carrier exemption matters for employers</h2>
        <p>The motor carrier exemption under Section 13(b)(1) of the FLSA exempts certain employees of motor carriers and motor private carriers from the FLSA overtime requirement when the Secretary of Transportation has the power to establish hours-of-service regulations affecting those employees.</p>
        <p>The exemption applies to drivers, driver helpers, loaders who affect the safe operation of a vehicle, and mechanics who repair vehicles used in transportation in interstate or foreign commerce. The key requirement is that the employee's work must affect the safety of operation of motor vehicles on public highways in interstate commerce.</p>
        <p>Not every truck driver qualifies. The driver must actually drive or be available to drive vehicles that transport goods or passengers across state lines, or must transport goods that are part of a continuous movement in interstate commerce. A driver who only makes local deliveries of goods that have already completed their interstate journey may not qualify.</p>
        <p>The Small Vehicle Exception limits the exemption for employees who use or drive vehicles weighing 10,000 pounds or less. These employees are entitled to FLSA overtime protections regardless of interstate commerce involvement.</p>
        <p>Employers using the motor carrier exemption must carefully document interstate routes, the nature of goods transported, and which employees regularly drive in interstate commerce. The DOT's hours-of-service regulations still apply to qualifying drivers even when the FLSA overtime exemption is valid.</p>
        <h2>How BEG supports transportation and logistics clients</h2>
        <p>BEG Managed Payroll correctly classifies drivers and transportation workers, applies the motor carrier exemption where appropriate, and maintains compliance documentation as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/motor-carrier-exemption', url: 'https://beghr.com/resources/payroll-glossary/motor-carrier-exemption', name: 'Motor Carrier Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Motor Carrier Exemption', description: 'FLSA overtime exemption for drivers, driver helpers, loaders, and mechanics affecting interstate commerce regulated by the DOT.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Motor Carrier Exemption', item: 'https://beghr.com/resources/payroll-glossary/motor-carrier-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
