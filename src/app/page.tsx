import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Executive Group - Payroll, HCM Software & Job Placement',
  description: 'Fully managed payroll, HCM software powered by iSolved, and specialized job placement services for businesses nationwide.',
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Business Executive Group</p>
          <h1>Three services. One partner.</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Managed payroll. HCM software. Job placement. Everything you need to run your business, staffed and supported by a team that knows how to make it work.
          </p>
          <div className="hero-cta">
            <a className="btn btn--gold" href="https://calendly.com/tori-beghr?id=1" target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
            </a>
          </div>
          <div className="trust-row">
            <div><b>1,500+</b><small>Entrepreneur members</small></div>
            <div><b>3 Services</b><small>All in one partner</small></div>
            <div><b>Nationwide</b><small>All 50 states</small></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Our Services</p>
            <h2>Built for growing businesses</h2>
          </div>
          <div className="cards">
            <Link href="/services/managed-payroll" className="card-link reveal">
              <h3>Managed Payroll</h3>
              <p>Fully managed payroll, taxes, and compliance so your team never touches it again.</p>
            </Link>
            <Link href="/services/hcm-software" className="card-link reveal">
              <h3>HCM Software</h3>
              <p>Payroll, HR, time, and benefits on one platform, powered by iSolved and supported by BEG.</p>
            </Link>
            <Link href="/services/job-placement" className="card-link reveal">
              <h3>Job Placement</h3>
              <p>Fill specialized, hard-to-fill roles 2-3x faster than the industry standard.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Why BEG</p>
            <h2>Built by business owners, for business owners</h2>
          </div>
          <div className="cards">
            <article className="card reveal">
              <h3>A real team</h3>
              <ul>
                <li>No call centers, no ticket queues</li>
                <li>A dedicated contact who knows your business</li>
                <li>Real people solving real problems</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>We scale with you</h3>
              <ul>
                <li>Work with 5 employees or 500</li>
                <li>All 50 states, nationwide coverage</li>
                <li>Built for growing businesses</li>
              </ul>
            </article>
            <article className="card reveal">
              <h3>Industry expertise</h3>
              <ul>
                <li>Solutions built for your industry</li>
                <li>Deep experience in legal, healthcare, tech, finance, and more</li>
                <li>We understand your unique challenges</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="network">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">Our Network</p>
            <h2>Partner with 1,500+ entrepreneurs</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              DFW Leadership Connect connects business owners and executives for networking, learning, and growth.
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

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <h2 style={{ color: '#fff' }}>Ready to get started?</h2>
            <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
              Book a 15-minute discovery call. We'll learn about your business and tell you honestly whether we can help.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              className="btn btn--gold"
              href="https://calendly.com/tori-beghr?id=1"
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
          href="https://calendly.com/tori-beghr?id=1"
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
