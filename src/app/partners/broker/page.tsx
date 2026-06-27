import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurance & Benefits Broker Partner Program | BEG Managed Payroll',
  description: 'Refer clients to BEG for fully managed payroll. Clean payroll data simplifies workers\' comp audits and benefits sync. $25–$45 PEPM, no conflict.',
  alternates: { canonical: 'https://beghr.com/partners/broker' },
};

const faqs = [
  {
    q: 'Will BEG compete with my benefits or insurance services?',
    a: 'No. BEG manages payroll operations only: running pay cycles, filing payroll taxes, handling multi-state compliance, and producing W-2s. We do not sell insurance, place benefits plans, or advise clients on coverage. Referring a client to BEG does not create any conflict with your existing business relationship.',
  },
  {
    q: 'How does BEG payroll data help with workers\' comp audits?',
    a: 'Workers\' compensation audits require accurate gross wage data broken down by employee, job classification, and pay period. When BEG manages payroll, that data exists in a consistent, organized format that auditors can review directly. Clients with messy payroll records often have their WC premiums recalculated upward after audits because classifications are wrong or wages are understated. Clean BEG payroll data typically results in cleaner audits and more accurate premium calculations.',
  },
  {
    q: 'How does a referral work?',
    a: 'You introduce BEG to your client. We handle the discovery call, scope review, onboarding, and ongoing service entirely. You remain your client\'s primary advisor for benefits and insurance. We run payroll. There is no ongoing coordination required from you unless your client wants you involved in how payroll data connects to their benefits enrollment or WC audit reporting.',
  },
  {
    q: 'Is there a formal referral arrangement available?',
    a: 'We discuss referral arrangements on a case-by-case basis depending on the nature and volume of the relationship. Book a 15-minute call to discuss what structure makes sense for your book of business.',
  },
];

export default function BrokerPartnerPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Partner Program · Insurance &amp; Benefits Brokers</p>
              <h1>When Your Clients' Payroll Is Managed Right, Your Job Gets Easier</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Workers' comp audits run cleaner. Benefits data connects more reliably. And your clients stop coming to you with the HR chaos that was never your problem to solve in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Insurance and benefits brokers work adjacent to payroll every day. Workers' compensation premiums are calculated on payroll data. Benefits enrollment connects to employee headcount and hours. HR headaches that clients bring to their broker often trace back to payroll systems that are not set up correctly or not being managed by anyone with real payroll expertise.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          When you refer a client to BEG, the payroll side of their HR operation becomes a solved problem. Audits are cleaner. Enrollment data is more reliable. And you become the advisor who connected all the pieces, not just the person who placed the policy.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How BEG Payroll Helps Your Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {[
            {
              title: 'Workers\' comp audits',
              body: 'Auditors need gross wages by employee, job class, and period. BEG produces this data consistently every cycle. Clean records mean accurate premium calculations and fewer post-audit surprises for your clients.',
            },
            {
              title: 'Benefits data reliability',
              body: 'When headcount, hours, and classification changes are processed correctly in payroll, benefits eligibility tracking is more accurate. Clients who bounce between benefit plans because of payroll coding errors usually have underlying payroll issues that BEG catches at onboarding.',
            },
            {
              title: 'HR complexity off your plate',
              body: 'Clients asking their broker about payroll tax questions, state registration, or W-2 issues are asking the wrong person. Once BEG is managing their payroll, those questions go to us — not you.',
            },
            {
              title: 'Add value without adding services',
              body: 'Introducing a client to BEG costs you nothing and positions you as the advisor who solved a problem beyond your lane. You are not managing payroll; you are the reason their whole HR picture came together.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{title}</strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What BEG Does — and Does Not Do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {[
            {
              label: 'BEG handles',
              items: [
                'Running every pay cycle',
                'Payroll tax deposits and filings',
                'Multi-state employer registration and withholding',
                'Year-end W-2 and W-3 preparation',
                'New hire and termination processing',
                'Workers\' comp audit payroll data',
                'Compliance updates as tax laws change',
              ],
              border: '#ECAC60',
            },
            {
              label: 'You keep',
              items: [
                'P&C insurance placement',
                'Benefits plan design and placement',
                'Employee benefits enrollment',
                'Coverage advising and renewals',
                'Client HR advisory relationship',
                'Risk management consulting',
                'All other broker services',
              ],
              border: '#e5e5e5',
            },
          ].map(({ label, items, border }) => (
            <div key={label} style={{ border: `1px solid ${border}`, borderTop: `4px solid ${border}`, borderRadius: '8px', padding: '1.5rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.95rem', color: border === '#ECAC60' ? '#000' : '#555' }}>{label}</strong>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ fontSize: '0.9rem', color: border === '#ECAC60' ? '#000' : '#555', lineHeight: '1.9' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Clients Who Benefit Most from This Referral</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The clients who get the most value from BEG tend to show up in predictable ways in a broker's book.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            'Clients whose workers\' comp audit consistently results in a large premium adjustment because their payroll records are inaccurate.',
            'Business owners running their own payroll in QuickBooks or a basic platform without dedicated payroll expertise.',
            'Companies with 20 to 200 employees that have grown past the point where informal payroll management is adequate.',
            'Clients with employees in multiple states who have not registered in all applicable states.',
            'Businesses in industries with complex payroll rules: transportation, construction, healthcare, or multi-location service businesses.',
            'Any client who asks you about payroll vendors because they are not happy with their current setup.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '20px', height: '20px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#000', fontSize: '0.7rem', fontWeight: 700 }}>✓</span>
              </div>
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Clients Pay</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          BEG charges $25 per employee per month when we operate inside the client's existing payroll system, or $45 per employee per month when we run payroll through our iSolved account. Both tiers are all-inclusive: no setup fees, no per-run charges, no add-ons for state filings or year-end W-2s.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Setup is fast. From signed agreement to first managed pay run is typically 3 to 5 business days. The client does not need to switch platforms or migrate data. BEG operates inside what they already use.
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Let's talk about a referral relationship</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>
            15-minute call to discuss how a broker referral partnership works, what your clients can expect, and whether BEG is the right fit for your book of business.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
          >
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/partners">Partner Program Overview</Link> — all partner types</li>
            <li><Link href="/services/managed-payroll">Managed Payroll Services</Link> — full service details and pricing</li>
            <li><Link href="/blog/compare/payroll-manager-vs-outsourcing">Hiring a Payroll Manager vs. Outsourcing</Link> — share with clients considering the switch</li>
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
              { '@type': 'ListItem', position: 2, name: 'Partners', item: 'https://beghr.com/partners' },
              { '@type': 'ListItem', position: 3, name: 'Insurance & Benefits Brokers', item: 'https://beghr.com/partners/broker' },
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
