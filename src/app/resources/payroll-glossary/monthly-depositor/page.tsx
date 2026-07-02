import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monthly Depositor | Payroll Glossary | BEG',
  description: 'Employer whose lookback period payroll tax liability was $50,000 or less, required to deposit taxes by the 15th of the following month.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/monthly-depositor' },
  openGraph: { title: 'Monthly Depositor | Payroll Glossary | BEG', description: 'Employer whose lookback period payroll tax liability was $50,000 or less, required to deposit taxes by the 15th of the following month.', url: 'https://www.beghr.com/resources/payroll-glossary/monthly-depositor', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Monthly Depositor | Payroll Glossary | BEG', description: 'Employer whose lookback period payroll tax liability was $50,000 or less, required to deposit taxes by the 15th of the following month.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How do I know if I am a monthly depositor?", a: "Compare your total Form 941 tax liability for the lookback period (July 1 through June 30 two years prior) to the $50,000 threshold. New employers are monthly depositors by default." },
  { q: "What is the deposit deadline for monthly depositors?", a: "Monthly depositors must deposit all payroll taxes for a given month by the 15th day of the following month. If the 15th falls on a weekend or holiday, the deadline moves to the next banking day." },
  { q: "Can a monthly depositor become a semiweekly depositor mid-year?", a: "Yes. If a monthly depositor accumulates $100,000 in payroll tax liability on any single day, the one-day rule applies and the employer becomes a semiweekly depositor for the rest of the current year and the entire following year." },
];

export default function MonthlyDepositorPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Monthly Depositor?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A monthly depositor had $50,000 or less in Form 941 taxes during the lookback period and must deposit payroll taxes by the 15th of the following month.</p>
        </div>
        <h2>Why deposit schedule classification matters for employers</h2>
        <p>Payroll tax deposit schedules are determined annually by the IRS based on each employer's tax liability during the lookback period (July 1 through June 30 of the prior two years). Employers with $50,000 or less in Form 941 taxes during the lookback period are classified as monthly depositors.</p>
        <p>Monthly depositors must deposit all accumulated payroll taxes - federal income tax withheld, employee Social Security and Medicare taxes, and the employer's matching FICA - by the 15th day of the month following the month in which payroll was paid. For example, all January payroll taxes must be deposited by February 15.</p>
        <p>The monthly deposit schedule is simpler than the semiweekly schedule but still requires careful planning. Missing the 15th-of-the-month deadline triggers failure-to-deposit penalties ranging from 2% (1-5 days late) to 15% (10+ days late or IRS demand for immediate payment).</p>
        <p>All federal payroll tax deposits must be made electronically through the Electronic Federal Tax Payment System (EFTPS). Paper checks mailed to the IRS do not satisfy the deposit requirement. Employers must enroll in EFTPS before their first deposit due date.</p>
        <p>New employers with no lookback period history are automatically classified as monthly depositors for their first calendar year. The one-day rule overrides the monthly schedule: if accumulated liability on any single day reaches $100,000, the employer must deposit by the next banking day, and the employer's schedule changes to semiweekly for the remainder of the current year and the following year.</p>
        <h2>How BEG manages deposit timing for clients</h2>
        <p>BEG Managed Payroll determines each client's deposit schedule, calculates liabilities, and makes EFTPS deposits on time as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/monthly-depositor', url: 'https://www.beghr.com/resources/payroll-glossary/monthly-depositor', name: 'Monthly Depositor | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Monthly Depositor', description: 'Employer whose lookback period payroll tax liability was $50,000 or less, required to deposit taxes by the 15th of the following month.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Monthly Depositor', item: 'https://www.beghr.com/resources/payroll-glossary/monthly-depositor' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
