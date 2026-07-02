import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FLSA Overtime | Payroll Glossary | BEG',
  description: 'Learn how FLSA overtime works, how the regular rate is calculated, what the workweek is, and which employees are exempt.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/flsa-overtime' },
  openGraph: {
    title: 'FLSA Overtime | Payroll Glossary | BEG',
    description: 'Learn how FLSA overtime works, how the regular rate is calculated, what the workweek is, and which employees are exempt.',
    url: 'https://www.beghr.com/resources/payroll-glossary/flsa-overtime',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLSA Overtime | Payroll Glossary | BEG',
    description: 'Learn how FLSA overtime works, how the regular rate is calculated, what the workweek is, and which employees are exempt.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Can overtime be calculated over a two-week pay period instead of per workweek?", "a": "No. The FLSA requires overtime to be calculated within each single workweek regardless of pay frequency. You cannot average hours across a bi-weekly pay period. An employee who works 44 hours in week one and 36 in week two is owed overtime for four hours in week one."}, {"q": "What is included in the regular rate for overtime calculation?", "a": "The regular rate includes hourly wages, salary allocated to the workweek, piece-rate earnings, commissions earned in the workweek, non-discretionary bonuses, and shift differentials. It excludes discretionary bonuses, gifts, vacation pay, overtime premiums already paid, and certain other statutory exclusions."}, {"q": "Can an employee sign a waiver agreeing not to receive overtime pay?", "a": "No. The FLSA right to overtime pay cannot be waived by agreement between employer and employee. Any agreement to forgo overtime is void as against public policy. The employee retains the right to sue for unpaid overtime regardless of any waiver they signed."}];

export default function FlsaOvertimePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is FLSA Overtime?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The federal requirement under the Fair Labor Standards Act that non-exempt employees be paid at least 1.5 times their regular rate of pay for all hours worked beyond 40 in a single workweek.</p>
        </div>

        <h2>Why FLSA overtime matters for employers</h2>
        <p>FLSA overtime is calculated on a workweek basis. The workweek is a fixed, regularly recurring 168-hour period (seven consecutive 24-hour periods). The employer designates the workweek and it can begin on any day, but once set it must remain consistent and cannot be changed to avoid overtime obligations. Any hours worked beyond 40 in a single workweek must be compensated at the overtime rate of at least 1.5 times the regular rate of pay. Hours cannot be averaged across workweeks, meaning an employee who works 44 hours one week and 36 hours the next is owed overtime for the four excess hours in the first week, even though the two-week total is 80 hours. The regular rate of pay is the foundation of the overtime calculation. It is not always the same as the hourly rate. The regular rate is calculated by dividing total compensation earned in the workweek by total hours worked. Total compensation includes hourly wages, salary, piece-rate pay, commissions, shift differentials, and most other forms of compensation. Certain payments are excluded from the regular rate, including true gifts, vacation pay, overtime premiums themselves, and discretionary bonuses. The half-time premium for overtime (the extra 0.5x) is added to the regular rate already included in base pay. The most common errors in overtime calculation are: averaging hours across weeks, failing to include all compensation in the regular rate, and misclassifying employees as exempt. Non-exempt employees cannot waive their right to overtime. An employee who agrees in writing to work overtime without additional pay is still legally owed the overtime.</p>

        <h2>How BEG handles FLSA Overtime for clients</h2>
        <p>BEG Managed Payroll calculates overtime automatically for each non-exempt employee on a workweek basis, including all compensable pay in the regular rate calculation. BEG handles irregular pay situations such as shift differentials, piece-rate workers, and commission employees where the overtime calculation is more complex. FLSA-compliant overtime processing is a core function of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can overtime be calculated over a two-week pay period instead of per workweek?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. The FLSA requires overtime to be calculated within each single workweek regardless of pay frequency. You cannot average hours across a bi-weekly pay period. An employee who works 44 hours in week one and 36 in week two is owed overtime for four hours in week one.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is included in the regular rate for overtime calculation?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The regular rate includes hourly wages, salary allocated to the workweek, piece-rate earnings, commissions earned in the workweek, non-discretionary bonuses, and shift differentials. It excludes discretionary bonuses, gifts, vacation pay, overtime premiums already paid, and certain other statutory exclusions.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employee sign a waiver agreeing not to receive overtime pay?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. The FLSA right to overtime pay cannot be waived by agreement between employer and employee. Any agreement to forgo overtime is void as against public policy. The employee retains the right to sue for unpaid overtime regardless of any waiver they signed.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/flsa-overtime', url: 'https://www.beghr.com/resources/payroll-glossary/flsa-overtime', name: 'FLSA Overtime | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'FLSA Overtime', description: 'Learn how FLSA overtime works, how the regular rate is calculated, what the workweek is, and which employees are exempt.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'FLSA Overtime', item: 'https://www.beghr.com/resources/payroll-glossary/flsa-overtime' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
