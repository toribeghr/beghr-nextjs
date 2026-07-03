import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medicare Additional Tax (0.9%) | Payroll Glossary | BEG',
  description: 'Additional 0.9% Medicare tax on wages above $200,000 that employers must withhold but are not required to match.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/medicare-additional-tax' },
  openGraph: { title: 'Medicare Additional Tax (0.9%) | Payroll Glossary | BEG', description: 'Additional 0.9% Medicare tax on wages above $200,000 that employers must withhold but are not required to match.', url: 'https://www.beghr.com/resources/payroll-glossary/medicare-additional-tax', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Medicare Additional Tax (0.9%) | Payroll Glossary | BEG', description: 'Additional 0.9% Medicare tax on wages above $200,000 that employers must withhold but are not required to match.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does the employer pay the 0.9% Additional Medicare Tax?", a: "No. The Additional Medicare Tax is employee-only. Employers must withhold it but do not pay a matching 0.9% employer share." },
  { q: "What if an employee has wages from multiple employers?", a: "Each employer withholds once wages exceed $200,000 from that employer only. If an employee works two jobs and neither alone crosses $200,000 but the combined total does, the employee pays the shortfall when filing their return." },
  { q: "When does the employer start withholding the Additional Medicare Tax?", a: "Employers begin withholding once wages paid to that employee in the current calendar year exceed $200,000. The additional 0.9% applies to all wages above that amount for the rest of the year." },
];

export default function MedicareAdditionalTaxPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Medicare Additional Tax (0.9%)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The 0.9% Additional Medicare Tax applies to wages above $200,000 (single filers) - employers must withhold it but do not pay a matching employer share.</p>
        </div>
        <h2>Why the Additional Medicare Tax matters for employers</h2>
        <p>The Additional Medicare Tax was enacted as part of the Affordable Care Act and took effect in 2013. Unlike regular Medicare tax (1.45% employee, 1.45% employer), the 0.9% Additional Medicare Tax is paid only by the employee - there is no employer match.</p>
        <p>Employers are required to withhold the Additional Medicare Tax from wages paid to an individual employee once wages from that employer exceed $200,000 in a calendar year. The $200,000 threshold applies per employer, per employee - it does not consider the employee's filing status or wages from other sources.</p>
        <p>This creates a situation where some employees may have too little withheld (if they have two jobs each paying under $200,000 but combined wages exceed the threshold), and others may have excess withholding (if a married couple combined has wages below $250,000 but one spouse triggered withholding at $200,000). Employees reconcile on Form 8959 when filing their individual returns.</p>
        <p>Once an employee's wages cross the $200,000 threshold, the employer withholds the additional 0.9% on all wages above that amount for the remainder of the calendar year. The employer's regular Medicare withholding of 1.45% continues on all wages.</p>
        <p>The threshold for the Additional Medicare Tax varies by filing status: $200,000 for single filers, $250,000 for married filing jointly, and $125,000 for married filing separately. However, employers apply only the $200,000 threshold regardless of employee filing status.</p>
        <h2>How BEG handles Additional Medicare Tax withholding for clients</h2>
        <p>BEG Managed Payroll automatically tracks when each employee crosses the $200,000 threshold and applies the additional 0.9% withholding correctly as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/medicare-additional-tax', url: 'https://www.beghr.com/resources/payroll-glossary/medicare-additional-tax', name: 'Medicare Additional Tax (0.9%) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Medicare Additional Tax (0.9%)', description: 'Additional 0.9% Medicare tax on wages above $200,000 that employers must withhold but are not required to match.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Medicare Additional Tax (0.9%)', item: 'https://www.beghr.com/resources/payroll-glossary/medicare-additional-tax' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
