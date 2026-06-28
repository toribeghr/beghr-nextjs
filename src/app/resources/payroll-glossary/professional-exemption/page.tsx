import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Exemption | Payroll Glossary | BEG',
  description: 'FLSA overtime exemption for employees in learned or creative professions who meet a salary threshold of at least $684 per week.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/professional-exemption' },
  openGraph: { title: 'Professional Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for employees in learned or creative professions who meet a salary threshold of at least $684 per week.', url: 'https://beghr.com/resources/payroll-glossary/professional-exemption', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Professional Exemption | Payroll Glossary | BEG', description: 'FLSA overtime exemption for employees in learned or creative professions who meet a salary threshold of at least $684 per week.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does any employee with a college degree qualify as a learned professional?", a: "No. The learned professional exemption requires advanced knowledge in a specific field of science or learning, typically acquired through a prolonged course of specialized intellectual instruction. A general degree does not qualify without the corresponding professional knowledge and duties." },
  { q: "What is the salary requirement for the professional exemption?", a: "The current salary threshold is $684 per week ($35,568 annually). This threshold applies to both learned and creative professionals and must be paid on a salary or fee basis." },
  { q: "Are registered nurses exempt under the professional exemption?", a: "It depends. RNs with four-year nursing degrees and autonomous professional practice typically qualify. LPNs and other employees performing routine medical tasks under close supervision generally do not meet the learned professional duties test." },
];

export default function ProfessionalExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Professional Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The FLSA professional exemption covers learned professionals (doctors, lawyers, CPAs, engineers) and creative professionals who earn at least $684 per week and exercise significant discretion.</p>
        </div>
        <h2>Why the professional exemption matters for employers</h2>
        <p>The professional exemption is one of the white-collar exemptions under the FLSA that exempts qualifying employees from overtime requirements. It covers two categories: learned professionals and creative professionals.</p>
        <p>Learned professionals must: (1) have a primary duty of work requiring advanced knowledge; (2) possess knowledge in a field of science or learning; and (3) have acquired the advanced knowledge through a prolonged course of specialized intellectual instruction. Classic examples include lawyers, doctors, dentists, nurses, pharmacists, registered nurses, teachers, architects, CPAs, and engineers. The advanced knowledge must typically be acquired through formal education, not on-the-job training.</p>
        <p>Creative professionals must have a primary duty requiring invention, imagination, originality, or talent in a recognized field of artistic or creative endeavor - such as musicians, composers, artists, writers, and actors. The creative professional must exercise significant creative latitude, not simply execute established routines.</p>
        <p>Both categories require payment on a salary or fee basis of at least $684 per week ($35,568 annually) as of the 2024 DOL threshold. The DOL has issued rules attempting to raise this threshold that have faced litigation.</p>
        <p>A common misapplication is classifying all college-educated employees as learned professionals. The exemption requires advanced knowledge in a specific field of science or learning, not just a college degree. A marketing coordinator with a business degree performing routine tasks does not qualify. An attorney or CPA performing professional-level work does.</p>
        <h2>How BEG helps clients apply the professional exemption correctly</h2>
        <p>BEG Managed Payroll tracks salary levels, documents exemption bases, and flags potential misclassification risks as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/professional-exemption', url: 'https://beghr.com/resources/payroll-glossary/professional-exemption', name: 'Professional Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Professional Exemption', description: 'FLSA overtime exemption for employees in learned or creative professions who meet a salary threshold of at least $684 per week.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Professional Exemption', item: 'https://beghr.com/resources/payroll-glossary/professional-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
