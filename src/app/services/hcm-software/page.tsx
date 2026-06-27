import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM Software Partner | BEG Implementation',
  description: 'BEG is an authorized iSolved reseller. Get payroll, HR, time, benefits, and the Connector for Claude on one platform. 330% documented ROI.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software',
  },,
  openGraph: {
    title: 'iSolved HCM Software Partner | BEG Implementation',
    description: 'BEG is an authorized iSolved reseller. Get payroll, HR, time, benefits, and the Connector for Claude on one platform. 330% documented ROI.',
    url: 'https://beghr.com/services/hcm-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved HCM Software Partner | BEG Implementation', description: 'BEG is an authorized iSolved reseller. Get payroll, HR, time, benefits, and the Connector for Claude on one platform. 330% documented ROI.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('hcm-software');

export default function HCMSoftwarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/hcm-software.webp"
      showHeroImage={true}
      eyebrow="HCM Software · Authorized iSolved Partner"
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

      {/* ISOLVED MODULE TABLE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Platform Coverage</p>
            <h2>What iSolved People Cloud includes</h2>
            <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '660px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
              iSolved is a single connected platform. No separate modules to purchase for core HR functions. Everything below is included and configured by BEG for your specific industry and workforce structure.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            {[
              {
                heading: 'Payroll',
                items: [
                  'Multi-state payroll processing',
                  'Tax withholding and remittance',
                  'Quarterly and annual tax filings',
                  'Direct deposit and pay cards',
                  'Off-cycle and bonus payrolls',
                  'Garnishment management',
                ],
              },
              {
                heading: 'Human Resources',
                items: [
                  'Employee records and self-service',
                  'New hire onboarding workflows',
                  'Document storage and e-signature',
                  'Performance management',
                  'Compensation management',
                  'Separation and offboarding',
                ],
              },
              {
                heading: 'Time and Attendance',
                items: [
                  'Time clock and mobile punch',
                  'Shift scheduling and management',
                  'PTO accrual and balance tracking',
                  'Overtime calculations',
                  'Timesheet approvals',
                  'Labor cost reporting',
                ],
              },
              {
                heading: 'Benefits Administration',
                items: [
                  'Open enrollment management',
                  'ACA 1094/1095 filing and tracking',
                  'Benefits carrier data connections',
                  'COBRA administration',
                  'FSA, HSA, and HRA tracking',
                  'Life event change management',
                ],
              },
              {
                heading: 'Talent and Recruiting',
                items: [
                  'Applicant tracking system (ATS)',
                  'Job posting and candidate pipeline',
                  'Offer letter generation',
                  'Background check integrations',
                  'Onboarding task assignments',
                  'Learning and development modules',
                ],
              },
              {
                heading: 'AI and Automation',
                items: [
                  'iSolved Connector for Claude (GA June 2026)',
                  'Complete HR tasks via Claude AI',
                  'Automated compliance alerts',
                  'Predictive workforce analytics',
                  'Employee engagement tools',
                  'Reporting and dashboard automation',
                ],
              },
            ].map(({ heading, items }) => (
              <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #ECAC60', color: '#000000' }}>{heading}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontSize: '0.88rem', padding: '0.35rem 0', color: '#444444', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.45' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--soft">
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
      <section className="section">
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

      {/* CLAUDE CONNECTOR DEEP DIVE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">iSolved Connector for Claude</p>
            <h2>The only HCM platform that does not just answer HR questions. It does the work.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem' }} className="reveal">
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.75rem', color: '#000000' }}>What most HCM AI does</h3>
              <p style={{ fontSize: '0.95rem', color: '#444444', lineHeight: '1.7' }}>
                Most HCM vendors now claim AI. What they have built is a chatbot that answers questions: what is the PTO policy, how do I submit an expense. Your team still has to log in and complete the task themselves after getting the answer. The AI assists. The work stays on your team.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.75rem', color: '#000000' }}>What iSolved Connector for Claude does</h3>
              <p style={{ fontSize: '0.95rem', color: '#444444', lineHeight: '1.7' }}>
                The iSolved Connector for Claude completes actual HR tasks through a Claude AI conversation. Your team types what they need. iSolved does it. Run payroll, pull a headcount report, update an employee record, manage an open enrollment. No separate login required for the task.
              </p>
            </div>
          </div>
          <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '2rem', marginTop: '2rem' }} className="reveal">
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem', color: '#000000' }}>Tasks your team can complete through Claude</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {[
                'Run and approve payroll cycles',
                'Pull headcount and org structure reports',
                'Update employee records and pay rates',
                'Process new hire setup and onboarding',
                'Manage time-off requests and balances',
                'Generate ACA and compliance reports',
                'View and update benefits enrollment data',
                'Trigger onboarding task assignments',
              ].map((task) => (
                <div key={task} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', color: '#444444' }}>
                  <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>&#10003;</span>
                  {task}
                </div>
              ))}
            </div>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.93rem', color: '#555555', lineHeight: '1.7', textAlign: 'center' }} className="reveal">
            The iSolved Connector for Claude went generally available in June 2026 and is live in the Claude directory today. No competitor, including Paycom, Paylocity, UKG, or ADP, has an equivalent integration. BEG clients on iSolved have access immediately after implementation.
          </p>
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
            <h2>Common questions about iSolved and BEG</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What does iSolved include?</h3>
              <p>Payroll, HR, time and attendance, benefits administration, talent management, and the iSolved Connector for Claude, all in one platform. No separate modules required for the core HR stack. BEG configures every module for your specific industry, workforce structure, and compliance requirements during implementation.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG charge for implementation?</h3>
              <p>No. BEG implementation is included in the relationship. Configuration, data migration, testing, training, and go-live are all managed by your BEG contact as part of getting you on the platform. You are not paying a separate professional services team, which typically runs $30,000-$60,000 with direct HCM vendors.</p>
            </div>
            <div className="faq-item">
              <h3>How long does implementation take?</h3>
              <p>Most clients are live in 60-90 days. BEG times implementation to your current contract renewal so you are not paying for two systems at once. If you have a hard deadline, tell us on your discovery call and we will build a timeline that hits it.</p>
            </div>
            <div className="faq-item">
              <h3>What is the iSolved Connector for Claude?</h3>
              <p>The only live AI integration in any HCM platform that completes actual HR tasks rather than answering questions. Your team can run payroll, pull reports, update employee records, and manage workflows through a Claude AI conversation. It went generally available in June 2026 and is in the Claude directory today. No competitor has an equivalent integration.</p>
            </div>
            <div className="faq-item">
              <h3>What does iSolved cost?</h3>
              <p>Priced per employee per month based on your headcount and modules. BEG runs a transparent cost comparison against your current platform on your discovery call before you commit to anything. Most clients see meaningful cost savings compared to managing multiple point solutions, plus the time savings from consolidating onto one platform.</p>
            </div>
            <div className="faq-item">
              <h3>How does iSolved compare to Paycom or Paylocity?</h3>
              <p>iSolved competes directly with both in the mid-market. Key differences: iSolved is partner-supported through BEG, meaning you have one contact who knows your account rather than a direct-sales rep who hands you to a support queue after signing. iSolved is the only platform with a live Claude AI connector. And BEG implementation is included at no additional professional services cost. Full comparison pages are linked above.</p>
            </div>
            <div className="faq-item">
              <h3>What happens when my current HCM contract is up for renewal?</h3>
              <p>Most HCM contracts auto-renew 60-90 days before the expiration date. If you miss that window, you are locked in for another year. BEG maps your current contract timeline on your discovery call and times the iSolved implementation so the switch is clean. You pay for one system at a time.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG own my HR data?</h3>
              <p>No. Your employee and payroll data belongs to your organization. BEG manages the platform on your behalf but you retain full ownership and export rights to all your data at any time. If you ever leave iSolved, a complete data export is available.</p>
            </div>
            <div className="faq-item">
              <h3>Does iSolved handle ACA compliance?</h3>
              <p>Yes. iSolved includes ACA tracking, reporting, and 1094/1095 filing as part of the core platform. It tracks employee hours for ACA eligibility, manages affordability calculations, generates the required forms, and submits them electronically to the IRS. BEG configures the ACA module during implementation and manages annual filing as part of ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'HCM software',
            title: 'HR Automation in 2025: What iSolved Actually Automates',
            excerpt: 'Most HR platforms promise automation but deliver report generation. Here is what genuine automation looks like and which tasks it eliminates.',
            href: '/blog/hcm-technology/hr-automation',
          },
          {
            category: 'HCM software',
            title: 'iSolved Platform Overview: Features, Pricing, and Who It Is For',
            excerpt: 'A no-fluff breakdown of what iSolved covers, who it fits best, and how it compares to the platforms most mid-size companies are already running.',
            href: '/blog/hcm-technology/isolved-platform',
          },
          {
            category: 'HCM software',
            title: 'Payroll Compliance in 2025: What Changes and How HCM Software Keeps You Current',
            excerpt: 'Tax law changes, multi-state filings, and new reporting requirements. How the right HCM platform handles compliance so your team does not have to.',
            href: '/blog/hcm-technology/payroll-compliance',
          },
        ]}
      />

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
                acceptedAnswer: { '@type': 'Answer', text: 'Payroll, HR, time and attendance, benefits administration, talent management, and the iSolved Connector for Claude in one platform. BEG configures every module for your industry and structure.' },
              },
              {
                '@type': 'Question',
                name: 'Does BEG charge for implementation?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. BEG implementation is included. Configuration, data migration, testing, training, and go-live are managed by BEG as part of the relationship.' },
              },
              {
                '@type': 'Question',
                name: 'What is the iSolved Connector for Claude?',
                acceptedAnswer: { '@type': 'Answer', text: 'The only live AI integration in any HCM platform that completes actual HR tasks through Claude AI. Generally available June 2026. No competitor has an equivalent.' },
              },
              {
                '@type': 'Question',
                name: 'How long does implementation take?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most clients are live in 60-90 days, timed to their current contract renewal so they pay for one system at a time.' },
              },
              {
                '@type': 'Question',
                name: 'How does iSolved compare to Paycom or Paylocity?',
                acceptedAnswer: { '@type': 'Answer', text: 'iSolved is partner-supported through BEG (one contact, not a support queue), is the only platform with a live Claude AI connector, and includes BEG implementation at no additional professional services cost.' },
              },
              {
                '@type': 'Question',
                name: 'What happens when my current HCM contract auto-renews?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most contracts auto-renew 60-90 days before expiration. BEG maps your renewal date on your discovery call and times implementation so you switch cleanly and pay for one system at a time.' },
              },
              {
                '@type': 'Question',
                name: 'Does BEG own my HR data?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. Your data belongs to your organization. You have full ownership and export rights at any time.' },
              },
              {
                '@type': 'Question',
                name: 'Does iSolved handle ACA compliance?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. iSolved includes ACA tracking, 1094/1095 filing, affordability calculations, and electronic IRS submission. BEG configures and manages annual ACA filing as part of ongoing support.' },
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
            description: 'BEG is an authorized iSolved reseller and implementation partner. iSolved People Cloud with BEG implementation included. Payroll, HR, time, benefits, and the iSolved Connector for Claude. 330% documented ROI.',
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
