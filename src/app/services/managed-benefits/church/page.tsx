import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Churches | Instant Estimate | BEG',
  description: 'Benefits administration for churches and ministries: multi-entity eligibility, enrollment, and compliance handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/church' },
  openGraph: {
    title: 'Benefits Admin for Churches | Instant Estimate | BEG',
    description: 'Benefits administration for churches and ministries: multi-entity eligibility, enrollment, and compliance handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/church',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Churches | Instant Estimate | BEG', description: 'Benefits administration for churches and ministries: multi-entity eligibility, enrollment, and compliance handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-church');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a church?',
    'Plan setup, enrollment for pastoral and lay staff, life-event changes, carrier or denominational plan updates, payroll deduction sync, eligibility tracking across ministries, and ACA reporting where it applies.',
  ],
  [
    'Are church health plans really exempt from COBRA?',
    'Church plans are generally exempt from ERISA and federal COBRA, but state continuation laws may still apply, and churches on ordinary commercial group plans do not automatically get church-plan treatment. What applies to your plan gets scoped exactly on your discovery call.',
  ],
  [
    'We work with a denominational benefits board and a local broker. Does that work?',
    'Yes. Whoever places or sponsors the coverage stays. BEG Managed Benefits handles the administration behind it: enrollment, changes, eligibility data, deductions, and the recordkeeping a board or auditor asks for.',
  ],
  [
    'Is this a PEO for churches?',
    'No. There is no co-employment and no employer-of-record change. The church stays the employer of its ministry staff. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a church or ministry?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'How does a housing allowance affect benefits eligibility for pastors?',
    'A clergy housing allowance is a tax treatment of compensation, not a benefits eligibility test on its own, but it does affect how a pastor\'s total pay is documented and reported. Administration needs to keep the housing allowance designation, salary, and benefits enrollment as clean, separate records so nothing gets tangled at tax time or at renewal.',
  ],
  [
    'Do volunteers ever need to be tracked for benefits purposes?',
    'Volunteers are not employees and are not eligible for employer-sponsored benefits, but ministries sometimes blur the line with stipended volunteers or part-time roles that look like volunteer work. Getting that classification right up front avoids eligibility disputes and protects the exempt status of programs that depend on true volunteer labor.',
  ],
  [
    'Who actually regulates church benefits compliance?',
    'It depends on the plan. A true church plan sits outside ERISA and federal DOL oversight; a commercial group plan a congregation buys instead falls under the same federal and state rules as any small employer, including state insurance departments for continuation coverage. Getting the classification right at the start determines which regulator matters.',
  ],
];

export default function ManagedBenefitsChurchPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Churches', item: 'https://www.beghr.com/services/managed-benefits/church' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Churches & Ministries"
        title="Church benefits run on special rules. Special rules still need administration."
        description="Pastoral staff on a denominational plan, lay staff on a group plan, a school and a daycare under the same roof, and a business administrator wearing every hat: church benefits are quietly complicated. BEG Managed Benefits, powered by isolved, runs the administration while your broker or benefits board keeps its role."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'Your broker or benefits board stays' },
          { value: '1 system', label: 'Church, school, and daycare staff together' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Church Benefits Problem</p>
              <h2>Exemptions change which rules apply. They do not make the work disappear.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Exempt*',
                  label: 'Church plans sit outside ERISA and federal COBRA',
                  sub: 'Federal guidance confirms COBRA generally does not apply to church plans. The asterisk: state continuation laws may still reach you, and a commercial group plan is not automatically a church plan.',
                },
                {
                  stat: '2 tracks',
                  label: 'Clergy and lay staff often sit on different plans',
                  sub: 'Denominational boards cover pastors while lay employees sit on a separate group plan, each with its own eligibility rules, renewal dates, and paperwork. One administrator juggles both.',
                },
                {
                  stat: '3+ entities',
                  label: 'Church, school, daycare, camp: one workforce on paper?',
                  sub: 'Ministries sprawl into related entities, and staff cross between them. Who is eligible under which plan, and whose hours count where, is a real eligibility question with real answers.',
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
              Source: <a href="https://www.cms.gov/cciio/programs-and-initiatives/other-insurance-protections/cobra_fact_sheet" target="_blank" rel="noopener noreferrer">CMS, COBRA continuation coverage fact sheet</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Churches</p>
              <h2>The benefits problems specific to ministries, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-ministry eligibility, kept straight</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A worship pastor who teaches two classes at the church school, a daycare aide who works Sunday production, a facilities lead shared across a multi-site network: ministry staffing blurs entity lines constantly. Benefits administration in one system tracks each person&apos;s roles, hours, and plan eligibility across the church, school, daycare, and any related entity, so coverage decisions follow written rules instead of institutional memory.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Denominational plans and group plans, administered side by side</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Many churches run two parallel programs: a denominational benefits board covering ordained staff and a commercial group plan covering everyone else. Each has its own enrollment windows, eligibility definitions, and billing. One administration layer runs both: enrollments processed, changes flowing to the right place, deductions syncing to payroll correctly for both populations.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Continuation rules matched to what your plan actually is</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The church-plan exemption from federal COBRA is real, but it attaches to the plan, not to the employer being a church. A congregation buying an ordinary small-group policy may face state continuation requirements, and larger ministries with commercial coverage can sit under federal rules. The right continuation process for your exact structure gets scoped on the discovery call and then simply runs, with notices and tracking handled.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Growing ministries and the thresholds they cross</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A church that adds a school, a counseling center, and a second campus can grow from 12 employees to 80 in a few years. Combined headcount across commonly controlled ministry entities can create ACA reporting obligations, and part-time hours from aides, nursery workers, and camp staff count toward the math. The Software + ACA Compliance plan tracks it and produces Forms 1094-C and 1095-C when the ministry crosses the line.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Stewardship-grade records for the board</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Elder boards and finance committees ask reasonable questions: what does coverage cost per employee, who is enrolled, why did the invoice jump? Real-time reporting answers them without a weekend of spreadsheet work, and on the Fully Managed plan a Benefits Auditing Analyst reconciles enrollments against carrier bills so the ministry stops paying for coverage nobody holds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Role by Role</p>
              <h2>Ministry staffing types and where benefits administration breaks</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f7f7f7', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>Staffing type</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>Where it breaks</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>The regulator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Ordained clergy', 'Housing allowance designation has to stay clean and separate from benefits enrollment records.', 'IRS (clergy tax treatment)'],
                    ['Lay staff on a group plan', 'A different plan, a different eligibility window, and a different renewal date than the clergy program running alongside it.', 'State insurance department (if not a church plan)'],
                    ['Part-time ministry staff', 'Nursery workers, aides, and part-time worship staff whose hours have to be tracked consistently to determine eligibility.', 'DOL (ERISA, if the plan is not exempt)'],
                    ['Volunteers and stipended roles', 'Easy to blend with part-time employment; getting the classification wrong creates real eligibility exposure.', 'IRS (worker classification)'],
                    ['Multi-entity ministry staff', 'A worship leader teaching at the affiliated school crosses entity lines that can combine for ACA counting.', 'IRS (aggregated ALE group counting)'],
                  ].map(([group, breaks, reg]) => (
                    <tr key={group} style={{ borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{group}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#444444' }}>{breaks}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#666666' }}>{reg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VIGNETTE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Familiar Board Meeting</p>
              <h2>What two parallel benefits programs look like without one system</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A church business administrator manages a denominational plan for the senior pastor and associate pastor, a commercial group plan for eight lay staff, and a part-time nursery team whose hours change every quarter. Open enrollment for the two programs lands on different dates, and this year the finance committee asks a simple question at the fall meeting: why did the group plan invoice jump. The honest answer is nobody had reconciled the roster against the carrier bill since spring, and two people who left in the summer were still being billed. With one administration layer running both programs, the enrollment records for clergy and lay staff stay current in the same system, and a reconciled report is ready before the committee has to ask.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Ministries big enough to owe benefits work, too lean to staff it</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Single-campus churches', body: 'A business administrator or bookkeeper carrying enrollment, changes, and renewal season alone.' },
                { title: 'Multi-site churches', body: 'Campuses sharing staff and one benefits program that has to apply consistently everywhere.' },
                { title: 'Churches with schools', body: 'Academic-year contracts for teachers alongside year-round ministry staff, on plans that differ.' },
                { title: 'Denominational offices', body: 'District and regional staff, clergy benefits coordination, and reporting up the structure.' },
                { title: 'Faith-based nonprofits', body: 'Ministries and missions organizations with distributed staff and lean central offices.' },
                { title: 'Camps and conference centers', body: 'Seasonal staffing surges with the variable-hour eligibility questions that follow.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds eligibility tracking and Forms 1094-C and 1095-C for ministries that need them. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Clergy payroll and housing allowances the bigger puzzle? BEG&apos;s core service is <Link href="/services/managed-payroll/church">managed payroll for churches</Link>. Staff policies and people questions? See <Link href="/services/hr-outsourcing/church">HR outsourcing for churches</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for churches, answered</h2>
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
