import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disposable Earnings | Payroll Glossary | BEG',
  description: 'Learn how disposable earnings are calculated, why they matter for garnishment limits, and what deductions reduce disposable earnings.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/disposable-earnings' },
  openGraph: {
    title: 'Disposable Earnings | Payroll Glossary | BEG',
    description: 'Learn how disposable earnings are calculated, why they matter for garnishment limits, and what deductions reduce disposable earnings.',
    url: 'https://www.beghr.com/resources/payroll-glossary/disposable-earnings',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disposable Earnings | Payroll Glossary | BEG',
    description: 'Learn how disposable earnings are calculated, why they matter for garnishment limits, and what deductions reduce disposable earnings.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Does health insurance reduce disposable earnings for garnishment purposes?", "a": "No. Health insurance premiums are a voluntary deduction and do not reduce disposable earnings under the CCPA. Only legally required deductions such as taxes and Social Security reduce disposable earnings for garnishment limit calculations."}, {"q": "What is the minimum disposable earnings protected from garnishment?", "a": "Under the CCPA, earnings at or below 30 times the federal minimum wage per week ($217.50 at the $7.25 rate) are fully protected from creditor garnishment. If disposable earnings are exactly at that floor, nothing can be garnished regardless of the 25% rule."}, {"q": "How does a second garnishment affect a first garnishment already in place?", "a": "The employer calculates total disposable earnings once, then applies garnishments in priority order. Child support always has priority. Subsequent creditor garnishments share the remaining available amount up to the CCPA cap. The total withholding cannot exceed the applicable cap regardless of how many orders exist."}];

export default function DisposableEarningsPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Disposable Earnings?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The portion of an employee's wages remaining after all legally required deductions such as federal and state taxes, Social Security, and Medicare. Disposable earnings are the basis for calculating all garnishment limits under Title III of the CCPA.</p>
        </div>

        <h2>Why disposable earnings matter for employers</h2>
        <p>Disposable earnings is a legal term of art under Title III of the Consumer Credit Protection Act (CCPA). It does not mean take-home pay. Disposable earnings are the wages remaining after deductions required by law, which means taxes, Social Security, Medicare, state unemployment insurance where applicable, and any other deduction mandated by statute. Voluntary deductions such as health insurance premiums, 401(k) contributions, union dues, and charitable contributions do not reduce disposable earnings for garnishment purposes, even though they reduce the employee's take-home pay. This distinction is important because employers must calculate garnishment limits against disposable earnings, not net pay. The CCPA Title III caps garnishment withholding for consumer debts at the lesser of 25% of disposable earnings or the amount by which disposable earnings exceed 30 times the federal minimum wage ($7.25), which is $217.50 per week. For child support, the limits are 50% to 65% of disposable earnings depending on family support obligations and arrears status. For federal tax levies, IRS Publication 1494 provides a separate exempt amount table based on filing status and dependents. When multiple garnishments are in effect simultaneously, the employer must calculate disposable earnings once and then apply each garnishment in the correct priority order against the available amount. Errors in calculating disposable earnings, particularly incorrectly including voluntary deductions, result in withholding the wrong amount, which can expose the employer to liability.</p>

        <h2>How BEG handles Disposable Earnings for clients</h2>
        <p>BEG Managed Payroll calculates disposable earnings correctly for each pay period by distinguishing legally required deductions from voluntary ones, then applies garnishment withholding limits accurately. When an employee has multiple active garnishments, BEG handles the priority and proration rules. Garnishment processing is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does health insurance reduce disposable earnings for garnishment purposes?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Health insurance premiums are a voluntary deduction and do not reduce disposable earnings under the CCPA. Only legally required deductions such as taxes and Social Security reduce disposable earnings for garnishment limit calculations.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the minimum disposable earnings protected from garnishment?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Under the CCPA, earnings at or below 30 times the federal minimum wage per week ($217.50 at the $7.25 rate) are fully protected from creditor garnishment. If disposable earnings are exactly at that floor, nothing can be garnished regardless of the 25% rule.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How does a second garnishment affect a first garnishment already in place?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The employer calculates total disposable earnings once, then applies garnishments in priority order. Child support always has priority. Subsequent creditor garnishments share the remaining available amount up to the CCPA cap. The total withholding cannot exceed the applicable cap regardless of how many orders exist.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/disposable-earnings', url: 'https://www.beghr.com/resources/payroll-glossary/disposable-earnings', name: 'Disposable Earnings | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Disposable Earnings', description: 'Learn how disposable earnings are calculated, why they matter for garnishment limits, and what deductions reduce disposable earnings.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Disposable Earnings', item: 'https://www.beghr.com/resources/payroll-glossary/disposable-earnings' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
