import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Brewery & Distillery Payroll | Taproom Tips. Production Staff. | BEG',
  description: 'Brewery and distillery payroll fully managed at $25–$45 PEPM. Taproom tip credit, production overtime, sales rep commissions, and seasonal staff included.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/brewery' },
  openGraph: {
    title: 'Brewery & Distillery Payroll | Taproom Tips. Production Staff. | BEG',
    description: 'Brewery and distillery payroll fully managed at $25–$45 PEPM. Taproom tip credit, production overtime, sales rep commissions, and seasonal staff included.',
    url: 'https://beghr.com/services/managed-payroll/brewery',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Brewery & Distillery Payroll | Taproom Tips. Production Staff. | BEG', description: 'Brewery and distillery payroll fully managed at $25–$45 PEPM. Taproom tip credit, production overtime, sales rep commissions, and seasonal staff included.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('brewery-payroll');

export default function PayrollBreweryPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Brewery with fully managed payroll for taproom and production staff"
      eyebrow="Managed Payroll · Breweries & Distilleries"
      title="Brewery payroll covers two completely different workforces. We manage both."
      description="Taproom staff with tip credits and minimum wage reporting, production crew with shift and overtime pay, sales reps on commission, and seasonal taproom staffing spikes make brewery and distillery payroll one of the most structurally complex outside of healthcare. BEG manages all of it at $25–$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Tip credit handled', label: 'Taproom FLSA tip credit and minimum wage compliance managed' },
        { value: 'Production + sales', label: 'Three distinct workforce types, one managed payroll service' },
        { value: 'Seasonal spikes', label: 'Summer taproom ramp-up and holiday season staffing managed' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost a brewery or distillery?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Tip credit risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Taproom tip credit errors are one of the most litigated FLSA violations in the hospitality industry</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>To claim the FLSA tip credit, breweries must ensure taproom staff are notified of the credit, tips are properly reported, and total wages plus tips meet the full minimum wage threshold. When tip income is slow, the employer must make up the difference. Many craft producers do not calculate this consistently.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Three workforces</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Taproom, production, and sales each have entirely different pay structures that generic payroll platforms conflate</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Taproom staff are tipped employees paid at a reduced cash wage with tip credit. Production staff are hourly workers with overtime and shift pay. Sales reps may be on salary plus commission or a draw-against-commission structure. Managing all three correctly in the same payroll system requires configuration most brewery owners never complete.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Seasonal pressure</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Summer taproom season and holiday gift shop traffic spike staffing - and payroll complexity spikes with it</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Breweries add taproom staff in April and May for summer and reduce after Labor Day. Distilleries spike in November and December. Seasonal onboarding, ACA measurement tracking, and end-of-season termination processing fall on whoever is running payroll - usually a manager who has 12 other jobs during the busiest weeks of the year.</div>
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
            <h2>Three steps to fully managed brewery and distillery payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your three workforce types: taproom (tip credit), production (hourly + overtime), and sales (commission or salary). We review tip reporting procedures, seasonal staffing patterns, and state-specific tip credit rules. You get a fixed monthly cost.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure taproom tip credit calculations, production shift and overtime pay, sales rep commission structures, and seasonal onboarding processes. Your first payroll cycles run alongside your existing process for verification.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every tip true-up, every commission reconciliation, and every seasonal hire event - fully managed by BEG. Your taproom manager and production manager approve hours; we handle payroll.' },
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

      {/* WHAT BEG HANDLES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What BEG Handles</p>
            <h2>Brewery and distillery payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              'Taproom staff tip credit calculations with minimum wage true-up when tips fall short',
              'Tip reporting compliance: IRS Form 8027 support and tip income documentation',
              'Production staff hourly payroll with shift pay and overtime for long production runs',
              'Sales representative commission payroll including draw-against-commission structures',
              'Seasonal taproom staff onboarding and end-of-season termination processing',
              'ACA measurement period tracking for seasonal staff approaching benefit eligibility',
              'State-specific tip credit rules - some states do not allow the FLSA tip credit',
              'Year-end W-2 preparation for all workforce types including tip income reporting',
              'Year-end 1099-NEC for any properly classified independent contractor relationships',
              'Garnishment administration for taproom, production, and sales staff wages',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem 1rem', background: '#f9f9f9', borderRadius: '6px' }}>
                <span style={{ color: '#ECAC60', fontWeight: '800', fontSize: '1.1rem', lineHeight: 1, marginTop: '1px', flexShrink: 0 }}>&#10003;</span>
                <span style={{ fontSize: '0.93rem', color: '#333333', lineHeight: '1.55' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Side by Side</p>
            <h2>BEG Managed Payroll vs. In-House vs. Generic Software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '700' }}>Factor</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700', color: '#ECAC60' }}>BEG Managed</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House Hire</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center', fontWeight: '700' }}>Generic Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Taproom tip credit compliance', 'Fully managed', 'Requires specific expertise', 'Configured manually'],
                  ['Production overtime calculations', 'Included', 'Included', 'You verify it'],
                  ['Sales commission payroll', 'Included', 'Manual tracking often needed', 'You build it'],
                  ['State-specific tip credit rules', 'Auto-applied', 'Must track state changes', 'You update it'],
                  ['Seasonal staff ramp handling', 'Included', 'Stressful for one person', 'You manage it'],
                  ['Year-end W-2 with tip income', 'Included', 'Included', 'Extra fee'],
                  ['Monthly cost (30 employees)', '$750–$1,350', '$5,800–$8,300', '$350–$800 + risk'],
                ].map(([factor, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: '#222222' }}>{factor}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#000000', fontWeight: '600' }}>{beg}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#666666' }}>{inhouse}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#666666' }}>{software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Risk of Getting Tip Credit Wrong</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Taproom staff who are not paid correctly talk - and so do their attorneys.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>FLSA tip credit violations are one of the most common wage-and-hour claims in the hospitality and craft beverage industry. DOL back-wage investigations can recover two years of unpaid wages plus liquidated damages. BEG manages taproom tip credit payroll correctly from the first cycle so your exposure starts at zero.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The right time to transition is before summer taproom season - not in the middle of it.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Breweries that start the scope review in March arrive at summer season with a fully managed payroll system handling taproom, production, and sales staff simultaneously. Breweries that wait add payroll complexity to their busiest operational months.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your taproom, production, and sales staff, give you a fixed monthly cost, and show you what correct brewery payroll looks like. Pricing starts at $25 PEPM.</p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Explore More</p>
            <h2>More managed payroll resources</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { title: 'Managed Payroll Overview', href: '/services/managed-payroll', desc: 'How BEG fully managed payroll works for any industry.' },
              { title: 'Property Management Payroll', href: '/services/managed-payroll/property-management', desc: 'Resident manager housing allowances, leasing commission, and multi-property payroll.' },
              { title: 'Staffing Agency Payroll', href: '/services/managed-payroll/staffing-agency', desc: 'Weekly W-2 cycles, multi-state compliance, and worker classification for staffing agencies.' },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: 'block', padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', textDecoration: 'none' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#000000', marginBottom: '0.3rem' }}>{link.title}</strong>
                <span style={{ fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from breweries and distilleries</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does the FLSA tip credit work for taproom staff?</h3>
              <p>The FLSA tip credit allows employers to pay tipped employees a cash wage below the federal minimum wage - currently $2.13 per hour - as long as the employee's tips bring their total compensation to at least the full federal minimum wage of $7.25 per hour. If a taproom server's tips in a given workweek do not bring their hourly total to $7.25, the employer must make up the difference. BEG calculates this true-up automatically every pay cycle. Note that some states do not allow the tip credit at all - BEG applies the correct rule for your state.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle production staff overtime?</h3>
              <p>Production staff are hourly employees not eligible for the tip credit. BEG manages their base hourly pay, shift differentials if applicable, and overtime for weeks exceeding 40 hours under FLSA. For production runs that extend into unusual hours, BEG calculates overtime correctly including any shift premium that must be included in the regular rate for overtime purposes.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG manage sales rep commission payroll?</h3>
              <p>Yes. BEG handles sales representative payroll under common brewery sales structures: salary plus commission, commission-only, or draw-against-commission. For draw-against-commission structures, BEG tracks the draw balance, commission earned, and net payroll each period. When a rep goes negative on their draw, BEG applies the correct accounting treatment per the commission agreement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for a brewery or distillery?</h3>
              <p>Everything: payroll processing for taproom, production, and sales staff, tip credit calculations with minimum wage true-ups, tip income reporting, production overtime, commission payroll, seasonal staff onboarding and termination, year-end W-2 preparation, and dedicated BEG support. No per-run fees, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG handle states where the tip credit is not allowed?</h3>
              <p>Yes. Several states - including California, Minnesota, Alaska, and others - require employers to pay the full state minimum wage regardless of tips received. BEG applies the correct state rule for your taproom staff's location. Breweries with taprooms in multiple states get the correct state-specific treatment for each location automatically.</p>
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
              { '@type': 'Question', name: 'How does the FLSA tip credit work for taproom staff?', acceptedAnswer: { '@type': 'Answer', text: 'The FLSA tip credit allows paying tipped employees $2.13/hour cash wage if tips bring total compensation to at least $7.25/hour. BEG calculates the minimum wage true-up automatically and applies the correct state rule where tip credit is not allowed.' } },
              { '@type': 'Question', name: 'Can BEG manage sales rep commission payroll?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG handles salary plus commission, commission-only, and draw-against-commission structures including balance tracking and correct accounting treatment.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a brewery?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll for taproom, production, and sales staff, tip credit calculations, overtime, commission payroll, seasonal staff handling, year-end W-2s, and dedicated support. No per-run fees.' } },
              { '@type': 'Question', name: 'Does BEG handle states where the tip credit is not allowed?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG applies the correct state rule for each taproom location, including states like California and Minnesota that require full state minimum wage regardless of tips received.' } },
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Brewery', item: 'https://beghr.com/services/managed-payroll/brewery' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Brewery and Distillery Payroll Outsourcing: Taproom Tip Credit and Production Overtime (2026)',
            excerpt: 'How craft beverage producers manage taproom tip credit compliance, production staff overtime, and sales rep commission payroll without a dedicated in-house payroll specialist.',
            href: '/blog/payroll/brewery',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. Gusto for Breweries: Which Handles Tip Credit Correctly?',
            excerpt: 'Tip credit payroll requires more than a software platform. Here is what managed payroll provides for breweries that Gusto self-service does not.',
            href: '/blog/compare/managed-payroll-vs-gusto',
          },
        ]}
      />
    </ServicePage>
  );
}
