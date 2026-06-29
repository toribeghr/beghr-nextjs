import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll Cost Calculators | Free Tools | BEG',
  description: 'Free payroll cost calculators: compare managed payroll vs. in-house, estimate PEPM cost, and calculate total payroll burden.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/calculators',
  },
  openGraph: {
    title: 'Payroll Cost Calculators | Free Tools | BEG',
    description: 'Free payroll cost calculators: compare managed payroll vs. in-house, estimate PEPM cost, and calculate total payroll burden.',
    url: 'https://www.beghr.com/resources/calculators',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Cost Calculators | Free Tools | BEG',
    description: 'Free payroll cost calculators: compare managed payroll vs. in-house, estimate PEPM cost, and calculate total payroll burden.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function CalculatorsPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Calculators', item: 'https://www.beghr.com/resources/calculators' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tools</p>
            <h1>Payroll cost calculators and tools, free from BEG</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              See the real cost of running payroll in-house versus outsourcing it. Enter your numbers and get an instant estimate. No email required.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>

            {/* Calculator 1 */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal">
              <div>
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Cost Calculator</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.75rem' }}>Managed Payroll Cost Calculator</h2>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.65', marginBottom: '1rem' }}>
                  Enter your employee count, your current payroll cost (salary, software, and admin time), and see the comparison instantly. BEG managed payroll runs at $25-$45 PEPM all-inclusive.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', fontSize: '0.88rem', color: '#444444' }}>
                <strong style={{ display: 'block', marginBottom: '0.6rem', color: '#000000' }}>What this calculator shows:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    'Your estimated monthly cost at $25 PEPM and $45 PEPM',
                    'Your current in-house payroll cost per employee',
                    'Monthly and annual savings from switching to BEG',
                    'Break-even employee count for different scenarios',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.5' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/services/managed-payroll/cost-calculator" className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.95rem', padding: '0.65rem 1.5rem' }}>
                Open Cost Calculator
              </Link>
            </div>

            {/* Calculator 2 */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal">
              <div>
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Interactive Tool</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.75rem' }}>Payroll Complexity Scorer</h2>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.65', marginBottom: '1rem' }}>
                  Answer 10 questions about your payroll setup. Get a complexity score from 0 to 10 and a clear recommendation on whether managed payroll is the right fit for your business.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', fontSize: '0.88rem', color: '#444444' }}>
                <strong style={{ display: 'block', marginBottom: '0.6rem', color: '#000000' }}>10 questions covering:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    'Employee count and headcount growth',
                    'Multi-state payroll exposure',
                    'Pay complexity (commissions, tips, shift differential)',
                    'Compliance risk and audit exposure',
                    'Hours your team spends on payroll per week',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.5' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/resources/complexity-scorer" className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.95rem', padding: '0.65rem 1.5rem' }}>
                Score My Payroll
              </Link>
            </div>

            {/* Calculator 3 */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal">
              <div>
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Calculator</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.75rem' }}>Final Paycheck Calculator by State</h2>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.65', marginBottom: '1rem' }}>
                  Pick a state, choose fired or quit, and get the exact deadline to issue the final check, plus whether unused PTO has to be paid out. All 50 states and DC, reviewed for 2026.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', fontSize: '0.88rem', color: '#444444' }}>
                <strong style={{ display: 'block', marginBottom: '0.6rem', color: '#000000' }}>What this tool shows:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    'The exact final-pay deadline by state and termination type',
                    'Whether accrued PTO must be paid out',
                    'An estimated PTO payout and total final check',
                    'The penalty risk if you miss the deadline',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.5' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/resources/final-paycheck-calculator" className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.95rem', padding: '0.65rem 1.5rem' }}>
                Find the Deadline
              </Link>
            </div>

            {/* Calculator 4 */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal">
              <div>
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Calculator</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.75rem' }}>FLSA Overtime Pay Calculator</h2>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.65', marginBottom: '1rem' }}>
                  Overtime is not just 1.5x the hourly rate. Fold in nondiscretionary bonuses and blended pay rates to get the regular rate right, and see exactly where employers underpay.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', fontSize: '0.88rem', color: '#444444' }}>
                <strong style={{ display: 'block', marginBottom: '0.6rem', color: '#000000' }}>What this tool shows:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    'The correct FLSA regular rate of pay',
                    'Overtime premium and total gross owed for the week',
                    'Bonus and blended (two-rate) overtime',
                    'Daily-overtime flags for states like California',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.5' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/resources/overtime-pay-calculator" className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.95rem', padding: '0.65rem 1.5rem' }}>
                Calculate Overtime
              </Link>
            </div>

            {/* Calculator 5 */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal">
              <div>
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Calculator</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.75rem' }}>True Cost of an Employee Calculator</h2>
                <p style={{ fontSize: '0.93rem', color: '#555555', lineHeight: '1.65', marginBottom: '1rem' }}>
                  Salary is only the start. Add employer taxes, workers comp, benefits, and overhead to see what a hire actually costs per year and per hour, with every assumption adjustable.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.25rem', fontSize: '0.88rem', color: '#444444' }}>
                <strong style={{ display: 'block', marginBottom: '0.6rem', color: '#000000' }}>What this tool shows:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    'Fully loaded annual and true hourly cost',
                    'Employer FICA, FUTA, and SUTA taxes',
                    'Workers comp, benefits, retirement, and overhead',
                    'Your burden multiplier over base pay',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.5' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/resources/true-cost-of-an-employee-calculator" className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.95rem', padding: '0.65rem 1.5rem' }}>
                See the True Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why the Numbers Matter</p>
            <h2>Most employers undercount what payroll actually costs them</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }} className="reveal">
            {[
              {
                stat: '$60K–$100K',
                label: 'Annual cost of an in-house payroll manager',
                detail: 'Salary plus benefits, PTO, overhead, and employer taxes. That is the true cost of a dedicated payroll hire.',
              },
              {
                stat: '5+ hrs',
                label: 'Average time spent on payroll per cycle',
                detail: 'Data gathering, entry, review, corrections, and filing. Every pay period. That time has a cost whether you track it or not.',
              },
              {
                stat: '33%',
                label: 'Of small businesses pay IRS penalties for payroll errors',
                detail: 'One miscalculated deposit or missed deadline triggers penalties of 2% to 15% of the unpaid amount. Errors compound.',
              },
            ].map(({ stat, label, detail }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1, marginBottom: '0.5rem' }}>{stat}</div>
                <div style={{ fontWeight: '600', fontSize: '0.93rem', marginBottom: '0.4rem' }}>{label}</div>
                <div style={{ fontSize: '0.87rem', color: '#666666', lineHeight: '1.55' }}>{detail}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#555555', fontSize: '0.93rem', lineHeight: '1.7', marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> eliminates all three of these costs at $25-$45 PEPM, all-inclusive.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Get an Exact Quote</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Book a free 15-minute call and get a flat monthly cost for your team.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            After you run the calculator, book a call. BEG will confirm your exact PEPM rate, review your current setup, and answer any questions before you commit to anything.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
        </div>
      </section>
    </>
  );
}
