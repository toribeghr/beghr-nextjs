import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Private School Payroll | Instant Quote | BEG',
  description: 'Private school payroll fully managed at $25-$45 PEPM. 10-month teacher pay spreads, sub tracking, 403(b) administration, and part-time aide payroll',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/education' },
  openGraph: {
    title: 'Private School Payroll | Instant Quote | BEG',
    description: 'Private school payroll fully managed at $25-$45 PEPM. 10-month teacher pay spreads, sub tracking, 403(b) administration, and part-time aide payroll',
    url: 'https://www.beghr.com/services/managed-payroll/education',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Private School Payroll | Instant Quote | BEG', description: 'Private school payroll fully managed at $25-$45 PEPM. 10-month teacher pay spreads, sub tracking, 403(b) administration, and part-time aide payroll', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('education-payroll');

export default function PayrollEducationPage() {
  return (
    <ServicePage
      heroVideoId="DoOi5WixvYY"
      imageSrc="/assets/hero-images/payroll.webp"
      imageAlt="Private school with fully managed payroll"
      eyebrow="Managed Payroll · Private Schools"
      title="Private school payroll has rules the big platforms miss. We built our process around them."
      description="Spreading 10-month teacher salaries over 12 months, managing summer benefit continuations, tracking substitute teacher and part-time aide payroll, administering 403(b) deductions, and handling payroll gaps during summer break create complexity that generic payroll platforms handle poorly. BEG manages all of it at $25-$45 per employee per month - fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      showHeroImage={false}
      heroStats={[
        { value: '10-month spreads', label: 'Teacher salary spread correctly over 12 months' },
        { value: 'Sub and aide tracking', label: 'Variable-hour substitute and part-time staff managed' },
        { value: '403(b) ready', label: 'Retirement deductions and employer contributions included' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost a private school?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>10-month complexity</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Spreading 10-month teacher salaries over 12 pay periods requires precise setup that most platforms get wrong</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>When a teacher earns a 10-month salary paid over 12 months, benefit deductions, retirement contributions, and tax withholding must be managed across the full 12-month period including summer. Platforms that cannot handle this correctly produce payroll errors in July and August that upset teachers who planned their summer budget based on expected deposits.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Sub tracking burden</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Substitute teachers and part-time aides have variable hours and irregular pay - and they still need accurate W-2s in January</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Private schools often employ 10-30 substitute teachers who work anywhere from zero to five days per week with no regular schedule. Tracking hours, ensuring ACA measurement period compliance, and preparing accurate year-end W-2s for subs requires a process that most school administrators are managing in spreadsheets.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>403(b) errors</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>403(b) deduction errors create IRS correction obligations and teacher complaints</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>403(b) plans for private schools require correct employee deferral calculations, employer match processing during the school year and summer, and proper 5500 reporting support. Errors in 403(b) deductions create IRS correction requirements under EPCRS that are costly and time-consuming to fix.</div>
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
            <h2>Three steps to fully managed private school payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your teacher roster, pay structure (10-month salary spread), substitute teacher tracking method, part-time aide classifications, 403(b) plan details, and benefit election setup. You get a fixed monthly cost.' },
              { num: '02', title: 'Setup and first cycle', body: 'We configure the 10-month salary spread, summer payroll periods, 403(b) deduction and match rules, substitute teacher pay rates, and ACA measurement period tracking. Your first cycles run alongside ours for verification.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle year-round - including summer - plus substitute tracking, 403(b) processing, and year-end W-2 preparation for all staff. Fully managed by BEG.' },
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
            <h2>Private school payroll complexity - fully covered</h2>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.85rem' }}>
            {[
              '10-month teacher salary spread over 12 monthly or bi-weekly pay periods with correct withholding',
              'Summer payroll processing for teachers on 12-month pay schedules including benefit continuation',
              'Substitute teacher payroll with variable hours, irregular schedules, and daily rate or hourly pay',
              'Part-time aide and classroom assistant payroll with correct overtime tracking',
              '403(b) employee deferral deductions and employer match processing throughout the school year and summer',
              'Benefit deduction management for health, dental, and supplemental benefits across school year and summer',
              'ACA measurement period tracking for substitute and part-time staff approaching benefit eligibility thresholds',
              'Year-end W-2 preparation for all staff including substitutes and part-time aides',
              'New hire setup and mid-year departure processing for teacher and staff turnover',
              'State income tax withholding and filing for schools operating in states with income tax requirements',
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
                  ['10-month salary spread over 12 months', 'Fully managed', 'Complex manual setup', 'Often not supported'],
                  ['Summer payroll for benefit continuation', 'Included', 'Requires careful setup', 'You configure it'],
                  ['Substitute teacher variable-hour tracking', 'Included', 'Spreadsheet-heavy', 'You manage it'],
                  ['403(b) deductions and employer match', 'Included', 'Included with expertise', 'You configure it'],
                  ['ACA measurement period for subs', 'Tracked automatically', 'Manual tracking', 'Add-on module'],
                  ['Year-end W-2 for all staff', 'Included', 'Included', 'Extra fee'],
                  ['Monthly cost (45 staff)', '$1,125-$2,025', '$5,800-$8,300', '$500-$1,000 + risk'],
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
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Hidden Cost</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>When a teacher's July deposit is wrong, that is a payroll problem your head of school hears about.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Teachers who chose a 12-month pay spread planned their summer budget around those deposits. When a platform gets the 10-month spread wrong in summer, the conversation escalates to leadership immediately. BEG manages the 10-month spread correctly so those calls never happen.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The right time to transition payroll is before the school year starts - not in October.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Private school payroll transitions take 30-60 days. Schools that begin the scope review process in May or June arrive at September with a fully managed system handling teacher pay from day one. Schools that wait typically carry suboptimal payroll management through another full academic year.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your school, give you a fixed monthly cost, and show you what managing the 10-month spread correctly looks like. Pricing starts at $25 PEPM.</p>
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
              { title: 'Senior Care Payroll', href: '/services/managed-payroll/senior-care', desc: 'CNA overtime, shift differentials, and CMS compliance for senior care facilities.' },
              { title: 'Nonprofit Payroll', href: '/services/managed-payroll/nonprofit', desc: 'Grant-funded payroll, 403(b) plans, and volunteer hour tracking for nonprofits.' },
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
            <h2>Common questions from private schools</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle 10-month teacher salary spreads?</h3>
              <p>BEG configures teacher salaries to be paid in equal amounts across 12 months regardless of the 10-month academic calendar. Benefit deductions, 403(b) contributions, and tax withholding are correctly calculated based on the full annual salary spread evenly across all pay periods, including July and August. Summer deposits match the school-year deposit amount exactly, which is what teachers who elected the 12-month spread expect.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG track substitute teacher hours and prepare their W-2s?</h3>
              <p>Yes. BEG manages substitute teacher payroll with variable hours, irregular schedules, daily or hourly rates, and no guaranteed weekly minimum. We track all hours worked across the school year for ACA measurement purposes and prepare accurate year-end W-2s for every substitute who worked during the year, regardless of how few days they worked.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle 403(b) contributions?</h3>
              <p>BEG processes employee 403(b) deferrals from each paycheck, applies employer match calculations if the plan includes matching, and tracks year-to-date contributions against IRS annual limits. When a teacher's deferral reaches the annual limit, BEG stops the deduction automatically. Employer match contributions are processed correctly even during summer payroll periods when no work is performed.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include for a private school?</h3>
              <p>Everything: payroll processing for teachers and all staff, 10-month salary spread management, substitute and part-time aide tracking, 403(b) deduction processing, benefit continuation during summer, year-end W-2 preparation for all staff, and dedicated BEG support. No per-cycle fees.</p>
            </div>
            <div className="faq-item">
              <h3>Do we need to switch payroll platforms?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. If you are currently managing payroll on a platform that does not handle 10-month spreads correctly, we can also help migrate to a better system - but migration is never required to start working with BEG.</p>
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
              { '@type': 'Question', name: 'How does BEG handle 10-month teacher salary spreads?', acceptedAnswer: { '@type': 'Answer', text: 'BEG configures teacher salaries spread across 12 months with correct benefit deductions, 403(b) contributions, and tax withholding in every period including summer.' } },
              { '@type': 'Question', name: 'Can BEG track substitute teacher hours and prepare their W-2s?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages substitute payroll with variable hours and prepares accurate year-end W-2s for every substitute regardless of how few days they worked.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include for a private school?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, 10-month salary spread management, sub and aide tracking, 403(b) processing, summer benefit continuation, year-end W-2s, and dedicated support. No per-cycle fees.' } },
              { '@type': 'Question', name: 'Do we need to switch payroll platforms?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is available but never required to start.' } },
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Education', item: 'https://www.beghr.com/services/managed-payroll/education' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Private School Payroll Outsourcing: 10-Month Pay Spreads and Substitute Tracking (2026)',
            excerpt: 'How private schools and independent schools manage teacher 10-month salary spreads, substitute payroll, and 403(b) administration without a dedicated payroll department.',
            href: '/blog/payroll/education',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. Gusto for Schools: Which Handles 10-Month Teacher Pay?',
            excerpt: 'Not all payroll platforms handle the 10-month salary spread correctly. Here is what to look for and how managed payroll solves the problem.',
            href: '/blog/compare/managed-payroll-vs-gusto',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
