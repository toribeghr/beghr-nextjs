import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guaranteed Payment | Payroll Glossary | BEG',
  description: 'Fixed compensation paid to a partner in a partnership regardless of profitability, treated as self-employment income rather than W-2 wages.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/guaranteed-payment' },
  openGraph: { title: 'Guaranteed Payment | Payroll Glossary | BEG', description: 'Fixed compensation paid to a partner in a partnership regardless of profitability, treated as self-employment income rather than W-2 wages.', url: 'https://www.beghr.com/resources/payroll-glossary/guaranteed-payment', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Guaranteed Payment | Payroll Glossary | BEG', description: 'Fixed compensation paid to a partner in a partnership regardless of profitability, treated as self-employment income rather than W-2 wages.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Do partners receive W-2s for guaranteed payments?", a: "No. Partners in a partnership cannot be employees for federal tax purposes. Guaranteed payments are reported on Schedule K-1, not on a W-2." },
  { q: "Are guaranteed payments subject to self-employment tax?", a: "Yes. Guaranteed payments for services are subject to self-employment tax, which the partner pays on their individual return via Schedule SE." },
  { q: "How are guaranteed payments different from profit distributions?", a: "Guaranteed payments are fixed amounts paid regardless of profits and are taxable as SE income. Profit distributions are based on the partner's share of earnings and are generally not subject to SE tax." },
];

export default function GuaranteedPaymentPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Guaranteed Payment?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A guaranteed payment is fixed compensation paid to a partner regardless of partnership profits, taxable as self-employment income, not W-2 wages.</p>
        </div>
        <h2>Why guaranteed payments matter for employers</h2>
        <p>Guaranteed payments are amounts paid to partners in a partnership for services rendered or capital contributed, determined without regard to the partnership's income. They function economically like a salary but have different tax treatment.</p>
        <p>Unlike employee wages, guaranteed payments are not subject to FICA withholding or employer payroll tax matching. Instead, partners who receive guaranteed payments must pay self-employment (SE) tax on them - currently 15.3% on the first $168,600 (2024) and 2.9% above that, with an additional 0.9% Medicare surcharge above $200,000.</p>
        <p>The partnership deducts guaranteed payments as a business expense, reducing ordinary income for the remaining partners. The receiving partner reports them as ordinary income on Schedule E (Form 1040) and Schedule SE.</p>
        <p>Partners cannot be employees of their own partnership for federal tax purposes, so W-2s are never issued for guaranteed payments. However, limited partners who receive guaranteed payments only for capital (not services) may not owe SE tax on those amounts.</p>
        <p>LLCs taxed as partnerships follow the same rules. Members who receive guaranteed payments must track them separately from profit distributions, which are not subject to SE tax. Proper classification matters significantly for quarterly estimated tax planning.</p>
        <h2>How BEG advises clients on guaranteed payment payroll</h2>
        <p>BEG Managed Payroll helps partnership and LLC clients structure compensation correctly, distinguishing guaranteed payments from distributions as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/guaranteed-payment', url: 'https://www.beghr.com/resources/payroll-glossary/guaranteed-payment', name: 'Guaranteed Payment | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Guaranteed Payment', description: 'Fixed compensation paid to a partner in a partnership regardless of profitability, treated as self-employment income rather than W-2 wages.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Guaranteed Payment', item: 'https://www.beghr.com/resources/payroll-glossary/guaranteed-payment' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
