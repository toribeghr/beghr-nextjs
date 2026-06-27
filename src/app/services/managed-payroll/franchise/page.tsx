import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Franchise Businesses | Multi-Location & Joint Employer Compliance | BEG',
  description: 'Franchise payroll fully managed at $25–$45 PEPM. Multi-location payroll, franchisor compliance requirements, joint-employer documentation, and rapid location scaling handled. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/franchise' },
};

const CALENDLY = getCalendlyLink('payroll-franchise');

export default function PayrollFranchisePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/franchise.svg"
      imageAlt="Franchise business with fully managed multi-location payroll"
      eyebrow="Managed Payroll · Franchise Businesses"
      title="Managed Payroll for Franchise Businesses"
      description="Multi-location payroll that scales with every unit you add. Franchise owners face a payroll environment that gets more complex with every location added: different state registrations, franchisor payroll requirements, joint-employer liability documentation, and the operational overhead of running payroll across multiple units simultaneously. We manage all of it at $25–$45 per employee per month — one flat rate regardless of how many locations you operate."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive across all locations' },
        { value: 'All 50', label: 'States covered as you expand your territory' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Franchise Payroll Problem</p>
            <h2>Three payroll issues that compound with every location you add.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>State x locations</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Every new location in a different state means a new state payroll registration, withholding setup, and quarterly filing obligation</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A franchisee with three locations across two states has three sets of state payroll filings, two state tax accounts, and potentially different minimum wage and overtime rules at each location. Five locations across four states is five times that complexity. Most multi-unit operators underestimate how quickly compliance obligations multiply.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Joint employer</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Franchisors that control employment practices can create joint-employer liability for both parties</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The NLRB and DOL have both issued and revised joint-employer standards that affect franchise relationships. When a franchisor mandates specific scheduling systems, pay practices, or hiring standards, it can create joint-employer status — making both the franchisor and franchisee liable for wage and hour violations. Proper payroll documentation and independence in employment decisions is the defense.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Rapid scaling</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Adding a new location means standing up payroll infrastructure before the doors open</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Every new franchise location requires state registration, FEIN confirmation, unemployment insurance registration, workers comp setup, and new hire reporting — before the first employee is paid. Multi-unit operators who handle this manually hit bottlenecks every time they sign a new lease.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHAT WE MANAGE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What We Manage</p>
            <h2>Payroll built for multi-unit franchise operations</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Multi-location payroll', body: 'Unified payroll management across all your locations. Employees who work across locations, location-specific pay rates for different state minimum wages, and consolidated reporting — all in one managed engagement.' },
              { title: 'New location setup', body: 'State registration, UI account setup, workers comp coordination, and new hire reporting for every location you add. We have the infrastructure ready before your first employee is paid.' },
              { title: 'Franchisor compliance', body: 'We maintain payroll documentation that demonstrates your independence in employment decisions — protecting against joint-employer findings if the franchisor\'s practices are ever scrutinized.' },
              { title: 'Variable pay structures', body: 'Hourly crews, shift managers, assistant managers, and general managers often have different pay structures, overtime rules, and bonus plans. We handle all of them across every location as part of the flat monthly rate.' },
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
            <h2>Three steps to fully managed franchise payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your current locations, state registrations, franchisor payroll requirements, pay structures by role, and planned expansion timeline. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We audit and complete your state registrations, configure location-specific pay rules, set up new location workflows, and document the joint-employer defense trail. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle across every location, every state filing, every new location setup as you grow, every year-end W-2 — fully managed by BEG. You sign leases, we handle payroll.' },
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
            <h2>Three things most payroll vendors do not offer franchise operators</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Our franchisor may have a preferred payroll system and we cannot always switch."',
                body: 'We do not require you to change platforms. BEG operates as your managed payroll team inside your current system — whether that is a franchisor-approved platform or one you selected. If you want to move to iSolved for a more capable HCM platform, we can manage that — but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'One flat rate across all locations. No per-location surcharges.',
                objection: 'Common objection: "Payroll companies charge extra for each location and each state, which kills the economics as we scale."',
                body: 'The $25–$45 PEPM rate is per employee — not per location. Adding a second or fifth location does not trigger a new base fee, a new state setup charge, or a new monthly contract. The rate stays the same per employee regardless of how many rooftops you run.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who grows with your operation.',
                objection: 'Common objection: "We have been through three payroll account managers in two years and have to re-explain our setup every time."',
                body: 'Your BEG payroll specialist is your long-term contact. They know your locations, your pay structures, your franchisor requirements, and your expansion schedule. When you sign a new lease, one message starts the payroll setup for that location — no explaining your business from scratch.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every location you add without a payroll system that scales is a liability multiplier.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll errors in a single-location business affect one workforce. The same error in a five-location franchise affects five workforces, five state filings, and five times the back wage or penalty exposure. The return on managed payroll scales with every unit you add. Fully managed payroll at $25–$45 PEPM on a 75-person multi-unit operation costs under $34,000 per year — far less than the labor required to run it in-house across five locations.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to scale your payroll infrastructure is before you sign the next lease.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Transitions take 30–60 days. If you have a location opening in Q3 or Q4, starting the scope review now means we have your payroll infrastructure ready the day the doors open — not three months later after scrambling to set up state accounts and run payroll manually.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your locations, state registrations, and franchisor requirements — and give you a fixed monthly cost per employee across all locations.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from franchise owners and multi-unit operators</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Does the $25–$45 PEPM rate apply across all my locations?</h3>
              <p>Yes. The rate is per employee, not per location. A 75-person operation across five locations pays the same per-employee rate as a 15-person single location. No per-location setup fees, no per-state surcharges. The economics improve as you add locations.</p>
            </div>
            <div className="faq-item">
              <h3>What if my franchisor requires a specific payroll system?</h3>
              <p>We work inside your franchisor-approved system if one is mandated. If you have flexibility to choose your platform, we can advise on options — including iSolved, which handles multi-location franchise payroll well. Either way, we manage the payroll execution regardless of platform.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle joint-employer documentation?</h3>
              <p>We maintain payroll records and documentation that demonstrates your independence as an employer — separate employment decisions, your own pay practices, your own disciplinary procedures. This documentation is your defense if a franchisor's conduct ever creates a joint-employer inquiry.</p>
            </div>
            <div className="faq-item">
              <h3>How quickly can you set up payroll for a new location?</h3>
              <p>Once you are onboarded, adding a new location takes 2–3 weeks for state registration and setup — not 60 days. We have the infrastructure and the relationships with state agencies to move faster than a first-time setup.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include across all locations?</h3>
              <p>Everything: multi-location payroll processing, state registrations and filings for every location, new location setup as you expand, year-end W-2s for all employees, and BEG support. One invoice, all locations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Looking for managed payroll for a different industry?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Does the $25–$45 PEPM rate apply across all my locations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The rate is per employee, not per location. No per-location setup fees or per-state surcharges.' } }, { '@type': 'Question', name: 'How quickly can you set up payroll for a new location?', acceptedAnswer: { '@type': 'Answer', text: 'Once onboarded, adding a new location takes 2–3 weeks for state registration and setup.' } }, { '@type': 'Question', name: 'What does $25–$45 PEPM include across all locations?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: multi-location payroll, state registrations, new location setup, year-end W-2s, and BEG support. One invoice, all locations.' } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' }, { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' }, { '@type': 'ListItem', position: 3, name: 'Franchise Businesses', item: 'https://beghr.com/services/managed-payroll/franchise' }] }) }} />
    </ServicePage>
  );
}
