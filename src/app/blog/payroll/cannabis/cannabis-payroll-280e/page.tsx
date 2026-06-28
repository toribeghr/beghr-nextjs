import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cannabis 280E & Payroll | What You Can and Can't Deduct | BEG",
  description: 'How 280E affects cannabis payroll: COGS deductions, disallowed expenses, and how to structure compensation to minimize your tax exposure.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/cannabis/cannabis-payroll-280e' },
  openGraph: {
    title: 'Cannabis Payroll & Section 280E | What You Can Deduct | BEG',
    description: 'How IRC Section 280E affects cannabis business payroll tax deductions — what is deductible as COGS, what is disallowed, and how to structure payroll to ...',
    url: 'https://beghr.com/blog/payroll/cannabis/cannabis-payroll-280e',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis Payroll & Section 280E | What You Can Deduct | BEG', description: 'How IRC Section 280E affects cannabis business payroll tax deductions — what is deductible as COGS, what is disallowed, and how to structure payroll to ...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Does 280E apply to cannabis businesses in states where marijuana is legal?',
    a: 'Yes. Section 280E is a federal tax code provision and applies to all businesses that traffic in Schedule I or II controlled substances under federal law — regardless of state legalization status. Until cannabis is federally rescheduled or 280E is amended, cannabis businesses in legal states are still subject to its restrictions.',
  },
  {
    q: 'What payroll costs are deductible through COGS under 280E?',
    a: 'Labor costs directly tied to the production of cannabis products are deductible as Cost of Goods Sold. For cultivators, this includes wages for cultivation staff, harvest labor, and processing workers. For manufacturers, it includes production line wages. For dispensaries, COGS is more limited and generally covers the direct cost of acquiring inventory, not retail or administrative labor.',
  },
  {
    q: 'Can dispensaries deduct budtender wages under 280E?',
    a: 'Budtender wages are generally considered selling expenses — not COGS — and are disallowed under 280E for federal tax purposes. Some dispensaries attempt to allocate a portion of budtender time to inventory management or quality control as a COGS argument, but this requires careful documentation and carries audit risk. This is an area where tax counsel is essential.',
  },
  {
    q: 'What happens if a cannabis business takes deductions it is not entitled to?',
    a: 'If the IRS audits and disallows deductions that a cannabis business took in violation of 280E, the result is additional taxable income, back taxes on that income, and potentially substantial penalties and interest. The IRS has aggressively audited cannabis businesses in recent years specifically to enforce 280E compliance.',
  },
];

export default function Cannabis280EPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Cannabis</p>
              <h1>Cannabis Business Payroll Under Section 280E: What You Can and Can't Deduct</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                IRC Section 280E is the single most impactful federal tax rule for cannabis businesses. It disallows ordinary business deductions — but does not prohibit COGS deductions. Where payroll lands determines how much tax you owe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Section 280E of the Internal Revenue Code prohibits businesses that traffic in Schedule I or II controlled substances from deducting ordinary and necessary business expenses. Cannabis is federally classified as Schedule I. The result: cannabis businesses cannot deduct most expenses that every other business takes for granted — including most payroll costs.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The exception is Cost of Goods Sold (COGS). Expenses included in COGS reduce gross income, not taxable income — and 280E only restricts deductions, not COGS calculations. Labor costs that qualify as COGS are therefore the primary way cannabis businesses reduce their federal tax liability.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How 280E Affects Payroll Deductibility</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Employee Type</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Deductibility Under 280E</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Cultivation / Grow Staff', 'Deductible (COGS)', 'Direct production labor'],
                ['Harvest / Trim Labor', 'Deductible (COGS)', 'Direct production labor'],
                ['Processing / Extraction Staff', 'Deductible (COGS)', 'If directly tied to production'],
                ['Dispensary Budtenders', 'Disallowed (selling expense)', 'Not COGS; 280E applies'],
                ['Dispensary Manager', 'Mostly disallowed', 'Some COGS allocation possible with documentation'],
                ['Administrative / HR / Finance', 'Disallowed', 'Ordinary business expenses blocked by 280E'],
                ['Compliance / Regulatory Staff', 'Disallowed', 'Not production labor'],
                ['Delivery Drivers (inventory)', 'Partial COGS argument', 'Depends on allocation method; document carefully'],
              ].map(([role, status, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{role}</td>
                  <td style={{ padding: '10px 14px', color: status.includes('Disallowed') ? '#c0392b' : status.includes('Deductible') ? '#27ae60' : '#f39c12', fontWeight: 600, fontSize: '0.85rem' }}>{status}</td>
                  <td style={{ padding: '10px 14px', color: '#555' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Structuring Payroll to Maximize Allowable COGS</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Because COGS-classified labor is the main vehicle for reducing cannabis federal tax liability, how you code employees in your payroll system matters significantly. A dispensary with both a retail operation and an on-site processing or packaging operation can allocate a portion of certain employees' time to production activities — but this requires time-tracking documentation and a defensible allocation methodology.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Vertically integrated cannabis companies (cultivator + processor + retailer) have the most flexibility because more of their total labor touches COGS-eligible activities. Pure retail dispensaries have the most restricted deductibility because their labor is almost entirely selling and administrative.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The payroll implication: job codes, department allocations, and time-tracking in your payroll system need to mirror your COGS methodology exactly. Mismatches between how employees are coded in payroll and how you claim COGS on your return create audit exposure.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Payroll Taxes Are Still Owed in Full</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          280E restricts income tax deductions — it does not reduce your payroll tax obligations. Every cannabis employer still owes FICA, FUTA, SUTA, and state income tax withholding on all employees, regardless of whether those wages are deductible for income tax purposes. Cannabis businesses pay the full employer payroll tax stack on wages that produce no income tax deduction.
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Cannabis payroll is complex — let BEG run it</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for cannabis businesses including COGS allocation coding, multi-state withholding, and 280E-aware recordkeeping. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/cannabis">Managed Payroll for Cannabis Businesses</Link> — full service details</li>
            <li><Link href="/blog/payroll/cannabis/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Cannabis</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Cannabis Payroll 280E', item: 'https://beghr.com/blog/payroll/cannabis/cannabis-payroll-280e' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
