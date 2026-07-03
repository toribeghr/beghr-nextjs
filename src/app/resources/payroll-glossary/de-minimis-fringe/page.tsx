import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'De Minimis Fringe Benefit | Payroll Glossary | BEG',
  description: 'Learn what qualifies as a de minimis fringe benefit, what the IRS includes and excludes, and how to handle them in payroll.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/de-minimis-fringe' },
  openGraph: {
    title: 'De Minimis Fringe Benefit | Payroll Glossary | BEG',
    description: 'Learn what qualifies as a de minimis fringe benefit, what the IRS includes and excludes, and how to handle them in payroll.',
    url: 'https://www.beghr.com/resources/payroll-glossary/de-minimis-fringe',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De Minimis Fringe Benefit | Payroll Glossary | BEG',
    description: 'Learn what qualifies as a de minimis fringe benefit, what the IRS includes and excludes, and how to handle them in payroll.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Is a $25 Amazon gift card a de minimis fringe benefit?", "a": "No. Gift cards and other cash equivalents are never de minimis fringe benefits regardless of the dollar amount. The IRS position is that gift cards have a readily ascertainable value and can be easily tracked, making them taxable wages at any amount."}, {"q": "What is the IRS dollar threshold for de minimis benefits?", "a": "The IRS has not set an official per-benefit dollar threshold. While $75 is commonly cited as a practical benchmark, the actual analysis considers both the value and the frequency of the benefit. Small but frequently provided benefits are less likely to qualify."}, {"q": "Are employee achievement awards de minimis?", "a": "Employee achievement awards are covered by a separate exclusion under Section 74(c), not the de minimis rule. Non-cash awards for length of service or safety achievements can be excluded up to $1,600 per year for qualified plan awards, or $400 for non-qualified plan awards."}];

export default function DeMinimisfringePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is De Minimis Fringe Benefit?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An employer-provided benefit so small in value that accounting for it would be administratively unreasonable or impractical, which the IRS excludes from an employee's taxable income under Section 132(e).</p>
        </div>

        <h2>Why de minimis fringe benefits matter for employers</h2>
        <p>Section 132(e) of the Internal Revenue Code allows employers to provide certain low-value benefits to employees without including the value in taxable wages. The IRS does not set a specific dollar threshold for de minimis treatment, but a frequently cited benchmark is under $75 per benefit, though the actual analysis is more fact-specific and considers the frequency of the benefit as well as its value. Classic examples of qualifying de minimis fringe benefits include: occasional use of the company copier for personal use, holiday turkeys or hams of modest value, occasional meals or snacks provided in the workplace, occasional event tickets, birthday or holiday gifts of nominal value (not cash or near-cash), and flowers or fruit baskets for special occasions. Cash and cash equivalents such as gift cards almost never qualify as de minimis fringe benefits regardless of dollar amount because they have a readily ascertainable value and can be easily tracked. Frequency matters: a benefit provided rarely is more likely to qualify than the same benefit provided weekly. A once-a-year holiday party qualifies; free lunches every day do not. The exclusion also covers certain employer-operated eating facilities, transit passes up to the monthly exclusion limit, and the occasional use of employer-provided transportation for safety reasons. Benefits that do not qualify as de minimis must be included in the employee's W-2 as taxable wages and are subject to income tax withholding and FICA.</p>

        <h2>How BEG handles De Minimis Fringe Benefit for clients</h2>
        <p>BEG Managed Payroll advises clients on which employer-provided benefits require inclusion in taxable wages and which qualify for exclusion. Improperly excluded benefits create audit risk and potential restatement of employee W-2s. BEG ensures that benefit-related compensation is coded correctly in every payroll run at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Is a $25 Amazon gift card a de minimis fringe benefit?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Gift cards and other cash equivalents are never de minimis fringe benefits regardless of the dollar amount. The IRS position is that gift cards have a readily ascertainable value and can be easily tracked, making them taxable wages at any amount.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>What is the IRS dollar threshold for de minimis benefits?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>The IRS has not set an official per-benefit dollar threshold. While $75 is commonly cited as a practical benchmark, the actual analysis considers both the value and the frequency of the benefit. Small but frequently provided benefits are less likely to qualify.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Are employee achievement awards de minimis?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Employee achievement awards are covered by a separate exclusion under Section 74(c), not the de minimis rule. Non-cash awards for length of service or safety achievements can be excluded up to $1,600 per year for qualified plan awards, or $400 for non-qualified plan awards.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/de-minimis-fringe', url: 'https://www.beghr.com/resources/payroll-glossary/de-minimis-fringe', name: 'De Minimis Fringe Benefit | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'De Minimis Fringe Benefit', description: 'Learn what qualifies as a de minimis fringe benefit, what the IRS includes and excludes, and how to handle them in payroll.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'De Minimis Fringe Benefit', item: 'https://www.beghr.com/resources/payroll-glossary/de-minimis-fringe' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
