import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Draw Against Commission | Payroll Glossary | BEG',
  description: 'Learn how draw-against-commission works, the difference between recoverable and non-recoverable draws, and FLSA minimum wage implications.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/draw-against-commission' },
  openGraph: {
    title: 'Draw Against Commission | Payroll Glossary | BEG',
    description: 'Learn how draw-against-commission works, the difference between recoverable and non-recoverable draws, and FLSA minimum wage implications.',
    url: 'https://www.beghr.com/resources/payroll-glossary/draw-against-commission',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draw Against Commission | Payroll Glossary | BEG',
    description: 'Learn how draw-against-commission works, the difference between recoverable and non-recoverable draws, and FLSA minimum wage implications.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the difference between a recoverable and non-recoverable draw?", "a": "A recoverable draw is an advance against future commissions. If commissions fall short, the deficit carries forward as a debt. A non-recoverable draw is a guaranteed minimum payment. If commissions fall short, the deficit is forgiven. Non-recoverable draws essentially act as a salary floor."}, {"q": "Can an employer deduct draw deficits from the final paycheck?", "a": "It depends on state law and the terms of the draw agreement. Many states allow it if there is a clear written agreement. California and some other states restrict deductions from wages that could leave the employee below minimum wage, and courts have sometimes found draw clawbacks on final paychecks impermissible."}, {"q": "Does FLSA minimum wage apply week by week for draw employees?", "a": "Yes. The FLSA minimum wage test is applied to each individual workweek. An employer cannot average a good commission week with a bad draw week. Each week must independently meet the applicable minimum wage when the draw is divided by hours worked."}];

export default function DrawAgainstCommissionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Draw Against Commission?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A compensation arrangement where an employer advances regular pay to a commission-based employee, with the advance offset against future earned commissions, creating a recoverable debt if commissions do not cover the draws.</p>
        </div>

        <h2>Why draw against commission matters for employers</h2>
        <p>A draw against commission solves a cash flow problem for commission-only salespeople who may go weeks without a large sale. The employer pays a regular draw, often weekly or bi-weekly, which provides a steady income base. When commissions are earned and calculated, typically monthly or quarterly, the accumulated draws are subtracted from the commission amount. If commissions exceed draws, the employee receives a commission check for the difference. The critical distinction is between a recoverable draw and a non-recoverable draw. A recoverable draw is a true advance: if total draws exceed earned commissions in a period, the deficit carries forward as a debt the employee owes the employer. A non-recoverable draw is a guaranteed minimum: if draws exceed commissions, the deficit is forgiven and does not carry forward. Non-recoverable draws function like a salary floor. From an FLSA perspective, the minimum wage must be met in every single workweek. If draws are paid weekly and a salesperson earns a draw that, when divided by hours worked, falls below the federal or state minimum wage, the employer owes additional pay regardless of future commission potential. Employers cannot average across weeks or months to satisfy minimum wage. The recoverable draw creates additional complexity around state wage and hour law. Several states, including California, treat recoverable draws that create a deficit as unlawful wage deductions when the employer attempts to offset future commissions. Structuring draws carefully and having employees sign a clear draw agreement is essential before implementing this pay model.</p>

        <h2>How BEG handles Draw Against Commission for clients</h2>
        <p>BEG Managed Payroll processes draw-and-commission payroll structures correctly, tracking draw advances, earned commissions, and reconciliation payments. BEG flags workweeks where minimum wage may not be met through draws alone and ensures the FLSA floor is applied. Commission payroll processing is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the difference between a recoverable and non-recoverable draw?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A recoverable draw is an advance against future commissions. If commissions fall short, the deficit carries forward as a debt. A non-recoverable draw is a guaranteed minimum payment. If commissions fall short, the deficit is forgiven. Non-recoverable draws essentially act as a salary floor.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer deduct draw deficits from the final paycheck?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>It depends on state law and the terms of the draw agreement. Many states allow it if there is a clear written agreement. California and some other states restrict deductions from wages that could leave the employee below minimum wage, and courts have sometimes found draw clawbacks on final paychecks impermissible.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does FLSA minimum wage apply week by week for draw employees?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. The FLSA minimum wage test is applied to each individual workweek. An employer cannot average a good commission week with a bad draw week. Each week must independently meet the applicable minimum wage when the draw is divided by hours worked.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/draw-against-commission', url: 'https://www.beghr.com/resources/payroll-glossary/draw-against-commission', name: 'Draw Against Commission | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Draw Against Commission', description: 'Learn how draw-against-commission works, the difference between recoverable and non-recoverable draws, and FLSA minimum wage implications.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Draw Against Commission', item: 'https://www.beghr.com/resources/payroll-glossary/draw-against-commission' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
