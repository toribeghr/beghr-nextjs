import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Energy Company Payroll Services | Instant Quote | BEG',
  description: 'Energy and field-crew payroll fully managed at $25-$45 PEPM. Per diem, multi-state field crews, certified payroll, and shift differential pay handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/energy' },
  openGraph: {
    title: 'Energy Company Payroll Services | Instant Quote | BEG',
    description: 'Energy and field-crew payroll fully managed at $25-$45 PEPM. Per diem, multi-state field crews, certified payroll, and shift differential pay handled.',
    url: 'https://www.beghr.com/services/managed-payroll/energy',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Company Payroll Services | Instant Quote | BEG',
    description: 'Energy and field-crew payroll fully managed at $25-$45 PEPM. Per diem, multi-state field crews, certified payroll, and shift differential pay handled.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('energy-payroll');

export default function PayrollEnergyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/engineering.svg"
      imageAlt="Energy company field crew with fully managed payroll"
      showHeroImage={true}
      eyebrow="Managed Payroll · Energy & Field Operations"
      title="Energy company payroll runs on field crews, per diem, and multi-state tax registrations. We built ours around it."
      description="Per diem tax treatment under IRS accountable plan rules, multi-state and multi-country field crew registrations, certified payroll on government energy infrastructure contracts, and shift differential and hazard pay, all handled correctly. BEG manages it at $25-$45 per employee per month, all-inclusive. No migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" industry="energy" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'Multi-state', label: 'Field crew tax registration managed' },
        { value: '3-5 Days', label: 'To live managed payroll' },
      ]}
    >

      <div className="tldr" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', maxWidth: '820px', margin: '0 auto 2.5rem' }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#ECAC60', letterSpacing: '0.03em', textTransform: 'uppercase' }}>TL;DR</p>
        <p style={{ margin: '0.5rem 0 0', fontSize: '0.97rem', lineHeight: 1.7, color: '#333' }}>
          Energy company payroll has to get per diem tax treatment, multi-state field crew registrations, certified payroll on government contracts, and shift or hazard pay right at the same time. BEG manages all of it at $25-$45 PEPM, all-inclusive, live in 3-5 business days with no migration required.
        </p>
      </div>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Energy Payroll Is Different</p>
            <h2>What makes energy company payroll harder than standard multi-state payroll?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px' }}>
              Field crews that move between states and sites create per diem tax questions, registration complexity, and prevailing wage requirements that most payroll vendors are not built to track.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Per diem risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Per diem paid without an accountable plan becomes taxable wages, not a reimbursement</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Per diem and field or remote-site pay is only excludable from an employee&apos;s taxable wages if it is paid under an <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS accountable plan</a>, meaning the expense has a business connection, is substantiated, and any excess is returned to the employer. Flat per diem paid regardless of actual travel status, or without the substantiation and excess-return requirements met, is treated as supplemental wages subject to income and employment tax withholding.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Registration sprawl</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Field crews working across state lines create heavy multi-state tax registration and reciprocity questions</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Energy field operations regularly send crews across state lines, and sometimes across borders, for project-based work. Every state a crew works in can trigger withholding tax registration, state unemployment insurance registration, and new hire reporting obligations, and states without reciprocity agreements can create dual withholding exposure for the same wages if it is not configured correctly.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Certified payroll</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Government-funded energy infrastructure contracts trigger prevailing wage and certified payroll reporting</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Energy infrastructure work performed on federally funded contracts is subject to the <a href="https://www.dol.gov/agencies/whd/government-contracts/construction" target="_blank" rel="noopener noreferrer">Davis-Bacon Act's prevailing wage requirements</a>, which require paying the locally determined prevailing wage and submitting certified payroll reports (Form WH-347 or equivalent) weekly for every worker on the project. Missing a certified payroll submission or misclassifying a worker's craft designation can hold up contract payment or trigger a DOL investigation.</div>
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
            <h2>Every crew and role, paid correctly every cycle</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Field and remote-site crews', body: 'Per diem configured under IRS accountable plan rules, multi-state and multi-country registrations, and correct tax treatment for crews rotating across job sites.' },
              { title: 'Plant and facility staff', body: 'Shift differential pay, hazard pay, and rotating-shift schedules calculated and included in the regular rate for accurate overtime.' },
              { title: 'Government contract crews', body: 'Davis-Bacon prevailing wage rates applied by craft classification, with weekly certified payroll reports prepared and filed on schedule.' },
              { title: 'Corporate and administrative staff', body: 'Standard multi-state payroll for office and administrative teams, consolidated with field payroll under one managed engagement.' },
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
            <h2>Three steps to fully managed energy company payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your field crew footprint, per diem practices, government contract exposure, and shift pay structures. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure accountable-plan per diem, multi-state registrations, certified payroll reporting where required, and shift differential calculations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every certified payroll report, and every year-end W-2, fully managed by BEG. Your project managers touch nothing.' },
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

      {/* WHAT BEG HANDLES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What BEG Handles</p>
            <h2>Everything energy company payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Per diem and field pay under IRS accountable plan rules</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG structures per diem and field-site pay to meet the <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS accountable plan requirements</a>: a documented business connection to actual travel, adequate substantiation, and return of any excess advance. Per diem that meets these requirements stays excludable from taxable wages. We configure the tracking and documentation so your field per diem is defensible if the IRS ever asks.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state and multi-country field crew tax registration</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG manages the state withholding, state unemployment insurance, and new hire reporting registrations triggered every time a crew works a project in a new state, and applies reciprocity agreements correctly to avoid dual withholding on the same wages. For crews with cross-border work, we scope the applicable tax treaty and payroll structure before the assignment begins.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Davis-Bacon prevailing wage and certified payroll reporting</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>For projects covered by the <a href="https://www.dol.gov/agencies/whd/government-contracts/construction" target="_blank" rel="noopener noreferrer">Davis-Bacon Act</a>, BEG applies the correct prevailing wage rate by craft classification and locality, and prepares and files the weekly certified payroll report required to keep contract payments moving. We track fringe benefit credit calculations and classification changes as workers move between tasks on the same project.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Shift differential and hazard pay calculations</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Field and plant staff working night shifts, rotating schedules, or hazardous-condition assignments often earn shift differentials or hazard pay on top of base wages. BEG folds these non-discretionary premiums into the regular rate for overtime purposes for non-exempt staff, so overtime pay reflects the full compensation the employee actually earned that period, not just base hourly pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer energy companies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Our project accounting is tied into our current payroll setup."',
                body: 'BEG does not require you to change platforms. We operate as your managed payroll team inside your current system. If you want to move to isolved for a platform that handles multi-state field crews and certified payroll natively, we can manage that transition -- but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Every state registration and certified payroll report used to be a separate line-item charge."',
                body: 'The $25-$45 PEPM rate covers everything: per diem administration, multi-state registrations, certified payroll reporting, shift and hazard pay calculations, state filings, and year-end W-2s. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands field crew payroll.',
                objection: 'Common objection: "We call our payroll company and they have no idea what certified payroll is."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center that has to look up Davis-Bacon requirements. When a crew moves to a new state, when a contract requires certified payroll, or when per diem needs to be reviewed, one message to your BEG contact gets it explained and handled.',
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
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Getting Started</p>
            <h2>From scope review to compliant energy payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your field crew footprint, per diem practices, and government contract exposure, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, per diem policy and contract documentation reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Accountable-plan per diem, multi-state registrations, and certified payroll reporting configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed energy payroll run, including any certified payroll submission due that cycle.' },
            ].map(({ day, title, body }) => (
              <div key={day} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Per diem paid outside an accountable plan is a payroll tax liability, discovered all at once.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>When per diem does not meet accountable plan requirements, the IRS treats it as supplemental taxable wages retroactively for the period in question, which means back employment taxes, penalties, and interest on every affected payment once discovered. Getting the accountable plan documentation right from the first per diem payment costs nothing extra and eliminates that exposure entirely.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix multi-state field crew payroll is before the next project mobilizes.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30-60 days. Energy companies that get per diem, registrations, and certified payroll reporting right before the next project starts avoid carrying compliance gaps into new states and new contracts.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" industry="energy" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your field crew footprint, per diem practices, and contract requirements, and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from energy companies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How do you keep per diem non-taxable?</h3>
              <p>We structure per diem under IRS accountable plan rules: a documented business connection to actual travel status, substantiation of the expense, and return of any excess advance. Per diem meeting these requirements stays excludable from taxable wages. Flat per diem paid without these elements is treated as taxable supplemental wages.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle payroll for crews working in multiple states on the same project?</h3>
              <p>We register for state withholding, state unemployment insurance, and new hire reporting in every state a crew works, and apply reciprocity agreements correctly to avoid dual withholding on the same wages. For crews with cross-border assignments, we scope the applicable tax treatment before mobilization.</p>
            </div>
            <div className="faq-item">
              <h3>Do you handle certified payroll for Davis-Bacon contracts?</h3>
              <p>Yes. We apply the correct prevailing wage rate by craft classification and locality on covered federal contracts, and prepare and file the weekly certified payroll report required to keep contract payments on schedule.</p>
            </div>
            <div className="faq-item">
              <h3>How is shift differential or hazard pay factored into overtime?</h3>
              <p>Non-discretionary shift differentials and hazard pay are included in the regular rate of pay before calculating overtime for non-exempt employees, per federal wage and hour rules. We configure this so overtime reflects full compensation earned, not just base hourly pay.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: per diem administration, multi-state registrations, certified payroll reporting, shift and hazard pay calculations, state filings, year-end W-2s, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed energy company payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure per diem, multi-state registrations, and certified payroll reporting in your existing system. If a certified payroll submission is due during onboarding, we prioritize that configuration first.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/energy/per-diem-accountable-plan-payroll" style={{ color: '#ECAC60' }}>Per Diem and Payroll: How to Keep Field Pay Non-Taxable Under IRS Rules</Link></li>
            <li><Link href="/blog/payroll/energy/certified-payroll-davis-bacon-guide" style={{ color: '#ECAC60' }}>Certified Payroll for Energy Contracts: Davis-Bacon, Explained</Link></li>
            <li><Link href="/blog/payroll/energy/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Energy Companies</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different field workforce? See{' '}
            <Link href="/services/managed-payroll/construction" style={{ color: '#ECAC60', fontWeight: '600' }}>construction payroll</Link>
            {' '}or{' '}
            <Link href="/services/managed-payroll/trucking" style={{ color: '#ECAC60', fontWeight: '600' }}>trucking and transportation payroll</Link>
            , or{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              see all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'How do you keep per diem non-taxable?', acceptedAnswer: { '@type': 'Answer', text: 'We structure per diem under IRS accountable plan rules: business connection, substantiation, and return of excess advances. Per diem meeting these requirements stays excludable from taxable wages.' } },
        { '@type': 'Question', name: 'How do you handle payroll for crews working in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'We register for withholding, SUI, and new hire reporting in every state worked, and apply reciprocity agreements to avoid dual withholding.' } },
        { '@type': 'Question', name: 'Do you handle certified payroll for Davis-Bacon contracts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We apply correct prevailing wage rates by craft classification and file the required weekly certified payroll reports.' } },
        { '@type': 'Question', name: 'How is shift differential or hazard pay factored into overtime?', acceptedAnswer: { '@type': 'Answer', text: 'Non-discretionary premiums are included in the regular rate before calculating overtime for non-exempt employees.' } },
        { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
        { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
        { '@type': 'ListItem', position: 3, name: 'Energy', item: 'https://www.beghr.com/services/managed-payroll/energy' },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] }, url: 'https://www.beghr.com/services/managed-payroll/energy' }) }} />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Per Diem and Payroll: How to Keep Field Pay Non-Taxable Under IRS Rules',
            excerpt: 'Accountable plan rules for per diem, what disqualifies a plan, and how to structure field-site pay so it stays excludable from taxable wages.',
            href: '/blog/payroll/energy/per-diem-accountable-plan-payroll',
          },
          {
            category: 'Payroll compliance',
            title: 'Certified Payroll for Energy Contracts: Davis-Bacon, Explained',
            excerpt: 'Prevailing wage rates, craft classifications, and the weekly certified payroll report required on federally funded energy infrastructure work.',
            href: '/blog/payroll/energy/certified-payroll-davis-bacon-guide',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Energy Companies',
            excerpt: 'What energy companies spend managing multi-state field crew payroll in-house versus a fully managed service that handles per diem and certified payroll.',
            href: '/blog/payroll/energy/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
