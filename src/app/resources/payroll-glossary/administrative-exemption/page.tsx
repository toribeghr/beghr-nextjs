import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Administrative Exemption | Payroll Glossary | BEG',
  description: 'Learn how the FLSA administrative exemption works, the salary and duties tests, and what misclassifying an employee costs.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/administrative-exemption' },
  openGraph: {
    title: 'Administrative Exemption | Payroll Glossary | BEG',
    description: 'Learn how the FLSA administrative exemption works, the salary and duties tests, and what misclassifying an employee costs.',
    url: 'https://beghr.com/resources/payroll-glossary/administrative-exemption',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Administrative Exemption | Payroll Glossary | BEG',
    description: 'Learn how the FLSA administrative exemption works, the salary and duties tests, and what misclassifying an employee costs.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is the minimum salary for the administrative exemption?", "a": "As of the current FLSA rule, the salary threshold is $684 per week ($35,568 per year). The DOL periodically updates this threshold, so verify the current rate before classifying."}, {"q": "What does discretion and independent judgment mean under the FLSA?", "a": "It means the employee compares and evaluates possible courses of action and makes a decision after considering the possibilities. It is more than applying technical skill or following established procedures. The employee must have genuine authority to make a consequential choice."}, {"q": "Can a part-time employee qualify for the administrative exemption?", "a": "The exemption requires a salary of at least $684 per week regardless of hours worked. If a part-time employee earns less than $684 per week, they cannot be classified as exempt under this test even if their duties otherwise qualify."}];

export default function AdministrativeExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Administrative Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An FLSA overtime exemption for employees whose primary duty is non-manual office or field work directly related to management or general business operations, with authority to exercise independent judgment, earning at least $684 per week.</p>
        </div>

        <h2>Why the administrative exemption matters for employers</h2>
        <p>Classifying an employee as exempt under the administrative exemption saves overtime costs but exposes the employer to significant liability if the classification is wrong. The exemption has two tests that must both be satisfied. First, the salary test: the employee must earn at least $684 per week ($35,568 annually) on a salary or fee basis. Second, the duties test: the employee's primary duty must be the performance of office or non-manual work directly related to the management or general business operations of the employer or its customers, and that primary duty must include the exercise of discretion and independent judgment with respect to matters of significance. The key distinction is between work that implements policy and work that decides policy. An employee who applies established procedures is not exempt. An employee who interprets guidelines, makes decisions that bind the company, and resolves significant problems without routine supervision is more likely exempt. Examples of positions that often qualify: HR generalist with authority to resolve employee complaints, financial analyst who recommends investment strategy, compliance officer who interprets regulatory requirements. Examples that often do not qualify: customer service rep following scripts, bookkeeper entering transactions, administrative assistant scheduling meetings. The DOL applies a fact-specific analysis, and courts often find that employers have misclassified employees. Misclassification liability includes up to three years of unpaid overtime plus liquidated damages equal to the same amount, plus attorneys fees.</p>

        <h2>How BEG handles Administrative Exemption for clients</h2>
        <p>BEG Managed Payroll processes exempt and non-exempt employees correctly and maintains the records required for FLSA compliance. If you are unsure whether a role qualifies for the administrative exemption, BEG recommends consulting employment counsel before classifying. BEG ensures that whatever classification is assigned is applied correctly in payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the minimum salary for the administrative exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>As of the current FLSA rule, the salary threshold is $684 per week ($35,568 per year). The DOL periodically updates this threshold, so verify the current rate before classifying.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What does discretion and independent judgment mean under the FLSA?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>It means the employee compares and evaluates possible courses of action and makes a decision after considering the possibilities. It is more than applying technical skill or following established procedures. The employee must have genuine authority to make a consequential choice.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can a part-time employee qualify for the administrative exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The exemption requires a salary of at least $684 per week regardless of hours worked. If a part-time employee earns less than $684 per week, they cannot be classified as exempt under this test even if their duties otherwise qualify.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/administrative-exemption', url: 'https://beghr.com/resources/payroll-glossary/administrative-exemption', name: 'Administrative Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Administrative Exemption', description: 'Learn how the FLSA administrative exemption works, the salary and duties tests, and what misclassifying an employee costs.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Administrative Exemption', item: 'https://beghr.com/resources/payroll-glossary/administrative-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
