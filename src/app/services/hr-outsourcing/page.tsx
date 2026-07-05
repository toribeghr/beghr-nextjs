import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HR Outsourcing | Instant Estimate, Powered by isolved | BEG',
  description: 'HR outsourcing powered by isolved: handbooks, compliance, leave, and a dedicated HR pro for a fraction of an in-house hire. Get your instant estimate.',
  alternates: {
    canonical: 'https://www.beghr.com/services/hr-outsourcing',
  },
  openGraph: {
    title: 'HR Outsourcing | Instant Estimate, Powered by isolved | BEG',
    description: 'HR outsourcing powered by isolved: handbooks, compliance, leave, and a dedicated HR pro for a fraction of an in-house hire. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HR Outsourcing | Instant Estimate, Powered by isolved | BEG', description: 'HR outsourcing powered by isolved: handbooks, compliance, leave, and a dedicated HR pro for a fraction of an in-house hire. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing');

const FAQS: [string, string][] = [
  [
    'What is HR outsourcing?',
    'HR outsourcing means certified HR professionals handle your compliance, handbooks, policies, leave administration, and employee questions for a flat monthly cost, instead of you hiring an internal HR team.',
  ],
  [
    'Is this a PEO?',
    'No. A PEO becomes the employer of record for your staff through co-employment. BEG HR outsourcing supports your business while you stay the employer and keep every decision.',
  ],
  [
    'What does HR outsourcing cost?',
    'A fraction of an in-house HR hire. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What is included?',
    'Depending on your plan: live HR pro access, a custom employee handbook, labor law posters, new hire packets, salary benchmarking, leave guidance, and a dedicated HR Business Partner with proactive compliance alerts.',
  ],
  [
    'Do we lose control of HR decisions?',
    'No. You make every hiring, firing, and policy decision. Your HR professionals advise, build the documents, monitor the law, and coach your managers so those decisions are safe ones.',
  ],
  [
    'Does this replace the HR person we already have?',
    'Usually it backs them up. A stretched HR manager offloads handbooks, benchmarking, and leave administration, and gains a certified team to call before making a risky judgment call.',
  ],
];

export default function HrOutsourcingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Powered by isolved"
        title="Your business has HR problems. It does not need an HR department."
        description="An in-house HR manager costs $60,000-$100,000 per year before they write a single policy. BEG HR outsourcing gives you certified HR professionals, a custom handbook, proactive compliance alerts, and a dedicated HR partner for a fraction of that, in all 50 states."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: '3 Plans', label: 'From answers on demand to a dedicated HR partner' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What HR Actually Costs You</p>
              <h2>HR work does not show up on a budget line until it goes wrong.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'What an in-house HR manager costs all-in',
                  sub: 'Salary, benefits, and overhead for one person who still has to call an employment lawyer when things get serious. Companies under 500 employees rarely get full value from that headcount.',
                },
                {
                  stat: '16 hrs/mo',
                  label: 'Spent tracking law changes and rewriting policies',
                  sub: 'One isolved HR Services client measured 16 hours per month just researching new employment laws and revising policies before outsourcing it. That is two working days, every month.',
                },
                {
                  stat: '76%',
                  label: 'Of HR decision-makers say outsourcing tasks would help',
                  sub: 'Per isolved research, 76% of HR decision-makers say they could benefit from outsourcing HR tasks in the next year, and 54% already plan to. The market has done this math.',
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
              Sources:{' '}
              <a href="https://www.bls.gov/oes/current/oes131071.htm" target="_blank" rel="noopener noreferrer">BLS OES, human resources specialists and managers</a>
              {' '}and{' '}
              <a href="https://www.isolvedhcm.com/hr-payroll/hr-services" target="_blank" rel="noopener noreferrer sponsored">isolved HR Services research and client results</a>.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From HR exposure to HR handled in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'Get your instant estimate',
                  body: 'Answer six questions about your team and what you want handled. Your monthly estimate appears on screen and lands in your inbox. No demo gate, no sales call required to see a number.',
                },
                {
                  num: '02',
                  title: 'Scope it on a 15-minute call',
                  body: 'We review your answers, confirm the right plan, and turn your estimate into exact pricing. You will know precisely what is covered before you commit to anything.',
                },
                {
                  num: '03',
                  title: 'Your HR pros take over',
                  body: 'Handbook built, posters shipped, compliance monitored, questions answered by certified HR professionals. On the top plan, a dedicated HR Business Partner runs monthly check-ins and strategy.',
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

        {/* THREE PLANS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Three Plans</p>
              <h2>Pick how much HR you want to stop doing.</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Every plan includes everything below it. The estimate form shows your monthly range for all three; exact pricing is confirmed on your call.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Essential',
                  tag: 'Answers on demand',
                  items: [
                    'Live phone and email access to HR professionals, 8AM-8PM ET weekdays',
                    'Handbook builder and policy library',
                    'Federal and state employment law library',
                    'Minimum wage map, all 50 states',
                    'Job description library and cost calculators',
                    'FMLA and state leave guidelines',
                    'Hiring, discipline, and termination checklists',
                  ],
                },
                {
                  heading: 'Expert',
                  tag: 'Done-for-you compliance',
                  items: [
                    'Everything in Essential',
                    'Custom employee handbook, built and updated for you',
                    'Labor law posters with updates',
                    'State new hire packets',
                    'HR Gap Review of your I-9s, handbook, and job descriptions',
                    'Custom job descriptions, FLSA and ADA compliant',
                    'Salary benchmark reports for up to 20 positions per year',
                    'In-depth guidance through every leave of absence',
                  ],
                },
                {
                  heading: 'Elite',
                  tag: 'Your dedicated HR partner',
                  items: [
                    'Everything in Expert',
                    'Dedicated HR Business Partner who knows your business',
                    'Full HR assessment with written recommendations',
                    'Monthly check-ins and bi-annual strategic reviews',
                    'Proactive alerts when law changes affect you',
                    'Performance coaching for up to 3 managers',
                    '2 HR projects per year, your pick',
                  ],
                },
              ].map(({ heading, tag, items }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.15rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#9a6b1f', fontWeight: 600, margin: '0 0 1rem', paddingBottom: '0.6rem', borderBottom: '2px solid #ECAC60' }}>{tag}</p>
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
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
          </div>
        </section>

        {/* THREE BONUSES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Makes This Different</p>
              <h2>Three things most HR outsourcing firms cannot offer</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  badge: 'Bonus 01',
                  title: 'Not a PEO. Your company stays yours.',
                  objection: 'Common objection: "I looked at HR outsourcing and they wanted to become my employer of record."',
                  body: 'PEOs use co-employment: they become the legal employer of your staff, control the benefits plans, and make leaving painful. BEG HR outsourcing is support, not a takeover. You stay the employer, keep your benefits, and keep every decision. You get the expertise without handing over your company structure.',
                },
                {
                  badge: 'Bonus 02',
                  title: 'An instant estimate. No demo gate.',
                  objection: 'Common objection: "Every HR outsourcing site makes me book a sales call just to hear a price range."',
                  body: 'The entire category hides pricing behind discovery calls. BEG shows you a real monthly estimate on screen in about 90 seconds, then confirms exact pricing on one 15-minute call. You decide whether the numbers are worth a conversation, not the other way around.',
                },
                {
                  badge: 'Bonus 03',
                  title: 'Powered by isolved. Big-company HR muscle, small-company bill.',
                  objection: 'Common objection: "A small HR consultancy is just one person with a template folder."',
                  body: 'Your HR support runs on isolved, the platform behind thousands of American employers, with certified, tenured HR professionals and a full talent acquisition and compliance stack behind them. It is the depth of an enterprise HR department, sized and priced for a company your size.',
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
              <h2>HR outsourcing vs. hiring in-house vs. a PEO vs. doing it yourself</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In-House HR Hire</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>DIY</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'You do', 'You do', 'Co-employment: the PEO does', 'You do'],
                    ['Cost shape', 'Flat monthly, instant estimate', '$60K-$100K per year all-in', 'Percent of payroll or high PEPM, quote-gated', 'Your time plus penalties'],
                    ['Handbook and policies', 'Built and updated for you', 'Depends on the hire', 'Included, on their templates', 'Yours to write and maintain'],
                    ['Law-change monitoring', 'Proactive alerts', 'One person watching', 'Included', 'Nobody watching'],
                    ['Benefits plans', 'Yours stay yours', 'Yours', 'Replaced by PEO master plans', 'Yours'],
                    ['Depth of bench', 'Certified HR team', 'One person, turnover risk', 'Large but shared', 'None'],
                    ['Leaving', 'Stop the service', 'Severance and rehire', 'Painful unwind of co-employment', 'Nothing to leave'],
                  ].map(([factor, beg, inhouse, peo, diy], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{inhouse}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>HR outsourcing handles the people work. BEG handles the rest too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll eating your week?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  BEG&apos;s core service is <Link href="/services/managed-payroll">fully managed payroll</Link>: every cycle, filing, and W-2 handled at $25-$45 per employee per month, in your existing system.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need a role filled, not advice?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  HR outsourcing supports the hiring your team does. When you want the role filled for you, flat fee per placement, that is <Link href="/services/job-placement">Job Placement</Link>: talent acquisition as an outcome, not a project.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the platform itself?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  If your team runs HR internally and needs better software, <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, talent acquisition, and benefits on one platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>HR outsourcing, answered plainly</h2>
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
