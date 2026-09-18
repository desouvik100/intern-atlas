import {
  createApplication,
  createInternship,
  deleteInternship,
  findInternshipBySlug,
  listInternships,
  updateInternship,
  type InternshipInput,
} from "./internship-db";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function list(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getInternshipsResponse(): Promise<Response> {
  try {
    return Response.json(await listInternships());
  } catch {
    return Response.json({ error: "Unable to load internships" }, { status: 500 });
  }
}

export async function postInternshipResponse(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const title = text(body.title);
    const company = text(body.company);
    const location = text(body.location);
    const workMode = text(body.workMode);
    const stipend = text(body.stipend);
    const duration = text(body.duration);
    const applyBy = text(body.applyBy);
    const category = text(body.category);
    const description = text(body.description);

    if (
      !title ||
      !company ||
      !location ||
      !["Remote", "On-site", "Hybrid"].includes(workMode) ||
      !stipend ||
      !duration ||
      !applyBy ||
      !category ||
      !description
    ) {
      return Response.json(
        { error: "Required internship fields are missing or invalid" },
        { status: 400 },
      );
    }

    const suffix = crypto.randomUUID().slice(0, 6);
    const internship: InternshipInput = {
      slug: text(body.slug) || `${slugify(title)}-${slugify(company)}-${suffix}`,
      title,
      company,
      location,
      workMode: workMode as InternshipInput["workMode"],
      stipend,
      duration,
      posted: text(body.posted) || "Today",
      applyBy,
      category,
      description,
      skills: list(body.skills),
      responsibilities: list(body.responsibilities),
      requirements: list(body.requirements),
      perks: list(body.perks),
    };

    return Response.json(await createInternship(internship), { status: 201 });
  } catch {
    return Response.json({ error: "Unable to create internship" }, { status: 500 });
  }
}

export async function getInternshipResponse(slug: string): Promise<Response> {
  try {
    const internship = await findInternshipBySlug(slug);
    if (!internship) {
      return Response.json({ error: "Internship not found" }, { status: 404 });
    }
    return Response.json(internship);
  } catch {
    return Response.json({ error: "Unable to load internship" }, { status: 500 });
  }
}

const editableFields: Array<keyof InternshipInput> = [
  "title",
  "company",
  "location",
  "workMode",
  "stipend",
  "duration",
  "posted",
  "applyBy",
  "category",
  "description",
  "skills",
  "responsibilities",
  "requirements",
  "perks",
];

export async function patchInternshipResponse(
  request: Request,
  slug: string,
): Promise<Response> {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const updates: Partial<InternshipInput> = {};

    for (const field of editableFields) {
      if (body[field] !== undefined) {
        Object.assign(updates, { [field]: body[field] });
      }
    }

    if (
      updates.workMode &&
      !["Remote", "On-site", "Hybrid"].includes(updates.workMode)
    ) {
      return Response.json({ error: "Invalid work mode" }, { status: 400 });
    }

    const internship = await updateInternship(slug, updates);
    if (!internship) {
      return Response.json({ error: "Internship not found" }, { status: 404 });
    }

    return Response.json(internship);
  } catch {
    return Response.json({ error: "Unable to update internship" }, { status: 500 });
  }
}

export async function deleteInternshipResponse(slug: string): Promise<Response> {
  try {
    const deleted = await deleteInternship(slug);
    if (!deleted) {
      return Response.json({ error: "Internship not found" }, { status: 404 });
    }
    return new Response(null, { status: 204 });
  } catch {
    return Response.json({ error: "Unable to delete internship" }, { status: 500 });
  }
}

export async function postApplicationResponse(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const internshipId = Number(body.internshipId);
    const fullName = text(body.fullName);
    const email = text(body.email).toLowerCase();
    const resumeUrl = text(body.resumeUrl);
    const coverLetter = text(body.coverLetter);

    if (
      !Number.isInteger(internshipId) ||
      internshipId <= 0 ||
      !fullName ||
      !email ||
      !resumeUrl ||
      !coverLetter
    ) {
      return Response.json(
        { error: "Required application fields are missing or invalid" },
        { status: 400 },
      );
    }

    const id = await createApplication({
      internshipId,
      fullName,
      email,
      resumeUrl,
      coverLetter,
    });

    return Response.json(
      { id, message: "Application submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message.toLowerCase() : "";
    if (message.includes("unique")) {
      return Response.json(
        { error: "You have already applied for this internship" },
        { status: 409 },
      );
    }
    return Response.json({ error: "Unable to submit application" }, { status: 500 });
  }
}
