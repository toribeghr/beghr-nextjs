import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Term Life Insurance (Imputed Income) | Payroll Glossary | BEG',
  description: 'Employer life insurance over $50,000 creates taxable imputed income calculated using IRS Table I rates by employee age.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/group-term-life-imputed' },
  openGraph: {
    title: 'Group Term Life Insurance (Imputed Income) | Payroll Glossary | BEG',
    description: 'Employer life insurance over $50,000 creates taxable imputed income calculated using IRS Table I rates by employee age.',
    url: 'https://www.beghr.com/resources/payroll-glossary/group-term-life-imputed',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Group Term Life Insurance (Imputed Income) | Payroll Glossary | BEG', description: 'Employer life insurance over $50,000 creates taxable imputed income calculated using IRS Table I rates by employee age.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do employers have to manage Group Term Life Insurance (Imputed Income) themselves?", a: "No. A managed payroll provider handles Group Term Life Insurance (Imputed Income) as part of full-service payroll. BEG manages this for clients at $25-$45 PEPM with no system migration required." },
  { q: "What happens if Group Term Life Insurance (Imputed Income) is handled incorrectly?", a: "Errors related to Group Term Life Insurance (Imputed Income) can trigger IRS penalties, state agency assessments, or employee disputes. Catching and correcting errors before filing is far less costly than after-the-fact corrections." },
  { q: "How does BEG handle Group Term Life Insurance (Imputed Income) for managed payroll clients?", a: "BEG tracks, calculates, and remits everything related to Group Term Life Insurance (Imputed Income) as part of fully managed payroll. Clients do not need to monitor compliance -- that is included in the service at $25-$45 PEPM." },
];

export default function GroupTermLifeImputedPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Group Term Life Insurance (Imputed Income)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Employer-paid group term life insurance coverage above $50,000 creates imputed income for the employee. The taxable amount is calculated using IRS Table I rates based on the employee\'s age and the excess coverage amount.</p>
        </div>

        <h2>Why Group Term Life Insurance (Imputed Income) matters for employers</h2>
        <p>The IRS Table I rates used to calculate imputed income on excess group life insurance coverage are based on the employee's age as of December 31 of the year in question and the amount of coverage above $50,000. For example, a 45-year-old with $150,000 of employer-paid coverage has $100,000 of excess coverage. The Table I rate for ages 45-49 results in a monthly imputed income amount that is added to wages each pay period.</p>
        <p>Employers must include imputed group life income in the employee's W-2 Box 1 (wages), Box 4 (Social Security withheld), and Box 12 Code C (cost of coverage). FICA is owed on imputed income even for employees who are otherwise at or near the Social Security wage base. Year-end imputed income calculations are typically processed as an adjustment in the final payroll run.</p>

        <h2>How BEG handles Group Term Life Insurance (Imputed Income) for clients</h2>
        <p>
          BEG Managed Payroll handles Group Term Life Insurance (Imputed Income) as part of a fully managed payroll service at $25-$45 per employee per month.
          Clients do not need to track compliance rules, filing deadlines, or calculation methods related to Group Term Life Insurance (Imputed Income) on their own.
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/group-term-life-imputed', url: 'https://www.beghr.com/resources/payroll-glossary/group-term-life-imputed', name: 'Group Term Life Insurance (Imputed Income) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Group Term Life Insurance (Imputed Income)', description: 'Employer life insurance over $50,000 creates taxable imputed income calculated using IRS Table I rates by employee age.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Group Term Life Insurance (Imputed Income)', item: 'https://www.beghr.com/resources/payroll-glossary/group-term-life-imputed' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
