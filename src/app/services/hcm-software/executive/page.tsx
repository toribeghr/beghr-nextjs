import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'isolved HCM for Executive Teams | Instant Quote | BEG',
  description: 'isolved HCM for executive compensation. Deferred comp tracking, complex benefits administration, and discreet management. Implemented by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/executive' },
  openGraph: {
    title: "isolved HCM for Executive Teams | Instant Quote | BEG",
    description: "isolved HCM for executive compensation. Deferred comp tracking, complex benefits administration, and discreet management. Implemented by BEG.",
    url: "https://www.beghr.com/services/hcm-software/executive",
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: "isolved HCM for Executive Teams | Instant Quote | BEG", description: "isolved HCM for executive compensation. Deferred comp tracking, complex benefits administration, and discreet management. Implemented by BEG.", images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hcm-executive');

export default function HCMExecutivePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/executive.svg"
      imageAlt="Organization using isolved HCM for executive compensation management"
      eyebrow="HCM Software · Executive"
      title="Executive compensation needs a platform, not a spreadsheet."
      description="Deferred compensation plans, non-qualified benefits, 409A compliance, and restricted access requirements make executive HR a category of its own. isolved People Cloud handles it correctly, implemented and maintained by BEG with full confidentiality controls."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="hcm-software" />}
      heroStats={[
        { value: 'isolved', label: 'People Cloud, all-in-one HCM' },
        { value: '330%', label: 'ROI documented by Forrester' },
        { value: 'BEG', label: 'Implements and supports your platform' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Disconnected Systems</p>
            <h2>What are fragmented HR tools actually costing your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>NQDC plans</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>That must integrate cleanly with payroll tax processing</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Non-qualified deferred compensation distributions have specific tax timing requirements. The platform handles the withholding automatically.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>409A</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Valuation compliance tracked within the same platform</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>isolved maintains the documentation trail for 409A compliance without requiring a separate system or manual recordkeeping.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>330%</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average ROI documented by Forrester for isolved clients</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Organizations with complex executive compensation see high ROI from elimination of manual tracking and reduced external consultant fees.</div>
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
            <h2>Everything your HR team needs. One platform. One contact.</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444', maxWidth: '700px', margin: '1.5rem auto' }}>
            isolved for executive teams manages NQDC plan distributions, 409A compliance documentation, deferred compensation elections, executive benefit administration, and restricted-access payroll processing, all in one platform with BEG-managed confidentiality controls.
          </p>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Platform assessment', body: 'BEG reviews your current HR stack, headcount, and compliance requirements. You get a clear implementation plan and timeline.' },
              { num: '02', title: 'BEG-managed implementation', body: 'We configure isolved for your specific structure, compensation, benefits, compliance, and workflows, and manage go-live.' },
              { num: '03', title: 'Ongoing BEG support', body: 'Your BEG contact manages updates, configuration changes, and compliance adjustments year-round. You are never sent to a support queue.' },
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
                title: 'BEG implementation included, no professional services invoice.',
                objection: 'Common objection: "HCM implementations are expensive and take forever."',
                body: 'BEG manages your full isolved implementation, configuration, data migration, training, and go-live, as part of the relationship. You are not paying a separate professional services team $50,000 to stand up the system. Implementation is what BEG does.',
              },
              {
                badge: 'Bonus 02',
                title: 'isolved Connector for Claude, HR tasks through AI.',
                objection: 'Common objection: "Every HCM vendor claims to have AI now."',
                body: 'The isolved Connector for Claude lets authorized HR team members access executive compensation data, pull reports, and manage benefit events, through Claude AI, with full access controls intact. No competitor offers this. The isolved Connector for Claude is generally available in the Claude directory today - not a roadmap item, not a beta feature.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact. Not a support ticket queue.',
                objection: 'Common objection: "Software vendors disappear after you sign."',
                body: 'Your BEG contact manages your isolved platform ongoing. When compliance requirements change, when you add a new location, when you need a new workflow configured, you call BEG. Not a 1-800 number. Not a ticket queue. Your account contact.',
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG handles executive data migration and access control configuration as part of implementation. All executive compensation data is restricted to authorized users only, separate from standard employee records. Miss that window and you are paying for two platforms or locked in for another year. BEG will help you plan around your renewal date.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Claude AI Advantage</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The only HCM platform with a live Claude AI integration.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>isolved launched the Connector for Claude in June 2026. It is the only HCM integration that lets your team complete actual HR tasks through Claude AI, not just get answers, but take action. Paycom, Paylocity, and ADP have no equivalent. Companies that build their HR automation workflows around it now will compound that advantage over time.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="hcm-software" subline={false} />
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
              <h3>What does isolved handle for our organization?</h3>
              <p>C-suite executives, board members, senior vice presidents, and other leadership with non-qualified deferred compensation, equity, or complex benefit arrangements.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to migrate away from our current platform?</h3>
              <p>Yes, isolved replaces your current HCM platform. BEG manages the full migration: data transfer, configuration, testing, and training. Most clients complete the transition in 60–90 days with zero payroll interruption.</p>
            </div>
            <div className="faq-item">
              <h3>What is the isolved Connector for Claude?</h3>
              <p>It is the only live AI integration in an HCM platform that completes actual HR tasks. Instead of just answering questions, your team can run payroll, pull reports, and update records through a Claude AI conversation. Available now in Claude&apos;s directory.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG support us after implementation?</h3>
              <p>Your BEG contact manages your isolved platform year-round. Configuration changes, compliance updates, new hires, new locations, one contact, no ticket queue.</p>
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
              { '@type': 'Question', name: 'What is the isolved Connector for Claude?', acceptedAnswer: { '@type': 'Answer', text: 'The only live AI integration in an HCM platform that completes actual HR tasks through Claude AI. Available now.' } },
              { '@type': 'Question', name: 'Do we have to migrate from our current platform?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages the full migration in 60-90 days with no payroll interruption.' } },
              { '@type': 'Question', name: 'How does BEG support us after implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Your BEG contact manages your isolved platform year-round. One contact, no ticket queue.' } },
            ],
          }),
        }}
      />

    </ServicePage>
  );
}
