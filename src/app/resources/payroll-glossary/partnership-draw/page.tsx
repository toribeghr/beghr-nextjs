import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Draw | Payroll Glossary | BEG',
  description: 'Cash distributions taken by partners from a partnership, not treated as wages, not subject to payroll withholding, but included in self-employment income.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/partnership-draw' },
  openGraph: { title: 'Partnership Draw | Payroll Glossary | BEG', description: 'Cash distributions taken by partners from a partnership, not treated as wages, not subject to payroll withholding, but included in self-employment income.', url: 'https://www.beghr.com/resources/payroll-glossary/partnership-draw', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Partnership Draw | Payroll Glossary | BEG', description: 'Cash distributions taken by partners from a partnership, not treated as wages, not subject to payroll withholding, but included in self-employment income.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Are partnership draws subject to payroll taxes?", a: "No. Partner draws are not W-2 wages and are not subject to payroll tax withholding. However, partners owe self-employment tax on their share of partnership income and must pay quarterly estimated taxes." },
  { q: "Can a general partner also be a W-2 employee?", a: "Generally no, for federal income tax purposes. A general partner cannot simultaneously be an employee of the same partnership. Members of LLCs may have more flexibility depending on their level of activity and state law." },
  { q: "How do partners pay taxes if no tax is withheld from draws?", a: "Partners must make quarterly estimated tax payments to cover income tax and self-employment tax. Underpayment of estimated taxes results in penalties assessed on the individual return." },
];

export default function PartnershipDrawPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Partnership Draw?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A partnership draw is a cash distribution to a partner, not subject to payroll withholding, but taxable as self-employment income on the partner's individual return.</p>
        </div>
        <h2>Why partnership draws matter for payroll</h2>
        <p>Partnership draws are distributions of partnership funds to partners based on their ownership interest or partnership agreement terms. Unlike guaranteed payments, draws are not a fixed obligation of the partnership - they depend on available cash and partner agreement. Neither draws nor profit distributions are W-2 wages.</p>
        <p>Partners cannot be employees of their own partnership for federal income tax purposes, which means no payroll taxes are withheld from draws. Instead, partners pay estimated taxes quarterly on their share of partnership income, including any guaranteed payments and their distributive share of profits.</p>
        <p>Self-employment tax applies to a general partner's distributive share of ordinary business income plus any guaranteed payments received. Limited partners generally owe SE tax only on guaranteed payments, not on passive investment income distributions.</p>
        <p>The absence of payroll withholding means partner draws require disciplined estimated tax planning. Many partners underpay estimated taxes by treating draws as take-home pay without reserving for self-employment tax (15.3% on net SE income) and income tax (depending on bracket).</p>
        <p>For payroll providers, draws to partners should be coded separately from W-2 wages and excluded from payroll tax reporting. When a business transitions from a partnership to an S-corporation, owners who were taking draws must begin taking reasonable compensation as W-2 salary before taking distributions.</p>
        <h2>How BEG helps partnership clients manage payroll correctly</h2>
        <p>BEG Managed Payroll helps partnership and LLC clients correctly code partner draws, distinguish them from W-2 employee wages, and coordinate with estimated tax planning as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/partnership-draw', url: 'https://www.beghr.com/resources/payroll-glossary/partnership-draw', name: 'Partnership Draw | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Partnership Draw', description: 'Cash distributions taken by partners from a partnership, not treated as wages, not subject to payroll withholding, but included in self-employment income.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Partnership Draw', item: 'https://www.beghr.com/resources/payroll-glossary/partnership-draw' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
