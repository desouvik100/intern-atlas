import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import {
  findEmployerBySession,
  type Employer,
} from "@/lib/employer-db";

export const SESSION_COOKIE = "intern_atlas_employer";

export async function getCurrentEmployer(): Promise<Employer | null> {
  const store = await cookies();
  const sessionId = store.get(SESSION_COOKIE)?.value;

  if (!sessionId) {
    return null;
  }

  try {
    return await findEmployerBySession(sessionId);
  } catch {
    return null;
  }
}

export async function readSessionId(): Promise<string | null> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value ?? null;
}

export function attachSessionCookie(
  response: NextResponse,
  sessionId: string,
  expiresAt: Date,
): NextResponse {
  response.cookies.set({
    name: SESSION_COOKIE,
    value: sessionId,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });

  return response;
}

export function clearSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set({
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
