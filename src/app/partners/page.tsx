import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BEG Partner Program | CPA & Broker Referrals',
  description: 'Refer your clients to BEG for managed payroll, HCM software, and job placement. No conflict of interest — clean payroll data and no lane-crossing.',
  alternates: { canonical: 'https://beghr.com/partners' },
  openGraph: {
    title: 'BEG Partner Program | CPA & Broker Referrals',
    description: 'Refer your clients to BEG for managed payroll, HCM software, and job placement. No conflict of interest — clean payroll data and no lane-crossing.',
    url: 'https://beghr.com/partners',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'BEG Partner Program for CPAs and Insurance Brokers' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'BEG Partner Program | CPA & Broker Referrals', description: 'Refer your clients to BEG for managed payroll, HCM software, and job placement. No conflict of interest — clean payroll data and no lane-crossing.', images: ['https://beghr.com/assets/og-image.png'] },
};

const partners = [
  {
    href: '/partners/broker',
    title: 'Insurance & Benefits Brokers',
    description: 'When your clients\' payroll is managed by BEG, workers\' comp audits run cleaner, benefits data syncs more easily, and you look like the advisor who solved the whole problem.',
    cta: 'Learn more →',
    icon: '🤝',
  },
];

export default function PartnersPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Partner Program</p>
              <h1>Refer Your Clients to a Payroll Service You Can Stand Behind</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                BEG manages payroll for businesses nationwide at $25 to $45 per employee per month. We are fully managed, compliance-focused, and built to complement the advisory relationships you already have — not compete with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {partners.map(({ href, title, description, cta, icon }) => (
            <Link key={href} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                border: '1px solid #e5e5e5',
                borderTop: '4px solid #ECAC60',
                borderRadius: '8px',
                padding: '2rem',
                background: '#fff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{ fontSize: '2rem' }}>{icon}</div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{title}</h2>
                <p style={{ color: '#555', lineHeight: '1.65', margin: 0, flex: 1 }}>{description}</p>
                <span style={{ color: '#ECAC60', fontWeight: 700, fontSize: '0.95rem' }}>{cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why BEG</p>
            <h2>What makes BEG the right referral for your clients</h2>
          </div>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {[
              {
                title: 'No conflict with your services',
                body: 'BEG manages payroll operations. We do not do bookkeeping, tax preparation, financial planning, insurance, or benefits placement. Referring a client to BEG does not put your advisory relationship at risk.',
              },
              {
                title: 'Clean data you can actually use',
                body: 'Every pay cycle produces consistent, structured payroll records. Year-end W-2s are handled. State filings are current. The data your clients bring to your desk at tax time will be accurate and organized.',
              },
              {
                title: 'Fully managed, not software',
                body: 'BEG is not another platform your clients have to learn. We run payroll for them. Your clients get a phone call, not a login screen, when something needs to be resolved.',
              },
              {
                title: 'Works in existing systems',
                body: 'No migration required. BEG operates inside your client\'s current payroll platform, so there is no disruption to their setup and no period of doubled work during a transition.',
              },
              {
                title: 'Live in 3 to 5 business days',
                body: 'From signed agreement to first managed pay run is typically 3 to 5 business days. You can refer a client today and have them off your plate within the week.',
              },
              {
                title: 'National coverage',
                body: 'BEG manages payroll in all 50 states. Multi-state compliance, state tax registrations, and year-end filings are all included in the standard service at no extra charge.',
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Ready to discuss a referral arrangement?</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>
            Book a 15-minute call with BEG to discuss how a referral relationship works, what your clients can expect, and whether this is the right fit.
          </p>
          <a
            href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Partners', item: 'https://beghr.com/partners' },
            ],
          }),
        }}
      />
    </article>
  );
}
