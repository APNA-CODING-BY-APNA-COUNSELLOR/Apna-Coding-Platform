-- Update users table to include missing columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS github_url TEXT,
ADD COLUMN IF NOT EXISTS linkedin_url TEXT,
ADD COLUMN IF NOT EXISTS skills TEXT[];

-- Update existing users to have empty arrays for skills if null
UPDATE users SET skills = '{}' WHERE skills IS NULL;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_courses_status ON courses(status);
CREATE INDEX IF NOT EXISTS idx_hackathons_status ON hackathons(status);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);

-- Add RLS policies if not exists
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackathons ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE communities ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY IF NOT EXISTS "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY IF NOT EXISTS "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Admins can do everything
CREATE POLICY IF NOT EXISTS "Admins can do everything on users" ON users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );

-- Public read access for courses, hackathons, jobs
CREATE POLICY IF NOT EXISTS "Public can view courses" ON courses
  FOR SELECT USING (status = 'active');

CREATE POLICY IF NOT EXISTS "Public can view hackathons" ON hackathons
  FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Public can view jobs" ON jobs
  FOR SELECT USING (status = 'active');

CREATE POLICY IF NOT EXISTS "Public can view communities" ON communities
  FOR SELECT USING (status = 'active');

-- Admins can manage all content
CREATE POLICY IF NOT EXISTS "Admins can manage courses" ON courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );

CREATE POLICY IF NOT EXISTS "Admins can manage hackathons" ON hackathons
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );

CREATE POLICY IF NOT EXISTS "Admins can manage jobs" ON jobs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );

CREATE POLICY IF NOT EXISTS "Admins can manage communities" ON communities
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'admin'
    )
  );
