import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Construction HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for construction: safety-ready policies, field-crew hiring packets, and classification guidance. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/construction' },
  openGraph: {
    title: 'Construction HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for construction: safety-ready policies, field-crew hiring packets, and classification guidance. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Construction HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for construction: safety-ready policies, field-crew hiring packets, and classification guidance. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-construction');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a construction company?',
    'Certified HR professionals build your handbook and safety-adjacent employment policies, compliant new hire packets for field crews, job descriptions, and guide terminations and leave, sized to a contractor instead of a corporation.',
  ],
  [
    'Does it help with worker classification?',
    'Yes, at the policy and documentation level: written classification criteria, compliant job descriptions, and guidance from HR professionals before a 1099 decision creates DOL or state audit exposure.',
  ],
  [
    'Does HR outsourcing replace our safety program?',
    'No. Your safety director or consultant owns OSHA compliance in the field. HR outsourcing owns the employment side: policies, training documentation, incident-related discipline, and recordkeeping practices.',
  ],
  [
    'Is this a PEO for contractors?',
    'No. There is no co-employment and no employer-of-record change, which also means your workers compensation program and EMR stay yours. Powered by isolved.',
  ],
  [
    'What does construction HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingConstructionPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Construction', item: 'https://www.beghr.com/services/hr-outsourcing/construction' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Construction"
        title="You manage crews, bids, and deadlines. HR paperwork was never the plan."
        description="Field crews hired fast, classification calls made on the tailgate, handbooks that have not survived a single jobsite dispute: construction HR fails in expensive ways. BEG HR outsourcing, powered by isolved, gives contractors certified HR professionals for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'Your comp program stays yours' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Construction HR Problem</p>
              <h2>The trades have the highest HR stakes and the thinnest HR staffing.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager most contractors cannot justify',
                  sub: 'So HR lands on the office manager or the owner, between estimating, invoicing, and keeping crews staffed.',
                },
                {
                  stat: '1099 audits',
                  label: 'Worker misclassification is a DOL and state enforcement priority',
                  sub: 'Construction is a named focus industry for misclassification enforcement. Back taxes, penalties, and comp premium adjustments arrive together.',
                },
                {
                  stat: 'Day 1',
                  label: 'When compliant hiring paperwork has to be right',
                  sub: 'Crews get hired the week the job starts. I-9s, state new hire packets, and safety acknowledgments done wrong at speed become findings later.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/flsa/misclassification" target="_blank" rel="noopener noreferrer">US Department of Labor, worker misclassification</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Construction HR Compliance</p>
              <h2>The employment problems specific to contractors, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Employee or subcontractor: getting the classification call documented</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Construction runs on a mix of W-2 crews and 1099 subs, and the line between them is exactly where DOL and state auditors look first. The test is not what the worker agreed to; it is control, tools, schedule, and economic reality, and states like California apply stricter ABC tests. HR outsourcing gives you written classification criteria, job descriptions that support the classification, and an HR professional to call BEFORE you 1099 a framer who works your schedule with your tools. When an audit letter arrives, the difference between exposure and defense is the documentation you built in advance.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>New hire packets built for jobsite speed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Contractors hire in bursts when work lands, often across state lines, and the paperwork has to keep up: I-9 verification within three business days, state-specific new hire reporting, wage theft prevention notices in states that require them, and safety policy acknowledgments that matter the day an incident happens. The Expert plan includes state-specific new hire packets with every required document and disclosure assembled, set up in isolved onboarding so a foreman can get a new hire compliant from a phone, not a filing cabinet back at the office.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Safety-adjacent employment policies that hold up after an incident</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>OSHA compliance in the field belongs to your safety program. What HR owns is the employment layer around it: drug and alcohol testing policies including post-accident testing that respects OSHA retaliation rules, disciplinary procedures for safety violations applied consistently enough to survive a wrongful termination claim, documentation of safety training as an employment record, and return-to-work procedures after an injury that coordinate with workers compensation without violating the ADA. HR outsourcing writes those policies for your operation and coaches your supervisors on applying them the same way on every crew.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Terminations and layoffs in a project-based workforce</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Construction employment is project-shaped: crews staff up for a job and shrink when it closes out. That rhythm creates recurring HR events most industries face rarely: end-of-project layoffs, seasonal separations and rehires, and final paychecks governed by state rules that in some states mean same-day payment on termination. Handled loosely, each separation is an unemployment claim to contest and a potential discrimination allegation if crew reductions do not follow documented, neutral criteria. HR professionals guide each separation, the documentation behind it, and the rehire paperwork when the next job breaks ground.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Handbooks and policies for a bilingual, multi-site workforce</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A construction handbook written from a generic office template fails on contact with the field: it says nothing about per diem and travel expectations, vehicle and equipment use, jobsite conduct, weather days, or reporting time. And a policy a crew member cannot read is a policy that does not protect you; if a substantial part of your workforce works primarily in Spanish, key policies and acknowledgments should exist in Spanish. The Expert plan builds the handbook around how your company actually operates, keeps it current across the states you build in, and maintains the labor law posters for your locations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Contractors with real crews and no HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'General contractors', body: 'Office staff plus field crews across multiple active jobs, with hiring surges every time a bid lands.' },
                { title: 'Specialty trade contractors', body: 'Electrical, mechanical, plumbing, concrete: licensed trades where certifications and apprenticeship records are employment documents.' },
                { title: 'Roofing and exteriors', body: 'Seasonal staffing swings, subcontractor-heavy models, and the classification exposure that comes with both.' },
                { title: 'Excavation and sitework', body: 'CDL holders and equipment operators, where DOT-adjacent requirements meet ordinary employment law.' },
                { title: 'Home builders and remodelers', body: 'Lean office teams running project-based crews, warranty techs, and design staff under one employment umbrella.' },
                { title: 'Landscaping and hardscaping', body: 'Seasonal rehires every spring, H-2B paperwork in some operations, and heat illness prevention rules in a growing list of states.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Certified payroll and prevailing wage the bigger problem? That is <Link href="/services/managed-payroll/construction">managed payroll for construction</Link>. Also in this silo: <Link href="/services/hr-outsourcing/healthcare">healthcare HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Construction HR outsourcing, answered</h2>
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
