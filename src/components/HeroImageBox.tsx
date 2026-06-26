interface HeroImageBoxProps {
  src?: string;
  alt?: string;
}

export default function HeroImageBox({ src, alt }: HeroImageBoxProps) {
  return (
    <div className="hero-split-img" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="hero-img-box">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div className="hero-img-placeholder">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/beg-header-image.png"
              alt="BEG"
              className="hero-img-placeholder-logo"
            />
            <span className="hero-img-placeholder-label">Photo Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  );
}
