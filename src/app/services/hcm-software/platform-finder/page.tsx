import { Metadata } from 'next';
import Link from 'next/link';
import HCMPlatformFinder from '@/components/HCMPlatformFinder';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Which HCM Platform Fits You? | Free Finder | BEG',
  description: 'Answer 4 quick questions about your size, industry, current system, and priorities to get a tailored HCM software recommendation and your best next step from BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/platform-finder' },
  openGraph: {
    title: 'Which HCM Platform Fits You? | Free Finder | BEG',
    description: 'Four questions, one tailored HCM recommendation. Find the right fit for your size, industry, and current system.',
    url: 'https://beghr.com/services/hcm-software/platform-finder',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Which HCM Platform Fits You? | Free Finder | BEG', description: 'Four questions, one tailored HCM recommendation for your business.', images: ['https://beghr.com/assets/og-image.png'] },
};

export default function PlatformFinderPage() {
  return (
    <>
      <section className="section" style={{ background: '#000000', color: '#ffffff', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Platform Finder</p>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              Which HCM platform fits you?
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '600px', margin: '0 auto' }}>
              The right HCM platform depends on your size, your industry, what you run today, and what matters most to you. Answer 4 quick questions and get a tailored recommendation plus your best next step.
            </p>
          </div>
        </div>
      </section>

      <HCMPlatformFinder />

      {/* OPTIONAL EMAIL OPT-IN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Prefer It In Your Inbox?</p>
            <h2>Want your recommendation emailed to you?</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <LeadCaptureForm
              toolName="HCM Platform Recommendation"
              toolDescription="Enter your details and we will send your tailored HCM recommendation with the comparison links for your size and industry."
              assetLabel="Email me my recommendation"
              calendlyLink="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              followupText="your payroll and HR needs"
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>About the HCM platform finder</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does the platform finder work?</h3>
              <p>You answer four questions: your team size, your current payroll and HR system, your top priority, and your industry. Based on your answers, the finder gives you a tailored recommendation and links to the most relevant comparison and industry pages for your situation.</p>
            </div>
            <div className="faq-item">
              <h3>Why does it recommend iSolved with BEG?</h3>
              <p>For growing and mid-market companies that want one connected platform, managed support, and AI that completes tasks, iSolved plus BEG is a strong fit. iSolved brings payroll, HR, time, and benefits onto one platform, it is the only HCM with a Connector for Claude, and BEG implements and supports it for you. The right choice still depends on your needs, which is what the discovery call confirms.</p>
            </div>
            <div className="faq-item">
              <h3>Is this an unbiased tool?</h3>
              <p>BEG is an authorized iSolved partner, so the finder is built around where iSolved fits well. It is honest about that. The comparison pages it links to lay out competitor strengths fairly, so you can make your own informed decision.</p>
            </div>
            <div className="faq-item">
              <h3>What happens after I get a recommendation?</h3>
              <p>Nothing automatic. You can explore the linked comparison and industry pages, estimate your payback with the ROI calculator, or book an optional 15-minute call where BEG confirms the right configuration for your size, industry, and current system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Prefer to start with the numbers? Try the{' '}
            <Link href="/services/hcm-software/roi-calculator" style={{ color: '#ECAC60', fontWeight: '600' }}>HCM ROI calculator</Link>
            {' '}or the{' '}
            <Link href="/services/hcm-software/ai-readiness-scorecard" style={{ color: '#ECAC60', fontWeight: '600' }}>AI HR readiness scorecard</Link>
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
              { '@type': 'Question', name: 'How does the HCM platform finder work?', acceptedAnswer: { '@type': 'Answer', text: 'You answer four questions about your team size, current payroll and HR system, top priority, and industry. The finder returns a tailored recommendation and links to the most relevant comparison and industry pages.' } },
              { '@type': 'Question', name: 'Why does it recommend iSolved with BEG?', acceptedAnswer: { '@type': 'Answer', text: 'For growing and mid-market companies wanting one connected platform, managed support, and AI that completes tasks, iSolved plus BEG fits well. iSolved unifies payroll, HR, time, and benefits, is the only HCM with a Connector for Claude, and BEG implements and supports it.' } },
              { '@type': 'Question', name: 'Is the finder unbiased?', acceptedAnswer: { '@type': 'Answer', text: 'BEG is an authorized iSolved partner, so the finder is built around where iSolved fits well and is honest about that. The comparison pages it links to present competitor strengths fairly.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Platform Finder', item: 'https://beghr.com/services/hcm-software/platform-finder' },
            ],
          }),
        }}
      />
    </>
  );
}
