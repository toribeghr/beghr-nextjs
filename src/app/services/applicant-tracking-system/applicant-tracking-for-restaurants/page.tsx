import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking for Restaurant Hiring',
  description: 'Turnover never stops in hospitality, so hiring cannot either. See how an applicant tracking system keeps restaurant roles filled, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-restaurants' },
  openGraph: {
    title: 'Applicant Tracking for Restaurant Hiring',
    description: 'Turnover never stops in hospitality, so hiring cannot either. See how an applicant tracking system keeps restaurant roles filled, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-restaurants',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking for Restaurant Hiring', description: 'Turnover never stops in hospitality, so hiring cannot either. See how an applicant tracking system keeps restaurant roles filled, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-for-restaurants');

const FAQS: [string, string][] = [
  [
    'What is an applicant tracking system for restaurant hiring?',
    'An applicant tracking system for restaurant hiring is software that collects applications for front-of-house and back-of-house roles into one tracked pipeline, instead of a stack of paper applications and texts across multiple locations.',
  ],
  [
    'Can it handle hiring across multiple locations?',
    'Yes. isolved Attract & Hire is configured around your roles and locations, so applicants for a server role at one restaurant and a line cook role at another both land in the same tracked pipeline, sorted by site.',
  ],
  [
    'Does BEG build the applicant tracking software?',
    'No. BEG resells, configures, implements, and supports isolved Attract & Hire. isolved builds and maintains the platform; BEG sets it up around your roles, shifts, and locations.',
  ],
  [
    'How does this help with constant turnover?',
    'Because restaurant hiring never really stops, a tracked pipeline keeps a steady flow of applicants ready to move into shift roles as they open, instead of starting the search from zero every time someone leaves.',
  ],
  [
    'We hire a lot of shift and hourly roles. Does that work?',
    'Yes. The system is configured around shift and hourly roles specifically, so high-volume, high-turnover hiring runs through the same pipeline every time, not a new process each time.',
  ],
  [
    'What does this cost?',
    'Pricing depends on your hiring volume and configuration. Use the instant pricing tool for isolved Attract & Hire to see your number without booking a call first.',
  ],
];

export default function ApplicantTrackingForRestaurantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Turnover never stops, so your hiring cannot either',
            description: 'Turnover never stops in hospitality, so hiring cannot either. See how an applicant tracking system keeps restaurant roles filled, nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-restaurants',
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
              { '@type': 'ListItem', position: 3, name: 'Applicant Tracking for Restaurants', item: 'https://www.beghr.com/services/applicant-tracking-system/applicant-tracking-for-restaurants' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking · Restaurants"
        title="Turnover never stops, so your hiring can't either"
        description="Servers, cooks, and shift leads move on constantly, and a restaurant that stops hiring even for a week feels it on the floor immediately. isolved Attract & Hire keeps every applicant, at every location, in one tracked pipeline, so your team can keep advancing candidates and keep every shift covered."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: 'One pipeline', label: 'Across every location and shift' },
          { value: 'Built for turnover', label: 'Configured to your roles and workflow' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Cost of Slow Hiring</p>
              <h2>In hospitality, hiring is not a project. It is a constant, running process</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Extreme turnover',
                  label: 'The nature of the business, not a bad year',
                  sub: 'Restaurant and hospitality roles turn over faster than almost any other industry, and a process built for occasional hiring cannot keep pace.',
                },
                {
                  stat: 'Constant re-hiring',
                  label: 'The same roles, again and again',
                  sub: 'Server, cook, and host positions open up on a rolling basis, and starting from scratch every time wastes time your managers do not have.',
                },
                {
                  stat: 'Multi-location, multi-shift',
                  label: 'One process has to cover every site',
                  sub: 'A hiring process that only works for one location or one shift pattern breaks the moment you add a second restaurant or a third shift.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources:{' '}
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS Job Openings and Labor Turnover Survey (JOLTS)</a>, which shows accommodation and food services with roughly the highest quits rate of any industry.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From constant openings to covered shifts in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Attract & Hire to your roles and workflow',
                  body: 'Front-of-house, back-of-house, shifts, and locations get built into the system around how your restaurants actually hire, not a generic template.',
                },
                {
                  num: '02',
                  title: 'Applicants land in one tracked pipeline',
                  body: 'Every candidate for every open role, at every location, shows up in one place instead of paper applications and scattered texts.',
                },
                {
                  num: '03',
                  title: 'Your team advances candidates and fills the seat faster',
                  body: 'General managers and shift leads move candidates through together, so shifts stay covered instead of running short.',
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

        {/* WHAT THIS SOLVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What This Solves</p>
              <h2>Built for how restaurant and hospitality teams actually hire</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'Extreme turnover',
                  body: 'A steady, tracked pipeline means new applicants are always moving toward an offer, instead of scrambling every time someone gives notice.',
                },
                {
                  title: 'Constant re-hiring',
                  body: 'The same server and cook roles reuse the same configured workflow every time, so managers are not rebuilding a process on the fly.',
                },
                {
                  title: 'Multi-location, multi-shift roles',
                  body: 'One pipeline covers every location and every shift pattern, giving ownership visibility across the whole business, not just one site.',
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

        {/* CROSS-SILO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Go Deeper</p>
              <h2>More on applicant tracking and the rest of the BEG stack</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>See the platform itself</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/isolved-attract-hire">Inside isolved Attract & Hire</Link>: what the platform actually does.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Still running it off a spreadsheet?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-vs-spreadsheets">ATS vs spreadsheets</Link>: what changes when you switch.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See pricing</Link> for isolved Attract & Hire.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want more than hiring handled?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hr-outsourcing">HR outsourcing</Link>: handbooks, compliance, and a dedicated HR pro.
                </p>
              </div>
            </div>
            <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/services/applicant-tracking-system" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Applicant Tracking System overview</Link>
            </p>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Ready?</p>
              <h2>See your isolved Attract & Hire price before you talk to anyone</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Applicant tracking for restaurants, answered</h2>
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
