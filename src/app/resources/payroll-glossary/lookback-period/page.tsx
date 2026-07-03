import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lookback Period (IRS) | Payroll Glossary | BEG',
  description: 'The 12-month IRS period from July 1 to June 30 used to determine an employer\'s Form 941 deposit schedule for the following year.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/lookback-period' },
  openGraph: { title: 'Lookback Period (IRS) | Payroll Glossary | BEG', description: 'The 12-month IRS period from July 1 to June 30 used to determine an employer\'s Form 941 deposit schedule for the following year.', url: 'https://www.beghr.com/resources/payroll-glossary/lookback-period', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Lookback Period (IRS) | Payroll Glossary | BEG', description: 'The 12-month IRS period from July 1 to June 30 used to determine an employer\'s Form 941 deposit schedule for the following year.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the lookback period for 2025 deposit schedule determination?", a: "The lookback period for the 2025 deposit schedule is July 1, 2023 through June 30, 2024. Total Form 941 taxes during that period determine whether an employer is monthly or semiweekly." },
  { q: "What happens if a new employer has no lookback period?", a: "New employers with no lookback period history are automatically classified as monthly depositors for their first calendar year of operations." },
  { q: "Can an employer's deposit schedule change during the year?", a: "Yes. If a monthly depositor accumulates $100,000 in liability on any single day, the one-day rule requires next-banking-day deposit. That employer then becomes a semiweekly depositor for the remainder of the calendar year and the following year." },
];

export default function LookbackPeriodPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Lookback Period (IRS)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The IRS lookback period is the 12 months ending June 30 used to classify employers as monthly or semiweekly depositors for payroll taxes.</p>
        </div>
        <h2>Why the lookback period matters for employers</h2>
        <p>Every year, employers must determine their payroll tax deposit schedule for the upcoming calendar year. The IRS uses the lookback period - the 12-month period from July 1 through June 30 - to make this determination.</p>
        <p>If the total Form 941 taxes (income tax withheld plus employee and employer FICA) reported during the lookback period were $50,000 or less, the employer is a monthly depositor for the next calendar year. Monthly depositors must pay taxes by the 15th day of the month following the payroll month.</p>
        <p>If the lookback period taxes exceeded $50,000, the employer is a semiweekly depositor. Semiweekly depositors must pay taxes within 3 banking days after payroll days falling on Wednesday, Thursday, or Friday, and within 3 banking days for paydays falling on Saturday, Sunday, Monday, or Tuesday.</p>
        <p>New employers are automatically monthly depositors for their first calendar year. The one-day rule applies regardless of deposit schedule: if accumulated liability for any single day reaches $100,000, the employer must deposit by the next banking day.</p>
        <p>Missing deposit deadlines triggers penalties of 2% to 15% of the underpayment depending on how late the deposit is made. The Electronic Federal Tax Payment System (EFTPS) must be used for all federal tax deposits - no paper checks to the IRS.</p>
        <h2>How BEG handles deposit schedules for clients</h2>
        <p>BEG Managed Payroll monitors deposit schedules, calculates liabilities, and makes timely EFTPS deposits for clients as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/lookback-period', url: 'https://www.beghr.com/resources/payroll-glossary/lookback-period', name: 'Lookback Period (IRS) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Lookback Period (IRS)', description: 'The 12-month IRS period from July 1 to June 30 used to determine an employer\'s Form 941 deposit schedule for the following year.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Lookback Period (IRS)', item: 'https://www.beghr.com/resources/payroll-glossary/lookback-period' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
