import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joint Employer | Payroll Glossary | BEG',
  description: 'Legal status where two or more entities share control over an employee, creating shared FLSA and other employment law liability.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/joint-employer' },
  openGraph: { title: 'Joint Employer | Payroll Glossary | BEG', description: 'Legal status where two or more entities share control over an employee, creating shared FLSA and other employment law liability.', url: 'https://www.beghr.com/resources/payroll-glossary/joint-employer', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Joint Employer | Payroll Glossary | BEG', description: 'Legal status where two or more entities share control over an employee, creating shared FLSA and other employment law liability.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does using a staffing agency protect a business from FLSA liability?", a: "Not automatically. If the business exercises sufficient control over staffed workers, it may be a joint employer with the agency and equally liable for wage and hour violations." },
  { q: "How does joint employment affect overtime calculations?", a: "All hours worked for joint employers in the same workweek are combined. If the total exceeds 40, the overtime premium must be paid. Joint employers are generally responsible for overtime in proportion to the hours each supervised." },
  { q: "Are franchisors automatically joint employers of franchisee employees?", a: "Not automatically. Whether a franchisor is a joint employer depends on how much control it exercises over day-to-day employment decisions at the franchisee level. This is an active and evolving area of law." },
];

export default function JointEmployerPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Joint Employer?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Joint employer status exists when two or more businesses share enough control over an employee that both are legally responsible for wage, hour, and labor law compliance.</p>
        </div>
        <h2>Why joint employer status matters for employers</h2>
        <p>Joint employer liability is one of the most significant risk areas for businesses that use staffing agencies, contractors, franchisees, or labor intermediaries. When two entities are found to be joint employers, both are liable for FLSA minimum wage and overtime violations - meaning the primary employer cannot avoid liability by pointing to a staffing firm.</p>
        <p>The DOL applies a horizontal joint employer test (two businesses sharing an employee) and a vertical joint employer test (a business using a labor provider). For vertical joint employment, the DOL examines whether the potential joint employer: (1) hires or fires the employee, (2) supervises and controls schedules or working conditions, (3) determines the rate and method of pay, and (4) maintains the employment records.</p>
        <p>The DOL's 2024 final rule attempted to restore a broader joint employer test, but courts have continued to wrestle with the appropriate standard. The NLRB applies a separate test for collective bargaining purposes that has also been subject to regulatory changes.</p>
        <p>For payroll purposes, joint employers must ensure that the employee's combined hours across all joint employers are counted for FLSA overtime purposes. If the employee works 25 hours for one joint employer and 20 for another in the same workweek, the employee has worked 45 hours and 5 must be paid at the overtime rate.</p>
        <p>Staffing agency arrangements, professional employer organizations, and franchise relationships are all frequent contexts for joint employer analysis.</p>
        <h2>How BEG helps clients manage joint employer risk</h2>
        <p>BEG Managed Payroll helps clients document control structures and track hours correctly to minimize joint employer exposure as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/joint-employer', url: 'https://www.beghr.com/resources/payroll-glossary/joint-employer', name: 'Joint Employer | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Joint Employer', description: 'Legal status where two or more entities share control over an employee, creating shared FLSA and other employment law liability.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Joint Employer', item: 'https://www.beghr.com/resources/payroll-glossary/joint-employer' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
