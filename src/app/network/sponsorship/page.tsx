import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsorship | Business Executive Group',
  description: 'Sponsor BEG events and reach 1,500+ DFW entrepreneurs. Build brand visibility with decision-makers in the Dallas-Fort Worth business community.',
  alternates: {
    canonical: 'https://beghr.com/network/sponsorship',
  },
  openGraph: {
    title: 'Sponsorship | Business Executive Group',
    description: 'Sponsor BEG events and reach 1,500+ DFW entrepreneurs. Build brand visibility with decision-makers in the Dallas-Fort Worth business community.',
    url: 'https://beghr.com/network/sponsorship',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Sponsorship | Business Executive Group', description: 'Sponsor BEG events and reach 1,500+ DFW entrepreneurs. Build brand visibility with decision-makers in the Dallas-Fort Worth business community.', images: ['https://beghr.com/assets/og-image.png'] },

};

export default function SponsorshipPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-single">
              <p className="eyebrow">Network · Sponsorship</p>
              <h1>Put your brand in front of DFW decision-makers.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                BEG events bring together 1,500+ entrepreneurs and business owners across Dallas-Fort Worth.
                Sponsorship puts your brand in the room where deals get made.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn--gold"
                  href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Sponsorship
                </a>
              </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Coming Soon</p>
            <h2>Sponsorship packages are on the way.</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              We are building out the full sponsorship page. In the meantime, book a call to discuss how your brand can partner with BEG.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Partner With Us</p>
          <h2 style={{ color: '#fff' }}>Let&apos;s talk sponsorship.</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Book a 15-minute call with our team to explore sponsorship opportunities with Business Executive Group.
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
