import Link from 'next/link';
import { jpIndustries, jpMetros } from '@/lib/jpGridData';
import { jpRolesByIndustry } from '@/lib/jpInternalLinks';
import { cityHasWage } from '@/components/CityTemplate';

// Hub -> spoke internal links for a job-placement industry hub page.
// Links to every role page under the industry and to every INDEXABLE city page
// (metros with real wage data). Noindexed thin city pages are intentionally
// excluded so the hub only passes equity to pages meant to rank.
export default function JobPlacementHubLinks({ industry }: { industry: string }) {
  const ind = jpIndustries[industry];
  if (!ind) return null;

  const name = ind.name;
  const roles = jpRolesByIndustry[industry] || [];
  const cities = jpMetros.filter((m) => cityHasWage(industry, m.slug));

  if (!roles.length && !cities.length) return null;

  const linkStyle = { color: '#000000', fontWeight: 600 as const, textDecoration: 'none' };

  return (
    <section className="section section--soft">
      <div className="container" style={{ maxWidth: '960px' }}>
        <div className="head center reveal">
          <p className="eyebrow">Explore {name} Placement</p>
          <h2>Roles and markets we place in {name.toLowerCase()}</h2>
        </div>

        {roles.length > 0 && (
          <div className="reveal" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.9rem' }}>{name} roles we recruit</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.6rem 1.5rem' }}>
              {roles.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/job-placement/${industry}/${r.slug}`} style={linkStyle}>{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {cities.length > 0 && (
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.9rem' }}>{name} placement by city</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.55rem 1.5rem' }}>
              {cities.map((m) => (
                <li key={m.slug}>
                  <Link href={`/services/job-placement/${industry}/${m.slug}`} style={linkStyle}>{m.name}, {m.stateAbbr}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
