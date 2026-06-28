import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';

export const metadata: Metadata = {
  title: 'iSolved HCM for Childcare Centers | BEG',
  description: 'iSolved HCM for childcare. Hourly staff, ratio and licensing compliance, multi-center management, and subsidy funding on one connected platform.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/childcare' },
  openGraph: {
    title: 'iSolved HCM for Childcare Centers | BEG',
    description: 'iSolved HCM for childcare. Hourly staff, ratio and licensing compliance, multi-center management, and subsidy funding on one connected platform.',
    url: 'https://beghr.com/services/hcm-software/childcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved HCM for Childcare Centers | BEG', description: 'iSolved HCM for childcare. Hourly staff, ratio and licensing compliance, multi-center management, and subsidy funding on one connected platform.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function HCMChildcarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/nonprofit.svg"
      imageAlt="Childcare center using iSolved HCM platform"
      eyebrow="HCM Software · Childcare"
      title="One platform for every classroom, every ratio, and every center."
      description="Childcare HR means hourly staff, strict ratio and licensing compliance, multiple centers, and subsidy funding to track. iSolved People Cloud handles all of it in one connected platform. Implemented and supported by BEG."
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>iSolved is the best HCM platform for childcare centers because it manages hourly staff, supports ratio and licensing compliance, and runs multiple centers in one system. BEG configures and supports it for your centers, so payroll, HR, time, and benefits all live in one place.</p>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Disconnected Systems</p>
            <h2>What are fragmented HR tools actually costing your centers?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>5+ tools</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average systems a multi-center childcare operator uses for HR</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Time clocks in one system, payroll in another, certifications in a binder, benefits in a fourth. Silos cost time and create errors on every pay run.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Ratios</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>And licensing records tracked alongside payroll in iSolved</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Staffing to ratio and keeping certifications current is where manual tracking breaks. iSolved keeps staff records and credentials with their pay.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>330%</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average ROI documented by Forrester for iSolved clients</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Childcare operators see fast ROI when accurate hourly time capture and credential tracking cut payroll corrections and licensing risk.</div>
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
            <h2>What is the best HCM software for a childcare center?</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444', maxWidth: '700px', margin: '1.5rem auto' }}>
            The best HCM software for childcare is one that handles hourly staff, credential tracking, and multiple centers in a single system. iSolved for childcare manages hourly time capture, staff certifications, multi-center reporting, benefits administration, and talent management in one connected platform. BEG implements and maintains it for your specific center structure, including how you track subsidy-funded enrollment cost.
          </p>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Platform assessment', body: 'BEG reviews your current HR stack, headcount, centers, and licensing requirements. You get a clear implementation plan and timeline.' },
              { num: '02', title: 'BEG-managed implementation', body: 'We configure iSolved for your hourly pay rules, credential tracking, and centers, and we manage go-live without interrupting payroll.' },
              { num: '03', title: 'Ongoing BEG support', body: 'Your BEG contact manages new centers, credential renewals, and new hires year-round. You are never sent to a support queue.' },
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
                body: 'BEG manages your full iSolved implementation, including configuration, data migration, training, and go-live, as part of the relationship. You are not paying a separate professional services team to stand up hourly pay and credential tracking. Implementation is what BEG does.',
              },
              {
                badge: 'Bonus 02',
                title: 'iSolved Connector for Claude. HR tasks through AI.',
                objection: 'Common objection: "Every HCM vendor claims to have AI now."',
                body: 'The iSolved Connector for Claude lets your directors pull staffing reports by center, check credential expirations, and update employee records all through a Claude AI conversation. Less time in the system, more time in the classroom. The iSolved Connector for Claude is generally available in the Claude directory today, not a roadmap item, not a beta feature.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact. Not a support ticket queue.',
                objection: 'Common objection: "Software vendors disappear after you sign."',
                body: 'Your BEG contact manages your iSolved platform ongoing. When you open a new center, renew certifications, or onboard new staff, you call BEG. Not a 1-800 number. Not a ticket queue. Your account contact.',
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG times implementation to your current platform contract renewal. Most childcare operators complete the iSolved transition in 60 to 90 days with zero payroll interruption. Miss that window and you are paying for two platforms or locked in for another year. BEG will help you plan around your renewal date.</p>
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
              <h3>Can iSolved help us stay compliant with ratio and licensing rules?</h3>
              <p>Yes. iSolved keeps staff records, certifications, and time in one place so you can staff to ratio and stay licensing-ready. BEG configures which credentials each role requires and tracks renewals across every center.</p>
            </div>
            <div className="faq-item">
              <h3>Does iSolved work for a multi-center childcare operator?</h3>
              <p>Yes. iSolved runs multiple centers in one platform while keeping each location distinct for reporting and cost tracking. BEG configures the structure to match how you operate and fund each center.</p>
            </div>
            <div className="faq-item">
              <h3>Can iSolved handle our hourly classroom staff?</h3>
              <p>Yes. iSolved captures hourly time, applies overtime rules, and flows it straight into payroll for teachers, aides, and floaters. BEG configures your pay rules so every hourly employee is paid correctly.</p>
            </div>
            <div className="faq-item">
              <h3>What is the iSolved Connector for Claude?</h3>
              <p>It is the only live AI integration in an HCM platform that completes actual HR tasks. Instead of just answering questions, your directors can run payroll, pull staffing reports, and update records through a Claude AI conversation. Available now in Claude&apos;s directory.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG support us after implementation?</h3>
              <p>Your BEG contact manages your iSolved platform year-round. New centers, credential renewals, and new hires are all handled by one contact, with no ticket queue.</p>
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
              { '@type': 'Question', name: 'Can iSolved help us stay compliant with ratio and licensing rules?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. iSolved keeps staff records, certifications, and time in one place so you can staff to ratio and stay licensing-ready. BEG configures and tracks renewals.' } },
              { '@type': 'Question', name: 'Does iSolved work for a multi-center childcare operator?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. iSolved runs multiple centers in one platform while keeping each location distinct for reporting and cost tracking.' } },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
              { '@type': 'ListItem', position: 3, name: 'Childcare', item: 'https://beghr.com/services/hcm-software/childcare' },
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
            url: 'https://beghr.com/services/hcm-software/childcare',
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
