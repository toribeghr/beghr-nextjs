import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'S-Corp Owner Salary: What Nobody Tells Agency Owners | BEG',
  description: 'How to set a reasonable S-corp salary for a marketing agency owner -- what the IRS requires, what counts as reasonable compensation, and how owner.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/marketing-agency/scorp-owner-salary-payroll' },
  openGraph: {
    title: 'S-Corp Owner Salary: What Nobody Tells Agency Owners | BEG',
    description: 'How to set a reasonable S-corp salary for a marketing agency owner -- what the IRS requires, what counts as reasonable compensation, and how owner distri...',
    url: 'https://www.beghr.com/blog/payroll/marketing-agency/scorp-owner-salary-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'S-Corp Owner Salary: What Nobody Tells Agency Owners | BEG', description: 'How to set a reasonable S-corp salary for a marketing agency owner -- what the IRS requires, what counts as reasonable compensation, and how owner distri...', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'What happens if an S-corp owner takes no salary and only distributions?',
    a: 'The IRS treats this as an attempt to avoid FICA taxes. If discovered in an audit, the IRS can reclassify distributions as wages and assess back FICA taxes on the reclassified amount, plus penalties and interest. S-corp owners who work in the business must pay themselves a reasonable salary through payroll.',
  },
  {
    q: 'Is there a formula for determining reasonable compensation for an agency owner?',
    a: 'There is no IRS-published formula. The IRS looks at what the business would pay an unrelated employee to perform the same services. Relevant data points include industry salary surveys, the owner\'s qualifications and experience, the time devoted to the business, and comparable salaries at similar agencies. For a working agency owner who manages client relationships, leads team, and drives revenue, a reasonable salary is generally well above minimum wage.',
  },
  {
    q: 'Can the owner-salary be lower in slow revenue months?',
    a: 'S-corp shareholders must be paid on a salary basis -- meaning a set amount per pay period -- not based on revenue fluctuations. If cash flow is the concern, the salary should reflect a sustainable floor and distributions (taken separately) can vary with agency cash position. Fluctuating "salaries" that mirror revenue look like distributions dressed up as wages to avoid FICA in reverse.',
  },
  {
    q: 'How do owner draws differ from salary?',
    a: 'An S-corp does not have "owner draws" in the same sense as a sole proprietorship. Owners take two types of payments: W-2 salary (processed through payroll, subject to FICA) and distributions (ownership distributions of profit, not subject to FICA, taken outside payroll). The strategy is to pay a reasonable salary and supplement income with distributions -- not to avoid salary altogether.',
  },
];

export default function SCorpOwnerSalaryPage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "S-Corp Owner Salary: What Nobody Tells Agency Owners | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/marketing-agency/scorp-owner-salary-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Marketing Agencies</p>
              <h1>S-Corp Owner Salary in Payroll: What Marketing Agency Owners Need to Know</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Marketing agency owners operating as S-corps must pay themselves a reasonable salary through payroll -- not just take distributions. The IRS is watching, and the penalties for getting it wrong are significant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          The S-corp structure is popular among marketing agency owners because it allows business profits to pass through to the owner without double taxation -- and because S-corp distributions are not subject to self-employment (FICA) taxes. The tax savings are real. But the IRS requires that S-corp shareholders who work in the business pay themselves a "reasonable salary" through payroll before taking distributions. Owners who skip the salary to maximize FICA savings are creating significant audit exposure.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How S-Corp Compensation Works in Payroll</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'W-2 salary', body: 'The owner is added to payroll as a regular W-2 employee. A set salary amount is paid each pay period. Federal and state income tax is withheld. FICA (Social Security and Medicare) is withheld from the employee\'s wages and matched by the employer (the S-corp). The total FICA cost is 15.3% of salary.' },
            { label: 'Profit distributions', body: 'After the S-corp pays all business expenses, including the owner\'s salary, remaining profit can be distributed to shareholders in proportion to ownership. Distributions are not subject to FICA and are reported on Schedule K-1 for the shareholder\'s personal return.' },
            { label: 'The FICA savings zone', body: 'The tax benefit of S-corp status comes from paying only FICA on salary -- not on the entire profit. An owner earning $200K in net profit who takes a $100K salary saves FICA on the remaining $100K distributed. The key is that the salary must be "reasonable" for the actual work performed.' },
          ].map(({ label, body }) => (
            <div key={label} style={{ border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{label}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What "Reasonable Compensation" Means for Agency Owners</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The IRS defines reasonable compensation as the amount a similar business would pay for comparable services in an arm's-length transaction. For a marketing agency owner who actively manages the business, this is not a token salary -- it is what the market pays for the actual work being performed.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Agency Size / Owner Role</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Reasonable Salary Range (Approximate)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Solo freelancer / micro agency (primary doer)', '$60,000 – $90,000'],
                ['Agency owner managing 2–5 staff (player-coach)', '$80,000 – $120,000'],
                ['Agency owner managing 10–20 staff (CEO/strategy focus)', '$100,000 – $160,000'],
                ['Agency owner at $3M+ revenue (executive role)', '$130,000 – $200,000+'],
              ].map(([role, range], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px' }}>{role}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem', fontSize: '0.9rem', color: '#555' }}>
          These are illustrative ranges based on industry data. Actual reasonable compensation depends on role, experience, geography, and agency revenue. Use salary surveys (BLS, AIGA, industry benchmarks) to document your methodology.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Payroll Processing for Owner-Employees</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Owner-employees are processed through payroll like any other employee: they have a W-4 on file, receive a W-2 at year-end, have federal and state income tax withheld, and have FICA withheld and matched by the employer (the S-corp). The S-corp pays its quarterly 941 taxes and year-end W-2 filings the same as it does for all employees. One additional step: the owner's S-corp K-1 will reflect the wage deduction, so the salary on the W-2 and the business deduction on the 1120-S must be consistent.
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Get your owner-salary set up right from the start</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for marketing agencies including S-corp owner-employee setup. 15-minute discovery call.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/marketing-agency">Managed Payroll for Marketing Agencies</Link> -- full service details</li>
            <li><Link href="/blog/payroll/marketing-agency/marketing-agency-remote-payroll">Multi-State Remote Payroll for Agencies</Link> -- compliance guide</li>
            <li><Link href="/blog/payroll/marketing-agency/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Agencies</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'S-Corp Owner Salary', item: 'https://www.beghr.com/blog/payroll/marketing-agency/scorp-owner-salary-payroll' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}