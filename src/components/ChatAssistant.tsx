
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, ChevronUp } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Lucas's AI assistant. I can help you with detailed information about services, pricing, portfolio, experience, and much more. Feel free to ask me anything about Lucas's work or how he can help with your project!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const comprehensiveResponses: { [key: string]: string[] } = {
    'who': [
      "Lucas Charlot is a highly skilled web designer and brand strategist with over 5 years of professional experience in the digital design industry. Based in Texas, he serves clients across the USA, Nigeria, and internationally.\n\nHis expertise spans multiple disciplines including:\n• Custom Web Design & Development\n• Brand Identity & Strategy\n• Digital Marketing Campaigns\n• E-commerce Solutions\n• SEO Optimization\n• Real Estate Marketing\n\nLucas has successfully completed 50+ projects with a 100% client satisfaction rate. His approach combines technical expertise with creative vision, ensuring each project not only looks stunning but also drives real business results for his clients.",
      
      "Lucas is a passionate creative professional who believes in the power of good design to transform businesses. With a background in both technical development and artistic design, he brings a unique perspective to every project.\n\nWhat sets Lucas apart:\n• International experience working with diverse clients\n• Deep understanding of both US and Nigerian markets\n• Expertise in modern web technologies and design trends\n• Strategic approach to brand development\n• Focus on measurable results and ROI\n\nHe's particularly known for his work in real estate branding, e-commerce development, and comprehensive digital marketing strategies that help businesses establish a strong online presence.",
      
      "Lucas Charlot represents the new generation of digital strategists who understand that great design is about more than just aesthetics—it's about creating meaningful connections between brands and their audiences.\n\nHis professional journey includes:\n• Collaborating with startups to established enterprises\n• Developing brand identities that resonate across cultures\n• Creating responsive, user-friendly websites\n• Implementing data-driven marketing strategies\n• Building e-commerce platforms that convert\n\nBased in Texas but with a global mindset, Lucas combines American innovation with international perspectives to deliver solutions that work in today's interconnected world."
    ],
    
    'services': [
      "Lucas offers a comprehensive suite of digital services designed to elevate your business:\n\n🎨 **WEB DESIGN & DEVELOPMENT**\n• Custom responsive websites\n• Modern UI/UX design\n• Mobile-first approach\n• Performance optimization\n• CMS integration\n\n🚀 **BRAND STRATEGY & IDENTITY**\n• Logo design & brand guidelines\n• Visual identity systems\n• Brand positioning strategy\n• Marketing collateral design\n\n📈 **DIGITAL MARKETING**\n• Social media strategy\n• Content marketing\n• Email campaigns\n• Conversion optimization\n\n🏠 **REAL ESTATE SPECIALIZATION**\n• Property marketing materials\n• Virtual tour integration\n• Lead generation systems\n• MLS-compatible websites\n\n🛒 **E-COMMERCE SOLUTIONS**\n• Online store development\n• Payment gateway integration\n• Inventory management\n• Customer experience optimization\n\n🔍 **SEO & ANALYTICS**\n• Technical SEO audits\n• Keyword strategy\n• Local SEO optimization\n• Performance tracking & reporting",
      
      "Each service Lucas provides is tailored to meet your specific business needs and goals:\n\n**CONSULTATION & STRATEGY**\nEvery project begins with a thorough consultation to understand your vision, target audience, and business objectives. Lucas then develops a customized strategy that aligns with your goals.\n\n**DESIGN & DEVELOPMENT**\nUsing the latest technologies and design principles, Lucas creates solutions that are not only visually stunning but also highly functional and user-friendly.\n\n**IMPLEMENTATION & OPTIMIZATION**\nBeyond launch, Lucas provides ongoing support, monitoring, and optimization to ensure your digital presence continues to deliver results.\n\n**TRAINING & SUPPORT**\nClients receive comprehensive training on managing their new systems, plus ongoing technical support to ensure smooth operations.\n\nWhether you're a startup looking to establish your first digital presence or an established business ready to elevate your brand, Lucas has the expertise to help you succeed."
    ],
    
    'pricing': [
      "Lucas believes in transparent, value-based pricing that reflects the quality and results you receive:\n\n💼 **PROJECT-BASED PRICING**\nMost projects are quoted based on scope, complexity, and timeline. This ensures you pay for exactly what you need without hidden costs.\n\n📊 **PRICING FACTORS**\n• Project complexity and scope\n• Timeline and urgency\n• Number of pages/features\n• Custom functionality requirements\n• Ongoing maintenance needs\n\n💳 **PAYMENT OPTIONS**\n• Flexible payment plans available\n• 50% deposit to start, 50% on completion\n• Extended payment terms for larger projects\n• Retainer packages for ongoing work\n\n📞 **FREE CONSULTATION**\nEvery project starts with a complimentary consultation where Lucas will:\n• Understand your specific needs\n• Provide honest recommendations\n• Offer a detailed project timeline\n• Present a transparent cost breakdown\n\nContact Lucas directly for a personalized quote tailored to your project requirements.",
      
      "Investment in professional design and development varies based on your specific needs:\n\n🌟 **TYPICAL PROJECT RANGES**\n• Basic Website: Starting from $2,000-$5,000\n• E-commerce Store: $5,000-$15,000\n• Complete Brand Package: $3,000-$8,000\n• Marketing Campaign: $2,000-$10,000\n• SEO Package: $1,500-$5,000/month\n\n✨ **WHAT'S INCLUDED**\nEvery project includes:\n• Professional design and development\n• Mobile responsiveness\n• Basic SEO optimization\n• Initial training and support\n• 30-day post-launch support\n• Source files and documentation\n\n🎯 **VALUE PROPOSITION**\nWhile pricing is competitive, the focus is on delivering exceptional value through:\n• Higher conversion rates\n• Improved user experience\n• Better search engine rankings\n• Professional brand image\n• Long-term business growth\n\nRemember, this is an investment in your business's future success!"
    ],
    
    'portfolio': [
      "Lucas's portfolio showcases a diverse range of successful projects across multiple industries:\n\n🏢 **CORPORATE WEBSITES**\n• Modern, professional designs that establish credibility\n• Mobile-responsive layouts with intuitive navigation\n• Integrated contact forms and lead generation\n• SEO-optimized content structure\n\n🏠 **REAL ESTATE PROJECTS**\n• Property showcase websites with virtual tours\n• Lead capture and CRM integration\n• MLS connectivity and property search\n• Agent branding and marketing materials\n\n🛒 **E-COMMERCE STORES**\n• User-friendly online shopping experiences\n• Secure payment processing integration\n• Inventory management systems\n• Customer account functionality\n\n🎨 **BRAND IDENTITY WORK**\n• Complete visual identity systems\n• Logo design and brand guidelines\n• Marketing collateral and print materials\n• Brand strategy and positioning\n\n📈 **MARKETING CAMPAIGNS**\n• Social media campaign designs\n• Email marketing templates\n• Digital advertising materials\n• Content strategy implementation\n\nEach project in the portfolio demonstrates Lucas's ability to understand client needs and deliver solutions that exceed expectations.",
      
      "The 'My Work' section features detailed case studies that highlight:\n\n📊 **PROJECT OUTCOMES**\n• Increased website traffic by 200-500%\n• Improved conversion rates by 50-150%\n• Enhanced brand recognition and recall\n• Measurable ROI improvements\n\n🔍 **PROCESS INSIGHTS**\n• Initial consultation and discovery\n• Strategy development and planning\n• Design and development phases\n• Testing and optimization\n• Launch and ongoing support\n\n🌍 **INTERNATIONAL REACH**\nProjects span multiple markets including:\n• US-based businesses (Texas focus)\n• Nigerian market adaptations\n• International e-commerce platforms\n• Cross-cultural brand strategies\n\n💡 **INNOVATIVE SOLUTIONS**\n• Custom functionality development\n• Third-party integrations\n• Performance optimization\n• User experience enhancements\n\nBrowse the portfolio to see how Lucas has helped businesses like yours achieve their digital goals."
    ],
    
    'contact': [
      "Ready to start your project? Lucas makes it easy to get in touch:\n\n📧 **EMAIL COMMUNICATION**\nPrimary: lucascharalotte@gmail.com\n• Fastest response time (usually within 2-4 hours)\n• Perfect for detailed project discussions\n• Ideal for sharing files and references\n\n📱 **PHONE CONSULTATION**\nDirect: +234XXXXXXXXXX\n• Available during business hours (CST)\n• Great for quick questions\n• Free initial consultation calls\n\n🌐 **ONLINE PRESENCE**\n• Professional portfolio website\n• Active on social media platforms\n• LinkedIn for professional networking\n• Facebook for community engagement\n\n⚡ **RESPONSE COMMITMENT**\n• Email responses within 4 hours\n• Phone calls returned same day\n• Free consultations available\n• Project quotes within 24-48 hours\n\n📅 **BOOKING A CONSULTATION**\nTo schedule your free consultation:\n1. Send an email with your project overview\n2. Include your preferred contact method\n3. Mention your timeline and budget range\n4. Lucas will respond with available times",
      
      "Lucas prioritizes clear, prompt communication throughout every project:\n\n🤝 **CONSULTATION PROCESS**\n• Free initial discovery call (30-60 minutes)\n• Detailed project requirement analysis\n• Timeline and milestone planning\n• Transparent cost breakdown\n• Contract and agreement setup\n\n💬 **ONGOING COMMUNICATION**\n• Regular project updates via email\n• Scheduled check-in calls\n• Shared project management platform\n• 24/7 access to project files\n• Quick response to questions\n\n🌍 **GLOBAL AVAILABILITY**\n• Based in Texas (CST timezone)\n• Accommodates international clients\n• Flexible meeting schedules\n• Video conferencing available\n• Multilingual support when needed\n\n📋 **WHAT TO PREPARE**\nBefore your consultation, gather:\n• Examples of designs you like\n• Your current branding materials\n• List of required features/functionality\n• Target audience information\n• Budget and timeline expectations\n\nDon't hesitate to reach out - Lucas loves discussing new projects and helping businesses achieve their digital goals!"
    ],
    
    'experience': [
      "Lucas brings over 5 years of intensive experience in digital design and strategy:\n\n🎓 **PROFESSIONAL BACKGROUND**\n• 5+ years in web design and development\n• 50+ completed projects across industries\n• 100% client satisfaction rate\n• Expertise in modern technologies and frameworks\n\n🏆 **KEY ACHIEVEMENTS**\n• Successfully launched 50+ websites\n• Increased client revenues by an average of 40%\n• Built e-commerce stores generating $100K+ annually\n• Developed brand identities for international companies\n• Achieved top Google rankings for multiple clients\n\n💼 **INDUSTRY EXPERIENCE**\n• Real Estate (residential and commercial)\n• E-commerce and retail\n• Professional services\n• Technology startups\n• Non-profit organizations\n• Healthcare and wellness\n• Education and training\n\n🛠 **TECHNICAL EXPERTISE**\n• Modern web frameworks (React, Vue, Angular)\n• E-commerce platforms (Shopify, WooCommerce)\n• CMS systems (WordPress, Drupal, custom)\n• SEO and analytics tools\n• Design software (Adobe Creative Suite, Figma)\n• Database management and API integration",
      
      "Lucas's experience spans both creative and technical aspects of digital marketing:\n\n📈 **PROVEN RESULTS**\n• Average 200% increase in website traffic\n• 150% improvement in conversion rates\n• 300% boost in social media engagement\n• 90% client retention rate\n• Multiple award-winning designs\n\n🌟 **SPECIALIZATIONS DEVELOPED**\n• Real estate marketing automation\n• E-commerce conversion optimization\n• Cross-cultural brand adaptation\n• Mobile-first design principles\n• Performance-driven development\n\n🤝 **CLIENT RELATIONSHIPS**\n• Long-term partnerships with key clients\n• Referral-based business growth\n• International client base\n• Collaborative approach to projects\n• Ongoing support and optimization\n\n📚 **CONTINUOUS LEARNING**\n• Stays current with industry trends\n• Regular training in new technologies\n• Attends design and marketing conferences\n• Active in professional communities\n• Commits to best practices and standards\n\nThis extensive experience ensures that every project benefits from proven strategies and cutting-edge techniques."
    ]
  };

  const getComprehensiveResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Check for specific categories with better matching
    let bestMatch = { key: '', score: 0 };
    
    for (const [key] of Object.entries(comprehensiveResponses)) {
      if (lowerMessage.includes(key)) {
        const score = key.length / lowerMessage.length;
        if (score > bestMatch.score) {
          bestMatch = { key, score };
        }
      }
    }
    
    if (bestMatch.key) {
      const responses = comprehensiveResponses[bestMatch.key];
      let lastUsedIndex = -1;
      
      // Find the last used response index manually
      for (let i = conversationHistory.length - 1; i >= 0; i--) {
        const index = responses.indexOf(conversationHistory[i]);
        if (index !== -1) {
          lastUsedIndex = index;
          break;
        }
      }
      
      // If we have responses and haven't used all, pick next one
      if (lastUsedIndex < responses.length - 1) {
        return responses[lastUsedIndex + 1];
      } else {
        // If we've used all, pick a random one
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
      }
    }
    
    // Enhanced greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const greetings = [
        "Hello! I'm Lucas's AI assistant, ready to provide comprehensive information about his services and expertise. What specific aspect of his work would you like to explore?\n\nI can help with:\n• Detailed service explanations\n• Portfolio insights and case studies\n• Pricing and project timelines\n• Technical capabilities\n• Contact information and consultation booking\n\nFeel free to ask anything!",
        "Hi there! Great to meet you! I'm here to provide detailed insights about Lucas's work and how he can help transform your business through exceptional design and strategy.\n\nWhether you're curious about:\n• His web design and development process\n• Brand strategy and identity work\n• E-commerce and marketing solutions\n• Real estate specialization\n• Project costs and timelines\n\nI'm ready to give you comprehensive answers. What would you like to know first?",
        "Hey! Welcome! I'm Lucas's AI assistant, and I'm excited to help you learn about his incredible work in web design, branding, and digital strategy.\n\nI can provide detailed information about:\n• Complete service offerings and capabilities\n• Past projects and success stories\n• The design and development process\n• Pricing structures and payment options\n• How to get started on your project\n\nWhat aspects of Lucas's work interest you most?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Enhanced default responses with more comprehensive information
    const defaultResponses = [
      "I'm here to provide detailed information about Lucas Charlot's comprehensive digital services! I can help you understand:\n\n🎨 **DESIGN SERVICES**\n• Custom web design and development\n• Brand identity and visual systems\n• User experience optimization\n\n📈 **STRATEGIC SERVICES**\n• Digital marketing campaigns\n• SEO and performance optimization\n• E-commerce development\n\n🏠 **SPECIALIZED AREAS**\n• Real estate marketing\n• International business solutions\n• Cross-platform integration\n\nWhat specific area would you like to explore in detail?",
      
      "Lucas offers a complete range of digital solutions for businesses ready to elevate their online presence. I can provide comprehensive details about:\n\n💼 **BUSINESS SOLUTIONS**\n• Professional website development\n• Brand strategy and positioning\n• Marketing automation and lead generation\n\n🌍 **INTERNATIONAL EXPERTISE**\n• US and Nigerian market experience\n• Cross-cultural design adaptation\n• Global e-commerce capabilities\n\n📊 **RESULTS-DRIVEN APPROACH**\n• Data-driven design decisions\n• Conversion optimization strategies\n• Measurable ROI improvements\n\nWhich aspect of Lucas's expertise would you like to learn more about?",
      
      "I'm equipped to provide in-depth information about Lucas's professional services and approach. Here's what I can help you understand:\n\n🚀 **PROJECT PROCESS**\n• Initial consultation and discovery\n• Strategy development and planning\n• Design, development, and implementation\n• Launch, testing, and optimization\n\n💡 **UNIQUE VALUE PROPOSITION**\n• 5+ years of proven experience\n• 100% client satisfaction rate\n• International perspective and expertise\n• Comprehensive end-to-end solutions\n\n🎯 **SPECIALIZED EXPERTISE**\n• Real estate digital marketing\n• E-commerce optimization\n• Brand development and strategy\n• Technical SEO and performance\n\nWhat would you like to dive deeper into?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = inputMessage;
      setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
      setInputMessage('');
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        const response = getComprehensiveResponse(userMessage);
        
        setConversationHistory(prev => {
          const updated = [...prev, response];
          return updated.slice(-10);
        });
        
        setMessages(prev => [...prev, {
          type: 'bot',
          content: response
        }]);
      }, 1500 + Math.random() * 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${isOpen ? 'hidden' : 'block'} animate-bounce`}
        style={{animationDuration: '3s'}}
      >
        <Bot size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm opacity-90">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about services, pricing, portfolio..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm resize-none"
                disabled={isTyping}
                rows={1}
                style={{minHeight: '40px', maxHeight: '80px'}}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-gradient-to-r from-primary to-accent text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 self-end"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
