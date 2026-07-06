import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Banking Payroll Services | Instant Quote, $25-$45 PEPM | BEG',
  description: 'Bank and credit union payroll fully managed at $25-$45 PEPM. Garnishment volume, loan officer commission, multi-branch compliance handled. Instant quote.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/banking' },
  openGraph: {
    title: 'Banking Payroll Services | Instant Quote, $25-$45 PEPM | BEG',
    description: 'Bank and credit union payroll fully managed at $25-$45 PEPM. Garnishment volume, loan officer commission, multi-branch compliance handled. Instant quote.',
    url: 'https://www.beghr.com/services/managed-payroll/banking',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Banking Payroll Services | Instant Quote, $25-$45 PEPM | BEG', description: 'Bank and credit union payroll fully managed at $25-$45 PEPM. Garnishment volume, loan officer commission, multi-branch compliance handled. Instant quote.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('payroll-banking');

export default function PayrollBankingPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/finance.svg"
      imageAlt="Bank branch network with fully managed payroll"
      eyebrow="Managed Payroll · Banking & Financial Institutions"
      title="Bank payroll carries the same internal-control expectations as everything else on your balance sheet."
      description="High-volume wage garnishment processing, non-discretionary commission and incentive pay for loan officers and branch staff, multi-state branch network registrations, and internal-control documentation your auditors expect from a regulated institution -- all handled at $25-$45 per employee per month, fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" industry="banking" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered for multi-branch networks' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="tldr" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.25rem 1.5rem', fontSize: '0.95rem', lineHeight: '1.6', color: '#333333' }}>
            <strong>Bottom line up front:</strong> Bank and credit union payroll has four failure points most vendors miss: high garnishment order volume with strict state compliance deadlines, non-discretionary bonus and commission pay that must be folded into the FLSA regular rate for overtime, multi-state branch registrations, and audit-ready internal controls over payroll data. BEG manages all of it at $25-$45 PEPM, fully managed, no migration required.
          </p>
        </div>
      </section>

      {/* PAIN */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Bank Payroll Is Different</p>
            <h2>What makes payroll harder for banks and credit unions than most industries?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px', textAlign: 'center' }}>
              Four things: garnishment order volume, commission-based FLSA overtime math, multi-branch state registration, and internal-control expectations that follow regulated institutions into payroll.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Garnishment volume</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Banks process wage garnishment orders for their own employees at higher volume and under strict state deadlines</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Employers must comply with federal limits on how much of an employee's earnings can be garnished under the Consumer Credit Protection Act, and every state layers its own deadlines and notice requirements on top. Financial institutions with large branch staffs see this volume constantly. A missed deadline or miscalculated withholding creates direct liability to the creditor or agency, not just the employee.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Regular-rate math</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Loan officer and branch staff commission pay must be folded into the FLSA regular rate for overtime</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Under the Fair Labor Standards Act, non-discretionary bonuses and commissions paid to non-exempt employees must be included when calculating the regular rate of pay used for overtime. Branch staff and loan officers on incentive plans who also work overtime require a recalculated overtime rate for every pay period a bonus lands, not a flat rate. Getting this wrong is a common wage-and-hour audit finding.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-branch complexity</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Every new branch in a new state is a new payroll tax registration, unemployment insurance account, and local tax setup</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Banks and credit unions that expand across state lines take on state withholding registration, state unemployment insurance accounts, and in some states local or county tax obligations for every new branch location. Internal payroll teams that handle this manually often fall behind registration deadlines when a bank opens several branches in a short window.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Internal Controls</p>
            <h2>Why does payroll get extra scrutiny at regulated banks?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px', textAlign: 'center' }}>
              Public and regulated banks operate under SOX-adjacent internal control expectations, and payroll, as a recurring cash disbursement process touching every employee, is a natural audit focus point.
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: '760px', margin: '2rem auto 0' }}>
            <p style={{ fontSize: '0.97rem', color: '#444444', lineHeight: '1.7' }}>
              Publicly traded bank holding companies fall under Section 404 of the Sarbanes-Oxley Act, which requires management to assess and report on the effectiveness of internal control over financial reporting, and the{' '}
              <a href="https://www.sec.gov/about/laws/soa2002.pdf" target="_blank" rel="noopener noreferrer">U.S. Securities and Exchange Commission</a> enforces these requirements for public issuers. Payroll is a recurring, high-volume disbursement process, which makes it a natural focus area for control testing: segregation of duties between who approves pay changes and who processes them, documented approval trails for off-cycle payments and bonus runs, and access controls over who can view or edit compensation data. Even privately held banks and credit unions increasingly hold payroll to this standard because their own regulators and auditors expect it. BEG's managed payroll process documents every approval step and maintains a clean audit trail, so your controls testing has something concrete to point to.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE PAY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who We Manage Payroll For</p>
            <h2>Every role in your institution, paid correctly every cycle</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Loan officers and mortgage originators', body: 'Non-discretionary commission and incentive pay folded correctly into the FLSA regular rate for overtime calculations, with clean documentation for every incentive plan.' },
              { title: 'Branch and teller staff', body: 'Multi-branch scheduling, shift differentials where applicable, and branch-level bonus programs processed on time, every cycle, across every location.' },
              { title: 'Back-office and operations staff', body: 'Standard salaried and hourly processing with the same audit-ready documentation trail as every other employee category at your institution.' },
              { title: 'Executive and officer compensation', body: 'Deferred compensation, equity-linked incentive pay, and officer-level compensation structures processed with the discretion and documentation regulated institutions require.' },
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
            <h2>Three steps to fully managed banking payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your branch network, garnishment order volume, loan officer and branch incentive plans, and existing internal control documentation. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure garnishment processing workflows, set up regular-rate overtime calculations for commissioned staff, and complete state registrations for every branch location. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every garnishment deadline, every state filing, and a documented approval trail for your internal controls testing -- fully managed by BEG.' },
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

      {/* THREE BONUSES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer banks and credit unions</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Our core banking and payroll integrations took months to set up. We cannot rebuild that."',
                body: 'BEG operates as your managed payroll team inside your current system. We do not require a platform switch. If you eventually want isolved for deeper HCM functionality, we can manage that transition, but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Our current vendor charges extra for every garnishment order and off-cycle run."',
                body: 'The $25-$45 PEPM rate covers everything: garnishment processing, regular-rate overtime calculations, multi-state branch filings, year-end W-2s, and BEG support. One number, everything included, no surprise line items.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands regulated-institution payroll.',
                objection: 'Common objection: "Every time we call our payroll vendor we explain garnishment rules from scratch."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center. When a new garnishment order lands, when you open a branch in a new state, or when your auditors want to see the approval trail on a bonus run, one message to your BEG contact gets it handled.',
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
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Getting Started</p>
            <h2>From scope review to compliant banking payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your branch network, garnishment volume, and incentive-comp structures, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, garnishment and commission documentation reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Garnishment workflows, regular-rate overtime calculations, and branch state registrations configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed banking pay run, with a documented approval trail from day one.' },
            ].map(({ day, title, body }) => (
              <div key={day} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A miscalculated regular rate on commissioned staff is a wage-and-hour finding waiting to happen.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>The U.S. Department of Labor's Wage and Hour Division routinely finds regular-rate miscalculations among the most common FLSA overtime violations, and back-pay liability accrues per affected employee, per pay period, going back up to three years for willful violations under{' '}
                <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#ECAC60' }}>the Fair Labor Standards Act</a>. Managed payroll builds the regular-rate recalculation into every pay cycle a bonus or commission lands, so it never becomes an audit finding.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix garnishment and branch-registration gaps is before your next audit cycle.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Transitions take 30-60 days. Starting the scope review now means a documented, audit-ready payroll process in place well before your next internal controls review.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" industry="banking" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your branch network, garnishment volume, and incentive-comp structures, and give you a fixed monthly cost.</p>
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
              { title: 'Finance & Accounting Payroll', href: '/services/managed-payroll/finance', desc: 'Bonus structures, commission tracking, and zero-error filings for finance firms.' },
              { title: 'Insurance Agency Payroll', href: '/services/managed-payroll/insurance-agency', desc: 'Commission-based producer pay and multi-state agency licensing complexity handled.' },
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
            <h2>Common questions from banks and credit unions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle wage garnishment processing for our staff?</h3>
              <p>We manage the full garnishment lifecycle: calculating correct withholding under federal limits set by the Consumer Credit Protection Act and applicable state law, meeting each state's notice and remittance deadlines, and maintaining documentation for audit purposes. High garnishment volume across a large branch staff is exactly the kind of recurring complexity managed payroll is built to absorb.</p>
            </div>
            <div className="faq-item">
              <h3>Why does loan officer commission pay complicate overtime calculations?</h3>
              <p>Under the FLSA, non-discretionary commissions and incentive pay must be included in the regular rate of pay used to calculate overtime for non-exempt employees. This means the overtime rate changes in any pay period a commission or bonus is paid. BEG recalculates the regular rate correctly every cycle, not just on a flat hourly basis.</p>
            </div>
            <div className="faq-item">
              <h3>We are opening branches in new states. Can you handle the registrations?</h3>
              <p>Yes. Every new branch location typically requires state withholding tax registration and a state unemployment insurance account, and some states add local tax obligations. BEG handles the registration and ongoing filing for every new branch as part of the standard managed payroll engagement, at no separate onboarding fee.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide documentation for our internal controls or SOX testing?</h3>
              <p>Yes. BEG's managed payroll process maintains a documented approval trail for pay changes, off-cycle runs, and bonus disbursements. For public or regulated bank holding companies subject to SOX Section 404 controls testing, this documentation gives your internal audit team a concrete process to test against.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration to isolved is available if you want a more capable platform, but it is never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: garnishment processing, regular-rate overtime calculations for commissioned staff, multi-state branch tax filings, year-end W-2s, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed banking payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure garnishment workflows, regular-rate overtime calculations, and state registrations for every branch in your existing system.</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How does BEG handle wage garnishment processing for our staff?', acceptedAnswer: { '@type': 'Answer', text: 'We calculate correct withholding under federal and state limits, meet notice and remittance deadlines, and maintain audit documentation for every garnishment order.' } },
          { '@type': 'Question', name: 'Why does loan officer commission pay complicate overtime calculations?', acceptedAnswer: { '@type': 'Answer', text: 'Non-discretionary commissions must be included in the FLSA regular rate for overtime, changing the overtime rate in any pay period a commission is paid. BEG recalculates this correctly every cycle.' } },
          { '@type': 'Question', name: 'Do you provide documentation for our internal controls or SOX testing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG maintains a documented approval trail for pay changes and bonus disbursements that internal audit teams can test against.' } },
          { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is optional, never required.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
          { '@type': 'ListItem', position: 3, name: 'Banking & Financial Institutions', item: 'https://www.beghr.com/services/managed-payroll/banking' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/services/managed-payroll/banking',
      }) }} />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Wage Garnishment Compliance for Banks: Deadlines, Limits, and Penalties',
            excerpt: 'Federal limits, state deadlines, and what happens when a garnishment order is processed late or incorrectly.',
            href: '/blog/payroll/banking/wage-garnishment-compliance-banks',
          },
          {
            category: 'Payroll compliance',
            title: 'FLSA Regular Rate Rules for Commissioned Bank Employees',
            excerpt: 'Why loan officer and branch incentive pay changes the overtime math, and how to calculate it correctly every cycle.',
            href: '/blog/payroll/banking/flsa-regular-rate-commission',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. In-House for Multi-Branch Banks',
            excerpt: 'What a multi-state branch network actually spends on in-house payroll administration versus fully managed outsourcing.',
            href: '/blog/payroll/banking/managed-payroll-vs-in-house',
          },
        ]}
      />
    </ServicePage>
  );
}
