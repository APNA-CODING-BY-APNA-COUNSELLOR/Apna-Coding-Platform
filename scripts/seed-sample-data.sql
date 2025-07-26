-- Insert sample courses
INSERT INTO public.courses (title, description, image_url, price, duration, level, technologies, instructor, students_count, rating, status) VALUES
('Full Stack Web Development', 'Learn to build complete web applications from scratch using modern technologies like React, Node.js, and MongoDB.', '/placeholder.svg?height=200&width=300', 99.99, '12 weeks', 'Beginner', ARRAY['React', 'Node.js', 'MongoDB', 'JavaScript'], 'John Doe', 1250, 4.8, 'active'),
('Python for Data Science', 'Master Python programming for data analysis, visualization, and machine learning applications.', '/placeholder.svg?height=200&width=300', 79.99, '10 weeks', 'Intermediate', ARRAY['Python', 'Pandas', 'NumPy', 'Matplotlib'], 'Jane Smith', 890, 4.7, 'active'),
('Mobile App Development with React Native', 'Build cross-platform mobile applications using React Native and JavaScript.', '/placeholder.svg?height=200&width=300', 89.99, '8 weeks', 'Intermediate', ARRAY['React Native', 'JavaScript', 'Firebase'], 'Mike Johnson', 650, 4.6, 'active'),
('DevOps and Cloud Computing', 'Learn modern DevOps practices and cloud deployment strategies with AWS and Docker.', '/placeholder.svg?height=200&width=300', 119.99, '14 weeks', 'Advanced', ARRAY['AWS', 'Docker', 'Kubernetes', 'CI/CD'], 'Sarah Wilson', 420, 4.9, 'active'),
('Machine Learning Fundamentals', 'Introduction to machine learning algorithms and their practical applications.', '/placeholder.svg?height=200&width=300', 109.99, '16 weeks', 'Advanced', ARRAY['Python', 'TensorFlow', 'Scikit-learn'], 'Dr. Alex Chen', 380, 4.8, 'active');

-- Insert sample hackathons
INSERT INTO public.hackathons (title, description, image_url, start_date, end_date, registration_deadline, location, prize_pool, participants_count, status, registration_open, technologies, registration_link) VALUES
('AI Innovation Challenge 2024', 'Build innovative AI solutions to solve real-world problems. Open to all skill levels with mentorship provided.', '/placeholder.svg?height=200&width=400', '2024-03-15 09:00:00+00', '2024-03-17 18:00:00+00', '2024-03-10 23:59:59+00', 'Online', '$50,000', 1200, 'upcoming', true, ARRAY['Python', 'TensorFlow', 'OpenAI', 'Machine Learning'], 'https://apnacoding.tech/hackathons/ai-challenge'),
('Web3 DeFi Hackathon', 'Create decentralized finance applications using blockchain technology and smart contracts.', '/placeholder.svg?height=200&width=400', '2024-04-20 10:00:00+00', '2024-04-22 20:00:00+00', '2024-04-15 23:59:59+00', 'San Francisco, CA', '$75,000', 800, 'upcoming', true, ARRAY['Solidity', 'Web3.js', 'Ethereum', 'React'], 'https://apnacoding.tech/hackathons/web3-defi'),
('Mobile Gaming Jam', '48-hour mobile game development competition. Create engaging games for iOS and Android platforms.', '/placeholder.svg?height=200&width=400', '2024-05-10 18:00:00+00', '2024-05-12 18:00:00+00', '2024-05-05 23:59:59+00', 'Austin, TX', '$25,000', 600, 'upcoming', true, ARRAY['Unity', 'C#', 'Flutter', 'React Native'], 'https://apnacoding.tech/hackathons/mobile-gaming'),
('Climate Tech Solutions', 'Develop technology solutions to address climate change and environmental challenges.', '/placeholder.svg?height=200&width=400', '2024-06-01 08:00:00+00', '2024-06-03 17:00:00+00', '2024-05-25 23:59:59+00', 'Seattle, WA', '$100,000', 1500, 'upcoming', true, ARRAY['IoT', 'Python', 'React', 'Data Analytics'], 'https://apnacoding.tech/hackathons/climate-tech');

-- Insert sample jobs
INSERT INTO public.jobs (title, company, description, location, type, salary, experience, technologies, company_logo, status, posted_date, application_deadline, apply_link) VALUES
('Senior Full Stack Developer', 'TechCorp Inc.', 'We are looking for an experienced full stack developer to join our growing team. You will work on cutting-edge web applications using modern technologies.', 'San Francisco, CA', 'Full-time', '$120,000 - $160,000', '5+ years', ARRAY['React', 'Node.js', 'PostgreSQL', 'AWS'], '/placeholder.svg?height=100&width=100', 'active', '2024-01-15', '2024-02-15', 'https://techcorp.com/careers/senior-fullstack'),
('Data Scientist Intern', 'DataFlow Analytics', 'Join our data science team as an intern and work on real-world machine learning projects. Perfect opportunity for students and recent graduates.', 'Remote', 'Internship', '$25/hour', '0-1 years', ARRAY['Python', 'Pandas', 'Machine Learning', 'SQL'], '/placeholder.svg?height=100&width=100', 'active', '2024-01-20', '2024-03-01', 'https://dataflow.com/internships/data-scientist'),
('Frontend Developer', 'StartupXYZ', 'Looking for a passionate frontend developer to create amazing user experiences. Work with a dynamic team in a fast-paced startup environment.', 'New York, NY', 'Full-time', '$90,000 - $120,000', '2-4 years', ARRAY['React', 'TypeScript', 'CSS', 'JavaScript'], '/placeholder.svg?height=100&width=100', 'active', '2024-01-25', '2024-02-25', 'https://startupxyz.com/jobs/frontend-dev'),
('DevOps Engineer', 'CloudTech Solutions', 'Join our infrastructure team to build and maintain scalable cloud solutions. Experience with containerization and CI/CD required.', 'Austin, TX', 'Full-time', '$110,000 - $140,000', '3-5 years', ARRAY['Docker', 'Kubernetes', 'AWS', 'Terraform'], '/placeholder.svg?height=100&width=100', 'active', '2024-02-01', '2024-03-01', 'https://cloudtech.com/careers/devops'),
('Mobile App Developer', 'AppMakers Studio', 'Develop innovative mobile applications for iOS and Android. Work on consumer-facing apps with millions of users.', 'Los Angeles, CA', 'Contract', '$80 - $120/hour', '3+ years', ARRAY['React Native', 'Swift', 'Kotlin', 'Firebase'], '/placeholder.svg?height=100&width=100', 'active', '2024-02-05', '2024-03-15', 'https://appmakers.com/contract/mobile-dev');

-- Insert sample communities
INSERT INTO public.communities (name, description, member_count, type, invite_link, status) VALUES
('Apna Coding Discord', 'Main community hub for discussions, help, and networking among developers.', 15000, 'discord', 'https://discord.gg/apnacoding', 'active'),
('Python Developers Group', 'Dedicated space for Python enthusiasts to share knowledge and collaborate.', 8500, 'telegram', 'https://t.me/apnacodingpython', 'active'),
('Web Development Chat', 'Real-time discussions about web development trends, tools, and best practices.', 12000, 'discord', 'https://discord.gg/apnacodingweb', 'active'),
('Job Opportunities', 'Get notified about the latest job postings and career opportunities.', 20000, 'telegram', 'https://t.me/apnacodingjobs', 'active'),
('Hackathon Updates', 'Stay updated with upcoming hackathons and team formation opportunities.', 6500, 'whatsapp', 'https://chat.whatsapp.com/apnacodinghacks', 'active');

-- Create admin user (this will be updated when the actual admin signs up)
INSERT INTO public.users (id, email, full_name, role, bio, skills) VALUES
('00000000-0000-0000-0000-000000000000', 'sonishriyash@gmail.com', 'Shriyash Soni', 'admin', 'Founder and CEO of Apna Coding. Passionate about building the future of coding education.', ARRAY['JavaScript', 'Python', 'React', 'Node.js', 'Leadership'])
ON CONFLICT (email) DO UPDATE SET
role = 'admin',
full_name = EXCLUDED.full_name,
bio = EXCLUDED.bio,
skills = EXCLUDED.skills;
