import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All-in-One HR & Payroll Software | Instant Quote | BEG',
  description: 'All-in-one HR and payroll software puts payroll, HR, time, and benefits on one connected platform, not stitched tools. isolved, configured and supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/all-in-one-hr-and-payroll-software' },
  openGraph: {
    title: 'All-in-One HR & Payroll Software | Instant Quote | BEG',
    description: 'All-in-one HR and payroll software puts payroll, HR, time, and benefits on one connected platform, not stitched tools. isolved, configured and supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/all-in-one-hr-and-payroll-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'All-in-One HR & Payroll Software | Instant Quote | BEG', description: 'All-in-one HR and payroll software puts payroll, HR, time, and benefits on one connected platform, not stitched tools. isolved, configured and supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'What is all-in-one HR and payroll software?',
    a: 'All-in-one HR and payroll software brings payroll, HR, time and attendance, and benefits onto a single connected platform. Employee data is entered once and shared everywhere, so the systems stay in sync instead of being stitched together with integrations.',
  },
  {
    q: 'How is isolved an all-in-one platform?',
    a: 'isolved runs payroll, HR, time and attendance, benefits, onboarding, and self-service on one platform with one employee record. A change in one area updates the others automatically, because it is one system rather than several tools connected by feeds.',
  },
  {
    q: 'Why is one platform better than stitched-together tools?',
    a: 'Separate tools require integrations that break, duplicate data entry, and reconciliation between systems. One connected platform removes those handoffs, so hours feed payroll, benefits drive deductions, and everyone works from the same accurate employee record.',
  },
  {
    q: 'What does all-in-one HR and payroll software include?',
    a: 'A true all-in-one platform includes payroll, HR records, time and attendance, benefits administration, onboarding, employee self-service, and compliance. The platform covers all of these in one system, and BEG configures the modules you need for how you operate.',
  },
  {
    q: 'Does all-in-one mean I lose depth in any one area?',
    a: 'Not with the right platform. The isolved platform delivers real depth in payroll, time, and benefits while keeping them connected, so you get capable tools in each area without the cost and fragility of running and integrating several separate systems.',
  },
  {
    q: 'Why use BEG to implement an all-in-one platform?',
    a: 'BEG implements, configures, and supports the full platform for your business, then stays with you as you grow. You work with one BEG contact across payroll, HR, time, and benefits rather than juggling several vendors and support queues.',
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
    { '@type': 'ListItem', position: 3, name: 'All-in-One HR and Payroll Software', item: 'https://www.beghr.com/services/hcm-software/all-in-one-hr-and-payroll-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/all-in-one-hr-and-payroll-software',
};

export default function AllInOneHRPayrollSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · All-in-One HR and Payroll</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>All-in-One HR and Payroll Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Payroll, HR, time, and benefits belong on one platform, not stitched together with brittle integrations. Here is what all-in-one really means and how isolved plus BEG delivers it.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="tldr" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>All-in-one HR and payroll software puts payroll, HR, time, and benefits on one connected platform with a single employee record, so data is entered once and stays in sync. The isolved platform provides that, and BEG configures and supports the whole thing, so you work with one partner instead of juggling stitched-together tools.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is all-in-one HR and payroll software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            All-in-one HR and payroll software combines payroll, HR records, time and attendance, and benefits administration into a single platform built around one employee record. Instead of separate products linked by integrations, every function reads and writes the same data, so a new hire, a pay change, or a benefits election is entered once and reflected everywhere.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, the key question is whether it is genuinely one platform or a bundle of acquired tools wearing one logo. Look for a single employee record, real depth in payroll, time, and benefits, onboarding and self-service in the same system, and a vendor that supports the whole thing. A true all-in-one removes the seams where data and accountability usually fall through.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The problem is the stitched-together stack. A company ends up with one tool for payroll, another for time, a third for benefits, and a fourth for HR records, all connected by integrations that need maintenance and break at the worst moments. The same employee data gets entered in several places, and reconciling those systems becomes a recurring tax on the HR team.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Every handoff between disconnected tools is a chance for error. Hours that do not reach payroll, a benefits election that never updates a deduction, an address changed in one system but not another. All-in-one software solves this by removing the handoffs entirely, so the data is consistent because there is only one copy of it.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved delivers one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved runs payroll, HR, time and attendance, benefits, onboarding, and employee self-service on one platform with a single employee record. Hours captured at the clock flow into payroll, benefits elections drive deductions, and a profile change updates everywhere at once, because it is one system, not several tools tied together by feeds.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            This is the all-in-one model proven at scale. Because more than 7 million employees are managed on isolved, the connected platform is tested across the full range of payroll, time, and benefits complexity that growing employers face.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            You can explore each capability from the <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link> hub, and your team can run tasks across all of it through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than switching between screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            An all-in-one platform is only as good as its setup. Configuring payroll, time, benefits, and HR to work together for your business is real work, and it is exactly what BEG does. BEG implements, configures, and supports the full platform, so the modules are tuned to how you operate and stay that way as you grow.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and on an all-in-one platform that return compounds, because every connected function removes the rework that disconnected tools create. Across payroll, HR, time, and benefits, you have one BEG contact who knows your whole setup, not a different support queue for each tool.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            All-in-one is not automatically the right answer for everyone, and an honest comparison should say so. A very small company with simple needs may be fine with a basic payroll tool for now. The value of one connected platform grows with headcount, with the number of HR functions you run, and with how much time you currently lose to reconciling separate systems.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many separate HR and payroll tools you run today, how much duplicate data entry and reconciliation that creates, whether your integrations are reliable, and whether you want one partner managing the platform or prefer to assemble and maintain your own stack. The isolved platform is a strong fit when consolidation and growth are in the picture and you want BEG managing it. BEG will run a fair comparison against your current stack rather than push you toward an answer.
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

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See the all-in-one platform in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will map the tools you run today and show you what payroll, HR, time, and benefits look like on one connected platform with isolved plus BEG.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>
    </main>
  );
}
