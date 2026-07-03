import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Base Period | Payroll Glossary | BEG',
  description: 'Learn what the base period is in unemployment insurance, how it affects benefit calculations, and what it means for employer tax rates.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/base-period' },
  openGraph: {
    title: 'Base Period | Payroll Glossary | BEG',
    description: 'Learn what the base period is in unemployment insurance, how it affects benefit calculations, and what it means for employer tax rates.',
    url: 'https://www.beghr.com/resources/payroll-glossary/base-period',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base Period | Payroll Glossary | BEG',
    description: 'Learn what the base period is in unemployment insurance, how it affects benefit calculations, and what it means for employer tax rates.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What are the four quarters in the standard base period?", "a": "The standard base period is the first four of the last five completed calendar quarters. For a claim filed in October 2026, the base period would typically be April 2025 through March 2026, skipping the April-June 2026 quarter because it may not be fully processed."}, {"q": "Can a claimant use an alternative base period?", "a": "Yes. Most states have an alternative base period that uses more recent wages when a claimant does not qualify under the standard base period. The alternative period typically includes the most recently completed quarter."}, {"q": "Does a termination for cause affect the base period calculation?", "a": "The base period determines the benefit amount. A termination for misconduct may disqualify the claimant from receiving benefits entirely, but if they are found eligible, the base period wages still determine the weekly amount."}];

export default function BasePeriodPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Base Period?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The 12-15 month period of prior employment used by states to calculate how much unemployment insurance an applicant earned and what their weekly benefit amount will be.</p>
        </div>

        <h2>Why the base period matters for employers</h2>
        <p>When a former employee files for unemployment insurance, the state unemployment agency does not calculate benefits based on their most recent wages. Instead, the agency looks back to a defined base period, typically the first four of the last five completed calendar quarters before the claim is filed. This lag exists because quarterly wage data from employers takes time to be processed and verified. The base period wages determine two things: whether the claimant has earned enough to qualify for benefits at all, and how large the weekly benefit amount will be. Most states require a claimant to have earned wages in at least two quarters of the base period and to have reached a minimum total wage threshold. The weekly benefit amount is then calculated as a fraction of the claimant's highest-quarter earnings or average base-period earnings, depending on the state formula. For employers, the base period matters because unemployment benefits paid to former employees are charged to the employer's account, and those charges affect the employer's experience rating and SUI tax rate in future years. If an employee was terminated for misconduct or quit without good cause, the employer should file a timely response to the unemployment claim disputing eligibility. A successful dispute means the benefits are paid from the state's pooled fund, not charged to the employer's account, which protects the employer's experience rating. Many states use an alternative base period for claimants who do not have enough wages in the standard base period.</p>

        <h2>How BEG handles Base Period for clients</h2>
        <p>BEG Managed Payroll maintains accurate wage records in the format required by state unemployment agencies and responds to wage verification requests promptly. BEG also helps clients respond to unemployment claims with proper documentation. Protecting your SUI rate by disputing invalid claims is part of responsible payroll management. BEG handles this at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What are the four quarters in the standard base period?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The standard base period is the first four of the last five completed calendar quarters. For a claim filed in October 2026, the base period would typically be April 2025 through March 2026, skipping the April-June 2026 quarter because it may not be fully processed.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can a claimant use an alternative base period?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. Most states have an alternative base period that uses more recent wages when a claimant does not qualify under the standard base period. The alternative period typically includes the most recently completed quarter.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does a termination for cause affect the base period calculation?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The base period determines the benefit amount. A termination for misconduct may disqualify the claimant from receiving benefits entirely, but if they are found eligible, the base period wages still determine the weekly amount.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/base-period', url: 'https://www.beghr.com/resources/payroll-glossary/base-period', name: 'Base Period | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Base Period', description: 'Learn what the base period is in unemployment insurance, how it affects benefit calculations, and what it means for employer tax rates.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Base Period', item: 'https://www.beghr.com/resources/payroll-glossary/base-period' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
