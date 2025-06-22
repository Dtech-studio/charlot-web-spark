
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeOffer />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
