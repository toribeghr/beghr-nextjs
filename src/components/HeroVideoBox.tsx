'use client';

import { useState } from 'react';

interface HeroVideoBoxProps {
  videoId: string;
  title?: string;
}

export default function HeroVideoBox({ videoId, title }: HeroVideoBoxProps) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="hv-video"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(236,172,96,0.45)',
        background: '#0b0b0b',
        boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
      }}
    >
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label="Play the managed payroll overview video"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
            padding: 0,
            cursor: 'pointer',
            background: `#0b0b0b url(${thumb}) center / cover no-repeat`,
          }}
        >
          <span style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }} />
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 76,
              height: 76,
              borderRadius: '50%',
              background: 'rgba(236,172,96,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
