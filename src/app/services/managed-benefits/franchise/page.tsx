import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Franchise Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for franchises: multi-EIN eligibility, ACA aggregation rules, and one enrollment standard across units. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/franchise' },
  openGraph: {
    title: 'Franchise Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for franchises: multi-EIN eligibility, ACA aggregation rules, and one enrollment standard across units. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/franchise',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Franchise Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for franchises: multi-EIN eligibility, ACA aggregation rules, and one enrollment standard across units. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-franchise');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a franchise operator?',
    'Plan setup across every entity and location, one enrollment experience for all units, eligibility tracking that respects each EIN, life-event changes, deduction sync with payroll, and ACA reporting entity by entity.',
  ],
  [
    'Do our separate LLCs get separate ACA treatment?',
    'Not necessarily. Under IRS aggregation rules, companies with common ownership are generally combined to determine applicable large employer status, so five 15-employee units can be one 75-employee employer for ACA purposes.',
  ],
  [
    'Can employees who move between locations keep clean records?',
    'Yes. One system holds every unit, so a shift lead transferring across town or across a state line carries one employment record, one eligibility history, and one enrollment instead of a duplicate.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising on plan design and placing coverage across your units. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility, data, and filings.',
  ],
  [
    'How does ACA reporting work across multiple EINs?',
    'Each ALE member files its own Forms 1094-C and 1095-C even when entities are aggregated for status. Administration keeps every employee attached to the right EIN so each entity files clean.',
  ],
  [
    'Is this a PEO for franchise groups?',
    'No. There is no co-employment and no master plan takeover. BEG Managed Benefits, powered by isolved, administers the plans you and your broker already chose. You stay the employer at every unit.',
  ],
  [
    'Does administering benefits at one standard create joint-employer risk with a franchisor?',
    'No, and the distinction matters. Joint-employer exposure attaches to who determines which benefit plans or benefit levels apply, not to who processes enrollment or files the paperwork behind a plan the franchisee already chose. BEG Managed Benefits administers the plans your ownership group selected; plan design decisions stay with you and your broker, keeping the administrative layer separate from the control question regulators actually look at.',
  ],
  [
    'What does franchise benefits administration cost across multiple units?',
    'A monthly per-employee cost far below hiring one internal benefits administrator per unit, which realistically runs $60K-$100K a year in salary and overhead for a single location, let alone five. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What happens to COBRA when a franchise unit closes or changes ownership?',
    'Coverage loss from a unit closing or an ownership transfer is a qualifying event like any other, and election notices and premium deadlines run on the same federal timelines regardless of what happened at the entity level. COBRA premiums run up to 102% of plan cost, commonly translating to roughly $110/day of exposure per lapsed election if notices or payment windows are mishandled during a transition. Centralized tracking keeps that clock accurate even while ownership paperwork is still being sorted out.',
  ],
];

export default function ManagedBenefitsFranchisePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Franchise', item: 'https://www.beghr.com/services/managed-benefits/franchise' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Franchise"
        title="Five units, three LLCs, one benefits headache multiplied by every EIN."
        description="Franchise operators run benefits across entities that share ownership but not paperwork: separate EINs, separate payrolls, and unit managers improvising enrollment differently at every location. BEG Managed Benefits, powered by isolved, puts one benefits standard across all of it, nationwide. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Multi-EIN', label: 'One benefits standard across every unit' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Franchise Benefits Problem</p>
              <h2>The IRS adds your entities together. Your spreadsheets keep them apart.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Combined',
                  label: 'Commonly owned entities aggregate for ACA employer status',
                  sub: 'IRS aggregation rules generally treat companies under common ownership as one employer when counting toward the 50 full-time-equivalent line. Operators who count each LLC separately find out the hard way.',
                },
                {
                  stat: 'Per unit',
                  label: 'How enrollment actually runs when each manager owns it',
                  sub: 'One unit collects paper forms, another emails the broker, a third forgets the new-hire waiting period entirely. Multiply by every location and open enrollment becomes an audit finding in progress.',
                },
                {
                  stat: 'High churn',
                  label: 'Hourly turnover means constant eligibility and COBRA events',
                  sub: 'Franchise workforces turn over fast. Every exit that touches coverage triggers continuation notices with deadlines, and every rehire restarts waiting periods that someone has to track per EIN.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/determining-if-an-employer-is-an-applicable-large-employer" target="_blank" rel="noopener noreferrer">IRS, determining applicable large employer status</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED, BY PLAN */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Franchise benefits work, mapped to the three plans</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits Admin Software: one enrollment standard, every unit</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plans are configured once and applied consistently across entities, so the same role gets the same benefits offer at every location. Employees enroll themselves online in the same experience whether they work at your first unit or your newest, transfers carry their records with them, and deductions sync to each entity&apos;s payroll correctly.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software + ACA Compliance: aggregation handled, filings per EIN</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Eligibility is tracked across the whole controlled group so applicable large employer status reflects the combined workforce, while Forms 1094-C and 1095-C are produced for each filing entity with every employee attached to the right EIN. Variable-hour crew members are measured under the look-back method, and deadlines are watched across all of it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: the multi-unit workload moves off your plate</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A dedicated Managed Benefits Specialist runs open enrollment across every location at once, processes the turnover-driven flow of new hires, exits, and continuation events, and keeps carrier updates moving without unit managers in the loop. A Benefits Auditing Analyst checks the data across entities for the errors multi-EIN operations breed: duplicate records, wrong-entity enrollments, and departed crew still on a carrier bill.</p>
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
                Benefits Admin Software is self-service enrollment in one system. Software + ACA Compliance adds aggregation-aware tracking and Forms 1094-C and 1095-C per entity. Fully Managed adds a dedicated specialist and auditing analyst who run it all. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Multi-entity payroll the bigger fire? BEG&apos;s core service is <Link href="/services/managed-payroll/franchise">managed payroll for franchises</Link>, and one employment standard across units lives in <Link href="/services/hr-outsourcing/franchise">franchise HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* SCENARIO: CONTROLLED GROUP AGGREGATION */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Common Scenario</p>
              <h2>Five 15-employee units. One 75-employee employer.</h2>
            </div>
            <div className="reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem', marginTop: '1.5rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                An owner with five units, each its own LLC with its own EIN and around 15 employees, reasonably assumes none of them individually approach the 50-employee applicable-large-employer line. Under IRS controlled-group aggregation rules, common ownership combines those entities for ACA status: the same owner is a 75-employee employer, obligated to offer coverage to full-time staff agency-wide, even though every individual unit files its own Forms 1094-C and 1095-C. Operators who count each LLC in isolation typically discover the aggregation rule from a penalty notice, not from their own payroll reports.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Franchise benefits administration, answered</h2>
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
