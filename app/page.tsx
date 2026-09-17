import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import QualificationsSection from '@/components/QualificationsSection';
import ServicesSection from '@/components/ServicesSection';
import HomeVisitsSection from '@/components/HomeVisitsSection';
import SessionJourney from '@/components/SessionJourney';
import ApproachSection from '@/components/ApproachSection';
import SafetySection from '@/components/SafetySection';
import FAQAccordion from '@/components/FAQAccordion';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QualificationsSection />
      <ServicesSection />
      <HomeVisitsSection />
      <SessionJourney />
      <ApproachSection />
      <SafetySection />
      <FAQAccordion />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
