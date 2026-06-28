import { Metadata } from 'next';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Dental Practice Manager Recruiting | BEG',
  description: 'A strong practice manager runs the business so you can run the chair. How to source and close practice management talent in 23-35 days.',
  alternates: { canonical: 'https://beghr.com/blog/dental-hiring/practice-manager-recruiting' },
  openGraph: {
    title: 'Dental Practice Manager Recruiting | BEG',
    description: 'A strong practice manager runs the business so you can run the chair. How to source and close practice management talent in 23-35 days.',
    url: 'https://beghr.com/blog/dental-hiring/practice-manager-recruiting',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Dental Practice Manager Recruiting | BEG', description: 'A strong practice manager runs the business so you can run the chair. How to source and close practice management talent in 23-35 days.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('/blog/dental-hiring/practice-manager-recruiting');

const faqs = [
  {
    question: 'How long does it take to hire a dental practice manager?',
    answer: 'Through job postings and traditional recruiting, a practice manager search often runs 50 to 100 days because operationally strong dental managers are scarce and the best ones are passive. BEG fills practice manager roles in 23 to 35 days on average by sourcing passive candidates directly through iSolved Job Placement Services.',
  },
  {
    question: 'What should I look for in a dental practice manager?',
    answer: 'Look for someone who has run the business side of a practice: scheduling and production targets, insurance and billing, collections, team leadership, and patient experience. Familiarity with your practice management software and your specialty mix shortens ramp time. Above all, look for an operator who can own the numbers and free the doctor to focus on clinical care.',
  },
  {
    question: 'Should I promote from within or hire a practice manager externally?',
    answer: 'If you have a strong office lead or coordinator ready to grow into the role, an internal promotion can be faster and build loyalty. When no one on the team is ready, or you need proven systems and leadership the current team lacks, an external hire is the right call. A milestone-based placement model fills that external need quickly without a long, costly search.',
  },
  {
    question: 'Is BEG a staffing agency?',
    answer: 'No. BEG places permanent, direct hire practice managers and dental professionals only. It is not a staffing agency and does not provide temporary or per diem staff. BEG uses a milestone-based model through iSolved Job Placement Services, with an 86 percent fill rate and a 45-day replacement guarantee.',
  },
];

export default function PracticeManagerRecruitingPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Dental Hiring</p>
              <h1>Practice Manager Recruiting: How to Find and Close Strong Candidates</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                The right practice manager runs the business so you can run the chair. The wrong vacancy lets scheduling, billing, and team issues pile up on the doctor. The strongest managers are employed and hard to reach. Here is how to source and close one fast.
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
          The practice manager is the operational backbone of a dental office. When the seat is empty, the work does not disappear, it lands on the doctor and the front desk, and the business side of the practice quietly slips. Production targets drift, collections lag, and the team loses its day-to-day leader. The role demands a rare mix of operations, finance, and people skills, which is exactly why so many searches drag. A focused, fast process can fill it without compromise.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why Practice Manager Searches Drag
        </h2>
        <p>
          Practice manager roles are hard to fill for three compounding reasons. First, the role blends operations, finance, and leadership, so the genuinely qualified pool is narrow. Second, dentistry is in a structural staffing shortage that touches the business side as well as the clinical side. Third, the strongest practice managers are passive. They are running someone else&apos;s office well right now and are not browsing job boards. A posting reaches the people in transition, not the proven operators you actually want.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Define the Role Before You Source
        </h2>
        <p>
          The fastest practice manager searches start with a tight, honest role definition. Before sourcing a single candidate, get clear on:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Scope.</strong> Single location or multi-site? Does the role own billing and collections, HR, marketing, or all of it?</li>
          <li><strong>Numbers ownership.</strong> Will this manager carry production, collections, and overhead targets, and report on them?</li>
          <li><strong>Systems.</strong> Experience with your practice management software and insurance workflows shortens ramp time materially.</li>
          <li><strong>Must-haves versus nice-to-haves.</strong> Every non-essential requirement narrows an already thin pool. Be deliberate about what truly matters.</li>
        </ul>
        <p>
          A clear brief lets a recruiter target the right passive candidates precisely and lets you decide quickly when a strong one appears.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          A 23-35 Day Practice Manager Hiring Playbook
        </h2>
        <p>
          This is the cadence BEG runs to fill practice manager roles through iSolved Job Placement Services:
        </p>
        <p><strong>Intake (Days 1-2).</strong> A structured call to lock the scope, numbers ownership, comp range, and decision process. The clearer the brief, the faster everything downstream moves.</p>
        <p><strong>Sourcing (Days 2-10).</strong> Direct, targeted outreach to passive practice managers and dental operations leaders who match the profile, not a posting and a wait. These are employed professionals contacted individually with a specific reason your practice may fit.</p>
        <p><strong>Screening (Days 7-18).</strong> A small slate of well-qualified candidates submitted with a clear summary of operations experience, current situation, and fit rationale. You review a handful of strong people, not a stack of resumes.</p>
        <p><strong>Interviews and offer (Days 15-30).</strong> Practices that move decisively at the interview stage close in under 35 days. BEG supports the offer stage and stays with the candidate through start to reduce counter-offer risk and early attrition.</p>

        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Running the practice and the chair at the same time?</h3>
          <p style={{ marginBottom: '1.5rem' }}>You do not have to settle to move fast. We will show you what our practice manager pipeline looks like for your size and market right now.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Free Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
          Why BEG Fills Practice Manager Roles Faster
        </h2>
        <p>
          BEG fills practice manager and other dental roles on a milestone-based model rather than traditional contingency. The differences are what make the speed possible:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '2', marginBottom: '1rem' }}>
          <li><strong>Passive candidate access.</strong> The pipeline reaches employed managers who never see a posting.</li>
          <li><strong>23-35 day average fill time, 86% fill rate.</strong> A continuous pipeline, not a reactive one.</li>
          <li><strong>Roughly 50% less than contingency.</strong> The iSolved platform reduces the sourcing overhead traditional recruiters price in.</li>
          <li><strong>45-day replacement guarantee.</strong> If the placed manager leaves within 45 days, BEG fills the role again at no additional fee.</li>
          <li><strong>Permanent, direct hire only.</strong> BEG is not a staffing agency and does not place temporary or per diem staff.</li>
        </ul>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Hire your next practice manager in 23-35 days</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. Tell us the scope, systems, and timeline. We will tell you what the search looks like and whether milestone placement fits.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call &rarr;
          </a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>FAQ: Practice Manager Recruiting</h2>
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
            <a href="/services/job-placement/dental/practice-manager" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Practice Manager Placement &rarr;</a>
            <a href="/services/job-placement/dental" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Dental Placement &rarr;</a>
            <a href="/blog/dental-hiring/dental-staffing-shortage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>The 2026 Dental Shortage &rarr;</a>
            <a href="/blog/dental-hiring/hiring-associate-dentists" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>How to Hire an Associate Dentist &rarr;</a>
            <a href="/blog/dental-hiring/dental-salary-trends" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Dental Salary Trends 2026 &rarr;</a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony leads dental and healthcare placement at Business Executive Group. BEG fills practice manager, associate dentist, and hygienist roles through iSolved Job Placement Services, a milestone-based model with an 86% fill rate, 23-35 day time-to-fill, and a 45-day replacement guarantee.</p>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Practice Manager Recruiting: How to Find and Close Strong Candidates',
        description: 'A practical playbook to define, source, and close a strong dental practice manager hire in 23-35 days using passive candidate sourcing and a milestone-based model.',
        datePublished: '2026-06-28', dateModified: '2026-06-28',
        author: { '@type': 'Person', name: 'Anthony Moretti', jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/blog/dental-hiring/practice-manager-recruiting',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />
    </article>
  );
}
