import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employer of Record (EOR) | Payroll Glossary | BEG',
  description: 'Learn what an Employer of Record is, how it differs from a PEO and staffing agency, and when using an EOR makes sense.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/employer-of-record' },
  openGraph: {
    title: 'Employer of Record (EOR) | Payroll Glossary | BEG',
    description: 'Learn what an Employer of Record is, how it differs from a PEO and staffing agency, and when using an EOR makes sense.',
    url: 'https://www.beghr.com/resources/payroll-glossary/employer-of-record',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employer of Record (EOR) | Payroll Glossary | BEG',
    description: 'Learn what an Employer of Record is, how it differs from a PEO and staffing agency, and when using an EOR makes sense.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the difference between an EOR and a PEO?", "a": "An EOR fully assumes the employer role for specific workers or in specific locations, with the client retaining no employer status for those workers. A PEO co-employs the workers alongside the client, with both parties sharing employer responsibilities. PEOs typically serve a company's entire workforce in an ongoing relationship."}, {"q": "When does using an EOR make sense?", "a": "EORs are most useful when a company wants to hire workers in a jurisdiction where it has no legal entity and does not want to establish one, when international compliance complexity would otherwise require significant infrastructure, or when converting contractors to employees on an accelerated timeline."}, {"q": "Does an EOR eliminate all employer liability for the client?", "a": "It transfers most formal employer liability to the EOR, but not all risk. If the client exercises so much control over the workers that they are deemed true employees of the client despite the EOR arrangement, the client may still face liability. The distinction between EOR arrangement and direct employment is a fact-specific analysis."}];

export default function EmployerOfRecordPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Employer of Record (EOR)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A third-party organization that legally employs workers on behalf of a client company, handling payroll, tax withholding, benefits administration, and compliance, while the client directs the workers' day-to-day activities.</p>
        </div>

        <h2>Why an employer of record matters for employers</h2>
        <p>An Employer of Record is a legal entity that takes on the formal employment relationship with workers on behalf of a client company. The EOR becomes the employer on paper: it signs the employment contracts, manages payroll and tax withholding, provides benefits, and handles all regulatory compliance as the employer. The client company retains control over work assignments, performance management, and the day-to-day direction of the workers. EOR arrangements are most commonly used in three scenarios. First, international expansion: a U.S. company wants to hire workers in a foreign country without establishing a legal entity there. The EOR in that country employs the workers compliantly under local law while the U.S. company directs their work. Second, contractors converting to employees: a company wants to bring on a contractor as a full employee but is not yet ready to establish HR infrastructure in that location. Third, short-term or project-based hiring in unfamiliar jurisdictions with complex compliance requirements. EOR services differ from a Professional Employer Organization (PEO) in that PEOs co-employ workers alongside the client in an ongoing relationship typically spanning a full workforce, while EORs typically take on full employer status for specific workers or locations. EORs also differ from staffing agencies in that staffing agencies recruit and place workers as their own employees for temporary assignments, whereas EOR arrangements typically involve workers the client has already identified and wants to hire permanently. Costs for EOR services vary but typically include a flat per-employee-per-month fee or a percentage of payroll.</p>

        <h2>How BEG handles Employer of Record (EOR) for clients</h2>
        <p>BEG Managed Payroll is a managed payroll service, distinct from an EOR model. BEG processes payroll for your employees under your EIN, with you retaining full employer status and employment liability. This is the appropriate structure for most established employers. BEG offers full payroll compliance management at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the difference between an EOR and a PEO?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>An EOR fully assumes the employer role for specific workers or in specific locations, with the client retaining no employer status for those workers. A PEO co-employs the workers alongside the client, with both parties sharing employer responsibilities. PEOs typically serve a company's entire workforce in an ongoing relationship.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>When does using an EOR make sense?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>EORs are most useful when a company wants to hire workers in a jurisdiction where it has no legal entity and does not want to establish one, when international compliance complexity would otherwise require significant infrastructure, or when converting contractors to employees on an accelerated timeline.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does an EOR eliminate all employer liability for the client?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>It transfers most formal employer liability to the EOR, but not all risk. If the client exercises so much control over the workers that they are deemed true employees of the client despite the EOR arrangement, the client may still face liability. The distinction between EOR arrangement and direct employment is a fact-specific analysis.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/employer-of-record', url: 'https://www.beghr.com/resources/payroll-glossary/employer-of-record', name: 'Employer of Record (EOR) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Employer of Record (EOR)', description: 'Learn what an Employer of Record is, how it differs from a PEO and staffing agency, and when using an EOR makes sense.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Employer of Record (EOR)', item: 'https://www.beghr.com/resources/payroll-glossary/employer-of-record' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
