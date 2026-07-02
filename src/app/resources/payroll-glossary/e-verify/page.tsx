import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Verify | Payroll Glossary | BEG',
  description: 'Learn what E-Verify is, when it is required, how to enroll, and what to do when the system returns a tentative non-confirmation.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/e-verify' },
  openGraph: {
    title: 'E-Verify | Payroll Glossary | BEG',
    description: 'Learn what E-Verify is, when it is required, how to enroll, and what to do when the system returns a tentative non-confirmation.',
    url: 'https://www.beghr.com/resources/payroll-glossary/e-verify',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Verify | Payroll Glossary | BEG',
    description: 'Learn what E-Verify is, when it is required, how to enroll, and what to do when the system returns a tentative non-confirmation.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Is E-Verify required for all employers?", "a": "No. Most private employers are not federally required to use E-Verify. Federal contractors with a FAR E-Verify clause must use it. Many states have separate mandates for some or all employers. Check your state's requirements and any applicable federal contract terms."}, {"q": "What is a Tentative Non-Confirmation?", "a": "A TNC means E-Verify could not confirm work authorization but does not mean the employee is unauthorized. The mismatch may be due to name changes, data entry errors, or outdated records. The employee has the right to contest the TNC and continue working during the resolution period."}, {"q": "Can an employer fire someone based on a TNC?", "a": "No. Federal law prohibits taking any adverse employment action based on a TNC while it is being contested. Employers who terminate during the TNC contest period may face discrimination charges under E-Verify's anti-discrimination provisions."}];

export default function EVerifyPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is E-Verify?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A free, web-based federal system operated by USCIS that allows employers to verify that newly hired employees are authorized to work in the United States by cross-checking I-9 information against federal databases.</p>
        </div>

        <h2>Why E-Verify matters for employers</h2>
        <p>E-Verify is an internet-based system administered by the U.S. Citizenship and Immigration Services (USCIS) in partnership with the Social Security Administration. It compares information from an employee's Form I-9 against records in SSA and DHS databases to confirm that the employee is authorized to work. E-Verify is free to use and takes about three to five minutes per case. Federal law does not require most private employers to use E-Verify. However, federal contractors and subcontractors who hold contracts with a FAR E-Verify clause are required to use it for all new hires and existing employees assigned to covered contracts. Additionally, 21 states have enacted laws requiring some or all employers within the state to use E-Verify for new hires. These include Arizona, Alabama, Georgia, North Carolina, South Carolina, Tennessee, Utah, Mississippi, Louisiana, and others. E-Verify cases must be initiated no later than the third business day after the employee's first day of employment, and employers may not run E-Verify before a job offer is accepted or before the I-9 is completed. If E-Verify returns a Tentative Non-Confirmation (TNC), the employee must be notified and has the right to contest the result with the relevant federal agency. The employer cannot take adverse action while the TNC is being contested. A Final Non-Confirmation means the employee is not confirmed work-authorized, but employers should consult with legal counsel before terminating based solely on this result.</p>

        <h2>How BEG handles E-Verify for clients</h2>
        <p>BEG Managed Payroll tracks new hire onboarding timelines and reminds clients to complete I-9 and E-Verify within the required windows. For clients in states where E-Verify is mandated, BEG provides the workflow structure to stay compliant. New hire compliance support is part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Is E-Verify required for all employers?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Most private employers are not federally required to use E-Verify. Federal contractors with a FAR E-Verify clause must use it. Many states have separate mandates for some or all employers. Check your state's requirements and any applicable federal contract terms.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is a Tentative Non-Confirmation?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A TNC means E-Verify could not confirm work authorization but does not mean the employee is unauthorized. The mismatch may be due to name changes, data entry errors, or outdated records. The employee has the right to contest the TNC and continue working during the resolution period.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer fire someone based on a TNC?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Federal law prohibits taking any adverse employment action based on a TNC while it is being contested. Employers who terminate during the TNC contest period may face discrimination charges under E-Verify's anti-discrimination provisions.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/e-verify', url: 'https://www.beghr.com/resources/payroll-glossary/e-verify', name: 'E-Verify | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'E-Verify', description: 'Learn what E-Verify is, when it is required, how to enroll, and what to do when the system returns a tentative non-confirmation.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'E-Verify', item: 'https://www.beghr.com/resources/payroll-glossary/e-verify' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
