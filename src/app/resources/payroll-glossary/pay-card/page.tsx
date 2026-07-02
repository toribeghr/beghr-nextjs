import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pay Card (Payroll Card) | Payroll Glossary | BEG',
  description: 'Prepaid debit card used to pay employees without bank accounts, subject to state laws on fees and mandatory employee choice requirements.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/pay-card' },
  openGraph: { title: 'Pay Card (Payroll Card) | Payroll Glossary | BEG', description: 'Prepaid debit card used to pay employees without bank accounts, subject to state laws on fees and mandatory employee choice requirements.', url: 'https://www.beghr.com/resources/payroll-glossary/pay-card', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Pay Card (Payroll Card) | Payroll Glossary | BEG', description: 'Prepaid debit card used to pay employees without bank accounts, subject to state laws on fees and mandatory employee choice requirements.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Can employers require employees to use pay cards?", a: "No. Federal guidance and most state laws require that employees be given a choice of payment method. Pay cards cannot be the sole option if an employee prefers direct deposit or paper check." },
  { q: "Are pay card fees regulated?", a: "Yes. State laws vary widely. Many states prohibit fees for at least one free ATM withdrawal per pay period, require no fees for point-of-sale purchases, and restrict inactivity fees. Employers must select pay card programs that comply with each applicable state's rules." },
  { q: "What protections do employees have against unauthorized pay card charges?", a: "The Electronic Fund Transfer Act provides pay card holders with the same error resolution and liability limits as bank account holders. Employees can dispute unauthorized transactions and the card issuer must investigate within defined timelines." },
];

export default function PayCardPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Pay Card (Payroll Card)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A pay card is a reloadable prepaid debit card used to deliver wages to employees who do not have bank accounts, subject to federal and state consumer protection rules.</p>
        </div>
        <h2>Why pay cards matter for employers</h2>
        <p>Pay cards (also called payroll cards) allow employers to deliver wages electronically to employees who do not have or choose not to use a bank account for direct deposit. Wages are loaded onto the card on payday, and employees can use the card for purchases, ATM withdrawals, and bill payments like any debit card.</p>
        <p>Pay cards can benefit both employers and employees. Employers eliminate the cost and risk of paper checks. Employees avoid check-cashing fees and get immediate access to funds on payday. For employees without traditional banking relationships, pay cards provide access to the electronic payment system.</p>
        <p>However, federal and state laws impose strict requirements on pay card programs. The federal Electronic Fund Transfer Act (EFTA) applies to payroll cards and provides protections including error resolution rights and liability limits for unauthorized transactions. The Consumer Financial Protection Bureau oversees payroll card compliance.</p>
        <p>Most states have enacted specific payroll card laws addressing: (1) employee choice - employees cannot be required to receive wages via pay card if they prefer direct deposit or paper check; (2) fee restrictions - states limit or prohibit certain fees such as inactivity fees, point-of-sale fees, and first ATM withdrawal fees; (3) disclosure requirements - fee schedules must be disclosed before enrollment.</p>
        <p>Employers who implement pay card programs must ensure employees voluntarily consent, are provided a fee disclosure document, can switch payment methods without penalty, and have access to a free ATM withdrawal at least once per pay period in many states.</p>
        <h2>How BEG handles pay card programs for clients</h2>
        <p>BEG Managed Payroll sets up and manages pay card programs compliant with state fee and choice requirements as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/pay-card', url: 'https://www.beghr.com/resources/payroll-glossary/pay-card', name: 'Pay Card (Payroll Card) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Pay Card (Payroll Card)', description: 'Prepaid debit card used to pay employees without bank accounts, subject to state laws on fees and mandatory employee choice requirements.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Pay Card (Payroll Card)', item: 'https://www.beghr.com/resources/payroll-glossary/pay-card' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
