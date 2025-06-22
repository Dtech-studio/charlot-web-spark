
import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div 
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                    <Phone className="text-accent" size={24} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+234XXXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                    <Mail className="text-accent" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">lucas.charlot@email.com</p>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="space-y-4 animate-fade-up">
                      <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                        <MessageCircle className="text-accent" size={24} />
                        <div>
                          <p className="font-semibold">WhatsApp</p>
                          <p className="text-muted-foreground">+234XXXXXXXXXX</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm">
                        <MapPin className="text-accent" size={24} />
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-muted-foreground">Available Worldwide</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gradient text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
