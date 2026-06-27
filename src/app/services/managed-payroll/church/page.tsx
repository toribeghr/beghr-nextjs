import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Churches & Faith-Based Organizations | Minister Housing Allowance | BEG',
  description: 'Church and faith-based organization payroll fully managed at $25–$45 PEPM. Minister housing allowance, dual-status clergy tax treatment, and SECA elections handled. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/church' },
};

const CALENDLY = getCalendlyLink('payroll-church');

export default function PayrollChurchPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/church.svg"
      imageAlt="Church and faith-based organization with fully managed payroll"
      eyebrow="Managed Payroll · Churches & Faith-Based Organizations"
      title="Managed Payroll for Churches and Faith-Based Organizations"
      description="Minister housing allowance, dual-status clergy, and SECA elections — done right. Church and faith-based organization payroll has no equivalent in any other industry: ministers operate as employees for income tax purposes but self-employed for Social Security, housing allowances must be pre-designated before the year they are paid, and FICA exemption elections for religious organizations carry their own requirements. We manage all of it at $25–$45 per employee per month."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including multi-campus organizations' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Church Payroll Is Different</p>
            <h2>Three clergy and religious organization payroll rules that have no parallel elsewhere.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Dual-status</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Ministers are employees for income tax but self-employed for Social Security — simultaneously</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>For federal income tax withholding purposes, a minister is generally an employee of the church and receives a W-2. But for Social Security and Medicare tax purposes, the same minister is treated as self-employed and pays SECA rather than FICA. This dual status is unlike any other employee category and requires specific W-2 setup, quarterly estimated tax guidance, and accurate housing allowance reporting.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Pre-designation</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>The minister housing allowance must be formally designated by the governing body before the year it is paid</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Under IRC Section 107, a minister may exclude a housing allowance from gross income — but only if it was officially designated by the church or organization in advance of the year it is paid. Retroactive designations are not valid. Churches that miss the pre-designation step lose the exclusion for that year, creating unexpected income tax liability for the minister.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>FICA election</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Qualified religious organizations may elect exemption from FICA for non-minister employees</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Churches and qualified religious organizations may file Form 8274 to elect exemption from employer FICA taxes for non-minister employees. Employees then pay SECA on their wages. The election has specific eligibility requirements and affects how payroll is processed and reported for every non-clergy staff member.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHO WE PAY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who We Manage Payroll For</p>
            <h2>Every role in your organization, handled with the right tax treatment</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Senior and associate pastors', body: 'Dual-status W-2 setup, housing allowance pre-designation process, SECA rather than FICA withholding, and W-2 Box 14 housing allowance reporting. Quarterly estimated tax guidance included.' },
              { title: 'Non-minister staff', body: 'Administrative staff, ministry directors, youth workers, and support staff — processed under standard or FICA-exempt payroll depending on your organization\'s election status.' },
              { title: 'Part-time and seasonal staff', body: 'Vacation Bible School staff, seasonal event workers, and part-time ministry employees processed correctly with appropriate tax treatment and new hire reporting.' },
              { title: 'Multi-campus and denominational structures', body: 'Multi-location churches, school ministries, and affiliated organizations managed under a unified payroll engagement with location-specific state registrations.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.5rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed church payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your ministerial staff, housing allowance designations, FICA election status, non-clergy roster, and any multi-campus structure. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure dual-status minister payroll, review your housing allowance designation process, set up FICA or SECA treatment for each employee category, and handle state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every pre-designation reminder before year-end, every state filing, and every year-end W-2 — fully managed by BEG. Your board approves the housing allowance, we process everything else.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#ffffff', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
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
            <h2>Three things most payroll vendors do not offer churches and faith-based organizations</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We have used the same simple payroll setup for years and do not want to disrupt it."',
                body: 'We do not require you to change platforms. BEG operates as your managed payroll team inside your current system. If you want to move to iSolved for a more capable platform that handles clergy payroll correctly out of the box, we can manage that transition — but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Our budget is tight and we cannot afford payroll services that nickel-and-dime us."',
                body: 'The $25–$45 PEPM rate covers everything: dual-status minister payroll, housing allowance tracking, FICA or SECA processing, state filings, year-end W-2s, and BEG support. No add-on fees, no per-run charges, no year-end surcharges. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands clergy payroll.',
                objection: 'Common objection: "We call our payroll company and they have never heard of a housing allowance."',
                body: 'Your BEG payroll specialist is your ongoing contact — not a call center that has to look up what a minister is. When your board designates a new housing allowance amount, when you add a campus, or when a minister asks why there is no FICA on their check — one message to your BEG contact gets it explained and handled.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A missed housing allowance pre-designation creates personal tax liability for your pastor.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>When a church fails to formally designate the housing allowance before the year starts, the entire housing allowance becomes taxable income for the minister for that year. On a $30,000 housing allowance, that is roughly $7,000 in unexpected federal and state income tax — plus self-employment tax — owed personally by your pastor. Managed payroll includes the pre-designation reminder process so this never happens.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to get church payroll right is before the new year begins.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Housing allowance pre-designations must be in place before January 1. Transitions take 30–60 days. Starting the scope review now means clean, compliant payroll from the first pay cycle of the new year — and a pastor who does not have a surprise tax bill come April.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your ministerial payroll, housing allowance setup, and FICA election status — and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from churches and faith-based organizations</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How do you handle the minister housing allowance?</h3>
              <p>We set up your W-2 to report the housing allowance correctly in Box 14, send your board the pre-designation resolution template before each year-end, and track the housing allowance throughout the year. We make sure the amount designated, the amount paid, and the amount excludable under IRS limits are all documented and reconciled at year-end.</p>
            </div>
            <div className="faq-item">
              <h3>Why does our pastor not have FICA withheld?</h3>
              <p>Ministers are treated as self-employed for Social Security and Medicare tax purposes, regardless of their employment status for income tax. This means the church does not withhold FICA and does not pay the employer FICA match for ministers. Instead, ministers pay SECA on their earnings. We configure W-2s correctly to reflect this and help ministers understand why their paycheck looks different from non-clergy staff.</p>
            </div>
            <div className="faq-item">
              <h3>Can the church elect to be exempt from FICA for all employees?</h3>
              <p>Qualified churches may file Form 8274 to elect exemption from employer FICA taxes. We review your eligibility, advise on the implications for your non-clergy employees, and process payroll accordingly if you have already made the election or choose to make it.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option if you want to upgrade, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: dual-status minister payroll, housing allowance tracking and documentation, FICA or SECA processing, state filings, year-end W-2s, and BEG support. No add-on fees, no per-run charges.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Looking for managed payroll for a different organization type?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How do you handle the minister housing allowance?', acceptedAnswer: { '@type': 'Answer', text: 'We set up W-2 Box 14 correctly, send pre-designation templates before year-end, and document the housing allowance throughout the year.' } }, { '@type': 'Question', name: 'Why does our pastor not have FICA withheld?', acceptedAnswer: { '@type': 'Answer', text: 'Ministers are self-employed for Social Security purposes regardless of employment status for income tax, and pay SECA rather than FICA.' } }, { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' }, { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' }, { '@type': 'ListItem', position: 3, name: 'Churches & Faith-Based Organizations', item: 'https://beghr.com/services/managed-payroll/church' }] }) }} />
    </ServicePage>
  );
}
