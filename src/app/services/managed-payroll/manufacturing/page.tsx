import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Manufacturing Payroll | Shift Pay, Overtime & Multi-Plant | BEG',
  description: 'Manufacturing payroll fully managed at $25-$45 PEPM. Shift differentials, blended-rate overtime, piece-rate, multi-state plants, and union reporting handled. Request a free scope review.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/manufacturing' },
  openGraph: {
    title: 'Manufacturing Payroll | Shift Pay, Overtime & Multi-Plant | BEG',
    description: 'Manufacturing payroll fully managed at $25-$45 PEPM. Shift differentials, blended-rate overtime, piece-rate, multi-state plants, and union reporting handled. Request a free scope review.',
    url: 'https://www.beghr.com/services/managed-payroll/manufacturing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Manufacturing Payroll | Shift Pay, Overtime & Multi-Plant | BEG', description: 'Manufacturing payroll fully managed at $25-$45 PEPM. Shift differentials, blended-rate overtime, piece-rate, multi-state plants, and union reporting handled. Request a free scope review.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-manufacturing');

export default function PayrollManufacturingPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/manufacturing.svg"
      imageAlt="Manufacturing company with fully managed payroll"
      eyebrow="Managed Payroll · Manufacturing"
      title="Manufacturing payroll lives or dies on the overtime math. We run it right."
      description="Shift differentials, blended-rate overtime, piece-rate work, production bonuses, multiple plants across state lines, and union locals make manufacturing payroll a specialty. We manage all of it at $25-$45 per employee per month -- fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'Blended rate', label: 'Overtime calculated correctly on shift and bonus pay' },
        { value: 'Union + open', label: 'Union and non-union plants handled' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house manufacturing payroll actually cost you?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$60K-$100K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of a payroll person who actually understands blended-rate overtime</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Payroll specialists who know how shift differentials and production bonuses fold into the FLSA regular rate are hard to hire and expensive to keep. Fully managed service at $25-$45 PEPM replaces that headcount.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Every shift</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Two and three shifts, each with its own differential and overtime exposure</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>When second and third shift carry premium pay, a missed regular-rate calculation on every overtime hour quietly underpays workers and builds back-wage liability the Department of Labor can reach back two to three years to collect.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Many states</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Plants in more than one state, each with its own withholding and unemployment rules</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A manufacturer with plants or remote sales and service staff in multiple states owes correct withholding, unemployment, and registration in each one. Manual spreadsheets break here.</div>
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
              { num: '01', title: 'Scope review', body: 'We map your plants, your shifts and differentials, your pay types, your states, and any union obligations, then map your current process. You get a fixed monthly cost -- no surprises.' },
              { num: '02', title: 'We configure your shifts, differentials, pay rates, and cost centers', body: 'We set up shift premiums, piece-rate and bonus handling, blended-rate overtime, multi-state withholding, and department cost centers, then run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30-60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every overtime calculation, every multi-state filing and remittance -- fully managed by BEG. Your team touches nothing.' },
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
            <h2>Manufacturing payroll complexity that software listicles do not cover</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Shift differentials and the FLSA regular rate</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a manufacturer pays a premium for second shift, third shift, or weekend work, that premium is part of the employee regular rate of pay under the Fair Labor Standards Act, and overtime has to be calculated on the higher blended rate, not the base hourly rate. The most common manufacturing payroll error is running overtime at 1.5 times the base wage while ignoring the shift differential, which underpays every overtime hour. The shortfall is small per check and enormous in aggregate, and the Department of Labor can reach back two to three years for back wages plus liquidated damages. BEG folds every shift differential into the regular rate and calculates overtime on the blended rate for each pay period, so the math is right on every check.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Production bonuses, attendance pay, and nondiscretionary incentives</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most production and attendance bonuses on a plant floor are nondiscretionary, which means they too must be added into the regular rate and the overtime recalculated for the weeks the bonus covers. A quarterly safety or output bonus has to be spread back across the hours worked in that period and the overtime premium trued up. Manufacturers routinely pay these bonuses as a flat add-on and never adjust overtime, which is a wage-and-hour exposure waiting to surface. BEG identifies which incentives are nondiscretionary, allocates them across the correct hours, and recomputes the overtime owed so the bonus does not create a liability.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Piece-rate pay and overtime on piece work</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plants that pay by the piece still owe overtime, and the regular rate for a piece-rate worker is total piece earnings divided by total hours worked in the week, with overtime then paid at one half that rate for hours over forty on top of the piece earnings already paid. Some operations pay a mix of piece rate and hourly, which complicates the calculation further. Getting piece-rate overtime wrong is one of the most litigated payroll issues in manufacturing. BEG calculates the weekly regular rate on piece earnings, applies the correct overtime premium, and documents the method so it holds up under audit.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state plants, withholding, and unemployment</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A manufacturer with plants in more than one state, or with sales, service, and remote staff spread across states, owes correct income tax withholding in each work state, state unemployment in each state, and registration with each state agency. Some states also have daily overtime rules beyond the federal forty-hour week, and a few apply industry-specific manufacturing overtime rules on top of that. BEG tracks which state rules apply to each worker, withholds and remits by work state, keeps the company registered everywhere it operates, and applies any daily or state-specific overtime rule that applies to the plant.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Union payroll: CBA rates, dues, and fund remittances</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Unionized plants run on a collective bargaining agreement with its own wage scale, shift premiums, dues structure, and benefit funds. Every pay cycle the correct CBA rate has to be applied by classification, working dues deducted, and contributions remitted to the health, pension, and other funds with the remittance reports each fund requires. Miss a fund report and the company can face delinquency assessments. BEG applies the right CBA rate to each worker, deducts dues correctly, and prepares the fund remittance reporting so nothing goes delinquent.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Workers compensation tracking by job class code</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Workers compensation premium in manufacturing is driven by class code, and a plant has very different rates for machine operators, material handlers, maintenance, and office staff. Hours charged to the wrong class either inflate premium or create exposure at the annual comp audit. BEG tags each hour with the correct workers compensation class and produces reporting that reconciles cleanly to the annual audit, so the company does not overpay premium during the year or get surprised when the auditor arrives.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Job and department costing for accurate margins</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Manufacturing labor has to be allocated to the right department, cost center, or job so product costing and margin reporting are accurate. A worker may split a shift across two lines or two cost centers, and that allocation has to flow from the time data through payroll and into the cost report. BEG configures payroll to push hours to the correct department and cost center, so labor cost lands where it belongs and your margin reporting reconciles to what you actually paid.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Certified payroll on government manufacturing contracts</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Manufacturers producing under federal supply contracts can fall under the Walsh-Healey Public Contracts Act, and those doing on-site service or installation work on federal projects can pick up Davis-Bacon and certified payroll obligations. The covered work has to be paid at the required wage and reported in the format the contracting agency accepts. BEG identifies when a contract triggers prevailing wage or certified payroll, applies the correct rate, and files the reporting the agency requires so a government contract does not become a compliance problem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Manufacturers where payroll is its own full-time job</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Discrete and process manufacturers', body: 'Plant floors running two and three shifts with differentials, hourly operators, and overtime that has to be calculated on the blended rate every week.' },
              { title: 'Food and beverage producers', body: 'Seasonal headcount swings, weekend and night premiums, and piece-rate or production-based pay that complicates the overtime calculation.' },
              { title: 'Metal fabrication and machine shops', body: 'Skilled trades, multiple class codes for workers comp, and mixed hourly and piece-rate pay across a single crew.' },
              { title: 'Plastics, packaging, and assembly', body: 'High-volume hourly workforces where a small per-hour overtime error scales into real back-wage exposure fast.' },
              { title: 'Multi-plant and multi-state manufacturers', body: 'Production sites in more than one state, each with its own withholding, unemployment, and registration to keep current.' },
              { title: 'Manufacturers at 25 to 500 employees', body: 'Large enough to need real overtime and multi-state expertise, small enough that hiring and keeping that person in-house is a constant problem.' },
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
                objection: 'Common objection: "Switching payroll systems during a production year is too disruptive."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform later, we can handle that too -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. Overtime and multi-state included.',
                objection: 'Common objection: "Payroll services charge extra for every state and every off-cycle run."',
                body: 'The $25-$45 PEPM rate is all-inclusive: payroll processing, blended-rate overtime, shift differentials, multi-state tax filing, union fund remittances, compliance updates, year-end W-2s, and support. There are no per-run fees, no per-state surcharges, and no year-end add-ons. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "Payroll vendors disappear after onboarding."',
                body: 'Your BEG payroll specialist is your ongoing contact. New shift premium, new plant, new state registration, new union local -- you send one message. There is no ticket queue, no chatbot, and no 1-800 number. Your team has a real person who knows your plants and your pay rules.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every overtime miscalculation is back-wage exposure you do not get back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A payroll person who understands blended-rate overtime and multi-state filing costs $60,000-$100,000 per year fully loaded. Fully managed payroll at $25-$45 PEPM on a 100-person plant costs $30,000-$54,000 per year. Every cycle you run it manually is a week of regular-rate risk, fund-remittance risk, and back-office time that should be going to running the floor -- not chasing payroll.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before your next production ramp.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. Starting before your next seasonal ramp or new line means overtime and multi-state are handled correctly before headcount climbs. Companies that wait until the middle of a busy run make the cutover harder than it needs to be.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
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
              <p>Hourly machine operators and material handlers, skilled trades, shift supervisors, maintenance, and back-office and salaried staff across any manufacturer size, union or non-union.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. We operate as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: payroll processing, blended-rate overtime, shift differentials, federal and multi-state tax filing, union fund remittances, compliance updates, year-end W-2s, and dedicated BEG support. No add-on fees, no per-run charges, no per-state surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle overtime when we pay shift differentials?</h3>
              <p>Shift differentials are part of the FLSA regular rate, so overtime has to be paid on the blended rate, not the base wage. BEG folds every differential into the regular rate and calculates overtime correctly for each pay period, which is the single most common manufacturing payroll error we fix.</p>
            </div>
            <div className="faq-item">
              <h3>How are production and attendance bonuses handled for overtime?</h3>
              <p>Nondiscretionary bonuses must be added into the regular rate and the overtime recalculated for the period the bonus covers. BEG identifies which incentives are nondiscretionary, allocates them across the correct hours, and trues up the overtime so the bonus does not create wage-and-hour exposure.</p>
            </div>
            <div className="faq-item">
              <h3>Can you handle piece-rate pay and overtime on piece work?</h3>
              <p>Yes. For piece-rate workers the regular rate is total piece earnings divided by hours worked, with overtime paid at one half that rate for hours over forty on top of piece earnings. BEG calculates it weekly and documents the method so it holds up under audit.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle plants in multiple states?</h3>
              <p>BEG withholds income tax by the state where work is performed, remits state unemployment in each state, keeps the company registered with each state agency, and applies any daily or state-specific manufacturing overtime rule that applies to a plant.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30-60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. Your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes by season or by production cycle?</h3>
              <p>Your rate adjusts with headcount. Adding or removing workers updates your monthly cost at the same per-employee rate, so seasonal ramps and slowdowns are easy to handle. No contracts to renegotiate.</p>
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
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, blended-rate overtime, shift differentials, multi-state tax filing, union fund remittances, compliance updates, W-2s, and support. No add-on fees.' } },
              { '@type': 'Question', name: 'How do you handle overtime when we pay shift differentials?', acceptedAnswer: { '@type': 'Answer', text: 'Shift differentials are part of the FLSA regular rate, so overtime is paid on the blended rate, not the base wage. BEG folds every differential into the regular rate and calculates overtime correctly each pay period.' } },
              { '@type': 'Question', name: 'Can you handle piece-rate pay and overtime on piece work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For piece-rate workers the regular rate is total piece earnings divided by hours worked, with overtime paid at one half that rate for hours over forty on top of piece earnings. BEG calculates it weekly and documents the method.' } },
              { '@type': 'Question', name: 'How do you handle plants in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'BEG withholds income tax by work state, remits state unemployment in each state, keeps the company registered with each state agency, and applies any daily or state-specific manufacturing overtime rule that applies.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Manufacturing', item: 'https://www.beghr.com/services/managed-payroll/manufacturing' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="Related resources"
        posts={[
          {
            category: 'Managed payroll',
            title: 'Construction Payroll: Certified Payroll and Prevailing Wage',
            excerpt: 'Certified payroll, WH-347, fringes, and union reporting -- payroll handled for contractors that move between job sites and states.',
            href: '/services/managed-payroll/construction',
          },
          {
            category: 'Managed payroll',
            title: 'Managed Payroll for the Skilled Trades',
            excerpt: 'Union and non-union electricians, welders, machinists, and operators -- payroll handled for trade and shop crews.',
            href: '/services/managed-payroll/trades',
          },
          {
            category: 'Free tool',
            title: 'Managed Payroll Cost Calculator',
            excerpt: 'See what fully managed payroll would cost your plant at $25 to $45 per employee per month.',
            href: '/services/managed-payroll/cost-calculator',
          },
        ]}
      />

      {/* OVERTIME PAY CALCULATOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying shift differentials? Check what overtime really costs on the blended rate.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>On a plant floor, second and third shift premiums and production bonuses fold into the FLSA regular rate, so overtime is owed on the blended rate, not the base wage. Use the blended-rate mode to see what an overtime hour actually costs once shift pay is included. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <OvertimePayCalculator />
    </ServicePage>
  );
}
