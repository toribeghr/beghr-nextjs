import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Finance & Accounting Job Placement | Controller & CPA Hiring | BEG',
  description: 'Place controllers, CPAs, and accounting managers faster. Milestone billing, 45-day replacement guarantee. Specialized finance and accounting recruiting.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/finance',
  },
};

export default function PlacementFinancePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/finance.svg"
      eyebrow="Job Placement · Finance"
      title="Fill your finance and accounting roles faster."
      description="Finance and accounting teams need quality hires who can impact your bottom line immediately. We place controllers, CPAs, and accounting professionals."
      calendlyLink={getCalendlyLink('placement-finance')}
    />
  );
}
