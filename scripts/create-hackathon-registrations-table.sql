-- Create hackathon_registrations table for tracking user registrations
CREATE TABLE IF NOT EXISTS hackathon_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  hackathon_id UUID NOT NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'registered' CHECK (status IN ('registered', 'cancelled', 'attended')),
  team_name VARCHAR(255),
  team_members JSONB,
  additional_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(hackathon_id, user_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_hackathon_registrations_hackathon_id ON hackathon_registrations(hackathon_id);
CREATE INDEX IF NOT EXISTS idx_hackathon_registrations_user_id ON hackathon_registrations(user_id);
CREATE INDEX IF NOT EXISTS idx_hackathon_registrations_status ON hackathon_registrations(status);

-- Create function to increment hackathon participants count
CREATE OR REPLACE FUNCTION increment_hackathon_participants(hackathon_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE hackathons 
  SET participants_count = participants_count + 1,
      updated_at = NOW()
  WHERE id = hackathon_id;
END;
$$ LANGUAGE plpgsql;

-- Create function to decrement hackathon participants count
CREATE OR REPLACE FUNCTION decrement_hackathon_participants(hackathon_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE hackathons 
  SET participants_count = GREATEST(participants_count - 1, 0),
      updated_at = NOW()
  WHERE id = hackathon_id;
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security
ALTER TABLE hackathon_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for hackathon_registrations
CREATE POLICY "Users can view their own registrations" ON hackathon_registrations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own registrations" ON hackathon_registrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own registrations" ON hackathon_registrations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all registrations" ON hackathon_registrations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_hackathon_registrations_updated_at
  BEFORE UPDATE ON hackathon_registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
