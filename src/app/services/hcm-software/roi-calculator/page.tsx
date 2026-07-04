import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import HCMROICalculator from '@/components/HCMROICalculator';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'isolved HCM ROI Calculator | Instant Price Quote | BEG',
  description: 'Calculate the ROI of moving to one connected HCM platform. Estimate admin hours reclaimed, error costs avoided, and annual value vs.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/roi-calculator' },
  openGraph: {
    title: 'isolved HCM ROI Calculator | Instant Price Quote | BEG',
    description: 'Estimate the ROI of consolidating onto one HCM platform: admin hours reclaimed, errors avoided, and annual value. Forrester documented 330% ROI for isolved clients.',
    url: 'https://www.beghr.com/services/hcm-software/roi-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved HCM ROI Calculator | Instant Price Quote | BEG', description: 'Estimate the ROI of consolidating onto one HCM platform. Forrester documented 330% ROI for isolved clients.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


export default function HCMROICalculatorPage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background: '#000000', color: '#ffffff', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · ROI Calculator</p>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              isolved HCM ROI Calculator
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '620px', margin: '0 auto' }}>
              Every disconnected system is a reconciliation, a double entry, and another place for payroll to go wrong. Enter your headcount, how many systems you run, and your weekly admin hours to see what one connected platform could give back. Forrester documented a 330% ROI for isolved clients.
            </p>
          </div>
        </div>
      </section>

      {/* EMAIL OPT-IN (under the H1) */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Prefer It In Your Inbox?</p>
            <h2>Want your ROI summary emailed to you?</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <LeadCaptureForm
              toolName="HCM ROI Summary"
              toolDescription="Enter your details and we will send your isolved HCM ROI summary plus a tailored breakdown for your company."
              assetLabel="Email me my ROI summary"
              calendlyLink="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              followupText="your payroll and HR needs"
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR + SUPPORTING SECTIONS */}
      <HCMROICalculator />

      {/* SCARCITY CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Ready to See Your Real Number?</p>
            <h2 style={{ color: '#ffffff', fontSize: '1.7rem', fontWeight: '800', marginBottom: '1rem' }}>
              Get a configured ROI review in 15 minutes.
            </h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
              The calculator uses conservative averages. Your BEG contact will map your exact systems, workflows, and headcount and show you the real return of moving to one platform that BEG implements and supports for you.
            </p>
            <PricingCta service="hcm-software" subline={false} />
            <p style={{ color: '#666666', fontSize: '0.82rem', marginTop: '0.85rem' }}>
              No commitment. No sales pressure. Just the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about HCM software ROI</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How is HCM software ROI calculated?</h3>
              <p>The biggest returns from an HCM platform come from consolidation, not the software license. This calculator estimates three things: the admin hours reclaimed when payroll, HR, time, and benefits live on one connected platform instead of several disconnected tools, the dollar value of that reclaimed time at a loaded labor rate, and the error and double-entry cost avoided by removing manual data transfer between systems.</p>
            </div>
            <div className="faq-item">
              <h3>What is the documented ROI of isolved?</h3>
              <p>Forrester documented an average 330% ROI for isolved clients. The return comes from eliminating reconciliation between systems, reducing HR admin time, automating compliance, and cutting payroll errors. The exact figure for your business depends on your headcount, how many systems you run today, and how much manual work your team does now.</p>
            </div>
            <div className="faq-item">
              <h3>Why do separate HR and payroll systems cost so much?</h3>
              <p>The average HR team manages four or more systems for payroll, time, benefits, onboarding, and recruiting. Every system is a separate login, a separate invoice, and a reconciliation point. Data gets re-keyed by hand between tools, which is where most payroll errors begin. The cost is rarely tracked in one line item, which is why it stays invisible until you add it up.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG implement and support the platform, or just sell it?</h3>
              <p>BEG is an authorized isolved partner that implements the platform, configures it for your industry, and supports you year-round. You are not handed a login and left to figure it out, and you are never alone in a support ticket queue. This is the difference between buying software and getting a managed outcome.</p>
            </div>
            <div className="faq-item">
              <h3>What makes isolved different from ADP, Gusto, Paylocity, or Rippling?</h3>
              <p>isolved puts payroll, HR, time, and benefits on a single connected platform, and it is the only HCM platform with a generally available Connector for Claude, which lets your team complete real HR tasks through a Claude conversation. Combined with BEG-managed implementation and local support, that is a combination no competitor on this list currently offers.</p>
            </div>
            <div className="faq-item">
              <h3>How accurate is this estimate?</h3>
              <p>It uses conservative industry averages and is meant to size the opportunity, not quote it. Your discovery call replaces the estimate with a configured ROI based on your exact systems, states, pay schedules, and team. There is no commitment required to get that number.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HUB BACK-LINK */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
            Want the full platform overview?{' '}
            <Link href="/services/hcm-software" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all isolved HCM software
            </Link>
            {' '}or compare your current payroll spend with the{' '}
            <Link href="/services/managed-payroll/cost-calculator" style={{ color: '#ECAC60', fontWeight: '600' }}>
              managed payroll cost calculator
            </Link>
            .
          </p>
        </div>
      </section>

      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How is HCM software ROI calculated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HCM ROI comes mainly from consolidation: admin hours reclaimed by putting payroll, HR, time, and benefits on one connected platform, the dollar value of that time at a loaded labor rate, and the error and double-entry cost avoided by removing manual data transfer between systems.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the documented ROI of isolved?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Forrester documented an average 330% ROI for isolved clients, driven by eliminating reconciliation between systems, reducing HR admin time, automating compliance, and cutting payroll errors.',
                },
              },
              {
                '@type': 'Question',
                name: 'What makes isolved different from ADP, Gusto, Paylocity, or Rippling?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'isolved puts payroll, HR, time, and benefits on one connected platform and is the only HCM platform with a generally available Connector for Claude. Combined with BEG-managed implementation and local support, that is a combination competitors do not currently offer.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does BEG implement and support isolved or just sell it?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BEG is an authorized isolved partner that implements the platform, configures it for your industry, and supports you year-round, so you get a managed outcome rather than just a software login.',
                },
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
              { '@type': 'ListItem', position: 3, name: 'ROI Calculator', item: 'https://www.beghr.com/services/hcm-software/roi-calculator' },
            ],
          }),
        }}
      />
    </>
  );
}
