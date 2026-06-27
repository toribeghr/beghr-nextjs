import { Metadata } from 'next';
import Link from 'next/link';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'Managed Payroll, HCM Software & Job Placement | BEG',
  description: 'BEG delivers fully managed payroll at $25-$45 PEPM, iSolved HCM software with BEG implementation, and specialized job placement in 23-35 days.',
  alternates: {
    canonical: 'https://beghr.com',
  },
  openGraph: {
    title: 'Managed Payroll, HCM Software & Job Placement | BEG',
    description: 'BEG delivers fully managed payroll at $25–$45 PEPM, iSolved HCM software with BEG implementation, and specialized job placement in 23–35 days. All 50 states.',
    url: 'https://beghr.com',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group — Managed Payroll, HCM Software & Job Placement' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll, HCM Software & Job Placement | BEG', description: 'BEG delivers fully managed payroll at $25–$45 PEPM, iSolved HCM software with BEG implementation, and specialized job placement in 23–35 days.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Business Executive Group</p>
              <h1>The people side of your business is costing you more than it should.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll eating hours every cycle. HR software nobody logs into. A key role sitting open for three months. BEG solves all three: fully managed payroll, iSolved HCM software with BEG support, and specialized job placement in 23-35 days.
              </p>
              <div className="hero-cta">
                <a className="btn btn--gold" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                </a>
              </div>
            </div>
            <HeroImageBox src="/assets/hero-images/home.webp" alt="Business Executive Group" />
          </div>
          <div className="trust-row">
            <div><b>1,500+</b><small>Entrepreneur members</small></div>
            <div><b>All 50 States</b><small>Nationwide coverage</small></div>
            <div><b>$25-$45 PEPM</b><small>Fully managed payroll</small></div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Real Cost</p>
            <h2>What does it actually cost to leave these problems unsolved?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                stat: '$60K-$100K/yr',
                label: 'What an in-house payroll manager costs',
                sub: 'Salary, benefits, and overhead just to run payroll. BEG manages everything at $25-$45 per employee per month, all-inclusive.',
              },
              {
                stat: '$8,000+/wk',
                label: 'Lost billable capacity per unfilled senior role',
                sub: 'One empty attorney or executive seat losing 40 hours a week. Most searches run 90 days. Run the math before the next review.',
              },
              {
                stat: '330%',
                label: 'Documented ROI for iSolved customers per Forrester Research',
                sub: 'Disconnected HR tools cost time and money on every cycle. One platform, configured correctly, pays for itself inside 12 months.',
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

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Three Services. One Partner.</p>
            <h2>Pick your problem. We have a solution.</h2>
          </div>
          <div className="cards">
            <Link href="/services/managed-payroll" className="card-link reveal">
              <span className="tag">Managed Payroll</span>
              <h3>Payroll running your team ragged every cycle?</h3>
              <p>Fully managed at $25-$45 PEPM. Taxes, filings, W-2s, and compliance handled. All 50 states. Works in your existing system. No migration required.</p>
              <span style={{ color: '#ECAC60', fontWeight: '600', fontSize: '0.9rem' }}>See managed payroll &rarr;</span>
            </Link>
            <Link href="/services/hcm-software" className="card-link reveal">
              <span className="tag">HCM Software</span>
              <h3>HR software your team actually uses?</h3>
              <p>iSolved People Cloud puts payroll, HR, time, and benefits on one platform. BEG implements and supports you year-round. 330% documented ROI. Now with Claude AI integration.</p>
              <span style={{ color: '#ECAC60', fontWeight: '600', fontSize: '0.9rem' }}>See HCM software &rarr;</span>
            </Link>
            <Link href="/services/job-placement" className="card-link reveal">
              <span className="tag">Job Placement</span>
              <h3>A role that has been open too long?</h3>
              <p>We place specialized professionals in 23-35 days at roughly 50% less than contingency firms. 45-day replacement guarantee. Legal, healthcare, finance, tech, and more.</p>
              <span style={{ color: '#ECAC60', fontWeight: '600', fontSize: '0.9rem' }}>See job placement &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why BEG</p>
            <h2>Three things most vendors get wrong. We get right.</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'We do the work. We do not send you a login.',
                objection: 'Common concern: "We tried software. Nobody used it."',
                body: 'Managed Payroll is fully done-for-you. We run every cycle. HCM Software comes with BEG implementation and ongoing support, not just platform access. Job Placement is active search, not a job board posting. With BEG, you get outcomes, not logins.',
              },
              {
                badge: 'Bonus 02',
                title: 'One contact who knows your business. Not a call center.',
                objection: 'Common concern: "Every time I call, I have to explain myself from scratch."',
                body: 'You get a dedicated BEG contact across whatever services you use. They know your payroll structure, your HR setup, and your open roles. When something changes, you make one call. No tickets. No queues. No re-explaining your situation to whoever picks up.',
              },
              {
                badge: 'Bonus 03',
                title: 'Flat, transparent pricing. No annual surprises.',
                objection: 'Common concern: "My last vendor kept adding fees at renewal."',
                body: 'Managed Payroll is $25-$45 PEPM, all-inclusive. HCM Software is transparent PEPM with no surprise module add-ons. Job Placement is milestone-based, not a 20-25% contingency fee. You know what you pay before you sign.',
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

      {/* iSOLVED + CLAUDE DIFFERENTIATOR */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>New in 2026</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                iSolved is the only HCM platform with a Claude AI connector. BEG is your path to it.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The iSolved Connector for Claude (generally available June 2026) lets your team complete HR tasks through a natural conversation with Claude AI. Not just ask questions. Actually run payroll, pull reports, update records, and manage workflows.
              </p>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '0.75rem' }}>
                Paycom, Paylocity, and ADP have no equivalent. Companies that build their HR workflows around it now will compound that advantage for years.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Run payroll through a conversation',
                'Pull headcount and HR reports instantly',
                'Update employee records without logging in',
                'Manage compliance workflows through Claude',
                'Available now through BEG',
              ].map((text) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#ECAC60', fontWeight: '700', fontSize: '1.1rem', flexShrink: 0 }}>&#8594;</span>
                  <span style={{ color: '#cccccc', fontSize: '0.97rem' }}>{text}</span>
                </div>
              ))}
              <a
                className="btn btn--gold"
                href="/services/hcm-software"
                style={{ marginTop: '0.5rem', display: 'inline-block', width: 'fit-content' }}
              >
                See iSolved + BEG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="section" id="network">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Our Network</p>
            <h2>1,500+ entrepreneurs already in the room</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              DFW Leadership Connect is BEG&apos;s networking and events brand. Monthly events for business owners and executives in the Dallas-Fort Worth area.
            </p>
          </div>
          <div className="cta-band reveal">
            <h3>Join the community</h3>
            <p>Monthly events for entrepreneurs in the Dallas-Fort Worth area.</p>
            <a
              className="btn btn--navy"
              href="https://dfwleadershipconnect.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More about DFW Leadership Connect
            </a>
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
              <h3>Do I need all three services?</h3>
              <p>No. You can use one, two, or all three. Each service stands on its own. Most clients start with one and add others over time.</p>
            </div>
            <div className="faq-item">
              <h3>Is BEG a software company or a service company?</h3>
              <p>Both. Managed Payroll is done-for-you. HCM Software is the iSolved People Cloud platform, which BEG implements and supports. Job Placement is an active search service. The model fits whichever problem you need solved.</p>
            </div>
            <div className="faq-item">
              <h3>What size companies do you work with?</h3>
              <p>We work with companies across all 50 states. Managed payroll and HCM software fit well from 10 to 500 employees. Job placement targets specialized roles in firms with 11 to 200 employees in the relevant vertical.</p>
            </div>
            <div className="faq-item">
              <h3>What does a discovery call look like?</h3>
              <p>Fifteen minutes. We ask about your setup and what is not working. We tell you honestly whether we can help and what it costs. No pitch deck, no pressure.</p>
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
                name: 'Do I need all three services?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. You can use one, two, or all three. Each service stands on its own.' },
              },
              {
                '@type': 'Question',
                name: 'Is BEG a software company or a service company?',
                acceptedAnswer: { '@type': 'Answer', text: 'Both. Managed Payroll is done-for-you. HCM Software is the iSolved People Cloud platform BEG implements and supports. Job Placement is an active search service.' },
              },
              {
                '@type': 'Question',
                name: 'What size companies do you work with?',
                acceptedAnswer: { '@type': 'Answer', text: 'All 50 states. Managed payroll and HCM software fit well from 10 to 500 employees. Job placement targets firms with 11 to 200 employees.' },
              },
              {
                '@type': 'Question',
                name: 'What does a discovery call look like?',
                acceptedAnswer: { '@type': 'Answer', text: 'Fifteen minutes. We ask about your setup and what is not working. We tell you honestly whether we can help and what it costs.' },
              },
            ],
          }),
        }}
      />

      {/* BOTTOM CTA */}
      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <h2 style={{ color: '#fff' }}>Ready to stop managing it yourself?</h2>
            <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
              Book a 15-minute discovery call. Tell us what is not working. We will tell you exactly what we can do and what it costs.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              className="btn btn--gold"
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      <div className="sticky-cta" id="stickyCta">
        <span>Ready to get started?</span>
        <a
          className="btn btn--gold"
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Discovery Call
        </a>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `document.querySelectorAll(".nav-dd").forEach(function(d){d.addEventListener("toggle",function(){if(d.open){document.querySelectorAll(".nav-dd[open]").forEach(function(o){if(o!==d)o.open=false})}})});`,
        }}
      />
    </>
  );
}
