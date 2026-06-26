import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Finance & Accounting | Business Executive Group',
  description: 'HCM platform for finance firms. Manage payroll, bonuses, and HR on one connected system.',
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
