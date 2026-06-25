import { ReactNode } from 'react';

interface ServicePageProps {
  title: string;
  description: string;
  calendlyLink: string;
  eyebrow?: string;
  heroStats?: Array<{ label: string; value: string }>;
  children?: ReactNode;
}

export default function ServicePage({
  title,
  description,
  calendlyLink,
  eyebrow,
  heroStats,
  children,
}: ServicePageProps) {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>{description}</p>
          <div className="hero-cta">
            <a
              className="btn btn--gold"
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </a>
          </div>
          {heroStats && heroStats.length > 0 && (
            <div className="trust-row">
              {heroStats.map((stat, i) => (
                <div key={i}>
                  <b>{stat.value}</b>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {children}

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Ready?</p>
          <h2 style={{ color: '#fff' }}>Let&apos;s talk about your needs.</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Book a 15-minute discovery call. We&apos;ll learn about your business and tell you honestly whether we can help.
          </p>
          <div style={{ marginTop: '26px', textAlign: 'center' }}>
            <a
              className="btn btn--gold"
              href={calendlyLink}
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
          href={calendlyLink}
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
