'use client';

import { useState } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const questions = [
  {
    id: 'employees',
    text: 'How many employees do you have?',
    type: 'multi',
    options: [
      { label: 'Fewer than 10', score: 0 },
      { label: '10 to 50', score: 1 },
      { label: '51 to 200', score: 1 },
      { label: 'More than 200', score: 1 },
    ],
  },
  {
    id: 'multistate',
    text: 'Do you have employees in more than one state?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'tips',
    text: 'Do any employees receive tips?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'variable',
    text: 'Do you have commissioned or variable-pay employees?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'frequency',
    text: 'Do you process payroll more than twice a month?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'errors',
    text: 'Has your team had a payroll error in the last 12 months?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'time',
    text: 'Does someone on your team spend more than 4 hours per week on payroll?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'shifts',
    text: 'Do you have shift differential or overtime complexity?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'prevailing',
    text: 'Are you subject to prevailing wage or certified payroll requirements?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'compliance',
    text: 'Do you have concerns about payroll compliance or audit risk?',
    type: 'yn',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 },
    ],
  },
];

function getResult(score: number) {
  if (score <= 2) {
    return {
      label: 'Low Complexity',
      color: '#2a7a2a',
      bg: '#e8f5e8',
      message: 'Your payroll is relatively straightforward. Payroll software may be sufficient, but a managed service still saves your team time and eliminates the risk of missed filings.',
      cta: 'Even low-complexity payroll benefits from a managed service. Book a free call to see what BEG would cost for your team.',
    };
  }
  if (score <= 5) {
    return {
      label: 'Moderate Complexity',
      color: '#a06000',
      bg: '#fff3e0',
      message: 'Your payroll has enough complexity that errors are likely without dedicated expertise. A managed service would reduce errors, save your team significant time, and eliminate compliance risk.',
      cta: 'Moderate-complexity payroll is exactly where managed payroll delivers the most ROI. Book a free call to get an exact quote.',
    };
  }
  if (score <= 8) {
    return {
      label: 'High Complexity',
      color: '#c0392b',
      bg: '#fdecea',
      message: 'Your payroll is high-complexity. Running it in-house creates meaningful compliance risk and consumes substantial team time. Managed payroll is strongly recommended.',
      cta: 'High-complexity payroll in-house is a liability. Book a free call. BEG handles everything at $25-$45 PEPM all-inclusive.',
    };
  }
  return {
    label: 'Critical Complexity',
    color: '#8b0000',
    bg: '#f9e0e0',
    message: 'Your payroll complexity is critical. Running this in-house is creating significant legal and financial exposure. Managed payroll is not optional at this level. It is essential.',
    cta: 'Critical complexity requires a managed solution. Book a free call now. BEG can be running your payroll within 3-5 business days.',
  };
}

export default function ComplexityQuiz() {
  const [answers, setAnswers] = useState<Record<string, { score: number; label: string }>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const totalScore = Object.values(answers).reduce((sum, v) => sum + v.score, 0);
  const allAnswered = answeredCount === questions.length;
  const result = submitted ? getResult(totalScore) : null;

  function handleAnswer(questionId: string, score: number, label: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: { score, label } }));
  }

  function handleSubmit() {
    if (allAnswered) setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '720px' }}>
        {!submitted ? (
          <>
            {/* Progress */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                <span>{answeredCount} of {questions.length} answered</span>
                <span>{Math.round((answeredCount / questions.length) * 100)}% complete</span>
              </div>
              <div style={{ background: '#e5e5e5', borderRadius: '999px', height: '6px' }}>
                <div style={{ background: '#ECAC60', borderRadius: '999px', height: '6px', width: `${(answeredCount / questions.length) * 100}%`, transition: 'width 0.3s ease' }} />
              </div>
            </div>

            {/* Questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {questions.map((q, idx) => (
                <div key={q.id} style={{ background: '#ffffff', border: `2px solid ${answers[q.id] ? '#ECAC60' : '#e5e5e5'}`, borderRadius: '10px', padding: '1.5rem', transition: 'border-color 0.2s' }}>
                  <p style={{ fontWeight: '600', fontSize: '0.97rem', color: '#000000', marginBottom: '1rem', lineHeight: '1.45' }}>
                    <span style={{ color: '#ECAC60', fontWeight: '800', marginRight: '0.5rem' }}>{idx + 1}.</span>
                    {q.text}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {q.options.map((opt) => {
                      const isSelected = answers[q.id]?.label === opt.label;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleAnswer(q.id, opt.score, opt.label)}
                          style={{
                            padding: '0.55rem 1.2rem',
                            borderRadius: '6px',
                            border: isSelected ? '2px solid #ECAC60' : '2px solid #e5e5e5',
                            background: isSelected ? '#ECAC60' : '#ffffff',
                            color: isSelected ? '#000000' : '#444444',
                            fontWeight: isSelected ? '700' : '500',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            fontFamily: 'inherit',
                          }}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                style={{
                  padding: '0.9rem 2.5rem',
                  background: allAnswered ? 'linear-gradient(135deg,#ECAC60,#F5C97A)' : '#e5e5e5',
                  color: allAnswered ? '#000000' : '#999999',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: allAnswered ? 'pointer' : 'not-allowed',
                  fontFamily: 'inherit',
                  transition: 'opacity 0.2s',
                }}
              >
                {allAnswered ? 'Get My Score' : `Answer all ${questions.length - answeredCount} remaining question${questions.length - answeredCount !== 1 ? 's' : ''}`}
              </button>
              {!allAnswered && (
                <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                  Answer all 10 questions to see your complexity score and recommendation.
                </p>
              )}
            </div>
          </>
        ) : (
          /* RESULTS */
          <div>
            {/* Score */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: result!.bg, border: `2px solid ${result!.color}`, borderRadius: '12px', padding: '2rem 3rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: result!.color, marginBottom: '0.5rem' }}>Your Score</span>
                <span style={{ fontSize: '4rem', fontWeight: '900', color: result!.color, lineHeight: 1 }}>{totalScore}</span>
                <span style={{ fontSize: '1rem', color: '#666', marginTop: '0.25rem' }}>out of 10</span>
                <span style={{ display: 'inline-block', marginTop: '0.75rem', background: result!.color, color: '#ffffff', fontWeight: '700', fontSize: '0.85rem', padding: '0.3rem 0.9rem', borderRadius: '4px', letterSpacing: '0.05em' }}>{result!.label}</span>
              </div>
            </div>

            {/* Recommendation */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>What this means for your business</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.97rem' }}>{result!.message}</p>

              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.75rem', color: '#000000' }}>Your answers:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {questions.map((q) => {
                  const ans = answers[q.id];
                  return (
                    <div key={q.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.87rem', padding: '0.35rem 0', borderBottom: '1px solid #f0f0f0', gap: '1rem' }}>
                      <span style={{ color: '#555555' }}>{q.text}</span>
                      <span style={{ fontWeight: '600', color: ans?.score === 1 ? '#c0392b' : '#2a7a2a', flexShrink: 0 }}>{ans?.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: '#000000', borderRadius: '10px', padding: '2rem', textAlign: 'center' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '0.75rem' }}>Next Step</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.35rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                Book a free 15-minute call. We will review your score and tell you exactly what BEG would handle.
              </h2>
              <p style={{ color: '#cccccc', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>{result!.cta}</p>
              <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem', display: 'inline-block' }}>
                Book a Free 15-Minute Call
              </Link>
              <p style={{ color: '#777', fontSize: '0.82rem', marginTop: '0.75rem' }}>
                Or learn more about <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> at $25-$45 PEPM.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={handleReset}
                style={{ background: 'none', border: 'none', color: '#ECAC60', fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit' }}
              >
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
