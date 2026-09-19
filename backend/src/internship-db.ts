import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import type { Internship } from "./types";

export type InternshipInput = Omit<Internship, "id">;

function getPrisma() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  return new PrismaClient({
    adapter,
  });
}

function mapInternship(row: {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  workMode: string;
  stipend: string;
  duration: string;
  posted: string;
  applyBy: string;
  category: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}): Internship {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    company: row.company,
    location: row.location,
    workMode: row.workMode as Internship["workMode"],
    stipend: row.stipend,
    duration: row.duration,
    posted: row.posted,
    applyBy: row.applyBy,
    category: row.category,
    description: row.description,
    skills: row.skills,
    responsibilities: row.responsibilities,
    requirements: row.requirements,
    perks: row.perks,
  };
}

export async function listInternships(): Promise<Internship[]> {
  const prisma = getPrisma();

  const rows = await prisma.internship.findMany({
    where: {
      status: "active",
    },
    orderBy: {
      id: "desc",
    },
  });

  return rows.map(mapInternship);
}

export async function findInternshipBySlug(
  slug: string,
): Promise<Internship | null> {
  const prisma = getPrisma();

  const row = await prisma.internship.findFirst({
    where: {
      slug,
      status: {
        not: "deleted",
      },
    },
  });

  return row ? mapInternship(row) : null;
}

export async function createInternship(
  internship: InternshipInput,
): Promise<Internship> {
  const prisma = getPrisma();

  const created = await prisma.internship.create({
    data: {
      slug: internship.slug,
      title: internship.title,
      company: internship.company,
      location: internship.location,
      workMode: internship.workMode,
      stipend: internship.stipend,
      duration: internship.duration,
      posted: internship.posted,
      applyBy: internship.applyBy,
      category: internship.category,
      description: internship.description,
      skills: internship.skills,
      responsibilities: internship.responsibilities,
      requirements: internship.requirements,
      perks: internship.perks,
      status: "active",
    },
  });

  return mapInternship(created);
}

export async function updateInternship(
  slug: string,
  updates: Partial<InternshipInput>,
): Promise<Internship | null> {
  const prisma = getPrisma();

  const existing = await prisma.internship.findFirst({
    where: {
      slug,
      status: {
        not: "deleted",
      },
    },
  });

  if (!existing) {
    return null;
  }

  const updated = await prisma.internship.update({
    where: {
      id: existing.id,
    },
    data: {
      title: updates.title,
      company: updates.company,
      location: updates.location,
      workMode: updates.workMode,
      stipend: updates.stipend,
      duration: updates.duration,
      posted: updates.posted,
      applyBy: updates.applyBy,
      category: updates.category,
      description: updates.description,
      skills: updates.skills,
      responsibilities: updates.responsibilities,
      requirements: updates.requirements,
      perks: updates.perks,
    },
  });

  return mapInternship(updated);
}

export async function deleteInternship(slug: string): Promise<boolean> {
  const prisma = getPrisma();

  const existing = await prisma.internship.findFirst({
    where: {
      slug,
      status: {
        not: "deleted",
      },
    },
  });

  if (!existing) {
    return false;
  }

  await prisma.internship.update({
    where: {
      id: existing.id,
    },
    data: {
      status: "deleted",
    },
  });

  return true;
}

export async function createApplication(input: {
  internshipId: number;
  fullName: string;
  email: string;
  resumeUrl: string;
  coverLetter: string;
}): Promise<number> {
  const prisma = getPrisma();

  const application = await prisma.application.create({
    data: {
      internshipId: input.internshipId,
      fullName: input.fullName,
      email: input.email,
      resumeUrl: input.resumeUrl,
      coverLetter: input.coverLetter,
    },
  });

  return application.id;
}