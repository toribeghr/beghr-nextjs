import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership | Business Executive Group',
  description: 'Join 1,500+ DFW entrepreneurs in the Business Executive Group network. Access events, resources, and a community built for business owners.',
  alternates: {
    canonical: 'https://beghr.com/network/membership',
  },
};

export default function MembershipPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Network · Membership</p>
          <h1>Join 1,500+ DFW entrepreneurs.</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Business Executive Group is the entrepreneur network and resource hub for Dallas-Fort Worth business owners.
            Monthly events, peer connections, and access to the services your business actually needs.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn--gold"
              href="https://calendly.com/tori-beghr?id=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn About Membership
            </a>
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
