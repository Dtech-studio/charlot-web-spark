
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

  const predefinedResponses: { [key: string]: string } = {
    'services': "Lucas offers: Web Design, Marketing Strategies, Graphic Design, Real Estate Branding, E-commerce Setup, SEO Optimization, and Brand Books & Flyers. Would you like details about any specific service?",
    'pricing': "Pricing varies based on project scope and requirements. For detailed quotes, please use the contact form or call directly. Lucas offers competitive rates for all services.",
    'portfolio': "You can view Lucas's work in the 'My Work' section, featuring projects in web design, branding, marketing campaigns, and more. Each project showcases different skills and expertise.",
    'contact': "You can reach Lucas at lucascharalotte@gmail.com or +234XXXXXXXXXX. He's based in Texas but works with clients worldwide, including Nigeria and the USA.",
    'experience': "Lucas has 5+ years of experience in web design and digital strategy, with 50+ completed projects and 100% client satisfaction rate.",
    'location': "Lucas is based in Texas, USA, but works with clients globally, including Nigeria, USA, and international markets."
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you learn about Lucas's services. What would you like to know?";
    }
    
    return "Thanks for your message! I can help with questions about Lucas's services, pricing, portfolio, contact info, and experience. What specific information are you looking for?";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: 'user', content: inputMessage }]);
      const userMessage = inputMessage;
      setInputMessage('');
      setIsTyping(true);
      
      // Simulate AI typing delay
      setTimeout(() => {
        setIsTyping(false);
        const response = getResponse(userMessage);
        setMessages(prev => [...prev, {
          type: 'bot',
          content: response
        }]);
      }, 1500);
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
