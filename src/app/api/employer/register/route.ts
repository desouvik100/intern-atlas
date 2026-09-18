import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/password";
import {
  createEmployer,
  createSession,
  findEmployerByEmail,
} from "@/lib/employer-db";
import { attachSessionCookie } from "@/lib/employer-session";

export const runtime = "edge";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email = text(body.email).toLowerCase();
    const password = typeof body.password === "string" ? body.password : "";
    const name = text(body.name);
    const companyName = text(body.companyName);
    const phone = text(body.phone);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid work email address" },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 },
      );
    }

    if (!name || !companyName) {
      return NextResponse.json(
        { error: "Your name and company name are required" },
        { status: 400 },
      );
    }

    if (await findEmployerByEmail(email)) {
      return NextResponse.json(
        { error: "An account already exists for this email" },
        { status: 409 },
      );
    }

    const employer = await createEmployer({
      email,
      passwordHash: await hashPassword(password),
      name,
      companyName,
      phone,
    });

    const session = await createSession(employer.id);

    return attachSessionCookie(
      NextResponse.json({ employer }, { status: 201 }),
      session.id,
      session.expiresAt,
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to create the employer account" },
      { status: 500 },
    );
  }
}
