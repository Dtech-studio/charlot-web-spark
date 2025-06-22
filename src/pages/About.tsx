
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-slide-left">
              <div className="relative">
                <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                    alt="About Lucas Charlot"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent rounded-full p-6 shadow-xl">
                  <div className="text-primary font-bold text-center">
                    <div className="text-2xl">5+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 animate-slide-right">
              <h1 className="text-4xl font-bold mb-6 text-gradient">About Lucas Charlot</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lucas Charlot is a passionate web designer and strategist with a creative approach to business and branding. 
                With over 5 years of experience in the digital space, I specialize in creating compelling online experiences 
                that drive results for clients across Nigeria, USA, and internationally.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My expertise spans across web design, digital marketing, brand strategy, and e-commerce solutions. 
                I believe in the power of great design combined with strategic thinking to help businesses thrive in the digital age.
                Based in Texas with a global perspective, I bring international standards to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-muted-foreground">Serving clients from:</span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">🇺🇸 USA</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">🇳🇬 Nigeria</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">🌍 Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default About;
