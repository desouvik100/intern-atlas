CREATE TABLE IF NOT EXISTS employers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,

    name TEXT,
    company_name TEXT,
    company_website TEXT,
    company_description TEXT,
    industry TEXT,
    location TEXT,
    logo_url TEXT,
    phone TEXT,

    profile_completed INTEGER NOT NULL DEFAULT 0,

    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE internships
ADD COLUMN employer_id INTEGER;