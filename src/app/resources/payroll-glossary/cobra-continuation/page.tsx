import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'COBRA Continuation | Payroll Glossary | BEG',
  description: 'Learn how COBRA continuation coverage works, qualifying events, timelines, and employer notification obligations.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/cobra-continuation' },
  openGraph: {
    title: 'COBRA Continuation | Payroll Glossary | BEG',
    description: 'Learn how COBRA continuation coverage works, qualifying events, timelines, and employer notification obligations.',
    url: 'https://www.beghr.com/resources/payroll-glossary/cobra-continuation',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COBRA Continuation | Payroll Glossary | BEG',
    description: 'Learn how COBRA continuation coverage works, qualifying events, timelines, and employer notification obligations.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Who pays for COBRA coverage?", "a": "The qualified beneficiary pays the full cost of COBRA coverage, up to 102% of the plan's total premium. There is no employer contribution requirement, unlike during active employment when most employers pay a portion of the premium."}, {"q": "Does COBRA apply to small employers under 20 employees?", "a": "Federal COBRA does not apply to employers with fewer than 20 employees. However, most states have mini-COBRA laws that impose similar continuation coverage requirements on smaller employers. The duration and notice requirements vary by state."}, {"q": "What are the penalties for failing to provide COBRA notices?", "a": "Failure to provide timely COBRA notices can result in excise taxes of $110 per qualified beneficiary per day of non-compliance, personal liability for plan administrators, and employee lawsuits for benefits that should have been available."}];

export default function CobraContinuationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is COBRA Continuation?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A federal law requiring group health plan sponsors with 20 or more employees to offer continuation of health coverage for 18 to 36 months following a qualifying event such as termination, reduction in hours, or divorce.</p>
        </div>

        <h2>Why COBRA continuation matters for employers</h2>
        <p>The Consolidated Omnibus Budget Reconciliation Act of 1985 (COBRA) requires most group health plans sponsored by employers with 20 or more employees to give covered employees and their dependents the right to continue health coverage for a limited period after coverage would otherwise end. COBRA applies to group health plans including medical, dental, and vision plans, but not to life insurance or disability plans. A qualifying event triggers the COBRA election right. For employees, qualifying events include voluntary or involuntary termination of employment other than for gross misconduct, and reduction in hours below the threshold for plan eligibility. For spouses and dependents, qualifying events also include the covered employee's death, divorce or legal separation, the covered employee becoming entitled to Medicare, and a dependent child ceasing to qualify as a dependent under plan terms. The duration of COBRA coverage depends on the qualifying event: 18 months for employment termination or reduction in hours, 36 months for other qualifying events affecting spouses and dependents. Employers must provide a general COBRA notice within 90 days of coverage start, and a specific election notice within 14 days of being notified of a qualifying event. The qualified beneficiary then has 60 days to elect COBRA and 45 days after election to make the first payment. The full premium cost is borne by the beneficiary, up to 102% of the plan's total cost (the 2% covers administrative costs). Many small employers under 20 employees are subject to state mini-COBRA laws that operate similarly.</p>

        <h2>How BEG handles COBRA Continuation for clients</h2>
        <p>BEG Managed Payroll coordinates COBRA notification timing with payroll events, ensuring that terminations and benefits-affecting status changes trigger the correct COBRA notice workflow. BEG tracks the qualifying event dates that drive COBRA deadlines. Benefit coordination is part of BEG's fully managed payroll service at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Who pays for COBRA coverage?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The qualified beneficiary pays the full cost of COBRA coverage, up to 102% of the plan's total premium. There is no employer contribution requirement, unlike during active employment when most employers pay a portion of the premium.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does COBRA apply to small employers under 20 employees?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Federal COBRA does not apply to employers with fewer than 20 employees. However, most states have mini-COBRA laws that impose similar continuation coverage requirements on smaller employers. The duration and notice requirements vary by state.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What are the penalties for failing to provide COBRA notices?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Failure to provide timely COBRA notices can result in excise taxes of $110 per qualified beneficiary per day of non-compliance, personal liability for plan administrators, and employee lawsuits for benefits that should have been available.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/cobra-continuation', url: 'https://www.beghr.com/resources/payroll-glossary/cobra-continuation', name: 'COBRA Continuation | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'COBRA Continuation', description: 'Learn how COBRA continuation coverage works, qualifying events, timelines, and employer notification obligations.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'COBRA Continuation', item: 'https://www.beghr.com/resources/payroll-glossary/cobra-continuation' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
