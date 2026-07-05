'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { G, CARD, LINE, T1, T2, T3 } from './pricing';
import { Wrap, TopBar } from './ui';

// The ONE CTA per page, per silo (sitewide standard July 1, 2026).
// Button styled per the approved artifacts. Forms lazy-load (ssr:false) so
// pages carry zero form weight until the button is tapped. Cross-silo surfaces
// (header, homepage) use service="chooser" and pick a service first.

const PricingModal = dynamic(() => import('./PricingModal'), { ssr: false });
const PlacementPricingForm = dynamic(() => import('./PlacementPricingForm'), { ssr: false });
const PayrollPricingForm = dynamic(() => import('./PayrollPricingForm'), { ssr: false });
const HcmPricingForm = dynamic(() => import('./HcmPricingForm'), { ssr: false });
const HrOutsourcingPricingForm = dynamic(() => import('./HrOutsourcingPricingForm'), { ssr: false });
const BenefitsPricingForm = dynamic(() => import('./BenefitsPricingForm'), { ssr: false });

type Service = 'job-placement' | 'managed-payroll' | 'hcm-software' | 'hr-outsourcing' | 'managed-benefits' | 'chooser';

interface Props {
  service: Service;
  industry?: string;   // slug on the 26 job-placement industry pages
  subline?: boolean;   // false for compact placements (blog posts, header)
  label?: string;      // override the button text
}

const LABELS: Record<Service, string> = {
  'managed-payroll': 'Get Pricing in 90 Seconds',
  'job-placement': 'Get Pricing in 90 Seconds',
  'hcm-software': 'Get Your Instant Quote',
  'hr-outsourcing': 'Get Instant Pricing',
  'managed-benefits': 'Get Instant Pricing',
  chooser: 'Get Instant Pricing',
};

const SUBLINES: Record<Service, string> = {
  'managed-payroll': 'See your exact monthly & annual price - no call required',
  'job-placement': 'See your exact placement price - no call required',
  'hcm-software': 'Exact monthly and annual price - no call required',
  'hr-outsourcing': 'Your monthly estimate on screen - no call required',
  'managed-benefits': 'Your monthly estimate on screen - no call required',
  chooser: 'Pick a service, see your price - no call required',
};

export default function PricingCta({ service, industry, subline = true, label }: Props) {
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState<Service | null>(null);
  const active = service === 'chooser' ? chosen : service;
  const close = () => setOpen(false);

  const chooserCard = (svc: Service, emoji: string, title: string, desc: string) => (
    <button
      key={svc}
      type="button"
      onClick={() => setChosen(svc)}
      style={{ width: '100%', marginBottom: '7px', background: CARD, border: `2px solid ${LINE}`, borderRadius: '10px', padding: '13px 14px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.13s' }}
    >
      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{emoji}</span>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: T1 }}>{title}</span>
        <span style={{ display: 'block', fontSize: '0.7rem', color: T2, marginTop: '2px', lineHeight: 1.4 }}>{desc}</span>
      </span>
      <span style={{ fontSize: '0.75rem', color: T3 }}>→</span>
    </button>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => { setChosen(null); setOpen(true); }}
        style={{ background: G, color: '#000', border: 'none', borderRadius: '12px', padding: '16px 32px', fontSize: '1.02rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 20px rgba(236,172,96,0.25)', display: 'inline-flex', alignItems: 'center', gap: '9px' }}
      >
        <span style={{ fontSize: '1.1rem' }}>⚡</span>
        {label || LABELS[service]}
      </button>
      {subline && (
        <p style={{ fontSize: '0.72rem', color: '#9aa3b2', margin: '12px 0 0' }}>{SUBLINES[service]}</p>
      )}
      {open && (
        <PricingModal open={open} onClose={close}>
          {!active ? (
            <>
              <TopBar eyebrow="BEG · INSTANT PRICING" right="Pick one" progress={5} />
              <div style={{ flex: 1, overflowY: 'auto' }}>
                <Wrap show>
                  <h2 style={{ fontSize: '1.16rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '5px', color: T1 }}>What do you need priced?</h2>
                  <p style={{ color: T3, fontSize: '0.74rem', marginBottom: '16px' }}>Takes about 90 seconds either way</p>
                  {chooserCard('managed-payroll', '💵', 'Managed Payroll & HR', 'We run payroll for you - every filing, deadline and W-2 handled')}
                  {chooserCard('job-placement', '🎯', 'Job Placement', 'Open roles filled in 23-35 days, priced per role')}
                  {chooserCard('hcm-software', '🖥️', 'HCM Software (isolved)', 'HR, payroll, talent and benefits on one platform')}
                  {chooserCard('hr-outsourcing', '🧑‍💼', 'HR Outsourcing', 'Handbooks, compliance and a dedicated HR pro - your HR, handled')}
                  {chooserCard('managed-benefits', '🛡️', 'Managed Benefits', 'Enrollment, ACA and benefits admin off your desk - you keep your broker')}
                </Wrap>
              </div>
            </>
          ) : active === 'managed-payroll' ? (
            <PayrollPricingForm onClose={close} />
          ) : active === 'job-placement' ? (
            <PlacementPricingForm industry={industry} onClose={close} />
          ) : active === 'hr-outsourcing' ? (
            <HrOutsourcingPricingForm onClose={close} />
          ) : active === 'managed-benefits' ? (
            <BenefitsPricingForm onClose={close} />
          ) : (
            <HcmPricingForm onClose={close} />
          )}
        </PricingModal>
      )}
    </>
  );
}
