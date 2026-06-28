import { Metadata } from 'next';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Direct Hire vs Contingency Recruiting | BEG',
  description: 'Direct hire vs contingency recruiting compared on cost, speed, and risk. See where milestone-based placement fits and fills roles in 23-35 days.',
  alternates: { canonical: 'https://beghr.com/blog/compare/direct-hire-vs-contingency' },
  openGraph: {
    title: 'Direct Hire vs Contingency Recruiting | BEG',
    description: 'Direct hire vs contingency recruiting compared on cost, speed, and risk. See where milestone-based placement fits and fills roles in 23-35 days.',
    url: 'https://beghr.com/blog/compare/direct-hire-vs-contingency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Direct Hire vs Contingency Recruiting | BEG', description: 'Direct hire vs contingency recruiting compared on cost, speed, and risk. See where milestone-based placement fits and fills roles in 23-35 days.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('/blog/compare/direct-hire-vs-contingency');

export default function DirectHireVsContingencyPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Direct Hire vs Contingency Recruiting | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/compare/direct-hire-vs-contingency"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Hiring &middot; Comparison</p>
              <h1>Direct Hire vs. Contingency Recruiting: What Is the Difference?</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                &quot;Direct hire&quot; and &quot;contingency&quot; get used as if they are opposites. They are not. One describes the type of role you are filling. The other describes how you pay to fill it. Confusing the two is how firms end up overpaying for a search that is still open at day 90.
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
          When a role has been open for a month, the question on the table is rarely &quot;direct hire or contingency.&quot; It is &quot;why is this taking so long, and what is it costing us.&quot; But understanding the terms matters, because the wrong pairing of role type and payment model is one of the most common reasons a search stalls.
        </p>
        <p>
          This page explains what each term actually means, how they relate, what contingency really costs, and where a milestone-based placement model fits.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Direct Hire Describes the Role, Not the Fee
        </h2>
        <p>
          A direct hire is a permanent, full-time employee placed directly on your payroll. From day one the person works for you, not for a staffing agency, and there is no temp-to-perm conversion or co-employment arrangement in between. Direct hire is the opposite of temp staffing or contract placement, not the opposite of contingency.
        </p>
        <p>
          BEG operates exclusively in the direct hire world. Every placement is a permanent employee on the client&apos;s payroll. BEG is not a staffing agency and does not place contract or temporary workers. The model is milestone-based permanent placement, delivered as an authorized reseller of iSolved Job Placement Services.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Contingency Describes How You Pay
        </h2>
        <p>
          Contingency is a payment model. You engage a recruiter to find a candidate for a permanent direct hire role, and you pay a fee only if you hire someone they present. No placement, no fee. Because most direct hire searches are run on contingency, the two terms get blurred together. But you can fill a direct hire role through contingency, through retained search, or through a milestone-based model. The role is the same. Only the economics change.
        </p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Factor</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Contingency</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Milestone-Based (BEG)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Role type', 'Permanent direct hire', 'Permanent direct hire'],
                ['When you pay', 'Once, at the start date', 'At defined milestones'],
                ['Typical fee', '20-25% of first-year salary', 'Roughly 50% less than contingency'],
                ['Upfront cost', 'None', 'None'],
                ['Average time to fill', '60-120+ days', '23-35 days'],
                ['Fill rate', '40-60%', '86%'],
                ['Candidate pool', 'Mostly active job seekers', 'Passive candidates included'],
                ['Replacement guarantee', 'Varies, often limited', '45 days standard'],
              ].map(([factor, cont, mile], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '11px 14px', fontWeight: 600 }}>{factor}</td>
                  <td style={{ padding: '11px 14px' }}>{cont}</td>
                  <td style={{ padding: '11px 14px', color: '#2a7a2a', fontWeight: 600 }}>{mile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What Contingency Actually Costs
        </h2>
        <p>
          Contingency recruiting fees typically run 20-25% of the placed candidate&apos;s first-year salary, paid in full when the candidate starts. On a $150,000 hire, that is $30,000 to $37,500. On a $250,000 hire, it is $50,000 to $62,500. You pay nothing if no one is placed, which is the model&apos;s genuine strength. But the fee buys you a non-exclusive effort.
        </p>
        <p>
          That structure has real consequences. Because the recruiter is only paid on a successful placement and your search is usually non-exclusive, your role competes for attention against every other client they are working. Harder or lower-fee roles get deprioritized. And because the fastest path to a fee is presenting candidates who are already on the market, contingency searches skew toward active job seekers rather than the passive, currently-employed candidates who tend to be the strongest hires.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          The Slow-Search Problem
        </h2>
        <p>
          The talent supply context makes the speed gap worse. In legal, for example, law school enrollment is down roughly 30% since 2010, so the pool of mid-career candidates is structurally smaller and more of the best people are passive. They are employed, not on job boards, and they move quickly once they decide to consider a change. A hiring process that takes weeks to schedule interviews and approve an offer loses them to a faster firm.
        </p>
        <p>
          This is the central failure mode of a slow contingency search. It is not that the recruiter cannot find anyone. It is that the model reaches the wrong half of the market and moves too slowly to close the right candidate when it does appear.
        </p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>How long has your direct hire role been open?</h3>
          <p style={{ marginBottom: '1.5rem' }}>If it has been more than 30 days, the contingency model may be the bottleneck. We will show you what the BEG milestone model looks like for your specific role.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          How Milestone-Based Placement Fits
        </h2>
        <p>
          A milestone-based model keeps the part of contingency that firms like (no upfront retainer) and fixes the part that hurts (slow, non-dedicated, active-only sourcing). BEG fills permanent direct hire roles this way through iSolved Job Placement Services:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>No upfront payment.</strong> Fees are tied to milestones, typically at candidate presentation and at start date.</li>
          <li><strong>Roughly 50% less than standard contingency.</strong> The iSolved platform reduces the manual sourcing overhead traditional recruiters price into their fee.</li>
          <li><strong>Passive candidate access.</strong> The pipeline reaches currently-employed candidates who never see a job posting, not just people already searching.</li>
          <li><strong>23-35 day average fill time, 86% fill rate.</strong> A continuous sourcing pipeline rather than a reactive one.</li>
          <li><strong>45-day replacement guarantee.</strong> If the placed employee leaves within 45 days, BEG fills the role again at no additional fee.</li>
        </ul>
        <p>
          If you are filling a permanent role and your current contingency search has passed 30 days, the role type is not the problem. The payment and sourcing model is. That is the part worth changing.
        </p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>See what milestone placement looks like for your open role</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. Tell us the role, the timeline, and what you have tried. We will give you a straight answer on whether the milestone model fits.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call &rarr;
          </a>
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/blog/compare/how-much-do-recruiters-charge" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>How Much Do Recruiters Charge? &rarr;</a>
            <a href="/blog/compare/contingency-vs-retained-vs-milestone" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Contingency vs. Retained vs. Milestone &rarr;</a>
            <a href="/services/job-placement/legal" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Legal Placement &rarr;</a>
            <a href="/services/job-placement/accounting-cpa" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Accounting Placement &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony helps hiring leaders evaluate recruiting models and fill permanent roles faster and at lower cost than traditional contingency search. BEG is an authorized reseller of iSolved Job Placement Services.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Direct Hire vs. Contingency Recruiting: What Is the Difference?',
        description: 'Direct hire describes the role; contingency describes the fee. A breakdown of cost, speed, and risk, and where milestone-based placement fits.',
        datePublished: '2026-06-28', dateModified: '2026-06-28',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/blog/compare/direct-hire-vs-contingency',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is direct hire the same as contingency recruiting?', acceptedAnswer: { '@type': 'Answer', text: 'No. Direct hire describes the type of placement: a permanent, full-time employee placed directly on your payroll. Contingency describes how you pay the recruiter: a fee only if a candidate is placed. You can fill a direct hire role through contingency, retained search, or a milestone-based model.' } },
          { '@type': 'Question', name: 'How much does contingency recruiting cost?', acceptedAnswer: { '@type': 'Answer', text: 'Contingency fees typically run 20 to 25 percent of the placed candidate first-year salary, paid in full at the start date. On a $150,000 hire that is $30,000 to $37,500. BEG milestone-based placement runs roughly 50 percent less than standard contingency.' } },
          { '@type': 'Question', name: 'Is BEG a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG places permanent, direct hire employees only. It is not a staffing agency and does not place temporary or contract workers. BEG uses a milestone-based permanent placement model as an authorized reseller of iSolved Job Placement Services.' } },
          { '@type': 'Question', name: 'Why is my contingency search taking so long?', acceptedAnswer: { '@type': 'Answer', text: 'Contingency searches are usually non-exclusive, so your role competes for the recruiter attention. The model also skews toward active job seekers rather than the passive candidates who tend to be stronger hires. A milestone-based model with passive candidate access typically fills in 23 to 35 days.' } },
        ]
      }) }} />
    </article>
  );
}
