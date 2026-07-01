import { Metadata } from 'next';
import Link from 'next/link';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Applicant Tracking Software | Instant Price Quote | BEG',
  description: 'Applicant tracking software for job posting, candidate pipelines, offer letters, and onboarding handoff. isolved hiring on one platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/applicant-tracking-software' },
  openGraph: {
    title: 'Applicant Tracking Software | Instant Price Quote | BEG',
    description: 'Applicant tracking software for job posting, candidate pipelines, offer letters, and onboarding handoff. isolved hiring on one platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/applicant-tracking-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Applicant Tracking Software | Instant Price Quote | BEG', description: 'Applicant tracking software for job posting, candidate pipelines, offer letters, and onboarding handoff. isolved hiring on one platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does applicant tracking software do?',
    a: 'Applicant tracking software posts your open jobs, collects applications in one place, moves candidates through a hiring pipeline, and manages offer letters. It replaces the email threads and spreadsheets most teams use to track who applied and where each candidate stands.',
  },
  {
    q: 'How does isolved handle job posting and candidate pipelines?',
    a: 'isolved Applicant Tracking lets you post openings to job boards and your careers page, then collect every applicant in a single pipeline. Recruiters move candidates through stages, share feedback, and schedule interviews without leaving the platform.',
  },
  {
    q: 'Can isolved create and send offer letters?',
    a: 'Yes. The isolved platform generates offer letters from templates, routes them for approval, and sends them for electronic signature. Once a candidate accepts, their information is ready to flow into onboarding so nobody rekeys names, addresses, or pay rates.',
  },
  {
    q: 'How does hiring connect to onboarding and payroll?',
    a: 'Because isolved is one connected platform, an accepted candidate becomes a new hire without re-entering data. Their record flows from applicant tracking into onboarding, then into HR and payroll, so the same person is never typed in twice.',
  },
  {
    q: 'Why use BEG to implement applicant tracking?',
    a: 'BEG configures your job templates, pipeline stages, offer letter formats, and onboarding handoff to match how you actually hire. You work with one BEG contact who knows your setup rather than filing tickets with a general support queue.',
  },
  {
    q: 'Is applicant tracking worth it for a small team?',
    a: 'It depends on hiring volume. A team that hires once or twice a year may manage with email, while a company hiring steadily benefits from a single pipeline, faster offers, and a clean handoff into onboarding. BEG will give you an honest read.',
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
    { '@type': 'ListItem', position: 3, name: 'Applicant Tracking Software', item: 'https://www.beghr.com/services/hcm-software/applicant-tracking-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/applicant-tracking-software',
};

export default function ApplicantTrackingSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Applicant Tracking</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Applicant Tracking Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Job posting, candidate pipelines, offer letters, and onboarding handoff all live in one place when hiring sits inside your HCM platform. Here is what to look for and how isolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good applicant tracking software posts jobs, gathers every applicant in one pipeline, generates and sends offer letters, and hands an accepted candidate straight to onboarding without rekeying. The isolved platform handles all of this on one connected platform, and BEG configures and supports it around the way your team hires.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is applicant tracking software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Applicant tracking software, often called an ATS, manages the hiring process from the moment a job is posted to the moment a new hire starts. It centralizes job postings, collects applications, organizes candidates into a pipeline, and supports the offer and acceptance steps that turn a applicant into an employee. The right tool replaces scattered inboxes and spreadsheets with one view of every requisition and every candidate.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Job posting that reaches both your careers page and outside job boards. A pipeline that shows every candidate stage at a glance and lets your team leave feedback in one place. Offer letters generated from templates with electronic signature. And a clean handoff into onboarding so an accepted candidate is not re-entered by hand. An ATS that stops at the offer leaves the most error-prone step, new hire data entry, undone.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is lost candidates and slow offers. When applications land in a shared inbox and hiring managers track candidates in their own notes, strong people slip through, interviews get scheduled twice, and the team cannot answer a simple question like how many candidates are in the final round. Every delay is a chance for a good candidate to take another job.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is the handoff. Even teams with a tidy pipeline often retype the accepted candidate into a separate onboarding or payroll system. That double entry is where wrong start dates, misspelled names, and incorrect pay rates creep in. Applicant tracking software solves both by keeping the whole journey, from posting to first day, in one connected flow.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved handles hiring as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved runs applicant tracking inside the same platform that runs your payroll, HR, onboarding, and time. You post openings to your careers page and job boards, collect every applicant in a single pipeline, and move candidates through stages while recruiters and hiring managers leave feedback in one place. Offer letters are generated from templates, routed for approval, and sent for electronic signature.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The handoff is where one platform pays off. When a candidate accepts, their information flows directly into onboarding, then into HR and payroll, so the same person is never typed in twice. Because more than 7 million employees are managed on isolved, the hiring workflow is proven across the requisition volumes and approval structures employers of every size face.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Applicant tracking is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link>, and your team can check pipeline status or pull a hiring report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Hiring workflows differ by company. Pipeline stages, approval chains, offer letter templates, and the fields your onboarding needs all have to match how your team actually recruits. BEG implements, configures, and supports the platform for your specific hiring process, and stays with you as roles, locations, and approvers change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and in hiring that return shows up where a single pipeline and an automatic onboarding handoff cut time to fill and remove duplicate data entry. When you add a new job template, change an approval step, or open a location, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. A company that hires a couple of times a year may manage with email and a careers page. The value of full applicant tracking grows with how often you hire, how many people touch each decision, and how much it hurts when an accepted candidate has to be retyped into onboarding.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many roles you fill in a year, how many approvers sit between an offer and an acceptance, and whether you want hiring to connect straight into onboarding and payroll. The isolved platform is a strong fit when hiring is steady and you want it joined to the rest of your HCM with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See applicant tracking in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your hiring process, look at how offers reach onboarding today, and show you what isolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
