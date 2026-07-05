import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Law Firm Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for law firms: partner, associate, and staff benefit classes run cleanly, ACA and COBRA handled. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/legal' },
  openGraph: {
    title: 'Law Firm Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for law firms: partner, associate, and staff benefit classes run cleanly, ACA and COBRA handled. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/legal',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firm Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for law firms: partner, associate, and staff benefit classes run cleanly, ACA and COBRA handled. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-legal');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a law firm?',
    'Plan setup across partner, associate, and staff classes, open enrollment, life-event changes, carrier updates, eligibility tracking, deduction sync with payroll, and ACA reporting, all in one system of record.',
  ],
  [
    'Can you administer different benefits for partners, associates, and staff?',
    'Yes. Class-based eligibility applies the right plans, contributions, and waiting periods to each tier automatically. Partners as self-employed individuals also carry different tax treatment on premiums, which administration keeps visible for your CPA.',
  ],
  [
    'Why does nondiscrimination testing matter for a firm with rich partner benefits?',
    'Self-insured plans that favor highly compensated individuals can fail Internal Revenue Code section 105(h) testing, making benefits taxable to the very people the design favored. Clean class data is the starting point for your advisors.',
  ],
  [
    'Do we have to leave our benefits broker?',
    'No. Your broker keeps advising on design and placing coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility classes, data, and filings.',
  ],
  [
    'Can you handle lateral hires mid-year?',
    'Yes. A lateral partner or associate arriving in March gets the right class, waiting period, and enrollment window applied by the system, not negotiated from memory while the recruiting partner hovers.',
  ],
  [
    'Is this a PEO for law firms?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. Your firm stays the employer.',
  ],
];

export default function ManagedBenefitsLegalPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.beghr.com/services/managed-benefits/legal' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Law Firms"
        title="Partners, associates, staff: three benefit classes, one administrator, usually overworked."
        description="Law firm benefits run on class distinctions: partner plans that differ from associate plans, staff eligibility on its own track, and partners whose premiums carry different tax treatment entirely. BEG Managed Benefits, powered by isolved, administers all of it cleanly, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '3 classes', label: 'Partner, associate, staff, one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Law Firm Benefits Problem</p>
              <h2>A firm that drafts eligibility definitions for clients should not improvise its own.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '105(h)',
                  label: 'The tax code section rich partner benefits can trip',
                  sub: 'Self-insured plans that favor highly compensated individuals can fail nondiscrimination testing under Internal Revenue Code section 105(h), turning tax-free benefits into taxable income for the partners the design favored.',
                },
                {
                  stat: '3 tracks',
                  label: 'Partner, associate, and staff eligibility rarely match',
                  sub: 'Different contributions, different waiting periods, and partners who are self-employed for tax purposes rather than W-2 employees. Every class boundary applied inconsistently is a future dispute at a partner meeting.',
                },
                {
                  stat: 'Lateral',
                  label: 'Mid-year moves are the firm benefits stress test',
                  sub: 'Lateral partners arrive with expectations, associates leave for competitors with COBRA rights attached, and staff turnover runs its own eligibility churn. Each move touches class rules, notices, and deadlines.',
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
              Source: <a href="https://www.irs.gov/pub/irs-drop/n-11-01.pdf" target="_blank" rel="noopener noreferrer">IRS Notice 2011-1 on insured group health plan nondiscrimination rules</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Law firm benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: class rules enforced by the system, not by memory</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Partner, associate, and staff classes are configured with their own plans, contributions, and waiting periods, so a lateral hire lands in the right tier automatically. Everyone enrolls online, life events run as self-service workflows, and deductions sync to payroll with partner-class records kept distinct for the different tax treatment their premiums carry.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: reporting across every timekeeper and staff member</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Eligibility is tracked firm-wide, including part-time paralegals and support staff whose hours vary, offers of coverage are documented by class, and Forms 1094-C and 1095-C are produced on schedule. The clean class data this maintains is also what your tax advisors need when they run nondiscrimination testing on the firm&apos;s plan design.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: benefits stop consuming your firm administrator</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment for every class, processes lateral arrivals and departures with their notices and deadlines, and keeps carrier records current. A Benefits Auditing Analyst checks the data for the errors firms find late: an associate promoted to partner still enrolled under the associate class, or a departed attorney generating carrier charges a year on.</p>
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
              Partner draws and payroll the bigger burden? BEG&apos;s core service is <Link href="/services/managed-payroll/legal">managed payroll for law firms</Link>, and the people-policy side lives in <Link href="/services/hr-outsourcing/legal">law firm HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Law firm benefits administration, answered</h2>
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
