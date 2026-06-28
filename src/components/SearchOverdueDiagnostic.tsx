'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

const GOLD = '#ECAC60';

interface Option {
  label: string;
  points: number;
}

interface Question {
  id: string;
  label: string;
  help?: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: 'weeks',
    label: 'How many weeks has the role been open?',
    help: 'BEG fills permanent roles in 23 to 35 days. Past that window, cost and risk climb fast.',
    options: [
      { label: 'Under 3 weeks', points: 0 },
      { label: '3 to 5 weeks', points: 10 },
      { label: '6 to 9 weeks', points: 22 },
      { label: '10 weeks or more', points: 30 },
    ],
  },
  {
    id: 'seniority',
    label: 'What is the seniority of the role?',
    help: 'Senior and executive roles left open quietly drain output across a whole team.',
    options: [
      { label: 'Entry or junior', points: 4 },
      { label: 'Mid-level', points: 8 },
      { label: 'Senior or lead', points: 14 },
      { label: 'Director or executive', points: 18 },
    ],
  },
  {
    id: 'channels',
    label: 'How are you sourcing candidates right now?',
    help: 'Job boards and postings alone rarely reach the passive talent that fills hard roles.',
    options: [
      { label: 'Dedicated search partner', points: 0 },
      { label: 'Mix of postings and referrals', points: 8 },
      { label: 'Mostly job boards and postings', points: 14 },
      { label: 'Just a posting, waiting on applicants', points: 18 },
    ],
  },
  {
    id: 'candidates',
    label: 'How many qualified candidates have you seen so far?',
    help: 'A thin pipeline this late is the clearest signal a search has stalled.',
    options: [
      { label: 'A strong shortlist already', points: 0 },
      { label: 'A few worth a look', points: 8 },
      { label: 'One or two, none strong', points: 14 },
      { label: 'None yet', points: 18 },
    ],
  },
  {
    id: 'urgency',
    label: 'How urgent is filling this seat?',
    help: 'Urgency raises the real cost of every extra week the seat stays empty.',
    options: [
      { label: 'Nice to have, no pressure', points: 0 },
      { label: 'Needed this quarter', points: 6 },
      { label: 'Needed within weeks', points: 12 },
      { label: 'Already hurting the team', points: 16 },
    ],
  },
];

interface Verdict {
  name: string;
  color: string;
  range: string;
  summary: string;
  recommendation: string;
}

function getVerdict(score: number): Verdict {
  if (score <= 24) {
    return {
      name: 'On track',
      color: '#4ade80',
      range: '0 to 24',
      summary: 'Your search is moving at a healthy pace and inside a normal time to fill.',
      recommendation:
        'Keep your pipeline warm and your shortlist active. If timelines slip or the pipeline thins out, a milestone-based search partner can lock in a 23 to 35 day fill before the role goes stale.',
    };
  }
  if (score <= 49) {
    return {
      name: 'Getting risky',
      color: GOLD,
      range: '25 to 49',
      summary: 'Early warning signs are showing. This search could drift past a healthy timeline soon.',
      recommendation:
        'Tighten your sourcing now rather than later. Broaden beyond job boards to reach passive talent, and consider a permanent placement partner that fills roles in 23 to 35 days with an 86% fill rate, at roughly 50% less than contingency.',
    };
  }
  if (score <= 74) {
    return {
      name: 'Overdue',
      color: '#f97316',
      range: '50 to 74',
      summary: 'This search is past where it should be. Every extra week is costing you output and momentum.',
      recommendation:
        'Bring in a milestone-based search partner to reset the pipeline fast. BEG fills permanent roles in 23 to 35 days with an 86% fill rate and a 45-day replacement guarantee, at roughly 50% less than contingency. Book a discovery call to get a tailored action plan.',
    };
  }
  return {
    name: 'Critical',
    color: '#ef4444',
    range: '75 to 100',
    summary: 'This search has stalled. The cost of the empty seat now outweighs the cost of getting help.',
    recommendation:
      'Act this week. A stalled senior or urgent role rarely fixes itself with more posting time. BEG can step in and fill the seat in 23 to 35 days with an 86% fill rate and a 45-day replacement guarantee, at roughly 50% less than contingency. Book a discovery call now for a tailored hiring action plan.',
  };
}

export default function SearchOverdueDiagnostic() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const calendly = getCalendlyLink();

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const rawScore = Object.values(answers).reduce((sum, p) => sum + p, 0);
  const maxScore = QUESTIONS.reduce(
    (sum, q) => sum + Math.max(...q.options.map(o => o.points)),
    0,
  );
  const score = Math.round((rawScore / maxScore) * 100);

  const verdict = allAnswered ? getVerdict(score) : null;

  function select(id: string, points: number) {
    setAnswers(prev => ({ ...prev, [id]: points }));
  }

  function reset() {
    setAnswers({});
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          {QUESTIONS.map((q, qi) => (
            <div key={q.id} style={{ marginBottom: '2rem' }}>
              <label style={{ fontWeight: '700', fontSize: '1rem', display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                <span style={{ color: GOLD, marginRight: '0.5rem' }}>{qi + 1}.</span>
                {q.label}
              </label>
              {q.help && (
                <p style={{ fontSize: '0.8rem', color: '#888', marginTop: 0, marginBottom: '0.85rem', lineHeight: '1.5' }}>
                  {q.help}
                </p>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.6rem' }}>
                {q.options.map(opt => {
                  const selected = answers[q.id] === opt.points;
                  return (
                    <label
                      key={opt.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        background: selected ? '#000' : '#fff',
                        color: selected ? '#fff' : '#000',
                        border: `2px solid ${selected ? GOLD : '#ddd'}`,
                        borderRadius: '8px',
                        padding: '0.8rem 1rem',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        lineHeight: '1.35',
                        transition: 'background 0.12s, border-color 0.12s',
                      }}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={selected}
                        onChange={() => select(q.id, opt.points)}
                        style={{ accentColor: GOLD, flexShrink: 0 }}
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Progress / results */}
          {!allAnswered && (
            <div style={{ background: '#fff', border: '1px dashed #ccc', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>
                Answer all {QUESTIONS.length} questions to see your overdue score.
                <span style={{ display: 'block', marginTop: '0.5rem', fontWeight: '700', color: '#000' }}>
                  {answeredCount} of {QUESTIONS.length} answered
                </span>
              </p>
            </div>
          )}

          {allAnswered && verdict && (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
              <p style={{ color: GOLD, fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1.25rem' }}>
                Your overdue score
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', alignItems: 'center', marginBottom: '1.75rem' }}>
                <div>
                  <div style={{ fontSize: '3.5rem', fontWeight: '900', color: verdict.color, lineHeight: 1 }}>
                    {score}
                    <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: '700' }}>/100</span>
                  </div>
                  <div style={{ display: 'inline-block', marginTop: '0.75rem', background: verdict.color, color: '#000', fontWeight: '800', fontSize: '0.85rem', padding: '0.3rem 0.85rem', borderRadius: '6px' }}>
                    {verdict.name}
                  </div>
                </div>
                <div>
                  <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                    {verdict.summary}
                  </p>
                </div>
              </div>

              {/* Score bar */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ height: '10px', background: '#222', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: `${score}%`, height: '100%', background: verdict.color, transition: 'width 0.3s' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#777', marginTop: '0.4rem' }}>
                  <span>On track</span>
                  <span>Getting risky</span>
                  <span>Overdue</span>
                  <span>Critical</span>
                </div>
              </div>

              <p style={{ background: '#111', borderLeft: `3px solid ${verdict.color}`, padding: '0.95rem 1.1rem', borderRadius: '6px', fontSize: '0.92rem', color: '#ddd', lineHeight: '1.65', margin: '0 0 1.75rem' }}>
                <strong style={{ color: '#fff' }}>What to do next: </strong>
                {verdict.recommendation}
              </p>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link
                  href={calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}
                >
                  Get a Tailored Hiring Action Plan - Book a Discovery Call
                </Link>
                <div style={{ marginTop: '1rem' }}>
                  <button
                    type="button"
                    onClick={reset}
                    style={{ background: 'transparent', border: 'none', color: '#888', fontSize: '0.82rem', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
          This diagnostic is a rule-based estimate to help you gauge timeline risk. BEG is a permanent placement service and an authorized reseller of iSolved Job Placement, not a staffing agency.
        </p>
      </div>
    </section>
  );
}
