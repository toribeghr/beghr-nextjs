import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Job Placement Services | Fill Roles in 23-35 Days | BEG',
  description: 'Fill specialized roles 2-3x faster than contingency recruiters. Milestone billing, 45-day replacement guarantee. Legal, clinical, tech, finance, and more.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement',
  },
};

const CALENDLY = getCalendlyLink('job-placement');

export default function JobPlacementPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/job-placement.svg"
      eyebrow="Job Placement Services"
      title="That role has been open too long. Let us fix that."
      description="Every week a specialized seat sits empty, your team absorbs the cost. Lost output, overloaded colleagues, work going to the wrong desk. We place attorneys, clinicians, engineers, and finance professionals in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '23-35', label: 'Days to fill on average' },
        { value: '86%', label: 'Fill rate on active searches' },
        { value: '~50%', label: 'Less than contingency pricing' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Real Cost of a Slow Search</p>
            <h2>What does that open role actually cost your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                stat: '$8,000+',
                label: 'Per week in lost output per unfilled senior role',
                sub: 'One senior professional producing 40 hours a week. That capacity is gone every week the seat stays empty.',
              },
              {
                stat: '90+ days',
                label: 'Average search length using traditional job boards',
                sub: 'Contingency recruiters and job boards are slow by design. Posting and waiting means competing for whoever is left after the market has already moved.',
              },
              {
                stat: '2-4 weeks',
                label: 'Window before top passive candidates accept another offer',
                sub: 'The best candidates are not on job boards. When they open up to a move, that window closes fast. A slow search misses them every time.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
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
              {
                num: '01',
                title: 'Discovery call',
                body: 'We learn your organization, the role, and what a strong candidate actually looks like in your environment. 15 minutes. No fluff.',
              },
              {
                num: '02',
                title: 'Active sourcing',
                body: 'We go direct to passive candidates who are not on job boards but are quietly open to the right opportunity. This is where most searches fail.',
              },
              {
                num: '03',
                title: 'Shortlist review',
                body: 'You receive 3-5 pre-screened candidates. No stacks of resumes. No wasted interviews. You meet people who have already been qualified against your specific criteria.',
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

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things every organization wants and most placement firms do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No contingency fees. Ever.',
                objection: 'Common objection: "We already work with contingency recruiters."',
                body: 'Contingency firms charge 20-25% of first-year salary, typically $40,000-$60,000 per placement. We use milestone-based pricing. You pay for results at defined stages, not a lump sum at the end. The total cost is roughly 50% less. Our incentives are aligned with your timeline, so we move faster.',
              },
              {
                badge: 'Bonus 02',
                title: '45-day replacement guarantee at no charge.',
                objection: 'Common objection: "What if the placement does not work out?"',
                body: 'If the hire does not work out within 45 days, we replace them at no additional cost. Contingency firms typically offer 30-day guarantees at best, and many charge again for replacements. Our guarantee is longer, cleaner, and built into every engagement.',
              },
              {
                badge: 'Bonus 03',
                title: 'A curated shortlist. Not a resume stack.',
                objection: 'Common objection: "We have used recruiters before and wasted time on bad candidates."',
                body: 'You will not sort through 20 resumes hoping one sticks. Your dedicated search specialist builds a shortlist of 3-5 candidates screened against your specific criteria. You only meet people who are genuinely qualified. The first interview is a real conversation, not a screening exercise.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Every week that role stays open is a decision you are making.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                One unfilled senior seat losing 40 hours of output per week. At $200 per hour, that is $8,000 in absorbed cost every week. At 12 weeks, that is $96,000 before the search even closes. A 23-35 day search closes that gap. A 90-day process built on job boards does not.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                The best candidates are only available for a few weeks.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Strong passive candidates are not on job boards. When they decide they are open to a move, that window is 2-4 weeks before they accept another offer, usually from whoever was already in front of them. A slow search does not find the best people. It finds whoever is still available after the market has moved.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
              style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            >
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              No commitment. We will tell you exactly what we can do for your search and what it costs.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Industries We Place For</p>
            <h2>Specialized recruiting, tuned to your field</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              Every industry hires differently. Pick yours to see how we fill your hardest roles.
            </p>
          </div>
          <div className="cards">
            <Link href="/services/job-placement/legal" className="card-link reveal">
              <span className="tag">Legal</span>
              <h3>Legal &amp; Attorney</h3>
              <p>Fill open attorney, paralegal, and counsel seats without the contingency-fee gamble.</p>
            </Link>
            <Link href="/services/job-placement/healthcare" className="card-link reveal">
              <span className="tag">Healthcare</span>
              <h3>Healthcare &amp; Nursing</h3>
              <p>Clinical and nursing talent placed before burnout sets in.</p>
            </Link>
            <Link href="/services/job-placement/finance" className="card-link reveal">
              <span className="tag">Finance</span>
              <h3>Finance &amp; Accounting</h3>
              <p>Controllers, accountants, and analysts including CPA-credentialed roles.</p>
            </Link>
            <Link href="/services/job-placement/technology" className="card-link reveal">
              <span className="tag">Technology</span>
              <h3>IT &amp; Technology</h3>
              <p>Software, data, and IT roles filled before your roadmap slips.</p>
            </Link>
            <Link href="/services/job-placement/engineering" className="card-link reveal">
              <span className="tag">Engineering</span>
              <h3>Engineering</h3>
              <p>Qualified engineers sourced so your projects keep moving.</p>
            </Link>
            <Link href="/services/job-placement/trades" className="card-link reveal">
              <span className="tag">Trades</span>
              <h3>Skilled Trades &amp; Manufacturing</h3>
              <p>Production and skilled-trade talent to keep your line running.</p>
            </Link>
            <Link href="/services/job-placement/executive" className="card-link reveal">
              <span className="tag">Executive</span>
              <h3>Executive &amp; Director+</h3>
              <p>Focused, confidential search for director and above leadership.</p>
            </Link>
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
              <h3>What kinds of roles do you place?</h3>
              <p>Specialized, hard-to-fill roles across legal, healthcare, finance and accounting, technology, engineering, skilled trades and manufacturing, and executive search.</p>
            </div>
            <div className="faq-item">
              <h3>How is this different from a staffing agency?</h3>
              <p>We are not a staffing agency. This is direct permanent placement with milestone-based pricing. You hire the candidate directly. We place, not staff.</p>
            </div>
            <div className="faq-item">
              <h3>How fast can you fill a role?</h3>
              <p>23-35 days on average, 2-3x faster than the industry standard. On your discovery call we give you a realistic timeline for your specific role and vertical.</p>
            </div>
            <div className="faq-item">
              <h3>How is pricing structured?</h3>
              <p>Milestone-based and tied to real progress, at roughly 50% less than contingency arrangements. Exact structure is covered on your discovery call.</p>
            </div>
            <div className="faq-item">
              <h3>What if the hire does not work out?</h3>
              <p>Every placement carries a 45-day replacement guarantee at no additional charge.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Legal hiring',
            title: 'Why Law Firms Struggle to Fill Attorney Roles in 30 Days',
            excerpt: 'Law school enrollment is down 30% since 2010. Here is what that means for your open roles and why passive candidates are the answer.',
            href: '/blog/legal-hiring/attorney-market-trends',
          },
          {
            category: 'Legal hiring',
            title: 'Associate Attorney Hiring: What Law Firms Get Wrong',
            excerpt: 'Most firms rely on job boards to find associate talent. The best candidates are not on job boards — here is where they are.',
            href: '/blog/legal-hiring/associate-hiring',
          },
          {
            category: 'Legal hiring',
            title: 'How Solo Firms and Small Practices Can Compete for Top Legal Talent',
            excerpt: 'Small firms punch above their weight when they move fast. A playbook for growing practices that cannot afford a long search.',
            href: '/blog/legal-hiring/solo-firm-growth',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How is this different from a staffing agency?',
                acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' },
              },
              {
                '@type': 'Question',
                name: 'How fast can you fill a role?',
                acceptedAnswer: { '@type': 'Answer', text: '23-35 days on average, 2-3x faster than the industry standard.' },
              },
              {
                '@type': 'Question',
                name: 'How is pricing structured?',
                acceptedAnswer: { '@type': 'Answer', text: 'Milestone-based at roughly 50% less than contingency arrangements.' },
              },
              {
                '@type': 'Question',
                name: 'What if the hire does not work out?',
                acceptedAnswer: { '@type': 'Answer', text: 'Every placement carries a 45-day replacement guarantee at no additional charge.' },
              },
            ],
          }),
        }}
      />

    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Job Placement Services',
            description: 'Specialized job placement in 23-35 days at roughly 50% less than contingency firms. 86% fill rate. 45-day replacement guarantee.',
            url: 'https://beghr.com/services/job-placement',
            provider: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              url: 'https://beghr.com',
            },
            areaServed: 'United States',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
            },
          }),
        }}
      />
    </ServicePage>
  );
}
