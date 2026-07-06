import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Payroll Companies Compared | Instant Quote, $25-$45 PEPM | BEG';
const DESC = 'Companies that do payroll compared honestly: national giants, local bookkeepers, software platforms, and BEG managed payroll. What to look for before you pick one.';
const URL = 'https://www.beghr.com/services/managed-payroll/payroll-companies';

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

const CALENDLY = getCalendlyLink('payroll-companies');

const FAQS: [string, string][] = [
  [
    'What is the difference between a payroll company and a payroll outsourcing company?',
    '"Payroll company" usually means the software or service brand itself (ADP, a local bookkeeper, BEG). "Outsourcing" describes the buying decision: handing the function to any of those companies instead of running it in-house.',
  ],
  [
    'Are all payroll companies the same price?',
    'No. National platforms are often quote-gated with tiered add-ons, local bookkeepers charge hourly or a flat monthly retainer, and BEG publishes a flat $25-$45 PEPM, all-inclusive rate with a $500 monthly minimum.',
  ],
  [
    'Do I have to switch systems to change payroll companies?',
    'It depends on the company. Software-only platforms usually require full migration. BEG works inside your existing platform, isolved included, so switching providers does not force a system change.',
  ],
  [
    'How do I know if a payroll company is all-inclusive or a-la-carte?',
    'Ask directly what the quoted price does NOT include: multi-state filing, year-end W-2 processing, and off-cycle runs are the most common line items vendors charge extra for. A company confident in transparent pricing will answer immediately.',
  ],
  [
    'What size company should use a fully managed payroll company instead of software?',
    'Companies roughly 5 to 500 employees typically see the clearest value from a managed model: large enough to need real payroll expertise, often too small to justify a dedicated in-house specialist.',
  ],
];

export default function PayrollCompaniesPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Payroll Companies', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Buyer's Guide"
        title="Companies that do payroll: how to pick one without getting burned on fees."
        description="Every payroll company claims to save you time and money. Few tell you upfront what is actually included. Here is how to evaluate a payroll company honestly, plus a straight comparison of the four models companies choose between."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: '$500', label: 'Monthly minimum' },
          { value: '3-5 Days', label: 'To live managed payroll' },
        ]}
      >
        {/* TL;DR */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="tldr reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Bottom Line Up Front</p>
              <p style={{ margin: 0, color: '#333333', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Payroll companies fall into four models: national software giants, local bookkeepers, software-only platforms, and fully managed services. The differences that matter are pricing transparency, whether the company runs payroll for you or hands you software to run yourself, and whether add-on fees show up after you sign. BEG is the managed model: $25-$45 PEPM, all-inclusive, no migration required.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS A PAYROLL COMPANY */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">First, the Basics</p>
              <h2>What does a payroll company actually do?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                A payroll company calculates gross-to-net pay, withholds and files payroll taxes, and issues pay to employees each cycle. Beyond that core function, companies differ sharply on whether they run the process for you or simply give you software to run it yourself.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                Search results for &quot;companies that do payroll,&quot; &quot;payroll solution companies,&quot; or &quot;payroll processing companies&quot; mostly return the same handful of national brands and roundup articles ranking them by feature checklist. Almost none of those roundups tell you the one thing that actually determines your monthly bill and your team&apos;s workload: whether the company processes payroll for you, or whether you are the one entering hours, reviewing runs, and clicking approve every single cycle.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO EVALUATE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Buyer&apos;s Checklist</p>
              <h2>What should you actually look for in a payroll company?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                Look for transparent, published pricing; no forced platform migration; a named point of contact instead of a rotating support queue; and an all-inclusive rate instead of per-report or per-filing add-on fees.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Transparent, published pricing', body: 'If a company will not give you a price range before a sales call, treat that as a signal. Ask what triggers a charge above the quoted base rate.' },
                { title: 'No forced platform migration', body: 'Some payroll companies only run on their own proprietary software. Ask whether the provider can work inside the system you already use, so switching companies does not mean re-entering historical data.' },
                { title: 'Dedicated contact vs. call center', body: 'Ask who handles your account after onboarding. A support inbox that assigns a new rep to every ticket is a different service model than one specialist who already knows your setup.' },
                { title: 'All-inclusive vs. a-la-carte fees', body: 'Ask directly whether multi-state filing, year-end W-2 processing, and off-cycle runs are included in the base rate or billed separately. A-la-carte pricing is where most surprise invoices originate.' },
                { title: 'Who is actually accountable for errors', body: 'Ask what happens when a filing is late or a paycheck is wrong. A company confident in its process gives a direct answer about who owns the fix and the penalty.' },
                { title: 'Onboarding timeline and disruption', body: 'Ask how long the transition takes and whether it runs in parallel with your current process, so nobody misses a paycheck during the switch.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE FOUR MODELS COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Four Models</p>
              <h2>National giants, local bookkeepers, software platforms, or managed payroll: which is which?</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>National Payroll Giants</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Local Bookkeeper/Accountant</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Software-Only Platform</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Payroll</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pricing model', 'Quote-gated, tiered add-ons', 'Hourly or flat retainer, varies by firm', 'Published, per-employee software fee', '$25-$45 PEPM, all-inclusive, published'],
                    ['Who runs payroll', 'You: enter hours, review, approve', 'Bookkeeper processes, limited automation', 'You: enter hours, review, approve', 'BEG: fully managed, you approve'],
                    ['Multi-state filing', 'Included per tier, confirm exact coverage', 'Often limited to bookkeeper’s expertise', 'Platform-assisted, you verify accuracy', 'All 50 states included'],
                    ['Dedicated contact', 'Support queue or account tier dependent', 'Often yes, one person, limited backup', 'Self-service portal, ticket-based support', 'One dedicated BEG contact'],
                    ['Migration required to switch', 'Usually yes, proprietary system', 'Sometimes, depends on their tools', 'Yes, full data migration', 'No, works in your existing system'],
                    ['Best fit', 'Large enterprises needing one ecosystem', 'Very small teams with a trusted local advisor', 'DIY teams comfortable running software', 'Companies that want payroll off their desk entirely'],
                  ].map(([factor, giant, book, software, beg], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{giant}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{book}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{software}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Model descriptions reflect common industry patterns, not any single named competitor. Confirm exact terms directly with any company you evaluate.
            </p>
          </div>
        </section>

        {/* WHY IT MATTERS / IRS penalty citation */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why the Model Matters</p>
              <h2>Why does the payroll company model matter more than the brand name?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                The employer, not the payroll company, remains legally responsible for federal tax deposits and filings. Choosing a company that owns accuracy and communicates clearly reduces the risk of the penalties the IRS assesses directly against the business.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/outsourcing-payroll-and-third-party-payers" target="_blank" rel="noopener noreferrer">IRS is explicit that using a payroll service provider does not relieve an employer of responsibility for its federal tax deposits and filings</a>. That is the real argument for choosing carefully rather than defaulting to whichever brand shows up first in a search. A payroll company that owns accuracy, files on time, and gives you a direct line when something goes wrong is protecting you from exposure that ultimately lands back on the business, regardless of which company processed the run.
              </p>
            </div>
          </div>
        </section>

        {/* HOW BEG FITS THE MANAGED MODEL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>How is BEG different from the other payroll companies on this list?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                BEG is a fully managed payroll company, not a software vendor: $25-$45 PEPM, all-inclusive, live in 3-5 business days, and no migration required from whatever system you use today.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Published, all-inclusive pricing', body: '$25 PEPM in your existing platform, $45 PEPM on BEG’s isolved HCM. No separate line item for filings, corrections, or year-end forms. $500 monthly minimum.' },
                { title: 'No forced migration', body: 'BEG works inside the payroll system you already run. Migration is available if you want it later, never a requirement to get started.' },
                { title: 'A dedicated contact', body: 'One person who knows your account handles questions and changes. Not a rotating support queue or a ticket number.' },
                { title: 'Live in 3-5 business days', body: 'Scope review, first-cycle setup, and go-live, fast enough that switching payroll companies does not mean weeks of disruption.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Want the outsourcing model explained end to end? See <Link href="/services/managed-payroll/payroll-outsourcing">payroll outsourcing</Link>. Comparing this to a specific employer-facing use case? Read <Link href="/services/managed-payroll/employer-payroll-provider">what an employer payroll provider actually does</Link>, or see how <Link href="/services/managed-payroll/pay-stub-services">pay stub access</Link> works inside a managed service. For the full scope of what BEG runs, start at <Link href="/services/managed-payroll">managed payroll services</Link>.
            </p>
          </div>
        </section>

        {/* CLOSE */}
        <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="beg-grid-2 reveal">
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>The Real Comparison</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Most roundups rank features. Few tell you who runs the payroll.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Every payroll company on every &quot;top payroll companies&quot; list falls into one of the four models above. The brand name matters less than whether you are buying software to operate yourself or a managed service that runs it for you.</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>See Your Number First</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Get your exact monthly rate before you talk to anyone.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG publishes its pricing. Answer a few questions about your headcount and states, and see your exact monthly cost on screen, no sales call required to get the number.</p>
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
              <h2>Payroll companies, common questions</h2>
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
