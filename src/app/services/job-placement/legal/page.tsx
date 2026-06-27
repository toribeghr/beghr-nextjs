import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Legal Job Placement | Fill Attorney Roles in 23-35 Days | BEG',
  description: 'Law firm hiring specialist. Place attorneys, paralegals, and counsel at roughly 50% less than contingency firms. 45-day guarantee. Book a discovery call.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/legal',
  },
};

const CALENDLY = getCalendlyLink('placement-legal');

export default function PlacementLegalPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/legal.svg"
      imageAlt="Law firm with an open attorney role sitting unfilled"
      eyebrow="Job Placement · Legal"
      title="That attorney search has been open too long."
      description="Every week that role sits empty, your firm absorbs the cost. Lost billable hours. Overloaded associates. Work going to the wrong desk. We place attorneys and legal professionals in 23-35 days — at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '23-35', label: 'Days to fill on average' },
        { value: '86%', label: 'Fill rate on active searches' },
        { value: '~50%', label: 'Less than contingency pricing' },
      ]}
    >

      {/* PAIN — NEPQ problem amplification */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Real Cost of a Slow Search</p>
            <h2>What does that open role actually cost your firm?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                stat: '$8,000+',
                label: 'Per week in lost billable capacity',
                sub: 'One attorney billing 40 hours at $200/hr. Every week the seat is empty.',
              },
              {
                stat: '90+ days',
                label: 'Average search length at most firms',
                sub: 'Traditional job boards and contingency recruiters are slow by design. They benefit from the length.',
              },
              {
                stat: '30%',
                label: 'Decline in law school enrollment since 2010',
                sub: 'The talent pool is shrinking. The best candidates are passive — not on job boards. You have to go find them.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.05rem', color: '#444444', maxWidth: '620px', margin: '2rem auto 0' }}>
            Most firms tolerate a 60-90 day search without calculating what it actually costs. When you run the numbers, urgency becomes obvious.
          </p>
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
                body: 'We learn your firm, the role, and what a strong candidate actually looks like in your environment. 15 minutes. No fluff.',
              },
              {
                num: '02',
                title: 'Active sourcing',
                body: 'We go direct to passive candidates — attorneys who are not on job boards, not responding to LinkedIn InMails, but who are quietly open to the right opportunity. This is where most firm searches fail.',
              },
              {
                num: '03',
                title: 'Shortlist review',
                body: 'You receive 3-5 pre-screened candidates. No stacks of resumes. No wasted interviews. You meet candidates who have already been qualified against your specific criteria.',
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

      {/* THREE BONUSES — objection handling */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things every firm wants — and most placement firms do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No contingency fees. Ever.',
                objection: 'Common objection: "We already work with contingency recruiters."',
                body: 'Contingency firms charge 20-25% of first-year salary — typically $40,000-$60,000 per placement. We use milestone-based pricing. You pay for results at defined stages, not a lump sum at the end. The total cost is roughly 50% less. And because our incentives are aligned with your timeline, not with billing volume, we move faster.',
              },
              {
                badge: 'Bonus 02',
                title: '45-day replacement guarantee at no charge.',
                objection: 'Common objection: "What if the placement doesn\'t work out?"',
                body: 'If the hire does not work out within 45 days, we replace them at no additional cost. Contingency firms typically offer 30-day guarantees at best — and many charge again for replacements. Our guarantee is longer, cleaner, and built into every engagement. You are not starting over. You are using the guarantee.',
              },
              {
                badge: 'Bonus 03',
                title: 'A curated shortlist. Not a resume stack.',
                objection: 'Common objection: "We\'ve used recruiters before and wasted time on bad candidates."',
                body: 'You will not sort through 20 resumes hoping one sticks. Your dedicated legal search specialist builds a shortlist of 3-5 candidates who have been screened against your specific criteria — practice area, bar admission, culture fit, and compensation range. You only meet people who are genuinely qualified. The first interview is a real conversation, not a screening exercise.',
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

      {/* SCARCITY — cost of inaction + talent window */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Every week that role stays open is a decision you are making.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                One unfilled attorney seat billing 40 hours per week at $200 per hour is $8,000 in lost billable capacity — every week. At 12 weeks, that is $96,000 in absorbed cost, not counting the overload on your current team or the work that went unbilled.
              </p>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '0.75rem' }}>
                A 23-35 day search closes that gap. A 90-day search using traditional methods does not.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                The best candidates are only available for a few weeks.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Strong lateral attorneys are passive. They are not posting resumes or responding to LinkedIn InMails. When they decide they are open to a move, that window is typically 2-4 weeks before they accept an offer — usually from a firm that was already in front of them.
              </p>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '0.75rem' }}>
                A slow search process does not find the best candidates. It finds whoever is still available after the market has already moved.
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

      {/* FAQ with schema */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Legal placement questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What legal roles do you place?</h3>
              <p>Attorneys, associates, paralegals, legal counsel, legal operations managers, and other specialized legal roles across practice areas including litigation, corporate, real estate, employment, and family law.</p>
            </div>
            <div className="faq-item">
              <h3>How is this different from a staffing agency?</h3>
              <p>We are not a staffing agency. We do not place temporary or contract workers. This is direct placement — milestone-based, with you hiring the candidate directly. Clients pay iSolved directly at defined milestones, not us on commission. We are a placement service, not a temp shop.</p>
            </div>
            <div className="faq-item">
              <h3>What size firms do you work with?</h3>
              <p>Firms with 11 to 200 attorneys are our core market. Smaller than 11 attorneys is typically too lean to support the search process. Above 200 attorneys tends to have in-house recruiting infrastructure that operates differently. If your firm falls outside that range, ask us — there are exceptions.</p>
            </div>
            <div className="faq-item">
              <h3>How does milestone-based pricing work?</h3>
              <p>Instead of a lump-sum contingency fee at the end, payments are tied to defined milestones in the search process. This aligns our incentives with your timeline and reduces your upfront risk. Total cost is roughly 50% less than a standard contingency arrangement. Exact structure is covered on your discovery call.</p>
            </div>
            <div className="faq-item">
              <h3>What does the 45-day guarantee cover?</h3>
              <p>If the placed candidate does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge. The 50% repeat discount applies if the same role description needs to be filled again.</p>
            </div>
            <div className="faq-item">
              <h3>How do you find passive candidates that job boards miss?</h3>
              <p>Direct outreach through professional networks, bar association connections, and targeted sourcing campaigns reach attorneys who are not actively looking but are quietly open to the right opportunity. This is the core of how we fill roles 2-3x faster than job-board-dependent searches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What legal roles do you place?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Attorneys, associates, paralegals, legal counsel, legal operations managers, and other specialized legal roles across practice areas including litigation, corporate, real estate, employment, and family law.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is this different from a staffing agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We are not a staffing agency. This is direct placement with milestone-based pricing. Clients pay iSolved directly at defined milestones. We are a placement service, not a temp shop.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does milestone-based pricing work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Payments are tied to defined milestones in the search process rather than a lump-sum contingency fee. Total cost is roughly 50% less than a standard contingency arrangement.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does the 45-day guarantee cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If the placed candidate does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you find passive candidates that job boards miss?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Direct outreach through professional networks, bar association connections, and targeted sourcing campaigns reach attorneys who are not actively looking but are quietly open to the right opportunity.',
                },
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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Job Placement', item: 'https://beghr.com/services/job-placement' },
              { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://beghr.com/services/job-placement/legal' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Legal hiring',
            title: 'Law Firm Associate Hiring: Fill Roles in 23-35 Days (2026 Guide)',
            excerpt: 'The associate hiring market has tightened significantly. Here is the current timeline, what firms are doing differently, and how to compete for passive candidates.',
            href: '/blog/legal-hiring/associate-hiring',
          },
          {
            category: 'Legal hiring',
            title: '2026 Attorney Market Trends: What Managing Partners Need to Know',
            excerpt: 'Law school enrollment is down 30% since 2010. The best lateral candidates are passive. What the supply constraints mean for firm hiring strategies.',
            href: '/blog/legal-hiring/attorney-market-trends',
          },
          {
            category: 'Legal hiring',
            title: 'Law Firm Paralegal Hiring: Finding the Right Paralegals for Your Practice Area (2026)',
            excerpt: 'Paralegal skill sets vary sharply by practice area. How to define the role, where to find candidates, and what a 23-35 day fill actually looks like.',
            href: '/blog/legal-hiring/paralegal-recruiting',
          },
        ]}
      />
    </ServicePage>
  );
}
