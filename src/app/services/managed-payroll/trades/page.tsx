import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Skilled Trades Payroll | Union & Certified Pay. Handled. | BEG',
  description: 'Trades and manufacturing payroll at $25–$45 PEPM. Union compliance, certified payroll, and multi-site management included. Request a scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/trades' },
  openGraph: {
    title: 'Skilled Trades Payroll | Union & Certified Pay. Handled. | BEG',
    description: 'Trades and manufacturing payroll at $25–$45 PEPM. Union compliance, certified payroll, and multi-site management included. Request a scope review.',
    url: 'https://beghr.com/services/managed-payroll/trades',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Skilled Trades Payroll | Union & Certified Pay. Handled. | BEG', description: 'Trades and manufacturing payroll at $25–$45 PEPM. Union compliance, certified payroll, and multi-site management included. Request a scope review.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-trades');

export default function PayrollTradesPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/trades.svg"
      imageAlt="Skilled trades or manufacturing operation with managed payroll"
      eyebrow="Managed Payroll · Skilled Trades"
      title="Union payroll and certified reporting should not slow your operation."
      description="Union agreements, prevailing wage requirements, multi-site workforce management, and certified payroll reporting make trades payroll one of the most complex in any industry. We manage all of it at $25–$45 per employee per month -- fully managed, nothing for your team to touch."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Union CBA</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Collective bargaining agreements create non-negotiable payroll rules</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Union contract terms -- wage rates, overtime rules, fringe benefits -- must be calculated exactly right on every pay cycle.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-site</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Different wage requirements across different project locations</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Prevailing wage rates vary by jurisdiction. A crew working two projects in different counties may have different required wages.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$60K–$80K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of a payroll specialist with union and certified payroll experience</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Finding and keeping someone who understands union CBA compliance and certified payroll is difficult and expensive.</div>
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
              { num: '01', title: 'Scope review', body: 'We map your current payroll process, employee roster, and complexity. You get a fixed monthly cost -- no surprises.' },
              { num: '02', title: 'We review your union CBAs, prevailing wage schedules, and multi-site project roster before processing your first managed payroll cycle.', body: 'We configure and run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30–60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every filing, every compliance update -- fully managed by BEG. Your team touches nothing.' },
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
            <h2>Union payroll, Davis-Bacon, and certified reporting -- what skilled trades payroll actually involves</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Davis-Bacon wages and union CBA wages -- these are different obligations</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Davis-Bacon prevailing wage rates are set by the Department of Labor for specific job classifications on federally funded or federally assisted construction projects. Union wages are set by collective bargaining agreements negotiated between the employer (or employer association) and the union local. These are independent obligations. On a federal project where workers are also union members, both requirements may apply simultaneously -- and the higher of the two rates must be paid. On a non-federal project, only the union CBA rate applies. On a project without federal funding and without union workers, neither applies. Payroll must correctly identify which rate applies to each employee on each project and apply it without conflating the two frameworks.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fringe benefit fund remittances to union trust funds</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Under most construction union CBAs, the employer owes separate contributions to the union trust funds for every hour worked by a union member: the health and welfare fund, the pension or annuity fund, the apprenticeship and training fund, and the industry promotion fund. These are calculated as a fixed dollar amount per hour worked -- not as a percentage of wages -- and must be remitted to the trust fund administrator on a schedule set by the CBA, typically monthly or weekly. Remittances must be accompanied by a detailed remittance report listing each member, their hours worked, and the contributions owed. Late remittances trigger interest charges and potential grievances. BEG manages fringe fund remittances separately from wage payroll and produces the required remittance reports for each trust fund on the required schedule.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-local union scenarios -- when work crosses jurisdictions</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a contractor sends workers from one union local to a project in another local jurisdiction, the work may be covered by the host local agreement rather than the home local agreement. This can require the contractor to sign a letter of assent with the host local, pay the host local wage rates (which may differ from the home local rates), and contribute to the host local trust funds for hours worked in the jurisdiction. Managing multi-local obligations requires tracking not just where each worker is classified but where each hour of work is performed -- and applying the correct agreement for that location. BEG tracks project location alongside hours worked to ensure the correct CBA applies to each worker on each project.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Apprentice-to-journeyman wage rate progression</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Union CBAs specify different wage rates for apprentices at each level of their apprenticeship program -- typically expressed as a percentage of journeyman wages (40%, 50%, 60%, 70%, 80%, 90%) depending on completion of the program. When an apprentice progresses to the next level, their rate must be updated before the next payroll cycle. CBAs also set maximum ratios of apprentices to journeymen on any project, and violating the ratio creates a grievance exposure. BEG tracks each apprentice membership status, updates rates at each progression milestone, and monitors apprentice-to-journeyman ratios on active projects.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Certified payroll report cadence and prevailing wage rate updates</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On federal Davis-Bacon projects, the WH-347 Certified Payroll Report must be filed weekly -- including weeks with no work performed, where a no-work certification is required. State prevailing wage projects follow their own reporting schedules, which vary by state. Prevailing wage rate determinations are updated periodically by the Department of Labor and by state prevailing wage agencies. A contract that begins at one wage determination may be subject to updated rates mid-project depending on the contract modification history and project type. BEG manages the certified payroll submission calendar for every active project and monitors wage determination updates that may affect your active contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Skilled trades and construction companies with union and government contract obligations</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Electrical contractors', body: 'Union IBEW agreements, apprentice rate progressions, fringe fund remittances, and certified payroll on federal electrical installations all require dedicated payroll management.' },
              { title: 'Plumbing and HVAC contractors', body: 'UA union agreements, multi-local work when crews travel across jurisdictions, and Davis-Bacon compliance on federally assisted building projects.' },
              { title: 'Ironworkers and structural steel contractors', body: 'IABSW union agreements on bridge and building projects, multi-state work, and prevailing wage requirements on federal infrastructure contracts.' },
              { title: 'General contractors with union subcontractor oversight', body: 'GCs who employ union tradespeople directly on government projects and need certified payroll reporting across all trades on the project.' },
              { title: 'Specialty and mechanical contractors', body: 'Insulation, fire protection, and mechanical contractors with mixed union and non-union crews working on the same project under different wage requirements.' },
              { title: 'Trades companies at 15 to 200 employees', body: 'Large enough to have active union agreements and government contracts, too small to justify a dedicated payroll compliance specialist with CBA and Davis-Bacon expertise.' },
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
                objection: 'Common objection: "Switching payroll systems is too disruptive."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform, we can handle that too -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services always add fees for every little thing."',
                body: 'The $25–$45 PEPM rate is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. There are no per-run fees, no year-end surcharges, and no module upsells. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "Payroll vendors disappear after onboarding."',
                body: 'Your BEG payroll specialist is your ongoing contact. When something changes -- a new hire, a state registration, a compliance update -- you send one message. There is no ticket queue, no chatbot, and no calling a 1-800 number. Your team has a real person who knows your account.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month you wait is money you are not getting back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your trades and manufacturing operation costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$45 PEPM on a 50-person team costs $15,000–$21,000 per year. Every pay cycle on a union contract is a compliance event. One missed CBA provision or incorrect fringe benefit calculation triggers a grievance or audit.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. If you want a clean cutover at Q3, Q4, or January 1 -- the window to start is now. Companies that miss the quarter-start timing typically wait another 3 months. The savings you defer are gone for good.</p>
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
              <p>Union and non-union electricians, plumbers, HVAC technicians, welders, ironworkers, carpenters, heavy equipment operators, and other skilled trades and construction workers.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. We operate as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: payroll processing, federal and state tax filing, compliance updates, year-end W-2s, and dedicated BEG support. No add-on fees, no per-run charges, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30–60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. Your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes?</h3>
              <p>Your rate adjusts with headcount. Adding or removing employees updates your monthly cost at the same per-employee rate. No contracts to renegotiate.</p>
            </div>
            <div className="faq-item">
              <h3>What is the difference between Davis-Bacon wages and union CBA wages?</h3>
              <p>Davis-Bacon rates are set by the Department of Labor for specific job classifications on federally funded projects. Union wages are set by collective bargaining agreements between the employer and the union local -- independently of any federal requirement. On a federal project with union workers, both may apply simultaneously and the higher rate governs. BEG tracks which obligation applies to each worker on each project and applies the correct rate.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle fringe benefit fund remittances to union trust funds?</h3>
              <p>BEG calculates union fringe contributions per hour worked for each member, produces the required remittance report listing each member and their hours, and remits to the appropriate trust funds on the schedule set by the CBA -- typically monthly or weekly. Health and welfare, pension, apprenticeship, and industry promotion fund contributions are tracked and remitted separately from wage payroll.</p>
            </div>
            <div className="faq-item">
              <h3>What happens when workers from different union locals work on the same project?</h3>
              <p>When crews travel into another local jurisdiction, the work may fall under the host local agreement rather than the home local agreement. This can require a letter of assent with the host local, payment at host local wage rates, and contributions to host local trust funds for hours worked in that jurisdiction. BEG tracks project location alongside hours worked to apply the correct agreement for each location.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG track apprentice wage rate progressions?</h3>
              <p>BEG tracks each apprentice membership status and program completion percentage, updates their rate at each CBA-specified progression milestone, and monitors the apprentice-to-journeyman ratio on active projects. When a progression milestone is reached, the updated rate takes effect before the next payroll cycle -- no manual adjustment required from your team.</p>
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
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, compliance updates, W-2s, and support. No add-on fees.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first managed payroll run.' } },
              { '@type': 'Question', name: 'What is the difference between Davis-Bacon wages and union CBA wages?', acceptedAnswer: { '@type': 'Answer', text: 'Davis-Bacon rates are set by the DOL for federally funded projects. Union wages are set by CBAs independent of any federal requirement. On a federal project with union workers, both may apply and the higher rate governs.' } },
              { '@type': 'Question', name: 'How does BEG handle fringe fund remittances to union trust funds?', acceptedAnswer: { '@type': 'Answer', text: 'BEG calculates contributions per hour, produces remittance reports for each trust fund, and remits on the CBA-specified schedule -- health and welfare, pension, apprenticeship, and industry promotion funds all handled separately.' } },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Trades', item: 'https://beghr.com/services/managed-payroll/trades' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Construction Payroll Outsourcing: Cost vs. Hiring Payroll Manager (2026)',
            excerpt: 'Certified payroll, prevailing wage tracking, and union fringe remittances are not standard payroll features. Here is what skilled trades contractors are outsourcing instead.',
            href: '/blog/payroll/construction/contractors-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Manufacturing Payroll Outsourcing: Cost vs. Hiring HR Manager (2026)',
            excerpt: 'Shift differentials, union rates, and overtime tiers make manufacturing payroll complex. The real cost of running it in-house vs. fully managed.',
            href: '/blog/payroll/manufacturing/outsourcing-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: 'ADP vs. Managed Payroll: Is ADP Still Worth It for Mid-Size Companies? (2026)',
            excerpt: "ADP's per-transaction fees add up fast for contractors with variable crew sizes and certified payroll requirements. Here is the full cost comparison.",
            href: '/blog/compare/managed-payroll-vs-adp',
          },
        ]}
      />
    </ServicePage>
  );
}
