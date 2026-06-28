import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PEPM (Per Employee Per Month) | Payroll Glossary | BEG',
  description: 'Pricing model for managed payroll and HR services where fees are charged per active employee per month regardless of pay frequency.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/pepm' },
  openGraph: { title: 'PEPM (Per Employee Per Month) | Payroll Glossary | BEG', description: 'Pricing model for managed payroll and HR services where fees are charged per active employee per month regardless of pay frequency.', url: 'https://beghr.com/resources/payroll-glossary/pepm', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'PEPM (Per Employee Per Month) | Payroll Glossary | BEG', description: 'Pricing model for managed payroll and HR services where fees are charged per active employee per month regardless of pay frequency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What does PEPM stand for?", a: "PEPM stands for Per Employee Per Month. It is a pricing unit used by managed payroll, HR software, and benefits administration providers to charge a consistent amount per active employee regardless of pay frequency or payroll run count." },
  { q: "What is a typical PEPM rate for managed payroll?", a: "PEPM rates for managed payroll vary by provider and scope. Basic processing-only services may run $6-$15 PEPM. Fully managed services including all filings and compliance typically run $25-$80 PEPM depending on employee count and services included." },
  { q: "Is PEPM better than per-run pricing?", a: "For most employers, PEPM is more predictable and often lower total cost than per-run pricing once add-ons are factored in. Per-run pricing can be cheaper for very small employers who run payroll infrequently, but becomes expensive for bi-weekly or weekly payroll schedules." },
];

export default function PepmPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is PEPM (Per Employee Per Month)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>PEPM is a pricing model that charges a fixed fee per active employee per month, making payroll and HR service costs predictable and scalable.</p>
        </div>
        <h2>Why PEPM pricing matters for employers</h2>
        <p>Per employee per month pricing has become the standard for managed payroll, HR software, and benefits administration services. PEPM rates make costs predictable, easy to budget, and directly tied to headcount - as the company grows, costs scale proportionally rather than jumping with activity.</p>
        <p>Contrast PEPM with per-payroll-run pricing, where each payroll run costs a fixed fee plus a per-check charge. For employers who run bi-weekly payroll (26 runs/year), per-run pricing often totals more than equivalent PEPM pricing, especially when add-ons for direct deposit, tax filings, and W-2s are included.</p>
        <p>When evaluating PEPM quotes, the key question is what is included. Some providers quote a low PEPM for basic processing but charge additional fees for: quarterly tax filings, W-2 production, off-cycle payrolls, direct deposit, new employee setup, year-end services, and state tax registration. Always request an all-in PEPM that covers all standard services.</p>
        <p>BEG Managed Payroll charges $25 PEPM when working in the client's existing payroll system or $45 PEPM when using BEG's iSolved account with full HCM capabilities. Both rates are all-inclusive with no add-on fees for standard services.</p>
        <p>PEPM rates typically decrease with scale. An employer with 10 employees pays a higher PEPM than one with 200 employees. When requesting quotes, provide accurate headcount and ask about the pricing tier structure so you understand how costs will change as you grow.</p>
        <h2>BEG Managed Payroll PEPM pricing</h2>
        <p>BEG Managed Payroll charges $25 PEPM using the client's existing system or $45 PEPM on BEG's iSolved platform - both fully managed, all-inclusive, with no hidden add-ons. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>See what is included</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/pepm', url: 'https://beghr.com/resources/payroll-glossary/pepm', name: 'PEPM (Per Employee Per Month) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'PEPM (Per Employee Per Month)', description: 'Pricing model for managed payroll and HR services where fees are charged per active employee per month regardless of pay frequency.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'PEPM (Per Employee Per Month)', item: 'https://beghr.com/resources/payroll-glossary/pepm' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
