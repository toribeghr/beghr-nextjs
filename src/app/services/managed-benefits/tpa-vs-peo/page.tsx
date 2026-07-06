import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'TPA vs PEO: Who Actually Runs Your Benefits? | BEG',
  description: 'TPA vs PEO for employee benefits: employer of record, plan ownership, your broker, cost shape, and what leaving each model really takes.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/tpa-vs-peo' },
  openGraph: {
    title: 'TPA vs PEO: Who Actually Runs Your Benefits? | BEG',
    description: 'TPA vs PEO for employee benefits: employer of record, plan ownership, your broker, cost shape, and what leaving each model really takes.',
    url: 'https://www.beghr.com/services/managed-benefits/tpa-vs-peo',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'TPA vs PEO: Who Actually Runs Your Benefits? | BEG', description: 'TPA vs PEO for employee benefits: employer of record, plan ownership, your broker, cost shape, and what leaving each model really takes.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-tpa-vs-peo');

const FAQS: [string, string][] = [
  [
    'What does TPA stand for in benefits?',
    'Third-Party Administrator. A TPA handles the operational side of benefit plans, such as claims processing, COBRA, FSA and HSA accounts, and enrollment, while your company remains the employer and plan sponsor.',
  ],
  [
    'Does a TPA replace my insurance broker?',
    'No, and neither should any administrator. Your broker advises on plan design and places coverage; the TPA or benefits administration service runs the operations behind those plans. The two roles are complementary.',
  ],
  [
    'Is a PEO better for small-company benefits pricing?',
    'Often yes, for premiums. PEO master plans pool thousands of employees and can beat small-group rates. The tradeoff is co-employment: their plans, their carriers, and a structural unwind when you leave.',
  ],
  [
    'Who files ACA forms under each model?',
    'Under a PEO, the PEO typically handles ACA reporting inside its bundle. With a TPA it depends on scope. BEG Managed Benefits tracks eligibility and produces Forms 1094-C and 1095-C as a defined plan feature.',
  ],
  [
    'Which is easier to leave, a TPA or a PEO?',
    'A TPA or administration service, by far. Your plans, carriers, and employer status never moved, so you swap administrators. Leaving a PEO means migrating your people off its master plans entirely.',
  ],
  [
    'Who is legally liable if something goes wrong with a benefit plan?',
    'With a TPA, you remain the plan sponsor and carry fiduciary responsibility, with the administrator liable only for the operational tasks it performs under contract. With a PEO, liability splits along co-employment lines defined in the client service agreement, and a Certified PEO takes on defined federal employment tax liability under the IRS CPEO program. Either way, ask for the liability language in writing before you sign anything.',
  ],
  [
    'How does self-funded health coverage work under each model?',
    'A TPA is the standard partner for a self-funded plan: your company bears the claims risk, and the TPA processes claims, manages stop-loss coordination, and handles reporting on your behalf. Most PEOs run fully-insured master plans instead, because pooling many small employers under one self-funded plan raises separate regulatory questions. If you are already self-funded or want to be, that alone usually rules out a standard PEO.',
  ],
  [
    'Is there a contract lock-in with a PEO that a TPA does not have?',
    'Generally yes. PEO client service agreements commonly run a full plan year with renewal auto-triggers tied to open enrollment, because unwinding co-employment mid-year is disruptive for everyone. TPA and benefits administration agreements are typically vendor contracts with standard notice periods, since no employment relationship has to be unwound to switch.',
  ],
];

export default function TpaVsPeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'TPA vs PEO: who actually runs your benefits?',
            description: 'TPA vs PEO for employee benefits: employer of record, plan ownership, your broker, cost shape, and what leaving each model really takes.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/tpa-vs-peo',
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
              { '@type': 'ListItem', position: 3, name: 'TPA vs PEO', item: 'https://www.beghr.com/services/managed-benefits/tpa-vs-peo' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title={'TPA vs PEO: who actually runs your benefits?'}
        description="A TPA administers the benefit plans you own while you stay the employer. A PEO enters co-employment and moves your people onto master plans it sponsors. The difference decides who controls your benefits."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>TPA vs PEO, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>TPA / Benefits Administrator</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Co-employment', 'No, never', 'Yes, structural to the model'],
                    ['Employer of record', 'You, for everything', 'Co-employment: the PEO for tax and benefits purposes'],
                    ['Who owns the benefit plans', 'You do, chosen with your broker, administered for you', 'The PEO does; you and your people sit on its master plans'],
                    ['Your broker', 'Stays; the administrator works alongside', 'Usually displaced; the PEO controls carrier relationships'],
                    ['Liability', 'You retain plan sponsor and fiduciary responsibility; administrator liable for contracted tasks only', 'Splits by the client service agreement; a Certified PEO holds defined federal employment tax liability'],
                    ['Scope', 'Operations: enrollment, accounts, COBRA, claims, filings', 'Payroll, benefits, workers comp, and HR in one bundle'],
                    ['Self-funded plan handling', 'Core use case; TPA processes claims and coordinates stop-loss on your self-funded plan', 'Rare; most PEOs run fully-insured master plans, not client-level self-funding'],
                    ['ACA reporting', 'Depends on scope; defined feature in managed services', 'Handled inside the bundle'],
                    ['Cost shape', 'Per employee or per account, itemized against services you can see', 'Quote-gated, often a percent of total payroll or a per-head bundle fee'],
                    ['Contract and lock-in', 'Standard vendor agreement, typical notice period to exit', 'Client service agreement often runs a full plan year with renewal auto-triggers'],
                    ['Plan control at renewal', 'You and your broker decide', 'The PEO decides its master plan lineup'],
                    ['Speed to leave', 'Weeks; swap administrators, nothing structural moved', 'Months; migrate everyone off PEO plans on a re-enrollment timeline'],
                  ].map(([factor, tpa, peo], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{tpa}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS, Certified Professional Employer Organizations</a> · <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Differences</p>
              <h2>Where the two models genuinely diverge</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>What a TPA actually is, in plain terms</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A third-party administrator is an operations shop for benefit plans. Classic TPAs process claims for self-funded health plans and run account-based benefits: FSAs, HSAs, HRAs, and COBRA. The broader category, benefits administration services, extends the same idea to everything operational: plan setup, open enrollment, life events, eligibility data, carrier updates, and ACA filings. In every version, one thing holds: your company stays the employer and the plan sponsor, and the administrator works in your name. When a vendor cannot say plainly whose plans your employees are on, you are not looking at a TPA anymore.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>What a PEO does with benefits, and why it is tempting</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A PEO co-employs your workforce and moves your people onto health and retirement plans the PEO sponsors, pooled across every client it serves. For a 20-person company facing brutal small-group rates, that pooled pricing is a real and honest advantage; the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO framework</a> even gives certified PEOs defined federal tax responsibility. The cost is structural: the PEO picks the carriers, the lineup can change at its renewal, your broker is usually cut out, and your benefits identity now belongs to a contract. The plans were never yours, which you discover precisely when you try to leave.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The broker question nobody asks out loud</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most companies choosing between these models already have a broker they trust. A PEO usually ends that relationship, because the PEO&apos;s master plans come with the PEO&apos;s carrier relationships. A TPA or benefits administration service does the opposite: it takes the operational load your broker was never staffed to carry, while the broker keeps doing what brokers are actually for, plan strategy and placement. If keeping your broker matters to you, that single fact eliminates the PEO column before pricing ever enters the conversation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Leaving: the exit tells you what you signed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Replacing a TPA is a vendor swap: your plans, carriers, and employer status never moved, so the data migrates and the service changes hands. Leaving a PEO is a company-wide benefits migration: every employee comes off the PEO master plans, coverage re-places through a broker, payroll re-establishes under your accounts, and the calendar usually forces it all to January 1. Neither model is wrong, but only one of them is easy to try. Weighing this against the adjacent models? The HR-side version of this comparison lives at <Link href="/services/hr-outsourcing/aso-vs-peo">ASO vs PEO</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH SHOULD YOU CHOOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Which Fits You</p>
              <h2>Match your company profile to a model</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'Under 50 employees, premiums are the whole problem, no broker relationship to protect',
                  body: 'A PEO deserves a real look. Pooled master plans can beat small-group rates in ways no administrator can. Price the exit before you sign, and we will tell you the same on a call.',
                },
                {
                  title: 'You have a broker you trust, and operations are drowning your HR team',
                  body: 'A benefits administration service fits exactly. Your broker keeps the strategy; the enrollment, data, filings, and carrier chasing move off your desk. That is the BEG model.',
                },
                {
                  title: 'You are self-funded, or heavy on FSA, HSA, and COBRA volume',
                  body: 'A classic TPA is built for this, and the right answer may be a TPA for claims plus managed administration for enrollment and compliance. Scope both on one discovery call.',
                },
                {
                  title: '100 to 1,000 employees, multi-state, and already own your plan strategy',
                  body: 'Co-employment adds cost and rigidity you no longer need at this size. A benefits administration service scales the operational load without asking you to give up plan control or your broker.',
                },
                {
                  title: 'You tried a PEO before and the renewal or exit experience burned you',
                  body: 'Common story. Moving to a TPA-style administrator returns plan ownership to you permanently, so a future renewal fight is between you, your broker, and the carrier, not a vendor with its own master plan agenda.',
                },
                {
                  title: 'You are building HR from zero and want one bundled vendor',
                  body: 'A PEO is a legitimate shortcut here, effectively renting an HR department. Just weigh that convenience against the co-employment tradeoffs above before you sign a multi-year runway on it.',
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
              <h2>The TPA side of the line, without the quote gate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, sits firmly on the no-co-employment side: your plans stay yours, your broker stays yours, and the administration, from enrollment through ACA filings, moves to a dedicated team. Where the category hides pricing behind demos, BEG shows a monthly estimate on screen in about 90 seconds. Plan detail lives on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>, and the in-house math is worked through in <Link href="/services/managed-benefits/outsourced-vs-in-house-benefits-administration">outsourced vs in-house benefits administration</Link>.
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
              <h2>TPA vs PEO, answered</h2>
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
