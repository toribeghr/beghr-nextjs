import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Search | C-Suite Placed Fast. 45-Day Guarantee. | BEG',
  description: 'Confidential executive and director-level search. Milestone-based, 45-day guarantee. Find C-suite and leadership talent that moves the needle.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/executive' },
  openGraph: {
    title: 'Executive Search | C-Suite Placed Fast. 45-Day Guarantee. | BEG',
    description: 'Confidential executive and director-level search. Milestone-based, 45-day guarantee. Find C-suite and leadership talent that moves the needle.',
    url: 'https://beghr.com/services/job-placement/executive',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Executive Search | C-Suite Placed Fast. 45-Day Guarantee. | BEG', description: 'Confidential executive and director-level search. Milestone-based, 45-day guarantee. Find C-suite and leadership talent that moves the needle.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('placement-executive');

export default function PlacementExecutivePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/executive.svg"
      imageAlt="Organization with an open C-suite or director role"
      eyebrow="Job Placement · Executive"
      title="An empty leadership seat costs more than the salary."
      description="Every month a C-suite or director role goes unfilled, decisions do not get made, strategies stall, and teams lose direction. We conduct confidential executive searches and place senior leaders in 23–35 days — discreetly, at roughly 50% less than traditional executive search firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than traditional executive search"}]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Real Cost of a Slow Search</p>
            <h2>What does that open role actually cost your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$25,000+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Per month in opportunity cost from an empty C-suite seat</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>External consultants, fractional executives, and absorbed board time all cost money while a permanent seat goes unfilled.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>6–9 months</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>What traditional executive search firms take on average</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Legacy retained search models were built for a different era. The best candidates do not wait 6 months.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Confidential</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Every search — your competitors cannot know you are looking</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Executive vacancies signal instability. Discretion is not optional — it is the foundation of how we work.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From open role to placed hire in three steps</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Discovery call', body: 'We learn your organization, the role, and what a strong candidate actually looks like in your environment. 15 minutes. No fluff.' },
              { num: '02', title: 'Active sourcing', body: 'We go direct to passive candidates — professionals who are not on job boards but are quietly open to the right opportunity. This is where most searches fail.' },
              { num: '03', title: 'Shortlist review', body: 'You receive 3–5 pre-screened candidates. No stacks of resumes. No wasted interviews. You meet candidates who have already been qualified against your specific criteria.' },
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

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things every organization wants — and most placement firms do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No contingency fees. Ever.',
                objection: 'Common objection: "We already work with contingency recruiters."',
                body: 'Traditional retained executive search firms charge 30–35% of first-year compensation — plus retainer fees regardless of outcome. Our milestone model totals roughly 50% less, with payment tied to defined progress rather than billed upfront.',
              },
              {
                badge: 'Bonus 02',
                title: '45-day replacement guarantee at no charge.',
                objection: "Common objection: \"What if the placement doesn't work out?\"",
                body: 'If the hire does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge. Our guarantee is longer than most contingency firms and is built into every engagement.',
              },
              {
                badge: 'Bonus 03',
                title: 'A curated shortlist. Not a resume stack.',
                objection: 'Common objection: "We have used recruiters before and wasted time on bad candidates."',
                body: 'You will not sort through 20 resumes hoping one sticks. Your dedicated search specialist builds a shortlist of 3–5 candidates who have been screened against your specific criteria. You only meet people who are genuinely qualified. The first interview is a real conversation, not a screening exercise.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week that role stays open is a decision you are making.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An empty C-suite seat rarely stays quiet. Organizations fill the gap with external consultants ($200–$400/hour), fractional executives, or board member time — all of which cost more than the role itself. Beyond the direct cost, strategic decisions get delayed, teams lose direction, and competitors gain ground. The longer the vacancy, the more expensive the outcome.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best candidates are only available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Senior executives are never on job boards. A CEO or VP who is open to a new opportunity is having private conversations, not submitting applications. Our sourcing approach is built around confidential outreach — proactively identifying and approaching passive candidates who would never surface through a posting.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No commitment. We will tell you exactly what we can do for your search and what it costs.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What roles do you place?</h3>
              <p>CEOs, Presidents, COOs, CFOs, CTOs, CMOs, CROs, VPs of Sales, Marketing, Operations, Finance, HR, General Counsel, and Director-level leadership across all business functions.</p>
            </div>
            <div className="faq-item">
              <h3>How is this different from a staffing agency?</h3>
              <p>We are not a staffing agency. This is direct permanent placement with milestone-based pricing. You hire the candidate directly. We are not placing temps or contractors.</p>
            </div>
            <div className="faq-item">
              <h3>How does milestone-based pricing work?</h3>
              <p>Payments are tied to defined milestones in the search process rather than a lump-sum contingency fee at the end. Total cost is roughly 50% less than a standard contingency arrangement. Exact structure is covered on your discovery call.</p>
            </div>
            <div className="faq-item">
              <h3>What does the 45-day guarantee cover?</h3>
              <p>If the placed candidate does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge.</p>
            </div>
            <div className="faq-item">
              <h3>How quickly can you start a search?</h3>
              <p>Typically within one week of your discovery call. We begin active sourcing immediately after alignment on the role profile and compensation range.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What roles do you place?', acceptedAnswer: { '@type': 'Answer', text: 'CEOs, Presidents, COOs, CFOs, CTOs, CMOs, CROs, VPs of Sales, Marketing, Operations, Finance, HR, General Counsel, and Director-level leadership across all business functions.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'How does milestone-based pricing work?', acceptedAnswer: { '@type': 'Answer', text: 'Payments tied to defined milestones. Total cost roughly 50% less than contingency.' } },
              { '@type': 'Question', name: 'What does the 45-day guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'If the hire does not work out within 45 days, we replace at no additional charge.' } },
            ],
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Job Placement', item: 'https://beghr.com/services/job-placement' },
              { '@type': 'ListItem', position: 3, name: 'Executive', item: 'https://beghr.com/services/job-placement/executive' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Hiring strategy',
            title: 'Contingency vs. Retained vs. Milestone: Which Legal Recruiting Model Is Right for Your Firm? (2026)',
            excerpt: 'Executive searches are almost always retained or milestone-based. Here is how the three fee models compare and what each one signals to candidates.',
            href: '/blog/compare/contingency-vs-retained-vs-milestone',
          },
          {
            category: 'Hiring strategy',
            title: "How Long Should an Attorney Search Take? (And What to Do If It's Been 60 Days)",
            excerpt: 'Senior-level searches take longer, but not forever. What a realistic executive placement timeline looks like and the signals that a search has stalled.',
            href: '/blog/compare/how-long-should-attorney-placement-take',
          },
          {
            category: 'Legal hiring',
            title: '2026 Attorney Market Trends: What Managing Partners Need to Know',
            excerpt: 'Passive candidates dominate the top of the talent pool. What firm leaders need to understand about the current placement market before launching a search.',
            href: '/blog/legal-hiring/attorney-market-trends',
          },
        ]}
      />
    </ServicePage>
  );
}
