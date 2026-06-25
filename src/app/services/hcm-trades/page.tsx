import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Skilled Trades | Business Executive Group',
  description: 'HCM platform for manufacturing and trades. Union compliance, multi-site payroll, certified tracking.',
};

export default function HCMTradesPage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Skilled Trades"
      title="One HR platform for trades and manufacturing."
      description="Skilled trades HR includes union compliance, certified payroll, and multi-site management. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-trades')}
    />
  );
}
