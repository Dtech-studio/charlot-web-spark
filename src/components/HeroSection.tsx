
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = ['Web Design', 'Marketing Strategy', 'Graphic Design', 'SEO', 'E-commerce Setup'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src="/lovable-uploads/bd525172-372c-4945-b68d-c1cfa293505b.png"
                  alt="Lucas Charlot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-2xl animate-bounce">
                👋
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Hi, I'm{' '}
              <span className="text-gradient">Lucas Charlot</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
              Web Designer & Brand Strategist
            </h2>
            
            {/* 3D Animated Text */}
            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start animate-fade-up" style={{animationDelay: '0.4s'}}>
              <span className="text-xl text-muted-foreground mr-4">Specializing in</span>
              <div className="text-2xl font-bold text-gradient transform-gpu perspective-1000">
                <span
                  key={currentTextIndex}
                  className="block animate-rotate3d"
                  style={{transformStyle: 'preserve-3d'}}
                >
                  {animatedTexts[currentTextIndex]}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{animationDelay: '0.6s'}}>
              <button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                View My Work
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
