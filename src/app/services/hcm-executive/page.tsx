import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive HCM Software | Business Executive Group',
  description: 'HCM platform for executives and leadership. Deferred comp, complex benefits, discreet management.',
};

export default function HCMExecutivePage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Executive"
      title="One HR platform for executive teams."
      subtitle="HCM Software for Executive"
      description="Executive HR management requires deferred compensation tracking and complex benefits administration handled with discretion and care. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-executive')}
    />
  );
}
