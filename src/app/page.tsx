import { Metadata } from 'next';
import Link from 'next/link';
import HeroVideoBox from '@/components/HeroVideoBox';
import PricingCta from '@/components/pricing/PricingCta';
import InlineSearch from '@/components/InlineSearch';

const heroVideoCss = `
.hero-video-split{display:flex;flex-direction:column;gap:6px}
.hero-video-split .hv-video{margin:10px 0 22px}
@media(min-width:900px){
.hero-video-split{display:grid;grid-template-columns:1.05fr .95fr;column-gap:48px;align-items:center;grid-template-areas:"a v" "b v" "c v" "d v"}
.hero-video-split .hv-eyebrow{grid-area:a;align-self:end;margin:0}
.hero-video-split .hv-title{grid-area:b;margin:0}
.hero-video-split .hv-lede{grid-area:c;margin:14px 0 0}
.hero-video-split .hv-cta{grid-area:d;align-self:start;margin-top:24px}
.hero-video-split .hv-video{grid-area:v;align-self:center;margin:0}
}
`;

export const metadata: Metadata = {
  title: 'Managed Payroll & HCM | Done For You. Not Software. | BEG',
  description: 'BEG delivers fully managed payroll at $25-$45 PEPM, isolved HCM software with BEG implementation, and specialized job placement in 23-35 days.',
  alternates: {
    canonical: 'https://www.beghr.com',
  },
  openGraph: {
    title: 'Managed Payroll & HCM | Done For You. Not Software. | BEG',
    description: 'BEG delivers fully managed payroll at $25–$45 PEPM, isolved HCM software with BEG implementation, and specialized job placement in 23–35 days. All 50 states.',
    url: 'https://www.beghr.com',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group -- Managed Payroll, HCM Software & Job Placement' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll & HCM | Done For You. Not Software. | BEG', description: 'BEG delivers fully managed payroll at $25–$45 PEPM, isolved HCM software with BEG implementation, and specialized job placement in 23–35 days.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <style dangerouslySetInnerHTML={{ __html: heroVideoCss }} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: 'Managed Payroll, HCM Software and Job Placement, Done For You',
                description:
                  'BEG delivers fully managed payroll, isolved HCM software with BEG support, and specialized job placement, remote and nationwide.',
                thumbnailUrl: 'https://i.ytimg.com/vi/G4R14pQT3y8/maxresdefault.jpg',
                uploadDate: '2026-06-30',
                embedUrl: 'https://www.youtube.com/embed/G4R14pQT3y8',
                contentUrl: 'https://www.youtube.com/watch?v=G4R14pQT3y8',
              }),
            }}
          />
          <div className="hero-video-split">
            <p className="eyebrow hv-eyebrow">Business Executive Group</p>
            <h1 className="hv-title">The people side of your business is <span className="hero-hl">costing you more</span> than it should.</h1>
            <p className="lede hv-lede" style={{ margin: '18px 0 0' }}>
              Payroll eating hours every cycle. HR software nobody logs into. A key role sitting open for three months. BEG solves all three: fully managed payroll, isolved HCM software with BEG support, and specialized job placement in 23-35 days.
            </p>
            <HeroVideoBox videoId="G4R14pQT3y8" title="Business Executive Group" />
            <div className="hero-cta hv-cta">
              <PricingCta service="chooser" />
            </div>
          </div>
          <div className="trust-row">
            <div><b>1,500+</b><small>Entrepreneur members</small></div>
            <div><b>All 50 States</b><small>Nationwide coverage</small></div>
            <div><b>$25-$45 PEPM</b><small>Fully managed payroll</small></div>
          </div>
        </div>
      </section>

      {/* SITE SEARCH — pitch-then-search band directly beneath the hero */}
      <InlineSearch />

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
                label: 'Documented ROI for isolved customers per Forrester Research',
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
            <p className="eyebrow">One Partner. Every HR Problem.</p>
            <h2>Pick your problem. We have a solution.</h2>
          </div>
          <div className="cards">
            {[
              {
                href: '/services/managed-payroll',
                tag: 'Managed Payroll',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <circle cx="12" cy="12" r="2.5" />
                    <path d="M6 9v.01M18 15v.01" />
                  </svg>
                ),
                h3: 'Payroll running your team ragged every cycle?',
                body: 'Fully managed at $25-$45 PEPM. Taxes, filings, W-2s, and compliance handled. All 50 states. Works in your existing system. No migration required.',
                cta: 'See managed payroll',
              },
              {
                href: '/services/hcm-software',
                tag: 'HCM Software',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l9 5-9 5-9-5 9-5z" />
                    <path d="M3 12l9 5 9-5" />
                    <path d="M3 16l9 5 9-5" />
                  </svg>
                ),
                h3: 'HR software your team actually uses?',
                body: 'isolved People Cloud puts payroll, HR, time, and benefits on one platform. BEG implements and supports you year-round. 330% documented ROI. Now with Claude AI integration.',
                cta: 'See HCM software',
              },
              {
                href: '/services/job-placement',
                tag: 'Job Placement',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="10" cy="8" r="4" />
                    <path d="M3 20c0-3.3 3.1-6 7-6" />
                    <circle cx="17.5" cy="16.5" r="3" />
                    <path d="M22 21l-2.2-2.2" />
                  </svg>
                ),
                h3: 'A role that has been open too long?',
                body: 'We place specialized professionals in 23-35 days at roughly 50% less than contingency firms. 45-day replacement guarantee. Legal, healthcare, finance, tech, and more.',
                cta: 'See job placement',
              },
              {
                href: '/services/hr-outsourcing',
                tag: 'HR Outsourcing',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 4.4-3 7.5-7 8.5-4-1-7-4.1-7-8.5V6l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
                h3: 'HR problems without an HR department?',
                body: 'Certified HR pros handle your handbook, compliance, and leave for a fraction of a $60K-$100K hire. Powered by isolved. Not a PEO: you stay the employer.',
                cta: 'See HR outsourcing',
              },
              {
                href: '/services/managed-benefits',
                tag: 'Managed Benefits',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.5 11H16l-2 4-3-8-2 4H3.5" />
                    <path d="M12 20s-7-4.3-7-9.3A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 7 3.7c0 5-7 9.3-7 9.3z" />
                  </svg>
                ),
                h3: 'Benefits admin eating open enrollment alive?',
                body: 'Open enrollment, ACA forms, COBRA, and carrier updates handled. Powered by isolved. Keep your broker, we run the administration. All 50 states.',
                cta: 'See managed benefits',
              },
              {
                href: '/services/applicant-tracking-system',
                tag: 'Applicant Tracking',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 5h16l-6 7v6l-4 2v-8L4 5z" />
                  </svg>
                ),
                h3: 'Losing good applicants to a scattered hiring process?',
                body: 'isolved Attract & Hire Small Business puts every candidate in one pipeline. $2.00 PEPM, added to isolved HCM, configured and supported by BEG. All 50 states.',
                cta: 'See applicant tracking',
              },
              {
                href: '/services/lms-learning-management',
                tag: 'Learning Management',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 4l10 5-10 5L2 9l10-5z" />
                    <path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5" />
                  </svg>
                ),
                h3: 'Still training your team with sign-in sheets and scattered videos?',
                body: 'isolved Learn & Grow puts every course, assignment, and completion record in one system. Compliance training, onboarding, and upskilling, configured and supported by BEG. All 50 states.',
                cta: 'See learning management',
              },
            ].map(({ href, tag, icon, h3, body, cta }) => (
              <Link key={href} href={href} className="card-link reveal">
                <span className="card-icon">{icon}</span>
                <span className="tag">{tag}</span>
                <h3>{h3}</h3>
                <p>{body}</p>
                <span className="card-cta">
                  {cta}{' '}
                  <svg className="card-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
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
                isolved is the only HCM platform with a Claude AI connector. BEG is your path to it.
              </h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The isolved Connector for Claude (generally available June 2026) lets your team complete HR tasks through a natural conversation with Claude AI. Not just ask questions. Actually run payroll, pull reports, update records, and manage workflows.
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
                See isolved + BEG
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
              <p>Both. Managed Payroll is done-for-you. HCM Software is the isolved People Cloud platform, which BEG implements and supports. Job Placement is an active search service. The model fits whichever problem you need solved.</p>
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
                acceptedAnswer: { '@type': 'Answer', text: 'Both. Managed Payroll is done-for-you. HCM Software is the isolved People Cloud platform BEG implements and supports. Job Placement is an active search service.' },
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
              Pick a service, answer a few quick questions, and see exactly what it costs on screen. No call required.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <PricingCta service="chooser" subline={false} />
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `document.querySelectorAll(".nav-dd").forEach(function(d){d.addEventListener("toggle",function(){if(d.open){document.querySelectorAll(".nav-dd[open]").forEach(function(o){if(o!==d)o.open=false})}})});`,
        }}
      />
    </>
  );
}
