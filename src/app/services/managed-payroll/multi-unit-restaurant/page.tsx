import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Multi-Location Restaurant Payroll | Consolidated. Tip Compliant. | BEG',
  description: 'Multi-location restaurant payroll fully managed at $25–$45 PEPM. Consolidated reporting, state-by-state tip compliance, and per-location payroll included.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/multi-unit-restaurant' },
  openGraph: {
    title: 'Multi-Location Restaurant Payroll | Consolidated. Tip Compliant. | BEG',
    description: 'Multi-location restaurant payroll fully managed at $25–$45 PEPM. Consolidated reporting, state-by-state tip compliance, and per-location payroll included.',
    url: 'https://beghr.com/services/managed-payroll/multi-unit-restaurant',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Location Restaurant Payroll | Consolidated. Tip Compliant. | BEG',
    description: 'Multi-location restaurant payroll fully managed at $25–$45 PEPM. Consolidated reporting, state-by-state tip compliance, and per-location payroll included.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('multi-unit-restaurant-payroll');

export default function PayrollMultiUnitRestaurantPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Multi-location restaurant group with fully managed payroll"
      eyebrow="Managed Payroll · Multi-Location Restaurant"
      title="Multi-location restaurant payroll breaks most payroll systems. We built ours around it."
      description="Consolidated reporting across locations, per-location tip credit compliance in different states, high-volume W-2 production, and location-level P&L reporting. BEG manages all of it at $25–$45 per employee per month. Fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Consolidated', label: 'Multi-location payroll managed' },
        { value: 'State-by-state', label: 'Tip credit compliance' },
        { value: 'Per-location', label: 'Reporting for operators and CFO' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house multi-location restaurant payroll actually cost your group?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Tip risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Tip credit compliance errors across multiple states are the most common DOL violation in restaurant groups</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Tip credit rules differ by state, and some states do not allow tip credits at all. Running a multi-state restaurant group with the same tip credit configuration at every location puts you in violation in states where it is not permitted. DOL back-wage assessments for tip credit violations go back two to three years.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Reporting gap</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Operators and CFOs cannot manage location-level P&L without per-location payroll reporting</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A consolidated payroll number across all locations tells you nothing about which locations are overstaffed or undermanned. Operators need labor cost as a percentage of revenue by location, and your CFO needs it to match the P&L. Most payroll setups cannot produce it.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>W-2 volume</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>High turnover across multiple locations means W-2 production at year-end becomes a major administrative project</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Restaurant groups with 200 or more employees across locations, many of whom turned over during the year, face a substantial W-2 production and delivery challenge at year-end that consumes weeks of administrative staff time without a managed payroll partner.</div>
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
            <h2>Three steps to fully managed multi-location restaurant payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your location footprint, tip credit rules at each location, multi-state wage laws, and reporting needs by location and entity. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Configuration and setup', body: 'We configure per-location payroll settings, state-specific tip credit rules, consolidated reporting structures, and per-location P&L reporting formats. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every per-location labor report, and every year-end W-2. Fully managed by BEG. Your GMs and operators touch nothing.' },
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
            <h2>Everything multi-location restaurant payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Consolidated multi-location payroll processing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Multi-unit restaurant groups often operate under a holding company structure with individual LLCs or entities for each location. Payroll must be processed under the correct entity for each location, with the right state and local tax configurations applied at each site. BEG consolidates the oversight and management of payroll across all locations into a single managed process while maintaining the entity-level separation that your corporate structure and legal team require. Your leadership team sees one consolidated payroll function; your CFO sees clean per-entity financials.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>State-by-state tip credit compliance</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tipped minimum wage rules are set at the state level and vary significantly across the country. States like California, Minnesota, and several others require employers to pay the full minimum wage regardless of tips, meaning no tip credit is permitted. Other states allow a tip credit but set different cash wage minimums and different tip thresholds. Running the same tip credit configuration across a multi-state restaurant group puts locations in non-credit states in violation of state wage law. BEG configures tip credit rules independently for each location based on the state laws that apply there, and monitors state wage law changes that affect tip credit eligibility as the regulatory environment continues to evolve.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Per-location payroll reporting for operators and CFO</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restaurant operators manage labor as a percentage of revenue by location. Your CFO needs labor cost per location to match the P&L line. BEG produces per-location payroll reports that your GMs can use to manage labor cost against their revenue targets, and that your CFO can tie directly to the P&L without manual reconciliation. Location-level payroll reporting turns payroll data from a compliance output into a management tool your entire leadership team can act on.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state wage law compliance across your location footprint</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restaurant groups with locations across multiple states face a patchwork of minimum wage rates, overtime rules, predictive scheduling laws, and meal and rest break requirements that vary by state and sometimes by city. Seattle, San Francisco, New York City, and other jurisdictions have minimum wages significantly above the state floor. Predictive scheduling ordinances in Chicago, New York, and Philadelphia add premium pay requirements for last-minute schedule changes. BEG monitors applicable wage and hour laws at the state and local level for each of your locations and applies the correct rules to each location's payroll configuration as laws change.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>High-volume W-2 production for restaurant groups</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restaurant groups with high turnover across multiple locations produce large W-2 volumes at year-end, including for employees who worked briefly earlier in the year and have since moved on. Locating former employees, managing returned mail, correcting address errors, and meeting IRS and state W-2 filing deadlines is a significant administrative burden without a managed payroll partner. BEG manages the full W-2 production and delivery process for your entire multi-location roster (current employees and former employees alike) so your HR and accounting teams are not spending January catching up on paperwork from the prior year.</p>
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
                  ['Consolidated multi-location processing', '✓', 'Admin-heavy', 'Partial'],
                  ['State-by-state tip credit configuration', '✓', 'Compliance risk', 'Self-service'],
                  ['Per-location labor reporting', '✓', 'Manual reporting', 'Partial'],
                  ['Predictive scheduling compliance', '✓', 'Expertise required', '✗'],
                  ['High-volume W-2 production', '✓', 'Admin-heavy', 'Self-service'],
                  ['Multi-state wage law monitoring', '✓', 'Compliance risk', '✗'],
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>DOL tip credit back-wage assessments go back two to three years across every location.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A restaurant group with locations in multiple states running the wrong tip credit configuration is accumulating back-wage exposure at every non-compliant location every pay period. The longer that configuration runs uncorrected, the larger the back-wage liability when a DOL audit or employee complaint surfaces it. Getting tip credit right across all locations now costs far less than the assessment you will face if you wait.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to consolidate multi-location payroll is before you open the next location.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30–60 days. Restaurant groups that consolidate payroll management before adding a new location avoid carrying the wrong configuration into the new market. Every location you add to a properly managed structure is cleaner than fixing a problem after it has been running for two years across three states.</p>
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
            <h2>Common questions about multi-location restaurant payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle tip credit compliance across multiple states?</h3>
              <p>BEG configures tip credit rules independently for each location based on the state and local laws that apply at that site. States that prohibit tip credits get the full minimum wage configuration. States that allow tip credits get the correct cash wage floor and tip threshold for that jurisdiction. We monitor state wage law changes and update each location's configuration when laws change.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG produce per-location payroll reports for our operators and CFO?</h3>
              <p>Yes. BEG produces per-location labor cost reports that your GMs can use to manage labor against revenue targets, and that your CFO can tie directly to the P&L without manual reconciliation. We format reports to match how your leadership team tracks location performance.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for multi-location restaurant groups?</h3>
              <p>Everything: per-location payroll processing, tip credit compliance, multi-state tax filing, per-location reporting, year-end W-2 production, and dedicated BEG support. No per-run fees, no location add-on fees, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle payroll for a restaurant group operating under separate entities per location?</h3>
              <p>BEG maintains entity-level separation in payroll processing while managing the whole group as a single consolidated function for your leadership team. Each location runs under its own legal entity with the correct EIN, state registrations, and tax configurations, and you get consolidated reporting on top of that structure without consolidating the entities themselves.</p>
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
              { '@type': 'Question', name: 'How does BEG handle tip credit compliance across multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'BEG configures tip credit rules independently for each location based on applicable state and local laws. We monitor changes and update each location configuration when laws change.' } },
              { '@type': 'Question', name: 'Can BEG produce per-location payroll reports?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG produces per-location labor cost reports for operators and CFO, formatted to match how your leadership team tracks location performance.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Per-location processing, tip credit compliance, multi-state tax filing, per-location reporting, year-end W-2s, and dedicated support. No per-run, per-location, or year-end add-on fees.' } },
              { '@type': 'Question', name: 'How does BEG handle a restaurant group with separate entities per location?', acceptedAnswer: { '@type': 'Answer', text: 'BEG maintains entity-level separation in processing while managing the group as one consolidated function, with each location under its own EIN and state registrations plus consolidated reporting for leadership.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Multi-Location Restaurant', item: 'https://beghr.com/services/managed-payroll/multi-unit-restaurant' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'Tip Credit Compliance for Multi-State Restaurant Groups (2026)',
            excerpt: 'State-by-state tip credit rules, which states prohibit tip credits entirely, and how multi-location restaurant groups configure compliant payroll at each site.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Per-Location Payroll Reporting: What Restaurant Operators and CFOs Need',
            excerpt: 'How location-level labor cost reporting works, what format operators need to manage labor against revenue, and how managed payroll produces it without manual reconciliation.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House for Multi-Location Restaurant Groups (2026)',
            excerpt: 'What restaurant group operators spend managing payroll in-house versus a fully managed service that handles tip compliance, location reporting, and high W-2 volume.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Multi-Location Restaurant payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Multi-Location Restaurant employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
