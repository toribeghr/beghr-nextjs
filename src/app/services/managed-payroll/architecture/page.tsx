import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Architecture Firm Payroll | Instant Quote | BEG',
  description: 'Architecture firm payroll fully managed at $25-$45 PEPM. Project-coded hours, PE staff compliance, partner draws, and multi-state licensing handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/architecture' },
  openGraph: {
    title: 'Architecture Firm Payroll | Instant Quote | BEG',
    description: 'Architecture firm payroll fully managed at $25-$45 PEPM. Project-coded hours, PE staff compliance, partner draws, and multi-state licensing handled.',
    url: 'https://www.beghr.com/services/managed-payroll/architecture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Firm Payroll | Instant Quote | BEG',
    description: 'Architecture firm payroll fully managed at $25-$45 PEPM. Project-coded hours, PE staff compliance, partner draws, and multi-state licensing handled.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('architecture-payroll');

export default function PayrollArchitecturePage() {
  return (
    <ServicePage
      heroVideoId="szzLvMYBgRA"
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Architecture and design firm with fully managed payroll"
      eyebrow="Managed Payroll · Architecture & Design"
      title="Architecture firm payroll tracks project hours, licensed staff, and partner draws. We handle it all."
      description="Project-coded payroll for AIA billing, licensed PE and architect tracking, partner draw structures, and multi-state licensure compliance. BEG manages all of it at $25-$45 per employee per month. Fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      showHeroImage={false}
      heroStats={[
        { value: 'Project-coded', label: 'Payroll for AIA billing' },
        { value: 'PE + AIA', label: 'Licensed staff compliance' },
        { value: 'Partner draws', label: 'Distributions handled' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house architecture firm payroll actually cost your practice?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Billing gaps</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Project-coded payroll that does not match your AIA billing schedule creates reconciliation problems every month</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>When payroll labor costs cannot be allocated to projects in a way that reconciles with your billing, your project financials are always off. BEG configures project-coded payroll that lines up with how your firm tracks billable hours.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-state PE</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Licensed architects and PEs working across state lines create multi-state payroll tax and compliance requirements</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Staff working on projects in states where they are not resident may create payroll nexus and tax registration obligations. Missing state registrations result in penalties and interest that accumulate quickly.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$65K-$95K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one in-house administrator who understands project-based payroll for design firms</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Fully managed payroll at $25-$45 PEPM on a 15-person firm costs $4,500-$8,100 per year. One payroll specialist costs ten to twenty times more and still needs project accounting expertise they may not have.</div>
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
            <h2>Three steps to fully managed architecture firm payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your staff structure, project coding setup, licensed employee roster, partner distribution model, and multi-state presence. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Configuration and setup', body: 'We configure project-coded payroll, partner draw structures, PE and architect tracking, and state registrations for any states where your staff works. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every partner distribution, every quarterly filing, and every year-end W-2. Fully managed by BEG. Your project managers and administrators touch nothing.' },
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
            <h2>Everything architecture and design firm payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Project-allocated payroll for AIA billing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture firms bill clients based on hours logged to specific projects and project phases. For payroll labor costs to reconcile with AIA billing, payroll must allocate each employee's time to the project codes they worked during the pay period. BEG configures project-coded payroll that maps to your project numbering system, so your labor cost reports by project match the hours your project managers are billing, without requiring your accounting team to manually reconcile payroll to billing records each month.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Licensed PE and architect compliance tracking</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture and engineering firms often pay credential-based salary differentials for staff who hold PE licensure, AIA membership, LEED AP credentials, or other professional designations. Managing these differentials in payroll requires tracking current licensure status for each employee and updating pay when credentials are earned, renewed, or lapsed. BEG maintains credential tracking for licensed staff and ensures that pay differentials are applied correctly and updated when licensure status changes, reducing the manual tracking burden on your HR and office manager.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Partner draw and principal distribution management</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture firms structured as S-corps, partnerships, or LLCs often compensate principals through a combination of W-2 salary and owner draws or distributions. W-2 salary for S-corp owner-employees must meet IRS reasonable compensation standards. Draw amounts must be handled separately from W-2 payroll and tracked for tax reporting purposes. BEG manages the W-2 payroll component for principals, coordinates with your CPA on the draw and distribution side, and ensures the W-2 salary structure meets IRS reasonable compensation requirements for S-corp shareholders.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state compliance for firms with project-based travel</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture firms that send staff to work on projects in other states may create payroll nexus in those states, requiring registration with the state's employment tax agency and withholding for employees working there. Short-term project assignments may qualify for temporary worker exemptions in some states, but the threshold varies and must be tracked per employee. BEG monitors the time each employee spends working in each state, determines when registration and withholding obligations arise, and handles state payroll tax registration and remittance for all states where your staff creates nexus.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Deadline sprint overtime for design staff</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture and design firms experience intense workload spikes around project submission deadlines, client presentations, and permitting milestones. Non-exempt design staff who work beyond 40 hours in a workweek during these sprints are entitled to overtime. Salaried employees who are misclassified as exempt when they should be non-exempt under the FLSA salary level and duties tests create wage and hour exposure when they work deadline sprints without overtime pay. BEG manages overtime calculations for all non-exempt design staff and can advise on proper exemption classification to reduce your exposure during high-crunch periods.</p>
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
                  ['Project-coded payroll for AIA billing', '✓', 'Manual mapping required', 'Partial'],
                  ['PE and architect credential tracking', '✓', 'Manual tracking', '✗'],
                  ['Partner draw + W-2 coordination', '✓', 'CPA coordination needed', '✗'],
                  ['Multi-state nexus management', '✓', 'Compliance risk', 'Self-service'],
                  ['Deadline sprint overtime calculations', '✓', 'Manual calculation risk', 'Self-service'],
                  ['Year-end W-2 production', '✓', '✓', 'Self-service'],
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every quarter you run payroll manually is a quarter your project financials do not reconcile.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Architecture firms that cannot allocate payroll costs to projects by code spend time every month manually reconciling billing records to labor expenses. That is project management time going to accounting administration instead of client work. A managed payroll setup that handles project allocation correctly pays for itself in recovered principal and PM time alone.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix your payroll structure is at the start of a new project year.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions with BEG take 30-60 days. Starting at the beginning of a fiscal year or new billing cycle makes the cutover clean and keeps your project accounting aligned from day one of the new period. We scope your setup, configure project coding, and manage transition so your principals spend zero time on it.</p>
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
            <h2>Common questions about architecture firm payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG configure project-coded payroll for architecture firms?</h3>
              <p>We map your project numbering system and configure payroll to allocate each employee's time to the project codes logged during the pay period. The result is a labor cost report by project that reconciles to your AIA billing records without manual adjustment each month.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle partner draws alongside W-2 salary for firm principals?</h3>
              <p>BEG manages the W-2 payroll component for principals and coordinates with your CPA on owner draws and K-1 distributions. We ensure the W-2 salary portion meets IRS reasonable compensation requirements for S-corp shareholders, which is the most common compliance issue for architecture firm owners.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include for architecture and design firms?</h3>
              <p>Everything: payroll processing, project-coded allocation, PE credential tracking, federal and state tax filing, year-end W-2 production, and dedicated BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle payroll for architects and designers working on projects in multiple states?</h3>
              <p>Yes. BEG monitors time worked in each state, determines when payroll tax registration and withholding obligations arise, and handles registration and remittance in all states where your staff creates nexus through project work.</p>
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
              { '@type': 'Question', name: 'How does BEG configure project-coded payroll for architecture firms?', acceptedAnswer: { '@type': 'Answer', text: 'BEG maps your project numbering system and allocates each employee time to project codes per pay period, so labor cost reports reconcile to AIA billing without manual adjustment.' } },
              { '@type': 'Question', name: 'How does BEG handle partner draws alongside W-2 salary?', acceptedAnswer: { '@type': 'Answer', text: 'BEG manages the W-2 payroll for principals and coordinates with your CPA on owner draws, ensuring W-2 salary meets IRS reasonable compensation requirements for S-corp shareholders.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system to work with BEG?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, project-coded allocation, PE credential tracking, tax filing, year-end W-2 production, and dedicated support.' } },
              { '@type': 'Question', name: 'Can BEG handle payroll for staff working on projects in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG monitors time worked per state, determines when registration and withholding obligations arise, and handles all multi-state payroll tax compliance.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Architecture & Design', item: 'https://www.beghr.com/services/managed-payroll/architecture' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'Project-Coded Payroll for Architecture Firms: AIA Billing and Labor Cost Alignment',
            excerpt: 'How architecture firms configure payroll to allocate labor costs to project codes and reconcile with AIA billing without monthly manual adjustments.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Architecture Firm Partner Draws: W-2 Salary vs. Owner Distribution (2026)',
            excerpt: 'IRS reasonable compensation rules for S-corp architect-owners, how partner draws work alongside W-2 payroll, and what your CPA needs from payroll.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House for Architecture Firms (2026)',
            excerpt: 'What design firm owners spend running payroll in-house versus a fully managed service that handles project coding, partner draws, and multi-state compliance.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
