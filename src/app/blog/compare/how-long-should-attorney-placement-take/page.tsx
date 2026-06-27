import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Long Should an Attorney Search Take? (And What to Do If It\'s Been 60 Days)',
  description: 'The average contingency attorney search takes 60–120 days. The BEG placement model fills in 23–35 days with an 86% fill rate. Here\'s why the gap exists and what to do about it.',
  alternates: { canonical: 'https://beghr.com/blog/compare/how-long-should-attorney-placement-take' },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function HowLongAttorneyPlacementPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Legal Recruiting · Hiring</p>
              <h1>How Long Should an Attorney Search Take? (And What to Do If It's Been 60 Days)</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                If your attorney search has been open for 60 days or more, you're not unlucky. You're using a model that's structurally slow. Here's why — and what fills roles in 23–35 days instead.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Updated:</strong> June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>

        <p>
          The most common question managing partners ask after a search stretches past 60 days: "Is this normal?" The honest answer: it's common, but it's not inevitable. And the longer a role stays open, the more it costs.
        </p>
        <p>
          This page covers what a realistic attorney search timeline looks like, why searches drag, and what changes when you use a model built for speed.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Realistic Attorney Search Timelines by Model
        </h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Search Method</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Avg. Time to Fill</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Fill Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Internal job posting (your website + LinkedIn)', '90–180 days', '20–35%'],
                ['Job board (Indeed, Glassdoor)', '60–120 days', '25–45%'],
                ['Contingency recruiter (non-exclusive)', '60–120 days', '40–60%'],
                ['Retained search (exclusive)', '45–90 days', '70–85%'],
                ['BEG Placement (milestone-based)', '23–35 days', '86%'],
              ].map(([method, time, rate], i) => (
                <tr key={i} style={{
                  background: i === 4 ? '#000' : i % 2 === 0 ? '#f9f9f9' : '#fff',
                  borderBottom: '1px solid #e5e5e5',
                  color: i === 4 ? '#ECAC60' : 'inherit'
                }}>
                  <td style={{ padding: '12px 16px', fontWeight: i === 4 ? 700 : 600 }}>{method}</td>
                  <td style={{ padding: '12px 16px', fontWeight: i === 4 ? 700 : 400 }}>{time}</td>
                  <td style={{ padding: '12px 16px', fontWeight: i === 4 ? 700 : 400 }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why Attorney Searches Take So Long
        </h2>
        <p>
          There are three structural reasons attorney searches drag, and they compound each other:
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. The talent pool has shrunk significantly</h3>
        <p>
          Law school enrollment has declined approximately 30% since 2010. Fewer new attorneys are entering the market each year, which means the pool of available lateral candidates is smaller than it was a decade ago — and it's getting more competitive every year. Active job seekers make up a fraction of qualified attorneys; the best candidates are almost always passive.
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Passive candidates don't respond to job postings</h3>
        <p>
          An attorney who is happy in their current role — but might consider a move for the right opportunity — will never see your job posting. They're not on Indeed. They're not checking LinkedIn job boards. They're only reachable through direct, targeted outreach. Most job boards and non-dedicated contingency recruiters don't reach this population.
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Most law firm hiring processes are too slow</h3>
        <p>
          When a passive candidate does get interested, they typically have a short decision window. If the hiring process involves multiple rounds of interviews stretched over weeks, committee deliberations, and slow turnarounds on offers — the candidate has often accepted another opportunity by the time a decision is made.
        </p>
        <p>
          Speed in the process matters as much as speed in sourcing. The firms that close the best lateral candidates move decisively.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What a 30-Day, 60-Day, and 90-Day Open Role Costs Your Firm
        </h2>
        <p>
          Open attorney roles don't just delay capacity — they cost real money every day they stay open. Here's a quick way to think about it:
        </p>
        <p>
          A billing attorney generating $350,000 in annual revenue produces approximately $29,000 in revenue per month. A role open for 90 days before it's filled costs your firm roughly $87,000 in foregone billables — before accounting for the cost of the search itself.
        </p>
        <p>
          That's the cost of a slow search model. It's not visible in your accounts payable, but it's real.
        </p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>How long has your open role been open?</h3>
          <p style={{ marginBottom: '1.5rem' }}>If it's been more than 30 days, we should talk. BEG's placement model fills in 23–35 days on average. Here's how to get that started.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call →
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What Changes with BEG's Model
        </h2>
        <p>
          BEG's placement program through iSolved Job Placement Services is built around two things the traditional search model isn't: speed and passive candidate access.
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>23–35 day average fill time.</strong> Not because we cut corners — because the sourcing pipeline operates continuously, not reactively. We're reaching passive candidates before you have an opening, not after.</li>
          <li><strong>86% fill rate.</strong> Contingency search averages 40–60%. The gap comes from candidate quality and commitment — we only present candidates we're confident in.</li>
          <li><strong>Roughly 50% less than contingency fees.</strong> Not a bait-and-switch. The iSolved platform infrastructure reduces the sourcing overhead that traditional recruiters have to price in.</li>
          <li><strong>45-day replacement guarantee.</strong> If the placed attorney leaves within 45 days, we fill the role again at no additional fee.</li>
          <li><strong>No upfront payment.</strong> Milestone-based — you pay at placement, not before.</li>
        </ul>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What to Do If Your Search Has Been Open 60+ Days
        </h2>
        <p>
          If your current attorney search has been open for 60 days or more, here's the honest assessment: the model you're using isn't working for this role. That's not a judgment of the recruiter or your firm — it's a data point.
        </p>
        <p>
          At this point, you have a few options:
        </p>
        <ol style={{ marginLeft: '1.5rem', lineHeight: '2.2', marginBottom: '1rem' }}>
          <li>Wait longer with the same approach (and watch the role drag toward 120 days)</li>
          <li>Expand to additional contingency recruiters (adds noise without changing the model)</li>
          <li>Move to retained search (higher cost, upfront commitment, better dedicated effort)</li>
          <li>Move to a milestone-based model that accesses the passive candidate pool at lower cost and faster timelines</li>
        </ol>
        <p>
          Option 4 is what BEG offers. The 15-minute discovery call costs nothing. If we're not a fit for your situation, we'll tell you that directly.
        </p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Get your open role in front of passive candidates this week</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute discovery call. Tell us about the role, the timeline, and what you've tried. We'll tell you if BEG is the right fit — and what the process looks like if it is.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call →
          </a>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales — Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony works with law firm managing partners and hiring partners to find and place attorneys faster and at lower cost than traditional contingency search. BEG is an authorized reseller of iSolved Job Placement Services.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'How Long Should an Attorney Search Take? (And What to Do If It\'s Been 60 Days)',
        description: 'Attorney search timeline benchmarks by recruiting model — and what changes when you use a milestone-based placement approach with 23–35 day fill times.',
        datePublished: '2026-06-27', dateModified: '2026-06-27',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/blog/compare/how-long-should-attorney-placement-take',
      }) }} />
    </article>
  );
}
