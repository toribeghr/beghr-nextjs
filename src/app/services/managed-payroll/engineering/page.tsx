import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Engineering Firms | Certified Payroll | BEG',
  description: 'Engineering payroll managed at $25-$35 PEPM. Prevailing wage, certified payroll, and project tracking all included. Request a scope review.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/engineering',
  },
};

export default function PayrollEngineeringPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/engineering.svg"
      eyebrow="Managed Payroll · Engineering"
      title="Engineering payroll, fully managed."
      description="Engineering payroll includes prevailing wage, certified payroll, and project-based labor tracking. We handle it all as a fully managed service."
      calendlyLink={getCalendlyLink('payroll-engineering')}
    />
  );
}
