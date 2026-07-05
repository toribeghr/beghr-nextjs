import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Hire Reporting | HR Glossary | BEG',
  description: 'The legal requirement that employers report every newly hired or rehired employee to a state directory within a set number of days of their start date.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary/new-hire-reporting' },
  openGraph: { title: 'New Hire Reporting | HR Glossary | BEG', description: 'The legal requirement that employers report every newly hired or rehired employee to a state directory within a set number of days of their start date.', url: 'https://www.beghr.com/resources/hr-glossary/new-hire-reporting', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'New Hire Reporting | HR Glossary | BEG', description: 'The legal requirement that employers report every newly hired or rehired employee to a state directory within a set number of days of their start date.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Who has to comply with new hire reporting?", a: "Every employer, regardless of size, must report newly hired and rehired employees to the state directory designated for the state where the employee works." },
  { q: "What happens if an employer misses the deadline?", a: "States can assess civil penalties for late or missing reports, and the data feeds child support enforcement and unemployment insurance fraud detection, so delays can ripple into other agencies." },
  { q: "Does new hire reporting apply to rehires?", a: "Yes. Employees who are rehired after a separation, or who return from a layoff, generally must be reported again the same way a brand-new hire would be." },
];

export default function NewHireReportingPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">HR Glossary</p>
              <h1>What is New Hire Reporting?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated July 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>New hire reporting is the legal requirement that employers report every newly hired or rehired employee to a designated state directory within a set number of days of their start date.</p>
        </div>

        <h2>Why new hire reporting matters for employers</h2>
        <p>Every state operates a new hire directory that feeds a national database used primarily to locate parents who owe child support. Employers must submit basic information for each new or rehired worker, typically name, address, Social Security number, and date of hire, along with employer identifying details, within a short window after the hire date. The exact deadline and reporting method vary by state, but the obligation applies to every employer regardless of headcount.</p>
        <p>The most common mistake is treating new hire reporting as optional paperwork that can wait until the next payroll run. It cannot. States enforce deadlines with civil penalties, and the data also supports unemployment insurance fraud detection and workers compensation fraud checks, so a late report can trigger scrutiny well beyond the original purpose. Employers with workers in multiple states often stumble because each state directory has its own deadline and submission format, and a process built for one state does not automatically satisfy another.</p>
        <p>Employers who outsource payroll and HR administration typically get new hire reporting handled automatically as part of onboarding, removing the risk of a missed state deadline.</p>

        <h2>How BEG helps clients stay compliant on new hire reporting</h2>
        <p>
          BEG HR outsourcing, powered by isolved, builds new hire reporting into the onboarding workflow so each state deadline is met automatically,
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
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want new hire reporting handled automatically?</h2>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/hr-glossary/new-hire-reporting', url: 'https://www.beghr.com/resources/hr-glossary/new-hire-reporting', name: 'New Hire Reporting | HR Glossary | BEG', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'New Hire Reporting', description: 'The legal requirement that employers report every newly hired or rehired employee to a state directory within a set number of days of their start date.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG HR Glossary', url: 'https://www.beghr.com/resources/hr-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
              { '@type': 'ListItem', position: 4, name: 'New Hire Reporting', item: 'https://www.beghr.com/resources/hr-glossary/new-hire-reporting' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
