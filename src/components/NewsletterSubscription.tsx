import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // You can add newsletter subscription logic here
      // For now, we'll just show a success message
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8">
      <form onSubmit={handleSubscribe} className="flex flex-col items-center text-center">
        <div className="mb-4">
          <h4 className="text-lg md:text-xl font-semibold mb-2">Stay Updated</h4>
          <p className="text-white/80 text-sm md:text-base">Subscribe to get the latest updates and design tips</p>
        </div>
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-sm md:text-base disabled:opacity-50"
            required
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-accent hover:bg-accent/90 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-r-lg transition-colors font-semibold text-primary text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSubscription;