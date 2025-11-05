-- Create visit_requests table
CREATE TABLE public.visit_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time time NOT NULL,
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.visit_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit visit requests
CREATE POLICY "Anyone can submit visit requests" 
ON public.visit_requests 
FOR INSERT 
WITH CHECK (true);