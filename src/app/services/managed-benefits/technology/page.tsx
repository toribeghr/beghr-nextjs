import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Technology Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for technology companies: multi-state remote eligibility, ACA tracking, and enrollment done right. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/technology' },
  openGraph: {
    title: 'Technology Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for technology companies: multi-state remote eligibility, ACA tracking, and enrollment done right. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/technology',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Technology Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for technology companies: multi-state remote eligibility, ACA tracking, and enrollment done right. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-technology');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a technology company?',
    'Plan setup, online enrollment built for a remote team, ACA eligibility tracking as headcount grows, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support that keeps pace with hiring and offboarding.',
  ],
  [
    'Does hiring remote employees in new states complicate benefits?',
    'It complicates administration more than eligibility. ACA rules are federal, but enrollment, required notices, and continuation coverage all have to reach employees you will never meet in person, and state continuation rules vary. A system built for remote self-service handles what a spreadsheet cannot.',
  ],
  [
    'Our benefits are a recruiting tool. Does outsourcing the admin change the plans?',
    'No. Plan design stays with you and your broker; nothing about the coverage changes. What changes is execution: enrollment that feels as polished as the rest of your product, and eligibility data that is right when someone checks.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for tech companies?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your company stays the employer.',
  ],
  [
    'What does technology company benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire, which typically runs $60K-$100K a year in fully loaded salary before that person has software to administer anything in. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'How does equity-heavy compensation affect ACA affordability calculations?',
    'Affordability is measured against W-2 wages and the IRS safe harbors, rate of pay, W-2, or federal poverty line, not against total compensation including unvested equity. A tech employee with modest cash salary and significant equity can still trigger an affordability failure if the cash-only premium share crosses the IRS threshold, so equity-heavy comp does not automatically solve the affordability test the way total-comp numbers might suggest.',
  ],
  [
    'We laid off part of the team in a single reduction in force. What happens to COBRA?',
    'Every employee who loses coverage in the RIF has an individual COBRA qualifying event, and notices, the election window, and premium deadlines run on federal timelines for each one simultaneously. Premiums run up to 102% of plan cost, commonly translating to roughly $110/day of exposure per lapsed election if a stack of notices goes out late during a chaotic week. Volume does not extend the deadlines.',
  ],
  [
    'Does hiring through a professional employer of record change our ACA obligations for that hire?',
    'It depends on which structure is used and who the common-law employer is; a true PEO or employer-of-record arrangement can shift the ACA reporting obligation for those specific workers, while co-employer arrangements without that legal structure generally do not. BEG Managed Benefits is not a PEO, so this question is scoped on your discovery call against your actual hiring structure rather than assumed either way.',
  ],
];

export default function ManagedBenefitsTechnologyPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Technology', item: 'https://www.beghr.com/services/managed-benefits/technology' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Technology"
        title="You hired in eleven states before you hired anyone to run benefits."
        description="Tech teams go remote-first and multi-state years before they build an operations function, while offering the rich benefits the talent market demands. That leaves enrollment, eligibility, and notices scattered across whoever has time this sprint. BEG Managed Benefits, powered by isolved, runs the administration nationally while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Remote-ready', label: 'Multi-state eligibility in one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Tech Benefits Problem</p>
              <h2>Rich benefits, remote everywhere, and nobody whose job is the paperwork behind either.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '50 FTEs',
                  label: 'The ACA threshold a funded team crosses mid-roadmap',
                  sub: 'Under IRS rules, applicable-large-employer status attaches at 50 full-time employees including full-time equivalents. Growing tech companies cross it between funding rounds, and the obligations apply the following year whether anyone noticed or not.',
                },
                {
                  stat: 'Every state',
                  label: 'Where your next hire might live',
                  sub: 'Remote-first hiring means enrollment materials, required notices, and continuation coverage have to reach employees in states where you have no office and no admin, each with its own continuation rules below the federal threshold.',
                },
                {
                  stat: 'Table stakes',
                  label: 'What rich benefits are in the tech talent market',
                  sub: 'Candidates compare offers benefit by benefit. A generous plan undermined by a clumsy enrollment experience and deduction errors reads as a broken promise in the first month on the job.',
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
              <h2>Tech benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that meets your team&apos;s software bar</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Your engineers will judge the benefits portal the way they judge any product. The Benefits Admin Software plan gives them self-service enrollment that holds up: plan comparison, AI-guided recommendations balancing cost and coverage, life-event workflows that do not require emailing a spreadsheet to anyone. Deductions sync to payroll, and real-time reporting shows finance what benefits actually cost as headcount moves.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA readiness before the threshold, filings after it</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan tracks your full-time and full-time-equivalent counts as you grow, so applicable-large-employer status is something you see coming instead of discover in an IRS letter two years later. Once obligations attach, eligibility tracking runs continuously, including part-time contractors-turned-employees and interns whose hours vary, and Forms 1094-C and 1095-C are produced for you at filing time.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Offboarding notices at startup speed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tech turnover is real, and a reduction in force can create a stack of continuation events in one afternoon. Departures trigger the required election notices on federal timelines, windows and elections are tracked, and coverage end dates flow to carriers, whether one engineer resigned or a team was cut. State continuation rules for employees in smaller-threshold states are scoped exactly on your discovery call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: an operations function you do not have to hire</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the changes a growing roster generates, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors that hide in fast-growing companies: departed employees still on the invoice, elections that never reached the carrier, dependents past eligibility. It is the benefits half of a people-ops hire, without the hire.</p>
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
                Benefits Admin Software puts enrollment online for the whole remote team. Software + ACA Compliance adds growth-stage eligibility tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Multi-state payroll registrations the bigger fire? That is <Link href="/services/managed-payroll/technology">managed payroll for technology companies</Link>; for remote-work policies and handbooks, see <Link href="/services/hr-outsourcing/technology">technology HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* SCENARIO: CROSSING 50 FTE MID-ROADMAP */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Common Scenario</p>
              <h2>Series B hiring push crosses the ALE line nobody was watching</h2>
            </div>
            <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem', marginTop: '1.5rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A 42-person remote-first company closes a Series B and hires 15 engineers and three support staff across eight states in four months. Nobody tracked full-time-equivalent hours through the sprint because headcount, not FTE math, was the number leadership watched. By month three the company is an applicable large employer, obligated to offer coverage to at least 95% of full-time employees, and the obligation applies retroactively to the measurement period once the threshold is crossed. Continuous FTE tracking flags the crossing before it becomes a compliance gap discovered at tax filing time, in a state the company has no HR presence in.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Technology benefits administration, answered</h2>
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
