import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';

export const metadata: Metadata = {
  title: 'iSolved HCM for Home Health | BEG',
  description: 'iSolved HCM for home health. Visit-based pay, EVV, travel time and mileage, per-visit rates, and multi-state caregivers on one connected platform.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/home-health' },
  openGraph: {
    title: 'iSolved HCM for Home Health | BEG',
    description: 'iSolved HCM for home health. Visit-based pay, EVV, travel time and mileage, per-visit rates, and multi-state caregivers on one connected platform.',
    url: 'https://www.beghr.com/services/hcm-software/home-health',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved HCM for Home Health | BEG', description: 'iSolved HCM for home health. Visit-based pay, EVV, travel time and mileage, per-visit rates, and multi-state caregivers on one connected platform.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function HCMHomeHealthPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/healthcare.svg"
      imageAlt="Home health agency using iSolved HCM platform"
      eyebrow="HCM Software · Home Health"
      title="One platform for every visit, every mile, and every caregiver."
      description="Home health HR means visit-based pay, electronic visit verification, travel time and mileage, per-visit rates, and caregivers working across multiple states. iSolved People Cloud handles all of it in one connected platform. Implemented and supported by BEG."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: 'iSolved', label: 'People Cloud, all-in-one HCM' },
        { value: '330%', label: 'ROI documented by Forrester' },
        { value: 'BEG', label: 'Implements and supports your platform' },
      ]}
    >

      {/* TL;DR */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="tldr reveal" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>iSolved is the best HCM platform for home health because it handles visit-based and per-visit pay, captures travel time and mileage, and supports caregivers working across multiple states. BEG configures and supports it for your agency, so payroll, HR, time, and benefits all live in one place.</p>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Disconnected Systems</p>
            <h2>What are fragmented HR tools actually costing your agency?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>5+ tools</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average systems a home health agency uses for HR</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Visit verification in one system, payroll in another, mileage on paper, benefits in a fourth. Silos cost time and create errors on every visit.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Per-visit</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Pay, travel, and mileage calculated automatically in iSolved</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Visit-based pay plus travel time is where manual payroll breaks. iSolved applies per-visit rates, travel, and mileage every pay period.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>330%</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average ROI documented by Forrester for iSolved clients</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Home health agencies see fast ROI when accurate visit capture and multi-state tax handling cut payroll corrections and compliance risk.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* PLATFORM FIT */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why iSolved + BEG</p>
            <h2>What is the best HCM software for a home health agency?</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444', maxWidth: '700px', margin: '1.5rem auto' }}>
            The best HCM software for home health is one that handles visit-based pay, travel and mileage, and multi-state caregivers in a single system. iSolved for home health manages per-visit rates, travel time, mileage reimbursement, multi-state payroll and tax, benefits administration, and talent management in one connected platform. BEG implements and maintains it for your specific agency model.
          </p>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Platform assessment', body: 'BEG reviews your current HR stack, headcount, pay model, and the states you operate in. You get a clear implementation plan and timeline.' },
              { num: '02', title: 'BEG-managed implementation', body: 'We configure iSolved for your per-visit rates, travel and mileage rules, and multi-state tax, and we manage go-live without interrupting payroll.' },
              { num: '03', title: 'Ongoing BEG support', body: 'Your BEG contact manages new states, rate changes, and caregiver onboarding year-round. You are never sent to a support queue.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things your current HCM vendor probably cannot offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'BEG implementation included. No professional services invoice.',
                objection: 'Common objection: "HCM implementations are expensive and take forever."',
                body: 'BEG manages your full iSolved implementation, including configuration, data migration, training, and go-live, as part of the relationship. You are not paying a separate professional services team to stand up per-visit pay and multi-state tax. Implementation is what BEG does.',
              },
              {
                badge: 'Bonus 02',
                title: 'iSolved Connector for Claude. HR tasks through AI.',
                objection: 'Common objection: "Every HCM vendor claims to have AI now."',
                body: 'The iSolved Connector for Claude lets your team pull visit and mileage reports, update caregiver records, and check multi-state pay all through a Claude AI conversation. Less time in the system, more time scheduling care. The iSolved Connector for Claude is generally available in the Claude directory today, not a roadmap item, not a beta feature.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact. Not a support ticket queue.',
                objection: 'Common objection: "Software vendors disappear after you sign."',
                body: 'Your BEG contact manages your iSolved platform ongoing. When you expand into a new state, change per-visit rates, or onboard new caregivers, you call BEG. Not a 1-800 number. Not a ticket queue. Your account contact.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Contract Renewal Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before your current contract auto-renews.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG times implementation to your current platform contract renewal. Most home health agencies complete the iSolved transition in 60 to 90 days with zero payroll interruption. Miss that window and you are paying for two platforms or locked in for another year. BEG will help you plan around your renewal date.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Claude AI Advantage</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The only HCM platform with a live Claude AI integration.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>iSolved launched the Connector for Claude in June 2026. It is the only HCM integration that lets your team complete actual HR tasks through Claude AI, not just get answers, but take action. Paycom, Paylocity, and ADP have no equivalent. Companies that build their HR automation workflows around it now will compound that advantage over time.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>We will show you the platform, walk through your current setup, and give you a no-obligation cost comparison.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can iSolved handle visit-based and per-visit pay?</h3>
              <p>Yes. iSolved calculates per-visit rates, travel time, and mileage automatically, so caregivers are paid accurately for every visit. BEG configures your rate structure and reimbursement rules during implementation.</p>
            </div>
            <div className="faq-item">
              <h3>Does iSolved work with electronic visit verification?</h3>
              <p>Yes. iSolved captures visit time that supports your electronic visit verification requirements and flows it straight into payroll. BEG configures the time capture so verified visits convert cleanly to pay.</p>
            </div>
            <div className="faq-item">
              <h3>Can iSolved pay caregivers who work across multiple states?</h3>
              <p>Yes. iSolved handles multi-state payroll and tax automatically, so caregivers crossing state lines are taxed and paid correctly. BEG configures each state you operate in and keeps the rules current.</p>
            </div>
            <div className="faq-item">
              <h3>What is the iSolved Connector for Claude?</h3>
              <p>It is the only live AI integration in an HCM platform that completes actual HR tasks. Instead of just answering questions, your team can run payroll, pull visit reports, and update records through a Claude AI conversation. Available now in Claude&apos;s directory.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG support us after implementation?</h3>
              <p>Your BEG contact manages your iSolved platform year-round. New states, rate changes, and caregiver onboarding are all handled by one contact, with no ticket queue.</p>
            </div>
            <div className="faq-item">
              <h3>What does iSolved cost?</h3>
              <p>iSolved is priced per employee per month based on your headcount and selected modules. BEG provides a transparent cost comparison against your current platform on your discovery call.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Can iSolved handle visit-based and per-visit pay?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. iSolved calculates per-visit rates, travel time, and mileage automatically. BEG configures your rate structure and reimbursement rules.' } },
              { '@type': 'Question', name: 'Can iSolved pay caregivers who work across multiple states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. iSolved handles multi-state payroll and tax automatically so caregivers crossing state lines are taxed and paid correctly.' } },
              { '@type': 'Question', name: 'What is the iSolved Connector for Claude?', acceptedAnswer: { '@type': 'Answer', text: 'The only live AI integration in an HCM platform that completes actual HR tasks through Claude AI. Available now.' } },
              { '@type': 'Question', name: 'How does BEG support us after implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Your BEG contact manages your iSolved platform year-round. One contact, no ticket queue.' } },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
              { '@type': 'ListItem', position: 3, name: 'Home Health', item: 'https://www.beghr.com/services/hcm-software/home-health' },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
            url: 'https://www.beghr.com/services/hcm-software/home-health',
          }),
        }}
      />

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>Free tool: calculate overtime the right way</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Bonuses and multiple pay rates change the math. Enter the week and see the correct FLSA overtime owed. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <OvertimePayCalculator />
    </ServicePage>
  );
}
