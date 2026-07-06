import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hospitality Payroll Services | Instant Quote | BEG',
  description: 'Hotel and lodging payroll fully managed at $25-$45 PEPM. Tip credit compliance, multi-property consolidation, and service charge distribution handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/hospitality' },
  openGraph: {
    title: 'Hospitality Payroll Services | Instant Quote | BEG',
    description: 'Hotel and lodging payroll fully managed at $25-$45 PEPM. Tip credit compliance, multi-property consolidation, and service charge distribution handled.',
    url: 'https://www.beghr.com/services/managed-payroll/hospitality',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality Payroll Services | Instant Quote | BEG',
    description: 'Hotel and lodging payroll fully managed at $25-$45 PEPM. Tip credit compliance, multi-property consolidation, and service charge distribution handled.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('hospitality-payroll');

export default function PayrollHospitalityPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/hotel.svg"
      imageAlt="Hotel and lodging property with fully managed payroll"
      showHeroImage={true}
      eyebrow="Managed Payroll · Hotels & Lodging"
      title="Hotel payroll runs on tip credits, seasonal turnover, and service charges. We built ours around it."
      description="Tip credit and tip pooling compliance for front desk, housekeeping, and valet staff, multi-property consolidation for hotel groups, high new-hire volume from seasonal turnover, and the service charge vs. tip distinction that trips up most payroll vendors, all handled correctly. BEG manages it at $25-$45 per employee per month, all-inclusive. No migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" industry="hospitality" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'Multi-property', label: 'Hotel group payroll consolidated' },
        { value: '3-5 Days', label: 'To live managed payroll' },
      ]}
    >

      <div className="tldr" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', maxWidth: '820px', margin: '0 auto 2.5rem' }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#ECAC60', letterSpacing: '0.03em', textTransform: 'uppercase' }}>TL;DR</p>
        <p style={{ margin: '0.5rem 0 0', fontSize: '0.97rem', lineHeight: 1.7, color: '#333' }}>
          Hotel and lodging payroll has to get tip credit compliance, multi-property consolidation, seasonal new-hire volume, and the service charge vs. tip distinction right at the same time. BEG manages all of it at $25-$45 PEPM, all-inclusive, live in 3-5 business days with no migration required.
        </p>
      </div>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Hotel Payroll Is Different</p>
            <h2>What makes hotel and lodging payroll harder than standard hourly payroll?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px' }}>
              Tip credit rules, seasonal staffing swings, and the legal difference between a tip and a service charge create compliance traps that most payroll vendors do not catch.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Tip credit</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Tip credit and tip pooling rules for front desk, housekeeping, and valet staff differ by role and by state</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Under the <a href="https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" target="_blank" rel="noopener noreferrer">FLSA tipped-employee rules the Department of Labor enforces</a>, an employer may only take a tip credit toward minimum wage for employees who customarily and regularly receive tips, and only if strict notice and recordkeeping requirements are met. Housekeeping and valet staff often qualify differently than front desk, and several states prohibit tip credits entirely. Applying one tip credit configuration hotel-wide creates violations at the roles or states where it does not apply.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-property sprawl</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Hotel groups need consolidated payroll across properties that often sit under separate ownership entities</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Hotel groups and management companies frequently operate each property under its own ownership or franchise entity, sometimes with different brand standards and state locations, while managing labor centrally. Payroll has to reflect the correct entity, state registration, and local wage rules per property while giving ownership one consolidated view of labor cost across the portfolio.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Service charge trap</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Service charges are not tips under DOL guidance, and treating them as tips is one of the most common hotel payroll errors</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Mandatory service charges added to a bill, common for banquets, room service, and resort fees, are <a href="https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" target="_blank" rel="noopener noreferrer">not tips under Department of Labor guidance</a> because the customer has no discretion over the amount. Service charges are the employer's revenue, cannot be counted toward a tip credit, and any portion distributed to staff must be treated and taxed as regular wages, not tip income. Hotels that run service charge distributions through their tip pool misclassify the pay and misapply the tip credit at the same time.</div>
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
            <h2>Every role on property, paid correctly every cycle</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Front desk and guest services', body: 'Tip credit eligibility assessed correctly by role and state, with proper notice and recordkeeping maintained for every tipped employee.' },
              { title: 'Housekeeping and valet staff', body: 'Tip pooling arrangements structured to meet FLSA requirements, with the correct cash wage floor applied wherever a tip credit is not permitted.' },
              { title: 'Banquet and event staff', body: 'Service charge distributions processed as regular taxable wages, kept separate from tip pools, and never counted toward a tip credit.' },
              { title: 'Multi-property management staff', body: 'Consolidated payroll across every property in your portfolio, with entity-level separation and property-level reporting for ownership.' },
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
            <h2>Three steps to fully managed hotel and lodging payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your property footprint, tip credit rules by role and state, service charge policies, and seasonal staffing patterns. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure role- and state-specific tip credit rules, service charge processing separate from tip pools, multi-property entity setup, and new-hire onboarding workflows. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every new-hire report, and every year-end W-2, fully managed by BEG. Your general managers touch nothing.' },
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
            <h2>Everything hotel and lodging payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tip credit and tip pooling compliance under FLSA</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG assesses tip credit eligibility separately for front desk, housekeeping, and valet roles, applies the correct cash wage floor in every state (including states that prohibit tip credits entirely), and maintains the notice and recordkeeping documentation the <a href="https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" target="_blank" rel="noopener noreferrer">Department of Labor requires</a> for any tip credit taken. Tip pooling arrangements are structured to include only eligible employees under current FLSA guidance.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-property payroll consolidation for hotel groups</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Hotel groups frequently operate each property under its own ownership or franchise entity while managing labor as one portfolio. BEG maintains entity-level separation, correct EINs, and state and local wage registrations per property while giving ownership one consolidated payroll view and one flat monthly rate across the entire group.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>High-volume new-hire reporting for seasonal and high-turnover staffing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Seasonal properties and hotels with high frontline turnover generate a steady stream of new hires that each trigger a state new-hire reporting obligation, generally due within 20 days of hire in most states. BEG manages new-hire reporting for every hire across every property, so seasonal ramp-up never creates a compliance backlog for your HR team.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Service charge vs. tip distinction, handled correctly</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Mandatory service charges on banquets, room service, and resort fees are the property's revenue, not tips, under <a href="https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" target="_blank" rel="noopener noreferrer">DOL guidance</a>, and cannot be counted toward a tip credit. BEG processes any portion of a service charge distributed to staff as regular taxable wages, kept entirely separate from tip pools and tip credit calculations, so your property never blends the two and creates a compliance gap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer hotels and lodging groups</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Our property management system is already tied into our current payroll setup."',
                body: 'BEG does not require you to change platforms. We operate as your managed payroll team inside your current system. If you want to move to isolved for a platform that handles tip credits and multi-property structures natively, we can manage that transition -- but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Every property and every seasonal hiring wave used to cost us more."',
                body: 'The $25-$45 PEPM rate covers everything: tip credit configuration, service charge processing, multi-property consolidation, new-hire reporting at any volume, state filings, and year-end W-2s. One number, every property, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands hotel payroll.',
                objection: 'Common objection: "We call our payroll company and they think a service charge is the same thing as a tip."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center that has to look up tip credit rules. When a property opens, when a service charge policy changes, or when a state changes its tip credit law, one message to your BEG contact gets it explained and handled.',
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
            <h2>From scope review to compliant hotel payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your property footprint, tip credit and service charge policies, and seasonal staffing patterns, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, tip pooling and service charge policies reviewed for FLSA compliance.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Role- and state-specific tip credit rules, service charge processing, and multi-property entity structure configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed hotel payroll run across every property. BEG executes, you approve, we handle everything else.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Running service charges through your tip pool creates back-wage exposure at every property doing it.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>When a hotel counts service charge distributions toward its tip credit, or fails to withhold employment taxes on service charge payouts the way it should on regular wages, the exposure accumulates every pay period at every property running that policy. A DOL wage and hour investigation looks back years, not weeks. Getting the distinction right now costs far less than the correction later.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to consolidate multi-property payroll is before your next seasonal ramp-up.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30-60 days. Hotel groups that consolidate payroll before peak season avoid carrying the wrong tip credit configuration or a new-hire reporting backlog into their busiest months.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" industry="hospitality" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your property footprint, tip credit policies, and seasonal staffing needs, and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from hotels and lodging groups</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Is a service charge the same as a tip?</h3>
              <p>No. A mandatory service charge is the property's revenue because the guest has no discretion over the amount, while a tip is a voluntary payment the guest chooses to give. Service charges cannot be counted toward a tip credit, and any portion paid to staff must be processed and taxed as regular wages, not tip income, per Department of Labor guidance.</p>
            </div>
            <div className="faq-item">
              <h3>Can we take a tip credit for housekeeping and valet staff?</h3>
              <p>It depends on whether the role customarily and regularly receives tips and whether your state permits tip credits at all. We assess eligibility separately by role and by state, apply the correct cash wage floor, and maintain the notice and recordkeeping documentation required for any tip credit taken.</p>
            </div>
            <div className="faq-item">
              <h3>How do you manage payroll across multiple properties under different ownership entities?</h3>
              <p>We maintain entity-level separation, correct EINs, and state and local wage registrations for each property while giving ownership one consolidated payroll view and one flat monthly rate across the entire group.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle new-hire reporting during seasonal ramp-up?</h3>
              <p>We manage new-hire reporting for every hire across every property, generally required within 20 days of hire in most states, so a seasonal hiring surge never creates a compliance backlog for your HR team.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our property management or payroll system?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration to isolved is an option if you want a platform built for tip credits and multi-property structures, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: tip credit configuration, service charge processing, multi-property consolidation, new-hire reporting, state filings, year-end W-2s, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed hotel payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure tip credit rules, service charge processing, and multi-property entity structure in your existing system. If you are onboarding ahead of peak season, we prioritize new-hire reporting workflows first.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/hospitality/service-charge-vs-tip-payroll" style={{ color: '#ECAC60' }}>Service Charge vs. Tip: The Payroll Distinction Hotels Get Wrong</Link></li>
            <li><Link href="/blog/payroll/hospitality/hotel-tip-credit-compliance-guide" style={{ color: '#ECAC60' }}>Tip Credit Compliance for Hotels: Front Desk, Housekeeping, and Valet</Link></li>
            <li><Link href="/blog/payroll/hospitality/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Hotel Groups</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Running restaurants alongside your properties? See{' '}
            <Link href="/services/managed-payroll/multi-unit-restaurant" style={{ color: '#ECAC60', fontWeight: '600' }}>multi-location restaurant payroll</Link>
            , or{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              see all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'Is a service charge the same as a tip?', acceptedAnswer: { '@type': 'Answer', text: 'No. A mandatory service charge is the property\'s revenue and cannot count toward a tip credit. Any portion paid to staff is processed as regular taxable wages, not tip income.' } },
        { '@type': 'Question', name: 'Can we take a tip credit for housekeeping and valet staff?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the role and the state. We assess eligibility separately and apply the correct cash wage floor with required notice and recordkeeping.' } },
        { '@type': 'Question', name: 'How do you manage payroll across multiple properties under different ownership entities?', acceptedAnswer: { '@type': 'Answer', text: 'We maintain entity-level separation and correct registrations per property while giving ownership one consolidated payroll view and flat monthly rate.' } },
        { '@type': 'Question', name: 'How do you handle new-hire reporting during seasonal ramp-up?', acceptedAnswer: { '@type': 'Answer', text: 'We manage new-hire reporting for every hire across every property so a seasonal surge never creates a compliance backlog.' } },
        { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
        { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
        { '@type': 'ListItem', position: 3, name: 'Hospitality', item: 'https://www.beghr.com/services/managed-payroll/hospitality' },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] }, url: 'https://www.beghr.com/services/managed-payroll/hospitality' }) }} />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Service Charge vs. Tip: The Payroll Distinction Hotels Get Wrong',
            excerpt: 'Why mandatory service charges are not tips under DOL guidance, and how misclassifying them creates tax and tip-credit exposure.',
            href: '/blog/payroll/hospitality/service-charge-vs-tip-payroll',
          },
          {
            category: 'Payroll compliance',
            title: 'Tip Credit Compliance for Hotels: Front Desk, Housekeeping, and Valet',
            excerpt: 'How tip credit eligibility differs by role and by state, and what documentation hotels need to defend a tip credit taken.',
            href: '/blog/payroll/hospitality/hotel-tip-credit-compliance-guide',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Hotel Groups',
            excerpt: 'What multi-property hotel groups spend managing payroll in-house versus a fully managed service built around tip credit and service charge compliance.',
            href: '/blog/payroll/hospitality/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
