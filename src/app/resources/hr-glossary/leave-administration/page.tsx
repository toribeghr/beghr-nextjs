import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leave Administration | HR Glossary | BEG',
  description: 'The process of managing employee time away from work, including tracking eligibility, approvals, and compliance across overlapping leave laws.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/leave-administration' },
  openGraph: { title: 'Leave Administration | HR Glossary | BEG', description: 'The process of managing employee time away from work, including tracking eligibility, approvals, and compliance across overlapping leave laws.', url: 'https://www.beghr.com/resources/hr-glossary/leave-administration', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Leave Administration | HR Glossary | BEG', description: 'The process of managing employee time away from work, including tracking eligibility, approvals, and compliance across overlapping leave laws.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Is FMLA leave paid?", a: "No. FMLA provides unpaid, job-protected leave for eligible employees at covered employers. Any pay during that leave comes from separate policies, paid time off, or a state paid leave program, not from FMLA itself." },
  { q: "Can multiple leave laws apply to the same absence?", a: "Yes. A single absence can simultaneously trigger federal FMLA, a state paid family or medical leave program, and an employer's own policy, each with different eligibility rules and paperwork." },
  { q: "What is the biggest compliance risk in leave administration?", a: "Interference or retaliation. Denying legitimate leave, pressuring an employee to cut leave short, or taking adverse action tied to a leave request are common triggers for legal claims." },
];

export default function LeaveAdministrationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is Leave Administration?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Leave administration is the process of managing employee time away from work, including tracking eligibility, approvals, and compliance across overlapping leave laws.</p>
        </div>

        <h2>Why leave administration matters for employers</h2>
        <p>Employee leave can be governed by several overlapping sources at once: federal FMLA, which provides unpaid, job-protected leave for eligible employees at covered employers, state paid family and medical leave programs, local paid sick leave ordinances, and the employer's own vacation or PTO policy. Leave administration means tracking which rules apply to a given employee and absence, calculating eligibility correctly, managing required notices and paperwork, and coordinating return-to-work decisions, all while avoiding interference with an employee's legal right to take leave.</p>
        <p>The most common mistake employers make is applying a single, one-size-fits-all leave policy without recognizing that several different laws may apply to the same absence simultaneously, each with its own eligibility threshold, notice requirement, and job protection. Employers also frequently stumble on intermittent leave, where an employee takes leave in short increments rather than one continuous block, since tracking and approving intermittent absences correctly is more administratively demanding than a single leave request. Retaliation or perceived interference, such as pressuring an employee to return early or penalizing them for taking leave, is one of the most common sources of legal claims in this area.</p>
        <p>Employers who outsource leave administration typically get eligibility tracking and paperwork handled consistently across every applicable law, reducing the chance of an interference or retaliation claim.</p>

        <h2>How BEG helps clients manage leave administration</h2>
        <p>
          BEG HR outsourcing, powered by isolved, tracks leave eligibility and required notices across overlapping federal, state, and local leave laws,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want leave administration handled correctly?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/leave-administration', url: 'https://www.beghr.com/resources/hr-glossary/leave-administration', name: 'Leave Administration | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Leave Administration', description: 'The process of managing employee time away from work, including tracking eligibility, approvals, and compliance across overlapping leave laws.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Leave Administration', item: 'https://www.beghr.com/resources/hr-glossary/leave-administration' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
