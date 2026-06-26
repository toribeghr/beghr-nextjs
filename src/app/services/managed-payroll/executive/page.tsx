import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Payroll Services | Deferred Comp & Benefits | BEG',
  description: 'Executive compensation managed discreetly at $25-$35 PEPM. Deferred comp, executive benefits, and complex arrangements handled. Request a call.',
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
