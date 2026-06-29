import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certified Payroll | Payroll Glossary | BEG',
  description: 'Learn what certified payroll is, when it is required under the Davis-Bacon Act, and how to complete Form WH-347 correctly.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/certified-payroll' },
  openGraph: {
    title: 'Certified Payroll | Payroll Glossary | BEG',
    description: 'Learn what certified payroll is, when it is required under the Davis-Bacon Act, and how to complete Form WH-347 correctly.',
    url: 'https://www.beghr.com/resources/payroll-glossary/certified-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified Payroll | Payroll Glossary | BEG',
    description: 'Learn what certified payroll is, when it is required under the Davis-Bacon Act, and how to complete Form WH-347 correctly.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "When is certified payroll required?", "a": "Certified payroll is required on federal construction contracts and subcontracts exceeding $2,000 that are subject to the Davis-Bacon Act. It is also required on federally assisted construction projects where the federal agency requires Davis-Bacon compliance as a condition of the grant or loan."}, {"q": "What is Form WH-347?", "a": "WH-347 is the Department of Labor's optional certified payroll form. Contractors may use an alternative form as long as it contains all the required information, but WH-347 is the standard format accepted by most contracting agencies."}, {"q": "What are the penalties for certified payroll violations?", "a": "Violations can result in withholding of contract payments to cover back wages owed to workers, termination of the contract, debarment from future federal contracts for up to three years, and in cases of deliberate falsification, criminal penalties for submitting false statements."}];

export default function CertifiedPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Certified Payroll?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A weekly payroll report required on federally funded construction projects, submitted on Form WH-347, documenting each worker's name, hours worked, classification, hourly rate, and fringe benefits paid.</p>
        </div>

        <h2>Why certified payroll matters for employers</h2>
        <p>Certified payroll is a compliance requirement for contractors and subcontractors working on federal or federally assisted construction projects subject to the Davis-Bacon Act. The requirement exists to verify that workers on these projects are paid the locally prevailing wage rates determined by the Department of Labor for each job classification in the area. Every week work is performed on a covered project, the prime contractor and each subcontractor must submit a completed Form WH-347 to the contracting agency. The form requires the contractor's name and address, the project name and number, the payroll week ending date, and for each worker: full name, last four digits of Social Security Number, work classification, days and hours worked each day, hourly rate, gross wages, itemized deductions, and net wages paid. The contractor must also submit a Statement of Compliance certifying under penalty of perjury that the information is accurate and that the workers were paid prevailing wages including required fringe benefits. Fringe benefits on Davis-Bacon projects can be paid in cash above the base wage or as contributions to bona fide benefit plans. The computation of fringe benefits for certified payroll purposes differs from regular payroll accounting. Violations of certified payroll requirements can result in debarment from federal contracts, repayment of back wages, and civil and criminal penalties. Many states have their own prevailing wage laws (often called Little Davis-Bacon Acts) with similar certified payroll requirements for state-funded projects.</p>

        <h2>How BEG handles Certified Payroll for clients</h2>
        <p>BEG Managed Payroll supports clients with government contract payroll, including certified payroll reporting on prevailing wage projects. BEG tracks the applicable wage determinations for each project and generates the WH-347 reports required for submission. This specialized payroll handling is available as part of BEG's managed payroll services at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>When is certified payroll required?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Certified payroll is required on federal construction contracts and subcontracts exceeding $2,000 that are subject to the Davis-Bacon Act. It is also required on federally assisted construction projects where the federal agency requires Davis-Bacon compliance as a condition of the grant or loan.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is Form WH-347?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>WH-347 is the Department of Labor's optional certified payroll form. Contractors may use an alternative form as long as it contains all the required information, but WH-347 is the standard format accepted by most contracting agencies.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What are the penalties for certified payroll violations?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Violations can result in withholding of contract payments to cover back wages owed to workers, termination of the contract, debarment from future federal contracts for up to three years, and in cases of deliberate falsification, criminal penalties for submitting false statements.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/certified-payroll', url: 'https://www.beghr.com/resources/payroll-glossary/certified-payroll', name: 'Certified Payroll | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Certified Payroll', description: 'Learn what certified payroll is, when it is required under the Davis-Bacon Act, and how to complete Form WH-347 correctly.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Certified Payroll', item: 'https://www.beghr.com/resources/payroll-glossary/certified-payroll' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
