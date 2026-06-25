import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering Job Placement Services | Business Executive Group',
  description: 'Engineering job placement. Fill engineer and technical roles faster. Specialized recruiting for your projects.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/engineering',
  },
};

export default function PlacementEngineeringPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Engineering"
      title="Fill your engineering roles faster."
      description="Engineering projects need qualified engineers on time. We source and place qualified engineers so your projects keep moving."
      calendlyLink={getCalendlyLink('placement-engineering')}
    />
  );
}
