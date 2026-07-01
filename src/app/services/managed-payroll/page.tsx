import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll Services | Instant Quote, $25-$45 PEPM | BEG',
  description: 'Fully managed payroll at $25-$45 PEPM all-inclusive. Taxes, filings, W-2s, compliance handled. Works in your existing system. No migration. All 50 states.',
  alternates: {
    canonical: 'https://www.beghr.com/services/managed-payroll',
  },
  openGraph: {
    title: 'Managed Payroll Services | Instant Quote, $25-$45 PEPM | BEG',
    description: 'Fully managed payroll at $25-$45 PEPM all-inclusive. Taxes, filings, W-2s, compliance handled. Works in your existing system. No migration. All 50 states.',
    url: 'https://www.beghr.com/services/managed-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll Services | Instant Quote, $25-$45 PEPM | BEG', description: 'Fully managed payroll at $25-$45 PEPM all-inclusive. Taxes, filings, W-2s, compliance handled. Works in your existing system. No migration. All 50 states.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('managed-payroll');

export default function ManagedPayrollPage() {
  return (
    <ServicePage
      heroVideoId="3J_TApCaG1E"
      showHeroImage={false}
      eyebrow="Managed Payroll Services"
      title="Your payroll should not take half your week or cost six figures to get right."
      description="A full-time payroll manager costs $60,000-$100,000 per year in salary and benefits alone. BEG runs your entire payroll operation at $25-$45 per employee per month, all-inclusive. Every cycle, every filing, every compliance update. Nothing for your team to touch."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25-$45', label: 'PEPM, all-inclusive' },
        { value: 'All 50', label: 'States covered' },
        { value: '3-5 Days', label: 'To live managed payroll' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What Payroll Actually Costs You</p>
            <h2>Most companies are overpaying for payroll in ways they do not track.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                stat: '$60K-$100K/yr',
                label: 'What an in-house payroll manager costs all-in',
                sub: 'Salary, benefits, PTO, and overhead just to run payroll every two weeks. That headcount cost stays whether your team grows or not.',
              },
              {
                stat: '33%',
                label: 'Of small businesses pay IRS penalties due to payroll errors',
                sub: 'One missed filing or miscalculated withholding can trigger hundreds to thousands in penalties. Errors compound when payroll is managed manually.',
              },
              {
                stat: '5+ hrs',
                label: 'Average time spent on payroll per cycle by HR or finance teams',
                sub: 'Every pay period: data gathering, entry, reviewing, correcting, filing. That is time your team is not spending on what actually grows the business.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From payroll headache to fully managed in three steps</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                num: '01',
                title: 'Discovery call',
                body: 'We review your current payroll setup, team size, and compliance needs. You get a clear scope and a flat monthly cost before we start.',
              },
              {
                num: '02',
                title: 'BEG-managed onboarding',
                body: 'We migrate your data, configure your payroll structure, and run a clean first cycle. No interruption to your team, no lost history.',
              },
              {
                num: '03',
                title: 'We run it from here',
                body: 'Every pay cycle, every tax filing, every year-end form. Your team never touches payroll again. Questions go to your BEG contact, not a call center.',
              },
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

      {/* WHAT WE HANDLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Complete Scope</p>
            <h2>Everything BEG handles so your team handles nothing.</h2>
            <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
              Most payroll vendors process checks and leave everything else to you. BEG manages the full scope from initial setup through year-end close at one flat monthly rate.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              {
                heading: 'Setup and Onboarding',
                items: [
                  'Employee records and direct deposit',
                  'Tax registration: federal, state, and local',
                  'Deductions: benefits, 401k, garnishments',
                  'Pay schedule and frequency configuration',
                  'Multi-state registration support',
                  'Historical data migration',
                ],
              },
              {
                heading: 'Ongoing Processing',
                items: [
                  'Gross-to-net calculations every cycle',
                  'Tax withholding and remittance',
                  'Direct deposit and pay stub delivery',
                  'Off-cycle and bonus payrolls',
                  'New hire reporting in all 50 states',
                  'Timecard and exception review',
                ],
              },
              {
                heading: 'Compliance and Filings',
                items: [
                  'Federal and state payroll tax deposits',
                  'Quarterly 941 and 940 filings',
                  'State unemployment insurance (SUTA)',
                  'W-2 preparation, filing, and delivery',
                  'ACA 1094/1095 reporting',
                  'Year-end reconciliation and close',
                ],
              },
              {
                heading: 'Employee Support',
                items: [
                  'Paycheck questions handled by BEG',
                  'Direct deposit updates and changes',
                  'W-2 reissues and corrections',
                  'Employment and income verifications',
                  'IRS and state notice management',
                  'Garnishment calculation and remittance',
                ],
              },
            ].map(({ heading, items }) => (
              <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #ECAC60', color: '#000000' }}>{heading}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontSize: '0.88rem', padding: '0.35rem 0', color: '#444444', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.45' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors cannot offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'We work in your existing system. No migration required.',
                objection: 'Common objection: "Switching payroll is too painful to be worth it."',
                body: 'BEG can run payroll in your existing system or in our iSolved account, whichever fits your situation. Most clients do not need to migrate anything. We configure around your current setup and run from there. No disruption, no lost history, no re-training your team on new software.',
              },
              {
                badge: 'Bonus 02',
                title: 'One flat rate. All-inclusive. No module surprises.',
                objection: 'Common objection: "Our last payroll vendor kept charging us for add-ons."',
                body: '$25-$45 PEPM covers everything: payroll processing, tax filings, W-2s, direct deposit, new hire reporting, and compliance updates. There is no base fee plus per-run charges plus filing fees. One number, every month. We tell you the exact rate on your discovery call before you commit to anything.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact who knows your business. Not a support queue.',
                objection: 'Common objection: "Every time something is wrong, I spend an hour on hold."',
                body: 'You have a dedicated BEG contact who runs your payroll and knows your structure. When there is a question, a change, or an issue, you call that person. Not a 1-800 number. Not a ticket queue. Not someone who has never seen your account. One contact, year-round.',
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

      {/* COMPARISON TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Compares</p>
            <h2>Managed payroll vs. in-house vs. self-service software</h2>
            <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '600px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
              The right model depends on your headcount, risk tolerance, and how much time your team can afford to spend on payroll every pay period.
            </p>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ECAC60' }}>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Factor</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Payroll</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In-House Manager</th>
                  <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Self-Service Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly cost (50 employees)', '$1,250-$2,250 all-in', '$6,000-$9,000+ (salary and benefits)', '$300-$600 plus your time'],
                  ['Who runs payroll', 'BEG: fully managed', 'Your employee', 'You or your team'],
                  ['Tax filings', 'All 50 states, fully handled', 'Depends on expertise', 'Platform-assisted; you verify'],
                  ['W-2s and year-end', 'Fully managed by BEG', 'Employee dependent', 'Generated; you distribute'],
                  ['Multi-state compliance', 'Yes, all 50 states included', 'Varies by experience', 'Platform-assisted'],
                  ['Employee questions', 'BEG handles directly', 'One person (turnover risk)', 'Self-service portal'],
                  ['Migration required', 'No: works in your system', 'Hire, train, onboard (months)', 'Full data migration required'],
                  ['Time to live payroll', '3-5 business days', '6-12 weeks to hire and train', '4-8 weeks to configure'],
                  ['Key risk', 'None: BEG is accountable', 'Turnover leaves you exposed', 'You own all errors and penalties'],
                ].map(([factor, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                    <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                    <td style={{ padding: '13px 16px', color: '#555555' }}>{inhouse}</td>
                    <td style={{ padding: '13px 16px', color: '#555555' }}>{software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Cost Comparison</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Every month you pay a payroll manager is a month you overpay.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                A payroll manager at $75,000 per year costs $6,250 per month before benefits, PTO, and overhead. BEG manages the same function at $25-$45 per employee per month. For a 50-person company, that is $1,250-$2,250 per month total -- versus a $70,000+ salary. The difference goes back to your bottom line every single month.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Onboarding Capacity</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                BEG onboards a maximum of 3 new payroll clients per month.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                To guarantee zero disruption to your first pay cycle, BEG limits new managed payroll onboards to 3 per month. The next available onboarding window is filling. Request a scope review this week to secure your slot before it closes.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
              style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            >
              Request a Free Payroll Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              We audit your last quarter for errors at no cost and deliver your exact monthly rate within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* BY STATE */}
      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">By State</p>
            <h2>Managed payroll in all 50 states</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '720px' }}>
              State payroll tax, SUI, and compliance handled from one account. Find your state below.
            </p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.4rem 1.25rem', marginTop: '2rem' }}>
            {[
              'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia',
              'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
              'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
              'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina',
              'south-dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming',
            ].map((st) => (
              <Link
                key={st}
                href={`/services/managed-payroll/${st}`}
                style={{ padding: '0.35rem 0', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #ececec' }}
              >
                {st.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BY INDUSTRY */}
      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">By Industry</p>
            <h2>Managed payroll built for how your industry runs payroll</h2>
          </div>
          <div className="cards">
            <Link href="/services/managed-payroll/legal" className="card-link reveal">
              <span className="tag">Legal</span>
              <h3>Legal</h3>
              <p>Partner draws, multi-state attorneys, and billable staff handled correctly every cycle.</p>
            </Link>
            <Link href="/services/managed-payroll/healthcare" className="card-link reveal">
              <span className="tag">Healthcare</span>
              <h3>Healthcare</h3>
              <p>Clinical staff, shift differentials, and provider compensation on time and in compliance.</p>
            </Link>
            <Link href="/services/managed-payroll/finance" className="card-link reveal">
              <span className="tag">Finance</span>
              <h3>Finance &amp; Accounting</h3>
              <p>Bonus structures, equity events, and zero-error payroll for finance firms.</p>
            </Link>
            <Link href="/services/managed-payroll/technology" className="card-link reveal">
              <span className="tag">Technology</span>
              <h3>Technology</h3>
              <p>Remote teams, multi-state compliance, and rapid headcount growth managed cleanly.</p>
            </Link>
            <Link href="/services/managed-payroll/engineering" className="card-link reveal">
              <span className="tag">Engineering</span>
              <h3>Engineering</h3>
              <p>Certified payroll, prevailing wage, and project workforce handled without the headache.</p>
            </Link>
            <Link href="/services/managed-payroll/trades" className="card-link reveal">
              <span className="tag">Trades</span>
              <h3>Skilled Trades</h3>
              <p>Union CBA compliance, certified payroll, and multi-site workforce managed end to end.</p>
            </Link>
            <Link href="/services/managed-payroll/executive" className="card-link reveal">
              <span className="tag">Executive</span>
              <h3>Executive</h3>
              <p>Deferred compensation, executive benefits, and restricted-access payroll done right.</p>
            </Link>
            <Link href="/services/managed-payroll/trucking" className="card-link reveal">
              <span className="tag">Trucking</span>
              <h3>Trucking &amp; Transportation</h3>
              <p>W-2 vs. 1099 driver classification, per diem compliance, and multi-state DOT payroll handled.</p>
            </Link>
            <Link href="/services/managed-payroll/veterinary" className="card-link reveal">
              <span className="tag">Veterinary</span>
              <h3>Veterinary Practices</h3>
              <p>Production-based associate pay, relief vet classification, and mixed staff payroll managed.</p>
            </Link>
            <Link href="/services/managed-payroll/auto-dealership" className="card-link reveal">
              <span className="tag">Auto</span>
              <h3>Auto Dealerships</h3>
              <p>Commission draws, clawbacks, flat-rate technician FLSA, and demo vehicle tax reporting handled.</p>
            </Link>
            <Link href="/services/managed-payroll/cannabis" className="card-link reveal">
              <span className="tag">Cannabis</span>
              <h3>Cannabis &amp; Dispensaries</h3>
              <p>280E compliance, banking-adjacent payroll complexity, and state licensing employment rules handled.</p>
            </Link>
            <Link href="/services/managed-payroll/childcare" className="card-link reveal">
              <span className="tag">Childcare</span>
              <h3>Childcare &amp; Daycares</h3>
              <p>High-turnover staff processing, substitute classification, and CCAP subsidy compliance managed.</p>
            </Link>
            <Link href="/services/managed-payroll/home-health" className="card-link reveal">
              <span className="tag">Home Health</span>
              <h3>Home Health Agencies</h3>
              <p>FLSA 2015 caregiver rules, live-in aide overtime, and Medicaid wage compliance handled.</p>
            </Link>
            <Link href="/services/managed-payroll/church" className="card-link reveal">
              <span className="tag">Faith-Based</span>
              <h3>Churches &amp; Faith-Based Orgs</h3>
              <p>Minister housing allowance, dual-status clergy, and SECA elections managed correctly.</p>
            </Link>
            <Link href="/services/managed-payroll/marketing-agency" className="card-link reveal">
              <span className="tag">Agency</span>
              <h3>Marketing &amp; Creative Agencies</h3>
              <p>Remote multi-state teams, W-2 and contractor mix, and AE commission payroll handled.</p>
            </Link>
            <Link href="/services/managed-payroll/fitness" className="card-link reveal">
              <span className="tag">Fitness</span>
              <h3>Fitness Studios &amp; Gyms</h3>
              <p>Personal trainer classification, group instructor pay, and membership commission overtime managed.</p>
            </Link>
            <Link href="/services/managed-payroll/franchise" className="card-link reveal">
              <span className="tag">Franchise</span>
              <h3>Franchise Businesses</h3>
              <p>Multi-location payroll, joint-employer documentation, and new location setup as you scale.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPETITOR COMPARISONS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">BEG vs. the Competition</p>
            <h2>Considering ADP, Gusto, Paychex, or Rippling? Read this first.</h2>
            <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
              Every major payroll platform charges differently and leaves a different share of the work on your desk. See exactly how BEG compares before you decide.
            </p>
          </div>
          <div className="cards reveal" style={{ marginTop: '2.5rem' }}>
            <Link href="/services/managed-payroll/alternatives-to-adp" className="card-link">
              <span className="tag">ADP</span>
              <h3>BEG vs. ADP</h3>
              <p>ADP TotalSource runs $150-$200+ PEPM with co-employment. BEG is $25-$45 PEPM, no PEO, no co-employer.</p>
            </Link>
            <Link href="/services/managed-payroll/alternatives-to-gusto" className="card-link">
              <span className="tag">Gusto</span>
              <h3>BEG vs. Gusto</h3>
              <p>Gusto is software you manage. BEG manages payroll for you -- at a comparable or lower effective PEPM.</p>
            </Link>
            <Link href="/services/managed-payroll/alternatives-to-paychex" className="card-link">
              <span className="tag">Paychex</span>
              <h3>BEG vs. Paychex</h3>
              <p>Paychex stacks per-run fees and filing surcharges. BEG is one flat rate, no add-ons, all-inclusive.</p>
            </Link>
            <Link href="/services/managed-payroll/alternatives-to-deel" className="card-link">
              <span className="tag">Deel</span>
              <h3>BEG vs. Deel</h3>
              <p>Deel is built for global teams. If your workforce is US-based, BEG delivers more for less with no global overhead.</p>
            </Link>
            <Link href="/services/managed-payroll/alternatives-to-rippling" className="card-link">
              <span className="tag">Rippling</span>
              <h3>BEG vs. Rippling</h3>
              <p>Rippling automates payroll software. BEG eliminates payroll work entirely -- no login, no approval, no exceptions to manage.</p>
            </Link>
            <Link href="/services/managed-payroll/alternatives-to-trinet" className="card-link">
              <span className="tag">TriNet</span>
              <h3>BEG vs. TriNet</h3>
              <p>TriNet co-employs your staff at $125-$200 PEPM. BEG manages payroll at $25-$45 PEPM with no PEO structure.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about managed payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Is this payroll software or a managed service?</h3>
              <p>A fully managed service. BEG runs every pay cycle, every tax filing, and every year-end form for you. There is no software login for your team to manage. You approve payroll and BEG handles everything else.</p>
            </div>
            <div className="faq-item">
              <h3>Do I have to switch payroll platforms?</h3>
              <p>No. BEG can work in your existing payroll system, including ADP, Paychex, QuickBooks Payroll, and others, or we can run payroll in our iSolved account if you prefer. Most clients do not migrate anything. We configure around what you already have.</p>
            </div>
            <div className="faq-item">
              <h3>How long does onboarding take?</h3>
              <p>Most clients are running cleanly within 3-5 business days. BEG handles data migration, system configuration, and a test cycle before processing your first live payroll. The 3-5 day window applies to clients moving to iSolved. If we work in your existing system, setup is often faster.</p>
            </div>
            <div className="faq-item">
              <h3>What does the $25-$45 PEPM include?</h3>
              <p>Everything: payroll processing, direct deposit, tax withholding and remittance, quarterly and annual filings, W-2s, new hire reporting, garnishment processing, year-end close, and employee support for paycheck questions. No per-run charges, no filing fees, no module add-ons.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if there is an error on a pay run?</h3>
              <p>You call your BEG contact directly. The person who runs your payroll fixes it. Not a support queue, not a 1-800 number, not a first-level rep who has to escalate. BEG is accountable for payroll accuracy and we correct errors on our end.</p>
            </div>
            <div className="faq-item">
              <h3>Do you handle multi-state payroll?</h3>
              <p>Yes. BEG manages payroll across all 50 states as part of the standard service. That includes separate state tax registrations, state unemployment insurance filings, local tax handling, and compliance updates when states change rates or reporting requirements. If you add a new state, your BEG contact handles the registration and configuration at no additional charge.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle garnishments and wage levies?</h3>
              <p>Garnishments, including child support orders, student loan levies, tax levies, and court orders, are fully managed by BEG. We calculate correct withholding amounts per federal and state limits, deduct them from the applicable paychecks, remit payments to the correct agencies, and maintain records for auditing. New garnishment orders are processed as they arrive.</p>
            </div>
            <div className="faq-item">
              <h3>What does BEG do for W-2s and year-end?</h3>
              <p>BEG manages the full year-end process. That includes reconciling payroll records against tax deposits, preparing and electronically filing W-2s with the Social Security Administration and applicable state agencies, and delivering W-2s to employees by the IRS deadline. If corrections are needed afterward, BEG handles W-2c filings as well.</p>
            </div>
            <div className="faq-item">
              <h3>How is my payroll data kept secure?</h3>
              <p>iSolved, BEG's preferred platform, runs on SOC 2 Type II certified infrastructure with multi-tenant architecture and encryption at rest and in transit. Access to your payroll data is role-controlled and limited to authorized personnel. BEG never shares your payroll data outside of legally required remittances to tax authorities and direct deposit networks.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Why SaaS Companies Outsource Payroll Instead of Hiring In-House',
            excerpt: 'A full-time payroll manager costs $60K-$100K before benefits. Here is the math on what outsourcing actually costs and what you get.',
            href: '/blog/payroll/technology/saas-payroll-outsourcing',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Law Firm Payroll Outsourcing: What Managing Partners Need to Know',
            excerpt: 'Multi-state compliance, partner draws, and staff payroll on one system. Why law firms are moving away from in-house payroll.',
            href: '/blog/payroll/professional-services/law-firm-payroll-outsourcing',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Accounting Firm Payroll: Why Internal Teams Are Moving It Out',
            excerpt: 'Firms that manage client payroll often have the messiest internal payroll. A look at the common gaps and how outsourcing closes them.',
            href: '/blog/payroll/professional-services/accounting',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is this payroll software or a managed service?',
                acceptedAnswer: { '@type': 'Answer', text: 'A fully managed service. BEG runs every pay cycle, every tax filing, and every year-end form. There is no software login for your team to manage.' },
              },
              {
                '@type': 'Question',
                name: 'Do I have to switch payroll platforms?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. BEG can work in your existing payroll system or in our iSolved account. Most clients do not need to migrate anything.' },
              },
              {
                '@type': 'Question',
                name: 'How long does onboarding take?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most clients are running cleanly within 3-5 business days. BEG handles data migration, configuration, and a test cycle before your first live payroll.' },
              },
              {
                '@type': 'Question',
                name: 'What does the $25-$45 PEPM include?',
                acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, direct deposit, tax withholding and remittance, quarterly and annual filings, W-2s, new hire reporting, garnishment processing, year-end close, and employee support. No per-run charges or add-ons.' },
              },
              {
                '@type': 'Question',
                name: 'What happens if there is an error on a pay run?',
                acceptedAnswer: { '@type': 'Answer', text: 'You call your BEG contact directly. The person who runs your payroll fixes it. BEG is accountable for payroll accuracy.' },
              },
              {
                '@type': 'Question',
                name: 'Do you handle multi-state payroll?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages payroll across all 50 states including state tax registrations, SUTA filings, local tax handling, and compliance updates. Adding a new state is handled by your BEG contact at no additional charge.' },
              },
              {
                '@type': 'Question',
                name: 'How do you handle garnishments and wage levies?',
                acceptedAnswer: { '@type': 'Answer', text: 'Garnishments including child support, student loan levies, tax levies, and court orders are fully managed by BEG. We calculate withholding, remit to agencies, and handle new orders as they arrive.' },
              },
              {
                '@type': 'Question',
                name: 'What does BEG do for W-2s and year-end?',
                acceptedAnswer: { '@type': 'Answer', text: 'BEG manages the full year-end process: reconciling records, preparing and filing W-2s with the SSA and state agencies, and delivering W-2s to employees by the IRS deadline. W-2c corrections are also handled by BEG.' },
              },
              {
                '@type': 'Question',
                name: 'How is my payroll data kept secure?',
                acceptedAnswer: { '@type': 'Answer', text: 'iSolved runs on SOC 2 Type II certified infrastructure with encryption at rest and in transit. Access is role-controlled. BEG never shares payroll data outside of legally required remittances.' },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Managed Payroll Services',
            description: 'Fully managed payroll at $25-$45 per employee per month, all-inclusive. Taxes, filings, W-2s, garnishments, and compliance handled. All 50 states. 3-5 day onboarding.',
            url: 'https://www.beghr.com/services/managed-payroll',
            provider: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              url: 'https://www.beghr.com',
            },
            areaServed: 'United States',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
            },
          }),
        }}
      />


      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Think you are overpaying for payroll? Find out in 30 seconds.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Most providers hide the real cost behind per-run, year-end, and add-on fees. Enter your numbers to see your true cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
