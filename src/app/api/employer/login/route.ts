import { NextResponse } from "next/server";
import { verifyPassword } from "@/lib/password";
import {
  createSession,
  findEmployerById,
  findEmployerCredentials,
} from "@/lib/employer-db";
import { attachSessionCookie } from "@/lib/employer-session";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const credentials = await findEmployerCredentials(email);

    // Same response for an unknown email and a wrong password, so the endpoint
    // cannot be used to discover which emails are registered.
    if (
      !credentials ||
      !(await verifyPassword(password, credentials.passwordHash))
    ) {
      return NextResponse.json(
        { error: "Incorrect email or password" },
        { status: 401 },
      );
    }

    const employer = await findEmployerById(credentials.id);

    if (!employer) {
      return NextResponse.json(
        { error: "Incorrect email or password" },
        { status: 401 },
      );
    }

    const session = await createSession(employer.id);

    return attachSessionCookie(
      NextResponse.json({ employer }),
      session.id,
      session.expiresAt,
    );
  } catch {
    return NextResponse.json({ error: "Unable to sign in" }, { status: 500 });
  }
}
