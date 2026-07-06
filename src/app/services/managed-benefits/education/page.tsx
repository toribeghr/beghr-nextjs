import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Admin for Education | Instant Estimate | BEG',
  description: 'Benefits administration for schools: academic-year ACA rules, summer break eligibility, and enrollment handled. Keep your broker. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/education' },
  openGraph: {
    title: 'Benefits Admin for Education | Instant Estimate | BEG',
    description: 'Benefits administration for schools: academic-year ACA rules, summer break eligibility, and enrollment handled. Keep your broker. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/education',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin for Education | Instant Estimate | BEG', description: 'Benefits administration for schools: academic-year ACA rules, summer break eligibility, and enrollment handled. Keep your broker. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-education');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a school?',
    'Plan setup, enrollment for faculty and staff, life-event changes, carrier updates, payroll deduction sync, academic-year ACA eligibility tracking, and Forms 1094-C and 1095-C produced from the same data.',
  ],
  [
    'Does summer break end a teacher\'s benefits eligibility?',
    'Not under IRS rules. Educational organizations face special break-in-service provisions: summer break generally cannot be treated as a termination for hours-averaging purposes, and a returning employee is usually a continuing employee, not a new hire.',
  ],
  [
    'How are substitutes and adjuncts handled for ACA purposes?',
    'As variable-hour employees under the lookback measurement method, with education-specific rules layered on: employment break periods are excluded or credited when averaging hours, so a substitute is not undercounted because of scheduled breaks.',
  ],
  [
    'Is this a PEO for schools?',
    'No. There is no co-employment and no employer-of-record change. Your school stays the employer and your plans stay your plans. Powered by isolved.',
  ],
  [
    'What does benefits administration cost for a school?',
    'A monthly per-employee cost that lands far below one internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'Do adjunct professors ever qualify for benefits under ACA rules?',
    'Yes, if their measured hours cross the full-time line, and the Department of Education\'s own guidance plus IRS rules require institutions to have a documented, defensible method for crediting adjunct hours, including time spent on prep and grading that is not always captured by classroom hours alone.',
  ],
  [
    'How is teacher retention actually connected to benefits administration?',
    'Slow, confusing enrollment is itself a retention cost. A new teacher who cannot get a straight answer about coverage during the August rush forms an early opinion about the institution, and schools competing for talent in a persistent shortage cannot afford that friction on top of everything else new hires are absorbing.',
  ],
  [
    'Who actually regulates education benefits compliance?',
    'The IRS enforces the ACA employer mandate, including the education-specific break-in-service and averaging rules written for academic-year employers, and produces the guidance those calculations depend on. State insurance departments separately govern what plans can be sold to the institution.',
  ],
];

export default function ManagedBenefitsEducationPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Education', item: 'https://www.beghr.com/services/managed-benefits/education' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Education"
        title="The academic calendar has a summer break. ACA eligibility rules do not."
        description="Nine-month contracts, substitutes, adjuncts, and coaches: the IRS wrote special rules just for educational employers, and they are easy to get wrong by hand. BEG Managed Benefits, powered by isolved, tracks eligibility through the school year and handles the administration while your broker keeps placing the coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '12 months', label: 'Eligibility tracked through every break' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Education Benefits Problem</p>
              <h2>The IRS singled out educational employers for special eligibility rules.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '26 weeks',
                  label: 'The break-in-service line for educational organizations',
                  sub: 'A returning employee counts as new only after 26 consecutive workless weeks, double the standard threshold. Summer break does not reset anyone, and treating it that way creates exposure.',
                },
                {
                  stat: '501 hours',
                  label: 'The cap on break hours credited in averaging rules',
                  sub: 'When averaging hours for eligibility, employment break periods must be excluded or credited under IRS rules, with special math most systems never implement. Schools carry it by hand or not at all.',
                },
                {
                  stat: '9 vs 12',
                  label: 'Academic-year contracts on calendar-year compliance',
                  sub: 'Teachers paid over 9 or 12 months, staff working 10, substitutes working whenever: every pattern has to reconcile to monthly ACA reporting codes on Form 1095-C.',
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
              Source: <a href="https://www.irs.gov/affordable-care-act/employers/questions-and-answers-on-employer-shared-responsibility-provisions-under-the-affordable-care-act" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility questions and answers</a>.
            </p>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Benefits Admin for Education</p>
              <h2>The benefits problems specific to schools, and what gets handled</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Academic-year contracts without eligibility whiplash</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A teacher on a nine-month contract is not terminated in June and hired in August, and the IRS education-specific break rules exist precisely so employers cannot treat them that way. The Software + ACA Compliance plan applies those rules: break periods handled correctly in the hours math, continuing-employee status preserved across summer, and coverage that does not flicker off and on with the school calendar.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Substitutes, adjuncts, coaches: the variable-hour bench</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Education runs on people whose hours defy simple classification: a substitute working three days one week and none the next, an adjunct teaching two sections, a coach whose season is twelve intense weeks. Lookback measurement with education-specific averaging determines who is actually full-time under the rules, documents it, and generates the right 1095-C codes, instead of leaving the business office to guess.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that matches the August crunch</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Schools hire in a compressed late-summer window, and every new hire needs benefits onboarding while the building is being readied for students. Self-service enrollment with AI-guided plan recommendations lets new faculty enroll from a phone before the first in-service day, and waiting periods are tracked so offers land on time even in the rush.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Networks, systems, and related entities</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Charter networks, diocesan school systems, and campuses with an affiliated preschool or foundation often run as multiple entities with shared ownership or control, which can combine them for ACA counting. One system holds the combined roster, applies consistent eligibility rules, and keeps an employee who moves between campuses from being terminated on paper.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A business office that gets its fall back</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In most schools, benefits administration lives with a business manager who also owns tuition, budgets, and vendors. On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish and processes the year&apos;s changes, while a Benefits Auditing Analyst reconciles carrier bills against actual enrollment, a check most schools have never once run.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Staff Type by Staff Type</p>
              <h2>Academic staffing categories and where benefits administration breaks</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f7f7f7', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>Staff type</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>Where it breaks</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>The regulator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Full-time faculty on 9-month contracts', 'Summer break must not be treated as a termination for hours-averaging purposes.', 'IRS (education-specific break-in-service rules)'],
                    ['Adjunct and part-time faculty', 'Classroom hours alone undercount actual work; prep and grading time needs a documented crediting method.', 'IRS (lookback measurement method)'],
                    ['Substitutes', 'Highly variable weekly schedules make manual full-time determination close to impossible.', 'IRS (variable-hour averaging)'],
                    ['Coaches and seasonal staff', 'Twelve intense weeks of a season have to reconcile to twelve months of monthly reporting codes.', 'IRS (Form 1095-C monthly codes)'],
                    ['Charter or diocesan network staff', 'Employees moving between campuses under common control can be miscounted as terminated and rehired.', 'IRS (aggregated ALE group counting)'],
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
              <p className="eyebrow">A Familiar August</p>
              <h2>What academic-year eligibility looks like without break-period rules built in</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A business manager tracking eligibility in a spreadsheet sees a nine-month teacher&apos;s hours drop to zero every June, July, and August, and a generic system with no education-specific logic reads that as the employee falling below the full-time threshold. Coverage gets flagged for termination in the fall, the teacher gets a confusing letter about losing benefits over a summer she was never supposed to lose them, and the business office spends the first week of the school year fixing a problem that IRS break-in-service rules were written specifically to prevent. Administration built around the education-specific averaging rules never generates that letter in the first place, because summer break is credited correctly the moment the school year data comes in.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Educational employers big enough to owe benefits work, too lean to staff it</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Private and independent schools', body: 'Faculty on academic-year contracts, staff on twelve months, and a lean business office running it all.' },
                { title: 'Charter schools and networks', body: 'Multi-campus rosters, entity questions, and ACA reporting that spans the network.' },
                { title: 'Faith-based schools', body: 'Plans that may sit alongside a church or diocesan program, with two sets of rules to administer.' },
                { title: 'Early childhood and preschool programs', body: 'Aides and floaters whose variable hours need real lookback tracking.' },
                { title: 'Tutoring and enrichment companies', body: 'Part-time instructors across locations, hours that aggregate in the ACA math.' },
                { title: 'Trade and vocational schools', body: 'Instructors from industry, evening programs, and enrollment cycles that never stop.' },
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
                Benefits Admin Software puts enrollment and changes in one self-service system. Software + ACA Compliance adds the academic-calendar eligibility tracking and Forms 1094-C and 1095-C schools need. Fully Managed adds a dedicated Managed Benefits Specialist and a Benefits Auditing Analyst. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Nine-month payroll spread over twelve the bigger puzzle? BEG&apos;s core service is <Link href="/services/managed-payroll/education">managed payroll for education</Link>. Faculty handbooks and policy questions? See <Link href="/services/hr-outsourcing/education">HR outsourcing for education</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Benefits administration for education, answered</h2>
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
