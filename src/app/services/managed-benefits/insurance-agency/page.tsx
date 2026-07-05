import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Insurance Agency Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for insurance agencies: clean eligibility data, ACA filings, and enrollment run to the standard your licensed staff expect.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/insurance-agency' },
  openGraph: {
    title: 'Insurance Agency Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for insurance agencies: clean eligibility data, ACA filings, and enrollment run to the standard your licensed staff expect.',
    url: 'https://www.beghr.com/services/managed-benefits/insurance-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Insurance Agency Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for insurance agencies: clean eligibility data, ACA filings, and enrollment run to the standard your licensed staff expect.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-insurance-agency');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for an insurance agency?',
    'Plan setup, open enrollment, life-event changes, carrier updates, eligibility tracking across producers and staff, deduction sync with payroll, and ACA reporting, all maintained in one system of record.',
  ],
  [
    'We are brokers ourselves. Does this compete with us?',
    'No. BEG does not sell insurance or place coverage. We administer the plans behind the scenes, the same broker-ally model we run for every client: you keep your broker, even when that broker is you.',
  ],
  [
    'Can you handle producer versus staff benefit classes?',
    'Yes. Class-based eligibility handles different contributions or waiting periods for producers, CSRs, and admin staff, applied by the system instead of remembered by whoever ran enrollment last year.',
  ],
  [
    'Does this cover our ACA reporting?',
    'Yes. Eligibility is tracked across the agency, and Forms 1094-C and 1095-C are produced on schedule. IRS information-return penalties apply per form and can stack for filing and furnishing failures, so accuracy matters twice.',
  ],
  [
    'Why would an agency outsource benefits administration?',
    'Because selling coverage and administering your own are different jobs. Producers bill hours to revenue; enrollment data entry, carrier updates, and filings are operational work an agency principal should not staff internally.',
  ],
  [
    'Is this a PEO?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans your agency already chose. You stay the employer.',
  ],
];

export default function ManagedBenefitsInsuranceAgencyPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Insurance Agency', item: 'https://www.beghr.com/services/managed-benefits/insurance-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Insurance Agencies"
        title="You explain coverage for a living. Your own enrollment still runs on a spreadsheet."
        description="Insurance agencies employ the most benefits-literate workforce in any industry, which means every administrative error gets noticed by a professional. BEG Managed Benefits, powered by isolved, runs your agency's own enrollment, eligibility, and ACA filings to the standard your staff sell every day, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, even if that is you' },
          { value: 'Expert eyes', label: 'Admin your licensed staff will respect' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Insurance Agency Benefits Problem</p>
              <h2>The cobbler&apos;s children problem, with licensed professionals watching.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Per form',
                  label: 'IRS information-return penalties stack on 1094-C and 1095-C errors',
                  sub: 'Filing failures and furnishing failures are penalized separately under IRS rules, per form, per employee. An agency that lectures clients about clean census data cannot file sloppy forms for itself.',
                },
                {
                  stat: '2 classes+',
                  label: 'Producers and staff rarely get identical benefits treatment',
                  sub: 'Commission-heavy producers, salaried CSRs, and part-time admin staff often carry different contributions and waiting periods. Class rules enforced by memory drift; drift becomes a grievance or a carrier dispute.',
                },
                {
                  stat: '0 margin',
                  label: 'For error, because your employees are the toughest audience',
                  sub: 'A CSR who processes enrollment corrections for clients all day will spot a wrong deduction on her own paycheck immediately, and she will know exactly whose fault it is not supposed to be.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/information-reporting-by-applicable-large-employers" target="_blank" rel="noopener noreferrer">IRS, ACA information reporting by applicable large employers</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Agency benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: a system of record your staff will not roll their eyes at</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Class-based plans for producers, CSRs, and admin staff are configured once, employees enroll and compare plans online, and deductions sync to payroll across salary and commission pay. Eligibility, elections, and carrier data live in one place, which is exactly what your agency tells its own clients to do.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: filings that survive professional scrutiny</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Eligibility is tracked across the agency, offers of coverage are documented, and Forms 1094-C and 1095-C are produced on schedule with the underlying data reconciled. For commission-heavy producer pay, affordability tracking is applied consistently rather than recalculated differently each year by whoever inherited the spreadsheet.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: your operations stop covering for benefits admin</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment, changes, and carrier updates, and a Benefits Auditing Analyst checks the data for exactly the errors your staff would catch anyway: deduction mismatches, stale carrier records, missed dependents. Your agency&apos;s benefits stop being the example a competitor would love to quote.</p>
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
              Commission payroll the bigger grind? BEG&apos;s core service is <Link href="/services/managed-payroll/insurance-agency">managed payroll for insurance agencies</Link>, and licensing and people policies live in <Link href="/services/hr-outsourcing/insurance-agency">insurance agency HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Insurance agency benefits administration, answered</h2>
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
