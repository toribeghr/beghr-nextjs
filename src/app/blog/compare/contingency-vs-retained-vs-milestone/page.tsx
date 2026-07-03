import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contingency vs Retained vs Milestone | 50% Less Cost. | BEG',
  description: 'Three ways to hire attorneys: contingency search, retained search, or milestone-based placement. Breakdown of cost, timeline, and fill rate by method.',
  alternates: { canonical: 'https://www.beghr.com/blog/compare/contingency-vs-retained-vs-milestone' },
  openGraph: {
    title: 'Contingency vs Retained vs Milestone | 50% Less Cost. | BEG',
    description: 'Three ways to hire attorneys: contingency search, retained search, or milestone-based placement. Full comparison of cost, risk, and what each delivers f...',
    url: 'https://www.beghr.com/blog/compare/contingency-vs-retained-vs-milestone',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Contingency vs Retained vs Milestone | 50% Less Cost. | BEG', description: 'Three ways to hire attorneys: contingency search, retained search, or milestone-based placement. Full comparison of cost, risk, and what each delivers f...', images: ['https://www.beghr.com/assets/og-image.png'] },

};


export default function ContingencyVsRetainedVsMilestonePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Contingency vs Retained vs Milestone | 50% Less Cost. | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/compare/contingency-vs-retained-vs-milestone"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Legal Recruiting · Comparison</p>
              <h1>Contingency vs. Retained vs. Milestone: Which Legal Recruiting Model Is Right for Your Firm?</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Most law firms know contingency. Fewer understand retained search. Almost none have heard of milestone-based placement -- which happens to be the model that changes the cost equation entirely.
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
          When a law firm needs to hire an attorney, most managing partners reach for the same tool they've always used: call a recruiter, see who they surface, pay if someone starts. That's contingency. It works -- until it doesn't, and when it doesn't, it's expensive.
        </p>
        <p>
          This page breaks down how all three legal recruiting models work, what each one actually costs, and when each makes sense for a firm.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          The Three Models at a Glance
        </h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Factor</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Contingency</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Retained Search</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Milestone-Based (BEG)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['When you pay', 'Only when candidate starts', 'Upfront + stages', 'Only at placement milestones'],
                ['Typical fee', '20–35% of first-year comp', '25–35% + upfront retainer', 'Roughly 50% less than contingency'],
                ['Exclusivity', 'Non-exclusive', 'Exclusive to recruiter', 'Non-exclusive'],
                ['Search quality', 'Variable -- active candidates', 'Dedicated, passive network', 'Passive candidate pipeline'],
                ['Average time to fill', '60–120+ days', '45–90 days', '23–35 days'],
                ['Fill rate', '40–60%', '70–85%', '86%'],
                ['Risk if no placement', 'You owe nothing', 'You lose retainer', 'You owe nothing'],
                ['Replacement guarantee', 'Varies, often limited', 'Often 90 days', '45 days standard'],
                ['Who pays the firm', 'Your firm pays recruiter', 'Your firm pays recruiter', 'Firm pays iSolved directly'],
                ['Best for', 'Low-urgency, standard hires', 'Senior partner / rainmaker search', 'Active open roles, time-sensitive'],
              ].map(([factor, cont, ret, mile], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '11px 14px', fontWeight: 600 }}>{factor}</td>
                  <td style={{ padding: '11px 14px' }}>{cont}</td>
                  <td style={{ padding: '11px 14px' }}>{ret}</td>
                  <td style={{ padding: '11px 14px', color: '#2a7a2a', fontWeight: 600 }}>{mile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          How Contingency Search Actually Works
        </h2>
        <p>
          Contingency is the dominant model in legal recruiting. You engage a recruiter (or multiple recruiters), they surface candidates, and you pay only if you hire someone they presented. No placement, no fee.
        </p>
        <p>
          The upside is obvious: no upfront cost and no risk if no placement happens. The downsides are less obvious but more consequential:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Recruiters prioritize their highest-fee opportunities.</strong> If you're running a non-exclusive contingency search, your opening is competing for recruiter attention against every other client they have. Roles that are difficult to fill or lower-fee get deprioritized.</li>
          <li><strong>Candidates presented are often already shopping.</strong> Active candidates -- the ones willing to apply through multiple recruiters -- are a fraction of the available market. The best lateral hires are passive candidates who aren't actively looking.</li>
          <li><strong>Fees are high relative to the service level.</strong> A 25–30% contingency fee on a $200,000 associate hire is $50,000–$60,000. For a search with no exclusivity, no dedicated effort, and a 50/50 chance of filling the role.</li>
          <li><strong>Searches drag on.</strong> Average time to fill for contingency legal searches runs 60–120+ days, partly because the recruiter isn't exclusively focused on your role.</li>
        </ul>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          How Retained Search Works
        </h2>
        <p>
          In a retained search, the firm pays a portion of the estimated fee upfront (typically one-third), another portion at the presentation of a finalist slate, and the remainder at hire. In exchange, the search firm works exclusively on your assignment.
        </p>
        <p>
          Retained search makes sense when:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li>You're hiring a senior partner, practice group leader, or rainmaker where the stakes are high and the talent pool is narrow</li>
          <li>The role requires significant market mapping and direct sourcing from competitors</li>
          <li>You need the search firm to represent you confidentially in the market</li>
        </ul>
        <p>
          The fee is higher (25–35% of total first-year compensation, plus the upfront retainer), and you lose the retainer if the search doesn't result in a hire. For standard associate and lateral attorney hires, retained search is typically overkill.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          How Milestone-Based Placement Works (BEG's Model)
        </h2>
        <p>
          Milestone-based placement is the model BEG uses through iSolved Job Placement Services. It combines the best elements of contingency (no fee unless you hire) with a dedicated search capability and significantly faster timelines.
        </p>
        <p>
          Here's how it works:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>You pay nothing upfront.</strong> No retainer. No commitment fees.</li>
          <li><strong>Payments are tied to milestones</strong> -- typically at candidate presentation and at start date.</li>
          <li><strong>Fees are roughly 50% less than standard contingency.</strong> This is possible because of the iSolved platform infrastructure, which reduces the manual sourcing overhead traditional recruiters face.</li>
          <li><strong>The candidate pool is passive, not just active.</strong> BEG's pipeline sources candidates who aren't actively on job boards -- the same pool retained firms access, at a fraction of the cost.</li>
          <li><strong>45-day replacement guarantee</strong> -- if the placed attorney leaves within 45 days, BEG fills the role again at no additional fee. 50% discount on repeat hires for the same role description.</li>
          <li><strong>Payment goes to iSolved directly</strong> -- BEG is the authorized reseller; your firm's payment relationship is with iSolved.</li>
        </ul>
        <p>
          The average fill time in BEG's placement program is 23–35 days, with an 86% fill rate across completed searches.
        </p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>How long has your current attorney search been open?</h3>
          <p style={{ marginBottom: '1.5rem' }}>If it's been more than 30 days, we should talk. We'll show you what the BEG placement model looks like for your specific role -- cost, timeline, and what the process involves.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Which Model Is Right for Your Firm?
        </h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Your situation</th>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Best model</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Associate or lateral attorney role open 30+ days', 'Milestone-based (BEG)'],
                ['Senior partner or practice group leader hire', 'Retained search'],
                ['No urgency, low-priority role with flexible timeline', 'Contingency'],
                ['Multiple open attorney roles', 'Milestone-based (cost advantage compounds)'],
                ['Budget-sensitive firm wanting to reduce recruiting spend', 'Milestone-based (roughly 50% less than contingency)'],
                ['Confidential search in a competitive market', 'Retained search'],
              ].map(([situation, model], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '12px 16px' }}>{situation}</td>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: model.includes('BEG') ? '#2a7a2a' : 'inherit' }}>{model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Find out if BEG placement is right for your open role</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. We'll ask about your role, timeline, and what you've tried -- and give you a straight answer on whether the milestone model fits.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales -- Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony works with law firm managing partners and hiring partners to evaluate attorney recruiting models and find placements that close faster at significantly lower cost than traditional contingency search.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Contingency vs. Retained vs. Milestone: Which Legal Recruiting Model Is Right for Your Firm?',
        description: 'Full comparison of contingency, retained, and milestone-based legal recruiting for law firms -- cost, fill rates, timelines, and when each model makes sense.',
        datePublished: '2026-06-27', dateModified: '2026-06-27',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/blog/compare/contingency-vs-retained-vs-milestone',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: "What is the difference between contingency and retained attorney search?", acceptedAnswer: { '@type': 'Answer', text: "Contingency search means the firm only pays if a candidate is placed. Retained search requires an upfront fee before the search begins, often 30 to 33 percent of first-year compensation. Milestone-based is a hybrid: fees are split across defined stages such as engagement, shortlist, and placement. BEG uses a milestone model through iSolved Job Placement Services." } },
          { '@type': 'Question', name: "Which attorney search model is fastest?", acceptedAnswer: { '@type': 'Answer', text: "Milestone-based search, like the model BEG uses, typically produces placements in 23 to 35 days because the recruiter is engaged and incentivized from day one. Pure contingency searches can drag on because the recruiter may prioritize retained clients instead." } },
          { '@type': 'Question', name: "What is the typical contingency fee for attorney placement?", acceptedAnswer: { '@type': 'Answer', text: "Contingency fees for attorney placement typically run 25 to 35 percent of the placed candidate's first-year compensation. For a $120,000 associate, that is $30,000 to $42,000. BEG's milestone model runs roughly 50 percent less than that range." } },
          { '@type': 'Question', name: "Is retained search worth it for law firms?", acceptedAnswer: { '@type': 'Answer', text: "Retained search makes sense for highly specialized or partner-level roles where market visibility matters and the search requires significant research investment. For associate and mid-level attorney roles, a milestone-based model delivers the same quality at substantially lower cost and typically faster." } },
        ]
      }) }} />
      <section className="container" style={{ maxWidth: '840px', padding: '0 0 2rem' }}>
        <p style={{ fontSize: '0.95rem', color: '#333' }}>See how we fill roles fast: <a href="/services/job-placement" style={{ color: '#000', fontWeight: 600 }}>BEG Job Placement</a>.</p>
      </section>
          <RelatedPosts posts={[
        { category: "Compare", title: "Alternatives to Contingency Recruiting", excerpt: "Tired of contingency fees? Compare retained search, RPO, in-house, and milestone-based placement on...", href: "/blog/compare/alternatives-to-contingency-recruiting" },
        { category: "Compare", title: "BEG vs Insight Global | Instant Fee Quote", excerpt: "BEG vs Insight Global on permanent direct hire: fee model, cost, and speed compared fairly. See...", href: "/blog/compare/beg-vs-insight-global" },
        { category: "Compare", title: "BEG vs Kforce | Instant Fee Quote", excerpt: "BEG vs Kforce on permanent direct hire: fee model, cost, and speed compared fairly. See where...", href: "/blog/compare/beg-vs-kforce" },
      ]} />
      </article>
  );
}
