import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Event Company Payroll | Instant Quote | BEG',
  description: 'Event company payroll fully managed at $25-$45 PEPM. Rapid payroll cycles, W-2 vs 1099 classification, and multi-state compliance included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/events' },
  openGraph: {
    title: 'Event Company Payroll | Instant Quote | BEG',
    description: 'Event company payroll fully managed at $25-$45 PEPM. Rapid payroll cycles, W-2 vs 1099 classification, and multi-state compliance included.',
    url: 'https://www.beghr.com/services/managed-payroll/events',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Company Payroll | Instant Quote | BEG',
    description: 'Event company payroll fully managed at $25-$45 PEPM. Rapid payroll cycles, W-2 vs 1099 classification, and multi-state compliance included.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('events-payroll');

export default function PayrollEventsPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Event company with fully managed payroll"
      eyebrow="Managed Payroll · Events"
      title="Event payroll happens in bursts. Your vendor should be ready when it does."
      description="Seasonal crew spikes, rapid payroll cycles, W-2 vs. 1099 classification risk for temp workers, and multi-state compliance for touring and destination events. BEG manages all of it at $25-$45 per employee per month. Fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      showHeroImage={false}
      heroStats={[
        { value: 'Rapid cycles', label: 'Payroll processed on event timelines' },
        { value: 'W-2 + 1099', label: 'Classification risk managed' },
        { value: 'Multi-state', label: 'Event compliance handled' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house event company payroll actually cost your business?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>AB5 risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>California AB5 and other state worker classification laws make temp event crew misclassification expensive</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Event companies that regularly use the same temporary crew members for California events face AB5 scrutiny. Repeated 1099 engagements with the same workers can trigger employee reclassification with back taxes, penalties, and benefits owed.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>State regs</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Multi-state events create payroll tax registration and withholding obligations in every state where workers are paid</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Running events across multiple states requires state payroll tax registration and withholding for workers in each state. Unregistered operations result in penalties, interest, and back withholding obligations that stack up fast.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Cycle risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Same-day or next-day payroll demands for event staff create processing risk that standard payroll software is not designed to handle</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Event staff expect payment quickly after the event. Standard payroll runs on weekly or bi-weekly cycles that do not match event timelines. Late payments create turnover, disputes, and difficulty booking reliable crew for future events.</div>
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
            <h2>Three steps to fully managed event company payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your event calendar, crew types, classification structure, and states where you operate. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Configuration and setup', body: 'We configure rapid payroll cycles that match your event schedule, classification rules for temp vs. recurring crew, and multi-state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every event cycle, every 1099 filing, every state payroll tax remittance, and every year-end W-2 and 1099-NEC. Fully managed by BEG. Your production team touches nothing.' },
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
            <h2>Everything event company payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Rapid payroll cycles for event season</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Event staff (load crew, stagehands, AV technicians, catering staff, security, and production assistants) often expect payment within 24 to 72 hours after the event ends. Standard payroll platforms run on rigid weekly or bi-weekly cycles that do not accommodate event-based timelines. BEG configures payroll cycles that match your event schedule, processing payments quickly after events and maintaining the cash flow rhythm that keeps your crew available and motivated for future bookings.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>W-2 vs. 1099 classification for event workers</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The line between independent contractor and employee is especially contested in the event industry. Workers who regularly perform the same functions for the same company, work under the company's direction on-site, and do not operate their own business are likely employees under the IRS common-law test and most state tests. California's AB5 uses a stricter ABC test that presumes employment for most workers unless specific conditions are met. BEG reviews your crew classification structure and helps you identify recurring workers who should be moved to W-2 status before a state labor agency audit or federal IRS inquiry forces the reclassification at your expense.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>California AB5 and 1-day worker rule compliance</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>California's AB5 law significantly restricted the use of independent contractors in the event and entertainment industries. Event companies running California events must either classify crew members as employees or work through licensed labor contractors. California also has a 1-day pay rule requiring certain day laborers to be paid by the end of the workday under specific circumstances. BEG manages California payroll compliance for event companies operating in California, including AB5 worker status and pay timing rules that differ from standard payroll cycles.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state tax registration for nationwide events</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Event companies that run events in multiple states must register for payroll taxes in each state where they pay W-2 employees. For touring productions, destination events, or conference and convention companies that operate nationally, this means maintaining active registrations in dozens of states, remitting payroll taxes on time to each, and filing quarterly returns in each jurisdiction. BEG manages multi-state payroll tax registration, remittance, and quarterly filings across all states where your events create payroll obligations, so your production team can focus on the event and not the tax calendar.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Seasonal workforce scaling and off-season management</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Event companies experience dramatic headcount swings between busy season and off-season. Managing payroll for a workforce that expands from 10 core staff to 150 event workers during peak season and contracts back requires a payroll setup that handles rapid onboarding, offboarding, and the administrative volume that comes with seasonal W-2 production. BEG scales with your event calendar, managing the headcount swings that make seasonal event payroll the most administratively intensive payroll structure outside of agriculture and hospitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Comparison</p>
            <h2>BEG vs. in-house vs. software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontWeight: '700' }}>Capability</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>BEG Managed</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>Software Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rapid event-cycle payroll processing', '✓', 'Process bottleneck', 'Rigid cycle limits'],
                  ['W-2 vs. 1099 classification review', '✓', 'Compliance risk', '✗'],
                  ['California AB5 compliance', '✓', 'Expertise required', '✗'],
                  ['Multi-state event tax registration', '✓', 'Time-intensive', 'Self-service'],
                  ['Seasonal workforce scaling', '✓', 'Admin-heavy', 'Partial'],
                  ['Year-end W-2 + 1099-NEC production', '✓', 'Admin-heavy', 'Self-service'],
                  ['No migration required', '✓', 'N/A', 'Migration often required'],
                  ['Fixed all-inclusive monthly cost', '✓', '✗', '✗'],
                ].map(([feature, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#2a7a2a', fontWeight: '700' }}>{beg}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#666666' }}>{inhouse}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#666666' }}>{software}</td>
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
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>One AB5 reclassification in California costs more than years of properly managed payroll.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>California AB5 reclassification assessments include back payroll taxes, state unemployment insurance, penalties, and, in wage claim cases, back wages and attorney fees. Event companies that have been operating with misclassified crews in California are carrying a liability that grows with every event. Getting the classification right now is dramatically cheaper than correcting it after an audit.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to clean up your classification structure is before the next event season starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30-60 days. Cleaning up classification and getting your multi-state registrations right before your busiest season means you run peak season with clean payroll instead of catching up on compliance after the fact. Schedule a scope review and we will map exactly what needs to change.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about event company payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle rapid payroll cycles for event companies?</h3>
              <p>BEG configures payroll cycles that match your event schedule rather than forcing you into a standard weekly or bi-weekly rhythm. We process payments quickly after events, which keeps your crew paid on time and available for future bookings without your production team managing the payroll timeline manually.</p>
            </div>
            <div className="faq-item">
              <h3>What is the risk of classifying recurring event crew as 1099 contractors?</h3>
              <p>Workers who regularly perform the same functions for the same company under its direction are likely employees under IRS common-law rules. California AB5 uses a stricter ABC test. Misclassified workers trigger back payroll taxes, state unemployment insurance, penalties, and potential benefits owed going back multiple years. BEG helps you identify which workers should be W-2 employees before a state or federal audit does.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include for event companies?</h3>
              <p>Everything: payroll processing, classification review, multi-state tax filing, year-end W-2 and 1099-NEC production, and dedicated BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle payroll for events in many states simultaneously?</h3>
              <p>Yes. BEG manages payroll tax registration and remittance across all states where your events create W-2 payroll obligations. We track quarterly filings in each jurisdiction and handle new state registrations when your event calendar expands into a new state.</p>
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
              { '@type': 'Question', name: 'How does BEG handle rapid payroll cycles for event companies?', acceptedAnswer: { '@type': 'Answer', text: 'BEG configures payroll cycles that match your event schedule rather than a standard bi-weekly rhythm, processing payments quickly after events so crew are paid on time without your production team managing the timeline.' } },
              { '@type': 'Question', name: 'What is the risk of classifying recurring event crew as 1099 contractors?', acceptedAnswer: { '@type': 'Answer', text: 'Misclassified workers trigger back payroll taxes, state unemployment insurance, penalties, and potential back benefits. California AB5 uses a stricter ABC test. BEG helps identify workers who should be W-2 before an audit forces it.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, classification review, multi-state tax filing, year-end W-2 and 1099-NEC production, and dedicated support.' } },
              { '@type': 'Question', name: 'Can BEG handle payroll for events in many states simultaneously?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages registration and remittance in all states where events create W-2 payroll obligations, including new state registrations as your calendar expands.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Event Companies', item: 'https://www.beghr.com/services/managed-payroll/events' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'California AB5 for Event Companies: W-2 vs. 1099 Classification Guide (2026)',
            excerpt: 'How California AB5 applies to event crew, what the ABC test means for your staffing model, and what event companies must do to stay compliant.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Multi-State Payroll for Event Companies: Registration and Compliance Guide',
            excerpt: 'State payroll tax registration obligations for event companies operating across multiple states, and how managed payroll handles the compliance calendar.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House for Event Companies (2026)',
            excerpt: 'What event company owners spend running payroll in-house versus a fully managed service that handles rapid cycles, classification risk, and multi-state compliance.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
