import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cafeteria Plan (Section 125) | Payroll Glossary | BEG',
  description: 'Learn how a Section 125 cafeteria plan works, which benefits qualify, and the FICA savings it creates for employers and employees.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/cafeteria-plan' },
  openGraph: {
    title: 'Cafeteria Plan (Section 125) | Payroll Glossary | BEG',
    description: 'Learn how a Section 125 cafeteria plan works, which benefits qualify, and the FICA savings it creates for employers and employees.',
    url: 'https://www.beghr.com/resources/payroll-glossary/cafeteria-plan',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cafeteria Plan (Section 125) | Payroll Glossary | BEG',
    description: 'Learn how a Section 125 cafeteria plan works, which benefits qualify, and the FICA savings it creates for employers and employees.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What benefits can be offered through a Section 125 plan?", "a": "Qualifying benefits include health, dental, and vision insurance premiums; Health Savings Account contributions; health and dependent care Flexible Spending Account contributions; and group term life insurance up to $50,000 in coverage. Cash or taxable benefits cannot be made pre-tax through Section 125."}, {"q": "Does a Section 125 plan require a written document?", "a": "Yes. IRS regulations require a written plan document. Without a written plan in place, benefits cannot be treated as pre-tax under Section 125, even if the employer and employee intend them to be."}, {"q": "What happens if the plan fails nondiscrimination testing?", "a": "If the plan fails the Section 125 nondiscrimination tests, highly compensated employees or key employees lose the pre-tax treatment for their benefits and must include the value of those benefits in taxable income. Non-highly-compensated employees are not affected."}];

export default function CafeteriaPlanPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Cafeteria Plan (Section 125)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An employer-sponsored benefit plan under IRS Section 125 that lets employees choose to pay for qualified benefits with pre-tax dollars, reducing taxable wages and lowering FICA for both the employee and employer.</p>
        </div>

        <h2>Why a cafeteria plan matters for employers</h2>
        <p>A Section 125 cafeteria plan is one of the most valuable payroll tax reduction tools available to employers of any size. Under a qualifying plan, employees elect to receive certain benefits instead of cash, reducing their taxable wages. Because the benefit is paid pre-tax, neither the employee nor the employer pays FICA on those dollars. The most common qualifying benefits are employee premiums for health, dental, and vision insurance; Health Savings Account contributions (when paired with a high-deductible health plan); Flexible Spending Account contributions for health care and dependent care; and group term life insurance premiums up to $50,000 in coverage. To qualify under Section 125, the plan must be in writing, must offer employees a choice between cash and qualified benefits, and must pass IRS nondiscrimination tests ensuring the plan does not disproportionately benefit highly compensated employees or key employees. For a concrete example of the savings: if an employer has 50 employees each paying $300 per month in health insurance premiums through a Section 125 plan, the employer saves the 7.65% employer FICA match on $180,000 per year in pre-tax employee contributions, which is $13,770 annually. Employees save the 7.65% employee FICA share on their own contributions. Both savings occur automatically with no additional cost, simply by having the plan document in place and collecting elections annually.</p>

        <h2>How BEG handles Cafeteria Plan (Section 125) for clients</h2>
        <p>BEG Managed Payroll processes Section 125 pre-tax benefit deductions correctly on every payroll run, ensuring they reduce Box 3 and Box 5 wages on the W-2 accurately. If your benefit deductions are not being taken pre-tax when they should be, BEG can identify and correct the setup during onboarding. Correct Section 125 processing is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What benefits can be offered through a Section 125 plan?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Qualifying benefits include health, dental, and vision insurance premiums; Health Savings Account contributions; health and dependent care Flexible Spending Account contributions; and group term life insurance up to $50,000 in coverage. Cash or taxable benefits cannot be made pre-tax through Section 125.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does a Section 125 plan require a written document?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. IRS regulations require a written plan document. Without a written plan in place, benefits cannot be treated as pre-tax under Section 125, even if the employer and employee intend them to be.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What happens if the plan fails nondiscrimination testing?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>If the plan fails the Section 125 nondiscrimination tests, highly compensated employees or key employees lose the pre-tax treatment for their benefits and must include the value of those benefits in taxable income. Non-highly-compensated employees are not affected.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/cafeteria-plan', url: 'https://www.beghr.com/resources/payroll-glossary/cafeteria-plan', name: 'Cafeteria Plan (Section 125) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Cafeteria Plan (Section 125)', description: 'Learn how a Section 125 cafeteria plan works, which benefits qualify, and the FICA savings it creates for employers and employees.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Cafeteria Plan (Section 125)', item: 'https://www.beghr.com/resources/payroll-glossary/cafeteria-plan' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
