import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';

export const metadata: Metadata = {
  title: 'isolved HCM for Senior Care | Instant Price Quote | BEG',
  description: 'isolved HCM for senior care. 24/7 shift coverage, shift differentials, credential tracking, and multi-facility caregiver management on one platform.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/senior-care' },
  openGraph: {
    title: 'isolved HCM for Senior Care | Instant Price Quote | BEG',
    description: 'isolved HCM for senior care. 24/7 shift coverage, shift differentials, credential tracking, and multi-facility caregiver management on one platform.',
    url: 'https://www.beghr.com/services/hcm-software/senior-care',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved HCM for Senior Care | Instant Price Quote | BEG', description: 'isolved HCM for senior care. 24/7 shift coverage, shift differentials, credential tracking, and multi-facility caregiver management on one platform.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function HCMSeniorCarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/healthcare.svg"
      imageAlt="Senior care provider using isolved HCM platform"
      eyebrow="HCM Software · Senior Care"
      title="One platform for every shift, every differential, and every facility."
      description="Senior care HR means 24/7 shift coverage, shift differentials, constant caregiver turnover, credential tracking, and multiple facilities. isolved People Cloud handles all of it in one connected platform. Implemented and supported by BEG."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: 'isolved', label: 'People Cloud, all-in-one HCM' },
        { value: '330%', label: 'ROI documented by Forrester' },
        { value: 'BEG', label: 'Implements and supports your platform' },
      ]}
    >

      {/* TL;DR */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="tldr reveal" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>isolved is the best HCM platform for senior care because it schedules 24/7 coverage, applies shift differentials automatically, tracks caregiver credentials, and manages multiple facilities in one system. BEG configures and supports it for your communities, so payroll, HR, time, and benefits all live in one place.</p>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Disconnected Systems</p>
            <h2>What are fragmented HR tools actually costing your communities?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>5+ tools</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average systems a senior care operator uses for HR</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Scheduling in one system, payroll in another, credential records in a binder, benefits in a fourth. Silos cost time and create errors on every shift.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Differentials</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>And overnight shift pay calculated automatically in isolved</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Nights, weekends, and holiday differentials are where manual payroll breaks. The isolved platform applies the right rate by shift and facility every pay period.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>330%</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average ROI documented by Forrester for isolved clients</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Senior care operators see fast ROI when accurate shift capture and credential tracking cut overtime leakage and compliance risk.</div>
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
            <p className="eyebrow">Why isolved + BEG</p>
            <h2>What is the best HCM software for a senior care operator?</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444', maxWidth: '700px', margin: '1.5rem auto' }}>
            The best HCM software for senior care is one that handles round-the-clock scheduling, shift differentials, and credential tracking in a single system. The isolved platform for senior care manages 24/7 coverage, differential pay, caregiver onboarding and turnover, multi-facility time capture, benefits administration, and talent management in one connected platform. BEG implements and maintains it for your specific community structure.
          </p>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Platform assessment', body: 'BEG reviews your current HR stack, headcount, shift structure, and facilities. You get a clear implementation plan and timeline.' },
              { num: '02', title: 'BEG-managed implementation', body: 'We configure isolved for your shifts, differentials, credential rules, and facilities, and we manage go-live without interrupting payroll.' },
              { num: '03', title: 'Ongoing BEG support', body: 'Your BEG contact manages new facilities, shift rule changes, and constant caregiver onboarding year-round. You are never sent to a support queue.' },
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
                body: 'BEG manages your full isolved implementation, including configuration, data migration, training, and go-live, as part of the relationship. You are not paying a separate professional services team to stand up shift rules and credential tracking. Implementation is what BEG does.',
              },
              {
                badge: 'Bonus 02',
                title: 'isolved Connector for Claude. HR tasks through AI.',
                objection: 'Common objection: "Every HCM vendor claims to have AI now."',
                body: 'The isolved Connector for Claude lets your team check coverage gaps, pull credential expiration reports, and update employee records all through a Claude AI conversation. Less time in the system, more time with residents. The isolved Connector for Claude is generally available in the Claude directory today, not a roadmap item, not a beta feature.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact. Not a support ticket queue.',
                objection: 'Common objection: "Software vendors disappear after you sign."',
                body: 'Your BEG contact manages your isolved platform ongoing. When you open a new facility, change a differential, or onboard a new caregiver class, you call BEG. Not a 1-800 number. Not a ticket queue. Your account contact.',
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG times implementation to your current platform contract renewal. Most senior care operators complete the isolved transition in 60 to 90 days with zero payroll interruption. Miss that window and you are paying for two platforms or locked in for another year. BEG will help you plan around your renewal date.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Claude AI Advantage</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The only HCM platform with a live Claude AI integration.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>isolved launched the Connector for Claude in June 2026. It is the only HCM integration that lets your team complete actual HR tasks through Claude AI, not just get answers, but take action. Paycom, Paylocity, and ADP have no equivalent. Companies that build their HR automation workflows around it now will compound that advantage over time.</p>
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
              <h3>Can isolved handle 24/7 shift coverage and differentials?</h3>
              <p>Yes. The isolved platform schedules around-the-clock coverage and applies night, weekend, and holiday differentials automatically by shift and facility. BEG configures your differential rules so every caregiver is paid correctly.</p>
            </div>
            <div className="faq-item">
              <h3>Does isolved track caregiver credentials and expirations?</h3>
              <p>Yes. The isolved platform stores caregiver credentials and flags upcoming expirations so you stay survey-ready. BEG configures which credentials each role requires and how renewals are tracked across every facility.</p>
            </div>
            <div className="faq-item">
              <h3>How does isolved help with caregiver turnover?</h3>
              <p>isolved streamlines onboarding so new caregivers are set up for pay, benefits, and scheduling quickly, even at high volume. BEG configures repeatable onboarding workflows so constant hiring does not overwhelm your team.</p>
            </div>
            <div className="faq-item">
              <h3>What is the isolved Connector for Claude?</h3>
              <p>It is the only live AI integration in an HCM platform that completes actual HR tasks. Instead of just answering questions, your team can run payroll, pull credential reports, and update records through a Claude AI conversation. Available now in Claude&apos;s directory.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG support us after implementation?</h3>
              <p>Your BEG contact manages your isolved platform year-round. New facilities, differential changes, and constant caregiver onboarding are all handled by one contact, with no ticket queue.</p>
            </div>
            <div className="faq-item">
              <h3>What does isolved cost?</h3>
              <p>isolved is priced per employee per month based on your headcount and selected modules. BEG provides a transparent cost comparison against your current platform on your discovery call.</p>
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
              { '@type': 'Question', name: 'Can isolved handle 24/7 shift coverage and differentials?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The isolved platform schedules around-the-clock coverage and applies night, weekend, and holiday differentials automatically by shift and facility. BEG configures the rules.' } },
              { '@type': 'Question', name: 'Does isolved track caregiver credentials and expirations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The isolved platform stores caregiver credentials and flags upcoming expirations so you stay survey-ready across every facility.' } },
              { '@type': 'Question', name: 'What is the isolved Connector for Claude?', acceptedAnswer: { '@type': 'Answer', text: 'The only live AI integration in an HCM platform that completes actual HR tasks through Claude AI. Available now.' } },
              { '@type': 'Question', name: 'How does BEG support us after implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Your BEG contact manages your isolved platform year-round. One contact, no ticket queue.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Senior Care', item: 'https://www.beghr.com/services/hcm-software/senior-care' },
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
            url: 'https://www.beghr.com/services/hcm-software/senior-care',
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
