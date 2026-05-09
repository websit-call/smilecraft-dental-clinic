import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutDoctor from '@/components/AboutDoctor';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import BookingForm from '@/components/BookingForm';
import Reviews from '@/components/Reviews';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <AboutDoctor />
      <Services />
      <WhyChooseUs />
      <BookingForm />
      <Reviews />
      <SocialProof />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
