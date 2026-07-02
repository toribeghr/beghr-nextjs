import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Off-Cycle Payroll | Payroll Glossary | BEG',
  description: 'A payroll run outside the normal pay schedule used for termination pay, bonus payments, or corrections to prior payroll errors.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/off-cycle-payroll' },
  openGraph: { title: 'Off-Cycle Payroll | Payroll Glossary | BEG', description: 'A payroll run outside the normal pay schedule used for termination pay, bonus payments, or corrections to prior payroll errors.', url: 'https://www.beghr.com/resources/payroll-glossary/off-cycle-payroll', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Off-Cycle Payroll | Payroll Glossary | BEG', description: 'A payroll run outside the normal pay schedule used for termination pay, bonus payments, or corrections to prior payroll errors.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "When must a terminated employee receive their final paycheck?", a: "Final pay timing is governed by state law and varies significantly. Some states require payment on the termination date, others by the next regular payday. Employers must comply with the state law where the employee works." },
  { q: "What is the supplemental withholding rate for bonus payments?", a: "The flat supplemental withholding rate for federal income tax is 22% for bonus amounts up to $1 million in a calendar year. Payments exceeding $1 million are withheld at 37% on the excess." },
  { q: "Does an off-cycle payroll require a separate tax deposit?", a: "Yes. Taxes withheld in an off-cycle payroll are subject to the same deposit rules as regular payroll. The deposit deadline is determined by the employer's deposit schedule (monthly or semiweekly)." },
];

export default function OffCyclePayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Off-Cycle Payroll?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An off-cycle payroll run processes payments outside the regular pay schedule for terminations, bonuses, corrections, or other special circumstances.</p>
        </div>
        <h2>Why off-cycle payrolls matter for employers</h2>
        <p>Off-cycle payrolls are any payroll runs that fall outside the established regular pay schedule. Common triggers include final paychecks for terminated employees, mid-cycle bonus payments, corrections to prior-period underpayments, commission payments on separate schedules, and equity award settlements.</p>
        <p>Final pay timing is the most legally sensitive trigger for off-cycle payrolls. State laws vary widely on when terminated employees must receive their final paycheck. California requires payment on the last day of employment for involuntary terminations. Other states allow payment on the next regular payday or within a set number of days. Violations can result in waiting time penalties ranging from daily wage continuation to double back pay.</p>
        <p>Bonus off-cycle payrolls must be processed using the correct supplemental withholding rate. The IRS allows a flat 22% federal supplemental withholding rate (37% for payments exceeding $1 million) when supplemental wages are paid separately from regular wages. Alternatively, aggregate withholding - adding the bonus to regular wages and calculating withholding on the total - may be used.</p>
        <p>Correction payrolls require careful consideration of which period the correction relates to. If a prior-period error is corrected in the current period, FICA calculations must account for year-to-date wages to avoid over-collecting Social Security on amounts above the wage base.</p>
        <p>Off-cycle payrolls incur additional processing costs with most payroll providers. Managed payroll services typically include a specified number of off-cycle runs per year with additional runs available for a fee.</p>
        <h2>How BEG handles off-cycle payrolls for clients</h2>
        <p>BEG Managed Payroll processes off-cycle runs for terminations, bonuses, and corrections with correct tax treatment and compliance with state final pay laws, as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/off-cycle-payroll', url: 'https://www.beghr.com/resources/payroll-glossary/off-cycle-payroll', name: 'Off-Cycle Payroll | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Off-Cycle Payroll', description: 'A payroll run outside the normal pay schedule used for termination pay, bonus payments, or corrections to prior payroll errors.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Off-Cycle Payroll', item: 'https://www.beghr.com/resources/payroll-glossary/off-cycle-payroll' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
