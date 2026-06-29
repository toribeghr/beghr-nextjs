import { type CSSProperties } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load the heavy interactive grader so it is only bundled on pages that actually
// render the 'grader' variant. Most usages are the lightweight 'link' variant, which
// previously still pulled the full grader into every page's bundle (build OOM risk).
const JobDescriptionGrader = dynamic(() => import('./JobDescriptionGrader'));

type RelatedToolProps = {
  variant: 'link' | 'grader';
  eyebrow?: string;
  heading: string;
  description: string;
  href?: string;
  cta?: string;
};

const wrap: CSSProperties = {
  margin: '2.5rem 0',
  background: '#FBF3E8',
  border: '1px solid #ECAC60',
  borderRadius: '10px',
  boxSizing: 'border-box',
  width: '100%',
};

const eyebrowStyle: CSSProperties = {
  margin: '0 0 0.4rem',
  fontWeight: 700,
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#a9772f',
};

const headingStyle: CSSProperties = {
  margin: '0 0 0.55rem',
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: 1.25,
  color: '#000',
};

const descStyle: CSSProperties = { margin: '0 0 1.15rem', color: '#444', lineHeight: 1.6 };

export default function RelatedTool({
  variant,
  eyebrow = 'Free Tool',
  heading,
  description,
  href,
  cta = 'Open the free tool →',
}: RelatedToolProps) {
  if (variant === 'grader') {
    return (
      <section style={{ margin: '2.5rem 0' }}>
        <div style={{ ...wrap, margin: 0, padding: '1.5rem 1.5rem 0.75rem' }}>
          <p style={eyebrowStyle}>{eyebrow}</p>
          <p style={headingStyle}>{heading}</p>
          <p style={{ ...descStyle, marginBottom: '0.5rem' }}>{description}</p>
        </div>
        <JobDescriptionGrader />
      </section>
    );
  }

  return (
    <aside style={{ ...wrap, borderLeft: '5px solid #ECAC60', padding: '1.5rem' }}>
      <p style={eyebrowStyle}>{eyebrow}</p>
      <p style={headingStyle}>{heading}</p>
      <p style={descStyle}>{description}</p>
      <a
        href={href}
        style={{
          display: 'inline-block',
          background: '#ECAC60',
          color: '#000',
          padding: '0.8rem 1.75rem',
          borderRadius: '4px',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        {cta}
      </a>
    </aside>
  );
}
