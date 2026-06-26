import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Payroll Services | Business Executive Group',
  description: 'Executive payroll and compensation management. Deferred comp, executive benefits, discretion. Book a discovery call.',
  alternates: {
    canonical: 'https://beghr.com/services/managed-payroll/executive',
  },
};

export default function PayrollExecutivePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/executive.svg"
      eyebrow="Managed Payroll · Executive"
      title="Executive payroll, discreetly managed."
      description="Executive and leadership payroll includes deferred compensation, executive benefits, and complex arrangements handled with discretion and care."
      calendlyLink={getCalendlyLink('payroll-executive')}
    />
  );
}
