-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create storage bucket for scholarship documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('scholarship-documents', 'scholarship-documents', false);

-- Create scholarship_applications table
CREATE TABLE public.scholarship_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course TEXT NOT NULL,
  year_of_study TEXT NOT NULL,
  tenth_marksheet_url TEXT NOT NULL,
  twelfth_marksheet_url TEXT NOT NULL,
  cuet_marksheet_url TEXT NOT NULL,
  income_certificate_url TEXT NOT NULL,
  parent_annual_income NUMERIC,
  why_deserve_scholarship TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.scholarship_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own applications" 
ON public.scholarship_applications 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can create an application" 
ON public.scholarship_applications 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_scholarship_applications_updated_at
BEFORE UPDATE ON public.scholarship_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Storage policies for scholarship documents
CREATE POLICY "Anyone can upload scholarship documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'scholarship-documents');

CREATE POLICY "Users can view their own documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'scholarship-documents');