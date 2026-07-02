import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Construction Payroll | Instant Payroll Quote | BEG',
  description: 'Construction payroll fully managed at $25–$45 PEPM. Certified payroll, WH-347, prevailing wage, fringes, and union reporting handled. Request a free scope review.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/construction' },
  openGraph: {
    title: 'Construction Payroll | Instant Payroll Quote | BEG',
    description: 'Construction payroll fully managed at $25–$45 PEPM. Certified payroll, WH-347, prevailing wage, fringes, and union reporting handled. Request a free scope review.',
    url: 'https://www.beghr.com/services/managed-payroll/construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Construction Payroll | Instant Payroll Quote | BEG', description: 'Construction payroll fully managed at $25–$45 PEPM. Certified payroll, WH-347, prevailing wage, fringes, and union reporting handled. Request a free scope review.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-construction');

export default function PayrollConstructionPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/construction.svg"
      imageAlt="Construction company with fully managed payroll"
      eyebrow="Managed Payroll · Construction"
      title="Construction payroll is certified payroll. We run it right."
      description="Prevailing wage, certified payroll reports, fringe benefits, union locals, and crews that move between job sites and states make construction payroll a specialty. We manage all of it at $25–$45 per employee per month -- fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'WH-347', label: 'Certified payroll reports filed for you' },
        { value: 'Union + open', label: 'Union and non-union crews handled' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house construction payroll actually cost you?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$70K–$100K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of a payroll person who actually understands certified payroll</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Construction payroll specialists who know prevailing wage and union reporting are hard to hire and expensive to keep. Fully managed service at $25–$45 PEPM replaces that headcount.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Every week</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Certified payroll reports due on every public job, every week</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A late or wrong WH-347 can hold up your progress payment, trigger an investigation, or in serious cases lead to debarment from future public work.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Many rates</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>One worker, multiple classifications and prevailing wage rates in a single day</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>When a worker splits hours across trades, jobs, and jurisdictions, the regular rate and overtime have to be calculated correctly for each. Manual spreadsheets break here.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your crews, the jobs you run, your prevailing wage and union obligations, and your current process. You get a fixed monthly cost -- no surprises.' },
              { num: '02', title: 'We configure your wage determinations, fringe rates, union locals, and job cost codes', body: 'We set up prevailing wage rates, fringe handling, union remittances, and cost codes, then run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30–60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every certified payroll report, every filing and remittance -- fully managed by BEG. Your team touches nothing.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE DEEP DIVE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Compliance Requirements</p>
            <h2>Construction payroll complexity that software listicles do not cover</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Certified payroll, Davis-Bacon, and prevailing wage</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Any contractor or subcontractor on a federally funded project over the threshold must pay Davis-Bacon prevailing wages and submit a certified payroll report, typically the WH-347, every week for every covered worker. The report lists each worker, their work classification, hours by day, the prevailing wage rate paid, the fringe amount, and a signed statement of compliance. The correct wage and fringe come from the wage determination attached to the contract, and the classification has to match the work actually performed. Getting the classification, the rate, or the fringe wrong, or filing late, can hold up your progress payment and expose you to back-wage liability. BEG produces and files certified payroll on the right schedule, in the right format for the awarding agency, so your draws are not held up.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fringe benefits: paid in cash or to a bona fide plan</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On prevailing wage work the fringe portion of the rate can be paid as additional cash wages or contributed to a bona fide benefit plan such as health, pension, or an approved training fund. The two are taxed differently and reported differently, and contractors often use an hourly fringe credit to offset what they owe. The math has to be tracked per hour, per worker, per job, and reconciled to what was actually contributed or paid. BEG handles the cash-versus-plan treatment, applies the correct fringe credit, and keeps the records that back it up if the determination is ever audited.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Union payroll: multiple locals, CBA rates, dues, and fund remittances</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Union contractors often work across several locals, each with its own collective bargaining agreement, wage scale, dues structure, and benefit funds. Every pay cycle the correct CBA rate has to be applied by local and classification, working dues deducted, and contributions remitted to the right health, pension, vacation, and training funds with the monthly or weekly remittance reports each fund requires. Miss a fund report and the contractor can face delinquency assessments. BEG runs union payroll across multiple locals, applies the right CBA rate to each worker, and prepares the fund remittance reporting so nothing is missed.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>State and local prevailing wage and multi-state crews</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Beyond federal Davis-Bacon, many states have their own prevailing wage laws, often called little Davis-Bacon acts, and some cities and counties add their own. The thresholds, covered work, and reporting formats differ by jurisdiction. Crews that travel between job sites and across state lines also create state income tax withholding and unemployment questions for each state where work is performed. BEG tracks which determination and which state rules apply to each job, withholds correctly by work state, and keeps the contractor registered where it needs to be.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Job costing, cost codes, and overtime across jobs</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Construction labor has to be allocated to the right job and cost code so job-cost reports and WIP are accurate. A single worker may split a day across two jobs and two classifications, and overtime has to be calculated on the blended regular rate, not just the rate of the last job worked. Workers compensation also varies by trade class code, so labor has to carry the right class for accurate premium. BEG configures payroll to push hours to the correct job and cost code, calculates blended-rate overtime correctly, and tags labor with the right comp class so your job costs and your audits reconcile.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>EEO and OFCCP reporting on federal and federally assisted work</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Contractors on covered federal and federally assisted projects must report workforce participation by trade and classification, including hours split between federal and non-federal work and minority and female participation, to satisfy EEO and OFCCP affirmative-action requirements. The source data is the payroll itself, which is why these reports are painful to produce by hand. BEG generates the EEO and minority-compliance reporting directly from each pay cycle, so the affirmative-action obligations on covered jobs are met without anyone compiling spreadsheets after payroll runs.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>New-hire reporting when layoffs and rehires are constant</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Construction moves workers on and off jobs all year, and every state requires new-hire reporting within a set window, often 20 days, for child support enforcement. The constant churn of hires, layoffs, and rehires makes it easy to miss a filing, and missed filings carry penalties. BEG tracks every hire and rehire and files the required new-hire reports in each state where the company operates, so the reporting keeps pace with a workforce that turns over constantly.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Workers compensation tracking by trade class code</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Workers compensation premium is driven by class code, and a field worker can move between class codes within a single week as the work changes from one trade to another. Hours charged to the wrong class either inflate the premium or create exposure at the annual comp audit. BEG tags each hour with the correct workers compensation class and produces reporting that reconciles cleanly to the annual audit, so the company does not overpay premium during the year or get surprised when the auditor arrives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Construction companies where payroll is its own full-time job</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'General contractors and CMs', body: 'Public and private work, multiple active jobs, and the certified payroll burden of collecting and validating subcontractor reports alongside your own.' },
              { title: 'Electrical, mechanical, and plumbing subs', body: 'Union and merit-shop crews, prevailing wage jobs, and skilled-trade classifications that each carry their own rate and fringe.' },
              { title: 'Civil and heavy highway contractors', body: 'Davis-Bacon and state prevailing wage on road, bridge, and infrastructure work, with crews moving between sites and jurisdictions.' },
              { title: 'Specialty trade contractors', body: 'Concrete, framing, drywall, roofing, HVAC, and other trades running mixed crews across residential and commercial jobs.' },
              { title: 'Home builders and residential GCs', body: 'Field crews, project managers, and back-office staff, with seasonal headcount swings and per-job labor tracking.' },
              { title: 'Construction firms at 15 to 300 employees', body: 'Large enough to need real certified payroll and union expertise, small enough that hiring and keeping that person in-house is a constant problem.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{item.title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Switching payroll systems mid-season is too disruptive."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform later, we can handle that too -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. Certified payroll included.',
                objection: 'Common objection: "Payroll services charge extra for every certified payroll report."',
                body: 'The $25–$45 PEPM rate is all-inclusive: payroll processing, tax filing, certified payroll and WH-347 reporting, fund remittances, compliance updates, year-end W-2s, and support. There are no per-run fees, no per-report fees, and no year-end surcharges. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "Payroll vendors disappear after onboarding."',
                body: 'Your BEG payroll specialist is your ongoing contact. New job, new wage determination, new local, new state registration -- you send one message. There is no ticket queue, no chatbot, and no 1-800 number. Your team has a real person who knows your jobs and your crews.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every certified payroll error is money and exposure you do not get back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A payroll person who understands certified payroll and union reporting costs $70,000–$100,000 per year fully loaded. Fully managed payroll at $25–$45 PEPM on a 50-person crew costs $15,000–$27,000 per year. Every cycle you run it manually is a week of WH-347 risk, fund-remittance risk, and back-office time that should be going to running jobs -- not chasing payroll.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is between project starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Starting before your next big job mobilizes means certified payroll is handled correctly from day one of that contract. Companies that wait until the middle of a public job make the cutover harder than it needs to be.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Who do you run payroll for?</h3>
              <p>Field crews and skilled trades, union and non-union workers, foremen and superintendents, project managers, and back-office staff across any construction company size.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. We operate as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: payroll processing, federal and state tax filing, certified payroll and WH-347 reporting, union fund remittances, compliance updates, year-end W-2s, and dedicated BEG support. No add-on fees, no per-run charges, no per-report charges.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30–60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. Your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes by season or by job?</h3>
              <p>Your rate adjusts with headcount. Adding or removing workers updates your monthly cost at the same per-employee rate, so seasonal swings and job mobilizations are easy to handle. No contracts to renegotiate.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle certified payroll and prevailing wage?</h3>
              <p>BEG produces certified payroll reports, typically the WH-347, on the schedule the awarding agency requires, using the wage determination on the contract. We match each worker to the correct classification, apply the right prevailing wage and fringe, and file in the format the agency accepts so your progress payments are not held up.</p>
            </div>
            <div className="faq-item">
              <h3>How are fringe benefits handled on prevailing wage jobs?</h3>
              <p>The fringe portion can be paid as additional cash wages or contributed to a bona fide benefit plan. BEG applies the correct treatment per your setup, tracks the fringe credit per hour and per worker, and keeps the records that support it if the determination is audited.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle union payroll across multiple locals?</h3>
              <p>Yes. BEG applies the correct CBA rate by local and classification, deducts working dues, and prepares the contributions and remittance reports for the health, pension, vacation, and training funds each local requires, so nothing goes delinquent.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle crews that work in multiple states?</h3>
              <p>BEG tracks which federal, state, or local prevailing wage rules apply to each job, withholds income tax by the state where work is performed, and keeps your company registered for payroll tax and unemployment in each state where your crews work.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, certified payroll and WH-347 reporting, union fund remittances, compliance updates, W-2s, and support. No add-on fees.' } },
              { '@type': 'Question', name: 'How do you handle certified payroll and prevailing wage?', acceptedAnswer: { '@type': 'Answer', text: 'BEG produces certified payroll reports such as the WH-347 on the required schedule using the contract wage determination, matches each worker to the correct classification, applies the right prevailing wage and fringe, and files in the format the awarding agency accepts.' } },
              { '@type': 'Question', name: 'Can BEG handle union payroll across multiple locals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG applies the correct CBA rate by local and classification, deducts working dues, and prepares fund remittance reports for the health, pension, vacation, and training funds each local requires.' } },
              { '@type': 'Question', name: 'How do you handle crews that work in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'BEG tracks which federal, state, or local prevailing wage rules apply to each job, withholds income tax by work state, and keeps the company registered for payroll tax and unemployment in each state where crews work.' } },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Construction', item: 'https://www.beghr.com/services/managed-payroll/construction' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="Related resources"
        posts={[
          {
            category: 'Payroll guide',
            title: 'Construction Payroll Guide: Certified Payroll, Prevailing Wage, and Fringes',
            excerpt: 'WH-347, Davis-Bacon, fringe credits, and union reporting -- the full guide to running construction payroll correctly.',
            href: '/resources/guides/construction-payroll-guide',
          },
          {
            category: 'Managed payroll',
            title: 'Managed Payroll for the Skilled Trades',
            excerpt: 'Union and non-union electricians, plumbers, HVAC, welders, and operators -- payroll handled for trade contractors.',
            href: '/services/managed-payroll/trades',
          },
          {
            category: 'Free tool',
            title: 'Managed Payroll Cost Calculator',
            excerpt: 'See what fully managed payroll would cost your crew at $25 to $45 per employee per month.',
            href: '/services/managed-payroll/cost-calculator',
          },
        ]}
      />

      {/* STATE PAYROLL COMPLIANCE CHECKER */}
    </ServicePage>
  );
}
