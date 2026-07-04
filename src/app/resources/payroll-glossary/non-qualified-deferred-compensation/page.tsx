import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Qualified Deferred Compensation (NQDC) | BEG',
  description: 'Executive compensation arrangement deferring income to a future year, subject to strict Section 409A rules on timing and distribution.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/non-qualified-deferred-compensation' },
  openGraph: { title: 'Non-Qualified Deferred Compensation (NQDC) | BEG', description: 'Executive compensation arrangement deferring income to a future year, subject to strict Section 409A rules on timing and distribution.', url: 'https://www.beghr.com/resources/payroll-glossary/non-qualified-deferred-compensation', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Non-Qualified Deferred Compensation (NQDC) | BEG', description: 'Executive compensation arrangement deferring income to a future year, subject to strict Section 409A rules on timing and distribution.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What happens if a Section 409A plan fails compliance?", a: "The employee owes income tax on all deferred amounts immediately, plus a 20% excise tax and interest. The employer must withhold these amounts, creating a large unexpected tax event." },
  { q: "When is FICA owed on deferred compensation?", a: "FICA is owed when deferred amounts vest, not when they are paid out. If an executive defers compensation that vests over four years, FICA is owed each year as amounts vest even though no cash is distributed." },
  { q: "What are permissible distribution triggers under Section 409A?", a: "Section 409A allows distributions only upon six events: separation from service, disability, death, a specified date or schedule, a change in control, or an unforeseeable emergency. Ad hoc distributions violate 409A." },
];

export default function NonQualifiedDeferredCompensationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Non-Qualified Deferred Compensation (NQDC)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>NQDC plans allow employees, typically executives, to defer compensation to a future tax year, but must comply with strict Section 409A rules or face immediate taxation and penalties.</p>
        </div>
        <h2>Why NQDC matters for employers</h2>
        <p>Non-qualified deferred compensation plans allow employers to offer highly compensated executives and key employees an arrangement to defer receipt of compensation to a later year, reducing current income tax. Unlike 401(k) plans, NQDC plans have no contribution limits, are not subject to ERISA funding requirements, and can be customized for individual executives.</p>
        <p>Section 409A of the Internal Revenue Code governs virtually all NQDC arrangements. Failure to comply with 409A results in immediate income taxation of all deferred amounts, a 20% excise tax on top of regular income tax, and interest at the underpayment rate plus 1%. These penalties apply to the employee, not the employer, but employers are responsible for withholding.</p>
        <p>Section 409A requires that deferral elections be made before the year in which compensation is earned (with exceptions for first-year participants and performance-based compensation). Distributions must be triggered by one of six permissible events: separation from service, disability, death, a specified time or fixed schedule, a change in control, or an unforeseeable emergency.</p>
        <p>For FICA purposes, deferred compensation is subject to Social Security and Medicare taxes at the time of vesting - not when actually paid. This means employers must withhold FICA on unvested amounts when they vest even if no cash is distributed, a counterintuitive but important obligation.</p>
        <p>NQDC arrangements are unsecured promises to pay - employees are general creditors of the company, and if the company becomes insolvent, deferred compensation may be lost. This is why NQDC is typically offered to executives who can absorb this risk.</p>
        <h2>How BEG handles NQDC payroll for clients</h2>
        <p>BEG Managed Payroll tracks NQDC vesting events, calculates FICA at vesting, and manages distribution withholding as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/non-qualified-deferred-compensation', url: 'https://www.beghr.com/resources/payroll-glossary/non-qualified-deferred-compensation', name: 'Non-Qualified Deferred Compensation (NQDC) | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Non-Qualified Deferred Compensation (NQDC)', description: 'Executive compensation arrangement deferring income to a future year, subject to strict Section 409A rules on timing and distribution.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Non-Qualified Deferred Compensation (NQDC)', item: 'https://www.beghr.com/resources/payroll-glossary/non-qualified-deferred-compensation' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
