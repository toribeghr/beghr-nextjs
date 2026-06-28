import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADA Accommodation | Payroll Glossary | BEG',
  description: 'Understand ADA accommodation requirements, what qualifies as reasonable, and the payroll and HR implications of accommodation decisions.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/ada-accommodation' },
  openGraph: {
    title: 'ADA Accommodation | Payroll Glossary | BEG',
    description: 'Understand ADA accommodation requirements, what qualifies as reasonable, and the payroll and HR implications of accommodation decisions.',
    url: 'https://beghr.com/resources/payroll-glossary/ada-accommodation',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADA Accommodation | Payroll Glossary | BEG',
    description: 'Understand ADA accommodation requirements, what qualifies as reasonable, and the payroll and HR implications of accommodation decisions.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Does ADA apply to small businesses?", "a": "ADA Title I, which covers employment, applies to employers with 15 or more employees. Smaller employers may still be subject to state disability discrimination laws, many of which have lower employee thresholds."}, {"q": "Can an employer deny an accommodation because it is too expensive?", "a": "Yes, if the cost creates an undue hardship. The analysis weighs the cost against the employer's size, financial resources, and the nature of the operation. What is an undue hardship for a 20-person company may not be for a 500-person company."}, {"q": "Is FMLA leave the same as an ADA accommodation?", "a": "No. FMLA and ADA are separate laws with different requirements. A qualifying condition may trigger both. An employee may exhaust FMLA leave and still be entitled to additional leave as an ADA accommodation if it would not cause undue hardship."}];

export default function AdaAccommodationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is ADA Accommodation?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A reasonable workplace adjustment an employer must provide to a qualified employee with a disability under the Americans with Disabilities Act, unless doing so would cause undue hardship.</p>
        </div>

        <h2>Why ADA accommodation matters for employers</h2>
        <p>The Americans with Disabilities Act requires employers with 15 or more employees to engage in an interactive process with any employee who has a physical or mental impairment that substantially limits a major life activity. A reasonable accommodation is any modification to a job, work environment, or the way work is performed that allows a qualified person with a disability to perform the essential functions of the job. Common accommodations include modified schedules, remote work arrangements, reassignment to a vacant position, accessible equipment, and leave beyond what FMLA requires. The key phrase is 'reasonable' accommodation, not 'perfect' accommodation. Employers are not required to eliminate essential job functions, create new positions, or incur costs so significant they constitute undue hardship. Undue hardship considers the nature and cost of the accommodation relative to the employer's overall financial resources. Where ADA intersects with payroll: modified schedules may affect overtime calculations, particularly if the accommodated schedule shifts hours into a different workweek. Reduced hours accommodations raise questions about benefit eligibility thresholds. Reassignments may trigger pay-rate changes that require careful documentation. Employers who fail to provide reasonable accommodation or who retaliate against an employee for requesting one face EEOC complaints, civil litigation, and back-pay liability. Documenting the interactive process thoroughly is essential.</p>

        <h2>How BEG handles ADA Accommodation for clients</h2>
        <p>BEG Managed Payroll ensures that schedule modifications, pay-rate changes, and leave adjustments resulting from ADA accommodations are processed correctly in every pay cycle. If a reduced-hours accommodation changes an employee's benefit eligibility status, BEG flags that during payroll processing so your HR team can act. BEG handles these payroll-side details at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does ADA apply to small businesses?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>ADA Title I, which covers employment, applies to employers with 15 or more employees. Smaller employers may still be subject to state disability discrimination laws, many of which have lower employee thresholds.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer deny an accommodation because it is too expensive?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes, if the cost creates an undue hardship. The analysis weighs the cost against the employer's size, financial resources, and the nature of the operation. What is an undue hardship for a 20-person company may not be for a 500-person company.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Is FMLA leave the same as an ADA accommodation?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. FMLA and ADA are separate laws with different requirements. A qualifying condition may trigger both. An employee may exhaust FMLA leave and still be entitled to additional leave as an ADA accommodation if it would not cause undue hardship.</p>
        </div>

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. Book a 15-minute discovery call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" style={{ background: 'linear-gradient(135deg,#ECAC60,#d4924a)', color: '#000', fontWeight: '700', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>Book a Free Discovery Call</a>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/ada-accommodation', url: 'https://beghr.com/resources/payroll-glossary/ada-accommodation', name: 'ADA Accommodation | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'ADA Accommodation', description: 'Understand ADA accommodation requirements, what qualifies as reasonable, and the payroll and HR implications of accommodation decisions.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'ADA Accommodation', item: 'https://beghr.com/resources/payroll-glossary/ada-accommodation' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
