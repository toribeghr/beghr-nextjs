import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Staffing Agency Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for staffing agencies: ACA eligibility tracked across assignments, enrollment and COBRA at volume. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/staffing-agency' },
  openGraph: {
    title: 'Staffing Agency Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for staffing agencies: ACA eligibility tracked across assignments, enrollment and COBRA at volume. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/staffing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Staffing Agency Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for staffing agencies: ACA eligibility tracked across assignments, enrollment and COBRA at volume. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-staffing-agency');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a staffing agency?',
    'Plan setup, online enrollment for internal staff and placed workers, ACA lookback measurement across assignments, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support at assignment-end volume.',
  ],
  [
    'How is ACA eligibility tracked when workers move between assignments?',
    'Hours from every assignment accumulate under one employer record. The system runs lookback measurement continuously, so an employee who averages full-time hours across three different client placements is flagged for an offer of coverage, with gaps between assignments handled under IRS break-in-service rules.',
  ],
  [
    'Do placed workers really count toward our ACA obligations?',
    'Generally yes. As the common-law employer of record, your agency counts placed workers when determining applicable-large-employer status and owes offers of coverage to those who qualify as full-time under IRS rules. That is why agencies hit ALE status faster than almost any business their revenue size.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO or co-employment arrangement?',
    'No. You stay the employer of record for your placed workers, exactly as today, and your plans stay yours. BEG Managed Benefits, powered by isolved, administers the benefits side while your agency runs the business.',
  ],
  [
    'What does staffing agency benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsStaffingAgencyPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Staffing Agencies', item: 'https://www.beghr.com/services/managed-benefits/staffing-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Staffing Agencies"
        title="Every placed worker is your ACA problem. At volume, that is the whole job."
        description="A staffing agency runs benefits administration at a scale most companies never see: hundreds of variable-hour W-2 workers cycling through assignments, eligibility that has to be measured across placements, and continuation events every week. BEG Managed Benefits, powered by isolved, tracks it all while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '130 hrs/mo', label: 'The IRS full-time line, tracked for you' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Staffing Benefits Problem</p>
              <h2>Placements get the attention. ACA measurement gets the penalty letter.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '130 hrs/mo',
                  label: 'The IRS full-time threshold your placed workers cross assignment by assignment',
                  sub: 'Under IRS employer shared responsibility rules, 130 hours of service in a month is full-time. A worker splitting the month across two client sites can cross it without either placement looking full-time on its own.',
                },
                {
                  stat: '50 FTEs',
                  label: 'The applicable-large-employer line agencies hit faster than any peer',
                  sub: 'Placed workers are your common-law employees for ACA purposes, so a lean agency with a few hundred people on assignment carries large-employer obligations on a small-business back office.',
                },
                {
                  stat: 'Every end',
                  label: 'Assignment endings that can trigger continuation notices',
                  sub: 'When coverage ends with an assignment, notice obligations follow on federal deadlines. At placement churn volume, tracking elections and windows by hand is how notices get missed.',
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

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Staffing benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that reaches workers you never see in an office</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Your workforce is at client sites, not your branch. The Benefits Admin Software plan puts enrollment online where placed workers actually are: they compare plans on their phones, get AI-guided recommendations, and enroll without a recruiter mailing packets or chasing signatures. Life events run through self-service workflows, and deductions sync to payroll so a worker who changes plans mid-assignment sees the right paycheck the next week.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA measurement built for placement churn</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan is the heart of the staffing case. Lookback measurement runs continuously across every assignment: measurement periods, administrative periods, and stability periods applied consistently, hours aggregated under one employer record no matter how many client sites a worker touched. Breaks between assignments are evaluated under IRS break-in-service rules so a returning worker is classified correctly instead of restarted by default. Forms 1094-C and 1095-C are produced for you from hours that were tracked all year, not reconstructed at filing time from branch spreadsheets.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Continuation events handled at assignment-end volume</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In staffing, coverage endings arrive constantly because assignments end constantly. Notices go out on the required timelines, elections and payment windows are tracked, and carrier records get updated without a branch admin owning a deadline calendar. COBRA and state continuation support is scoped exactly on your discovery call so the process matches your states and your headcount.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team for an always-moving roster</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the constant flow of adds, drops, and changes, and keeps carrier updates moving, while a Benefits Auditing Analyst checks your data for the errors a churning roster breeds: workers still on the invoice weeks after an assignment ended, elections that never reached the carrier, deduction mismatches. For an agency, dirty eligibility data is not a paperwork problem; it is margin leaking out of every placement.</p>
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
                Benefits Admin Software puts enrollment online. Software + ACA Compliance adds cross-assignment eligibility tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              High-volume weekly pay runs the bigger headache? That is <Link href="/services/managed-payroll/staffing-agency">managed payroll for staffing agencies</Link>; for co-employment policies and unemployment claims, see <Link href="/services/hr-outsourcing/staffing-agency">staffing agency HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Staffing agency benefits administration, answered</h2>
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
