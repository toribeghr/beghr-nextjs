import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll Services | $25-$35 PEPM | Outsource Payroll | BEG',
  description: 'Fully managed payroll at $25-$35 per employee per month. All-inclusive: taxes, filings, and compliance. Works in your existing system. No migration. All 50 states.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll',
  },
};

const CALENDLY = getCalendlyLink('managed-payroll');

export default function ManagedPayrollPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.svg"
      eyebrow="Managed Payroll"
      title="Your payroll should not take half your week or cost six figures to get right."
      description="A full-time payroll manager costs $60,000-$100,000 per year in salary and benefits alone. BEG runs your entire payroll operation at $25-$35 per employee per month, all-inclusive. Every cycle, every filing, every compliance update. Nothing for your team to touch."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25-$35', label: 'PEPM, all-inclusive' },
        { value: 'All 50', label: 'States covered' },
        { value: '100%', label: 'Managed for you' },
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

      {/* THREE BONUSES */}
      <section className="section section--soft">
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
                body: '$25-$35 PEPM covers everything: payroll processing, tax filings, W-2s, direct deposit, new hire reporting, and compliance updates. There is no base fee plus per-run charges plus filing fees. One number, every month. We tell you the exact rate on your discovery call before you commit to anything.',
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
                A payroll manager at $75,000 per year costs $6,250 per month before benefits, PTO, and overhead. BEG manages the same function at $25-$35 per employee per month. For a 50-person company, that is $1,250-$1,750 per month total. The difference goes back to your bottom line every single month.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Switching Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Q4 and year-end are the worst times to be mid-transition.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The cleanest time to move payroll is before Q3 ends or at the start of a new year. Waiting until Q4 means transitioning during W-2 season, year-end filings, and bonus cycles at the same time. Starting now means a clean cutover and a smooth close.
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
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              We will review your current payroll setup and give you an exact monthly cost before you commit to anything.
            </p>
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
              <h3>Is this payroll software or a managed service?</h3>
              <p>A fully managed service. We run every pay cycle, every tax filing, and every year-end form for you. No login to manage, no software to learn.</p>
            </div>
            <div className="faq-item">
              <h3>Do I have to switch payroll platforms?</h3>
              <p>No. BEG can work in your existing system or in our iSolved account. Most clients do not need to migrate anything.</p>
            </div>
            <div className="faq-item">
              <h3>How long does onboarding take?</h3>
              <p>Most clients are running cleanly within 2-4 weeks. We handle migration, configuration, and testing before processing your first managed cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What does the $25-$35 PEPM include?</h3>
              <p>Everything: payroll processing, direct deposit, tax filings, W-2s, new hire reporting, and ongoing compliance. No add-ons, no per-run charges.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if there is an error on a pay run?</h3>
              <p>You call your BEG contact directly. Not a support queue. Not a 1-800 number. The person who runs your payroll fixes it.</p>
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
              {
                '@type': 'Question',
                name: 'Is this payroll software or a managed service?',
                acceptedAnswer: { '@type': 'Answer', text: 'A fully managed service. BEG runs every pay cycle, every tax filing, and every year-end form for you.' },
              },
              {
                '@type': 'Question',
                name: 'Do I have to switch payroll platforms?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. BEG can work in your existing system or in our iSolved account. Most clients do not need to migrate anything.' },
              },
              {
                '@type': 'Question',
                name: 'What does the $25-$35 PEPM include?',
                acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, direct deposit, tax filings, W-2s, new hire reporting, and ongoing compliance. No add-ons.' },
              },
              {
                '@type': 'Question',
                name: 'What happens if there is an error on a pay run?',
                acceptedAnswer: { '@type': 'Answer', text: 'You call your BEG contact directly. Not a support queue. The person who runs your payroll fixes it.' },
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
            description: 'Fully managed payroll at $25-$35 per employee per month, all-inclusive. Taxes, filings, and compliance handled. All 50 states.',
            url: 'https://beghr.com/services/managed-payroll',
            provider: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              url: 'https://beghr.com',
            },
            areaServed: 'United States',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
            },
          }),
        }}
      />
    </ServicePage>
  );
}
