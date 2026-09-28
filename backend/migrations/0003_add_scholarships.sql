-- Migration number: 0003 	 2026-09-27T00:00:00.000Z
CREATE TABLE IF NOT EXISTS scholarships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  organizer_name TEXT NOT NULL,
  organizer_type TEXT,
  organizer_logo TEXT,

  scholarship_type TEXT NOT NULL,
  category TEXT NOT NULL,
  field_of_study TEXT NOT NULL DEFAULT '[]',
  eligibility TEXT NOT NULL,

  amount TEXT NOT NULL,
  amount_number INTEGER,
  award_count INTEGER NOT NULL,

  application_deadline TEXT NOT NULL,
  announcement_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Open',

  application_mode TEXT NOT NULL,
  application_fee TEXT NOT NULL,
  is_free INTEGER NOT NULL,
  renewable_yearly INTEGER NOT NULL,

  benefits TEXT NOT NULL DEFAULT '[]',
  requirements TEXT NOT NULL DEFAULT '[]',
  selection_process TEXT NOT NULL DEFAULT '[]',

  application_url TEXT NOT NULL,
  website_url TEXT,

  tags TEXT NOT NULL DEFAULT '[]',
  applicants_count INTEGER NOT NULL DEFAULT 0,

  highlights TEXT NOT NULL DEFAULT '[]',
  testimonials TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_scholarships_slug
ON scholarships(slug);

CREATE INDEX IF NOT EXISTS idx_scholarships_status
ON scholarships(status);

CREATE INDEX IF NOT EXISTS idx_scholarships_type
ON scholarships(scholarship_type);

CREATE INDEX IF NOT EXISTS idx_scholarships_category
ON scholarships(category);
