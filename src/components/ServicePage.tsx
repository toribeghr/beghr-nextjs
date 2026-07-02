import { ReactNode } from 'react';
import HeroImageBox from '@/components/HeroImageBox';
import HeroVideoBox from '@/components/HeroVideoBox';

const heroVideoCss = `
.hero-video-split{display:flex;flex-direction:column;gap:6px}
.hero-video-split .hv-video{margin:10px 0 22px}
@media(min-width:900px){
.hero-video-split{display:grid;grid-template-columns:1.05fr .95fr;column-gap:48px;align-items:center;grid-template-areas:"a v" "b v" "c v" "d v"}
.hero-video-split .hv-eyebrow{grid-area:a;align-self:end;margin:0}
.hero-video-split .hv-title{grid-area:b;margin:0}
.hero-video-split .hv-lede{grid-area:c;margin:14px 0 0}
.hero-video-split .hv-cta{grid-area:d;align-self:start;margin-top:24px}
.hero-video-split .hv-video{grid-area:v;align-self:center;margin:0}
}
`;

interface ServicePageProps {
  title: string;
  description: string;
  calendlyLink: string;
  eyebrow?: string;
  heroStats?: Array<{ label: string; value: string }>;
  imageSrc?: string;
  imageAlt?: string;
  showHeroImage?: boolean;
  heroVideoId?: string;
  heroCta?: ReactNode; // optional replacement for the hero discovery-call button (instant pricing CTA)
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
  heroVideoId,
  heroCta,
  children,
}: ServicePageProps) {
  const heroButton = heroCta ?? (
    <a className="btn btn--gold" href={calendlyLink} target="_blank" rel="noopener noreferrer">
      Book a Discovery Call
    </a>
  );
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
      {heroVideoId && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: title,
              description,
              thumbnailUrl: `https://i.ytimg.com/vi/${heroVideoId}/maxresdefault.jpg`,
              uploadDate: '2026-06-30',
              embedUrl: `https://www.youtube.com/embed/${heroVideoId}`,
              contentUrl: `https://www.youtube.com/watch?v=${heroVideoId}`,
            }),
          }}
        />
      )}
      <section className="hero">
        <div className="container">
          {heroVideoId ? (
            <>
              <style dangerouslySetInnerHTML={{ __html: heroVideoCss }} />
              <div className="hero-video-split">
                {eyebrow && <p className="eyebrow hv-eyebrow">{eyebrow}</p>}
                <h1 className="hv-title">{title}</h1>
                <p className="lede hv-lede" style={{ margin: '18px 0 0' }}>{description}</p>
                <HeroVideoBox videoId={heroVideoId} title={title} />
                <div className="hero-cta hv-cta">{heroButton}</div>
              </div>
            </>
          ) : showHeroImage ? (
            <div className="hero-split">
              <div className="hero-split-text">
                {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                <h1>{title}</h1>
                <p className="lede" style={{ margin: '18px 0 28px' }}>{description}</p>
                <div className="hero-cta">{heroButton}</div>
              </div>
              <HeroImageBox src={imageSrc} alt={imageAlt} />
            </div>
          ) : (
            <div className="hero-single">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h1>{title}</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>{description}</p>
              <div className="hero-cta">{heroButton}</div>
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
          <h2 style={{ color: '#fff' }}>{heroCta ? 'See your price before you talk to anyone.' : 'Let’s talk about your needs.'}</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            {heroCta
              ? 'Answer a few questions, get your exact number in about 90 seconds. No call required, no commitment.'
              : 'Book a 15-minute discovery call. We’ll learn about your business and tell you honestly whether we can help.'}
          </p>
          <div style={{ marginTop: '26px', textAlign: 'center' }}>{heroButton}</div>
        </div>
      </section>

    </>
  );
}
