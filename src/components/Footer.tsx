
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-accent">Lucas Charlot</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Professional web designer and brand strategist helping businesses create powerful online presence 
              through innovative design and strategic thinking. Based in Texas, serving clients worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/my-work" className="text-white/80 hover:text-accent transition-colors">My Work</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">Web Design</span></li>
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">Graphic Design</span></li>
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">SEO</span></li>
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">E-commerce</span></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-white/80">Subscribe to get the latest updates and design tips</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent hover:bg-accent/90 px-6 py-3 rounded-r-lg transition-colors font-semibold text-primary">
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
            <a href="mailto:lucascharalotte@gmail.com" className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors">
              <Mail size={16} />
              <span>lucascharalotte@gmail.com</span>
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
