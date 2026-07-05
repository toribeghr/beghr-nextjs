import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'COBRA vs Mini-COBRA: Which Law Covers Your Company? | BEG',
  description: 'Federal COBRA covers employers with 20 or more employees. State mini-COBRA laws like Cal-COBRA pick up smaller groups. Thresholds, timelines, and notices.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/cobra-vs-mini-cobra' },
  openGraph: {
    title: 'COBRA vs Mini-COBRA: Which Law Covers Your Company? | BEG',
    description: 'Federal COBRA covers employers with 20 or more employees. State mini-COBRA laws like Cal-COBRA pick up smaller groups. Thresholds, timelines, and notices.',
    url: 'https://www.beghr.com/services/managed-benefits/cobra-vs-mini-cobra',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'COBRA vs Mini-COBRA: Which Law Covers Your Company? | BEG', description: 'Federal COBRA covers employers with 20 or more employees. State mini-COBRA laws like Cal-COBRA pick up smaller groups. Thresholds, timelines, and notices.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-cobra-vs-mini-cobra');

const FAQS: [string, string][] = [
  [
    'What is mini-COBRA?',
    'Mini-COBRA is the informal name for state continuation laws that let employees of smaller companies keep group health coverage after a qualifying event, filling the gap below the federal 20-employee threshold.',
  ],
  [
    'Does federal COBRA apply to my small business?',
    'Generally only if your group health plan is sponsored by an employer with 20 or more employees in the prior year, per the Department of Labor. Below that, state continuation law may apply instead.',
  ],
  [
    'What is Cal-COBRA?',
    'Cal-COBRA is the California continuation law. It applies to employers and group plans covering 2 to 19 employees and can extend coverage up to 36 months, per the California Department of Managed Health Care.',
  ],
  [
    'Are mini-COBRA rules the same in every state?',
    'No. Duration, employer-size thresholds, eligibility, and notice duties vary widely by state. California allows up to 36 months while Texas state continuation runs up to nine months, for example.',
  ],
  [
    'Who sends the continuation notices, my company or the carrier?',
    'It depends on the law. Under federal COBRA the employer and plan administrator carry notice duties. Under many state laws, including Cal-COBRA, the health plan handles more of it, but employers keep obligations.',
  ],
  [
    'What happens if we get COBRA notices wrong?',
    'Federal law allows court-imposed penalties of up to $110 per day for notice failures under ERISA, plus lawsuits from affected beneficiaries. The exposure accrues per person, per day, which is why administrators track it.',
  ],
];

export default function CobraVsMiniCobraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'COBRA vs mini-COBRA: which continuation law covers your company?',
            description: 'Federal COBRA covers employers with 20 or more employees. State mini-COBRA laws like Cal-COBRA pick up smaller groups. Thresholds, timelines, and notices.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/cobra-vs-mini-cobra',
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
              { '@type': 'ListItem', position: 3, name: 'COBRA vs Mini-COBRA', item: 'https://www.beghr.com/services/managed-benefits/cobra-vs-mini-cobra' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title={'COBRA vs mini-COBRA: which continuation law covers your company?'}
        description="Federal COBRA generally applies when an employer had 20 or more employees in the prior year. Below that line, state continuation laws, nicknamed mini-COBRA, take over, and they differ in every state that has one. Which side of the line you sit on decides your notice duties."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: '20+', label: 'Employees, where federal COBRA generally starts' },
          { value: '50 rulebooks', label: 'State continuation varies hard' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>Federal COBRA vs state continuation, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Federal COBRA</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>State continuation (mini-COBRA)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Source of law', 'Federal statute, one set of rules nationwide', 'Each state writes its own, where one exists at all'],
                    ['Employer size', 'Generally 20 or more employees in the prior year', 'Typically smaller groups, such as 2 to 19 in California'],
                    ['Coverage length', 'Generally 18 or 36 months depending on the event', 'Varies: up to 36 months under Cal-COBRA, up to 9 in Texas'],
                    ['Premium charged', 'Up to 102 percent of the plan cost, per DOL', 'Set by each state, often a slightly higher percentage'],
                    ['Who runs notices', 'Employer and plan administrator carry defined duties', 'Often carrier-administered, with employer duties that vary'],
                    ['Self-funded plans', 'Covered by federal COBRA', 'Generally outside the reach of state insurance law'],
                    ['After federal COBRA ends', 'Coverage ends at the federal limit', 'Some states extend further; Cal-COBRA can add 18 months'],
                    ['Multi-state workforces', 'One federal rulebook', 'One rulebook per state where coverage is issued'],
                  ].map(([factor, fed, state], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{fed}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a> · <a href="https://www.dmhc.ca.gov/HealthCareinCalifornia/TypesofPlans/KeepYourHealthCoverage(COBRA).aspx" target="_blank" rel="noopener noreferrer">California DMHC, federal COBRA and Cal-COBRA</a> · <a href="https://www.tdi.texas.gov/pubs/consumer/cb005.html" target="_blank" rel="noopener noreferrer">Texas Department of Insurance, health care coverage guide</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Differences</p>
              <h2>Where the two regimes genuinely diverge</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The 20-employee line, and how it is actually drawn</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal COBRA generally requires continuation coverage from group health plans sponsored by employers with 20 or more employees in the prior year, per the <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer">Department of Labor</a>. Two details trip companies up. First, the count looks at the prior year, so a business that grew past 20 this January may not be a COBRA employer until next year, and one that shrank may still be. Second, the qualified beneficiary can be required to pay the full premium plus an administrative margin, up to 102 percent of the cost to the plan. Neither detail is intuitive, and both decide real notice obligations.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Mini-COBRA is fifty different laws wearing one nickname</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>State continuation laws exist because federal COBRA leaves small-group employees uncovered. But the laws share a nickname, not a design. <a href="https://www.dmhc.ca.gov/HealthCareinCalifornia/TypesofPlans/KeepYourHealthCoverage(COBRA).aspx" target="_blank" rel="noopener noreferrer">Cal-COBRA</a> covers California groups of 2 to 19 employees for up to 36 months, and can even add 18 months after an 18-month federal COBRA period ends. <a href="https://www.tdi.texas.gov/pubs/consumer/cb005.html" target="_blank" rel="noopener noreferrer">Texas state continuation</a> runs up to nine months for employees who are not eligible for federal COBRA. Other states sit anywhere between those poles, and some have no continuation law at all. The nickname hides the variance; the variance is the whole problem.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Notices are where the money is lost</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Continuation coverage is fundamentally a notice regime: election notices, deadlines, premium windows. Under federal COBRA those duties sit with the employer and plan administrator, and federal law allows courts to impose penalties of up to $110 per day for notice failures under ERISA, accruing per beneficiary, on top of claims from the person who never got the notice; the <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL&apos;s COBRA compliance resources</a> spell out the notice duties. Under many state laws the carrier shoulders more of the mechanics, but the employer still has to report qualifying events correctly and on time. Either way, a spreadsheet and a busy office manager is the riskiest possible system.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The trap for growing, multi-state companies</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The dangerous years are the transition years. A company crossing the 20-employee line changes rulebooks, usually without noticing, because the count is based on the prior year. A company hiring its first employee in a new state may inherit that state&apos;s continuation, notice, and timing rules for coverage issued there. And a company that is both, growing and multi-state, can owe federal COBRA duties and state-specific obligations at the same time. This is precisely the operational work a <Link href="/services/managed-benefits/what-is-a-third-party-administrator">third-party administrator</Link> exists to carry: someone whose actual job is knowing which law applies to which person in which state.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH APPLIES TO YOU */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Which Applies To You</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'You have 12 employees in one state',
                  body: 'Federal COBRA likely does not apply to you, but your state continuation law might, and its rules are nothing like the articles you read about COBRA. Check your state, not the federal statute.',
                },
                {
                  title: 'You crossed 20 employees in the last year or two',
                  body: 'You are in the transition zone. The prior-year count decides when federal COBRA duties actually attach, and the answer is worth confirming precisely, because the notice clock starts with the next qualifying event.',
                },
                {
                  title: 'You have 60 employees across five states',
                  body: 'Federal COBRA governs your plan, and state rules can still shape what happens after it, like Cal-COBRA extensions for California employees. This is the profile where outsourced administration pays for itself fastest.',
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
              <h2>Continuation rules tracked for you, whichever law applies</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, includes COBRA and state continuation support scoped to your company and your states, alongside enrollment, eligibility data, and ACA reporting. You keep your broker for coverage decisions; the deadline-driven administration moves to a team whose job is the calendar. Scope and plans live on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>, and if you are weighing doing this internally, start with <Link href="/services/managed-benefits/outsourced-vs-in-house-benefits-administration">outsourced vs in-house benefits administration</Link>.
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
              <h2>COBRA vs mini-COBRA, answered</h2>
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
