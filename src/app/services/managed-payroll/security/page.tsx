import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Security Company Payroll | Guard Shifts. Overtime. Managed. | BEG',
  description: 'Security company payroll fully managed at $25–$45 PEPM. Shift differentials, SCA compliance, overtime, and high-volume W-2s included.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/security' },
  openGraph: {
    title: 'Security Company Payroll | Guard Shifts. Overtime. Managed. | BEG',
    description: 'Security company payroll fully managed at $25–$45 PEPM. Shift differentials, SCA compliance, overtime, and high-volume W-2s included.',
    url: 'https://beghr.com/services/managed-payroll/security',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Company Payroll | Guard Shifts. Overtime. Managed. | BEG',
    description: 'Security company payroll fully managed at $25–$45 PEPM. Shift differentials, SCA compliance, overtime, and high-volume W-2s included.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('security-payroll');

export default function PayrollSecurityPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Security company with fully managed payroll"
      eyebrow="Managed Payroll · Security"
      title="Security company payroll never sleeps. Neither does BEG's managed service."
      description="24/7 guard scheduling, shift differentials, SCA compliance for federal contracts, and year-end W-2 volume for large guard workforces. BEG manages all of it at $25–$45 per employee per month. No migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Shift payroll', label: 'Handled across all schedules' },
        { value: 'SCA ready', label: 'Service Contract Act compliance' },
        { value: 'High-volume', label: 'W-2s managed at year-end' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house security company payroll actually cost your business?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Overtime</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Mismanaged overtime across 24/7 guard shifts creates wage and hour exposure</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Guards who fill emergency shifts, cover call-outs, or work across multiple post assignments frequently cross overtime thresholds in ways manual systems miss. Each miscalculation is a potential DOL claim.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>SCA fines</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Service Contract Act violations on federal guard contracts carry serious penalties</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Federal facility guard contracts subject to the SCA require prevailing wages and fringe benefits per the applicable Wage Determination. Non-compliance results in back pay, debarment risk, and contract termination.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$60K–$90K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one in-house payroll administrator who understands shift-based security payroll</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Fully managed payroll at $25–$45 PEPM replaces that headcount and handles the SCA compliance your administrator may not know well enough to get right.</div>
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
            <h2>Three steps to fully managed security company payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your guard workforce, shift structure, contract types, and any SCA-covered federal assignments. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Configuration and setup', body: 'We configure shift differential pay rates, SCA Wage Determination rates, overtime rules, and benefit tracking for part-time guards. No migration required. We work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every SCA filing, every quarterly tax deposit, and every year-end W-2 for your full guard roster. Fully managed by BEG. Your operations team touches nothing.' },
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
            <h2>Everything security company payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Shift differential pay across 24/7 guard schedules</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security companies routinely pay night differentials, weekend differentials, and holiday premiums on top of base guard wages. These differentials must be included in the regular rate of pay when calculating overtime under the FLSA, which means a guard working a night-differential shift who also goes into overtime cannot simply use their base hourly rate for the time-and-a-half calculation. BEG configures shift differential rates for each post assignment and handles the blended regular rate calculation for overtime weeks automatically, eliminating the manual math that causes most security payroll errors.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Service Contract Act compliance for federal guard contracts</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security companies holding contracts to guard federal facilities, government buildings, or federally-funded sites are subject to the McNamara-O'Hara Service Contract Act. The SCA requires guards to be paid the prevailing wage rate and fringe benefit rate specified in the Wage Determination issued for the contract location. Wage Determinations vary by locality and are periodically updated. BEG tracks the applicable Wage Determination for each federal contract, applies the correct prevailing wage to covered guards, and manages the fringe benefit rate (either through qualifying benefits or as additional cash to guards who do not receive those benefits) to keep you in compliance with contract terms and Department of Labor requirements.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Overtime calculations across variable guard schedules</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security guard overtime is complex because guards frequently work irregular schedules, fill in for absent colleagues on short notice, and may cover posts at different pay rates within the same workweek. The FLSA requires overtime to be calculated on total hours worked in the workweek across all assignments, using a weighted average rate when multiple pay rates apply. BEG calculates overtime correctly across variable hours and multi-rate workweeks, ensuring compliance with FLSA and any state overtime rules that apply to your guard workforce.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>High-turnover W-2 volume for large guard workforces</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security companies with large guard workforces produce high W-2 volumes at year-end, often with a significant number of former employees who worked briefly during the year. Locating former employees for W-2 delivery, managing returned mail, and correcting W-2 errors before filing deadlines consumes significant administrative time. BEG manages your entire year-end W-2 process, including production, delivery, returned mail follow-up, and any corrections required before IRS and state filing deadlines.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefit tracking for part-time and full-time guards</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Security companies often employ a mix of full-time guards who receive benefits and part-time guards who do not. ACA employer mandate compliance requires tracking hours for all employees to determine benefit eligibility during the applicable measurement period. BEG tracks hours for both full-time and part-time guards to support ACA compliance, manages benefit deductions for eligible employees, and handles SCA fringe benefit rate conversions for guards on covered federal contracts.</p>
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
                  ['Shift differential + overtime blended rate', '✓', 'High error risk', 'Partial'],
                  ['SCA Wage Determination compliance', '✓', 'Requires expertise', '✗'],
                  ['Multi-rate overtime calculations', '✓', 'Manual calculation risk', 'Partial'],
                  ['High-volume W-2 management', '✓', 'Staff-time heavy', 'Self-service'],
                  ['ACA hours tracking for part-time guards', '✓', 'Compliance risk', 'Self-service'],
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>SCA non-compliance is not just a fine. It is debarment risk.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Security companies that lose federal guard contracts due to SCA violations lose the entire contract, not just the non-compliant portion. Back pay obligations, debarment from future federal contracting, and reputational damage with contracting officers are all real outcomes of SCA mismanagement. Getting it right from the start costs far less than remediation after a complaint or audit.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix your payroll structure is before the next contract cycle.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30–60 days. If you have a contract renewal or new federal assignment coming up, now is the time to get your payroll structure right. We scope your setup, identify compliance gaps, and move you to a fully managed process that holds up to any audit.</p>
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
            <h2>Common questions about security company payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle SCA compliance for federal guard contracts?</h3>
              <p>BEG tracks the applicable Wage Determination for each federal contract, applies the correct prevailing wage to covered guards, and manages the fringe benefit rate for each covered employee. When Wage Determinations are updated, we update the payroll configuration to match before the effective date.</p>
            </div>
            <div className="faq-item">
              <h3>How is overtime calculated when guards work at different pay rates in the same week?</h3>
              <p>FLSA requires overtime on total hours over 40 in the workweek using a weighted average regular rate when multiple rates apply. BEG calculates the blended regular rate automatically based on actual hours at each rate and applies the correct overtime premium to hours over 40.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for security companies?</h3>
              <p>Everything: payroll processing, shift differential calculations, SCA compliance, federal and state tax filing, year-end W-2 production, and dedicated BEG support. No per-run fees, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG manage payroll for a security company with guards in multiple states?</h3>
              <p>Yes. BEG manages state payroll tax registration, remittance, and compliance across all states where you have guards working. We apply state-specific overtime rules and wage laws at each location automatically.</p>
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
              { '@type': 'Question', name: 'How does BEG handle SCA compliance for federal guard contracts?', acceptedAnswer: { '@type': 'Answer', text: 'BEG tracks the applicable Wage Determination for each federal contract, applies the correct prevailing wage to covered guards, and manages the fringe benefit rate. When Wage Determinations are updated, we update the payroll configuration before the effective date.' } },
              { '@type': 'Question', name: 'How is overtime calculated when guards work at different pay rates in the same week?', acceptedAnswer: { '@type': 'Answer', text: 'FLSA requires a weighted average regular rate when multiple rates apply. BEG calculates the blended rate automatically based on actual hours at each rate and applies the correct overtime premium.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system to work with BEG?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, shift differential calculations, SCA compliance, tax filing, year-end W-2 production, and dedicated support. No per-run fees or surcharges.' } },
              { '@type': 'Question', name: 'Can BEG manage payroll for security companies in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages state payroll tax registration, remittance, and compliance across all states where you have guards working.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Security Companies', item: 'https://beghr.com/services/managed-payroll/security' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'SCA Compliance for Security Guard Contractors: What Payroll Must Cover',
            excerpt: 'Service Contract Act obligations for federal guard contracts, how prevailing wage rates work, and what security companies get wrong at year-end.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Security Company Overtime: Calculating Blended Rates for Multi-Post Guards',
            excerpt: 'FLSA overtime rules when guards work at multiple pay rates in the same workweek, and how managed payroll handles the calculation automatically.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House for Security Companies (2026)',
            excerpt: 'What security company owners spend on in-house payroll administration versus a fully managed service that handles SCA, shift differentials, and high W-2 volume.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Security payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Security employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
