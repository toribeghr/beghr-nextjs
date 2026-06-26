import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Engineering | Prevailing Wage & Payroll | BEG',
  description: 'iSolved HCM for engineering firms. Certified payroll, prevailing wage compliance, and project tracking on one platform. Implemented by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/engineering',
  },
};

export default function HCMEngineeringPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/engineering.svg"
      eyebrow="HCM Software · Engineering"
      title="One HR platform for engineering firms."
      description="Engineering HR requires prevailing wage compliance, certified payroll, and project tracking. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-engineering')}
    />
  );
}
