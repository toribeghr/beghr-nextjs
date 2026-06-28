import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EFTPS | Payroll Glossary | BEG',
  description: 'Learn what EFTPS is, how to enroll, deposit deadlines, and what happens if you miss an EFTPS payment.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/eftps' },
  openGraph: {
    title: 'EFTPS | Payroll Glossary | BEG',
    description: 'Learn what EFTPS is, how to enroll, deposit deadlines, and what happens if you miss an EFTPS payment.',
    url: 'https://beghr.com/resources/payroll-glossary/eftps',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EFTPS | Payroll Glossary | BEG',
    description: 'Learn what EFTPS is, how to enroll, deposit deadlines, and what happens if you miss an EFTPS payment.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Is EFTPS free to use?", "a": "Yes. EFTPS is a free service provided by the U.S. Treasury. There are no fees for enrolling or making tax deposits through the system."}, {"q": "What if I miss an EFTPS payment?", "a": "A missed or late deposit triggers a failure-to-deposit penalty ranging from 2% for deposits 1-5 days late up to 15% for amounts unpaid after IRS notices. Interest also accrues on the unpaid amount. Make the deposit as soon as possible to minimize the penalty."}, {"q": "Can my payroll service make EFTPS deposits on my behalf?", "a": "Yes. Payroll service providers can be authorized to make deposits using your EIN. However, the employer remains legally responsible for ensuring deposits are made correctly and on time. You should confirm your provider is enrolled and depositing on your behalf, not under their own EIN."}];

export default function EftpsPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is EFTPS?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The Electronic Federal Tax Payment System, a free IRS service that employers must use to make federal payroll tax deposits, including 941 deposits for income tax withheld, Social Security, and Medicare.</p>
        </div>

        <h2>Why EFTPS matters for employers</h2>
        <p>The Electronic Federal Tax Payment System is the IRS-mandated electronic payment platform for all federal business tax deposits. Employers must use EFTPS to deposit the taxes reported on Form 941 (federal income tax withholding, Social Security, and Medicare), Form 940 (FUTA), and other federal business taxes. Paper checks are not an accepted method for payroll tax deposits. EFTPS is free to use and is operated by the U.S. Department of the Treasury through a contract with financial services providers. To enroll, employers go to eftps.gov, provide their Employer Identification Number, bank routing and account number, and business address. After enrollment, the IRS mails a PIN to the address on file, which is used alongside the EIN and password to authenticate. Deposits can be scheduled in advance up to 365 days out, and the system confirms each payment with a confirmation number that should be retained. The deposit must be scheduled to settle in the IRS's account by the due date based on the employer's monthly or semi-weekly deposit schedule. If the due date falls on a Saturday, Sunday, or federal holiday, the deposit is due the next business day. Many payroll service providers, including managed payroll services, enroll in EFTPS and make deposits on behalf of their clients using the employer's EIN. The employer should confirm that their payroll provider is making deposits on time and retain confirmation numbers. If a deposit is late, a failure-to-deposit penalty of 2% to 15% applies depending on how late, in addition to interest on the unpaid amount.</p>

        <h2>How BEG handles EFTPS for clients</h2>
        <p>BEG Managed Payroll makes all federal tax deposits through EFTPS under each client's EIN on the correct schedule. BEG retains confirmation numbers for every deposit and provides clients with deposit records on request. Correct, on-time EFTPS deposits are a core deliverable of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Is EFTPS free to use?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. EFTPS is a free service provided by the U.S. Treasury. There are no fees for enrolling or making tax deposits through the system.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What if I miss an EFTPS payment?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A missed or late deposit triggers a failure-to-deposit penalty ranging from 2% for deposits 1-5 days late up to 15% for amounts unpaid after IRS notices. Interest also accrues on the unpaid amount. Make the deposit as soon as possible to minimize the penalty.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can my payroll service make EFTPS deposits on my behalf?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. Payroll service providers can be authorized to make deposits using your EIN. However, the employer remains legally responsible for ensuring deposits are made correctly and on time. You should confirm your provider is enrolled and depositing on your behalf, not under their own EIN.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/eftps', url: 'https://beghr.com/resources/payroll-glossary/eftps', name: 'EFTPS | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'EFTPS', description: 'Learn what EFTPS is, how to enroll, deposit deadlines, and what happens if you miss an EFTPS payment.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'EFTPS', item: 'https://beghr.com/resources/payroll-glossary/eftps' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
