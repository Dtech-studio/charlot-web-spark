
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';
import { Phone, Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // For phone fields, only allow digits and common phone characters
    if ((name === 'phone' || name === 'whatsapp') && value && !validatePhone(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Contact Us</h1>
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
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <Phone className="text-accent" size={24} />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">+234XXXXXXXXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <Mail className="text-accent" size={24} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">lucascharalotte@gmail.com</p>
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
                            <p className="text-muted-foreground">Texas, USA (Available Worldwide)</p>
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
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        required
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Contact;
