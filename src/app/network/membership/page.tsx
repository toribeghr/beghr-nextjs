import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership | Business Executive Group',
  description: 'Join 1,500+ DFW entrepreneurs in the Business Executive Group network. Access events, resources, and a community built for business owners.',
  alternates: {
    canonical: 'https://www.beghr.com/network/membership',
  },
  openGraph: {
    title: 'Membership | Business Executive Group',
    description: 'Join 1,500+ DFW entrepreneurs in the Business Executive Group network. Access events, resources, and a community built for business owners.',
    url: 'https://www.beghr.com/network/membership',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Membership | Business Executive Group', description: 'Join 1,500+ DFW entrepreneurs in the Business Executive Group network. Access events, resources, and a community built for business owners.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

export default function MembershipPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-single">
              <p className="eyebrow">Network · Membership</p>
              <h1>Join 1,500+ DFW entrepreneurs.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Business Executive Group is the entrepreneur network and resource hub for Dallas-Fort Worth business owners.
                Monthly events, peer connections, and access to the services your business actually needs.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn--gold"
                  href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn About Membership
                </a>
              </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Coming Soon</p>
            <h2>Membership details are on the way.</h2>
            <p className="lede center" style={{ marginTop: '16px' }}>
              We are building out the full membership page. In the meantime, book a call to learn more about joining BEG.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Get Involved</p>
          <h2 style={{ color: '#fff' }}>Ready to connect?</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Book a 15-minute call with our team to learn how BEG membership can work for your business.
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
