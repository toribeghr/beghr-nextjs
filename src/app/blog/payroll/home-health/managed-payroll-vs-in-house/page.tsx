import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Payroll vs. Hiring In-House for Home Health Agencies | BEG',
  description: 'Home health agency payroll outsourcing vs. hiring in-house. Real cost comparison for agencies with 15–150 staff. Travel time compensation, EVV compliance, multi-state operations, and FLSA covered.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/home-health/managed-payroll-vs-in-house' },
};

const faqs = [
  {
    q: 'Is travel time between client visits compensable under FLSA?',
    a: 'Yes. Under the Fair Labor Standards Act, time a home health aide or nurse spends traveling between client visits during the workday is compensable work time. It must be counted toward the 40-hour overtime threshold and paid at no less than the applicable minimum wage. Travel from the employee\'s home to the first client and from the last client back home at the end of the day is generally not compensable. BEG configures your payroll to track and compensate inter-client travel time correctly, which is one of the most common FLSA violations in the home health industry.',
  },
  {
    q: 'Can BEG handle Electronic Visit Verification payroll data?',
    a: 'Yes. EVV systems record visit start and end times for Medicaid-funded home care services. BEG integrates EVV visit data into your payroll processing workflow so that aide hours, including travel time between visits, are calculated consistently with your EVV records. This reduces the risk of discrepancies between EVV data and payroll records that can trigger Medicaid audit flags.',
  },
  {
    q: 'We have aides working in three different states. Can BEG manage all of them in one engagement?',
    a: 'Yes. Multi-state home health payroll is managed within a single BEG engagement at no extra charge per state. We handle state tax registration, withholding, unemployment insurance, and filing in each state where you have employees. If you expand to additional states, we update your configuration before the first pay cycle in the new state.',
  },
  {
    q: 'How long does it take to get home health agency payroll set up with BEG?',
    a: 'From signed agreement to first live pay run is typically 3 to 5 business days. During that window, we review your current travel time policy, confirm your EVV integration workflow, and confirm state tax registrations for each operating state. Most agencies see an immediate reduction in travel time compliance issues starting with the first managed cycle.',
  },
];

export default function HomeHealthComparisonPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Home Health Agencies</p>
              <h1>Managed Payroll vs. Hiring In-House for Home Health Agencies</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                A real cost comparison for home health and home care agencies with 15 to 150 staff: what you spend on an in-house payroll hire vs. what you spend with BEG managing travel time compensation, EVV integration, multi-state operations, and FLSA compliance for $25 to $45 per employee per month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Home health agency payroll carries FLSA compliance risks that most agencies underestimate. The most common and most expensive is the failure to compensate aides and nurses for travel time between client visits. Under federal law, this inter-client travel is work time, and it must be included in hours worked for overtime purposes. Agencies that omit it from time calculations face back pay liability that can stretch years into the past.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Add to that the complexity of EVV data reconciliation, multi-state payroll for agencies operating across multiple states, and Medicaid reimbursement documentation requirements, and the case for professional payroll management becomes straightforward. This comparison covers the real numbers on what in-house payroll management costs versus a fully managed service.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>The Real Cost Comparison</h2>
        <p style={{ marginBottom: '1.25rem', color: '#555' }}>Estimates based on a 40-person home health agency with aides, LPNs, and RNs. In-house salary reflects national median for payroll specialists with healthcare payroll experience.</p>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Factor</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>BEG Managed Payroll</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Hiring In-House</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>DIY Software</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monthly cost (40 employees)', '$1,000–$1,800', '$5,200–$7,500', '$150–$400 + your time'],
                ['Annual cost', '$12,000–$21,600', '$62,400–$90,000+', '$1,800–$4,800 + errors'],
                ['Setup time', '3–5 business days', '4–8 weeks to hire', '2–4 weeks'],
                ['Inter-client travel time compensation', 'Included', 'Varies by candidate', 'Manual configuration'],
                ['EVV data integration into payroll', 'Included', 'Varies by candidate', 'Manual reconciliation'],
                ['Multi-state payroll', 'All states, no extra fee', 'Requires specialist', 'Manual research required'],
                ['Medicaid documentation compliance', 'Included', 'Varies by knowledge', 'Manual production'],
                ['Error liability', 'BEG absorbs', 'Your agency absorbs', 'Your agency absorbs'],
                ['Coverage during turnover', 'No gap', 'Position must be backfilled', 'No gap'],
                ['Scales with census growth', 'No added overhead', 'New hire as volume grows', 'Linear increase'],
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

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Makes Home Health Payroll Different</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Three payroll issues create most of the compliance exposure for home health and home care agencies, and they are all interconnected.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          <strong>Inter-client travel time as compensable work time.</strong> When a home health aide finishes a morning visit with one client and drives to an afternoon visit with another client, that drive time is work time under the FLSA. It must be counted toward total hours worked for the week, included in the overtime calculation, and paid at no less than the applicable minimum wage. The DOL has been aggressive in enforcing this requirement in the home care industry, and agencies that have not been tracking inter-client travel correctly often face multi-year back pay liability when audited. Common errors include tracking only visit hours, not including travel in the overtime calculation, or paying a flat mileage reimbursement that does not also cover the wage for the travel time.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          <strong>EVV reconciliation and Medicaid compliance.</strong> The 21st Century Cures Act requires states to implement Electronic Visit Verification for most Medicaid-funded home care services. EVV records create a timestamp of when each visit started and ended. When these records do not match payroll records for the same visits, Medicaid auditors flag the discrepancy. Agencies that process payroll without reconciling EVV data create audit exposure on both the billing and payroll sides simultaneously.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          <strong>Multi-state workforce management.</strong> Home health agencies that operate in more than one state must register as an employer in each state where aides work, withhold state income tax at the correct rate, and comply with state-specific wage payment laws. Some states have their own overtime rules that are more expansive than the FLSA, and some have mandatory sick leave requirements that interact with how paid time off is tracked in payroll. BEG manages all of this as part of the standard engagement.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How BEG Manages Home Health Agency Payroll</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          BEG operates as your fully managed payroll department. We run every pay cycle, handle all tax filings, and manage compliance updates as federal and state requirements evolve. We work inside your existing payroll system, so there is no migration and no disruption to your scheduling or EVV workflows.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          During onboarding, we review your current travel time policy and how it is reflected in your payroll system, confirm your EVV reconciliation process, and audit your state tax registrations. We then configure payroll to track travel time correctly and reconcile it with your EVV data before the first managed run.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          Pricing is $25 per employee per month in your existing system or $45 per employee per month in our iSolved account. For a 40-person agency, that is $1,000 to $1,800 per month, all-inclusive, compared to $62,400 to $90,000 annually for a qualified in-house payroll specialist. Most agencies are live within 3 to 5 business days of contract signing.
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>See what managed payroll costs for your home health agency</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>
            Free 15-minute scope review. We will confirm the right pricing tier for your census and review your current travel time and EVV setup before you commit to anything.
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
            <li><Link href="/services/managed-payroll/home-health">Managed Payroll for Home Health Agencies</Link> — full service details, pricing, and onboarding process</li>
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
              { '@type': 'ListItem', position: 4, name: 'Managed Payroll vs. In-House for Home Health Agencies', item: 'https://beghr.com/blog/payroll/home-health/managed-payroll-vs-in-house' },
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
