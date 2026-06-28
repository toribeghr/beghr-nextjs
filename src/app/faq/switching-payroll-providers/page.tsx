import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Switching Payroll Providers FAQ | Transition Smoothly | BEG',
  description: 'How to switch payroll providers without disruption: timing, data migration, what to hand off, and what to expect from BEG\'s onboarding.',
  alternates: {
    canonical: 'https://beghr.com/faq/switching-payroll-providers',
  },
  openGraph: {
    title: 'Switching Payroll Providers FAQ | Transition Smoothly | BEG',
    description: 'How to switch payroll providers without disruption: timing, data migration, what to hand off, and what to expect from BEG\'s onboarding.',
    url: 'https://beghr.com/faq/switching-payroll-providers',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switching Payroll Providers FAQ | Transition Smoothly | BEG',
    description: 'How to switch payroll providers without disruption: timing, data migration, what to hand off, and what to expect from BEG\'s onboarding.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'When is the best time to switch payroll providers?',
    a: 'The cleanest transition points are at the start of a new calendar year (January 1) or at the beginning of a new quarter (April 1, July 1, or October 1). Starting on January 1 means your new provider handles the full year from the beginning, eliminating any mid-year history migration complexity. Starting at the beginning of a quarter means your quarterly 941 filing will be handled entirely by your new provider with no split-quarter reconciliation needed. That said, BEG can transition clients at any point in the year, including mid-quarter or mid-year, without disruption to employee pay. If your current provider is causing problems, waiting for a "clean" date is usually not worth the continued headache.',
  },
  {
    q: 'How long does switching payroll providers take?',
    a: 'With BEG, most clients complete the transition in 3-5 business days from signing. That includes a discovery call to review your current setup, data collection and migration, a test cycle to verify accuracy, and confirmation of your dedicated BEG contact before the first live run. The timeline can extend to 7-14 business days for employers with complex multi-state setups, certified payroll requirements, or large employee populations. BEG drives the transition process. You do not need to manage the handoff yourself. BEG gathers what is needed and handles the configuration.',
  },
  {
    q: 'What data do I need to provide when switching?',
    a: 'BEG will guide you through data collection, but here is what is typically required: a current employee roster with legal names, addresses, Social Security numbers, and direct deposit information; year-to-date payroll register showing gross wages, tax withholding, and deductions per employee; current deduction setups (health insurance, 401k, FSA, garnishments); pay schedule and frequency; tax account numbers for all registered states and jurisdictions; and details of any recent payroll corrections or amended filings. If you are switching mid-year, BEG needs the YTD data so W-2s at year-end reflect the full calendar year. Your previous provider is required to provide payroll history data upon your request.',
  },
  {
    q: 'Will there be any disruption to employee pay?',
    a: 'No, if the transition is handled correctly. BEG runs a test cycle before your first live payroll to verify that all employees, deductions, and tax setups are accurate. The test cycle uses real data but does not transmit actual direct deposits or file anything with tax authorities. Only after you confirm the test cycle results does BEG run the first live payroll. Direct deposit timelines are preserved. Employees do not experience any gap in pay, any change to their pay stub format that would confuse them, or any interruption to deductions. BEG communicates any changes employees will notice (such as a new pay stub portal) before the first live cycle.',
  },
  {
    q: 'How do you handle mid-year payroll history?',
    a: 'BEG loads your year-to-date payroll history into the system before running the first live payroll. This history is required to produce accurate W-2s at year-end. The W-2 must reflect total wages paid and taxes withheld for the entire calendar year, regardless of how many providers processed payroll during that year. The YTD data also ensures that Social Security wage base limits are correctly tracked for high-earning employees, that garnishment caps are applied correctly, and that deduction limits (such as 401k contribution maximums) are monitored accurately for the rest of the year. This is a standard step in BEG onboarding and does not require anything complex from your team.',
  },
  {
    q: 'What happens to my existing payroll software?',
    a: 'If BEG takes over operation of your existing payroll platform (for example, running payroll within your current ADP or Paychex account), your software subscription continues as-is and you retain full access to historical data. BEG simply operates the system on your behalf. If you prefer to move to iSolved, BEG handles the migration and your previous system can be cancelled after the transition is complete and you have exported any historical records you want to retain. You are not required to migrate. The choice of platform does not affect your PEPM rate.',
  },
  {
    q: 'Do I need to notify my employees when switching?',
    a: 'You should notify employees of any changes they will notice. Typical communications include: a heads-up if the pay stub portal changes (employees may need a new login), notification if the direct deposit originator name changes on their bank statement (which can cause confusion if an employee thinks their direct deposit failed), and any update to the paycheck timing if your new provider processes on a different schedule. BEG will tell you specifically what will change for your employees before the first live payroll and provide you with a simple employee communication template you can send. In most cases, the transition is invisible to employees.',
  },
  {
    q: 'What does BEG need from my current provider?',
    a: 'BEG primarily needs your YTD payroll register and current employee file. Your current provider is legally required to provide you with your own payroll data upon request. Request a full YTD payroll register in spreadsheet format, a current employee master file with all demographic and banking information, and copies of all tax filings submitted during the current year. Most providers can export these reports from their system within a few business days. If your current provider is being uncooperative, document the request in writing (email) and give them 5 business days. BEG can advise you on the request process if you encounter friction.',
  },
  {
    q: 'Can I switch payroll providers mid-quarter?',
    a: 'Yes. Switching mid-quarter is more common than most employers expect. The key requirement is that the quarterly 941 filing reflects wages and taxes processed by all providers during that quarter. BEG handles this by loading your YTD data, which includes wages processed by your previous provider in the same quarter. When BEG files the quarterly 941, it reports only the wages and taxes processed during the portion of the quarter BEG ran payroll. The combined filings from both providers for that quarter reconcile with total wages for the quarter. BEG tracks this split automatically. You do not need to coordinate anything between your old provider and BEG.',
  },
  {
    q: "What is BEG's onboarding process?",
    a: "BEG's onboarding follows a consistent four-step process. Step 1 is the discovery call: BEG reviews your current payroll setup, employee count, pay structure, states, and any compliance requirements specific to your industry. You receive an exact PEPM quote on this call. Step 2 is data collection: BEG sends a data request for your employee roster, YTD payroll register, deduction setups, tax account numbers, and pay schedule. BEG drives this process and follows up on anything missing. Step 3 is configuration and test cycle: BEG configures your payroll in the agreed platform, enters all employee and deduction data, and runs a test payroll cycle for your review. You approve the test before anything goes live. Step 4 is go-live: your first live payroll runs, direct deposits transmit, and your dedicated BEG contact confirms everything processed correctly. From discovery call to first live payroll is typically 3-5 business days.",
  },
];

export default function SwitchingPayrollFaqPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Switching Payroll Providers FAQ', item: 'https://beghr.com/faq/switching-payroll-providers' },
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
            <h1>Switching Payroll Providers FAQ</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              How to transition to a new payroll provider without disrupting employee pay. Timing, data migration, mid-quarter switches, and what BEG handles during onboarding.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/faq" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All FAQ topics</Link>
          </div>
        </div>
      </section>

      {/* TRANSITION STEPS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">BEG Onboarding</p>
            <h2>How the transition works with BEG</h2>
          </div>
          <div className="beg-grid-3" style={{ marginTop: '2.5rem' }}>
            {[
              { num: '01', title: 'Discovery call', body: 'Review your current setup, get an exact quote, and confirm the go-live date. No commitment required.' },
              { num: '02', title: 'Data collection', body: 'BEG requests your employee roster, YTD register, deductions, and tax account numbers. We drive this process.' },
              { num: '03', title: 'Test cycle', body: 'BEG configures your payroll and runs a test cycle for your approval before anything goes live.' },
              { num: '04', title: 'Go-live', body: 'First live payroll runs. Direct deposits transmit. Your dedicated BEG contact confirms everything processed correctly.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: '#555555', fontSize: '0.95rem', marginBottom: '1.25rem' }}>Most clients are live within 3-5 business days. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>Learn more about BEG managed payroll</Link> at $25-$45 PEPM.</p>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '0.95rem', padding: '0.75rem 2rem' }}>
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Detailed Answers</p>
            <h2>Switching payroll providers: your questions answered</h2>
          </div>
          <div className="faq" style={{ marginTop: '2.5rem' }}>
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
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Resources</p>
            <h2>More answers and tools</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }} className="reveal">
            {[
              { label: 'Managed Payroll FAQ', href: '/faq/managed-payroll' },
              { label: 'Payroll Outsourcing FAQ', href: '/faq/payroll-outsourcing' },
              { label: 'Payroll Compliance FAQ', href: '/faq/payroll-compliance' },
              { label: "Managed Payroll Buyer's Guide", href: '/resources/guides/managed-payroll-buyers-guide' },
              { label: 'Payroll Complexity Scorer', href: '/resources/complexity-scorer' },
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
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Ready to Switch?</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Book a free 15-minute call. BEG handles the entire transition.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG manages the full handoff from your current provider. Most clients are live within 3-5 business days. No disruption to employee pay. No commitment required on the call.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
        </div>
      </section>
    </>
  );
}
