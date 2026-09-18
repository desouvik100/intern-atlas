import { NextResponse } from "next/server";
import { createApplication } from "@/lib/internship-db";

export const runtime = "edge";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
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
      return NextResponse.json(
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

    return NextResponse.json(
      { id, message: "Application submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message.toLowerCase() : "";

    if (message.includes("unique")) {
      return NextResponse.json(
        { error: "You have already applied for this internship" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Unable to submit application" },
      { status: 500 },
    );
  }
}
