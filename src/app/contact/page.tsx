import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Business Executive Group | BEG HR Services',
  description: 'Contact Business Executive Group in Celina, TX. Book a discovery call, call 469-412-1204, or send a message. Managed payroll, HCM software, and job placement services nationwide.',
  alternates: {
    canonical: 'https://beghr.com/contact',
  },
};

const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfz5Wmc7ubssptpoQV7KqtNWUhzCk_C_K5tzN7xmSqLy5OAkQ/viewform?embedded=true';

export default function ContactPage() {
  return (
    <>
      {/* ContactPage + LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact Business Executive Group',
              url: 'https://beghr.com/contact',
              description:
                'Contact BEG for managed payroll, HCM software, and job placement services. Call, email, or complete the form — a real person responds the same business day.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Business Executive Group',
              url: 'https://beghr.com',
              telephone: '469-412-1204',
              email: 'tori.wint@beghr.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Celina',
                addressRegion: 'TX',
                postalCode: '75009',
                addressCountry: 'US',
              },
              areaServed: 'United States',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Contact Us</p>
          <h1>Let&apos;s talk about your business.</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Book a 15-minute discovery call, call or email us directly, or complete the form below.
            A real person on our team will get back to you the same business day.
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
          <div className="trust-row" style={{ marginTop: '28px' }}>
            <div><b>Same Day</b><small>Response Mon&ndash;Sat</small></div>
            <div><b>Celina, TX</b><small>Serving all 50 states</small></div>
            <div><b>Real People</b><small>No bots, no call centers</small></div>
          </div>
        </div>
      </section>

      {/* Contact info + Google Form */}
      <section className="section section--soft">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', alignItems: 'start' }}>

            {/* Left: contact details */}
            <div>
              <div className="head reveal">
                <p className="eyebrow">Get in Touch</p>
                <h2>Reach us directly</h2>
              </div>

              <div className="card reveal" style={{ marginTop: '24px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--color-bg-soft, #f4f5f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>📞</div>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--clr-muted)', margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Phone</p>
                    <a href="tel:4694121204" style={{ fontSize: 15, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>469-412-1204</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--color-bg-soft, #f4f5f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>✉️</div>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--clr-muted)', margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Email</p>
                    <a href="mailto:tori.wint@beghr.com" style={{ fontSize: 15, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>tori.wint@beghr.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--color-bg-soft, #f4f5f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>📍</div>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--clr-muted)', margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Location</p>
                    <p style={{ fontSize: 15, fontWeight: 500, margin: '0 0 2px' }}>Celina, TX 75009</p>
                    <p style={{ fontSize: 12, color: 'var(--clr-muted)', margin: 0 }}>Serving businesses nationwide</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--color-bg-soft, #f4f5f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>🕐</div>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--clr-muted)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Business Hours (CT)</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3px 14px', fontSize: 13 }}>
                      <span style={{ color: 'var(--clr-muted)' }}>Mon&ndash;Sat</span>
                      <span style={{ fontWeight: 500 }}>9:00 AM &ndash; 5:00 PM</span>
                      <span style={{ color: 'var(--clr-muted)' }}>Sunday</span>
                      <span style={{ fontWeight: 500 }}>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internal service links */}
              <div className="card reveal" style={{ marginTop: '16px' }}>
                <p style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--clr-muted)', margin: '0 0 12px' }}>Our Services</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Link href="/services/managed-payroll" style={{ fontSize: 14, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>Managed Payroll &rarr;</Link>
                  <Link href="/services/hcm-software" style={{ fontSize: 14, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>HCM Software &rarr;</Link>
                  <Link href="/services/job-placement" style={{ fontSize: 14, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>Job Placement &rarr;</Link>
                  <Link href="/network/membership" style={{ fontSize: 14, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>BEG Membership &rarr;</Link>
                  <Link href="/network/sponsorship" style={{ fontSize: 14, fontWeight: 500, color: 'inherit', textDecoration: 'none' }}>Sponsorship &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Right: Google Form embed */}
            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: 16 }}>Send a Message</p>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--clr-border, #e2e5ea)', background: '#fff' }}>
                <iframe
                  src={FORM_EMBED_URL}
                  width="100%"
                  height="800"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Business Executive Group"
                  style={{ display: 'block' }}
                >
                  Loading form...
                </iframe>
              </div>
              <p style={{ fontSize: 12, color: 'var(--clr-muted)', marginTop: 10 }}>
                By submitting this form you agree to our{' '}
                <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>.
                We never sell your information.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Prefer a Call?</p>
          <h2 style={{ color: '#fff' }}>Book a 15-minute discovery call.</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Tell us what your business needs. We&apos;ll tell you honestly whether we can help and what it costs.
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
