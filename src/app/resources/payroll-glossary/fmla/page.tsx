import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMLA (Family and Medical Leave Act) | Payroll Glossary | BEG',
  description: 'Federal law requiring employers with 50+ employees to provide up to 12 weeks of unpaid, job-protected leave for qualifying family or medical reasons.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/fmla' },
  openGraph: { title: 'FMLA (Family and Medical Leave Act) | Payroll Glossary | BEG', description: 'Federal law requiring employers with 50+ employees to provide up to 12 weeks of unpaid, job-protected leave for qualifying family or medical reasons.', url: 'https://www.beghr.com/resources/payroll-glossary/fmla', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'FMLA (Family and Medical Leave Act) | Payroll Glossary | BEG', description: 'Federal law requiring employers with 50+ employees to provide up to 12 weeks of unpaid, job-protected leave for qualifying family or medical reasons.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does FMLA apply to small businesses?", a: "FMLA applies to private employers with 50 or more employees. Smaller employers are not covered by federal FMLA, though some states have leave laws with lower thresholds." },
  { q: "Is FMLA leave paid or unpaid?", a: "FMLA itself is unpaid, though employers may require or employees may elect to substitute accrued paid leave concurrently with FMLA leave." },
  { q: "Can an employer deny FMLA leave?", a: "Employers cannot deny leave to eligible employees for qualifying reasons. They can require proper certification and notice, but denial of valid FMLA leave is unlawful." },
];

export default function FmlaPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is FMLA (Family and Medical Leave Act)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>FMLA requires covered employers to provide up to 12 weeks of unpaid, job-protected leave per year for qualifying family or medical events.</p>
        </div>
        <h2>Why FMLA matters for employers</h2>
        <p>FMLA applies to private employers with 50 or more employees within a 75-mile radius, all public agencies, and all public and private elementary and secondary schools. Employees are eligible after 12 months of employment and at least 1,250 hours worked in the prior year.</p>
        <p>Qualifying reasons include the birth or adoption of a child, a serious health condition of the employee or a covered family member, qualifying military exigencies, or care for a covered servicemember. Leave can be taken all at once or intermittently.</p>
        <p>Employers must maintain group health benefits during FMLA leave and restore employees to the same or equivalent position upon return. Interfering with FMLA rights or retaliating against employees who exercise them exposes employers to significant liability.</p>
        <p>Tracking intermittent FMLA accurately is one of the most error-prone payroll tasks. Employers must designate qualifying leave in writing, track hours used against the 12-week bank, and coordinate with state leave laws that may provide additional protections. Many states have their own family and medical leave laws with lower employee thresholds or longer leave periods.</p>
        <h2>How BEG handles FMLA tracking for clients</h2>
        <p>BEG Managed Payroll coordinates FMLA tracking, leave designation notices, and benefit continuation as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/fmla', url: 'https://www.beghr.com/resources/payroll-glossary/fmla', name: 'FMLA (Family and Medical Leave Act) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'FMLA (Family and Medical Leave Act)', description: 'Federal law requiring employers with 50+ employees to provide up to 12 weeks of unpaid, job-protected leave for qualifying family or medical reasons.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'FMLA (Family and Medical Leave Act)', item: 'https://www.beghr.com/resources/payroll-glossary/fmla' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
