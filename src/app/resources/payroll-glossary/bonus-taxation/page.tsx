import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bonus Taxation | Payroll Glossary | BEG',
  description: 'Understand how bonuses are taxed federally, the flat rate vs. aggregate method, and how to calculate withholding on supplemental wages.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/bonus-taxation' },
  openGraph: {
    title: 'Bonus Taxation | Payroll Glossary | BEG',
    description: 'Understand how bonuses are taxed federally, the flat rate vs. aggregate method, and how to calculate withholding on supplemental wages.',
    url: 'https://www.beghr.com/resources/payroll-glossary/bonus-taxation',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonus Taxation | Payroll Glossary | BEG',
    description: 'Understand how bonuses are taxed federally, the flat rate vs. aggregate method, and how to calculate withholding on supplemental wages.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Should I use the flat rate or aggregate method for bonus withholding?", "a": "The flat rate method at 22% is simpler and sufficient for most situations. The aggregate method is better when an employee's marginal rate is well below 22% and you want to avoid over-withholding. For high earners, the aggregate method may result in more accurate withholding than the flat rate."}, {"q": "Are bonuses subject to Social Security and Medicare taxes?", "a": "Yes. Bonuses are wages for FICA purposes. Social Security tax at 6.2% applies up to the annual Social Security wage base. Medicare tax at 1.45% applies to all wages with no cap, and the 0.9% Additional Medicare Tax applies to wages over $200,000."}, {"q": "What happens if I forget to withhold taxes on a bonus?", "a": "The bonus is still taxable income for the employee, and the employer is still liable for the employer share of FICA. The employee will owe the under-withheld income tax when they file their return, but the employer may owe penalties for failure to deposit and failure to withhold."}];

export default function BonusTaxationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Bonus Taxation?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The IRS rules governing how supplemental wage payments like bonuses are taxed, either at a flat 22% federal withholding rate (37% over $1 million) or aggregated with regular wages and withheld at the employee's effective rate.</p>
        </div>

        <h2>Why bonus taxation matters for employers</h2>
        <p>Bonuses are supplemental wages, and the IRS gives employers two methods for withholding federal income tax on them. The first is the flat rate method: withhold exactly 22% federal income tax on the bonus amount, regardless of the employee's regular withholding rate. This is the most common approach and the simplest to administer. If the bonus plus any other supplemental wages paid to the same employee in the calendar year exceed $1 million, the rate jumps to 37% on the excess above $1 million. The second is the aggregate method: add the bonus to the employee's most recent regular paycheck, calculate withholding on the combined total as if it were a single payment using the W-4 withholding instructions, then subtract the withholding already taken from the regular paycheck. The result is a withholding amount that reflects the employee's actual marginal rate rather than the flat 22%. Employers choose the method and apply it consistently for each bonus payment, though they may use different methods for different bonus payments in the same year. Regardless of the income tax withholding method chosen, Social Security and Medicare taxes always apply to bonuses at the regular rates: 6.2% Social Security (up to the annual wage base) and 1.45% Medicare, plus the 0.9% Additional Medicare Tax for employees earning over $200,000. State bonus withholding rules vary, with some states requiring a flat rate similar to the federal approach and others requiring the aggregate method.</p>

        <h2>How BEG handles Bonus Taxation for clients</h2>
        <p>BEG Managed Payroll handles bonus payroll runs with correct federal and state supplemental wage withholding applied. Whether you run off-cycle bonus payments or include bonuses in the regular payroll, BEG calculates withholding correctly and files the corresponding 941 deposits on time. Bonus payroll runs are included in BEG's fully managed payroll service at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Should I use the flat rate or aggregate method for bonus withholding?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The flat rate method at 22% is simpler and sufficient for most situations. The aggregate method is better when an employee's marginal rate is well below 22% and you want to avoid over-withholding. For high earners, the aggregate method may result in more accurate withholding than the flat rate.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Are bonuses subject to Social Security and Medicare taxes?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. Bonuses are wages for FICA purposes. Social Security tax at 6.2% applies up to the annual Social Security wage base. Medicare tax at 1.45% applies to all wages with no cap, and the 0.9% Additional Medicare Tax applies to wages over $200,000.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What happens if I forget to withhold taxes on a bonus?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The bonus is still taxable income for the employee, and the employer is still liable for the employer share of FICA. The employee will owe the under-withheld income tax when they file their return, but the employer may owe penalties for failure to deposit and failure to withhold.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/bonus-taxation', url: 'https://www.beghr.com/resources/payroll-glossary/bonus-taxation', name: 'Bonus Taxation | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Bonus Taxation', description: 'Understand how bonuses are taxed federally, the flat rate vs. aggregate method, and how to calculate withholding on supplemental wages.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Bonus Taxation', item: 'https://www.beghr.com/resources/payroll-glossary/bonus-taxation' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
