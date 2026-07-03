import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASO (Administrative Services Organization) | Payroll Glossary | BEG',
  description: 'Learn what an ASO is, how it differs from a PEO, and whether an administrative services organization is the right HR model for your business.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/aso' },
  openGraph: {
    title: 'ASO (Administrative Services Organization) | Payroll Glossary | BEG',
    description: 'Learn what an ASO is, how it differs from a PEO, and whether an administrative services organization is the right HR model for your business.',
    url: 'https://www.beghr.com/resources/payroll-glossary/aso',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASO (Administrative Services Organization) | Payroll Glossary | BEG',
    description: 'Learn what an ASO is, how it differs from a PEO, and whether an administrative services organization is the right HR model for your business.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the difference between an ASO and a PEO?", "a": "A PEO co-employs your workers, becoming the employer of record for payroll and HR purposes. An ASO does not co-employ - you remain the sole employer of record and retain all employment liability. The ASO only administers HR functions on your behalf."}, {"q": "Is a managed payroll service the same as an ASO?", "a": "Not exactly. A managed payroll service typically handles payroll processing and tax compliance specifically. An ASO often includes a broader range of HR services including benefits administration, onboarding, and HR software. Some managed payroll services bundle additional HR functions."}, {"q": "Does an ASO file payroll taxes under my EIN?", "a": "Yes. Because the ASO arrangement does not create co-employment, payroll taxes are filed under your Employer Identification Number, not the ASO's. This differs from a PEO, which often files under its own EIN using a process called aggregated filing."}];

export default function AsoPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is ASO (Administrative Services Organization)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An HR outsourcing model where a third-party administrator handles payroll, benefits administration, and HR tasks on behalf of an employer who retains full employment liability.</p>
        </div>

        <h2>Why the ASO model matters for employers</h2>
        <p>An Administrative Services Organization provides HR administration services without becoming a co-employer. This is the critical distinction from a Professional Employer Organization (PEO). In a PEO relationship, the PEO becomes the employer of record and co-employs your workers, taking on legal responsibility for payroll taxes and compliance. In an ASO arrangement, you remain the sole employer of record, retain all employment liability, and the ASO simply administers the HR function on your behalf. ASO clients typically get payroll processing, tax filing, benefits administration, employee onboarding, and HR software under one umbrella while keeping full control of employment decisions. The ASO model appeals to employers who want administrative efficiency without transferring employment liability to a third party. It is common among companies that have specific benefit plans they want to keep, that operate in industries where co-employment creates complications, or that simply prefer to remain the employer of record for risk management reasons. The trade-off is that because the ASO is not a co-employer, it does not provide the employment practices liability insurance or regulatory compliance indemnification that some PEOs offer. Pricing for ASO services typically runs on a per-employee per-month basis, similar to managed payroll services. Employers should clarify exactly what the ASO does and does not handle, particularly around state-specific compliance and year-end filing.</p>

        <h2>How BEG handles ASO (Administrative Services Organization) for clients</h2>
        <p>BEG Managed Payroll operates as a managed payroll service, not a PEO or ASO. BEG handles payroll processing, tax deposits, and W-2 production for clients who retain employer status throughout. This gives you the administrative lift of a managed service without co-employment complications, at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the difference between an ASO and a PEO?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A PEO co-employs your workers, becoming the employer of record for payroll and HR purposes. An ASO does not co-employ - you remain the sole employer of record and retain all employment liability. The ASO only administers HR functions on your behalf.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Is a managed payroll service the same as an ASO?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Not exactly. A managed payroll service typically handles payroll processing and tax compliance specifically. An ASO often includes a broader range of HR services including benefits administration, onboarding, and HR software. Some managed payroll services bundle additional HR functions.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does an ASO file payroll taxes under my EIN?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. Because the ASO arrangement does not create co-employment, payroll taxes are filed under your Employer Identification Number, not the ASO's. This differs from a PEO, which often files under its own EIN using a process called aggregated filing.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/aso', url: 'https://www.beghr.com/resources/payroll-glossary/aso', name: 'ASO (Administrative Services Organization) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'ASO (Administrative Services Organization)', description: 'Learn what an ASO is, how it differs from a PEO, and whether an administrative services organization is the right HR model for your business.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'ASO (Administrative Services Organization)', item: 'https://www.beghr.com/resources/payroll-glossary/aso' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
