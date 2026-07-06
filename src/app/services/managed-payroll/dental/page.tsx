import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Dental Practice Payroll Services | Instant Quote | BEG',
  description: 'Dental and DSO payroll fully managed at $25-$45 PEPM. Associate production pay, multi-location consolidation, and hygienist overtime handled correctly.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/dental' },
  openGraph: {
    title: 'Dental Practice Payroll Services | Instant Quote | BEG',
    description: 'Dental and DSO payroll fully managed at $25-$45 PEPM. Associate production pay, multi-location consolidation, and hygienist overtime handled correctly.',
    url: 'https://www.beghr.com/services/managed-payroll/dental',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Practice Payroll Services | Instant Quote | BEG',
    description: 'Dental and DSO payroll fully managed at $25-$45 PEPM. Associate production pay, multi-location consolidation, and hygienist overtime handled correctly.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('dental-payroll');

export default function PayrollDentalPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/dental.svg"
      imageAlt="Dental practice and DSO with fully managed payroll"
      showHeroImage={true}
      eyebrow="Managed Payroll · Dental Practices & DSOs"
      title="Dental payroll has pay structures most payroll vendors get wrong. We built ours around them."
      description="Associate dentist production pay, multi-location DSO consolidation, hygienist overtime across offices, and front-desk incentive pay -- all handled correctly, every cycle. BEG manages it at $25-$45 per employee per month, all-inclusive. No migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" industry="dental" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'Multi-location', label: 'DSO payroll consolidated' },
        { value: '3-5 Days', label: 'To live managed payroll' },
      ]}
    >

      <div className="tldr" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', maxWidth: '820px', margin: '0 auto 2.5rem' }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#ECAC60', letterSpacing: '0.03em', textTransform: 'uppercase' }}>TL;DR</p>
        <p style={{ margin: '0.5rem 0 0', fontSize: '0.97rem', lineHeight: 1.7, color: '#333' }}>
          Dental practice payroll gets complicated fast: associate production pay creates non-standard overtime math for non-exempt staff, DSOs need consolidated payroll across locations under different entities, and hygienist schedules vary week to week. BEG manages all of it at $25-$45 PEPM, all-inclusive, live in 3-5 business days with no migration required.
        </p>
      </div>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Dental Payroll Is Different</p>
            <h2>What makes dental practice payroll harder than standard small business payroll?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px' }}>
              Production-based associate pay, multi-location DSO structures, and variable hygienist schedules create overtime and consolidation problems that generic payroll software is not built to catch.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Regular rate</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Associate production pay complicates overtime math for any non-exempt staff paid on a similar basis</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Percentage-of-production compensation is standard for associate dentists, and many practices extend production or collection bonuses to hygienists and assistants. Under the Fair Labor Standards Act, any non-discretionary production bonus paid to a non-exempt employee must be included in that employee&apos;s regular rate of pay before calculating overtime for the period, per the <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor&apos;s overtime guidance</a>. Flat time-and-a-half on base hourly pay alone, ignoring the bonus, underpays overtime and creates back-wage exposure.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>DSO consolidation</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Multi-location dental service organizations need one payroll function across several legal entities</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>DSOs frequently operate each practice location under its own PLLC or professional entity while running one management and support structure across all of them. Payroll has to reflect the correct entity, state registration, and local tax setup for every location while still giving ownership one consolidated view of labor cost across the group. Most standard payroll software cannot do both at once.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Variable schedules</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Hygienists and assistants floating between offices create overtime calculation gaps</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Hygienists and dental assistants commonly split time across two or more locations within the same DSO or group practice in a single workweek. Overtime is calculated on total hours worked for the same employer across all locations in that workweek, not per location. A practice tracking hours separately by office will miscalculate overtime for any staff member who worked at more than one site.</div>
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
            <h2>Every role on your team, paid correctly every cycle</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Associate and owner dentists', body: 'Percentage-of-production and collections-based compensation, guaranteed base plus production draws, and true-up reconciliation handled with correct tax treatment each pay period.' },
              { title: 'Hygienists and dental assistants', body: 'Hourly and production-adjacent pay, overtime calculated correctly across multiple locations in the same workweek, and shift variability tracked accurately.' },
              { title: 'Front-desk and treatment coordinators', body: 'Base pay plus case-acceptance or collections incentive pay processed with correct regular-rate treatment for overtime purposes.' },
              { title: 'Multi-location DSO staff', body: 'Consolidated payroll across every practice entity in your group, with location-level reporting for ownership and correct state registrations per site.' },
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
            <h2>Three steps to fully managed dental practice payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your associate compensation structures, DSO entity structure, location footprint, and front-desk incentive plans. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure production-based associate pay, regular-rate overtime calculations for non-exempt staff, multi-location entity setup, and state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every location-level report, and every year-end W-2, fully managed by BEG. Your office managers touch nothing.' },
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
            <h2>Everything dental and DSO payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Associate dentist production pay and overtime compliance</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most associate dentists are properly classified exempt, but any non-exempt clinical staff member paid a production or collections bonus on top of hourly wages needs that bonus folded into their regular rate before overtime is calculated for the period, under the FLSA rules the <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">Department of Labor administers</a>. BEG configures the regular-rate calculation correctly for every production-adjacent pay structure in your practice so overtime is never underpaid.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-location DSO payroll consolidation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Dental service organizations frequently run each location as its own legal entity for licensing and liability reasons while managing the group as one business operationally. BEG maintains entity-level separation, correct EINs, and state registrations per location while giving ownership one consolidated payroll view and one flat monthly rate across every site in the group.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Hygienist and assistant scheduling across multiple offices</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a hygienist or assistant works at more than one location within your group in the same workweek, all hours worked for the same employer count toward the 40-hour overtime threshold, not hours at each location separately. BEG tracks hours across every location under common ownership and calculates overtime on the combined total, so no location undercounts a shared employee&apos;s hours.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Front-desk and treatment coordinator incentive pay</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Case-acceptance bonuses and collections incentives for front-desk and treatment coordinator staff are non-discretionary bonuses under FLSA, not gratuities, and must be included in the regular rate for overtime purposes for any non-exempt employee receiving them. BEG configures this correctly rather than treating incentive pay as a flat add-on outside the overtime calculation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer dental practices</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We just got our practice management and payroll set up the way we like it."',
                body: 'BEG does not require you to change platforms. We operate as your managed payroll team inside your current system. If you want to move to isolved for a more capable platform built for production-based pay and multi-location structures, we can manage that transition -- but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Our last payroll company charged extra for every location and every off-cycle run."',
                body: 'The $25-$45 PEPM rate covers everything: production-based pay processing, regular-rate overtime calculations, multi-location consolidation, state filings, year-end W-2s, and BEG support. One number, every location, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands production pay.',
                objection: 'Common objection: "We call our payroll company and they have never heard of a production-based associate agreement."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center that has to look up what a hygiene production bonus is. When your DSO adds a location, when an associate agreement changes, or when overtime looks wrong on a shared employee, one message to your BEG contact gets it explained and handled.',
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
            <h2>From scope review to compliant dental payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your associate compensation structures, DSO entity structure, and location footprint, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, associate agreements and incentive plans reviewed for correct regular-rate treatment.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Production-based pay setup, regular-rate overtime calculations, and multi-location entity structure configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed dental payroll run across every location. BEG executes, you approve, we handle everything else.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Miscalculated overtime on production pay compounds every pay period until an audit or complaint surfaces it.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A hygienist earning a $200 monthly production bonus who works overtime in that period is owed extra overtime pay based on a regular rate that includes the bonus, not just base hourly pay. Left uncorrected across a multi-location DSO with dozens of hygienists and assistants over multiple years, that gap becomes a real back-wage liability. Getting the regular-rate calculation right now costs far less than fixing it after a DOL complaint.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to consolidate DSO payroll is before you open the next location.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30-60 days. Practices and DSOs that consolidate payroll before adding a location avoid carrying the wrong entity setup or overtime configuration into the new site. Starting the scope review now means clean, compliant payroll before your next office opens.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" industry="dental" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your associate compensation structures, location footprint, and incentive pay, and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from dental practices and DSOs</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How do you handle payroll for associate dentists paid on production?</h3>
              <p>We process guaranteed base plus production or collections draws, reconcile true-ups on the schedule your associate agreement specifies, and apply correct tax treatment each pay period. If any non-exempt staff also receive production-adjacent bonuses, we fold those into the regular rate before calculating overtime, as required under FLSA.</p>
            </div>
            <div className="faq-item">
              <h3>Can you manage payroll across all our DSO locations from one account?</h3>
              <p>Yes. We maintain entity-level separation for licensing and liability purposes at each location, including the correct EIN and state registrations, while giving ownership one consolidated payroll view and one flat monthly rate across the entire group.</p>
            </div>
            <div className="faq-item">
              <h3>How is overtime calculated for a hygienist who works at two of our offices in the same week?</h3>
              <p>Hours worked for the same employer at any location count toward the 40-hour weekly overtime threshold, not hours at each office separately. We track combined hours across every location under common ownership and calculate overtime on the total.</p>
            </div>
            <div className="faq-item">
              <h3>Does front-desk incentive pay affect overtime calculations?</h3>
              <p>It can. Non-discretionary case-acceptance or collections bonuses paid to non-exempt front-desk staff must be included in the regular rate used to calculate overtime for that pay period. We configure this correctly rather than treating incentive pay as separate from the overtime calculation.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change practice management or payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration to isolved is an option if you want a platform built for production-based pay, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: production-based pay processing, regular-rate overtime calculations, multi-location consolidation, state filings, year-end W-2s, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed dental payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure associate production pay, regular-rate overtime, and multi-location entity structure in your existing system. If you are a DSO adding a new location, we also handle the new site&apos;s state registration during onboarding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/dental/associate-dentist-production-pay-overtime" style={{ color: '#ECAC60' }}>Associate Dentist Production Pay and the FLSA Regular Rate: What DSOs Get Wrong</Link></li>
            <li><Link href="/blog/payroll/dental/dso-multi-location-payroll-consolidation" style={{ color: '#ECAC60' }}>DSO Payroll Consolidation: Managing Multiple Entities Under One Payroll Function</Link></li>
            <li><Link href="/blog/payroll/dental/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Dental Practices</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different type of practice? See{' '}
            <Link href="/services/managed-payroll/veterinary" style={{ color: '#ECAC60', fontWeight: '600' }}>veterinary practice payroll</Link>
            {' '}or{' '}
            <Link href="/services/managed-payroll/healthcare" style={{ color: '#ECAC60', fontWeight: '600' }}>healthcare payroll</Link>
            , or{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              see all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'How do you handle payroll for associate dentists paid on production?', acceptedAnswer: { '@type': 'Answer', text: 'We process guaranteed base plus production draws, reconcile true-ups per the associate agreement, and fold any production-adjacent bonuses paid to non-exempt staff into the regular rate before calculating overtime.' } },
        { '@type': 'Question', name: 'Can you manage payroll across all our DSO locations from one account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We maintain entity-level separation and correct state registrations per location while giving ownership one consolidated payroll view and one flat monthly rate.' } },
        { '@type': 'Question', name: 'How is overtime calculated for a hygienist working at two offices in the same week?', acceptedAnswer: { '@type': 'Answer', text: 'Hours worked for the same employer at any location count toward the 40-hour weekly threshold. We track combined hours across all locations and calculate overtime on the total.' } },
        { '@type': 'Question', name: 'Does front-desk incentive pay affect overtime calculations?', acceptedAnswer: { '@type': 'Answer', text: 'Non-discretionary incentive pay to non-exempt staff must be included in the regular rate used to calculate overtime. We configure this correctly.' } },
        { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
        { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
        { '@type': 'ListItem', position: 3, name: 'Dental Practices & DSOs', item: 'https://www.beghr.com/services/managed-payroll/dental' },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] }, url: 'https://www.beghr.com/services/managed-payroll/dental' }) }} />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Associate Dentist Production Pay and the FLSA Regular Rate: What DSOs Get Wrong',
            excerpt: 'Production and collections bonuses paid to non-exempt staff must be folded into the regular rate before overtime is calculated. Here is how DSOs miss it.',
            href: '/blog/payroll/dental/associate-dentist-production-pay-overtime',
          },
          {
            category: 'Payroll outsourcing',
            title: 'DSO Payroll Consolidation: Managing Multiple Entities Under One Payroll Function',
            excerpt: 'How multi-location dental service organizations keep entity-level separation while giving ownership one consolidated payroll view.',
            href: '/blog/payroll/dental/dso-multi-location-payroll-consolidation',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Dental Practices',
            excerpt: 'What dental practices and DSOs actually spend managing payroll in-house versus a fully managed service built around production pay.',
            href: '/blog/payroll/dental/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
