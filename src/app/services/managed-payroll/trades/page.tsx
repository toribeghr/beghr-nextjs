import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Skilled Trades | Union & Certified Payroll | BEG',
  description: 'Trades and manufacturing payroll at $25-$35 PEPM. Union compliance, certified payroll, and multi-site management all included. Request a scope review.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/trades',
  },
};

export default function PayrollTradesPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/trades.svg"
      eyebrow="Managed Payroll · Skilled Trades"
      title="Trades payroll, fully managed."
      description="Skilled trades and manufacturing payroll means union rules, certified payroll, and workers compensation management. We handle it as a fully managed service."
      calendlyLink={getCalendlyLink('payroll-trades')}
    />
  );
}
