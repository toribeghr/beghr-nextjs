import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'Benefits Software vs Services: Who Does the Work? | BEG',
  description: 'Benefits administration software vs outsourcing: who actually does the enrollment, ACA, and COBRA work, and how to pick the model your team can live with.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/benefits-administration-software-vs-services' },
  openGraph: {
    title: 'Benefits Software vs Services: Who Does the Work? | BEG',
    description: 'Benefits administration software vs outsourcing: who actually does the enrollment, ACA, and COBRA work, and how to pick the model your team can live with.',
    url: 'https://www.beghr.com/services/managed-benefits/benefits-administration-software-vs-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Software vs Services: Who Does the Work? | BEG', description: 'Benefits administration software vs outsourcing: who actually does the enrollment, ACA, and COBRA work, and how to pick the model your team can live with.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-software-vs-services');

const FAQS: [string, string][] = [
  [
    'What is the difference between benefits administration software and services?',
    'Software gives your team a system to run enrollment, changes, and reporting themselves. A service puts people behind the system who do that work for you. The difference is who carries the workload.',
  ],
  [
    'Is benefits administration software enough for a small company?',
    'Sometimes. If someone on your team genuinely has the hours and knows the compliance calendar, software works. It stops working when enrollment season, COBRA notices, and ACA filings pile onto one busy person.',
  ],
  [
    'Does outsourcing benefits administration replace our broker?',
    'No. Your broker keeps advising on plans and placing coverage. An administration service runs the operations behind those plans. BEG is built explicitly around keeping your broker in place.',
  ],
  [
    'Who is responsible for compliance if we outsource?',
    'Your company remains the employer and plan sponsor, so legal responsibility stays with you. What changes is execution: a service tracks the eligibility data, notices, and filings that create that exposure.',
  ],
  [
    'Can we start with software and add the service later?',
    'Yes, and it is a common path. BEG Managed Benefits runs on one platform with three tiers, from self-service software to fully managed, so moving up does not mean re-implementing.',
  ],
  [
    'What does each model cost?',
    'Software is usually priced per employee per month at published rates; services are usually quote-gated. BEG shows an instant on-screen monthly estimate for all three of its tiers instead.',
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
            description: 'Benefits administration software vs outsourcing: who actually does the enrollment, ACA, and COBRA work, and how to pick the model your team can live with.',
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
                BEG Managed Benefits, powered by isolved, deliberately spans this whole page: a self-service software tier, a software plus ACA compliance tier, and a fully managed tier with a dedicated specialist and auditing analyst. You pick where on the spectrum you sit today and slide later without re-implementing, your broker stays your broker, and the monthly estimate for all three tiers shows on screen in about 90 seconds instead of behind a demo. Details live on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
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
