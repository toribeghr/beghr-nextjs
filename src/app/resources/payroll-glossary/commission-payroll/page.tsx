import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commission Payroll | Payroll Glossary | BEG',
  description: 'Learn how commission payroll works under the FLSA, how to calculate overtime for commission employees, and what the retail or service 7(i) exemption',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/commission-payroll' },
  openGraph: {
    title: 'Commission Payroll | Payroll Glossary | BEG',
    description: 'Learn how commission payroll works under the FLSA, how to calculate overtime for commission employees, and what the retail or service 7(i) exemption',
    url: 'https://www.beghr.com/resources/payroll-glossary/commission-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commission Payroll | Payroll Glossary | BEG',
    description: 'Learn how commission payroll works under the FLSA, how to calculate overtime for commission employees, and what the retail or service 7(i) exemption',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Do commission employees qualify for overtime?", "a": "Most commission employees are non-exempt and entitled to overtime. The regular rate is calculated by dividing total commissions earned in the workweek by hours worked, and overtime is paid at 0.5 times that rate for overtime hours. The Section 7(i) exemption can eliminate overtime for qualifying retail/service employees."}, {"q": "What is the FLSA Section 7(i) retail commission exemption?", "a": "Section 7(i) exempts from overtime any employee of a retail or service establishment whose regular rate exceeds 1.5 times the federal minimum wage and who earns more than half their pay from commissions. Both conditions must be met in the workweek to apply the exemption."}, {"q": "What happens if a commission employee earns less than minimum wage?", "a": "The employer must pay the difference. In any workweek where the commission earned divided by hours worked produces a rate below the federal minimum wage of $7.25 per hour (or higher state rate), the employer must top up the pay to meet the minimum wage floor."}];

export default function CommissionPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Commission Payroll?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A compensation structure where employee pay is based on a percentage of sales or transactions, subject to FLSA minimum wage and overtime requirements that apply even when commission is the primary or sole form of pay.</p>
        </div>

        <h2>Why commission payroll matters for employers</h2>
        <p>Commission-based pay is common in sales, real estate, insurance, and retail. The core FLSA principle is that commission is a form of wages, not a replacement for the FLSA protections. A commission employee who earns less than the federal minimum wage in any workweek is entitled to a minimum wage top-up from the employer, regardless of the commission structure. Overtime is where commission payroll becomes technically complex. Non-exempt commission employees who work more than 40 hours in a workweek are entitled to overtime at 1.5 times their regular rate of pay. The regular rate is calculated by dividing total compensation earned in the workweek by total hours worked. If commissions are paid weekly, this calculation is straightforward. If commissions are paid monthly or on a different cycle, the employer must allocate the commission back to the workweek in which it was earned, recalculate the regular rate, and pay any additional overtime owed. The FLSA Section 7(i) exemption provides relief for retail and service establishment employees: if the employee's regular rate exceeds 1.5 times the minimum wage and more than half of their compensation comes from commissions, the employer is not required to pay overtime. This exemption applies only to retail or service establishments as defined by the FLSA. Draw-against-commission arrangements, where employers advance pay that is later offset against earned commissions, are permissible but must be structured carefully to avoid minimum wage violations in low-commission periods.</p>

        <h2>How BEG handles Commission Payroll for clients</h2>
        <p>BEG Managed Payroll handles commission payroll including regular rate of pay calculations and overtime for commission employees. BEG can configure payroll to apply the FLSA Section 7(i) exemption where it applies and flag workweeks where minimum wage top-ups are required. Commission payroll processing is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Do commission employees qualify for overtime?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Most commission employees are non-exempt and entitled to overtime. The regular rate is calculated by dividing total commissions earned in the workweek by hours worked, and overtime is paid at 0.5 times that rate for overtime hours. The Section 7(i) exemption can eliminate overtime for qualifying retail/service employees.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the FLSA Section 7(i) retail commission exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Section 7(i) exempts from overtime any employee of a retail or service establishment whose regular rate exceeds 1.5 times the federal minimum wage and who earns more than half their pay from commissions. Both conditions must be met in the workweek to apply the exemption.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What happens if a commission employee earns less than minimum wage?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The employer must pay the difference. In any workweek where the commission earned divided by hours worked produces a rate below the federal minimum wage of $7.25 per hour (or higher state rate), the employer must top up the pay to meet the minimum wage floor.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/commission-payroll', url: 'https://www.beghr.com/resources/payroll-glossary/commission-payroll', name: 'Commission Payroll | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Commission Payroll', description: 'Learn how commission payroll works under the FLSA, how to calculate overtime for commission employees, and what the retail or service 7(i) exemption', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Commission Payroll', item: 'https://www.beghr.com/resources/payroll-glossary/commission-payroll' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
