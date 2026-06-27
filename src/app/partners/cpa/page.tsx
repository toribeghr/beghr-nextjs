import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CPA Partner Program | Refer Payroll Clients. No Conflict. | BEG',
  description: 'Refer clients to BEG for fully managed payroll. No conflict with your tax and accounting services. Clean, audit-ready payroll data every cycle. $25–45 PEPM.',
  alternates: { canonical: 'https://beghr.com/partners/cpa' },,
  openGraph: {
    title: 'CPA Partner Program | Refer Payroll Clients. No Conflict. | BEG',
    description: 'Refer clients to BEG for fully managed payroll. No conflict with your tax and accounting services. Clean, audit-ready payroll data every cycle. $25–45 P...',
    url: 'https://beghr.com/partners/cpa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'CPA Partner Program | Refer Payroll Clients. No Conflict. | BEG', description: 'Refer clients to BEG for fully managed payroll. No conflict with your tax and accounting services. Clean, audit-ready payroll data every cycle. $25–45 P...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Will BEG compete with my bookkeeping or tax services?',
    a: 'No. BEG manages payroll operations: running pay cycles, filing payroll taxes, generating W-2s, and managing multi-state compliance. We do not provide bookkeeping, financial statement preparation, tax planning, or any other accounting services. Your client relationship stays entirely yours.',
  },
  {
    q: 'What payroll data does BEG provide that helps with my work?',
    a: 'After each pay cycle, BEG produces consistent payroll registers with gross wages, deductions, net pay, and employer tax amounts organized by employee and period. Year-end W-2s and W-3 reconciliation are included. If you need payroll data in a specific format for your accounting software, we can discuss what we produce during a discovery call.',
  },
  {
    q: 'How does a referral work in practice?',
    a: 'You introduce BEG to your client and we take it from there. We handle the scope review, onboarding, and ongoing service. You stay informed if your client wants you involved in the payroll data handoff, or we operate independently — your call. There is no expectation of ongoing involvement on your end once the client is live.',
  },
  {
    q: 'Is there a formal referral fee arrangement?',
    a: 'We discuss referral arrangements on a case-by-case basis during our partner discovery call. We work with CPAs and accounting firms in a variety of ways depending on the volume and nature of the relationship. Book a call to discuss what makes sense for your practice.',
  },
];

export default function CPAPartnerPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Partner Program · CPAs &amp; Accounting Firms</p>
              <h1>The Payroll Referral CPAs Actually Want to Make</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Your business clients ask for payroll vendor recommendations. BEG is the answer that does not create more work for you: fully managed, compliance-focused, and built so that the data we produce makes your job easier, not harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Most CPAs have experienced the same situation: a client shows up at tax time with payroll records that are a mess. Mismatched W-2 and 1099 totals, mid-year pay code changes that were never documented, multi-state withholding that was never set up correctly. Cleaning it up takes hours you should not have to spend, and the underlying problem, which is that the client is running payroll without professional management, will happen again next year.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Referring that client to BEG solves the problem at the source. We run payroll for them, every cycle, with correct tax treatment, accurate filings, and clean records. You receive the output you actually need, and the payroll errors stop.
        </p>

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
                'Compliance updates as tax laws change',
                'Direct deposit and check distribution',
              ],
              color: '#000',
              border: '#ECAC60',
            },
            {
              label: 'You keep',
              items: [
                'Bookkeeping and general ledger',
                'Tax preparation and planning',
                'Financial statement preparation',
                'Client advisory relationship',
                'Audit and review engagements',
                'Business entity compliance',
                'All other accounting services',
              ],
              color: '#555',
              border: '#e5e5e5',
            },
          ].map(({ label, items, color, border }) => (
            <div key={label} style={{ border: `1px solid ${border}`, borderTop: `4px solid ${border === '#ECAC60' ? '#ECAC60' : '#e5e5e5'}`, borderRadius: '8px', padding: '1.5rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.95rem', color: border === '#ECAC60' ? '#000' : '#555' }}>{label}</strong>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ fontSize: '0.9rem', color, lineHeight: '1.9' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Why CPA Referrals Work Well with BEG</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The client relationship with a CPA is anchored in trust and access to financial records. When your client's payroll is managed correctly, your work becomes easier in every area that touches compensation data: income tax preparation, retirement contribution matching, benefits cost analysis, and financial projections.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          BEG clients receive consistent payroll registers after each cycle showing gross wages, deductions, net pay, and employer tax contributions, organized by employee and period. Year-end W-2s are produced and filed by BEG. State payroll tax returns are filed by BEG. The documentation your client brings to their annual tax appointment will be complete and accurate.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Beyond data quality, BEG eliminates common payroll problems that create accounting complications: misclassified workers, missed multi-state registrations, incorrectly calculated overtime, and pay codes that do not match accounting chart of accounts categories. When we onboard a new client, we review their current setup for these issues before the first managed run.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The setup is fast. From the client's signed agreement to their first managed pay cycle is typically 3 to 5 business days. Pricing is $25 per employee per month in their existing payroll system or $45 per employee per month in our iSolved account. No setup fees, no per-run charges, no add-ons for state filings or year-end.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Clients Who Benefit Most from This Referral</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Not every client needs BEG. The ones who do tend to share a few characteristics that CPA practices recognize immediately.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            'The business owner is running payroll personally and making errors you correct each year.',
            'The company has employees in multiple states and has not registered as an employer in all of them.',
            'The in-house person handling payroll has no formal payroll background and the quality is inconsistent.',
            'The company recently crossed 20 to 25 employees and payroll has become too complex for self-management.',
            'The business operates in an industry with complex payroll requirements: transportation, construction, healthcare, or multi-location retail.',
            'The company has had payroll tax penalties in the past two years.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '20px', height: '20px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#000', fontSize: '0.7rem', fontWeight: 700 }}>✓</span>
              </div>
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item}</p>
            </div>
          ))}
        </div>

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
            15-minute call to discuss how a CPA referral partnership works, what your clients can expect, and whether BEG is the right fit for your practice's client base.
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
              { '@type': 'ListItem', position: 3, name: 'CPAs & Accounting Firms', item: 'https://beghr.com/partners/cpa' },
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
