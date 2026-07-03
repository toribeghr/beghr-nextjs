import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimum Wage | Payroll Glossary | BEG',
  description: 'The lowest hourly rate an employer may legally pay, currently $7.25 federal, with many states and localities setting higher rates.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/minimum-wage' },
  openGraph: { title: 'Minimum Wage | Payroll Glossary | BEG', description: 'The lowest hourly rate an employer may legally pay, currently $7.25 federal, with many states and localities setting higher rates.', url: 'https://www.beghr.com/resources/payroll-glossary/minimum-wage', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Minimum Wage | Payroll Glossary | BEG', description: 'The lowest hourly rate an employer may legally pay, currently $7.25 federal, with many states and localities setting higher rates.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Which minimum wage applies if state and federal rates differ?", a: "Employees are entitled to the higher of the applicable federal, state, or local minimum wage. Employers must pay whichever rate is highest in the jurisdiction where work is performed." },
  { q: "Do tipped employees have a different minimum wage?", a: "Yes. Federal law allows a tip credit that lets employers pay tipped employees as little as $2.13/hour in cash wages, as long as tips bring total pay to at least $7.25/hour. Many states have eliminated or limited this tip credit." },
  { q: "Are salaried employees subject to minimum wage?", a: "Yes. Non-exempt salaried employees must earn at least the applicable minimum wage for all hours worked each workweek. If a salary does not cover minimum wage for actual hours worked, additional pay is owed." },
];

export default function MinimumWagePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Minimum Wage?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Minimum wage is the lowest hourly pay rate permitted by law. The federal minimum is $7.25, but many states and cities require higher rates that supersede the federal floor.</p>
        </div>
        <h2>Why minimum wage compliance matters for employers</h2>
        <p>The federal minimum wage of $7.25 per hour has been in effect since 2009 and applies under the Fair Labor Standards Act to all covered non-exempt employees. However, many states and an increasing number of cities and counties have enacted minimum wages significantly higher than the federal floor. When a state or local minimum wage exceeds the federal rate, employers must pay the higher amount.</p>
        <p>As of 2024, state minimum wages range from $7.25 (in states with no state minimum, deferring to federal) up to $17.00 or more in states like California, Washington, and New York. Some cities have minimum wages above $20/hour. Employers with locations in multiple jurisdictions must track each location's applicable rate.</p>
        <p>Tipped employees may be paid a reduced cash wage as low as $2.13/hour federally, with the employer obligated to make up the difference if tips do not bring total hourly pay to the federal minimum. Many states have eliminated or reduced the tip credit, requiring higher cash wages for tipped workers.</p>
        <p>Youth minimum wages, training wages, and subminimum wages under Section 14(c) for workers with disabilities are federal provisions that allow temporary lower wages in specific circumstances, subject to strict conditions.</p>
        <p>Minimum wage violations are the most frequently cited FLSA violations. Employers must ensure that effective hourly rates for piece-rate, commission, and salaried non-exempt employees also meet minimum wage requirements for every workweek.</p>
        <h2>How BEG ensures minimum wage compliance for clients</h2>
        <p>BEG Managed Payroll tracks applicable federal, state, and local minimum wages for each client location and automatically applies the correct rate as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/minimum-wage', url: 'https://www.beghr.com/resources/payroll-glossary/minimum-wage', name: 'Minimum Wage | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Minimum Wage', description: 'The lowest hourly rate an employer may legally pay, currently $7.25 federal, with many states and localities setting higher rates.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Minimum Wage', item: 'https://www.beghr.com/resources/payroll-glossary/minimum-wage' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
