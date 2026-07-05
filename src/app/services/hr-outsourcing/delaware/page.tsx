import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Delaware HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing in Delaware: state-correct handbook, posters, leave rules, and live HR pros for a fraction of an in-house hire. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/delaware' },
  openGraph: {
    title: 'Delaware HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing in Delaware: state-correct handbook, posters, leave rules, and live HR pros for a fraction of an in-house hire. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/delaware',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Delaware HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing in Delaware: state-correct handbook, posters, leave rules, and live HR pros for a fraction of an in-house hire. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-delaware');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include in Delaware?',
    'Certified HR professionals handle your handbook with a Delaware supplement, labor law posters, compliant new hire paperwork, leave administration, and manager coaching, delivered remotely statewide.',
  ],
  [
    'Does Delaware require paid sick leave?',
    'Delaware has no statewide paid sick leave mandate today, but local ordinances and multi-state employees can still create obligations. Policies are built for where your people actually work.',
  ],
  [
    'Who tracks Delaware employment law changes?',
    'On the Elite plan, your dedicated HR Business Partner monitors federal and Delaware law changes and alerts you when action is needed, before a violation shows up in an audit.',
  ],
  [
    'Is this a PEO?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does HR outsourcing cost in Delaware?',
    'A fraction of an in-house HR hire. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingDelawarePage() {
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
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'Delaware', item: 'https://www.beghr.com/services/hr-outsourcing/delaware' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Delaware"
        title="HR outsourcing in Delaware, built on Delaware rules, not a national template."
        description="Handbooks, posters, hiring paperwork, and leave administration that match how Delaware actually regulates employment. BEG HR outsourcing, powered by isolved, gives Delaware employers certified HR professionals for a fraction of a $60K-$100K in-house hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered, Delaware included' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* STATE FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '860px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Delaware Employment Facts</p>
              <h2>The Delaware rules your policies have to match</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Item</th>
                    <th style={{ padding: '13px 16px', textAlign: 'left', fontWeight: 700 }}>Delaware</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Minimum wage</td><td style={{ padding: '12px 16px', color: '#555555' }}>$15.00</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Overtime premium</td><td style={{ padding: '12px 16px', color: '#555555' }}>Federal FLSA rules (weekly over 40)</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Statewide paid sick leave</td><td style={{ padding: '12px 16px', color: '#555555' }}>No statewide mandate (check local ordinances)</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>State paid family/medical leave program</td><td style={{ padding: '12px 16px', color: '#555555' }}>Yes, state program</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Worth knowing</td><td style={{ padding: '12px 16px', color: '#555555' }}>State paid family and medical leave benefits begin in 2026</td></tr>
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#888888', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
              Wage and overtime data:{' '}
              <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer">US Department of Labor state minimum wage laws</a>, updated January 1, 2026.
              Leave rules change frequently; confirm current requirements with the{' '}
              <a href="https://www.dol.gov/agencies/whd/state/contacts" target="_blank" rel="noopener noreferrer">Delaware state labor office</a>.
            </p>
          </div>
        </section>

        {/* WHAT WE HANDLE IN-STATE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Handled For You</p>
              <h2>What HR outsourcing takes off a Delaware employer&apos;s plate</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>A handbook that knows Delaware</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>The Expert plan builds your custom handbook with the Delaware policies that generic templates miss, keeps it current as the law moves, and ships the required Delaware labor law posters for your locations.</p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Hiring paperwork, Delaware-correct</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>State new hire packets carry every required Delaware document and disclosure, set up in isolved onboarding so each hire is compliant from day one, whether they sit in-state or across the country.</p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Leave, tracked to the right law</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>FMLA where it applies, Delaware leave rules layered correctly on top, and every leave guided end to end with the notices and documentation done on time.</p>
              </div>
            </div>
            <p className="reveal" style={{ fontSize: '0.95rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
              Employees in more than one state? That is the exact problem this service exists for: one set of HR professionals keeping every state&apos;s rules straight, instead of one stretched office manager guessing. Start at the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link> or compare models on <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* CTA + INDUSTRIES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Essential is live HR answers on demand. Expert adds your custom handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner who alerts you when Delaware law changes.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Industry-specific pain? See <Link href="/services/hr-outsourcing/healthcare">healthcare</Link>, <Link href="/services/hr-outsourcing/construction">construction</Link>, or <Link href="/services/hr-outsourcing/manufacturing">manufacturing</Link> HR outsourcing. Payroll the bigger problem? <Link href="/services/managed-payroll/delaware">Managed payroll in Delaware</Link> is BEG&apos;s core service.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Delaware HR outsourcing, answered</h2>
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
