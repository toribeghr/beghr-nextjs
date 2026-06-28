import { Metadata } from 'next';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Recruiting a Veterinary Practice Manager | BEG',
  description: 'The right practice manager protects your margin and your team. How to find and hire a strong veterinary practice manager in 23-35 days.',
  alternates: { canonical: 'https://beghr.com/blog/veterinary-hiring/veterinary-practice-manager-recruiting' },
  openGraph: {
    title: 'Recruiting a Veterinary Practice Manager | BEG',
    description: 'The right practice manager protects your margin and your team. How to find and hire a strong veterinary practice manager in 23-35 days.',
    url: 'https://beghr.com/blog/veterinary-hiring/veterinary-practice-manager-recruiting',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Recruiting a Veterinary Practice Manager | BEG', description: 'The right practice manager protects your margin and your team. How to find and hire a strong veterinary practice manager in 23-35 days.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('/blog/veterinary-hiring/veterinary-practice-manager-recruiting');

const faqs = [
  {
    question: 'What does a veterinary practice manager actually do?',
    answer: 'A practice manager runs the business side of the hospital so the doctors can practice medicine. That means staffing and scheduling, payroll and HR, inventory and vendor management, client experience, and the financial reporting that keeps the practice profitable. A strong manager protects margin, reduces staff turnover, and frees the owner from day-to-day operations.',
  },
  {
    question: 'What should I look for in a veterinary practice manager?',
    answer: 'Look for operational range across staffing, finance, and client experience, plus the leadership skill to hold a team together in a high-stress environment. Veterinary or healthcare experience shortens ramp time, but the most important traits are judgment, people skills, and ownership. The right manager runs the practice without needing the owner to step in.',
  },
  {
    question: 'How long does it take to hire a veterinary practice manager?',
    answer: 'Through job postings and contingency recruiting, the search often runs 2 to 4 months because strong operators are employed and not actively looking. BEG fills veterinary practice manager roles in 23 to 35 days on average by sourcing passive candidates directly through iSolved Job Placement Services.',
  },
  {
    question: 'Is BEG a staffing agency?',
    answer: 'No. BEG places permanent, direct hire practice managers and veterinary staff only. It is not a staffing agency and does not provide interim or contract managers. BEG uses a milestone-based model through iSolved Job Placement Services, with an 86 percent fill rate and a 45-day replacement guarantee.',
  },
];

export default function VeterinaryPracticeManagerRecruitingPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Recruiting a Veterinary Practice Manager | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/veterinary-hiring/veterinary-practice-manager-recruiting"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Veterinary Hiring</p>
              <h1>Recruiting a Veterinary Practice Manager Who Actually Runs the Practice</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                The right practice manager is the difference between an owner who practices medicine and an owner buried in scheduling, payroll, and inventory at 9pm. Here is how to find and hire a manager who genuinely runs the business.
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
          A veterinary practice manager sits at the center of everything that is not medicine: the staff, the schedule, the inventory, the vendors, the books, and the client experience. When the role is empty or filled by the wrong person, the owner absorbs all of it, the team frays, and margin quietly erodes. When it is filled well, the owner gets their time back and the practice runs better than it ever did. That is why this hire deserves more care than most.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why Practice Manager Searches Are Hard
        </h2>
        <p>
          Practice manager roles are difficult to fill for three compounding reasons. First, the role spans finance, HR, operations, and client experience, so the genuinely qualified pool is narrow. Second, the strongest operators are already employed and running someone else&apos;s practice well, which makes them passive candidates who never see a posting. Third, the cost of a bad hire is high: a weak manager creates turnover, billing errors, and culture problems that take months to surface and longer to fix.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Define the Role Before You Source
        </h2>
        <p>
          The fastest manager searches start with a tight, honest role definition. Before sourcing a single candidate, get clear on:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Scope.</strong> Full-charge office manager, or a true operations leader who owns finance, hiring, and strategy alongside you?</li>
          <li><strong>Practice size and stage.</strong> A single location runs differently than a multi-site group. Match the candidate to the complexity.</li>
          <li><strong>Systems.</strong> Experience with your practice management software and the metrics you track shortens ramp time materially.</li>
          <li><strong>Must-haves versus nice-to-haves.</strong> Veterinary experience helps, but core operational and leadership skill matters more. Be deliberate about what is truly required.</li>
        </ul>
        <p>
          A clear brief lets a recruiter target the right passive candidates precisely and lets you make a fast, confident decision when one appears.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          A 23-35 Day Practice Manager Hiring Playbook
        </h2>
        <p>
          This is the cadence BEG runs to fill practice manager roles through iSolved Job Placement Services:
        </p>
        <p><strong>Intake (Days 1-2).</strong> A structured call to lock scope, practice size, comp range, systems, and decision process. The clearer the brief, the faster everything downstream moves.</p>
        <p><strong>Sourcing (Days 2-10).</strong> Direct, targeted outreach to passive practice managers and operations leaders who match the profile, not a job posting and a wait. These are employed professionals contacted individually with a specific reason your role may fit.</p>
        <p><strong>Screening (Days 7-18).</strong> A small slate of well-qualified candidates submitted with a clear summary of operational experience, current situation, and fit rationale. You review a handful of strong people, not a stack of resumes.</p>
        <p><strong>Interviews and offer (Days 15-30).</strong> Practices that move decisively at the interview stage close in under 35 days. BEG supports the offer stage and stays with the candidate through resignation and start to reduce counter-offer risk and early attrition.</p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Running the practice yourself and out of hours?</h3>
          <p style={{ marginBottom: '1.5rem' }}>You do not have to settle to move fast. We will show you what our practice manager pipeline looks like for your size, systems, and market right now.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why BEG Fills Manager Roles Faster
        </h2>
        <p>
          BEG fills practice manager and other veterinary leadership roles on a milestone-based model rather than traditional contingency. The differences are what make the speed possible:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Passive candidate access.</strong> The pipeline reaches employed managers who never see a posting.</li>
          <li><strong>23-35 day average fill time, 86% fill rate.</strong> A continuous pipeline, not a reactive one.</li>
          <li><strong>Roughly 50% less than contingency.</strong> The iSolved platform reduces the sourcing overhead traditional recruiters price in.</li>
          <li><strong>45-day replacement guarantee.</strong> If the placed manager leaves within 45 days, BEG fills the role again at no additional fee.</li>
          <li><strong>Permanent, direct hire only.</strong> BEG is not a staffing agency and does not place interim or contract managers.</li>
        </ul>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Hire your next practice manager in 23-35 days</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. Tell us the scope, size, and timeline. We will tell you what the search looks like and whether milestone placement fits.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>FAQ: Recruiting a Practice Manager</h2>
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
            <a href="/services/job-placement/veterinary/practice-manager" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Practice Manager Placement &rarr;</a>
            <a href="/services/job-placement/veterinary" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Veterinary Placement &rarr;</a>
            <a href="/blog/veterinary-hiring/veterinary-talent-shortage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>The 2026 Veterinary Shortage &rarr;</a>
            <a href="/blog/veterinary-hiring/hiring-associate-veterinarians" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>How to Hire Associate Veterinarians &rarr;</a>
            <a href="/blog/veterinary-hiring/veterinary-salary-trends" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Veterinary Salary Trends 2026 &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony leads veterinary placement at Business Executive Group. BEG fills associate veterinarian, hospital director, and practice manager roles through iSolved Job Placement Services, a milestone-based model with an 86% fill rate, 23-35 day time-to-fill, and a 45-day replacement guarantee.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Recruiting a Veterinary Practice Manager Who Actually Runs the Practice',
        description: 'How to define, source, and close a strong veterinary practice manager hire in 23-35 days using passive candidate sourcing and a milestone-based model.',
        datePublished: '2026-06-28', dateModified: '2026-06-28',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/blog/veterinary-hiring/veterinary-practice-manager-recruiting',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />
    </article>
  );
}
