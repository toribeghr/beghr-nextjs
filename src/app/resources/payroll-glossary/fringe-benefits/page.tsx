import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fringe Benefits | Payroll Glossary | BEG',
  description: 'Learn which fringe benefits are taxable and which are excluded from income, how they appear on the W-2, and IRS rules for common fringe benefits.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/fringe-benefits' },
  openGraph: {
    title: 'Fringe Benefits | Payroll Glossary | BEG',
    description: 'Learn which fringe benefits are taxable and which are excluded from income, how they appear on the W-2, and IRS rules for common fringe benefits.',
    url: 'https://www.beghr.com/resources/payroll-glossary/fringe-benefits',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fringe Benefits | Payroll Glossary | BEG',
    description: 'Learn which fringe benefits are taxable and which are excluded from income, how they appear on the W-2, and IRS rules for common fringe benefits.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Are employer-paid health insurance premiums taxable to the employee?", "a": "No. Employer contributions to a qualified group health plan are excluded from the employee's gross income and are not subject to federal income tax or FICA. This is one of the most valuable exclusions in the tax code from both the employee and employer perspective."}, {"q": "How is personal use of a company vehicle taxed?", "a": "The value of personal use of an employer-provided vehicle must be included in the employee's taxable wages. The IRS allows valuation using the Annual Lease Value method, the cents-per-mile method, or the commuting valuation rule, each with specific eligibility requirements. The value is reported in Box 1 and typically Box 14 of the W-2."}, {"q": "What is imputed income?", "a": "Imputed income is the value of a non-cash benefit that must be added to an employee's taxable wages because no exclusion applies. The employer calculates the fair market value or IRS-prescribed value of the benefit and includes it in the employee's gross wages for withholding and FICA purposes."}];

export default function FringeBenefitsPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Fringe Benefits?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Non-cash forms of compensation provided to employees beyond their base wages, including items like health insurance, retirement contributions, company vehicles, and gym memberships, each subject to specific IRS rules on taxability.</p>
        </div>

        <h2>Why fringe benefits matter for employers</h2>
        <p>Fringe benefits are a significant component of total employee compensation and a major area of payroll complexity. The IRS taxes fringe benefits as wages unless a specific exclusion applies. Understanding which benefits are excludable and which must be included in taxable wages prevents both under-reporting (creating audit exposure) and over-reporting (creating unnecessary tax cost for employees). Common excludable fringe benefits include employer-provided health, dental, and vision insurance premiums; employer contributions to Health Savings Accounts; employer contributions to qualified retirement plans; up to $50,000 of group term life insurance; up to $300 per month (2025) in employer-provided transit or parking benefits; educational assistance up to $5,250 per year; working condition fringe benefits such as a company phone used primarily for business; and de minimis fringe benefits of minimal value. Common taxable fringe benefits include the value of employer-provided personal use of a company vehicle (calculated using the IRS Annual Lease Value method or cents-per-mile method), group term life insurance over $50,000 in coverage (calculated using IRS Table I rates), gift cards of any amount, non-qualified moving expense reimbursements, and personal use of employer-provided athletic facilities that do not qualify as on-premises facilities open to all employees. Taxable fringe benefits must be reported in the employee's Box 1 wages on the W-2, and FICA applies to them as well. Many taxable fringe benefits can be provided through a Section 125 cafeteria plan to convert them to pre-tax, where the IRS permits.</p>

        <h2>How BEG handles Fringe Benefits for clients</h2>
        <p>BEG Managed Payroll handles fringe benefit taxability correctly, including imputed income for taxable benefits, FICA calculation on fringe amounts, and accurate W-2 coding using the appropriate Box 12 codes. BEG reviews fringe benefit setup during onboarding to identify any items currently treated incorrectly. Fringe benefit payroll processing is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Are employer-paid health insurance premiums taxable to the employee?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Employer contributions to a qualified group health plan are excluded from the employee's gross income and are not subject to federal income tax or FICA. This is one of the most valuable exclusions in the tax code from both the employee and employer perspective.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How is personal use of a company vehicle taxed?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The value of personal use of an employer-provided vehicle must be included in the employee's taxable wages. The IRS allows valuation using the Annual Lease Value method, the cents-per-mile method, or the commuting valuation rule, each with specific eligibility requirements. The value is reported in Box 1 and typically Box 14 of the W-2.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is imputed income?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Imputed income is the value of a non-cash benefit that must be added to an employee's taxable wages because no exclusion applies. The employer calculates the fair market value or IRS-prescribed value of the benefit and includes it in the employee's gross wages for withholding and FICA purposes.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/fringe-benefits', url: 'https://www.beghr.com/resources/payroll-glossary/fringe-benefits', name: 'Fringe Benefits | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Fringe Benefits', description: 'Learn which fringe benefits are taxable and which are excluded from income, how they appear on the W-2, and IRS rules for common fringe benefits.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Fringe Benefits', item: 'https://www.beghr.com/resources/payroll-glossary/fringe-benefits' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
