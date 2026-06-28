'use client';

import { useState } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

type Option = { label: string; points: number };
type Question = { q: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    q: 'How many separate HR and payroll systems does your team run today?',
    options: [
      { label: 'Four or more', points: 0 },
      { label: 'Two or three', points: 1 },
      { label: 'One connected platform', points: 2 },
    ],
  },
  {
    q: 'How much of your HR and payroll admin is still manual data entry?',
    options: [
      { label: 'Most of it', points: 0 },
      { label: 'Some of it', points: 1 },
      { label: 'Very little', points: 2 },
    ],
  },
  {
    q: 'How does your team use AI in HR right now?',
    options: [
      { label: 'Not at all', points: 0 },
      { label: 'A chatbot that answers questions', points: 1 },
      { label: 'AI that completes real tasks', points: 2 },
    ],
  },
  {
    q: 'How long do routine HR tasks take, like pulling a report or updating a record?',
    options: [
      { label: 'Hours, across several screens', points: 0 },
      { label: 'Minutes, with some effort', points: 1 },
      { label: 'Fast and self-service', points: 2 },
    ],
  },
  {
    q: 'How confident are you in your payroll and compliance accuracy?',
    options: [
      { label: 'Worried about errors', points: 0 },
      { label: 'Mostly okay', points: 1 },
      { label: 'Very confident', points: 2 },
    ],
  },
  {
    q: 'Can employees self-serve common HR requests without HR involvement?',
    options: [
      { label: 'No, everything routes through HR', points: 0 },
      { label: 'Some requests', points: 1 },
      { label: 'Yes, most requests', points: 2 },
    ],
  },
  {
    q: 'How connected is your employee data across systems?',
    options: [
      { label: 'Manual reconciliation between tools', points: 0 },
      { label: 'Some integrations', points: 1 },
      { label: 'One single source of truth', points: 2 },
    ],
  },
  {
    q: 'How ready is your team to adopt AI tools in HR?',
    options: [
      { label: 'Resistant or unsure', points: 0 },
      { label: 'Curious', points: 1 },
      { label: 'Eager to move faster', points: 2 },
    ],
  },
];

const MAX = QUESTIONS.length * 2;

function tierFor(score: number) {
  if (score < 40) {
    return {
      name: 'Just getting started',
      color: '#e2574c',
      summary:
        'Your HR runs on disconnected systems and manual work. That is exactly the setup where one connected platform plus AI that completes tasks delivers the biggest, fastest return.',
      rec:
        'Start by consolidating onto a single platform. iSolved brings payroll, HR, time, and benefits together, and the Connector for Claude lets your team complete tasks by conversation instead of clicking through screens. BEG implements and runs it for you.',
    };
  }
  if (score < 75) {
    return {
      name: 'Building momentum',
      color: '#ECAC60',
      summary:
        'You have made real progress, but gaps between systems and manual steps are still costing your team time. You are well positioned to add task-completing AI on top of a connected platform.',
      rec:
        'Close the remaining gaps by consolidating on iSolved and turning on the Connector for Claude so routine work gets completed automatically. BEG configures it for your workflows and supports it year round.',
    };
  }
  return {
    name: 'Advanced and AI-ready',
    color: '#4ade80',
    summary:
      'Your foundation is strong. The next gain comes from AI that completes tasks, not just answers questions. You are ready to adopt it now.',
    rec:
      'iSolved is the only HCM platform with a generally available Connector for Claude. It completes real HR tasks through conversation. BEG can have it configured and live for your team quickly.',
  };
}

export default function AIReadinessScorecard() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === QUESTIONS.length;
  const raw = answers.reduce<number>((sum, a, i) => sum + (a !== null ? QUESTIONS[i].options[a].points : 0), 0);
  const score = Math.round((raw / MAX) * 100);
  const tier = tierFor(score);

  function setAnswer(qi: number, oi: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = oi;
      return next;
    });
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

          {QUESTIONS.map((question, qi) => (
            <div key={qi} style={{ marginBottom: '1.75rem' }}>
              <p style={{ fontWeight: '700', fontSize: '0.98rem', color: '#000', marginBottom: '0.75rem' }}>
                {qi + 1}. {question.q}
              </p>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {question.options.map((opt, oi) => {
                  const selected = answers[qi] === oi;
                  return (
                    <label
                      key={oi}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.7rem',
                        background: selected ? '#000' : '#fff',
                        color: selected ? '#fff' : '#000',
                        border: `2px solid ${selected ? '#ECAC60' : '#ddd'}`,
                        borderRadius: '8px', padding: '0.7rem 0.95rem', cursor: 'pointer',
                        fontSize: '0.9rem', lineHeight: 1.3,
                      }}
                    >
                      <input
                        type="radio" name={`q${qi}`} checked={selected}
                        onChange={() => setAnswer(qi, oi)}
                        style={{ accentColor: '#ECAC60', flexShrink: 0 }}
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {!submitted ? (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                className="btn btn--gold"
                style={{
                  fontSize: '0.97rem', padding: '0.85rem 2.25rem', border: 'none', cursor: allAnswered ? 'pointer' : 'not-allowed',
                  opacity: allAnswered ? 1 : 0.5,
                }}
              >
                {allAnswered ? 'See My Readiness Score' : `Answer all ${QUESTIONS.length} questions (${answeredCount}/${QUESTIONS.length})`}
              </button>
            </div>
          ) : (
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff', marginTop: '1rem' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 0, marginBottom: '1rem' }}>
                Your AI HR readiness score
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: tier.color, lineHeight: 1 }}>{score}</span>
                <span style={{ fontSize: '1.1rem', color: '#888' }}>/ 100</span>
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '800', color: tier.color, marginBottom: '1rem' }}>{tier.name}</div>
              <p style={{ color: '#ccc', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>{tier.summary}</p>
              <p style={{ color: '#fff', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{tier.rec}</p>
              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '0.95rem', padding: '0.85rem 2.1rem', display: 'inline-block' }}>
                  Get Your Tailored AI HR Plan, Book a 15-Min Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.74rem', marginTop: '0.8rem', marginBottom: 0 }}>
                  BEG will map your exact systems and show you what the iSolved Connector for Claude completes for your team. No commitment.
                </p>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button type="button" onClick={() => { setSubmitted(false); setAnswers(Array(QUESTIONS.length).fill(null)); }}
                  style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.8rem', textDecoration: 'underline', cursor: 'pointer' }}>
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999', marginTop: '1rem' }}>
          Learn more about the{' '}
          <Link href="/services/hcm-software/ai-connector" style={{ color: '#ECAC60', fontWeight: 600 }}>iSolved Connector for Claude</Link>.
        </p>
      </div>
    </section>
  );
}
