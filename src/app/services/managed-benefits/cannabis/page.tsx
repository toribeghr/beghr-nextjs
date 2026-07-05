import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Cannabis | Instant Estimate | BEG',
  description: 'Benefits administration for cannabis companies: multi-license ACA tracking, enrollment, and turnover events handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/cannabis' },
  openGraph: {
    title: 'Benefits Admin for Cannabis | Instant Estimate | BEG',
    description: 'Benefits administration for cannabis companies: multi-license ACA tracking, enrollment, and turnover events handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/cannabis',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Cannabis | Instant Estimate | BEG', description: 'Benefits administration for cannabis companies: multi-license ACA tracking, enrollment, and turnover events handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-cannabis');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a cannabis company?',
    'Plan setup, enrollment across cultivation, processing, and retail staff, life-event changes, carrier updates, payroll deduction sync, ACA eligibility tracking, and Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'Does the ACA employer mandate really apply to cannabis businesses?',
    'Yes. Federal employer shared responsibility rules apply to employers by size, not by industry. A cannabis operator with 50 or more full-time equivalent employees has the same reporting and offer-of-coverage obligations as any other company.',
  ],
  [
    'Our benefits options are limited. Does this still help?',
    'Yes. Whatever plans your broker can place, the administration behind them is the same job: enrollment, eligibility, changes, terminations, and filings. Clean administration also makes the company a better risk at every renewal.',
  ],
  [
    'Is this a PEO for cannabis companies?',
    'No. There is no co-employment and no employer-of-record change, which matters in an industry where license holders cannot casually hand employment relationships to a third party. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a cannabis operator?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsCannabisPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Cannabis', item: 'https://www.beghr.com/services/managed-benefits/cannabis' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Cannabis"
        title="State-legal does not mean exempt. Your benefits obligations are fully federal."
        description="License-per-entity structures, badged agents, budtender turnover, and an industry most vendors still avoid: cannabis benefits administration is harder than it should be. BEG Managed Benefits, powered by isolved, runs the enrollment, eligibility, and ACA reporting while your broker places whatever coverage your market allows."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Every license', label: 'Multi-entity rosters in one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Cannabis Benefits Problem</p>
              <h2>The industry gets treated as an exception everywhere except the tax code.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'No carve-out',
                  label: 'ACA employer rules apply to cannabis like any industry',
                  sub: 'IRS employer shared responsibility provisions turn on workforce size, not federal legality of the product. At 50 full-time equivalents, offers of coverage and Forms 1094-C and 1095-C are owed.',
                },
                {
                  stat: '1 group?',
                  label: 'License-per-entity structures still count together',
                  sub: 'Each license in its own LLC is standard practice. Common ownership can combine those entities for ACA workforce counting, so the eligibility math runs across the whole group.',
                },
                {
                  stat: 'High churn',
                  label: 'Retail turnover generates constant benefits events',
                  sub: 'Budtender and trimmer turnover means enrollments, terminations, and continuation notices in steady volume, tracked against deadlines whether or not anyone owns the job.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Cannabis</p>
              <h2>The benefits problems specific to cannabis operators, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-license, multi-entity rosters in one eligibility picture</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Regulators push cannabis companies into entity sprawl: a cultivation LLC, a processing LLC, retail LLCs per location, a management company knitting it together. The IRS does not care about the org chart; common ownership can aggregate those workforces for ACA purposes. Benefits administration in one system keeps the combined count, applies eligibility rules consistently across entities, and stops an employee who moves from the grow to the store from being terminated and re-enrolled by accident.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Badged, licensed workers and the eligibility quirks they create</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In most markets, employees cannot work without a state agent card or badge, and a suspended or lapsed badge can force an unpaid gap. That interacts with benefits in ways generic administration misses: does an enforced absence end eligibility, trigger continuation rights, or pause deductions that then need catch-up? Administration that tracks status changes precisely, with rules scoped to your states on the discovery call, keeps a licensing hiccup from becoming a coverage dispute.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour retail and trim crews, tracked properly</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Dispensary schedules flex with traffic and harvest schedules flex with the plant. The Software + ACA Compliance plan applies the lookback measurement method to variable-hour staff, documents who crossed the full-time line and when offers were made, and produces the 1094-C and 1095-C filings, so growth into applicable-large-employer territory happens with records instead of exposure.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits as the retention lever in a high-churn labor market</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Cannabis competes for retail and agricultural talent while carrying a reputation for thin benefits. Operators who offer real coverage stand out, but only if employees can actually use it: self-service enrollment with AI-guided recommendations, from a phone, in minutes. A benefits program nobody can figure out how to join retains nobody.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>An administration layer that makes renewals easier, not harder</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Brokers work hard to place cannabis coverage. Clean census data, accurate enrollment records, and reconciled carrier bills make your broker&apos;s renewal job easier and your company a better risk. On the Fully Managed plan, a dedicated Managed Benefits Specialist runs enrollment and changes, and a Benefits Auditing Analyst keeps the data your broker takes to market accurate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Cannabis operators with real payrolls and no benefits desk</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Vertically integrated operators', body: 'Cultivation, processing, and retail under common ownership: one ACA picture across every entity.' },
                { title: 'Multi-store dispensary groups', body: 'Retail turnover, variable schedules, and continuation events in steady volume across locations.' },
                { title: 'Cultivation companies', body: 'Harvest surges and trim crews with the same seasonal eligibility math as any agricultural employer.' },
                { title: 'Processors and manufacturers', body: 'Production shifts and lab staff where full-time status is steady but administration still has no owner.' },
                { title: 'Single-license retailers', body: 'One store, one manager doing everything, and benefits admin that deserves better than a drawer.' },
                { title: 'Ancillary cannabis companies', body: 'Testing labs, packaging, and tech serving the industry, carrying the same hiring pressures without the plant-touching rules.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C across your entities. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll in a cash-heavy, multi-entity business the bigger fight? BEG&apos;s core service is <Link href="/services/managed-payroll/cannabis">managed payroll for cannabis</Link>. Policies and compliance questions? See <Link href="/services/hr-outsourcing/cannabis">HR outsourcing for cannabis</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for cannabis, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
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
