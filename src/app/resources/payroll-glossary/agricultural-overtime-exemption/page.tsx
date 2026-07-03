import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agricultural Overtime Exemption | Payroll Glossary | BEG',
  description: 'Understand the FLSA agricultural overtime exemption, the 500 man-day test, and which farm workers it covers.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/agricultural-overtime-exemption' },
  openGraph: {
    title: 'Agricultural Overtime Exemption | Payroll Glossary | BEG',
    description: 'Understand the FLSA agricultural overtime exemption, the 500 man-day test, and which farm workers it covers.',
    url: 'https://www.beghr.com/resources/payroll-glossary/agricultural-overtime-exemption',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Overtime Exemption | Payroll Glossary | BEG',
    description: 'Understand the FLSA agricultural overtime exemption, the 500 man-day test, and which farm workers it covers.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "What is a man-day under the agricultural exemption?", "a": "A man-day is any day during which an employee performs agricultural work for at least one hour. Employers count total man-days in each calendar quarter of the prior year to determine whether the 500-day threshold was crossed."}, {"q": "Do agricultural workers still earn the federal minimum wage?", "a": "Yes. The agricultural overtime exemption removes the overtime requirement but not the minimum wage requirement. Agricultural workers must be paid at least $7.25 per hour under federal law, and many states require higher rates."}, {"q": "Does the exemption apply to farmworkers who process crops?", "a": "It depends on where processing occurs and whether it is incidental to the farming operation. Processing that occurs on a farm as part of the farming operation generally qualifies. Processing at a separate facility typically does not qualify as agriculture under FLSA."}];

export default function AgriculturalOvertimeExemptionPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Agricultural Overtime Exemption?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An FLSA provision allowing agricultural employers with fewer than 500 man-days of agricultural labor in any calendar quarter of the prior year to pay farm workers without overtime, and exempting certain family members entirely.</p>
        </div>

        <h2>Why the agricultural overtime exemption matters for employers</h2>
        <p>Agriculture is one of the few industries the FLSA treats fundamentally differently for overtime purposes. Most employers must pay time-and-a-half for hours over 40 in a workweek. Agricultural employers may be exempt from that requirement if they meet the 500 man-day test. A man-day is any day where an employee performs agricultural work for at least one hour. If the employer used fewer than 500 man-days of agricultural labor in any calendar quarter of the preceding calendar year, they are not required to pay overtime to agricultural workers in the current year. The exemption also completely exempts immediate family members of the farm owner regardless of hours or wages. Piece-rate workers who commute daily from their permanent residence and are primarily employed in agriculture in the region are also exempt from overtime under a separate provision. Note that even exempt agricultural employers must still comply with the federal minimum wage of $7.25 per hour, and many states have higher agricultural minimum wages or provide fewer exemptions than federal law. California, for example, has largely eliminated the agricultural overtime exemption for larger farm operations. Employers with H-2A visa workers have additional compliance obligations related to the adverse effect wage rate and housing requirements. The exemption applies only to agriculture as defined under FLSA Section 3(f), which includes farming, horticulture, and related activities performed on a farm as an incident to or in conjunction with farming operations.</p>

        <h2>How BEG handles Agricultural Overtime Exemption for clients</h2>
        <p>BEG Managed Payroll configures agricultural payroll correctly whether your operation falls under the exemption or is subject to full FLSA overtime requirements. State agricultural wage rules are complex and vary significantly, and BEG tracks those requirements at the state level. BEG handles agricultural payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is a man-day under the agricultural exemption?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>A man-day is any day during which an employee performs agricultural work for at least one hour. Employers count total man-days in each calendar quarter of the prior year to determine whether the 500-day threshold was crossed.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Do agricultural workers still earn the federal minimum wage?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. The agricultural overtime exemption removes the overtime requirement but not the minimum wage requirement. Agricultural workers must be paid at least $7.25 per hour under federal law, and many states require higher rates.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does the exemption apply to farmworkers who process crops?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>It depends on where processing occurs and whether it is incidental to the farming operation. Processing that occurs on a farm as part of the farming operation generally qualifies. Processing at a separate facility typically does not qualify as agriculture under FLSA.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/agricultural-overtime-exemption', url: 'https://www.beghr.com/resources/payroll-glossary/agricultural-overtime-exemption', name: 'Agricultural Overtime Exemption | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Agricultural Overtime Exemption', description: 'Understand the FLSA agricultural overtime exemption, the 500 man-day test, and which farm workers it covers.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Agricultural Overtime Exemption', item: 'https://www.beghr.com/resources/payroll-glossary/agricultural-overtime-exemption' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
