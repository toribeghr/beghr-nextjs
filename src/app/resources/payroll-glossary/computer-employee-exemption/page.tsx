import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computer Employee Exemption | Payroll Glossary | BEG',
  description: 'Learn the FLSA computer employee exemption criteria, qualifying duties, and salary requirements for IT professionals.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/computer-employee-exemption' },
  openGraph: {
    title: 'Computer Employee Exemption | Payroll Glossary | BEG',
    description: 'Learn the FLSA computer employee exemption criteria, qualifying duties, and salary requirements for IT professionals.',
    url: 'https://www.beghr.com/resources/payroll-glossary/computer-employee-exemption',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Employee Exemption | Payroll Glossary | BEG',
    description: 'Learn the FLSA computer employee exemption criteria, qualifying duties, and salary requirements for IT professionals.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Does an IT help desk employee qualify for the computer exemption?", "a": "Generally no. Help desk and IT support roles that troubleshoot hardware, install software, and resolve user problems typically do not qualify because their primary duty is not the application of systems analysis or programming expertise at the required level."}, {"q": "What is the hourly wage threshold for the computer exemption?", "a": "The computer exemption has an hourly threshold of $27.63 per hour in addition to the salaried threshold of $684 per week. This is the only FLSA white-collar exemption with an explicit hourly rate alternative."}, {"q": "Does the exemption apply to IT managers?", "a": "IT managers may qualify under the executive exemption if they manage a team and have hiring authority, or under the administrative exemption if they exercise independent judgment on significant matters. The computer employee exemption is specifically for individual contributors whose primary duty is technical computer work."}];

export default function ComputerEmployeeExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Computer Employee Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An FLSA overtime exemption for computer professionals whose primary duty is systems analysis, programming, or software engineering, paid at least $684 per week or $27.63 per hour.</p>
        </div>

        <h2>Why the computer employee exemption matters for employers</h2>
        <p>The computer employee exemption under FLSA Section 13(a)(17) allows employers to classify certain IT workers as exempt from overtime without meeting the full duties test for the executive, administrative, or professional exemptions. The exemption has both a salary component and a duties component, and both must be satisfied. On compensation, the employee must earn at least $684 per week on a salary or fee basis, or at least $27.63 per hour (note the hourly threshold, which is unique among FLSA exemptions). On duties, the employee's primary duty must consist of one or more of: the application of systems analysis techniques to determine hardware, software, or system functional specifications; the design, development, documentation, analysis, creation, testing, or modification of computer systems or programs based on user or system design specifications; the design, documentation, testing, creation, or modification of computer programs related to machine operating systems; or a combination of these duties requiring the same level of skill. The exemption applies to experienced computer programmers, software engineers, systems analysts, and similar highly skilled workers. It does not apply to employees who simply use computers as tools in otherwise non-exempt work, help desk staff, IT support technicians who resolve hardware problems, or employees in training who have not yet reached the required skill level. The distinction between someone who applies their expertise to design systems and someone who follows instructions to operate them is the core of the exemption.</p>

        <h2>How BEG handles Computer Employee Exemption for clients</h2>
        <p>BEG Managed Payroll correctly processes computer employees as exempt or non-exempt based on their compensation and duties. BEG flags employees approaching the overtime threshold who should be reviewed for potential exemption. Correct exemption classification and payroll processing are included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does an IT help desk employee qualify for the computer exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Generally no. Help desk and IT support roles that troubleshoot hardware, install software, and resolve user problems typically do not qualify because their primary duty is not the application of systems analysis or programming expertise at the required level.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the hourly wage threshold for the computer exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The computer exemption has an hourly threshold of $27.63 per hour in addition to the salaried threshold of $684 per week. This is the only FLSA white-collar exemption with an explicit hourly rate alternative.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does the exemption apply to IT managers?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>IT managers may qualify under the executive exemption if they manage a team and have hiring authority, or under the administrative exemption if they exercise independent judgment on significant matters. The computer employee exemption is specifically for individual contributors whose primary duty is technical computer work.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/computer-employee-exemption', url: 'https://www.beghr.com/resources/payroll-glossary/computer-employee-exemption', name: 'Computer Employee Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Computer Employee Exemption', description: 'Learn the FLSA computer employee exemption criteria, qualifying duties, and salary requirements for IT professionals.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Computer Employee Exemption', item: 'https://www.beghr.com/resources/payroll-glossary/computer-employee-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
