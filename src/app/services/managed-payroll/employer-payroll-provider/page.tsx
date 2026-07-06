import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Employer Payroll Provider | Instant Quote, $25-$45 PEPM | BEG';
const DESC = 'What an employer payroll provider actually takes off your desk: tax deposits, filings, W-2s, direct deposit, compliance liability. BEG runs it all at $25-$45 PEPM.';
const URL = 'https://www.beghr.com/services/managed-payroll/employer-payroll-provider';

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

const CALENDLY = getCalendlyLink('employer-payroll-provider');

const FAQS: [string, string][] = [
  [
    'What exactly does an employer payroll provider do?',
    'An employer payroll provider calculates gross-to-net pay, withholds and deposits payroll taxes, files required returns, issues W-2s, and manages direct deposit on the employer\'s behalf each pay cycle.',
  ],
  [
    'If I use a payroll provider, am I still liable for tax mistakes?',
    'Yes. The IRS holds the employer responsible for federal payroll tax deposits and filings even when a third-party provider handles the work, so choosing a provider that owns accuracy matters directly to your liability.',
  ],
  [
    'Does a payroll provider handle new employee paperwork?',
    'A full-service provider handles new hire reporting to the state, W-4 and I-9 intake support, and direct deposit setup, removing that administrative load from the employer.',
  ],
  [
    'What is the difference between a payroll provider and a PEO?',
    'A payroll provider like BEG runs payroll inside your business with no co-employment. A PEO becomes a co-employer of record, which changes your legal relationship with your workforce. BEG is not a PEO.',
  ],
  [
    'How fast can an employer switch payroll providers?',
    'BEG typically brings a new employer live in 3-5 business days, with no requirement to migrate off your current payroll platform first.',
  ],
];

export default function EmployerPayrollProviderPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Employer Payroll Provider', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · For Employers"
        title="What an employer payroll provider actually takes off your plate."
        description="You are the one legally on the hook for tax deposits, filings, and W-2s, whether you run payroll yourself or hand it to a provider. Here is exactly what a real employer payroll provider does, and does not, remove from your desk."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: 'All 50', label: 'States covered' },
          { value: '3-5 Days', label: 'To live managed payroll' },
        ]}
      >
        {/* TL;DR */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="tldr reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Bottom Line Up Front</p>
              <p style={{ margin: 0, color: '#333333', lineHeight: '1.7', fontSize: '0.97rem' }}>
                An employer payroll provider takes tax deposits, filings, W-2s, direct deposit, and new hire reporting off the business owner or CFO's desk. The employer still holds ultimate legal liability for federal deposits, so provider accuracy and communication directly affect your risk. BEG runs the full function at $25-$45 PEPM, no migration required.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT DOES AN EMPLOYER PAYROLL PROVIDER DO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">For the Employer, Not HR</p>
              <h2>What does an employer payroll provider actually do?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                A full employer payroll provider calculates every employee's pay, withholds and deposits the associated taxes, files the required federal and state returns, issues year-end W-2s, and manages direct deposit, so the business owner is not doing payroll math between running the company.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                Most content written for &quot;employer payroll provider&quot; is aimed at HR generalists comparing feature lists. If you are the owner, CFO, or controller signing the check, the more relevant question is narrower: what specifically comes off your plate, and what stays your responsibility no matter who you hire.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT COMES OFF YOUR PLATE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Comes Off Your Desk</p>
              <h2>The five responsibilities a real employer payroll provider takes over</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Tax deposits',
                  body: 'Federal and state payroll tax withheld from each paycheck is calculated and deposited on the required schedule, so the business never manually tracks deposit deadlines.',
                },
                {
                  heading: 'Quarterly and annual filings',
                  body: 'Forms 941, 940, state unemployment returns, and other required filings are prepared and submitted on time in every state you employ someone.',
                },
                {
                  heading: 'W-2s and year-end forms',
                  body: 'Year-end W-2 preparation, filing with the Social Security Administration, and delivery to employees, handled without your team reconciling totals in December.',
                },
                {
                  heading: 'Direct deposit',
                  body: 'Employee bank information, deposit timing, and off-cycle or bonus payments processed and delivered on schedule every cycle.',
                },
                {
                  heading: 'Compliance liability management',
                  body: 'New hire reporting, minimum wage updates, and multi-state registration tracked and applied, reducing (not eliminating) the employer\'s day-to-day compliance burden.',
                },
              ].map(({ heading, body }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>{heading}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666666', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE LIABILITY REALITY - IRS SOURCE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Part Most Providers Do Not Say Out Loud</p>
              <h2>Does hiring a payroll provider remove my liability as the employer?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                No. The IRS holds the employer, not the payroll provider, ultimately responsible for federal employment tax deposits and filings, even when a third party handles the mechanics.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1.25rem' }}>
                The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/outsourcing-payroll-and-third-party-payers" target="_blank" rel="noopener noreferrer">IRS states plainly that employers are ultimately responsible for the deposit and payment of federal tax liabilities</a> even after engaging a payroll service provider, and recommends enrolling in the Electronic Federal Tax Payment System (EFTPS) to independently verify deposits are actually being made. That single fact is why the provider you choose matters more than the marketing: a provider that owns accuracy, communicates proactively, and gives you a real point of contact is directly reducing your exposure as the employer. One that disappears after onboarding is not.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                BEG assigns a dedicated contact to every employer account specifically so there is a named person accountable for catching an error before it becomes a penalty on your business.
              </p>
            </div>
          </div>
        </section>

        {/* PEO vs PAYROLL PROVIDER */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Common Point of Confusion</p>
              <h2>Employer payroll provider vs. PEO: what is the actual difference?</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', color: '#333333', lineHeight: '1.6', fontSize: '0.95rem', fontWeight: 600 }}>
                A payroll provider processes payroll on your behalf while you remain the sole employer of record. A PEO becomes a co-employer, sharing legal responsibility and control over your workforce. BEG operates as a payroll provider, not a PEO.
              </p>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', minWidth: '520px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Payroll Provider</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Typical PEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employer of record', 'You remain sole employer', 'PEO becomes co-employer'],
                    ['Pricing', '$25-$45 PEPM, all-inclusive', 'Often $125-$200+ PEPM'],
                    ['Control over HR policy', 'Fully retained by you', 'Shared with the PEO'],
                    ['Migration required', 'No, works in your existing system', 'Often yes, onto the PEO platform'],
                  ].map(([factor, beg, peo], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Want the full outsourcing model explained? See <Link href="/services/managed-payroll/payroll-outsourcing">payroll outsourcing</Link>. Evaluating providers by category first? Read <Link href="/services/managed-payroll/payroll-companies">how to evaluate payroll companies</Link>, or see how <Link href="/services/managed-payroll/pay-stub-services">pay stub access</Link> works for your employees. For the full scope of what BEG runs, start at <Link href="/services/managed-payroll">managed payroll services</Link>.
            </p>
          </div>
        </section>

        {/* CLOSE */}
        <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="beg-grid-2 reveal">
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>What Stays on Your Desk Otherwise</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every deposit deadline you miss is a penalty with your name on it.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>The IRS holds you accountable regardless of who processes the run. A provider that owns accuracy and answers the phone is the real risk reduction, not a feature list.</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#ECAC60' }}>See Your Number First</p>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Get your exact monthly rate before you talk to anyone.</h2>
                <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Answer a few questions about headcount and states, and see your exact monthly cost on screen. No sales call required to get the number.</p>
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
              <h2>Employer payroll provider, common questions</h2>
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
