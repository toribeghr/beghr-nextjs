import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Exemption | Payroll Glossary | BEG',
  description: 'Learn the FLSA executive exemption criteria, the duties test, and how to determine if a manager qualifies for overtime exemption.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/executive-exemption' },
  openGraph: {
    title: 'Executive Exemption | Payroll Glossary | BEG',
    description: 'Learn the FLSA executive exemption criteria, the duties test, and how to determine if a manager qualifies for overtime exemption.',
    url: 'https://www.beghr.com/resources/payroll-glossary/executive-exemption',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Exemption | Payroll Glossary | BEG',
    description: 'Learn the FLSA executive exemption criteria, the duties test, and how to determine if a manager qualifies for overtime exemption.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Does a manager who does the same work as their team qualify for the executive exemption?", "a": "Likely not. If the employee spends the majority of their time performing the same production or operational tasks as their subordinates rather than managing, management may not be their primary duty. The primary duty test looks at the character of the work, not just job title."}, {"q": "Does the executive exemption require absolute hiring and firing authority?", "a": "No. The employee only needs to have their recommendations given particular weight. An employee who effectively recommends who gets hired and fired, even without final authority, satisfies this element if their recommendations are routinely followed or heavily considered."}, {"q": "What are the two full-time equivalents required for the executive exemption?", "a": "The employee must regularly direct the work of at least two full-time equivalent employees. Two part-time employees averaging 20 hours each equals one full-time equivalent. The calculation uses total supervised hours rather than headcount of full-time employees."}];

export default function ExecutiveExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Executive Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An FLSA overtime exemption for employees whose primary duty is managing the enterprise or a department, who regularly direct the work of at least two full-time employees, and who have authority to hire, fire, or meaningfully influence those decisions, earning at least $684 per week.</p>
        </div>

        <h2>Why the executive exemption matters for employers</h2>
        <p>The executive exemption is one of the most commonly used FLSA overtime exemptions, but it is also one of the most frequently misapplied. To qualify, an employee must satisfy both the salary test and the duties test. The salary test requires the employee to earn at least $684 per week on a salary basis. The duties test has three components that must all be met. First, the employee's primary duty must be management of the enterprise or a customarily recognized department or subdivision. Second, the employee must customarily and regularly direct the work of at least two or more full-time employees or their equivalent. Third, the employee must have the authority to hire or fire other employees, or their suggestions and recommendations regarding hiring, firing, advancement, promotion, or any other change of status of other employees must be given particular weight. Each element matters. A manager who earns the salary threshold but spends most of their time on non-managerial tasks may not have management as their primary duty. A working supervisor who handles the same tasks as the team and occasionally fills out HR paperwork may not qualify. The employee who manages two part-time employees averaging 20 hours per week each satisfies the two full-time equivalent requirement. The phrase particular weight for the hire-fire influence requirement means the employee's input is more than a rubber stamp but does not require final decision authority. Title alone does not determine exemption status, and courts routinely look at actual day-to-day duties rather than job descriptions. Misclassification as exempt subjects employers to back pay for up to three years of overtime plus liquidated damages.</p>

        <h2>How BEG handles Executive Exemption for clients</h2>
        <p>BEG Managed Payroll correctly processes employees classified as exempt under the executive exemption, maintaining the salary records and tracking any deductions from salary that could jeopardize exempt status. BEG flags potential classification issues during payroll setup. Accurate exempt employee processing is part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does a manager who does the same work as their team qualify for the executive exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Likely not. If the employee spends the majority of their time performing the same production or operational tasks as their subordinates rather than managing, management may not be their primary duty. The primary duty test looks at the character of the work, not just job title.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does the executive exemption require absolute hiring and firing authority?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. The employee only needs to have their recommendations given particular weight. An employee who effectively recommends who gets hired and fired, even without final authority, satisfies this element if their recommendations are routinely followed or heavily considered.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What are the two full-time equivalents required for the executive exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The employee must regularly direct the work of at least two full-time equivalent employees. Two part-time employees averaging 20 hours each equals one full-time equivalent. The calculation uses total supervised hours rather than headcount of full-time employees.</p>
        </div>

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. See your exact price in 90 seconds.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/executive-exemption', url: 'https://www.beghr.com/resources/payroll-glossary/executive-exemption', name: 'Executive Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Executive Exemption', description: 'Learn the FLSA executive exemption criteria, the duties test, and how to determine if a manager qualifies for overtime exemption.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Executive Exemption', item: 'https://www.beghr.com/resources/payroll-glossary/executive-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
