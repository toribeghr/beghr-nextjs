import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Engineering | Business Executive Group',
  description: 'Managed payroll for engineering firms. Prevailing wage, certified payroll, project labor. Book a discovery call.',
};

export default function PayrollEngineeringPage() {
  return (
    <ServicePage
      eyebrow="Managed Payroll · Engineering"
      title="Engineering payroll, fully managed."
      description="Engineering payroll includes prevailing wage, certified payroll, and project-based labor tracking. We handle it all as a fully managed service."
      calendlyLink={getCalendlyLink('payroll-engineering')}
    />
  );
}
