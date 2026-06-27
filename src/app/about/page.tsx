import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BEG | 1,500+ Members. Payroll. Placement. HCM. | BEG',
  description: 'Business Executive Group is an established network with 1,500+ members. We deliver managed payroll, HCM software, and job placement services nationwide.',
  alternates: {
    canonical: 'https://beghr.com/about',
  },
  openGraph: {
    title: 'About BEG | 1,500+ Members. Payroll. Placement. HCM. | BEG',
    description: 'Business Executive Group is an established entrepreneur network with 1,500+ members. We deliver managed payroll, HCM software, and job placement services nationwide.',
    url: 'https://beghr.com/about',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group leadership team' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'About BEG | 1,500+ Members. Payroll. Placement. HCM. | BEG', description: 'Business Executive Group is an established entrepreneur network with 1,500+ members. We deliver managed payroll, HCM software, and job placement services nationwide.', images: ['https://beghr.com/assets/og-image.png'] },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-single">
              <p className="eyebrow">About Us</p>
              <h1>Built by business owners, for business owners.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Business Executive Group is an established entrepreneur network and professional services organization
                serving 1,500+ members through DFW Leadership Connect.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn--gold"
                  href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Discovery Call
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* About Us — 500-word section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="head reveal">
            <p className="eyebrow">Who We Are</p>
            <h2>The HR and workforce partner growing businesses have been missing.</h2>
          </div>

          <div className="reveal" style={{ marginTop: '32px', lineHeight: 1.8, fontSize: '1.05rem', color: 'var(--clr-body)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Most growing businesses reach a point where the way they handle payroll, HR, and hiring starts costing them
              more than they realize. A pay error that takes days to fix. A payroll system no one on the team fully
              understands. An open seat that has been posted for three months with no qualified candidates showing up.
              These are not small inconveniences. They are slow drains on time, money, and the confidence of the people
              running the business.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Business Executive Group was built to solve exactly that. We are an established entrepreneur network and
              professional services organization headquartered in Dallas-Fort Worth, with 1,500+ member entrepreneurs in our DFW Leadership Connect network, a board
              of directors, and active corporate sponsors including iSolved and WTW. Our members are business owners,
              founders, and executives who understand what it means to wear every hat and have decided there are certain
              hats worth handing off.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Our core service is Managed Payroll. Not software. Not a login you have to manage. A fully managed
              service where our team runs payroll, taxes, and filings for you, end to end, in all 50 states. At $25 to
              $45 per employee per month, all-inclusive, we replace what would otherwise cost a business $60,000 to
              $100,000 a year in a dedicated internal hire. You get accuracy, compliance, and a real person to call
              when something needs to be fixed. No call centers. No ticket queues.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              For businesses that prefer to keep HR in-house, our HCM Software platform, powered by iSolved, puts
              payroll, HR, time tracking, and benefits on one connected system. We handle the implementation,
              configuration, and ongoing support so your team is never stuck navigating a platform alone or stitching
              together tools that do not talk to each other. Seven million employees run on iSolved. Your team can too,
              with BEG behind it.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              When a business needs to fill a specialized role and the traditional hiring process is taking too long,
              our Job Placement services, powered by iSolved, step in. We source, screen, and shortlist candidates
              in 23 to 35 days on average, at roughly 50% less than what contingency recruiters charge, with an 86%
              fill rate and a 45-day replacement guarantee on every placement. We are not a staffing agency. We are a
              milestone-based recruiting partner that gets compensated when results are delivered.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Beyond professional services, BEG is a network. Our DFW Leadership Connect events bring together
              entrepreneurs and executives every month, creating relationships that open doors, generate referrals,
              and build the kind of community that makes building a business something worth doing.
            </p>
            <p>
              If payroll is eating time your team should not be spending on it, if your HR stack is fragmented and
              your people feel it, or if a key role has been open too long, the question worth asking is: what would
              it look like to solve that, at a fraction of what you are currently spending? That is the conversation
              we have on every discovery call. Fifteen minutes. No pressure. Just honest answers about whether we
              can help and what it would cost.
            </p>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/services/managed-payroll" className="btn btn--gold">Managed Payroll</Link>
            <Link href="/services/hcm-software" className="btn btn--gold">HCM Software</Link>
            <Link href="/services/job-placement" className="btn btn--gold">Job Placement</Link>
          </div>
        </div>
      </section>

      {/* Board teaser */}
      <section className="section section--soft" style={{ padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: '860px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 style={{ fontSize: '1.5rem', margin: '4px 0 8px' }}>Meet the Board of Directors</h2>
            <p style={{ color: 'var(--clr-body)', margin: 0 }}>
              Six leaders across HR, finance, sales, insurance, and cybersecurity guiding BEG and its 1,500+ member network.
            </p>
          </div>
          <Link href="/board-of-directors" className="btn btn--gold" style={{ flexShrink: 0 }}>
            View the Board
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section section--soft" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="trust-row">
            <div><b>1,500+</b><small>Network Members</small></div>
            <div><b>All 50 States</b><small>Payroll Coverage</small></div>
            <div><b>3 Services</b><small>Managed Payroll, HCM, Placement</small></div>
            <div><b>iSolved</b><small>Powered by 7M+ Employee Platform</small></div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Work With Us</p>
          <h2 style={{ color: '#fff' }}>Let&apos;s find out if BEG is the right fit.</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Book a 15-minute discovery call. We&apos;ll learn about your business and tell you honestly whether we can help and what it costs.
          </p>
          <div style={{ marginTop: '26px', textAlign: 'center' }}>
            <a
              className="btn btn--gold"
              href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
