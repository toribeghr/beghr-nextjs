import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minister Housing Allowance | How to Set It Up in Payroll | BEG',
  description: 'A step-by-step guide to setting up minister housing allowance in payroll — designation requirements, IRS limits, what is excluded from income tax, and.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/church/minister-housing-allowance-payroll' },
  openGraph: {
    title: 'Minister Housing Allowance | How to Set It Up in Payroll | BEG',
    description: 'A step-by-step guide to setting up minister housing allowance in payroll — designation requirements, IRS limits, what is excluded from income tax, and h...',
    url: 'https://beghr.com/blog/payroll/church/minister-housing-allowance-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Minister Housing Allowance | How to Set It Up in Payroll | BEG', description: 'A step-by-step guide to setting up minister housing allowance in payroll — designation requirements, IRS limits, what is excluded from income tax, and h...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Does housing allowance have to be approved before it is paid?',
    a: 'Yes. The housing allowance must be officially designated by the governing body of the church or religious organization before it is paid — not retroactively. The designation should be in writing (typically in board minutes or a resolution) and should specify the dollar amount or percentage of compensation designated as housing allowance for the calendar year.',
  },
  {
    q: 'Is housing allowance excluded from self-employment tax for ministers?',
    a: 'No. Ministers who are dual-status taxpayers (employees for income tax, self-employed for Social Security and Medicare) must include their housing allowance in net earnings from self-employment when calculating self-employment tax (SE tax). The exclusion applies only to federal income tax, not to SE tax.',
  },
  {
    q: 'What is the IRS limit on the housing allowance exclusion?',
    a: 'The housing allowance exclusion is limited to the lesser of: (1) the amount officially designated as housing allowance, (2) actual housing expenses for the year, or (3) the fair rental value of the home including utilities. Ministers may not exclude more than they actually spend on housing or more than the home\'s fair rental value.',
  },
  {
    q: 'How does housing allowance appear on the W-2?',
    a: 'Housing allowance is not reported anywhere on the W-2 for income tax purposes — it is excluded from Box 1 (federal wages). However, churches must report the housing allowance amount in Box 14 of the W-2 as an informational item so the minister has the figure for their personal tax return, where they will determine how much is excludable.',
  },
];

export default function MinisterHousingAllowancePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Church</p>
              <h1>Minister Housing Allowance: How to Set It Up in Payroll Correctly</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                The minister housing allowance is one of the most valuable tax benefits in church payroll — and one of the most commonly mishandled. The exclusion must be properly designated and reported to be valid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Under IRC Section 107, ordained ministers may exclude from federal gross income the portion of their compensation designated by the church as a housing allowance — to the extent they actually spend it on housing and it does not exceed the fair rental value of their home. For many ministers, this exclusion is substantial.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Setting it up in payroll requires getting three things right: the designation process, the payroll system configuration, and the W-2 reporting. Missing any one of these creates compliance problems that the minister will discover at tax time — and may not be correctable retroactively.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Step 1 — Proper Designation Before Payment</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The governing body of the church (typically the board of elders, deacons, or trustees) must formally designate a portion of the minister's compensation as housing allowance before any payment is made. This means a written resolution, board minutes, or an employment contract that specifies the housing allowance amount or percentage.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          The designation should be revisited annually at the start of each calendar year. A designation for 2024 does not automatically carry over to 2025. Churches that fail to re-designate at the beginning of the year may lose the exclusion for that year.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Step 2 — Payroll System Configuration</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          In payroll, housing allowance should be set up as a separate earnings code that is excluded from federal income tax withholding but included in total compensation for bookkeeping and recordkeeping purposes. The payroll system must not withhold federal income tax on the designated housing allowance amount.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Important: ministers in dual-status positions (employees for income tax, self-employed for Social Security/Medicare) are not subject to FICA withholding in the standard sense. Instead, they pay self-employment tax on their net earnings, which includes housing allowance. If the church has opted into the FICA system under Section 3121(b)(8)(B), different rules apply and FICA withholding may be required.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          Most small churches have not made the FICA election — their ministers are self-employed for Social Security and Medicare purposes. In that case, the payroll system should not withhold FICA on minister compensation at all.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Step 3 — W-2 Reporting</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          At year-end, the minister's W-2 must reflect the correct reporting for housing allowance. The designated housing allowance amount is excluded from Box 1 (wages, tips, other compensation) but must be reported in Box 14 as an informational item. The minister uses the Box 14 figure on their personal return to determine how much of the housing allowance is actually excludable.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          If Boxes 3 and 5 (Social Security and Medicare wages) are blank or zero on the minister's W-2, that reflects their dual-status position. Ministers do not receive Social Security credit through payroll — they earn it through self-employment tax paid on their tax returns.
        </p>

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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Church payroll is specialized — BEG handles it</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>Housing allowance, dual-status minister setup, Form 4361 tracking, and FICA for non-ministerial staff — fully managed. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/church">Managed Payroll for Churches</Link> — full service details</li>
            <li><Link href="/blog/payroll/church/church-employee-fica-payroll">Church Employee FICA</Link> — who pays and who is exempt</li>
            <li><Link href="/blog/payroll/church/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Churches</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Minister Housing Allowance', item: 'https://beghr.com/blog/payroll/church/minister-housing-allowance-payroll' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}