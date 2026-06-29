import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Davis-Bacon Act | Payroll Glossary | BEG',
  description: 'Learn what the Davis-Bacon Act requires, how prevailing wage rates are determined, and what certified payroll compliance looks like.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/davis-bacon-act' },
  openGraph: {
    title: 'Davis-Bacon Act | Payroll Glossary | BEG',
    description: 'Learn what the Davis-Bacon Act requires, how prevailing wage rates are determined, and what certified payroll compliance looks like.',
    url: 'https://www.beghr.com/resources/payroll-glossary/davis-bacon-act',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davis-Bacon Act | Payroll Glossary | BEG',
    description: 'Learn what the Davis-Bacon Act requires, how prevailing wage rates are determined, and what certified payroll compliance looks like.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is a prevailing wage determination?", "a": "A prevailing wage determination is a DOL publication listing the minimum wages and fringe benefits required for each labor classification in a specific geographic area for a specific type of construction. It is incorporated into the federal contract specifications and must be posted at the job site."}, {"q": "Does Davis-Bacon apply to subcontractors?", "a": "Yes. Davis-Bacon applies to all contractors and subcontractors on covered projects, regardless of tier. The prime contractor is responsible for ensuring all lower-tier subcontractors comply with prevailing wage requirements."}, {"q": "Can fringe benefits satisfy part of the prevailing wage requirement?", "a": "Yes. The prevailing wage has two components: a base hourly wage and a fringe benefit amount. The fringe benefit can be satisfied through contributions to bona fide benefit plans such as health insurance and retirement plans. If the plan contribution is less than the required fringe amount, the remainder must be paid in cash."}];

export default function DavisBaconActPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Davis-Bacon Act?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A federal law requiring contractors and subcontractors on federally funded construction contracts over $2,000 to pay workers at least the locally prevailing wage rates determined by the Department of Labor for each job classification.</p>
        </div>

        <h2>Why the Davis-Bacon Act matters for employers</h2>
        <p>The Davis-Bacon Act of 1931 was passed to prevent out-of-area contractors from underbidding local contractors by importing cheap labor. It requires that every contract for construction, alteration, or repair of public buildings or public works in the United States to which the federal government is a party, in excess of $2,000, must include a clause requiring all laborers and mechanics to be paid not less than the locally prevailing wages and fringe benefits for the corresponding classes of laborers and mechanics employed on similar projects in the area. The prevailing wage rates are determined by the Department of Labor through wage surveys and published in wage determinations incorporated into contract specifications. Wage determinations are locality-specific and classification-specific: a carpenter in Houston has a different prevailing wage than a carpenter in Seattle, and a journeyman electrician has a different rate than an apprentice. The prime contractor is responsible for compliance by all subcontractors on the project. This means the prime contractor must ensure that subcontractor payrolls are in compliance even if the prime does not directly employ the workers in question. Weekly certified payroll reports must be submitted to verify compliance. Fringe benefits required under the wage determination can be provided through a bona fide benefit plan or paid in cash as an additional wage. Related Acts including the Davis-Bacon Related Acts extend prevailing wage requirements to federally assisted construction in housing, transportation, environmental, and other sectors.</p>

        <h2>How BEG handles Davis-Bacon Act for clients</h2>
        <p>BEG Managed Payroll supports contractors operating under Davis-Bacon requirements by tracking applicable wage determinations and generating certified payroll reports. BEG ensures that covered employees are paid correctly by classification and that fringe benefit obligations are properly documented. Davis-Bacon payroll compliance is available as part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is a prevailing wage determination?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A prevailing wage determination is a DOL publication listing the minimum wages and fringe benefits required for each labor classification in a specific geographic area for a specific type of construction. It is incorporated into the federal contract specifications and must be posted at the job site.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does Davis-Bacon apply to subcontractors?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. Davis-Bacon applies to all contractors and subcontractors on covered projects, regardless of tier. The prime contractor is responsible for ensuring all lower-tier subcontractors comply with prevailing wage requirements.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can fringe benefits satisfy part of the prevailing wage requirement?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. The prevailing wage has two components: a base hourly wage and a fringe benefit amount. The fringe benefit can be satisfied through contributions to bona fide benefit plans such as health insurance and retirement plans. If the plan contribution is less than the required fringe amount, the remainder must be paid in cash.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/davis-bacon-act', url: 'https://www.beghr.com/resources/payroll-glossary/davis-bacon-act', name: 'Davis-Bacon Act | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Davis-Bacon Act', description: 'Learn what the Davis-Bacon Act requires, how prevailing wage rates are determined, and what certified payroll compliance looks like.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Davis-Bacon Act', item: 'https://www.beghr.com/resources/payroll-glossary/davis-bacon-act' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
