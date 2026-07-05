import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Business Partner | HR Glossary | BEG',
  description: 'An HR professional who works directly with leadership to align people strategy, policy, and compliance with day-to-day business decisions.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/hr-business-partner' },
  openGraph: { title: 'HR Business Partner | HR Glossary | BEG', description: 'An HR professional who works directly with leadership to align people strategy, policy, and compliance with day-to-day business decisions.', url: 'https://www.beghr.com/resources/hr-glossary/hr-business-partner', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'HR Business Partner | HR Glossary | BEG', description: 'An HR professional who works directly with leadership to align people strategy, policy, and compliance with day-to-day business decisions.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is an HR business partner the same as an HR generalist?", a: "Not exactly. A generalist typically handles a wide range of HR administrative tasks, while an HR business partner focuses on advising leadership on people decisions tied to business goals." },
  { q: "Can a smaller company access HR business partner support without a full-time hire?", a: "Yes. Outsourced HR arrangements can include HR business partner style guidance, giving leadership a strategic sounding board without the cost of a dedicated executive hire." },
  { q: "What decisions typically involve an HR business partner?", a: "Common examples include restructuring, leadership hiring, compensation strategy, disciplinary escalations, and aligning policy changes with business growth plans." },
];

export default function HrBusinessPartnerPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is an HR Business Partner?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An HR business partner works directly with company leadership to align people strategy, policy decisions, and compliance obligations with the goals of the business.</p>
        </div>

        <h2>Why the HR business partner role matters for employers</h2>
        <p>Unlike a purely administrative HR function, an HR business partner sits close to leadership and helps translate business decisions, such as expansion into a new state or a leadership restructuring, into sound HR practice. This includes flagging compliance exposure before a decision is made, not just cleaning up after it.</p>
        <p>A common mistake growing companies make is treating HR as purely reactive, cleaning up problems after they occur rather than involving an HR business partner voice in the decisions that create those problems in the first place. Employers should also be cautious about title inflation: some companies label an administrative HR role as a "business partner" without giving that person real influence over leadership decisions, which undermines the value of the function.</p>
        <p>Smaller employers who cannot justify a dedicated HR business partner hire can access similar strategic guidance through an HR outsourcing relationship that includes senior-level advisory support rather than administrative tasks alone.</p>

        <h2>How BEG provides business-partner-level guidance</h2>
        <p>
          BEG HR outsourcing, powered by isolved, connects clients with experienced HR professionals for both compliance work and strategic guidance,
          at a fraction of the cost of a $60K to $100K in-house HR hire.{' '}
          <Link href="/services/hr-outsourcing" style={{ color: '#ECAC60' }}>See how BEG HR outsourcing works</Link>.
        </p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want strategic HR guidance, not just paperwork?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/hr-business-partner', url: 'https://www.beghr.com/resources/hr-glossary/hr-business-partner', name: 'HR Business Partner | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'HR Business Partner', description: 'An HR professional who works directly with leadership to align people strategy, policy, and compliance with day-to-day business decisions.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'HR Business Partner', item: 'https://www.beghr.com/resources/hr-glossary/hr-business-partner' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
