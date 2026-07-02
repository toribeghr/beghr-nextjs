import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reasonable Compensation | Payroll Glossary | BEG',
  description: 'IRS requirement that S-corporation owner-employees receive a fair market salary before taking distributions, enforced through payroll audits.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/reasonable-compensation' },
  openGraph: { title: 'Reasonable Compensation | Payroll Glossary | BEG', description: 'IRS requirement that S-corporation owner-employees receive a fair market salary before taking distributions, enforced through payroll audits.', url: 'https://www.beghr.com/resources/payroll-glossary/reasonable-compensation', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Reasonable Compensation | Payroll Glossary | BEG', description: 'IRS requirement that S-corporation owner-employees receive a fair market salary before taking distributions, enforced through payroll audits.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "What happens if an S-corp owner does not take a salary?", a: "The IRS can reclassify distributions as wages, assess FICA taxes on the reconstructed salary, and impose interest and a 20% accuracy-related penalty. Officers who perform services for the corporation must receive reasonable compensation." },
  { q: "How is reasonable compensation determined?", a: "Reasonable compensation is what a comparable business would pay a non-owner employee for the same work. Factors include industry pay data, the owner's role and time commitment, and the corporation's financial performance." },
  { q: "Can an S-corp owner take a very low salary?", a: "The IRS has challenged salaries that are unreasonably low relative to distributions. While there is no specific minimum, paying zero or nominal salary while taking substantial distributions is a significant audit risk." },
];

export default function ReasonableCompensationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Reasonable Compensation?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Reasonable compensation requires S-corp owner-employees to pay themselves a fair market salary subject to payroll taxes before taking tax-advantaged distributions.</p>
        </div>
        <h2>Why reasonable compensation matters for S-corp owners</h2>
        <p>S-corporation owners who work in their business must pay themselves a reasonable salary as W-2 wages before taking additional income as distributions. This requirement exists because S-corp distributions are not subject to self-employment or FICA taxes, while W-2 wages are. Without the reasonable compensation rule, owner-employees could take all business income as distributions and pay no payroll taxes.</p>
        <p>The IRS defines reasonable compensation as the amount a similarly situated business would pay a non-owner employee for the same services. Factors considered include: the employee's role and responsibilities, time devoted to the business, training and experience, the company's size and complexity, compensation paid by similar companies for similar work, and the history of compensation paid.</p>
        <p>There is no specific dollar threshold the IRS uses. The standard is fact-based. Courts have found compensation unreasonably low when S-corp owners took zero or minimal salary while the company generated substantial revenue. Reconstructed wages can be assessed with FICA taxes, interest, and 20% accuracy-related penalties.</p>
        <p>Under-compensation also affects retirement plan contributions. Contributions to solo 401(k)s, SEPs, and other qualified plans are based on W-2 compensation. Artificially low salaries reduce allowable contributions.</p>
        <p>Over-compensation is also possible - excessive salaries paid to owner-employees may be challenged as unreasonable by the IRS as a disguised dividend to non-shareholder family members. Reasonable compensation works in both directions.</p>
        <h2>How BEG helps S-corp owners structure payroll correctly</h2>
        <p>BEG Managed Payroll helps S-corp clients establish and process reasonable compensation schedules, ensuring FICA compliance while maximizing distribution efficiency as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/reasonable-compensation', url: 'https://www.beghr.com/resources/payroll-glossary/reasonable-compensation', name: 'Reasonable Compensation | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Reasonable Compensation', description: 'IRS requirement that S-corporation owner-employees receive a fair market salary before taking distributions, enforced through payroll audits.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Reasonable Compensation', item: 'https://www.beghr.com/resources/payroll-glossary/reasonable-compensation' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
