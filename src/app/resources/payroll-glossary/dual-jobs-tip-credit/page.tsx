import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dual Jobs (Tip Credit) | Payroll Glossary | BEG',
  description: 'Learn how the FLSA dual jobs rule limits tip credit for non-tipped duties, and what side work thresholds mean for restaurant and hospitality employers.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/dual-jobs-tip-credit' },
  openGraph: {
    title: 'Dual Jobs (Tip Credit) | Payroll Glossary | BEG',
    description: 'Learn how the FLSA dual jobs rule limits tip credit for non-tipped duties, and what side work thresholds mean for restaurant and hospitality employers.',
    url: 'https://www.beghr.com/resources/payroll-glossary/dual-jobs-tip-credit',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dual Jobs (Tip Credit) | Payroll Glossary | BEG',
    description: 'Learn how the FLSA dual jobs rule limits tip credit for non-tipped duties, and what side work thresholds mean for restaurant and hospitality employers.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "How much side work can a tipped employee do before the tip credit is lost?", "a": "The DOL has not set a fixed percentage, but its guidance cautions against substantial time in non-tipped work. Many courts and practitioners have used 20% of the workweek as a practical benchmark for incidental non-tipped work beyond which the tip credit may be challenged."}, {"q": "What is the federal tipped minimum wage?", "a": "The federal tipped minimum wage (cash wage) is $2.13 per hour. Employers must ensure that this cash wage plus the employee's actual tips equals at least $7.25 per hour for all hours worked in the workweek. If it does not, the employer must pay the difference."}, {"q": "Do all states allow tip credits?", "a": "No. Several states, including California, Oregon, Washington, Nevada, Minnesota, and Alaska, prohibit the tip credit entirely. In those states, tipped employees must be paid the full state minimum wage regardless of tips received."}];

export default function DualJobsTipCreditPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Dual Jobs (Tip Credit)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An FLSA rule that prohibits employers from taking the tip credit for hours a tipped employee spends performing non-tipped duties that are not incidental to tipped work, requiring full minimum wage for those hours.</p>
        </div>

        <h2>Why the dual jobs rule matters for employers</h2>
        <p>The FLSA tip credit allows employers to pay tipped employees as little as $2.13 per hour in federal cash wages, with the employee's tips expected to cover the difference to the $7.25 federal minimum wage. The dual jobs rule creates an important limitation on that credit. When a tipped employee is assigned to perform work that does not generate tips and is not incidental to their tipped occupation, the employer cannot take the tip credit for those hours. The DOL distinguishes between two categories of non-tipped work for tipped employees. The first is work that is incidental to the tipped occupation and performed contemporaneously with or for a reasonable time before or after tipped work, such as a server rolling silverware or stocking condiments. This work is part of the tipped occupation and the tip credit applies. The second is work that is not incidental to the tipped occupation, such as the same server spending substantial time cleaning bathrooms, washing dishes, or doing maintenance. The employer cannot take the tip credit for that time, and the employee must receive full minimum wage for those hours. The DOL's guidance has evolved through court decisions and agency rules. The current framework generally looks at whether the non-tipped work exceeds a substantial portion of the employee's time in ways that go beyond supporting the tipped occupation. Restaurant and hospitality employers who regularly assign servers or bartenders to extended side-work or non-customer-facing tasks without adjusting wages face significant wage-and-hour exposure.</p>

        <h2>How BEG handles Dual Jobs (Tip Credit) for clients</h2>
        <p>BEG Managed Payroll handles tipped employee payroll including tip credit calculations and tracks hours spent in tipped versus non-tipped duties where clients need that distinction. Tipped employee payroll is processed correctly under applicable federal and state tip credit rules as part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How much side work can a tipped employee do before the tip credit is lost?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The DOL has not set a fixed percentage, but its guidance cautions against substantial time in non-tipped work. Many courts and practitioners have used 20% of the workweek as a practical benchmark for incidental non-tipped work beyond which the tip credit may be challenged.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the federal tipped minimum wage?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The federal tipped minimum wage (cash wage) is $2.13 per hour. Employers must ensure that this cash wage plus the employee's actual tips equals at least $7.25 per hour for all hours worked in the workweek. If it does not, the employer must pay the difference.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Do all states allow tip credits?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Several states, including California, Oregon, Washington, Nevada, Minnesota, and Alaska, prohibit the tip credit entirely. In those states, tipped employees must be paid the full state minimum wage regardless of tips received.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/dual-jobs-tip-credit', url: 'https://www.beghr.com/resources/payroll-glossary/dual-jobs-tip-credit', name: 'Dual Jobs (Tip Credit) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Dual Jobs (Tip Credit)', description: 'Learn how the FLSA dual jobs rule limits tip credit for non-tipped duties, and what side work thresholds mean for restaurant and hospitality employers.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Dual Jobs (Tip Credit)', item: 'https://www.beghr.com/resources/payroll-glossary/dual-jobs-tip-credit' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
