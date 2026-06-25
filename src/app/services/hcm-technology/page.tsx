import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Technology | Business Executive Group',
  description: 'HCM platform for tech companies. Manage equity, contractors, and remote teams on one system.',
  canonical: 'https://beghr.com/services/hcm-technology',
};

export default function HCMTechnologyPage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Technology"
      title="One HR platform for tech companies."
      subtitle="HCM Software for Technology"
      description="Technology company HR includes equity compensation, contractor management, and distributed teams. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-technology')}
    />
  );
}
