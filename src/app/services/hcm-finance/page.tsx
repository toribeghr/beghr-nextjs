import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Finance & Accounting | Business Executive Group',
  description: 'HCM platform for finance firms. Manage payroll, bonuses, and HR on one connected system.',
};

export default function HCMFinancePage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Finance"
      title="One HR platform for accounting firms."
      subtitle="HCM Software for Finance"
      description="Finance and accounting HR requires bonus tracking, commission management, and zero-error payroll. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-finance')}
    />
  );
}
