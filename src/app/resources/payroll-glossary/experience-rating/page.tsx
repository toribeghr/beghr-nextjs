import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience Rating | Payroll Glossary | BEG',
  description: 'Learn how experience rating affects SUI tax rates, how benefit charges are calculated, and what employers can do to maintain a low rate.',
  alternates: { canonical: 'https://beghr.com/resources/payroll-glossary/experience-rating' },
  openGraph: {
    title: 'Experience Rating | Payroll Glossary | BEG',
    description: 'Learn how experience rating affects SUI tax rates, how benefit charges are calculated, and what employers can do to maintain a low rate.',
    url: 'https://beghr.com/resources/payroll-glossary/experience-rating',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience Rating | Payroll Glossary | BEG',
    description: 'Learn how experience rating affects SUI tax rates, how benefit charges are calculated, and what employers can do to maintain a low rate.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "How often do experience rates change?", "a": "Experience rates are reassigned annually, typically effective January 1. Employers receive a rate notice from each state late in the prior year. The rate reflects accumulated benefit charges and contributions through a defined date, usually the second or third quarter of the prior year."}, {"q": "Can I make extra contributions to lower my SUI rate?", "a": "Some states allow voluntary SUI contributions to improve the employer's reserve ratio or benefit ratio and earn a lower rate. The deadline to make such contributions and the resulting rate reduction vary by state. Not all states offer this option."}, {"q": "What is a new employer SUI rate?", "a": "New employers that do not yet have enough history for experience rating receive a standard new-employer rate set by the state, often the average rate for their industry. After accumulating the required history, typically two to three years, the employer transitions to an individually experience-rated rate."}];

export default function ExperienceRatingPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Experience Rating?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A state unemployment insurance system that adjusts each employer's SUI tax rate based on their individual history of former employees collecting UI benefits, rewarding employers with fewer claims with lower tax rates.</p>
        </div>

        <h2>Why experience rating matters for employers</h2>
        <p>Experience rating is the mechanism states use to make unemployment insurance costs reflect each employer's actual layoff history rather than charging everyone the same flat rate. The theory is that employers who cause more unemployment should pay more to fund the UI system. The practical result is that SUI tax rates vary dramatically between employers in the same state. A stable employer with few claims might pay 0.5% on taxable wages while a volatile employer in the same industry might pay 5% or more. Most states use one of two experience rating methods: the benefit ratio method, which compares benefits charged against an employer's account to their average payroll, or the reserve ratio method, which tracks the employer's cumulative contributions minus cumulative charges to calculate a reserve balance. In both systems, a higher ratio of claims to payroll means a higher assigned tax rate on the rate schedule. The rate schedule itself shifts annually based on the overall health of the state UI trust fund. When the fund is healthy, rates across the board are lower. When the fund is depleted, such as during high-unemployment periods, rates increase for all employers. Three variables within an employer's control affect the experience rate over time. First, layoff frequency: fewer layoffs mean fewer claims. Second, claim contestation: successfully disputing invalid UI claims prevents benefit charges to the employer's account. Third, voluntary contributions: some states allow employers to make extra contributions to reduce their benefit ratio and earn a lower rate for the next year. Rate notices are issued annually, and employers should review them to verify that charges are correctly attributed to their account rather than another employer with a similar name or EIN.</p>

        <h2>How BEG handles Experience Rating for clients</h2>
        <p>BEG Managed Payroll files quarterly SUI returns accurately and on time for each state where clients have employees, preserving the employer's eligibility for the best available rate. BEG also tracks UI claim notices and supports clients in documenting valid grounds to contest claims. SUI compliance and rate management is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How often do experience rates change?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Experience rates are reassigned annually, typically effective January 1. Employers receive a rate notice from each state late in the prior year. The rate reflects accumulated benefit charges and contributions through a defined date, usually the second or third quarter of the prior year.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can I make extra contributions to lower my SUI rate?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Some states allow voluntary SUI contributions to improve the employer's reserve ratio or benefit ratio and earn a lower rate. The deadline to make such contributions and the resulting rate reduction vary by state. Not all states offer this option.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is a new employer SUI rate?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>New employers that do not yet have enough history for experience rating receive a standard new-employer rate set by the state, often the average rate for their industry. After accumulating the required history, typically two to three years, the employer transitions to an individually experience-rated rate.</p>
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
            { '@type': 'WebPage', '@id': 'https://beghr.com/resources/payroll-glossary/experience-rating', url: 'https://beghr.com/resources/payroll-glossary/experience-rating', name: 'Experience Rating | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Experience Rating', description: 'Learn how experience rating affects SUI tax rates, how benefit charges are calculated, and what employers can do to maintain a low rate.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Experience Rating', item: 'https://beghr.com/resources/payroll-glossary/experience-rating' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
