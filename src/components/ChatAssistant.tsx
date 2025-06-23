import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Lucas's AI assistant. I can help you with information about services, pricing, portfolio, and more. How can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);

  const predefinedResponses: { [key: string]: string[] } = {
    'who': [
      "Lucas Charlot is a professional web designer and brand strategist with 5+ years of experience. He's based in Texas and helps businesses create powerful online presence through innovative design and strategic thinking.",
      "Lucas is a skilled designer who specializes in web design, branding, and marketing strategies. He's completed 50+ projects with 100% client satisfaction rate.",
      "Lucas Charlot is a creative professional who combines technical expertise with artistic vision to deliver exceptional digital solutions for clients in the USA and Nigeria."
    ],
    'services': [
      "Lucas offers: Web Design, Marketing Strategies, Graphic Design, Real Estate Branding, E-commerce Setup, SEO Optimization, and Brand Books & Flyers. Each service is tailored to meet specific client needs.",
      "Our main services include comprehensive web design solutions, strategic marketing campaigns, professional graphic design, specialized real estate branding, complete e-commerce setups, and effective SEO optimization.",
      "Lucas provides end-to-end digital solutions: custom web design, brand identity creation, marketing strategy development, e-commerce platform setup, search engine optimization, and professional print materials."
    ],
    'pricing': [
      "Pricing varies based on project scope and requirements. Lucas offers competitive rates for all services with flexible payment options. Contact us for a detailed quote tailored to your specific needs.",
      "Each project is unique, so pricing is customized accordingly. We provide transparent quotes with no hidden fees. Reach out to discuss your project and get a personalized estimate.",
      "Lucas believes in fair, value-based pricing. The cost depends on project complexity, timeline, and specific requirements. Contact us for a free consultation and detailed pricing breakdown."
    ],
    'portfolio': [
      "You can view Lucas's impressive portfolio in the 'My Work' section, featuring diverse projects including web design, branding campaigns, marketing materials, and e-commerce solutions for various industries.",
      "Lucas's portfolio showcases successful projects across different sectors - from real estate branding to e-commerce platforms. Each case study demonstrates his versatility and attention to detail.",
      "The portfolio section highlights Lucas's expertise through completed projects, including brand transformations, website redesigns, and comprehensive marketing campaigns that delivered measurable results."
    ],
    'contact': [
      "You can reach Lucas at lucascharalotte@gmail.com or +234XXXXXXXXXX. He responds quickly to all inquiries and offers free initial consultations to discuss your project needs.",
      "Lucas is available via email at lucascharalotte@gmail.com and phone at +234XXXXXXXXXX. Based in Texas but working with clients worldwide, he's ready to help bring your vision to life.",
      "Get in touch through the contact form, email lucascharalotte@gmail.com, or call +234XXXXXXXXXX. Lucas provides prompt responses and personalized attention to every inquiry."
    ],
    'experience': [
      "Lucas has 5+ years of professional experience in web design and digital strategy, with 50+ completed projects and a perfect client satisfaction rate across various industries.",
      "With over 5 years in the industry, Lucas has developed expertise in modern web technologies, design trends, and effective marketing strategies that drive real business results.",
      "Lucas brings extensive experience from working with diverse clients - from startups to established businesses - delivering innovative solutions that combine creativity with strategic thinking."
    ],
    'location': [
      "Lucas is based in Texas, USA, but works with clients globally, including Nigeria, USA, and international markets. Remote collaboration ensures seamless project delivery regardless of location.",
      "Operating from Texas, Lucas serves clients worldwide through effective remote collaboration tools and processes, ensuring the same high-quality service regardless of geographic boundaries.",
      "While physically located in Texas, Lucas has successfully completed projects for clients across the USA, Nigeria, and other international locations, proving that great design knows no borders."
    ]
  };

  const getVariedResponse = (category: string) => {
    const responses = predefinedResponses[category];
    if (!responses) return null;
    
    // Filter out recently used responses
    const availableResponses = responses.filter(
      response => !conversationHistory.includes(response)
    );
    
    // If all responses have been used, reset and use all responses
    const responsesToUse = availableResponses.length > 0 ? availableResponses : responses;
    
    // Get random response
    const randomIndex = Math.floor(Math.random() * responsesToUse.length);
    return responsesToUse[randomIndex];
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Check for specific categories
    for (const [key] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        const response = getVariedResponse(key);
        if (response) return response;
      }
    }
    
    // Greetings with variations
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const greetings = [
        "Hello! I'm here to help you learn about Lucas's services and expertise. What would you like to know?",
        "Hi there! Thanks for reaching out. I can provide information about Lucas's work, services, and how he can help with your project.",
        "Hey! Great to chat with you. I'm here to answer any questions about Lucas's design services and portfolio."
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Default responses with variations
    const defaultResponses = [
      "Thanks for your message! I can help with questions about Lucas's services, pricing, portfolio, contact info, and experience. What specific information are you looking for?",
      "I'm here to assist you with any questions about Lucas's web design services, past projects, pricing, or how to get started. What would you like to know more about?",
      "Feel free to ask me about Lucas's expertise in web design, branding, marketing strategies, or any other services. How can I help you today?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = inputMessage;
      setMessages([...messages, { type: 'user', content: userMessage }]);
      setInputMessage('');
      setIsTyping(true);
      
      // Simulate AI typing delay
      setTimeout(() => {
        setIsTyping(false);
        const response = getResponse(userMessage);
        
        // Add response to conversation history
        setConversationHistory(prev => {
          const updated = [...prev, response];
          // Keep only last 10 responses to prevent memory issues
          return updated.slice(-10);
        });
        
        setMessages(prev => [...prev, {
          type: 'bot',
          content: response
        }]);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm opacity-90">Online now</p>
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
                  <p className="text-sm">{message.content}</p>
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
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about services, pricing, portfolio..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-gradient-to-r from-primary to-accent text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
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
