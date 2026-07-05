'use client';

import { useEffect } from 'react';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, Configure } from 'react-instantsearch';
import './SearchOverlay.css';

/**
 * Full-site search overlay, opened from the nav (desktop and mobile).
 * A visitor on any one of ~3,000 pages can find the next relevant page in
 * one search instead of bouncing to Google. Facets keep results scoped to
 * the vertical BEG wants them in (payroll first, per priority order).
 *
 * Search-only API key is safe to expose client-side. Never use the admin
 * key here. The client is created lazily and guarded so the app builds and
 * renders even before the NEXT_PUBLIC_ALGOLIA_* env vars are set in Vercel.
 */

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;
const searchClient = appId && searchKey ? algoliasearch(appId, searchKey) : null;

type Hit = {
  path: string;
  vertical?: string;
  title: string;
  metaDescription?: string;
};

function HitCard({ hit }: { hit: Hit }) {
  return (
    <a href={hit.path} className="beg-search-hit">
      {hit.vertical && <span className="beg-search-hit-vertical">{hit.vertical}</span>}
      <span className="beg-search-hit-title">{hit.title}</span>
      {hit.metaDescription && <span className="beg-search-hit-desc">{hit.metaDescription}</span>}
    </a>
  );
}

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  // InstantSearch keeps internal state; unmounting on close instead of
  // hiding with CSS resets the query each time it's reopened.
  if (!open) return null;

  return (
    <div className="beg-search-overlay" role="dialog" aria-modal="true">
      <div className="beg-search-scrim" onClick={onClose} />
      <div className="beg-search-panel">
        <button type="button" className="beg-search-close" onClick={onClose} aria-label="Close search">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {searchClient ? (
          <InstantSearch searchClient={searchClient} indexName="beghr_pages">
            <Configure hitsPerPage={8} />
            <SearchBox
              autoFocus
              placeholder="Search payroll, HCM, job placement, guides..."
              classNames={{
                root: 'beg-search-box',
                input: 'beg-search-input',
                submitIcon: 'beg-search-submit-icon',
              }}
            />

            <div className="beg-search-body">
              <aside className="beg-search-facets">
                <p className="beg-search-facets-label">Filter by</p>
                <RefinementList attribute="vertical" limit={8} />
              </aside>

              <div className="beg-search-results">
                <Hits hitComponent={HitCard} />
              </div>
            </div>
          </InstantSearch>
        ) : (
          <p className="beg-search-unconfigured">
            Search is not configured yet. Set NEXT_PUBLIC_ALGOLIA_APP_ID and
            NEXT_PUBLIC_ALGOLIA_SEARCH_KEY in the environment to enable it.
          </p>
        )}
      </div>
    </div>
  );
}
