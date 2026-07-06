import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import InlineSearch from '@/components/InlineSearch';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking System for Growing Teams | BEG',
  description: 'Still tracking applicants in spreadsheets and email? See how BEG resells and configures isolved Attract & Hire to fill roles faster, nationwide.',
  alternates: {
    canonical: 'https://www.beghr.com/services/applicant-tracking-system',
  },
  openGraph: {
    title: 'Applicant Tracking System for Growing Teams | BEG',
    description: 'Still tracking applicants in spreadsheets and email? See how BEG resells and configures isolved Attract & Hire to fill roles faster, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking System for Growing Teams | BEG', description: 'Still tracking applicants in spreadsheets and email? See how BEG resells and configures isolved Attract & Hire to fill roles faster, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-system');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system?',
    'An applicant tracking system, or ATS, is software that collects every job application in one place, tracks each candidate through your hiring stages, and helps your team move the right people forward without losing anyone in an inbox.',
  ],
  [
    'Is this isolved Attract & Hire?',
    'Yes. BEG resells, configures, and supports isolved Attract & Hire Small Business, the applicant tracking and recruiting module built into the isolved platform. It is the software running behind this service.',
  ],
  [
    'Does BEG build the software?',
    'No. isolved builds and maintains Attract & Hire. BEG resells it, configures it to your roles and hiring workflow, and provides ongoing support so your team gets it running correctly.',
  ],
  [
    'What does it cost?',
    'isolved Attract & Hire Small Business is $2.00 per employee per month, added to your isolved HCM platform rather than sold on its own. Answer a few questions and get an instant estimate for the full platform on screen in about 90 seconds, no call required.',
  ],
  [
    'Do you serve my state?',
    'Yes. BEG supports applicant tracking for companies in all 50 states, with everything configured and delivered remotely.',
  ],
  [
    'How does it connect to payroll?',
    'When you make an offer, the candidate record flows directly into onboarding and payroll setup instead of being re-keyed by hand, especially when paired with BEG managed payroll or isolved HCM.',
  ],
];

export default function ApplicantTrackingSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking System · Powered by isolved"
        title="An applicant tracking system puts every job candidate in one pipeline instead of scattered across inboxes and spreadsheets."
        description="When every resume lives in a different inbox, good candidates slip through and roles stay open for weeks. isolved Attract & Hire, resold and configured by BEG, gives your team one place to capture, track, and move every applicant forward. Fill open seats faster, in all 50 states, without adding headcount or software to manage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'All 50', label: 'States served, remote nationwide' },
          { value: '1 Pipeline', label: 'Every applicant in one place' },
          { value: 'isolved', label: 'Attract & Hire, resold and configured by BEG' },
        ]}
      >
        {/* SITE SEARCH */}
        <InlineSearch
          vertical="ATS"
          heading="Looking for something specific?"
          subhead="Search our applicant tracking pages and guides."
          chips={['ATS vs spreadsheets', 'pricing', 'by industry', 'isolved Attract & Hire']}
        />

        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Scattered Hiring Actually Costs You</p>
              <h2>Every applicant tracked by hand is a role that stays open longer.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '~44 days',
                  label: 'About the average time to fill an open role, per SHRM',
                  sub: 'The longer a seat sits empty, the more it costs in lost output and overworked teammates covering the gap. Manual tracking adds delay at every single stage.',
                },
                {
                  stat: '~$4,700',
                  label: 'Roughly the average cost per hire, per SHRM benchmarks',
                  sub: 'Every day a role stays open, and every resume that gets lost in an inbox, adds to what that hire ultimately costs the business.',
                },
                {
                  stat: '1 Inbox',
                  label: 'Is not a hiring system',
                  sub: 'When applications land across email, job boards, and sticky notes, good candidates fall through the cracks before anyone even reviews them.',
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
              Sources:{' '}
              <a href="https://www.shrm.org/topics-tools/research" target="_blank" rel="noopener noreferrer">SHRM research, time to fill and cost per hire benchmarks</a>
              {' '}and{' '}
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS JOLTS, quits and labor turnover data</a>.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered applicants to a filled seat in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire',
                  body: 'We set up isolved Attract & Hire around your open roles and the way your team actually hires, so it fits your workflow from day one instead of forcing you into someone else’s process.',
                },
                {
                  num: '02',
                  title: 'Applicants flow into one tracked pipeline',
                  body: 'Every application, from every source, lands in a single pipeline. No more checking five inboxes to find out who applied last week.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the seat faster',
                  body: 'Screening, scheduling, and offers move through one system, so your hiring managers spend their time talking to candidates instead of hunting for resumes.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What You Get</p>
              <h2>Everything inside isolved Attract & Hire, configured for your team</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Job posting distribution',
                  body: 'Push open roles out to job boards and your careers page from one place instead of posting everywhere by hand.',
                },
                {
                  heading: 'One applicant pipeline',
                  body: 'Every candidate, from every source, tracked through the same stages so nobody gets lost between a job board and an inbox.',
                },
                {
                  heading: 'Automated screening and knockout questions',
                  body: 'Filter out candidates who do not meet must-have requirements automatically, so your team reviews fewer, better-fit resumes.',
                },
                {
                  heading: 'Interview scheduling',
                  body: 'Coordinate interviews without the back-and-forth email chain, keeping candidates moving instead of waiting.',
                },
                {
                  heading: 'Offer handoff into onboarding and payroll',
                  body: 'When a candidate accepts, their information flows into onboarding and payroll setup instead of being re-entered from scratch.',
                },
              ].map(({ heading, body }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BEG */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why BEG</p>
              <h2>A reseller who configures it, supports it, and connects it to the rest of your stack</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'We configure and support it',
                  body: 'BEG resells isolved Attract & Hire and does the setup work: your roles, your workflow, your team trained on it. When something needs adjusting, BEG is who you call.',
                },
                {
                  title: 'National remote delivery',
                  body: 'Every client is set up and supported remotely, so it works the same whether your team is in one office or spread across the country.',
                },
                {
                  title: 'Connected to payroll and HCM',
                  body: 'Applicant tracking does not stop at the offer. It hands off into onboarding and payroll, so a filled seat becomes a paid employee without a manual re-entry step.',
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

        {/* BY INDUSTRY */}
        <section className="section section--soft">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By Industry</p>
              <h2>Applicant tracking built for how your industry actually hires</h2>
            </div>
            <div className="cards">
              <Link href="/services/applicant-tracking-system/applicant-tracking-for-healthcare" className="card-link reveal">
                <span className="tag">Healthcare</span>
                <h3>Healthcare</h3>
                <p>Credential-aware pipelines that keep licensed roles moving without losing track of who is qualified.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/applicant-tracking-for-construction" className="card-link reveal">
                <span className="tag">Construction &amp; Trades</span>
                <h3>Construction &amp; Trades</h3>
                <p>High-volume field hiring tracked in one pipeline instead of scattered across job sites and texts.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/applicant-tracking-for-restaurants" className="card-link reveal">
                <span className="tag">Restaurants &amp; Hospitality</span>
                <h3>Restaurants &amp; Hospitality</h3>
                <p>Fast, high-turnover hiring across multiple locations, tracked and screened in one place.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/applicant-tracking-for-manufacturing" className="card-link reveal">
                <span className="tag">Manufacturing</span>
                <h3>Manufacturing</h3>
                <p>Shift-based hiring at volume, with screening questions that filter for the roles that matter.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* EXPLORE */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">Explore</p>
              <h2>Learn more about applicant tracking</h2>
            </div>
            <div className="cards">
              <Link href="/services/applicant-tracking-system/what-is-an-applicant-tracking-system" className="card-link reveal">
                <h3>What is an applicant tracking system?</h3>
                <p>The plain-language definition, and how to tell if you need one.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/ats-vs-spreadsheets" className="card-link reveal">
                <h3>ATS vs spreadsheets and email</h3>
                <p>Why manual tracking breaks down as your hiring volume grows.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/isolved-attract-hire" className="card-link reveal">
                <h3>Inside isolved Attract &amp; Hire</h3>
                <p>A closer look at the platform BEG resells, configures, and supports.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/ats-pricing" className="card-link reveal">
                <h3>Applicant tracking system pricing</h3>
                <p>How pricing works and what shapes your number.</p>
              </Link>
              <Link href="/services/applicant-tracking-system/small-business-applicant-tracking-system" className="card-link reveal">
                <h3>ATS for small business</h3>
                <p>Why smaller teams need tracking too, and how to right-size it.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>Applicant tracking fills the seat. BEG handles the rest too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll eating your week?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  BEG&apos;s core service is <Link href="/services/managed-payroll">fully managed payroll</Link>: every cycle, filing, and W-2 handled, in your existing system.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, talent acquisition, and benefits on one platform, with Attract &amp; Hire built in.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need HR support too?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hr-outsourcing">HR outsourcing</Link> backs up your team with certified HR professionals and a dedicated partner.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the role filled for you?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/job-placement">Job Placement</Link> is talent acquisition as an outcome, flat fee per placement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <PricingCta service="hcm-software" />
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Applicant tracking, answered plainly</h2>
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
