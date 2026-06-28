import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Payroll FAQ | Common Questions Answered | BEG',
  description: 'Answers to the most common questions about managed payroll: cost, implementation, what\'s included, compliance, and how it works.',
  alternates: {
    canonical: 'https://beghr.com/faq/managed-payroll',
  },
  openGraph: {
    title: 'Managed Payroll FAQ | Common Questions Answered | BEG',
    description: 'Answers to the most common questions about managed payroll: cost, implementation, what\'s included, compliance, and how it works.',
    url: 'https://beghr.com/faq/managed-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Payroll FAQ | Common Questions Answered | BEG',
    description: 'Answers to the most common questions about managed payroll: cost, implementation, what\'s included, compliance, and how it works.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is managed payroll?',
    a: 'Managed payroll is a fully outsourced payroll function where a service provider runs every aspect of payroll on your behalf. That includes processing each pay cycle, calculating gross-to-net pay, withholding and remitting federal and state taxes, filing quarterly and annual returns, producing W-2s, and handling employee paycheck questions. Unlike payroll software, you do not log in and run payroll yourself. The managed provider does everything. BEG provides fully managed payroll at a flat rate of $25-$45 per employee per month, all-inclusive.',
  },
  {
    q: 'How much does managed payroll cost?',
    a: 'BEG charges $25-$45 per employee per month (PEPM), all-inclusive. The exact rate depends on your employee count, pay frequency, and complexity. For a 50-person company, that is $1,250-$2,250 per month total, which is far less than a full-time payroll manager at $60,000-$100,000 per year in salary and benefits. There are no per-run charges, no annual W-2 fees, no module add-ons, and no filing surcharges. You get one flat monthly number on your discovery call before committing to anything.',
  },
  {
    q: 'What does managed payroll include?',
    a: 'BEG managed payroll includes: payroll processing for every cycle, gross-to-net calculations, direct deposit, tax withholding and remittance, quarterly 941 filings, annual 940 and W-2 production and filing with the SSA, state unemployment insurance (SUTA) filings, new hire reporting in all 50 states, garnishment calculation and remittance, ACA 1094/1095 reporting for applicable large employers, year-end reconciliation and close, and employee support for paycheck questions. No separate fees for any of these. All covered at your flat PEPM rate.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Most BEG clients are running their first live managed payroll within 3-5 business days of signing. The implementation process includes a discovery call to review your current setup, data migration or system access configuration, a test cycle to verify everything, and confirmation of your dedicated BEG contact before the first live run. If we work in your existing payroll system rather than migrating you to iSolved, implementation is often faster because there is no platform setup required.',
  },
  {
    q: 'Do I need to migrate to a new system?',
    a: 'No. BEG can run payroll in your existing payroll system, including ADP, Paychex, QuickBooks Payroll, and others, or in BEG\'s own iSolved account if you prefer. Most clients do not migrate anything. We configure our process around your current setup and run from there. This is one of the reasons BEG clients switch quickly: there is no painful data migration, no employee re-training on new software, and no disruption to how your team works.',
  },
  {
    q: 'What states do you cover?',
    a: 'BEG manages payroll across all 50 states as part of the standard service. Multi-state payroll is included at no additional charge. That covers separate state tax registrations, state unemployment insurance (SUTA) filings, local tax handling, and compliance updates when states change rates or reporting requirements. If you add employees in a new state, your BEG contact handles the registration and configuration. You do not need to manage any of this yourself.',
  },
  {
    q: 'What happens if there is a payroll error?',
    a: 'You contact your dedicated BEG payroll specialist directly. The person who runs your payroll corrects the error. Not a 1-800 support line. Not a ticket queue. Not a first-level rep who escalates to someone else. BEG is accountable for payroll accuracy, and corrections are handled at no additional charge. If an error results in an IRS or state penalty, BEG works with you to resolve it. You are not left to deal with a government agency while trying to reach a vendor support team.',
  },
  {
    q: 'Can you handle multi-state payroll?',
    a: 'Yes. Multi-state payroll is a standard part of BEG\'s managed service. This includes registering with each state\'s taxing authority, calculating and remitting state income tax withholding per each state\'s rules, filing state unemployment insurance (SUTA) returns, handling local payroll taxes where applicable, and staying current when state rates and thresholds change. If you operate in 10 states or 40 states, the process is the same. Your BEG contact manages all of it.',
  },
  {
    q: 'How is managed payroll different from a PEO?',
    a: 'A Professional Employer Organization (PEO) co-employs your workers. Your employees technically become employees of the PEO, and the PEO takes on employer-of-record liability. This gives the PEO leverage over your payroll decisions and usually requires you to use their benefits, their workers\' comp carrier, and their systems. BEG managed payroll does not co-employ anyone. You remain the employer of record. BEG runs your payroll as a service provider, not as a co-employer. You keep full control of your employment decisions, benefits, and vendors. This distinction matters significantly for regulatory compliance and contractual flexibility.',
  },
  {
    q: 'Is managed payroll right for a small business?',
    a: 'Yes. BEG works with businesses from fewer than 10 employees up to several hundred. The value proposition changes slightly by size: smaller companies benefit primarily from eliminating the owner or office manager spending hours on payroll every two weeks and from having a professional handle all the tax filings. Mid-size companies benefit from eliminating the cost of a dedicated payroll hire and from having consistent coverage regardless of turnover. At $25-$45 PEPM, the math works at virtually any employee count compared to the cost and risk of managing payroll in-house.',
  },
  {
    q: 'What payroll software do you work with?',
    a: 'BEG can work within your existing payroll platform or run payroll in our iSolved account. Existing platforms BEG can work within include ADP Run, ADP Workforce Now, Paychex Flex, QuickBooks Payroll, Gusto, and other major platforms. If you prefer to move to iSolved, BEG handles the migration as part of onboarding. iSolved is BEG\'s preferred platform for new clients because of its compliance automation, SOC 2 Type II security posture, and comprehensive reporting capabilities. The choice is yours and does not affect your PEPM rate.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 15-minute discovery call with BEG. On that call, we review your current payroll setup, your employee count and pay structure, any compliance requirements specific to your industry or states, and your timeline. You will get an exact monthly cost before the call ends. If you decide to move forward, BEG handles the rest: data setup, your first live payroll, and an introduction to your dedicated payroll contact. There is no commitment required from the discovery call.',
  },
];

export default function ManagedPayrollFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://beghr.com/faq' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll FAQ', item: 'https://beghr.com/faq/managed-payroll' },
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

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h1>Managed Payroll FAQ</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              12 detailed answers to the most common questions about managed payroll services: what it costs, what it covers, how it works, and whether it is right for your business.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/faq" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All FAQ topics</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="faq">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item reveal">
                <h2>{q}</h2>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Resources</p>
            <h2>More answers and tools</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }} className="reveal">
            {[
              { label: 'Payroll Outsourcing FAQ', href: '/faq/payroll-outsourcing' },
              { label: 'Payroll Compliance FAQ', href: '/faq/payroll-compliance' },
              { label: 'Switching Payroll Providers FAQ', href: '/faq/switching-payroll-providers' },
              { label: 'Payroll Complexity Scorer', href: '/resources/complexity-scorer' },
              { label: 'Year-End Payroll Checklist', href: '/resources/guides/year-end-payroll-checklist' },
              { label: 'Managed Payroll Services', href: '/services/managed-payroll' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '0.9rem 1.1rem', fontWeight: '600', fontSize: '0.9rem', color: '#000000' }}>
                {label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Still Have Questions?</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Book a free 15-minute call. Ask anything about managed payroll.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            A BEG payroll specialist will answer your questions, review your setup, and give you an exact monthly cost. No commitment required.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
        </div>
      </section>
    </>
  );
}
