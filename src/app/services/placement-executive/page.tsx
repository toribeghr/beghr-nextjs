import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Search Services | Business Executive Group',
  description: 'Executive leadership search. Find director and C-level talent. Confidential, focused executive recruiting.',
  canonical: 'https://beghr.com/services/placement-executive',
};

export default function PlacementExecutivePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Executive"
      title="Find your next executive leader."
      subtitle="Executive Job Placement"
      description="Executive and director-level search requires confidentiality and deep expertise. We source and place senior leaders with focused, discreet recruiting."
      calendlyLink={getCalendlyLink('placement-executive')}
    />
  );
}
