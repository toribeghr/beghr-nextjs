import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Should You Run Your Own Payroll? The Honest Tradeoffs | BEG';
const DESC = 'DIY payroll and free payroll software compared honestly against managed payroll: when running it yourself works, when the risk outweighs the savings, and real IRS penalty numbers.';
const URL = 'https://www.beghr.com/services/managed-payroll/diy-payroll-vs-managed';

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

const CALENDLY = getCalendlyLink('managed-payroll-diy-vs-managed');

const FAQS: [string, string][] = [
  [
    'Is it legal to run my own payroll?',
    'Yes. There is no law requiring a business to use a payroll service. You are legally responsible for calculating withholding correctly, depositing taxes on time, and filing every required federal and state form, whether you do it by hand, with free software, or with a paid service.',
  ],
  [
    'What are the penalties for a late payroll tax deposit?',
    'The IRS charges a graduated penalty under Internal Revenue Code Section 6656: 2% if 1-5 days late, 5% if 6-15 days late, 10% if more than 15 days late, and 15% if the tax remains unpaid 10 days after the first IRS delinquency notice. These percentages apply to the unpaid deposit amount, not a flat fee.',
  ],
  [
    'When does DIY payroll actually make sense?',
    'When you are a true single-owner business with no employees, or one to two employees with simple, consistent pay and no multi-state complexity. At that scale, free or low-cost software is genuinely the right tool, and BEG will tell you that directly rather than push a service you do not need.',
  ],
  [
    'At what point does DIY payroll become risky?',
    'Once you cross into multiple employees, multi-state work, contractors alongside employees, or any complexity like garnishments or benefits deductions, the odds of a missed deadline or miscalculation rise sharply, and the IRS penalty structure is not forgiving of a first-time error.',
  ],
  [
    'What is the real cost difference between free software and managed payroll?',
    'Free or low-cost payroll software runs $0-$40 per month plus your time. BEG managed payroll runs $25-$45 per employee per month, all-inclusive, with BEG accountable for accuracy and filings instead of you.',
  ],
  [
    'Does managed payroll require switching platforms?',
    'No. BEG can operate inside the system you already use. If you want to move to isolved for a more capable platform, that is available, but it is never a requirement to get started.',
  ],
];

export default function DiyPayrollVsManagedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Should You Do Your Own Payroll? An Honest Breakdown',
            description: DESC,
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: URL,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
            url: URL,
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
              { '@type': 'ListItem', position: 3, name: 'DIY Payroll vs. Managed', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Honest Comparison"
        title="Should you run your own payroll? Here is the honest answer."
        description="Free payroll systems and home-run payroll genuinely work for the smallest businesses. They also genuinely become a liability the moment complexity shows up. An honest breakdown of when DIY is fine, when it is not, and what changes the math."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: '15%', label: 'Max IRS deposit penalty per IRC Sec. 6656' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* TL;DR */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="tldr reveal" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
              <p style={{ margin: 0, fontSize: '0.97rem', color: '#333333', lineHeight: '1.7' }}>
                <strong>Bottom line:</strong> Running your own payroll at home with free software is a reasonable choice for a true single-owner business with zero to two employees and simple, consistent pay. It becomes a real liability once you add headcount, multi-state work, or any deduction complexity, because the IRS penalty structure for a missed tax deposit does not care that you are small. This page walks through both sides honestly, then shows where the tradeoff flips to managed payroll.
              </p>
            </div>
          </div>
        </section>

        {/* WHEN DIY MAKES SENSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Give the Small Guy Credit</p>
              <h2>When does it actually make sense to run your own payroll?</h2>
              <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
                DIY payroll fits a true single-owner business with no employees, or one to two employees on simple, consistent pay, where the time cost is minutes per month, not hours.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you are a solo owner paying yourself, or you have one or two employees on identical, predictable pay every period, running payroll at home with a free or low-cost system is not a mistake. Free payroll management tools and access-anywhere payroll apps exist because that segment of the market is real: simple pay, one state, no garnishments, no benefits deductions to track. At that scale, the time investment is genuinely small, and paying $25-$45 per employee per month for something you can do correctly in ten minutes is not a good use of money.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The honest advice here is not "always outsource." It is: know exactly which category you are in, because the two categories have very different risk profiles.
              </p>
            </div>
          </div>
        </section>

        {/* WHEN IT BECOMES A LIABILITY */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where the Risk Actually Shows Up</p>
              <h2>When does DIY payroll stop being simple and start being risky?</h2>
              <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
                The risk profile changes sharply once you cross into multiple employees, multi-state work, contractors mixed with employees, or any deduction complexity, because a single missed deadline triggers real IRS penalties.
              </p>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '1.5rem' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>Missed tax deposit deadlines</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.6' }}>
                  Under <a href="https://www.irs.gov/payments/failure-to-deposit-penalty" target="_blank" rel="noopener noreferrer">Internal Revenue Code Section 6656</a>, the IRS charges 2% if a deposit is 1-5 days late, 5% if 6-15 days late, 10% if more than 15 days late, and 15% if unpaid 10 days after a delinquency notice. These are percentages of the deposit owed, and they compound quickly for a business running payroll manually with no automated deposit schedule.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>Multi-state filing complexity</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.6' }}>
                  Each state your employees work in can require separate withholding registration, unemployment insurance accounts, and filing deadlines. The <a href="https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees" target="_blank" rel="noopener noreferrer">SBA</a> notes payroll tax compliance as one of the most common small business hiring pitfalls once operations cross state lines. Free tools built for single-state simplicity do not track this for you.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>W-2 errors and corrections</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.6' }}>
                  Incorrect W-2s can trigger penalties under <a href="https://www.irs.gov/government-entities/federal-state-local-governments/information-return-penalties" target="_blank" rel="noopener noreferrer">IRS information return penalty rules</a>, which scale with how late a correction is filed and whether the failure was intentional. Manual payroll increases the odds of a miscalculated withholding or missed benefit deduction making it onto the year-end form.
                </p>
              </div>
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              None of this means DIY payroll is reckless at any size. It means the tools that make it easy at one or two employees do not scale their risk protection alongside your headcount.
            </p>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>DIY payroll vs. free software vs. managed payroll, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '160px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Manual / At-Home DIY</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Free / Low-Cost Software</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Payroll</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Best fit', 'Single owner, zero employees', '1-10 employees, simple pay', 'Any headcount, any complexity'],
                    ['Who is accountable for errors', 'You, entirely', 'You; platform assists calculations', 'BEG is accountable'],
                    ['Multi-state support', 'Manual research required', 'Platform-assisted, you verify', 'Fully managed, all 50 states'],
                    ['Tax deposit timing', 'You track every deadline', 'Platform reminders, you approve', 'BEG handles the deposit'],
                    ['W-2 preparation', 'Manual, error-prone', 'Generated, you distribute', 'Fully managed by BEG'],
                    ['Monthly cost', '$0 plus your time', '$0-$40 plus your time', '$25-$45 per employee, all-inclusive'],
                    ['Time per pay cycle', '1-3 hours', '30-60 minutes', 'Minutes: you approve, BEG runs it'],
                  ].map(([factor, manual, software, beg], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{manual}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{software}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHERE THE TRADEOFF FLIPS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Actual Tipping Point</p>
              <h2>What signals mean it is time to stop running payroll yourself?</h2>
              <p className="lede" style={{ maxWidth: '680px', margin: '0.75rem auto 0' }}>
                Three signals reliably mark the point where DIY payroll risk outweighs the savings: hiring your third employee, adding a second state, or your first missed or corrected filing.
              </p>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '1.5rem' }}>
              {[
                {
                  title: 'You just hired your third employee',
                  body: 'Two employees with identical pay is simple math. Three or more introduces enough variation (different pay rates, start dates, deductions) that manual tracking error rates climb fast.',
                },
                {
                  title: 'Someone now works in a second state',
                  body: 'A single remote hire in a new state means a new withholding registration, a new unemployment insurance account, and a new filing deadline to track alongside your existing one.',
                },
                {
                  title: 'You already had one filing scare',
                  body: 'A missed deposit deadline or a corrected W-2, even a small one, is the clearest signal the current system is running on luck rather than a process built to catch errors before they happen.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Honest Close</p>
              <h2 style={{ marginTop: 0 }}>If you are genuinely tiny, stay DIY. If any of the tipping points above hit, the math has already flipped.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                This page is not here to talk a one-person shop out of free software that works fine for them. It is here so a growing business can see, in real numbers, where the IRS penalty structure and multi-state complexity start costing more than a managed service would.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                When you are ready to hand it off, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: $25-$45 PEPM, all-inclusive, inside your existing system, live in 3-5 business days. No migration required, and BEG is accountable for every filing from day one.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <PricingCta service="managed-payroll" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>DIY vs. managed payroll, answered honestly</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing specific platforms instead? See <Link href="/services/managed-payroll/gusto-vs-adp">Gusto vs ADP</Link> or the full <Link href="/services/managed-payroll">managed payroll overview</Link>.
            </p>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
