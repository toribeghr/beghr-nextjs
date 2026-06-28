import { Metadata } from 'next';
import Link from 'next/link';
import AIReadinessScorecard from '@/components/AIReadinessScorecard';

export const metadata: Metadata = {
  title: 'AI HR Readiness Scorecard | Free Assessment | BEG',
  description: 'Free AI HR readiness scorecard. Answer 8 questions to see how ready your HR and payroll are for AI that completes tasks, plus a tailored next step from BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/ai-readiness-scorecard' },
  openGraph: {
    title: 'AI HR Readiness Scorecard | Free Assessment | BEG',
    description: 'Answer 8 questions to score how ready your HR is for AI that completes tasks, not just answers questions. Tailored recommendation included.',
    url: 'https://beghr.com/services/hcm-software/ai-readiness-scorecard',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'AI HR Readiness Scorecard | Free Assessment | BEG', description: 'Score how ready your HR is for AI that completes tasks. Free 8-question assessment.', images: ['https://beghr.com/assets/og-image.png'] },
};

export default function AIReadinessScorecardPage() {
  return (
    <>
      <section className="section" style={{ background: '#000000', color: '#ffffff', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · AI Readiness</p>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              AI HR Readiness Scorecard
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '600px', margin: '0 auto' }}>
              Most HR teams are ready for far more automation than they realize. Answer 8 quick questions to see how ready your HR and payroll are for AI that completes tasks, not just answers questions. You will get a score and a tailored next step.
            </p>
          </div>
        </div>
      </section>

      <AIReadinessScorecard />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>About the AI HR readiness scorecard</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What does the AI HR readiness scorecard measure?</h3>
              <p>It measures how ready your HR and payroll operation is to benefit from AI that completes tasks. It looks at how many systems you run, how much work is still manual, how connected your data is, and how ready your team is to adopt AI. The result is a score from 0 to 100 and a tailored recommendation.</p>
            </div>
            <div className="faq-item">
              <h3>Why does readiness depend on consolidating systems?</h3>
              <p>AI delivers the most value when it can act across your whole HR operation from one place. If payroll, HR, time, and benefits live in separate tools, AI has to work around the gaps. A single connected platform like iSolved is what lets AI complete tasks end to end rather than just answer questions.</p>
            </div>
            <div className="faq-item">
              <h3>What makes iSolved different on AI?</h3>
              <p>iSolved is the only HCM platform with a generally available Connector for Claude, live since June 2026. It does not just answer questions. It completes real HR tasks through conversation, such as running payroll, updating records, and pulling reports. BEG implements, configures, and supports it for you.</p>
            </div>
            <div className="faq-item">
              <h3>Is the scorecard free and is there any obligation?</h3>
              <p>Yes, it is free, and there is no obligation. The discovery call is optional. If you book one, BEG will map your exact systems and show you what the iSolved Connector for Claude would complete for your team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            See the platform behind your result:{' '}
            <Link href="/services/hcm-software/ai-connector" style={{ color: '#ECAC60', fontWeight: '600' }}>the iSolved Connector for Claude</Link>
            {' '}or estimate the payback with the{' '}
            <Link href="/services/hcm-software/roi-calculator" style={{ color: '#ECAC60', fontWeight: '600' }}>HCM ROI calculator</Link>
            .
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What does the AI HR readiness scorecard measure?', acceptedAnswer: { '@type': 'Answer', text: 'It measures how ready your HR and payroll operation is to benefit from AI that completes tasks, looking at how many systems you run, how manual your work is, how connected your data is, and how ready your team is. It returns a 0 to 100 score and a tailored recommendation.' } },
              { '@type': 'Question', name: 'What makes iSolved different on AI?', acceptedAnswer: { '@type': 'Answer', text: 'iSolved is the only HCM platform with a generally available Connector for Claude, live since June 2026. It completes real HR tasks through conversation rather than just answering questions, and BEG implements, configures, and supports it.' } },
              { '@type': 'Question', name: 'Is the scorecard free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The scorecard is free and there is no obligation. The discovery call is optional.' } },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
              { '@type': 'ListItem', position: 3, name: 'AI Readiness Scorecard', item: 'https://beghr.com/services/hcm-software/ai-readiness-scorecard' },
            ],
          }),
        }}
      />
    </>
  );
}
