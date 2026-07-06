import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'What Is an Applicant Tracking System? | BEG',
  description: 'An applicant tracking system organizes every candidate in one pipeline. Learn what an ATS does, who needs one, and how BEG sets it up.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/what-is-an-applicant-tracking-system' },
  openGraph: {
    title: 'What Is an Applicant Tracking System? | BEG',
    description: 'An applicant tracking system organizes every candidate in one pipeline. Learn what an ATS does, who needs one, and how BEG sets it up.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/what-is-an-applicant-tracking-system',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'What Is an Applicant Tracking System? | BEG', description: 'An applicant tracking system organizes every candidate in one pipeline. Learn what an ATS does, who needs one, and how BEG sets it up.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-system-what-is-an-applicant-tracking-system');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system, in plain terms?',
    'It is software that collects job applications from every source into one place and tracks each candidate through your hiring stages, from applied to interviewed to hired.',
  ],
  [
    'How does an ATS work?',
    'Applicants apply through a job board or your careers page, the system logs their information and resume, then your team moves them through stages like screening, interview, and offer, all inside one pipeline.',
  ],
  [
    'Do small businesses need an applicant tracking system?',
    'Once you are hiring for more than one or two roles at a time, or applications are landing in more than one inbox, an ATS keeps candidates from getting lost. BEG typically sees the biggest impact for companies of 25 to 100 employees.',
  ],
  [
    'Is an ATS the same as isolved Attract & Hire?',
    'isolved Attract & Hire is one specific applicant tracking system, the one BEG resells, configures, and supports. The term ATS refers to the whole category of software.',
  ],
  [
    'What does an ATS cost?',
    'It varies by company size and hiring volume. Visit the applicant tracking system pricing page for details and get an instant estimate in about 90 seconds.',
  ],
];

export default function WhatIsAnApplicantTrackingSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What is an applicant tracking system, and do you actually need one?',
            description: 'An applicant tracking system organizes every candidate in one pipeline. Learn what an ATS does, who needs one, and how BEG sets it up.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/what-is-an-applicant-tracking-system',
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
              { '@type': 'ListItem', position: 3, name: 'What Is an Applicant Tracking System?', item: 'https://www.beghr.com/services/applicant-tracking-system/what-is-an-applicant-tracking-system' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking System · Explained"
        title="What is an applicant tracking system, and do you actually need one?"
        description="An applicant tracking system, or ATS, is software that collects every job application into one pipeline and tracks each candidate through your hiring stages, so nobody gets lost between an inbox and a spreadsheet. Most growing companies reach the point where a spreadsheet cannot keep up well before they expect to."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'All 50', label: 'States served, remote nationwide' },
          { value: '1 Pipeline', label: 'Every applicant in one place' },
          { value: '25-100', label: 'Employees, our sweet spot' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Problem With Manual Tracking</p>
              <h2>Spreadsheets and inboxes were never built to track candidates.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '~44 days',
                  label: 'About the average time to fill an open role, per SHRM',
                  sub: 'Every extra day spent hunting for resumes across inboxes adds to how long a seat sits empty.',
                },
                {
                  stat: '~$4,700',
                  label: 'Roughly the average cost per hire, per SHRM benchmarks',
                  sub: 'Lost candidates and slow follow-up both add real cost to filling a single role.',
                },
                {
                  stat: '1 Spreadsheet',
                  label: 'Cannot replace a real pipeline',
                  sub: 'Someone has to update it by hand, and the moment they get busy, candidates stop getting followed up with.',
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

        {/* DEFINITION */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Definition</p>
              <h2>An applicant tracking system, in one paragraph</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                An <Link href="/services/applicant-tracking-system">applicant tracking system</Link>, or ATS, is software built to manage the hiring process from the moment someone applies to the moment they are hired. It collects applications from job boards, your careers page, and referrals into a single pipeline, tracks each candidate through stages like screening, interview, and offer, and gives your team one shared view of who applied for what and where they stand. Instead of a hiring manager checking an inbox, a recruiter checking a different inbox, and a spreadsheet trying to reconcile both, everyone works from the same system. That is the entire point: one pipeline, not five sources of truth that quietly disagree with each other. The large majority of employers, from small businesses to enterprises, now run hiring through some form of ATS rather than manual tracking, which is part of why candidates expect a faster, more organized process than a spreadsheet can deliver.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From application to filled seat in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire',
                  body: 'We set up isolved Attract & Hire around your open roles and how your team actually hires, so it fits your workflow instead of forcing you into someone else’s process.',
                },
                {
                  num: '02',
                  title: 'Applicants flow into one tracked pipeline',
                  body: 'Every application, from every source, lands in a single pipeline instead of scattered across inboxes and job boards.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the seat faster',
                  body: 'Screening, scheduling, and offers move through one system, so hiring managers spend their time on candidates, not searching for resumes.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#ffffff', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO NEEDS ONE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who Actually Needs One</p>
              <h2>The honest answer: most growing teams, sooner than they think</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.75', fontSize: '0.97rem' }}>
                You do not need to be a large enterprise to outgrow a spreadsheet. The moment a company is hiring for more than one role at a time, or applications are coming in through more than one channel, tracking candidates by hand starts costing real time and real candidates. BEG typically sees the clearest return for companies in the 25 to 100 employee range: big enough that hiring happens constantly, small enough that nobody has a dedicated recruiting team to manage the chaos manually. If that sounds like your business, see <Link href="/services/applicant-tracking-system/small-business-applicant-tracking-system">ATS for small business</Link> for a closer look at right-sizing it.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITY LIST */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What It Actually Does</p>
              <h2>The core capabilities behind isolved Attract & Hire</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Job posting distribution',
                  body: 'Push open roles to job boards and your careers page from one place.',
                },
                {
                  heading: 'One applicant pipeline',
                  body: 'Every candidate tracked through the same stages, no matter where they applied.',
                },
                {
                  heading: 'Automated screening',
                  body: 'Knockout questions filter out candidates who do not meet must-have requirements.',
                },
                {
                  heading: 'Interview scheduling',
                  body: 'Coordinate interviews without an email back-and-forth.',
                },
                {
                  heading: 'Offer handoff',
                  body: 'Accepted offers flow into onboarding and payroll instead of manual re-entry.',
                },
              ].map(({ heading, body }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#555555' }}>
              See the full walkthrough at <Link href="/services/applicant-tracking-system/isolved-attract-hire" style={{ color: '#ECAC60', fontWeight: 700 }}>Inside isolved Attract &amp; Hire</Link>.
            </p>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where This Fits</p>
              <h2>An ATS is one piece. BEG handles the rest of the stack too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>See the full ATS silo</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Start at the <Link href="/services/applicant-tracking-system">applicant tracking system</Link> hub for pricing, industries, and everything else.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Compare it to what you have now</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  See <Link href="/services/applicant-tracking-system/ats-vs-spreadsheets">ATS vs spreadsheets and email</Link> for a direct comparison.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">HCM software</Link> puts payroll, HR, talent acquisition, and benefits on one platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="section section--soft">
          <div className="container" style={{ textAlign: 'center' }}>
            <PricingCta service="hcm-software" />
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Applicant tracking systems, answered plainly</h2>
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
