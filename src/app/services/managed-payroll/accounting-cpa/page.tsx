import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Accounting & CPA Firm Payroll | Partner Draws. Busy Season. | BEG',
  description: 'CPA and accounting firm payroll fully managed at $25–$45 PEPM. Partner draws, busy season overtime, 401(k) management, and billing allocations handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/accounting-cpa' },
  openGraph: {
    title: 'Accounting & CPA Firm Payroll | Partner Draws. Busy Season. | BEG',
    description: 'CPA and accounting firm payroll fully managed at $25–$45 PEPM. Partner draws, busy season overtime, 401(k) management, and billing allocations handled.',
    url: 'https://www.beghr.com/services/managed-payroll/accounting-cpa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting & CPA Firm Payroll | Partner Draws. Busy Season. | BEG',
    description: 'CPA and accounting firm payroll fully managed at $25–$45 PEPM. Partner draws, busy season overtime, 401(k) management, and billing allocations handled.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('accounting-cpa-payroll');

export default function PayrollAccountingCpaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="CPA and accounting firm with fully managed payroll"
      eyebrow="Managed Payroll · Accounting & CPA"
      title="CPA firms are experts at other businesses' finances. Your payroll deserves the same expertise."
      description="Partner draw structures, staff accountant busy-season overtime, 401(k) matching on variable compensation, and client-code payroll allocations. BEG manages all of it at $25–$45 per employee per month. Fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Partner draws', label: 'Distributions handled' },
        { value: 'Busy season', label: 'Overtime managed' },
        { value: '401(k)', label: 'Deduction management included' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house CPA firm payroll actually cost your practice?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Busy season</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Staff accountant overtime during tax season is the biggest payroll variable most CPA firms handle manually</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Staff accountants working 60- to 80-hour weeks during busy season generate significant overtime. Non-exempt staff must be paid overtime regardless of salary. Misclassifying salaried staff accountants as exempt when they do not meet FLSA duties tests creates wage and hour exposure during the highest-workload period of the year.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>K-1 / W-2</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Partner W-2 salary, K-1 distributions, and draw structures require coordination between payroll and the partnership tax return</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>CPA firm partners compensated through a mix of W-2 salary and K-1 partnership distributions need payroll that handles the W-2 component correctly while leaving the K-1 to the tax side. Getting the S-corp or partnership reasonable compensation threshold right is a compliance issue many firms manage poorly internally.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$65K–$95K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one in-house payroll administrator for a mid-size CPA firm</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Fully managed payroll at $25–$45 PEPM on a 20-person firm costs $6,000–$10,800 per year. That same firm pays an internal administrator six to nine times more, and that administrator still has to figure out partner W-2 vs. K-1 treatment without specialist backup.</div>
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
            <h2>Three steps to fully managed CPA firm payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your staff structure, partner compensation model, 401(k) plan parameters, client-code payroll allocation needs, and any busy-season overtime patterns. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Configuration and setup', body: 'We configure partner W-2 salary components, staff overtime tracking, 401(k) deductions with matching logic, and client-code allocation if needed. No migration required. We work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every 401(k) deduction, every busy-season overtime calculation, and every year-end W-2. Fully managed by BEG. Your admin team touches nothing during the months when they are already buried in client work.' },
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
            <h2>Everything CPA and accounting firm payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Partner draw and W-2 salary structure</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>CPA firm partners operating through S-corps or partnerships often receive compensation through a combination of W-2 salary and owner draws or K-1 distributions. For S-corp partners, the IRS requires that the W-2 salary component meet reasonable compensation standards (that is, a salary that reflects the market rate for the services the partner-employee actually performs for the firm) and is documented accordingly. Underpaying W-2 salary and taking the remainder as distributions is a known IRS audit trigger for S-corp owner-employees. BEG manages the W-2 payroll component for partners, coordinates with your CPA and tax advisor on the distribution and K-1 side, and ensures the W-2 salary structure is documented and defensible if the IRS scrutinizes it.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Busy season overtime for staff accountants</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Staff accountants who are classified as non-exempt under the FLSA must be paid overtime for hours worked over 40 in a workweek. During tax season, when staff routinely work 60 to 80 hours per week, overtime calculations require careful tracking of actual hours worked each day and each week. CPA firms that incorrectly classify junior staff accountants as exempt based on salary alone, without meeting the FLSA white-collar exemption duties test, face wage and hour exposure during the period of their greatest workload. BEG manages overtime calculations for all non-exempt staff accountants and can advise on whether your current exemption classifications hold up to the FLSA duties test.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>401(k) deductions tied to variable compensation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>CPA firm 401(k) plans often include employer matching tied to total annual compensation, which creates complexity when compensation includes variable components like performance bonuses, busy-season bonuses, or partner distributions. Calculating matching contributions correctly requires tracking total eligible compensation across the plan year, applying the match formula to the right compensation components, and ensuring elective deferrals and matching contributions together do not exceed IRS limits. BEG manages 401(k) deductions, employer match calculations, and limit monitoring throughout the plan year so your firm avoids excess contribution corrections and maintains plan compliance.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Client-code payroll allocations for cost accounting</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>CPA firms that track labor costs by client or engagement code for internal profitability analysis need payroll to allocate each employee's time to the client codes they worked during the pay period. This labor cost allocation supports engagement profitability reporting, rate-setting decisions, and partner compensation tied to book of business. BEG configures client-code payroll allocation for firms that track labor costs at the engagement level, producing allocation reports that your firm's management can use for profitability analysis without requiring manual reconciliation after each pay cycle.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state compliance for distributed accounting staff</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>CPA firms that employ remote staff or have expanded to serve clients across multiple states may have staff members creating payroll nexus in states where the firm does not have an office. A remote senior accountant working from home in a state different from the firm's home state creates payroll tax registration and withholding obligations in the employee's home state. BEG monitors where your staff members are located, determines when payroll tax registration and withholding obligations arise, and handles state payroll tax registration and remittance for all states where your staff creates nexus through their work location.</p>
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
                  ['Partner W-2 + draw coordination', '✓', 'CPA coordination needed', '✗'],
                  ['Busy season overtime tracking', '✓', 'Manual tracking risk', 'Self-service'],
                  ['401(k) deduction + match management', '✓', 'Plan admin coordination', 'Partial'],
                  ['Client-code payroll allocation', '✓', 'Manual mapping', 'Partial'],
                  ['Multi-state remote staff compliance', '✓', 'Compliance risk', 'Self-service'],
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Your firm advises clients on financial compliance. Yours should be just as clean.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>CPA firms that manage client payroll professionally while running their own payroll manually in a spreadsheet have a blind spot that becomes a liability when IRS reasonable compensation scrutiny, DOL overtime audits, or 401(k) plan examinations hit. Your own payroll should run the same way you would recommend for your best clients: professionally managed, fully compliant, and never something your admin is guessing at during busy season.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to transition is before the next tax season starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30–60 days. Getting into a managed payroll structure before busy season means your admin team has one less thing to manage during the highest-pressure months of the year. We scope your current setup, configure everything, and run your first payroll cycles before January. You focus on clients; we handle your firm.</p>
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
            <h2>Common questions about CPA and accounting firm payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG manage partner W-2 salary alongside K-1 distributions?</h3>
              <p>BEG manages the W-2 payroll component for partners, processing salary through payroll with the correct withholding and employer tax contributions. We coordinate with your CPA and tax advisor on the K-1 distribution side and ensure the W-2 salary amount meets IRS reasonable compensation requirements for S-corp or partnership structures. The W-2 and K-1 components never get mixed: each is handled through the right channel.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle staff accountant overtime during busy season?</h3>
              <p>BEG tracks actual hours worked each week for all non-exempt staff accountants and calculates overtime for any workweek over 40 hours. During busy season, when hours are highest, payroll processes automatically with correct overtime applied. We can also review whether your current exemption classifications for senior staff are defensible under the FLSA duties test before the season starts.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for CPA and accounting firms?</h3>
              <p>Everything: payroll processing, partner compensation management, busy-season overtime, 401(k) deductions and match calculations, federal and state tax filing, year-end W-2 production, and dedicated BEG support. No per-run fees, no year-end surcharges, no module upsells.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG configure payroll allocations by client code for engagement profitability tracking?</h3>
              <p>Yes. BEG configures client-code or engagement-code payroll allocation for firms that track labor costs at the engagement level. Each employee's time is allocated to the client codes worked during the pay period, and allocation reports are produced each cycle so your management team can run profitability analysis without manual reconciliation.</p>
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
              { '@type': 'Question', name: 'How does BEG manage partner W-2 salary alongside K-1 distributions?', acceptedAnswer: { '@type': 'Answer', text: 'BEG processes the W-2 salary component through payroll with correct withholding, coordinates with your CPA on K-1 distributions, and ensures W-2 salary meets IRS reasonable compensation requirements for S-corp or partnership structures.' } },
              { '@type': 'Question', name: 'How does BEG handle staff accountant overtime during busy season?', acceptedAnswer: { '@type': 'Answer', text: 'BEG tracks actual hours for all non-exempt staff accountants and calculates overtime automatically for weeks over 40 hours. We can also review current exemption classifications before busy season starts.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Payroll processing, partner compensation management, busy-season overtime, 401(k) deductions and match, tax filing, year-end W-2 production, and dedicated support. No add-on fees.' } },
              { '@type': 'Question', name: 'Can BEG configure payroll allocations by client code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG configures client-code or engagement-code allocation, producing allocation reports each cycle for engagement profitability analysis without manual reconciliation.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Accounting & CPA', item: 'https://www.beghr.com/services/managed-payroll/accounting-cpa' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'CPA Firm Partner W-2 Salary vs. K-1 Distributions: IRS Reasonable Compensation (2026)',
            excerpt: 'IRS reasonable compensation rules for CPA firm partners in S-corps and partnerships, how W-2 salary and K-1 distributions should be structured, and what triggers audits.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Accounting Firm Busy Season Overtime: FLSA Compliance for Staff Accountants',
            excerpt: 'FLSA overtime rules for staff accountants, which exemption classifications hold up under the duties test, and how managed payroll handles busy season without errors.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House for CPA Firms (2026)',
            excerpt: 'What accounting firm administrators spend managing payroll internally versus a fully managed service that handles partner draws, overtime, and 401(k) compliance.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Accounting and CPA Firm payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Accounting and CPA Firm employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
