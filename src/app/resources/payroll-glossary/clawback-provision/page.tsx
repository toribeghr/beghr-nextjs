import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clawback Provision | Payroll Glossary | BEG',
  description: 'Learn what clawback provisions are, when they are enforceable, and the payroll and tax implications of recovering previously paid compensation.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/clawback-provision' },
  openGraph: {
    title: 'Clawback Provision | Payroll Glossary | BEG',
    description: 'Learn what clawback provisions are, when they are enforceable, and the payroll and tax implications of recovering previously paid compensation.',
    url: 'https://www.beghr.com/resources/payroll-glossary/clawback-provision',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clawback Provision | Payroll Glossary | BEG',
    description: 'Learn what clawback provisions are, when they are enforceable, and the payroll and tax implications of recovering previously paid compensation.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Are clawback provisions enforceable in all states?", "a": "No. California and a few other states impose restrictions that can make certain clawback provisions unenforceable as unlawful wage deductions. Employers with employees in multiple states should have counsel review clawback language for each state of employment."}, {"q": "What happens to payroll taxes when an employee repays a bonus?", "a": "If repayment occurs in the same calendar year, the employer can recover both the employee and employer FICA and adjust the W-2. If repayment occurs in a later year, the employer can claim a FICA credit but cannot adjust the prior year W-2 for income tax withholding purposes."}, {"q": "Can an employer deduct a clawback from the employee's final paycheck?", "a": "In most states, yes, if the employee signed a written agreement authorizing the deduction. Some states require explicit authorization for each deduction. California prohibits most wage deductions for clawback purposes. Always review state wage payment laws before withholding from final pay."}];

export default function ClawbackProvisionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Clawback Provision?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A contract clause requiring an employee to repay previously paid compensation such as a signing bonus, advance draw, or equity award if specified conditions are not met, such as leaving before a retention date or triggering a restatement.</p>
        </div>

        <h2>Why clawback provisions matter for employers</h2>
        <p>Clawback provisions are contractual tools employers use to protect against compensation paid in anticipation of future performance or continued service. Common clawback scenarios include signing bonuses with an employment tenure requirement (if the employee leaves within 12 or 24 months, they must repay the bonus), draw-against-commission arrangements where the draw exceeds earned commissions, equity awards that vest over time and are forfeited or clawed back upon early departure, and executive compensation subject to Dodd-Frank Section 954 restatement clawbacks for public companies. Enforceability varies significantly by state. Some states, most notably California, impose strict limits on wage recovery from employees, treating certain clawback provisions as unlawful deductions from wages. In most other states, clawback provisions are enforceable if clearly documented in a signed agreement and the repayment obligation is unambiguous. Payroll tax implications create complexity when a clawback is triggered. If the employee repays in the same calendar year the bonus was paid, the employer can adjust the W-2 to reduce the reported wages and recover the FICA and income tax withholding. If repayment occurs in a subsequent year, the tax treatment is more complicated: the employer can claim a credit or deduction for the FICA overpayment, but the employee must seek relief through their own return. Documenting clawback agreements clearly and addressing the tax recovery mechanics in advance makes enforcement significantly cleaner.</p>

        <h2>How BEG handles Clawback Provision for clients</h2>
        <p>BEG Managed Payroll handles clawback repayments correctly when they occur within the same year, adjusting the employee's year-to-date wages and generating corrected tax records as needed. For cross-year clawback situations, BEG coordinates the appropriate payroll tax adjustments. Clawback processing is handled as part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Are clawback provisions enforceable in all states?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. California and a few other states impose restrictions that can make certain clawback provisions unenforceable as unlawful wage deductions. Employers with employees in multiple states should have counsel review clawback language for each state of employment.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What happens to payroll taxes when an employee repays a bonus?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>If repayment occurs in the same calendar year, the employer can recover both the employee and employer FICA and adjust the W-2. If repayment occurs in a later year, the employer can claim a FICA credit but cannot adjust the prior year W-2 for income tax withholding purposes.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer deduct a clawback from the employee's final paycheck?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>In most states, yes, if the employee signed a written agreement authorizing the deduction. Some states require explicit authorization for each deduction. California prohibits most wage deductions for clawback purposes. Always review state wage payment laws before withholding from final pay.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/clawback-provision', url: 'https://www.beghr.com/resources/payroll-glossary/clawback-provision', name: 'Clawback Provision | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Clawback Provision', description: 'Learn what clawback provisions are, when they are enforceable, and the payroll and tax implications of recovering previously paid compensation.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Clawback Provision', item: 'https://www.beghr.com/resources/payroll-glossary/clawback-provision' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
