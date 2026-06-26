import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Skilled Trades | Union & Multi-Site Payroll | BEG',
  description: 'iSolved HCM for trades and manufacturing. Union compliance, certified payroll, and multi-site management on one platform. Implemented by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/trades',
  },
};

export default function HCMTradesPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/trades.svg"
      eyebrow="HCM Software · Skilled Trades"
      title="One HR platform for trades and manufacturing."
      description="Skilled trades HR includes union compliance, certified payroll, and multi-site management. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-trades')}
    />
  );
}
