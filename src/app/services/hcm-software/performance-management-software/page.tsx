import { Metadata } from 'next';
import Link from 'next/link';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Performance Management Software | BEG',
  description: 'Performance management software for reviews, goals, and feedback cycles tied to compensation and employee records. iSolved on one platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/performance-management-software' },
  openGraph: {
    title: 'Performance Management Software | BEG',
    description: 'Performance management software for reviews, goals, and feedback cycles tied to compensation and employee records. iSolved on one platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/performance-management-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Performance Management Software | BEG', description: 'Performance management software for reviews, goals, and feedback cycles tied to compensation and employee records. iSolved on one platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does performance management software do?',
    a: 'Performance management software runs review cycles, tracks goals, and captures feedback between employees and managers. It keeps reviews on schedule, ties results to the employee record, and gives leaders a clear picture of who is performing and where development is needed.',
  },
  {
    q: 'How does iSolved handle reviews and goals?',
    a: 'iSolved runs review cycles on a schedule you set, with templates, ratings, and routing for self, manager, and multi-rater feedback. Goals are tracked against each employee and visible through the cycle, so progress and ratings sit together in one place.',
  },
  {
    q: 'Can performance results connect to compensation?',
    a: 'Yes. Because iSolved is one connected platform, review outcomes sit alongside the same employee record that drives pay. That makes merit increases, promotions, and pay decisions easier to align with documented performance instead of separate spreadsheets.',
  },
  {
    q: 'How does feedback stay tied to the employee record?',
    a: 'Reviews, goals, ratings, and notes all attach to the employee profile in iSolved. There is no separate review tool to reconcile, so a manager or HR can see performance history, role, and compensation context together without exporting anything.',
  },
  {
    q: 'Why use BEG to implement performance management?',
    a: 'BEG configures your review templates, rating scales, cycle timing, and routing to match how your company evaluates people. You work with one BEG contact who knows your setup rather than filing tickets with a general support queue.',
  },
  {
    q: 'Do we need formal performance reviews at all?',
    a: 'It depends on your size and culture. A very small team may run feedback informally, while a growing company benefits from documented, consistent reviews tied to pay and records. BEG will give you an honest read rather than push a process you do not need.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Performance Management Software', item: 'https://www.beghr.com/services/hcm-software/performance-management-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/performance-management-software',
};

export default function PerformanceManagementSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Performance Management</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Performance Management Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Reviews, goals, and feedback cycles work best when they sit next to the employee record and the pay it drives. Here is what to look for and how iSolved plus BEG handles it.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="tldr" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good performance management software runs review cycles on schedule, tracks goals, captures feedback, and ties results to compensation and the employee record. iSolved does all of this on one connected platform, and BEG configures and supports it around how your company actually evaluates people.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is performance management software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Performance management software organizes how you set expectations, review work, and develop people. It runs the review cycles, holds the goals, collects feedback from managers and peers, and stores the ratings and notes that document each person over time. The right tool turns reviews from a once-a-year scramble of forms into a consistent, on-schedule process that everyone can see.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Configurable review templates and rating scales that fit how you actually grade work. Goal tracking that ties objectives to individuals and stays visible through the cycle. Feedback routing for self, manager, and multi-rater input. And a direct connection to the employee record and compensation, so review outcomes inform pay decisions instead of living in a separate file. A review tool that floats apart from records and pay creates more reconciliation, not less.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is reviews that are inconsistent and disconnected. When each manager runs evaluations in their own document, ratings mean different things, deadlines slip, and HR cannot see who has been reviewed. Goals set in January are forgotten by summer because they live somewhere nobody opens.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The deeper problem is the gap between performance and pay. When review results sit in a separate spreadsheet from compensation, merit increases and promotions get made without a clear, documented link to how someone actually performed. Performance management software exists to make reviews consistent, keep goals visible, and tie the result to the record and pay so decisions are defensible.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles performance as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved runs performance management inside the same platform that holds your HR records and runs payroll. Review cycles follow a schedule you set, with templates, rating scales, and routing for self, manager, and multi-rater feedback. Goals are tracked against each employee and stay visible through the cycle, so progress and ratings sit together rather than in separate tools.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Because everything attaches to the same employee record, review outcomes sit next to the data that drives compensation, which makes merit and promotion decisions easier to align with documented performance. Because more than 7 million employees are managed on iSolved, the review workflow is proven across the cycle structures and rating models employers of every size use.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Performance management is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and a manager can check review status or pull a completion report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Performance processes are specific to each company. Review templates, rating scales, cycle timing, and the way feedback is routed all have to reflect how you evaluate people. BEG implements, configures, and supports the platform for your specific process, and stays with you as your evaluation approach evolves.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in performance management that return shows up where consistent, on-schedule reviews tied to records and pay reduce manual tracking and make compensation decisions cleaner. When you change a template, adjust a rating scale, or shift your cycle, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single approach fits every employer, and an honest answer should say so. A very small team may run feedback informally and not need a structured cycle at all. The value of formal performance management grows with headcount, with the number of managers running reviews, and with how closely you want pay decisions tied to documented results.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many people you review, whether managers grade consistently today, and whether you want performance results connected to compensation and records. iSolved is a strong fit when reviews need structure and you want them joined to the rest of your HCM with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div className="faq">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <h3 style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>{q}</h3>
                <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See performance management in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your review process, look at how performance connects to pay today, and show you what iSolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
