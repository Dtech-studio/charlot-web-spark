
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      description: "Complete online store with payment integration and inventory management",
      details: "Built with modern e-commerce features including secure payments, inventory tracking, customer accounts, and mobile optimization. Increased client sales by 300% in first quarter."
    },
    {
      title: "Real Estate Website",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      description: "Modern property listing platform with virtual tours",
      details: "Advanced real estate platform featuring virtual tours, property search, MLS integration, and lead generation tools. Generated 150+ qualified leads monthly for client."
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      description: "Complete brand identity package with logo and guidelines",
      details: "Comprehensive brand identity including logo design, color palette, typography, business cards, and brand guidelines. Increased brand recognition by 80% within 6 months."
    },
    {
      title: "Marketing Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Digital marketing strategy and execution",
      details: "Multi-channel marketing campaign including social media, email marketing, and content strategy. Achieved 250% increase in engagement and 40% boost in conversions."
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      description: "Professional corporate web presence with modern design",
      details: "Responsive corporate website with content management system, contact forms, and SEO optimization. Improved search rankings to top 3 positions for key terms."
    },
    {
      title: "SEO Optimization",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
      description: "Complete SEO overhaul and optimization",
      details: "Technical SEO audit and optimization resulting in 400% increase in organic traffic, improved page speed, and enhanced user experience metrics."
    }
  ];

  const categories = ["All", "Web Design", "Branding", "Marketing", "E-commerce", "Real Estate", "SEO"];
  
  const categoryInfo: { [key: string]: string } = {
    "Web Design": "Custom responsive websites built with modern technologies, focusing on user experience and performance optimization.",
    "Branding": "Complete brand identity development including logos, guidelines, and visual systems that resonate with your target audience.",
    "Marketing": "Strategic digital marketing campaigns that drive engagement, generate leads, and boost conversions across multiple channels.",
    "E-commerce": "Full-featured online stores with secure payment processing, inventory management, and conversion optimization.",
    "Real Estate": "Specialized real estate marketing solutions including property websites, virtual tours, and lead generation systems.",
    "SEO": "Technical SEO optimization and strategy implementation to improve search rankings and organic traffic growth."
  };

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const scrollToContact = () => {
    // Navigate to contact page and scroll to contact form
    window.location.href = '/contact#contact-form';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gradient">My Work</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase of completed projects in web design, branding, real estate marketing, SEO and more
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  activeFilter === category
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Category Information */}
          {activeFilter !== "All" && (
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8 animate-fade-in">
              <h3 className="text-xl font-semibold text-primary mb-3">{activeFilter} Services</h3>
              <p className="text-muted-foreground">{categoryInfo[activeFilter]}</p>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-600">{project.details}</p>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 w-full text-center"
                  >
                    Get Similar Work
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with professional design and strategic thinking.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default MyWork;
