import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Engineering | Business Executive Group',
  description: 'HCM platform for engineering firms. Certified payroll, prevailing wage, project tracking on one system.',
};

export default function HCMEngineeringPage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Engineering"
      title="One HR platform for engineering firms."
      subtitle="HCM Software for Engineering"
      description="Engineering HR requires prevailing wage compliance, certified payroll, and project tracking. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-engineering')}
    />
  );
}
