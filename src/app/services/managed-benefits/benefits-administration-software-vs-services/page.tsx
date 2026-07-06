import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'Benefits Admin Software vs Services: Who Works? | BEG',
  description: 'Benefits administration software vs services vs fully managed: who does the enrollment, ACA, and COBRA work, the hidden labor cost, and how to choose.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/benefits-administration-software-vs-services' },
  openGraph: {
    title: 'Benefits Admin Software vs Services: Who Works? | BEG',
    description: 'Benefits administration software vs services vs fully managed: who does the enrollment, ACA, and COBRA work, the hidden labor cost, and how to choose.',
    url: 'https://www.beghr.com/services/managed-benefits/benefits-administration-software-vs-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Admin Software vs Services: Who Works? | BEG', description: 'Benefits administration software vs services vs fully managed: who does the enrollment, ACA, and COBRA work, the hidden labor cost, and how to choose.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-software-vs-services');

const FAQS: [string, string][] = [
  [
    'What is the difference between benefits administration software and services?',
    'Software gives your team a system to run enrollment, changes, and reporting themselves. A service puts people behind the system who do that work for you. Fully managed benefits administration is both: the software plus a dedicated team operating it. The difference in all three cases is who carries the workload, not what the screen looks like.',
  ],
  [
    'Is benefits administration software enough for a small company?',
    'Sometimes. If someone on your team genuinely has the hours and knows the compliance calendar, software alone works. It stops working when enrollment season, COBRA notices, and ACA filings pile onto one busy person who already owns payroll and hiring.',
  ],
  [
    'Does outsourcing benefits administration replace our broker?',
    'No. Your broker keeps advising on plans and placing coverage. An administration service or fully managed provider runs the operations behind those plans. BEG is built explicitly as a broker ally, not a replacement, and is not a PEO.',
  ],
  [
    'Who is responsible for compliance if we outsource benefits administration?',
    'Your company remains the employer and plan sponsor, so legal responsibility stays with you regardless of which model you pick. What changes is execution: a service or managed provider tracks the eligibility data, notices, and filings that create that exposure, per DOL and IRS rules.',
  ],
  [
    'Can we start with software and add the service later?',
    'Yes, and it is a common path. BEG Managed Benefits runs on one platform with three tiers, Benefits Admin Software, Software plus ACA Compliance, and Fully Managed, so moving up does not mean re-implementing or migrating data.',
  ],
  [
    'What does each model cost?',
    'Software is usually priced per employee per month at published rates; services are usually quote-gated behind a sales call. BEG shows an instant on-screen monthly estimate for all three of its tiers instead of hiding pricing behind a demo.',
  ],
  [
    'What is the hidden cost of software-only benefits administration?',
    'It is the labor your team already absorbs: someone configuring plans, chasing carrier feed errors, answering employee questions the tool cannot, and tracking ACA deadlines. A full-time in-house hire to own this typically runs $60,000 to $100,000 a year in loaded cost, and that is before counting the hours a smaller team spends doing it on the side.',
  ],
  [
    'When do I actually need a managed service instead of just software?',
    'When the compliance calendar starts competing with the rest of your team\'s job. Signs include missed or late COBRA notices, uncertainty about ACA Applicable Large Employer status, carrier feed errors nobody catches until an employee complains, or an HR-of-one also running payroll and recruiting. At that point the software was never the gap; the operator was.',
  ],
];

export default function SoftwareVsServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Benefits administration software vs services: who does the work?',
            description: 'Benefits administration software vs services vs fully managed: who does the enrollment, ACA, and COBRA work, the hidden labor cost, and how to choose.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/benefits-administration-software-vs-services',
          }),
        }}
      />
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
              { '@type': 'ListItem', position: 3, name: 'Software vs Services', item: 'https://www.beghr.com/services/managed-benefits/benefits-administration-software-vs-services' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title={'Benefits administration software vs services: who does the work?'}
        description="Benefits administration software gives your team a better cockpit. A benefits administration service puts a pilot in it. Both get sold with the same screenshots, which is why so many companies buy the tool and discover they still own the job."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '3 tiers', label: 'Software to fully managed, one platform' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* THREE-WAY COMPARISON TABLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Three Models</p>
              <h2>Software vs services vs fully managed</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '700px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Most comparisons stop at two boxes. There are three, and the third is the one nobody sells you until you ask.
              </p>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Dimension</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Software</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Services</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Fully managed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who does the work', 'Your team, using the tool', 'A vendor team, using their process', 'A dedicated team, using the same platform your data lives in'],
                    ['What is included', 'Enrollment engine, self-service portal, reporting', 'Enrollment execution, sometimes ACA or COBRA add-ons', 'Enrollment, ACA tracking and filing, COBRA, carrier feed monitoring, an auditing analyst'],
                    ['Effort on your team', 'High: configuration, exceptions, deadlines, fixes', 'Medium: oversight and approvals, less hands-on execution', 'Low: you review and decide, the team executes and watches the calendar'],
                    ['Cost shape', 'Per employee per month, published, predictable', 'Often quote-gated, scoped per project or per task', 'Per employee per month across three tiers, shown on screen in about 90 seconds'],
                    ['Best-fit company', 'Has HR hours and compliance knowledge in-house', 'Wants specific tasks (like COBRA) off its plate without switching systems', 'HR-of-one, multi-state, ACA-exposed, or just tired of owning the deadline'],
                  ].map(([dim, sw, svc, mng], i) => (
                    <tr key={dim} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{dim}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{sw}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{svc}</td>
                      <td style={{ padding: '13px 16px', color: '#000000', background: 'rgba(236,172,96,0.08)', fontWeight: 500 }}>{mng}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.85rem', color: '#666666', marginTop: '1.5rem', lineHeight: '1.7' }}>
              The middle column, plain services, is where most confusion lives. A benefits administration service can mean a vendor that runs enrollment for you on their own system, or a broker-adjacent team that layers execution onto your existing software. Fully managed collapses that ambiguity: same platform, same data, a team embedded in it rather than bolted beside it.
            </p>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>Software vs a managed service, task by task</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Task</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Software alone</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Managed service</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Plan setup and configuration', 'Your team builds it in the tool', 'Built and maintained for you'],
                    ['Open enrollment', 'Your team plans, launches, chases, and closes it', 'Run start to finish by a dedicated team'],
                    ['Life events and changes', 'Employee self-service, your team resolves exceptions', 'Handled, including the exceptions'],
                    ['Carrier updates and data feeds', 'Your team monitors and fixes breaks', 'Monitored and corrected for you'],
                    ['ACA tracking and Forms 1094-C and 1095-C', 'Extra modules, your team files', 'Tracked and produced as a defined feature'],
                    ['COBRA and state continuation', 'Often a separate vendor your team coordinates', 'Scoped into the same service'],
                    ['Data errors and audits', 'Found when something breaks', 'An auditing analyst checks proactively on the top tier'],
                    ['Who owns the deadline', 'You do, every one of them', 'The service does the watching; you stay informed'],
                  ].map(([task, software, service], i) => (
                    <tr key={task} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{task}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{software}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Compliance context: <a href="https://www.irs.gov/affordable-care-act/employers/aca-information-center-for-applicable-large-employers-ales" target="_blank" rel="noopener noreferrer">IRS, ACA information center for applicable large employers</a> · <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Differences</p>
              <h2>Where the two models genuinely diverge</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software solves visibility. It does not solve workload.</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Good benefits administration software is genuinely good: employees enroll themselves, deductions sync to payroll, reporting stops living in spreadsheets. What it cannot do is show up. Somebody still configures plans, launches enrollment, answers the questions the tool generates, fixes the carrier feed that broke in March, and remembers that ACA filings exist. Software vendors sell the dashboard; the dashboard assumes an operator. If your team has that operator, with real hours and real compliance knowledge, software alone is a legitimate answer. The failure mode is buying the cockpit and assuming it flies itself.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>What a service actually takes off your desk</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A managed benefits administration service is the same system plus the operator: a team that runs enrollment start to finish, processes life events including the weird ones, watches carrier feeds, and produces the compliance work product. That last part is the heavy end. Applicable large employers owe annual ACA reporting on Forms 1094-C and 1095-C, per the <a href="https://www.irs.gov/affordable-care-act/employers/aca-information-center-for-applicable-large-employers-ales" target="_blank" rel="noopener noreferrer">IRS ALE information center</a>, and COBRA imposes notice duties with statutory teeth, per the <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer">Department of Labor</a>. A service turns those from calendar risks into someone&apos;s actual job description.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The staffing math nobody writes down</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The honest comparison is not software price vs service price. It is software price plus the fraction of a person the software quietly requires, vs the service. At 25 to 500 employees that fraction usually hides inside an HR manager or office manager who also owns payroll, hiring, and everything else, which is exactly how notices slip and codes go wrong. The full version of that make-or-buy math, including when in-house genuinely wins, is worked through in <Link href="/services/managed-benefits/outsourced-vs-in-house-benefits-administration">outsourced vs in-house benefits administration</Link>. The short version: count the hours before you compare the invoices.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>It is a spectrum, not a fork in the road</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The market talks about this as a binary choice, but the real landscape is a spectrum: pure software on one end, a classic <Link href="/services/managed-benefits/what-is-a-third-party-administrator">third-party administrator</Link> or fully managed service on the other, and tiered offerings in between that add ACA compliance or a dedicated team to a software core. The spectrum matters because your company moves along it. A 30-person company with simple plans sits comfortably at the software end; the same company at 80 employees, two states, and variable-hour ACA tracking has drifted toward the service end whether it noticed or not. Buy the model you are becoming, or buy a platform that lets you slide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HIDDEN LABOR COST */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Number Nobody Quotes</p>
              <h2>The hidden labor cost of &quot;just software&quot;</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <p style={{ margin: '0 0 1.1rem', color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Software vendors price the license. Nobody prices the person. But every benefits administration platform assumes an operator, and that operator&apos;s time is a real cost even when it never appears on an invoice. Hiring a dedicated in-house benefits administrator to own configuration, enrollment, exceptions, and compliance filings typically runs $60,000 to $100,000 a year in fully loaded cost, depending on market and scope. Most companies under a few hundred employees do not make that hire. They absorb the work into an HR manager who already owns payroll, hiring, and onboarding, which means the benefits work gets done in the gaps, not on a schedule.
              </p>
              <p style={{ margin: '0 0 1.1rem', color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                That gap-time work is where the real cost hides: a COBRA notice sent four days late, an ACA code entered wrong on a form the IRS will eventually ask about, a carrier feed error that silently drops a dependent for two pay cycles. None of that shows up as a line item. It shows up as a penalty letter, a benefits gap an employee discovers at the pharmacy counter, or a Friday afternoon spent reconciling a feed that should have synced itself. COBRA administration errors alone can cost a company roughly $110 per day per qualified beneficiary in exposure once a notice is missed, which adds up fast across even a handful of affected employees.
              </p>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                None of this means software is a bad buy. It means the honest price of software-only benefits administration is the license fee plus whatever fraction of a salaried person it quietly consumes, plus the tail risk of the one filing or notice that slips. A managed service prices that operator explicitly instead of hiding it inside someone else&apos;s job description.
              </p>
            </div>
          </div>
        </section>

        {/* WHEN SOFTWARE ALONE IS ENOUGH */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Actual Decision</p>
              <h2>When software alone is enough, and when it is not</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.75rem', fontSize: '1rem', color: '#000000' }}>Software alone is enough when</strong>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#444444', lineHeight: '1.8', fontSize: '0.93rem' }}>
                  <li>A named person owns benefits, with real hours set aside for it, not squeezed between other jobs</li>
                  <li>Plans are simple: one or two carriers, one state, low variable-hour headcount</li>
                  <li>You are not an ACA Applicable Large Employer, or your status is stable and well understood</li>
                  <li>Turnover is low enough that COBRA and life-event volume stays manageable by hand</li>
                </ul>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.75rem', fontSize: '1rem', color: '#000000' }}>You need services or fully managed when</strong>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#444444', lineHeight: '1.8', fontSize: '0.93rem' }}>
                  <li>Benefits is one responsibility among many for whoever owns it, not a dedicated role</li>
                  <li>You operate in multiple states, with varying continuation coverage rules to track</li>
                  <li>You are ACA-exposed: variable-hour staff, high turnover, or a past penalty notice</li>
                  <li>A notice, filing, or carrier reconciliation has already slipped once</li>
                </ul>
              </div>
            </div>
            <p className="reveal" style={{ marginTop: '1.5rem', color: '#555555', lineHeight: '1.7', fontSize: '0.95rem', textAlign: 'center' }}>
              Most companies do not sit cleanly in one column. That is exactly why BEG built three tiers on one platform instead of a single all-or-nothing product: Benefits Admin Software for teams in the left column, Software plus ACA Compliance for teams straddling the middle, and Fully Managed for teams solidly in the right.
            </p>
          </div>
        </section>

        {/* WHICH SHOULD YOU CHOOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Which Should You Choose</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'You have a real HR team with real hours',
                  body: 'Software alone is a fair answer. Your team keeps control, the cost stays low, and you upgrade only if enrollment season or ACA volume starts eating the team. Be honest about the hours.',
                },
                {
                  title: 'Benefits is one hat on an HR-of-one',
                  body: 'The service model fits. One person cannot run enrollment, chase carriers, and track ACA eligibility on top of everything else without something slipping, and the somethings that slip carry penalties.',
                },
                {
                  title: 'Your ACA exposure is the whole reason you are reading this',
                  body: 'Variable-hour staff, high turnover, or a past 226-J letter all point the same direction: you need eligibility tracked and forms produced as a service, not a module your team hopefully configures right.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>Both ends of the spectrum, one platform, one estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, deliberately spans this whole page across three plans: Benefits Admin Software for teams that want the tool and already have the operator, Software plus ACA Compliance for teams that want the tool with the compliance filing work handled, and Fully Managed for teams that want a dedicated specialist and auditing analyst running the whole operation. You pick where on the spectrum you sit today and slide later without re-implementing, your broker stays your broker, BEG is not a PEO, and the monthly estimate for all three plans shows on screen in about 90 seconds instead of behind a demo. Details live on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Software vs services, answered</h2>
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
