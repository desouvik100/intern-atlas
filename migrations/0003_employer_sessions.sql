-- Migration number: 0003
-- Sessions for employer authentication + indexes for the employer lookups.

CREATE TABLE IF NOT EXISTS employer_sessions (
  id TEXT PRIMARY KEY,
  employer_id INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employer_id) REFERENCES employers(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_employer_sessions_employer
ON employer_sessions(employer_id);

CREATE INDEX IF NOT EXISTS idx_employer_sessions_expires
ON employer_sessions(expires_at);

CREATE INDEX IF NOT EXISTS idx_employers_email
ON employers(email);

CREATE INDEX IF NOT EXISTS idx_internships_employer
ON internships(employer_id);
