import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Business Executive Group | Board of Directors | BEG HR',
  description: 'BEG serves 1,500+ DFW entrepreneurs with managed payroll, HCM software, and job placement. Meet our board of directors and leadership team.',
  alternates: {
    canonical: 'https://beghr.com/about',
  },
};

const board = [
  {
    name: 'John Delao',
    title: 'CEO',
    photo: '/assets/board/john-delao.png',
    bio: 'As CEO, John provides strategic leadership, oversees operations, and drives initiatives that strengthen member engagement and community impact. He is responsible for guiding the organization\'s vision, managing partnerships, and ensuring compliance while fostering growth and advocacy for the business community.',
  },
  {
    name: 'Tori Wint',
    title: 'Human Resources',
    photo: '/assets/board/tori-wint.png',
    bio: 'Tori consults clients on talent strategy, recruitment, employee development, compliance, payroll & benefits, and workforce engagement while fostering an inclusive environment that supports both staff and members.',
  },
  {
    name: 'Anthony Moretti',
    title: 'VP of Sales',
    photo: '/assets/board/anthony-moretti.png',
    bio: 'Serial entrepreneur. Built 3 companies past $1M in sales. Now heading revenue growth as VP of Sales for BEG\'s HR and legal services division.',
  },
  {
    name: 'Bill Clawson',
    title: 'CFO',
    photo: '/assets/board/bill-clawson.png',
    bio: 'Bill consults on financial strategy, budgeting, and compliance to ensure the organization\'s fiscal health. He is responsible for managing resources, guiding investment decisions, and providing transparent reporting that supports long-term growth and member confidence.',
  },
  {
    name: 'Paxton Kelso',
    title: 'Property & Casualty',
    photo: '/assets/board/paxton-kelso.png',
    bio: 'Paxton is a dedicated Property and Casualty Broker committed to helping individuals and businesses navigate the complex world of insurance. With 20+ years of experience, he specializes in crafting customized coverage solutions for home, auto, liability, and commercial risks.',
  },
  {
    name: 'Marissa Bybee',
    title: 'Cybersecurity',
    photo: '/assets/board/marissa-bybee.png',
    bio: 'Marissa is a highly accomplished Cybersecurity Sales Executive specializing in delivering enterprise-grade security solutions that safeguard critical assets and drive business resilience across cloud security, network defense, and risk management.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <p className="eyebrow">About Us</p>
          <h1>Built by business owners, for business owners.</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Business Executive Group is an established entrepreneur network and professional services organization
            serving 1,500+ members across Dallas-Fort Worth.
          </p>
          <div className="hero-cta">
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

      {/* About Us — 500-word section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="head reveal">
            <p className="eyebrow">Who We Are</p>
            <h2>The HR and workforce partner DFW businesses have been missing.</h2>
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
              professional services organization based in Dallas-Fort Worth, with 1,500+ member entrepreneurs, a board
              of directors, and active corporate sponsors including iSolved and WTW. Our members are business owners,
              founders, and executives who understand what it means to wear every hat and have decided there are certain
              hats worth handing off.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Our core service is Managed Payroll. Not software. Not a login you have to manage. A fully managed
              service where our team runs payroll, taxes, and filings for you, end to end, in all 50 states. At $25 to
              $35 per employee per month, all-inclusive, we replace what would otherwise cost a business $60,000 to
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
              and build the kind of community that makes running a business in North Texas something worth doing.
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
            <Link href="/services/hcm-software" className="btn" style={{ background: 'var(--clr-navy)', color: '#fff' }}>HCM Software</Link>
            <Link href="/services/job-placement" className="btn" style={{ background: 'transparent', border: '2px solid var(--clr-navy)', color: 'var(--clr-navy)' }}>Job Placement</Link>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section" style={{ background: '#0a0a0a', padding: '80px 0' }}>
        <div className="container">
          <div className="head center reveal" style={{ marginBottom: '56px' }}>
            <p className="eyebrow" style={{ color: 'var(--clr-gold, #C9A84C)' }}>Leadership</p>
            <h2 style={{ color: '#fff' }}>Board of Directors</h2>
            <p className="lede center" style={{ color: '#9aa3b0', marginTop: '12px' }}>
              Our board brings deep expertise across business operations, HR, finance, insurance, cybersecurity, and sales.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px 32px',
            }}
          >
            {board.map((member) => (
              <div key={member.name} className="reveal" style={{ textAlign: 'center' }}>
                {/* Photo */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: 280,
                    margin: '0 auto 20px',
                    aspectRatio: '4/5',
                    background: '#111',
                    borderRadius: 12,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Name & title */}
                <h3 style={{ color: '#fff', fontSize: '1.15rem', margin: '0 0 4px', fontWeight: 600 }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--clr-gold, #C9A84C)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', margin: '0 0 14px' }}>
                  {member.title}
                </p>
                <p style={{ color: '#9aa3b0', fontSize: '.9rem', lineHeight: 1.65, maxWidth: 300, margin: '0 auto' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section section--soft" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="trust-row">
            <div><b>1,500+</b><small>DFW Entrepreneur Members</small></div>
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
              href="https://calendly.com/tori-beghr?id=1"
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
