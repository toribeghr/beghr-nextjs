import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reciprocity Agreement | Payroll Glossary | BEG',
  description: 'A state tax agreement allowing employees who live in one state and work in another to pay income tax only in their home state.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/reciprocity-agreement' },
  openGraph: { title: 'Reciprocity Agreement | Payroll Glossary | BEG', description: 'A state tax agreement allowing employees who live in one state and work in another to pay income tax only in their home state.', url: 'https://www.beghr.com/resources/payroll-glossary/reciprocity-agreement', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Reciprocity Agreement | Payroll Glossary | BEG', description: 'A state tax agreement allowing employees who live in one state and work in another to pay income tax only in their home state.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How does an employee claim reciprocity benefits?", a: "The employee submits an exemption form to the employer claiming exemption from the work state's income tax withholding. The specific form varies by state. The employer then withholds only the home state's tax." },
  { q: "Do remote workers affect reciprocity agreements?", a: "Remote work complicates reciprocity because the employee's home becomes the work location. If the home state has no reciprocity with the employer's state, both states may assert taxing rights, requiring careful nexus and withholding analysis." },
  { q: "What happens if an employer fails to apply a reciprocity agreement?", a: "The employee has income tax withheld for the wrong state. They must file in the work state to get a refund and may owe taxes in the home state. Correcting W-2s (W-2c) may be required. The employer may owe penalties for incorrect withholding." },
];

export default function ReciprocityAgreementPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Reciprocity Agreement?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A reciprocity agreement between states lets employees who commute across state lines pay income tax only in their home state rather than in both states.</p>
        </div>
        <h2>Why reciprocity agreements matter for employers</h2>
        <p>When an employee lives in one state and works in another, they technically owe income taxes in both states - the state where they work (source state) and the state where they live (residence state). Most states provide a credit for taxes paid to other states to prevent true double taxation, but the process of filing in two states is burdensome.</p>
        <p>Reciprocity agreements simplify this by allowing employees who live in a reciprocity state and work in another reciprocity state to pay income tax only in their home state. The employer then withholds only the home state's income tax rather than the work state's tax.</p>
        <p>To benefit from a reciprocity agreement, the employee typically must submit a form to the employer claiming the exemption from the work state's withholding. Examples include: Pennsylvania and New Jersey have reciprocity, so a New Jersey resident working in Pennsylvania files a PA exemption form and PA tax is not withheld. Virginia has reciprocity with DC, Maryland, Kentucky, West Virginia, and Pennsylvania.</p>
        <p>Not all states participate in reciprocity agreements. Several major states including California, New York, and Texas have no reciprocity agreements with any other state. Remote workers who permanently work from home add additional complexity - their home state becomes the work state, potentially triggering withholding requirements in a state where the employer had none.</p>
        <p>Employers with multistate workforces must track each employee's home state and work location, identify applicable reciprocity agreements, collect required exemption forms, and withhold correctly based on those agreements.</p>
        <h2>How BEG handles multistate and reciprocity payroll for clients</h2>
        <p>BEG Managed Payroll tracks employee work locations, applies reciprocity agreements, and manages multi-state withholding correctly as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/reciprocity-agreement', url: 'https://www.beghr.com/resources/payroll-glossary/reciprocity-agreement', name: 'Reciprocity Agreement | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Reciprocity Agreement', description: 'A state tax agreement allowing employees who live in one state and work in another to pay income tax only in their home state.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Reciprocity Agreement', item: 'https://www.beghr.com/resources/payroll-glossary/reciprocity-agreement' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
