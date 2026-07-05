import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALE (Applicable Large Employer) | HR Glossary | BEG',
  description: 'An ACA classification based on average full-time and full-time-equivalent employee count that triggers employer health coverage and reporting duties.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/ale-applicable-large-employer' },
  openGraph: { title: 'ALE (Applicable Large Employer) | HR Glossary | BEG', description: 'An ACA classification based on average full-time and full-time-equivalent employee count that triggers employer health coverage and reporting duties.', url: 'https://www.beghr.com/resources/hr-glossary/ale-applicable-large-employer', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'ALE (Applicable Large Employer) | HR Glossary | BEG', description: 'An ACA classification based on average full-time and full-time-equivalent employee count that triggers employer health coverage and reporting duties.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "How is ALE status calculated?", a: "ALE status is based on the average number of full-time employees plus full-time-equivalent employees across the prior calendar year, combining part-time hours into equivalents as defined by ACA rules." },
  { q: "What happens if a business crosses the ALE threshold?", a: "The business becomes subject to ACA employer shared responsibility provisions, including offering qualifying health coverage to full-time employees and annual IRS information reporting." },
  { q: "Can ALE status change year to year?", a: "Yes. Because it is based on the prior year's average headcount, a business can move in and out of ALE status as its workforce grows or shrinks, and status should be reassessed annually." },
];

export default function AleApplicableLargeEmployerPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is ALE (Applicable Large Employer)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>ALE, or Applicable Large Employer, is an ACA classification based on average full-time and full-time-equivalent employee count that triggers health coverage offer and IRS reporting obligations.</p>
        </div>

        <h2>Why ALE status matters for employers</h2>
        <p>Once a business crosses into ALE status, it becomes subject to the ACA's employer shared responsibility provisions, which generally require offering minimum essential health coverage that is affordable and provides minimum value to full-time employees, along with annual information reporting to the IRS and to employees.</p>
        <p>A common mistake is counting only full-time employees and ignoring part-time hours, which the ACA requires employers to convert into full-time equivalents when determining ALE status. Seasonal staffing patterns can also cause confusion, since a business with a large seasonal workforce may cross the threshold in ways that are not obvious from a simple headcount. Employers also sometimes fail to reassess ALE status annually, missing a change in classification as the workforce grows.</p>
        <p>Getting ALE determination and the related reporting wrong can result in IRS penalty assessments, so employers near the threshold should track headcount carefully and confirm their status each year.</p>

        <h2>How BEG helps employers manage ALE compliance</h2>
        <p>
          BEG HR outsourcing, powered by isolved, helps employers track headcount, determine ALE status, and stay ahead of related coverage and reporting obligations,
          at a fraction of the cost of a $60K to $100K in-house HR hire.{' '}
          <Link href="/services/managed-benefits" style={{ color: '#ECAC60' }}>See how BEG managed benefits works</Link>.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Not sure if you have crossed the ALE threshold?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG helps employers track ALE status and reporting. See your exact price in 90 seconds.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/ale-applicable-large-employer', url: 'https://www.beghr.com/resources/hr-glossary/ale-applicable-large-employer', name: 'ALE (Applicable Large Employer) | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'ALE (Applicable Large Employer)', description: 'An ACA classification based on average full-time and full-time-equivalent employee count that triggers employer health coverage and reporting duties.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'ALE (Applicable Large Employer)', item: 'https://www.beghr.com/resources/hr-glossary/ale-applicable-large-employer' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
