import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-House Counsel Hiring | When to Hire a GC | BEG',
  description: 'When to hire in-house counsel vs. stick with outside firms. General Counsel hiring process, compensation, and search timeline for growing companies.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring/in-house-counsel' },
  openGraph: {
    title: 'In-House Counsel Hiring | When to Hire a GC | BEG',
    description: 'When to hire in-house counsel vs. stick with outside firms. General Counsel hiring process, compensation, and search timeline for growing companies.',
    url: 'https://beghr.com/blog/legal-hiring/in-house-counsel',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'In-House Counsel Hiring | When to Hire a GC | BEG', description: 'When to hire in-house counsel vs. stick with outside firms. General Counsel hiring process, compensation, and search timeline for growing companies.', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    question: 'At what point should a company hire in-house counsel instead of using outside firms?',
    answer: 'The clearest trigger is annual outside legal spend. When you are spending $300,000 or more per year on outside counsel, the economics strongly favor hiring a General Counsel or senior corporate attorney at $200,000–$350,000 total compensation. Below $150,000 in annual legal spend, outside counsel typically remains more cost-effective. In the $150,000–$300,000 range, a part-time GC or fractional arrangement may bridge the gap. Beyond spend, recurring needs, contracts reviewed weekly, regulatory filings on a cycle, ongoing employment matters, are signals that in-house counsel pays for itself in responsiveness and institutional knowledge alone.',
  },
  {
    question: 'What is the difference between a General Counsel and a Corporate Counsel role?',
    answer: 'A General Counsel is a senior executive who owns the entire legal function, advises the board and CEO, manages outside counsel relationships, and is accountable for legal risk across the company. A Corporate Counsel is a practicing attorney who handles day-to-day legal work, contracts, compliance, employment matters, typically reporting to the GC or CFO rather than the CEO. Companies with limited legal volume often hire a Corporate Counsel first and promote to GC as the function grows, or hire a GC directly when the role requires board-level access from day one.',
  },
  {
    question: 'Should we offer equity compensation when hiring a GC?',
    answer: 'For Series A and later-stage startups, equity is expected and materially affects the candidate pool. A GC considering a $280,000 base offer with no equity against a $240,000 offer with meaningful equity stake will almost always take the equity. For established private companies not planning a liquidity event, equity is less critical but phantom equity or profit-sharing arrangements can bridge the gap. For public companies, RSUs and stock options are standard components of GC total compensation. Omitting equity entirely when hiring for a startup GC role typically limits your candidate pool to attorneys who could not clear the market rate elsewhere.',
  },
  {
    question: 'How long does an in-house counsel search typically take?',
    answer: 'A properly resourced GC search takes 60 to 90 days from launch to accepted offer. The timeline breaks down as roughly two weeks to build the target candidate list, two to three weeks for outreach and initial conversations, two weeks for structured interviews, one to two weeks for offer negotiation. The most common delays are waiting too long to start (many companies begin searching when they are already overwhelmed), a compensation band that does not clear the passive candidate market, and a slow interview process that loses candidates to faster-moving offers.',
  },
  {
    question: 'What is the market compensation for a General Counsel in 2026?',
    answer: 'GC compensation varies significantly by company stage, revenue, and industry. At a pre-IPO startup, base salary ranges from $250,000 to $400,000 with equity making up the majority of total compensation. At an established mid-market private company ($50M–$300M revenue), GC base salary typically runs $220,000–$350,000 with bonus of 15 to 25 percent. At a public company, total cash compensation for a GC runs $350,000–$600,000+ depending on market cap and scope. Any GC search that opens with a compensation band below market will attract candidates who could not clear those rates elsewhere, not the profile most companies are actually looking for.',
  },
  {
    question: 'How does BEG find in-house counsel candidates, and how fast can you place?',
    answer: 'BEG places in-house counsel, General Counsel, Deputy GC, Corporate Counsel, and Privacy/Compliance roles, in 23 to 35 days on average, with an 86% fill rate. Our process targets passive candidates who are not actively searching job boards: currently employed attorneys in similar roles who become aware of your opportunity through direct outreach. We do not post and wait. We identify, approach, qualify, and present candidates who are already doing the job you need done. Discovery call: https://calendly.com/tori-beghr/15-minute-beg-discovery-call.',
  },
];

export default function InHouseCounselPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Legal Hiring &amp; Recruiting</p>
              <h1>In-House Counsel Hiring: When to Bring Legal In-House and How to Find the Right GC (2026)</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 25, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>

        <p>At some point in a company's growth, the cost of not having a lawyer in-house starts to exceed the cost of having one. Outside counsel at $400 to $800 per hour handles discrete matters well, but when you are generating 1,000 or more hours of legal work per year, you are spending $400,000 to $800,000 annually on attorneys who do not know your business deeply, cannot be reached at 9pm before a board meeting, and charge you for every email that crosses their desk. A General Counsel at $200,000 to $350,000 in total compensation provides deeper institutional knowledge, faster turnaround, and proactive risk identification, and typically breaks even on cost within the first year at this usage level.</p>

        <p>The decision to bring legal in-house is not about size alone. It is about legal spend, legal volume, and the nature of the work. A company with $5 million in annual revenue but high regulatory complexity, financial services, healthcare, government contracting, may need in-house counsel earlier than a $30 million company with straightforward commercial contracts. Conversely, a $50 million e-commerce company with predictable, repetitive legal needs may manage with outside counsel and well-structured templates well into its growth phase.</p>

        <p>When the decision is made to hire, the search itself presents a distinct challenge. In-house attorneys, particularly experienced General Counsels, are not looking at job boards. They are employed, well-compensated, and protective of a stable role they spent years earning. Reaching this candidate pool requires direct outreach to passive candidates who become aware of your opportunity because someone found them specifically. BEG places in-house counsel in 23 to 35 days using exactly this approach.</p>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>The In-House Decision Framework</h2>

        <p>Annual outside legal spend is the most reliable single proxy for in-house ROI, but it is not the only signal. Use this framework to evaluate the decision honestly.</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Annual Outside Legal Spend</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Recommendation</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Under $150,000', 'Stick with outside counsel', 'In-house GC salary exceeds the spend; not economical yet'],
                ['$150,000–$300,000', 'Evaluate carefully', 'Part-time GC, fractional counsel, or senior corporate attorney may bridge the gap'],
                ['$300,000–$600,000', 'Strong case for GC', 'Salary break-even typically achieved in year 1; responsiveness value is additional'],
                ['Over $600,000', 'Almost certainly hire', 'Outside counsel cost exceeds GC comp; institutional knowledge loss compounds annually'],
                ['High regulatory complexity (any spend level)', 'Evaluate early', 'Financial services, healthcare, gov\'t contracting may justify hire below spend thresholds'],
                ['Frequent M&A or capital raises', 'Evaluate early', 'Transaction counsel is specialized, but having a GC coordinate outside counsel pays for itself'],
              ].map(([spend, rec, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{spend}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{rec}</td>
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.88rem', color: '#555' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>What Makes In-House Counsel Different to Hire</h2>

        <p>Hiring an in-house attorney is not the same as hiring outside counsel. The skills that make an excellent partner at a law firm, depth in a practice area, meticulous written analysis, risk-averse recommendations, careful scope management, are not the skills that make an excellent GC. In-house counsel needs to be a business partner first and a lawyer second.</p>

        <p>The profile you are looking for combines legal competency with operational speed: someone who can review a contract at 8pm before a deal closes at 9am, explain the two meaningful risks in plain language to the CFO, and say "here is how we can do this with acceptable risk" rather than "here are seventeen reasons why this is problematic." The transition from law firm practice to in-house is not automatic. Many excellent outside attorneys make poor in-house lawyers because they cannot shift from the firm's incentive structure, thoroughness, comprehensiveness, issue-spotting, to the company's incentive structure, speed, pragmatism, business enablement.</p>

        <p>Four qualities separate good in-house counsel from excellent in-house counsel:</p>

        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li><strong>Generalist breadth over specialist depth:</strong> In-house counsel handles employment, contracts, regulatory, IP, real estate, corporate governance, and disputes, often in the same week. Deep specialization is a liability at smaller companies where one attorney owns the entire function.</li>
          <li><strong>Business partnership orientation:</strong> The best in-house counsel are seen as business enablers, not blockers. They understand the deal economics, the relationship dynamics, and the risk tolerance of their company, and advise accordingly.</li>
          <li><strong>Speed and pragmatism:</strong> In-house counsel operates on business timelines, not litigation timelines. A contract that needs to close in 48 hours requires fast, clear advice, not a comprehensive memo.</li>
          <li><strong>Willingness to say yes with guardrails:</strong> The GC's role is to find a path forward, not to list every reason something cannot be done. "Here is how we do this" is the output; "here is why we cannot" is a last resort.</li>
        </ul>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>In-House Counsel Roles and Compensation in 2026</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Typical Total Comp</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['General Counsel', 'Owns the entire legal function; board and CEO-level access; manages outside counsel', '$250,000–$450,000'],
                ['Deputy GC / VP Legal', 'Senior attorney in a larger legal department; handles complex matters, manages junior attorneys', '$180,000–$280,000'],
                ['Corporate Counsel – General', 'Day-to-day contracts, employment, compliance; typically first in-house hire', '$140,000–$220,000'],
                ['Privacy / Compliance Counsel', 'Regulatory compliance, data privacy, CCPA/GDPR; specialist role', '$130,000–$200,000'],
                ['Commercial Contracts Counsel', 'High-volume commercial agreements, vendor contracts, NDAs', '$120,000–$180,000'],
              ].map(([role, desc, comp], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{role}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{desc}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{comp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>Common In-House Hiring Mistakes</h2>

        <p>Companies that hire in-house counsel for the first time frequently make the same avoidable mistakes. Understanding them before you start the search is cheaper than learning them during it.</p>

        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li><strong>Hiring a BigLaw litigator for a transactional role:</strong> Litigation and transactional practice are different disciplines. A litigator who has never drafted a commercial agreement, negotiated a vendor contract, or managed an employment matter is not equipped to be a company's first GC unless litigation is genuinely the dominant legal need.</li>
          <li><strong>Setting a compensation band below market:</strong> In-house counsel know what they are worth. A GC search that opens below market receives candidates who could not clear market rates elsewhere, not candidates who are making a lifestyle choice at a lower rate. Market intelligence before you set the band is not optional.</li>
          <li><strong>Searching only active candidates:</strong> Job boards reach the 15 to 20 percent of the attorney market that is actively looking. The best in-house candidates are employed and not looking. They require direct outreach and a compelling reason to consider a conversation.</li>
          <li><strong>No equity for a startup GC:</strong> Asking a seasoned attorney to leave an established role for a startup position without equity is asking them to take compensation and career risk with no upside participation. The best candidates will not accept this; average candidates will.</li>
        </ul>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>Why Passive Candidates Dominate the In-House Market</h2>

        <p>Law school enrollment has dropped approximately 30 percent since 2010. The pipeline of new attorneys entering the market is smaller than it was a generation ago. At the same time, demand for experienced in-house counsel, particularly at the GC and Deputy GC level, has grown substantially as regulatory complexity has increased and companies have brought more legal work in-house to control costs.</p>

        <p>The result is a market where the best candidates are not searching. They are employed, comfortable, and not watching job boards. They become aware of opportunities through professional networks, direct outreach from people they trust, and conversations that start with "I have a situation that might interest you" rather than a job posting. The companies that consistently win in this market are the ones that reach passive candidates directly, through networks, through trusted intermediaries, or through a placement partner whose whole model is built around finding people who are not looking.</p>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>Decision Framework by Company Stage</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Company Stage</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Recommendation</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Seed / Pre-Series A', 'Outside counsel only', 'Legal volume too low; outside counsel with startup focus is cost-effective'],
                ['Series A–B ($5M–$20M revenue)', 'Consider fractional GC or first in-house hire if regulatory complexity is high', 'Equity makes in-house comp competitive; hiring earlier locks in better candidates'],
                ['Series C+ or $20M–$100M revenue', 'Hire GC; time has come', 'Outside counsel spend likely at or above GC cost; institutional knowledge gap is growing'],
                ['$100M+ revenue or pre-IPO', 'Build a legal team, not just one GC', 'Scope exceeds one attorney; GC needs support; Deputy GC and specialist roles follow'],
                ['Acquisition target', 'Hire GC if you do not have one', 'GC is required for due diligence process management; absence signals immaturity to acquirers'],
              ].map(([stage, rec, reason], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{stage}</td>
                  <td style={{ padding: '0.65rem 0.75rem' }}>{rec}</td>
                  <td style={{ padding: '0.65rem 0.75rem', fontSize: '0.88rem', color: '#555' }}>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', margin: '2.5rem 0', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem' }}>Find In-House Counsel in 23–35 Days</p>
          <p style={{ color: '#ccc', margin: '0 0 1.5rem' }}>BEG places General Counsels, Deputy GCs, and Corporate Counsel at an 86% fill rate. We reach candidates who are not on job boards, passive candidates currently doing the job you need done.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none' }}>
            Book a Free Discovery Call
          </a>
        </div>

        <h2 style={{ borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem', marginTop: '2.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/job-placement/legal" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>Legal Placement Services &rarr;</a>
            <a href="/blog/legal-hiring/associate-hiring" style={{ display: 'inline-block', background: '#f0f0f0', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>Associate Attorney Hiring &rarr;</a>
            <a href="/blog/legal-hiring/attorney-market-trends" style={{ display: 'inline-block', background: '#f0f0f0', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>Attorney Market Trends &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads attorney placement and legal recruiting at Business Executive Group. BEG places in-house counsel, General Counsels, Deputy GCs, and Corporate Counsel, in 23 to 35 days with an 86% fill rate, at roughly 50% less than contingency firms.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'In-House Counsel Hiring: When to Bring Legal In-House and How to Find the Right GC (2026)',
        description: 'When to hire in-house counsel vs. stick with outside firms. General Counsel hiring process, compensation, and search timeline for growing companies.',
        datePublished: '2026-06-25',
        dateModified: '2026-06-27',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', logo: { '@type': 'ImageObject', url: 'https://beghr.com/assets/beg-header-image.png' } },
        url: 'https://beghr.com/blog/legal-hiring/in-house-counsel',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://beghr.com/blog/legal-hiring/in-house-counsel' },
      }) }} />
    </article>
  );
}
