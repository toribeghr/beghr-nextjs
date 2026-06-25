import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Skilled Trades | Business Executive Group',
  description: 'Managed payroll for trades and manufacturing. Union rules, certified payroll, multi-site operations. Book a discovery call.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/trades',
  },
};

export default function PayrollTradesPage() {
  return (
    <ServicePage
      eyebrow="Managed Payroll · Skilled Trades"
      title="Trades payroll, fully managed."
      description="Skilled trades and manufacturing payroll means union rules, certified payroll, and workers compensation management. We handle it as a fully managed service."
      calendlyLink={getCalendlyLink('payroll-trades')}
    />
  );
}
