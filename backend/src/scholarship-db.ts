import { PrismaClient, Prisma } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import type { Scholarship, ScholarshipTestimonial } from "./types";

export type ScholarshipInput = Omit<Scholarship, "id" | "createdAt">;

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

function mapScholarship(row: {
  id: number;
  slug: string;
  title: string;
  description: string;
  organizerName: string;
  organizerType: string | null;
  organizerLogo: string | null;
  scholarshipType: string;
  category: string;
  fieldOfStudy: string[];
  eligibility: string;
  amount: string;
  amountNumber: number | null;
  awardCount: number;
  applicationDeadline: string;
  announcementDate: string;
  status: string;
  applicationMode: string;
  applicationFee: string;
  isFree: boolean;
  renewableYearly: boolean;
  benefits: string[];
  requirements: string[];
  selectionProcess: string[];
  applicationUrl: string;
  websiteUrl: string | null;
  tags: string[];
  applicantsCount: number;
  createdAt: Date;
  highlights: string[];
  testimonials: unknown;
}): Scholarship {
  let parsedTestimonials: ScholarshipTestimonial[] | undefined;

  if (row.testimonials && typeof row.testimonials === "object") {
    try {
      if (Array.isArray(row.testimonials)) {
        parsedTestimonials = row.testimonials as ScholarshipTestimonial[];
      }
    } catch {
      parsedTestimonials = undefined;
    }
  }

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    organizerName: row.organizerName,
    organizerType: row.organizerType || undefined,
    organizerLogo: row.organizerLogo || undefined,
    scholarshipType: row.scholarshipType,
    category: row.category,
    fieldOfStudy: row.fieldOfStudy,
    eligibility: row.eligibility,
    amount: row.amount,
    amountNumber: row.amountNumber || undefined,
    awardCount: row.awardCount,
    applicationDeadline: row.applicationDeadline,
    announcementDate: row.announcementDate,
    status: row.status,
    applicationMode: row.applicationMode,
    applicationFee: row.applicationFee,
    isFree: row.isFree,
    renewableYearly: row.renewableYearly,
    benefits: row.benefits,
    requirements: row.requirements,
    selectionProcess: row.selectionProcess,
    applicationUrl: row.applicationUrl,
    websiteUrl: row.websiteUrl || undefined,
    tags: row.tags,
    applicantsCount: row.applicantsCount,
    createdAt: row.createdAt.toISOString(),
    highlights: row.highlights.length > 0 ? row.highlights : undefined,
    testimonials: parsedTestimonials,
  };
}

export async function listScholarships(): Promise<Scholarship[]> {
  const prisma = getPrisma();

  const rows = await prisma.scholarship.findMany({
    where: {
      status: {
        not: "deleted",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return rows.map(mapScholarship);
}

export async function findScholarshipBySlug(
  slug: string
): Promise<Scholarship | null> {
  const prisma = getPrisma();

  const row = await prisma.scholarship.findFirst({
    where: {
      slug,
      status: {
        not: "deleted",
      },
    },
  });

  return row ? mapScholarship(row) : null;
}

export async function createScholarship(
  scholarship: ScholarshipInput
): Promise<Scholarship> {
  const prisma = getPrisma();

  const created = await prisma.scholarship.create({
    data: {
      slug: scholarship.slug,
      title: scholarship.title,
      description: scholarship.description,
      organizerName: scholarship.organizerName,
      organizerType: scholarship.organizerType || null,
      organizerLogo: scholarship.organizerLogo || null,
      scholarshipType: scholarship.scholarshipType,
      category: scholarship.category,
      fieldOfStudy: scholarship.fieldOfStudy,
      eligibility: scholarship.eligibility,
      amount: scholarship.amount,
      amountNumber: scholarship.amountNumber || null,
      awardCount: scholarship.awardCount,
      applicationDeadline: scholarship.applicationDeadline,
      announcementDate: scholarship.announcementDate,
      status: scholarship.status,
      applicationMode: scholarship.applicationMode,
      applicationFee: scholarship.applicationFee,
      isFree: scholarship.isFree,
      renewableYearly: scholarship.renewableYearly,
      benefits: scholarship.benefits,
      requirements: scholarship.requirements,
      selectionProcess: scholarship.selectionProcess,
      applicationUrl: scholarship.applicationUrl,
      websiteUrl: scholarship.websiteUrl || null,
      tags: scholarship.tags,
      applicantsCount: scholarship.applicantsCount,
      highlights: scholarship.highlights || [],
      testimonials: scholarship.testimonials
        ? (scholarship.testimonials as unknown as Prisma.InputJsonValue)
        : Prisma.DbNull,
    },
  });

  return mapScholarship(created);
}

export async function updateScholarship(
  slug: string,
  updates: Partial<ScholarshipInput>
): Promise<Scholarship | null> {
  const prisma = getPrisma();

  const existing = await prisma.scholarship.findFirst({
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

  const updated = await prisma.scholarship.update({
    where: {
      id: existing.id,
    },
    data: {
      title: updates.title,
      description: updates.description,
      organizerName: updates.organizerName,
      organizerType: updates.organizerType !== undefined ? updates.organizerType || null : undefined,
      organizerLogo: updates.organizerLogo !== undefined ? updates.organizerLogo || null : undefined,
      scholarshipType: updates.scholarshipType,
      category: updates.category,
      fieldOfStudy: updates.fieldOfStudy,
      eligibility: updates.eligibility,
      amount: updates.amount,
      amountNumber: updates.amountNumber !== undefined ? updates.amountNumber || null : undefined,
      awardCount: updates.awardCount,
      applicationDeadline: updates.applicationDeadline,
      announcementDate: updates.announcementDate,
      status: updates.status,
      applicationMode: updates.applicationMode,
      applicationFee: updates.applicationFee,
      isFree: updates.isFree,
      renewableYearly: updates.renewableYearly,
      benefits: updates.benefits,
      requirements: updates.requirements,
      selectionProcess: updates.selectionProcess,
      applicationUrl: updates.applicationUrl,
      websiteUrl: updates.websiteUrl !== undefined ? updates.websiteUrl || null : undefined,
      tags: updates.tags,
      applicantsCount: updates.applicantsCount,
      highlights: updates.highlights,
      testimonials:
        updates.testimonials !== undefined
          ? updates.testimonials
            ? (updates.testimonials as unknown as Prisma.InputJsonValue)
            : Prisma.DbNull
          : undefined,
    },
  });

  return mapScholarship(updated);
}

export async function deleteScholarship(slug: string): Promise<boolean> {
  const prisma = getPrisma();

  const existing = await prisma.scholarship.findFirst({
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

  await prisma.scholarship.update({
    where: {
      id: existing.id,
    },
    data: {
      status: "deleted",
    },
  });

  return true;
}
