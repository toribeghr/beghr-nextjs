import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pay Frequency | Payroll Glossary | BEG',
  description: 'How often employees receive paychecks - weekly, bi-weekly, semi-monthly, or monthly - governed by state pay frequency laws.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/pay-frequency' },
  openGraph: { title: 'Pay Frequency | Payroll Glossary | BEG', description: 'How often employees receive paychecks - weekly, bi-weekly, semi-monthly, or monthly - governed by state pay frequency laws.', url: 'https://beghr.com/resources/payroll-glossary/pay-frequency', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Pay Frequency | Payroll Glossary | BEG', description: 'How often employees receive paychecks - weekly, bi-weekly, semi-monthly, or monthly - governed by state pay frequency laws.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the most common pay frequency?", a: "Bi-weekly (every two weeks, 26 pay periods per year) is the most common pay frequency in the United States, used by approximately 43% of private employers according to BLS data." },
  { q: "Can an employer pay employees monthly?", a: "Monthly pay is permitted for certain employee types in some states, typically executive and professional employees. Many states prohibit monthly pay for hourly workers and require at least twice-monthly or weekly payment." },
  { q: "How does pay frequency affect overtime calculation?", a: "Overtime is always calculated on a 7-day workweek basis regardless of pay frequency. Semi-monthly pay periods do not align with workweeks, so employers must track overtime by workweek and may need to split overtime premiums across pay periods." },
];

export default function PayFrequencyPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Pay Frequency?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Pay frequency is how often wages are paid. The four standard options are weekly, bi-weekly, semi-monthly, and monthly. State laws set minimum required pay frequency by employee type.</p>
        </div>
        <h2>Why pay frequency matters for employers</h2>
        <p>Pay frequency affects cash flow, payroll processing costs, employee financial wellness, and legal compliance. Most states mandate minimum pay frequencies that vary by employee type - some states require weekly pay for manual workers but allow monthly pay for executive or administrative employees.</p>
        <p>The four standard pay frequencies are: weekly (52 payrolls/year), bi-weekly or every two weeks (26 payrolls/year), semi-monthly or twice a month on fixed dates such as the 1st and 15th (24 payrolls/year), and monthly (12 payrolls/year).</p>
        <p>Bi-weekly and semi-monthly are the most common. Bi-weekly is popular because it aligns with workweeks for overtime calculation. Semi-monthly is common for salaried employees and simplifies benefits deductions - 24 pay periods allows for simpler monthly benefit premium splitting.</p>
        <p>Overtime calculation is simpler on a weekly or bi-weekly schedule because overtime is calculated on a fixed 7-day workweek. Semi-monthly pay periods do not align with 7-day workweeks, requiring employers to track overtime on a workweek basis separately from pay period dates.</p>
        <p>State pay frequency laws are strict in many states. New York requires weekly pay for manual workers. California requires at least twice-monthly pay for most employees. Employers who change pay frequency mid-year must notify employees in advance and ensure the change does not delay wages beyond state minimums.</p>
        <p>Changing pay frequency also affects benefit deductions. A switch from bi-weekly (26 periods) to semi-monthly (24 periods) changes the per-period deduction amounts for benefits with fixed monthly costs.</p>
        <h2>How BEG helps clients choose and manage pay frequency</h2>
        <p>BEG Managed Payroll manages payroll on any standard pay frequency, ensures compliance with state-specific pay frequency laws, and handles the complexity of overtime tracking across pay periods as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/pay-frequency', url: 'https://beghr.com/resources/payroll-glossary/pay-frequency', name: 'Pay Frequency | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Pay Frequency', description: 'How often employees receive paychecks - weekly, bi-weekly, semi-monthly, or monthly - governed by state pay frequency laws.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Pay Frequency', item: 'https://beghr.com/resources/payroll-glossary/pay-frequency' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
