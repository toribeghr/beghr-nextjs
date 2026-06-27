import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Payroll vs. Hiring In-House for Churches | BEG',
  description: 'Church payroll outsourcing vs. hiring a bookkeeper or administrator. Real cost comparison for churches with 5–80 staff. Minister housing allowance, Social Security opt-out, and dual-tax status covered.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/church/managed-payroll-vs-in-house' },
};

const faqs = [
  {
    q: 'How does BEG handle minister housing allowance?',
    a: 'Ministers who own or rent their home may exclude a housing allowance from their gross income for federal income tax purposes, provided the allowance is designated in advance by the church board and does not exceed the actual cost of housing or the fair rental value. BEG configures minister compensation to reflect the designated housing allowance correctly in payroll records, ensuring the exclusion is applied properly and documented in a way that satisfies IRS requirements.',
  },
  {
    q: 'Our pastor has opted out of Social Security via Form 4361. Can BEG accommodate that?',
    a: 'Yes. Ministers who have filed Form 4361 and received IRS approval are exempt from self-employment tax on ministerial income. BEG configures the minister\'s payroll record to reflect this exemption. Note that other church employees, including non-ministerial staff like secretaries, custodians, and musicians, remain subject to standard FICA withholding unless they qualify for a separate exemption.',
  },
  {
    q: 'Do churches have to pay FICA taxes for their employees?',
    a: 'It depends. Churches with at least one non-minister employee generally must withhold and remit FICA taxes for non-ministerial staff, and must pay the employer share. However, churches with fewer than two non-minister employees, or that meet certain other criteria, may qualify for a FICA exception. Ministers are treated as self-employed for Social Security purposes and owe self-employment tax on their ministerial income unless they have opted out via Form 4361. BEG reviews your specific situation during onboarding to configure each employee category correctly.',
  },
  {
    q: 'We also operate a school and a daycare under the church. Can BEG manage all three payrolls?',
    a: 'Yes. Church-operated schools and daycares are common ministry extensions, and their staff are scoped into the same BEG engagement. We configure separate departments or cost centers in your payroll system so you can report wages by ministry, which is often needed for budget reporting to the board and for grant or subsidy documentation for the daycare program.',
  },
];

export default function ChurchComparisonPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Churches &amp; Religious Organizations</p>
              <h1>Managed Payroll vs. Hiring In-House for Churches</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                A real cost comparison for churches and religious organizations with 5 to 80 staff: what you spend on an in-house bookkeeper or administrator vs. what you spend with BEG managing minister housing allowance, dual-tax status, and FICA compliance for $25 to $45 per employee per month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Church payroll is unlike any other payroll category. Ministers are treated as self-employed for Social Security purposes while simultaneously being treated as employees for income tax withholding. Housing allowances are excluded from gross income under specific conditions that must be met before each year begins. Some ministers have formally opted out of Social Security entirely. And churches that operate schools, daycares, or other ministry programs must maintain separate payroll records for each program while keeping everything in compliance with IRS reporting requirements.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Most bookkeepers and church administrators learn church payroll on the job, which means errors often go undetected for years. This comparison covers the real cost of managing church payroll in-house versus a fully managed service that handles minister tax treatment correctly from the start.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>The Real Cost Comparison</h2>
        <p style={{ marginBottom: '1.25rem', color: '#555' }}>Estimates based on a church with 15 paid staff including 2 ministers, administrative staff, and nursery and custodial employees. In-house estimate reflects a part-time bookkeeper or church administrator handling payroll.</p>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Factor</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>BEG Managed Payroll</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>In-House Bookkeeper / Admin</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>DIY Software</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monthly cost (15 employees)', '$375–$675', '$2,000–$4,500', '$75–$200 + your time'],
                ['Annual cost', '$4,500–$8,100', '$24,000–$54,000+', '$900–$2,400 + errors'],
                ['Setup time', '3–5 business days', '2–6 weeks to hire or train', '2–4 weeks'],
                ['Minister housing allowance handling', 'Included', 'Varies by knowledge', 'Manual configuration'],
                ['Form 4361 Social Security opt-out', 'Included', 'Varies by knowledge', 'Manual configuration'],
                ['Dual tax status for ministers', 'Included', 'Often misunderstood', 'Rarely configured correctly'],
                ['Multi-ministry department coding', 'Included', 'Varies by training', 'Manual setup'],
                ['Error liability', 'BEG absorbs', 'Church absorbs', 'Church absorbs'],
                ['Coverage during turnover', 'No gap', 'Gap when position is vacant', 'No gap'],
                ['Year-end W-2 + W-3 reporting', 'Included', 'Included in salary/hours', 'Included in platform'],
              ].map(([factor, beg, house, diy], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #e5e5e5', background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                  <td style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>{factor}</td>
                  <td style={{ padding: '0.65rem 1rem', color: '#000', fontWeight: 500 }}>{beg}</td>
                  <td style={{ padding: '0.65rem 1rem', color: '#555' }}>{house}</td>
                  <td style={{ padding: '0.65rem 1rem', color: '#555' }}>{diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Makes Church Payroll Different</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Three issues in church payroll are consistently mishandled, and all three create IRS exposure when they go wrong.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          <strong>Minister dual tax status.</strong> Ordained ministers occupy a unique position in the tax code. They are employees for federal income tax withholding purposes, meaning the church can withhold income tax from their wages. But they are self-employed for Social Security and Medicare purposes, meaning they pay self-employment tax on their ministerial income rather than FICA. Most payroll systems are not configured to handle this correctly by default, and many bookkeepers set up minister payroll records exactly like regular employee records, which creates incorrect W-2 entries and potential FICA liability for both the church and the minister.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          <strong>Housing allowance designation and documentation.</strong> The housing allowance exclusion under IRC Section 107 allows a minister to exclude from gross income the portion of compensation designated as a housing allowance, up to the actual cost of housing or the fair rental value, whichever is lower. The designation must be made by the governing body before the start of the year it applies to. A designation made after the fact is not valid. When churches fail to formally adopt a housing allowance resolution each year, or when the designated amount is not reflected correctly in payroll records, the exclusion can be disallowed on audit.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          <strong>FICA for non-ministerial employees.</strong> Churches often assume they are exempt from all employment taxes. In most cases, churches must withhold and remit FICA for non-ministerial employees, including secretaries, custodians, youth directors, and childcare workers employed by the church. The specific exemptions are narrow and require affirmative filing to claim. BEG reviews your employee roster during onboarding and applies the correct tax treatment to each role.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How BEG Manages Church Payroll</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          BEG operates as your fully managed payroll department. We handle every pay cycle for all staff categories, from senior pastor to nursery worker to part-time custodian. We configure minister payroll with correct dual tax status, apply the board-designated housing allowance, and handle Form 4361 opt-outs where applicable.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          During onboarding, we review your current minister compensation agreements, confirm the housing allowance designation is properly documented, and audit your FICA setup for all employee categories. If your church also operates a school or daycare, we configure separate cost centers for each ministry in your existing payroll system.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          Pricing is $25 per employee per month in your existing system or $45 per employee per month in our iSolved account. For a 15-person church staff, that is $375 to $675 per month, all-inclusive. Most churches are live within 3 to 5 business days of contract signing.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>See what managed payroll costs for your church</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>
            Free 15-minute scope review. We will review your current minister compensation setup and confirm exact pricing for your staff size before you commit to anything.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
          >
            Book a Free Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related Resources</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/church">Managed Payroll for Churches</Link> — full service details, pricing, and onboarding process</li>
            <li><Link href="/services/managed-payroll">Managed Payroll Services</Link> — all industries and pricing overview</li>
            <li><Link href="/blog/compare/payroll-manager-vs-outsourcing">Hiring a Payroll Manager vs. Outsourcing</Link> — general cost comparison</li>
          </ul>
        </div>

      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
              { '@type': 'ListItem', position: 4, name: 'Managed Payroll vs. In-House for Churches', item: 'https://beghr.com/blog/payroll/church/managed-payroll-vs-in-house' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
    </article>
  );
}
