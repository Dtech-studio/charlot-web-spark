
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const MyWork = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      description: "Complete online store with payment integration"
    },
    {
      title: "Real Estate Website",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      description: "Modern property listing platform"
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      description: "Complete brand identity package"
    },
    {
      title: "Marketing Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Digital marketing strategy and execution"
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      description: "Professional corporate web presence"
    },
    {
      title: "SEO Optimization",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
      description: "Complete SEO overhaul and optimization"
    }
  ];

  const categories = ["All", "Web Design", "Branding", "Marketing", "E-commerce", "Real Estate", "SEO"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gradient">My Work</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase of completed projects in web design, branding, real estate marketing, SEO and more
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
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

export default MyWork;
