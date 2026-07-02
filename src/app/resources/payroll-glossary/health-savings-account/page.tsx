import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Savings Account (HSA) | Payroll Glossary | BEG',
  description: 'Tax-advantaged account paired with a high-deductible health plan allowing pre-tax contributions for qualified medical expenses.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/health-savings-account' },
  openGraph: { title: 'Health Savings Account (HSA) | Payroll Glossary | BEG', description: 'Tax-advantaged account paired with a high-deductible health plan allowing pre-tax contributions for qualified medical expenses.', url: 'https://www.beghr.com/resources/payroll-glossary/health-savings-account', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Health Savings Account (HSA) | Payroll Glossary | BEG', description: 'Tax-advantaged account paired with a high-deductible health plan allowing pre-tax contributions for qualified medical expenses.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can an employer contribute to an employee's HSA?", a: "Yes. Employer HSA contributions are excluded from the employee's taxable wages and exempt from FICA taxes. They must be reported in Box 12 of the W-2 using Code W." },
  { q: "What happens to the HSA if an employee leaves the company?", a: "HSAs are employee-owned accounts. The balance remains with the employee regardless of employment status. There is no vesting schedule and no forfeiture." },
  { q: "Can employees contribute to an HSA if their employer doesn't offer one?", a: "Yes. Employees enrolled in a qualifying HDHP can open and contribute to an HSA on their own, though contributions made outside of payroll do not reduce FICA taxes." },
];

export default function HealthSavingsAccountPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Health Savings Account (HSA)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An HSA is a tax-advantaged account paired with a qualifying high-deductible health plan, allowing pre-tax savings for qualified medical expenses.</p>
        </div>
        <h2>Why HSAs matter for employers</h2>
        <p>A Health Savings Account is available to employees enrolled in a qualifying High-Deductible Health Plan (HDHP). For 2024, the minimum HDHP deductible is $1,600 for self-only coverage or $3,200 for family coverage. HSA contribution limits for 2024 are $4,150 for self-only and $8,300 for family.</p>
        <p>HSAs provide a triple tax advantage: contributions are pre-tax (or tax-deductible if made personally), growth is tax-free, and withdrawals for qualified medical expenses are tax-free. This makes HSAs one of the most tax-efficient benefits an employer can offer.</p>
        <p>Employers may contribute to employee HSAs, and those contributions are excluded from the employee's taxable wages. Employer contributions are also exempt from FICA taxes, saving both the employer and employee the 7.65% FICA rate on contributed amounts.</p>
        <p>Employee HSA contributions made through payroll are pre-tax under a Section 125 cafeteria plan, reducing federal income tax withholding and FICA. Contributions made directly by the employee (outside payroll) are deductible on the individual return but do not reduce FICA.</p>
        <p>HSA funds roll over year to year with no use-it-or-lose-it rule, and accounts are portable - they belong to the employee, not the employer. After age 65, HSA funds can be withdrawn for any purpose without penalty (though non-medical withdrawals become taxable).</p>
        <h2>How BEG handles HSA payroll deductions for clients</h2>
        <p>BEG Managed Payroll administers HSA payroll deductions, tracks contribution limits, and reports employer contributions in Box 12 of the W-2, all as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/health-savings-account', url: 'https://www.beghr.com/resources/payroll-glossary/health-savings-account', name: 'Health Savings Account (HSA) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Health Savings Account (HSA)', description: 'Tax-advantaged account paired with a high-deductible health plan allowing pre-tax contributions for qualified medical expenses.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Health Savings Account (HSA)', item: 'https://www.beghr.com/resources/payroll-glossary/health-savings-account' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
