import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board of Directors | Business Executive Group',
  description: 'Meet the BEG board -- leaders in HR, finance, sales, insurance, and cybersecurity serving our 1,500+ member entrepreneur network in Dallas-Fort Worth.',
  alternates: {
    canonical: 'https://beghr.com/board-of-directors',
  },
  openGraph: {
    title: 'Board of Directors | Business Executive Group',
    description: 'Meet the BEG board -- leaders in HR, finance, sales, insurance, and cybersecurity serving our 1,500+ member entrepreneur network in Dallas-Fort Worth.',
    url: 'https://beghr.com/board-of-directors',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group Board of Directors' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Board of Directors | Business Executive Group', description: 'Meet the BEG board -- leaders in HR, finance, sales, insurance, and cybersecurity serving our 1,500+ member entrepreneur network in Dallas-Fort Worth.', images: ['https://beghr.com/assets/og-image.png'] },
};

const board = [
  {
    name: 'John Delao',
    title: 'CEO',
    photo: '/assets/board/john-delao.webp',
    bio: 'As CEO, John provides strategic leadership, oversees operations, and drives initiatives that strengthen member engagement and community impact. He is responsible for guiding the organization\'s vision, managing partnerships, and ensuring compliance while fostering growth and advocacy for the business community.',
  },
  {
    name: 'Tori Wint',
    title: 'Human Resources',
    photo: '/assets/board/tori-wint.webp',
    bio: 'Tori consults clients on talent strategy, recruitment, employee development, compliance, payroll & benefits, and workforce engagement while fostering an inclusive environment that supports both staff and members.',
  },
  {
    name: 'Anthony Moretti',
    title: 'VP of Sales',
    photo: '/assets/board/anthony-moretti.webp',
    bio: 'Serial entrepreneur. Built 3 companies past $1M in sales. Now heading revenue growth as VP of Sales for BEG\'s HR and legal services division.',
  },
  {
    name: 'Bill Clawson',
    title: 'CFO',
    photo: '/assets/board/bill-clawson.webp',
    bio: 'Bill consults on financial strategy, budgeting, and compliance to ensure the organization\'s fiscal health. He is responsible for managing resources, guiding investment decisions, and providing transparent reporting that supports long-term growth and member confidence.',
  },
  {
    name: 'Paxton Kelso',
    title: 'Property & Casualty',
    photo: '/assets/board/paxton-kelso.webp',
    bio: 'Paxton is a dedicated Property and Casualty Broker committed to helping individuals and businesses navigate the complex world of insurance. With 20+ years of experience, he specializes in crafting customized coverage solutions for home, auto, liability, and commercial risks.',
  },
  {
    name: 'Marissa Bybee',
    title: 'Cybersecurity',
    photo: '/assets/board/marissa-bybee.webp',
    bio: 'Marissa is a highly accomplished Cybersecurity Sales Executive specializing in delivering enterprise-grade security solutions that safeguard critical assets and drive business resilience across cloud security, network defense, and risk management.',
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-single">
            <p className="eyebrow">Leadership</p>
            <h1>Board of Directors</h1>
            <p className="lede" style={{ margin: '18px 0 0' }}>
              Our board brings deep expertise across business operations, HR, finance, insurance, cybersecurity, and sales -- united by a commitment to serving the DFW entrepreneur community.
            </p>
          </div>
        </div>
      </section>

      {/* Board Grid */}
      <section className="section" style={{ background: '#0a0a0a', padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px 32px',
            }}
          >
            {board.map((member) => (
              <div key={member.name} className="reveal" style={{ textAlign: 'center' }}>
                {/* Photo */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: 280,
                    margin: '0 auto 20px',
                    aspectRatio: '4/5',
                    background: '#000',
                    borderRadius: 12,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Name & title */}
                <h3 style={{ color: '#fff', fontSize: '1.15rem', margin: '0 0 4px', fontWeight: 600 }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--gold, #ECAC60)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', margin: '0 0 14px' }}>
                  {member.title}
                </p>
                <p style={{ color: '#9aa3b0', fontSize: '.9rem', lineHeight: 1.65, maxWidth: 300, margin: '0 auto' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
