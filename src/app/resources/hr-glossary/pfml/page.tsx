import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PFML (Paid Family and Medical Leave) | HR Glossary | BEG',
  description: 'State-run programs that provide partial wage replacement to employees taking leave for qualifying family or medical reasons, distinct from unpaid FMLA.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/pfml' },
  openGraph: { title: 'PFML (Paid Family and Medical Leave) | HR Glossary | BEG', description: 'State-run programs that provide partial wage replacement to employees taking leave for qualifying family or medical reasons, distinct from unpaid FMLA.', url: 'https://www.beghr.com/resources/hr-glossary/pfml', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'PFML (Paid Family and Medical Leave) | HR Glossary | BEG', description: 'State-run programs that provide partial wage replacement to employees taking leave for qualifying family or medical reasons, distinct from unpaid FMLA.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is PFML the same program in every state?", a: "No. PFML programs are established at the state level, and eligibility, wage replacement amounts, funding mechanisms, and covered reasons for leave vary significantly by state." },
  { q: "Can PFML run at the same time as FMLA?", a: "In many cases yes. Where both apply, leave often runs concurrently, though employers must track each program's separate eligibility rules and notice requirements." },
  { q: "Do employers fund PFML programs?", a: "Funding structures vary by state and can include employer contributions, employee payroll deductions, or a combination of both, administered through a state fund or an approved private plan." },
];

export default function PfmlPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is PFML (Paid Family and Medical Leave)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>PFML programs are state-administered systems that provide partial wage replacement to employees taking leave for qualifying family or medical reasons, separate from the federal unpaid FMLA.</p>
        </div>

        <h2>Why PFML matters for employers</h2>
        <p>A growing number of states have adopted their own paid family and medical leave programs, each with distinct eligibility rules, wage replacement formulas, funding mechanisms, and covered leave reasons. Some states run the program through a state fund financed by payroll contributions; others allow employers to use an approved private plan instead.</p>
        <p>The most common employer mistake is assuming PFML and FMLA are the same program; they are not. FMLA is unpaid and federal, while PFML is a paid, state-level benefit, and the two can run concurrently but have separate eligibility tests, notice requirements, and documentation. Multi-state employers face additional complexity, since a policy that satisfies one state's PFML program may not satisfy another's, and payroll withholding obligations differ by state as well.</p>
        <p>Employers with workers in multiple states should confirm PFML obligations state by state rather than assuming a single leave policy covers every location.</p>

        <h2>How BEG helps employers navigate PFML across states</h2>
        <p>
          BEG HR outsourcing, powered by isolved, helps employers track PFML obligations, payroll withholding, and documentation requirements across every state where they operate,
          at a fraction of the cost of a $60K to $100K in-house HR hire.{' '}
          <Link href="/services/hr-outsourcing/leave-law-lookup" style={{ color: '#ECAC60' }}>Look up leave law requirements by state</Link>.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want multi-state leave law confusion solved?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG HR outsourcing, powered by isolved, costs a fraction of an in-house hire. See your exact price in 90 seconds.</p>
          <PricingCta service="hr-outsourcing" subline={false} />
        </div>

        <p style={{ marginTop: '2rem' }}><Link href="/resources/hr-glossary" style={{ color: '#ECAC60' }}>Back to HR Glossary</Link></p>

        <div style={{ borderTop: '1px solid #e5e5e5', marginTop: '3rem', paddingTop: '1.5rem' }}>
          <p style={{ margin: '0 0 0.35rem', fontWeight: '700' }}>About the author</p>
          <p style={{ margin: '0 0 0.5rem', color: '#444', fontSize: '0.9rem', lineHeight: '1.7' }}>Anthony Moretti is VP of Sales at Business Executive Group, where he builds BEG&apos;s HR outsourcing and managed payroll service verticals for employers nationwide. He writes the BEG HR Glossary to give employers plain-English answers on HR and compliance.</p>
          <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>Connect with Anthony on LinkedIn &rarr;</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/pfml', url: 'https://www.beghr.com/resources/hr-glossary/pfml', name: 'PFML (Paid Family and Medical Leave) | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'PFML (Paid Family and Medical Leave)', description: 'State-run programs that provide partial wage replacement to employees taking leave for qualifying family or medical reasons, distinct from unpaid FMLA.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'PFML (Paid Family and Medical Leave)', item: 'https://www.beghr.com/resources/hr-glossary/pfml' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
