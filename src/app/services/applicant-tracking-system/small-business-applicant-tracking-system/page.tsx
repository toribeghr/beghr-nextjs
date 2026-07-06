import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'ATS for Small Business, Set Up by BEG',
  description: 'Small teams lose hires to slow, manual processes. See how a right-sized applicant tracking system helps you compete and hire faster.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/small-business-applicant-tracking-system' },
  openGraph: {
    title: 'ATS for Small Business, Set Up by BEG',
    description: 'Small teams lose hires to slow, manual processes. See how a right-sized applicant tracking system helps you compete and hire faster.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/small-business-applicant-tracking-system',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'ATS for Small Business, Set Up by BEG', description: 'Small teams lose hires to slow, manual processes. See how a right-sized applicant tracking system helps you compete and hire faster.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-system-small-business-applicant-tracking-system');

const FAQS: [string, string][] = [
  [
    'Is an applicant tracking system worth it for a small business?',
    'For a team of 25 to 100, yes, once hiring happens often enough that spreadsheets and shared inboxes start losing candidates or slowing decisions down. Below that volume, the calculation changes, and BEG will tell you honestly which side you are on.',
  ],
  [
    'Will an enterprise ATS just be overkill for us?',
    'Often, yes. Many enterprise tools are built for high-volume, multi-country hiring and price and configure accordingly. isolved Attract & Hire Small Business is scoped and priced for smaller teams, at $2.00 per employee per month added to isolved HCM, instead of forcing you into enterprise complexity you will not use.',
  ],
  [
    'Do we need an IT person to set this up?',
    'No. BEG configures and implements isolved Attract & Hire for you, including career-site setup, workflows, and user access. Your team logs in to a system that already works, instead of self-implementing it.',
  ],
  [
    'What happens after we are set up?',
    'BEG supports the system on an ongoing basis, so when something needs adjusting, such as a new role workflow or a hiring manager added, you have someone to call instead of digging through settings alone.',
  ],
  [
    'How is this different from just using free tools or spreadsheets?',
    'Spreadsheets and email do not track candidate status, deadlines, or communication history in one place, and that gap is exactly where small teams lose good candidates to slower decisions or dropped follow-up.',
  ],
  [
    'Can we see pricing before talking to anyone?',
    'Yes. BEG shows an instant, on-screen estimate before any call. See it on the applicant tracking system pricing page.',
  ],
];

export default function SmallBusinessAtsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'An applicant tracking system built for a team of 25 to 100',
            description: 'Small teams lose hires to slow, manual processes. See how a right-sized applicant tracking system helps you compete and hire faster.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/small-business-applicant-tracking-system',
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
              { '@type': 'ListItem', position: 2, name: 'Applicant Tracking System', item: 'https://www.beghr.com/services/applicant-tracking-system' },
              { '@type': 'ListItem', position: 3, name: 'ATS for Small Business', item: 'https://www.beghr.com/services/applicant-tracking-system/small-business-applicant-tracking-system' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking System · Small Business"
        title="An applicant tracking system built for a team of 25 to 100"
        description="Your hiring volume is real, but your team is not built to run a spreadsheet-and-email process forever. isolved Attract & Hire Small Business, configured and supported by BEG, gives a 25-to-100-person company the tracking, workflow, and career-site tools bigger competitors already have, without enterprise pricing or a self-implementation project. It is $2.00 per employee per month, added to isolved HCM."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: '25-100', label: 'The team size this is built for' },
          { value: '0', label: 'IT projects required to get running' },
          { value: '1 partner', label: 'BEG configures and supports it for you' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Manual Hiring Actually Costs A Small Team</p>
              <h2>At 25 to 100 employees, hiring is frequent enough to hurt and small enough to get ignored.</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Candidates fall through a shared inbox</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>At this size, hiring is usually run out of an inbox and a spreadsheet, split across whoever has time that week. A resume sits unread for three days, a hiring manager forgets to give feedback, and a candidate you wanted takes another offer. Nobody decided to lose that candidate. The process just had no owner and no tracking.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>You compete against companies with better tools</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Candidates today expect a real careers page, a clean application, and a timely response. Larger competitors already have that, funded by enterprise ATS budgets. A 25-to-100-person company loses good candidates not on compensation, but on a slower, clunkier process than the company down the street.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Nobody on staff has time to own hiring software</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Even when leadership knows a real system would help, someone still has to select it, configure it, and keep it running. At this size, that person usually already has a full-time job doing something else, so the project gets shelved indefinitely.</p>
              </div>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources:{' '}
              <a href="https://www.shrm.org/topics-tools/research" target="_blank" rel="noopener noreferrer">SHRM Research</a>
              {' '}and{' '}
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS Job Openings and Labor Turnover Survey</a>, on hiring volume and time-to-fill pressure facing smaller employers.
            </p>
          </div>
        </section>

        {/* WHY NOT ENTERPRISE ATS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why Not Just Buy An Enterprise ATS</p>
              <h2>Most applicant tracking tools are not built for a team your size</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Too heavy',
                  body: 'Enterprise ATS platforms are built for high-volume, multi-country hiring with configuration options a 25-to-100-person company will never touch. You pay for complexity you do not need.',
                },
                {
                  title: 'Too costly',
                  body: 'Enterprise pricing and implementation fees are sized for enterprise budgets. Small teams end up either overpaying or getting talked into a stripped-down tier that still costs enterprise money.',
                },
                {
                  title: 'Too slow to deploy',
                  body: 'Big-platform implementations can take months and require an internal project owner. A small team rarely has that person to spare, so the rollout stalls before it starts.',
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
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>Right-sized software, configured and supported for you</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG resells, configures, implements, and supports isolved Attract &amp; Hire for companies exactly in the 25-to-100-employee range. You are not handed a login and left to figure it out. BEG sets up your career site, workflows, and user access, then stays on to support it, so your team gets enterprise-grade hiring tools without an enterprise-grade project or an enterprise-grade bill.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" />
            </div>
          </div>
        </section>

        {/* DESIRED OUTCOME */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Changes</p>
              <h2>Hiring stops depending on who remembered to check the inbox</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'One place to see every candidate',
                  body: 'Every application, resume, and status lands in one system instead of scattered across inboxes and desks. Nothing sits unread for days by accident.',
                },
                {
                  title: 'A career site that looks like a real company',
                  body: 'Candidates apply through a branded, professional experience instead of an email address, which changes how your company reads to the people you want to hire.',
                },
                {
                  title: 'Hiring managers with clear next steps',
                  body: 'Workflows show exactly who needs to give feedback and when, so a good candidate is not lost to someone forgetting to reply.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Keep Exploring</p>
              <h2>See the details before you commit</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Not sure what an ATS does?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Start with <Link href="/services/applicant-tracking-system/what-is-an-applicant-tracking-system">what an ATS does</Link> before comparing options.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want to know what it costs?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> with an instant, on-screen estimate.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want to see what is inside?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Look inside <Link href="/services/applicant-tracking-system/isolved-attract-hire">isolved Attract &amp; Hire</Link>, the platform behind this.
                </p>
              </div>
            </div>
            <p className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#555555' }}>
              Need more than hiring covered? See <Link href="/services/hr-outsourcing" style={{ color: '#9a6b1f', fontWeight: 700 }}>HR outsourcing</Link>.
            </p>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/services/applicant-tracking-system" style={{ color: '#9a6b1f', fontWeight: 700 }}>&larr; Back to Applicant Tracking System</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Small business ATS, answered plainly</h2>
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
