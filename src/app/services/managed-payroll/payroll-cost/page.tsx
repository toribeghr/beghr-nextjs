import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'What Payroll Really Costs Per Month (Full Breakdown) | BEG',
  description: 'In-house, software, PEO, or managed: the real all-in monthly cost of running payroll, compared side by side, plus BEG at $25-$45 PEPM all-inclusive.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/payroll-cost' },
  openGraph: {
    title: 'What Payroll Really Costs Per Month (Full Breakdown) | BEG',
    description: 'In-house, software, PEO, or managed: the real all-in monthly cost of running payroll, compared side by side, plus BEG at $25-$45 PEPM all-inclusive.',
    url: 'https://www.beghr.com/services/managed-payroll/payroll-cost',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'What Payroll Really Costs Per Month (Full Breakdown) | BEG', description: 'In-house, software, PEO, or managed: the real all-in monthly cost of running payroll, compared side by side, plus BEG at $25-$45 PEPM all-inclusive.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('payroll-cost');

export default function PayrollCostPage() {
  return (
    <ServicePage
      showHeroImage={false}
      eyebrow="Managed Payroll · Cost Guide"
      title="What Does a Payroll Service Actually Cost Per Month?"
      description="The honest, all-in number: what companies pay for in-house payroll staff, DIY software, a PEO, an outside accountant, or a fully managed service, compared side by side at real headcounts. BEG runs the whole function for $25-$45 per employee per month, all-inclusive, with a $500 monthly minimum."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
        { value: '$500', label: 'Monthly minimum, all sizes' },
        { value: '3-5 Days', label: 'To live managed payroll' },
      ]}
    >
      {/* TLDR */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="tldr reveal" style={{ background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>TL;DR</p>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Running payroll costs somewhere between roughly $300 a month for basic DIY software and $9,000 a month or more for an in-house payroll manager or PEO, depending on headcount and who does the work. BEG delivers a fully managed service, not software, at $25-$45 per employee per month all-inclusive, with a $500 monthly minimum for small teams.
            </p>
          </div>
        </div>
      </section>

      {/* Q1: How much does payroll cost per month */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Direct Answer</p>
            <h2>How much does a payroll service cost per month?</h2>
          </div>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1rem auto 0', fontSize: '1.02rem', lineHeight: '1.75', color: '#333', fontWeight: 500 }}>
            A payroll service typically costs $300 to $700 monthly for self-service software at 20-50 employees, $1,250 to $2,250 monthly for a fully managed service at the same size, and $6,000 to $10,000 or more monthly for an in-house payroll manager or a PEO, depending on headcount, states, and what is included.
          </p>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1.5rem auto 0', color: '#555', lineHeight: '1.75' }}>
            The number that matters is not the sticker price on a plan page. It is the all-in cost once you add the base fee, the per-employee fee, the tax filing add-on most vendors charge separately, the time your team spends running it, and the risk of a missed filing. Below is what each method actually costs once those pieces are counted.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Cost By Method</p>
            <h2>Payroll cost compared: in-house, software, PEO, accountant, and managed service</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table style={{ width: '100%', minWidth: '760px', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#000', color: '#ECAC60' }}>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700, minWidth: '190px' }}>Method</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Monthly cost (25 employees)</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Monthly cost (50 employees)</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Who does the work</th>
                  <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Compliance risk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['In-house payroll manager', '$5,000-$7,500', '$5,000-$7,500 (same salary)', 'Your employee', 'On you if they leave or make an error'],
                  ['DIY payroll software', '$200-$450', '$350-$700', 'You or your team, every cycle', 'You own filing accuracy'],
                  ['Outside accountant / CPA firm', '$400-$900', '$700-$1,500', 'Your accountant, on a billing cycle', 'Shared, but you pay for their time to fix issues'],
                  ['PEO (co-employment)', '$3,125-$5,000', '$6,250-$10,000', 'PEO, but you co-employ your staff', 'Lower, but you lose employer control'],
                  ['BEG managed payroll', '$625-$1,125', '$1,250-$2,250', 'BEG, fully managed', 'BEG is accountable for accuracy'],
                ].map(([method, c25, c50, who, risk], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: method === 'BEG managed payroll' ? '#1a6e1a' : '#333' }}>{method}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{c25}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{c50}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{who}</td>
                    <td style={{ padding: '11px 16px', color: '#555' }}>{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="reveal" style={{ fontSize: '0.85rem', color: '#888', marginTop: '1rem', maxWidth: '760px' }}>
            In-house payroll manager figures assume a $60,000-$90,000 base salary plus payroll taxes and benefits, spread monthly. PEO figures reflect typical published PEPM ranges of $125-$200. BEG figures use the $25 PEPM (existing system) and $45 PEPM (isolved) rates described below.
          </p>
        </div>
      </section>

      {/* Q2: what drives cost up */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What Changes the Number</p>
            <h2>What actually drives payroll costs up?</h2>
          </div>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1rem auto 0', fontSize: '1.02rem', lineHeight: '1.75', color: '#333', fontWeight: 500, textAlign: 'center' }}>
            Headcount, the number of states you operate in, filing frequency, off-cycle and bonus runs, and whether garnishments or multi-entity payroll apply all push the monthly number up, regardless of which method you use.
          </p>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {[
              { stat: 'Multi-state', label: 'Each additional state adds a registration and a SUTA filing', sub: 'Software plans often charge extra per state. BEG includes all 50 states in the flat PEPM rate, with a one-time $300 multi-state setup fee.' },
              { stat: 'Filing frequency', label: 'Quarterly 941 and 940 filings, plus annual W-2s, add cost if unbundled', sub: 'Many DIY platforms charge a separate $30-$60 monthly add-on just for automated tax filing, per the pricing guides most vendors publish.' },
              { stat: 'Off-cycle runs', label: 'Bonus payrolls, corrections, and terminations often carry per-run fees', sub: 'BEG includes off-cycle and bonus payrolls in the flat monthly rate at no extra charge.' },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ fontSize: '0.9rem', color: '#666', marginTop: '1.5rem', textAlign: 'center' }}>
            The <a href="https://www.dol.gov/agencies/whd/state" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's state labor office directory</a> is the primary source for confirming state-specific wage and hour requirements before you set up multi-state payroll.
          </p>
        </div>
      </section>

      {/* Q3: how BEG pricing works */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The BEG Model</p>
            <h2>How does BEG's $25-$45 PEPM pricing work?</h2>
          </div>
          <p className="reveal" style={{ maxWidth: '680px', margin: '1rem auto 0', fontSize: '1.02rem', lineHeight: '1.75', color: '#333', fontWeight: 500, textAlign: 'center' }}>
            BEG charges $25 per employee per month to run payroll inside your existing system, or $45 PEPM to run it on BEG's isolved HCM platform, both all-inclusive, with a $500 monthly minimum and no migration required.
          </p>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: '$25 PEPM, your existing system', body: 'BEG operates as your managed payroll team inside ADP, Gusto, QuickBooks Payroll, Paychex, Rippling, or whatever you already run. No migration, no re-training your team.' },
              { title: '$45 PEPM, isolved platform', body: 'BEG moves you onto isolved, a full HCM platform with employee self-service, automated compliance updates, and benefits administration tools beyond basic payroll.' },
              { title: '$500 monthly minimum', body: 'Billing is the greater of $500 or your headcount times your PEPM rate. This keeps the engagement viable for BEG at very small headcounts. See the per-employee breakdown for what that means below 20 employees.' },
              { title: '3-5 business days to live payroll', body: 'From signed agreement to your first BEG-run pay cycle, most clients are live within 3-5 business days, whether staying on their current system or moving to isolved.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e5e5' }}>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.5rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', color: '#555', maxWidth: '680px', margin: '2rem auto 0' }}>
            For the full scope breakdown by tier, see <Link href="/services/managed-payroll/pricing" style={{ color: '#ECAC60', fontWeight: 600 }}>managed payroll pricing</Link>, or explore <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: 600 }}>BEG's full managed payroll service</Link> for the complete list of what is included at every headcount.
          </p>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Run Your Own Numbers</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>See what you are paying today vs. BEG.</h2>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Enter your employee count and current payroll method in the <Link href="/services/managed-payroll/cost-calculator" style={{ color: '#ECAC60', fontWeight: 600 }}>free cost calculator</Link> for an instant estimate of your current spend vs. BEG's flat PEPM rate.
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
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Real Comparison</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                A $70,000 payroll manager costs more than 30 employees on BEG.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                A payroll manager at $70,000 salary costs roughly $91,000 per year fully loaded with taxes and benefits, or about $7,580 per month. At 30 employees, BEG's managed payroll costs $750-$1,350 per month, all-inclusive. The math holds at almost any headcount below several hundred employees.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Exact Number</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Get your flat monthly cost in 90 seconds.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Answer a few quick questions about headcount, states, and your current setup. Your exact BEG monthly and annual cost shows on screen instantly, no commitment required.
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
            <h2>Common questions about payroll costs</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How much does it cost to run payroll for a small business?</h3>
              <p>Most small businesses spend $70-$250 monthly on DIY payroll software, or $625-$1,125 monthly with BEG's fully managed service for 25 employees at $25-$45 PEPM. The right choice depends on whether you want software you operate yourself or a team that runs it for you.</p>
            </div>
            <div className="faq-item">
              <h3>Is payroll software cheaper than a managed service?</h3>
              <p>The sticker price is lower, but DIY software shifts the labor of data entry, error correction, and filing verification onto your team. A managed service costs more per line item but removes that time and the compliance risk that comes with it.</p>
            </div>
            <div className="faq-item">
              <h3>Why is a PEO so much more expensive than managed payroll?</h3>
              <p>A PEO charges $125-$200 PEPM because it takes on co-employment, bundling payroll with benefits, HR, and workers' comp under a shared employer structure. BEG runs payroll only, at $25-$45 PEPM, with no co-employment and no PEO markup.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG charge extra for tax filings or W-2s?</h3>
              <p>No. Federal and state tax filings, quarterly 941 and 940 filings, and year-end W-2 preparation and delivery are included in the flat $25-$45 PEPM rate, not billed as add-ons.</p>
            </div>
            <div className="faq-item">
              <h3>What is the cheapest way to run payroll?</h3>
              <p>DIY software has the lowest sticker price, typically $70-$250 monthly. It is cheapest in dollars but most expensive in staff time and compliance risk, since your team enters data and verifies filings every cycle.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a minimum monthly cost with BEG?</h3>
              <p>Yes. Monthly billing is the greater of $500 or your employee count multiplied by your PEPM rate. For companies with very few employees, see the per-employee cost breakdown for what that minimum means in practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Want the per-employee math?{' '}
            <Link href="/services/managed-payroll/payroll-cost-per-employee" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See payroll cost per employee
            </Link>
            {' '}or read about{' '}
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
          { '@type': 'Question', name: 'How much does it cost to run payroll for a small business?', acceptedAnswer: { '@type': 'Answer', text: 'Most small businesses spend $70-$250 monthly on DIY payroll software, or $625-$1,125 monthly with a fully managed service for 25 employees at $25-$45 PEPM.' } },
          { '@type': 'Question', name: 'Is payroll software cheaper than a managed service?', acceptedAnswer: { '@type': 'Answer', text: 'The sticker price is lower, but DIY software shifts data entry, error correction, and filing verification onto your team.' } },
          { '@type': 'Question', name: 'Why is a PEO so much more expensive than managed payroll?', acceptedAnswer: { '@type': 'Answer', text: 'A PEO charges $125-$200 PEPM because it bundles co-employment, benefits, and HR. A managed payroll service runs payroll only at a lower rate.' } },
          { '@type': 'Question', name: 'What is the cheapest way to run payroll?', acceptedAnswer: { '@type': 'Answer', text: 'DIY software has the lowest sticker price around $70-$250 monthly, but shifts time and compliance risk onto your team.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
          { '@type': 'ListItem', position: 3, name: 'Payroll Cost', item: 'https://www.beghr.com/services/managed-payroll/payroll-cost' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/services/managed-payroll/payroll-cost',
      }) }} />

      <RelatedPosts
        heading="Keep reading"
        posts={[
          {
            category: 'Payroll cost',
            title: 'Payroll Cost Per Employee: The Full Breakdown by Company Size',
            excerpt: 'What one employee actually costs to run payroll for, from a 3-person shop to a 100-person company, including the $500 minimum.',
            href: '/services/managed-payroll/payroll-cost-per-employee',
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
