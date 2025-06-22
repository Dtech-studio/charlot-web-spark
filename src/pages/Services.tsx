
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const Services = () => {
  const services = [
    {
      title: "Marketing Strategies",
      icon: "📈",
      description: "Comprehensive growth-focused marketing plans tailored to your business goals.",
      features: ["Market Research", "Campaign Planning", "ROI Optimization", "Performance Analytics"]
    },
    {
      title: "Graphic Design",
      icon: "🎨", 
      description: "Visually stunning graphics and branding that captivate your audience.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Graphics"]
    },
    {
      title: "Website Development",
      icon: "💻",
      description: "Responsive and modern web design that converts visitors into customers.",
      features: ["Custom Design", "Mobile Responsive", "SEO Ready", "Fast Loading"]
    },
    {
      title: "Real Estate Branding",
      icon: "🏠",
      description: "Specialized branding and marketing solutions for real estate professionals.",
      features: ["Property Listings", "Agent Branding", "Marketing Materials", "Virtual Tours"]
    },
    {
      title: "E-commerce Setup",
      icon: "🛒",
      description: "Complete e-commerce solutions from setup to optimization.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Marketing Tools"]
    },
    {
      title: "SEO Optimization",
      icon: "🔍",
      description: "Boost your search engine rankings and drive organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Services;
