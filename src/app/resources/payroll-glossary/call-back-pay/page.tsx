import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call-Back Pay | Payroll Glossary | BEG',
  description: 'Learn what call-back pay is, when it is required, and how it affects overtime calculations under the FLSA.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/call-back-pay' },
  openGraph: {
    title: 'Call-Back Pay | Payroll Glossary | BEG',
    description: 'Learn what call-back pay is, when it is required, and how it affects overtime calculations under the FLSA.',
    url: 'https://www.beghr.com/resources/payroll-glossary/call-back-pay',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call-Back Pay | Payroll Glossary | BEG',
    description: 'Learn what call-back pay is, when it is required, and how it affects overtime calculations under the FLSA.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Is call-back travel time compensable?", "a": "Generally yes, if the employee is called back after going home. Travel from home to work is normally not compensable, but travel in response to an emergency call-back from home to the workplace is treated as hours worked under most interpretations."}, {"q": "Does an employer have to pay a minimum for a call-back?", "a": "No federal law requires a minimum call-back pay guarantee. However, state laws, union contracts, and employer policies may require minimum pay such as two or four hours regardless of actual time worked. Only the actual hours worked must be compensated under the FLSA."}, {"q": "How does call-back pay affect the regular rate of pay?", "a": "Call-back wages paid for actual hours worked are included in the regular rate of pay for overtime calculation purposes. If the employer pays a guaranteed minimum beyond actual hours, that premium portion may be excludable from the regular rate if it qualifies as a premium payment under FLSA Section 7(e)."}];

export default function CallBackPayPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Call-Back Pay?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Wages paid when an employee is required to return to work after their shift has ended and they have left the workplace, always counted as hours worked under the FLSA for overtime purposes.</p>
        </div>

        <h2>Why call-back pay matters for employers</h2>
        <p>Call-back pay arises when an employee has completed their shift, left work, and is then contacted and required to return. The FLSA treats all time spent on a call-back as compensable hours worked, starting from the moment the employee begins traveling to the workplace (if travel time is otherwise compensable) or from the moment they begin work upon return. Many employers establish a minimum number of call-back hours, such as two or four hours of guaranteed pay, to compensate employees for the inconvenience of the interruption regardless of how briefly they actually work. This minimum guarantee is a matter of employer policy and any applicable collective bargaining agreement, not an FLSA requirement. What is required is that all hours worked on the call-back are counted toward the workweek total for overtime purposes. If an employee has already worked 38 hours before the call-back and the call-back adds 3 hours, the employee has worked 41 hours for the week and is owed overtime on 1 hour. The call-back pay itself, if structured as a guaranteed minimum beyond actual hours worked, does not need to be included in the regular rate of pay calculation for overtime purposes if it meets the criteria for exclusion under FLSA Section 7(e). Hours spent on standby or on-call where the employee is substantially restricted in their personal activities may also be compensable, which is a separate analysis from call-back pay.</p>

        <h2>How BEG handles Call-Back Pay for clients</h2>
        <p>BEG Managed Payroll counts call-back hours correctly in the overtime calculation for each workweek. If your operation requires regular call-backs, BEG configures your payroll to track these accurately and ensures that overtime is computed correctly across all hours in the workweek. This is included in BEG's managed payroll service at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Is call-back travel time compensable?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Generally yes, if the employee is called back after going home. Travel from home to work is normally not compensable, but travel in response to an emergency call-back from home to the workplace is treated as hours worked under most interpretations.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does an employer have to pay a minimum for a call-back?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No federal law requires a minimum call-back pay guarantee. However, state laws, union contracts, and employer policies may require minimum pay such as two or four hours regardless of actual time worked. Only the actual hours worked must be compensated under the FLSA.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How does call-back pay affect the regular rate of pay?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Call-back wages paid for actual hours worked are included in the regular rate of pay for overtime calculation purposes. If the employer pays a guaranteed minimum beyond actual hours, that premium portion may be excludable from the regular rate if it qualifies as a premium payment under FLSA Section 7(e).</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/call-back-pay', url: 'https://www.beghr.com/resources/payroll-glossary/call-back-pay', name: 'Call-Back Pay | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Call-Back Pay', description: 'Learn what call-back pay is, when it is required, and how it affects overtime calculations under the FLSA.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Call-Back Pay', item: 'https://www.beghr.com/resources/payroll-glossary/call-back-pay' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
