import { Metadata } from 'next';
import { Suspense } from 'react';
import CheckoutForm from './CheckoutForm';

export const metadata: Metadata = {
  title: 'Sponsorship Checkout | Business Executive Group',
  description: 'Reserve your BEG event sponsorship tier and complete your order.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.beghr.com/network/sponsorship/checkout' },
};

export default function SponsorshipCheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutForm />
    </Suspense>
  );
}
