import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import JobPlacementHubLinks from '@/components/JobPlacementHubLinks';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Veterinary Placement & Recruiting | Instant Fee Quote | BEG',
  description: 'Fill associate vet, practice manager, and specialist roles in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/veterinary' },
  openGraph: { title: 'Veterinary Placement & Recruiting | Instant Fee Quote | BEG', description: 'Fill associate vet, practice manager, and specialist roles in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day guarantee.', url: 'https://www.beghr.com/services/job-placement/veterinary', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Veterinary Placement & Recruiting | Instant Fee Quote | BEG', description: 'Fill associate vet, practice manager, and specialist roles in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day guarantee.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-veterinary');

export default function PlacementVeterinaryPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/job-placement.webp"
      imageAlt="Veterinary team with an open DVM or practice management position"
      eyebrow="Job Placement · Veterinary"
      title="One open DVM seat caps every appointment you can book."
      description="The national veterinarian shortage means the DVMs and practice leaders you need are employed, exhausted, and fielding offers weekly. We place associate veterinarians, practice managers, and veterinary specialists in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="veterinary" />}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >

      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Veterinary roles stay open because the strongest candidates are employed, passive, and rarely on job boards.</li>
              <li>BEG sources them directly and fills permanent roles in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"Veterinary placement\",\"name\":\"Veterinary Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://www.beghr.com/services/job-placement/veterinary\",\"description\":\"Permanent veterinary placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>15,000+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Projected veterinarian shortfall this decade</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Demand for pet care has outrun the supply of DVMs. The strongest veterinarians are passive, and reaching them takes proactive sourcing.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$10,000+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Per month absorbed per unfilled DVM seat</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>An associate veterinarian near $120K runs about $10,000 a month, and that ignores the appointments turned away because the schedule is full.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>2-3 weeks</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Window before a strong candidate accepts another offer</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Licensed DVMs receive offers constantly. A slow hiring process loses them to a competing practice or corporate group.</div>
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
                body: 'Milestone-based pricing replaces the standard 20-25% contingency fee. Total cost is roughly 50% less. For a $120,000 associate veterinarian placement, that difference is $12,000-$18,000 kept in your budget versus a contingency arrangement.',
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

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week that role stays open is a decision you are making.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>A vacant DVM seat does not just shorten the schedule. It caps appointment volume, lengthens client wait times, and burns out the doctors covering the gap. An associate veterinarian seat open for 90 days can cost a practice turned-away clients, staff turnover, and roughly $30,000 in absorbed overhead and lost production before the search ends.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best candidates are only available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>The best veterinarians and practice leaders are employed, fully booked, and contacted by recruiters constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="job-placement" subline={false} />
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
              <p>Associate veterinarians, practice managers, veterinary specialists, hospital directors, lead technicians, and other clinical and management roles across general, specialty, and emergency practice.</p>
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
              { '@type': 'Question', name: 'What roles do you place?', acceptedAnswer: { '@type': 'Answer', text: 'Associate veterinarians, practice managers, veterinary specialists, hospital directors, lead technicians, and other clinical and management roles across general, specialty, and emergency practice.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct hire permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'How does milestone-based pricing work?', acceptedAnswer: { '@type': 'Answer', text: 'Payments tied to defined milestones. Total cost roughly 50% less than contingency.' } },
              { '@type': 'Question', name: 'What does the 45-day guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'If the hire does not work out within 45 days, we replace at no additional charge.' } },
            ],
          }),
        }}
      />

    <JobPlacementHubLinks industry="veterinary" />

    </ServicePage>
  );
}
