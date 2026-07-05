'use client';

import { useState } from 'react';
import { CALENDLY, G, CARD, LINE, T1, T2, T3 } from './pricing';
import {
  TopBar, Wrap, Eyebrow, QTitle, OptionCard, GoldBtn, BackLink,
  ContactFields, Spinner, ResultCheck, resultCalendlyBtn,
  submitPricingLead, EMPTY_CONTACT, type Contact,
} from './ui';
import {
  HR_TIERS, HR_TIER_ORDER, HR_NEEDS, hrRecoFromNeeds, hrEstimate, hrBenefitsEstimate, rangeText,
  type HrTierKey,
} from './hrServices';

// BEG HR OUTSOURCING - INSTANT ESTIMATE. Public positioning: "HR outsourcing,
// powered by isolved." LOCKED (July 5, 2026): lead-gen ESTIMATE, ranges only,
// never hard isolved numbers. NEVER state publicly that the client signs/pays
// isolved or that isolved produces the quote; that is discovery-call material.
// Dark design system per the approved artifacts. Do not redesign.

interface Opt { label: string; count?: number; need?: boolean; emoji?: string }

const EMP_OPTS: Opt[] = [
  { label: '1-25 employees', count: 15 }, { label: '26-50 employees', count: 38 },
  { label: '51-100 employees', count: 75 }, { label: '101-200 employees', count: 150 },
  { label: '201-500 employees', count: 350 }, { label: '500+ employees', count: 750 },
];

const STEPS: { id: string; q: string; hint: string; opts: Opt[]; grid?: boolean }[] = [
  { id: 'employees', q: 'How many employees do you have?', hint: 'This shapes your monthly estimate', opts: EMP_OPTS },
  { id: 'hrToday', q: 'Who handles HR today?', hint: 'No wrong answer, this just sets the starting point',
    opts: [
      { label: 'Me, the owner, on top of everything else', emoji: '🤯' },
      { label: 'An office manager wearing five hats', emoji: '🎩' },
      { label: 'One stretched HR person', emoji: '🙋' },
      { label: 'A small HR team that needs backup', emoji: '👥' },
    ] },
  { id: 'benefitsAdmin', q: 'Who owns benefits administration today?', hint: 'Open enrollment, ACA, COBRA, carrier updates',
    opts: [
      { label: 'Our broker owns all of it', need: false, emoji: '🤵' },
      { label: 'We juggle it in spreadsheets', need: true, emoji: '🤹' },
      { label: 'Honestly, nobody really owns it', need: true, emoji: '😬' },
      { label: "We don't offer benefits", need: false, emoji: '🚫' },
    ] },
  { id: 'states', q: 'How many states are your employees in?', hint: 'Coverage is all 50 states, this shapes compliance scope',
    opts: [{ label: 'One state' }, { label: '2-5 states' }, { label: '6+ states' }] },
];

type Screen = 'quiz' | 'needs' | 'reco' | 'contact' | 'submitting' | 'result';

const Q_NUM: Record<string, number> = { employees: 1, hrToday: 2, benefitsAdmin: 4, states: 5 };
const TOTAL_Q = 5;

export default function HrOutsourcingPricingForm({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, Opt>>({});
  const [needs, setNeeds] = useState<string[]>([]);
  const [tierKey, setTierKey] = useState<HrTierKey | null>(null);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [show, setShow] = useState(true);

  const fade = (fn: () => void) => { setShow(false); setTimeout(() => { fn(); setShow(true); }, 170); };
  const qNum = screen === 'needs' ? 3 : (Q_NUM[STEPS[step]?.id] ?? 1);
  const progressMap: Record<Screen, number> = { quiz: Math.round((qNum / TOTAL_Q) * 60), needs: 36, reco: 70, contact: 88, submitting: 95, result: 100 };
  const prog = progressMap[screen] ?? 0;

  function toggleNeed(id: string) {
    setNeeds(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  }

  function pick(opt: Opt) {
    const id = STEPS[step].id;
    setAns(p => ({ ...p, [id]: opt }));
    if (id === 'hrToday') { fade(() => setScreen('needs')); return; }
    if (id === 'benefitsAdmin') { fade(() => setScreen('quiz')); setStep(STEPS.findIndex(s => s.id === 'states')); return; }
    if (id === 'states') { fade(() => setScreen('contact')); return; }
    fade(() => setStep(step + 1));
  }
  function afterNeeds() {
    if (!needs.length) return;
    fade(() => setScreen('reco'));
  }
  function acceptReco(key: HrTierKey) {
    setTierKey(key);
    const i = STEPS.findIndex(s => s.id === 'benefitsAdmin');
    fade(() => { setScreen('quiz'); setStep(i); });
  }
  function back() {
    if (screen === 'contact') { const i = STEPS.findIndex(s => s.id === 'states'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'reco') { fade(() => setScreen('needs')); }
    else if (screen === 'needs') { const i = STEPS.findIndex(s => s.id === 'hrToday'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'quiz') {
      const id = STEPS[step].id;
      if (id === 'states') { const i = STEPS.findIndex(s => s.id === 'benefitsAdmin'); fade(() => setStep(i)); }
      else if (id === 'benefitsAdmin') fade(() => setScreen('reco'));
      else if (step > 0) fade(() => setStep(step - 1));
      else onClose();
    }
  }

  const canSubmit = !!(contact.name && contact.company && contact.email);

  const emp = ans.employees?.count ?? 15;
  const reco = hrRecoFromNeeds(needs);
  const tier = HR_TIERS[tierKey ?? reco.key];
  const est = hrEstimate(tier.key, emp);
  const bensNeed = ans.benefitsAdmin?.need === true;
  const bensEst = hrBenefitsEstimate(emp);
  const pickedNames = HR_NEEDS.filter(n => needs.includes(n.id)).map(n => n.name);
  const liveTier = HR_TIERS[hrRecoFromNeeds(needs).key];

  function submit() {
    if (!canSubmit) return;
    fade(() => setScreen('submitting'));
    const lines = [
      `Tier: ${tier.name} (HR outsourcing, powered by isolved)`,
      `Employees: ${ans.employees?.label ?? ''}`,
      `Needs picked: ${pickedNames.join('; ')}`,
      `ESTIMATE: ${rangeText(est)}/mo`,
      bensNeed ? `Managed Benefits add-on estimate: ${rangeText(bensEst)}/mo` : 'Benefits add-on: not flagged',
      `HR today: ${ans.hrToday?.label ?? ''} · States: ${ans.states?.label ?? ''}`,
      'Estimate based on your answers; exact pricing is confirmed on your discovery call.',
    ].join('\n');
    const done = submitPricingLead({
      service: 'hr-outsourcing',
      name: contact.name, email: contact.email, company: contact.company, phone: contact.phone,
      pricing_summary: lines,
      answers: JSON.stringify({
        employees: ans.employees?.label ?? '', hr_today: ans.hrToday?.label ?? '',
        needs: pickedNames,
        benefits_admin: ans.benefitsAdmin?.label ?? '', states: ans.states?.label ?? '',
        recommended: reco.key, chosen: tier.key,
        est_range: rangeText(est) + '/mo',
        benefits_est: bensNeed ? rangeText(bensEst) + '/mo' : '',
      }),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    Promise.all([done, new Promise(r => setTimeout(r, 900))]).then(() => fade(() => setScreen('result')));
  }

  return (
    <>
      <TopBar
        eyebrow="INSTANT HR ESTIMATE"
        right={screen === 'quiz' ? `${qNum} / ${TOTAL_Q}` : screen === 'needs' ? `${needs.length} selected` : screen === 'reco' ? 'Our pick' : screen === 'contact' ? 'Last step' : 'Done'}
        progress={prog}
      />
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {screen === 'quiz' && (() => {
          const st = STEPS[step];
          const cur = ans[st.id];
          return (
            <Wrap show={show}>
              <Eyebrow>QUESTION {qNum} OF {TOTAL_Q}</Eyebrow>
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

        {screen === 'needs' && (
          <Wrap show={show}>
            <Eyebrow>QUESTION 3 OF {TOTAL_Q}</Eyebrow>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '4px', color: T1 }}>What do you want handled?</h2>
            <p style={{ color: T3, fontSize: '0.72rem', marginBottom: '13px' }}>Tap everything that should stop being your problem</p>
            <div style={{ maxHeight: '46vh', overflowY: 'auto', paddingRight: '2px' }}>
              {HR_NEEDS.map(n => {
                const sel = needs.includes(n.id);
                return (
                  <button key={n.id} type="button" onClick={() => toggleNeed(n.id)} style={{ width: '100%', marginBottom: '6px', background: sel ? '#130d00' : CARD, border: `2px solid ${sel ? G : LINE}`, borderRadius: '9px', padding: '9px 11px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '8px', transition: 'all 0.13s' }}>
                    <span style={{ minWidth: '16px', height: '16px', borderRadius: '5px', border: `2px solid ${sel ? G : '#333'}`, background: sel ? G : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: '#000', flexShrink: 0, marginTop: '1px' }}>{sel ? '✓' : ''}</span>
                    <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{n.emoji}</span>
                    <span style={{ flex: 1, lineHeight: 1.3 }}>
                      <span style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: sel ? G : '#ccc' }}>{n.name}</span>
                      <span style={{ display: 'block', fontSize: '0.68rem', color: T2, marginTop: '2px', lineHeight: 1.4 }}>{n.desc}</span>
                    </span>
                    <span style={{ fontSize: '0.62rem', color: T3, flexShrink: 0, marginTop: '2px' }}>{HR_TIERS[HR_TIER_ORDER[n.rank]].name}</span>
                  </button>
                );
              })}
            </div>
            <GoldBtn onClick={afterNeeds} disabled={!needs.length}>
              {needs.length ? `Build my plan: ${liveTier.name} →` : 'Select needs to continue'}
            </GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'reco' && (
          <Wrap show={show}>
            <Eyebrow>OUR PICK FOR YOU</Eyebrow>
            <QTitle q={`${HR_TIERS[reco.key].name} covers everything you tapped`} hint="Estimates shown; exact pricing is confirmed on your call. Any tier is selectable." />
            {HR_TIER_ORDER.map(k => {
              const t = HR_TIERS[k];
              const r = hrEstimate(k, emp);
              const isReco = k === reco.key;
              const covers = t.rank >= reco.rank;
              return (
                <button key={k} type="button" onClick={() => acceptReco(k)} style={{ width: '100%', marginBottom: '7px', background: isReco ? '#130d00' : CARD, border: `2px solid ${isReco ? G : LINE}`, borderRadius: '10px', padding: '12px 13px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.13s' }}>
                  <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: isReco ? G : T1 }}>
                      {t.name}{isReco ? ' · our pick' : ''}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: isReco ? G : '#ccc', fontWeight: 600 }}>{rangeText(r)}/mo est.</span>
                  </span>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: T2, marginTop: '3px' }}>{t.tag}{!covers ? ' · does not cover everything you tapped' : ''}</span>
                </button>
              );
            })}
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'contact' && (
          <Wrap show={show}>
            <Eyebrow>LAST STEP</Eyebrow>
            <QTitle q="Where should we send your estimate?" hint="On screen right now, in your inbox 10 seconds later" />
            <ContactFields contact={contact} setContact={setContact} />
            <GoldBtn onClick={submit} disabled={!canSubmit}>Show my estimate →</GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'submitting' && <Wrap show={show}><Spinner label="Building your estimate..." /></Wrap>}

        {screen === 'result' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center' }}>
              <ResultCheck />
              <div style={{ fontSize: '0.66rem', color: G, fontWeight: 800, letterSpacing: '0.07em', marginBottom: '6px' }}>YOUR HR OUTSOURCING ESTIMATE</div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T1, marginBottom: '2px' }}>{tier.name} · {ans.employees?.label ?? ''}</h2>
              <p style={{ fontSize: '0.66rem', color: T2, margin: '2px 0 0' }}>Powered by isolved</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: G, margin: '6px 0 2px' }}>{rangeText(est)}/mo</div>
              {bensNeed && (
                <p style={{ fontSize: '0.72rem', color: '#ccc', margin: '4px 0 0' }}>Managed Benefits add-on: {rangeText(bensEst)}/mo estimated</p>
              )}
              <p style={{ fontSize: '0.68rem', color: T2, margin: '8px 0 14px', lineHeight: 1.5 }}>
                Estimate based on your answers. Exact pricing is confirmed on your discovery call. A one-time setup fee is quoted on the call.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: '10px', padding: '12px 14px', marginBottom: '12px' }}>
              <div style={{ fontSize: '0.66rem', color: G, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>WHAT {tier.name.toUpperCase()} HANDLES</div>
              {tier.features.map((f, i) => (
                <p key={i} style={{ fontSize: '0.74rem', color: '#ccc', margin: '0 0 5px', lineHeight: 1.45 }}>✓ {f}</p>
              ))}
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={resultCalendlyBtn}>Book your free 15-minute call</a>
            <p style={{ fontSize: '0.66rem', color: T3, textAlign: 'center', margin: '6px 0 0' }}>Your estimate is in your inbox. The call turns it into your exact price.</p>
          </Wrap>
        )}
      </div>
    </>
  );
}
