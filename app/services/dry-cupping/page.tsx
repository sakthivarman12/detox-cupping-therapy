import { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { siteData } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Dry Cupping Therapy | Detox Cupping Therapy',
  description: 'Learn about dry cupping therapy - a traditional wellness practice that promotes circulation and relaxation.',
};

export default function DryCuppingPage() {
  const service = siteData.services.find((s) => s.id === 'dry-cupping')!;

  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      whatItIs={service.whatItIs}
      whatToExpect={service.whatToExpect}
      sessionDuration={service.sessionDuration}
      preparation={service.preparation}
      aftercare={service.aftercare}
      serviceId={service.id}
    />
  );
}
