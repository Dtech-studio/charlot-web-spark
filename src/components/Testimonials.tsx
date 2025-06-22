
import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      image: "/lovable-uploads/f8bee3f0-ab13-48bc-93ac-3f7e6c44b77a.png",
      quote: "Lucas transformed our online presence beautifully. His attention to detail and creative vision exceeded our expectations.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      rating: 5
    },
    {
      image: "/lovable-uploads/2a1fbf4b-228c-4074-9b23-f51f6c97e937.png",
      quote: "Highly creative and professional work! Lucas delivered exactly what we needed for our brand identity.",
      name: "Michael Chen",
      position: "CEO, TechStart",
      rating: 5
    },
    {
      image: "/lovable-uploads/41bcec68-1d25-4403-ad33-1561c521f2e3.png",
      quote: "Delivered beyond our expectations. The website design and SEO strategy Lucas provided brought amazing results.",
      name: "Emily Rodriguez",
      position: "Business Owner",
      rating: 5
    },
    {
      image: "/lovable-uploads/d96b2e96-10fc-4c6b-b26b-f68623c42504.png",
      quote: "Exceptional design sense and business knowledge. Lucas understands both aesthetics and functionality perfectly.",
      name: "Amanda Wilson",
      position: "Brand Manager",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-accent text-accent' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What our satisfied clients say about working with us
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
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
