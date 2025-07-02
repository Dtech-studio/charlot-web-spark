
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSubscription from './NewsletterSubscription';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-black text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-accent">Lucas Charlot</h3>
            <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">
              Professional web designer and brand strategist helping businesses create powerful online presence 
              through innovative design and strategic thinking. Based in Texas, serving clients in USA and Nigeria.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
              <a href="https://www.facebook.com/lucas.charlotte.974271?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Facebook size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Twitter size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300">
                <Linkedin size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/my-work" className="text-white/80 hover:text-accent transition-colors">My Work</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Services</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">Web Design</span></li>
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">Graphic Design</span></li>
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">SEO</span></li>
              <li><span className="text-white/80 hover:text-accent transition-colors cursor-pointer">E-commerce</span></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterSubscription />

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between text-center md:text-left">
          <p className="text-white/80 text-sm md:text-base">
            © {currentYear} Lucas Charlot. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <a href="mailto:lucascharalotte@gmail.com" className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors text-sm md:text-base">
              <Mail size={14} className="md:w-4 md:h-4" />
              <span>lucascharalotte@gmail.com</span>
            </a>
            <a href="tel:+234XXXXXXXXXX" className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors text-sm md:text-base">
              <Phone size={14} className="md:w-4 md:h-4" />
              <span>+234XXXXXXXXXX</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
