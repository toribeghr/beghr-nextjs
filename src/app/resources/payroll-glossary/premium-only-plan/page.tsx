import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium-Only Plan (POP) | Payroll Glossary | BEG',
  description: 'A Section 125 cafeteria plan allowing employees to pay insurance premiums pre-tax, reducing FICA taxes for both the employer and employee.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/premium-only-plan' },
  openGraph: { title: 'Premium-Only Plan (POP) | Payroll Glossary | BEG', description: 'A Section 125 cafeteria plan allowing employees to pay insurance premiums pre-tax, reducing FICA taxes for both the employer and employee.', url: 'https://www.beghr.com/resources/payroll-glossary/premium-only-plan', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Premium-Only Plan (POP) | Payroll Glossary | BEG', description: 'A Section 125 cafeteria plan allowing employees to pay insurance premiums pre-tax, reducing FICA taxes for both the employer and employee.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does a Premium-Only Plan cost anything to set up?", a: "A POP requires a written plan document, but setup costs are minimal - typically $0-$300 through a benefits administrator or payroll provider. The FICA savings typically recoup any setup cost within the first month." },
  { q: "What benefits can be included in a Premium-Only Plan?", a: "A POP covers employer-sponsored health, dental, and vision premiums. For FSA contributions and dependent care accounts, a more comprehensive Section 125 cafeteria plan is needed." },
  { q: "Are POP non-discrimination rules difficult to meet?", a: "For most small to mid-sized employers, non-discrimination testing is straightforward. Issues arise primarily when highly compensated employees take a much larger proportion of benefits than rank-and-file employees, which is uncommon in typical POP designs." },
];

export default function PremiumOnlyPlanPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Premium-Only Plan (POP)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A Premium-Only Plan is the simplest Section 125 cafeteria plan, letting employees pay health insurance premiums with pre-tax dollars to reduce taxable wages and FICA for both parties.</p>
        </div>
        <h2>Why a Premium-Only Plan matters for employers</h2>
        <p>A Premium-Only Plan is the entry-level cafeteria plan under Section 125 of the Internal Revenue Code. It allows employees to elect to pay their share of employer-sponsored health, dental, and vision insurance premiums with pre-tax dollars instead of after-tax dollars.</p>
        <p>The tax savings from a POP benefit both the employee and the employer. When premiums are paid pre-tax through a POP, they reduce the employee's taxable wages for federal income tax, Social Security, and Medicare. The reduction in Social Security and Medicare wages saves the employer the matching 7.65% FICA on those amounts as well.</p>
        <p>For a simple example: if an employee earns $50,000 and pays $4,800 in annual health premiums, a POP reduces taxable wages to $45,200. The employer saves 7.65% of $4,800, or approximately $367 per employee per year, just in FICA matching - with no change to the employee's actual coverage.</p>
        <p>A POP requires a written plan document and must meet Section 125 non-discrimination rules, which prohibit highly compensated employees and key employees from disproportionately benefiting from the plan. Annual non-discrimination testing may be required.</p>
        <p>Setting up a POP is typically low-cost or free through most benefits administrators. It is one of the most cost-effective payroll actions an employer can take. Employers without a POP are effectively overpaying FICA taxes on benefit premiums their employees are already paying.</p>
        <h2>How BEG administers Premium-Only Plans for clients</h2>
        <p>BEG Managed Payroll coordinates POP deductions, ensures premiums are coded correctly as pre-tax in payroll, and tracks FICA savings for clients as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/premium-only-plan', url: 'https://www.beghr.com/resources/payroll-glossary/premium-only-plan', name: 'Premium-Only Plan (POP) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Premium-Only Plan (POP)', description: 'A Section 125 cafeteria plan allowing employees to pay insurance premiums pre-tax, reducing FICA taxes for both the employer and employee.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Premium-Only Plan (POP)', item: 'https://www.beghr.com/resources/payroll-glossary/premium-only-plan' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
