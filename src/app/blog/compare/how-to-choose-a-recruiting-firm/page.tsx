import { Metadata } from 'next';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'How to Choose a Recruiting Firm | BEG',
  description: 'How to choose a recruiting firm: the questions to ask on fee model, speed, fill rate, and guarantees, plus a checklist to compare providers fairly.',
  alternates: { canonical: 'https://beghr.com/blog/compare/how-to-choose-a-recruiting-firm' },
  openGraph: {
    title: 'How to Choose a Recruiting Firm | BEG',
    description: 'How to choose a recruiting firm: the questions to ask on fee model, speed, fill rate, and guarantees, plus a checklist to compare providers fairly.',
    url: 'https://beghr.com/blog/compare/how-to-choose-a-recruiting-firm',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'How to Choose a Recruiting Firm | BEG', description: 'How to choose a recruiting firm: the questions to ask on fee model, speed, fill rate, and guarantees, plus a checklist to compare providers fairly.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('/blog/compare/how-to-choose-a-recruiting-firm');

export default function HowToChooseARecruitingFirmPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "How to Choose a Recruiting Firm | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/compare/how-to-choose-a-recruiting-firm"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Hiring &middot; Comparison</p>
              <h1>How to Choose a Recruiting Firm: A Practical Checklist</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Choosing a recruiting firm is mostly about asking the right questions before you sign. The fee headline rarely tells the full story. Here is what to ask about model, speed, fill rate, and guarantees so you can compare providers fairly.
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

        <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
          <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>BOTTOM LINE</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
            <li>Compare firms on five things: fee model, total cost, time to fill, fill rate, and replacement guarantee.</li>
            <li>Know the model: contingency is 20-25% on placement; retained bills a similar total up front; milestone bills against defined milestones.</li>
            <li>BEG runs the milestone model at roughly 50% less than contingency, with 23-35 day fills, an 86% fill rate, and a 45-day guarantee.</li>
          </ul>
        </aside>

        <p>
          Most hiring leaders pick a recruiting firm on reputation and a fee percentage, then learn the rest after the contract is signed. A better approach is to treat the selection like any vendor decision: a short list of questions, asked of every firm, scored the same way. This page gives you that checklist and explains why each item matters.
        </p>
        <p>
          When you reach the cost question, the <a href="/resources/recruiting-fee-calculator" style={{ color: '#000', fontWeight: 700, textDecoration: 'underline' }}>Recruiting Fee Calculator</a> lets you compare quotes against your actual salary.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          How Do You Choose the Right Recruiting Firm?
        </h2>
        <p>
          Choose by comparing firms on five concrete factors: the fee model, the total cost in dollars, the average time to fill, the historical fill rate, and the replacement guarantee. Reputation matters, but these five tell you what you will actually pay and get.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          The Five Questions to Ask Every Firm
        </h2>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>What is the fee model, and when do I pay?</strong> Contingency is 20-25% of salary paid once at placement. Retained bills a similar total up front, in stages, with the early portion at risk. Milestone-based bills against defined search milestones. The model shapes your risk as much as the percentage does.</li>
          <li><strong>What is the all-in cost on my salary?</strong> Convert the percentage to dollars and add any retainer. A 25% fee on a $150,000 role is $37,500.</li>
          <li><strong>What is your average time to fill?</strong> Slow searches cost real money in lost output. Ask for a number, not a range like &quot;it depends.&quot;</li>
          <li><strong>What is your fill rate?</strong> The share of engaged searches that result in a hire. A low fill rate means wasted weeks even with no fee owed.</li>
          <li><strong>What is the replacement guarantee?</strong> If the hire leaves early, will the firm refill at no charge, and for how long?</li>
        </ul>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', minWidth: '440px', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#ECAC60' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>What to Compare</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Contingency</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Retained</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700 }}>Milestone (BEG)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Typical fee', '20-25% of salary', 'Similar total, up front', 'Roughly 50% less'],
                ['When you pay', 'At placement', 'In stages, before hire', 'At milestones'],
                ['Risk if no hire', 'You owe nothing', 'You lose the retainer', 'You owe nothing'],
                ['Time to fill', '60-120+ days', 'Varies', '23-35 days'],
                ['Replacement', 'Varies, often limited', 'Per agreement', '45 days standard'],
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
          Match the Firm to the Role
        </h2>
        <p>
          The best firm for a confidential C-suite search is rarely the best firm for filling ten professional roles a year. For specialized, senior, or discreet searches, a retained boutique with deep niche relationships may be worth the premium. For the steady work of filling strong permanent roles well and fast, a milestone-based provider usually wins on cost and speed. There is no single best firm, only the best fit for the role in front of you.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Watch for the Red Flags
        </h2>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>No clear fill rate or time-to-fill number.</strong> If a firm cannot quantify its track record, you cannot compare it.</li>
          <li><strong>A weak or vague replacement guarantee.</strong> This shifts early-departure risk entirely onto you.</li>
          <li><strong>Only active candidates.</strong> Firms that source mainly from job boards miss the passive, currently-employed talent that often makes the best hires.</li>
          <li><strong>Pressure to sign exclusivity without a faster commitment.</strong> Exclusivity should come with accountability on speed.</li>
        </ul>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Want help running this checklist?</h3>
          <p style={{ marginBottom: '1.5rem' }}>Bring your open role and any quotes you have. We will walk the five questions with you and show you where milestone placement lands.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          How BEG Answers the Five Questions
        </h2>
        <p>
          For transparency, here is how BEG scores on its own checklist. BEG fills permanent roles through iSolved Job Placement Services on a milestone-based model: the fee runs roughly 50% less than standard contingency, billed against defined milestones with no retainer at risk. The program averages a 23-35 day fill time, an 86% fill rate, and a 45-day replacement guarantee, and it reaches passive candidates who never see a job posting. It covers specialized fields, from <a href="/services/job-placement/legal" style={{ color: '#000', fontWeight: 700, textDecoration: 'underline' }}>legal</a> to accounting, through focused permanent <a href="/services/job-placement" style={{ color: '#000', fontWeight: 700, textDecoration: 'underline' }}>job placement</a>. BEG is not a staffing agency and places permanent employees only.
        </p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Compare us against your checklist</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. Ask us the five questions, and we will give you straight numbers for your specific role.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call &rarr;
          </a>
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/resources/recruiting-fee-calculator" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Recruiting Fee Calculator &rarr;</a>
            <a href="/blog/compare/how-much-do-recruiters-charge" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>How Much Do Recruiters Charge? &rarr;</a>
            <a href="/blog/compare/alternatives-to-contingency-recruiting" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Alternatives to Contingency &rarr;</a>
            <a href="/services/job-placement/legal" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Legal Placement &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony helps hiring leaders evaluate recruiting firms and fill permanent roles faster and at lower cost than traditional contingency search. BEG is an authorized reseller of iSolved Job Placement Services.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'How to Choose a Recruiting Firm: A Practical Checklist',
        description: 'The five questions to ask every recruiting firm on fee model, cost, speed, fill rate, and guarantees, with a comparison table.',
        datePublished: '2026-06-28', dateModified: '2026-06-28',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/blog/compare/how-to-choose-a-recruiting-firm',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you choose the right recruiting firm?', acceptedAnswer: { '@type': 'Answer', text: 'Compare firms on five concrete factors: the fee model, the total cost in dollars, the average time to fill, the historical fill rate, and the replacement guarantee. Ask every firm the same questions and score them the same way, rather than choosing on reputation and a fee percentage alone.' } },
          { '@type': 'Question', name: 'What questions should I ask a recruiter before signing?', acceptedAnswer: { '@type': 'Answer', text: 'Ask what the fee model is and when you pay, what the all-in cost is on your salary, the average time to fill, the historical fill rate, and the replacement guarantee terms. Clear numbers on each let you compare providers fairly.' } },
          { '@type': 'Question', name: 'What are red flags when choosing a recruiting firm?', acceptedAnswer: { '@type': 'Answer', text: 'Watch for a firm that cannot give a clear fill rate or time-to-fill number, a vague replacement guarantee, sourcing that relies only on active job board candidates, and pressure to sign exclusivity without any commitment to speed.' } },
          { '@type': 'Question', name: 'How does BEG compare on these criteria?', acceptedAnswer: { '@type': 'Answer', text: 'BEG uses a milestone-based model at roughly 50 percent less than contingency, billed against defined milestones with no retainer at risk. It averages a 23 to 35 day fill time, an 86 percent fill rate, and a 45-day replacement guarantee, placing permanent employees only through iSolved Job Placement Services.' } },
        ]
      }) }} />
    </article>
  );
}
