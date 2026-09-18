import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/employer-db";
import { clearSessionCookie, readSessionId } from "@/lib/employer-session";

export const runtime = "edge";

export async function POST() {
  const sessionId = await readSessionId();

  if (sessionId) {
    try {
      await deleteSession(sessionId);
    } catch {
      // The cookie is cleared either way.
    }
  }

  return clearSessionCookie(NextResponse.json({ ok: true }));
}
