import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Fitness Studios & Gyms | Personal Trainer Classification | BEG',
  description: 'Fitness studio and gym payroll fully managed at $25–$45 PEPM. Personal trainer W-2 vs. 1099 classification, instructor pay, and membership commission handled. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/fitness' },
};

const CALENDLY = getCalendlyLink('payroll-fitness');

export default function PayrollFitnessPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/fitness.svg"
      imageAlt="Fitness studio and gym with fully managed payroll"
      eyebrow="Managed Payroll · Fitness Studios & Gyms"
      title="Managed Payroll for Fitness Studios and Gyms"
      description="Personal trainer 1099 classification is the IRS's favorite audit target in fitness. Fitness studios and gyms routinely pay personal trainers as 1099 independent contractors when the working relationship — exclusive to one location, using studio equipment, following studio scheduling — legally qualifies them as W-2 employees. The IRS audits this regularly. We manage fitness payroll correctly at $25–$45 per employee per month, including trainer classification, instructor pay, and membership commission structures."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including multi-location studios' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Fitness Payroll Problem</p>
            <h2>Three payroll classifications fitness operators consistently get wrong.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Trainer 1099</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Personal trainers who work exclusively at your facility almost always qualify as W-2 employees</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The IRS uses behavioral control, financial control, and relationship type to determine employment status. A trainer who works exclusively at your studio, on your schedule, using your equipment, wearing your brand, and selling your packages meets the definition of an employee under virtually every state and federal test. Calling them a contractor does not change the analysis.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Group fitness</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Group fitness instructors may be W-2 or genuinely independent — depending on how they are engaged</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Unlike personal trainers, group fitness instructors who teach classes at multiple studios, set their own rates, and bring their own programming may legitimately qualify as independent contractors. The line requires analysis of each instructor relationship — blanketing all instructors as 1099 or all as W-2 is usually wrong.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Commission pay</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Membership sales commission and personal training package commission must be calculated correctly for FLSA</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Staff who earn base plus commission must have their commission included in the regular rate of pay for overtime calculations. Paying overtime on base salary only — ignoring commissions — is an FLSA violation that accumulates every overtime pay cycle.</div>
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
            <h2>Every role in your studio, classified and paid correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Personal trainers', body: 'Classification review for each trainer relationship. W-2 payroll for those who qualify as employees. Proper 1099-NEC for genuinely independent trainers. Documentation that holds up to IRS scrutiny.' },
              { title: 'Group fitness instructors', body: 'Per-class pay structures, multi-studio instructors processed correctly as contractors, and studio-exclusive instructors processed as W-2 with correct overtime calculations.' },
              { title: 'Front desk and sales staff', body: 'Hourly staff with FLSA overtime, plus membership sales commission folded into the regular rate of pay for overtime calculations. No FLSA violations buried in your weekly pay runs.' },
              { title: 'Studio management', body: 'Studio managers and directors classified under the correct FLSA exemption. Performance bonuses and management commission documented and processed correctly.' },
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
            <h2>Three steps to fully managed fitness payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your trainer arrangements, instructor relationships, front desk pay structures, commission plans, and multi-location setup. You get a fixed monthly cost and a classification gap report.' },
              { num: '02', title: 'Payroll configuration', body: 'We review trainer and instructor classifications, reconfigure W-2 and 1099 processing correctly, set up commission overtime calculations, and handle state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every commission calculation, every trainer W-2 or instructor 1099, every state filing — fully managed by BEG. Your team approves, we execute.' },
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
            <h2>Three things most payroll vendors do not offer fitness studios and gyms</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We use Mindbody or ABC Fitness and do not want to disrupt our member management integration."',
                body: 'We do not require you to change your studio management or payroll platform. BEG operates as your managed payroll team, working with your existing system and pulling the data we need from your scheduling and session tracking.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services charge extra for 1099 processing, commission tracking, and multi-location filings."',
                body: 'The $25–$45 PEPM rate covers it all: W-2 and 1099 processing, commission overtime calculations, multi-location state filings, year-end W-2s and 1099-NECs, and BEG support. No per-1099 fees, no per-location surcharges.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands fitness industry payroll.',
                objection: 'Common objection: "Our payroll company has no idea what a personal training package commission is."',
                body: 'Your BEG payroll specialist is your ongoing contact. When you bring on a new trainer and need to determine their classification, when a commission dispute comes up, or when you open a second location — one message to your BEG contact handles it.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A personal trainer reclassification audit covers every 1099 you have issued, going back years.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>IRS worker reclassification assessments include the employer share of FICA taxes, the employee share the employer failed to withhold, interest, and penalties. For a studio with 10 trainers paid as 1099 for three years, the liability commonly exceeds $50,000 — before legal fees. Fully managed payroll at $25–$45 PEPM on a 20-person studio costs under $11,000 per year.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix trainer classification is now — before a trainer files an unemployment claim.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Unemployment claims from misclassified contractors trigger automatic state labor department reviews. One claim opens the door to a full worker classification audit. Transitions take 30–60 days — start the scope review now and get ahead of it.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your trainer arrangements, instructor pay, and commission structures — and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from fitness studios and gyms</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>All our personal trainers are on 1099 — is that a problem?</h3>
              <p>It depends on how they work. Trainers who work exclusively at your studio, on your schedule, using your equipment, and selling your packages almost certainly qualify as W-2 employees under IRS and state criteria. We review each trainer relationship and tell you exactly which ones carry reclassification risk before we touch your payroll.</p>
            </div>
            <div className="faq-item">
              <h3>What about group fitness instructors who teach at multiple studios?</h3>
              <p>Instructors who genuinely work at multiple facilities, set their own rates, and bring their own programming may legitimately be 1099 independent contractors. We analyze each instructor relationship individually — blanket classification either way is usually wrong and creates risk one direction or the other.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle commission on personal training packages?</h3>
              <p>Commission earned by front desk and sales staff must be included in the regular rate of pay when calculating overtime. We fold your commission structure into overtime calculations automatically each pay cycle, eliminating the FLSA violation that accumulates when overtime is calculated on base pay only.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll or studio management systems?</h3>
              <p>No. BEG operates inside your existing systems. Migration is an option if you want to upgrade, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: payroll processing, trainer classification review, W-2 and 1099 processing, commission overtime calculations, state filings, year-end W-2s and 1099-NECs, and BEG support. No per-1099 fees, no add-on charges.</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'All our personal trainers are on 1099 — is that a problem?', acceptedAnswer: { '@type': 'Answer', text: 'Trainers who work exclusively at your studio on your schedule using your equipment almost certainly qualify as W-2 employees. We review each relationship and identify the risk.' } }, { '@type': 'Question', name: 'How do you handle commission on personal training packages?', acceptedAnswer: { '@type': 'Answer', text: 'Commission must be included in the regular rate of pay for overtime calculations. We fold your commission structure into overtime automatically each cycle.' } }, { '@type': 'Question', name: 'Do we have to change systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing systems. Migration is never a requirement.' } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' }, { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' }, { '@type': 'ListItem', position: 3, name: 'Fitness Studios & Gyms', item: 'https://beghr.com/services/managed-payroll/fitness' }] }) }} />
    </ServicePage>
  );
}
