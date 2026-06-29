import { ReactNode } from 'react';
import HeroImageBox from '@/components/HeroImageBox';

interface ServicePageProps {
  title: string;
  description: string;
  calendlyLink: string;
  eyebrow?: string;
  heroStats?: Array<{ label: string; value: string }>;
  imageSrc?: string;
  imageAlt?: string;
  showHeroImage?: boolean;
  children?: ReactNode;
}

export default function ServicePage({
  title,
  description,
  calendlyLink,
  eyebrow,
  heroStats,
  imageSrc,
  imageAlt,
  showHeroImage = false,
  children,
}: ServicePageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: title,
            description,
            serviceType: title,
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: 'United States',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.lede', '.faq-item h3', '.faq-item p'],
            },
          }),
        }}
      />
      <section className="hero">
        <div className="container">
          {showHeroImage ? (
            <div className="hero-split">
              <div className="hero-split-text">
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
              </div>
              <HeroImageBox src={imageSrc} alt={imageAlt} />
            </div>
          ) : (
            <div className="hero-single">
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
            </div>
          )}
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

    </>
  );
}
