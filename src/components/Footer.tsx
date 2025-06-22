
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-accent">Lucas Charlot</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Professional web designer and brand strategist helping businesses create powerful online presence 
              through innovative design and strategic thinking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-white/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#my-work" className="text-white/80 hover:text-accent transition-colors">My Work</a></li>
              <li><a href="#contact-us" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Web Design</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">SEO</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">E-commerce</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/10 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-white/80">Subscribe to get the latest updates and design tips</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-accent hover:bg-accent/90 px-6 py-3 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/80 mb-4 md:mb-0">
            © {currentYear} Lucas Charlot. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="mailto:lucas.charlot@email.com" className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors">
              <Mail size={16} />
              <span>lucas.charlot@email.com</span>
            </a>
            <a href="tel:+234XXXXXXXXXX" className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+234XXXXXXXXXX</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
