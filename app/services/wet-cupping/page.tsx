import { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { siteData } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Wet Cupping / Hijama | Detox Cupping Therapy',
  description: 'Learn about wet cupping (Hijama) - a traditional wellness practice performed with strict hygiene and professional safety protocols.',
};

export default function WetCuppingPage() {
  const service = siteData.services.find((s) => s.id === 'wet-cupping')!;

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
