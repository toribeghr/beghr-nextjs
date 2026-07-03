import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Defined Benefit Plan | Payroll Glossary | BEG',
  description: 'Learn what a defined benefit plan is, how benefits are calculated, and the payroll and ERISA obligations employers must meet.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/defined-benefit-plan' },
  openGraph: {
    title: 'Defined Benefit Plan | Payroll Glossary | BEG',
    description: 'Learn what a defined benefit plan is, how benefits are calculated, and the payroll and ERISA obligations employers must meet.',
    url: 'https://www.beghr.com/resources/payroll-glossary/defined-benefit-plan',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defined Benefit Plan | Payroll Glossary | BEG',
    description: 'Learn what a defined benefit plan is, how benefits are calculated, and the payroll and ERISA obligations employers must meet.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Who bears the investment risk in a defined benefit plan?", "a": "The employer bears all investment risk in a defined benefit plan. If plan investments underperform, the employer must contribute more to meet the funding requirements. This is the key distinction from defined contribution plans like 401(k), where investment risk falls on the employee."}, {"q": "What is the PBGC and why does it matter?", "a": "The Pension Benefit Guaranty Corporation is a federal agency that insures private sector defined benefit plans. If a plan terminates without sufficient assets to pay promised benefits, the PBGC steps in to pay benefits up to guaranteed limits. Employers pay annual PBGC premiums based on plan participants and funding levels."}, {"q": "Can an employer freeze a defined benefit plan?", "a": "Yes. Employers can freeze benefit accruals, meaning current employees stop earning additional benefits but retain the benefits already accrued. A hard freeze stops all accruals; a soft freeze closes the plan to new entrants while existing employees continue accruing. Plan termination is a separate, more complex process."}];

export default function DefinedBenefitPlanPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Defined Benefit Plan?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An employer-sponsored retirement plan that promises employees a specific monthly benefit at retirement, typically based on salary history and years of service, with the employer bearing the investment risk.</p>
        </div>

        <h2>Why a defined benefit plan matters for employers</h2>
        <p>A defined benefit plan is the traditional pension model: the employer promises to pay a specified benefit at retirement, regardless of investment performance. The most common formula is a percentage of final average salary multiplied by years of service. For example, an employee might earn 1.5% of their final three-year average salary for each year of service, so a 30-year employee retiring with a $100,000 final average salary would receive $45,000 per year. The employer bears all investment risk and must fund the plan sufficiently to meet future obligations. ERISA, the Pension Benefit Guaranty Corporation (PBGC), and IRS funding requirements govern defined benefit plans for private employers. Minimum funding standards require employers to make annual contributions based on actuarial calculations. Underfunded plans must pay variable-rate PBGC premiums in addition to the flat-rate per-participant premium. From a payroll perspective, defined benefit employer contributions are not made through the payroll system in the same way as 401(k) contributions. The plan actuary determines the contribution amount and the employer remits directly to the trust. However, payroll records drive the benefit calculations: accurate tracking of compensation and service years is critical. Employee contributions to contributory defined benefit plans are payroll deductions processed like any other retirement deduction, though they may or may not be pre-tax depending on plan design. Most private sector employers have frozen or terminated defined benefit plans in favor of defined contribution plans, but government employers and some union plans continue to operate them extensively.</p>

        <h2>How BEG handles Defined Benefit Plan for clients</h2>
        <p>BEG Managed Payroll tracks the compensation and service data that defined benefit plan actuaries rely on for funding calculations, ensuring your plan records are accurate. Employee contributions to contributory DB plans are processed as pre-tax deductions where applicable. BEG handles retirement plan payroll deductions as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Who bears the investment risk in a defined benefit plan?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The employer bears all investment risk in a defined benefit plan. If plan investments underperform, the employer must contribute more to meet the funding requirements. This is the key distinction from defined contribution plans like 401(k), where investment risk falls on the employee.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the PBGC and why does it matter?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The Pension Benefit Guaranty Corporation is a federal agency that insures private sector defined benefit plans. If a plan terminates without sufficient assets to pay promised benefits, the PBGC steps in to pay benefits up to guaranteed limits. Employers pay annual PBGC premiums based on plan participants and funding levels.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer freeze a defined benefit plan?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. Employers can freeze benefit accruals, meaning current employees stop earning additional benefits but retain the benefits already accrued. A hard freeze stops all accruals; a soft freeze closes the plan to new entrants while existing employees continue accruing. Plan termination is a separate, more complex process.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/defined-benefit-plan', url: 'https://www.beghr.com/resources/payroll-glossary/defined-benefit-plan', name: 'Defined Benefit Plan | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Defined Benefit Plan', description: 'Learn what a defined benefit plan is, how benefits are calculated, and the payroll and ERISA obligations employers must meet.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Defined Benefit Plan', item: 'https://www.beghr.com/resources/payroll-glossary/defined-benefit-plan' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
