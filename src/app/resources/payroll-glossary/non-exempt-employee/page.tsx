import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Exempt Employee | Payroll Glossary | BEG',
  description: 'Employee covered by FLSA minimum wage and overtime requirements who must receive at least 1.5x their regular rate for hours over 40 per workweek.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/non-exempt-employee' },
  openGraph: { title: 'Non-Exempt Employee | Payroll Glossary | BEG', description: 'Employee covered by FLSA minimum wage and overtime requirements who must receive at least 1.5x their regular rate for hours over 40 per workweek.', url: 'https://beghr.com/resources/payroll-glossary/non-exempt-employee', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Non-Exempt Employee | Payroll Glossary | BEG', description: 'Employee covered by FLSA minimum wage and overtime requirements who must receive at least 1.5x their regular rate for hours over 40 per workweek.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can a salaried employee be non-exempt?", a: "Yes. Paying an employee on a salary basis does not automatically make them exempt. Non-exempt salaried employees are still entitled to minimum wage and overtime for hours over 40." },
  { q: "How far back can an employee sue for unpaid overtime?", a: "Under the FLSA, employees can recover up to two years of back pay for non-willful violations and three years for willful violations. Plus liquidated damages equal to the back pay amount, and attorney fees." },
  { q: "What records must employers keep for non-exempt employees?", a: "Employers must keep payroll records including hours worked each day and week, total wages, and the basis of pay for at least three years. Time records must be kept for at least two years." },
];

export default function NonExemptEmployeePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Non-Exempt Employee?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A non-exempt employee is covered by FLSA protections and must be paid at least minimum wage and 1.5x the regular rate for all hours worked over 40 in a workweek.</p>
        </div>
        <h2>Why non-exempt status matters for employers</h2>
        <p>Most employees in the United States are non-exempt under the FLSA, meaning they are entitled to the federal minimum wage and overtime pay at 1.5 times their regular rate for hours worked over 40 in a single workweek. The FLSA presumes employees are non-exempt unless the employer can demonstrate they meet the criteria for an exemption.</p>
        <p>Non-exempt employees can be hourly or salaried. A salaried non-exempt employee must still receive overtime pay for hours over 40, with the regular rate calculated by dividing the weekly salary by the hours actually worked. This fluctuating workweek method may be used in some circumstances, but requires a written agreement and results in a variable regular rate.</p>
        <p>Time tracking is essential for non-exempt employees. Employers must keep records of hours worked and wages paid for at least two years (three years for payroll records). Off-the-clock work - including pre-shift preparation, post-shift cleanup, and work performed during meal breaks - must be compensated if the employer knew or should have known it occurred.</p>
        <p>For non-exempt employees who earn commissions, bonuses, or piece-rate pay, those amounts must be included in the regular rate calculation for overtime purposes. This often results in a blended regular rate higher than the base hourly rate.</p>
        <p>Misclassifying non-exempt employees as exempt is one of the most costly FLSA violations. Back pay liability covers two years (three years for willful violations), and the employer typically pays an equal amount in liquidated damages plus attorney fees.</p>
        <h2>How BEG manages non-exempt payroll for clients</h2>
        <p>BEG Managed Payroll tracks non-exempt hours, calculates overtime including blended regular rates, and maintains required records as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/non-exempt-employee', url: 'https://beghr.com/resources/payroll-glossary/non-exempt-employee', name: 'Non-Exempt Employee | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Non-Exempt Employee', description: 'Employee covered by FLSA minimum wage and overtime requirements who must receive at least 1.5x their regular rate for hours over 40 per workweek.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Non-Exempt Employee', item: 'https://beghr.com/resources/payroll-glossary/non-exempt-employee' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
