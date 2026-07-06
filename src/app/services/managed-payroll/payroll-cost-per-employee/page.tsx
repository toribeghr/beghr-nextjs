import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Payroll Cost Per Employee, By Company Size (2026 Data) | BEG',
  description: 'What one employee actually costs to run payroll for, from a 3-person team to 100+, including the $500 monthly minimum explained honestly.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/payroll-cost-per-employee' },
  openGraph: {
    title: 'Payroll Cost Per Employee, By Company Size (2026 Data) | BEG',
    description: 'What one employee actually costs to run payroll for, from a 3-person team to 100+, including the $500 monthly minimum explained honestly.',
    url: 'https://www.beghr.com/services/managed-payroll/payroll-cost-per-employee',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Payroll Cost Per Employee, By Company Size (2026 Data) | BEG', description: 'What one employee actually costs to run payroll for, from a 3-person team to 100+, including the $500 monthly minimum explained honestly.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('payroll-cost-per-employee');

export default function PayrollCostPerEmployeePage() {
  return (
    <ServicePage
      showHeroImage={false}
      eyebrow="Managed Payroll · Cost Per Employee"
      title="What Does Payroll Cost Per Employee, Really?"
      description="Federal and state filing, W-2 prep, direct deposit, and support, broken down per employee at real company sizes, including the very small team. BEG charges $25-$45 per employee per month, all-inclusive, with a $500 monthly minimum."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: '$500', label: 'Monthly minimum' },
        { value: '1-5 to 100+', label: 'Company sizes covered below' },
      ]}
    >
      {/* TLDR */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="tldr reveal" style={{ background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>TL;DR</p>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Payroll services typically cost $5 to $17 per employee per month on top of a base fee, or $25-$45 PEPM all-inclusive with BEG's fully managed service. Below 20-25 employees, most vendors' base fees and BEG's $500 monthly minimum both push the effective per-employee cost higher, and we explain exactly why below rather than hide it.
            </p>
          </div>
        </div>
      </section>

      {/* Q1 direct answer */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Direct Answer</p>
            <h2>How much does payroll cost per employee per month?</h2>
          </div>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1rem auto 0', fontSize: '1.02rem', lineHeight: '1.75', color: '#333', fontWeight: 500, textAlign: 'center' }}>
            Payroll services generally charge $5 to $17 per employee per month plus a separate base fee, putting effective per-employee cost anywhere from $10 to $40 depending on headcount. BEG charges a flat $25 or $45 PEPM, all-inclusive, with no separate base fee and no per-run charges.
          </p>
        </div>
      </section>

      {/* PER-EMPLOYEE BREAKDOWN BY SIZE TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="head center reveal">
            <p className="eyebrow">By Company Size</p>
            <h2>Per-employee payroll cost at different headcounts</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#000', color: '#ECAC60' }}>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Company size</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>BEG monthly total</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>BEG effective PEPM</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Typical DIY software monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1-5 employees', '$500 (minimum applies)', '$100-$500', '$60-$110'],
                  ['6-10 employees', '$500 (minimum applies)', '$50-$83', '$100-$180'],
                  ['11-19 employees', '$500 (minimum applies)', '$26-$45', '$150-$300'],
                  ['20 employees', '$500-$900', '$25-$45', '$180-$340'],
                  ['50 employees', '$1,250-$2,250', '$25-$45', '$350-$700'],
                  ['100 employees', '$2,500-$4,500', '$25-$45', '$600-$1,300'],
                ].map(([size, total, pepm, diy], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: '#333' }}>{size}</td>
                    <td style={{ padding: '11px 16px', color: '#1a6e1a', fontWeight: 600 }}>{total}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{pepm}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Q2: the $500 minimum, addressed honestly */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Honest Answer</p>
            <h2>Why is there a $500 monthly minimum, and what does it mean for a small team?</h2>
          </div>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1rem auto 0', fontSize: '1.02rem', lineHeight: '1.75', color: '#333', fontWeight: 500, textAlign: 'center' }}>
            The $500 minimum exists because running compliant multi-state payroll, filings, and support has a fixed cost regardless of headcount. At 1-5 employees that works out to $100-$500 per employee monthly, higher than the $25-$45 PEPM rate, and we would rather tell you that up front than bury it.
          </p>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1.5rem auto 0', color: '#555', lineHeight: '1.75' }}>
            Every payroll provider, software or managed, has some form of fixed cost floor. DIY platforms build it into a base fee ($40-$150 monthly regardless of employee count). BEG builds it into the $500 minimum instead of a separate base fee plus per-employee add-on. The difference at very low headcounts is that BEG's $500 includes the full managed scope: filings, W-2s, support, and a dedicated contact, not just software access.
          </p>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1.5rem auto 0', color: '#555', lineHeight: '1.75' }}>
            For a 3-person company, that means BEG is not the cheapest option in raw dollars if you are comfortable running a DIY platform yourself. It becomes the better option once you count the time spent learning the software, verifying every filing, and being personally on the hook for errors, since the{' '}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-due-dates" target="_blank" rel="noopener noreferrer">IRS employment tax due date schedule</a>{' '}
            applies the same filing deadlines to a 3-person company as a 300-person one.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED PER EMPLOYEE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Per-Employee Scope</p>
            <h2>What is included for every employee, regardless of headcount</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Federal and state tax withholding', body: 'Correct withholding calculated and remitted every pay cycle, per current IRS and state tables.' },
              { title: 'Direct deposit and pay stubs', body: 'Direct deposit processing and digital pay stub delivery for every employee, every cycle.' },
              { title: 'W-2 preparation and delivery', body: 'Year-end W-2 preparation, SSA filing, and employee delivery included at no extra per-form charge.' },
              { title: 'New hire reporting', body: 'State new hire reporting filed within required deadlines for every new employee, in all 50 states.' },
              { title: 'Employee paycheck support', body: 'Employees call BEG directly with paycheck questions. Not a queue, not a ticket. A person who knows the account.' },
              { title: 'Garnishment processing', body: 'Court-ordered garnishments calculated, withheld, and remitted correctly for any employee under an order.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.5rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', color: '#555', maxWidth: '680px', margin: '2rem auto 0' }}>
            See the full tier-by-tier scope on <Link href="/services/managed-payroll/pricing" style={{ color: '#ECAC60', fontWeight: 600 }}>managed payroll pricing</Link>, or the complete service overview at <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: 600 }}>BEG managed payroll</Link>.
          </p>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Your Exact Per-Employee Cost</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>See your headcount's real number.</h2>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Use the <Link href="/services/managed-payroll/cost-calculator" style={{ color: '#ECAC60', fontWeight: 600 }}>free cost calculator</Link> to enter your exact headcount and see your monthly total, whether the $500 minimum applies, and your effective per-employee rate.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/services/managed-payroll/cost-calculator" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2rem', display: 'inline-block', marginBottom: '0.75rem' }}>
                Open the Cost Calculator
              </Link>
              <p style={{ fontSize: '0.82rem', color: '#888', margin: 0 }}>No email required. Instant results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>What Growth Does to the Math</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                The $500 minimum disappears the moment you cross 20 employees.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                At 20 employees and $25 PEPM, your bill is already above the $500 floor. Every employee you add after that point costs a flat $25-$45, no jump, no new base fee, no renegotiation.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Exact Number</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Get your exact per-employee cost in 90 seconds.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Tell us your headcount and current setup. See your exact monthly total and whether the minimum applies, on screen, instantly.
              </p>
              <div style={{ marginTop: '1.25rem' }}>
                <PricingCta service="managed-payroll" subline={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about per-employee payroll cost</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What does payroll cost for just one employee?</h3>
              <p>With BEG, a single employee falls under the $500 monthly minimum, since $25-$45 for one person would not cover the fixed cost of compliant multi-state payroll and filings. Some DIY software plans can run cheaper for a single employee, often $30-$60 monthly, but you do the data entry and filing verification yourself.</p>
            </div>
            <div className="faq-item">
              <h3>Why does BEG have a minimum instead of just charging low PEPM at small sizes?</h3>
              <p>A per-employee-only rate at very low headcounts would not cover the fixed cost of tax registrations, filings, and support that apply regardless of size. The $500 minimum keeps the engagement fair for both sides rather than under-pricing small accounts and cutting corners on compliance.</p>
            </div>
            <div className="faq-item">
              <h3>At what headcount does BEG stop being more expensive per employee than DIY software?</h3>
              <p>Once you are at roughly 20-25 employees, BEG's $500-$1,125 monthly total is comparable to or better than many mid-tier DIY software plans with tax filing add-ons, while including full management rather than software access alone.</p>
            </div>
            <div className="faq-item">
              <h3>Does the per-employee rate change based on part-time or seasonal staff?</h3>
              <p>No. The PEPM rate applies to any active employee paid during that period, part-time, seasonal, or full-time. Your monthly invoice reflects your actual active headcount for that cycle.</p>
            </div>
            <div className="faq-item">
              <h3>Is the per-employee rate different for multi-state employees?</h3>
              <p>The ongoing PEPM rate is the same regardless of which state an employee works in. A one-time $300 setup fee applies when adding a new state to your account, covering registration and configuration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Want the full monthly breakdown across every method?{' '}
            <Link href="/services/managed-payroll/payroll-cost" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See the full payroll cost guide
            </Link>
            {' '}or compare{' '}
            <Link href="/services/managed-payroll/payroll-system-cost" style={{ color: '#ECAC60', fontWeight: '600' }}>
              payroll system and software costs
            </Link>
            .
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What does payroll cost for just one employee?', acceptedAnswer: { '@type': 'Answer', text: 'With BEG, a single employee falls under the $500 monthly minimum. DIY software can run cheaper in raw dollars for one employee, typically $30-$60 monthly, but requires self-service data entry and filing verification.' } },
          { '@type': 'Question', name: 'Why does BEG have a minimum instead of just charging low PEPM at small sizes?', acceptedAnswer: { '@type': 'Answer', text: 'A per-employee-only rate at very low headcounts would not cover the fixed cost of compliant multi-state payroll and filings, so BEG uses a $500 monthly minimum instead.' } },
          { '@type': 'Question', name: 'At what headcount does BEG stop being more expensive per employee than DIY software?', acceptedAnswer: { '@type': 'Answer', text: 'Around 20-25 employees, BEG total cost becomes comparable to mid-tier DIY software plans with filing add-ons, while including full management.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
          { '@type': 'ListItem', position: 3, name: 'Payroll Cost Per Employee', item: 'https://www.beghr.com/services/managed-payroll/payroll-cost-per-employee' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/services/managed-payroll/payroll-cost-per-employee',
      }) }} />

      <RelatedPosts
        heading="Keep reading"
        posts={[
          {
            category: 'Payroll cost',
            title: 'What Payroll Really Costs Per Month, Compared by Method',
            excerpt: 'In-house, software, PEO, or managed: the real all-in monthly cost of running payroll, side by side.',
            href: '/services/managed-payroll/payroll-cost',
          },
          {
            category: 'Payroll systems',
            title: 'Payroll System Cost: Software vs. a Fully Managed Service',
            excerpt: 'Buying an HCM system and running it yourself vs. paying BEG to run payroll for you. The real cost difference.',
            href: '/services/managed-payroll/payroll-system-cost',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Why SaaS Companies Outsource Payroll Instead of Hiring In-House',
            excerpt: 'A full-time payroll manager costs $60K-$100K before benefits. Here is the math on what outsourcing actually costs.',
            href: '/blog/payroll/technology/saas-payroll-outsourcing',
          },
        ]}
      />
    </ServicePage>
  );
}
