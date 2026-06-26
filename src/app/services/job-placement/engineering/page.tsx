import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering Job Placement | Technical Recruiting Services | BEG',
  description: 'Fill engineering and technical roles on time. Specialized engineering recruiting with milestone billing and 45-day replacement guarantee. Book a call.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/engineering',
  },
};

export default function PlacementEngineeringPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/engineering.svg"
      eyebrow="Job Placement · Engineering"
      title="Fill your engineering roles faster."
      description="Engineering projects need qualified engineers on time. We source and place qualified engineers so your projects keep moving."
      calendlyLink={getCalendlyLink('placement-engineering')}
    />
  );
}
