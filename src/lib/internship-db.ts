import type { Internship } from "@/data/internships";

type InternshipRow = {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  work_mode: Internship["workMode"];
  stipend: string;
  duration: string;
  posted: string;
  apply_by: string;
  category: string;
  description: string;
  skills: string;
  responsibilities: string;
  requirements: string;
  perks: string;
  logo_url: string | null;
  company_website: string | null;
};

export type InternshipInput = Omit<Internship, "id">;

async function getDatabase() {
  const { env } = await import("cloudflare:workers");
  return env.intern_atlas_db;
}

function parseList(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

function mapRow(row: InternshipRow): Internship {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    company: row.company,
    location: row.location,
    workMode: row.work_mode,
    stipend: row.stipend,
    duration: row.duration,
    posted: row.posted,
    applyBy: row.apply_by,
    category: row.category,
    description: row.description,
    skills: parseList(row.skills),
    responsibilities: parseList(row.responsibilities),
    requirements: parseList(row.requirements),
    perks: parseList(row.perks),
    logoUrl: row.logo_url ?? undefined,
    companyWebsite: row.company_website ?? undefined,
  };
}

const selectColumns = `
  id, slug, title, company, location, work_mode, stipend, duration,
  posted, apply_by, category, description, skills, responsibilities,
  requirements, perks, logo_url, company_website
`;

export async function listInternships(): Promise<Internship[]> {
  const database = await getDatabase();
  const result = await database
    .prepare(
      `SELECT ${selectColumns}
       FROM internships
       WHERE status = 'active'
       ORDER BY id DESC`,
    )
    .all<InternshipRow>();

  return result.results.map(mapRow);
}

export async function listInternshipsByEmployer(
  employerId: number,
): Promise<Internship[]> {
  const database = await getDatabase();
  const result = await database
    .prepare(
      `SELECT ${selectColumns}
       FROM internships
       WHERE employer_id = ? AND status != 'deleted'
       ORDER BY id DESC`,
    )
    .bind(employerId)
    .all<InternshipRow>();

  return result.results.map(mapRow);
}

export async function findInternshipBySlug(
  slug: string,
): Promise<Internship | null> {
  const database = await getDatabase();
  const row = await database
    .prepare(
      `SELECT ${selectColumns}
       FROM internships
       WHERE slug = ? AND status != 'deleted'
       LIMIT 1`,
    )
    .bind(slug)
    .first<InternshipRow>();

  return row ? mapRow(row) : null;
}

export async function createInternship(
  internship: InternshipInput,
  employerId: number,
): Promise<Internship> {
  const database = await getDatabase();
  await database
    .prepare(
      `INSERT INTO internships (
        slug, title, company, location, work_mode, stipend, duration,
        posted, apply_by, category, description, skills, responsibilities,
        requirements, perks, employer_id, logo_url, company_website
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      internship.slug,
      internship.title,
      internship.company,
      internship.location,
      internship.workMode,
      internship.stipend,
      internship.duration,
      internship.posted,
      internship.applyBy,
      internship.category,
      internship.description,
      JSON.stringify(internship.skills),
      JSON.stringify(internship.responsibilities),
      JSON.stringify(internship.requirements),
      JSON.stringify(internship.perks),
      employerId,
      internship.logoUrl ?? null,
      internship.companyWebsite ?? null,
    )
    .run();

  const created = await findInternshipBySlug(internship.slug);

  if (!created) {
    throw new Error("Failed to create internship");
  }

  return created;
}

export async function updateInternship(
  slug: string,
  updates: Partial<InternshipInput>,
): Promise<Internship | null> {
  const database = await getDatabase();
  await database
    .prepare(
      `UPDATE internships SET
        title = COALESCE(?, title),
        company = COALESCE(?, company),
        location = COALESCE(?, location),
        work_mode = COALESCE(?, work_mode),
        stipend = COALESCE(?, stipend),
        duration = COALESCE(?, duration),
        posted = COALESCE(?, posted),
        apply_by = COALESCE(?, apply_by),
        category = COALESCE(?, category),
        description = COALESCE(?, description),
        skills = COALESCE(?, skills),
        responsibilities = COALESCE(?, responsibilities),
        requirements = COALESCE(?, requirements),
        perks = COALESCE(?, perks),
        updated_at = CURRENT_TIMESTAMP
       WHERE slug = ? AND status != 'deleted'`,
    )
    .bind(
      updates.title ?? null,
      updates.company ?? null,
      updates.location ?? null,
      updates.workMode ?? null,
      updates.stipend ?? null,
      updates.duration ?? null,
      updates.posted ?? null,
      updates.applyBy ?? null,
      updates.category ?? null,
      updates.description ?? null,
      updates.skills ? JSON.stringify(updates.skills) : null,
      updates.responsibilities
        ? JSON.stringify(updates.responsibilities)
        : null,
      updates.requirements ? JSON.stringify(updates.requirements) : null,
      updates.perks ? JSON.stringify(updates.perks) : null,
      slug,
    )
    .run();

  return findInternshipBySlug(slug);
}

export async function deleteInternship(slug: string): Promise<boolean> {
  const database = await getDatabase();
  const result = await database
    .prepare(
      `UPDATE internships
       SET status = 'deleted', updated_at = CURRENT_TIMESTAMP
       WHERE slug = ? AND status != 'deleted'`,
    )
    .bind(slug)
    .run();

  return (result.meta.changes ?? 0) > 0;
}

export async function createApplication(input: {
  internshipId: number;
  fullName: string;
  email: string;
  resumeUrl: string;
  coverLetter: string;
}): Promise<number> {
  const database = await getDatabase();
  const result = await database
    .prepare(
      `INSERT INTO applications (
        internship_id, full_name, email, resume_url, cover_letter
      ) VALUES (?, ?, ?, ?, ?)`,
    )
    .bind(
      input.internshipId,
      input.fullName,
      input.email,
      input.resumeUrl,
      input.coverLetter,
    )
    .run();

  const id = result.meta.last_row_id;

  if (typeof id !== "number") {
    throw new Error("Failed to create application");
  }

  return id;
}
