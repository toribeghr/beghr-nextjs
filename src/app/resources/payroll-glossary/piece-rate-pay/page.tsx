import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Piece-Rate Pay | Payroll Glossary | BEG',
  description: 'Compensation based on units produced rather than hours worked. FLSA minimum wage and overtime requirements still apply to piece-rate employees.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/piece-rate-pay' },
  openGraph: { title: 'Piece-Rate Pay | Payroll Glossary | BEG', description: 'Compensation based on units produced rather than hours worked. FLSA minimum wage and overtime requirements still apply to piece-rate employees.', url: 'https://www.beghr.com/resources/payroll-glossary/piece-rate-pay', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Piece-Rate Pay | Payroll Glossary | BEG', description: 'Compensation based on units produced rather than hours worked. FLSA minimum wage and overtime requirements still apply to piece-rate employees.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do piece-rate employees get overtime pay?", a: "Yes. Piece-rate employees are entitled to overtime for hours worked over 40 in a workweek. The regular rate is calculated by dividing total piece earnings by total hours worked, and the overtime premium is 0.5 times that rate for overtime hours." },
  { q: "What if a piece-rate employee earns less than minimum wage in a week?", a: "The employer must make up the difference. Total compensation for any workweek must equal at least the applicable minimum wage times all hours worked. Piece rates that do not cover minimum wage require a supplemental payment." },
  { q: "Can piece rates apply to rest periods in California?", a: "No. California requires employers to separately compensate piece-rate employees for rest periods and other non-productive time at a rate not less than the minimum wage. Piece-rate earnings cannot be used to cover rest period compensation." },
];

export default function PieceRatePayPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Piece-Rate Pay?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Piece-rate pay compensates employees per unit produced rather than per hour, but FLSA minimum wage and overtime protections still apply to all piece-rate workers.</p>
        </div>
        <h2>Why piece-rate pay matters for employers</h2>
        <p>Piece-rate pay compensates employees based on output rather than time - garment workers paid per piece sewn, agricultural workers paid per bushel harvested, data entry workers paid per record processed. This incentivizes productivity but requires careful FLSA compliance.</p>
        <p>The FLSA applies fully to piece-rate employees. Regardless of piece-rate earnings, the employee's total compensation for any workweek must equal at least the applicable minimum wage for all hours worked. If a piece-rate worker produces fewer pieces in a slow week and earns below minimum wage, the employer must make up the difference.</p>
        <p>Overtime for piece-rate employees requires a special calculation. The regular rate of pay is determined by dividing total piece-rate earnings for the workweek by total hours worked (including overtime hours). The overtime premium is then 0.5 times this regular rate for each hour over 40 - not 1.5x, because the piece-rate earnings already compensate the employee for straight time at the regular rate for all hours including the overtime hours.</p>
        <p>Alternatively, piece-rate employees may agree in writing before the work is performed to receive 1.5 times their regular piece rate for each piece produced during overtime hours rather than the standard hour-based method. This is the piece-rate overtime alternative under FLSA Section 7(g)(1).</p>
        <p>California has additional requirements for piece-rate employees, including a separate hourly rate that must be paid for rest periods and non-productive time that cannot be covered by piece-rate earnings.</p>
        <h2>How BEG handles piece-rate payroll for clients</h2>
        <p>BEG Managed Payroll calculates piece-rate regular rates, minimum wage gaps, and overtime premiums correctly for piece-rate workers as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/piece-rate-pay', url: 'https://www.beghr.com/resources/payroll-glossary/piece-rate-pay', name: 'Piece-Rate Pay | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Piece-Rate Pay', description: 'Compensation based on units produced rather than hours worked. FLSA minimum wage and overtime requirements still apply to piece-rate employees.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Piece-Rate Pay', item: 'https://www.beghr.com/resources/payroll-glossary/piece-rate-pay' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
