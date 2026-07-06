import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Pay Stub Services | Instant Quote, $25-$45 PEPM | BEG';
const DESC = 'Pay stub services generated from actual processed payroll, not a fabricated template. Employee self-service access, state compliance, digital and paper.';
const URL = 'https://www.beghr.com/services/managed-payroll/pay-stub-services';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('pay-stub-services');

const FAQS: [string, string][] = [
  [
    'What is the difference between a pay stub generator and real pay stub services?',
    'A pay stub generator fabricates a document from numbers you type in, with no actual payroll behind it. Real pay stub services produce a stub from wages your employer actually processed, withheld, and paid.',
  ],
  [
    'Is it legal to use a free pay stub generator?',
    'Using a fabricated pay stub to misrepresent income, for a loan or lease application for example, can constitute fraud. Legitimate pay stub services only issue stubs tied to payroll that was actually run and taxes actually withheld.',
  ],
  [
    'Are employers required to provide pay stubs?',
    'There is no federal requirement to issue pay stubs, but many states mandate it, and several specify exactly what information must appear on each stub.',
  ],
  [
    'Can employees access pay stubs digitally?',
    'Yes. BEG provides employee self-service access to digital pay stubs, with paper available where state law or employee preference requires it.',
  ],
  [
    'What should a pay stub actually show?',
    'At minimum: gross wages, itemized deductions, net pay, pay period dates, and hours worked where applicable. Several states require additional detail such as pay rate and employer address.',
  ],
];

export default function PayStubServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: URL,
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
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
              { '@type': 'ListItem', position: 3, name: 'Pay Stub Services', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Pay Stub Access"
        title="Pay stub services built on real payroll, not a fill-in-the-blank template."
        description="Accurate gross-to-net breakdowns, employee self-service access, and state-specific compliance, generated from payroll BEG actually processed. Included in every managed payroll plan at $25-$45 PEPM."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: 'Included', label: 'In every BEG managed payroll plan' },
          { value: 'All 50', label: 'States, compliant formatting' },
          { value: 'Digital + Paper', label: 'Employee self-service access' },
        ]}
      >
        {/* TL;DR */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="tldr reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Bottom Line Up Front</p>
              <p style={{ margin: 0, color: '#333333', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Real pay stub services generate a stub from payroll that was actually processed and taxed, not a fabricated template. Several states legally require specific pay stub content. BEG includes accurate, state-compliant, self-service pay stub access in every managed payroll plan at $25-$45 PEPM.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT ARE PAY STUB SERVICES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Basics</p>
              <h2>What are pay stub services, exactly?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                Pay stub services produce the itemized wage statement employees receive each pay period, showing gross wages, deductions, and net pay. Provided correctly, that stub is generated as a byproduct of payroll that was actually run, not typed into a template after the fact.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                Most searches for &quot;pay stub services&quot; surface two very different kinds of results: legitimate payroll providers, and standalone &quot;pay stub generator&quot; tools that let anyone type in a company name and income figure and print a document in minutes. Those are not the same product, and the difference matters more than most comparisons acknowledge.
              </p>
            </div>
          </div>
        </section>

        {/* THE COMPLIANCE RISK CALLOUT */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Read This Before Using a Free Generator</p>
              <h2>Why is a cheap pay stub generator actually a compliance risk?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                A free or cheap pay stub generator fabricates a document from whatever numbers a user enters, with no actual payroll, tax withholding, or employer verification behind it. Using that document to represent real income, for a loan, lease, or income verification, is a real fraud exposure for whoever presents it.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                A legitimate pay stub is a record of payroll that already happened: wages calculated, taxes withheld, and money actually paid. A generated stub from a standalone tool skips all of that. It looks identical on the page, which is exactly the problem. Employers who allow employees to self-serve stubs from an unverified tool, or who use one internally to patch a payroll gap, are creating a document trail that does not match their actual tax filings, a mismatch that surfaces the moment a stub is compared against W-2 or 941 filings.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                BEG pay stubs are generated exclusively from payroll actually processed for your company: real hours, real withholding, real net pay, matching what is filed and deposited.
              </p>
            </div>
          </div>
        </section>

        {/* STATE REQUIREMENTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">State Compliance</p>
              <h2>Do states actually require specific pay stub content?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                There is no federal law requiring pay stubs, but a majority of states do, and some specify exactly what must appear on every stub, down to itemized deduction categories and pay rate disclosure.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                The federal <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer">Fair Labor Standards Act requires employers to keep payroll records</a> such as hours worked and wages paid, but it does not require those records be distributed to employees as a pay stub. State law fills that gap, and requirements vary widely:
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  state: 'California',
                  body: 'Requires an itemized statement with gross wages, total hours worked, all deductions, net wages, pay period dates, and applicable hourly rates, among other items.',
                  href: 'https://www.dir.ca.gov/dlse/faq_paydays.htm',
                  label: 'California DIR: Pay Day requirements',
                },
                {
                  state: 'Texas',
                  body: 'Requires a written earnings statement each pay period showing pay rate, hours worked, and deductions; electronic stubs are permitted if employees can print them.',
                  href: 'https://www.twc.texas.gov/news/efte/wage_statements_or_pay_stubs.html',
                  label: 'Texas Workforce Commission: wage statements',
                },
                {
                  state: 'New York',
                  body: 'Mandates a detailed wage statement with gross and net wages, deductions, pay basis, and applicable rates, provided with every payment of wages.',
                  href: 'https://dol.ny.gov/system/files/documents/2021/03/p715.pdf',
                  label: 'New York DOL: wage statement requirements',
                },
              ].map(({ state, body, href, label }) => (
                <div key={state} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>{state}</strong>
                  <p style={{ margin: '0 0 0.75rem', fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{body}</p>
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem' }}>{label}</a>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              BEG tracks state-specific pay stub content requirements as part of standard <Link href="/services/managed-payroll">managed payroll service</Link>, so your stub format stays compliant automatically as your workforce grows into new states.
            </p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What BEG Pay Stub Access Includes</p>
              <h2>What should you expect from real pay stub services?</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Accurate gross-to-net breakdown', body: 'Every stub reflects the exact wages, withholding, and deductions actually processed for that pay period, not an estimate or a template.' },
                { title: 'Employee self-service access', body: 'Employees log in to view and download current and historical pay stubs on demand, without emailing HR or waiting on a request.' },
                { title: 'Digital and paper options', body: 'Digital access by default, with paper stubs available where state law or an individual employee requires a printed copy.' },
                { title: 'State-specific formatting', body: 'Stub content and layout adjusted automatically to meet the itemization rules of whatever state the employee works in.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Pay stub access is one part of what a full <Link href="/services/managed-payroll/employer-payroll-provider">employer payroll provider</Link> handles. Comparing providers first? Read <Link href="/services/managed-payroll/payroll-companies">how to evaluate payroll companies</Link>, or see the full <Link href="/services/managed-payroll/payroll-outsourcing">payroll outsourcing</Link> model.
            </p>
          </div>
        </section>

        {/* CLOSE */}
        <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="beg-grid-2 reveal">
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>Real Payroll, Real Stubs</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A pay stub is only as accurate as the payroll behind it.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG pay stubs come from payroll actually run for your company, matching what is filed and deposited, not a form filled in after the fact.</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>See Your Number First</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Pay stub access is included, not an add-on.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Get your exact managed payroll rate on screen in 90 seconds, no sales call required.</p>
              </div>
            </div>
            <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <PricingCta service="managed-payroll" subline={false} />
              <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>90 seconds. Your exact monthly and annual rate, on screen.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '780px' }}>
            <div className="head center reveal">
              <p className="eyebrow">FAQ</p>
              <h2>Pay stub services, common questions</h2>
            </div>
            <div className="faq reveal">
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedPosts
          heading="From the blog"
          posts={[
            {
              category: 'Payroll outsourcing',
              title: 'ADP vs. Paychex: Which Payroll Provider Actually Costs Less?',
              excerpt: 'A transparent breakdown of what companies actually pay each provider, and where the hidden fees show up.',
              href: '/services/managed-payroll/adp-vs-paychex',
            },
            {
              category: 'Payroll outsourcing',
              title: 'Managed Payroll Pricing: What $25-$45 PEPM Actually Includes',
              excerpt: 'A full breakdown of what is included in BEG fully managed payroll pricing, and how it compares to hiring in-house.',
              href: '/services/managed-payroll/pricing',
            },
            {
              category: 'Payroll outsourcing',
              title: 'Payroll Cost Calculator: Estimate Your Fully Managed Rate',
              excerpt: 'Run your headcount through our calculator to see what fully managed payroll would cost your company per month.',
              href: '/services/managed-payroll/cost-calculator',
            },
          ]}
        />
      </ServicePage>
    </>
  );
}
