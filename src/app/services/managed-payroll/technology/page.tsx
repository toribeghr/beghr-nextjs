import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Technology | Business Executive Group',
  description: 'Managed payroll for tech companies. Remote teams, stock options, rapid scaling. Book a discovery call.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/technology',
  },
};

export default function PayrollTechnologyPage() {
  return (
    <ServicePage
      eyebrow="Managed Payroll · Technology"
      title="Tech payroll, fully managed."
      description="Technology payroll means remote teams, stock options, and rapid growth. We run payroll as a fully managed service so your team stays focused on building."
      calendlyLink={getCalendlyLink('payroll-technology')}
    />
  );
}
