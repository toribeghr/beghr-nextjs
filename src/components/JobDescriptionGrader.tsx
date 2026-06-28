'use client';

import { useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

const GOLD = '#ECAC60';

interface Tip {
  label: string;
  detail: string;
  good: boolean;
}

interface GradeResult {
  score: number;
  tips: Tip[];
  wordCount: number;
}

const BUZZWORDS = [
  'rockstar',
  'ninja',
  'guru',
  'wizard',
  'synergy',
  'wear many hats',
  'work hard play hard',
  'fast-paced',
  'fast paced',
  'self-starter',
  'go-getter',
  'think outside the box',
  'hit the ground running',
  'results-driven',
  'detail-oriented',
  'team player',
  'world-class',
  'cutting-edge',
];

const SELL_WORDS = [
  'benefit',
  'benefits',
  'mission',
  'growth',
  'remote',
  'flexible',
  'culture',
  'impact',
  'pto',
  'vacation',
  'health',
  'dental',
  '401k',
  '401(k)',
  'bonus',
  'equity',
  'learn',
  'mentor',
  'career',
  'develop',
];

function countBullets(text: string): number {
  const lines = text.split(/\r?\n/);
  let count = 0;
  for (const raw of lines) {
    const line = raw.trim();
    if (/^([-*•‣◦⁃∙]|\d+[.)])\s+/.test(line)) {
      count += 1;
    }
  }
  return count;
}

function gradeJD(text: string): GradeResult {
  const clean = text.trim();
  const lower = clean.toLowerCase();
  const words = clean.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const tips: Tip[] = [];
  let score = 100;

  // 1. Length
  if (wordCount < 120) {
    score -= 22;
    tips.push({
      label: 'Too short',
      detail:
        'This job description is thin at ' +
        wordCount +
        ' words. Aim for roughly 300 to 600 words so candidates understand the role, the team, and why it matters.',
      good: false,
    });
  } else if (wordCount > 800) {
    score -= 16;
    tips.push({
      label: 'Too long',
      detail:
        'At ' +
        wordCount +
        ' words this reads more like a manual than an invitation. Trim toward 300 to 600 words and cut anything a candidate does not need to decide to apply.',
      good: false,
    });
  } else {
    tips.push({
      label: 'Good length',
      detail: 'At ' + wordCount + ' words the length is in a healthy range for a job description.',
      good: true,
    });
  }

  // 2. Salary / pay range
  const hasSalary =
    /\$\s?\d/.test(clean) ||
    /\b\d{2,3}\s?k\b/i.test(clean) ||
    /(salary|compensation|pay range|pay rate|base pay)\b/i.test(lower);
  if (!hasSalary) {
    score -= 20;
    tips.push({
      label: 'No pay range',
      detail:
        'There is no salary or pay range. Postings with a visible range draw far more qualified applicants and cut wasted screening calls. Add a clear range near the top.',
      good: false,
    });
  } else {
    tips.push({
      label: 'Pay is mentioned',
      detail: 'Good. Naming a salary or range builds trust and filters for fit before the first call.',
      good: true,
    });
  }

  // 3. Required bullets / requirement load
  const bullets = countBullets(clean);
  if (bullets > 12) {
    score -= 16;
    tips.push({
      label: 'Too many requirements',
      detail:
        'You list ' +
        bullets +
        ' bullet requirements. Long demand lists scare off strong candidates, especially women and career changers who apply only when they match nearly everything. Cut to your 5 to 8 true must-haves.',
      good: false,
    });
  } else if (bullets === 0) {
    score -= 8;
    tips.push({
      label: 'No clear requirements',
      detail:
        'No bulleted requirements were found. A short, scannable list of 5 to 8 must-haves helps the right people self-select in.',
      good: false,
    });
  } else {
    tips.push({
      label: 'Focused requirements',
      detail:
        'You list ' + bullets + ' requirements, a focused set that does not overwhelm strong candidates.',
      good: true,
    });
  }

  // 4. Clear job title
  const firstLine = (clean.split(/\r?\n/).find(l => l.trim().length > 0) || '').trim();
  const hasTitle = firstLine.length > 0 && firstLine.length <= 70 && firstLine.split(/\s+/).length <= 9;
  if (!hasTitle) {
    score -= 12;
    tips.push({
      label: 'Unclear job title',
      detail:
        'The role does not open with a clear, concise job title. Lead with a plain title people actually search for, such as "Senior Accountant", not a long phrase or a slogan.',
      good: false,
    });
  } else {
    tips.push({
      label: 'Clear title',
      detail: 'The posting opens with a clear, scannable job title.',
      good: true,
    });
  }

  // 5. Jargon / buzzword density
  let buzzHits = 0;
  const found: string[] = [];
  for (const b of BUZZWORDS) {
    if (lower.includes(b)) {
      buzzHits += 1;
      found.push(b);
    }
  }
  if (buzzHits >= 3) {
    score -= 14;
    tips.push({
      label: 'Heavy on buzzwords',
      detail:
        'Buzzwords like ' +
        found.slice(0, 3).join(', ') +
        ' make the role sound generic. Replace them with concrete, specific descriptions of the actual work and outcomes.',
      good: false,
    });
  } else if (buzzHits > 0) {
    score -= 5;
    tips.push({
      label: 'Some filler language',
      detail:
        'A few cliche phrases slipped in (for example ' +
        found[0] +
        '). Swap them for specifics about the work to sound more credible.',
      good: false,
    });
  } else {
    tips.push({
      label: 'Clean, specific language',
      detail: 'No common buzzwords detected. The language reads concrete and credible.',
      good: true,
    });
  }

  // 6. Sells the role vs only lists demands
  let sellHits = 0;
  for (const s of SELL_WORDS) {
    if (lower.includes(s)) sellHits += 1;
  }
  if (sellHits < 2) {
    score -= 16;
    tips.push({
      label: 'Only lists demands',
      detail:
        'The posting tells candidates what you want but barely sells why they should want the role. Add a line or two on mission, growth, benefits, or impact so it reads as a two-way offer.',
      good: false,
    });
  } else {
    tips.push({
      label: 'Sells the role',
      detail:
        'Good. The posting gives candidates real reasons to want the job, not just a list of demands.',
      good: true,
    });
  }

  score = Math.max(0, Math.min(100, score));

  return { score, tips, wordCount };
}

function scoreColor(score: number): string {
  if (score >= 80) return '#4ade80';
  if (score >= 60) return GOLD;
  if (score >= 40) return '#f97316';
  return '#ef4444';
}

function scoreLabel(score: number): string {
  if (score >= 80) return 'Strong';
  if (score >= 60) return 'Decent, fixable';
  if (score >= 40) return 'Needs work';
  return 'Costing you candidates';
}

export default function JobDescriptionGrader() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<GradeResult | null>(null);

  const calendly = getCalendlyLink();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleGrade() {
    if (text.trim().split(/\s+/).filter(Boolean).length < 10) {
      return;
    }
    setResult(gradeJD(text));
  }

  function handleClear() {
    setText('');
    setResult(null);
  }

  const canGrade = text.trim().split(/\s+/).filter(Boolean).length >= 10;

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          <label style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.6rem', color: '#000' }}>
            Paste your job description
          </label>
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Paste the full job description here, including the title, responsibilities, requirements, and any pay or benefits..."
            rows={12}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              border: '2px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              fontFamily: 'inherit',
              resize: 'vertical',
              outline: 'none',
              color: '#000',
              background: '#fff',
            }}
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={handleGrade}
              disabled={!canGrade}
              className="btn btn--gold"
              style={{ fontSize: '0.97rem', padding: '0.8rem 2rem', opacity: canGrade ? 1 : 0.5, cursor: canGrade ? 'pointer' : 'not-allowed' }}
            >
              Grade my JD
            </button>
            {(text.length > 0 || result) && (
              <button
                type="button"
                onClick={handleClear}
                style={{ background: 'transparent', border: 'none', color: '#888', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Clear
              </button>
            )}
            {!canGrade && text.length > 0 && (
              <span style={{ fontSize: '0.82rem', color: '#999' }}>
                Paste a bit more text to grade.
              </span>
            )}
          </div>

          {result && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '2rem' }}>
              <p style={{ color: GOLD, fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1.25rem' }}>
                Your job description score
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', alignItems: 'center', marginBottom: '1.75rem' }}>
                <div>
                  <div style={{ fontSize: '3.5rem', fontWeight: '900', color: scoreColor(result.score), lineHeight: 1 }}>
                    {result.score}
                    <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: '700' }}>/100</span>
                  </div>
                  <div style={{ display: 'inline-block', marginTop: '0.75rem', background: scoreColor(result.score), color: '#000', fontWeight: '800', fontSize: '0.85rem', padding: '0.3rem 0.85rem', borderRadius: '6px' }}>
                    {scoreLabel(result.score)}
                  </div>
                </div>
                <div>
                  <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                    Here is how your posting scored across the six things that decide whether strong candidates apply. Work the red items first.
                  </p>
                </div>
              </div>

              {/* Score bar */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ height: '10px', background: '#222', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: `${result.score}%`, height: '100%', background: scoreColor(result.score), transition: 'width 0.3s' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
                {result.tips.map(tip => (
                  <div
                    key={tip.label}
                    style={{
                      background: '#111',
                      borderLeft: `3px solid ${tip.good ? '#4ade80' : '#f97316'}`,
                      borderRadius: '6px',
                      padding: '0.9rem 1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span style={{ color: tip.good ? '#4ade80' : '#f97316', fontWeight: '800', flexShrink: 0 }}>
                        {tip.good ? '✓' : '!'}
                      </span>
                      <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#fff' }}>{tip.label}</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#bbb', lineHeight: '1.55', margin: 0 }}>
                      {tip.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link
                  href={calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}
                >
                  Get a Full JD Rewrite Review - Book a Discovery Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: '1.5' }}>
                  This grader is a rule-based heuristic. On a discovery call, your BEG contact reviews the full posting and helps you rewrite it to attract the right candidates faster.
                </p>
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
          Nothing you paste leaves your browser. BEG is a permanent placement service and an authorized reseller of iSolved Job Placement, not a staffing agency.
        </p>
      </div>
    </section>
  );
}
