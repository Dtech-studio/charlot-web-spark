
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Lucas Charlot is a passionate web designer and strategist with a creative approach to business and branding. 
              With over 5 years of experience in the digital space, I specialize in creating compelling online experiences 
              that drive results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My expertise spans across web design, digital marketing, brand strategy, and e-commerce solutions. 
              I believe in the power of great design combined with strategic thinking to help businesses thrive in the digital age.
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

            <button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
