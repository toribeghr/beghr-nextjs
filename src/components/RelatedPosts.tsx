export interface RelatedPost {
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  heading?: string;
}

export default function RelatedPosts({ posts, heading = 'From the blog' }: RelatedPostsProps) {
  return (
    <section
      style={{
        background: '#f9f9f9',
        padding: '4rem 0',
        borderTop: '1px solid #e8e8e8',
      }}
    >
      <div className="container">
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888',
            margin: '0 0 0.5rem',
          }}
        >
          {heading}
        </p>
        <div
          style={{
            width: 36,
            height: 3,
            background: '#ECAC60',
            borderRadius: 2,
            marginBottom: '1.75rem',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="related-posts-grid"
        >
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                border: '1px solid #e8e8e8',
                borderTop: '3px solid #ECAC60',
                borderRadius: 8,
                padding: '1.25rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 0.2s',
              }}
              className="related-post-card"
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#ECAC60',
                  marginBottom: '0.5rem',
                  display: 'block',
                }}
              >
                {post.category}
              </span>
              <p
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#000',
                  margin: '0 0 0.6rem',
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#555',
                  margin: '0 0 1rem',
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {post.excerpt}
              </p>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                Read more &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .related-posts-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .related-post-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
      ` }} />
    </section>
  );
}
