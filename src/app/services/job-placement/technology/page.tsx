import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'IT & Technology Job Placement | Dev & Data Recruiting | BEG',
  description: 'Place software engineers, data scientists, and IT professionals before your roadmap slips. Milestone billing, 45-day guarantee. Book a discovery call.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/technology' },
  openGraph: { title: 'IT & Technology Job Placement | Dev & Data Recruiting | BEG', description: 'Place software engineers, data scientists, and IT professionals before your roadmap slips. Milestone billing, 45-day guarantee. Book a discovery call.', url: 'https://www.beghr.com/services/job-placement/technology', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'IT & Technology Job Placement | Dev & Data Recruiting | BEG', description: 'Place software engineers, data scientists, and IT professionals before your roadmap slips. Milestone billing, 45-day guarantee. Book a discovery call.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-technology');

export default function PlacementTechnologyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/technology.svg"
      imageAlt="Technology team with an open engineering or developer role"
      eyebrow="Job Placement · Technology"
      title="That open engineering seat is slipping your roadmap."
      description="Every sprint without full headcount is a product commitment you cannot keep. Features slip. Technical debt compounds. The team carries the load until someone leaves too. We place software engineers, data scientists, and IT professionals in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >

      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Technology roles stay open because the strongest candidates are employed, passive, and rarely on job boards.</li>
              <li>BEG sources them directly and fills permanent roles in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"Technology placement\",\"name\":\"Technology Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://www.beghr.com/services/job-placement/technology\",\"description\":\"Permanent technology placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$800-$1,500/day</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Value of one senior engineer's sprint output</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>One unfilled senior dev seat is not just a headcount gap - it is measurable product velocity you are not shipping.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>10 days</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average time before a tech candidate has multiple competing offers</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>In-demand engineers move fast. A 90-day process is not competing for the same candidates a 30-day process is.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>3x</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Harder to replace a senior engineer vs. hire for the role the first time</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Technical roles require deep screening. Volume-based recruiting firms flood you with unqualified applicants.</div>
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
              { num: '02', title: 'Active sourcing', body: 'We go direct to passive candidates - professionals who are not on job boards but are quietly open to the right opportunity. This is where most searches fail.' },
              { num: '03', title: 'Shortlist review', body: 'You receive 3-5 pre-screened candidates. No stacks of resumes. No wasted interviews. You meet candidates who have already been qualified against your specific criteria.' },
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
            <h2>Three things every organization wants - and most placement firms do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No contingency fees. Ever.',
                objection: 'Common objection: "We already work with contingency recruiters."',
                body: 'Contingency tech recruiters typically charge 20-25% of first-year salary. For a $180,000 engineer, that is $36,000-$45,000. Milestone-based pricing brings that cost down by roughly 50%, while aligning our incentives with your timeline.',
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
                body: 'You will not sort through 20 resumes hoping one sticks. Your dedicated search specialist builds a shortlist of 3-5 candidates who have been screened against your specific criteria. You only meet people who are genuinely qualified. The first interview is a real conversation, not a screening exercise.',
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

      {/* JOB DESCRIPTION GRADER */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>Hiring Technology? Grade your job description first.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>A weak posting quietly kills your pipeline. Paste your technology job description and get an instant 0 to 100 score, plus the exact fixes that get strong candidates to apply. Free, instant, and nothing you paste leaves your browser.</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week that role stays open is a decision you are making.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A senior engineer billing at $150,000-$200,000 per year represents $4,000-$7,500 per week in sprint capacity. A vacant seat for 12 weeks means roughly $48,000-$90,000 in unshipped product or absorbed overload - before you factor in the compounding effect on the rest of the team.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best candidates are only available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Software engineers and data scientists with in-demand skills receive multiple recruiter outreaches daily. When a strong candidate decides to make a move, they typically have an offer within two weeks. Passive candidates are the best candidates - and they are not responding to job board postings.</p>
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
              <p>Software engineers (frontend, backend, full-stack), mobile developers, data scientists, machine learning engineers, DevOps and platform engineers, engineering managers, CTOs, IT directors, and other technical leadership roles.</p>
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
              { '@type': 'Question', name: 'What roles do you place?', acceptedAnswer: { '@type': 'Answer', text: 'Software engineers (frontend, backend, full-stack), mobile developers, data scientists, machine learning engineers, DevOps and platform engineers, engineering managers, CTOs, IT directors, and other technical leadership roles.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'How does milestone-based pricing work?', acceptedAnswer: { '@type': 'Answer', text: 'Payments tied to defined milestones. Total cost roughly 50% less than contingency.' } },
              { '@type': 'Question', name: 'What does the 45-day guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'If the hire does not work out within 45 days, we replace at no additional charge.' } },
            ],
          }),
        }}
      />

    </ServicePage>
  );
}
