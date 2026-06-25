import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Business Executive Group | Book a Discovery Call',
  description: 'Talk to a real person at BEG. Book a 15-minute discovery call, call us at 469-412-1204, or send us a message.',
  alternates: {
    canonical: 'https://beghr.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Contact Us</p>
          <h1>Let&apos;s talk.</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Book a 15-minute discovery call, call us directly, or send a message. A real person on our team will get back to you.
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

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '620px' }}>
          <div className="cards">
            <article className="card reveal">
              <h3>Phone</h3>
              <p><a href="tel:4694121204">469-412-1204</a></p>
            </article>
            <article className="card reveal">
              <h3>Email</h3>
              <p><a href="mailto:tori.wint@beghr.com">tori.wint@beghr.com</a></p>
            </article>
            <article className="card reveal">
              <h3>Location</h3>
              <p>Celina, TX — Serving businesses nationwide</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
