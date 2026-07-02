'use client';

import { useState } from 'react';
import {
  CALENDLY, G, CARD, LINE, T1, T2, T3, money,
  MIN_MONTHLY, BENEFITS_PEPM, MULTISTATE, PAYROLL_TIERS, computePayrollReco,
  type PayrollTierKey,
} from './pricing';
import {
  TopBar, Wrap, Eyebrow, QTitle, OptionCard, GoldBtn, BackLink,
  ContactFields, Spinner, ResultCheck, resultCalendlyBtn,
  submitPricingLead, EMPTY_CONTACT, type Contact,
} from './ui';

// BEG MANAGED PAYROLL - qualifying flow, ported from the approved artifact
// beg-payroll-page-full.jsx (LOCKED July 1, 2026). Do not redesign.
// Q1 employees -> Q2 provider -> Q3-Q5 qualifiers -> RECOMMENDATION ->
// Q6 benefits-today -> adaptive ADD-ON (or skipped) -> Q8 states -> contact -> price.

interface Opt {
  label: string;
  count?: number;
  score?: number;
  emoji?: string;
  flag?: 'optional' | 'recommended' | 'skip';
  multi?: boolean;
}

const EMP_OPTS: Opt[] = [
  { label: '1-10 employees', count: 8 }, { label: '11-25 employees', count: 18 },
  { label: '26-50 employees', count: 38 }, { label: '51-100 employees', count: 75 },
  { label: '101-200 employees', count: 150 }, { label: '200+ employees', count: 250 },
];

const STEPS: { id: string; q: string; hint: string; opts: Opt[]; grid?: boolean }[] = [
  { id: 'employees', q: 'How many employees do you run payroll for?', hint: 'This is the main driver of your price', opts: EMP_OPTS },
  { id: 'current', q: 'What are you using for payroll today?', hint: 'Choose one to continue', grid: true,
    opts: [
      { label: 'ADP', emoji: '🏢' }, { label: 'Paychex', emoji: '🏢' },
      { label: 'Paycom', emoji: '🏢' }, { label: 'Paycor', emoji: '🏢' },
      { label: 'Paylocity', emoji: '🏢' }, { label: 'Gusto', emoji: '🌯' },
      { label: 'QuickBooks Payroll', emoji: '📗' }, { label: 'Workday', emoji: '🏢' },
      { label: 'In-house / manual', emoji: '📝' }, { label: 'Nothing yet / brand new', emoji: '🆕' },
    ] },
  { id: 'feeling', q: 'How do you feel about your current payroll system?', hint: 'Be honest - this shapes our recommendation',
    opts: [
      { label: 'We like it - want to keep it', score: 0, emoji: '👍' },
      { label: "It's fine - gets the job done", score: 0, emoji: '😐' },
      { label: "We've outgrown it", score: 2, emoji: '📈' },
      { label: "Honestly, we can't stand it", score: 3, emoji: '😤' },
      { label: "We don't really have one", score: 3, emoji: '🤷' },
    ] },
  { id: 'scope', q: 'Beyond payroll, what do you need handled?', hint: 'Choose what matches your reality',
    opts: [
      { label: "Just payroll - we've got the rest", score: 0, emoji: '💵' },
      { label: 'Payroll + time tracking & PTO', score: 1, emoji: '⏱️' },
      { label: 'Payroll + HR, onboarding & docs', score: 2, emoji: '📂' },
      { label: 'The whole people function', score: 3, emoji: '🏛️' },
    ] },
  { id: 'involvement', q: 'How does your team want to work with us?', hint: "There's no wrong answer",
    opts: [
      { label: 'We stay hands-on - you do the heavy lifting', score: 0, emoji: '🤝' },
      { label: 'Fully hands-off - a dedicated manager runs it all', score: 2, emoji: '🧘' },
    ] },
  { id: 'benefitsToday', q: 'Who handles your benefits administration today?', hint: 'Enrollment, COBRA, ACA filings, carrier updates',
    opts: [
      { label: 'Our broker handles all of it', flag: 'optional', emoji: '🤵' },
      { label: 'An HR person juggles it with everything else', flag: 'recommended', emoji: '🤹' },
      { label: 'Honestly… nobody really owns it', flag: 'recommended', emoji: '😬' },
      { label: "We don't offer benefits", flag: 'skip', emoji: '🚫' },
    ] },
  { id: 'states', q: 'How many states do you run payroll in?', hint: 'Multi-state adds a one-time registration setup',
    opts: [
      { label: 'Just one state', multi: false },
      { label: '2-5 states', multi: true },
      { label: '6+ states', multi: true },
    ] },
];

type Screen = 'quiz' | 'reco' | 'addon' | 'contact' | 'submitting' | 'result';

export default function PayrollPricingForm({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, Opt>>({});
  const [platform, setPlatform] = useState<PayrollTierKey | null>(null);
  const [wantsBenefits, setWantsBenefits] = useState(false);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [show, setShow] = useState(true);
  const total = STEPS.length;

  const fade = (fn: () => void) => { setShow(false); setTimeout(() => { fn(); setShow(true); }, 170); };

  const progressMap: Record<Screen, number> = { quiz: Math.round(((step + 1) / total) * 62), reco: 68, addon: 78, contact: 90, submitting: 96, result: 100 };
  const prog = progressMap[screen] ?? 0;

  function pick(opt: Opt) {
    const id = STEPS[step].id;
    setAns(p => ({ ...p, [id]: opt }));
    if (id === 'involvement') { fade(() => setScreen('reco')); return; }
    if (id === 'benefitsToday') {
      if (opt.flag === 'skip') {
        const statesIdx = STEPS.findIndex(s => s.id === 'states');
        fade(() => { setWantsBenefits(false); setStep(statesIdx); });
      } else {
        fade(() => setScreen('addon'));
      }
      return;
    }
    if (id === 'states') { fade(() => setScreen('contact')); return; }
    fade(() => setStep(step + 1));
  }

  function acceptReco(key: PayrollTierKey) {
    setPlatform(key);
    const idx = STEPS.findIndex(s => s.id === 'benefitsToday');
    fade(() => { setScreen('quiz'); setStep(idx); });
  }

  function decideBenefits(yes: boolean) {
    setWantsBenefits(yes);
    const statesIdx = STEPS.findIndex(s => s.id === 'states');
    fade(() => { setScreen('quiz'); setStep(statesIdx); });
  }

  function back() {
    if (screen === 'contact') { const i = STEPS.findIndex(s => s.id === 'states'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'addon') { const i = STEPS.findIndex(s => s.id === 'benefitsToday'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'reco') { const i = STEPS.findIndex(s => s.id === 'involvement'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'quiz') {
      const id = STEPS[step].id;
      if (id === 'benefitsToday') fade(() => setScreen('reco'));
      else if (id === 'states') {
        const flag = ans.benefitsToday?.flag;
        if (flag === 'skip') { const i = STEPS.findIndex(s => s.id === 'benefitsToday'); fade(() => setStep(i)); }
        else fade(() => setScreen('addon'));
      }
      else if (step > 0) fade(() => setStep(step - 1));
      else onClose();
    }
  }

  const canSubmit = !!(contact.name && contact.company && contact.email);

  // pricing
  const emp = ans.employees?.count ?? 0;
  const tierKey: PayrollTierKey = platform ?? 'existing';
  const tier = PAYROLL_TIERS[tierKey];
  const multiState = ans.states?.multi === true;
  const rawPayroll = emp * tier.rate;
  const minApplies = emp > 0 && rawPayroll < MIN_MONTHLY;
  const payrollCost = emp > 0 ? Math.max(MIN_MONTHLY, rawPayroll) : 0;
  const benefitsCost = wantsBenefits ? emp * BENEFITS_PEPM : 0;
  const monthly = payrollCost + benefitsCost;
  const annual = monthly * 12;
  const oneTime = multiState ? MULTISTATE : 0;
  const HIRE_LOW = emp > 100 ? 80000 : 60000;
  const HIRE_HIGH = emp > 100 ? 120000 : 100000;
  const saveLow = Math.max(0, HIRE_LOW - annual);
  const saveHigh = Math.max(0, HIRE_HIGH - annual);

  const reco = computePayrollReco(ans);
  const benFlag = ans.benefitsToday?.flag;

  function submit() {
    if (!canSubmit) return;
    fade(() => setScreen('submitting'));
    const lines = [
      `Platform: ${tier.label} ($${tier.rate} PEPM)`,
      `Employees: ${ans.employees?.label ?? ''}`,
      minApplies ? `Payroll: ~${emp} x $${tier.rate} = ${money(rawPayroll)} -> $500 monthly minimum applies -> ${money(payrollCost)}` : `Payroll: ~${emp} x $${tier.rate} = ${money(payrollCost)}/mo`,
      wantsBenefits ? `Managed Benefits: ~${emp} x $${BENEFITS_PEPM} = ${money(benefitsCost)}/mo` : '',
      oneTime > 0 ? `Multi-state setup: ${money(oneTime)} one-time` : '',
      `MONTHLY: ${money(monthly)}  ANNUAL: ${money(annual)}`,
    ].filter(Boolean).join('\n');
    const done = submitPricingLead({
      service: 'managed-payroll',
      name: contact.name, email: contact.email, company: contact.company, phone: contact.phone,
      pricing_summary: lines,
      answers: JSON.stringify({
        employees: ans.employees?.label ?? '', current: ans.current?.label ?? '',
        feeling: ans.feeling?.label ?? '', scope: ans.scope?.label ?? '', involvement: ans.involvement?.label ?? '',
        recommended: reco.key, chosen: tierKey,
        benefits_today: ans.benefitsToday?.label ?? '', benefits_addon: wantsBenefits ? 'yes' : 'no',
        states: ans.states?.label ?? '',
        monthly: money(monthly), annual: money(annual),
        one_time: oneTime > 0 ? money(oneTime) : '',
        min_applied: minApplies ? 'yes' : 'no',
      }),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    Promise.all([done, new Promise(r => setTimeout(r, 900))]).then(() => fade(() => setScreen('result')));
  }

  return (
    <>
      <TopBar
        eyebrow="INSTANT PAYROLL PRICING"
        right={screen === 'quiz' ? `${step + 1} / ${total}` : screen === 'reco' ? 'Our pick' : screen === 'addon' ? 'Add-on' : screen === 'contact' ? 'Last step' : 'Done'}
        progress={prog}
      />
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {screen === 'quiz' && (() => {
          const st = STEPS[step];
          const cur = ans[st.id];
          return (
            <Wrap show={show}>
              <Eyebrow>QUESTION {step + 1} OF {total}</Eyebrow>
              <QTitle q={st.q} hint={st.hint} />
              <div style={st.grid ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' } : {}}>
                {st.opts.map((opt, i) => (
                  <OptionCard key={i} selected={cur?.label === opt.label} onClick={() => pick(opt)} emoji={opt.emoji} label={opt.label} grid={st.grid} />
                ))}
              </div>
              <BackLink onClick={back} />
            </Wrap>
          );
        })()}

        {screen === 'reco' && (
          <Wrap show={show}>
            <Eyebrow>BASED ON YOUR ANSWERS</Eyebrow>
            <h2 style={{ fontSize: '1.12rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '14px', color: T1 }}>
              We recommend: <span style={{ color: G }}>{PAYROLL_TIERS[reco.key].label}</span>
            </h2>

            <div style={{ background: '#130d00', border: `2px solid ${G}`, borderRadius: '12px', padding: '15px', marginBottom: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.4rem' }}>{reco.key === 'isolved' ? '⭐' : '🔄'}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: G }}>{PAYROLL_TIERS[reco.key].label}</div>
                  <div style={{ fontSize: '0.72rem', color: T2 }}>${PAYROLL_TIERS[reco.key].rate}/employee/month{reco.key === 'isolved' ? ' · dedicated Payroll Manager included' : ''}</div>
                </div>
                <span style={{ background: G, color: '#000', fontSize: '0.6rem', fontWeight: 800, borderRadius: '5px', padding: '3px 8px', letterSpacing: '0.04em' }}>OUR PICK</span>
              </div>
              <div style={{ borderTop: '1px solid #2a2000', paddingTop: '10px' }}>
                <div style={{ fontSize: '0.64rem', color: T3, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>WHY THIS FITS YOU</div>
                {reco.reasons.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '7px', fontSize: '0.76rem', color: '#bbb', marginBottom: '6px', lineHeight: 1.45 }}>
                    <span style={{ color: G, flexShrink: 0 }}>✓</span><span>{r}</span>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => acceptReco(reco.key)} style={{ width: '100%', marginTop: '11px', background: G, color: '#000', border: 'none', borderRadius: '9px', padding: '12px', fontSize: '0.88rem', fontWeight: 800, cursor: 'pointer' }}>
                Continue with {PAYROLL_TIERS[reco.key].short} →
              </button>
            </div>

            {(() => {
              const other: PayrollTierKey = reco.key === 'isolved' ? 'existing' : 'isolved';
              return (
                <button type="button" onClick={() => acceptReco(other)} style={{ width: '100%', background: CARD, border: `1px solid ${LINE}`, borderRadius: '10px', padding: '12px 14px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.1rem' }}>{other === 'isolved' ? '⭐' : '🔄'}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#999' }}>Prefer {PAYROLL_TIERS[other].label} instead?</div>
                    <div style={{ fontSize: '0.68rem', color: T3 }}>${PAYROLL_TIERS[other].rate}/employee/month - totally your call</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: T3 }}>→</span>
                </button>
              );
            })()}
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'addon' && (
          <Wrap show={show}>
            <Eyebrow color={benFlag === 'recommended' ? '#4ade80' : G}>
              {benFlag === 'recommended' ? '⚠ RECOMMENDED FOR YOU' : 'OPTIONAL ADD-ON'}
            </Eyebrow>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '10px', color: T1 }}>
              {benFlag === 'recommended' ? "Your benefits admin has no real owner. That's exposure." : 'Want benefits under the same roof?'}
            </h2>

            <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: '11px', padding: '13px 14px', marginBottom: '10px' }}>
              <div style={{ fontSize: '0.64rem', color: T3, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '8px' }}>WHAT MANAGED BENEFITS COVERS</div>
              {[['📝', 'Enrollment & new-hire benefits onboarding'], ['🔁', 'Open enrollment setup & annual processing'],
                ['📋', 'COBRA notices, elections & premium billing'], ['🏛️', 'ACA tracking + 1094-C / 1095-C filings'],
                ['🔌', 'Carrier connections & EDI feeds']].map(([ic, tx]) => (
                <div key={tx} style={{ display: 'flex', gap: '7px', fontSize: '0.75rem', color: '#aaa', marginBottom: '5px' }}><span>{ic}</span><span>{tx}</span></div>
              ))}
            </div>

            <p style={{ fontSize: '0.76rem', color: benFlag === 'recommended' ? '#e8b4b4' : T2, lineHeight: 1.55, marginBottom: '14px' }}>
              {benFlag === 'recommended'
                ? (ans.benefitsToday?.label.includes('nobody')
                  ? 'You told us nobody owns this today. Missed COBRA notices and late ACA filings carry real penalties - this add-on gives it a dedicated owner for $10/employee/month.'
                  : 'Your HR person is juggling benefits on top of everything else. One missed ACA deadline costs more than a year of this add-on. $10/employee/month gives it a dedicated owner.')
                : 'Your broker has enrollment covered. Some clients still add this to consolidate COBRA, ACA filings, and carrier feeds under one roof with payroll. $10/employee/month - entirely optional.'}
            </p>

            <button type="button" onClick={() => decideBenefits(true)} style={{ width: '100%', marginBottom: '8px', background: benFlag === 'recommended' ? G : CARD, color: benFlag === 'recommended' ? '#000' : T1, border: benFlag === 'recommended' ? 'none' : `2px solid ${G}`, borderRadius: '10px', padding: '13px', fontSize: '0.88rem', fontWeight: 800, cursor: 'pointer' }}>
              {benFlag === 'recommended' ? 'Yes - add Managed Benefits (recommended)' : 'Yes, add Managed Benefits'}
            </button>
            <button type="button" onClick={() => decideBenefits(false)} style={{ width: '100%', background: 'none', border: `1px solid ${LINE}`, borderRadius: '10px', padding: '12px', fontSize: '0.82rem', color: T2, cursor: 'pointer' }}>
              No thanks - just payroll for now
            </button>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'contact' && (
          <Wrap show={show}>
            <Eyebrow>ALMOST THERE</Eyebrow>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '4px', color: T1 }}>Where should we send your pricing?</h2>
            <p style={{ color: T3, fontSize: '0.72rem', marginBottom: '17px' }}>No spam. Just your quote and next steps.</p>
            <ContactFields contact={contact} setContact={setContact} />
            <GoldBtn onClick={submit} disabled={!canSubmit}>Show My Price →</GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'submitting' && <Wrap show={show}><Spinner label="Building your quote…" /></Wrap>}

        {screen === 'result' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center' }}>
              <ResultCheck />
              <h2 style={{ fontSize: '1.22rem', fontWeight: 800, marginBottom: '5px', color: T1 }}>Here&apos;s your price.</h2>
              <p style={{ color: T2, fontSize: '0.79rem', lineHeight: 1.55, margin: '0 auto 16px', maxWidth: '330px' }}>
                All-inclusive managed payroll for {ans.employees?.label.toLowerCase()} on {tier.label}.
              </p>

              <div style={{ background: '#0c0800', border: `2px solid ${G}`, borderRadius: '14px', padding: '18px 15px 15px', marginBottom: '12px', textAlign: 'left' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.62rem', color: T3, letterSpacing: '0.05em', marginBottom: '3px' }}>MONTHLY</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: G, lineHeight: 1 }}>{money(monthly)}</div>
                    <div style={{ fontSize: '0.6rem', color: T3, marginTop: '2px' }}>per month</div>
                  </div>
                  <div style={{ textAlign: 'center', borderLeft: `1px solid ${LINE}` }}>
                    <div style={{ fontSize: '0.62rem', color: T3, letterSpacing: '0.05em', marginBottom: '3px' }}>ANNUAL</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: T1, lineHeight: 1 }}>{money(annual)}</div>
                    <div style={{ fontSize: '0.6rem', color: T3, marginTop: '2px' }}>per year</div>
                  </div>
                </div>

                <div style={{ background: '#0f0b02', borderRadius: '9px', padding: '11px 12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.6rem', color: T3, fontWeight: 800, letterSpacing: '0.06em', marginBottom: '8px' }}>WHAT&apos;S IN YOUR PRICE</div>
                  {minApplies ? (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#aaa', marginBottom: '5px' }}><span>Payroll · ~{emp} × ${tier.rate} = {money(rawPayroll)}</span><span style={{ color: T3, textDecoration: 'line-through' }}>{money(rawPayroll)}</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#aaa', marginBottom: '5px' }}><span>$500 monthly minimum applies</span><span style={{ fontWeight: 700 }}>{money(payrollCost)}</span></div>
                    </>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#aaa', marginBottom: '5px' }}><span>Payroll · ~{emp} × ${tier.rate}</span><span style={{ fontWeight: 700 }}>{money(payrollCost)}</span></div>
                  )}
                  {wantsBenefits && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#aaa', marginBottom: '5px' }}><span>Managed Benefits · ~{emp} × ${BENEFITS_PEPM}</span><span style={{ fontWeight: 700 }}>{money(benefitsCost)}</span></div>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: G, fontWeight: 800, borderTop: `1px solid ${LINE}`, paddingTop: '7px', marginTop: '3px' }}><span>Total / month</span><span>{money(monthly)}</span></div>
                  {!minApplies && emp > 0 && <div style={{ fontSize: '0.64rem', color: '#4ade80', marginTop: '7px' }}>✓ Your headcount clears the $500 minimum - pure per-employee pricing</div>}
                  {oneTime > 0 && <div style={{ fontSize: '0.66rem', color: T2, marginTop: '7px', paddingTop: '7px', borderTop: `1px solid ${LINE}` }}>+ {money(oneTime)} one-time multi-state setup</div>}
                </div>

                <div style={{ background: '#071207', border: '1px solid #1a3d1a', borderRadius: '10px', padding: '12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.62rem', color: '#4ade80', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '8px' }}>💰 VS. HIRING IN-HOUSE ({money(HIRE_LOW)}-{money(HIRE_HIGH)}/yr)</div>
                  <div style={{ background: '#0d1f0d', borderRadius: '8px', padding: '9px 11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.58rem', color: '#4ade80', fontWeight: 700 }}>YOU SAVE / YEAR</div>
                    <div style={{ fontSize: '1rem', fontWeight: 900, color: '#4ade80' }}>{money(saveLow)} - {money(saveHigh)}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  {([['✅', 'Full-cycle payroll, taxes & filings'], ['🚀', 'Live in 3-5 business days'], ['🇺🇸', 'All 50 states'],
                    ...(wantsBenefits ? [['➕', 'Benefits: enrollment, COBRA, ACA filings']] : [])] as [string, string][]).map(([ic, tx]) => (
                    <div key={tx} style={{ display: 'flex', gap: '7px', fontSize: '0.74rem', color: '#888', marginBottom: '5px' }}><span>{ic}</span><span>{tx}</span></div>
                  ))}
                </div>

                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={resultCalendlyBtn}>
                  Book Your Free 15-Min Call →
                </a>
                <p style={{ color: T3, fontSize: '0.63rem', textAlign: 'center' }}>Exact quote confirmed on your call</p>
              </div>

              <p style={{ color: T3, fontSize: '0.64rem', marginBottom: '12px' }}>A copy was sent to <span style={{ color: '#555' }}>{contact.email}</span></p>
              <button type="button" onClick={onClose} style={{ background: 'none', border: `1px solid ${LINE}`, borderRadius: '8px', padding: '7px 16px', color: '#666', fontSize: '0.7rem', cursor: 'pointer' }}>Close</button>
            </div>
          </Wrap>
        )}
      </div>
    </>
  );
}
