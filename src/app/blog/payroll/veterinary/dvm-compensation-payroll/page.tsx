import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Set Up DVM Salary and Production Bonuses in Payroll | BEG',
  description: 'A practical guide to DVM compensation structures in payroll -- base salary, production bonus calculation, associate vs. owner pay, and the most common.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/veterinary/dvm-compensation-payroll' },
  openGraph: {
    title: 'How to Set Up DVM Salary and Production Bonuses in Payroll | BEG',
    description: 'A practical guide to DVM compensation structures in payroll -- base salary, production bonus calculation, associate vs. owner pay, and the most common se...',
    url: 'https://beghr.com/blog/payroll/veterinary/dvm-compensation-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'How to Set Up DVM Salary and Production Bonuses in Payroll | BEG', description: 'A practical guide to DVM compensation structures in payroll -- base salary, production bonus calculation, associate vs. owner pay, and the most common se...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'How is a DVM production bonus typically calculated?',
    a: 'Most production bonuses are calculated as a percentage of the DVM\'s gross production -- the total fees billed and collected for services the doctor personally performed. The percentage varies by practice but commonly falls between 18% and 25% of collected production. The bonus is typically paid monthly or quarterly, not per paycheck.',
  },
  {
    q: 'Should DVM production bonuses be included in overtime calculations?',
    a: 'DVMs paid on a salary basis above the FLSA salary threshold ($684/week) are typically classified as exempt employees and are not entitled to overtime pay. If a DVM is salaried-exempt, production bonuses do not affect overtime calculations. If a DVM is paid hourly for any reason, the answer is different and you should consult your payroll provider.',
  },
  {
    q: 'How do you handle a DVM whose production in a month is below their base salary guarantee?',
    a: 'In a typical guarantee structure, the DVM earns the higher of their salary floor or their production percentage. When production falls short of the guarantee, you pay the base salary and no additional production bonus for that period. When production exceeds the guarantee, the DVM earns the production percentage and the base becomes irrelevant for that period.',
  },
  {
    q: 'How is DVM compensation reported on a W-2?',
    a: 'Both the base salary and all production bonuses paid through payroll are reported as W-2 wages in Box 1. There is no separate reporting category for production compensation. If bonuses are paid through payroll with proper withholding, they appear in the same W-2 total as salary.',
  },
];

export default function DVMCompensationPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "How to Set Up DVM Salary and Production Bonuses in Payroll | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/payroll/veterinary/dvm-compensation-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Veterinary</p>
              <h1>How to Set Up DVM Salary and Production Bonuses in Payroll</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                DVM compensation blends a salary guarantee with a production-based bonus structure. Setting it up in payroll correctly ensures accurate withholding, clean W-2s, and a compensation statement your associates can actually trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Most associate DVMs are paid on a hybrid model: a base salary that guarantees a minimum, plus a production bonus that kicks in when their earned production exceeds the guarantee. It is a straightforward concept but a surprisingly common source of payroll errors -- particularly around timing, withholding, and year-end reconciliation.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Standard DVM Compensation Structure</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          A typical associate DVM compensation arrangement works like this:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            { label: 'Base salary', body: 'A guaranteed annual salary paid on a bi-weekly or semi-monthly schedule, regardless of production levels. Common ranges for associate DVMs are $90,000 to $130,000 depending on experience, specialty, and geography.' },
            { label: 'Production percentage', body: 'A percentage of the doctor\'s gross collected production -- typically 18% to 25% of net collected revenue from services the DVM personally performed. This is calculated monthly or quarterly from the practice management software.' },
            { label: 'The guarantee mechanism', body: 'The DVM earns the higher of the base salary or the production percentage. When production percentage exceeds the annualized salary amount for the period, the DVM earns the production amount. When it falls short, the base salary is the floor.' },
          ].map(({ label, body }) => (
            <div key={label} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem', borderLeft: '4px solid #ECAC60' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{label}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Payroll Setup for Production Bonuses</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Production bonuses should be processed through payroll as a separate earnings code, not paid by check outside the payroll system. Running bonuses outside payroll bypasses withholding -- creating a tax problem for the DVM at filing time and a recordkeeping problem for the practice.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          In payroll, production bonuses are treated as supplemental wages. The IRS allows two methods for withholding on supplemental wages: a flat 22% federal withholding rate, or aggregating the bonus with regular wages and withholding at the blended rate. Most payroll systems use the flat rate by default. For high-earning DVMs who will owe more than 22% at their marginal rate, you may want to gross up or adjust.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          State income tax withholding on bonuses varies. Some states require the flat supplemental rate; others require you to annualize the bonus and withhold at the effective annual rate. Your payroll system should handle this automatically if it is set up correctly for the DVM's work state.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Owner DVM Compensation: Different Setup, Same Mistakes</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Owner DVMs who operate as an S-corp or as a professional corporation must pay themselves a reasonable salary through payroll -- subject to FICA -- before taking owner distributions. Many owner DVMs minimize their salary to reduce FICA exposure, but the IRS has challenged arrangements where the salary is clearly below market for the work being performed.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          A "reasonable salary" for a working owner DVM is not a fixed number -- it depends on what the practice would pay an associate for the same role, adjusted for the owner's specific responsibilities, productivity, and the local market. Getting this right matters because underpaying an owner salary increases S-corp audit risk and may result in FICA assessment on distributions that were treated as exempt.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Owner distributions are paid separately from payroll and are not subject to FICA. Only the salary component runs through payroll with withholding.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Common Setup Errors to Avoid</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            'Paying production bonuses by check outside payroll -- bypasses withholding and creates W-2 reconciliation problems.',
            'Not separating production bonus pay from salary in the payroll system -- makes year-end reporting and audit tracking harder.',
            'Applying the wrong withholding rate to bonus payments -- supplemental flat rate versus annualized rate affects how much the DVM owes at filing.',
            'Failing to include the owner DVM\'s salary in the quarterly 941 and annual W-2 -- all W-2 employees, including owners, must be included.',
            'Miscalculating the guarantee payout period -- if production is calculated monthly but salary is bi-weekly, the comparison periods must be aligned correctly.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Get DVM compensation set up correctly</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for veterinary practices including production bonus processing, associate and owner DVM setups, and year-end W-2s. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/veterinary">Managed Payroll for Veterinary Practices</Link> -- full service details</li>
            <li><Link href="/blog/payroll/veterinary/veterinary-staff-overtime-rules">Veterinary Staff Overtime Rules</Link> -- FLSA compliance guide</li>
            <li><Link href="/blog/payroll/veterinary/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Vet Practices</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'DVM Compensation', item: 'https://beghr.com/blog/payroll/veterinary/dvm-compensation-payroll' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}