
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhatWeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: "Marketing Strategies",
      icon: "📈",
      description: "Effective growth-focused marketing plans."
    },
    {
      title: "Graphic Design",
      icon: "🎨", 
      description: "Visually stunning graphics and branding."
    },
    {
      title: "Website Building",
      icon: "💻",
      description: "Responsive and modern web design."
    },
    {
      title: "Real Estates",
      icon: "🏠",
      description: "Branding and promotion for real estate."
    },
    {
      title: "E-commerce Setup",
      icon: "🛒",
      description: "Professional e-commerce website setup."
    },
    {
      title: "SEO",
      icon: "🔍",
      description: "Boost your site ranking on search engines."
    },
    {
      title: "Brand Book / Flyers",
      icon: "📘",
      description: "Professional brand guidelines and flyers."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">What We Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand and drive business growth
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
