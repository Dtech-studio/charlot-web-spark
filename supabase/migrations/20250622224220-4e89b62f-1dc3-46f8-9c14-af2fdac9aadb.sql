
-- Create the messages table for contact form submissions
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert messages (public contact form)
CREATE POLICY "Anyone can submit contact messages" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public reading of messages (only backend can read)
CREATE POLICY "No public read access to messages" 
  ON public.messages 
  FOR SELECT 
  USING (false);
