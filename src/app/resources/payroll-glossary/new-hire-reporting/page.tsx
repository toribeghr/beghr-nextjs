import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Hire Reporting | Payroll Glossary | BEG',
  description: 'Federal and state requirement to report all newly hired employees within 20 days of hire to state directories for child support enforcement.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/new-hire-reporting' },
  openGraph: { title: 'New Hire Reporting | Payroll Glossary | BEG', description: 'Federal and state requirement to report all newly hired employees within 20 days of hire to state directories for child support enforcement.', url: 'https://beghr.com/resources/payroll-glossary/new-hire-reporting', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'New Hire Reporting | Payroll Glossary | BEG', description: 'Federal and state requirement to report all newly hired employees within 20 days of hire to state directories for child support enforcement.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does new hire reporting apply to independent contractors?", a: "The federal requirement applies to employees, not independent contractors. However, some states have extended reporting requirements to contractors paid $600 or more in a calendar year." },
  { q: "What is the deadline for new hire reporting?", a: "The federal deadline is within 20 days of the date of hire. States with twice-monthly electronic reporting may accept reports up to 16 days apart instead." },
  { q: "Do rehired employees need to be reported?", a: "Yes. If an employee was separated and returns after 60 or more consecutive days of separation, they must be reported as a new hire. Employees recalled within 60 days of separation generally do not need to be re-reported." },
];

export default function NewHireReportingPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is New Hire Reporting?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>New hire reporting requires employers to report each new employee to their state's directory within 20 days of hire, supporting child support enforcement nationally.</p>
        </div>
        <h2>Why new hire reporting matters for employers</h2>
        <p>Federal law (Personal Responsibility and Work Opportunity Reconciliation Act of 1996) requires all employers to report newly hired employees to their state's new hire registry within 20 days of hire. States transmit this data to the National Directory of New Hires, which is used primarily to locate non-custodial parents who owe child support and to issue income withholding orders.</p>
        <p>The minimum information required for new hire reporting includes the employee's name, address, Social Security number, date of hire, and the employer's name, address, and federal EIN. Many states also require the employee's date of birth, salary, and whether the employer offers health insurance.</p>
        <p>Employers who use electronic filing may report twice monthly (no more than 16 days apart) in lieu of the 20-day deadline. Multi-state employers who employ workers in multiple states may elect to report all employees to a single designated state.</p>
        <p>New hire reporting also helps states detect unemployment insurance fraud (individuals who claim benefits while employed), match Medicaid recipients, and enforce support obligations. The data-sharing infrastructure makes new hire information available nationally within 48-72 hours of state submission.</p>
        <p>Penalties for failure to report new hires vary by state, typically ranging from $25 to $500 per unreported employee. Some states impose higher penalties for conspiracy between an employer and an employee to avoid reporting. Rehires who have been separated for 60 or more consecutive days must also be reported as new hires.</p>
        <h2>How BEG handles new hire reporting for clients</h2>
        <p>BEG Managed Payroll submits new hire reports to the appropriate state agencies within required deadlines as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/new-hire-reporting', url: 'https://beghr.com/resources/payroll-glossary/new-hire-reporting', name: 'New Hire Reporting | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'New Hire Reporting', description: 'Federal and state requirement to report all newly hired employees within 20 days of hire to state directories for child support enforcement.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'New Hire Reporting', item: 'https://beghr.com/resources/payroll-glossary/new-hire-reporting' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
