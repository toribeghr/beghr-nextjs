'use client';

import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, Configure, SearchBox, useHits, useSearchBox } from 'react-instantsearch';
import './InlineSearch.css';

/**
 * Inline search band. Same Algolia index as the header SearchOverlay, but
 * embedded in-page with results shown as-you-type. Placed beneath the hero
 * on the homepage, on each service hub (scoped to that vertical via the
 * `vertical` prop -> Configure filter), and on the blog index.
 *
 * Guarded client so pages still render before the NEXT_PUBLIC_ALGOLIA_* env
 * vars exist; the band simply hides itself when search isn't configured.
 */

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;
const searchClient = appId && searchKey ? algoliasearch(appId, searchKey) : null;

type InlineHit = {
  path: string;
  title: string;
  vertical?: string;
} & Record<string, unknown>;

type Props = {
  vertical?: string;
  heading?: string;
  subhead?: string;
  chips?: string[];
};

function Results() {
  const { query } = useSearchBox();
  const { items } = useHits<InlineHit>();
  if (!query) return null;
  if (items.length === 0) {
    return <p className="beg-inline-empty">No pages match &ldquo;{query}&rdquo; yet.</p>;
  }
  return (
    <div className="beg-inline-results">
      {items.map((hit) => (
        <a key={hit.objectID} href={hit.path} className="beg-inline-hit">
          {hit.vertical && <span className="beg-inline-tag">{hit.vertical}</span>}
          <span className="beg-inline-hit-title">{hit.title}</span>
        </a>
      ))}
    </div>
  );
}

function Chips({ chips }: { chips: string[] }) {
  const { refine } = useSearchBox();
  return (
    <div className="beg-inline-chips">
      {chips.map((c) => (
        <button key={c} type="button" className="beg-inline-chip" onClick={() => refine(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}

export default function InlineSearch({
  vertical,
  heading = 'Not sure where to start?',
  subhead = "Type your HR need and we'll point you to the right page across 3,000+ guides.",
  chips = ['payroll pricing', 'legal hiring', 'benefits by industry', 'isolved HCM'],
}: Props) {
  if (!searchClient) return null;

  return (
    <section className="beg-inline-band" aria-label="Site search">
      <div className="beg-inline-inner">
        <p className="beg-inline-heading">
          <svg className="beg-inline-ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {heading}
        </p>
        <p className="beg-inline-sub">{subhead}</p>

        <InstantSearch searchClient={searchClient} indexName="beghr_pages">
          <Configure hitsPerPage={6} filters={vertical ? `vertical:"${vertical}"` : undefined} />
          <SearchBox
            placeholder="Search payroll, HCM, job placement, guides..."
            classNames={{
              root: 'beg-inline-box',
              form: 'beg-inline-form',
              input: 'beg-inline-input',
              submit: 'beg-inline-submit',
              reset: 'beg-inline-reset',
            }}
          />
          <Chips chips={chips} />
          <Results />
        </InstantSearch>
      </div>
    </section>
  );
}
