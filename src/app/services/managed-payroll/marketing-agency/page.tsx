import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Marketing Agency Payroll | Remote Teams Handled Right. | BEG',
  description: 'Marketing agency payroll fully managed at $25–45 PEPM. Remote multi-state teams, contractor classification, and commission handling included.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/marketing-agency' },,
  openGraph: {
    title: 'Marketing Agency Payroll | Remote Teams Handled Right. | BEG',
    description: 'Marketing agency payroll fully managed at $25–45 PEPM. Remote multi-state teams, contractor classification, and commission handling included.',
    url: 'https://beghr.com/services/managed-payroll/marketing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Marketing Agency Payroll | Remote Teams Handled Right. | BEG', description: 'Marketing agency payroll fully managed at $25–45 PEPM. Remote multi-state teams, contractor classification, and commission handling included.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-marketing-agency');

export default function PayrollMarketingAgencyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/marketing-agency.svg"
      imageAlt="Marketing and creative agency with fully managed remote payroll"
      eyebrow="Managed Payroll · Marketing & Creative Agencies"
      title="Managed Payroll for Marketing and Creative Agencies"
      description="Remote teams across multiple states, freelancers on W-2 or 1099, and AE commissions — all managed. Marketing and creative agencies scale fast and hire everywhere, which means multi-state tax nexus accumulates faster than most founders realize. Add in the blurry line between W-2 creatives and 1099 contractors, account manager commission structures, and the administrative overhead of a fully remote team, and payroll becomes a real operational drag. We manage all of it at $25–$45 per employee per month."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered as your remote team grows' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Agency Payroll Problem</p>
            <h2>Three payroll issues that hit marketing and creative agencies harder as they scale.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>State nexus</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Every remote hire in a new state creates a payroll tax obligation you may not know you have</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Agencies that hire remotely accumulate payroll tax registrations in every state where an employee works. Missing a state registration means unfiled payroll tax returns, which triggers back taxes, penalties, and interest the moment that state's revenue department notices. Agencies with 20 remote employees can easily be in 12–15 states.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>W-2 vs. 1099</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>The line between W-2 designers and copywriters and 1099 freelancers is one of the most audited in the creative industry</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Creatives who work full-time hours, use your tools, follow your processes, and work exclusively for your agency typically meet the IRS and state definitions of employees — regardless of what your contract calls them. Reclassification means back employment taxes, penalties, and in some states, benefits back pay.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>AE commissions</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Account manager base plus commission structures add complexity to every payroll run</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Account executives and client services staff typically earn a base salary plus commission on client revenue or renewals. Each commission calculation must be reconciled, applied in the correct period, and documented for FLSA purposes. Commission disputes are among the most common wage claims in the professional services industry.</div>
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
            <h2>Every role in your agency, handled correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'W-2 remote employees', body: 'Multi-state payroll for remote teams with state registrations, withholding, and quarterly filings in every state your employees work. We add new states as you hire.' },
              { title: '1099 contractors and freelancers', body: 'Contractor classification review for designers, copywriters, and creative consultants. Proper 1099-NEC filing at year-end. Classification risk flagged before it becomes an audit.' },
              { title: 'Account manager commissions', body: 'Commission plan administration, per-period calculation reconciliation, and FLSA-compliant documentation. Commission disputes are expensive — we prevent them.' },
              { title: 'Agency leadership and partners', body: 'Owner-employees, officer compensation, and partner distributions handled with correct tax treatment and documentation for S-corp or LLC structures common in agency ownership.' },
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
            <h2>Three steps to fully managed agency payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your remote employee locations, current state registrations, contractor arrangements, and commission structures. You get a fixed monthly cost and a gap report before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We register in missing states, review contractor classifications, configure commission tracking, and set up your payroll correctly. No migration required — we work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every commission calculation, every 1099-NEC, and every year-end W-2 — fully managed by BEG. Your team approves, we execute.' },
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
            <h2>Three things most payroll vendors do not offer marketing and creative agencies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We use Gusto and it is fine — we just do not have time to manage it properly."',
                body: 'We do not require you to change platforms. BEG operates as your managed payroll team inside your current system — Gusto, Rippling, QuickBooks, or whatever you are on. If you want to move to iSolved for a more complete HR platform, we can manage that — but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services charge extra for multi-state registrations, 1099 processing, and commission tracking."',
                body: 'The $25–$45 PEPM rate covers it all: multi-state payroll, new state registrations, 1099-NEC processing, commission tracking, year-end W-2s, and BEG support. No per-state fees, no per-1099 charges, no year-end invoices.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a self-service dashboard.',
                objection: 'Common objection: "We are busy running client accounts and payroll problems end up sitting on someone\'s to-do list for days."',
                body: 'Your BEG payroll specialist is your ongoing contact. When you hire someone in Colorado and need a state registration, when a freelancer needs to go W-2, or when a commission dispute needs documentation — one message gets it resolved before your next pay run.',
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

      {/* IMPLEMENTATION TIMELINE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Getting Started</p>
            <h2>From scope review to live agency payroll in 3–5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your remote team locations, state registration gaps, contractor arrangements, and commission structures — and give you a fixed monthly price.' },
              { day: 'Days 1–2', title: 'Onboarding', body: 'Agreement signed, system access granted, remote employee locations and contractor classification reviewed.' },
              { day: 'Days 2–4', title: 'Configuration', body: 'Missing state registrations completed, contractor classification review done, and commission tracking configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed agency pay run — BEG executes, your team approves. State compliance gaps closed before this cycle.' },
            ].map(({ day, title, body }) => (
              <div key={day} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ECAC60', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{day}</div>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{body}</p>
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every new remote hire you add without a state registration is a liability you are building.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>State revenue departments are increasingly aggressive about identifying out-of-state employers with unregistered employees. When they find you — through W-2 data sharing, employee complaints, or unemployment claims — the back taxes, penalties, and interest cover every year you had an employee in that state without registering. Fully managed payroll at $25–$45 PEPM on a 25-person agency costs under $14,000 per year. One state tax audit costs more.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix multi-state payroll is before you add the next remote hire.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Transitions take 30–60 days. If you are planning to hire in Q3 or Q4 — or already have people in states you are not registered in — the scope review is the first step. We identify every state where you have exposure and get you registered before the next payroll cycle.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your remote team, state registrations, and contractor arrangements — and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from marketing and creative agencies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>We have employees in 8 states but are only registered in 2. What happens?</h3>
              <p>You have unfiled payroll tax obligations in 6 states. As part of onboarding, we identify every state where you have employees and register you in the missing states before the next payroll cycle. We also handle back filings if required. Getting ahead of this proactively is always less expensive than a state revenue department finding you first.</p>
            </div>
            <div className="faq-item">
              <h3>How do you determine if our freelancers should be W-2 or 1099?</h3>
              <p>We review the working relationship against IRS common law factors and applicable state tests — behavioral control, financial control, and relationship type. Freelancers who work full-time hours, use your software and tools, follow your processes, and work exclusively for your agency typically qualify as employees regardless of contract language. We flag risk and walk you through the reclassification options.</p>
            </div>
            <div className="faq-item">
              <h3>Can you track account manager commissions and reconcile them each pay period?</h3>
              <p>Yes. We administer your commission plan, reconcile each period's calculations against your client revenue data, apply commissions correctly to the right pay period, and maintain documentation for FLSA compliance. If a commission dispute arises, we have the records.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option if you want to upgrade, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: multi-state payroll processing, new state registrations, contractor 1099-NEC filing, commission tracking, year-end W-2s, and BEG support. No per-state fees, no per-1099 charges.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle owner compensation in an S-corp marketing agency?</h3>
              <p>S-corp owner-employees must pay themselves a reasonable salary through payroll — not distributions only — to satisfy IRS requirements. We structure owner W-2 compensation correctly, process it on schedule, and maintain the documentation your CPA needs for the S-corp election. Owner-employee payroll mistakes are one of the most common IRS audit flags for small professional services firms.</p>
            </div>
            <div className="faq-item">
              <h3>Can you register us in a state where we just hired our first remote employee?</h3>
              <p>Yes — and this is included at no additional charge. When you hire someone in a new state, we initiate the registration, get your accounts set up, and configure withholding before the first paycheck in that state. There is no per-state setup fee and no waiting for you to handle the paperwork. We track every state where you have payroll obligations and stay ahead of your hiring.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to get started with managed marketing agency payroll?</h3>
              <p>From signed agreement to live payroll: 3–5 business days. We identify every state where you have employees, complete missing registrations, review contractor classifications, and configure commission tracking in your existing system. Most agencies run their first BEG-managed payroll within a week — with state compliance gaps that existed for months closed before that first pay cycle runs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/marketing-agency/marketing-agency-remote-payroll" style={{ color: '#ECAC60' }}>Multi-State Payroll for Remote Marketing Agency Teams</Link></li>
            <li><Link href="/blog/payroll/marketing-agency/scorp-owner-salary-payroll" style={{ color: '#ECAC60' }}>S-Corp Owner Salary in Payroll: What Marketing Agency Owners Need to Know</Link></li>
            <li><Link href="/blog/payroll/marketing-agency/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Marketing Agencies</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different industry?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'We have employees in 8 states but are only registered in 2. What happens?', acceptedAnswer: { '@type': 'Answer', text: 'We identify every state with payroll obligations and register you before the next pay cycle. Proactive correction is always less expensive than a state revenue audit.' } }, { '@type': 'Question', name: 'How do you determine if freelancers should be W-2 or 1099?', acceptedAnswer: { '@type': 'Answer', text: 'We review the working relationship against IRS common law factors — behavioral control, financial control, relationship type — and flag reclassification risk.' } }, { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' }, { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' }, { '@type': 'ListItem', position: 3, name: 'Marketing & Creative Agencies', item: 'https://beghr.com/services/managed-payroll/marketing-agency' }] }) }} />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Multi-State Payroll for Remote Marketing Agency Teams',
            excerpt: 'Every state where a remote employee works requires a separate registration, tax ID, and filing schedule. What agency owners get wrong and how to fix it.',
            href: '/blog/payroll/marketing-agency/marketing-agency-remote-payroll',
          },
          {
            category: 'Payroll compliance',
            title: 'S-Corp Owner Salary in Payroll: What Marketing Agency Owners Need to Know',
            excerpt: 'S-Corp owners must pay themselves a reasonable salary through payroll before taking distributions. Here is what reasonable means and how to set it up.',
            href: '/blog/payroll/marketing-agency/scorp-owner-salary-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Marketing Agencies',
            excerpt: 'What agency principals spend managing payroll in-house vs. what fully managed outsourcing costs — especially for remote-first teams across multiple states.',
            href: '/blog/payroll/marketing-agency/managed-payroll-vs-in-house',
          },
        ]}
      />
    </ServicePage>
  );
}
