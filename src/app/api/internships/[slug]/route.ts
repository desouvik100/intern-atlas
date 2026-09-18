import { NextResponse } from "next/server";
import {
  deleteInternship,
  findInternshipBySlug,
  updateInternship,
  type InternshipInput,
} from "@/lib/internship-db";

export const runtime = "edge";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

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

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    const { slug } = await params;
    const internship = await findInternshipBySlug(slug);

    if (!internship) {
      return NextResponse.json(
        { error: "Internship not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(internship);
  } catch {
    return NextResponse.json(
      { error: "Unable to load internship" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  try {
    const { slug } = await params;
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
      return NextResponse.json(
        { error: "Invalid work mode" },
        { status: 400 },
      );
    }

    const internship = await updateInternship(slug, updates);

    if (!internship) {
      return NextResponse.json(
        { error: "Internship not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(internship);
  } catch {
    return NextResponse.json(
      { error: "Unable to update internship" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    const { slug } = await params;
    const deleted = await deleteInternship(slug);

    if (!deleted) {
      return NextResponse.json(
        { error: "Internship not found" },
        { status: 404 },
      );
    }

    return new Response(null, { status: 204 });
  } catch {
    return NextResponse.json(
      { error: "Unable to delete internship" },
      { status: 500 },
    );
  }
}
