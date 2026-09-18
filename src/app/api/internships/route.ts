import { NextResponse } from "next/server";
import {
  createInternship,
  listInternships,
  type InternshipInput,
} from "@/lib/internship-db";
import { getCurrentEmployer } from "@/lib/employer-session";

export const runtime = "edge";

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

export async function GET() {
  try {
    return NextResponse.json(await listInternships());
  } catch {
    return NextResponse.json(
      { error: "Unable to load internships" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const employer = await getCurrentEmployer();

  if (!employer) {
    return NextResponse.json(
      { error: "Sign in to your employer account to post an internship" },
      { status: 401 },
    );
  }

  if (!employer.profileCompleted) {
    return NextResponse.json(
      { error: "Complete your company profile before posting an internship" },
      { status: 403 },
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const title = text(body.title);
    // The company name always comes from the verified account, never the form.
    const company = employer.companyName;
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
      return NextResponse.json(
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
      // Branding comes from the employer profile, so listing cards always show
      // the real company logo.
      logoUrl: employer.logoUrl || undefined,
      companyWebsite: employer.companyWebsite || undefined,
    };

    return NextResponse.json(await createInternship(internship, employer.id), {
      status: 201,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to create internship" },
      { status: 500 },
    );
  }
}
