import { getDatabase } from "@/lib/db";

export type Employer = {
  id: number;
  email: string;
  name: string;
  companyName: string;
  companyWebsite: string;
  companyDescription: string;
  industry: string;
  location: string;
  logoUrl: string;
  phone: string;
  profileCompleted: boolean;
};

type EmployerRow = {
  id: number;
  email: string;
  name: string | null;
  company_name: string | null;
  company_website: string | null;
  company_description: string | null;
  industry: string | null;
  location: string | null;
  logo_url: string | null;
  phone: string | null;
  profile_completed: number;
};

export type EmployerProfileInput = {
  name?: string;
  companyName?: string;
  companyWebsite?: string;
  companyDescription?: string;
  industry?: string;
  location?: string;
  logoUrl?: string;
  phone?: string;
};

const SESSION_DAYS = 30;

const employerColumns = `
  id, email, name, company_name, company_website, company_description,
  industry, location, logo_url, phone, profile_completed
`;

function mapEmployer(row: EmployerRow): Employer {
  return {
    id: row.id,
    email: row.email,
    name: row.name ?? "",
    companyName: row.company_name ?? "",
    companyWebsite: row.company_website ?? "",
    companyDescription: row.company_description ?? "",
    industry: row.industry ?? "",
    location: row.location ?? "",
    logoUrl: row.logo_url ?? "",
    phone: row.phone ?? "",
    profileCompleted: row.profile_completed === 1,
  };
}

export async function findEmployerByEmail(
  email: string,
): Promise<Employer | null> {
  const database = await getDatabase();
  const row = await database
    .prepare(`SELECT ${employerColumns} FROM employers WHERE email = ? LIMIT 1`)
    .bind(email)
    .first<EmployerRow>();

  return row ? mapEmployer(row) : null;
}

export async function findEmployerCredentials(
  email: string,
): Promise<{ id: number; passwordHash: string } | null> {
  const database = await getDatabase();
  const row = await database
    .prepare(`SELECT id, password_hash FROM employers WHERE email = ? LIMIT 1`)
    .bind(email)
    .first<{ id: number; password_hash: string }>();

  return row ? { id: row.id, passwordHash: row.password_hash } : null;
}

export async function findEmployerById(id: number): Promise<Employer | null> {
  const database = await getDatabase();
  const row = await database
    .prepare(`SELECT ${employerColumns} FROM employers WHERE id = ? LIMIT 1`)
    .bind(id)
    .first<EmployerRow>();

  return row ? mapEmployer(row) : null;
}

export async function createEmployer(input: {
  email: string;
  passwordHash: string;
  name: string;
  companyName: string;
  phone: string;
}): Promise<Employer> {
  const database = await getDatabase();
  const result = await database
    .prepare(
      `INSERT INTO employers (email, password_hash, name, company_name, phone)
       VALUES (?, ?, ?, ?, ?)`,
    )
    .bind(
      input.email,
      input.passwordHash,
      input.name,
      input.companyName,
      input.phone,
    )
    .run();

  const id = result.meta.last_row_id;

  if (typeof id !== "number") {
    throw new Error("Failed to create employer");
  }

  const employer = await findEmployerById(id);

  if (!employer) {
    throw new Error("Failed to load the created employer");
  }

  return employer;
}

export async function updateEmployerProfile(
  id: number,
  updates: EmployerProfileInput,
): Promise<Employer | null> {
  const database = await getDatabase();
  await database
    .prepare(
      `UPDATE employers SET
        name = COALESCE(?, name),
        company_name = COALESCE(?, company_name),
        company_website = COALESCE(?, company_website),
        company_description = COALESCE(?, company_description),
        industry = COALESCE(?, industry),
        location = COALESCE(?, location),
        logo_url = COALESCE(?, logo_url),
        phone = COALESCE(?, phone),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
    )
    .bind(
      updates.name ?? null,
      updates.companyName ?? null,
      updates.companyWebsite ?? null,
      updates.companyDescription ?? null,
      updates.industry ?? null,
      updates.location ?? null,
      updates.logoUrl ?? null,
      updates.phone ?? null,
      id,
    )
    .run();

  const employer = await findEmployerById(id);

  if (!employer) {
    return null;
  }

  // A profile counts as complete once students can actually identify the company.
  const complete =
    Boolean(employer.companyName) &&
    Boolean(employer.companyDescription) &&
    Boolean(employer.location) &&
    Boolean(employer.industry);

  if (complete !== employer.profileCompleted) {
    await database
      .prepare(
        `UPDATE employers
         SET profile_completed = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
      )
      .bind(complete ? 1 : 0, id)
      .run();

    return { ...employer, profileCompleted: complete };
  }

  return employer;
}

export async function createSession(employerId: number): Promise<{
  id: string;
  expiresAt: Date;
}> {
  const database = await getDatabase();
  const id = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  await database
    .prepare(
      `INSERT INTO employer_sessions (id, employer_id, expires_at)
       VALUES (?, ?, ?)`,
    )
    .bind(id, employerId, expiresAt.toISOString())
    .run();

  return { id, expiresAt };
}

export async function findEmployerBySession(
  sessionId: string,
): Promise<Employer | null> {
  const database = await getDatabase();
  const row = await database
    .prepare(
      `SELECT ${employerColumns
        .split(",")
        .map((column) => `e.${column.trim()}`)
        .join(", ")}
       FROM employer_sessions s
       JOIN employers e ON e.id = s.employer_id
       WHERE s.id = ? AND s.expires_at > ?
       LIMIT 1`,
    )
    .bind(sessionId, new Date().toISOString())
    .first<EmployerRow>();

  return row ? mapEmployer(row) : null;
}

export async function deleteSession(sessionId: string): Promise<void> {
  const database = await getDatabase();
  await database
    .prepare(`DELETE FROM employer_sessions WHERE id = ?`)
    .bind(sessionId)
    .run();
}
