import { NextResponse } from "next/server";
import { updateEmployerProfile } from "@/lib/employer-db";
import { getCurrentEmployer } from "@/lib/employer-session";

export const runtime = "edge";

function optional(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

export async function GET() {
  const employer = await getCurrentEmployer();

  if (!employer) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  return NextResponse.json({ employer });
}

export async function PATCH(request: Request) {
  const employer = await getCurrentEmployer();

  if (!employer) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const updated = await updateEmployerProfile(employer.id, {
      name: optional(body.name),
      companyName: optional(body.companyName),
      companyWebsite: optional(body.companyWebsite),
      companyDescription: optional(body.companyDescription),
      industry: optional(body.industry),
      location: optional(body.location),
      logoUrl: optional(body.logoUrl),
      phone: optional(body.phone),
    });

    if (!updated) {
      return NextResponse.json(
        { error: "Unable to update the profile" },
        { status: 500 },
      );
    }

    return NextResponse.json({ employer: updated });
  } catch {
    return NextResponse.json(
      { error: "Unable to update the profile" },
      { status: 500 },
    );
  }
}
