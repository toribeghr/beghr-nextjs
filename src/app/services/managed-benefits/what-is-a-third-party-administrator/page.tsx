import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'What Is a TPA? Third-Party Administrators, Explained | BEG',
  description: 'What a third party administrator does for employee benefits, what it never does, how TPAs differ from brokers and PEOs, and when your company needs one.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/what-is-a-third-party-administrator' },
  openGraph: {
    title: 'What Is a TPA? Third-Party Administrators, Explained | BEG',
    description: 'What a third party administrator does for employee benefits, what it never does, how TPAs differ from brokers and PEOs, and when your company needs one.',
    url: 'https://www.beghr.com/services/managed-benefits/what-is-a-third-party-administrator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'What Is a TPA? Third-Party Administrators, Explained | BEG', description: 'What a third party administrator does for employee benefits, what it never does, how TPAs differ from brokers and PEOs, and when your company needs one.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-what-is-a-tpa');

const FAQS: [string, string][] = [
  [
    'What is a third-party administrator for employee benefits?',
    'A third-party administrator is an outside firm that runs the operations of your benefit plans: enrollment, COBRA, FSA and HSA accounts, claims, and filings. Your company stays the employer and plan sponsor.',
  ],
  [
    'Is a TPA the same as an insurance broker?',
    'No. Your broker advises on plan design and places coverage with carriers. A TPA runs the operations behind those plans. The two roles are complementary, and most companies keep both.',
  ],
  [
    'Does a TPA sell insurance?',
    'No. A TPA administers benefit plans; it does not sell or place coverage. If a vendor is quoting you insurance premiums, you are talking to a broker or carrier, not an administrator.',
  ],
  [
    'Is a TPA the same as a PEO?',
    'No. A PEO co-employs your workforce and moves your people onto plans it sponsors. A TPA administers the plans you already own while your employer status never changes.',
  ],
  [
    'When does a company need a TPA or benefits administration service?',
    'When the operational load outgrows the people carrying it: open enrollment eats weeks, COBRA notices slip, ACA forms become a fire drill, or a self-funded plan needs professional claims processing.',
  ],
  [
    'What does a TPA cost?',
    'Most TPAs quote per employee per month or per account, and most gate that number behind a sales call. BEG Managed Benefits shows an instant on-screen estimate instead.',
  ],
];

export default function WhatIsATpaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What is a third-party administrator, in plain English?',
            description: 'What a third party administrator does for employee benefits, what it never does, how TPAs differ from brokers and PEOs, and when your company needs one.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/what-is-a-third-party-administrator',
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'What Is a Third-Party Administrator', item: 'https://www.beghr.com/services/managed-benefits/what-is-a-third-party-administrator' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Explained"
        title={'What is a third-party administrator, in plain English?'}
        description="A third-party administrator, or TPA, is an outside firm that runs the operations of your employee benefit plans: enrollment, COBRA, account-based benefits, claims, and compliance filings. You stay the employer, your plans stay yours, and your broker stays your broker."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* DEFINITION TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Lane Markers</p>
              <h2>What a TPA handles, and what it never touches</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Task</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In a TPA&apos;s lane?</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Who owns it otherwise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Open enrollment and life events', 'Yes, core work', 'Your HR team, if nobody outsources it'],
                    ['COBRA and state continuation notices', 'Yes, deadline-driven core work', 'The employer, with statutory penalties for misses'],
                    ['FSA, HSA, and HRA account administration', 'Yes, the classic TPA specialty', 'A bank or software your team reconciles'],
                    ['Claims processing for self-funded plans', 'Yes, where TPAs originally came from', 'A carrier, under fully insured plans'],
                    ['ACA tracking and Forms 1094-C and 1095-C', 'Yes, when scoped into the service', 'Your payroll or HR team at filing season'],
                    ['Choosing carriers and negotiating renewals', 'Never, that is broker work', 'Your insurance broker'],
                    ['Selling or placing insurance coverage', 'Never, a TPA is not a broker or carrier', 'Your broker and the carriers'],
                    ['Employing your workforce', 'Never, your employer status never moves', 'You, always, unlike a PEO arrangement'],
                  ].map(([task, tpa, owner], i) => (
                    <tr key={task} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{task}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{tpa}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a> · <a href="https://www.irs.gov/affordable-care-act/employers/aca-information-center-for-applicable-large-employers-ales" target="_blank" rel="noopener noreferrer">IRS, ACA information center for applicable large employers</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Full Picture</p>
              <h2>The four things to actually understand about TPAs</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The definition, minus the jargon</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Third-party administrator means exactly what it says: a party other than you and the insurance carrier that administers your benefit plans. The term was born in self-funded health coverage, where an employer pays claims from its own money and hires a TPA to process them. Over time the category widened into everything operational: enrollment, eligibility data, COBRA notices, FSA and HSA accounts, and compliance filings. The one constant across every version is legal structure. Your company remains the employer and the plan sponsor, and the TPA acts in your name, under your plans, on your data. Nothing about ownership changes; only the workload moves.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A TPA is not your broker, and should never pretend to be</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The most common confusion in this category is between administration and advice. Your broker helps you choose plans, negotiates with carriers at renewal, and places the coverage. A TPA does none of that; it runs the machinery behind whatever plans you and your broker chose. That is why the roles coexist so well: the broker was never staffed to chase enrollment data and COBRA deadlines, and the administrator has no business steering your carrier decisions. If a vendor pitching administration starts talking about replacing your broker or moving your coverage, it has left the TPA lane and you should ask what it is actually selling.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A TPA is not a PEO either, and the difference is structural</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A PEO bundles benefits inside co-employment: it becomes the employer of record for tax and benefits purposes and moves your people onto master plans it sponsors. A TPA changes none of that. Your employees stay yours, your plans stay yours, and ending the relationship is a vendor swap rather than a corporate unwind. The full comparison lives at <Link href="/services/managed-benefits/tpa-vs-peo">TPA vs PEO</Link>, and the HR-side cousin of this distinction is covered in <Link href="/services/hr-outsourcing/aso-vs-peo">ASO vs PEO</Link>. The short version: if anyone becomes your employees&apos; employer but you, it is not administration anymore.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Why the deadlines are the real reason TPAs exist</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Benefits administration is not hard because any single task is hard. It is hard because the tasks are deadline-driven, statutory, and invisible until missed. Federal COBRA requires specific notices on specific timelines, per the <a href="https://www.dol.gov/general/topic/health-plans/cobra" target="_blank" rel="noopener noreferrer">Department of Labor&apos;s COBRA rules</a>, and ACA reporting puts Forms 1094-C and 1095-C on the calendar every year for applicable large employers, per the <a href="https://www.irs.gov/affordable-care-act/employers/aca-information-center-for-applicable-large-employers-ales" target="_blank" rel="noopener noreferrer">IRS ALE information center</a>. A TPA industrializes that calendar. Whether that is worth paying for is a workload question, worked through in <Link href="/services/managed-benefits/benefits-administration-software-vs-services">software vs services</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH SHOULD YOU CHOOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Do You Need One</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'You are self-funded, or heavy on FSA, HSA, and COBRA volume',
                  body: 'This is exactly what classic TPAs were built for. You want professional claims and account administration, and you should scope it with your broker in the room.',
                },
                {
                  title: 'You are fully insured with a good broker and a drowning HR team',
                  body: 'You need the administration side of the TPA idea: enrollment, life events, data, COBRA, and ACA filings handled for you while the broker keeps the strategy. That is the BEG model.',
                },
                {
                  title: 'Your benefits run fine and enrollment is genuinely light',
                  body: 'Then you may not need a TPA yet. Software your team runs may be enough. Revisit the question the first year open enrollment costs you weeks or a notice slips.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>The TPA idea, delivered as a managed service</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, is the administration side of everything on this page: enrollment, life events, COBRA support, ACA tracking and forms, and a dedicated team on the top plan. You keep your broker, you stay the employer, and where most of the TPA category hides pricing behind demos, BEG shows a monthly estimate on screen in about 90 seconds. Plan details and scope live on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Third-party administrators, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
