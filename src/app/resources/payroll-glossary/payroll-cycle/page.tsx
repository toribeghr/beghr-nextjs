import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll Cycle | Payroll Glossary | BEG',
  description: 'The recurring period for which employee time is tracked and wages are calculated before processing a payroll run.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/payroll-cycle' },
  openGraph: { title: 'Payroll Cycle | Payroll Glossary | BEG', description: 'The recurring period for which employee time is tracked and wages are calculated before processing a payroll run.', url: 'https://www.beghr.com/resources/payroll-glossary/payroll-cycle', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Payroll Cycle | Payroll Glossary | BEG', description: 'The recurring period for which employee time is tracked and wages are calculated before processing a payroll run.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What is the typical lag time between payroll cutoff and payday?", a: "Standard ACH direct deposit requires 2-3 business days from file submission to bank settlement. Many employers add an additional day for internal processing, resulting in a 3-5 business day lag from cutoff to payday." },
  { q: "What happens if payday falls on a holiday?", a: "Employers must advance the payroll processing timeline to ensure ACH files are submitted before the holiday. Most payroll providers notify clients of upcoming holiday impacts and provide adjusted submission deadlines." },
  { q: "How often should payroll cycles be reviewed?", a: "Payroll cycles should be reviewed when the business grows significantly, changes pay frequency, or adopts new time-tracking systems. A review ensures the cycle still fits operational needs and state pay timing requirements." },
];

export default function PayrollCyclePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Payroll Cycle?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The payroll cycle is the fixed recurring period used to collect time data, calculate wages, and process pay - typically weekly, bi-weekly, semi-monthly, or monthly.</p>
        </div>
        <h2>Why the payroll cycle matters for employers</h2>
        <p>The payroll cycle defines the rhythm of the entire payroll operation. It determines when time must be collected, when payroll must be processed, and when funds must be in employees' accounts. Every downstream payroll task - tax withholding, benefit deductions, garnishments, and tax deposits - flows from the cycle.</p>
        <p>A standard payroll cycle includes: (1) time collection period, when employee hours are recorded; (2) payroll cutoff date, the last day time data is accepted for the current cycle; (3) payroll processing period, when wages are calculated, deductions applied, and tax withholding computed; and (4) payday, when employees receive funds via direct deposit or check.</p>
        <p>The gap between the payroll cutoff date and payday (called the lag time) typically ranges from 3 to 7 business days for direct deposit. This lag allows time for processing, ACH file transmission, and bank settlement. Same-day ACH options now allow shorter lag times for employers willing to pay premium processing fees.</p>
        <p>Holidays can disrupt the payroll cycle significantly. If payday falls on a bank holiday, direct deposits must be submitted one to two days earlier to ensure on-time delivery. Missing this adjustment delays employee pay and may violate state pay timing laws.</p>
        <p>Payroll cycle management requires advance planning for events that change the normal schedule: year-end processing, open enrollment benefit changes, mid-year rate changes, and off-cycle payrolls for terminations or bonuses all require coordination with the standard cycle.</p>
        <h2>How BEG manages payroll cycles for clients</h2>
        <p>BEG Managed Payroll manages the complete payroll cycle from time collection through fund disbursement, handling holiday adjustments and off-cycle runs as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/payroll-cycle', url: 'https://www.beghr.com/resources/payroll-glossary/payroll-cycle', name: 'Payroll Cycle | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Payroll Cycle', description: 'The recurring period for which employee time is tracked and wages are calculated before processing a payroll run.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Payroll Cycle', item: 'https://www.beghr.com/resources/payroll-glossary/payroll-cycle' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
