import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Form I-9 | Payroll Glossary | BEG',
  description: 'Learn how to complete Form I-9, what documents are acceptable, the 3-day deadline, and penalties for I-9 violations.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/form-i9' },
  openGraph: {
    title: 'Form I-9 | Payroll Glossary | BEG',
    description: 'Learn how to complete Form I-9, what documents are acceptable, the 3-day deadline, and penalties for I-9 violations.',
    url: 'https://www.beghr.com/resources/payroll-glossary/form-i9',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form I-9 | Payroll Glossary | BEG',
    description: 'Learn how to complete Form I-9, what documents are acceptable, the 3-day deadline, and penalties for I-9 violations.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the deadline to complete the I-9 after a new hire starts?", "a": "Section 1 must be completed by the employee on or before their first day of work. Section 2 must be completed by the employer within 3 business days of the employee's first day of employment. For employees hired for 3 days or fewer, both sections must be completed by the end of the first day."}, {"q": "Can employers accept copies of I-9 documents instead of originals?", "a": "No. Employers must examine original documents in person. Copies are not acceptable for Section 2 completion. An exception applies when using authorized remote verification procedures through E-Verify's remote hire feature or similar authorized programs."}, {"q": "What are the penalties for I-9 paperwork violations?", "a": "Civil fines for technical I-9 paperwork errors range from $272 to $2,701 per form, depending on whether it is a first offense and the employer's good faith. Knowingly employing unauthorized workers carries fines from $698 to $27,018 per unauthorized employee, with higher penalties for repeat violations."}];

export default function FormI9Page() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Form I-9?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The federal employment eligibility verification form that employers must complete for every new hire within 3 business days of the employee's start date, confirming the employee's identity and authorization to work in the United States.</p>
        </div>

        <h2>Why Form I-9 matters for employers</h2>
        <p>Every employer in the United States must complete Form I-9 for every employee hired after November 6, 1986, regardless of citizenship or immigration status. The I-9 has two sections. Section 1 is completed by the employee on or before the first day of employment. The employee certifies their identity and work authorization status, which falls into one of four categories: U.S. citizen, noncitizen national, lawful permanent resident, or alien authorized to work. Section 2 is completed by the employer or the employer's authorized representative within three business days of the employee's first day of work. The employer examines original documents (not copies) presented by the employee from the acceptable document lists and records the document information. List A documents establish both identity and employment authorization (passport, green card, employment authorization document). List B documents establish identity only (state ID, driver's license). List C documents establish employment authorization only (Social Security card, birth certificate). The employee may choose any combination of one List A document or one List B plus one List C. Employers must not specify which documents the employee provides within the allowable choices, as doing so is discrimination. I-9s must be retained for three years from the date of hire or one year after the date of termination, whichever is later. ICE audits can result in civil fines of $272 to $2,701 per I-9 violation for paperwork errors, and $698 to $27,018 per employee for knowingly hiring unauthorized workers, plus potential debarment from federal contracts.</p>

        <h2>How BEG handles Form I-9 for clients</h2>
        <p>BEG Managed Payroll integrates new hire I-9 completion into the onboarding workflow, tracking the three-business-day deadline and maintaining I-9 records according to retention requirements. BEG flags upcoming I-9 re-verification deadlines for employees with temporary work authorization. I-9 compliance support is part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the deadline to complete the I-9 after a new hire starts?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Section 1 must be completed by the employee on or before their first day of work. Section 2 must be completed by the employer within 3 business days of the employee's first day of employment. For employees hired for 3 days or fewer, both sections must be completed by the end of the first day.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can employers accept copies of I-9 documents instead of originals?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Employers must examine original documents in person. Copies are not acceptable for Section 2 completion. An exception applies when using authorized remote verification procedures through E-Verify's remote hire feature or similar authorized programs.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What are the penalties for I-9 paperwork violations?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Civil fines for technical I-9 paperwork errors range from $272 to $2,701 per form, depending on whether it is a first offense and the employer's good faith. Knowingly employing unauthorized workers carries fines from $698 to $27,018 per unauthorized employee, with higher penalties for repeat violations.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/form-i9', url: 'https://www.beghr.com/resources/payroll-glossary/form-i9', name: 'Form I-9 | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Form I-9', description: 'Learn how to complete Form I-9, what documents are acceptable, the 3-day deadline, and penalties for I-9 violations.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Form I-9', item: 'https://www.beghr.com/resources/payroll-glossary/form-i9' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
