import { revokeSession, clearSessionCookie, getSessionTokenFromCookies } from "@internatlas/backend/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get("cookie");
    const sessionToken = getSessionTokenFromCookies(cookieHeader);

    if (sessionToken) {
      await revokeSession(sessionToken);
    }

    return Response.json(
      { message: "Logged out successfully" },
      {
        status: 200,
        headers: {
          "Set-Cookie": clearSessionCookie(),
        },
      }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json(
      { error: "Unable to log out. Please try again." },
      { status: 500 }
    );
  }
}
