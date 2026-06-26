import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Tech Companies | Remote Team Payroll | BEG',
  description: 'Tech company payroll managed at $25-$35 PEPM. Remote teams, multi-state compliance, and equity compensation included. Request a free scope review.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/technology',
  },
};

export default function PayrollTechnologyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/technology.svg"
      eyebrow="Managed Payroll · Technology"
      title="Tech payroll, fully managed."
      description="Technology payroll means remote teams, stock options, and rapid growth. We run payroll as a fully managed service so your team stays focused on building."
      calendlyLink={getCalendlyLink('payroll-technology')}
    />
  );
}
