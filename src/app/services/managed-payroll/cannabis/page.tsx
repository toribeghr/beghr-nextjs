import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cannabis Payroll | Instant Quote | BEG',
  description: 'Cannabis payroll fully managed at $25-45 PEPM. 280E compliance, state licensing, and banking-adjacent payroll complexity handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/cannabis' },
  openGraph: {
    title: 'Cannabis Payroll | Instant Quote | BEG',
    description: 'Cannabis payroll fully managed at $25-45 PEPM. 280E compliance, state licensing, and banking-adjacent payroll complexity handled.',
    url: 'https://www.beghr.com/services/managed-payroll/cannabis',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis Payroll | Instant Quote | BEG', description: 'Cannabis payroll fully managed at $25-45 PEPM. 280E compliance, state licensing, and banking-adjacent payroll complexity handled.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-cannabis');

export default function PayrollCannabisPage() {
  return (
    <ServicePage
      heroVideoId="Fapff-oQSzU"
      imageSrc="/assets/hero-images/cannabis.svg"
      imageAlt="Cannabis dispensary with fully managed payroll compliance"
      eyebrow="Managed Payroll · Cannabis & Dispensaries"
      title="Managed Payroll for Cannabis Dispensaries"
      description="Cannabis payroll has rules no generic payroll provider understands. IRC 280E, state licensing employment requirements, banking limitations, and multi-state operational complexity make cannabis and dispensary payroll unlike anything else. We manage all of it at $25-$45 per employee per month -- so you focus on your operation, not on payroll compliance that can unravel a license."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: '35+ states', label: 'Legal cannabis markets we operate in' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Cannabis Payroll Is Different</p>
            <h2>Three compliance landmines most cannabis operators are sitting on right now.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>IRC 280E</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Cannabis companies cannot deduct ordinary business expenses -- including most payroll -- at the federal level</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>IRC 280E prohibits federal deductions for businesses trafficking Schedule I or II controlled substances. Cannabis operators can only deduct cost of goods sold (COGS). Misallocating payroll costs between COGS and non-COGS creates both tax exposure and audit risk. Proper payroll classification is not optional -- it is the foundation of your federal tax position.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Banking limits</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Most mainstream banks will not serve cannabis businesses, creating payroll distribution complications</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Cannabis operators work with a limited set of financial institutions that accept the industry. Payroll must flow through compliant banking relationships, with documentation trails that satisfy both the bank and state regulators who may audit your payroll records alongside your license renewal.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>State licensing</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Employee licensing requirements vary by state and role -- and non-compliance can affect your license</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Most cannabis states require dispensary agents, handlers, or key employees to hold state-issued badges or cards. Paying an employee whose credentials have lapsed creates regulatory exposure. Your payroll process needs to track and flag credential status alongside compensation.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHAT WE MANAGE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What We Manage</p>
            <h2>Payroll built for how cannabis operations actually work</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: '280E payroll allocation', body: 'We classify payroll costs between COGS-eligible (production, cultivation, processing) and non-COGS (dispensary sales, administration) roles to support your federal tax position. Proper classification is the single most important payroll decision a cannabis company makes.' },
              { title: 'Multi-state operations', body: 'Each state has different cannabis employment regulations, licensing requirements, and payroll tax rules. If you operate dispensaries in multiple states, we handle registrations, filings, and compliance in each jurisdiction as part of the managed service.' },
              { title: 'Employee credential tracking', body: 'We maintain records of agent card, handler badge, and key employee license status alongside payroll records -- so you have documentation ready for state audits and license renewals.' },
              { title: 'Banking-compliant payroll processing', body: 'We work with your cannabis-friendly banking relationship to process payroll compliantly, with the audit trail your bank and state regulators require.' },
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
            <h2>Three steps to fully managed cannabis payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your employee roster by role, your 280E COGS allocation structure, your banking relationship, and your state licensing requirements. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure your payroll cost allocation between COGS and non-COGS roles, set up state registrations, and document the process trail your regulators expect. No system migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every 280E allocation record, and every year-end W-2 -- fully managed by BEG. Your team approves, we execute.' },
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
            <h2>Three things most payroll vendors cannot offer cannabis companies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Most payroll platforms will not serve cannabis companies, so we are already on a limited system."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team within your existing system. If you want to move to iSolved for a more capable HCM platform that serves the cannabis industry, we can manage that transition -- but it is never a prerequisite.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Cannabis-specific payroll services charge premium rates and tack on compliance surcharges."',
                body: 'The $25-$45 PEPM rate covers everything: payroll processing, 280E allocation documentation, state filings, multi-state registrations, year-end W-2s, and BEG support.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands cannabis payroll.',
                objection: 'Common objection: "Generic payroll support does not understand 280E or state cannabis licensing requirements."',
                body: 'Your BEG payroll specialist is your ongoing point of contact -- not a call center rep who has never seen a cannabis operation. When you add a location, hire for a new license tier, or need to reallocate payroll costs for a tax filing, one message handles it.',
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
            <h2>From scope review to live cannabis payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your employee roster by role, 280E allocation structure, banking relationship, and state licensing requirements -- and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, employee roster and 280E cost allocation structure reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: '280E payroll cost allocation, state registrations, and regulatory compliance documentation configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed cannabis pay run -- BEG executes, your team approves. No migration required.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A 280E audit finding costs more than years of managed payroll.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>The IRS audits cannabis companies at significantly higher rates than other industries. An audit that finds improper 280E payroll cost allocation -- moving non-COGS labor into COGS positions -- can result in back taxes, penalties, and interest that threaten the viability of the business. Properly managed payroll with documented 280E allocation is your first line of defense.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix payroll compliance is before a license renewal audit.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>State cannabis regulators increasingly review payroll records during license renewals and compliance checks. Getting your payroll documentation in order before your next renewal window means the difference between a clean audit and a license condition. Start now -- transitions take 30-60 days.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your 280E allocation structure, employee roster, and state licensing requirements -- and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from cannabis operators and dispensaries</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How do you handle 280E payroll cost allocation?</h3>
              <p>We classify your employees by role into COGS-eligible (production, cultivation, processing) and non-COGS (retail sales, administration, management) categories. This classification determines which payroll costs your tax team can include in COGS for federal tax purposes. We maintain the allocation records and can provide documentation for your CPA or tax attorney.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with our cannabis-friendly bank?</h3>
              <p>Yes. We work within your existing banking relationship and ensure payroll processing complies with the documentation requirements your bank imposes. We do not require you to change banks.</p>
            </div>
            <div className="faq-item">
              <h3>What if we operate dispensaries in multiple states?</h3>
              <p>Multi-state cannabis operations are managed as a single engagement. We handle state-specific employment regulations, licensing employment requirements, and payroll tax registrations and filings in each jurisdiction you operate in.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option if you want to upgrade, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: payroll processing, 280E cost allocation documentation, state tax filings, multi-state registrations, year-end W-2s, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>Are cannabis companies subject to the same state payroll tax rules as other businesses?</h3>
              <p>Yes. Cannabis businesses pay state payroll taxes -- state income tax withholding, unemployment insurance, and applicable local taxes -- the same as any other employer. The federal complexity comes from IRC 280E limiting federal income tax deductions, not from payroll taxes themselves. State payroll tax compliance for cannabis is fully managed as part of our service.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle payroll if we have cash flow limitations from banking restrictions?</h3>
              <p>Banking limitations affect how cannabis companies fund payroll, not the payroll mechanics themselves. We work within your existing banking relationship and payroll funding process. If you use a cannabis-friendly bank or a dedicated payroll account, we process through that account with the documentation trail your bank and state regulators require.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to get cannabis payroll into compliance?</h3>
              <p>From signed agreement to compliant, managed payroll: 3-5 business days. We map your employee roster by role, 280E allocation structure, and state licensing requirements during the scope call, then configure payroll and documentation in your existing system. Most cannabis operators are running properly documented managed payroll within a week of the first call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BACK TO HUB */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/cannabis/cannabis-payroll-280e" style={{ color: '#ECAC60' }}>Cannabis Payroll and 280E: How to Code Payroll Costs to Minimize Tax Impact</Link></li>
            <li><Link href="/blog/payroll/cannabis/cannabis-payroll-banking" style={{ color: '#ECAC60' }}>Cannabis Payroll Without a Bank: How Dispensaries Pay Employees</Link></li>
            <li><Link href="/blog/payroll/cannabis/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Cannabis Businesses</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different industry?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How do you handle 280E payroll cost allocation?', acceptedAnswer: { '@type': 'Answer', text: 'We classify employees by role into COGS-eligible and non-COGS categories, maintain allocation records, and provide documentation for your tax team.' } },
              { '@type': 'Question', name: 'Can you work with our cannabis-friendly bank?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work within your existing banking relationship and ensure payroll processing meets your bank\'s documentation requirements.' } },
              { '@type': 'Question', name: 'What if we operate dispensaries in multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'Multi-state cannabis operations are managed as a single engagement covering state-specific employment regulations and payroll tax registrations.' } },
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, 280E documentation, state filings, year-end W-2s, and BEG support.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Cannabis & Dispensaries', item: 'https://www.beghr.com/services/managed-payroll/cannabis' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: "Cannabis Business Payroll Under Section 280E: What You Can and Can't Deduct",
            excerpt: 'Section 280E blocks most deductions for cannabis businesses -- including payroll for non-COGS roles. Here is how to structure pay correctly.',
            href: '/blog/payroll/cannabis/cannabis-payroll-280e',
          },
          {
            category: 'Payroll compliance',
            title: "Cannabis Payroll and Banking: How to Pay Employees When Banks Won't Help",
            excerpt: 'Most banks will not serve cannabis businesses. Here are the payroll processing options that actually work for dispensaries and grow operations.',
            href: '/blog/payroll/cannabis/cannabis-payroll-banking',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Cannabis Businesses',
            excerpt: 'What cannabis operators actually spend on internal payroll vs. what outsourcing costs -- including compliance risk on both sides.',
            href: '/blog/payroll/cannabis/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
