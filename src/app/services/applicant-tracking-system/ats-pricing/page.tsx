import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Applicant Tracking System Pricing | BEG',
  description: 'Wondering what an applicant tracking system costs? See how BEG prices isolved Attract & Hire and get instant pricing for your team size.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/ats-pricing' },
  openGraph: {
    title: 'Applicant Tracking System Pricing | BEG',
    description: 'Wondering what an applicant tracking system costs? See how BEG prices isolved Attract & Hire and get instant pricing for your team size.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/ats-pricing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking System Pricing | BEG', description: 'Wondering what an applicant tracking system costs? See how BEG prices isolved Attract & Hire and get instant pricing for your team size.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-system-ats-pricing');

const FAQS: [string, string][] = [
  [
    'How much does an applicant tracking system cost?',
    'isolved Attract & Hire is bundled into the Build tier of isolved HCM and up, at no separate module charge. Your total is simply your isolved HCM per-employee rate for that tier, which starts at $12 per employee per month. Answer a few questions and BEG shows you an instant, on-screen estimate for the whole platform.',
  ],
  [
    'Is isolved Attract & Hire sold on its own?',
    'No. It is a hiring module included the moment your team is on the Build tier of isolved HCM or higher. There is no separate ATS invoice to track: it is inside the tier price you already see quoted.',
  ],
  [
    'Is there a demo I have to sit through before I see a price?',
    'No. BEG does not gate pricing behind a sales demo. Answer a short set of questions and your estimate appears on screen immediately, with exact pricing confirmed on a short discovery call if you want to move forward.',
  ],
  [
    'What drives the price up or down?',
    'Your headcount and which isolved HCM tier you land on. Attract & Hire itself carries no additional per-employee charge once you are on Build tier or above, so the tier and employee count are the only two levers.',
  ],
  [
    'Is isolved Attract & Hire cheaper than hiring another recruiter?',
    'For most small and mid-size teams, yes. It is bundled into your platform tier rather than billed separately, while a recruiter is a full salary. Many companies use both: software to run the process, and existing staff or BEG job placement to fill specific roles.',
  ],
  [
    'Does the price include setup and support?',
    'BEG configures and supports isolved Attract & Hire for your team as part of the relationship. You are not left to self-implement hiring software. Exact scope is confirmed on your discovery call after you see your instant estimate.',
  ],
];

export default function AtsPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What does an applicant tracking system cost for a team your size?',
            description: 'Wondering what an applicant tracking system costs? See how BEG prices isolved Attract & Hire and get instant pricing for your team size.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/ats-pricing',
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
              { '@type': 'ListItem', position: 3, name: 'ATS Pricing', item: 'https://www.beghr.com/services/applicant-tracking-system/ats-pricing' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking System · Pricing"
        title="What does an applicant tracking system cost for a team your size?"
        description="A vacant role costs you more every week it stays open. isolved Attract & Hire is applicant tracking software bundled into the Build tier of isolved HCM and up, not sold on its own. See your instant estimate below, no demo required."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" preselectModule="ats" />}
        heroStats={[
          { value: 'Bundled', label: 'Included in Build tier and up, no separate charge' },
          { value: '90 sec', label: 'To your instant on-screen estimate' },
          { value: '0', label: 'Demos required to see a number' },
        ]}
      >
        {/* COST OF WAITING */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What A Vacant Role Actually Costs</p>
              <h2>The real comparison is not "ATS cost" vs. zero. It is ATS cost vs. an open seat.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'Roughly 44 days',
                  label: 'Average time to fill a role',
                  sub: 'Every one of those days is a day of lost output, overtime for the team covering the gap, or work that simply does not get done.',
                },
                {
                  stat: 'About $4,700',
                  label: 'Average cost per hire',
                  sub: 'That figure covers sourcing, screening, and interview time already spent, before you count what a slow, manual process adds on top.',
                },
                {
                  stat: '1 open req',
                  label: 'Is what most small teams are actually pricing against',
                  sub: 'Compare software pricing to the cost of the vacant role it helps you fill faster, not to zero. That is the honest comparison.',
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
              Sources: <a href="https://www.shrm.org/topics-tools/research" target="_blank" rel="noopener noreferrer">SHRM Research</a>, roughly $4,700 average cost per hire and about 44 days average time-to-fill.
            </p>
          </div>
        </section>

        {/* WHAT DRIVES YOUR PRICE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Drives Your Price</p>
              <h2>No separate module fee, just the isolved HCM tier it lives on</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'Attract & Hire has no per-employee charge of its own',
                  body: 'It is bundled into the Build tier of isolved HCM and every tier above it. No per-recruiter fees, no per-job-posting charges, and no separate line item to track. Standalone applicant tracking software sold on its own typically carries per-seat licensing, implementation fees, and tiered add-ons that push the real cost well beyond what you pay here.',
                },
                {
                  title: 'It rides on isolved HCM',
                  body: 'Attract & Hire is not standalone. It comes included once you are on the Build tier of isolved HCM or higher, so your total is simply that tier\'s per-employee rate. BEG scopes the whole platform together.',
                },
                {
                  title: 'Headcount and tier, not hiring volume',
                  body: 'Because the platform is priced per employee per month, your cost tracks your team size and which tier you land on, not how many roles you happen to be filling this quarter. A busy hiring month does not spike the bill.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW PRICING WORKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From question marks to a real number in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'Answer a few questions',
                  body: 'Team size, hiring volume, and what you need the system to do. No account creation, no sales call to unlock the form.',
                },
                {
                  num: '02',
                  title: 'See your number on screen',
                  body: 'Your estimate for isolved HCM with Attract & Hire included appears instantly, sized to what you told us, not a generic sticker price.',
                },
                {
                  num: '03',
                  title: 'Confirm scope on a short call',
                  body: 'BEG configures, implements, and supports the system for you. The call locks in exact pricing and what is included.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" preselectModule="ats" />
            </div>
          </div>
        </section>

        {/* CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Keep Exploring</p>
              <h2>See what you are pricing before you commit</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>What are you actually buying?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  See what is inside <Link href="/services/applicant-tracking-system/isolved-attract-hire">isolved Attract &amp; Hire</Link> before you price it out.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Running a small team?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  See how BEG right-sizes an <Link href="/services/applicant-tracking-system/small-business-applicant-tracking-system">ATS for small business</Link> teams of 25 to 100.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll on your mind too?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Pair hiring with <Link href="/services/managed-payroll">managed payroll services</Link> and keep both off your plate.
                </p>
              </div>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/services/applicant-tracking-system" style={{ color: '#9a6b1f', fontWeight: 700 }}>&larr; Back to Applicant Tracking System</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>ATS pricing, answered plainly</h2>
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
