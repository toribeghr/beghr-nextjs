import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Staffing Agency HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for staffing agencies: ACA compliance at volume, high-speed I-9 onboarding, and unemployment claims handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/staffing-agency' },
  openGraph: {
    title: 'Staffing Agency HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for staffing agencies: ACA compliance at volume, high-speed I-9 onboarding, and unemployment claims handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/staffing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Staffing Agency HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for staffing agencies: ACA compliance at volume, high-speed I-9 onboarding, and unemployment claims handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-staffing-agency');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a staffing agency?',
    'Certified HR professionals handle your handbook, ACA measurement policies, unemployment claim procedures, conduct policies covering client sites, and coaching for your recruiters and branch managers, sized to an agency instead of a corporate HR department.',
  ],
  [
    'Can it help with ACA compliance for variable-hour placed workers?',
    'Yes at the policy level: lookback measurement periods, stability periods, and offer-of-coverage procedures documented and applied consistently, so applicable-large-employer obligations are handled by design instead of discovered at filing time.',
  ],
  [
    'Does it cover unemployment claims on placed workers?',
    'It builds the process: assignment-end documentation, reassignment offer records, and response procedures that meet state deadlines, so your experience rating reflects reality instead of missed responses.',
  ],
  [
    'Is this a PEO or co-employment arrangement?',
    'No. You stay the employer of record for your placed workers, exactly as today. BEG supports your internal HR function: policies, compliance, and guidance for the people who run your agency. Powered by isolved.',
  ],
  [
    'What does staffing agency HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingStaffingAgencyPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Staffing Agencies', item: 'https://www.beghr.com/services/hr-outsourcing/staffing-agency' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Staffing Agencies"
        title="You are the employer of record for everyone you place. That is a lot of HR."
        description="Every worker on assignment is on your W-2: ACA math at volume, I-9s at placement speed, unemployment claims charging your account, and conduct policies that have to work at client sites you do not control. BEG HR outsourcing, powered by isolved, puts certified HR professionals behind your internal team for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Staffing Agency HR Problem</p>
              <h2>Placements get the attention. Employer-of-record obligations get the penalty notice.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before staffing complexity',
                  sub: 'Agencies with lean internal teams and hundreds of placed workers rarely make that hire, so HR lands on the owner or a branch manager, on top of filling orders.',
                },
                {
                  stat: '30 hrs/wk',
                  label: 'The ACA full-time line your variable-hour workforce crosses unpredictably',
                  sub: 'Placed workers count toward applicable-large-employer status, and variable-hour employees need lookback measurement done correctly. Get it wrong at volume and the penalty math gets ugly fast.',
                },
                {
                  stat: 'Days',
                  label: 'How long you get to respond to an unemployment claim',
                  sub: 'Claims from assignment endings charge your account, and states hold you to short response deadlines. Missed responses and thin documentation compound directly into your tax rate.',
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
              Source: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Staffing Agency HR Compliance</p>
              <h2>The employment problems specific to staffing, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA applicable-large-employer math when headcount is the business</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A staffing agency hits applicable-large-employer status faster than almost any business its revenue size, because placed workers are your employees for ACA purposes. Variable-hour workers need a lookback measurement method: defined measurement periods, administrative periods, and stability periods, applied consistently and documented, so you know who must be offered coverage and when. An agency that improvises this discovers the problem at 1094-C filing time, or worse, in an IRS penalty letter. HR outsourcing sets the measurement policy, documents the offer process, and keeps the whole framework consistent as your placed headcount swings month to month.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Co-employment agreements that say who owns what, before a claim asks</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Staffing lives with co-employment as a fact of the model: you employ the worker, the client directs the daily work. The exposure comes when nobody wrote down who handles what. Your client agreements and your policies should align on supervision, safety, harassment response, accommodation requests, and termination decisions, because a placed worker with a complaint will name everyone. HR outsourcing makes sure your employment policies match what your contracts promise: who investigates, who documents, who decides. When the allocation is written, trained, and followed, a co-employment claim finds a paper trail instead of a shrug.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>I-9 and onboarding at placement speed, without the shortcuts</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a client needs forty workers on Monday, onboarding becomes a race, and I-9 rules do not care. Section 1 by the first day of work, Section 2 within three business days, correct document handling, and consistent procedures across every branch and recruiter. At staffing volume, a sloppy habit becomes hundreds of identical violations, and ICE audits price per form. HR outsourcing standardizes the packet, the sequence, and the recordkeeping: recruiting moves at full speed while every hire generates the same clean file. Remote hires, reverification, and retention rules get written procedures instead of tribal knowledge.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Unemployment claims managed like the cost center they are</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every assignment ending is a potential unemployment claim, and in staffing those claims arrive constantly. Your defense is process: documenting that reassignment was offered, recording refusals of suitable work, responding within state deadlines, and contesting the claims that should be contested. Many states have specific rules requiring temp workers to contact the agency for reassignment before claiming benefits, but only if your policies say so in writing and you can prove the worker knew. HR outsourcing builds the assignment-end procedure, the notice language, and the response discipline that keeps your experience rating from drifting upward year after year.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Conduct policies that follow your workers onto client sites</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Your handbook has to govern behavior in workplaces you do not run: harassment reporting when the harasser is a client supervisor, safety complaints on a client floor, drug and alcohol policies that satisfy multiple client requirements, and discipline when the client just says do not send that person back. A placed worker still has full employment rights against you, so remove-from-assignment cannot quietly become an undocumented termination. HR outsourcing writes conduct and reporting policies built for the triangle, trains your internal staff on handling client-site complaints, and keeps the file straight when placement decisions and employment decisions blur.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Agencies big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Light industrial staffing firms', body: 'High-volume weekly placements, safety policies across client sites, and unemployment claims as a standing line item.' },
                { title: 'Clerical and administrative staffing', body: 'Variable-hour workers, ACA measurement complexity, and onboarding that runs in batches.' },
                { title: 'IT and professional staffing', body: 'Higher-wage contractors, classification questions, and confidentiality obligations that flow down from clients.' },
                { title: 'Healthcare staffing agencies', body: 'Credentialed placements, license verification obligations, and client facilities with their own compliance demands.' },
                { title: 'Direct hire and search firms', body: 'Lean internal teams whose own employment practices deserve the same rigor they bring to placements.' },
                { title: 'Multi-branch and multi-state agencies', body: 'One employment entity, several state rulebooks, and branch managers making HR calls without HR training.' },
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
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/staffing-agency">managed payroll for staffing agencies</Link>. Placing clinical talent? See <Link href="/services/hr-outsourcing/healthcare">HR outsourcing for healthcare</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Staffing agency HR outsourcing, answered</h2>
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
