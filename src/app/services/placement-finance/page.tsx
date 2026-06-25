import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Finance & Accounting Job Placement | Business Executive Group',
  description: 'Finance and accounting hiring. Fill controller, CPA, and accounting roles faster. Milestone pricing, 45-day guarantee.',
};

export default function PlacementFinancePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Finance"
      title="Fill your finance and accounting roles faster."
      subtitle="Finance & Accounting Job Placement"
      description="Finance and accounting teams need quality hires who can impact your bottom line immediately. We place controllers, CPAs, and accounting professionals."
      calendlyLink={getCalendlyLink('placement-finance')}
    />
  );
}
