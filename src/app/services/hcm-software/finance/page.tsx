import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Finance Firms | Bonus & Payroll Platform | BEG',
  description: 'iSolved HCM for finance and accounting. Bonus tracking, commission management, and payroll on one platform. Implemented and supported by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/finance',
  },
};

export default function HCMFinancePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/finance.svg"
      eyebrow="HCM Software · Finance"
      title="One HR platform for accounting firms."
      description="Finance and accounting HR requires bonus tracking, commission management, and zero-error payroll. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-finance')}
    />
  );
}
