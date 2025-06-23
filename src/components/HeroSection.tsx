
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = ['Web Design', 'Marketing Strategy', 'Graphic Design', 'Real Estate', 'E-commerce Setup', 'SEO'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200/30 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-20 right-40 w-12 h-12 bg-primary/15 rotate-12 animate-pulse" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/40 rounded-full animate-ping" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-300/50 rounded-full animate-pulse" style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Enhanced background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl scale-110 animate-pulse"></div>
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/bd525172-372c-4945-b68d-c1cfa293505b.png"
                  alt="Lucas Charlot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-2xl animate-bounce">
                👋
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -left-8 top-1/2 w-6 h-6 bg-primary rounded-full animate-ping"></div>
              <div className="absolute -right-8 bottom-1/4 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -top-6 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-6 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Hi, I'm{' '}
              <span className="text-gradient">Lucas Charlot</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
              Web Designer & Brand Strategist
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
              Creating premium digital experiences for clients across Texas, Nigeria, and worldwide
            </p>
            
            {/* Enhanced 3D Animated Text */}
            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start animate-fade-up" style={{animationDelay: '0.4s'}}>
              <span className="text-xl text-muted-foreground mr-4">Specializing in</span>
              <div className="text-2xl font-bold text-gradient transform-gpu perspective-1000">
                <span
                  key={currentTextIndex}
                  className="block animate-rotate3d hover:scale-110 transition-transform duration-300"
                  style={{transformStyle: 'preserve-3d'}}
                >
                  {animatedTexts[currentTextIndex]}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{animationDelay: '0.6s'}}>
              <Link 
                to="/my-work"
                className="btn-gradient text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
              >
                View My Work
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
