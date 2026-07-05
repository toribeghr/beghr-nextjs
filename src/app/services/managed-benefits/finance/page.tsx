import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Administration for Finance | Instant Estimate | BEG',
  description: 'Benefits administration for finance firms: audit-grade eligibility data, Form 5500-ready records, and ACA filings handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/finance' },
  openGraph: {
    title: 'Benefits Administration for Finance | Instant Estimate | BEG',
    description: 'Benefits administration for finance firms: audit-grade eligibility data, Form 5500-ready records, and ACA filings handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/finance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Administration for Finance | Instant Estimate | BEG', description: 'Benefits administration for finance firms: audit-grade eligibility data, Form 5500-ready records, and ACA filings handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-finance');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a finance firm?',
    'Plan setup, open enrollment, life-event changes, carrier updates, eligibility tracking, deduction sync with payroll, and ACA reporting, all maintained in one system with the reconciled data a finance-minded firm expects.',
  ],
  [
    'Do we have to leave our benefits broker?',
    'No. Your broker keeps advising on plan design and placing coverage. BEG Managed Benefits handles the administration behind those plans, and brokers generally welcome someone owning the operational side.',
  ],
  [
    'Can you produce data clean enough for our auditors?',
    'That is the point. Eligibility, elections, and deductions live in one system of record instead of reconciling three spreadsheets, so a plan audit or Form 5500 preparation starts from clean exports.',
  ],
  [
    'Does this cover ACA reporting for our firm?',
    'Yes. The Software + ACA Compliance plan tracks eligibility across the firm, produces Forms 1094-C and 1095-C, and watches deadlines, so filing season is a report run rather than a reconstruction project.',
  ],
  [
    'What about Form 5500 for our welfare plans?',
    'ERISA welfare plans generally require an annual Form 5500 once they reach 100 participants. Administration keeps participant counts and plan data organized so your filing preparer works from accurate numbers.',
  ],
  [
    'Is this a PEO?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer.',
  ],
];

export default function ManagedBenefitsFinancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Finance', item: 'https://www.beghr.com/services/managed-benefits/finance' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Finance"
        title="You reconcile everything else to the penny. Why not your benefits data?"
        description="Finance firms live on accurate numbers, then run benefits on a spreadsheet the office manager updates when someone remembers. BEG Managed Benefits, powered by isolved, puts enrollment, eligibility, deductions, and ACA filings in one reconciled system, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'One ledger', label: 'Eligibility, elections, and deductions reconciled' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Finance Firm Benefits Problem</p>
              <h2>A firm that audits clients cannot afford benefits data that would fail its own audit.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '100',
                  label: 'The participant count where Form 5500 filing generally kicks in',
                  sub: 'ERISA welfare plans generally owe the Department of Labor an annual Form 5500 at 100 participants. Growing firms cross that line quietly, and the filing is only as good as the participant data behind it.',
                },
                {
                  stat: '3 sources',
                  label: 'Where benefits data usually lives: carrier, payroll, spreadsheet',
                  sub: 'When the carrier bill, the payroll deductions, and the enrollment spreadsheet disagree, someone reconciles by hand. In a firm full of people who reconcile for a living, that job still lands on nobody.',
                },
                {
                  stat: 'Bonus-heavy',
                  label: 'Compensation that makes affordability math harder',
                  sub: 'Analyst and advisor comp mixes base, bonus, and commission. ACA affordability safe harbors have to be chosen and applied deliberately, not assumed, when W-2 pay swings year to year.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.dol.gov/agencies/ebsa/employers-and-advisers/plan-administration-and-compliance/reporting-and-filing/form-5500" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Form 5500 reporting and filing</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Finance firm benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: one system of record instead of three</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans are set up once, employees enroll and handle life events online, and deductions sync to payroll automatically. The carrier, the paycheck, and the enrollment record stop disagreeing because they draw from the same data. Real-time reporting means a partner asking what benefits actually cost per month gets an export, not an estimate.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: filings a compliance-literate firm will not flinch at</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Eligibility is tracked across the firm, offers of coverage are documented, and Forms 1094-C and 1095-C are produced on schedule. For a workforce with bonus and commission swings, affordability tracking is applied consistently instead of recalculated in a panic each January. Your compliance officer reviews finished work rather than building it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a specialist runs it, an analyst audits it</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment, changes, and carrier updates, and a Benefits Auditing Analyst checks the data for the discrepancies finance people hate finding late: deduction mismatches, ghost enrollees on carrier bills, missed terminations. It is the segregation-of-duties model your firm already believes in, applied to benefits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll accuracy the bigger concern? BEG&apos;s core service is <Link href="/services/managed-payroll/finance">managed payroll for finance firms</Link>, and handbook and compliance questions live in <Link href="/services/hr-outsourcing/finance">finance HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Finance benefits administration, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
