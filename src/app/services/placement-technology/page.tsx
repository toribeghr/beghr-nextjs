import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Technology Job Placement Services | Business Executive Group',
  description: 'IT and software job placement. Fill developer, data, and tech roles faster before your roadmap slips.',
  canonical: 'https://beghr.com/services/placement-technology',
};

export default function PlacementTechnologyPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Technology"
      title="Fill your software and tech roles faster."
      subtitle="Technology Job Placement"
      description="Technology teams move fast. We place software engineers, data scientists, and IT professionals so your roadmap stays on track."
      calendlyLink={getCalendlyLink('placement-technology')}
    />
  );
}
