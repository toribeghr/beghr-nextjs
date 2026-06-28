import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Highly Compensated Employee Exemption | Payroll Glossary | BEG',
  description: 'FLSA overtime exemption for employees earning at least $107,432 annually who customarily perform exempt duties.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/highly-compensated-employee-exemption' },
  openGraph: { title: 'Highly Compensated Employee Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for employees earning at least $107,432 annually who customarily perform exempt duties.', url: 'https://beghr.com/resources/payroll-glossary/highly-compensated-employee-exemption', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Highly Compensated Employee Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for employees earning at least $107,432 annually who customarily perform exempt duties.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the current HCE salary threshold?", a: "The threshold has been subject to regulatory changes and litigation. As of the 2024 DOL rule, it was set at $107,432 annually. Employers should verify the currently enforceable threshold given ongoing court challenges." },
  { q: "Does the HCE exemption require a full duties analysis?", a: "No. The HCE exemption only requires that the employee customarily and regularly performs at least one exempt duty, not the full battery of duties required under the standard white-collar exemptions." },
  { q: "Can hourly employees qualify for the HCE exemption?", a: "No. The HCE exemption requires payment on a salary or fee basis of at least $684 per week. Employees paid purely on an hourly basis cannot qualify." },
];

export default function HighlyCompensatedEmployeeExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Highly Compensated Employee Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The HCE exemption covers employees earning at least $107,432 annually who customarily perform at least one exempt duty - requiring less duties analysis than standard exemptions.</p>
        </div>
        <h2>Why the HCE exemption matters for employers</h2>
        <p>The Highly Compensated Employee (HCE) exemption under the FLSA provides a streamlined overtime exemption for very high earners. To qualify, an employee must: (1) earn a total annual compensation of at least $107,432 (as of 2024 rules, subject to ongoing litigation); (2) receive at least $684 per week on a salary or fee basis; and (3) customarily and regularly perform at least one of the exempt duties associated with the executive, administrative, or professional exemption.</p>
        <p>The key advantage of the HCE exemption is that the duties test is significantly easier to meet than the standard exemptions. An employee does not need to meet the full duties requirements for any single white-collar exemption - they only need to customarily and regularly perform at least one exempt duty.</p>
        <p>For employers, the HCE exemption provides a practical option for employees in hybrid roles who earn substantial salaries but whose job functions do not neatly fit the standard executive, administrative, or professional categories.</p>
        <p>Important caution: the DOL has issued regulations attempting to increase the HCE threshold significantly (to $151,164 in 2025 regulations). These rules have faced court challenges and injunctions. Employers should verify the current enforceable threshold before relying on HCE classification. Misclassified employees who are owed overtime can recover back pay for up to three years plus liquidated damages.</p>
        <h2>How BEG helps clients manage exempt classifications</h2>
        <p>BEG Managed Payroll tracks employee salary levels and flags potential classification issues, ensuring correct overtime treatment as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/highly-compensated-employee-exemption', url: 'https://beghr.com/resources/payroll-glossary/highly-compensated-employee-exemption', name: 'Highly Compensated Employee Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Highly Compensated Employee Exemption', description: 'FLSA overtime exemption for employees earning at least $107,432 annually who customarily perform exempt duties.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Highly Compensated Employee Exemption', item: 'https://beghr.com/resources/payroll-glossary/highly-compensated-employee-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
