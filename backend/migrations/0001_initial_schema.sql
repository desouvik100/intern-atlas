-- Migration number: 0001 	 2026-09-18T07:43:27.102Z
CREATE TABLE IF NOT EXISTS internships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  work_mode TEXT NOT NULL CHECK (work_mode IN ('Remote', 'On-site', 'Hybrid')),
  stipend TEXT NOT NULL,
  duration TEXT NOT NULL,
  posted TEXT NOT NULL DEFAULT 'Today',
  apply_by TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  skills TEXT NOT NULL DEFAULT '[]',
  responsibilities TEXT NOT NULL DEFAULT '[]',
  requirements TEXT NOT NULL DEFAULT '[]',
  perks TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internship_id INTEGER NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  resume_url TEXT NOT NULL,
  cover_letter TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'submitted',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (internship_id) REFERENCES internships(id) ON DELETE CASCADE,
  UNIQUE (internship_id, email)
);

CREATE INDEX IF NOT EXISTS idx_internships_slug
ON internships(slug);

CREATE INDEX IF NOT EXISTS idx_internships_status
ON internships(status);

CREATE INDEX IF NOT EXISTS idx_applications_internship
ON applications(internship_id);

INSERT OR IGNORE INTO internships (
  id, slug, title, company, location, work_mode, stipend, duration,
  posted, apply_by, category, description, skills, responsibilities,
  requirements, perks
) VALUES
(
  1,
  'frontend-developer-intern-nova',
  'Frontend Developer Intern',
  'Nova Technologies',
  'Pune, Maharashtra',
  'Hybrid',
  '₹15,000/month',
  '3 months',
  'Today',
  '30 Sep 2026',
  'Engineering',
  'Build fast and responsive web experiences using React and Next.js.',
  '["React","Next.js","TypeScript","Tailwind CSS"]',
  '["Build responsive user interfaces","Convert designs into reusable components","Work closely with developers and designers"]',
  '["Basic understanding of React","Knowledge of HTML, CSS and JavaScript","Ability to learn and work in a team"]',
  '["Certificate","Flexible hours","Recommendation letter"]'
),
(
  2,
  'backend-developer-intern-cloudzen',
  'Backend Developer Intern',
  'CloudZen Labs',
  'Bengaluru, Karnataka',
  'Remote',
  '₹20,000/month',
  '6 months',
  '1 day ago',
  '28 Sep 2026',
  'Engineering',
  'Develop secure APIs and scalable backend services for a growing platform.',
  '["Node.js","Express","PostgreSQL","REST API"]',
  '["Develop and test REST APIs","Design and maintain database models","Improve backend performance"]',
  '["Knowledge of JavaScript or TypeScript","Understanding of databases and APIs","Basic Git and GitHub experience"]',
  '["Certificate","Remote work","Mentorship"]'
),
(
  3,
  'ui-ux-design-intern-pixelcraft',
  'UI/UX Design Intern',
  'PixelCraft Studio',
  'Mumbai, Maharashtra',
  'On-site',
  '₹12,000/month',
  '3 months',
  '2 days ago',
  '25 Sep 2026',
  'Design',
  'Design clean interfaces and improve user journeys across web products.',
  '["Figma","Wireframing","Prototyping","User Research"]',
  '["Create wireframes and prototypes","Improve existing product screens","Participate in user research"]',
  '["Basic knowledge of Figma","Strong visual design sense","A portfolio of design work"]',
  '["Certificate","Flexible hours","Portfolio guidance"]'
),
(
  4,
  'java-developer-intern-codebridge',
  'Java Developer Intern',
  'CodeBridge Solutions',
  'Hyderabad, Telangana',
  'Hybrid',
  '₹18,000/month',
  '6 months',
  '3 days ago',
  '22 Sep 2026',
  'Engineering',
  'Build backend services using Java, Spring Boot and relational databases.',
  '["Java","Spring Boot","MySQL","Git"]',
  '["Develop Spring Boot APIs","Write clean and testable Java code","Work with relational databases"]',
  '["Strong Core Java fundamentals","Basic Spring Boot knowledge","Understanding of SQL"]',
  '["Certificate","Job opportunity","Mentorship"]'
);