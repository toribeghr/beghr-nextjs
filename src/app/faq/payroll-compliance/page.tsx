import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll Compliance FAQ | Federal & State Rules Explained | BEG',
  description: 'Common payroll compliance questions: tax deadlines, W-2 rules, multi-state requirements, FLSA, and how managed payroll handles compliance.',
  alternates: {
    canonical: 'https://www.beghr.com/faq/payroll-compliance',
  },
  openGraph: {
    title: 'Payroll Compliance FAQ | Federal & State Rules Explained | BEG',
    description: 'Common payroll compliance questions: tax deadlines, W-2 rules, multi-state requirements, FLSA, and how managed payroll handles compliance.',
    url: 'https://www.beghr.com/faq/payroll-compliance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Compliance FAQ | Federal & State Rules Explained | BEG',
    description: 'Common payroll compliance questions: tax deadlines, W-2 rules, multi-state requirements, FLSA, and how managed payroll handles compliance.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What are the main federal payroll compliance requirements?',
    a: 'Federal payroll compliance covers four primary areas. First, tax withholding: employers must withhold federal income tax, Social Security (6.2% employee, 6.2% employer), and Medicare (1.45% employee, 1.45% employer) from each paycheck and remit them on the federal tax deposit schedule. Second, quarterly reporting: employers file Form 941 each quarter to report wages paid and taxes withheld. Third, annual returns: Form 940 reports FUTA (federal unemployment) liability each January, and W-2s must be distributed to employees and filed with the Social Security Administration by January 31. Fourth, new hire reporting: employers must report new hires to the state new hire registry within 20 days of the hire date. Failure to comply with any of these triggers IRS penalties that range from 2% to 15% of the underpayment amount.',
  },
  {
    q: 'What is the W-2 filing deadline?',
    a: 'Employers must meet two separate W-2 deadlines. The employee delivery deadline is January 31: W-2s must be in the hands of employees (or postmarked if mailed) by January 31 of the year following the tax year. The filing deadline with the Social Security Administration is also January 31 for electronic filers. If you have 10 or more W-2 forms, electronic filing is required starting with tax year 2023. Paper W-2 filers with fewer than 10 forms have until February 28. The IRS penalty for late W-2 delivery starts at $60 per form and increases to $630 per form for intentional disregard. Filing corrections on Form W-2c after the deadline does not eliminate the late-filing penalty on the original.',
  },
  {
    q: 'What are the 941 payroll tax deposit deadlines?',
    a: 'The 941 deposit schedule depends on your "lookback period": the total taxes you reported on Form 941 during the 12-month period ending June 30 of the prior year. Monthly depositors must deposit payroll taxes by the 15th of the following month. Semiweekly depositors must deposit taxes collected on Wednesday through Friday by the following Wednesday, and taxes collected on Saturday through Tuesday by the following Friday. Large employers who accumulate $100,000 or more in tax liability on any day during a deposit period must deposit by the next business day regardless of their normal schedule. The penalty for late deposits ranges from 2% (1-5 days late) to 15% (more than 10 days late or after receiving an IRS notice).',
  },
  {
    q: 'How does multi-state payroll compliance work?',
    a: `When an employer has employees working in multiple states, each state where work is performed typically has its own income tax withholding, unemployment insurance, and new hire reporting requirements. The employer must register with each state\'s taxing authority, calculate and remit state income tax withholding based on that state\'s rules and rates, pay SUTA to each state where employees work (each state has its own rate and wage base), and file new hire reports with each state\'s registry. Reciprocity agreements between certain states can simplify withholding for employees who live in one state but work in another, though these vary significantly and not all states participate. Multi-state payroll is one of the highest-complexity areas in payroll compliance, and is a primary reason employers move to a managed service like BEG that handles all 50 states as part of the standard scope.`,
  },
  {
    q: 'What is the FLSA and how does it affect payroll?',
    a: 'The Fair Labor Standards Act (FLSA) sets federal minimum wage and overtime rules that directly affect payroll calculations. The key provisions: the federal minimum wage is $7.25 per hour, though many states and localities have higher minimums that supersede the federal floor. Overtime must be paid at 1.5 times the regular rate of pay for all hours worked over 40 in a workweek for non-exempt employees. The FLSA defines which employees are exempt from overtime based on salary level and duties tests. As of 2024, exempt employees must earn at least $684 per week ($35,568 annually) to qualify for the executive, administrative, or professional exemptions. Misclassifying non-exempt employees as exempt is one of the most common and costly payroll compliance violations, often resulting in back pay liability, liquidated damages, and attorney fees.',
  },
  {
    q: 'What is a prevailing wage and who does it apply to?',
    a: `Prevailing wage laws require employers on government-funded construction, service, and other contracts to pay workers at least the locally determined prevailing wage rate for their job classification. At the federal level, the Davis-Bacon Act covers construction contracts over $2,000 funded by the federal government. The Service Contract Act covers federal service contracts over $2,500. Most states have their own prevailing wage laws that apply to state-funded projects, and thresholds vary by state. Prevailing wage payroll requires certified payroll reporting, detailed weekly reports submitted to the contracting agency showing each worker\'s classification, hours, and wages. Processing certified payroll without specialized expertise is one of the most error-prone payroll scenarios, and non-compliance can result in contract debarment.`,
  },
  {
    q: 'What happens if you miss a payroll tax deadline?',
    a: 'Missing a federal payroll tax deposit deadline triggers an IRS Failure to Deposit (FTD) penalty. The penalty scales with how late the deposit is: 2% for deposits 1-5 days late, 5% for 6-15 days late, 10% for more than 15 days late or within 10 days of receiving the first IRS notice, and 15% if the amount is not deposited within 10 days of receiving a delinquency notice. These penalties apply to the total amount that should have been deposited, not just the missing portion. State penalties for late deposits follow similar structures but vary by state. In addition to the penalty, the IRS charges interest on underpayments at the federal short-term rate plus 3 percentage points, compounded daily.',
  },
  {
    q: 'What is new hire reporting and when is it required?',
    a: `Federal law requires every employer to report newly hired employees to their state\'s new hire registry within 20 days of the hire date, or within 20 days of the first paycheck if the employer uses a pay-period reporting method. The information required includes the employee\'s name, address, and Social Security number, and the employer\'s name, address, and federal EIN. Some states have shorter deadlines. California, for example, requires reporting within 20 days, while other states require 7 or fewer days for electronic submissions. New hire data is used by state agencies to locate parents who owe child support, recover overpayments of unemployment insurance and workers\' compensation, and detect fraud. Failure to report new hires can result in state penalties ranging from $25 to $500 per failure.`,
  },
  {
    q: 'How does a managed payroll service handle compliance?',
    a: `BEG\'s managed payroll service handles all of the compliance requirements described above as part of the standard service at $25-$45 PEPM. That includes: calculating and remitting all federal and state payroll tax deposits on the correct schedule, filing quarterly 941 and state unemployment returns, filing annual W-2s with employees and the SSA by the January 31 deadline, submitting new hire reports in all applicable states within the required window, calculating overtime correctly per FLSA rules, processing certified payroll reports for government contract work when applicable, and staying current on changes to state rates, thresholds, and reporting requirements throughout the year. Compliance updates are applied automatically. You do not need to monitor state notices or IRS guidance. Your BEG contact handles it.`,
  },
  {
    q: 'What payroll compliance changes should employers watch in 2026?',
    a: 'Several compliance areas are worth monitoring in 2026. The Social Security wage base adjusts annually based on changes in the national average wage index. Confirm the new limit each January as it affects tax deposit calculations for higher-earning employees. Many states adjust their minimum wage rates on January 1 and in some cases July 1, and state SUTA rate notices typically arrive in late November or December for the following year. The FLSA exempt salary threshold was updated in 2024 to $684 per week, with a potential further increase under rulemaking that may take effect in 2025 or 2026. Employers with salaried employees near the threshold should watch for updates. ACA reporting requirements remain in effect for applicable large employers (50+ FTEs), with Form 1095-C due to employees by March 1 and electronic filing with the IRS due by March 31. State-specific paid leave law expansions continue, several states have added or expanded paid family and medical leave programs with payroll tax components that affect withholding calculations.',
  },
];

export default function PayrollComplianceFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.beghr.com/faq' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Compliance FAQ', item: 'https://www.beghr.com/faq/payroll-compliance' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h1>Payroll Compliance FAQ</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              Federal and state payroll compliance explained: tax deadlines, W-2 rules, 941 deposit schedules, FLSA requirements, and how a managed payroll service handles all of it for you.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/faq" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All FAQ topics</Link>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SUMMARY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Key Deadlines</p>
            <h2>Payroll compliance deadlines at a glance</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ECAC60' }}>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Requirement</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Deadline</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Penalty for Missing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['W-2 to employees', 'January 31', '$60-$630 per form'],
                  ['W-2 filing with SSA', 'January 31 (electronic)', 'Same as above'],
                  ['Form 940 (FUTA)', 'January 31', 'FTD penalty + interest'],
                  ['Quarterly Form 941', '30 days after quarter end', 'Failure-to-file penalty'],
                  ['Federal tax deposits (monthly)', '15th of following month', '2%-15% FTD penalty'],
                  ['New hire reporting', 'Within 20 days of hire', '$25-$500 per failure'],
                  ['ACA 1095-C to employees', 'March 1', 'Up to $310 per form'],
                  ['ACA electronic filing', 'March 31', 'Up to $310 per form'],
                ].map(([req, deadline, penalty], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '11px 14px', fontWeight: 600, color: '#333333' }}>{req}</td>
                    <td style={{ padding: '11px 14px', color: '#444444' }}>{deadline}</td>
                    <td style={{ padding: '11px 14px', color: '#c0392b', fontWeight: 500 }}>{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Detailed Answers</p>
            <h2>Payroll compliance questions answered in full</h2>
          </div>
          <div className="faq" style={{ marginTop: '2.5rem' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item reveal">
                <h2>{q}</h2>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Resources</p>
            <h2>More answers and tools</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }} className="reveal">
            {[
              { label: 'Managed Payroll FAQ', href: '/faq/managed-payroll' },
              { label: 'Payroll Outsourcing FAQ', href: '/faq/payroll-outsourcing' },
              { label: 'Switching Payroll Providers FAQ', href: '/faq/switching-payroll-providers' },
              { label: 'Year-End Payroll Checklist', href: '/resources/guides/year-end-payroll-checklist' },
              { label: 'Managed Payroll Services', href: '/services/managed-payroll' },
              { label: 'Payroll Resources Hub', href: '/resources' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '0.9rem 1.1rem', fontWeight: '600', fontSize: '0.9rem', color: '#000000' }}>
                {label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Let BEG Handle Compliance</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Every deadline above is handled by BEG at $25-$45 PEPM, all-inclusive.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            W-2s, 941 filings, tax deposits, new hire reporting, and ACA compliance. All managed by your dedicated BEG contact. Book a free call to see what it would cost for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
          <p style={{ color: '#777', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Or visit <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll services</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
