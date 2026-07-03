import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fair Labor Standards Act (FLSA) | Payroll Glossary | BEG',
  description: 'Learn what the FLSA covers, who it applies to, how it defines overtime, and what the penalties are for violations.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/fair-labor-standards-act' },
  openGraph: {
    title: 'Fair Labor Standards Act (FLSA) | Payroll Glossary | BEG',
    description: 'Learn what the FLSA covers, who it applies to, how it defines overtime, and what the penalties are for violations.',
    url: 'https://www.beghr.com/resources/payroll-glossary/fair-labor-standards-act',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fair Labor Standards Act (FLSA) | Payroll Glossary | BEG',
    description: 'Learn what the FLSA covers, who it applies to, how it defines overtime, and what the penalties are for violations.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Does the FLSA apply to every employer?", "a": "The FLSA covers employers engaged in interstate commerce or with annual gross sales of $500,000 or more with at least two employees. In practice, this covers nearly all businesses. Even smaller employers may be covered if individual employees are engaged in interstate commerce."}, {"q": "What are the penalties for FLSA violations?", "a": "The DOL can recover back wages and assess civil penalties up to $2,400 per willful or repeat violation. Employees can also sue for back pay, liquidated damages equal to the back pay amount, and attorneys fees. Willful violations can trigger criminal prosecution."}, {"q": "How long must employers keep payroll records under the FLSA?", "a": "Payroll records including wage rates, hours worked, and deductions must be retained for at least three years. Records used to compute wages such as time cards and work schedules must be kept for two years. Records must be available for DOL inspection."}];

export default function FairLaborStandardsActPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Fair Labor Standards Act (FLSA)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The federal law enacted in 1938 that establishes minimum wage, overtime pay, recordkeeping, and child labor standards for most U.S. employers, enforced by the Department of Labor Wage and Hour Division.</p>
        </div>

        <h2>Why the FLSA matters for every employer</h2>
        <p>The Fair Labor Standards Act is the foundation of U.S. wage and hour law. It establishes four core requirements that apply across most private and public sector employers. First, the federal minimum wage: as of 2025, $7.25 per hour, though most states and many cities set higher minimums that prevail over the federal floor. Second, overtime pay: non-exempt employees must receive at least 1.5 times their regular rate of pay for all hours worked over 40 in a defined workweek. Third, recordkeeping: employers must maintain records of wages, hours worked, and other employment conditions for non-exempt employees for at least two years. Fourth, child labor: restrictions on hours and types of work for workers under 18. The FLSA applies to enterprises with at least two employees and annual gross sales of $500,000 or more, or to businesses involved in interstate commerce regardless of size. This covers virtually every employer. The law establishes a distinction between exempt employees (not entitled to overtime or minimum wage) and non-exempt employees (fully covered). Exemption requires meeting both a salary test and a duties test. Job titles do not create exemptions. The FLSA is enforced by the Department of Labor's Wage and Hour Division, which can investigate employers, recover back wages for employees, and assess civil penalties of up to $2,400 per willful or repeat violation. Private lawsuits under the FLSA allow employees to recover two to three years of back pay, liquidated damages equal to back pay, and attorneys fees. Class and collective actions for wage and hour violations under the FLSA are among the most common employment lawsuits.</p>

        <h2>How BEG handles Fair Labor Standards Act (FLSA) for clients</h2>
        <p>BEG Managed Payroll is built around FLSA compliance. Overtime calculations, pay frequency requirements, recordkeeping, and exemption classification are all handled within BEG's managed payroll system. BEG ensures non-exempt employees are paid correctly for every hour worked and that records are maintained in accordance with FLSA requirements. This foundational compliance is included at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does the FLSA apply to every employer?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The FLSA covers employers engaged in interstate commerce or with annual gross sales of $500,000 or more with at least two employees. In practice, this covers nearly all businesses. Even smaller employers may be covered if individual employees are engaged in interstate commerce.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What are the penalties for FLSA violations?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The DOL can recover back wages and assess civil penalties up to $2,400 per willful or repeat violation. Employees can also sue for back pay, liquidated damages equal to the back pay amount, and attorneys fees. Willful violations can trigger criminal prosecution.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How long must employers keep payroll records under the FLSA?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Payroll records including wage rates, hours worked, and deductions must be retained for at least three years. Records used to compute wages such as time cards and work schedules must be kept for two years. Records must be available for DOL inspection.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/fair-labor-standards-act', url: 'https://www.beghr.com/resources/payroll-glossary/fair-labor-standards-act', name: 'Fair Labor Standards Act (FLSA) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Fair Labor Standards Act (FLSA)', description: 'Learn what the FLSA covers, who it applies to, how it defines overtime, and what the penalties are for violations.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Fair Labor Standards Act (FLSA)', item: 'https://www.beghr.com/resources/payroll-glossary/fair-labor-standards-act' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
