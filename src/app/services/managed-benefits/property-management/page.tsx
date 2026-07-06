import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Property Management Benefits Admin | Instant Estimate | BEG',
  description: 'Benefits administration for property management: office staff, maintenance crews, and seasonal workers tracked for ACA. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/property-management' },
  openGraph: {
    title: 'Property Management Benefits Admin | Instant Estimate | BEG',
    description: 'Benefits administration for property management: office staff, maintenance crews, and seasonal workers tracked for ACA. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/property-management',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Property Management Benefits Admin | Instant Estimate | BEG', description: 'Benefits administration for property management: office staff, maintenance crews, and seasonal workers tracked for ACA. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-property-management');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a property management company?',
    'Plan setup, online enrollment for office staff and maintenance techs alike, ACA eligibility tracking across salaried, hourly, and seasonal workers, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support.',
  ],
  [
    'How are seasonal groundskeepers and make-ready crews handled for ACA?',
    'IRS rules include specific treatment for seasonal workers and seasonal employees, both in determining applicable-large-employer status and in measuring eligibility. The system applies those rules consistently, so a summer grounds crew does not accidentally trigger obligations or, worse, get missed when it should have counted.',
  ],
  [
    'Can employees spread across many properties enroll without visiting the main office?',
    'Yes. Enrollment is online and self-service: a leasing agent at one community and a maintenance tech at another both compare plans, get AI-guided recommendations, and enroll from a phone. Deductions sync to payroll automatically.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for property management?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your company stays the employer.',
  ],
  [
    'What does property management benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What happens to benefits when an on-site manager transfers to a different community in the portfolio?',
    'A transfer within the same ownership group should carry coverage forward, not reset it. Handled property by property in separate files, that transfer often reads as a termination at one site and a new hire at another, which resets waiting periods the employee should not have to serve twice.',
  ],
  [
    'How does high turnover at the property level affect our ACA filing risk?',
    'Every departure and every new hire at every community is a data point that has to reach one combined system before filing season, or the Forms 1094-C and 1095-C get built on an incomplete picture. Portfolios that track eligibility per property instead of per company are the ones that discover gaps at filing time instead of before it.',
  ],
  [
    'Who actually regulates property management benefits compliance?',
    'The IRS enforces the ACA employer mandate and its seasonal-worker provisions, and the Department of Labor enforces COBRA notice and election timelines. Neither cares which community an employee happened to work at; both count the workforce at the company level.',
  ],
];

export default function ManagedBenefitsPropertyManagementPage() {
  return (
    <>
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
              { '@type': 'ListItem', position: 3, name: 'Property Management', item: 'https://www.beghr.com/services/managed-benefits/property-management' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Property Management"
        title="One company, three workforces: office, field, and seasonal. One set of benefits obligations."
        description="Property managers run salaried office staff, hourly maintenance techs scattered across communities, and grounds crews that surge every summer. Each group hits eligibility rules differently, and the admin lands on whoever is nearest the filing cabinet. BEG Managed Benefits, powered by isolved, runs it all while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Mixed crews', label: 'Office, field, and seasonal in one system' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Property Management Benefits Problem</p>
              <h2>Eligibility rules that read differently for every roster you run.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '3 rosters',
                  label: 'Salaried office, hourly field, seasonal grounds: one ACA rulebook',
                  sub: 'Leasing and accounting staff are straightforward. Maintenance techs with variable hours and on-call time are not. Summer grounds crews have their own IRS seasonal rules. Most portfolios track all three in one spreadsheet, badly.',
                },
                {
                  stat: 'Seasonal',
                  label: 'The IRS carve-outs that only help if you apply them correctly',
                  sub: 'IRS employer shared responsibility rules treat seasonal workers specially when determining applicable-large-employer status, and seasonal employees specially in eligibility measurement. Applied casually, the carve-outs become exposure instead of relief.',
                },
                {
                  stat: '60 days',
                  label: 'The COBRA election window each covered departure can open',
                  sub: 'Federal COBRA rules give qualified beneficiaries at least 60 days to elect continuation coverage, with employer-side notice deadlines. Turnover at the community level makes this a recurring obligation nobody at a site office owns.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a> and <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Property management benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>One enrollment experience across every property</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When staff are spread across communities, enrollment by interoffice envelope means the main office does everyone&apos;s paperwork twice. The Benefits Admin Software plan puts plan comparison and enrollment online: a leasing agent, a regional manager, and a maintenance tech all research options, get AI-guided recommendations, and enroll from a phone. Life events run through self-service workflows, and deductions sync to payroll across the whole portfolio.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA tracking that respects the seasonal rules</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan runs lookback measurement continuously across your mixed workforce: variable-hour maintenance techs averaged correctly, seasonal grounds and make-ready crews evaluated under the IRS rules written for them, and full-time office staff offered coverage on schedule. Forms 1094-C and 1095-C are produced for you at filing time, from one clean dataset instead of a per-property patchwork.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Continuation notices handled portfolio-wide</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Site-level turnover means covered departures happen somewhere in the portfolio every month. Election notices go out on federal timelines, windows and elections are tracked, and coverage end dates flow to carriers without a community manager remembering to email the main office. State continuation rules are scoped exactly on your discovery call to match the states where you hold properties.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team behind your corporate office</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish across every property, processes changes, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors distributed workforces breed: departed techs still on the invoice, elections that never reached the carrier, dependents past eligibility. Your corporate team manages properties; the benefits team manages benefits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Roster by Roster</p>
              <h2>Property management workforce types and where benefits administration breaks</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f7f7f7', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>Workforce group</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>Where it breaks</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '2px solid #e5e5e5' }}>The regulator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Corporate and leasing office staff', 'Straightforward eligibility on paper, but easy to lose track of across dozens of properties reporting up to one company.', 'IRS (ACA employer mandate)'],
                    ['On-site maintenance techs', 'Variable hours and on-call time drift across the 130-hour monthly eligibility line at each community.', 'IRS (lookback measurement method)'],
                    ['Seasonal grounds and make-ready crews', 'IRS seasonal-worker carve-outs only help if applied correctly; applied casually, they become exposure.', 'IRS (seasonal worker provisions)'],
                    ['Site staff transferring between properties', 'A transfer within the same ownership group can read as a termination at one site and a new hire at another.', 'IRS (aggregated ALE group counting)'],
                    ['High-turnover community-level staff', 'Covered departures happen somewhere in the portfolio every month, each opening a federal notice deadline.', 'DOL (COBRA election and notice timelines)'],
                  ].map(([group, breaks, reg]) => (
                    <tr key={group} style={{ borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{group}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#444444' }}>{breaks}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#666666' }}>{reg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VIGNETTE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">A Familiar Portfolio Problem</p>
              <h2>What a mid-portfolio transfer looks like without one system</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                A maintenance tech transfers from one community to another in the same ownership group because the second property needs the coverage more. The two communities run enrollment out of separate files kept by two different site managers, so the transfer gets processed as a termination at the first property and a brand-new hire at the second, complete with a fresh waiting period the tech already served once. He finds out his coverage has a gap only when he tries to use it. With enrollment and eligibility held in one system across the portfolio, a transfer is a status change, not two separate events, and coverage and waiting-period credit move with the employee automatically.
              </p>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment online across the portfolio. Software + ACA Compliance adds mixed-workforce eligibility tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Multi-property pay runs the bigger fire? That is <Link href="/services/managed-payroll/property-management">managed payroll for property management</Link>; for on-site staff policies and handbooks, see <Link href="/services/hr-outsourcing/property-management">property management HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Property management benefits administration, answered</h2>
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
