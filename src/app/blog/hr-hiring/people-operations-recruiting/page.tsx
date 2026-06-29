import { Metadata } from 'next';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'People-Operations Recruiting | BEG',
  description: 'Modern people-ops leaders blend HR judgment with systems and data fluency. How to source the rare candidates who do both in 23-35 days.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-hiring/people-operations-recruiting' },
  openGraph: {
    title: 'People-Operations Recruiting | BEG',
    description: 'Modern people-ops leaders blend HR judgment with systems and data fluency. How to source the rare candidates who do both in 23-35 days.',
    url: 'https://www.beghr.com/blog/hr-hiring/people-operations-recruiting',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'People-Operations Recruiting | BEG', description: 'Modern people-ops leaders blend HR judgment with systems and data fluency. How to source the rare candidates who do both in 23-35 days.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('/blog/hr-hiring/people-operations-recruiting');

const faqs = [
  {
    question: 'What is the difference between HR and people operations?',
    answer: 'Traditional HR centers on policy, compliance, and administration. People operations treats the employee lifecycle as a system to be designed and optimized, leaning heavily on HCM platforms, data, and process. In practice the strongest people-ops leaders do both: they keep the compliance fundamentals airtight while running the function on systems and metrics and partnering with the business on strategy.',
  },
  {
    question: 'Why are people-ops leaders so hard to recruit?',
    answer: 'The role demands a rare combination. You need HR judgment and an instinct for people, plus genuine fluency with systems, data, and process design. Plenty of candidates have one half, far fewer have both, and the ones who do are in high demand and well-employed. They are passive candidates, which is why job postings consistently underperform for this profile.',
  },
  {
    question: 'How do you source a people-ops leader who blends HR and systems?',
    answer: 'You source directly and screen for both halves of the role explicitly. That means reaching passive candidates who are already running modern people functions, then validating not just HR depth but real systems and data fluency, how they have used an HCM platform, what they measure, and what they have built. BEG sources these candidates directly and fills people-ops roles in 23 to 35 days.',
  },
  {
    question: 'Is BEG a staffing agency?',
    answer: 'No. BEG places permanent, direct hire people-operations and HR professionals only. It is not a staffing agency and does not provide interim or contract staff. BEG uses a milestone-based model through iSolved Job Placement Services, with an 86 percent fill rate and a 45-day replacement guarantee.',
  },
];

export default function PeopleOperationsRecruitingPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "People-Operations Recruiting | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/hr-hiring/people-operations-recruiting"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Human Resources Hiring</p>
              <h1>People-Operations Recruiting: Leaders Who Blend HR and Systems</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                The modern people-ops leader is part HR practitioner, part systems thinker. They keep compliance airtight, run the function on data and an HCM platform, and partner with the business on strategy. Candidates who genuinely do all three are rare, and they are never on a job board. Here is how to find them.
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

        <aside className="key-takeaways" style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
          <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
            <li>HR roles are getting harder to fill: the strongest candidates are already employed, passive, and rarely on job boards.</li>
            <li>A posting-and-waiting search misses them. The window to reach a strong HR candidate is often just 2-4 weeks before they accept another offer.</li>
            <li>BEG places permanent HR hires in 23-35 days at roughly 50% less than contingency, with an 86% fill rate and a 45-day replacement guarantee.</li>
          </ul>
        </aside>

                <p>
          People operations is where HR judgment meets operational discipline. The leaders who do it well treat the employee lifecycle as a system to design and improve, not just a set of policies to administer. That makes them enormously valuable, and genuinely hard to find, because the role asks for a blend of skills that most candidates only have half of. The goal is to source for both halves deliberately and move fast when you find someone who has them.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why the Blend Is So Scarce
        </h2>
        <p>
          People-ops leadership is hard to recruit for three compounding reasons. First, the role demands two distinct skill sets, people judgment and systems fluency, and most candidates are strong in one but not the other. Second, demand for the blend is high across every growing company. Third, and most important, the people who have both are passive. They are already running a modern people function somewhere and are not browsing job boards. A posting reaches the people in transition, not the proven operators you actually want.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          What to Screen For
        </h2>
        <p>
          Because the role is a blend, your screen has to test both halves explicitly. Strong people-ops candidates show:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>HR fundamentals.</strong> Compliance, employee relations, and total rewards handled with real judgment, not just process.</li>
          <li><strong>Systems fluency.</strong> Hands-on command of an HCM platform and the ability to configure, integrate, and improve it, not just use it.</li>
          <li><strong>Data orientation.</strong> A habit of measuring what matters, retention, time-to-fill, engagement, and acting on it.</li>
          <li><strong>Business partnership.</strong> The credibility to sit with leadership on growth, retention, and organizational design.</li>
        </ul>
        <p>
          A candidate who only demonstrates one or two of these is a partial fit. Sourcing for all four from the start is what separates a fast, successful search from a long, frustrating one.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          A 23-35 Day People-Ops Hiring Playbook
        </h2>
        <p>
          This is the cadence BEG runs to fill people-ops roles through iSolved Job Placement Services:
        </p>
        <p><strong>Intake (Days 1-2).</strong> A structured call to lock the role definition, the systems environment, comp range, and how you weigh the HR-versus-systems balance for this seat.</p>
        <p><strong>Sourcing (Days 2-10).</strong> Direct, targeted outreach to passive people-ops leaders who demonstrably blend both skill sets, not a job posting and a wait.</p>
        <p><strong>Screening (Days 7-18).</strong> A small slate of candidates validated against both halves of the role, submitted with a clear summary of HR depth, systems fluency, and fit rationale.</p>
        <p><strong>Interviews and offer (Days 15-30).</strong> Companies that move decisively at the interview stage close in under 35 days. BEG supports the offer stage and stays with the candidate through resignation and start to reduce counter-offer risk and early attrition.</p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Need a people-ops leader who does both halves?</h3>
          <p style={{ marginBottom: '1.5rem' }}>We source for HR judgment and systems fluency together. We will show you what our people-ops pipeline looks like for your environment right now.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why BEG Fills People-Ops Roles Faster
        </h2>
        <p>
          BEG fills people-operations and other HR leadership roles on a milestone-based model rather than traditional contingency. The differences are what make the speed possible:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Passive candidate access.</strong> The pipeline reaches employed people-ops leaders who never see a posting.</li>
          <li><strong>23-35 day average fill time, 86% fill rate.</strong> A continuous pipeline, not a reactive one.</li>
          <li><strong>Roughly 50% less than contingency.</strong> The iSolved platform reduces the sourcing overhead traditional recruiters price in.</li>
          <li><strong>45-day replacement guarantee.</strong> If the placed leader leaves within 45 days, BEG fills the role again at no additional fee.</li>
          <li><strong>Permanent, direct hire only.</strong> BEG is not a staffing agency and does not place interim or contract people-ops leaders.</li>
        </ul>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Hire your next people-ops leader in 23-35 days</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. Tell us your systems and what the role needs. We will tell you what the search looks like and whether milestone placement fits.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>FAQ: People-Operations Recruiting</h2>
        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/job-placement/hr/people-operations-manager" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG People-Operations Placement &rarr;</a>
            <a href="/services/job-placement/hr" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Human Resources Placement &rarr;</a>
            <a href="/blog/hr-hiring/hr-talent-trends" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>HR Talent Trends 2026 &rarr;</a>
            <a href="/blog/hr-hiring/hiring-an-hr-director" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>How to Hire an HR Director &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony leads human resources placement at Business Executive Group. BEG fills HR director, HR manager, people-operations, and CHRO roles through iSolved Job Placement Services, a milestone-based model with an 86% fill rate, 23-35 day time-to-fill, and a 45-day replacement guarantee.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'People-Operations Recruiting: Leaders Who Blend HR and Systems',
        description: 'How to source and screen people-ops leaders who pair HR judgment with systems and data fluency, and fill the role in 23-35 days.',
        datePublished: '2026-06-28', dateModified: '2026-06-28',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/blog/hr-hiring/people-operations-recruiting',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />
    </article>
  );
}
