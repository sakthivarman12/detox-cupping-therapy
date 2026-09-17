import { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { siteData } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Flower Medicine | Detox Cupping Therapy',
  description: 'Discover flower medicine - a complementary wellness practice using carefully selected flower essences for emotional balance and wellbeing.',
};

export default function FlowerMedicinePage() {
  const service = siteData.services.find((s) => s.id === 'flower-medicine')!;

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
