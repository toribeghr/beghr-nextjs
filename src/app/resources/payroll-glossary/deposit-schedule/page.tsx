import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deposit Schedule (Form 941) | Payroll Glossary | BEG',
  description: 'Learn how the IRS deposit schedule for Form 941 works, how the lookback period determines your schedule, and what happens if you miss a deposit.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/deposit-schedule' },
  openGraph: {
    title: 'Deposit Schedule (Form 941) | Payroll Glossary | BEG',
    description: 'Learn how the IRS deposit schedule for Form 941 works, how the lookback period determines your schedule, and what happens if you miss a deposit.',
    url: 'https://www.beghr.com/resources/payroll-glossary/deposit-schedule',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deposit Schedule (Form 941) | Payroll Glossary | BEG',
    description: 'Learn how the IRS deposit schedule for Form 941 works, how the lookback period determines your schedule, and what happens if you miss a deposit.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "How do I know if I am a monthly or semi-weekly depositor?", "a": "The IRS assigns your deposit schedule based on the total taxes reported on Form 941 during the lookback period ending June 30 of the prior year. If that total was $50,000 or less, you are a monthly depositor. Above $50,000, you are a semi-weekly depositor. The IRS may notify you, but you are responsible for knowing your schedule."}, {"q": "What is the penalty for a late payroll tax deposit?", "a": "Failure-to-deposit penalties are 2% for deposits 1-5 days late, 5% for 6-15 days late, 10% for more than 15 days late, and 15% if the amount remains unpaid more than 10 days after the IRS issues its first notice. The penalty applies to the undeposited amount."}, {"q": "What is the $100,000 next-day deposit rule?", "a": "If your accumulated payroll tax liability reaches $100,000 on any single day within a deposit period, you must deposit the entire amount by the next business day. This rule applies regardless of your regular deposit schedule and automatically upgrades you to semi-weekly depositor status."}];

export default function DepositSchedulePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Deposit Schedule (Form 941)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The IRS-assigned timetable dictating whether an employer must deposit payroll taxes monthly or semi-weekly, based on the total tax liability reported during the lookback period.</p>
        </div>

        <h2>Why the deposit schedule matters for employers</h2>
        <p>Every employer that files Form 941 must deposit the federal payroll taxes (income tax withheld, employee and employer Social Security, and employee and employer Medicare) according to a schedule assigned by the IRS. The schedule is determined by the lookback period, which is the 12-month period ending June 30 of the prior year. If the total taxes reported during the lookback period were $50,000 or less, the employer is a monthly depositor for the following calendar year. Monthly depositors must deposit accumulated taxes by the 15th of the following month. If the total taxes exceeded $50,000 during the lookback period, the employer is a semi-weekly depositor. Semi-weekly depositors must deposit taxes for payrolls paid on Wednesday, Thursday, or Friday by the following Wednesday. Taxes for payrolls paid on Saturday, Sunday, Monday, or Tuesday must be deposited by the following Friday. New employers with no lookback history default to monthly depositor status. There is also a next-day deposit rule that applies to any employer whose accumulated tax liability reaches $100,000 on any day during a deposit period. When that threshold is crossed, the deposit must be made by the next business day regardless of the regular deposit schedule, and the employer automatically becomes a semi-weekly depositor for the remainder of that year and the following year. All federal payroll tax deposits must be made electronically through EFTPS. Failure-to-deposit penalties range from 2% to 15% of the unpaid amount depending on how late the deposit is.</p>

        <h2>How BEG handles Deposit Schedule (Form 941) for clients</h2>
        <p>BEG Managed Payroll determines your deposit schedule during onboarding and deposits payroll taxes on the correct EFTPS schedule every pay period. If your liability crosses the $100,000 next-day threshold, BEG handles that deposit automatically. Correct and timely tax deposits are a core part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How do I know if I am a monthly or semi-weekly depositor?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The IRS assigns your deposit schedule based on the total taxes reported on Form 941 during the lookback period ending June 30 of the prior year. If that total was $50,000 or less, you are a monthly depositor. Above $50,000, you are a semi-weekly depositor. The IRS may notify you, but you are responsible for knowing your schedule.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the penalty for a late payroll tax deposit?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Failure-to-deposit penalties are 2% for deposits 1-5 days late, 5% for 6-15 days late, 10% for more than 15 days late, and 15% if the amount remains unpaid more than 10 days after the IRS issues its first notice. The penalty applies to the undeposited amount.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the $100,000 next-day deposit rule?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>If your accumulated payroll tax liability reaches $100,000 on any single day within a deposit period, you must deposit the entire amount by the next business day. This rule applies regardless of your regular deposit schedule and automatically upgrades you to semi-weekly depositor status.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/deposit-schedule', url: 'https://www.beghr.com/resources/payroll-glossary/deposit-schedule', name: 'Deposit Schedule (Form 941) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Deposit Schedule (Form 941)', description: 'Learn how the IRS deposit schedule for Form 941 works, how the lookback period determines your schedule, and what happens if you miss a deposit.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Deposit Schedule (Form 941)', item: 'https://www.beghr.com/resources/payroll-glossary/deposit-schedule' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
