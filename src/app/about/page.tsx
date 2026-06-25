import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Business Executive Group | DFW Entrepreneur Network',
  description: 'BEG serves 1,500+ entrepreneurs in DFW with managed payroll, HCM software, and job placement. Meet our board and leadership team.',
  alternates: {
    canonical: 'https://beghr.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">About Us</p>
          <h1>Built by business owners, for business owners.</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Business Executive Group is an established entrepreneur network and resource hub based in Dallas-Fort Worth,
            with 1,500+ member entrepreneurs, a board of directors, and active corporate sponsors.
          </p>
        </div>
      </section>

      {/* Body content coming soon */}

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Work With Us</p>
          <h2 style={{ color: '#fff' }}>Ready to get started?</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Book a 15-minute discovery call. We&apos;ll learn about your business and tell you honestly whether we can help.
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
