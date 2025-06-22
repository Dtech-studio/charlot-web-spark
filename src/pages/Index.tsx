
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl animate-bounce" style={{animationDelay: '4s'}}></div>
      </div>
      
      <Header />
      <HeroSection />
      <WhatWeOffer />
      <Testimonials />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
