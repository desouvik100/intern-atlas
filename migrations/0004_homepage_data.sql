-- Migration number: 0004
-- Homepage real data: company logos on internships, and a table for the
-- non-internship opportunities the homepage was rendering from hardcoded arrays.

ALTER TABLE internships ADD COLUMN logo_url TEXT;
ALTER TABLE internships ADD COLUMN company_website TEXT;

CREATE TABLE IF NOT EXISTS opportunities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  organization_website TEXT,
  logo_url TEXT,
  location TEXT NOT NULL DEFAULT '',
  compensation TEXT,
  apply_by TEXT,
  badges TEXT NOT NULL DEFAULT '[]',
  time_label TEXT NOT NULL DEFAULT '',
  href TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_opportunities_type
ON opportunities(type, status);

-- The five jobs that were hardcoded in src/data/mock-opportunities.ts, moved
-- into the database with real company domains so their logos resolve.
-- Replace or extend these rows as real listings come in.
INSERT OR IGNORE INTO opportunities (
  id, type, title, organization, organization_website, location,
  badges, time_label, sort_order
) VALUES
(1, 'job', 'Product Associate', 'Flipkart', 'https://www.flipkart.com', 'Bengaluru, India', '["Full-time","Fresher"]', '1 day ago', 1),
(2, 'job', 'Business Analyst', 'Deloitte', 'https://www.deloitte.com', 'Gurugram, India', '["Full-time","Fresher"]', '2 days ago', 2),
(3, 'job', 'Customer Success', 'Razorpay', 'https://razorpay.com', 'Bengaluru, India', '["Full-time","Fresher"]', '4 days ago', 3),
(4, 'job', 'Associate - Tech', 'Jio', 'https://www.jio.com', 'Mumbai, India', '["Full-time","Fresher"]', '5 days ago', 4),
(5, 'job', 'Operations Associate', 'OYO', 'https://www.oyorooms.com', 'Multiple locations', '["Full-time","Fresher"]', '6 days ago', 5);
