import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM Software | Authorized iSolved Reseller | BEG',
  description: 'iSolved People Cloud via BEG. HR, payroll, benefits, and AI workforce tools in one platform. 330% documented ROI. Now with iSolved Connector for Claude. BEG implements and supports.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software',
  },
};

const CALENDLY = getCalendlyLink('hcm-software');

export default function HCMSoftwarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/hcm-software.webp"
      eyebrow="HCM Software · Powered by iSolved"
      title="You bought HR software to make life easier. Why is it creating more work?"
      description="Most HR platforms require constant manual intervention, expensive add-on modules, and a support ticket every time something breaks. iSolved People Cloud puts payroll, HR, time, and benefits on one platform. BEG implements it, configures it for your industry, and supports you year-round."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '330%', label: 'ROI documented by Forrester' },
        { value: '7M+', label: 'Employees on iSolved' },
        { value: 'BEG', label: 'Implements and supports' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What Disconnected HR Systems Actually Cost</p>
            <h2>The HR platform problem is not the software. It is everything around it.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                stat: '4+ logins',
                label: 'Average number of systems HR teams manage for payroll, time, benefits, and recruiting',
                sub: 'Every system is a reconciliation. Every integration is a failure point. Every module add-on is another invoice.',
              },
              {
                stat: '330%',
                label: 'Average ROI documented by Forrester for iSolved clients',
                sub: 'One connected platform eliminates data transfer errors, reduces HR admin time, and makes compliance trackable. The ROI compounds from the first quarter.',
              },
              {
                stat: 'June 2026',
                label: 'iSolved Connector for Claude went generally available',
                sub: 'The only HCM platform with a live Claude AI integration. Your team can complete HR tasks through a Claude conversation. No competitor offers this yet.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From platform assessment to live and running in 60-90 days</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                num: '01',
                title: 'Platform assessment',
                body: 'BEG reviews your current HR stack, headcount, industry, and compliance requirements. You get a clear implementation plan and a transparent cost comparison against what you pay now.',
              },
              {
                num: '02',
                title: 'BEG-managed implementation',
                body: 'We configure iSolved for your specific structure: compensation, benefits, time, and compliance workflows. Data migration, testing, and training are all managed by BEG. You do not hire an implementation firm.',
              },
              {
                num: '03',
                title: 'Ongoing BEG support',
                body: 'Your BEG contact manages your iSolved platform year-round. Compliance changes, new locations, configuration updates. One contact, no ticket queue, no re-explaining your setup every time.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
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
            <h2>Three things your current HCM vendor probably cannot match</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'BEG implementation included. No separate professional services bill.',
                objection: 'Common objection: "HCM implementations are expensive and take forever."',
                body: 'BEG manages your full iSolved implementation as part of the relationship. Configuration, data migration, training, and go-live are handled by BEG. You are not paying a separate professional services team $30,000-$60,000 to stand up the system. Implementation is what we do, and it is included.',
              },
              {
                badge: 'Bonus 02',
                title: 'iSolved Connector for Claude. HR tasks through AI.',
                objection: 'Common objection: "Every HCM vendor claims to have AI now."',
                body: 'Most HCM AI chatbots answer questions. The iSolved Connector for Claude completes actual tasks. Your team can run payroll, pull headcount reports, update employee records, and manage workflows through a Claude AI conversation. No competitor offers this. It is generally available in the Claude directory today, not a roadmap item.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact. Not a support ticket queue.',
                objection: 'Common objection: "Our last vendor disappeared after we signed."',
                body: 'Your BEG contact manages your iSolved platform year-round. When compliance requirements change, when you add a new location, when you need a new workflow configured, you call BEG. Not a 1-800 number. Not a ticket queue. Your account contact, who knows your setup.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                The best time to switch is before your current contract auto-renews.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Most HCM contracts auto-renew 60-90 days before expiration. Miss that window and you are locked in for another year or paying for two platforms during a transition. BEG will time your iSolved implementation to align with your current renewal date so you switch cleanly and pay for one system at a time.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Claude AI Advantage</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                The only HCM platform with a live Claude AI integration.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                iSolved launched the Connector for Claude in June 2026. It is the only HCM integration that lets your team complete actual HR tasks through Claude AI. Paycom, Paylocity, and ADP have no equivalent. Companies that build their HR automation around it now will compound that advantage as AI becomes standard across every function.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
              style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            >
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              We will show you the platform, walk through your current setup, and give you a no-obligation cost comparison.
            </p>
          </div>
        </div>
      </section>

      {/* BY INDUSTRY */}
      <section className="section" id="industries">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">HCM Software by Industry</p>
            <h2>One platform, configured for how your industry actually runs HR</h2>
          </div>
          <div className="cards">
            <Link href="/services/hcm-software/legal" className="card-link reveal">
              <span className="tag">Legal</span>
              <h3>Law Firms</h3>
              <p>Partner draws, multi-state attorneys, and billable staff on one platform.</p>
            </Link>
            <Link href="/services/hcm-software/healthcare" className="card-link reveal">
              <span className="tag">Healthcare</span>
              <h3>Healthcare</h3>
              <p>Shift differentials, ACA compliance, and 24/7 clinical workforce management.</p>
            </Link>
            <Link href="/services/hcm-software/finance" className="card-link reveal">
              <span className="tag">Finance</span>
              <h3>Finance &amp; Accounting</h3>
              <p>Bonus tracking, commission management, and zero-error payroll.</p>
            </Link>
            <Link href="/services/hcm-software/technology" className="card-link reveal">
              <span className="tag">Technology</span>
              <h3>IT &amp; Technology</h3>
              <p>Equity comp, multi-state remote teams, and rapid headcount scaling.</p>
            </Link>
            <Link href="/services/hcm-software/engineering" className="card-link reveal">
              <span className="tag">Engineering</span>
              <h3>Engineering</h3>
              <p>Certified payroll, prevailing wage compliance, and government contract HR.</p>
            </Link>
            <Link href="/services/hcm-software/trades" className="card-link reveal">
              <span className="tag">Trades</span>
              <h3>Skilled Trades &amp; Mfg</h3>
              <p>Union CBA compliance, certified payroll, and multi-site workforce tracking.</p>
            </Link>
            <Link href="/services/hcm-software/executive" className="card-link reveal">
              <span className="tag">Executive</span>
              <h3>Executive &amp; Leadership</h3>
              <p>Deferred comp, 409A compliance, and restricted-access executive payroll.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON PAGES */}
      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Platform Comparisons</p>
            <h2>See how iSolved stacks up against your current platform</h2>
          </div>
          <div className="cards">
            <Link href="/services/hcm-software/isolved-vs-paylocity" className="card-link reveal">
              <h3>iSolved vs Paylocity</h3>
              <p>Side-by-side comparison on features, pricing, AI capabilities, and mid-market fit.</p>
            </Link>
            <Link href="/services/hcm-software/isolved-vs-paycom" className="card-link reveal">
              <h3>iSolved vs Paycom</h3>
              <p>How iSolved compares to Paycom on implementation, support, and the Claude AI integration.</p>
            </Link>
            <Link href="/services/hcm-software/alternatives-to-adp" className="card-link reveal">
              <h3>Alternatives to ADP</h3>
              <p>Why mid-market companies switch from ADP and what the iSolved transition looks like.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What does iSolved include?</h3>
              <p>Payroll, HR, time and attendance, benefits administration, talent management, and the iSolved Connector for Claude, all in one platform. No separate modules required for the core HR stack.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG charge for implementation?</h3>
              <p>No. BEG implementation is included in the relationship. Configuration, data migration, training, and go-live are managed by your BEG contact as part of getting you on the platform.</p>
            </div>
            <div className="faq-item">
              <h3>How long does implementation take?</h3>
              <p>Most clients are live in 60-90 days. BEG times implementation to your current contract renewal so you are not paying for two systems at once.</p>
            </div>
            <div className="faq-item">
              <h3>What is the iSolved Connector for Claude?</h3>
              <p>The only live AI integration in any HCM platform that completes actual HR tasks. Your team can run payroll, pull reports, and update records through a Claude AI conversation. Available now through BEG.</p>
            </div>
            <div className="faq-item">
              <h3>What does iSolved cost?</h3>
              <p>Priced per employee per month based on your headcount and modules. BEG runs a transparent cost comparison against your current platform on your discovery call before you commit to anything.</p>
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
              {
                '@type': 'Question',
                name: 'What does iSolved include?',
                acceptedAnswer: { '@type': 'Answer', text: 'Payroll, HR, time and attendance, benefits administration, talent management, and the iSolved Connector for Claude in one platform.' },
              },
              {
                '@type': 'Question',
                name: 'Does BEG charge for implementation?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. BEG implementation is included. Configuration, data migration, training, and go-live are managed as part of the relationship.' },
              },
              {
                '@type': 'Question',
                name: 'What is the iSolved Connector for Claude?',
                acceptedAnswer: { '@type': 'Answer', text: 'The only live AI integration in any HCM platform that completes actual HR tasks through Claude AI. Available now through BEG.' },
              },
              {
                '@type': 'Question',
                name: 'How long does implementation take?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most clients are live in 60-90 days, timed to their current contract renewal so they pay for one system at a time.' },
              },
            ],
          }),
        }}
      />

    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'iSolved HCM Software',
            description: 'iSolved People Cloud HCM platform with BEG implementation and support. Payroll, HR, time, and benefits in one platform. 330% documented ROI.',
            url: 'https://beghr.com/services/hcm-software',
            provider: {
              '@type': 'Organization',
              name: 'Business Executive Group',
              url: 'https://beghr.com',
            },
            areaServed: 'United States',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
            },
          }),
        }}
      />
    </ServicePage>
  );
}
